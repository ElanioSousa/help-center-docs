---
id: "operacao-operacao"
title: "Operação"
type: "manual"
keywords: ["operacao", "operacoes", "compra e venda", "filtros operacao", "aprovar compra", "aprovar venda", "emissao contrato", "cancelar operacao", "reabrir operacao"]
module: "operacao"
order: 20
nav_label: "Operação"
last_updated: "2026-08-05"
---

A Operação é o resultado que obtemos após uma oferta ser aceita. Sendo assim*,* este recurso é responsável por enfim efetivar a compra e venda do veículo, após a oferta do lojista ser aceita pelo negociador no menu anterior, *Atendimentos*. Desta forma, temos o seguinte fluxo:

**Oferta aceita → Geração de operação**

Para buscar operações com uma busca mais refinada utilize a opção “Filtro”, a qual por padrão ficará inibida sempre que a tela for aberta, porém, pode ser acessada conforme demonstração abaixo:

![Untitled](./assets/operacao-Untitled.gif)

Detalhamento dos filtros:

![Untitled](./assets/operacao-Untitled.png)

1. **Código:** indique o código da operação.
2. **Empresa:** indique a empresa da operação, podendo escolher mais de uma.
3. **Cliente ou Lojista:** indique o nome do cliente ou o nome do lojista da operação.
4. **Status:** indique o status da operação, escolha entre: Aberto, Compra Aprovada, Venda Aprovada, Fechado ou Cancelado.
5. **Negociador:** indique o nome do negociador, o sistema abrirá uma listagem para escolher.
6. **Data Cadastro:** indique a data de cadastro da operação podendo escolher entre um intervalo de datas.
7. **Data Aprovação:** indique a data de aprovação da operação podendo escolher entre um intervalo de datas.
8. **Data Entrega:** indique a data de cadastro da entrega podendo escolher entre um intervalo de datas.
9. **Veículo:** indique a placa, marca ou modelo do veículo.
10. **Possui anexos?:** indique se a operação possui anexos: Sim ou Não.
11. **Tipos de anexo:** indique qual tipo de anexo a operação deve ter. Os tipos são personalizáveis, veja mais sobre <a href="#" onclick="carregarManual('operacao/cadastros-tipo-anexo')">AQUI</a>.
12. **Tipos de documento:** indique qual tipo de documento a operação deve ter. Os tipos são personalizáveis, veja mais sobre <a href="#" onclick="carregarManual('operacao/cadastros-tipo-documento')">AQUI</a>.
13. **Origem CRM:** busque pela origem do CRM, podendo escolher mais de uma. As origens são personalizáveis, veja mais sobre <a href="#" onclick="carregarManual('atendimentos/cadastros-origem-leads')">AQUI</a>.

> 💡 Lembrando que não há obrigatoriedade de preenchimento dos filtros, utilize-os caso queira buscar operações específicas de acordo com a sua necessidade. Caso não seja preenchido nenhum filtro, o sistema trará a listagem de forma geral.

## Preenchendo ou Editando uma Operação

É essencial completar a Operação com todos os dados restantes do veículo, cliente e lojista. Diversas informações já virão preenchidas das etapas anteriores, no entanto, o preenchimento das demais é crucial uma vez que mais tarde farão parte do contrato de venda. 

> ℹ️ Campos marcados com asterisco vermelho (*) são obrigatórios.

### 1.Capa

**1.Capa:**

Preencher os campos da capa com os dados restantes do veículo, atentando-se para os campos “Valor Cliente” e Valor Lojista”, o primeiro é o que foi combinado e será pago ao cliente e o segundo o que foi negociado com o lojista. 

![Untitled](./assets/operacao-Untitled-1.png)

Detalhamento dos campos da **Capa da operação**:

- **NEGOCIADOR:** informe o negociador responsável por esta operação `(campo obrigatório).`
- **VALOR CLIENTE:** informe o valor combinado com o cliente, o qual posteriormente será pago ao mesmo `(campo obrigatório).`
- **VALOR LOJISTA:** informe o valor o qual foi combinado com o lojista para este veículo `(campo obrigatório).`

**VEÍCULO:**

