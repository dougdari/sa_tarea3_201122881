const Relacion = require('../models/relacion.model');

exports.getAll = async (req, res) => {
  const [rows] = await Relacion.getAll();
  res.json(rows);
};

exports.getOne = async (req, res) => {
  const [rows] = await Relacion.getById(req.params.id);
  rows.length ? res.json(rows[0]) : res.status(404).send('No encontrado');
};

exports.create = async (req, res) => {
  await Relacion.create(req.body);
  res.status(201).send('Relación creada');
};

exports.update = async (req, res) => {
  await Relacion.update(req.params.id, req.body);
  res.send('Relación actualizada');
};

exports.remove = async (req, res) => {
  await Relacion.remove(req.params.id);
  res.send('Relación eliminada');
};
