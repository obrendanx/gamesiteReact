import React from 'react'

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
            <button onClick={props.loggedIn}>{loginBtnText}</button>
        </div>
    )
}

export default Login
