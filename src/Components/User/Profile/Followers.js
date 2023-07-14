import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

export default function Followers({ username }) {
  const { user } = useContext(AuthContext);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/app/api/followers/${user.username}`);
      const data = await response.json();
      if (response.ok) {
        setFollowers(data.followers);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>{followers.length}</h1>
      <h1>Followers</h1>
      <ul>
        {followers.map((follower) => (
          <li key={follower._id}>
            <Link to={`/userprofile/${follower.username}`}>{follower.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}