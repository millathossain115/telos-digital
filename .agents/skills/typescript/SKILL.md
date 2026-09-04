---
name: typescript
description: Configure modern TypeScript project structure, tsconfig.json, runtime targets, pnpm, package version management, Biome, Vitest, build outputs, CI, EditorConfig, and agent hooks. Use when scaffolding or auditing TypeScript apps, packages, CLIs, GitHub Actions, Node/Bun/browser/serverless projects, workspaces, dependency updates, linting/formatting/testing, scripts, builds, or post-edit hooks.
---

# TypeScript

Configure modern TypeScript projects: structure, compiler, runtimes, package manager, package versions, linting, formatting, testing, builds, CI, and validation.

## Project Shapes

| Shape | Structure | Config style | Detect |
|-------|-----------|-------------|--------|
| **Workspace** | `apps/` + `packages/` | `tsconfig.base.json` + per-package extends, root Biome config | `packages` field in `pnpm-workspace.yaml` |
| **Single app/action/CLI** | `src/` in root | Self-contained configs | No workspace `packages` |
| **Library/package** | `src/` in root or `packages/<name>` | Self-contained or extends root base | package exports/types |

> `pnpm-workspace.yaml` may exist in any project shape for pnpm v11+ settings such as `allowBuilds` and `minimumReleaseAge`. Check for `packages` field to detect a workspace.

## Rules

- ALWAYS use `pnpm`
- Biome handles both formatting and linting — no ESLint or Prettier needed
- ALWAYS use `.js` extension for config files (e.g. `vite.config.js`, `vitest.config.js`) — never `.ts`, `.mjs`, `.cjs`
- Keep runtime-specific details in adapters: Node, Bun, browser, GitHub Action, serverless, or framework settings should not leak into reusable packages
- Prefer explicit `.ts` relative import extensions when TypeScript source is consumed directly by a runtime or bundler
- Protect dependency updates with pnpm `minimumReleaseAge: 10080`, `strictDepBuilds`, and Dependabot cooldowns

## Workflow

### New Project

1. Ask user: project shape and runtime targets — workspace/single/library, then Node/Bun/browser/action/serverless/etc.
2. Create configs matching checklist below
3. Run validate step

### Existing Project

1. Scan project state and determine project shape, runtime targets, package manager, scripts, build outputs, and CI
2. Follow checklist — verify and fix misalignments

## Checklist

**Full review**: follow all sections sequentially.
**Targeted**: jump to specific section if user requests.

For each section:
1. Run quick checks first — do NOT read reference files yet
2. All pass → report `✓`, move to next section
3. Any fail → STOP, report failures to user, then read the section's reference file for fixing
4. After fix → re-run quick checks, confirm all pass before moving on

### pnpm

Quick checks:
- [ ] `pnpm` >= 11 — `"pnpm": ">=11"` in root `package.json` `engines`
- [ ] `pnpm-workspace.yaml` exists — `strictDepBuilds: true` set
- [ ] `pnpm-workspace.yaml` sets `minimumReleaseAge: 10080`
- [ ] `allowBuilds` used (not `onlyBuiltDependencies`/`ignoredBuiltDependencies`)
- [ ] `catalog` used for dependency versions shared by multiple workspaces but not needed repo-wide
- [ ] No glob patterns in `pnpm-workspace.yaml` packages — explicit paths only
- [ ] Workspace: `packages` field lists all workspace packages explicitly

Full reference: `references/pnpm.md`

### Package Versions

Quick checks:
- [ ] `pnpm-workspace.yaml` sets 7-day supply-chain delay: `minimumReleaseAge: 10080`
- [ ] Any `minimumReleaseAgeExclude` entries are exact, narrow package entries
- [ ] Root `package.json` has `clean` script for dependency/build artifact resets
- [ ] Clean dependency reinstall uses `pnpm clean` then `pnpm install`
- [ ] Catalog entries centralize versions for shared application-dependent packages; root `package.json` keeps only truly shared toolchain packages
- [ ] `.github/dependabot.yml` tracks npm updates with monthly schedule, 7-day default cooldown, 30-day major cooldown, all dependency types, grouped updates, and `TECH Dependabot [js] ` commit prefix
- [ ] Major dependency updates are reviewed separately from compatible minor/patch updates

