import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Films from './frontend/Components/Pages/FilmPage';
import ContactUs from './frontend/Components/Contactus';
import NotFound from './frontend/Components/NotFound';
//Style
import './App.css';
//Component
import Gallery from './frontend/Components/Gallery';



//App
function App() {
  return (

    <Router>
      <div className='App'>
        <h1>Eyeflix</h1>
        <br/>
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
