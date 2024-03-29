import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export default function useUpdateUser () {
  const queryClient = useQueryClient();

  return useMutation(
    async (details) => {
      try {
        console.log(details.username);
        console.log(details.updatedFields);
        const response = await axios.put(`${userUrl}/updateuserdetails/${details.username}`, details.updatedFields);
        
        toast.success("User updated successfully");
        return response.data;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          throw new Error(`User not found`);
        } else if (error.response) {
          console.log(error.response.status);
          throw new Error('An error has occurred');
        } else {
          // Handle other types of errors (without a response object)
          console.error('An unexpected error occurred:', error);
          throw new Error('An unexpected error has occurred');
        }
      }
    },
    {
      throwOnError: true,
      onMutate: (variables) => {
        const previousData = queryClient.getQueryData('updatedUser');
        return previousData;
      },
      onSuccess: () => {
        queryClient.invalidateQueries('updatedUser'); 
      },
      onError: (error, variables, previousData) => {
        queryClient.setQueryData('updatedUser', previousData);
        toast.error(
          `Error updating user: ${error.message}`
        );
      },
    },
  );
};
