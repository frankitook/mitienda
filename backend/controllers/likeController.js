const Like = require('../models/likeModel');

const obtenerLikes= async (req,res) => {
    
    try {
        const likes = await Like.findAll();
        res.json(likes);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener los todos los likes' });
    };


}

module.exports ={obtenerLikes}