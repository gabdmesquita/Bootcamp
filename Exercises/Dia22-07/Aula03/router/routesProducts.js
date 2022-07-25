const express = require('express');

const router = express.Router();

let products = require('../products');

// Req 1:
router.get('/', (_req, res) => {
  return res.status(200).json(products);
});

// Req 2:
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  
  const product = products.find((product) => product.id === id);
  if (!product) return res.status(400).json({ message: 'Product not found' });
  
  return res.status(200).json(product);
});

// Req 3:
router.post('/', (req, res) => {
  const data = req.body;

  products = [...products, data];

  return res.status(201).json(products);
});

// Req 4:
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;

  const product = products.find((product) => product.id === id);
  if (!product) return res.status(400).json({ message: 'Product not found' });

  const productUpdated = products.map((product) => {
    if (product.id === id) return data;

    return product;
  });
  
  products = productUpdated;
  
  return res.status(200).json(products);
});

// Req 5:
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  
  const product = products.find((product) => product.id === id);
  if (!product) return res.status(400).json({ message: 'Product not found' });
  
  const productUpdated = products.filter((product) => product.id !== id);
  
  products = productUpdated;
  
  return res.status(200).json(products);
});

module.exports = router;

// 1. Retornar todos os produtos da array. “/api/products”,
// 2. Obter um produto específico pelo ID “/api/products/:id”
// 3. Adicionar um novo produto “/api/products”,
// 4. Mudar uma propriedade do produto (qualquer uma) “/api/products/:id”,
// 5. Deletar um produto utilizando o ID “/api/products/:id”.