import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from "@emotion/css";
import Input from "../../Form/Input";
import Submit from "../../Form/Submit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./AuthContext";
import PacmanLoader from "react-spinners/PacmanLoader";

const Header = styled.h1`
    text-align: center;
    padding-top: 30px;
    margin-bottom: 30px;
  `;

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: "10px"
};

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    setLoading(true);

    try {
      console.log(username);
     const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username, password, email
        }),
      }) 

      const data = await response.json();

      if (data.user) {
        const token = data.user.token;
        const now = new Date();
        now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days
        document.cookie = `token=${token}; expires=${now.toUTCString()}; path=/`;

        login(token, {
          username,
          email,
        });
        navigate('/profile');
      } else {
        toast.error('Please check your username and password');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
      <form
        className={css`
          height: calc(100% + 150px);
          width: 35%;
          background: #1c1c1c;
          margin: auto;
          margin-top: 50px;
          margin-bottom: 150px;
          padding-top: 25px;
          padding-bottom: 25px;
          border-radius: 10px;
          font-size: 1em;
          font-weight: normal;
          font-family: Roboto, sans-serif;
          color: #fff;
          @media (max-width: 770px) {
            width: 100%;
          }
        `}
        onSubmit={loginUser}
      >
        <Header>Login Here</Header>

        <Input
          type="text"
          placeholder="Username: "
          value={username}
          onValueChange={setUsername}
          left="15%"
        />

        <Input
          type="text"
          placeholder="Email: "
          value={email}
          onValueChange={setEmail}
          left="15%"
        />

        <Input
          type="password"
          placeholder="Password: "
          value={password}
          onValueChange={setPassword}
          left="15%"
        />

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
        <ToastContainer />
      </form>
    </div>
  );
}

export default Login;