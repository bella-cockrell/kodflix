import React from 'react';
//Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Films from './components/Films';
import ContactUs from './components/Contactus';
//Style
import './App.css';
//Component
import Gallery from './components/Gallery';



//App
function App() {
  return (
    <Router>
        <div className='App'>
          <h1>Eyeflix</h1>
          <Route exact path='/' component={Gallery} />
          <Route path='/:filmId' component={Films} />
          <Route exact path='/contactus' component={ContactUs} />
        </div>
    </Router>
  );
}

export default App;