- **PLACA:** digite a placa completa do veículo `(campo obrigatório).`
- **TIPO:** informe o tipo do veículo, podendo escolher entre: Automóvel, Motocicleta ou Caminhão `(campo obrigatório).`
- **ESPÉCIE:** informe a categoria do veículo, entre Passageiro, Especial ou Carga `(campo obrigatório).`
- **RENAVAM:** informe o código Renavam do veículo `(campo obrigatório).`
- **CHASSI:** informe o Chassi do veículo `(campo obrigatório).`
- **VEÍCULO SEM FIPE?:** marque a opção caso o veículo não possua valor na tabela FIPE.
- **MARCA:** selecione a marca do veículo dentre a completa lista de opções `(campo obrigatório).`
- **MODELO:** selecione o modelo do veículo o qual será carregado a partir do que for selecionado no campo anteerior “Marca”`(campo obrigatório).`
- **ANO FAB.:** digite o ano de fabricação do veículo `(campo obrigatório).`
- **ANO MODE.:** digite o ano do modelo do veículo `(campo obrigatório).`
- **CATEGORIA:** selecione a categoria do veículo, entre Oficial, Particular, Diplomático, Aluguel ou Aprendizagem `(campo obrigatório).`
- **SITUAÇÃO:** selecione qual a condição do veículo, podendo escolher entre: Vigente, Alerta judicial, Bloqueado ou Baixado `(campo obrigatório).`
- **COR:** selecione qual a cor do veículo dentre a lista disponível `(campo obrigatório).`
- **COMBUSTÍVEL:** selecione qual tipo de combustível ou combinação de combustíveis que o veículo conseome `(campo obrigatório).`
- **KM:** quantos kilômetros rodados o veículo já percorreu `(campo obrigatório).`
- **VALOR FIPE:** qual o valor deste veículo na tabela FIPE `(campo obrigatório).`
- **CIDADE:** a qual estado e cidade o veículo pertence `(campo obrigatório).`
- **ALIENAÇÃO FIDUCIÁRIA:** deverá ser preenchido caso o veículo esteja sob esta condição, ou seja, caso seja objeto de garantia.
- **OBSERVAÇÃO:** campo livre para registrar uma observação desta operação.

—

### 2.Cliente

**2.1 Dados**

Preencher os campos referentes ao cliente.

É possível buscar um cliente previamente cadastrado e já inseri-lo nesta tela clicando na lupa conforme demonstrado na imagem abaixo. A pesquisa pode ocorrer tanto por CPF/CNPJ quanto pelo nome. Também há a possibilidade de  cadastrar um cliente novo neste momento através da opção “Cadastrar novo”:

![Untitled](./assets/operacao-Untitled-2.png)

Detalhamento dos campos do **Cliente**:

- **CPF/CNPJ:** indique o CPF se pessoa física ou CNPJ se pessoa jurídica do cliente `(campo obrigatório).`
- **NOME:** digite o nome completo do cliente `(campo obrigatório).`
- **RG/INSCR. EST:** digite o RG (se PF) ou Inscrição Estadual (se PJ) do cliente `(campo obrigatório).`
- **EMAIL:** informe o e-mail do cliente `(campo obrigatório).`
- **ESTADO CIVIL:** informe a condição civil do cliente `(campo obrigatório).`
- **NACIONALIDADE:** qual a nacionalidade do cliente: Estrangeiro, Brasileiro ou Naturalizado `(campo obrigatório).`
- **DATA NASCIMENTO:** digite a data de nascimento dest cliente `(campo obrigatório).`
- **CEP:** digite o CEP do endereço do cliente `(campo obrigatório).`
- **CIDADE:** informe o estado e a cidade do cliente `(campo obrigatório).`
- **BAIRRO:** informe o bairro do cliente `(campo obrigatório).`
- **LOGRADOURO:** informe o logradouro do endereço (rua, avenida, estrada), etc) `(campo obrigatório).`
- **NÚMERO:** informe o número da residência do cliente `(campo obrigatório).`
- **COMPLEMENTO:** informe um complemento do endereço, se houver.
- **CELULAR:** digite o número do celular do cliente `(campo obrigatório).`
- **TEL. RESIDENCIAL:** digite o número do telefone residencial, se houver.
- **TEL. COMERCIAL:** digite o número do telefone comercial, se houver.

