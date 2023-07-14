import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
import axios from 'axios';

export default function Following() {
  const [following, setFollowing] = useState([]);
  const { user } = useContext(AuthContext); 
  const username = user.username;

  useEffect(() => {
    fetchFollowing();
  }, [username]);

  const fetchFollowing = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/app/api/following/${username}`);
      if (response.status === 200) {
        setFollowing(response.data.following);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>{following.length}</h1>
      <h1>Following</h1>
      <ul>
        {following.map((follower) => (
          <li key={follower._id}>
            <Link to={`/user/${follower.username}`}>{follower.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}