const {DataTypes} = require('sequelize');
const base= require('../config/bd');


const Cliente = base.define('Cliente',{

    nroDni:{type: DataTypes.INTEGER,primaryKey: true},
    tipoDni:{type: DataTypes.STRING,allowNull: false},
    nombre:{type: DataTypes.STRING, allowNull: false},
    apellido:{type: DataTypes.STRING, allowNull: false},
    direccion:{type: DataTypes.STRING, allowNull: false},
    telefono:{type: DataTypes.STRING, allowNull: false},
    email:{type: DataTypes.STRING, allowNull: false},
    contrasena:{type: DataTypes.STRING, allowNull: false},
    fechaNacimiento:{type: DataTypes.DATEONLY, allowNull: false},
    foto:{type: DataTypes.BLOB('long'), allowNull: true}



},{

    tableName: 'clientes',
    timestamps: false
}

);

module.exports = Cliente;