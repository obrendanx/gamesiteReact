import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

export default function useAddPost () {
  const queryClient = useQueryClient();

  return useMutation(
    async (newPost) => {
      try {
        const response = await axios.post(`${postUrl}/fourmspost`, newPost);
        
        if (response.status === 200) {
          toast.success("Posted successfully");
          return response.data;
        } 
      } catch (error) {
        if (error.response.status === 404) {
          throw new Error(`Fourm input missing`);
        } else {
          console.log(error.response.status);
          throw new Error('An error has occurred');
        } 
      }
    },
    {
      throwOnError: true,
      onSuccess: () => {
        queryClient.invalidateQueries('posts'); 
      },
      onError: (error) => {
        toast.error(
          `Error adding post: ${error.message}`
        );
      },
    },
  );
};
