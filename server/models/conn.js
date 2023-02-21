const mongoose = require('mongoose')

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
  isGlobalAdmin:{
    type:Boolean,
    required:true,
    default: false
  },
  profileIconColor:{
    type:String,
    required:true,
    default: "#3F51B5"
  },
  date:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('users', signUp)