**2.2 Débitos do veículo**

Preencher as obrigações financeiras do veículo caso existam, como multas, financiamento, etc:

![operacaodebitos.png](./assets/operacao-operacaodebitos.png)

O cadastro do débito é feito através do botão “+ Adicionar débito”, destacado acima. A tela apresentada será esta a seguir para que sejam digitados os dados do débito:

![operacaocadastrardebito.png](./assets/operacao-operacaocadastrardebito.png)

Informe os dados exibidos na tela para registrar o débito. É importante observar o campo Fornecedor, que é o “dono” do débito. Por exemplo: em caso de uma multa o fornecedor será o DETRAN, sendo assim, o DENTRAN deverá estar previamente cadastrado na base. 

> 💡 Caso não exista o **Fornecedor** em questão, é possível cadastrá-lo pelo atalho “Cadastrar novo”, destacado na imagem acima. Este cadastro também é feito em Financeiro > Cadastros > Fornecedor. Clique <a href="#" onclick="carregarManual(&#39;financeiro/cadastros-fornecedor&#39;)"><strong>AQUI</strong></a> para acessá-lo.
>
> O **tipo do documento** também é personalizável no sistema através do caminho: Operação > Cadastros > Tipo de documento. Clique <a href="#" onclick="carregarManual('operacao/cadastros-tipo-documento')">**AQUI**</a> para acessá-lo.

Após inserido algum débito, o mesmo ficará disponível em uma listagem conforme consta abaixo, com a opção de ser excluído, ou a opção de ser transferido para o lojista:

![transferirlojista.png](./assets/operacao-transferirlojista.png)

Ao utilizar a opção “Transferir p/ Lojista”, o sistema entenderá que o lojista irá assumir este valor, sendo assim, entrará como um débito a ser deduzido do seu valor total a pagar, conforme será visto mais abaixo no item 3.2Débitos transferidos.

**2.3 Pagamento**

Preencher os dados do pagamento, ou seja, como será feito o pagamento ao cliente. 

![operacaopagamento.png](./assets/operacao-operacaopagamento.png)

O sistema apresentará um resumo dos valores do veículo, e também a **taxa de perícia** e valor de **comissão**, ambos irão trazer o valor já pré-definido que você praticar (processo feito na implantação do sistema), porém, é possível neste momento modificar os valores ou zerá-los, se for o caso:

![pagamentopericiacomissao.png](./assets/operacao-pagamentopericiacomissao.png)

O cadastro do pagamento é feito através do botão “+ Adicionar pagamento”, destacado na imagem mais acima. A tela abaixo será apresentada para que sejam digitados os dados do mesmo:

![addpgtosimples.png](./assets/operacao-addpgtosimples.png)

Caso seja escolhida a opção **DOC** ou **TED**, o sistema apresentará automaticamente mais campos na tela para que sejam preenchidos banco, agência, conta e tipo da conta conforme imagem abaixo:

> 💡 O cadastro da **forma de pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique <a href="#" onclick="carregarManual(&#39;financeiro/cadastros-forma-pagamento&#39;)"><strong>AQUI</strong></a> para acessá-lo.

![addformapagamento.png](./assets/operacao-addformapagamento.png)

Caso o valor do veículo seja depositado em uma conta que seja não a do cliente, há a opção de “Titular terceiro?” a qual pode ser marcada para que os campos de nome e a conta bancária deste titular sejam preenchidos.

> 💡 O cadastro do **banco** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Fornecedor. Clique **AQUI** para acessá-lo.

### 3.Lojista

**3.1 Dados**

Preencher os campos referentes ao lojista.

É possível buscar um lojista previamente cadastrado e já inseri-lo nesta tela clicando na lupa conforme demonstrado na imagem abaixo. A pesquisa pode ocorrer tanto por CPF/CNPJ quanto pelo nome. Também há a possibilidade de  cadastrar um lojista novo neste momento através da opção “Cadastrar novo”:

![3.1lojista.png](./assets/operacao-3.1lojista.png)

Detalhamento dos campos do **Lojista**:

