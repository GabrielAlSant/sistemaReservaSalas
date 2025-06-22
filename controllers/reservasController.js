const reservaModel = require('../models/reservaModel');

exports.criarReserva = (req, res) => {
  reservaModel.createReserva(req.body, (err, result) => {
    if (err) {
      return res.status(400).json({ erro: err.message });
    }
    res.status(201).json({ id: result.insertId });
  });
};

exports.listarReservas = (req, res) => {
  reservaModel.getReservas((err, results) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(results);
  });
};
