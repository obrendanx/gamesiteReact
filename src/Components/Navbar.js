import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Fourms from "../Pages/Fourms";
import Login from "../Pages/Login";
import companyLogo from "../images/logo.jpg";


class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
};

render(){
    return (
      <Router>
      <div className="Navbar">
        <nav>
          <div className="nav-left">
            <li className="logo-link">
              <Link to="/"><img src={companyLogo} alt="logo image here" className="logo"/></Link>
            </li>
            <ul className="main-nav-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/fourms">Fourms</Link>
              </li>
            </ul>
          </div>
          <ul className="acc-ul">
            <li>
              <h3>{this.props.loggedInStatus}</h3>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/fetchapi">fetch</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="router-switch">
      <Switch>
        <Route
        path="/"
        exact
        render={props => (
          <Home {...props} loggedInStatus={this.state.loggedInStatus} />
        )}
        />
        <Route path="/about" component={About}/>
        <Route path="/fourms" component={Fourms}/>
        <Route path="/login" component={Login}/>
      </Switch>
      </div>
      </Router>
    )
  }
}
export default Navbar;
