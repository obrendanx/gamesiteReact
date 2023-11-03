import React from 'react';
import Nav from './Components/Navigation/Nav';
import Home from './Pages/Home';
import Fourms from './Pages/Fourms';
import Footer from './Components/Information/Footer';
import Logout from './Components/User/Auth/Logout';
import Register from './Components/User/Auth/Register';
import Profile from './Pages/Profile';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './scss/App.scss';
import AnimeSearch from './Pages/AnimeSearch';
import Login from './Components/User/Auth/Login';
import Admin from './Components/Admin/Admin';
import { AuthProvider } from './Components/User/Auth/AuthContext';
import User from './Components/User/Profile/User'
import UserSearch from './Components/Form/UserSearch';
import { ToastContainer } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Router>
        <div className="App">
          <AuthProvider>
            <UserSearch/>
            <Nav />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/fourms" element={<Fourms />} />
              <Route path="/anime" element={<AnimeSearch />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/admin" element={<Admin />} />
              {/* New route to display UserProfile */}
              <Route path="/user/:username" element={<User />} />
            </Routes>
            <ToastContainer/>
          </AuthProvider>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

window.appContext = {
  AuthProvider,
};

export default App;
