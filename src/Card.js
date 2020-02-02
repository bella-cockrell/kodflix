import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <Link to={`/${props.id}`} className='item'>
          <img src={props.image} alt={`${props.title} poster`} />
          <div className='overlay'>
            <h3>{props.title}</h3>
            <p>Rating: {props.rating}</p>
          </div>
        </Link>
    );
  }