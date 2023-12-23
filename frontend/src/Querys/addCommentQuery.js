import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

export default function useAddComment () {
  const queryClient = useQueryClient();

  return useMutation(
    async (newComment) => {
      try {
        const response = await axios.post(`${postUrl}/addcomment`, newComment);
        
        if (response.status === 200) {
          toast.success("Comment posted");
          return response.data;
        } 
      } catch (error) {
        if (error.response.status === 404) {
          throw new Error(`Fourm input incorrect`);
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
          `Error adding comment: ${error.message}`
        );
      },
    },
  );
};
