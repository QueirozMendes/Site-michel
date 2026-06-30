# Michel Bueno — Wellness Design

A luxury, editorial marketing website positioning Michel Bueno as a wellness, longevity and performance specialist who designs fitness spaces and experiences for premium real estate, hotels, brands and private clients. React + Vite artifact at `artifacts/wellness-site` (slug `wellness-site`, served at `/`).

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

Single-language (pt-BR) marketing site, 7 pages routed with Wouter:
- `/` Home — hero value prop, positioning/authority, áreas de atuação, featured projects, partner wordmarks, mídia (Jetsetter), contact CTA
- `/sobre` Sobre Michel — institutional bio + credentials
- `/projetos` Projetos — Six Wellness Itaim/Vila Nova/Campinas + Rosewood
- `/wellness-spaces` Wellness Spaces — projetista de espaços (6 service blocks + para quem é)
- `/parcerias` Parcerias — Technogym, Tryex, Mitre, Mentore Bank (typographic wordmarks)
- `/midia` Mídia — Jetsetter News highlight + content grid
- `/contato` Contato — form (Nome, E-mail, Telefone, Empresa, Tipo de interesse, Mensagem) with client-side validation + SweetAlert2 feedback; POSTs to `/api/contact` which emails contato@michelbuenogroup.com.br via SendGrid (replyTo = visitor)

Design language: dark near-black bg `#0f0e0c`, large serif display, neutral gray accent `#A0A0A0`, FadeIn scroll animations.

## User preferences

- **Accent color: neutral gray `#A0A0A0` only.** User explicitly rejected gold/beige (e.g. `#c9a96e`). Do NOT reintroduce gold even though the original designer brief suggests "dourado queimado".
- This is a content agency building for a client; do not copy any reference site exactly.

## Gotchas

- **Contact form needs the backend.** `/contato` POSTs to `/api/contact` (api-server). On the Replit autoscale deploy this is routed by the proxy and works. **The Cloudflare static deploy has NO backend, so the form will fail there** — only deploy the contact feature where `/api/contact` is served.
- **SendGrid sending depends on a valid connected account.** The send uses the Replit SendGrid connection's `api_key` + verified `from_email`. If the connected account's key is invalid/expired, sending fails with a graceful 500 (`success:false`) and the real cause is in the api-server logs. The connection currently holds an invalid key — sending is blocked until a valid SendGrid account is connected.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
