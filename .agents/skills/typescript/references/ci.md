# CI Reference

- [Pull Request Gate](#pull-request-gate)
- [Setup](#setup)
- [Quality Steps](#quality-steps)
- [Coverage](#coverage)
- [Dependency Updates](#dependency-updates)

## Pull Request Gate

Every TypeScript project should have a CI gate that proves the repository is shippable without mutating files:

```yaml
name: Pull Request Checks

on:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v6

      - uses: actions/setup-node@v6
        with:
          node-version: 24

      - uses: pnpm/action-setup@v6
        with:
          version: 11
          run_install: true

      - name: Check
        run: pnpm run check:ci

      - name: Type Check
        run: pnpm run type-check

      - name: Test
        run: pnpm run test

      - name: Build
        run: pnpm run build
```

Omit `build` only when the project has no build output.

## Setup

- Use Node 24 in CI.
- Use pnpm 11 through `pnpm/action-setup`.
- Keep install locked to the committed lockfile.
- Use the same root scripts developers use locally.

## Quality Steps

Run checks in this order:

1. `pnpm run check:ci`
2. `pnpm run type-check`
3. `pnpm run test`
4. `pnpm run build` or `pnpm run bundle`

`check:ci` must not write files. Local `check` may write formatting/import-sort fixes.

## Coverage

Coverage is optional, but when present:

- Use Vitest coverage with the V8 provider.
- Emit `lcov` for coverage uploaders.
- Emit JUnit when the CI system ingests test reports.
- Keep thresholds realistic and increase them intentionally.

## Dependency Updates

For Dependabot:

- Track `github-actions`.
- Track `npm` at the root and workspace package directories that declare dependencies.
- Track Docker images when the project ships a container.
- Group routine updates to reduce PR noise.
- Use cooldowns: 7 days by default, 30 days for semver-major updates.
- Delay major updates or handle them separately.

Canonical package version management workflow: `references/package-versions.md`.
