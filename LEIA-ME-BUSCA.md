# Busca interna: o que mudou

## O problema

A busca do site tinha dois defeitos, e um alimentava o outro:

1. **Índice hardcoded e incompleto**: só 5 itens escritos à mão dentro do
   `index.html`, e 2 deles apontavam pra manuais que nem existem
   (`financeiro/titulo`, `operacao/operacoes`). Nenhum dos manuais que
   convertemos nas últimas conversas (Cadastros, CRM completo, Operação,
   Financeiro, Parâmetros...) estava pesquisável.
2. **Matching ingênuo**: só `.includes()` simples no título e nas
   palavras-chave. Buscar "operação" sem acento ("operacao") não encontrava
   nada; buscar duas palavras ("checklist veículo") também não, porque
   comparava a frase inteira contra cada palavra-chave.

## A solução

**1. Índice gerado automaticamente** — `scripts/generate-search-index.js`
varre a pasta `/manuais` inteira, lê o front-matter de cada `.md`
(`title`, `keywords`) e o começo do conteúdo, e gera
`assets/search-index.json`. Rode `node scripts/generate-search-index.js`
toda vez que adicionar, remover ou renomear um manual — não precisa mais
editar JS na mão.

**2. GitHub Action** (`.github/workflows/update-search-index.yml`) — se
vocês publicarem este repositório no GitHub, essa Action roda o script
sozinha a cada push que mexer em `/manuais`, e comita o JSON atualizado de
volta. Ou seja: na prática, mesmo esse passo manual deixa de ser
necessário — cadastrar um manual novo passa a ser só "criar o arquivo
`.md` no lugar certo", que era exatamente a promessa original do projeto.

**3. Busca por relevância, sem sensibilidade a acento** — o `index.html`
agora carrega esse JSON e faz:
- normalização (`café` = `cafe`, `Operação` = `operacao`);
- busca por múltiplas palavras (cada palavra da consulta é avaliada
  separadamente contra título, palavras-chave e resumo);
- pontuação por relevância (título bate = mais peso que aparecer só no
  resumo) — os resultados vêm ordenados do mais relevante pro menos;
- os resultados agora mostram um trecho do conteúdo, não só o título.

Testei com algumas buscas reais (sem acento, com 2 palavras, termo
inexistente) — funcionou como esperado em todos os casos.

## Como aplicar no repositório

Esta entrega já é **o site inteiro**, pronto pra substituir:
- `index.html` e `style.css` (mesmos de antes + busca nova + submenu de
  Cadastros que já tinha sido implementado)
- `manuais/` com os 16 manuais que já existiam + os que convertemos
- `assets/` com todas as imagens + o `search-index.json` já gerado
- `scripts/generate-search-index.js`
- `.github/workflows/update-search-index.yml`

Basta substituir a pasta do repositório por esta (ou mesclar, se tiverem
feito outras mudanças desde a última conversa).

## O que ainda vale ficar de olho

- O resumo usado na busca é gerado automaticamente a partir do início do
  texto de cada manual — em alguns casos pode ficar um pouco seco (ex.:
  cortar no meio de uma frase). Não afeta a busca em si, só a
  apresentação do trecho.
- Se um manual for escrito sem front-matter (sem `title`/`keywords`), ele
  ainda entra no índice, mas com busca mais fraca (só pelo caminho do
  arquivo e pelo resumo). Vale manter o padrão de front-matter em todo
  manual novo.
