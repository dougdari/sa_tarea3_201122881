const db = require('./db');

const Relacion = {
  getAll: () => db.query('SELECT * FROM RelacionCI'),
  getById: (id) => db.query('SELECT * FROM RelacionCI WHERE id = ?', [id]),
  create: (data) => db.query('INSERT INTO RelacionCI SET ?', [data]),
  update: (id, data) => db.query('UPDATE RelacionCI SET ? WHERE id = ?', [data, id]),
  remove: (id) => db.query('DELETE FROM RelacionCI WHERE id = ?', [id])
};

module.exports = Relacion;
