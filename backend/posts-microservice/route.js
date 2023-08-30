const express = require('express');
const router = express.Router();
const postController = require('./postController')

router.post('/fourmspost', postController.fourmspost);
router.get('/showposts', postController.showposts);
router.get('/showuserposts', postController.showuserposts);
router.delete('/deletepost', postController.deletepost);

module.exports = router;