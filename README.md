- **Nome do Projeto**: CRUD.ejs;

- **Integrantes**: Yuri Vieira de Oliveira, 2°DS - AMS;

- **Objetivo**: Desenvolver um projeto sem banco de dados simples de CRUD (Create, Read, Update e Delete) para categorias, clientes, fornecedores e produtos;

- **Tecnologias Utilizadas**: CSS, HTML, EJS, JSON, Vercel, Github, Node.js, Bootstrap, npm e Express.js;

- **Funcionalidades**: CRUD completo, menu de navegação, Modo Escuro e Modo Claro e sistema de ordenar listas;

- **Prompt Utilizado**: 

------ Copilot (VS code) ------
- **Prompt**: Poderia adicionar um sistema de tema claro e escuro?

- **Prompt**: Poderia adicionar em todas as páginas com lista botões de organizar em ordem alfabética, de organizar em ordem crescente de ID e de organizar em ordem decrescente de ID?

------ Gemini ------
- **Prompt**:
------ Código do Routes --------
[código completo de clienteRoutes.js]

------ Código de editar.ejs --------
[código completo de editar.ejs de clientes]

Faça com que o botão de editar realmente funcione.

- **Prompt**:
Pq ao criar um novo produto, deletar o 2°produto e criar denovo outro produto, ele terá o mesmo ID do primeiro novo produto?

- **Prompt**: <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="/"> CRUD.ejs</a>
    <button

      class="navbar-toggler"

      type="button"

      data-bs-toggle="collapse"

      data-bs-target="#menu"

    >

      <span class="navbar-toggler-icon"></span>

    </button>
    <div class="collapse navbar-collapse" id="menu">

      <ul class="navbar-nav me-auto">

        <li class="nav-item">

          <a class="nav-link" href="/"

            ><i class="bi bi-house-door-fill"></i> Início

          </a>

        </li>
        <li class="nav-item">

          <a class="nav-link" href="/cliente"

            ><i class="bi bi-people-fill"></i> Clientes

          </a>

        </li>

        <li class="nav-item">

          <a class="nav-link" href="/produto"

            ><i class="bi bi-bag-fill"></i> Produtos

          </a>

        </li>

        <li class="nav-item">

          <a class="nav-link" href="/fornecedor"

            ><i class="bi bi-airplane-fill"></i> Fornecedores

          </a>

        </li>

        <li class="nav-item">

          <a class="nav-link" href="/categoria"

            ><i class="bi bi-menu-button-wide-fill"></i> Categorias

          </a>

        </li>

      </ul>

    </div>

  </div>
</nav>
Poderia fazer com que, ao passar o mouse em cima, os ícones fiquem preenchidos (igual os ícones atuais) e, quando ficar sem o mouse em cima, fiquem apenas em outline.

- **Prompt**: <nav class="navbar navbar-expand-lg bg-accent navbar-accent">
Poderia deixar o navbar roxo (accent do bootstrap)

- **Prompt**: <%- include("Partials/header") %>

<%- include("Partials/nav") %>

<div class="container mt-5">

    <div class="p-5 mb-4 bg-light rounded-3">

        <div class="container-fluid py-4">

            <h1 class="display-5 fw-bold">Sistema de Navegação</h1>



            <p class="col-md-8 fs-5">

                Nome: Yuri Vieira de Oliveira, 2°DS - AMS

            </p>



            <a href="/cliente" class="btn accent btn-lg"> Ver clientes </a>

            <br><br>

            <a href="/produto" class="btn accent btn-lg"> Ver produtos </a>

            <br><br>

            <a href="/fornecedor" class="btn accent btn-lg"> Ver fornecedores </a>

            <br><br>

            <a href="/categoria" class="btn accent btn-lg"> Ver categorias </a>

        </div>

    </div>

</div>

<%- include("Partials/footer") %>

------------------------------------------------------

<!DOCTYPE html>

<html lang="pt-BR">

  <head>

    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>CRUD.ejs</title>

    <!-- Bootstrap 5 CSS -->

    <link

      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"

      rel="stylesheet"

    />

    <!-- Bootstrap Icons -->

    <link

      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"

      rel="stylesheet"

    />

    <style>

      .accent {

        background-color: #6f42c1;

        color: white;

      }

      /* Por padrão: mostra apenas o ícone outline e esconde o preenchido */

      .icon-hover .icon-filled {

        display: none;

      }

      .icon-hover .icon-outline {

        display: inline-block;

      }

      /* Ao passar o mouse (hover): esconde o outline e mostra o preenchido */

      .icon-hover:hover .icon-outline {

        display: none;

      }

      .icon-hover:hover .icon-filled {

        display: inline-block;
      }

    </style>

  </head>

  <body></body>

</html>
Faça com que ,ao passar o mouse em cima, os botões do Index.ejs aumentem de tamanho.

- **Prompt**: Proponha atualizações interessantes para a página inicial (é um sistema de CRUD completo simples).

- **Prompt**: 
    [código completo de Index.ejs de Views/clientes]

    Poderia fazer o mesmo com clientes

- **Prompt**: Crie uma logo simples com base nas cores temas do site (laranja e roxo).

- **Uso da Inteligência Artificial**: Ouve uso constante de IA, principalmente o Github Copilot, para implementações que precisavam acessar múltiplos arquivos, e Gemini, usado principalmente para concertar erros e para propôr e implementar melhorias.

- **Alterações Sugeridas pela IA**: as alterações sugeridas pela IA foram:

- Correções de erros;
- Sistema de Grid de Cards na página principal (telas grandes com botões de acesso que se adaptam ao tamanho da tela);
- Ícones nos botões de acesso da página principal;
- Efeito de "elevação" ao passar o mouse em cima de um card da página principal;
- Design da logo;
- Implementação de Cards na página de clientes;

- Alterações sugeridas pelo integrante, mas implementadas usando IA:

- Sistema de Ícones fill e outline no Navbar;
- Botões e Navbar aumentarem de tamanho ao passar o botão em cima;
- Modo Escuro e Modo Claro;
- Sistema de organização por ordem alfabética e ordem crescente e decrescente com base em IDs;
- Paleta de cores baseada em laranja e roxo;

- **Alterações Implementadas pelo Grupo**:
- De todas as alterações sugeridas, apenas a implementação de Cards na página de clientes não foi usada.
- Também foram adicionadas as alterações:
- Ícones no Navbar;

- **Prints da Conversa com a IA**:
[Todos os prints estão na pasta Capturas_de_tela]

- **Antes da Reestilização**:
[Todos os prints estão na pasta Pre_estilizacao]

- **Depois da Reestilização**:
[Todos os prints na pasta Pos_estilizacao]

- **Link da Aplicação**:
https://nodeprojnav.vercel.app/

- **Link do Repositório**:

