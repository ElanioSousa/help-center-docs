---
id: "financeiro-conciliacao-bancaria"
title: "Conciliação Bancária"
type: "manual"
keywords: ["conciliacao bancaria", "extrato bancario", "ofx"]
module: "financeiro"
order: 40
nav_label: "Conciliação Bancária"
last_updated: "2026-08-05"
---

A conciliação bancária é um processo de verificação e comparação entre os registros financeiros de sua empresa (como o saldo de caixa e as movimentações internas) e o extrato fornecido pelo banco. O objetivo é garantir que os saldos sejam consistentes e identificar discrepâncias, como lançamentos não registrados, taxas bancárias ou erros.

Para acessar a conciliação bancaria acesse o menu Financeiro>Conciliação bancaria 

![image.png](./assets/image-23.png)

## Importando arquivo OFX

Ao acessar a conciliação bancaria será exibido a tela abaixo que deveram ser preenchidas.

![Conciliação bancaria.png](./assets/Conciliao_bancaria.png)

1. **Conta:** Indique a conta para conciliação
2. **Selecionar arquivo OFX:** Selecionar um arquivio na extensão .OFX da conta selecionada.

A maioria dos bancos permite que os clientes baixem extratos bancários no formato OFX diretamente de suas plataformas digitais. 

> 💡
>
> A maioria dos bancos permite que os clientes baixem extratos bancários no formato OFX diretamente de suas plataformas digitais.
> **Dica:** A importação para o sistema **Repays`s** pode ser feita com data anterior ao dia atual ou com data atual. Vantagem de importação com data anterior ao dia atual é a importação única, Já importação com data atual deverão ser feita duas ou mais no decorrer do dia para conciliação.

**Analisando importação**

Após importação do arquivo OFX será exibido a tela abaixo com os dados importados.

Ao lado esquerdo da tela  o sistema irá exibir **Extrato bancário** e qual o período do arquivo.

Ao lado direto da tela o sistema irá exibir **Contas á pagar e recebe**r com o período do extrato importado realizando buscas com base no período para conciliação.

![image.png](./assets/image-24.png)

Ao centro da tela tem a opção “conciliados” onde sistema irá retornar/filtrar os itens já conciliados.

![image.png](./assets/image-25.png)

Ao desabilitar a opção “Conciliados” o sistema irá retornar os lançamentos sem conciliação.

![image.png](./assets/image-26.png)

No ícone abaixo é possível verificar os detalhes do titulo, ou seja, é um atalhado para a verificação das informações do título:

![image.png](./assets/image-27.png)

## Conciliar

Para realizar a conciliação, ao lado direito da tela busque pelos título não localizado pelo sistema. Nos lançamentos não conciliados a frente terá a descrição “Conciliar”.  

![image.png](./assets/image-28.png)

Para a conciliação procure pelo título e caso o lançamento do título não exista, é possível realizar o lançamento clicando no ícone conforme abaixo para o devidos lançamentos de conciliação ou indicar um outro título:

![image.png](./assets/image-29.png)

Ao selecionar o Ícone  “+” será aberto tela abaixo para os lançamentos rápidos.

![image.png](./assets/image-30.png)

1. **Pessoa:** Indique a Pessoa.
2. **Forma de pagamento:** Indique a forma de pagamento.

> 💡
>
> O cadastro da F**orma de Pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-forma-pagamento')">**AQUI**</a> para acessá-lo.

1. **Categoria:** Indique a categoria.
2. **Valor:** Indique o valor a ser conciliado.
3. **Empresa:** indique a empresa.
4. **Operação:** Indique operação.
5. **Observação:** Campo de edição aberta para observações. 
6. **Salvar**. Clique em salvar para gravar o novo lançamento.

> 📌
>
> **Importante!**
>
> Um ponto importante a se destacar no momento da conciliação é que podem haver dois ou mais títulos para um crédito bancário, ou seja, para uma única saída bancária foi efetuado pagamento de dois ou mais títulos e o sistema permite estes lançamentos. Exemplo abaixo:
>
> ![chrome_YZ25EmAYzo.gif](./assets/chrome_YZ25EmAYzo.gif)

Ao  concluir analise de conciliação clique em “**CONCILIAR**” e subsequente a isto o sistema irá exibir a seguinte mensagem: “ Tem certeza que deseja realizar a conciliação bancária?”. Clique em “Sim” para concluir ou “Cancelar” para retornar:

![image.png](./assets/image-31.png)
