---
id: "atendimentos-crm-completo"
title: "CRM & Negociação (completo)"
type: "manual"
last_updated: "2026-07-31"
---

# CRM & Negociação

A página inicial da seção de **CRM e Negociação** exibe três painéis distintos: CRM, Negociação e Desempenho:

![atendimentos-crm-completo](./assets/painelcrmnegociacao.png)

Para buscar CRMs ou Negociações com uma busca mais refinada utilize a opção “Filtro”, a qual por padrão ficará inibida sempre que a tela for aberta, porém, pode ser acessada conforme demonstração abaixo:

![atendimentos-crm-completo](./assets/atendimentos-crm-completo-untitled.gif)

Detalhamento dos filtros:

![atendimentos-crm-completo](./assets/atendimentos-crm-completo-untitled.png)

1. **Cód. CRM:** indique o código do CRM o qual deseja buscar.
2. **Cód. Neg:** indique o código da negociação a qual deseja buscar
3. **Empresas:** indique a empresa da operação, podendo escolher mais de uma.
4. **Negociador:** indique o nome do negociador, o sistema abrirá uma listagem para escolher.
5. **Status:** indique o status do CRM/Negociação podendo escolher entre Aberto/Fechado.
6. **Cliente:** indique o nome do cliente do CRM/Negociação.
7. **Telefone:** indique o telefone do cliente do CRM/Negociação.
8. **Veículo:** indique o telefone do cliente do CRM/Negociação.
9. **Data Cadastro:** indique a data de cadastro do CRM/Negociação podendo escolher entre um intervalo de datas.
10. **Data Atualizado:** indique a data de atualização do CRM/Negociação podendo escolher entre um intervalo de datas.
11. **Tarefas:** busque por CRM/Negociações que possuam tarefas, podendo escolher entre as opções: Com tarefa atrasada, Com tarefa planejada, Com tarefa para hoje ou Sem nenhuma tarefa.
12. **Assunto tarefas:** busque por CRM/Negociações que possuam tarefas pelo assunto das mesmas, podendo escolher entre: Avaliação, Vistoria, Pendência, Negociação, Retorno de ligação ou Visita.
13. **Etiquetas:** busque por CRM/Negociações que possuam etiquetas, podendo escolher entre a classificação das etiquetas: Frio, Morno ou Quente. Para visualizar como são criadas as etiquetas, clique AQUI *(manual relacionado, ainda não migrado)*.
14. **Origem CRM:** busque por CRM/Negociações através da origem, podendo escolher mais de uma. As origens são personalizáveis, veja mais sobre AQUI *(manual relacionado, ainda não migrado)*.

> 💡 Lembrando que não há obrigatoriedade de preenchimento dos filtros, utilize-os caso queira buscar CRMs ou Negociações específicas de acordo com a sua necessidade. Caso não seja preenchido nenhum filtro, o sistema trará a listagem de forma geral.

---

## CRM

O painel **CRM** possibilita o registro, interação e monitoramento dos leads/prospecções, os primeiros contatos com o cliente, sendo possível criar novos registros de possíveis clientes tanto por meio do botão *"Criar"* como através da opção *"Criar rápido":*

> 💡 Utilize a opção **Criar** para um cadastro mais completo, quando por exemplo o cliente visitar até a loja já com o veículo e puder fornecer dados mais detalhados. Utilize a opção **Criar rápido** quando você tiver apenas um contato limitado do cliente, sem muita informação.

#### Criar CRM e Criar rápido

**Opção Criar:**

![atendimentos-crm-completo](./assets/criar.png)

Ao clicar, você será direcionado para outra tela onde poderá cadastrar o lead:

![atendimentos-crm-completo](./assets/crartela.png)

1. **INFORMAÇÕES PESSOAIS:**
- **NOME:** Informar o nome do cliente `(campo obrigatório).`
- **TELEFONE CELULAR:** Informar o número de celular do cliente, com DDD `(campo obrigatório).`
- **TELEFONE FIXO/CELULAR:** Informar o número de telefone fixo do cliente, ou comercial.
- **EMAIL:** Informar o e-mail do cliente, caso haja.

> ⚠️ Caso seja digitado um telefone o qual já se encontra cadastrado em um lead, o sistema emitirá um alerta indicando esta duplicidade. É possível acessar este lead através do “Clique aqui” ou apenas ignorar o alerta e prosseguir normalmente com o cadastro.
> ![atendimentos-crm-completo](./assets/INFO.png)

2. **ENDEREÇO:**
- **CEP:** Informar o CEP do cliente, neste momento o sistema preencherá automaticamente com o estado, cidade, bairro e logradouro.
- **ESTADO:** Informar o estado do cliente, ajustar caso seja diferente do preenchido automaticamente.
- **CIDADE:** Informar a cidade do cliente, ajustar caso seja diferente do preenchido automaticamente.
- **BAIRRO:** Informar o bairro do cliente, ajustar caso seja diferente do preenchido automaticamente.
- **LOGRADOURO:** Informar o logradouro e nome do mesmo, ajustar caso seja diferente do preenchido automaticamente.
- **NÚMERO:** Informar o número do endereço.
- **COMPLEMENTO:** Informar o número do apartamento, bloco, etc.
3. **VEÍCULO:**
- **TIPO VEÍCULO:** Informar o tipo do veículo, com possibilidade de escolher entre: carro, motocicleta ou caminhão.
- **PLACA:** Informar a placa do veículo.
- **MARCA:** Informar a marcado veículo.
- **MODELO:** Informar o modelo do veículo.
- **ANO FAB.:** Informar o ano em que o veículo foi fabricado.
- **ANO MOD.:** Informar o ano em que foi lançado este modelo.

> 💡 Observe que ao inserir todos os detalhes do veículo, incluindo o ano de fabricação e o lançamento do modelo, o sistema trará automaticamente o valor de referência da FIPE para uma consulta conveniente, conforme demonstrado abaixo:
> ![atendimentos-crm-completo](./assets/fipe.png)

