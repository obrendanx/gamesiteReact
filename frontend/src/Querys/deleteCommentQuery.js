import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';
import { toast } from 'react-toastify';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

export default function useRemoveComment () {
  const queryClient = useQueryClient();

  return useMutation(
    async ({postId, commentId}) => {
      try {
        const response = await axios.delete(`${postUrl}/deletecomment?postId=${postId}&commentId=${commentId}`);
        
        if (response.status === 200) {
          toast.success("Comment successfully deleted");
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
        const previousData = queryClient.getQueryData('userComments');
        return previousData;
      },
      onSuccess: () => {
        queryClient.invalidateQueries('userComments'); 
      },
      onError: (error, variables, previousData) => {
        queryClient.setQueryData('userComments', previousData);
        toast.error(
          `Error removing comment: ${error.message}`
        );
      },
    },
  );
};