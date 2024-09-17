const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/usuariosController');
const autenticacion = require('../middleware/autenticacion');

router.get('/', ClienteController.obtenerUsuarios);
router.get('/:nroDni', ClienteController.obtenerUnUsuarioPorDNI); 
router.post('/registrarse', ClienteController.crearUsuario);
router.put('/:nroDni', ClienteController.actualizarUsuario);
router.delete('/:nroDni', ClienteController.eliminarUsuario);

module.exports = router;