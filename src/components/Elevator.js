import React from 'react';
import { ReactComponent as ElevatorImg } from '../media/elevator.svg';

const ELEVATOR_COLORS = {
  occupied: '#ed484d',
  arrived: '#5bcd88',
  available: '#000000',
};

const Elevator = (props) => {
  const getConditionColor = () => {
    if (props.elevator.isDoorOpen) return ELEVATOR_COLORS.arrived;
    else {
      return props.elevator.isOccupied ? ELEVATOR_COLORS.occupied : ELEVATOR_COLORS.available;
    }
  }

  return (
    <div className="elevator" style={{ top: props.elevator.position }}>
      <ElevatorImg fill={ getConditionColor() } />
    </div>
  )
}

export default Elevator;
