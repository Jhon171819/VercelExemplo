const express = require('express')
const app = require('express')();
const { v4 } = require('uuid');
const port = 3000
app.use(express.static('public'));
app.use(express.json());

app.post('/', (req, res) => {
  res.json("frase nova");
});

app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});


app.listen(port,() => {
  console.log(`server rodando na porta ${port}`)
})
  

module.exports = app;