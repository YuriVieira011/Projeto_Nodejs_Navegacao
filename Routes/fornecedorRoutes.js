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

let ultimoId = 3; //Quantidade de fornecedores iniciais

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

    ultimoId++

    const novoFornecedor = {
        id: ultimoId,
        razaosocial: razaosocial,
        cnpj: cnpj,
        email: email,
        telefone: telefone,
        cidade: cidade
    };
    fornecedores.push(novoFornecedor);
    res.redirect("/fornecedor");
});

//Excluir
router.get("/excluir/:id", (req, res) => {
  let id = parseInt(req.params.id);
  fornecedores = fornecedores.filter(f => f.id !== id);
  res.redirect("/fornecedor");
});

//Editar - form - GET
router.get("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let fornecedor = fornecedores.find(f => f.id === id);

  if (!fornecedor) {
    return res.redirect("/fornecedor");
  }

  res.render("fornecedores/editar", { fornecedor });
});

//Editar - efetiva - POST
router.post("/editar/:id", (req, res) => {
  let id = parseInt(req.params.id);
  
  // Encontra o índice ou o objeto do fornecedor no array
  let fornecedor = fornecedores.find(c => c.id === id);

  if (!fornecedor) {
    return res.redirect("/fornecedor");
  }

  // Atualiza as propriedades com os dados enviados pelo formulário (req.body)
  fornecedor.razaosocial = req.body.razaosocial;
  fornecedor.cnpj = req.body.cnpj;
  fornecedor.email = req.body.email;
  fornecedor.telefone = req.body.telefone;
  fornecedor.cidade = req.body.cidade;

  // Redireciona de volta para a listagem de fornecedores
  res.redirect("/fornecedor");
});

module.exports = router;