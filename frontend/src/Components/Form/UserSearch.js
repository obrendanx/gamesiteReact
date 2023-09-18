import React, { useContext, useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import MediumHeader from '../Headers/MediumHeader';

function UserSearch() {
  const [finduser, setFindUser] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const environment = process.env.NODE_ENV || 'development';
  const userUrl = config[environment].user;

  async function fetchUsers() {
    try {
      const res = await axios.get(`${userUrl}/fetchusers`);
      setUsers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (finduser.trim() === '') {
      // If the input is empty, clear the suggestions
      setFilteredUsers([]);
      return;
    }

    const filtered = users.filter(user =>
      user.username.toLowerCase().includes(finduser.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [finduser, users]);

  return (
    <div>
      <input
        className={css`
          height: 35px;
          margin:10px 2.5% 10px 2.5%;
          padding: 10px;
          border: 0;
          border-radius: 10px;
          box-shadow: 0 0 15px 4px #000;
          font-size: 1em;
          font-weight: normal;
          font-family: Roboto, sans-serif;
          color: #f44034;
          transition: 1s;
          outline: none;
          width: 95%;
        `}
        type="text"
        value={finduser}
        onChange={e => setFindUser(e.target.value)}
        placeholder="Search for a user: "
      />
      {filteredUsers.length > 0 && finduser.trim() !== '' && ( // Check if finduser is not empty
        <div>
          <MediumHeader text="Suggestions: "/>
          <ul className={css`
            list-style:none;
            width:90%;
            margin-left:5%;
          `}>
            {filteredUsers.map(user => (
              <li 
                key={user.id}
                className={css`
                    height:35px;
                    width:100%;
                    border-radius:15px;
                    margin-bottom:10px;
                    background: #1C1C1C;
                    &:hover{
                        opacity:0.8;
                    }
                    a {
                        display:block;
                        height:35px;
                        width:100%;
                        margin-left:10px;
                        color:#fff;
                        line-height:35px;
                    }
                `}
              >
                <Link to={`/user/${user.username}`}>{user.username}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserSearch;