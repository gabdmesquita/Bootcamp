const express = require('express');

const PORT = 3001;

const app = express();

const routesUser = require('./router/routesUser');

app.use(express.json());

app.use('/api/users', routesUser);

app.listen(PORT, () => {
  console.log(`Server Online On Port ${PORT}`);
});