const { DataTypes } = require('sequelize');
const base = require('../config/bd');

const Descuento = base.define('Descuento', {
    idMetodoPago: {
        type: DataTypes.INTEGER,
        references: {
            model: 'MetodosPago',
            key: 'idMetodoPago'
        }
    },
    fechaDesde: { type: DataTypes.DATEONLY, primaryKey: true },
    fechaHasta: { type: DataTypes.DATEONLY, allowNull: false },
    porcentaje: { type: DataTypes.FLOAT, allowNull: false }
}, {
    tableName: 'descuentos',
    timestamps: false
});

module.exports = Descuento;
