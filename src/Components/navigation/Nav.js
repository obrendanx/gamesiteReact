import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.jpg'
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import axios from 'axios';

function Nav() {
    const user = useSelector(selectUser);
    const [isGlobal, setIsGlobal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                if(user){
                    const username = user.name;
                    const res = await axios.get(`http://localhost:5000/app/is-admin?username=${username}`);
                    setIsGlobal(res.data.isGlobal);
                    console.log(isGlobal);
                }else{
                    setIsGlobal(false);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [user]);
    console.log(isGlobal);
        var loginMessage = "";
        var loginBtnText = "";
        var registerLink = "";
        var logincheck = "";

    return (
        <div>
            <div>
                <nav className="navbar">
                    <ul className="navbar-ul">
                        
                        <div className="nav-left">
                            {/* Main Navigation Links  */}
                            <Link to='/'>
                                <li><img src={logo} alt="Logo" /></li>
                            </Link>
                            <Link to='/'>
                                <li> Home </li>
                            </Link>
                            <Link to='/fourms'>
                                <li> Fourms </li>
                            </Link>
                            <Link to='/anime'>
                                <li> Anime </li>
                            </Link>
                            <Link to='/profilepage'>
                                <li> Profile Page </li>
                            </Link>
                            <Link to='/admin'>
                                <li> {isGlobal ? "Admin" : ""} </li>
                            </Link>
                        </div>

                        <div className="nav-right">
                            {/* 
                            Login / Register Links
                            Determines text and location of links
                            if the user is logged in display a logout button and there profile
                            otherwise always show register and login as the option
                            */}
                            <Link to={user ? registerLink = "profile" : registerLink = "/register"} class="user-name">
                                <li>{user ? loginMessage = user.name : loginMessage = "Register"}</li>
                            </Link>
                            <Link to={user ? logincheck = "/logout" : logincheck = "/login"}>
                                <li>{user ? loginBtnText = "Logout" : loginBtnText = "Login"}</li>
                            </Link>
                        </div>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav



