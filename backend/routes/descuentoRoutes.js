const express = require('express');
const router = express.Router();
const descuentoController = require('../controllers/descuentoController');
const autenticacion = require('../middleware/autenticacion');

router.get('/', descuentoController.obtenerDescuentos);

module.exports = router;