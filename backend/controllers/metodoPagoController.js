const MetodoPago = require('../models/metodoPagoModel');

const obtenerMetodosPago= async (req,res) => {
    
    try {
        const metodos = await MetodoPago.findAll();
        res.json(metodos);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener los metodos de pago' });
    };


}

module.exports ={obtenerMetodosPago}