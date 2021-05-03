import React from 'react'
import LoginForm from '../Components/LoginForm'

function Login(props) {
    var loginBtnText = "";

    if (props.loggedInStat == false){
        loginBtnText = "Login";
    }else{
        loginBtnText = "Logout";
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
            <button onClick={props.loggedIn}>{loginBtnText}</button>
        </div>
    )
}

export default Login
