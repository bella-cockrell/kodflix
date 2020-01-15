//Components
import React from 'react';
export default function Movie(props) {
    return (
      <div>
        <div className='item'>
          <img src={props.image} alt={`${props.title} poster`} />
          <div className='overlay'>
            <h3>{props.title}</h3>
            <p>Rating: {props.rating}</p>
          </div>
        </div>
      </div>
    )
  }