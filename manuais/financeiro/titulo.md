---
id: "financeiro-titulo"
title: "Título"
type: "manual"
keywords: ["titulo", "contas a pagar", "contas a receber", "nova receita", "nova despesa", "transferencia entre contas"]
module: "financeiro"
order: 20
nav_label: "Título"
last_updated: "2026-08-05"
---

Utilize o menu **Títulos** para cadastrar e gerenciar lançamentos financeiros, sejam documentos de receitas ou de despesas.

Para buscar lançamentos de títulos no financeiro com uma busca mais refinada utilize a opção “Filtro”, a qual por padrão ficará inibida sempre que a tela for aberta, porém, pode ser acessada conforme demonstração abaixo:

## Filtros

Clique sobre a descrição “Filtro” para exibir os campos de buscas.

![Menu Titulo_FILTROS.gif](./assets/Menu_Titulo_FILTROS.gif)

- Detalhamento dos filtros:
    
    ![Tela filtros menu financeiro.png](./assets/Tela_filtros_menu_financeiro.png)
    
    1. **Cliente**: Indique nome do cliente.
    2. **Tipo:** Indique o tipo (Receita, Despesa, Outros).
    3. **Situação:** Indique a situação (Aberto, Baixado, Cancelado).
    4. **Categoria:** Indique a categoria desejada, exemplo Aluguel, etc.
    5. **Forma de Pagamento:** Indique forma de pagamento (A PRAZO, A VISTA, PIX, ETC.).
    
    > 💡
>
>     O cadastro da **forma de pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-forma-pagamento')">**AQUI**</a> para acessá-lo.
    
    1. **Empresa:** Indique a empresa.
    2. **Data Vencimento:** Indique a data de vencimento.
    3. **Data Pagamento: I**ndique a data de pagamento.
    4. **Operação:** Indique operação.
    5. **Consultar:** Selecione consultar para o sistema exibir o resultado dos filtros indicados. Exemplo abaixo da tela de resultado de pesquisa.
    
    ![image.png](./assets/image.png)
    
## **Títulos:**

Na tela inicial temos os botões, **Criar Nova Receita ,Criar Nova despesa, Transferência entre contas, Exportar Excel**, onde, abaixo será demostrado como deve ser utilizado cada botão.

![image.png](./assets/image-1.png)

![7ftvUWr.gif](./assets/7ftvUWr.gif)

## Criando Nova Receita

No ícone  criar a nova receita, deve ser utilizado na inclusão de  um novo titulo, ou seja, as receitas da empresa. Ao clicar sobre ele será exibido a tela abaixo para os devidos lançamentos.

![ylhCA2kEv7.png](./assets/ylhCA2kEv7.png)

![image.png](./assets/image-2.png)

 1.  **Situação:** Indique a situação. (Ex. Aberto, Baixado, Cancelado) `(campo obrigatório).`

1. **Empresa**: Indique empresa `(campo obrigatório).`
2. **Operação:**  Número gerado automático.
3. **Descrição:** Descreve descrição desejada `(campo obrigatório).`

1. **Pessoa:** Indique a pessoa/fornecedor responsável pela pagamento ou recebimento `(campo obrigatório).`
2. **Valor total:** Insira o valor total do titulo a ser creditado. `(campo obrigatório).`
3. **Parcela (s):**  Quando pagamento for parcelado Insira o numero de parcelas.
4. **Valor da parcela (s):** Neste campo o sistema irá gera automático o valor da parcela realizando a divisão entre o valor total e o numero de parcelas.
5. **Pagamento:**  Indique a forma de pagamento `(campo obrigatório).`

> 💡
>
> O cadastro de **Pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-forma-pagamento')">**AQUI**</a> para acessá-lo.

1. **Frequência:** Indique frequência de pagamento(Personalizado, Mensal, Bimestral, Trimestral, Semestral).
2. **Dias:**  Este ****Campo gera numero automático pelo sistema quando selecionado as opção (Mensal, Bimestral, Trimestral, Semestral).

> 💡
>
> Quando a condição de pagamento indicada for Personalizado, indique o número de dias para que seja as recorrências dos títulos.
>
> ![Personalizado.gif](./assets/Personalizado.gif)

1. **1° Parcela:** Insira a data da primeira parcela, ou seja, data de vencimento do título `(campo obrigatório).`
2. **NF/Doc:**  Indique o número de nota fiscal ou documento para controle de conciliação.
3. **Categoria:** Indique a categoria `(campo obrigatório).`
4. **Conta:** Indique uma conta que será creditado o valor do titulo. 

