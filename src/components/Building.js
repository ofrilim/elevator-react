import React, { Component } from 'react';
import Floor from './Floor';
import { getBuildingData } from '../data/buildingData';

class Building extends Component {
  constructor() {
    super();
    this.state = {
      numOfFloors: 10,
      numOfElevators: 5,
      floorsInBuilding: [],
      elevators: [],
      queue: []
    }
  }

  componentDidMount() {
    this.updateData(this.state.numOfFloors, this.state.numOfElevators);
  }

  updateData = (numOfFloorsInBuilding, numOfElevators) => {
    const { floorsInBuilding, elevators } = getBuildingData(numOfFloorsInBuilding, numOfElevators);

    this.setState({
      floorsInBuilding,
      elevators
    });
  }

  handleSubmit = () => {
    this.updateData(this.state.numOfFloors, this.state.numOfElevators);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (value < 1) return;

    this.setState(() => {
      return { [name]: +value }
    });
  }

  handleClick = async (floor) => {
    const { number: floorNumber, condition } = floor;
    if (condition !== 'call') return;

    const queueCopy = [...this.state.queue];
    queueCopy.push(floorNumber);

    await this.setState(prevState => ({
      floorsInBuilding: prevState.floorsInBuilding.map(floor => floor.number === floorNumber ?
        { ...floor, condition: 'waiting' }
        : floor),
      queue: [...queueCopy]
    }))

    this.handleRequest();
  }
  
  handleRequest = async () => {  
    const { queue: stateQueue } = this.state;  
    if (stateQueue.length === 0) return;
    const floorNumber = stateQueue[0];

    const elevatorId = this.findAvailableElevator(floorNumber);
    if (elevatorId === -1) return;

    const copyQueue = [...stateQueue];
    copyQueue.shift();
    await this.setState(() => ({
      queue: [...copyQueue]
    }))

    this.moveElevator(elevatorId, floorNumber);
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

    this.setState(prevState => ({
      elevators: prevState.elevators.map(elevator => elevator.id === elevatorId ?
        { ...elevator, isOccupied: true }
        : elevator)
    }))

    const target = -(floorNumber * 56);
    const startPosition = elevatorToMove.position;
    const isMoveUp = target < startPosition;
    const startTime = Date.now();
    let rafId, currPosition;

    const step = () => {
      let interval = Date.now() - startTime;
      currPosition = isMoveUp ? startPosition - (interval / 20) : startPosition + (interval / 20);

      this.setState(prevState => ({
        elevators: prevState.elevators.map(elevator => elevator.id === elevatorId ?
          { ...elevator, position: currPosition }
          : elevator)
      }))

      const stopCondition = isMoveUp ? currPosition <= target : currPosition >= target;
      if (stopCondition) {

        this.setState(prevState => ({
          elevators: prevState.elevators.map(el => el.id === elevatorId ?
            { ...el, position: target, inFloor: floorNumber, isDoorOpen: true }
            : el)
        }));

        this.setState(prevState => ({
          floorsInBuilding: prevState.floorsInBuilding.map(floor => floor.number === floorNumber ?
            { ...floor, condition: 'arrived' }
            : floor)
        }));

        setTimeout(() => {
          this.setState(prevState => ({
            floorsInBuilding: prevState.floorsInBuilding.map(floor => floor.number === floorNumber ?
              { ...floor, condition: 'call' }
              : floor),
            elevators: prevState.elevators.map(el => el.id === elevatorId ?
              { ...el, isDoorOpen: false, isOccupied: false }
              : el)
          }));

          this.handleRequest();
        }, 2000);

        cancelAnimationFrame(rafId);
        return;
      }
      rafId = requestAnimationFrame(step);
    }
    step();
  }

  render() {
    return (
      <>
        <div className="form">
          <label className="capitalize">
            floors:
            <input type="number" name="numOfFloors" value={this.state.numOfFloors} onChange={this.handleChange} />
          </label>
          <label className="capitalize">
            elevators:
            <input type="number" name="numOfElevators" value={this.state.numOfElevators} onChange={this.handleChange} />
          </label>
          <button type="submit" onClick={this.handleSubmit}>Update</button>
        </div>
        <div className="building bold">
          {this.state.floorsInBuilding.map(floor => <Floor
            key={floor.number}
            floor={floor}
            elevators={this.state.elevators}
            handleClick={this.handleClick}
          />
          )}
        </div>
      </>
    )
  }
}

export default Building;
