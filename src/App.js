import React, { Component } from 'react';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Fourms from './Pages/Fourms';
import Login from './Pages/Login';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/App.scss';

class App extends Component {
  constructor(props){
    super(props);

};

render(){
    return (
      <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/fourms" component={Fourms}/>
        <Route path="/login" component={Login}/>
        </Switch>
      </div>
      </Router>
    )
  }
}
export default App;
