require("dotenv").config({ path: "./.env" });
const express = require("express");
const fourmPost = require('./models/post')
const errorHandler = require('../middleware/errorHandling');
const dotenv = require('dotenv')

dotenv.config();

//Logic for the user to be able to sign up
const fourmspost = async (request, response) => {
  try {
    const newPost = new fourmPost({
      subject: request.body.subject,
      message: request.body.message,
      postedBy: request.body.postedBy
    });

    const savedPost = await newPost.save();
    response.json(savedPost);
  } catch (error) {
    console.log(error);
  }
};

const showposts = async (request, response) => {
  try {
    const posts = await fourmPost.find();
    response.json({ data: posts });
  } catch (error) {
    console.log(error);
  }
}

const showuserposts = async (request, response) => {
  try {
    const username = request.query.username;

    const posts = await fourmPost.find({ postedBy: username });
    response.json({ data: posts });
  } catch (error) {
    console.log(error);
  }
}

const deletepost = async (request, response) => {
  try {
    await fourmPost.deleteOne({ _id: request.query.id });
    response.json({ success: true });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  fourmspost,
  showposts,
  showuserposts,
  deletepost
};
