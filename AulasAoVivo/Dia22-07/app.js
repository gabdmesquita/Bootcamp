const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  // res.send('Seja bem vindo!');
  res.redirect('/products');
});

app.get('/products', (_req, res) => {
  res.send('Essa é a rota de produtos.');
});

app.listen(3001, () => {
  console.log('Servidor Online');
});