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
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import { useSelector } from "react-redux";
import { selectUser } from "./app/features/userSlice";
import AnimeSearch from './Pages/AnimeSearch';
import InProgress from './Pages/InProgress';
import Login from './Components/user/Auth/Login';
import Admin from './Components/Admin/Admin';
import ProfilePage from './Components/user/ProfilePage';


const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <Router>
      <div className="App">
        <Nav/>
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/fourms" element={<InProgress />}/>
        <Route path="/anime" element={<AnimeSearch />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/profilepage" element={<ProfilePage />}/>
        {/* {user ? <Route path="/logout" component={Logout}/> : <Route path="/login" component={Loogin}/>} */}
        </Routes>
        {/*{user ? <Logout /> : <FetchUser />}*/}
      </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App

