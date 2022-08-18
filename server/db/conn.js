const mongoose = require('mongoose')
const { string } = require('prop-types')

const signUp = new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique: true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('mytable', signUp)