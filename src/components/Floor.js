import React from 'react';
import audioFile from '../media/elevator_sound.mp3';
import Elevator from './Elevator';
import Button from './Button';

const Floor = (props) => {

  const handleClick = () => {
    props.handleClick(props.floor);
  }

  const playSound = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  const setFloorNumber = () => {
    const floorNumber = props.floor.number;
    switch (floorNumber) {
      case 0:
        return `ground floor`;
      case 1:
        return `${floorNumber}st`;
      case 2:
        return `${floorNumber}nd`;
      case 3:
        return `${floorNumber}rd`;
      default:
        return `${floorNumber}th`;
    }
  }

  const setCellsAndElevators = () => {
    return (
      props.elevators.map((elevator, i) => {
        if (props.floor.number === 0) return <div className="cell" key={i}>{<Elevator elevator={elevator} />}</div>
        return <div className="cell" key={i}></div>
      }
      )
    )
  }

  return (
    <div className="Floor flex align-center justify-center">
      <h5 className="capitalize">{ setFloorNumber() }</h5>
      <div className="grid-container">{ setCellsAndElevators() }</div>
      <Button handleClick={ handleClick } condition={ props.floor.condition } />
      <audio className="audio-element">
        <source src={ audioFile }></source>
      </audio>
      {props.floor.condition === 'arrived' ? playSound() : ''}
    </div>
  )
}

export default Floor;