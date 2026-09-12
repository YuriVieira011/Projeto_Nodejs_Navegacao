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
    const novoCliente = {
        id: clientes.length + 1,
        nome: nome,
        email: email,
        telefone: telefone,
        cidade: cidade
    };
    clientes.push(novoCliente);
    res.redirect("/cliente");
});

module.exports = router;