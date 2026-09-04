# Biome Reference

- [Dependencies](#dependencies)
- [Config](#config)
- [pnpm-workspace.yaml](#pnpm-workspaceyaml)
- [Scripts](#scripts)
- [Workspace Structure](#workspace-structure)

## Dependencies

```
@biomejs/biome
```

Root devDependency only. Biome handles both formatting and linting — no Prettier or ESLint needed.

```json
"devDependencies": {
  "@biomejs/biome": "latest"
}
```

> After installing, use the local schema from `node_modules` so the config stays in sync with the installed binary — no network dependency, always matches the installed version:

## Config

`biome.json` at project root:

```json
{
  "$schema": "node_modules/@biomejs/biome/configuration_schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "formatter": {
    "enabled": true,
    "lineEnding": "lf",
    "lineWidth": 256,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "javascript": {
    "formatter": {
      "semicolons": "asNeeded",
      "quoteStyle": "single",
      "quoteProperties": "asNeeded",
      "jsxQuoteStyle": "double",
      "trailingCommas": "none",
      "bracketSpacing": true,
      "bracketSameLine": true,
      "arrowParentheses": "always"
    }
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "assist": {
    "enabled": true,
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  },
  "css": {
    "parser": {
      "tailwindDirectives": true
    }
  }
}
```

Key options:
- `$schema` — points to `node_modules` so the schema stays current with the installed Biome version
- `vcs.useIgnoreFile: true` — respects `.gitignore`; do not duplicate gitignored paths such as `tmp`, `node_modules`, `dist`, or `coverage` in Biome excludes
- `files.includes` — omit it for the default compact config; if a project needs it, list only file types the project actually uses
- `lineWidth: 256` — wide lines, avoids unnecessary wrapping
- `javascript.formatter` — single quotes, no semicolons, no trailing commas
- `assist.organizeImports: "on"` — auto-sort imports on `biome check --write`
- `css.parser.tailwindDirectives: true` — parses Tailwind directives without disabling CSS support
- `overrides` — use for generated files or test globals when needed; keep exceptions narrow and path-specific

Generated files should not create formatter/linter churn. Disable only the needed Biome features for generated paths:

```json
{
  "overrides": [
    {
      "includes": ["**/*.gen.ts", "**/routeTree.gen.ts"],
      "assist": { "enabled": false },
      "formatter": { "enabled": false },
      "linter": { "enabled": false }
    }
  ]
}
```

If tests use globals without adding `vitest/globals` to every file, configure test globals narrowly:

```json
{
  "overrides": [
    {
      "includes": ["**/*.test.{js,ts}", "**/*.spec.{js,ts}"],
      "javascript": {
        "globals": ["describe", "it", "test", "expect", "beforeAll", "afterAll", "beforeEach", "afterEach", "vi"]
      }
    }
  ]
}
```

## pnpm-workspace.yaml

Biome ships a native binary with a postinstall build step. With `strictDepBuilds: true`, you must explicitly allow it:

```yaml
strictDepBuilds: true
allowBuilds:
  '@biomejs/biome': true
```

## Scripts

Every project or workspace intended for Biome linting and formatting declares `check` in its `package.json`. Package scripts can call the Biome binary directly because pnpm adds local and workspace-root bins to the script path.

```json
"check": "biome check --write ."
```

- `check --write` — format + lint + organize imports in one pass
- Optional helpers can still exist for targeted local workflows, but `check` is the command agents and root orchestration should rely on.

For CI (no writes, fail on issues):

```json
"check:ci": "pnpm exec biome check ."
```

## Workspace Structure

Install Biome once at root — all packages use the root `biome.json` via hoisting:

```json
"devDependencies": {
  "@biomejs/biome": "latest"
}
```

Every workspace intended for Biome linting and formatting declares a local `check` script:

```json
"check": "biome check --write ."
```

Format and lint one workspace by running the filtered command from the root:

```bash
pnpm run --filter backend check
```

The root `package.json` uses `check` as the aggregate command. It runs every declared workspace `check` script in parallel and keeps going so all issues are surfaced in one pass:

```json
"check": "pnpm run -r --parallel --if-present --no-bail check"
```

No per-package `biome.json` needed by default — root config applies everywhere. To override rules for specific paths, use the `overrides` field in root `biome.json`.

Use a package-level `biome.json` only when a generated subtree or package-specific tool output needs a local override that would be awkward at the root. Keep `root: false` and extend the root config.
