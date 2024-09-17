const Descuento = require('../models/descuentoModel');

const obtenerDescuentos= async (req,res) => {
    
    try {
        const descuentos = await Descuento.findAll();
        res.json(descuentos);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener los descuentos' });
    };


}

module.exports ={obtenerDescuentos}