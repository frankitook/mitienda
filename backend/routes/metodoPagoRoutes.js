const express = require('express');
const router = express.Router();
const metodoPagoController = require('../controllers/metodoPagoController');
const autenticacion = require('../middleware/autenticacion');

router.get('/', metodoPagoController.obtenerMetodosPago);

module.exports = router;