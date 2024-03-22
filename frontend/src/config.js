module.exports = {
  development: {
    backend: 'http://localhost:5000', //  local development API URL
    post: 'http://localhost:5002', 
    user: 'http://localhost:5001', 
    anime: 'http://localhost:5003', 
  },
  production: {
    backend: 'http://localhost:', //  local development API URL
    post: 'https://gamesite-posts-microservice.onrender.com', 
    user: 'https://gamesite-user-microservice.onrender.com', 
    anime: 'https://gamesite-anime-microservice.onrender.com', 
  },
};