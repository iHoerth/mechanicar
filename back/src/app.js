const express = require('express');
const morgan = require('morgan')
const app = express();

const router = require('./routes')

app.use(express.json())
app.use(morgan());

app.use(router);


module.exports = app;