import React from 'react';

export const Button = (props) => {
  
  return (
    <>
      <button 
        className={`capitalize border-radius bold ${props.condition}`} 
        onClick={props.handleClick}>
          {props.condition}
      </button>
    </>
  )
}
