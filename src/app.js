const express = require('express');
const zodiacRoutes = require('./routes/zodiacRoutes');

const app = express();
app.use(express.json());
app.use('/api/zodiac', zodiacRoutes);

module.exports = app;