- **CPF/CNPJ:** digite o número do CPF caso pessoa física, ou CNPJ caso pessoa jurídica do lojista `(campo obrigatório).`
- **NOME:** informe o nome do lojista, destacando que conforme informado acima é possível consultar um lojista previamente cadastrado (opção Lupa) ou cadastrá-lo neste momento `(campo obrigatório).`
- **RG/INSCR. EST:** digite o RG (caso PF) ou Inscrição Estadual (caso PJ) deste lojista `(campo obrigatório).`
- **EMAIL:** informe o e-mail do lojista `(campo obrigatório).`
- **CEP:** informe o CEP do endereço do lojista `(campo obrigatório).`
- **CIDADE:** informe a cidade do lojista `(campo obrigatório).`
- **BAIRRO:** informe o bairro do lojista `(campo obrigatório).`
- **LOGRADOURO:** digite o logradouro (rua, avenida, estrada, etc) `(campo obrigatório).`
- **NÚMERO:** digite o número residencial do lojista `(campo obrigatório).`
- **COMPLEMENTO:** digite um complemento do endereço, se houver.
- **CELULAR:** digite o número do celular do lojista `(campo obrigatório).`
- **TEL. RESIDENCIAL:** digite o número do telefone residencial, se houver.
- **TEL. COMERCIAL:** digite o número do telefone residencial, se houver.

**3.2Débitos transferidos**

Caso o lojista tenha algum débito transferido, será apresentado nesta tela. Os débitos transferidos são valores que vieram via tela 2.2Débitos dos veículos, caso o lojista tenha assumido alguma pendência do veículo cadastrada neste item: multas, documentos do carro, etc.

![3.2debitostransferidos.png](./assets/operacao-3.2debitostransferidos.png)

**3.3Pagamento**

Preencher os dados do pagamento do lojista, ou seja, como o lojista fará o pagamento para a loja:

![adicionarpgtolojista.png](./assets/operacao-adicionarpgtolojista.png)

O sistema apresentará um resumo dos valores do veículo, e também a **taxa de perícia,** este valor já virá pré-definido (processo feito na implantação do sistema), porém, é possível neste momento modificar ou zerar, se for o caso:

![resumopgtolojista.png](./assets/operacao-resumopgtolojista.png)

O cadastro do pagamento é feito através do botão “+ Adicionar pagamento”, destacado na imagem mais acima. A tela apresentada será esta a seguir para que sejam digitados os dados do mesmo:

![addpgtolojista.png](./assets/operacao-addpgtolojista.png)

Caso seja escolhida a opção **DOC** ou **TED**, o sistema apresentará automaticamente mais um campo na tela para que seja preenchido o Banco.

> 💡 O cadastro da **forma de pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique <a href="#" onclick="carregarManual(&#39;financeiro/cadastros-forma-pagamento&#39;)"><strong>AQUI</strong></a> para acessá-lo.

### 4.Lojista

**4.Anexos**

Os anexos tem objetivo de guardar qualquer tipo de arquivo referente a operação caso a loja não queira armazená-los fisicamente. Por exemplo: um extrato de pagamento de multa, documentos do veículo, demais comprovantes de pagamento do veículo, etc:

![anexos.png](./assets/operacao-anexos.png)

> 💡 O cadastro do **Tipo do anexo** é feito através do sistema, de forma personalizável. Através do caminho: Operação> Cadastros > Tipo de  Anexo. Clique **AQUI** para acessá-lo.

### 5.Resumo

**5.Resumo:**

Esta página irá apresentar uma visão geral dos valores desta operação, contendo também uma opção para lançamento de algum valor adicional através do botão indicado abaixo “Adicionar”:

![5.resumo.png](./assets/operacao-5.resumo.png)

## Fluxo da Operação

Após o preenchimento dos dados da operação conforme o item acima, a operação terá um fluxo a ser seguido, conforme indicado na imagem abaixo:

![Untitled](./assets/operacao-Untitled-3.png)

Nos itens dispostos a seguir detalharemos cada uma das etapas a serem seguidas dentro da operação:

### Aprovar Compra - Cliente

