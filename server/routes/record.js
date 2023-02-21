require("dotenv").config({ path: "./.env" });
const express = require("express");
const router = express.Router();
const signUp = require('../models/conn');
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
        return response.json({ status: 'ok', user: token });
      } else {
        return response.json({ status: 'error', user: false });
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
    // Use the username to retrieve the user's profile icon color from the database
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

router.get("/api/user/:username", async (req, res) => {
  console.log(req.params.username);
  const user = await signUp.findOne({ username: req.params.username });
  res.json(user);
});

router.put("/api/userupdate/:username", async (req, res) => {
  const updatedUser = req.body;
  const user = await signUp.findOneAndUpdate({ username: req.params.username }, updatedUser, {
    new: true,
  });
  res.json(user);
});

router.use(errorHandler);


module.exports = router