const { DataTypes } = require('sequelize');
const base = require('../config/bd');

const Pedido = base.define('Pedido', {
    idProducto: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Productos',
            key: 'idProducto'
        }
    },
    nroDni: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Personas',
            key: 'nroDni'
        }
    },
    fechaPedido: { type: DataTypes.DATEONLY, primaryKey: true },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    total: { type: DataTypes.FLOAT, allowNull: false },
    idMetodoPago: {
        type: DataTypes.INTEGER,
        references: {
            model: 'MetodosPago',
            key: 'idMetodoPago'
        }
    }
}, {
    tableName: 'pedidos',
    timestamps: false
});

module.exports = Pedido;
