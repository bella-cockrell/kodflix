import React from 'react';
import {
  BroswerRouter as Router,
  Swtich,
  Route,
  Link
} from 'react-router-dom';
//Style
import './App.css';
//Component
import Gallery from './Gallery';

//App
function App() {
  return (
    <div className='App'>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <body>
        <h1> Kodflix </h1>
        <Gallery />
      </body>
    </div>
  );
}

export default App;
