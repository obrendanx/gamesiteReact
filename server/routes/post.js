require("dotenv").config({ path: "./.env" });
const express = require("express");
const router = express.Router();
const fourmPost = require('../models/fourmpost')
const errorHandler = require('../middleware/errorHandling');
const dotenv = require('dotenv')

dotenv.config();


router.post('/fourmspost', async (request, response, next) => {
  try {
    const newPost = new fourmPost({
      subject: request.body.subject,
      message: request.body.message,
      postedBy: request.body.postedBy
    });

    const savedPost = await newPost.save();
    response.json(savedPost);
  } catch (error) {
    next(error);
  }
});

router.get('/showposts', async (request, response, next) => {
  try {
    const posts = await fourmPost.find();
    response.json({ data: posts });
  } catch (error) {
    next(error);
  }
})

router.get('/showuserposts/:username', async (request, response, next) => {
  try {
    const username = request.params.username; // Use request.params to get the URL parameter

    const posts = await fourmPost.find({ postedBy: username });
    response.json({ data: posts });
  } catch (error) {
    next(error);
  }
})

router.use(errorHandler);
module.exports = router