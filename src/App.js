import React from 'react';
//Images
import starWars from './star-wars-skywalker.jpg';
import jojoRabbit from './jojo-rabbit.jpg';
import theWitcher from './the-witcher.jpg';
import dracula from './dracula.jpg';
import goodbyeLenin from './goodbye-lenin.jpg';
import littleMiss from './little-miss.jpg';
//Style
import './App.css';

//Components
function Movie (props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.rating}</h3>
    </div>
  )
}

//App
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Movie title='Start Wars: The Rise of the Skywalker' rating='4'/>
        <img src= {starWars} alt= "Star Wars: The Rise of the Skywalker" />
        <Movie title='Jojo Rabbit' rating='9'/>
        <img src= {jojoRabbit} alt= "Jojo Rabbit" />
        <Movie title='The Witcher' rating='6'/>
        <img src= {theWitcher} alt= "The Witcher" />
        <Movie title='Dracula' rating='3'/>
        <img src= {dracula} alt= "Dracula" />
        <Movie title='Goodbye Lenin' rating='7'/>
        <img src= {goodbyeLenin} alt= "Goodbye Lenin" />
        <Movie title='Little Miss Sunshine' rating='7'/>
        <img src= {littleMiss} alt= "Little Miss Sunshine" />
      </div>
    </div>
  );
}

export default App;