4. **DADOS GERAIS:**
- **EMPRESA:** Selecione a empresa (loja) a qual a negociação está vinculada `(campo obrigatório).`
- **NEGOCIADOR:** Selecione quem é o negociante deste lead `(campo obrigatório).`
- **TIPO:** Selecione entre Loja (cliente compareceu fisicamente a loja), e Web `(campo obrigatório).`
- **ORIGEM:** Selecione a origem detalhada deste lead `(campo obrigatório).` O cadastro destas origens são personalizáveis no sistema, veja onde e como efetuar este cadastro AQUI *(manual relacionado, ainda não migrado)*.

---

**Opção Criar Rápido:**

![atendimentos-crm-completo](./assets/criar_rapido.png)

Esta opção também permitirá o cadastro do lead, porém de forma simplificada, com menos dados. Ao clicar, o sistema abrirá uma tela avulsa para o cadastro:

![atendimentos-crm-completo](./assets/criarrapido.png)

- **NOME:** Informar o nome do cliente `(campo obrigatório).`
- **TELEFONE CELULAR:** Informar o número de celular do cliente, com DDD `(campo obrigatório).`
- **EMAIL:** Informar o e-mail do cliente, caso haja.
- **PLACA:** Informar a placa do veículo.
- **MARCA:** Informar a marcado veículo.
- **MODELO:** Informar o modelo do veículo.
- **ANO:** Informar o ano em que o veículo foi fabricado.
- **EMPRESA:** Selecione a empresa (loja) a qual a negociação está vinculada `(campo obrigatório).`
- **NEGOCIADOR:** Selecione quem é o negociante deste lead `(campo obrigatório).`
- **TIPO:** Selecione entre Loja (cliente compareceu fisicamente a loja), e Web `(campo obrigatório).`
- **ORIGEM:** Selecione a origem detalhada deste lead. `(campo obrigatório).`O cadastro destas origens são personalizáveis no sistema, veja onde e como efetuar este cadastro AQUI *(manual relacionado, ainda não migrado)*.

> ⚠️ Caso seja digitado um telefone o qual já se encontra cadastrado em um lead, o sistema emitirá um alerta indicando esta duplicidade. É possível acessar este lead através do “Clique aqui” ou apenas ignorar o alerta e prosseguir normalmente com o cadastro.
> ![atendimentos-crm-completo](./assets/INFO.png)

#### Movimentação do CRM

O painel CRM permitirá a filtragem dos leads cadastrados anteriormente com base nas suas respectivas fases.

> 💡 O conceito de **fases** no sistema nada mais é do que o resultado da interação da loja com o cliente, ou seja, as fases refletem o resultado das conversas e acordos estabelecidos durante o atendimento, indicando em que estágio específico se encontra o lead.

Qualquer novo lead cadastrado, seja por meio da função "Criar/Criar Rápido" ou por integração entre site terceiro, será automaticamente classificado na fase "novo".

![atendimentos-crm-completo](./assets/painelCRM.png)

Observe que os quadrados acima possuem o nome da etapa e uma quantidade, isto significa o total de leads classificados com aquela fase. Diante disso, ao clicar em um dos quadrados, o sistema fará o filtro trazendo apenas os leads classificados com a fase clicada.

O resultado será uma tela com a listagem dos leads. Essa tela permitirá toda a movimentação do lead, desde um primeiro contato, negociação, até a etapa final de sucesso ou não sucesso. No exemplo abaixo, clicamos no quadrado “Novo” para obter apenas os leads classificados com esta fase:

![atendimentos-crm-completo](./assets/painelCRMfiltro.png)

O painel também exibe dados importantes, tais como: **Código do lead, Data do cadastro, Loja, Negociador, Cliente, Tipo, Origem e Status.**

**Funcionalidades do PAINEL CRM:**

Abaixo enumeramos as funções de movimentação possíveis dos leads através de listagem:

![atendimentos-crm-completo](./assets/recursosclicaveis.png)

#### 1 - Opção visualizar:

![atendimentos-crm-completo](./assets/botaosemnome.png)

O botão destacado acima permitirá a visualização dos dados do lead bem como as conversas já iniciadas, conforme demonstrado na página abaixo:

![atendimentos-crm-completo](./assets/botaovisualizar.png)

**Funcionalidades:**

Editar: visualize os dados principais do lead e caso queira modificar ou inserir um dado novo, clique em Editar para ser direcionado a tela de cadastro.

![atendimentos-crm-completo](./assets/editar.png)

Detalhes: clique na flecha de detalhes caso queira visualizar os dados de endereço do lead.

![atendimentos-crm-completo](./assets/detalhes.png)

Conversas: aqui é possível visualizar as conversas já existentes deste lead, bem como cadastrar uma conversa nova através do botão Nova Conversa.

![atendimentos-crm-completo](./assets/conversas.png)

Função “Nova Conversa”:

![atendimentos-crm-completo](./assets/novaconversa.png)

O botão permite cadastrar as conversas feitas com o lead, que são as interações. Seja uma tentativa malsucedida de contato ou um contato bem-sucedido, esta interação irá gerar um resultado: um agendamento de vistoria, fechamento da negociação, perda da oportunidade, etc.

Portanto, é necessário indicar no campo "Trocar fase" em qual estágio o atendimento se encontra após cada interação. Além disso, é necessário incluir informações adicionais, como uma observação ou nota relacionada à interação através do campo “Mensagem”.

Diante disso, o preenchimento de ambos os campos **fase** e **mensagem** são obrigatórios nesta tela:

![atendimentos-crm-completo](./assets/novaConversatela.png)

Uma vez trocada a fase e registrada a conversa/interação, automaticamente este lead sairá da etapa a qual estava e passará a ser exibido na nova fase registrada.

Dependendo da fase selecionada, alguma ação será gerada no sistema além de apenas mudar o status do lead. Abaixo listamos estas fases:

Fase **Agendado, Reagendado** e **Perdido:**

