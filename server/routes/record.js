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
    password:request.body.password
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
  //   const user = await signUp.findOne({ 
  //     email: request.body.email,
  //     username: request.body.username,
  //     password: request.body.password
  // })
  // const validPass = await bcrypt.compare(request.body.password, response.password)
  // if(user && validPass) {

  //   const token = jwt.sign({
  //       username: user.username,
  //       email: user.email,
  //   }, 'Zz47H.Aa5B')

  //   return response.json({ status: 'ok', user: token})
  // }else{
  //   console.log(request.body.password)
  //   return response.json({ status: 'error', user:false})
  // }
  try {
    const user = await signUp.findOne({ username: request.body.username, email: request.body.email });
    if (user) {
      const cmp = await bcrypt.compare(request.body.password, user.password);
      if (cmp) {
          const token = jwt.sign({
          username: user.username,
          email: user.email,
      }, 'Zz47H.Aa5B')
        return response.json({ status: 'ok', user: token})
      } else {
        return response.json({ status: 'error', user:false})
      }
    } else {
      response.send("Wrong username or password.");
    }
  } catch (error) {
    response.status(500).send("Internal Server error Occured");
  }
})

module.exports = router

