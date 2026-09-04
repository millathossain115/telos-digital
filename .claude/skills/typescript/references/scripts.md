# Scripts Reference

- [Contract](#contract)
- [Root Scripts](#root-scripts)
- [Workspace Scripts](#workspace-scripts)
- [CI Scripts](#ci-scripts)
- [Runtime Scripts](#runtime-scripts)

## Contract

Script names should mean the same thing across projects so agents can validate a repository without rediscovering local conventions.

| Script | Meaning |
|--------|---------|
| `type-check` | Run TypeScript without writing output. |
| `check` | Apply Biome formatting, linting, and import sorting. |
| `check:ci` | Run Biome without writing output. |
| `test` | Run the test suite once. |
| `test:coverage` | Run tests with coverage output. |
| `build` | Produce runtime/build artifacts for deployable surfaces. |
| `bundle` | Full local shippability gate: type-check, check, test, and build as applicable. |
| `dev` | Start local development mode. |
| `start` | Start the production/runtime command. |

## Root Scripts

Root scripts orchestrate the whole repo. In workspaces, use recursive/filter commands from the root:

```json
{
  "scripts": {
    "bundle": "pnpm run type-check && pnpm run check && pnpm run test && pnpm run build",
    "check": "pnpm --reporter=append-only run -r --parallel --if-present --no-bail check",
    "check:ci": "pnpm exec biome check .",
    "test": "pnpm --reporter=append-only run -r --parallel --if-present --no-bail test",
    "type-check": "pnpm --reporter=append-only run -r --parallel --if-present --no-bail type-check"
  }
}
```

For single-package projects:

```json
{
  "scripts": {
    "bundle": "pnpm run check && pnpm run type-check && pnpm run test && pnpm run build",
    "check": "pnpm exec biome check --write .",
    "check:ci": "pnpm exec biome check .",
    "test": "pnpm exec vitest run",
    "type-check": "pnpm exec tsc --noEmit"
  }
}
```

## Workspace Scripts

Each workspace declares only the scripts that apply to that workspace. The common workspace scripts are:

```json
{
  "scripts": {
    "check": "biome check --write .",
    "test": "vitest run",
    "type-check": "tsc --noEmit"
  }
}
```

Use these exact commands for normal workspaces. Use `pnpm exec` only when the script needs clarity or the project already standardizes on it:

```json
{
  "scripts": {
    "test": "pnpm exec vitest run",
    "type-check": "pnpm exec tsc --noEmit"
  }
}
```

## CI Scripts

CI should call non-mutating scripts:

```bash
pnpm run check:ci
pnpm run type-check
pnpm run test
pnpm run build
```

If `check` writes files locally, CI must use `check:ci`.

## Runtime Scripts

Runtime scripts can use the selected runtime directly:

```json
{
  "scripts": {
    "start": "bun run index.ts",
    "dev": "bun run --hot index.ts"
  }
}
```

This does not require switching the repository package manager away from pnpm. Keep dependency installation, lockfile, workspace orchestration, and toolchain scripts on pnpm unless the project explicitly standardizes on another package manager.
