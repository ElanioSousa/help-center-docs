# 🎓 Central de Ajuda - Repasys

![Status](https://img.shields.io/badge/Status-Em_andamento-yellow)
![Tecnologia](https://img.shields.io/badge/Tech-Vanilla_JS-f7df1e)
![Licença](https://img.shields.io/badge/Licença-MIT-blue)

> Uma Single Page Application (SPA) leve, rápida e escalável para documentação de sistemas — construída sem frameworks pesados e sem banco de dados.

🔗 **[Acesse o projeto online](https://elaniosousa.github.io/help-center-docs/)**

---

## 📑 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [Estrutura de diretórios](#-estrutura-de-diretórios-e-escalabilidade)
- [Como adicionar um novo manual](#-como-adicionar-um-novo-manual)
- [Como rodar localmente](#-como-rodar-localmente)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 💻 Sobre o projeto

Este projeto nasceu da necessidade de criar uma Central de Ajuda intuitiva para o sistema **Repasys**. O maior desafio foi desenvolver uma arquitetura em que manuais e tutoriais pudessem ser atualizados facilmente pela equipe, sem depender de deploy ou de conhecimento em código.

A solução foi um front-end em **Vanilla JavaScript** que consome arquivos **Markdown (`.md`)** dinamicamente através da `Fetch API`. O sistema carrega e renderiza os manuais na tela instantaneamente, garantindo navegação fluida e sem recarregamento de página — qualquer pessoa da equipe consegue editar ou criar um manual novo apenas escrevendo um arquivo `.md`.

## 🚀 Funcionalidades

- **Renderização dinâmica** — leitura e conversão de arquivos `.md` para HTML em tempo real, usando a biblioteca `marked.js`.
- **Busca integrada** — motor de busca desenvolvido em JS puro, com indexação por palavras-chave e sinônimos, sem necessidade de backend.
- **Arquitetura modular** — manuais organizados por módulo de negócio (Atendimentos, Financeiro, Operações...), o que facilita manutenção e expansão.
- **UI/UX moderna** — interface limpa e responsiva, com menu lateral em cascata e painel de artigos mais acessados.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica da aplicação |
| **CSS3** | Estilização com Flexbox, Grid e Custom Properties |
| **JavaScript (ES6+)** | Lógica assíncrona (Promises/Fetch), manipulação de DOM e busca |
| **Marked.js** | Parsing de Markdown para HTML |

## 📂 Estrutura de diretórios e escalabilidade

A arquitetura de pastas foi pensada para isolar atualizações e evitar quebras. Cada módulo possui seu próprio `index.md`, que funciona como uma página de rosto.

```
/
├── index.html
├── style.css
├── /assets/                # Imagens consumidas pelos manuais
└── /manuais/                # Repositório de Markdown
    ├── /atendimentos/       # Módulo isolado
    │   ├── index.md
    │   └── crm.md
    ├── /financeiro/         # Módulo isolado
    │   ├── index.md
    │   └── titulo.md
```

## ✍️ Como adicionar um novo manual

1. Crie uma pasta para o módulo dentro de `/manuais/` (caso ainda não exista).
2. Adicione um `index.md` na pasta do módulo — ele servirá como página inicial do módulo.
3. Crie os arquivos `.md` com o conteúdo do manual.
4. Se necessário, adicione as imagens correspondentes em `/assets/`.
5. Nenhum passo de build é necessário: o conteúdo é carregado dinamicamente pelo front-end.

## ⚙️ Como rodar localmente

Como o projeto usa `Fetch API` para carregar os arquivos `.md`, é preciso servir os arquivos por um servidor local (abrir o `index.html` diretamente pelo navegador não funciona devido a restrições de CORS).

```bash
# Clone o repositório
git clone https://github.com/ElanioSousa/help-center-docs.git
cd help-center-docs

# Suba um servidor local simples (exemplos)
python -m http.server 8080
# ou
npx serve .
```

Depois, acesse `http://localhost:8080` no navegador.

## 🗺️ Roadmap

- [ ] Adicionar suporte a múltiplos idiomas
- [ ] Melhorar acessibilidade (a11y)
- [ ] Adicionar modo escuro
- [ ] Expandir cobertura de manuais para todos os módulos do sistema

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* com sugestões, correções ou novos manuais.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---


