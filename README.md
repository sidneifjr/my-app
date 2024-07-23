# Teste da Usabit

## Execução

-> Construa um simples CRUD de clientes com os requisitos imprescindíveis da vaga.

## Requisitos:

- [ ] O projeto deve utilizar o MSW para emular o back-end.
- [ ] Adicionar testes de integração com Jest + Testing Library.
- [x] O projeto deve ser publicado no GitHub em um repositório público.
- [x] Os commits devem seguir a especificação Conventional Commits, com commits pequenos e mensagens significativas.

- [x] TypeScript
- [x] React Hooks
- [ ] React Testing Library
- [x] React Hook Form

### Diferencial:

- [ ] Storybook
- [ ] React Query
- [x] Zod
- [ ] MSW
- [x] pnpm

O prazo de entrega é de uma semana.

### Desenvolvimento.

1. `pnpm i`, para instalar as dependências.

2. `pnpm dev`, para iniciar o servidor de desenvolvimento.

### Produção.

`pnpm build`.

### Prévia.

`pnpm build`, então `pnpm start`.

### Testes.

`pnpm test`.

## Stack

- React
- Next.js
- TypeScript
- ESLint/Prettier
- TailwindCSS
- shadcn
- Vitest
- Cypress
- pnpm

## Sobre o projeto

Foi uma experiência enriquecedora e repleto de desafios, expondo oportunidades para experimentar com diferentes features do React e Next.js para solucionar vários problemas.

Next.js 14</b> foi usado, devido às suas melhorias de performance, otimizações e melhor experiência de desenvolvimento.

<b>TailwindCSS</b> e <b>shadcn</b> foram escolhidos para acelerar o desenvolvimento, garantindo consistência e facilitando a criação de interfaces com alta qualidade.

<b>shadcn</b>, em particular, fornece uma estilização padrão fácil de extender e alto nível de controle sobre seus componentes. Sua integração com a Radix UI fornece várias soluções em relação à acessibilidade, influenciando positivamente várias métricas chave.

<b>React Hook Form</b> é fácil de usar e fornece muitas otimizações importantes ao lidar com uma quantidade maior de campos.

<b>Zod</b> fornece validação de schemas, útil na validação de formulário ou variáveis de ambiente. O mesmo também executa durante o runtime, permitindo um type checking mais forte que o TypeScript em certos cenários.

<b>Vitest</b> possui uma API muita semelhante ao Jest, ao mesmo tempo em que fornece um ganho significativo de performance. Uma integração com a <b>Testing Library</b> permite acesso à uma camada mais profunda de testes, enquanto <b>user-event</b> permite simular o disparo de eventos no lado cliente.

<b>pnpm</b> é um gerenciador de pacotes rápido e estável. Também é eficiente, reutilizando os pacotes já presentes em sua máquina, a qual é uma vantagem considerável sobre o <b>Bun</b>, dependendo do cenário.

Patterns como <b>SOLID</b>, <b>Composition</b> e <b>Custom Hooks</b> foram ferramentas indispensáveis na construção do projeto, facilitando a separação de responsabilidades, reutilização de código e manutenção de cada componente.

Os componentes foram abstraídos de forma a permitir uma maior separação entre as camadas de lógica e visual, semelhante à pattern de <b>Dumb e Smart Components</b>, porém um cuidado maior foi empregado para evitar excesso de abstrações, a qual poderia potencialmente poderia dificultar a navegação pelo projeto.

## Estrutura de pastas

```
└── 📁teste-usabit
    └── .env
    └── .env.example
    └── .eslintrc.json
    └── .gitignore
    └── .prettierrc
    └── components.json
    └── 📁cypress
        └── 📁downloads
        └── 📁e2e
            └── 📁1-getting-started
                └── todo.cy.js
            └── 📁2-advanced-examples
                └── actions.cy.js
                └── aliasing.cy.js
                └── assertions.cy.js
                └── connectors.cy.js
                └── cookies.cy.js
                └── cypress_api.cy.js
                └── files.cy.js
                └── location.cy.js
                └── misc.cy.js
                └── navigation.cy.js
                └── network_requests.cy.js
                └── querying.cy.js
                └── spies_stubs_clocks.cy.js
                └── storage.cy.js
                └── traversal.cy.js
                └── utilities.cy.js
                └── viewport.cy.js
                └── waiting.cy.js
                └── window.cy.js
        └── 📁fixtures
            └── example.json
        └── 📁support
            └── commands.ts
            └── e2e.ts
    └── cypress.config.ts
    └── next-env.d.ts
    └── next.config.mjs
    └── package.json
    └── pnpm-lock.yaml
    └── postcss.config.mjs
    └── 📁public
        └── next.svg
        └── vercel.svg
    └── README.md
    └── 📁src
        └── 📁actions
        └── 📁api
            └── createItem.ts
            └── deleteItem.ts
            └── readItems.ts
            └── updateItem.ts
        └── 📁app
            └── 📁example-for-tests
                └── page.tsx
            └── favicon.ico
            └── globals.css
            └── layout.tsx
            └── loading.tsx
            └── page.tsx
        └── 📁assets
            └── loader.svg
        └── 📁components
            └── 📁dashboard
                └── dashboard-pagination.tsx
                └── index.tsx
            └── header.tsx
            └── loader.tsx
            └── 📁modal
                └── modal-form-input-field.tsx
                └── modal-form.tsx
            └── 📁typography
                └── h1.tsx
                └── h2.tsx
                └── h3.tsx
                └── h4.tsx
                └── paragraph.tsx
            └── 📁ui
                └── button.tsx
                └── card.tsx
                └── dialog.tsx
                └── input.tsx
                └── label.tsx
                └── pagination.tsx
                └── sonner.tsx
        └── 📁data
            └── db.json
        └── env.ts
        └── 📁hooks
            └── useCrud.tsx
            └── useModal.tsx
            └── usePagination.tsx
        └── 📁lib
            └── utils.ts
        └── 📁services
            └── api.tsx
        └── 📁tests
            └── page.test.tsx
        └── 📁types
            └── user.ts
        └── 📁utils
            └── formatCurrency.ts
    └── tailwind.config.ts
    └── tsconfig.json
    └── vitest.config.ts
```

Boilerplate gerado via [Progenitor](https://github.com/sidneifjr/Progenitor).
