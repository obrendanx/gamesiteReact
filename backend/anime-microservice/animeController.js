require("dotenv").config({ path: "./.env" });
const express = require("express");
const userFavourite = require('./models/anime')
const dotenv = require('dotenv')

dotenv.config();

//Logic for the user to be able to sign up
const newanime = async (request, response) => {
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
    console.log(error);
  }
};

const deleteanime = async (request, response) => {
  try {
    const username = request.query.username;
    const animeItemId = request.query.id;

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
    console.log(error);
  }
};

const userfavorites = async (request, response) => {
  try {
    const username = request.query.username;

    // Find the user by their username
    const user = await userFavourite.findOne({ username });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    response.json(user.favouriteAnimeItems);
  } catch (error) {
    console.log(error);
  }
}

const updateanime = async (request, response) => {
  try {
    const username = request.query.username;
    const animeItemId = request.query.id;
    const { currentEpisode, currentSeason } = request.body;

    // Find the user by their username
    let user = await userFavourite.findOne({ username });

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    // Find the favorite anime item by its _id
    const animeItem = user.favouriteAnimeItems.id(animeItemId);

    if (!animeItem) {
      return response.status(404).json({ message: 'Anime item not found' });
    }

    // Update the fields
    animeItem.currentEpisode = currentEpisode;
    animeItem.currentSeason = currentSeason;
    animeItem.watching = currentEpisode > 0 || currentSeason > 0;

    // Save the updated user document
    const updatedUser = await user.save();

    response.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  newanime,
  deleteanime,
  userfavorites,
  updateanime
};
