import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './components/Films';
import ContactUs from './components/Contactus';
import NotFound from './components/NotFound';
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
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/not-found' component={NotFound} />
          <Route path='/:filmId' component={Films} />
          <Route exact path='/contactus' component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
