const express = require("express");
const { readRecords, writeRecords } = require("../utils/jsonStorage");

const router = express.Router();

const arquivoFornecedores = "fornecedores.json";

router.get("/", (req, res) => {
    res.render("fornecedores/Index", {
        fornecedores: readRecords(arquivoFornecedores)
    });
});

router.get("/cadastro", (req, res) => {
    res.render("fornecedores/form-cadastro");
});

router.post("/", (req, res) => {
    const { razaosocial, cnpj, email, telefone, cidade } = req.body;
    const fornecedores = readRecords(arquivoFornecedores);

    const novoFornecedor = {
        id: fornecedores.reduce((maiorId, fornecedor) => Math.max(maiorId, fornecedor.id), 0) + 1,
        razaosocial: razaosocial,
        cnpj: cnpj,
        email: email,
        telefone: telefone,
        cidade: cidade
    };
    fornecedores.push(novoFornecedor);
    writeRecords(arquivoFornecedores, fornecedores);
    res.redirect("/fornecedor");
});

//Excluir
router.get("/excluir/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const fornecedores = readRecords(arquivoFornecedores).filter(fornecedor => fornecedor.id !== id);
  writeRecords(arquivoFornecedores, fornecedores);
  res.redirect("/fornecedor");
});

//Editar - form - GET
router.get("/editar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const fornecedor = readRecords(arquivoFornecedores).find(fornecedor => fornecedor.id === id);

  if (!fornecedor) {
    return res.redirect("/fornecedor");
  }

  res.render("fornecedores/editar", { fornecedor });
});

//Editar - efetiva - POST
router.post("/editar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const fornecedores = readRecords(arquivoFornecedores);
  const fornecedor = fornecedores.find(fornecedor => fornecedor.id === id);

  if (!fornecedor) {
    return res.redirect("/fornecedor");
  }

  fornecedor.razaosocial = req.body.razaosocial;
  fornecedor.cnpj = req.body.cnpj;
  fornecedor.email = req.body.email;
  fornecedor.telefone = req.body.telefone;
  fornecedor.cidade = req.body.cidade;

  writeRecords(arquivoFornecedores, fornecedores);
  res.redirect("/fornecedor");
});

module.exports = router;