import React from 'react';
export default function Movie(props) {
    return ( 
      /*Solved the problem of the image resize -- 
      needed to remove the parent div here */
        <div className='item'>
          <img src={props.image} alt={`${props.title} poster`} />
          <div className='overlay'>
            <h3>{props.title}</h3>
            <p>Rating: {props.rating}</p>
          </div>
        </div>
    )
  }