Após preencher, salvar e conferir todas as informações, o sistema irá liberar o botão de Aprovar Compra, conforme indicado abaixo:

![aprovarcomprabotao.png](./assets/operacao-aprovarcomprabotao.png)

Ao clicar, será apresentada a tela de confirmação abaixo a qual virá com um campo a ser checado, caso você utilize o módulo financeiro ele já virá checado automaticamente:

![aprovarcompraconfirma.png](./assets/operacao-aprovarcompraconfirma.png)

Abaixo, os pré-requisitos para esta aprovação:

> ✅ **Pré-requisitos para Aprovação da Compra:**
>
> Para que a compra possa ser aprovada com sucesso é necessário que o pagamento do cliente esteja zerado, ou seja, no item **2.Cliente > Pagamento** não pode haver nenhum tipo de débito/valor negativo. Isso indica ao sistema que o pagamento foi feito corretamente ao cliente (dono do veículo).
>
> Exemplo:
>
> Caso o pagamento do Cliente não esteja zerado, conforme consta abaixo:
>
> ![Untitled](./assets/operacao-Untitled-4.png)
>
> Na tentativa de Aprovar Compra o sistema emitirá o seguinte alerta, impedindo a ação:
>
> ![Untitled](./assets/operacao-Untitled-5.png)
>
> Ajuste o pagamento adicionando o valor pago ao cliente através do botão “Adicionar pagamento”. Quando o saldo estiver 0,00 conforme consta abaixo, aí sim será possível aprovar compra sem impedimentos:
>
> ![Untitled](./assets/operacao-Untitled-6.png)
>
> A mesma situação se aplica para caso já exista  algum lançamento e os débitos da aba “Débitos do veículo” forem excluídos, ou caso o campo **Valor Cliente** da aba Capa sofrer alteração, é necessário refazer os lançamentos de pagamentos até que o saldo fique devidamente zerado.

Uma vez aprovada, este registro deixará de ser exibido no painel Negociação pois não se trata de mais de uma negociação e sim uma operação de venda, sendo assim passará a existir somente no menu Operação > Operações.

### Aprovar Venda - Lojista

Após a aprovação da compra, conforme explicado no item acima o registro deixará de ser uma negociação e passará a ser uma venda, caso você saia da tela neste momento ainda será possível acessá-lo novamente em: Operação > Operações. 

Sendo assim o botão Aprovação da Venda ficará disponível conforme indicado abaixo:

![aprovarvendabotao.png](./assets/operacao-aprovarvendabotao.png)

Ao clicar, será apresentada a tela de confirmação abaixo a qual virá com um campo a ser checado, caso você utilize o módulo financeiro ele já virá checado automaticamente:

![aprovarvendaconfirma.png](./assets/operacao-aprovarvendaconfirma.png)

A aprovação da compra nada mais é do que a confirmação que está tudo certo da parte do cliente a compra está pronta para ser aprovada.

Abaixo, os pré-requisitos para esta aprovação:

> ✅ **Pré-requisitos para Aprovação da Venda:**
>
> Primeiramente, para que a Venda possa ser aprovada é necessário que a Compra também esteja aprovada (etapa anterior). 
>
> Além disso é necessário que a aba Lojista > Pagamento esteja com valor zerado.
> *Reforçar que a transferencia de debitos impacta no saldo da aba pagamentos, e tambem o campo Valor Lojista da Capa
>
> Exemplo:
>
> Caso o pagamento do Lojista não esteja zerado, conforme consta abaixo:
>
> ![Untitled](./assets/operacao-Untitled-7.png)
>
> Na tentativa de Aprovar Venda o sistema emitirá o seguinte alerta, impedindo a ação:
>
> ![Untitled](./assets/operacao-Untitled-8.png)
>
> Ajuste o pagamento adicionando o valor pago ao lojista através do botão “Adicionar pagamento”. Quando o saldo estiver 0,00 conforme consta abaixo, aí sim será possível aprovar a venda sem impedimentos:
>
> ![Untitled](./assets/operacao-Untitled-9.png)
>
> A mesma situação se aplica para caso existam valores na aba 3.Lojistas > Débitos transferidos, ou caso o campo **Valor Cliente** da aba Capa sofrer alteração. Neste caso é necessário refazer os lançamentos de pagamento ao lojista até que o saldo fique devidamente zerado.

