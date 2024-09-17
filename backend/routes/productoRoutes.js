const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const autenticacion = require('../middleware/autenticacion');

router.get('/', productoController.obtenerProductos);

module.exports = router;