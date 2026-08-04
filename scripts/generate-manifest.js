#!/usr/bin/env node
/**
 * Gera, a partir do front-matter de todos os manuais em /manuais:
 *
 *   1. assets/search-index.json  -> alimenta a busca do site
 *   2. assets/nav-manifest.json  -> alimenta o menu lateral do site
 *
 * A ideia: pra uma funcionalidade nova aparecer na Central de Ajuda,
 * a única coisa que a equipe precisa fazer é criar o manual em .md,
 * com um front-matter como este:
 *
 *   ---
 *   id: "financeiro-recorrencias"
 *   title: "Recorrências"
 *   type: "manual"
 *   keywords: ["recorrencia", "cobranca recorrente", "assinatura"]
 *   module: "financeiro"        <- em qual módulo do menu ele entra
 *   order: 20                   <- opcional: posição dentro do módulo
 *   nav_label: "Recorrências"   <- opcional: texto exibido no menu
 *                                  (se omitido, usa o "title")
 *   last_updated: "2026-08-03"
 *   ---
 *
 * Manuais sem "module" no front-matter (ex: type "reference", ou
 * conteúdo de apoio que não deve aparecer no menu) simplesmente não
 * entram no nav-manifest.json — mas continuam pesquisáveis, a não ser
 * que o type seja "reference" (esses ficam de fora dos dois).
 *
 * Pra um manual virar um SUBMENU (como "Cadastros" dentro de
 * Atendimentos), outros manuais apontam pra ele via "parent":
 *
 *   ---
 *   id: "cadastros-etiquetas"
 *   module: "atendimentos"
 *   parent: "atendimentos-cadastros"   <- id do manual "hub"
 *   order: 10
 *   ---
 *
 * Os módulos de topo (Atendimentos, Financeiro...) continuam com
 * curadoria manual em scripts/modules.json, porque criar um módulo novo
 * é uma decisão da equipe, não algo que deva acontecer sozinho.
 *
 * Uso:
 *   node scripts/generate-manifest.js
 *
 * Rode sempre que adicionar, remover, renomear ou reorganizar um manual.
 * A Action em .github/workflows/update-search-index.yml faz isso
 * automaticamente a cada push que mexer em /manuais.
 */

const fs = require("fs");
const path = require("path");

const MANUAIS_DIR = path.join(__dirname, "..", "manuais");
const ASSETS_DIR = path.join(__dirname, "..", "assets");
const MODULES_FILE = path.join(__dirname, "modules.json");

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
    const linhaTexto = linha.match(/^(\w+):\s*"([^"]*)"\s*$/);
    if (linhaTexto) {
      meta[linhaTexto[1]] = linhaTexto[2];
      continue;
    }
    const linhaNumero = linha.match(/^(\w+):\s*(-?\d+(?:\.\d+)?)\s*$/);
    if (linhaNumero) {
      meta[linhaNumero[1]] = Number(linhaNumero[2]);
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
  const textoLimpo = corpo
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/^#+\s*/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return textoLimpo.slice(0, 220);
}

function carregarManuais() {
  const arquivos = listarArquivosMd(MANUAIS_DIR);
  return arquivos.map((arquivo) => {
    const conteudo = fs.readFileSync(arquivo, "utf-8");
    const { meta, corpo } = parseFrontMatter(conteudo);
    const caminho = path
      .relative(MANUAIS_DIR, arquivo)
      .replace(/\.md$/, "")
      .split(path.sep)
      .join("/");
    return {
      id: meta.id || caminho,
      titulo: meta.title || caminho,
      navLabel: meta.nav_label || meta.title || caminho,
      caminho,
      tipo: meta.type || "manual",
      modulo: meta.module || null,
      parent: meta.parent || null,
      ordem: typeof meta.order === "number" ? meta.order : 999,
      palavras_chave: meta.keywords || [],
      resumo: extrairResumo(corpo),
    };
  });
}

function gerarIndiceDeBusca(manuais) {
  return manuais
    .filter((m) => m.tipo !== "reference" || true) // reference entra na busca (só não entra no menu)
    .map((m) => ({
      titulo: m.titulo,
      caminho: m.caminho,
      tipo: m.tipo,
      palavras_chave: m.palavras_chave,
      resumo: m.resumo,
    }))
    .sort((a, b) => a.titulo.localeCompare(b.titulo, "pt-BR"));
}

function construirItemDeMenu(manual, todosDoModulo) {
  const filhos = todosDoModulo
    .filter((m) => m.parent === manual.id)
    .sort((a, b) => a.ordem - b.ordem);

  if (filhos.length === 0) {
    return {
      tipo: "link",
      titulo: manual.navLabel,
      caminho: manual.caminho,
    };
  }

  // manual com filhos -> vira um submenu; ele mesmo aparece como o
  // primeiro item clicável dentro do próprio submenu (padrão "Visão Geral")
  return {
    tipo: "submenu",
    titulo: manual.navLabel,
    itens: [
      { tipo: "link", titulo: "Visão Geral", caminho: manual.caminho },
      ...filhos.map((filho) => construirItemDeMenu(filho, todosDoModulo)),
    ],
  };
}

function gerarNavManifest(manuais) {
  const modulosCurados = JSON.parse(fs.readFileSync(MODULES_FILE, "utf-8"));
  const navegaveis = manuais.filter((m) => m.tipo !== "reference" && m.modulo);

  const modulos = modulosCurados
    .map((moduloDef) => {
      const doModulo = navegaveis.filter((m) => m.modulo === moduloDef.id);
      const raiz = doModulo
        .filter((m) => !m.parent)
        .sort((a, b) => a.ordem - b.ordem)
        .map((m) => construirItemDeMenu(m, doModulo));

      return {
        id: moduloDef.id,
        titulo: moduloDef.label,
        icone: moduloDef.icone,
        ordem: moduloDef.ordem,
        itens: raiz,
      };
    })
    .filter((modulo) => modulo.itens.length > 0) // não mostra módulo vazio no menu
    .sort((a, b) => a.ordem - b.ordem);

  return { modulos };
}

function gerar() {
  const manuais = carregarManuais();

  const indiceDeBusca = gerarIndiceDeBusca(manuais);
  const navManifest = gerarNavManifest(manuais);

  fs.mkdirSync(ASSETS_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(ASSETS_DIR, "search-index.json"),
    JSON.stringify(indiceDeBusca, null, 2),
    "utf-8"
  );
  fs.writeFileSync(
    path.join(ASSETS_DIR, "nav-manifest.json"),
    JSON.stringify(navManifest, null, 2),
    "utf-8"
  );

  console.log(`Índice de busca: ${indiceDeBusca.length} manuais.`);
  console.log(
    `Menu: ${navManifest.modulos.length} módulos (${navManifest.modulos
      .map((m) => `${m.titulo}: ${m.itens.length}`)
      .join(", ")}).`
  );
}

gerar();
