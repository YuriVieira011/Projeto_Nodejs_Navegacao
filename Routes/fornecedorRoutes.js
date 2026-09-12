const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let fornecedores = [
  {
    id: 1,
    razaosocial: "Banco S.A.",
    cnpj: "00000000000001",
    email: "banco@example.com",
    telefone: "(11) 1111-1111",
    cidade: "São Paulo"
  },
  {
    id: 2,
    razaosocial: "Empresa Ltda.",
    cnpj: "00000000000002",
    email: "empresa@example.com",
    telefone: "(11) 2222-2222",
    cidade: "Rio de Janeiro"
  },
  {
    id: 3,
    razaosocial: "Fornecedor S.A.",
    cnpj: "00000000000003",
    email: "fornecedor@example.com",
    telefone: "(11) 3333-3333",
    cidade: "Belo Horizonte"
  }
];

router.get("/", (req, res) => {
    res.render("fornecedores/Index", {
        fornecedores: fornecedores
    });
});

router.get("/cadastro", (req, res) => {
    res.render("fornecedores/form-cadastro");
});

router.post("/", (req, res) => {
    const { razaosocial, cnpj, email, telefone, cidade } = req.body;
    const novoFornecedor = {
        id: fornecedores.length + 1,
        razaosocial: razaosocial,
        cnpj: cnpj,
        email: email,
        telefone: telefone,
        cidade: cidade
    };
    fornecedores.push(novoFornecedor);
    res.redirect("/fornecedor");
});

module.exports = router;