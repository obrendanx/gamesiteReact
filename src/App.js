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

    this.state = {
      loggedInStat: false,
      userLogIn: false,
    }

    this.updatedLoginStat = this.updatedLoginStat.bind(this);
};

updatedLoginStat(){
  if(this.state.userLogIn == true){
    this.setState({
      loggedInStat: !this.state.loggedInStat,
    })
  }
}

callbackFunction = (childData) => {
  this.setState({userLogIn: childData})
}

render(){
  console.log(this.state.loggedInStat);
    return (
      <Router>
      <div className="App">
        <Nav message={this.state.loginMessage} loginStat={this.state.loggedInStat} updatedMessage={this.loginMessageUpdate}/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/fourms" component={Fourms}/>
        <Route 
          path="/login" 
          render={(props) => (
            <Login {...props} loggedIn={this.updatedLoginStat} loggedInStat={this.state.loggedInStat} callback={this.callbackFunction}/>
          )}
        />
        </Switch>
      </div>
      </Router>
    )
  }
}
export default App;
