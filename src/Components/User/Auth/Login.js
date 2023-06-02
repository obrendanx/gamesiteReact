import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../../app/features/userSlice";
import styled from '@emotion/styled';
import { css } from "@emotion/css";
import Input from "../../Form/Input";
import Submit from "../../Form/Submit";

function Login() {
/*
    Stores the username, email and password the user enters 
    into the fields and stores them in the react state
*/
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

//////////////////////////////////////////
//Dispatch possibly unused at the moment//
//////////////////////////////////////////
const dispatch = useDispatch();
const navigate = useNavigate();

async function loginUser(event) {
    event.preventDefault()

    console.log(username);
    console.log(email);
    //Fetching the users login information from mongo
    const response = await fetch('http://localhost:5000/app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            //converts into JSON
            username, email, password
        }),
    })
   
    //Stores the fetch response in the 'data' variable
    const data = await response.json()

    if (data.user) {
        console.log(data.user);
        /*
            If data matches:
            - Set a unique token for the user in there local storage
            - Dispatch the login state to Redux state to use
            in other components
        */
        // Set a cookie to keep the user signed in
        const now = new Date();
        now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days
        document.cookie = `token=${data.user}; expires=${now.toUTCString()}; path='/'`;
        
        console.log('Login successful');
        alert('Login successful');
        dispatch(login({
            //Lets the application know user is logged in
            loggedIn: true,
            //Sends the username and email to redux state
            name: username,
            email: email,
        }));
        navigate('/profile');
    } else {
        //if incorrect notify the user
        alert('Please check your username and password');
    }
    console.log(data)
}

const Header = styled.h1`
    text-align:center;
    padding-top:30px;
    margin-bottom:30px;
`

  return (
    <div className="login">

        <form 
        className={css`
            height:calc(100% + 150px);
            width:35%;
            background:#1C1C1C;
            margin:auto;
            margin-top:50px;
            margin-bottom:150px;
            padding-top:25px;
            padding-bottom:25px;
            border-radius:10px;
            font-size:1em;
            font-weight:normal;
            font-family:Roboto, sans-serif;
            color:#fff;
            @media (max-width:770px){
                width:100%;
            }  
        `}
        onSubmit={loginUser}
        >
            <Header>Login Here</Header>

            <Input
                type="text"
                placeholder="Username: "
                value={username}
                onValueChange={setUsername}
                left="15%"
                />
            
            <Input
                type="text"
                placeholder="Email: "
                value={email}
                onValueChange={setEmail}
                left="15%"
                />
    
            <Input
                type="password"
                placeholder="Password: "
                value={password}
                onValueChange={setPassword}
                left="15%"
                />

            <Submit left="15%"></Submit>
        </form>

    </div>
  )
}

export default Login