> 💡
>
> O cadastro da **Conta** é feito através do sistema, de forma personalizável. Caminho: Financeiro > Cadastros > Conta. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-conta')">**AQUI**</a> para acessá-lo.

1. **Observações:** Campo para observações.
2. **Salvar.** Ao clicar em salvar o sistema lhe exibira uma mensagem,” Tem certeza que deseja gerar o(s) título(s)”. Clique em “Sim” para Salvar ou “Cancelar” para retornar.

    ![image.png](./assets/image-3.png)

    > 💡
>
>     Campos marcados com asterisco vermelho (*) são obrigatórios.

## Criando Nova despesa

No ícone  criar a nova despesa, deve ser utilizado na inclusão de de uma nova despesa, ou seja, as saídas da empresa. Ao clicar sobre ele será exibido a tela abaixo para os devidos lançamentos.

![zIIOHFgOyB.png](./assets/zIIOHFgOyB.png)

![image.png](./assets/image-4.png)

1. **Situação:** Indique a situação.(Ex. Aberto, Baixado, Cancelado) `(campo obrigatório).`
2. **Empresa**: Indique empresa `(campo obrigatório).`
3. **Operação:**  Numero gerado automático.
4. **Descrição:** Descreve descrição desejada `(campo obrigatório).`
5. **Pessoa:** Indique a pessoa/fornecedor responsável pela pagamento ou recebimento `(campo obrigatório).`
6. **Valor total:** Insira o valor total do titulo a ser Debitado. `(campo obrigatório).`
7. **Parcela (s):**  Quando pagamento for parcelado Insira o numero de parcelas.
8. **Valor da parcela (s):** Neste campo o sistema irá gera automático o valor da parcela realizando a divisão entre o valor total e o numero de parcelas.
9. **Pagamento:**  Indique a forma de pagamento `(campo obrigatório).`

> 💡
>
> O cadastro de **Pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-forma-pagamento')">**AQUI**</a> para acessá-lo.

1. **Frequência:** Indique frequência de pagamento(Personalizado, Mensal, Bimestral, Trimestral, Semestral).
2. **Dias:**  Este ****Campo gera numero automático pelo sistema quando selecionado as opção (Mensal, Bimestral, Trimestral, Semestral).

> 💡
>
> Quando a condição de pagamento indicada for Personalizado, indique o número de dias para que seja as recorrências dos títulos.
>
> ![Personalizado.gif](./assets/Personalizado.gif)

1. **1° Parcela:** Insira a data da primeira parcela, ou seja, data de vencimento do título `(campo obrigatório).`
2. **NF/Doc:**  Indique o numero de nota fiscal ou documento para controle de conciliação.
3. **Categoria:** Indique a categoria `(campo obrigatório).`
4. **Conta:** Indique uma conta que será debitado o valor do titulo. 

> 💡
>
> O cadastro da **Conta** é feito através do sistema, de forma personalizável. Caminho: Financeiro > Cadastros > Conta. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-conta')">**AQUI**</a> para acessá-lo.

1. **Observações:** Campo para observações.
2. **Salvar.** Ao clicar em salvar o sistema lhe exibira uma mensagem,” Tem certeza que deseja gerar o(s) título(s)”. Clique em “Sim” para Salvar ou “Cancelar” para retornar.

![image.png](./assets/image-5.png)

> 💡
>
> Campos marcados com asterisco vermelho (*) são obrigatórios.

## Transferência entre Contas

****Neste ícone  transferência , deve ser utilizado na transferência entre contas. Ao clicar sobre ele será exibida a tela abaixo:
****

![msAY55L5DR.png](./assets/msAY55L5DR.png)

![Transferencia entre contas.png](./assets/Transferencia_entre_contas.png)

> 💡
>
> Campos marcados com asterisco vermelho (*) são obrigatórios.

1. **Data de transferência:** Insira data de transferência
2. **Forma de pagamento:** Indique a forma de pagamento `(campo obrigatório).`

> 💡
>
> O cadastro da **forma de pagamento** é feito através do sistema, de forma personalizável. Através do caminho: Financeiro > Cadastros > Forma Pagamento. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-forma-pagamento')">**AQUI**</a> para acessá-lo.

