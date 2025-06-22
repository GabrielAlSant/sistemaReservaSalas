const express = require('express');
const router = express.Router();
const controller = require('../controllers/reservasController');

router.post('/reservas', controller.criarReserva);
router.get('/reservas', controller.listarReservas);

module.exports = router;
