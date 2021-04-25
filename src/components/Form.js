import React from 'react';

export const Form = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.handleSubmit();
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    if (value < 1) return;

    props.handleChange(name, value);
  }
  return (
    <form className="form" onSubmit={ handleSubmit }>
      <label className="capitalize" htmlFor="numOfFloors">
        floors:
        <input type="number" name="numOfFloors" id="numOfFloors"
          value={ props.buildingState.numOfFloors } 
          onChange={ handleChange } 
        />
      </label>
      <label className="capitalize" htmlFor="numOfElevators">
        elevators:
        <input type="number" name="numOfElevators" id="numOfElevators"
          value={ props.buildingState.numOfElevators } 
          onChange={ handleChange } 
        />
      </label>
      <button type="submit">Update</button>
    </form>
  )
}
