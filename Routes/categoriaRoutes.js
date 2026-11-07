const express = require("express");
const { readRecords, writeRecords } = require("../utils/jsonStorage");

const router = express.Router();

const arquivoCategorias = "categorias.json";

router.get("/", (req, res) => {
    res.render("Categorias/Index", {
        categorias: readRecords(arquivoCategorias)
    });
});

router.get("/cadastro", (req, res) => {
    res.render("Categorias/form-cadastro");
});

router.post("/", (req, res) => {
    const { nome, descricao } = req.body;
    const categorias = readRecords(arquivoCategorias);

    const novaCategoria = {
        id: categorias.reduce((maiorId, categoria) => Math.max(maiorId, categoria.id), 0) + 1,
        nome: nome,
        descricao: descricao
    };
    categorias.push(novaCategoria);
    writeRecords(arquivoCategorias, categorias);
    res.redirect("/categoria");
});

//Excluir
router.get("/excluir/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const categorias = readRecords(arquivoCategorias).filter(categoria => categoria.id !== id);
  writeRecords(arquivoCategorias, categorias);
  res.redirect("/categoria");
});

//Editar - form - GET
router.get("/editar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const categoria = readRecords(arquivoCategorias).find(categoria => categoria.id === id);

  if (!categoria) {
    return res.redirect("/categoria");
  }

  res.render("Categorias/editar", { categoria });
});

//Editar - efetiva - POST
router.post("/editar/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const categorias = readRecords(arquivoCategorias);
  const categoria = categorias.find(categoria => categoria.id === id);

  if (!categoria) {
    return res.redirect("/categoria");
  }

  categoria.nome = req.body.nome;
  categoria.descricao = req.body.descricao;

  writeRecords(arquivoCategorias, categorias);
  res.redirect("/categoria");
});

module.exports = router;