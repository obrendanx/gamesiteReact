import React, { Component } from 'react'
import axios from 'axios'

export class Register extends Component {
    constructor(){
        super()
        this.state = {
            //sets default state to all register fields
            fullName:'',
            username:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //sets the state to the value of each register field 
    //to corresponding state name
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    //Actions performed when user clicks register
    onSubmit(event){
        event.preventDefault()

        //sets register input fieldd variables using state values
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        //pushes register fields to mongodb
        axios.post('http://localhost:5000/app/signup', registered)
            .then(response => console.log(response.data))

            //After registering changes to login page
            window.location = './Login'
    }

  render() {
    return (
      <div>
          <div className="login_form">
            <h1>Register</h1>
              <div className="form-div">
                  <form onSubmit={this.onSubmit}>
                      <input type='text'
                      placeholder='Full Name'
                      onChange={this.changeFullName}
                      value={this.state.fullName}
                      />

                      <input type='text'
                      placeholder='Username'
                      onChange={this.changeUsername}
                      value={this.state.username}
                      />

                      <input type='text'
                      placeholder='Email'
                      onChange={this.changeEmail}
                      value={this.state.email}
                      />

                      <input type="password"
                      placeholder="Password"
                      onChange={this.changePassword}
                      value={this.state.password}
                      />

                      <input type='submit' value='Submit'/>
                    </form>
              </div>
          </div>
      </div>
    )
  }
}

export default Register