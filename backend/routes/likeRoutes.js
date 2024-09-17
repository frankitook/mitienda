const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const autenticacion = require('../middleware/autenticacion');

router.get('/', likeController.obtenerLikes);

module.exports = router;