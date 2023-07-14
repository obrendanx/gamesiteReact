import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

function User() {
  const { user: currentUser, isLoggedIn } = useContext(AuthContext);
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      fetchUserProfile();
      fetchFollowers();
    }
  }, [username]);

  console.log('hello');

  const isCurrentUserFollowing = followers.includes(currentUser.username);
  

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`http://localhost:5000/app/api/user/${username}`);
      const data = await response.json();
      if (response.ok) {
        setUser(data);
      } else {
        setError('Failed to fetch user profile');
      }
    } catch (error) {
      setError('Failed to fetch user profile');
    }
  };

  const fetchFollowers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/app/api/followers/${username}`);
      const data = await response.json();
      if (response.ok) {
        const followerUsernames = data.followers.map((follower) => follower.username);
        setFollowers(followerUsernames);
      } else {
        setError('Failed to fetch followers');
      }
    } catch (error) {
      setError('Failed to fetch followers');
    }
  };

  const handleFollowToggle = async () => {
    if (isLoggedIn) {
      if (isFollowing) {
        await unfollowUser();
      } else {
        await followUser();
      }
    } else {
      navigate('/login');
    }
  };

  const followUser = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await fetch(`http://localhost:5000/app/api/follow/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
        },
        body: JSON.stringify({ username: currentUser.username }),
      });

      if (response.ok) {
        setSuccessMessage('You are now following this user.');
        setIsFollowing(true);
      } else {
        setError('Failed to follow user');
      }
    } catch (error) {
      setError('Failed to follow user');
    }

    setLoading(false);
  };

  const unfollowUser = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    try {
      const response = await fetch(`http://localhost:5000/app/api/unfollow/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
        },
        body: JSON.stringify({ username: currentUser.username }),
      });

      if (response.ok) {
        setSuccessMessage('You have unfollowed this user.');
        setIsFollowing(false);
      } else {
        setError('Failed to unfollow user');
      }
    } catch (error) {
      setError('Failed to unfollow user');
    }

    setLoading(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.username}</h1>
      <h2>{user.fullName}</h2>
      <h3>Followers:</h3>
      <ul>
        {followers.map((follower) => (
          <li key={follower._id}>
            <Link to={`/user/${follower}`}>{follower}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleFollowToggle} disabled={loading}>
        {loading ? 'Loading...' : isCurrentUserFollowing ? 'Unfollow' : 'Follow'}
      </button>
      {error && <div>Error: {error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}

export default User;