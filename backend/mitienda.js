const express = require('express');
const app = express();
const port = 3000;
const base = require('./config/bd');
const crypto = require('crypto');



const clientesRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');
const categoriaRoutes= require('./routes/categoriaRoutes');
const subcategoriaRoutes=require('./routes/subcategoriaRoutes');
const metodoPagoRoutes=require('./routes/metodoPagoRoutes');
const descuentoRoutes=require('./routes/descuentoRoutes');
const productoRoutes=require('./routes/productoRoutes');
const pedidoRoutes=require('./routes/pedidoRoutes');
app.use(express.json());


app.use('/clientes', clientesRoutes);
app.use('/autenticacion', authRoutes);
app.use('/categorias',categoriaRoutes);
app.use('/subcategorias',subcategoriaRoutes);
app.use('/metodospago', metodoPagoRoutes);
app.use('/descuentos', descuentoRoutes);
app.use('/productos', productoRoutes);
app.use('/pedidos', pedidoRoutes);

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


