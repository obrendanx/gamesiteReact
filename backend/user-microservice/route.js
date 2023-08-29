const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/fetchprofileicon', userController.fetchProfileIcon);
router.get('/isadmin', userController.isAdmin);
router.get('/fetchusers', userController.fetchUsers);
router.delete('/deleteuser', userController.deleteUser);
router.get('/fetchuser', userController.fetchUser);
router.put('/updateuserdetails/:username', userController.userUpdateDetails);
router.post('/follow/:username', userController.follow);
router.post('/unfollow/:username', userController.unfollow);
router.get('/followers/:username', userController.getFollowers);
router.get('/following/:username', userController.getFollowing);

module.exports = router;