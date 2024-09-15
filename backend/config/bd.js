const mysql = require('mysql2');

const conectar = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '123456789',
    database:'embarcaciones'
}); 

conectar.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos MySQL.');
    }
});


module.exports = conectar;