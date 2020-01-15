import React from 'react';
import {
  BroswerRouter as Router,
  Swtich,
  Route,
  Link
} from 'react-router-dom';

//Images
import starWars from './images/star-wars-skywalker.jpg';
import jojoRabbit from './images/jojo-rabbit.jpg';
import theWitcher from './images/the-witcher.jpg';
import dracula from './images/dracula.jpg';
import goodbyeLenin from './images/goodbye-lenin.jpg';
import littleMiss from './images/little-miss.jpg';
//Style
import './App.css';
//Component
import Movie from './Movie';

//App
function App() {
  return (
    <div className='App'>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <body>
        <h1> Kodflix </h1>
        <div className='container'>
          <Movie image={starWars} title='Star Wars: The Rise of the Skywalker' rating='4' />
          <Movie image={jojoRabbit} title='Jojo Rabbit' rating='9' />
          <Movie image={theWitcher} title='The Witcher' rating='6' />
        </div>
        <div className='container'>
          <Movie image={dracula} title='Dracula' rating='3' />
          <Movie image={goodbyeLenin} title='Goodbye Lenin' rating='7' />
          <Movie image={littleMiss} title='Little Miss Sunshine' rating='7' />
        </div>
      </body>
    </div>
      );
    }
    
    export default App;
