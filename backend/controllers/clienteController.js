const Cliente = require('../models/clienteModel');

const obtenerClientes= async (req,res) => {
    
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener los clientes' });
    };


}


const obtenerUnCliente= async (req,res) => {
    
    try {
       

        
    } catch (error) {
        
        
    };


}


module.exports ={obtenerClientes}