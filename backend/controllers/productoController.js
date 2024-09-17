const Producto = require('../models/productoModel');

const obtenerProductos= async (req,res) => {
    
    try {
        const productos = await Producto.findAll();
        res.json(productos);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener los productos' });
    };


}

module.exports ={obtenerProductos}