**Agendado e Reagendado:** ao selecionar uma destas fases o sistema exibirá os campos Data Agendamento para indicar o dia e horário combinados com o cliente. Logo abaixo também é necessário preencher o Assunto do agendamento:

![atendimentos-crm-completo](./assets/agendado.png)

Este agendamento será automaticamente preenchido na função de agenda do sistema, ou seja, será um novo evento agendado para o negociador. Veja mais detalhes sobre a agenda no sistema clicando AQUI.

**Perdido:** ao selecionar esta fase o sistema exibirá o campo Motivo, para que seja preenchido o motivo pelo qual o cliente desistiu.

> 💡 O cadastro destes motivos são personalizáveis no sistema, veja onde e como efetuar este cadastro AQUI.

![atendimentos-crm-completo](./assets/perdido.png)

Fase **Sucesso:**

A fase sucesso significa que o lead evoluiu para uma negociação bem sucedida, sendo assim, ao selecioná-la, ele será convertido em uma negociação efetiva e ficará disponível no painel Negociação, deixando de aparecer no painel CRM.

#### 2 - Opção Última conversa:

![atendimentos-crm-completo](./assets/ultimaconversa.png)

Ao clicar, esta opção permite visualizar a última conversa realizada com este lead. Sempre irá aparecer com a quantidade de dias desta última interação. Além de mostrar a última conversa, funciona como um atalho para o registro de uma nova conversa obtida com o lead:

![atendimentos-crm-completo](./assets/novaConversatela.png)

Veja o detalhamento do registro de conversas através do item acima - Opção 1 visualizar.

#### 3 - Opção Próx. Tarefa:

Esta opção permitirá o cadastro de uma nova tarefa relacionada ao lead. Esta tarefa sempre será um agendamento, conforme a tela a seguir:

![atendimentos-crm-completo](./assets/tarefa.png)

Campos:

- **Negociador:** Selecione qual negociador está conduzindo este lead `(campo obrigatório).`
- **Empresa:** Selecione a empresa (loja) a qual a negociação está vinculada `(campo obrigatório).`
- **Data Agendamento:** Seleciona a data a qual está sendo agendada, juntamente com o horário.
- **Assunto:** Selecione qual o assunto desta visita: avaliação, vistoria, pendência, negociação, retorno de ligação ou visita `(campo obrigatório).`
- **Cliente:** Digite qual o cliente está sendo agendado `(campo obrigatório).`
- **Veículo:** Digite o modelo do veículo.
- **Cidade:** Digite a cidade a qual ocorrerá a visita.
- **Telefone:** Digite o telefone do cliente.

> 💡 Este agendamento ficará disponível no recurso de agenda do sistema. Saiba mais detalhes sobre a agenda clicando AQUI.

Uma vez que o lead já tenha um agendamento cadastrado, o mesmo ficará disponível com a data, hora e assunto na coluna Prox. Tarefa, conforme imagem abaixo:

![atendimentos-crm-completo](./assets/tarefacadastrada.png)

Ao clicar, o sistema exibirá um resumo deste agendamento cadastrado:

![atendimentos-crm-completo](./assets/resumoagendamento.png)

Clicando no botão “Concluir Tarefa”, o sistema entenderá que a visita já ocorreu e fará a conclusão desta mesma, deixando de existir no recurso Agenda.

#### 4 - Opção Adicionar etiquetas:

Esta opção permite classificar o lead com alguma identificação específica. No exemplo abaixo, temos as etiquetas Frio, Morno e Quente:

![atendimentos-crm-completo](./assets/etiquetatelinha.png)

Essas etiquetas são exemplos de como utilizar essa funcionalidade, indicando que o lead está perto ou longe de se tornar bem-sucedido. Porém, utilize-a como preferir pois esse cadastro personalizável, saiba como efetuar esse cadastro etiquetas AQUI *(manual relacionado, ainda não migrado)*.

Uma vez selecionada a etiqueta, o sistema apresentará a mesma desta forma na coluna:

![atendimentos-crm-completo](./assets/etiquetasselecionadas.png)

#### 5 - Opção Número do telefone:

O número de telefone é interativo no sistema, o que significa que é possível clicar sobre ele:

![atendimentos-crm-completo](./assets/numerotelefone.png)

Ao clicar, o sistema abrirá uma nova aba no seu navegador, permitindo assim uma conversa com este cliente diretamente pelo WhatsApp.

---

## Negociações

#### Negociações**:**

O painel **Negociações** possibilita o registro, interação e monitoramento dos clientes já em negociação, ou seja, leads que se tornaram uma oportunidade de negócio.

#### Criando uma negociação

#### Opção **Criar:**

![atendimentos-crm-completo](./assets/criar.png)

Ao clicar, você será direcionado para outra tela onde poderá cadastrar da negociação:

![atendimentos-crm-completo](./assets/negociacao1.png)

![atendimentos-crm-completo](./assets/negociacao2.png)

![atendimentos-crm-completo](./assets/negociacao3.png)

