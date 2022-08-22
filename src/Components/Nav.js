import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.jpg'
import { useSelector } from "react-redux";
import { selectUser } from "../app/features/userSlice";

function Nav() {
    const user = useSelector(selectUser);

        var loginMessage = "";
        var loginBtnText = "";
        var registerLink = "";

        // // checks to see if loginstat is true and changes login message depeding on the answer
        // if (user == false){
        //     loginMessage = "Welcome";
        //     loginBtnText = "Login";
        // } else{
        //     loginMessage = "LOGGED_IN";
        //     loginBtnText = "Logout";
        // }

    return (
        <div>
            <div>
                <nav className="navbar">
                    <ul className="navbar-ul">
                        
                        <div className="nav-left">
                            <Link to='/'>
                                <li><img src={logo} alt="Logo" /></li>
                            </Link>
                            <Link to='/'>
                                <li> Home </li>
                            </Link>
                            <Link to='/about'>
                                <li> About </li>
                            </Link>
                            <Link to='/fourms'>
                                <li> Fourms </li>
                            </Link>
                        </div>

                        <div className="nav-right">
                            <Link to={user ? registerLink = "profile" : registerLink = "/register"} class="user-name">
                                <li>{user ? loginMessage = user.name : loginMessage = "Register"}</li>
                            </Link>
                            <Link to="/login">
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



