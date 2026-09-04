# pnpm

## Rules

- pnpm >= 11 — ALWAYS add `"pnpm": ">=11"` to root `package.json` `engines`
- ALWAYS use `allowBuilds` (not legacy `onlyBuiltDependencies`/`ignoredBuiltDependencies`)
- ALWAYS set `strictDepBuilds: true` in `pnpm-workspace.yaml`
- ALWAYS set `minimumReleaseAge: 10080` in `pnpm-workspace.yaml`
- Use pnpm catalogs for dependency versions shared by multiple workspaces but not needed repo-wide
- NEVER use glob patterns in `pnpm-workspace.yaml` — list each package explicitly
- pnpm is the repository package manager even when a runtime command uses Node, Bun, a browser bundler, or a serverless platform

## Workspaces

Workspace configuration via `pnpm-workspace.yaml`.

### Structure

```
apps/
  backend/          # Backend application
  frontend/         # Frontend application
packages/
  shared/           # Common types and code between apps
  sdk-user/         # Domain-specific SDK (example)
  sdk-sender/       # Domain-specific SDK (example)
```

- ALWAYS name apps by role: `apps/backend`, `apps/frontend`, `apps/sender`, etc.
- ALWAYS use `packages/shared` for common types and code shared between frontend and backend

### pnpm-workspace.yaml

```yaml
packages:
  - apps/backend
  - apps/frontend
  - packages/shared

strictDepBuilds: true

# Supply-chain delay: refuse versions younger than 7 days (minutes: 7 * 24 * 60),
# mitigating compromised-release attacks. Note: pnpm v11 also re-verifies existing
# lockfile entries, so installs fail until currently-locked deps age past the cutoff.
minimumReleaseAge: 10080

catalog:
  drizzle-orm: ^0.45.2

allowBuilds:
  '@biomejs/biome': true
  '@swc/core': true
  esbuild: true
  sharp: true
```

Each package listed explicitly — no wildcards. Add more entries as packages are created.

Only allow packages that are actually in the dependency graph. Common build-script packages include `@biomejs/biome`, `@swc/core`, `esbuild`, `sharp`, `unrs-resolver`, and `better-sqlite3`, but the allowlist is project-specific.

Catalog entries centralize version ranges for dependencies used by multiple workspaces but not truly needed everywhere:

```json
{
  "dependencies": {
    "drizzle-orm": "catalog:"
  }
}
```

Keep repo-wide toolchain packages such as `@biomejs/biome`, `@types/node`, `typescript`, and `vitest` in the root `package.json`. Use catalogs for application-dependent packages shared by several workspaces.

### packages/shared

Shared package for types, utilities, and constants used across apps:

- Export types and interfaces consumed by both frontend and backend
- Export shared validation schemas, constants, enums
- Do NOT put app-specific logic here — only truly shared code
- Both `apps/backend` and `apps/frontend` depend on `packages/shared` via workspace protocol: `"shared": "workspace:*"`

## Build Approvals

With the supported pnpm baseline, lifecycle scripts from dependencies are blocked by default for supply chain security.

### Approve builds

```bash
pnpm approve-builds
```

Interactive prompt to approve/deny each dependency that wants to run build scripts. Results written to `pnpm-workspace.yaml`.

Flag `--global` / `-g` — approve globally installed package dependencies.

### Configuration in pnpm-workspace.yaml

#### `allowBuilds` (recommended)

Single map replacing both `onlyBuiltDependencies` and `ignoredBuiltDependencies`:

```yaml
allowBuilds:
  esbuild: true        # allowed
  core-js: false       # explicitly denied
  nx@21.6.4: true      # version-pinned approval
```

#### Other settings

| Setting | Description |
|---------|-------------|
| `strictDepBuilds` | `true` = fail install if any unreviewed build scripts exist |
| `dangerouslyAllowAllBuilds` | `true` = skip all checks (not recommended) |

### CI / Non-interactive

- `strictDepBuilds: true` — make unreviewed builds a hard error (recommended for CI)
- Manually maintain `allowBuilds` in `pnpm-workspace.yaml` for deterministic CI builds

### Fast-moving packages

When a package needs to bypass release-age policy because it is tightly coupled to a hosted runtime, add a targeted `minimumReleaseAgeExclude` entry instead of weakening the whole workspace:

```yaml
minimumReleaseAgeExclude:
  - runtime-adapter@1.2.3
  - platform-types@4.5.6
```

Use exact package entries. Do not add broad patterns.

Full dependency version management workflow: `references/package-versions.md`.

## Runtime vs Package Manager

The runtime command and package manager are separate choices.

Examples:

```json
{
  "scripts": {
    "start": "bun run index.ts",
    "dev": "bun run --hot index.ts",
    "type-check": "pnpm exec tsc --noEmit",
    "test": "pnpm exec vitest run"
  }
}
```

This is still a pnpm-managed TypeScript project. Keep the lockfile, workspace orchestration, dependency updates, and toolchain commands on pnpm unless the user explicitly chooses another package manager.

## Update Dependencies

Use `references/package-versions.md` for dependency update, clean install, release-age, and Dependabot workflows.
