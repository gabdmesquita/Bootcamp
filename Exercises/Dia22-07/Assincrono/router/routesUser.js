const express = require('express');

const router = express.Router();

let users = [];

// Req 1:
router.post('/', (req, res) => {
  const data = req.body;

  users.push(data);

  return res.status(201).json(users);
});

// Req 2:
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;

  const user = users.find((user) => user.id === id);
  if (!user) return res.status(400).json({ message: 'User not found' });

  const userUpdated = users.map((user) => {
    if (user.id === id) return data;

    return user;
  });
  
  users = userUpdated;
  
  return res.status(200).json(users);
});

// Req 3:
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  
  const user = users.find((user) => user.id === id);
  if (!user) return res.status(400).json({ message: 'User not found' });
  
  const userUpdated = users.filter((user) => user.id !== id);
  
  users = userUpdated;
  
  return res.status(200).json(users);
});

// Req 4:
router.get('/', (_req, res) => {
  return res.status(200).json(users);
});

module.exports = router;

// Criar uma rota ‘/api/users’ que permita criar, ler, deletar e atualizar informações dos usuários.
// Os usuário devem ter a propriedade username, email e password.

// Crie um endpoint que use o método:
// - POST para adicionar um usuário seguindo as propriedades citadas.
// - PUT para modificar informações de um usuário.
// - DELETE para deletar um usuário.
// - GET para verificar a lista de usuários.