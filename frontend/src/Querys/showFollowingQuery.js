import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const userUrl = config[environment].user;

export const fetchUserFollowing = (username) => {
  if(username) {
    return axios.get(`${userUrl}/following/${username}`)
    .then((response) => response.data);
  } else {
    return undefined;
  }
};

export const useUserFollowing = (username) => {
  return useQuery(['following', username], () => fetchUserFollowing(username));
};