import React from 'react';
import Nav from './Components/navigation/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Fourms from './Pages/Fourms';
import Footer from './Components/information/Footer';
import Banner from './Components/information/Banner';
import Logout from './Components/user/Auth/Logout';
import Register from './Components/user/Auth/Register';
import Profile from './Components/user/Profile';
import FetchUser from './Components/user/FetchUser';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/App.scss';
import { useSelector } from "react-redux";
import { selectUser } from "./app/features/userSlice";
import AnimeSearch from './Pages/AnimeSearch';
import InProgress from './Pages/InProgress';


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
        <Route path="/fourms" component={InProgress}/>
        <Route path="/anime" component={AnimeSearch}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        {/* {user ? <Route path="/logout" component={Logout}/> : <Route path="/login" component={Loogin}/>} */}
        {user ? <Logout /> : <FetchUser />}
        </Switch>
      </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App

