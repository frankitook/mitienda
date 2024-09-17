const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
const autenticacion = require('../middleware/autenticacion');


router.get('/', categoriaController.obtenerCategorias); 
router.get('/:idCategoria', categoriaController.obtenerUnaCategoriaPorID); 
router.post('/',  categoriaController.crearNuevaCategoria);
router.put('/:idCategoria',  categoriaController.actualizarCategoria);
router.delete('/:idCategoria',  categoriaController.eliminarCategoria);

module.exports = router;