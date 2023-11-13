import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export default function useRemoveUser () {
  const queryClient = useQueryClient();

  return useMutation(
    async (username) => {
      try {
        console.log(username);
        const response = axios.delete(`${userUrl}/deleteuser?username=${username.username}`);
        
        if (response.status === 200) {
          toast.success("User successfully deleted");
          return response.data;
        } 
      } catch (error) {
        if (error.response.status === 404) {
          throw new Error(`User not found`);
        } else {
          console.log(error.response.status);
          throw new Error('An error has occurred');
        } 
      }
    },
    {
      throwOnError: true,
      onMutate: (variables) => {
        const previousData = queryClient.getQueryData('users');
        return previousData;
      },
      onSuccess: () => {
        queryClient.invalidateQueries('users'); 
      },
      onError: (error, variables, previousData) => {
        queryClient.setQueryData('users', previousData);
        toast.error(
          `Error removing user: ${error.message}`
        );
      },
    },
  );
};