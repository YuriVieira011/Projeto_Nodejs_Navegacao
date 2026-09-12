const express = require("express");
const path = require("path");

const app = express();

// ========================================
// CONFIGURAÇÃO DO EJS
// ========================================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);


// ========================================
// MIDDLEWARES
// ========================================

// Permite receber dados enviados por formulário
app.use(express.urlencoded({ extended: true }));

// Permite receber requisições com JSON
app.use(express.json());


// ========================================
// ROTAS
// ========================================

const clienteRoutes = require("./Routes/clienteRoutes");

app.use("/cliente", clienteRoutes);

const produtoRoutes = require("./Routes/produtoRoutes");

app.use("/produto", produtoRoutes);

const fornecedorRoutes = require("./Routes/fornecedorRoutes");

app.use("/fornecedor", fornecedorRoutes);

const categoriaRoutes = require("./Routes/categoriaRoutes");

app.use("/categoria", categoriaRoutes);


// ========================================
// ROTA PRINCIPAL - index.ejs do Views
// ========================================

app.get("/", (req, res) => {

    res.render("index");

});


// ========================================
// SERVIDOR
// ========================================

app.listen(3000, () => {

    console.log(
        "Servidor rodando em http://localhost:3000"
    );

});