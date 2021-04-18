import React from 'react';

export default function Button(props) {
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
