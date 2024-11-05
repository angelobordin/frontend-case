import { Item } from "./types";

export const TODO_LIST: Item[] = [
  {
    id: "5ce31291-d06b-4940-9d14-0f41d116fe76",
    ref: "1",
    title: "Visualizar to-do list corretamente",
    description: (
      <>
        1. Criar rota e conseguir visualizar o to-do list.
        <br />
        2. Visualizar todas as tasks corretamente.
        <br />
        <br />
        <strong>Info:</strong> Ta conseguindo ver o to-do list com a quantidade
        correta de tasks? Parabéns, você finalizou a sua primeira task &#127881;
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "bcd69907-601f-461b-a8c4-4c3fc3b827e9",
    ref: "1",
    title: "Resolver to-do bugs",
    description: (
      <>
        Nos ajude com o nosso produto de to-do list e resolva os bugs abaixo:
        <br />
        <br />
        1. A troca de status, de <strong>pending</strong> para{" "}
        <strong>done</strong> e vice-versa, não esta funcionando corretamenta.
        <br />
        2. A busca não esta funcionando corretamente.
        <br />
        3. O <strong>delete</strong> não ta removendo o item.
        <br />
        4. A nossa lista ta começando com o número <strong>0</strong>, mas
        precisamos que ela comece com o número <strong>1</strong>.
        <br />
        5. Alguns links não estão funcionando.
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "ea82af08-ffd1-41fe-9c30-b760ae7ee8c9",
    ref: "1",
    title: "Página de login - CSS",
    description: (
      <>
        A página de Login já esta estruturada corretamente, mas parece que tem
        alguma coisa errada com o CSS dessa página :/
      </>
    ),
    status: "pending",
    required: true,
    links: [
      {
        name: "figma",
        url: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=3-2773&mode=dev",
      },
    ],
  },
  {
    id: "ea82af08-ffd1-41fe-9c60-b760ae7ee8ce",
    ref: "1",
    title: "Página de login - Integração",
    description: (
      <>
        1. Faça a integração com o endpoint de autenticação.
        <br />
        <br />O contrato esta no <strong>README.md</strong> do projeto.
        <br />
        <br />
        <strong>Info:</strong> Sinta-se livre para fazer melhorias :)
      </>
    ),
    status: "pending",
    required: true,
    links: [
      {
        name: "endpoint de autenticação",
        url: "http://localhost:3000/auth",
      },
    ],
  },
  {
    id: "9c3fd0b8-2cc2-433b-b80c-e12ee4c0524e",
    ref: "1",
    title: "Página de lista de transações",
    description: (
      <>
        1. Crie a página de lista de transações de acordo com o link do figma
        (não esqueça que essa é uma página de área logada).
        <br />
        2. Faça a integração com o endpoint de lista.
        <br />
        <br />O contrato esta no <strong>README.md</strong> do projeto.
      </>
    ),
    status: "pending",
    required: true,
    links: [
      {
        name: "figma",
        url: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=5-3378&mode=dev",
      },
      {
        name: "endpoint de lista",
        url: "http://localhost:3000/list",
      },
    ],
  },
  {
    id: "16b96d37-ceb9-4e3f-af96-fc229814d102",
    ref: "1",
    title: "Filtro por tipo de transação",
    description: (
      <>
        Adicione a possibilidade de filtrar a tela de transações por tipo de
        transação (tela feita na task anterior).
        <br />
        <br />
        <strong>Note:</strong> Utilize os <u>buttons</u> que aparecem no topo da
        tela de lista de transações para fazer o filtro.
        <br />
        <br />
        <strong>Important:</strong> O tipo da transação é a chave{" "}
        <strong>entry</strong>, com valor <strong>DEBIT</strong> ou{" "}
        <strong>CREDIT</strong>, dentro do response retornado pela api.
      </>
    ),
    status: "pending",
    required: true,
    links: [
      {
        name: "figma",
        url: "https://www.figma.com/file/TXxt0VFxbzDoho4tmt9XPP/Teste_FrontWeb?type=design&node-id=5-3396&mode=dev",
      },
    ],
  },
  {
    id: "be4f2532-aca4-46c8-84b8-c9fe41d7fb7f",
    ref: "1",
    title: "Extra",
    description: (
      <>
        Agora é o seu momento de brilhar. Teste a usabilidade e avalie o código,
        na <strong>To-do</strong> list e página de <strong>Login</strong>, para
        encontrar bugs, falhas de comportamento e possíveis melhorias
        (performance, código, boas práticas).
        <br />
        <br />
        <strong>Se faça a seguinte pergunta</strong>: Se esse produto fosse meu,
        quais melhorias eu faria no código e no produto?
        <br />
        <br />
        <strong>Note:</strong> Essa task não é obrigatória. Ela pode fazer a
        diferença na avaliação geral e/ou na hora de decidirmos o melhor perfil
        para a vaga.
        <br />
        <br />
        <strong>Important:</strong> Encontrou algo? Crie novas tasks nessa lista
        de to-dos, para conseguirmos te avaliar de uma forma mais assertiva.
        ObrigadaUm &#128640;
      </>
    ),
    status: "pending",
    required: false,
  },
  {
    id: "c9f4b23d-6d0a-4f8f-9336-d94d0b183f63",
    ref: "1",
    title: "Roteamento das Páginas",
    description: (
      <>Implementar ReactRouterDom, Router e Routes para rotear o sistema</>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "ef6a9e39-75b3-4b8b-a5bb-dc3b7d8c6f52",
    ref: "1",
    title: "Ajustes UseEffect na Tela Todo-List",
    description: (
      <>
        Corrigir useEffect que preenche todo list baseado no filtro de pesquisa
        (Está concatenando as duas listas desnecessariamente)
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "0d5a7f6a-85a9-4f15-982b-6cbb4e5837bc",
    ref: "1",
    title: "Ajuste ao atualizar status das Tasks",
    description: (
      <>
        Corrigir alteração do status, está com a lógica invertida e permanecendo
        o mesmo status.
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "2f3b38cf-e8a2-4bfa-8f8b-0244d65e62e5",
    ref: "1",
    title: "Ajuste de tipo na TODO_LIST",
    description: (
      <>
        Implementar interface no array TODO_LIST, corrigir ID duplicado de
        registro e corrigir nome e tipagem de propriedades inválidas
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "673f9387-7b1a-4f84-b178-18456f6d17b6",
    ref: "1",
    title: "Servidor Backend não está subindo",
    description: (
      <>
        Ajustar rotina "npm run dev" para executar o servidor juntamente com o
        frontend, instalar o concurrently para executar 2 rotinas ao mesmo tempo
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "4734ad5d-2f26-40a7-9001-7e5b71c6718e",
    ref: "1",
    title: "Estilização Global",
    description: (
      <>
        Estilos de botôes do main page esta sobreescrenvdo dos demais do sistema
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "9f93b31c-b8b5-4e89-8e7d-e6b8b9651fa3",
    ref: "1",
    title: "Implementação Token JWT",
    description: (
      <>
        Implementar JWT decode e mostrar nome do usuário na tela de transactions
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "bce7e3ad-d038-4f6f-85af-7df1d21dfce8",
    ref: "1",
    title: "Componentização de partes do sistema",
    description: (
      <>
        Componentizar partes do sistema com possbilidade de reutilização em
        outros locais, e para simplificar leitura e manutenção do código
        futuramente.
      </>
    ),
    status: "pending",
    required: true,
  },
  {
    id: "e5bca7b9-bc94-48c9-b5d3-132ec9796a32",
    ref: "1",
    title: "Exbir mensagens de ações realizadas pelo usuário",
    description: <>Implementar React-Toastify no projeto</>,
    status: "pending",
    required: true,
  },
];
