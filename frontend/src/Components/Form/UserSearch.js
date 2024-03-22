import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import MediumHeader from '../Headers/MediumHeader';
import { useShowUsers } from '../../Querys/showUsersQuery';

function UserSearch() {
  const [finduser, setFindUser] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { data: users } = useShowUsers();

  useEffect(() => {
    if (finduser.trim() === '') {
      // If the input is empty, clear the suggestions
      setFilteredUsers([]);
      return;
    }

    const filtered = users.data.filter(user =>
      user.username.toLowerCase().includes(finduser.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [finduser, users]);

  return (
    <div>
      <input
        className={css`
          height: 35px;
          margin-bottom:10px;
          padding: 10px;
          border: 0;
          font-size: 1em;
          font-weight: normal;
          font-family: Roboto, sans-serif;
          color: #f44034;
          transition: 1s;
          outline: none;
          width: 100%;
        `}
        type="text"
        value={finduser}
        onChange={e => setFindUser(e.target.value)}
        placeholder="Search for a user: "
      />
      {filteredUsers.length > 0 && finduser.trim() !== '' && ( // Check if finduser is not empty
        <div className={css`
          margin-bottom:25px;
        `}>
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