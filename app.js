const express = require('express');
const logger = require('morgan');

const productsRouter = require('./routes/products');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/products', productsRouter);
app.use((err, _, res, next) => {
    if (err.statusCode) {
        return res.status(err.statusCode).send(err.message);
    } else {
        return res.status(500);
    }
});

module.exports = app;
