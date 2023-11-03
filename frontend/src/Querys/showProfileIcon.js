import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export const fetchProfileIcon = (username) => {
  return axios.get(`${userUrl}/fetchprofileicon?username=${username}`)
    .then((response) => response.data);
};

export const useProfileIcon = (username) => {
  return useQuery(['profileIcon', username], () => fetchProfileIcon(username));
};