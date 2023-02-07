 import { useDispatch } from "react-redux";
 import { logout, selectUser } from "../../../app/features/userSlice";
 import { useSelector } from "react-redux";
 import React from 'react';
 import { useNavigate } from 'react-router-dom';
 
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

     return (
         <div className="logout_box">
             <h1>Welcome <span className="user_name">{user.name}</span></h1>
             <button className="logout_btn" onClick={(e) => handleLogout(e)}> Logout </button>
         </div>
     );
 };
 
 export default Logout