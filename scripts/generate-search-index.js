#!/usr/bin/env node
/**
 * Gera assets/search-index.json a partir do front-matter de todos os
 * manuais em /manuais.
 *
 * Antes (problema): a busca do site usava um array escrito à mão dentro
 * do index.html, com só 5 itens — e vários apontavam pra manuais que nem
 * existiam. Toda vez que alguém adicionava um manual novo, precisava abrir
 * o index.html e editar JS na mão, o que ia contra a proposta do projeto
 * de "atualizar sem precisar mexer em código".
 *
 * Agora: este script varre a pasta /manuais recursivamente, lê o
 * front-matter (id, title, keywords) e o começo do conteúdo de cada
 * arquivo .md, e gera um único JSON com todos os manuais existentes.
 * A busca no navegador carrega esse JSON pronto — sem precisar reabrir
 * o index.html.
 *
 * Uso:
 *   node scripts/generate-search-index.js
 *
 * Rode este comando toda vez que adicionar, remover ou renomear um manual.
 * (Dá pra automatizar com um GitHub Action que roda isso a cada push —
 * ver sugestão no final do LEIA-ME.)
 */

const fs = require("fs");
const path = require("path");

const MANUAIS_DIR = path.join(__dirname, "..", "manuais");
const OUTPUT_FILE = path.join(__dirname, "..", "assets", "search-index.json");

function listarArquivosMd(dir) {
  let resultado = [];
  for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
    const caminhoCompleto = path.join(dir, entrada.name);
    if (entrada.isDirectory()) {
      resultado = resultado.concat(listarArquivosMd(caminhoCompleto));
    } else if (entrada.isFile() && entrada.name.endsWith(".md")) {
      resultado.push(caminhoCompleto);
    }
  }
  return resultado;
}

function parseFrontMatter(conteudo) {
  const match = conteudo.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, corpo: conteudo };

  const blocoMeta = match[1];
  const corpo = match[2];
  const meta = {};

  for (const linha of blocoMeta.split("\n")) {
    const linhaSimples = linha.match(/^(\w+):\s*"([^"]*)"\s*$/);
    if (linhaSimples) {
      meta[linhaSimples[1]] = linhaSimples[2];
      continue;
    }
    const linhaLista = linha.match(/^(\w+):\s*\[(.*)\]\s*$/);
    if (linhaLista) {
      meta[linhaLista[1]] = linhaLista[2]
        .split(",")
        .map((s) => s.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
    }
  }
  return { meta, corpo };
}

function extrairResumo(corpo) {
  // remove marcações mais comuns de markdown/HTML pra sobrar só texto corrido
  const textoLimpo = corpo
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // imagens
    .replace(/<[^>]+>/g, " ") // tags html soltas (ex: <a>, <details>)
    .replace(/^#+\s*/gm, "") // headings
    .replace(/^>\s?/gm, "") // marcador de blockquote no início da linha
    .replace(/^[-*]\s+/gm, "") // marcador de lista no início da linha
    .replace(/[*_`]/g, "") // negrito/itálico/código (sem mexer em hífen interno de palavras)
    .replace(/\s+/g, " ")
    .trim();
  return textoLimpo.slice(0, 220);
}

function gerar() {
  const arquivos = listarArquivosMd(MANUAIS_DIR);
  const indice = [];

  for (const arquivo of arquivos) {
    const conteudo = fs.readFileSync(arquivo, "utf-8");
    const { meta, corpo } = parseFrontMatter(conteudo);

    const caminhoRelativo = path
      .relative(MANUAIS_DIR, arquivo)
      .replace(/\.md$/, "")
      .split(path.sep)
      .join("/");

    indice.push({
      titulo: meta.title || caminhoRelativo,
      caminho: caminhoRelativo,
      tipo: meta.type || "manual",
      palavras_chave: meta.keywords || [],
      resumo: extrairResumo(corpo),
    });
  }

  indice.sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(indice, null, 2), "utf-8");

  console.log(`Índice gerado com ${indice.length} manuais -> ${path.relative(process.cwd(), OUTPUT_FILE)}`);
}

gerar();
