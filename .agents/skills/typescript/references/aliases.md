# Path Aliases Reference

- [Policy](#policy)
- [Why Avoid Aliases](#why-avoid-aliases)
- [Exception: Frontend + shadcn/ui](#exception-frontend--shadcnui)
- [Frontend Setup](#frontend-setup)
- [Never Use baseUrl](#never-use-baseurl)

## Policy

- **Default: no path aliases.** Use relative imports (`./`, `../`) everywhere — backend, libraries, and frontend app code.
- **Single exception:** a frontend app that uses **shadcn/ui** may keep the `@/* → ./src/*` alias, because the shadcn CLI requires it and cannot emit relative imports.
- Even in that frontend, prefer relative imports for hand-written code. The alias exists only so shadcn-generated components resolve; do not adopt `@/` as the general import style.

## Why Avoid Aliases

Relative imports are simpler and tooling-agnostic. Aliases add cost without changing what the code does:

- **Not a runtime feature.** TypeScript does not rewrite import paths on emit — an alias must be re-declared in *every* tool that resolves modules: `tsc`, test runner, bundler, runtime adapter, and any others. Miss one and you get "cannot find module" at build/test/runtime.
- **Do not cross package boundaries.** An alias is per-`tsconfig`; in a workspace `@/foo` can mean a different `src` in each package. Use package imports (`workspace:*`) between packages, relative imports within one.
- **Break on publish.** A published library ships `@/` paths that external consumers cannot resolve, since TS never rewrites them. Libraries must use relative imports.
- **Marginal benefit.** The only real win — avoiding `../../../` churn on file moves — does not justify the per-tool config and cross-boundary footguns.

## Exception: Frontend + shadcn/ui

shadcn/ui is the one case where the alias is unavoidable:

- `components.json` stores import-alias paths (`@/components`, `@/lib/utils`, …) and the CLI resolves them through `tsconfig.json` `paths`.
- shadcn **does not support relative-path aliases** — there is no valid `components.json` pointing at `./src/...` relatively.
- Running `pnpx shadcn@latest init` with no alias re-adds `@/*` to `tsconfig.json` and writes `@/` aliases back into `components.json`. Recreating the config does not escape the requirement.

So when a frontend uses shadcn, keep the `@/` alias scoped to that one app. The backend and shared packages stay alias-free.

## Frontend Setup

Restore the alias in three places (frontend app only). `components.json` keeps its default `@/` aliases.

`tsconfig.json` — declare `paths` (no `baseUrl`, see below):

```jsonc
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

`vite.config.js` and `vitest.config.js` — resolve the alias via `vite-tsconfig-paths` (reads `paths` from `tsconfig.json`, single source of truth):

```js
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()]
})
```

Add `vite-tsconfig-paths` to the frontend `devDependencies`.

## Never Use baseUrl

`baseUrl` is **deprecated in TypeScript 6** (errors without `"ignoreDeprecations": "6.0"`) and **removed in TypeScript 7**.

- `paths` works without `baseUrl` under `moduleResolution: "bundler"` / `"nodenext"` — entries resolve relative to the `tsconfig.json` location.
- Write `"@/*": ["./src/*"]` directly; never add `baseUrl`.
