const mongoose = require('mongoose');

const favouriteAnimeItem = new mongoose.Schema({
  animeTitle: {
    type: String,
    required: true
  },
  animeImgSrc: {
    type: String,
    required: true,
  },
  animeUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

const userFavourite = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  favouriteAnimeItems: [favouriteAnimeItem]
});

module.exports = mongoose.model('UserFavourite', userFavourite);