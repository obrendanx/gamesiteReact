import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../app/features/userSlice";

function Login() {
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch();

async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username, email, password,
        }),
    })
   

    const data = await response.json()

    if(data.user){
        localStorage.setItem('token', data.user)
        console.log('Login successful') 
        dispatch(login({
            loggedIn: true,
            name:username,
            email:email
        }));
    }else{
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