import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userLogged: false
        }
    }

    handleChangeValue = e => this.setState({userLogged: true});

    render(props) {
        var loginBtnText = "";
        console.log(this.state.userLogged);

        if (this.props.loggedInStat == false){
            loginBtnText = "Login";
        }else{
            loginBtnText = "Logout";
        }

        return (
            <div>
                <h1>Login</h1>
                <LoginForm userLogged={this.state.userLogged} onChangeValue={this.handleChangeValue}/>
                <button onClick={this.props.loggedIn}>{loginBtnText}</button>
            </div>
        )
    }
}

export default Login

