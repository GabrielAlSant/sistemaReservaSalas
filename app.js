const express = require('express');
const bodyParser = require('body-parser');
const reservasRoutes = require('./routes/reservaRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/', reservasRoutes)

module.exports = app;