Full reference: `references/package-versions.md`

### Project Shape

Quick checks:
- [ ] Root owns shared toolchain devDeps and aggregate scripts
- [ ] Workspaces, if present, are explicit in `pnpm-workspace.yaml`
- [ ] Runtime dependencies live in the app/package that uses them
- [ ] Cross-workspace dependencies use package names with `workspace:*`
- [ ] Package `exports` expose clear public/runtime-specific entrypoints

Full reference: `references/project-shape.md`

### TypeScript

Quick checks:
- [ ] `typescript` in root `devDependencies` only — never in workspace packages
- [ ] `tsconfig.json` exists (single package) or `tsconfig.base.json` at root (workspace)
- [ ] `strict: true` enabled
- [ ] `target` and `module` appropriate for runtime (e.g. `ES2022`)
- [ ] Workspace: each package has `tsconfig.json` extending base via `"extends"`
- [ ] Workspace: root `tsconfig.json` uses `references` where project references are useful
- [ ] Each TypeScript workspace declares `type-check` in its `package.json`: `tsc --noEmit`
- [ ] Root `package.json` declares `type-check`: `pnpm run -r --parallel --if-present --no-bail type-check`
- [ ] Specific workspace type-checking is run from the root with `pnpm run --filter <name> type-check`

Full reference: `references/tsconfig.md`

### Runtime Targets

Quick checks:
- [ ] Each runnable surface declares matching `target`, `lib`, `types`, `include`, and `exclude`
- [ ] Backend/action/CLI packages do not include DOM globals unless runtime provides them
- [ ] Browser packages include DOM libs and browser tool types only where needed
- [ ] Bun packages use Bun runtime commands/types without forcing the whole repo off pnpm
- [ ] Directly executed `.ts` entrypoints use a runtime-native shebang or documented runtime command

Full reference: `references/runtime-targets.md`

### Scripts

Quick checks:
- [ ] `type-check`, `check`, `test`, and `bundle` have consistent repo-wide meaning
- [ ] `check` may write Biome fixes; `check:ci` never writes
- [ ] Root scripts orchestrate workspaces; workspace scripts validate only that workspace
- [ ] Root workspace scripts use `pnpm --reporter=append-only run -r --parallel --if-present --no-bail <script>` for `check`, `test`, and `type-check`
- [ ] Common workspace scripts are present when applicable: `check`: `biome check --write .`, `test`: `vitest run`, `type-check`: `tsc --noEmit`
- [ ] `build` exists only when the project has runtime/build artifacts
- [ ] `bundle` is the full shippability gate for local/agent validation

Full reference: `references/scripts.md`

### Build Output

Quick checks:
- [ ] `tsconfig.json` stays `noEmit: true` for normal validation
- [ ] Separate build config exists when emitted JS/declarations are required
- [ ] Runtime-required artifacts are generated by `build`
- [ ] Checked-in generated artifacts are verified current in CI
- [ ] Generated files are either ignored or handled with explicit Biome overrides

Full reference: `references/build-output.md`

### Path Aliases

Quick checks:
- [ ] No path aliases by default — relative imports (`./`, `../`) in backend, libraries, and frontend app code
- [ ] No `baseUrl` in any `tsconfig.json` (deprecated in TS6, removed in TS7)
- [ ] Exception: a frontend using shadcn/ui may keep `@/* → ./src/*` — only for shadcn-generated components
- [ ] Frontend alias (if present) declared in `tsconfig.json` `paths` AND resolved via `vite-tsconfig-paths` in `vite.config.js` + `vitest.config.js`
- [ ] Shared/published packages never use app aliases — use package imports (`workspace:*`)

Full reference: `references/aliases.md`

### CLI Scripts

