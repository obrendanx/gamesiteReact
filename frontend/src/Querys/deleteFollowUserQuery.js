import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from "react-toastify";

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export default function useUnfollowUser () {
  const queryClient = useQueryClient();

  return useMutation(
    async (user) => {
      console.log(user.username);
      console.log(user.currentUserUsername);
      try {
        const currentUserUsername = user.currentUserUsername;
        const response = axios.post(`${userUrl}/unfollow/${user.username}`, { username: currentUserUsername });

        toast.success(`You have unfollowed ` + user.username);
        return await response.data;
      } catch (error) {
        if(error.response.status === 404) {
          throw new Error(`User not found`);
        } else {
          throw new Error('An error has occurred');
        }
      }
    },
    {
      throwOnError: true,
      onSuccess: () => {
        queryClient.invalidateQueries('unfollowing'); 
      },
      onError: (error) => {
        toast.error(
          `Error unfollowing user: ${error.message}`,
        );
      },
    },
  );
};