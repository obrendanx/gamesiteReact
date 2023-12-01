import { useMutation } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

const useAddLike = async ( {postId, username, action} ) => {
  const response = await axios.post(`${postUrl}/like?username=${username}&postId=${postId}&action=${action}`, { postId, username, action });
  return response.data;
};

const useAddLikeQuery = () => {
  return useMutation(useAddLike);
};

export default useAddLikeQuery;