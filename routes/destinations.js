const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsController.create);
// router.post('/flights/:id/destinations/:id', destinationsController.delete);

module.exports = router;