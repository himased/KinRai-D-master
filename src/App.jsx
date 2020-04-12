import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import MealList from "./components/MealList"

export default class App extends Component {

  render() {
    return (
      <Router>
       
        <br/>
      <div className="app">
        <Route path="/" exact component={MealList}/>
        <Route exact path="/KinRai-D-master/" render={ props => (
          <div>
          <Login/>
          </div>
        )} />
        
        <Route path="/KainRai-D-master/register" component={Register} />        
      </div>
 
      </Router>
    )
  }
}

