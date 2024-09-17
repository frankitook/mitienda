const { DataTypes } = require('sequelize');
const base = require('../config/bd');

const MetodoPago = base.define('MetodoPago', {
    idMetodoPago: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false }
}, {
    tableName: 'metodospago',
    timestamps: false
});

module.exports = MetodoPago;
