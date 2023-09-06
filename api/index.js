const express = require('express');
const { v4 } = require('uuid');

const app = express();
app.use(express.static('public'))
// Configurar middleware para análise do corpo da solicitação como JSON
app.use(express.json());
app.post('/adi', (req, res) => {
  const { valor1, valor2 } = req.body;
  const resultado = valor1 + valor2;
  res.json({ resultado });
});

app.get('/adi', (req,res) => res.json({ resultado }));

app.post('/mult', (req, res) => {
  const { valor1, valor2 } = req.body;
  const resultado = valor1 * valor2;
  res.json({ resultado });
});

app.get('/mult', (req,res) => res.json({ resultado }));

app.post('/sub', (req, res) => {
  const { valor1, valor2 } = req.body;
  const resultado = valor1 - valor2;
  res.json({ resultado });
});
app.get('/sub', (req,res) => res.json({ resultado }));

app.post('/divs', (req, res) => {
  const { valor1, valor2 } = req.body;
  const resultado = valor1 / valor2;
  res.json({ resultado });
});
app.get('/divs', (req,res) => res.json({ resultado }));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API está ouvindo na porta ${port}`);
});