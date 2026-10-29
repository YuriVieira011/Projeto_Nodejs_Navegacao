const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let produtos = [
  {
    id: 1,
    nome: "Sabão em pó",
    descricao: "Sabão em pó",
    preco: "20.00",
    estoque: "5000",
    categoria: "Produto de limpeza"
  },
  {
    id: 2,
    nome: "Computador",
    descricao: "Computador de uso pessoal com 100 GB",
    preco: "2000.00",
    estoque: "100",
    categoria: "Eletrônico"
  },
  {
    id: 3,
    nome: "Pão",
    descricao: "Pão a base de farinha de milho",
    preco: "5.00",
    estoque: "10000",
    categoria: "Produto alimentício"
  }
];

let ultimoId = 3; //Quantidade de produtos iniciais

router.get("/", (req, res) => {
    res.render("produtos/Index", {
        produtos: produtos
    });
});

router.get("/cadastro", (req, res) => {
    res.render("produtos/form-cadastro");
});

router.post("/", (req, res) => {
    const { nome, descricao, preco, estoque, categoria } = req.body;

    ultimoId++

    const novoProduto = {
        id: ultimoId,
        nome: nome,
        descricao: descricao,
        preco: preco,
        estoque: estoque,
        categoria: categoria
    };
    produtos.push(novoProduto);
    res.redirect("/produto");
});

//Excluir
router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  produtos = produtos.filter(p => p.id !== id);
  res.redirect("/produto");
});

//Editar - form - GET
router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.redirect("/produto");
  }

  res.render("produtos/editar", { produto });
});

//Editar - efetiva - POST
router.post("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  
  // Encontra o índice ou o objeto do produto no array
  let produto = produtos.find(c => c.id === id);

  if (!produto) {
    return res.redirect("/produto");
  }

  // Atualiza as propriedades com os dados enviados pelo formulário (req.body)
  produto.nome = req.body.nome;
  produto.descricao = req.body.descricao;
  produto.preco = req.body.preco;
  produto.estoque = req.body.estoque;
  produto.categoria = req.body.categoria;

  // Redireciona de volta para a listagem de produtos
  res.redirect("/produto");
});

module.exports = router;