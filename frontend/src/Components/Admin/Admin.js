import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Button from '../Form/Buttons/Button';
import LargeHeader from '../Headers/LargeHeader'
import SmallHeader from '../Headers/SmallHeader';
import MediumHeader from '../Headers/MediumHeader'
import config from '../../config';

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
    padding:10px;
  `

  const List = styled.ul`
    list-style:none;
  `

  const ListItem = styled.li`
    padding:5px;
    margin-bottom:5px;
    margin-left:7.5px;
  `

export default function Admin() {
  const [users, setUsers] = useState([]);
  // Set the environment (e.g., 'development' or 'production')
  const environment = process.env.NODE_ENV || 'development';
  // Get the API URL based on the environment
  const userUrl = config[environment].user;
  const postUrl = config[environment].post;
  const animeUrl = config[environment].anime;

  async function fetchUsers() {
    //fetches all users from database
    try {
      const res = await axios.get(`${userUrl}/fetchusers`);
      setUsers(res.data.data)
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    fetchUsers();
  }, []);


  const handleRemoveUser = async (username) => {
    //displays a confirm message to make sure user wants to remove
    //selected user from the datanbase
    if (window.confirm(`Are you sure you want to delete ${username}?`)) {
      try {
        //deletes user from database
        //refetches new list of users to display
        await axios.delete(`${userUrl}/deleteuser?username=${username}`);
        const res = await axios.get(`${userUrl}/fetchusers`);
        setUsers(res.data.data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
        <AdminPanel>
          <LargeHeader text="Admin Panel"/>
          <div>
              <List>
              <MediumHeader text="Current Users: "/>
              {users.map(user => (
                  <ListItem key={user._id}>
                      <SmallHeader xsm text={user.username} />
                      {/* {user.username} */}
                      {/* <RemoveBtn onClick={() => handleRemoveUser(user.username)}>Remove</RemoveBtn> */}
                      <Button sm primary handleClick={() => handleRemoveUser(user.username)} text="Remove" />
                  </ListItem>
                  ))}
              </List>
          </div>
        </AdminPanel>
    </div>
  );
}



