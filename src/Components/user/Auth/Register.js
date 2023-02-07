import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
  
    const onSubmit = (event) => {
      event.preventDefault()
  
      // Validate input fields
      setError({})
      let hasError = false
      const error = {}
  
      // Validate username
      if (!username || username.length < 6 || username.length > 14 || !/^[a-zA-Z0-9]+$/.test(username)) {
        error.username = 'Username must be between 6 and 14 characters and contain only letters and numbers'
        hasError = true
      }
  
      // Validate password
      if (!password || password.length < 8 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        error.password = 'Password must be at least 8 characters and contain uppercase, lowercase, numbers, and symbols'
        hasError = true
      }
  
      // Validate email
      if (!email || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        error.email = 'Email must be a valid email address'
        hasError = true
      }
  
      // Validate full name
      if (!fullName || !/^[a-zA-Z]+$/.test(fullName)) {
        error.fullName = 'Full name must contain only letters'
        hasError = true
      }
  
      if (hasError) {
        setError(error)
        return
      }
  
      // Submit form
      const registered = {
        fullName,
        username,
        email,
        password
      }
  
      axios.post('http://localhost:5000/app/signup', registered)
        .then(response => console.log(response.data))
  
      window.location = './Login'
    }
  
    return (
      <div>
        <div className="login_form">
          <h1>Register</h1>
          <div className="form-div">
            <form onSubmit={onSubmit}>
              <input type='text'
                placeholder='Full Name'
                onChange={(event) => setFullName(event.target.value)}
                value={fullName}
              />
              {error.fullName && <p className="error">{error.fullName}</p>}
  
              <input type='text'
                placeholder='Username'
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
              {error.username && <p className="error">{error.username}</p>}

              <input type='text'
              placeholder='Email'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              />
              {error.email && <p className="error">{error.email}</p>}

              <input type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              />
              {error.password && <p className="error">{error.password}</p>}

              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
        )
    }

export default Register
  
  
  