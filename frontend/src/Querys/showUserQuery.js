import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export const fetchUser = (username) => {
  return axios.get(`${userUrl}/fetchuser?username=${username}`)
    .then((response) => response.data);
};

export const useShowUser = (username) => {
  return useQuery(['user'], () => fetchUser(username));
};