const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
const autenticacion = require('../middleware/autenticacion');


router.get('/', categoriaController.obtenerCategorias); 

module.exports = router;