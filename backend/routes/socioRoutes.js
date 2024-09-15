const express = require('express');
const router = express.Router();
const SocioController = require('../controllers/socioController');

router.get('/', SocioController.obtenerSocios); 

module.exports = router;