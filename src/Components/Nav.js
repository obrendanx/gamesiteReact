import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.jpg'

class Nav extends Component {
    constructor(props) {
        super(props)
    
    }
    

    render() {
        var loginMessage = "";

        if (this.props.loginStat == false){
            loginMessage = this.props.message;
        } else{
            loginMessage = this.props.updateMessage;
        }

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
                            <li>Login</li>
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

