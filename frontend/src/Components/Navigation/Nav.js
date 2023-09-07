import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.jpg'
import axios from 'axios';
import styled from '@emotion/styled';
import { AuthContext } from '../User/Auth/AuthContext';
import config from '../../config';

const Navbar = styled.nav`
    height:7vh;
    width:100%;
    background:#1C1C1C;
    @media (max-width: 770px){
        height:12vh;
    }
`
const NavigationList = styled.ul`
    width:100%;
    height:100%;
    list-style:none;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    @media (max-width: 770px){
        flex-direction:column-reverse !important;
    }
`
const NavLink = styled.a`
    display:block;
    height:7vh;
    text-decoration:none;
    line-height:7vh;
    margin:0px 5px 0px 5px;
    font-size:0.8em;
    font-weight:normal;
    font-family:Roboto, sans-serif;
    color:#fff;
    transition:0.5s;
    &:hover{
        color:#F44336;
    }
`

const NavLinkRegister = styled.a`
    display:block;
    height:7vh;
    text-decoration:none;
    line-height:7vh;
    margin:0px 5px 0px 5px;
    font-size:0.8em;
    font-weight:normal;
    font-family:Roboto, sans-serif;
    color:#fff;
    transition:0.5s;
    &:hover{
        text-decoration:underlined;
    }
`

const NavLeft = styled.div`
    height:100%;
    width:60%;
    align-self:flex-start;
    display:flex;
    flex-direction:row;
    flew-wrap:nowrap;
    @media (max-width: 770px){
        height:7vh;
        width:100%;
    }
`
const Logo = styled.img`
    height:7vh;
`
const NavListItem = styled.li`
    margin-left:10px;
`

const NavRight = styled.div`
    height:100%;
    width:40%;
    align-self:flex-end;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    padding-right:10px;
    @media (max-width: 770px){
        height:5vh;
        width:100%;
        background:#F44336;
        a{
            height:5vh;
            line-height:5vh;
        }
    }
`

function Nav() {
    const { user, isLoggedIn } = useContext(AuthContext);
    const [isGlobal, setIsGlobal] = useState(false);
    // Set the environment (e.g., 'development' or 'production')
    const environment = process.env.NODE_ENV || 'development';
    // Get the API URL based on the environment
    const userUrl = config[environment].user;
    const postUrl = config[environment].post;
    const animeUrl = config[environment].anime;
    
    useEffect(() => {
        async function fetchData() {
            try {
                if (Object.keys(user).length > 0) {
                const username = user.username;
                const res = await axios.get(`${userUrl}/isadmin?username=${username}`);
                setIsGlobal(res.data.isGlobal);
                } else {
                setIsGlobal(false);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [user, isGlobal, isLoggedIn]);

    return (
        <div>
            <div>
                <Navbar className="navbar">
                    <NavigationList className="navbar-ul">
                        
                        <NavLeft>
                            {/* Main Navigation Links  */}
                            <Link to='/'>
                                <NavListItem><Logo src={logo} alt="Logo" /></NavListItem>
                            </Link>
                            <Link to='/'>
                                <NavListItem><NavLink> Home </NavLink></NavListItem>
                            </Link>
                            <Link to='/fourms'>
                                <NavListItem><NavLink> Fourms </NavLink></NavListItem>
                            </Link>
                            <Link to='/anime'>
                                <NavListItem><NavLink> Anime </NavLink></NavListItem>
                            </Link>
                            {isGlobal ? (
                                <Link to='/admin'>
                                    <NavListItem>
                                            <NavLink> Admin </NavLink> 
                                    </NavListItem>
                                </Link>
                            ) : null }
                        </NavLeft>

                        <NavRight>
                            {/* Conditional rendering of login/register links */}
                            {isLoggedIn ? (
                            <>
                                <Link to="/profile" className="user-name">
                                <NavListItem>
                                    <NavLinkRegister>{user.username}</NavLinkRegister>
                                </NavListItem>
                                </Link>
                                <Link to="/logout">
                                <NavListItem>
                                    <NavLink>Logout</NavLink>
                                </NavListItem>
                                </Link>
                            </>
                            ) : (
                            <>
                                <Link to="/register" className="user-name">
                                <NavListItem>
                                    <NavLinkRegister>Register</NavLinkRegister>
                                </NavListItem>
                                </Link>
                                <Link to="/login">
                                <NavListItem>
                                    <NavLink>Login</NavLink>
                                </NavListItem>
                                </Link>
                            </>
                            )}
                        </NavRight>

                    </NavigationList>
                </Navbar>
            </div>
        </div>
    )
}

export default Nav



