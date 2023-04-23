import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../../app/features/userSlice";
import styled from '@emotion/styled';

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

const LoginForm = styled.form`
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
`

const Header = styled.h1`
    text-align:center;
    padding-top:30px;
    margin-bottom:30px;
`

const Input = styled.input`
    width:70%;
    height:10%;
    margin-top:2%;
    margin-bottom:2%;
    margin-left:15%;
    padding:10px;
    border:0;
    border-radius:10px;
    box-shadow:0 0 15px 4px #000;
    font-size:1em;
    font-weight:normal;
    font-family:Roboto, sans-serif;
    color:#f44034;
    transition:1s;
`

const SubmitBtn = styled.input`
    width:70%;
    height:45px !important;
    border:none;
    line-height:10px;
    margin-top:10px;
    color:#fff !important;
    background:#f44034;
    margin-left:15%;
    border-radius:10px;
    margin-bottom:50px;
    transition:1s;
    &:hover{
        border:solid 1px #1C1C1C;
    }
`

  return (
    <div className="login">

        <LoginForm onSubmit={loginUser} className="login_form">
            <Header>Login Here</Header>
            <Input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" 
                placeholder="Username" 
            />
            <Input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Email" 
            />
            <Input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="Password" 
            />
            <SubmitBtn type="submit" value="Login"/>
        </LoginForm>

    </div>
  )
}

export default Login