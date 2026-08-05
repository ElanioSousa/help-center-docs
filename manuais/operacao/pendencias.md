---
id: "operacao-pendencias"
title: "Pendências"
type: "manual"
keywords: ["pendencias", "pendencia operacao", "tipo de pendencia", "bloqueio operacao"]
module: "operacao"
order: 30
nav_label: "Pendências"
last_updated: "2026-08-05"
---

Acessível através do caminho Operação > Pendências.

As pendências são registros que pode ser inseridos dentro da operação e irão indicar que nesta existem compromissos não cumpridos. Sendo assim, nesta tela o sistema permite cadastrar, visualizar e interagir com as pendências criadas.

Ao abrir a tela, por padrão o sistema trará todas as pendências que estiverem com situação Aberta, ou seja, ainda não concluídas:

![Untitled](./assets/operacao-Untitled-17.png)

Veja o detalhamento das pendências através dos tópicos abaixo:

## Criando uma nova pendência

O sistema dispõe de duas formas para criar novas pendências na operação. Através deste mesmo recurso, em Operação > Pendências, e também através da própria tela da operação. A seguir, detalharemos ambas as formas:

**Criando pendências em Operação > Pendências**

Para criar uma nova pendência em uma operação, utilize o botão Criar:

![criaragenda.png](./assets/operacao-criaragenda.png)

A seguinte tela será aberta para que a pendência possa ser cadastrada:

![Untitled](./assets/operacao-Untitled-18.png)

- **Tipo:** informe qual o tipo da pendência, sendo que este cadastro é personalizável no siste.a Verifique onde cadastrá-lo <a href="#" onclick="carregarManual('operacao/cadastros-tipo-pendencia')">**AQUI**</a> `(campo obrigatório)`;
- **Operação:** informe a qual operação se refere esta pendência, é possível buscar as operações tanto pelo nome do cliente quanto pelo código `(campo obrigatório)`;
- **Descrição:** digite uma descrição para esta pendência.

Clique em “Salvar e continuar” para salvar o cadastro feito e permanecer na página, para inserir uma outra pendência:

![salvarEcontinuar.png](./assets/salvarEcontinuar.png)

Clique em “Salvar” para salvar o cadastro feito e finalizar o processo, o que o levará de volta à página inicial da pendência:

![salvar.png](./assets/salvar.png)

**Criando pendências dentro da própria Operação:**

Na tela de operação, utilize a opção “Criar” indicada abaixo para cadastrar pendência(s) nesta operação em questão:

![Untitled](./assets/operacao-Untitled-19.png)

O sistema irá direcioná-lo para o mesmo ambiente de criação descrito no item acima. Desta forma, basta criar normalmente a pendência:

![Untitled](./assets/operacao-Untitled-20.png)

## Buscando pendências já cadastradas

Para buscar pendências já cadastradas previamente basta utilizar os filtros indicados conforme a imagem abaixo:

![Untitled](./assets/operacao-Untitled-21.png)

1. **Código:** informe para pesquisar a pendência pelo código da mesma.
2. **Empresa:** informe para buscar a pendência pela empresa ou empresas da operação a qual a mesma está registrada.
3. **Negociador:** informe para pesquisar a pendência pelo negociador da operação a qual a mesma está registrada.
4. **Operação:** informe para pesquisar pela operação a qual a pendência está registrada, sendo que é possível buscar as operações tanto pelo nome do cliente quanto pelo código
5. **Status:** informe para buscar pelo status da pendência: aberto ou fechado, ou seja, há opção de buscar tanto por pendências ainda em aberto quanto as já finalizadas/concluídas.
6. **Tipo pendência:** informe qual o tipo da pendência que deseja buscar.

Após o preenchimentos dos filtros desejados, clique em “Consultar” para obter o resultado:

![consultar.png](./assets/operacao-consultar.png)

> 💡 Lembrando que não há obrigatoriedade de preenchimento dos filtros, utilize-os caso queira buscar pendências específicas de acordo com a sua necessidade. Caso não seja preenchido nenhum filtro, o sistema trará todas as pendências com status **aberto.**

O resultado será exibido na tela conforme imagem abaixo:

![Untitled](./assets/operacao-Untitled-22.png)

O sistema conta ainda com a opção de visualizar a operação da pendência em questão, através da coluna “Operação”. Basta clicar no número da operação para ser direcionada a tela:

![Untitled](./assets/operacao-Untitled-23.png)

## Finalizando/concluindo as pendências

**Concluindo a pendência na tela Operação > Pendências:**

Caso esteja dentro da tela referida acima, para concluir uma pendência a qual foi resolvida simplesmente utilize a opção abaixo:

![Untitled](./assets/operacao-Untitled-24.png)

Opção na tela:

![Untitled](./assets/operacao-Untitled-25.png)

Ao clicar, o sistema o redirecionará para a tela de conclusão da pendência. Para finalizá-la, é necessário marcar a seleção “Fechar pendência?” e também digitar uma descrição, obrigatoriamente.

![Untitled](./assets/operacao-Untitled-26.png)

Cliquei em Salvar para concluir.

**Concluindo a pendência direto na tela da Operação:**

Caso você esteja dentro da tela da própria operação e queira concluir a pendência da mesma, basta clicar na quantidade de pendência referenciada entre parênteses:

![Untitled](./assets/operacao-Untitled-27.png)

O sistema o redirecionará para a tela do item acima, controle de pendências. Nisto, basta clicar na opção Editar para ser redirecionado a tela de conclusão de pendências:

![Untitled](./assets/operacao-Untitled-28.png)

A partir deste ponto o mesmo passo a passo do item acima pode ser seguido para prosseguir com a conclusão da pendência.

## Como funcionam as pendências?

**Pendências na prática: Operações:**

Conforme vimos no tópico “**Criando uma nova pendência”,** podemos criar pendências também dentro das próprias operações. E também dentro das operações conseguimos visualizar a quantidade de pendências e visualizá-las.

Sendo assim, o sistema sempre irá alertar através do recurso indicado abaixo a quantidade de pendências que a operação possui, e para acessá-la, basta clicar no número:

![Untitled](./assets/operacao-Untitled-29.png)

Você será redirecionado para a tela de controle de pendências onde poderá concluir esta pendência (vide tópico “**Finalizando/concluindo as pendências”**) ou simplesmente visualizá-la:

![Untitled](./assets/operacao-Untitled-30.png)

**Pendências que bloqueiam pelo status:**

Caso o tipo da pendência tenha um status de bloqueio, ****ao tentar utilizar este status o sistema não permitirá que prosseguir. Conforme consta abaixo, o seguinte alerta será emitido:

![Untitled](./assets/operacao-Untitled-31.png)

No exemplo acima tentamos utilizar o Aprovar Venda de uma operação que contém uma pendência que bloqueia por status.

> 💡 O que cada status bloqueia está detalhado em Operação > Cadastros > Tipo de pendência. Veja este detalhamento clicando <a href="#" onclick="carregarManual('operacao/cadastros-tipo-pendencia')">AQUI</a>.

Caso a pendência seja de um tipo que não tenha um bloqueio de status, será possível seguir normalmente sem que haja nenhum tipo de bloqueio, no entanto, sugerimos sempre verificar as pendências e tentar saná-las antes de prosseguir com o andamento da operação.
