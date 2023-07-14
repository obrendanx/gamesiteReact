import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import axios from 'axios';

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
      <ul>
        {followers.map((follower) => (
          <li key={follower._id}>
            <Link to={`/user/${follower.username}`}>{follower.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

