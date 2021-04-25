import React, { Component } from 'react';
import { getBuildingData } from '../data/buildingData';
import { Floor } from './Floor';
import { Form } from './Form';

export class Building extends Component {
  constructor() {
    super();
    this.state = {
      numOfFloors: 10,
      numOfElevators: 5,
      floorsInBuilding: [],
      elevators: [],
      queue: [],
      rafIds: [],
    }
  }

  componentDidMount() {
    this.updateData(this.state.numOfFloors, this.state.numOfElevators);
  }

  updateData = (numOfFloorsInBuilding, numOfElevators) => {
    const { floorsInBuilding, elevators } = getBuildingData(numOfFloorsInBuilding, numOfElevators);

    this.state.rafIds.forEach(id => {
      cancelAnimationFrame(id)
    });

    this.setState(() => {
      return {
        floorsInBuilding,
        elevators,
        queue: [],
        rafIds: Array.from(Array(numOfElevators).keys()),
      }
    })
  }

  handleSubmit = () => {
    this.updateData(this.state.numOfFloors, this.state.numOfElevators);
  }

  handleChange = (name, value) => {
    
    this.setState(() => {
      return { [name]: +value }
    });
  }

  handleClick = (floor) => {
    const { number: floorNumber, condition } = floor;
    if (condition !== 'call') return;

    this.setState(prevState => {
      return {
      floorsInBuilding: prevState.floorsInBuilding.map(floor => floor.number === floorNumber ?
        { ...floor, condition: 'waiting' }
        : floor),
      queue: [...prevState.queue, floorNumber]
    }}, () => {
      this.handleRequest();
    })

  }
  
  handleRequest = () => {  
    const { queue: stateQueue } = this.state;  
    if (stateQueue.length === 0) return;
    const floorNumber = stateQueue[0];

    const elevatorId = this.findAvailableElevator(floorNumber);
    if (elevatorId === -1) return;

    const copyQueue = [...stateQueue];
    copyQueue.shift();

    this.setState(() => {
      return {
      queue: copyQueue
    }}, () => {
      this.moveElevator(elevatorId, floorNumber);
    })
  }

  findAvailableElevator = (floorNumber) => {
    const closestElevator = 
      this.state.elevators.filter(elevator => !elevator.isOccupied).reduce((acc, elevator) => {
        let newDiff = Math.abs(floorNumber - elevator.inFloor);
        if (newDiff < acc.diff) {
          acc.diff = newDiff;
          acc.elevatorId = elevator.id;
        }

        return acc;
      }, { diff: 1000000000, elevatorId: -1 });

    return closestElevator.elevatorId;
  }

  moveElevator = (elevatorId, floorNumber) => {
    const elevatorToMove = this.state.elevators.find(elevator => elevator.id === elevatorId);

    this.setState(prevState => {
      return {
      elevators: prevState.elevators.map(elevator => elevator.id === elevatorId ?
        { ...elevator, isOccupied: true }
        : elevator)
    }})

    const target = -(floorNumber * 56);
    const startPosition = elevatorToMove.position;
    const isMoveUp = target < startPosition;
    const startTime = Date.now();
    let rafId, currPosition;

    const step = () => {
      let interval = Date.now() - startTime;
      currPosition = isMoveUp ? startPosition - (interval / 25) : startPosition + (interval / 25);

      this.setState(prevState => {
        return {
        elevators: prevState.elevators.map(elevator => elevator.id === elevatorId ?
          { ...elevator, position: currPosition }
          : elevator)
      }})

      const stopCondition = isMoveUp ? currPosition <= target : currPosition >= target;
      if (stopCondition) {

        this.setState(prevState => {
          return {
          elevators: prevState.elevators.map(el => el.id === elevatorId ?
            { ...el, position: target, inFloor: floorNumber, isDoorOpen: true }
            : el)
        }});

        this.setState(prevState => {
          return {
          floorsInBuilding: prevState.floorsInBuilding.map(floor => floor.number === floorNumber ?
            { ...floor, condition: 'arrived' }
            : floor)
        }});

        setTimeout(() => {
          this.setState(prevState => {
            return {
            floorsInBuilding: prevState.floorsInBuilding.map(floor => floor.number === floorNumber ?
              { ...floor, condition: 'call' }
              : floor),
            elevators: prevState.elevators.map(el => el.id === elevatorId ?
              { ...el, isDoorOpen: false, isOccupied: false }
              : el)
          }});

          this.handleRequest();
        }, 2000);

        return;
      }
      rafId = requestAnimationFrame(step);

      this.updateRafIdsState(elevatorId, rafId);
    }
    step();
  }

  updateRafIdsState = (elevatorId, rafId) => {

    let rafIdsCurrState = [...this.state.rafIds];
    rafIdsCurrState[elevatorId] = rafId;
    this.setState(() => {
      return {
        rafIds: rafIdsCurrState
      }
    })
  }

  render() {
    const renderFloors = () => {
      return this.state.floorsInBuilding.map(floor => <Floor
        key={ floor.number }
        floor={ floor }
        elevators={ this.state.elevators }
        handleClick={ this.handleClick }
      />
      )
    }
    
    return (
      <>
        <Form 
          buildingState={ this.state }
          handleChange={ this.handleChange } 
          handleSubmit={ this.handleSubmit }
        />
        <div className="building bold">
          { renderFloors() }
        </div>
      </>
    )
  }
}
