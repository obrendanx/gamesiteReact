import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.jpg'
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";
import axios from 'axios';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

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
        var loginMessage = "";
        var loginBtnText = "";
        var registerLink = "";
        var logincheck = "";

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
                            <Link to='/admin'>
                                <NavListItem><a className={
                                    css`
                                        ${isGlobal ? 'display:block;' : 'display:none;'}
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
                                }> {isGlobal ? "Admin" : ""} </a></NavListItem>
                            </Link>
                        </NavLeft>

                        <NavRight>
                            {/* 
                            Login / Register Links
                            Determines text and location of links
                            if the user is logged in display a logout button and there profile
                            otherwise always show register and login as the option
                            */}
                            <Link to={user ? registerLink = "profile" : registerLink = "/register"} class="user-name">
                                <NavListItem><NavLinkRegister>{user ? loginMessage = user.name : loginMessage = "Register"}</NavLinkRegister></NavListItem>
                            </Link>
                            <Link to={user ? logincheck = "/logout" : logincheck = "/login"}>
                                <NavListItem><NavLink>{user ? loginBtnText = "Logout" : loginBtnText = "Login"}</NavLink></NavListItem>
                            </Link>
                        </NavRight>

                    </NavigationList>
                </Navbar>
            </div>
        </div>
    )
}

export default Nav



