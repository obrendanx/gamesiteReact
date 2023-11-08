import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from "react-toastify";

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export default function useFollowUser () {
  const queryClient = useQueryClient();

  return useMutation(
    async (user) => {
      console.log(user._id);
      console.log(user.username);
      console.log(user.currentUserUsername);
      try {
        const currentUserUsername = user.currentUserUsername;
        const response = axios.post(`${userUrl}/follow/${user.username}`, { username: currentUserUsername });

        toast.success(`You are now following ` + user.username);
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
        queryClient.invalidateQueries('following'); 
      },
      onError: (error) => {
        toast.error(
          `Error following user: ${error.message}`,
        );
      },
    },
  );
};