 import React, { useContext } from 'react';
 import { useNavigate } from 'react-router-dom';
 import styled from '@emotion/styled';
 import LargeHeader from '../../Headers/LargeHeader'
 import Button from '../../Form/Buttons/Button'
 import { AuthContext } from "./AuthContext";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

 const LogoutDiv = styled.div`
        height:425px;
        text-align:center;
        padding-top:10%;
        padding-right:20px;
        padding-left:20px;
    `

 const Logout = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout, user } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        /*
            if the user clicks logout
            Logout dispatch is called and sets the loggedin state to false
        */
        if(isLoggedIn) {
            logout();
            navigate('/Home');
        } else {
            toast.error('You are already logged out!');
        }
        navigate("/login");
    };

     return (
         <LogoutDiv>
             {/* <h1>Welcome <span className="user_name">{user.name}</span></h1> */}
             <LargeHeader text={"Welcome " + user.username}></LargeHeader>
             {/* <button className="logout_btn" onClick={(e) => handleLogout(e)}> Logout </button> */}
             <Button handleClick={(e) => handleLogout(e)} text="Logout"></Button>
             <ToastContainer />
         </LogoutDiv>
     );
 };
 
 export default Logout