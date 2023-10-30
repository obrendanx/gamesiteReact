import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

export const addPost = (newPost) => {
  return axios.post(`${postUrl}/fourmspost`, newPost)
    .then((response) => response.data);
};

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation((newAnimeItem) => addPost(newAnimeItem), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts'); 
    },
  });
};