### Emissão Contrato - Cliente

Para imprimir a versão do contrato a qual o Cliente deverá assinar, vá para a aba **5. Resumo**, encontre o quadro **Cliente** e clique em **Imprimir contratos**, conforme mostrado na imagem abaixo:

![Untitled](./assets/operacao-Untitled-10.png)

> ✅ **Pré-requisito para Imprimir Contratos - Cliente:**
>
> Para habilitar a opção de imprimir contratos do cliente basta que a compra tenha sido previamente aprovada, através do botão “Aprovar Compra”.

Note que ao clicar para assinar, antes da impressão o sistema solicitará que sejam selecionados os tópicos desejados para a emissão do contrato (ao mínimo um tópico deverá ser marcado):

![checklistcontratos.png](./assets/operacao-checklistcontratos.png)

Após a aprovação da compra e a impressão do contrato para a assinatura do cliente, a etapa relacionada a CLIENTE estará concluída.

### Emissão Contrato - Lojista

Para imprimir a versão do contrato a qual o Lojista deverá assinar, vá para a aba **5. Resumo**, encontre o quadro **Lojista** e clique em **Entregar veículo e Imprimir contratos**, conforme mostrado na imagem abaixo:

![Untitled](./assets/operacao-Untitled-11.png)

> ✅ **Pré-requisito para Imprimir Contratos - Lojista:**
>
> Para habilitar a opção de imprimir contratos do lojista basta que a venda tenha sido previamente aprovada, através do botão “Aprovar Venda”.

A seguinte tela abaixo será exibida para que sejam preenchidos os dados do lojista ou funcionário do lojista o qual está recebendo o veículo: nome, CPF/CNPJ, data/hora da entrega. Estes dados serão apresentados na impressão do contrato:

![entregaveiculo.png](./assets/operacao-entregaveiculo.png)

Após concluir a etapa anterior, o sistema disponibilizará a impressão do contrato referente ao lojista, conforme indicado abaixo:

![imprimircontratoslojista.png](./assets/operacao-imprimircontratoslojista.png)

Rolando a tela para baixo, o sistema também disponibilizará o resumo dos valores: quanto o lojista recebeu, quanto o cliente recebeu, débitos, se houverem, e a rentabilidade obtida neste veículo:

![resumototalaba5.png](./assets/operacao-resumototalaba5.png)

Após todo este processo de aprovação de venda e impressão dos contratos, a venda estará concluída.

### Lançamentos adicionais

Disponível na aba **5. Resumo > Lançamentos adicionais > Adicionar.**

O recurso tem objetivo de inserir tanto créditos ou débitos em operações que já se encontram concluídas:

![Untitled](./assets/operacao-Untitled-12.png)

Ao clicar em **Adicionar,** o sistema o redirecionará para a tela de criação de novo título:

![Untitled](./assets/operacao-Untitled-13.png)

Campos da tela:

1. **Tipo:** marque Entrada caso seja um crédito a receber, ou Saída caso seja um débito a ser pago `(campo obrigatório).`
2. **Situação:** selecione a situação do lançamento: em Aberto, Baixado ou Cancelado `(campo obrigatório).`
3. **Empresa:** indique a qual empresa se refere o lançamento `(campo obrigatório).`
4. **Pessoa:** indique qual a pessoa se refere o lançamento, podendo ser lojista ou cliente.
5. **Operação:** a operação já virá preenchida da tela anterior.
6. **NF/Doc:** digite o número da Nota Fiscal ou Documento, automaticamente o sistema preencherá com o código da operação.
7. **Valor Total:** digite o valor do lançamento `(campo obrigatório).`
8. **1ª Parcela:** seleciona no calendário a data de pagamento da primeira parcela deste lançamento `(campo obrigatório).`
9. **Categoria:** qual o tipo do lançamento `(campo obrigatório).`
10. **Forma de pagamento:** qual a forma de pagamento do lançamento (à prazo, à vista, cheque, dinheiro, pix, cartão, etc) `(campo obrigatório).`