1. **INFORMAÇÕES PESSOAIS:**
- **NOME:** Informar o nome do cliente `(campo obrigatório).`
- **CPF:** Informar o CPF do cliente, caso pessoa física.
- **RG:** Informar o RG do cliente.
- **EMAIL:** Informar o e-mail do cliente, caso haja.
- **DATA NASCIMENTO:** Informar a data de nascimento do cliente.
- **ESTADO CIVIL:** Informar o estado civil do cliente
- **NACIONALIDADE:** Informar a nacionalidade do cliente.
- **PROFISSÃO:** Informar a profissão do cliente.
2. **ENDEREÇO:**
- **CEP:** Informar o CEP do cliente, neste momento o sistema preencherá automaticamente com o estado, cidade, bairro e logradouro.
- **UF:** Informar o estado do cliente, ajustar caso seja diferente do preenchido automaticamente.
- **CIDADE:** Informar a cidade do cliente, ajustar caso seja diferente do preenchido automaticamente.
- **BAIRRO:** Informar o bairro do cliente, ajustar caso seja diferente do preenchido automaticamente.
- **LOGRADOURO:** Informar o logradouro e nome do mesmo, ajustar caso seja diferente do preenchido automaticamente.
- **NÚMERO:** Informar o número do endereço.
- **COMPLEMENTO:** Informar o número do apartamento, bloco, etc.
3. **CONTATO:**
- **CELULAR:** Informar o número de celular do cliente, com DDD `(campo obrigatório).`
- **TEL. RESIDENCIAL:** Informar o número de telefone fixo do cliente.
- **TEL. COMERCIAL:** Informar o número de telefone comercial do cliente.
- **CEL. ALTERNATIVO:** Informar um número de celular secundário do cliente.
4. **VEÍCULO:**
- **TIPO VEÍCULO:** Informar o tipo do veículo, com possibilidade de escolher entre: carro, motocicleta ou caminhão `(campo obrigatório).`
- **PLACA:** Informar a placa do veículo `(campo obrigatório).`
- **RENAVAM:** Informar o RENAVAM (Registro Nacional de Veículos Automotores) do veículo.
- **CHASSI:** Informar o chassi do veículo.
- **LEILÃO - PASSAGEM POR LEILÃO?:** Marque a opção caso o veículo já tenha passado por leilão.
- **FIPE - VEÍCULO SEM FIPE?:** Marque a opção caso o veículo não possua FIPE. Caso marcada essa opção, os campos MARCA E MODELO ficarão disponíveis para serem digitados manualmente ao invés de escolher pela lista de opções.
- **MARCA:** Informar a marcado veículo `(campo obrigatório).`
- **MODELO:** Informar o modelo do veículo `(campo obrigatório).`
- **ANO FAB.:** Informar o ano em que o veículo foi fabricado `(campo obrigatório).`
- **ANO MOD.:** Informar o ano em que foi lançado este modelo `(campo obrigatório).`
5. **DADOS GERAIS:**
- **VALOR INICIAL:** Informe o valor inicial, que é o valor pretendido do veículo, posteriormente este será este valor mostrado para o lojista `(campo obrigatório).`
- **VALOR DE QUITAÇÃO:** Informe qual o valor total para a quitação do veículo.
- **VALOR DE DÉBITOS:** Informe o total de débitos restantes deste veículo.
- **MOTIVO DA VENDA:** Digite o motivo pelo o qual o cliente está vendendo.
- **LOJA:** Selecione a empresa (loja) a qual a negociação está vinculada `(campo obrigatório).(campo obrigatório).`
- **NEGOCIADOR:** Selecione quem é o negociante `(campo obrigatório).`
- **INSPEÇÃO:**

> 💡 Observe que ao inserir todos os detalhes do veículo, incluindo o ano de fabricação e o lançamento do modelo, o sistema trará automaticamente o valor de referência da FIPE para uma consulta conveniente**:**
> ![atendimentos-crm-completo](./assets/tabelafipenegociacao.png)
> Também será possível também visualizar os valores referência através da **Tabela Repasys:**
> ![atendimentos-crm-completo](./assets/tabelarepasys.png)
> A **Tabela Repasys** é uma tabela exclusiva, a qual apresenta os valores referência deste modelo de veículo com base em uma inteligência interna do sistema. Utilize-a como uma base para as negociações.

#### Movimentação das Negociações

O painel NEGOCIAÇÃO permitirá a filtragem das negociações com base nas suas respectivas fases.

> 💡 O conceito de **fases** no sistema nada mais é do que o resultado da interação da loja com o cliente, ou seja, as fases refletem o resultado das conversas e acordos estabelecidos durante o atendimento, indicando em que estágio específico se encontra o lead.

Painel Negociação:

![atendimentos-crm-completo](./assets/painelnegociacao.png)

Observe que os quadrados acima possuem o nome da etapa e uma quantidade, isto significa o total de negociações classificadas com aquela fase. Diante disso, ao clicar em um dos quadrados, o sistema fará o filtro trazendo apenas as negociações classificadas com a fase clicada.

O resultado será uma tela com a listagem das negociações. Essa tela permitirá toda a movimentação da negociação, desde a avaliação, ofertas, sucesso da venda ou desistência.

No exemplo abaixo, clicamos no quadrado “Rascunho” para obter apenas os leads classificados com esta fase:

**Workflow da negociação:**

A negociação cadastrada através da função “Criar” ficarão automaticamente cadastradas com a fase **Rascunho,** que é a primeira fase da negociação.

Já a negociação oriunda do cadastro do lead via CRM (através da troca de etapa para - Sucesso) ficará com a fase **Em Avaliação,** que é a segunda fase da negociação.

Observe na imagem acima que as negociações oriundas do CRM geralmente chegam sem as informações do veículo, pois normalmente isto não é preenchido no primeiro contato com o cliente. Sendo assim, nesta etapa sugerimos que estes dados sejam preenchidos para que a negociação possa evoluir para a próxima fase e posteriormente possa ser disponibilizada para o lojista.

Uma vez preenchidos esses dados, ela passará para a fase **Em Avaliação.** Abaixo listamos as funcionalidades do painel Negociação onde será possível visualizar onde e como efetuar esta edição no cadastro.

#### Funcionalidades do Painel NEGOCIAÇÃO:

Abaixo enumeramos as funções de movimentação disponíveis nas negociações através do painel de listagem:

#### 1 - Atendimento da Negociação:

Nesta tela é possível realizar todo o atendimento operacional referente à negociação, como visualizar as ofertas e interagir com as mesmas, trabalhar de forma ativa com o lojista, visualizar histórico da oferta desde o CRM, etc. Tudo isto é possível através dos quatro painéis da tela: Dados do veículo/demais opções, Ofertas, Lojistas e Histórico. Detalhes das mesmas a seguir:

> 💡 Quando o painel Atendimento estiver vermelho conforme destacado na imagem, significa que existem novas ofertas para o veículo ainda não respondidas. Mais detalhes abaixo no item 1:

