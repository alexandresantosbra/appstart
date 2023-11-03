// Importar o Express
const express = require('express');

// Criar uma nova aplicação Express
const app = express();

// Definir um roteador
const router = express.Router();

// Criar um método para listar todos os itens
router.get('/', (req, res) => {
  // Retorna uma lista de itens
  res.json([
    {
      id: 1,
      nome: 'Café',
      preço: 5.00,
    },
    {
      id: 2,
      nome: 'Bolo',
      preço: 10.00,
    },
    {
      id: 3,
      nome: 'Suco',
      preço: 7.50,
    },
  ]);
});

// Adicionar o roteador à aplicação
app.use(router);

// Iniciar a aplicação
app.listen(3000, () => {
  console.log('Aplicação iniciada na porta 3000');
});