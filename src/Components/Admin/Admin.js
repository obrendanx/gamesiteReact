import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const res = await axios.get('http://localhost:5000/app/api/users');
      setUsers(res.data.data)
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);

  const handleRemoveUser = async (username) => {
    if (window.confirm(`Are you sure you want to delete ${username}?`)) {
      try {
        await axios.delete(`http://localhost:5000/app/api/users/${username}`);
        const res = await axios.get('http://localhost:5000/app/api/users');
        setUsers(res.data.data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
        <h1>Admin Panel - Welcome User</h1>
        <div className='siteUsers'>
            <ul>
            {users.map(user => (
                <li key={user._id}>
                    {user.username}
                    <button onClick={() => handleRemoveUser(user.username)}>Remove</button>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}



