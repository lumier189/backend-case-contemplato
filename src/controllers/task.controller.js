const Task = require('../models/task.model');

async function create(req, res) {
  return res.status(201).json(await Task.create(req.body));
}

async function edit(req, res) {
  return res.json(await Task.update(req.body, {
    where: {
      id: req.params.id,
    },
  }));
}

async function list(req, res) {
  return res.json(await Task.findAll());
}

module.exports = { create, edit, list };
