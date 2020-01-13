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
      <h3>Rating: {props.rating}</h3>
    </div>
  )
}

//App
function App() {
  return (
    <div className='App'>
      <body>

      <div className='container'>
        <div className='item'>
        <Movie title='Star Wars: The Rise of the Skywalker' rating='4'/>
        <img src= {starWars} alt= "Star Wars: The Rise of the Skywalker" />
        </div>
        <div className='item'>
        <Movie title='Jojo Rabbit' rating='9'/>
        <img src= {jojoRabbit} alt= "Jojo Rabbit" />
        </div>
        <div className='item'>
        <Movie title='The Witcher' rating='6'/>
        <img src= {theWitcher} alt= "The Witcher" />
        </div>
        <div className='item'>
        <Movie title='Dracula' rating='3'/>
        <img src= {dracula} alt= "Dracula" />
        </div>
        <div className='item'>
        <Movie title='Goodbye Lenin' rating='7'/>
        <img src= {goodbyeLenin} alt= "Goodbye Lenin" />
        </div>
        <div className='item'>
        <Movie title='Little Miss Sunshine' rating='7'/>
        <img src= {littleMiss} alt= "Little Miss Sunshine" />
        </div>
      </div>

      </body>
    </div>
  );
}

export default App;
