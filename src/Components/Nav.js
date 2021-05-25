import React, { Component, useEffect } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.jpg'

class Nav extends Component {
    constructor(props) {
        super(props)
        
    }
    

    render() {
        var loginMessage = "";
        var loginBtnText = "";

        // checks to see if loginstat is true and changes login message depeding on the answer
        if (this.props.loginStat == false){
            loginMessage = "NOT_LOGGED_IN";
            loginBtnText = "Login";
        } else{
            loginMessage = "LOGGED_IN";
            loginBtnText = "Logout";
        }

        console.log(this.props);

        return (
            <div>
                <div>
            <nav className="navbar">
                <ul className="navbar-ul">
                    
                    <div className="nav-left">
                        <Link to='/'>
                            <li><img src={logo} alt="Logo image" /></li>
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
                        <Link to="/profile/id" class="user-name">
                            <li>{loginMessage}</li>
                        </Link>
                        <Link to="/login">
                            <li>{loginBtnText}</li>
                        </Link>
                    </div>

                </ul>
            </nav>
        </div>
            </div>
        )
    }
}

export default Nav

