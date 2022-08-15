// Loads the configuration from config.env to process.env
require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const recordUrls = require('./routes/record')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

  app.use(express.json())
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors())
  app.use('/app', recordUrls)
  // start the Express server
  app.listen(5000, () => {
    console.log(`Server is running on port: 5000`);
  });


  