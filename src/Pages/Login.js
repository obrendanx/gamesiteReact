import React, { Component } from 'react'
import LoginForm from '../Components/LoginForm'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userLogged: false,
             userLoggedIn: false,
        }
    }

    callbackFunction = (childData) => {
        this.setState({userLoggedIn: childData})
    }

    handleChangeValue = e => {
        this.setState({
        userLogged: true
        });
        if(this.state.userLoggedIn == true){
            this.props.callback(true);
        }else{
            this.props.callback(false);
        }
    }

    render(props) {
        console.log(this.state.userLoggedIn);
        var loginBtnText = "";
        console.log(this.state.userLogged);

        if (this.props.loggedInStat == false && this.state.userLoggedIn == false){
            loginBtnText = "Login";
        }else{
            loginBtnText = "Logout";
        }

        return (
            <div>
                <h1>Login</h1>
                <LoginForm userLogged={this.state.userLogged} onChangeValue={this.handleChangeValue} parentCallback={this.callbackFunction}/>
            </div>
        )
    }
}

export default Login

