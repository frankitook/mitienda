const express = require('express');
const router = express.Router();
const subcategoriaController = require('../controllers/subcategoriaController');
const autenticacion = require('../middleware/autenticacion');

router.get('/', subcategoriaController.obtenerSubcategorias);

module.exports = router;