const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


const sociosRoutes = require('./routes/socioRoutes');

app.use('/socios', sociosRoutes);


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});