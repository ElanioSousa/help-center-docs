# 🎓 Central de Ajuda - Repasys

[![Status](https://img.shields.io/badge/Status-Concluído-success)](#)
[![Tecnologia](https://img.shields.io/badge/Tech-Vanilla_JS-f7df1e)](#)

> Uma Single Page Application (SPA) leve e escalável para documentação de sistemas, construída sem a necessidade de frameworks pesados ou banco de dados.

## 💻 Sobre o projeto

Este projeto nasceu da necessidade de criar uma Central de Ajuda intuitiva para o sistema **Repasys**. O maior desafio foi desenvolver uma arquitetura onde manuais e tutoriais pudessem ser atualizados de forma fácil pela equipe, sem depender de deploy ou de conhecimento em código.

A solução foi criar um front-end em **Vanilla JavaScript** que consome arquivos **Markdown (.md)** dinamicamente através da `Fetch API`. O sistema carrega, traduz e renderiza os manuais na tela instantaneamente, garantindo uma navegação fluida e sem recarregamento de página.

🔗 **[Clique aqui para ver o projeto online no GitHub Pages](<https://elaniosousa.github.io/help-center-docs/#>)**

## 🚀 Funcionalidades

* **Renderização Dinâmica:** Leitura e conversão de arquivos `.md` para HTML em tempo real usando a biblioteca `marked.js`.
* **Sistema de Busca Integrado:** Motor de busca desenvolvido em JS puro com indexação por palavras-chave e sinônimos, sem necessidade de backend.
* **Arquitetura Modular:** Separação de manuais por módulos de negócio (Atendimentos, Financeiro, Operações), facilitando a manutenção e expansão.
* **UI/UX Moderna:** Interface limpa, responsiva e inspirada no design pattern do sistema principal, com menu lateral em cascata e painel de artigos mais acessados.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização com Flexbox, Grid e variáveis (Custom Properties) para consistência visual.
* **JavaScript (ES6+):** Lógica assíncrona (`Promises`/`Fetch`), manipulação de DOM e algoritmos de filtragem de arrays para a busca.
* **Marked.js:** Biblioteca externa para *parsing* de Markdown.

## 📂 Estrutura de Diretórios e Escalabilidade

A arquitetura de pastas foi pensada para isolar atualizações e evitar quebras. Cada módulo possui o seu próprio arquivo `index.md` (atuando como uma "página de rosto").

```text
/
├── index.html
├── style.css
├── /assets/                # Imagens consumidas pelos manuais
└── /manuais/               # Repositório de Markdown
    ├── /atendimentos/      # Módulo isolado
    │   ├── index.md
    │   └── crm.md
    ├── /financeiro/        # Módulo isolado
    │   ├── index.md
    │   └── titulo.md