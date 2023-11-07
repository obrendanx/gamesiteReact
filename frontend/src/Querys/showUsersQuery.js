import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export const fetchUsers = () => {
  return axios.get(`${userUrl}/fetchusers`)
    .then((response) => response.data);
};

export const useShowUsers = () => {
  return useQuery(['users'], () => fetchUsers());
};