import React from 'react';
import starWars from './star-wars-skywalker.jpg';
import jojoRabbit from './jojo-rabbit.jpg';
import theWitcher from './the-witcher.jpg';
import dracula from './dracula.jpg';
import goodbyeLenin from './goodbye-lenin.jpg';
import littleMiss from './little-miss.jpg';


import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src= {starWars} alt= "Star Wars: The Rise of the Skywalker" />
        <img src= {jojoRabbit} alt= "Jojo Rabbit" />
        <img src= {theWitcher} alt= "The Witcher" />
        <img src= {dracula} alt= "Dracula" />
        <img src= {goodbyeLenin} alt= "Goodbye Lenin" />
        <img src= {littleMiss} alt= "Little Miss Sunshine" />
      </div>
    </div>
  );
}

export default App;
