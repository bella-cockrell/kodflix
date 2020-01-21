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
          <Route path='/' exact component={Gallery} />
          <Route path='/films' exact component={Films} />
          <Route path='/contactus' exact component={ContactUs} />
        </div>
    </Router>
  );
}


export default App;
