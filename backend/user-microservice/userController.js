require("dotenv").config({ path: "./.env" });
const express = require("express");
const router = express.Router();
const signUp = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config();

//Logic for the user to be able to sign up
const signup = async (request, response, next) => {
  try {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(request.body.password, saltPassword);

    const signedUpUser = new signUp({
      fullName: request.body.fullName,
      username: request.body.username,
      email: request.body.email,
      password: securePassword,
      isGlobalAdmin: false
    });
    console.log(savedUser);
    const savedUser = await signedUpUser.save();
    response.json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

// Logic for the user to be able to sign in
const login = async (request, response, next) => {
  try {
    console.log('Request body:', request.body); 
    const user = await signUp.findOne({ username: request.body.username, email: request.body.email });
    console.log(user);
    if (user) {
      const cmp = await bcrypt.compare(request.body.password, user.password);
      if (cmp) {
        const token = jwt.sign({
          username: user.username,
          email: user.email,
        }, process.env.SECRET_KEY);
        return response.json({ user: { token } });
      } else {
        return response.json({ user: false });
      }
    } else {
      return next(new Error('Wrong username or password.'));
    }
  } catch (error) {
    console.log(error);
  }
};

//Fetch the users profile icon
const fetchProfileIcon = async (request, response, next) => {
  try {
    const username = request.query.username;
    // Use the username to retrieve the user's profile icon color from the database
    const user = await signUp.findOne({ username: username });
    if (user) {
      const color = user.profileIconColor;
      return response.json({ color });
    } else {
      return next(new Error('User not found.'));
    }
  } catch (error) {
    console.log(error);
  } 
};

//Check if the user is an admin
const isAdmin = async (request, response, next) => {
  try{
    const username = request.query.username;
    const user = await signUp.findOne({ username: username });
    if (user) {
      const isGlobal = user.isGlobalAdmin;
      return response.json({ isGlobal });
    } else {
      return next(new Error('User not found.'));
    }
  } catch (error) {
    console.log(error);
  }
};

//Fetches all the users in the DB
const fetchUsers = async (request, response, next) => {
  try {
    const users = await signUp.find();
    response.json({data: users});
  } catch (error) {
    console.log(error);
  }
};

//Deletes a specified user
const deleteUser = async (request, response, next) => {
  try {
    await signUp.deleteOne({ username: request.query.username });
    response.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

//Fetches a specified user
const fetchUser = async (request, response, next) => {
    try {
      const user = await signUp.findOne({ username: request.query.username });
      if (user) {
        response.json(user);
      } else {
        return response.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      console.log(error);
    }
}

//Updates the users details
const userUpdateDetails = async (request, response, next) => {
  try {
    const updatedUser = request.body;

    // Check if the new password is provided
    if (updatedUser.password) {
      const saltPassword = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(updatedUser.password, saltPassword);
      updatedUser.password = securePassword;
    }

    const user = await signUp.findOneAndUpdate({ username: request.params.username }, updatedUser, {
      new: true
    });

    response.json(user);
  } catch (error) {
    console.log(error);
  }
};

//Adds follower to the list
const follow = async (request, response, next) => {
  try {
    const followerUsername = request.body.username;
    const followedUsername = request.params.username;

    const follower = await signUp.findOne({ username: followerUsername });
    const followedUser = await signUp.findOne({ username: followedUsername });

    followedUser.followers.push(follower._id);
    follower.following.push(followedUser._id);

    await followedUser.save();
    await follower.save();

    response.json({ success: true });
  } catch (error) {
    console.log(error);
  }
}

//Removes follow from list
const unfollow = async (request, response, next) => {
  try {
    const unfollowerUsername = request.body.username;
    const unfollowedUsername = request.params.username;

    const unfollower = await signUp.findOne({ username: unfollowerUsername });
    const unfollowedUser = await signUp.findOne({ username: unfollowedUsername });

    const followerIndex = unfollowedUser.followers.indexOf(unfollower._id);
    if (followerIndex > -1) {
      unfollowedUser.followers.splice(followerIndex, 1);
      await unfollowedUser.save();
    }

    const followingIndex = unfollower.following.indexOf(unfollowedUser._id);
    if (followingIndex > -1) {
      unfollower.following.splice(followingIndex, 1);
      await unfollower.save();
    }

    response.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

//Grabs the users followers
const getFollowers = async (request, response, next) => {
  try {
    const username = request.params.username;
    const user = await signUp.findOne({ username }).populate('followers', 'username');
    if (user) {
      const followers = user.followers;
      response.json({ followers });
    } else {
      return response.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.log(error);
  }
};

//Grabs the users following
const getFollowing = async (request, response, next) => {
  try {
    const username = request.params.username;
    const user = await signUp.findOne({ username }).populate('following', 'username');
    if (user) {
      const following = user.following;
      response.json({ following });
    } else {
      return response.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.log(error)
  }
}; 

module.exports = {
  signup,
  login,
  fetchProfileIcon,
  isAdmin,
  fetchUsers,
  deleteUser,
  fetchUser,
  userUpdateDetails,
  follow,
  unfollow,
  getFollowers,
  getFollowing
};
