import React, { Component } from 'react'
import axios from 'axios'

export class Register extends Component {
    constructor(){
        super()
        this.state = {
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

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:5000/app/signup', registered)
            .then(response => console.log(response.data))

            window.location = './Login'
    }

  render() {
    return (
      <div>
          <div className="container">
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