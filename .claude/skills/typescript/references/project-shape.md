# Project Shape Reference

- [Principles](#principles)
- [Single Package](#single-package)
- [Workspace](#workspace)
- [Dependency Placement](#dependency-placement)
- [Package Boundaries](#package-boundaries)

## Principles

TypeScript projects should make the source layout and ownership boundaries obvious before any runtime-specific setup is added.

- Keep the root responsible for toolchain and orchestration: `typescript`, `@biomejs/biome`, `vitest`, coverage provider, aggregate scripts, shared configs.
- Keep runtime dependencies near the code that uses them: backend dependencies in backend package, frontend dependencies in frontend package, action/runtime dependencies in the action package.
- Use `type: "module"` and ESM imports.
- Use `.js` config files for tools (`vite.config.js`, `vitest.config.js`, `rollup.config.js`, etc.).
- Use explicit relative import extensions for TypeScript source imports when the runtime or bundler consumes `.ts` directly: `./foo.ts`.
- Use package imports across workspace boundaries, not path aliases.

## Single Package

Use this shape for one deployable unit, one library, or one GitHub Action:

```text
src/
  index.ts
  main.ts
package.json
tsconfig.json
biome.json
vitest.config.js
```

Root `package.json` owns both toolchain deps and runtime deps because there is only one package boundary.

## Workspace

Use this shape when the repository has multiple deployable surfaces or shared domain packages:

```text
apps/
  backend/
  frontend/
  worker/
  action/
packages/
  common/
  domain-user/
  domain-billing/
package.json
pnpm-workspace.yaml
tsconfig.base.json
tsconfig.json
biome.json
```

`apps/*` are deployable/runtime surfaces. `packages/*` are reusable modules consumed by apps or other packages.

`pnpm-workspace.yaml` must list each workspace explicitly:

```yaml
packages:
  - apps/backend
  - apps/frontend
  - packages/common
```

## Dependency Placement

Root devDependencies:

- `typescript`
- `@biomejs/biome`
- `vitest`
- `@vitest/coverage-v8`
- Build tools shared across the whole repo, when applicable

Workspace dependencies:

- Runtime libraries used by that workspace
- Platform/runtime type packages specific to that workspace, such as `@types/bun`
- Framework-specific test adapters used only by that workspace

Avoid duplicating root toolchain dependencies in workspace packages.

## Package Boundaries

In a workspace, cross-package imports use package names and `workspace:*` dependencies:

```json
{
  "dependencies": {
    "common": "workspace:*"
  }
}
```

Package `exports` can point at TypeScript source for internal workspaces:

```json
{
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./backend": "./src/backend.ts",
    "./frontend": "./src/frontend.ts"
  }
}
```

Keep runtime-specific exports explicit. For example, split backend-only and frontend-only entrypoints instead of making consumers import a mixed module and rely on tree-shaking.
