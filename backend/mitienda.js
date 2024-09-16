const express = require('express');
const app = express();
const port = 3000;
const base = require('./config/bd');
const crypto = require('crypto');



const clientesRoutes = require('./routes/clienteRoutes');



app.use(express.json());



app.use('/clientes', clientesRoutes);



if (!process.env.JWT_SECRET) {
  const jwtSecret = crypto.randomBytes(32).toString('hex');
  process.env.JWT_SECRET = jwtSecret;
}

const iniciar= async () => {
  
  try {
    await base.sync();
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });

  } catch (error) {
    
  }

};

iniciar();


