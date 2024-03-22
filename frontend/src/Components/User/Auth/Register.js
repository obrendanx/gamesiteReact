import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import Input from '../../Form/Input'
import Submit from '../../Form/Submit'
import Validator from '../../Form/Validator'
import PacmanLoader from "react-spinners/PacmanLoader"
import useSignup from '../../../Querys/signupQuery'

const Header = styled.h1`
  text-align:center;
  padding-top:30px;
  margin-bottom:30px;
`

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: "10px"
};

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false);
    const addSignupMutation = useSignup();
  
    const onSubmit = async (event) => {
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
      if (!password || password.length < 8 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/.test(password)) {
        error.password = 'Password must be at least 8 characters and contain uppercase, lowercase, numbers, and symbols'
        hasError = true
      }
  
      // Validate email
      if (!email || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        error.email = 'Email must be a valid email address'
        hasError = true
      }
  
      // Validate full name
      if (!fullName || !/^[a-zA-Z ]+$/.test(fullName)) {
        error.fullName = "Full name must contain only letters and spaces";
        hasError = true;
      }
  
      if (hasError) {
        setError(error)
        return
      }
   
        const registered = {
          fullName,
          username,
          email,
          password
        };

        await addSignupMutation.mutateAsync(registered);
    };


    return (
      <div>
        <div
          className={css`
            height:calc(100% + 150px);
            width:35%;
            background:#1C1C1C;
            margin:auto;
            margin-top:50px;
            margin-bottom:150px;
            padding-top:25px;
            padding-bottom:25px;
            border-radius:10px;
            font-size:1em;
            font-weight:normal;
            font-family:Roboto, sans-serif;
            color:#fff;
            @media (max-width: 770px){
              width:100%;
            }
          `}
        >
          <Header>Register</Header>
          <div className="form-div">
            <form onSubmit={onSubmit}>
              <Input
                type="text"
                placeholder="Full Name: "
                value={fullName}
                onValueChange={setFullName}
                left="15%"
                />
              {error.fullName && <Validator width="70%" left="15%" text={error.fullName}/>}

              <Input
                type="text"
                placeholder="Username: "
                value={username}
                onValueChange={setUsername}
                left="15%"
                />
              {error.username && <Validator width="70%" left="15%" text={error.username}/>}

              <Input
                type="text"
                placeholder="Email: "
                value={email}
                onValueChange={setEmail}
                left="15%"
                />
              {error.email && <Validator width="70%" left="15%" text={error.email}/>}

              <Input
                type="password"
                placeholder="Password: "
                value={password}
                onValueChange={setPassword}
                left="15%"
                />
              {error.password && <Validator width="70%" left="15%" text={error.password}/>}

              {loading ? ( 
                <PacmanLoader
                  loading={loading}
                  size={15}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                  color="#F44034"
                  cssOverride={override}
                />
              ) : (
                <Submit left="15%" />
              )}
            </form>
          </div>
        </div>
      </div>
        )
    }

export default Register
  
  
  