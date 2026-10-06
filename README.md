# Amiga Beauty — Blog

Blog em Next.js (App Router) + TypeScript + Tailwind CSS, com posts em Markdown.
Layout inspirado em [manualdohomemmoderno.com.br](https://manualdohomemmoderno.com.br/):
destaque + lista no topo, barra de redes sociais, e seções por categoria com
card grande + grid.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura

- `content/posts/*.md` — cada post é um arquivo Markdown com frontmatter
  (`title`, `excerpt`, `category`, `author`, `date`, `coverImage`, `featured`).
  Para publicar um post novo, basta criar um `.md` aqui.
- `src/lib/categories.ts` — lista de categorias do menu (nome, slug, cor do
  badge). **Troque pelos nomes definitivos quando decidir a linha editorial.**
- `src/components/` — Header, Footer, cards, seção de categoria, hero de
  destaque, barra de redes sociais.
- `src/app/page.tsx` — home.
- `src/app/categoria/[slug]/page.tsx` — página de listagem por categoria.
- `src/app/blog/[slug]/page.tsx` — página do post.

## Paleta de cores

Definida em `src/app/globals.css` (`--primary` rosa, `--gold` dourado,
`--nude`/`--nude-soft` para fundos). Cada categoria tem sua própria cor de
badge em `src/lib/categories.ts`.

## Pendências / próximos passos

- Trocar as imagens de capa (atualmente placeholders do Unsplash) por fotos
  próprias.
- Definir a lista final de categorias.
- Conectar a loja de achadinhos (hoje em `ofertas.amigabeauty.com.br/teste`,
  rodando na plataforma AfiliadosPro) com domínio definitivo.
- Configurar deploy no VPS (build com `npm run build` + `npm run start`, ou
  exportar como site estático se preferir servir via Nginx puro).
