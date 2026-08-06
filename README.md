# HGC Portfolio

Portfólio profissional de Hilson Gabriel Carvalho, desenvolvido para apresentar projetos, experiência e serviços de tecnologia com foco em problemas reais de empresas.

**Produção:** https://hgc-portfolio.vercel.app

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS responsivo com design tokens
- Vercel Functions para validação do fluxo de contato
- Manrope Variable, servida localmente

## Executar localmente

```bash
npm install
npm run dev
```

O servidor local será informado pelo Vite no terminal. A função `api/contact.ts` é executada no ambiente da Vercel; no Vite local, o formulário utiliza o fallback seguro para WhatsApp.

## Scripts

- `npm run dev` — desenvolvimento local
- `npm run build` — checagem TypeScript e build de produção
- `npm run lint` — análise estática
- `npm run preview` — prévia local do build

## Estrutura

```text
api/                 função serverless de contato
public/brand/        ativos da identidade HGC
public/documents/    versão PDF do portfólio
src/components/      seções e componentes de interface
src/data/            conteúdo editável do portfólio
src/App.css          design system e composição responsiva
```

## Conteúdo

Projetos, serviços, experiência, tecnologias e contatos estão centralizados em `src/data/portfolio.ts`, facilitando futuras atualizações sem reestruturar a interface.

## Deploy

O projeto está preparado para deploy na Vercel. O arquivo `vercel.json` configura SPA, cache de ativos e cabeçalhos de segurança. Após conectar o repositório, a Vercel utiliza `npm run build` e publica a pasta `dist`.