**1.****Dados do veículo e demais opções:**

Primeiramente, na tela superior na parte esquerda teremos um resumo da negociação e de tudo o que foi preenchido nas etapas anteriores, referente ao cliente e ao veículo. Clicando em “Mostrar mais”, será possível visualizar os dados de avaliação do veículo:

Nesta parte teremos algumas ações disponíveis:

Whatssapp:

Abrirá uma nova página no navegador diretamente no WhatsApp para compartilhar o link da oferta com um lojista ou grupo de lojistas, permitindo assim trabalhar ativamente com a oferta

Telegram:

Abrirá uma nova página no navegador diretamente no Telegram para compartilhar o link da oferta com um lojista ou grupo de lojistas, permitindo assim trabalhar ativamente com a oferta.

Editar:

Abrirá a tela da negociação, permitindo que qualquer dado seja alterado.

Avaliar:

Abrirá a opção da avaliação, permitindo que qualquer dado desta etapa seja alterado.

Desistência:

Abrirá a tela para que seja feita a desistência da venda, desta forma ela deixará de ficar disponível como oferta para os lojistas e ficará cancelada. Insira obrigatoriamente um motivo e um descritivo, explicando a desistência:

> 💡 O cadastro destes motivos são personalizáveis no sistema, veja onde e como efetuar este cadastro AQUI.

**2.****Ofertas:**

Ainda na tela superior agora na parte direita, caso já exista alguma oferta realizada para esta negociação o sistema as exibirá neste painel conforme consta abaixo:

É possível efetuar a análise das propostas em conjunto com o painel da esquerda, utilizando-o como base uma vez que este painel mostra o valor pretendido de venda, os valores previstos de gastos, média de venda deste modelo, etc:

Após analisar as propostas, é possível interagir com as ofertas através dos botões de status. Verifique se São três opções disponíveis: Aceitar, Recusar e Comentar:

- Aceitar: utilize para aceitar a proposta caso concorde com o valor enviado. Caso aceita, o sistema disponibilizará uma nova opção no painel 1, “Gerar Operação”, o qual servirá para concretizar a venda. Saiba mais sobre esse recurso no item 8. Ações:
- Recusar: utilize para recusar a proposta caso não concorde com o valor enviado.
- Comentar: utilize para enviar apenas uma mensagem para o lojista, a fim de negociar o valor enviado por ele, sem aceitar ou recusar a oferta.

Em todas as opções, a mesma tela será exibida apenas sendo apresentado um outro tipo de ação dependendo da opção clicada. É obrigatório digitar um descritivo neste processo (caso tenha sido clicado em “comentar”, o campo “Descrição” receberá a mensagem para o lojista):

**3.Lojistas:**

O painel permite a visualização do cadastro resumido de todos os lojistas existentes no sistema. Observe através da imagem abaixo que ele traz informações pertinentes do perfil dos lojistas, tais como: valores mínimos e máximos que os mesmos desejam em um veículo, KM rodados, tempo de uso e quantidades.

Também temos a coluna “Aderência” a qual trará o percentual de afinidade do lojista com o veículo:

Tudo isto permite que seja feito um trabalho ativo com os lojistas, pois tendo estes dados em tela é possível confrontá-los com os dados do veículo em questão e oferecer esta oferta diretamente para ele.

É possível filtrar os lojistas através dos campos abaixo, buscando por nome, cidade, tipo de veículo comercializado e valores máximos e mínimos:

Através dos botões abaixo também temos a opção de cadastrar um novo lojista através do atalho “Cadastrar Novo” ou limpar os filtros para uma nova busca através do “Limpar Pesquisa”. Ainda é possível efetuar uma ordenação diferenciada conforme lista de opções da direita:

O envio da oferta é feito através do botão “Enviar Oferta”, também é possível enviar apenas uma mensagem ao lojista através do botão “Enviar Mensagem”:

Em ambas as opções a mesma tela será apresentada, porém quando for o envio da mensagem o campo tipo será “Contato Lojista” e o campo “Valor” será inibido. Assim que enviada a oferta ou mensagem, a mesma ficará disponível no ambiente do lojista.

**4.Histórico:**

O painel Histórico permitirá a visualização de todo o histórico desta oferta, funcionando como um timeline desde a criação da mesma através do CRM e todas as etapas passadas por lá, até a parte de ofertas e conversa com os lojistas.

Do lado direito temos a timeline de conversas com o lojista, do esquerdo com o cliente:

#### 2 - Opção Prox. Tarefa:

Esta opção permitirá o cadastro de uma nova tarefa relacionada a negociaçãp. Esta tarefa sempre será um agendamento, conforme a tela a seguir:

Campos:

- **Negociador:** Selecione qual negociador está conduzindo esta venda `(campo obrigatório).`
- **Empresa:** Selecione a empresa (loja) a qual a negociação está vinculada `(campo obrigatório).`
- **Data Agendamento:** Seleciona a data a qual está sendo agendada, juntamente com o horário.
- **Assunto:** Selecione qual o assunto desta visita: avaliação, vistoria, pendência, negociação, retorno de ligação ou visita `(campo obrigatório).`
- **Cliente:** Digite qual o cliente está sendo agendado `(campo obrigatório).`
- **Veículo:** Digite o modelo do veículo.
- **Cidade:** Digite a cidade a qual ocorrerá a visita.
- **Telefone:** Digite o telefone do cliente.

> 💡 Este agendamento ficará disponível no recurso de agenda do sistema. Saiba mais detalhes sobre a agenda clicando AQUI.

Uma vez que a negociação já tenha um agendamento cadastrado, o mesmo ficará disponível com a data, hora e assunto na coluna Prox. Tarefa, conforme imagem abaixo:

Ao clicar, o sistema exibirá um resumo deste agendamento cadastrado:

Clicando no botão “Concluir Tarefa”, o sistema entenderá que a visita já ocorreu e fará a conclusão desta mesma, deixando de existir no recurso Agenda.

