import React from 'react';
//Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Films from './Films';
import ContactUs from './Contactus';
//Style
import './App.css';
//Component
import Gallery from './Gallery';
//Eye
import EyeSVG from './eyeAnimation';
import './eyeAnimation.css';

//App
function App() {
  return (
    <Router>
        <div className='App'>
          <h1>Kodflix</h1>
          <EyeSVG />
          <Route exact path='/' component={Gallery} />
          <Route path='/:films' component={Films} />
          <Route exact path='/contactus' component={ContactUs} />
        </div>
    </Router>
  );
}

export default App;