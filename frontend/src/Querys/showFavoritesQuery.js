import { useQuery } from 'react-query';
import axios from 'axios';
import config from '../config';

const environment = process.env.NODE_ENV || 'development';
// Get the API URL based on the environment
const animeUrl = config[environment].anime;

export const fetchUserFavorites = (username) => {
  return axios.get(`${animeUrl}/userfavorites?username=${username}`)
    .then((response) => response.data);
};

export const useUserFavorites = (username) => {
  return useQuery(['userFavorites', username], () => fetchUserFavorites(username));
};