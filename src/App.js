import React from 'react';
//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import Films from './Films';
import ContactUs from './Contactus';
//Style
import './App.css';
//Component
import Gallery from './Gallery';

//App
function App() {
  return (
    <Router>
        <div className='App'>
          <h1>Kodflix</h1>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/:films' component={Films} />
          <Route exact path='/contactus' component={ContactUs} />
        </div>
    </Router>
  );
}

export default App;
