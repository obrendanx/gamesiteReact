const express = require("express");
const router = express.Router();
const signUp = require('../db/conn')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/signup', async (request, response) =>{

  const saltPassword = await bcrypt.genSalt(10)
  const securePassword= await bcrypt.hash(request.body.password, saltPassword)

  const signedUpUser = new signUp({
    fullName:request.body.fullName,
    username:request.body.username,
    email:request.body.email,
    password:securePassword
  })
  signedUpUser.save()
  .then(data =>{
    response.json(data)
  })
  .catch(error =>{
    response.json(error)
  })
})

router.post('/login', async (request, response) =>{
    const user = await signUp.findOne({ 
      email: request.body.email,
      username: request.body.username,
      password: request.body.password
  })

  if(user) {

    const token = jwt.sign({
        username: user.username,
        email: user.email,
    }, 'Zz47H.Aa5B')

    return response.json({ status: 'ok', user: token})
  }else{
    return response.json({ status: 'error', user:false})
  }
})

module.exports = router