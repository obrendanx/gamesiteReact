import React from 'react';
import Nav from './Components/Navigation/Nav';
import Home from './Pages/Home';
import Fourms from './Pages/Fourms';
import Footer from './Components/Information/Footer';
import Logout from './Components/User/Auth/Logout';
import Register from './Components/User/Auth/Register';
import Profile from './Components/User/Profile/Profile';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/App.scss';
import AnimeSearch from './Pages/AnimeSearch';
//import InProgress from './Pages/InProgress';
import Login from './Components/User/Auth/Login';
import Admin from './Components/Admin/Admin';
import ProfilePage from './Components/User/Profile/ProfilePage';
import { AuthProvider } from './Components/User/Auth/AuthContext';


const App = () => {
  return (
    <div>
      <Router>
      <div className="App">
        <Nav/>
        <AuthProvider>
          <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/fourms" element={<Fourms />}/>
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
        </AuthProvider>
      </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App

