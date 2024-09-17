const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const autenticacion = require('../middleware/autenticacion');

router.get('/', pedidoController.obtenerPedidos);

module.exports = router;