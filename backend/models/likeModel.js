const { DataTypes } = require('sequelize');
const base = require('../config/bd');

const Like = base.define('Like', {
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
    fechaLike: { type: DataTypes.DATEONLY, primaryKey: true }
}, {
    tableName: 'likes',
    timestamps: false
});

module.exports = Like;
