---
id: "operacao-cadastros-tipo-pendencia"
title: "Cadastros: Tipo de Pendência"
type: "manual"
keywords: ["tipo de pendencia", "status de bloqueio"]
module: "operacao"
parent: "operacao-cadastros"
order: 10
nav_label: "Tipo de Pendência"
last_updated: "2026-08-05"
---

Este recurso permite cadastrar as possíveis variedades de pendências que poderão ser utilizadas ao incluir uma pendência no recurso de Operação. Por exemplo: recibos, comprovantes, documentos (garantia, impostos), etc.

 O cadastro do tipo de pendência pode ser acessado também pelo caminho: Operação > Cadastros > Tipo de pendência:

![Untitled](./assets/operacao-Untitled-32.png)

**Criando um Tipo de Pendência:**

Utilize o botão Criar para efetuar um novo cadastro de tipo de pendência:

![criar.png](./assets/criar.png)

![Untitled](./assets/operacao-Untitled-33.png)

- **Nome:** Insira o nome do tipo da pendência (comprovante, recibo, documento, etc), `(campo obrigatório).`
- **Ativo:** Indique se este tipo está ativo ou inativo, por padrão, já virá checado como Ativo `(campo obrigatório).`
- **Obrigatório:** indique se este tipo será obrigatório ou não, por padrão, já virá checada como obrigatório `(campo obrigatório).`
- **Status de bloqueio:** indique se este tipo terá algum status de bloqueio, ou seja, ao criar uma pendência deste tipo e a mesma não for resolvida, o sistema bloqueará a continuidade da Operação. Veja o detalhamento dos Status a seguir:

> 💡
>
> **Status:**
>
> Conforme visto acima, ao utilizar um status de bloqueio o sistema não permitirá prosseguir com os recursos da operação caso a pendência ainda não tenha sido concluída. Para cada um dos status, uma ação da operação será bloqueada, segue abaixo o detalhamento:
>
> Por exemplo então, caso exista uma pendência para a operação xx e o tipo da pendência tenha o status de bloqueio “Aberto”, não será possível “Aprovar Compra” da operação enquanto a pendência não for resolvida.

| **Status:** | **Ação:** |
| --- | --- |
| Aberto | Aprovar Compra |
| Compra Aprovada | Aprovar Venda |
| Venda Aprovada | Entregar Veículo |
| Fechado | — |
| Cancelado | — |

Clique em **"Salvar e continuar"** para gravar o cadastro feito e permanecer na mesma página, caso deseje adicionar outro tipo de pendência:

![salvarEcontinuar.png](./assets/salvarEcontinuar.png)

Clique em “Salvar” para salvar o cadastro feito e finalizar o processo, o que o levará de volta à página inicial do cadastro de tipo de pendência:

![salvar.png](./assets/salvar.png)

Na tela inicial podemos buscar os tipos de pendências filtrando-os por Ativo ou Inativo, bem como pelo nome dos mesmos através da caixa Buscar. Clique em “Consultar” para obter o resultado da pesquisa:

![Untitled](./assets/operacao-Untitled-34.png)

Ainda na tela inicial, teremos mais duas opções: Editar e Inativar/Ativar um tipo de pendência.

**Botão Editar:**

![editarorigembotao.png](./assets/editarorigembotao.png)

Permitirá a edição de um tipo já cadastrado. Ao clicar na opção destacada abaixo, você será redirecionado para a mesma tela de cadastro, porém, com objetivo de editar o que foi selecionado podendo mudar o nome, obrigatoriedade, inativar/ativar ou status de bloqueio.

**Botão Inativar/Ativar:**

![ativar-inativar.png](./assets/ativar-inativar.png)

Permitirá ativar um tipo de pendência que esteja inativo, ou inativar um tipo de pendência que esteja ativo. O sistema exigirá uma confirmação antes de efetuar essa ação:

![Untitled](./assets/operacao-Untitled-35.png)
