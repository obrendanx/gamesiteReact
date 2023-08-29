const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isGlobalAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  profileIconColor: {
    type: String,
    required: true,
    default: "#3F51B5"
  },
  date: {
    type: Date,
    default: Date.now
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

module.exports = mongoose.model('User', signUpSchema);