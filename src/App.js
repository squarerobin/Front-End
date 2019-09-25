import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/LandingPage/PrivateRoute';

import LandingPage from './components/LandingPage/LandingPage';

//Particles.js
import Particles from 'react-particles-js';
import particles from './components/particles';

//Dashboard
import Dashboard from './components/Dashboard';
import TopBooks from './components/TopBooks';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Particles params={particles}/>
      <Footer className="footer"></Footer>
      <Switch>
        <PrivateRoute exact path='/home' component={Dashboard} />
        <Route exact path = '/' component={LandingPage} />
      </Switch>
      {/* <Route exact path ='/' component={Dashboard} /> */}
      <Route path ='/topbooks' component={TopBooks} />
    </div>
  );
}

export default App;
