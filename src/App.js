import React from 'react';
import Home from './home'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import BorderDetails from './borderdetails'

//import covid19ImpactEstimator from '../../src/estimator'

function App() {

//alert(  covid19ImpactEstimator(3))
  return (
    <div className="App">
     <Switch>
        <Route path="/" exact component={(Home)} />
        <Route path="/borders" exact component={BorderDetails} />

      </Switch>
    </div>
  );
}

export default App;
