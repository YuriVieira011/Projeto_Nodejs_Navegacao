const fs = require("fs");
const path = require("path");

const diretorioDados = path.join(__dirname, "..", "Data");

function readRecords(nomeArquivo) {
    const caminhoArquivo = path.join(diretorioDados, nomeArquivo);
    const conteudo = fs.readFileSync(caminhoArquivo, "utf8");

    return JSON.parse(conteudo);
}

function writeRecords(nomeArquivo, registros) {
    const caminhoArquivo = path.join(diretorioDados, nomeArquivo);
    const conteudo = JSON.stringify(registros, null, 2);

    fs.writeFileSync(caminhoArquivo, conteudo, "utf8");
}

module.exports = {
    readRecords,
    writeRecords
};