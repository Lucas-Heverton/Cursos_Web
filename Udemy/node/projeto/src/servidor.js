const porta = 3003

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancodedados = require('./bancodedados.js');

/* app.get('/produtos', (req, res, next) => {
  console.log('Middleware 1...')
  next()
}) */

/* app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'PS4', preco: 1457.93 }) // Objeto convertido em JSON
}) */

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
  res.send(bancodedados.getPodutos())
})

app.get('/produtos/:id', (req, res, next) => {
 res.send(bancodedados.getProduto(req.params.id))
})

//vai adicionar o produto no db
app.post('/produtos', (req, res, next) => {
  const produto = bancodedados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // vai gerar um JSON 
})

//vai alterar/renomear o produto pelo id(primary key)
app.put('/produtos/:id', (req, res, next) => {
  const produto = bancodedados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // vai gerar um JSON 
})

//vai excluir/deletar o produto
app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancodedados.excluirProduto(req.params.id)
  res.send(produto) // vai gerar um JSON 
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})