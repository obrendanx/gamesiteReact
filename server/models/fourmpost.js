const mongoose = require('mongoose')

const fourmPost = new mongoose.Schema({
  subject:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true,
  },
  postedBy:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('posts', fourmPost)