- **Nome do Projeto**: CRUD.ejs;

- **Integrantes**: Yuri Vieira de Oliveira, 2°DS - AMS;

- **Objetivo**: Desenvolver um projeto sem banco de dados simples de CRUD (Create, Read, Update e Delete) para categorias, clientes, fornecedores e produtos;

- **Estrutura de Pastas**:
Trabalho-Navegação
⨽ api/
    ⨽ index.js
⨽ Data/
    ⨽ categorias.json
    ⨽ clientes.json
    ⨽ fornecedores.json
    ⨽ produtos.json
⨽ img_estilizacao/
    ⨽ Capturas_de_tela/
        ⨽ [Imagens dos prompts usados para estilização do site]
    ⨽ Pos_estilizacao/
        ⨽ [Imagens do site após a estilização]
    ⨽ Pre_estilizacao/
        ⨽ [Imagens do site antes da estilização]
⨽ img_migracao/
    ⨽ [Imagens dos prompts e respostas usadas para a migração para JSON]
⨽ node_modules/
    ⨽ [Arquivos, pastas e bibliotecas de terceiros que permite o funcionamento do projeto]
⨽ Routes/
    ⨽ categoriaRoutes.js
    ⨽ clienteRoutes.js
    ⨽ fornecedorRoutes.js
    ⨽ produtoRoutes.js
⨽ utils/
    ⨽jsonStorage.js
⨽ Views/
    ⨽ Categorias/
        ⨽ editar.ejs
        ⨽ form-cadastro.ejs
        ⨽ Index.ejs
    ⨽ clientes/
        ⨽ editar.ejs
        ⨽ form-cadastro.ejs
        ⨽ Index.ejs
    ⨽ fornecedores/
        ⨽ editar.ejs
        ⨽ form-cadastro.ejs
        ⨽ Index.ejs
    ⨽ Partials/
        ⨽ footer.ejs
        ⨽ header.ejs
        ⨽ nav.ejs
        ⨽ sort-controls.ejs
    ⨽ produtos/
        ⨽ editar.ejs
        ⨽ form-cadastro.ejs
        ⨽ Index.ejs
    ⨽ Index.ejs
⨽ .gitignore
⨽ app.js
⨽ package-lock.json
⨽ package.jsom
⨽ README_MIGRACAO.md
⨽ README.md
⨽ vercel.json

