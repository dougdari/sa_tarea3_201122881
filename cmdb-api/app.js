require('dotenv').config();
const express = require('express');
const app = express();
const ciRoutes = require('./routes/ci.routes');

app.use(express.json());
app.use('/api/cis', ciRoutes);
app.use('/api/relaciones', relacionRoutes);

const relacionRoutes = require('./routes/relacion.routes');



app.listen(process.env.PORT, () => {
  console.log(`API corriendo en http://localhost:${process.env.PORT}`);
});
