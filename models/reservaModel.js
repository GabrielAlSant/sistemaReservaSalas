const db = require('./db');

exports.createReserva = (reserva, callback) => {
  const { sala_id, data, hora } = reserva;
  db.query(
    'SELECT * FROM reservas WHERE sala_id = ? AND data = ? AND hora = ?',
    [sala_id, data, hora],
    (err, results) => {
      if (results.length > 0) {
        return callback(new Error('Conflito de horário'));
      }
      db.query(
        'INSERT INTO reservas (sala_id, data, hora) VALUES (?, ?, ?)',
        [sala_id, data, hora],
        callback
      );
    }
  );
};

exports.getReservas = (callback) => {
  db.query('SELECT * FROM reservas', callback);
};
