import React from 'react';
//Images
import starWars from './images/star-wars-skywalker.jpg';
import jojoRabbit from './images/jojo-rabbit.jpg';
import theWitcher from './images/the-witcher.jpg';
import dracula from './images/dracula.jpg';
import goodbyeLenin from './images/goodbye-lenin.jpg';
import littleMiss from './images/little-miss.jpg';
//Style
import './App.css';

//Components
function Movie(props) {
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
    <meta content='width=device-width, initial-scale=1' name='viewport' />
      <body>
        <div className='container'>
          <div className='item'>
          <img src={starWars} alt="Star Wars: The Rise of the Skywalker" />
            <div className='overlay'>
              <Movie title='Star Wars: The Rise of the Skywalker' 
              rating='4' />
            </div>              
          </div>
          <div className='item'>
          <img src={jojoRabbit} alt="Jojo Rabbit" />
            <Movie title='Jojo Rabbit' 
            rating='9' />
          </div>
          <div className='item'>
          <img src={theWitcher} alt="The Witcher" />
            <Movie title='The Witcher' 
            rating='6' />
          </div>
        </div>
        <div className='container'>
          <div className='item'>
          <img src={dracula} alt="Dracula" />
            <Movie title='Dracula' 
            rating='3' />
          </div>
          <div className='item'>
          <img src={goodbyeLenin} alt="Goodbye Lenin" />
            <Movie title='Goodbye Lenin' 
            rating='7' />
          </div>
          <div className='item'>
          <img src={littleMiss} alt="Little Miss Sunshine" />
            <Movie title='Little Miss Sunshine' 
            rating='7' />
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
