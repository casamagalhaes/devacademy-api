const { Router } = require('express');
const router = Router();
const ProductService = require('../services/product-service');

const productService = new ProductService();

// Collection

router.get('/', async (_, res, next) => {
  const data = await productService.findAll();
  return res.json(data);
});

router.post('/', async (req, res, next) => {
  const data = await productService.create(req.body);
  return res.status(201).json(data);
});

// Resource

router.get('/:id', async (req, res, next) => {
  const data = await productService.findById(req.params.id);
  return res.json(data);
});

router.put('/:id', async (req, res, next) => {
  const data = await productService.update(req.params.id, req.body);
  return res.json(data);
});

router.delete('/:id', async (req, res, next) => {
  await productService.delete(req.params.id);
  return res.status(206).json();
});

module.exports = router;
