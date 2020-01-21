import React from 'react';
import { Link } from 'react-router-dom'; 

import starWars from './images/star-wars-skywalker.jpg';
import jojoRabbit from './images/jojo-rabbit.jpg';
import theWitcher from './images/the-witcher.jpg';
import dracula from './images/dracula.jpg';
import goodbyeLenin from './images/goodbye-lenin.jpg';
import littleMiss from './images/little-miss.jpg';

import Card from './Card';

export default function Gallery() {
    return (
      <Link to='/films'>
        <div className='container'>
          <Card image={starWars} title='Star Wars: The Rise of the Skywalker' rating='4' />
          <Card image={jojoRabbit} title='Jojo Rabbit' rating='9' />
          <Card image={theWitcher} title='The Witcher' rating='6' />
        </div>
        <div className='container'>
          <Card image={dracula} title='Dracula' rating='3' />
          <Card image={goodbyeLenin} title='Goodbye Lenin' rating='7' />
          <Card image={littleMiss} title='Little Miss Sunshine' rating='7' />
        </div>
      </Link>
    );
  }