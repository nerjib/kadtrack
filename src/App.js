import React from 'react';
import Home from './home'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import BorderDetails from './borderdetails'
import Passengers from './passengers'
//import covid19ImpactEstimator from '../../src/estimator'
import PassengerDetails from './passengerdetails'
import Update from './edit'
import Verified from './verified'
import Given from './given'

function App() {

//alert(  covid19ImpactEstimator(3))
  return (
    <div className="App">
     <Switch>
        <Route path="/" exact component={(Home)} />
        <Route path="/borders" exact component={BorderDetails} />
        <Route path="/passengers" exact component={(Passengers)} />
        <Route path="/passenger/:id" exact component={(PassengerDetails)} />
        <Route path="/update" exact component={(Update)} />
        <Route path="/verified1" exact component={(Verified)} />
        <Route path="/given" exact component={(Given)} />

      </Switch>
    </div>
  );
}

export default App;
