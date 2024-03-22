import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

export const fetchUserPosts = (username) => {
  return axios.get(`${postUrl}/showuserposts?username=${username}`)
    .then((response) => response.data);
};

export const useShowUserPosts = (username) => {
  return useQuery(['userPosts', username], () => fetchUserPosts(username));
};