> 💡
>
> O cadastro da **Forma de Pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma de Pagamento. Clique [**AQUI**](https://app.notion.com/p/Forma-Pagamento-12346ee594f080aeb582e2652c3d5c7f?pvs=21) para acessá-lo.

1. **Condição de pagamento:** Intervalo**,** Mensal, Bimestral, Trimestral, Semestral ou Anual. Caso escolhido intervalo, será necessário indicar o tempo no campo determinado `(campo obrigatório).`
2. **Conta:** seleciona qual conta bancária `(campo obrigatório).`
3. **Intervalo:** será habilitado para digitação caso a condição de pagamento seja “Intervalo”.
4. **Nº Parcela(s):** informe a quantidade de parcelas do pagamento `(campo obrigatório).`
5. **Valor Parcela(s):**  será preenchido automaticamente de acordo com o total e número de parcelados digitado.
6. **Observação:** digite uma observação para este lançamento, caso haja.

Clique em Salvar para prosseguir, o sistema apresentará a seguinte mensagem de confirmação:

![Untitled](./assets/operacao-Untitled-14.png)

Após confirmado, o lançamento ficará disponível no mesmo local de origem de criação, conforme indicado abaixo, com as respectivas parcelas e valores:

![Untitled](./assets/operacao-Untitled-15.png)

Após criado o lançamento, o constará no quadro resumo desta mesma aba (5. Resumo), constando na linha de **Lançamentos adicionais e** influenciando diretamente no valor final:

![Untitled](./assets/operacao-Untitled-16.png)

Obs: da mesma forma, este valor constará também quando a operação for consultada através do Relatório Analítico. Saiba mais sobre este relatório clicando <a href="#" onclick="carregarManual('operacao/relatorios-analitico')">**AQUI.**</a>

### Botão Salvar

**Salvar:**

Após preencher os dados de todas as telas na etapa do item anterior, é possível salvar tudo o que foi digitado através do botão abaixo:

![salvaroperacao.png](./assets/operacao-salvaroperacao.png)

Desta forma será possível sair da tela sem perder as informações, e deixar para concluir a operação em um outro momento, se houver a necessidade. Por se tratar de várias telas e campos, sugerimos também que conforme for preenchendo já efetue o Salvar para garantir que as informações fiquem registradas.

### Botão Cancelar

**Cancelar:**

O botão Cancelar servirá para abortar todo o processo e cancelar esta venda, caso ocorra algum imprevisto que impeça a conclusão do negócio:

![botaocancelar.png](./assets/operacao-botaocancelar.png)

Após cancelar, o status da operação passa a ser o de Cancelado conforme consta abaixo:

![statuscancelado.png](./assets/operacao-statuscancelado.png)

### Botão Reabrir

**Reabrir:**

Utilize a opção de Reabrir caso queira reativar uma venda cancelada anteriormente, ou mesmo limpar a aprovação de compra e venda, ou seja, refazer estas aprovações e deixar a negociação novamente em aberto:

![botaoreabrir.png](./assets/operacao-botaoreabrir.png)

Após reabrir, o status da operação passa a ser o de Aberto conforme consta abaixo:

![statusaberto.png](./assets/operacao-statusaberto.png)

Após concluir todo o processo de compra, venda e entrega do veículo o sistema exibirá os dados de data e hora referente a cada operação feita na capa da tela, conforme consta abaixo:

![historia.png](./assets/operacao-historia.png)

## Pendências nas operações

**Pendências:**

É possível criar pendências referente ao processo da operação como um todo indicando que existe alguma questão ainda não resolvida sobre este processo, através da opção demonstrada abaixo:

![pendencias.png](./assets/operacao-pendencias.png)

Ao clicar, o sistema redirecionará para a tela abaixo onde será possível inserir a pendência, que pode ser um recibo faltante, algum documento ou outro assunto. Insira o tipo, a operação (abrirá na operação em questão) e um descritivo opcional: 

![criarpendencia.png](./assets/operacao-criarpendencia.png)

> 💡 O cadastro do tipo da pendência é personalizável no sistema, veja onde e como efetuar este cadastro <a href="#" onclick="carregarManual('operacao/cadastros-tipo-pendencia')">AQUI</a>.
