import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../app/features/userSlice";
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

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
            username, email, password,
        }),
    })
   
    //Stores the fetch response in the 'data' variable
    const data = await response.json()

    if(data.user){
        /*
            If data matches:
            - Set a unique token for the user in there local storage
            - Dispatch the login state to Redux state to use
            in other components
        */
        localStorage.setItem('token', data.user)
        console.log('Login successful') 
        dispatch(login({
            //Lets the application know user is logged in
            loggedIn: true,
            //Sends the username and email to redux state
            name:username,
            email:email
        }));
        navigate('/home');
    }else{
        //if incorrect notify the user
        alert("Please check your username and password")
    }
    console.log(data)
}

  return (
    <div className="login">

        <form onSubmit={loginUser} className="login_form">
            <h1>Login Here</h1>
            <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text" 
                placeholder="Username" 
            />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Email" 
            />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" 
                placeholder="Password" 
            />
            <input type="submit" value="Login" className="submit_btn"/>
        </form>

    </div>
  )
}

export default Login