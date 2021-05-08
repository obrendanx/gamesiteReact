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
        this.updatePassword = this.updatePassword.bind(this);
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
        //alert('A username was submitted: ' + this.state.username);
        //alert('A password was submitted: ' + this.state.password);
        // if(this.state.username == users[0][0] && this.state.password == users[0][1]){
        //     alert('Logged in' + this.state.username + this.state.password);
        // }
        if(this.state.users.find(user => user.username === this.state.username && user.password === this.state.password)){
            console.log("match");
            alert("Logged In");
            this.setState({
                userLoggedIn: true
            });
        }else{
            alert("username or password is incorrect");
        }
        console.log(this.state.userLoggedIn);
        event.preventDefault();
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label name="login">
                    Username:
                    <input type="text" name="username" value={this.state.username} onChange={this.updateUsername}/>

                    Password:
                    <input type="password" name="password" value={this.state.password} onChange={this.updatePassword}/>
                    <input type="submit" name="Submit" value="Submit" />
                </label>
            </form>
            </div>
        )
    }
}

export default LoginForm
