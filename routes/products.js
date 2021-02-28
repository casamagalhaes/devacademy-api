const express = require('express');
const router = express.Router();
const ProductService = require('../services/product-service');
const productService = new ProductService();

// Collection

router.get('/', async (_, res, next) => {
  try {
    const data = await productService.findAll();
    return res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = await productService.create(req.body);
    return res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});

// Resource

router.get('/:id', async (req, res, next) => {
  try {
    const data = await productService.findById(req.params.id);
    return res.json(data);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const data = await productService.update(req.params.id, req.body);
    return res.json(data);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await productService.delete(req.params.id);
    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
