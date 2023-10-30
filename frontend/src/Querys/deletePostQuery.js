import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

export const removePost = (postId) => {
  return axios.delete(`${postUrl}/deletepost?id=${postId}`)
    .then((response) => response.data);
};

export const useRemovePost = () => {
  const queryClient = useQueryClient();

  return useMutation(({ postId }) => removePost(postId), {
    onMutate: (variables) => {
      const previousData = queryClient.getQueryData('userPosts');
      return previousData;
    },
    onError: (error, variables, previousData) => {
      queryClient.setQueryData('userPosts', previousData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('userPosts'); 
    },
  });
};