#### 3 - Opção Adicionar etiquetas:

Esta opção permite classificar o lead com alguma identificação específica. No exemplo abaixo, temos as etiquetas Frio, Morno e Quente:

![atendimentos-crm-completo](./assets/etiquetatelinha.png)

Essas etiquetas são exemplos de como utilizar essa funcionalidade, indicando que o lead está perto ou longe de se tornar bem-sucedido. Porém, utilize-a como preferir pois esse cadastro personalizável, saiba como efetuar esse cadastro etiquetas AQUI *(manual relacionado, ainda não migrado)*.

Uma vez selecionada a etiqueta, o sistema apresentará a mesma desta forma na coluna:

![atendimentos-crm-completo](./assets/etiquetasselecionadas.png)

#### 4 - Opção Visualizar *NECESSITA AJUSTE*:

#### 5 - Opção CRM:

Esta opção ficará disponível apenas caso exista um cadastro de CRM origem desta negociação, ou seja, caso o cliente tenha vindo do CRM e tenha se transformado em uma negociação. Sendo assim, se existir, o código do CRM será apresentado e disponível para clicar:

Ao clicar, o sistema redirecionará para a tela do cadastro deste CRM, onde será possível visualizar os detalhes de cadastro, conversas e também cadastrar novas conversas.

#### 6 - Opção Cliente:

O nome do cliente da negociação é um recurso clicável, conforme demonstrado abaixo:

Ao clicar, o sistema exibirá uma tela apresentando os detalhes do cliente, como celular, tel. comercial, residencial, e-mail e os valores do veículo:

#### 7 - Opção Número do telefone:

O número de telefone é interativo no sistema, o que significa que é possível clicar sobre ele:

Ao clicar, o sistema abrirá uma nova aba no seu navegador, permitindo assim uma conversa com este cliente diretamente pelo WhatsApp.

#### 8 - Opção Ações:

A opção **Ações** terá recursos diferentes a depender da fase a qual se encontrar a negociação. Listaremos as opções conforme cada fase a seguir:

- Fase **Rascunho:** Editar, Fotos e Desistência.
- Fase **Em Avaliação:** Editar, Avaliar, Fotos, Relatório de Ofertas, Desistência.
- Fase **Avaliação Finalizada** e **Em Negociação:** Editar, Avaliar, Fotos, Ativar, Relatório de Ofertas, Ficha de Avaliação, Gerar Operação, Desistência.
- Fase **Proposta Aceita:** Editar, Avaliar, Fotos, Relatório de Ofertas, Ficha de Avaliação, Gerar Operação, Desistência.

Detalhamento das opções:

#### Editar

Abrirá a tela de cadastro da negociação, onde é possível visualizar, editar e completar os dados da mesma:

#### Avaliar

Nesta opção é possível efetuar a avalição do veículo, inserindo as características físicas, acessórios, condição do veículo, etc.

1. **Dados Gerais:**

Na primeira opção, Dados Gerais, indique as principais características do veículo, tais como transmissão, cor, quantidade de portas, etc. Selecione e clique em Avançar para continuar com a avaliação:

campo **KM:** `(campo obrigatório).`

2. **Opcionais:**

No próximo passo, marque as demais opções do veículo selecionando-as na caixinha, após clique em Avançar para prosseguir com o último passo:

> 💡 Os **Opcionais** são personalizáveis no sistema, ou seja, cadastre-os conforme a sua necessidade. Saiba como e onde efetuar esse cadastro **AQUI.**

3. **Checklist:**

No terceiro e último passo da avaliação, analise as condições das características do veículo, selecionando entre Bom, Regular ou Ruim. Caso haja a necessidade de efetuar algum reparo, é possível descrever este serviço e digitar um valor aproximado para ele:

Desta forma o sistema somará todos os valores e trará a previsão total de gastos no campo “Previsão Gastos”.

Efetue também uma descrição de como estão as condições da documentação do veículo e uma breve descrição do mesmo através do campo “Observação”.

Após, clique em Salvar para finalizar a avaliação.💡Os **Checklists** são personalizáveis no sistema, ou seja, cadastre-os conforme a sua necessidade. Saiba como e onde efetuar esse cadastro **AQUI.** *(manual relacionado, ainda não migrado)* 
 
Os **Grupos** também são personalizáveis no sistema, saiba como e onde efetuar o cadastro **AQUI.** *(manual relacionado, ainda não migrado)*

Após Salvar, o sistema exibirá um pop-up para que seja confirmada a avaliação feita. Após confirmar, o veículo entrará para a etapa **Avaliação Finalizada.**

#### Fotos

Esta ação normalmente é feita após a conclusão da ação anterior, que é a avaliação do veículo.

Ao clicar, será aberta a tela para que sejam selecionadas e carregadas as fotos do veículo. Essas serão as fotos apresentadas na oferta:

Clique sobre a foto desejada para a capa da oferta:

> 💡 Sugerimos que esta etapa seja feita via **celular,** desta forma você poderá tirar as fotos do veículo diretamente do smartphone. Essa abordagem agiliza o processo e viabiliza a criação de um padrão de imagens para todas as ofertas.

#### Ativar

O recurso Ativar deverá ser feito após a **Avaliação** e a inclusão das **Fotos** do veículo. Esta ação fará com que o veículo finalmente fique disponível para os lojistas, o que chamamos de subir a oferta do carro para os lojistas.

A tela do Ativar trará um prévia com todas as informações relacionadas ao veículo preenchidas nas ações anteriores para que seja feita uma conferência: dados principais do veículo, opcionais, checklists, informações sobre os gastos previstos e observações.

Junto as demais informações temos ainda mais três funcionalidades para editar/completar o veículo, funcionando como um atalho rápido: Editar Avaliação, Editar Negociação e Adicionar Fotos:

Finalmente, clicando na opção Ativar Oferta subirá o veículo e o deixará disponível, subindo para os lojistas. Após ativado, o cadastro passará para a etapa **Em Negociação.**

