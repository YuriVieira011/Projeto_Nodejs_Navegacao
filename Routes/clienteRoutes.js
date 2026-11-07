const express = require("express");
const { readRecords, writeRecords } = require("../utils/jsonStorage");

const router = express.Router();

const arquivoClientes = "clientes.json";

router.get("/", (req, res) => {
    res.render("clientes/Index", {
        clientes: readRecords(arquivoClientes)
    });
});

router.get("/cadastro", (req, res) => {
    res.render("clientes/form-cadastro");
});

router.post("/", (req, res) => {
    const { nome, email, telefone, cidade } = req.body;
    const clientes = readRecords(arquivoClientes);

    const novoCliente = {
        id: clientes.reduce((maiorId, cliente) => Math.max(maiorId, cliente.id), 0) + 1,
        nome: nome,
        email: email,
        telefone: telefone,
        cidade: cidade
    };
    clientes.push(novoCliente);
    writeRecords(arquivoClientes, clientes);
    res.redirect("/cliente");
});

//Excluir
router.get("/excluir/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const clientes = readRecords(arquivoClientes).filter(cliente => cliente.id !== id);
  writeRecords(arquivoClientes, clientes);
  res.redirect("/cliente");
});

//Editar - form - GET
router.get("/editar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const cliente = readRecords(arquivoClientes).find(cliente => cliente.id === id);

  if (!cliente) {
    return res.redirect("/cliente");
  }

  res.render("clientes/editar", { cliente });
});

//Editar - efetiva - POST
router.post("/editar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const clientes = readRecords(arquivoClientes);
  const cliente = clientes.find(cliente => cliente.id === id);

  if (!cliente) {
    return res.redirect("/cliente");
  }

  cliente.nome = req.body.nome;
  cliente.email = req.body.email;
  cliente.telefone = req.body.telefone;
  cliente.cidade = req.body.cidade;

  writeRecords(arquivoClientes, clientes);
  res.redirect("/cliente");
});

module.exports = router;