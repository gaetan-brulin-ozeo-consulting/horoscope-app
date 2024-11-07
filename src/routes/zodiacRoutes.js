const express = require('express');
const zodiacController = require('../controllers/zodiacController');

const router = express.Router();

router.get('/', zodiacController.getZodiacSign);

module.exports = router;
