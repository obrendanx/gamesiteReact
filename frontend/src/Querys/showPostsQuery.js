import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const postUrl = config[environment].post;

export const fetchPosts = () => {
  return axios.get(`${postUrl}/showposts`)
    .then((response) => response.data);
};

export const useShowPosts = () => {
  return useQuery(['posts'], () => fetchPosts());
};