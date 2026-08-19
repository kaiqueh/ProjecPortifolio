# Portfólio

Portfólio profissional em quatro páginas — Home, Sobre mim, Projetos e Contato — com
detalhamento técnico de cada projeto, versão em português e inglês e formulário de contato.

O visual segue uma linguagem editorial dark: tipografia de grande escala, halos de luz
difusos, vidro aplicado de forma pontual e um grid modular que varia o tamanho dos cards.

## Stack

- **Vite** + **React** + **TypeScript**
- **Styled Components** para estilos com escopo local e tema tipado
- **React Router** para as rotas e o link direto de cada projeto
- **react-i18next** para o conteúdo em português e inglês
- **EmailJS** para o envio do formulário sem backend próprio

## Rodando o projeto

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # verificação de tipos + build de produção
npm run preview  # serve o build localmente
npm run lint     # oxlint
```

## Variáveis de ambiente

O formulário de contato usa o EmailJS. Copie o `.env.example` para `.env` e preencha:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Sem essas variáveis o site continua funcionando: o formulário valida os campos e avisa que o
envio está indisponível, indicando o e-mail profissional como alternativa.

O template do EmailJS recebe os campos `from_name`, `reply_to`, `subject` e `message`.

## Atualizando o conteúdo

Todo o conteúdo do site vive em **`src/data/portfolio-data.ts`**. Para adicionar uma
experiência, uma competência ou um projeto, basta editar esse arquivo — nenhum componente ou
estilo precisa ser tocado.

Os textos são bilíngues e ficam lado a lado:

```ts
summary: {
  pt: 'Descrição da atuação profissional.',
  en: 'Description of the professional work.',
},
```

Cada projeto cadastrado vira um card na listagem e uma página em `/projetos/:slug`. O campo
`highlight` define o tamanho do card no grid: `large` (4 colunas), `wide` (3) ou `medium` (2).

Currículo em PDF e imagens dos projetos ficam em `public/`, referenciados por caminho no
arquivo de dados.

## Rotas

| Rota               | Página             |
| ------------------ | ------------------ |
| `/`                | Home               |
| `/sobre`           | Sobre mim          |
| `/projetos`        | Lista de projetos  |
| `/projetos/:slug`  | Detalhe do projeto |
| `/contato`         | Contato            |

## Arquitetura

A descrição completa da arquitetura, dos padrões adotados e da estrutura de diretórios está
no arquivo `ARCHITECTURE.md`.
