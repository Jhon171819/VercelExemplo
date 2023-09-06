const express = require('express');
const { v4 } = require('uuid');

const app = express();
app.use(express.static('public'))
// Configurar middleware para análise do corpo da solicitação como JSON
app.use(express.json());
const items = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
  ];
// Rota de exemplo para um endpoint POST
app.post('/api/items', (req, res) => {
  const { id, name  } = req.body;
  // const id = v4();
  const newItem = { id, name };
  // Aqui, você normalmente salvaria o newItem em um banco de dados ou em algum local de armazenamento.
  // Vamos apenas retorná-lo para fins de exemplo.
  items.push(newItem);
  res.json(newItem);
});

// Rota de exemplo para um endpoint GET
app.get('/api/items', (req, res) => {
  // Aqui, você normalmente buscaria itens do banco de dados ou de algum local de armazenamento e os retornaria.
  // Vamos criar um array de exemplo para fins de exemplo.  
  res.json(items);
});

// Porta em que a API vai ouvir
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API está ouvindo na porta ${port}`);
});