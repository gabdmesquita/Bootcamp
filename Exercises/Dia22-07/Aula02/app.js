const express = require('express');
const PORT = 3001;

const app = express();

let products = require('./products');

app.use(express.json());

app.post('/products', (req, res) => {
  const data = req.body;
  
  products = [...products, ...data];
  
  res.status(201).json(products);
});

app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  
  const product = products.find((product) => product.id === id);
  if (!product) return res.status(400).json({ message: 'Product not found' });
  
  const productUpdated = products.map((product) => {
    if (product.id === id) return data;

    return product;
  });
  
  products = productUpdated;
  
  res.status(200).json(products);
});

app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  
  const product = products.find((product) => product.id === id);
  if (!product) return res.status(400).json({ message: 'Product not found' });
  
  const productUpdated = products.filter((product) => product.id !== id);
  
  products = productUpdated;
  
  res.status(200).json(products);
});

app.get('/products', (_req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server Online On Port ${PORT}`);
});