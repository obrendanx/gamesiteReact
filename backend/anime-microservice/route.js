const express = require('express');
const router = express.Router();
const animeController = require('./animeController')

router.post('/newanime', animeController.newanime);
router.delete('/deleteanime', animeController.deleteanime);
router.get('/userfavorites', animeController.userfavorites);
router.put('/updateanime', animeController.updateanime);

module.exports = router;