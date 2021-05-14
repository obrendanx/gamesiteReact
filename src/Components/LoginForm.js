import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userLoggedIn: false,
            users: [
                {
                    username: "test",
                    password: "test"
                },
                {
                    username: "test2",
                    password: "test2"
                }
            ]
        };
    
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      updateUsername(event) {
        this.setState({
            username: event.target.value
        });
      }

      updatePassword(event) {
        this.setState({
            password: event.target.value
        });
      }
    
      handleSubmit(event) {
        // alert('A username was submitted: ' + this.state.username);
        // alert('A password was submitted: ' + this.state.password);
        // if(this.state.username == users[0][0] && this.state.password == users[0][1]){
        //     alert('Logged in' + this.state.username + this.state.password);
        // }
        if(this.state.users.find(user => user.username === this.state.username && user.password === this.state.password)){
            console.log("logged in")
            
            this.props.parentCallback(true);
        }else{
            alert("username or password is incorrect");
            this.props.parentCallback(false);
            this.setState({
                userLoggedIn: false
              });
        }
        event.preventDefault();
      }

      logoutUser = () =>{
          this.setState({
            userLoggedIn: false
          });
          this.props.parentCallback(false);
      }

      loginUser = () =>{
        this.setState({
          userLoggedIn: true
        });
        this.props.parentCallback(true);
    }

    clearSubmit = () =>{
        this.setState({
            username: "",
            password: ""
        });
    }

    render() {
        console.log(this.state.userLoggedIn);
        var loginButMessage = "";
        if(this.state.userLoggedIn == true){
            loginButMessage = "Logout"
        }else{
            loginButMessage = "Login"
        }

        const loggedIn = this.state.userLoggedIn;
        let button;
        let welcome;
        if(loggedIn == true){
            button = <input type="submit" name="Submit" value={loginButMessage} onClick={this.logoutUser} class="login_btn"/>
            welcome = <h2> Welcome </h2>
        }else{
            button = <input type="submit" name="Submit" value={loginButMessage} onClick={this.loginUser} class="login_btn"/>
            welcome = <h2> Sign In </h2>
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit} class="login_form">
                {welcome}
                <label name="login">
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.updateUsername}/>

                    Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.updatePassword}/>
                    {button}
                </label>
            </form>
            </div>
        )
    }
}

export default LoginForm
