const CI = require('../models/ci.model');

exports.getAll = async (req, res) => {
  const [rows] = await CI.getAll();
  res.json(rows);
};

exports.getOne = async (req, res) => {
  const [rows] = await CI.getById(req.params.id);
  rows.length ? res.json(rows[0]) : res.status(404).send('No encontrado');
};

exports.create = async (req, res) => {
  await CI.create(req.body);
  res.status(201).send('CI creado');
};

exports.update = async (req, res) => {
  await CI.update(req.params.id, req.body);
  res.send('CI actualizado');
};

exports.remove = async (req, res) => {
  await CI.remove(req.params.id);
  res.send('CI eliminado');
};
