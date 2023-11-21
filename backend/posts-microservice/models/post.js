const mongoose = require('mongoose')

const forumPostSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likeTotal: {
    type: Number,
    default: 0
  },
  dislikeTotal: {
    type: Number,
    default: 0
  },
  usersWhoLiked: {
    type: [String], // Array of user IDs who have liked the post
    default: []
  }
})

module.exports = mongoose.model('posts', forumPostSchema)