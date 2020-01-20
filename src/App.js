import React from 'react';
//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
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

function Films() {
  return (
  <div>
    <div>Welcome to Films</div>
    <Link to='/'>Home</Link>
    <Link to='/films'>Films</Link>
    <Link to='/contactus'>Contact Us</Link>
  </div>
  );
}
function ContactUs() {
  return (
  <div>
    <div>Contact Us</div>
    <Link to='/'>Home</Link>
    <Link to='/films'>Films</Link>
    <Link to='/contactus'>Contact Us</Link>
  </div>
  );
}
export default App;
