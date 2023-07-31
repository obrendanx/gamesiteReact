import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import axios from 'axios';
import { css } from '@emotion/css';
import styled from '@emotion/styled';

const Text = styled.span`
  color:#fff;
  &:after{
    color:#fff;
  }
  &:hover{
    color:#F36644;
  }
`

export default function Followers() {
  const [followers, setFollowers] = useState([]);
  const { user } = useContext(AuthContext); 
  const [error, setError] = useState(null);
  const username = user.username;

  useEffect(() => {
    fetchFollowers();
  }, [username]);

  const fetchFollowers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/app/api/followers/${username}`);
      if (response.status === 200) {
        setFollowers(response.data.followers);
      } else {
        setError('Failed to fetch followers');
      }
    } catch (error) {
      setError('Failed to fetch followers');
    }
  };

  return (
    <div>
      <h1>{followers.length}</h1>
      <h1>Followers</h1>
      <ul className={css`
        list-style:none;
        margin-top:5px;
      `}>
        {followers.map((follower) => (
          <li 
            key={follower._id}
            className={css`
              margin-top:5px;
            `}
          >
            <Link to={`/user/${follower.username}`}><Text>{follower.username}</Text></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