- **Entidades Utilizadas**: categorias, clientes, fornecedores e produtos;
- **Prompt Utilizado**:
    - **Prompt**: Criar uma pasta chamada:
    data/

    Criar um arquivo JSON para cada entidade do sistema.
    Exemplos:
    data/produtos.json
    data/clientes.json
    data/categorias.json

    Remover os dados fixos existentes nos controllers.

    Implementar o CRUD utilizando os arquivos JSON:
    ✅ Create (Cadastrar)
    ✅ Read (Listar)
    ✅ Update (Editar)
    ✅ Delete (Excluir)

    Todas as operações devem ler e gravar diretamente nos arquivos JSON.

    Crie um passo a passo para implementar esses requisitos (NÃO quero que modifique nada no código, apenas faça um passo a passo)

    - **Resposta**:                     Passo a passo

        Pelo estado atual do projeto, as rotas já contêm operações CRUD que chamam readRecords e writeRecords, mas a pasta utils/ e a pasta data/ não aparecem no projeto. As quatro entidades existentes são produtos, clientes, categorias e fornecedores — não apenas as três dos exemplos. Não fiz nenhuma alteração no código.

        Criar a pasta data/ na raiz do projeto.
        Criar um arquivo JSON por entidade, cada um iniciado com uma lista vazia:
        data/produtos.json
        data/clientes.json
        data/categorias.json
        data/fornecedores.json
        Criar um utilitário de armazenamento, por exemplo utils/jsonStorage.js, com funções para ler e gravar esses arquivos. A leitura deve localizar os arquivos dentro de data/ e interpretar o conteúdo JSON; a gravação deve serializar os registros novamente no arquivo.
        Manter os dados fora das rotas. Cada rota deve obter os registros do arquivo correspondente, sem depender de arrays fixos em memória.
        Conferir as operações CRUD já existentes em produtoRoutes.js, clienteRoutes.js, categoriaRoutes.js e fornecedorRoutes.js:
        Create: ler os registros, adicionar o novo item e gravar.
        Read: ler o arquivo e enviar os registros para a página.
        Update: localizar o item pelo ID, atualizar os campos e gravar.
        Delete: remover o item pelo ID e gravar.
        Validar os formulários e páginas EJS para garantir que os campos enviados correspondam aos campos esperados pelas rotas.
        Testar a persistência: cadastrar, listar, editar e excluir registros; depois reiniciar o servidor e confirmar que os dados continuam nos arquivos JSON.
        Observação: nas rotas atuais, a exclusão usa GET. Ao implementar ou revisar essa operação, prefira um método que altere dados, como POST ou DELETE.
    
    - **Prompt**: Criar um utilitário de armazenamento, por exemplo utils/jsonStorage.js, com funções para ler e gravar esses arquivos. A leitura deve localizar os arquivos dentro de data/ e interpretar o conteúdo JSON; a gravação deve serializar os registros novamente no arquivo.

    Poderia explicar detalhadamente oq devo fazer?

    - **Resposta**:Claro. Esse utilitário será a parte que lê e grava os arquivos JSON para que as rotas não precisem repetir essa lógica.

    No seu projeto já existem arquivos de dados dentro de Data, incluindo produtos.json. As rotas também já tentam importar ../utils/jsonStorage, mas esse arquivo ainda não aparece no projeto.

    1. Confira o nome da pasta
    O requisito menciona data/ em minúsculas, mas a pasta atual se chama Data/, com inicial maiúscula. O Windows geralmente trata esses nomes como equivalentes, mas outros sistemas — como servidores Linux — podem diferenciá-los.

    Para evitar problemas, recomendo padronizar o nome como data/ e usar esse mesmo nome no utilitário. Se mantiver Data/, ajuste o trecho do caminho no código abaixo para "Data".

    2. Crie o arquivo do utilitário
    Crie a pasta utils/ na raiz do projeto e, dentro dela, crie jsonStorage.js. A estrutura ficará assim:


    3. Coloque as funções de leitura e gravação no utilitário
    Como as rotas já chamam readRecords e writeRecords, o utilitário pode ter este conteúdo:


    O que cada parte faz:

    fs permite ler e gravar arquivos.
    path constrói o caminho de forma compatível com o sistema operacional.
    __dirname representa a pasta onde está jsonStorage.js.
    path.join(__dirname, "..", "data") sobe de utils/ para a raiz do projeto e aponta para data/.
    readRecords recebe o nome do arquivo, lê seu conteúdo como texto e transforma o JSON em dados JavaScript com JSON.parse.
    writeRecords transforma os dados JavaScript em JSON formatado e grava o resultado no arquivo.
    module.exports permite que as rotas importem essas duas funções.
    Se mantiver a pasta atual com inicial maiúscula, troque "data" por "Data".

    4. Confira o formato inicial dos arquivos
    Cada arquivo deve conter um array JSON válido. Para uma entidade ainda sem registros, o conteúdo inicial pode ser:


    O arquivo de produtos que você já tem contém uma lista de objetos. A função de leitura transforma essa lista em um array JavaScript para que as rotas possam adicionar, procurar, editar ou remover itens.

    5. Veja como as rotas usam o utilitário
    Por exemplo, a rota de produtos já importa as funções desta forma:


    E define o arquivo que vai usar:


    Na listagem, readRecords(arquivoProdutos) lê data/produtos.json. No cadastro, a rota lê os registros, adiciona o produto e chama writeRecords(arquivoProdutos, produtos) para persistir a lista atualizada. Edição e exclusão seguem a mesma ideia: ler, alterar o array e gravar novamente.

    Importante: o exemplo não cria automaticamente a pasta nem os arquivos. Eles precisam existir antes das operações; por isso, mantenha a pasta e os arquivos JSON no local indicado. Se um arquivo estiver ausente ou tiver JSON inválido, a leitura vai gerar um erro — isso ajuda a identificar o problema em vez de ocultá-lo.
    - **Prompt**: Poderia testar se todas funções estão devidamente funcionando?

    - **Respota**: Testei o CRUD de clientes, produtos, fornecedores e categorias no servidor local. As operações de listagem, cadastro, abertura do formulário de edição, atualização e exclusão passaram; também confirmei que os registros eram gravados nos arquivos JSON.

    Após os testes, restaurei os quatro arquivos ao conteúdo original. Confirmei que continuam válidos e que jsonStorage.js exporta as funções de leitura e gravação. Não alterei o código.

    Um detalhe: o utilitário procura a pasta data em minúsculas, mas no projeto ela se chama Data. Os testes passaram no Windows, que não diferencia maiúsculas de minúsculas nos caminhos; em um ambiente Linux, essa diferença pode causar falha.

- Uso da Inteligência Artificial
    A IA utiliza foi o Copilot Github do VS Code, sendo usada principalmente para teste e para ajudar na migração para JSON;

    - Todas as imagens dos prompts e respostas da IA estão em img_migracao/

- Alterações Realizadas
    - Pasta "Data" adicionada para armazenar os arquivos JSON de forma organizada e que mantém as alterações feitas mesmo após desligar ou reiniciar o sistema;
    - Pasta "utils" e arquivo jsonStorage.js usada para ler e gravar os arquivos JSON;
    - Retirei partes redundantes nos Routes (como os arrays usados para "armazenar" dados).
- Desafios Encontrados
    Poucos ou quase nenhum, apenas um problema com o nome da pasta Data, que funciona perfeitamente no sistema Windows, mas que pode ter problemas no sistema Linux pois o Linux diferencia arquivos e pastas em letras maiúsculas de letras minúsculas.
- Link do Repositório
    https://github.com/YuriVieira011/Projeto_Nodejs_Navegacao

- Link da aplicação
    https://nodeprojnav.vercel.app/

- Conclusão
    Antes os dados eram armazenados em arrays na pasta Routes e as alterações feitas pelos usuários não eram salvas, sendo perdidas ao desligar ou reiniciar o sistema;

    Agora as alterações (como adicionar, editar ou remover entidades) são gravadas em arquivos JSON, ou seja, permanecem mesmo após desligar ou reiniciar o sistema. Além disso, os dados estão organizados em uma pasta chamada Data que está separada dos arquivos usados para o funcionamento do CRUD (Atualmente localizados na pasta Routes).
