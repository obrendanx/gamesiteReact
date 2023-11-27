require("dotenv").config({ path: "./.env" });
const express = require("express");
const fourmPost = require('./models/post')
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

const updatePostInteractions = async (request, response) => {
  try {
    const postId = request.query.postId;
    const action = request.query.action;
    const username = request.query.username;

    const post = await fourmPost.findById(postId);

    const userLikeIndex = post.usersWhoLiked.indexOf(username);
    const userDislikeIndex = post.usersWhoDisliked.indexOf(username);

    if (!post) {
      return false; // Post not found
    }

    if (action === 'like') {
      if(userLikeIndex === -1) {
        post.likeTotal += 1;
        post.usersWhoLiked.push(username);

        if (userDislikeIndex !== -1) {
          post.dislikeTotal -= 1;
          post.usersWhoDisliked.splice(userDislikeIndex, 1);
        }
      } else {
        post.likeTotal -= 1;
        post.usersWhoLiked.splice(userLikeIndex, 1);
      }
    } else if (action === 'dislike') {
      if(userDislikeIndex === -1) {
        post.dislikeTotal += 1;
        post.usersWhoDisliked.push(username);

        if (userLikeIndex !== -1) {
          post.likeTotal -= 1;
          post.usersWhoLiked.splice(userLikeIndex, 1);
        }
      } else {
        post.dislikeTotal -= 1;
        post.usersWhoDisliked.splice(userDislikeIndex, 1);
      }
    }

    await post.save();
    return true; // Interaction updated successfully
  } catch (error) {
    console.error(error);
    return false; // Error updating interaction
  }
};

module.exports = {
  fourmspost,
  showposts,
  showuserposts,
  deletepost,
  updatePostInteractions 
};
