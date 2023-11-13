import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

export default function useRemovePost () {
  const queryClient = useQueryClient();

  return useMutation(
    async ({postId}) => {
      try {
        const response = await axios.delete(`${postUrl}/deletepost?id=${postId}`);
        
        if (response.status === 200) {
          toast.success("Post successfully deleted");
          return response.data;
        } 
      } catch (error) {
        if (error.response.status === 404) {
          throw new Error(`Post not found`);
        } else {
          console.log(error.response.status);
          throw new Error('An error has occurred');
        } 
      }
    },
    {
      throwOnError: true,
      onMutate: (variables) => {
        const previousData = queryClient.getQueryData('userPosts');
        return previousData;
      },
      onSuccess: () => {
        queryClient.invalidateQueries('userPosts'); 
      },
      onError: (error, variables, previousData) => {
        queryClient.setQueryData('userPosts', previousData);
        toast.error(
          `Error removing post: ${error.message}`
        );
      },
    },
  );
};