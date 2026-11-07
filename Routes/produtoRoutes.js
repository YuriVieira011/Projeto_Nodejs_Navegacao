const express = require("express");
const { readRecords, writeRecords } = require("../utils/jsonStorage");

const router = express.Router();

const arquivoProdutos = "produtos.json";

router.get("/", (req, res) => {
    res.render("produtos/Index", {
        produtos: readRecords(arquivoProdutos)
    });
});

router.get("/cadastro", (req, res) => {
    res.render("produtos/form-cadastro");
});

router.post("/", (req, res) => {
    const { nome, descricao, preco, estoque, categoria } = req.body;
    const produtos = readRecords(arquivoProdutos);

    const novoProduto = {
        id: produtos.reduce((maiorId, produto) => Math.max(maiorId, produto.id), 0) + 1,
        nome: nome,
        descricao: descricao,
        preco: preco,
        estoque: estoque,
        categoria: categoria
    };
    produtos.push(novoProduto);
    writeRecords(arquivoProdutos, produtos);
    res.redirect("/produto");
});

//Excluir
router.get("/excluir/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const produtos = readRecords(arquivoProdutos).filter(produto => produto.id !== id);
  writeRecords(arquivoProdutos, produtos);
  res.redirect("/produto");
});

//Editar - form - GET
router.get("/editar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const produto = readRecords(arquivoProdutos).find(produto => produto.id === id);

  if (!produto) {
    return res.redirect("/produto");
  }

  res.render("produtos/editar", { produto });
});

//Editar - efetiva - POST
router.post("/editar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const produtos = readRecords(arquivoProdutos);
  const produto = produtos.find(produto => produto.id === id);

  if (!produto) {
    return res.redirect("/produto");
  }

  produto.nome = req.body.nome;
  produto.descricao = req.body.descricao;
  produto.preco = req.body.preco;
  produto.estoque = req.body.estoque;
  produto.categoria = req.body.categoria;

  writeRecords(arquivoProdutos, produtos);
  res.redirect("/produto");
});

module.exports = router;