Caso seja clicado em Ativar Oferta em um veículo que não tenha nenhuma foto adicionada, o sistema emitirá o seguinte alerta, uma vez que é obrigatório existirem fotos para subir o veículo:

#### Reativar

Esta opção trará novamente a tela de **Ativar** permitindo a edição da negociação tais como dados, fotos, etc. Ver a opção anterior para mais detalhes.

#### Ficha de Avaliação

Este recurso efetua a geração da Ficha de Avaliação do veículo, normalmente utilizada pelo avaliador para conferir o que foi feito neste processo. Trará um resumo de toda a avaliação já realizada, junto aos dados importantes do veículo.

#### Gerar Operação

#### Preenchendo a Operação:

Este recurso fará o fechamento da venda após a oferta do lojista ser aceita pelo negociador. Pode ser acessada tanto pelo menu Ações do painel descrita neste item, ou dentro do opção Atendimento da Negociação, o botão ficará disponível quando a oferta estiver aceita conforme demonstrado abaixo:

É essencial completar a Operação com todos os dados restantes do veículo, cliente e lojista. Diversas informações já virão preenchidas das etapas anteriores, no entanto, o preenchimento das demais é crucial, uma vez que farão parte do contrato de venda.

> ℹ️ Campos marcados com asterisco vermelho (*) são obrigatórios.

**1.Capa**

Preencher os campos da capa com os dados restantes do veículo, atentando-se para os campos “Valor Cliente” e Valor Lojista”, o primeiro é o que foi combinado e será pago ao cliente e o segundo o que foi negociado com o lojista:

**2.Cliente**

**2.1 Dados**

Preencher os campos referentes ao cliente.

É possível buscar um cliente previamente cadastrado e já inseri-lo nesta tela clicando na lupa conforme demonstrado na imagem abaixo. A pesquisa pode ocorrer tanto por CPF/CNPJ quanto pelo nome. Também há a possibilidade de cadastrar um cliente novo neste momento através da opção “Cadastrar novo”:

**2.2 Débitos do veículo**

Preencher as obrigações financeiras do veículo caso existirem, como multas, financiamento, etc:

O cadastro do débito é feito através do botão “+ Adicionar débito”, destacado acima. A tela apresentada será esta a seguir para que sejam digitados os dados do débito:

Informe os dados exibidos na tela para registrar o débito. É importante observar o campo Fornecedor, que é o “dono” do débito. Por exemplo, em caso de uma multa, o fornecedor será o DETRAN, sendo assim, o DENTRAN deverá estar previamente cadastrado na base.

> 💡 Caso não exista o **Fornecedor** em questão, é possível cadastrá-lo pelo atalho “Cadastrar novo”, destacado na imagem acima. Este cadastro também é feito em Financeiro > Cadastros > Fornecedor. Clique AQUI para acessá-lo.O tipo do documento também é personalizável no sistema através do caminho: Operação > Cadastros > Tipo de documento. Clique **AQUI** para acessá-lo.

Após inserido algum débito, o mesmo ficará disponível em listagem conforme consta abaixo, com a opção de ser excluído, ou a opção de ser transferido para o lojista:

Ao utilizar a opção “Transferir p/ Lojista”, o sistema entenderá que o lojista irá assumir este valor, sendo assim, entrará como um débito a ser deduzido do seu valor total a pagar, conforme será visto mais abaixo no item 3.2Débitos transferidos.

**2.3 Pagamento**

Preencher os dados do pagamento, ou seja, como será feito o pagamento ao cliente.

O sistema apresentará um resumo dos valores do veículo, e também a **taxa de perícia** e valor de **comissão**, ambos irão trazer o valor já pré-definido que você praticar (processo feito na implantação do sistema), porém, é possível neste momento modificar os valores ou zerá-los, se for o caso:

O cadastro do pagamento é feito através do botão “+ Adicionar pagamento”, destacado na imagem mais acima. A tela apresentada será esta a seguir para que sejam digitados os dados do mesmo:

Caso seja escolhida a opção **DOC** ou **TED**, o sistema apresentará automaticamente mais campos na tela para que sejam preenchidos banco, agência, conta e tipo da conta:

> 💡 O cadastro da forma de pagamento é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique AQUI para acessá-lo.

Caso o valor do veículo seja depositado em uma conta outra conta que não a do cliente, há a opção de “Titular terceiro?” a qual pode ser marcada para que os campos de nome e a conta bancária deste titular sejam preenchidos.

> 💡 O cadastro do banco é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Fornecedor. Clique AQUI para acessá-lo.

**3 Lojista**

**3.1 Dados**

Preencher os campos referentes ao lojista.

É possível buscar um lojista previamente cadastrado e já inseri-lo nesta tela clicando na lupa conforme demonstrado na imagem abaixo. A pesquisa pode ocorrer tanto por CPF/CNPJ quanto pelo nome. Também há a possibilidade de cadastrar um lojista novo neste momento através da opção “Cadastrar novo”:

**3.2Débitos transferidos**

Caso o lojista tenha algum débito transferido, será apresentado nesta tela. Os débitos transferidos são valores que vieram via tela 2.2Débitos dos veículos, caso o lojista tenha assumido alguma pendência do veículo cadastrada neste item: multas, documentos do carro, etc.

**3.3Pagamento**

Preencher os dados do pagamento do lojista, ou seja, como o lojista fará o pagamento para a loja:

O sistema apresentará um resumo dos valores do veículo, e também a **taxa de perícia,** este valor já virá pré-definido (processo feito na implantação do sistema), porém, é possível neste momento modificar ou zerar, se for o caso:

O cadastro do pagamento é feito através do botão “+ Adicionar pagamento”, destacado na imagem mais acima. A tela abaixo será apresentada para que sejam digitados os dados do mesmo:

Caso seja escolhida a opção **DOC** ou **TED**, o sistema apresentará automaticamente mais um campo na tela para que seja preenchido o Banco.

