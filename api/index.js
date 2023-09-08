const express = require('express');
const { v4 } = require('uuid');

const app = express();
const url = "/api"
app.use(express.static('public'))
// Configurar middleware para análise do corpo da solicitação como JSON
app.use(express.json());

let valores = {}
let resultado = {}
app.post(url + '/adi', (req, res) => {
  valores = req.body;
  resultado = valores.valor1 + valores.valor2;
  res.json({ resultado });
});

app.get(url + '/adi', (req,res) => {
  
  res.json({ resultado })
});

app.post(url + '/mult', (req, res) => {
  valores = req.body;
  resultado = valores.valor1 * valores.valor2;
  res.json({ resultado });
});

app.get(url + '/mult', (req,res) => {res.json({ resultado })});

app.post(url + '/sub', (req, res) => {
  valores = req.body;
  resultado = valores.valor1 - valores.valor2;
  res.json({ resultado });
});
app.get(url + '/sub', (req,res) => {
  res.json({ resultado });
});
app.post(url + '/divs', (req, res) => {
  valores = req.body;
  resultado = valores.valor1 / valores.valor2;
  res.json({ resultado });
});
app.get(url + '/divs', (req,res) => {
  
  res.json({ resultado })
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API está ouvindo na porta ${port}`);
});