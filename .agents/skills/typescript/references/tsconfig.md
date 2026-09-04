# tsconfig.json Reference

- [Baseline Config](#baseline-config)
- [Runtime Knobs](#runtime-knobs)
- [Scripts](#scripts)
- [Build Configs](#build-configs)
- [Workspace Structure](#workspace-structure)
- [Single Package](#single-package)

## Baseline Config

Use this as the shared base for modern TypeScript projects. It is runtime-neutral and does not include DOM, Node, Bun, or framework-specific globals.

```jsonc
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "allowImportingTsExtensions": true,
    "erasableSyntaxOnly": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "noEmit": true
  }
}
```

Key choices:

- `moduleResolution: "bundler"` matches modern bundlers and direct TypeScript source imports.
- `allowImportingTsExtensions: true` allows explicit `.ts` import specifiers in source.
- `erasableSyntaxOnly: true` keeps code compatible with runtimes that strip types instead of compiling TypeScript-only runtime syntax.
- `noEmit: true` keeps normal validation separate from build output generation.

## Runtime Knobs

Each app/package adds only the runtime globals it actually needs.

| Runtime surface | `target` | `lib` | `types` |
|-----------------|----------|-------|---------|
| Node 24 service/script/action | `ES2022` | `["ES2022"]` | `["node"]` |
| Bun service/script | `ES2022` | `["ES2022"]` | `["bun"]` |
| Browser app | `ES2022` | `["ES2022", "DOM", "DOM.Iterable"]` | tool/framework types, e.g. `["vite/client"]` |
| Tests | same as tested code | same as tested code | add `vitest/globals` only when globals are enabled |
| Internal library/package | `ES2022` | smallest valid set | none unless required |

Node/Bun/backend example:

```jsonc
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "types": ["node", "vitest/globals"]
  },
  "include": ["src", "bin"],
  "exclude": ["node_modules", "dist", "coverage"]
}
```

Browser example:

```jsonc
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "types": ["vite/client", "vitest/globals"]
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

Path aliases are avoided by default. See `references/aliases.md` for the frontend + shadcn/ui exception.

## Scripts

Every TypeScript project or workspace declares `type-check` in its `package.json`:

```json
"type-check": "tsc --noEmit"
```

Using `pnpm exec` is also fine when the project standardizes on explicit binary lookup:

```json
"type-check": "pnpm exec tsc --noEmit"
```

In a workspace, run one package type-check from the root by filtering to that package name:

```bash
pnpm run --filter backend type-check
```

The root `package.json` uses `type-check` as the aggregate command:

```json
"type-check": "pnpm run -r --parallel --if-present --no-bail type-check"
```

## Build Configs

Keep the normal `tsconfig.json` on `noEmit: true`. Add a separate build config only when a runtime needs emitted JavaScript or declarations.

```jsonc
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": false,
    "allowImportingTsExtensions": false
  },
  "include": ["src"],
  "exclude": ["src/**/*.test.ts"]
}
```

Use this for build tools such as Rollup, declaration emit, or package publishing. See `references/build-output.md`.

## Workspace Structure

Root `tsconfig.base.json` contains the baseline compiler options only. Package `tsconfig.json` files extend it and set runtime knobs.

Root `tsconfig.json` should reference workspace packages when project references are useful:

```jsonc
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "files": [],
  "references": [
    { "path": "./apps/backend" },
    { "path": "./apps/frontend" },
    { "path": "./packages/common" }
  ]
}
```

For multi-entry packages, create focused child configs and reference them from the package root config:

```jsonc
{
  "files": [],
  "references": [
    { "path": "./tsconfig.admin.json" },
    { "path": "./tsconfig.public.json" }
  ]
}
```

## Single Package

Use one self-contained `tsconfig.json` with baseline options plus runtime knobs:

```jsonc
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "allowImportingTsExtensions": true,
    "erasableSyntaxOnly": true,
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noEmit": true,
    "target": "ES2022",
    "lib": ["ES2022"],
    "types": ["node", "vitest/globals"]
  },
  "include": ["src"]
}
```