1. **Valor:** Insira valor `(campo obrigatório).`
2. **Categoria:** Indique a categoria. 
3. **Conta Origem.** Indique conta origem `(campo obrigatório).`
4. **Conta destino:** Indique conta destino `(campo obrigatório).`

> 💡
>
> O cadastro da **Conta** é feito através do sistema, de forma personalizável. Caminho: Financeiro > Cadastros > Conta. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-conta')">**AQUI**</a> para acessá-lo.

1. **Salvar.** Ao clicar em salvar o sistema lhe exibira uma mensagem,” Tem certeza que deseja transferir o valor entre as constas?”. Clique em “Sim” para Salvar ou “Cancelar” para retornar.

![image.png](./assets/image-6.png)

## Ícone Exportar Excel

![zmJ1O1fbGC.png](./assets/zmJ1O1fbGC.png)

1. Ao selecionar esta opção irão exportar o resultado exibido na tela em uma planilha de Excel. 

## **Baixando os Títulos:**

Na tela inicial, bloco Financeiro Títulos, podemos realizar as ações nos lançados conforme os  ícones que aparecem na linha título, coluna Ações, sendo,  Cancela, Baixar, Detalhes do Título, Movimentos do Título.

![image.png](./assets/image-7.png)

![iazsbcI1KH.gif](./assets/iazsbcI1KH.gif)

**Funções dos Ícones da coluna Ações.**

![image.png](./assets/image-8.png)

## 1 - Botão Cancelar

![image.png](./assets/image-9.png)

O sistema irá executar o cancelamento do título. Ao clicar nele o sistema irá exibir uma mensagem, “Tem certeza que deseja cancelar o(s) título(s) abaixo? clique em “Sim!” para concluir ou “Cancelar”  para retornar.

![image.png](./assets/image-10.png)

## 2 - Botão Baixar

![image.png](./assets/image-11.png)

Ao clicar sobre o botão baixar será exibido a tela abaixo para os devidos lançamos de baixa do título.

![7SIBFBNpE2.png](./assets/7SIBFBNpE2.png)

1. **Data Pagamento:** Insira a data de pagamento do título.
2. **Valor de parcela:** Confira o valor da Parcela.
3. **Valor Pago:** Insira o valor pago.
4. **Conta Pagamento**: Indique a conta de pagamento. 

> 💡
>
> O cadastro da **Conta** é feito através do sistema, de forma personalizável. Caminho: Financeiro > Cadastros > Conta. Clique <a href="#" onclick="carregarManual('financeiro/cadastros-conta')">**AQUI**</a> para acessá-lo.

1. **Salvar**: Ao clicar em salvar o sistema irá registar a baixa do título.

> 📌
>
> **Observação**. Ao salvar a baixa do título na tela principal irá exibir um novo ícone denominado “Reabrir”, ou seja, este ícone possibilitara abertura do título

![image.png](./assets/image-12.png)

![image.png](./assets/image-13.png)

Ao clicar sobre este ícone o sistema irá exibir a seguinte mensagem, “Tem certeza que deseja reabrir o(s) título(s) abaixo? 
Clique em “Sim!” para concluir a reaberta e “Cancelar” para desistir da reabertura.

![image.png](./assets/image-14.png)

## 3 - Botão Detalhes do Título

![image.png](./assets/image-15.png)

Ao clicar sobre o ícone irá exibir uma tela com todos os detalhes do título.

![image.png](./assets/image-16.png)

1. **Observação:** Neste campo é possível acrescentar uma observação ou editá-la.
2. **Atualizar Observação:** Clique para gravas a edição realizada no campo observação, logo em seguida o sistema irá atualizar exibir a mensagem abaixo.

![image.png](./assets/image-17.png)

## 4 - Botão Movimentos dos Títulos

![image.png](./assets/image-18.png)

Ao clicar sobre o ícone o sistema ira exibir a tela abaixo com todos os detalhes de movimentação do título. Aqui será possível visualizar todos os registros relacionados ao título.

![image.png](./assets/image-19.png)

> 💡
>
> **Veja este facilitador do sistema Repasys’s**
>
> Sistema permite a realização de ações em massa, ou seja,  Gerar ações em lote. O usuário pode estar selecionando mais de um titulo e em seguida selecionar uma das **Ações** desejada como baixar, cancelar  ou demais para que o sistema aplique em todos os títulos selecionados. veja exemplo a seguir:
> ****
>
> ![Edição em lote.gif](./assets/Edio_em_lote.gif)
