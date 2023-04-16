import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

export default function Admin() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    //fetches all users from database
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
    //displays a confirm message to make sure user wants to remove
    //selected user from the datanbase
    if (window.confirm(`Are you sure you want to delete ${username}?`)) {
      try {
        //deletes user from database
        //refetches new list of users to display
        await axios.delete(`http://localhost:5000/app/api/users/${username}`);
        const res = await axios.get('http://localhost:5000/app/api/users');
        setUsers(res.data.data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const AdminPanel = styled.div`
    background:#1C1C1C;
    font-size:1em;
    font-family:Roboto, sans-serif;
    color:#fff;
    height:100%;
    width:80%;
    margin-left:10%;
    margin-top:20px;
    margin-bottom:20px;
    padding:15px;
  `

  const List = styled.ul`
    list-style:none;
  `

  const ListItem = styled.li`
    padding:5px;
  `

  const RemoveBtn = styled.button`
    margin-left:7.5px;
    border:none;
    padding:5px;
  `

  return (
    <div>
        <AdminPanel>
          <h1>Admin Panel - Welcome User</h1>
          <div>
              <List>
              {users.map(user => (
                  <ListItem key={user._id}>
                      {user.username}
                      <RemoveBtn onClick={() => handleRemoveUser(user.username)}>Remove</RemoveBtn>
                  </ListItem>
                  ))}
              </List>
          </div>
        </AdminPanel>
    </div>
  );
}



