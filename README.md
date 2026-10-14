# Góes Notícias: Studio

Painel de publicação do **Góes Notícias**, o site de notícias do Colégio Estadual Góes Calmon. É aqui que professores escrevem, editam e publicam as notícias que aparecem no site.

🔗 **Painel no ar:** [PREENCHER: endereço do Studio, termina em .sanity.studio]
🔗 **Código do site:** [github.com/MM-Damasceno/goesnoticias_site](https://github.com/MM-Damasceno/goesnoticias_site)

## Tecnologias

| O quê | Pra quê |
| --- | --- |
| [Sanity Studio](https://www.sanity.io/studio) | Painel de edição de conteúdo |
| [Sanity](https://www.sanity.io) | Banco de conteúdo e hospedagem do painel |
| [TypeScript](https://www.typescriptlang.org) | Tipagem do código |
| [React](https://react.dev) | Base do Studio |
| Node.js, npm, Git e GitHub | Ambiente de desenvolvimento e versionamento |

## Modelo de notícia

O tipo `noticia` está definido em `schemaTypes/noticia.ts`:

| Campo | Descrição |
| --- | --- |
| Título | Obrigatório |
| Endereço (slug) | Gerado a partir do título com o botão **Generate**. Obrigatório |
| Resumo | Aparece na home. Obrigatório, até 200 caracteres |
| Data de publicação | Já vem com a data de hoje |
| Categoria | `noticia`, `evento`, `informativo` ou `projeto` |
| Imagem de capa | Opcional, com campo de descrição da imagem |
| Texto | Editor de texto com formatação |

As chaves de categoria precisam ser as mesmas usadas em `src/consts.ts`, no repositório do site.

## Rodando localmente

Pré-requisito: **Node.js 20 ou superior** (LTS).

```bash
git clone [PREENCHER: endereço deste repositório]
cd [PREENCHER: nome da pasta]
npm install
npm run dev
```

O Studio abre em `http://localhost:3333`. O `projectId` e o `dataset` ficam em `sanity.config.ts`.

## Publicando o painel

```bash
npx sanity deploy
```

O comando envia o Studio pro endereço `.sanity.studio` do projeto.

## Como o site é atualizado

1. Alguém clica em **Publish** no Studio.
2. Um **webhook** do Sanity chama um **Deploy Hook** da Vercel. Ele fica configurado em sanity.io/manage, em **API → Webhooks**, com o filtro `_type == "noticia"`.
3. A Vercel reconstrói o site, e a mudança vai ao ar em cerca de 1 a 2 minutos.

## Quem pode acessar

Só quem foi convidado pro projeto. Pra dar acesso a alguém, vá em sanity.io/manage, abra o projeto e use **Members → Invite members**.