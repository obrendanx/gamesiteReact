// import React, { Component, useState } from 'react';
// import Nav from './Components/Nav';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Fourms from './Pages/Fourms';
// import Login from './Pages/Login';
// import Footer from './Components/Footer';
// import Loogin from './Components/Loogin';
// import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './scss/App.scss';


// class App extends Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       loggedInStat: false,
//       userLogIn: false,
//     }

//     this.updatedLoginStat = this.updatedLoginStat.bind(this);
// };

// updatedLoginStat(){
//   if(this.state.userLogIn == true){
//     this.setState({
//       loggedInStat: !this.state.loggedInStat,
//     })
//   }
// }

// callbackFunction = (childData) => {
//   this.setState({userLogIn: childData})
// }

// render(){
//   const user = useSelector(selectUser);

//   console.log(this.state.loggedInStat);
//     return (
      // <Router>
      // <div className="App">
      //   <Nav message={this.state.loginMessage} loginStat={this.state.loggedInStat} updatedMessage={this.loginMessageUpdate}/>
      //   <Switch>
      //   <Route path="/" exact component={Home}/>
      //   <Route path="/about" component={About}/>
      //   <Route path="/fourms" component={Fourms}/>
      //   {/* <Route 
      //     path="/login" 
      //     render={(props) => (
      //       <Login {...props} loggedIn={this.updatedLoginStat} loggedInStat={this.state.loggedInStat} callback={this.callbackFunction}/>
      //     )}
      //   /> */}
      //   <Route path="/login" component={Loogin}/>
      //   </Switch>
      //   <Footer/>
      // </div>
      // </Router>
//     )
//   }
// }
// export default App;

// message={this.state.loginMessage} loginStat={this.state.loggedInStat} updatedMessage={this.loginMessageUpdate}
/* <Route 
          path="/login" 
          render={(props) => (
            <Login {...props} loggedIn={this.updatedLoginStat} loggedInStat={this.state.loggedInStat} callback={this.callbackFunction}/>
          )}
        /> */

import React, { Component, useState } from 'react';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Fourms from './Pages/Fourms';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Loogin from './Components/Loogin';
import Logout from './Components/Logout';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/App.scss';
import { useSelector } from "react-redux";
import { selectUser } from "./app/features/userSlice";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/fourms" component={Fourms}/>
        {user ? <Route path="/logout" component={Logout}/> : <Route path="/login" component={Loogin}/>}
        </Switch>
        <Footer/>
      </div>
      </Router>
    </div>
  )
}

export default App

