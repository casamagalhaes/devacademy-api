require('express-async-errors');
const express = require('express');
const logger = require('morgan');
const { ApiError } = require('./lib/errors');

const productsRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/products', productsRouter);
app.use((err, _, res, next) => {
  if (err instanceof ApiError)
    return res.status(err.statusCode).json({ message: err.message });
  return res.status(500);
});

module.exports = app;
