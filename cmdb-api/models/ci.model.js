const db = require('./db');

const CI = {
  getAll: () => db.query('SELECT * FROM ConfigurationItem'),
  getById: (id) => db.query('SELECT * FROM ConfigurationItem WHERE id = ?', [id]),
  create: (data) => db.query('INSERT INTO ConfigurationItem SET ?', [data]),
  update: (id, data) => db.query('UPDATE ConfigurationItem SET ? WHERE id = ?', [data, id]),
  remove: (id) => db.query('DELETE FROM ConfigurationItem WHERE id = ?', [id])
};

module.exports = CI;
