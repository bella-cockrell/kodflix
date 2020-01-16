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
        <h1> Kodflix </h1>
        <Gallery />
    </div>
  );
}

export default App;
