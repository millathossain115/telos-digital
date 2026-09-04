# Runtime Targets Reference

- [Principles](#principles)
- [Runtime Matrix](#runtime-matrix)
- [Entry Points](#entry-points)
- [Runtime Types](#runtime-types)
- [Direct TypeScript Execution](#direct-typescript-execution)

## Principles

The TypeScript baseline is shared, but each runnable surface still needs explicit runtime settings.

- Keep common compiler options in `tsconfig.base.json` or the root `tsconfig.json`.
- Put runtime-specific `target`, `lib`, `types`, `include`, and `exclude` in the package `tsconfig.json`.
- Do not add DOM globals to backend or action code unless that runtime actually provides them.
- Do not add Node globals to browser-only code.
- Prefer runtime-native TypeScript execution where it is stable, otherwise define a build output and verify it.

## Runtime Matrix

| Runtime surface | `target` | `lib` | `types` | Notes |
|-----------------|----------|-------|---------|-------|
| Node 24 service/script/action | `ES2022` | `["ES2022"]` | `["node"]` | Use Node native TypeScript type stripping only for directly executed scripts. |
| Bun service/script | `ES2022` | `["ES2022"]` | `["bun"]` | Runtime command can be `bun run`, while repo toolchain can still be pnpm/tsc/biome/vitest. |
| Browser app | `ES2022` | `["ES2022", "DOM", "DOM.Iterable"]` | framework/tool types as needed | Add `vite/client` only for Vite apps. |
| Tests | same as tested code | same as tested code | add `vitest/globals` when globals are enabled | Keep test runtime explicit in `vitest.config.js`. |
| Library/internal package | `ES2022` | smallest valid set | none unless required | Avoid app/runtime globals in reusable packages. |

## Entry Points

Every runnable surface should have one obvious entrypoint:

- Service: `src/index.ts`, `index.ts`, or equivalent runtime entry.
- CLI/script: executable file in `bin/` with a runtime shebang.
- GitHub Action: `action.yml` points at built `dist/index.js`.
- Browser app: Vite or another bundler owns the HTML/JS entry.
- Library/package: `exports` points at public entrypoints.

Document how the entrypoint is executed: direct TypeScript, runtime build, bundler build, or checked-in distribution artifact.

## Runtime Types

Use the narrowest ambient types that match the target runtime:

```jsonc
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "types": ["node", "vitest/globals"]
  }
}
```

For browser code:

```jsonc
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client", "vitest/globals"],
    "jsx": "react-jsx"
  }
}
```

Only add framework/platform generated types when that package consumes them.

## Direct TypeScript Execution

Direct `.ts` execution is runtime-specific:

- Node 24: `#!/usr/bin/env node`
- Bun: `#!/usr/bin/env bun`

Avoid `tsx` and `ts-node` when the selected runtime can run the script directly. See `references/cli-scripts.md` for script rules.
