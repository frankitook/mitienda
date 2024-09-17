const Subcategoria = require('../models/subcategoriaModel');

const obtenerSubcategorias= async (req,res) => {
    
    try {
        const subcategorias = await Subcategoria.findAll();
        res.json(subcategorias);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener las categorias' });
    };


}

module.exports ={obtenerSubcategorias};