require("dotenv").config({ path: "./.env" });
const express = require("express");
const router = express.Router();
const signUp = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorHandler = require('../middleware/errorHandling');
const dotenv = require('dotenv')

dotenv.config();


router.post('/signup', async (request, response, next) => {
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

    const savedUser = await signedUpUser.save();
    response.json(savedUser);
  } catch (error) {
    next(error);
  }
});

router.use(errorHandler);

router.post('/login', async (request, response, next) => {
  try {
    const user = await signUp.findOne({ username: request.body.username, email: request.body.email });
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
    next(error);
  }
});

router.use(errorHandler);

router.get('/profile-icon', async (request, response, next) => {
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
    next(error);
  }
});

router.get('/is-admin', async (request, response, next) => {
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
    next(error);
  }
});

router.get('/api/users', async (req, res) => {
  try {
    const users = await signUp.find();
    res.json({data: users});
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete('/api/users/:username', async (req, res) => {
  try {
    await signUp.deleteOne({ username: req.params.username });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/api/user/:username', async (req, res) => {
  try {
    const user = await signUp.findOne({ username: req.params.username });
    if (user) {
      res.json(user);
    } else {
      return res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put('/api/userupdate/:username', async (req, res) => {
  try {
    const updatedUser = req.body;

    // Check if the new password is provided
    if (updatedUser.password) {
      const saltPassword = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(updatedUser.password, saltPassword);
      updatedUser.password = securePassword;
    }

    const user = await signUp.findOneAndUpdate({ username: req.params.username }, updatedUser, {
      new: true
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/api/follow/:username', async (req, res) => {
  try {
    const followerUsername = req.body.username;
    const followedUsername = req.params.username;

    const follower = await signUp.findOne({ username: followerUsername });
    const followedUser = await signUp.findOne({ username: followedUsername });

    followedUser.followers.push(follower._id);
    follower.following.push(followedUser._id);

    await followedUser.save();
    await follower.save();

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post('/api/unfollow/:username', async (req, res) => {
  try {
    const unfollowerUsername = req.body.username;
    const unfollowedUsername = req.params.username;

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

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/api/followers/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const user = await signUp.findOne({ username }).populate('followers', 'username');
    if (user) {
      const followers = user.followers;
      res.json({ followers });
    } else {
      return res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/api/following/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const user = await signUp.findOne({ username }).populate('following', 'username');
    if (user) {
      const following = user.following;
      res.json({ following });
    } else {
      return res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.use(errorHandler);

module.exports = router