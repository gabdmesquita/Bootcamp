const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Servidor Online');
});