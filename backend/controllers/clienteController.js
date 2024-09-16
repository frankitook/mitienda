const Cliente = require('../models/clienteModel');

const obtenerClientes= async (req,res) => {
    
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener los clientes' });
    };


}

module.exports ={obtenerClientes}