const db = require('../models/db');

const seedData = async () => {
  await db.query('INSERT INTO ConfigurationItem (nombre_ci, tipo_ci, descripcion, estado_actual, ambiente) VALUES ?', [[
    ['Servidor1', 'Hardware', 'Servidor principal', 'Activo', 'PROD'],
    ['AppContable', 'Software', 'App de contabilidad', 'Activo', 'QA']
  ]]);
  console.log('Datos de ejemplo insertados');
  process.exit();
};

seedData();
