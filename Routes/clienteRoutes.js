const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let clientes = [
  {
    id: 1,
    nome: "Mauricio",
    email: "mauricio@example.com",
    telefone: "(11) 1111-1111",
    cidade: "São Paulo"
  },
  {
    id: 2,
    nome: "Fernando",
    email: "fernando@example.com",
    telefone: "(11) 2222-2222",
    cidade: "Rio de Janeiro"
  },
  {
    id: 3,
    nome: "Jorge",
    email: "jorge@example.com",
    telefone: "(11) 3333-3333",
    cidade: "Belo Horizonte"
  }
];
let ultimoId = 3; //Quantidade de clientes iniciais

router.get("/", (req, res) => {
    res.render("clientes/Index", {
        clientes: clientes
    });
});

router.get("/cadastro", (req, res) => {
    res.render("clientes/form-cadastro");
});

router.post("/", (req, res) => {
    const { nome, email, telefone, cidade } = req.body;

    ultimoId++

    const novoCliente = {
        id: ultimoId,
        nome: nome,
        email: email,
        telefone: telefone,
        cidade: cidade
    };
    clientes.push(novoCliente);
    res.redirect("/cliente");
});

//Excluir
router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  clientes = clientes.filter(c => c.id !== id);
  res.redirect("/cliente");
});

//Editar - form - GET
router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.redirect("/cliente");
  }

  res.render("clientes/editar", { cliente });
});

//Editar - efetiva - POST
router.post("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  
  // Encontra o índice ou o objeto do cliente no array
  let cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.redirect("/cliente");
  }

  // Atualiza as propriedades com os dados enviados pelo formulário (req.body)
  cliente.nome = req.body.nome;
  cliente.email = req.body.email;
  cliente.telefone = req.body.telefone;
  cliente.cidade = req.body.cidade;

  // Redireciona de volta para a listagem de clientes
  res.redirect("/cliente");
});

module.exports = router;