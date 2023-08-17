require("dotenv").config({ path: "./.env" });
const express = require("express");
const router = express.Router();
const userFavourite = require('../models/anime')
const errorHandler = require('../middleware/errorHandling');
const dotenv = require('dotenv')

dotenv.config();

router.post('/newanime', async (request, response, next) => {
  try {
    const { username, title, img, url } = request.body;

    // Find the user by their username
    let user = await userFavourite.findOne({ username });

    if (!user) {
      // If user doesn't exist, create a new user with the provided username
      user = new userFavourite({ username });
    }

    // Create a new favourite anime item
    const newAnimeItem = {
      animeTitle: title,
      animeImgSrc: img,
      animeUrl: url
    };

    // Add the new anime item to the user's favouriteAnimeItems array
    user.favouriteAnimeItems.push(newAnimeItem);

    // Save the updated user document
    const updatedUser = await user.save();

    response.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.get('/showuseranime/:username', async (request, response, next) => {
  try {
    const username = request.params.username;

    const posts = await fourmPost.find({ username: username });
    response.json({ data: posts });
  } catch (error) {
    next(error);
  }
})

router.delete('/removeanime/:username/:id', async (request, response, next) => {
  try {
    const username = request.params.username;
    const animeItemId = request.params.id;

    // Find the user by their username
    let user = await userFavourite.findOne({ username });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    // Find the index of the anime item with the provided ID
    const animeItemIndex = user.favouriteAnimeItems.findIndex(
      (item) => item._id.toString() === animeItemId
    );

    if (animeItemIndex === -1) {
      return response.status(404).json({ message: 'Anime item not found' });
    }

    // Remove the anime item from the user's favoriteAnimeItems array
    user.favouriteAnimeItems.splice(animeItemIndex, 1);

    // Save the updated user document
    const updatedUser = await user.save();

    response.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.get('/userfavourites/:username', async (request, response, next) => {
  try {
    const username = request.params.username;

    // Find the user by their username
    const user = await userFavourite.findOne({ username });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    response.json(user.favouriteAnimeItems);
  } catch (error) {
    next(error);
  }
});

module.exports = router;