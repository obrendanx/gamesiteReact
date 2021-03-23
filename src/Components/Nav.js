import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.jpg'

function Nav() {
    return (
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
                            <li>Username</li>
                        </Link>
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    </div>

                </ul>
            </nav>
        </div>
    )
}

export default Nav