> 💡 O cadastro da **forma de pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique AQUI para acessá-lo.

**4.Anexos**

Os anexos tem objetivo de guardar qualquer tipo de arquivo referente a operação caso a loja não queira armazená-los fisicamente. Por exemplo: um extrato de pagamento de multa, documentos do veículo, demais comprovantes de pagamento do veículo, etc:

> 💡 O cadastro do **Tipo do anexo** é feito através do sistema, de forma personalizável. Através do caminho: Operação> Cadastros > Tipo de Anexo. Clique AQUI para acessá-lo.

**5.Resumo**

Esta página irá apresentar uma visão geral dos valores desta operação, contendo também uma opção para lançamento de algum valor adicional através do botão indicado abaixo “Adicionar”:

#### Fluxo da Operação:

**Pendências:**

É possível criar pendências referente ao processo da operação como um todo indicando que existe alguma questão ainda não resolvida sobre este processo, através da opção demonstrada abaixo:

Ao clicar, o sistema redirecionará para a tela abaixo onde será possível inserir a pendência, que pode ser um recibo faltante, algum documento ou outro assunto. Insira o tipo, a operação (abrirá na operação em questão) e um descritivo opcional:

> 💡 O cadastro do tipo da pendência é personalizável no sistema, veja onde e como efetuar este cadastro AQUI.

**Salvar:**

Após preencher os dados de todas as telas na etapa do item anterior, é possível salvar tudo o que foi digitado através do botão abaixo:

Desta forma será possível sair da tela sem perder as informações, e deixar para concluir a operação em um outro momento, se houver a necessidade. Por se tratar de várias telas e campos, sugerimos também que conforme for preenchendo já efetue o Salvar para garantir que as informações fiquem registradas.

**Aprovar Compra:**

Após preencher, salvar e conferir todas as informações, o sistema irá liberar o botão de Aprovar Compra, conforme indicado abaixo:

Ao clicar, será apresentada a tela de confirmação abaixo a qual virá com um campo a ser checado, caso você utilize o módulo financeiro ele já virá checado automaticamente:

Uma vez aprovada, este registro deixará de ser exibido no painel Negociação pois não se trata de mais de uma negociação e sim uma operação de venda, sendo assim passará a existir somente no menu Operação > Operações.

Após aprovada a compra, o sistema também liberará a opção de impressão na tela 5.Resumos para que seja impresso o contrato e assinado pelo cliente:

Antes de imprimir o sistema solicitará que sejam marcados os tópicos desejados na impressão do contrato:

Após a aprovação da compra e a impressão do contrato para a assinatura do cliente, a etapa relacionada a ele estará concluída.

**Aprovar Venda:**

Após a aprovação da compra, conforme explicado no item acima o registro deixará de ser uma negociação e passará a ser uma venda, caso você saia da tela neste momento ainda será possível acessá-lo novamente em: Operação > Operações.

Sendo assim o botão Aprovação da Venda ficará disponível conforme indicado abaixo:

Ao clicar, será apresentada a tela de confirmação abaixo a qual virá com um campo a ser checado, caso você utilize o módulo financeiro ele já virá checado automaticamente:

Após aprovada a venda, o sistema também liberará a opção de impressão na tela 5.Resumos para que o contrato seja impresso e possa ser assinado pelo cliente:

A seguinte tela abaixo será exibida para que sejam preenchidos os dados do lojista ou funcionário do lojista o qual está recebendo o veículo: nome, CPF/CNPJ, data/hora da entrega:

Após concluir a etapa anterior, o sistema disponibilizará a impressão do contrato referente ao lojista, conforme indicado abaixo:

Rolando a tela para baixo o sistema também disponibilizará o resumo dos valores, quanto o lojista recebeu, quanto o cliente recebeu, débitos se houverem e a rentabilidade obtida neste veículo:

Após todo este processo de aprovação de venda e impressão dos contratos, a venda estará concluída.

**Cancelar:**

O botão Cancelar servirá para abortar todo o processo e cancelar esta venda, caso ocorra algum imprevisto que impeça a conclusão do negócio:

Após cancelar, o status da operação passa a ser o de Cancelado conforme consta abaixo:

**Reabrir:**

Utilize a opção de Reabrir caso queira reativar uma venda cancelada anteriormente, ou mesmo limpar a aprovação de compra e venda, ou seja, refazer estas aprovações e deixar a negociação novamente em aberto:

Após reabrir, o status da operação passa a ser o de Aberto conforme consta abaixo:

Após concluir todo o processo de compra, venda e entrega do veículo o sistema exibirá os dados de data e hora referente a cada operação feita na capa da tela, conforme consta abaixo:

#### Desistência

Exibirá a tela de desistência da negociação, para quando o cliente decidir não continuar com a venda. É necessário informar o motivo da desistência e uma justificativa escrita:

> 💡 O cadastro destes motivos são personalizáveis no sistema, veja onde e como efetuar este cadastro AQUI.

#### Opção OFERTAS:

O botão Ofertas permitirá acessar um atalho para visualizar as ofertas feitas nos veículos em tempo real:

Ao clicar, o sistema redirecionará para uma tela onde será possível filtrar as ofertas desejadas através dos filtros abaixo, ou visualizar a lista completa logo abaixo:

---

## Desempenho

O painel **Desempenho** apresenta a rentabilidade de cada negociador, quando o perfil logado for Gerente ou Diretor. Quando o perfil logado for o do próprio Negociador, será possível ver o desempenho apenas do próprio login.

A seguir mostraremos o recurso logado como Gerente/Diretor:

Por padrão, as informações de desempenho virão sem visualização. Para visualizar, basta clicar na opção abaixo:

O Desempenho será exibido conforme abaixo, sendo possível filtrar por uma data, empresas e negociador específico. O sistema mostrará a quantidade de atendimentos (CRM), negociações, fechamentos, a rentabilidade e o percentual de conversões em sucesso deste negociador:

---
