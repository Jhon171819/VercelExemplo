const express = require('express');
const { v4 } = require('uuid');

const app = express();
const url = "/api"
app.use(express.static('public'))
// Configurar middleware para análise do corpo da solicitação como JSON
app.use(express.json());
app.post(url + '/adi', (req, res) => {
  const { valor1, valor2 } = req.body;
  const resultado = valor1 + valor2;
  res.json({ resultado });
});

app.get(url + '/adi', (req,res) => {res.json({ resultado })});

app.post(url + '/mult', (req, res) => {
  const { valor1, valor2 } = req.body;
  const resultado = valor1 * valor2;
  res.json({ resultado });
});

app.get(url + '/mult', (req,res) => {res.json({ resultado })});

app.post(url + '/sub', (req, res) => {
  const { valor1, valor2 } = req.body;
  const resultado = valor1 - valor2;
  res.json({ resultado });
});
app.get(url + '/sub', (req,res) => {
  res.json({ resultado });
});
app.post(url + '/divs', (req, res) => {
  const { valor1, valor2 } = req.body;
  const resultado = valor1 / valor2;
  res.json({ resultado });
});
app.get(url + '/divs', (req,res) => {
  
  res.json({ resultado })
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API está ouvindo na porta ${port}`);
});