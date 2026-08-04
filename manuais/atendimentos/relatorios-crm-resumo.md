---
id: "relatorios-crm-resumo"
title: "Relatórios: CRM - Resumo"
type: "manual"
keywords: ["relatorio crm resumo", "fases por origem", "desistencias por origem", "relatorio"]
module: "atendimentos"
parent: "atendimentos-relatorios"
order: 10
nav_label: "CRM - Resumo"
last_updated: "2026-08-03"
---

# CRM - Resumo

Acesse o presente relatório através do caminho CRM & Negociação > Relatórios > CRM - Resumo.

Este relatório tem objetivo de apresentar de forma resumida os atendimentos cadastrados via CRM no sistema, com a opção de filtrar pelos campos abaixo:

![filtrosrelresumo.png](./assets/filtrosrelresumo.png)

**Filtros:**

1. **Empresa:** indique a empresa do CRM.
2. **Negociador:** indique o nome do negociador do CRM.
3. **Fase Atendimento:** indique a fase do atendimento do CRM entre: Novo, Agendado, Perdido, Reagendado, Sucesso, Sem Contato e Reaberto.
4. **Status:** indique o status do CRM entre: Aberto ou Fechado.
5. **Cliente:** indique o nome do cliente do CRM.
6. **Telefone:** indique o número do telefone do CRM.
7. **Tipo Atendimento:** indique o tipo de atendimento do CRM entre: Web ou Loja.
8. **Origem atendimento:** indique a origem do atendimento do CRM: as opções serão mostrada conforme o que for cadastrado <a href="#" onclick="carregarManual('atendimentos/cadastros-origem-leads')">AQUI</a>
9. **Data Cadastro:** indique a data de cadastro do CRM podendo escolher entre um intervalo de datas.
10. **Data Atualizado:** indique adata de atualização do CRM podendo escolher entre um intervalo de datas.
11. **Data Agendado:** indique uma data de agendamento do CRM podendo escolher entre um intervalo de datas.
12. **Motivo desistência:** indique o motivo de desistência do CRM: as opções serão mostrada conforme o que for cadastrado <a href="#" onclick="carregarManual('atendimentos/cadastros-motivos-desistencia')">AQUI</a>

Após o preenchimentos dos filtros desejados, clique em “Consultar” para obter o resultado:

![consultar.png](./assets/consultar.png)

> 💡 Lembrando que não há obrigatoriedade de preenchimento dos filtros, utilize-os caso queira buscar cadastros específicos de acordo com a sua necessidade. Caso não seja preenchido nenhum filtro, o sistema trará a listagem de forma geral.

---

**Relatório:**

FASES POR ORIGEM:

O primeiro painel do relatório trará os CRMs cadastrados divididos pela Origem, exibindo a quantidade de registros em cada uma, juntamente com a porcentagem de existência:

![fasespororigemrel1.png](./assets/fasespororigemrel1.png)

DESISTÊNCIAS POR ORIGEM:

O segundo painel do relatório trará os CRMs que tiveram desistência e divididos pela Origem, exibindo a quantidade de registros em cada uma, juntamente com a porcentagem de existência:

![desistorigemrel1.png](./assets/desistorigemrel1.png)

FASES POR NEGOCIADOR:

O terceiro painel do relatório trará os CRMs divididos pelas fases e por cada negociador, exibindo a quantidade de registros em cada uma, juntamente com a porcentagem de existência:

![fasesnegociadirrel1.png](./assets/fasesnegociadirrel1.png)

DESISTÊNCIAS POR NEGOCIADOR:

O quarto painel do relatório trará os CRMs que tiveram desistência e divididos por cada negociador, exibindo a quantidade de registros em cada uma, juntamente com a porcentagem de existência:

![desistencianegociadorrel1.png](./assets/desistencianegociadorrel1.png)

---

Ainda é possível visualizar tanto no início quanto no final do relatório um totalizador simples de cada CRM por fase, conforme demonstrado abaixo:

![totalizadorrel1.png](./assets/totalizadorrel1.png)

---

O relatório também pode ser exportado para Excel ou impresso através das opções abaixo:

![opcoesfiltro.png](./assets/opcoesfiltro.png)