Quick checks:
- [ ] Executable `.ts` scripts use runtime-native shebangs (`node` for Node 24, `bun` for Bun) — not `tsx`/`ts-node`
- [ ] Relative imports in directly-run `.ts` scripts include explicit `.ts` extensions
- [ ] `allowImportingTsExtensions: true` set so `tsc` accepts `.ts` specifiers
- [ ] `erasableSyntaxOnly: true` set so non-erasable syntax (`enum`, runtime `namespace`) is flagged before runtime

Full reference: `references/cli-scripts.md`

### Biome

Quick checks:
- [ ] `@biomejs/biome` in root `devDependencies`
- [ ] `pnpm-workspace.yaml` has `allowBuilds: '@biomejs/biome': true` (required with `strictDepBuilds: true`)
- [ ] `biome.json` exists at project root with `$schema` pointing to local `node_modules/@biomejs/biome/configuration_schema.json`
- [ ] `vcs.enabled: true` and `vcs.useIgnoreFile: true` set (respects `.gitignore`)
- [ ] `formatter.lineWidth: 256` and `indentStyle: space`, `indentWidth: 2`
- [ ] `javascript.formatter` configured: `semicolons: asNeeded`, `quoteStyle: single`, `trailingCommas: none`
- [ ] `linter.rules.recommended: true` enabled
- [ ] `assist.actions.source.organizeImports: "on"` set
- [ ] Each workspace intended for Biome declares `check` in its `package.json`: `biome check --write .`
- [ ] Root `package.json` declares `check`: `pnpm run -r --parallel --if-present --no-bail check`
- [ ] Workspace: single root `biome.json` by default; per-package configs only for narrow overrides
- [ ] Specific workspace formatting/linting is run from the root with `pnpm run --filter <name> check`

Full reference: `references/biome.md`

### Testing

Quick checks:
- [ ] `vitest` and `@vitest/coverage-v8` in root `devDependencies` only — never in workspace packages
- [ ] `.depcheckrc` ignores `vitest` and `@vitest/coverage-v8`
- [ ] `vitest.config.js` used for test config — never `.ts`, `.mjs`, `.cjs`
- [ ] Each workspace with tests declares `test` in its `package.json`: `vitest`
- [ ] Root `package.json` declares `test`: `pnpm run -r --parallel --if-present --no-bail test`
- [ ] Specific workspace tests are run from the root with `pnpm run --filter <name> test`

Full reference: `references/testing.md`

### CI

Quick checks:
- [ ] Pull request workflow installs Node 24 and pnpm 11
- [ ] CI runs non-mutating `check:ci`, then `type-check`, `test`, and `build`/`bundle` as applicable
- [ ] CI verifies checked-in build output is current when the ecosystem requires committed artifacts
- [ ] Coverage upload/test reports are configured only when the project uses them
- [ ] Dependency update config covers npm and GitHub Actions, plus Docker when containers are present

Full reference: `references/ci.md`

### EditorConfig

Quick checks:
- [ ] `.editorconfig` exists at project root
- [ ] `root = true` set
- [ ] `charset = utf-8`, `end_of_line = lf`, `indent_style = space`, `indent_size = 2`
- [ ] `trim_trailing_whitespace = true`, `insert_final_newline = true`

Full reference: `references/editorconfig.md`

### Agent Hooks

Quick checks:
- [ ] If `.claude/settings.json` or `.github/hooks/` exists, review hook setup
- [ ] Hooks match only `.ts`/`.tsx` edits
- [ ] Hooks run `pnpm exec biome check --write .` (whole project, for import sort), then `pnpm exec tsc --noEmit` for the edited file only
- [ ] Final type-check step checks `tsc` exit status directly
- [ ] Hooks exit non-zero when lint/type errors remain

Full reference: `references/agent-hooks.md`

### Validate

Steps:
- [ ] Run `pnpm install` if `node_modules` missing
- [ ] Run `pnpm run bundle` if present — must pass
- [ ] Otherwise run `pnpm run type-check`, `pnpm run test` if configured, and `pnpm run check:ci` or `pnpm exec biome check .`
- [ ] If agent hooks are configured, run one fail and one pass simulation to confirm gating
- [ ] Fix any errors before completing
