const express = require('express');

const PORT = 3001;

const app = express();

const routeProducts = require('./router/routesProducts');

app.use(express.json());

app.use('/api/products', routeProducts);

app.listen(PORT, () => {
  console.log(`Server Online On Port ${PORT}`);
});

// 1. Retornar todos os produtos da array. “/api/products”,
// 2. Obter um produto específico pelo ID “/api/products/:id”
// 3. Adicionar um novo produto “/api/products”,
// 4. Mudar uma propriedade do produto (qualquer uma) “/api/products/:id”,
// 5. Deletar um produto utilizando o ID “/api/products/:id”.