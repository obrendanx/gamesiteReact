// Loads the configuration from config.env to process.env
require("dotenv").config({ path: "./.env" });

const express = require("express");
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const recordUrl = require('./routes/userRecord')
const postUrl = require('./routes/post')
const animeUrl = require('./routes/animeRecord')
const cors = require('cors')
const path = require('path');

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
  dbName: 'gamesite',
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB cluster!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.use(express.json())
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(
    {
      origin: ['https://bewen.net']
    }
  ));
  app.use('/app', recordUrl)
  app.use('/app', postUrl)
  

// Start the Express server
app.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
});