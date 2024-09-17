const Categoria = require('../models/categoriaModel');

const obtenerCategorias= async (req,res) => {
    
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener las categorias' });
    };


}

module.exports ={obtenerCategorias};