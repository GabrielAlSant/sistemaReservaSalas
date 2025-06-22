const db = require('./db');

exports.getAllSalas = (callback) => {
  db.query('SELECT * FROM salas', callback);
};
