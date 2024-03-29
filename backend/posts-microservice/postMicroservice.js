const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./route');
const cors = require('cors');

require('dotenv').config();

// Start the microservice
function startUserMicroservice() {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());

  app.use('/', userRoutes);

  // MongoDB connection options
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000, // Set the socket timeout to 30 seconds (adjust as needed)
  };

  // Connect to MongoDB
  mongoose.connect(process.env.DATABASE_ACCESS, {
    dbName: 'gamesite',
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log('User microservice connected to MongoDB cluster!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html')); // Adjust the path here
  });

  // Start the server
  const port = process.env.PORT || 5002;
  app.listen(port, () => {
    console.log(`Post microservice is running on port ${port}`);
  });
}

startUserMicroservice(); 

module.exports = { startUserMicroservice };