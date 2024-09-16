const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');
const autenticacion = require('../middleware/autenticacion');

router.get('/', autenticacion.verificarAutenticacionCliente ,ClienteController.obtenerClientes); 

module.exports = router;