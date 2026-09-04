# Build Output Reference

- [Principles](#principles)
- [Direct TypeScript](#direct-typescript)
- [Bundled Output](#bundled-output)
- [Checked-In Artifacts](#checked-in-artifacts)
- [Generated Files](#generated-files)

## Principles

TypeScript source is the source of truth. Build output is a runtime adapter.

- Prefer `noEmit: true` for regular type-checking.
- Add a separate build config only when a runtime needs emitted JavaScript or declarations.
- Keep build output deterministic.
- Either ignore generated output or commit it and verify in CI that it is current.
- Do not mix source validation and artifact generation in the same `tsconfig.json` unless the project is intentionally a build-only package.

## Direct TypeScript

Use direct `.ts` execution when the runtime supports it and deployment does not require a bundled artifact:

- Node 24 scripts and CLIs
- Bun services and scripts
- Internal workspace packages consumed as source by a bundler/runtime

Direct execution still requires `type-check`, tests, and Biome checks.

## Bundled Output

Use a bundler when deployment needs a single/minified artifact, dependency folding, or runtime-specific output:

- GitHub Actions: bundle `src/index.ts` to `dist/index.js`.
- Bun services in containers: bundle backend entrypoints to runtime `dist`.
- Browser apps: bundler emits static assets.
- Serverless/function targets: bundler emits the runtime entry expected by the platform.

Build configs are JavaScript files:

```text
rollup.config.js
vite.config.js
vitest.config.js
```

If TypeScript build config needs different emit behavior, create a separate config:

```jsonc
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": false,
    "allowImportingTsExtensions": false
  },
  "exclude": ["src/**/*.test.ts"]
}
```

## Checked-In Artifacts

Some ecosystems require committed artifacts, such as GitHub Actions that run `dist/index.js`.

CI must fail when checked-in output is stale:

```bash
pnpm run build
git diff --exit-code -- dist
```

Use a project-specific comparison when only one artifact matters, for example `dist/index.js`.

## Generated Files

Generated files should be handled explicitly:

- Ignore generated build output when it is not required for runtime or consumers.
- Commit generated source only when the ecosystem requires it.
- Exclude or override generated files in Biome when formatting/linting would create noisy churn.
- Keep generation commands in scripts so agents know how to refresh output.

Examples of generated files include route trees, runtime binding types, API clients, database migrations, and distribution bundles.
