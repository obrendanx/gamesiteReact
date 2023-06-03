import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/features/userSlice';
import TextArea from '../Form/TextArea';
import Input from '../Form/Input';

const Label = styled.label`
  height: 10px;
  padding: 5px;
  color: #fff;
  margin-right: 5px;
`;

const Submit = styled.input`
  border: none;
  height: 20px;
  width: 70px;
  margin-left: 2.5px;
  color: #f44336;
  border-radius: 50px;
  font-weight: 900;
`;

function FourmInput() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      setPostedBy(user.name);
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPost = {
        subject,
        message,
        postedBy,
      };

      const response = await axios.post('http://localhost:5000/app/fourmspost', newPost, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      // Reset form fields
      setSubject('');
      setMessage('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={css`
          height: 270px;
          width: 85%;
          background: #1c1c1c;
          padding: 20px;
          margin: auto;
          font-family: Roboto, sans-serif;
          border-radius: 10px;
          margin-top: 20px;
          margin-bottom: 20px;
        `}
      >
        <Label htmlFor="subject">Subject:</Label>
        <br />
        <input
          className={css`
            height: 35px;
            width: 60%;
            margin: 2.5px;
            padding: 2.5px;
            border-radius: 5px;
            color: #1c1c1c;
            border: solid 5px #f44336;
          `}
          type="text"
          id="subject"
          name="subject"
          onChange={(event) => setSubject(event.target.value)}
          value={subject}
        />
        <br />

        <Label htmlFor="message">Message:</Label>
        <br />
        <textarea
          className={css`
            height: 125px;
            width: 100%;
            margin: 2.5px 2.5px 7.5px 2.5px;
            padding: 2.5px;
            border-radius: 5px;
            border: solid 5px #f44336;
            color: #1c1c1c;
          `}
          type="text"
          id="message"
          name="message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <br />

        <Submit type="submit" value="Post" />
      </form>
    </div>
  );
}

export default FourmInput;