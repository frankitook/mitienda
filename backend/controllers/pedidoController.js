const Pedido = require('../models/pedidoModel');

const obtenerPedidos= async (req,res) => {
    
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);

        
    } catch (error) {
        
        res.status(500).json({ message: 'Error al obtener los pedidos' });
    };


}

module.exports ={obtenerPedidos}