const express = require('express');
const router = express.Router();
const { HomeController } = require('../controllers');

/* GET home page. */
router.get('/', HomeController.home);

module.exports = router;
