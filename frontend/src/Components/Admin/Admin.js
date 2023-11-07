import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Button from '../Form/Buttons/Button';
import LargeHeader from '../Headers/LargeHeader'
import SmallHeader from '../Headers/SmallHeader';
import MediumHeader from '../Headers/MediumHeader'
import config from '../../config';
import useRemoveUser from '../../Querys/deleteUserQuery';
import { toast } from 'react-toastify';
import { AuthContext } from '../User/Auth/AuthContext';
import { useShowUsers } from '../../Querys/showUsersQuery';
import PacmanLoader from "react-spinners/PacmanLoader"

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
  //const [users, setUsers] = useState([]);
  const removeUserMutation = useRemoveUser();
  const { data: users, refetch, isLoading } = useShowUsers();
  const { user } = useContext(AuthContext);

  const handleRemoveUser = async (username) => {
    //displays a confirm message to make sure user wants to remove
    //selected user from the datanbase
    if(user.isGlobalAdmin) {
      if (window.confirm(`Are you sure you want to delete ${username}?`)) {
        await removeUserMutation.mutateAsync({
          username: username,
        });
      }
    } else {
      toast.error('You do not have permission to delete a user');
    }
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "10px"
  };

  if(isLoading) {
    return(
      <PacmanLoader
        loading={isLoading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#F44034"
        cssOverride={override}
      />
    );
  }

  console.log(users);

  return (
    <div>
        <AdminPanel>
          <LargeHeader text="Admin Panel"/>
          <div>
              <List>
              <MediumHeader text="Current Users: "/>
              {users.data.map(user => (
                  <ListItem key={user._id}>
                      <SmallHeader xsm text={user.username} />
                      {/* {user.username} */}
                      {/* <RemoveBtn onClick={() => handleRemoveUser(user.username)}>Remove</RemoveBtn> */}
                      <Button sm primary handleClick={() => handleRemoveUser(user.username)} text="Remove" />
                      {console.log(user.username)}
                  </ListItem>
                  ))}
              </List>
          </div>
        </AdminPanel>
    </div>
  );
}



