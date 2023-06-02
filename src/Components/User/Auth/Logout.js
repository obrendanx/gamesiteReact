 import { useDispatch } from "react-redux";
 import { logout, selectUser } from "../../../app/features/userSlice";
 import { useSelector } from "react-redux";
 import React from 'react';
 import { useNavigate } from 'react-router-dom';
 import styled from '@emotion/styled';
 import LargeHeader from '../../Headers/LargeHeader'
 import Button from '../../Form/Buttons/Button'
 const Logout = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        /*
            if the user clicks logout
            Logout dispatch is called and sets the loggedin state to false
        */
        dispatch(logout());
        navigate("/login");
    };

    const Logout = styled.div`
        height:425px;
        text-align:center;
        padding-top:10%;
    `

     return (
         <Logout>
             {/* <h1>Welcome <span className="user_name">{user.name}</span></h1> */}
             <LargeHeader text={"Welcome " + user.name}></LargeHeader>
             {/* <button className="logout_btn" onClick={(e) => handleLogout(e)}> Logout </button> */}
             <Button handleClick={(e) => handleLogout(e)} text="Logout"></Button>
         </Logout>
     );
 };
 
 export default Logout