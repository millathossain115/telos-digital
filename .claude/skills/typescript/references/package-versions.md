# Package Versions

Manage dependency versions with pnpm, a release-age delay, deterministic clean installs, and automated update PRs.

## Rules

- ALWAYS use pnpm for dependency installs and lockfile updates.
- ALWAYS configure `minimumReleaseAge: 10080` in `pnpm-workspace.yaml` to delay newly published package versions by 7 days.
- ALWAYS keep `minimumReleaseAge` in the same `pnpm-workspace.yaml` as `strictDepBuilds` and `allowBuilds`.
- Use Dependabot for routine dependency update PRs.
- Use `pnpm clean` when a dependency install must be reset from a clean state.
- Use pnpm catalogs for package versions shared by multiple workspaces but not truly needed everywhere.
- Do not accept major updates silently. Review major changes separately.

## Supply Chain Delay

Delay package versions younger than 7 days to reduce exposure to compromised-release attacks:

```yaml
# Supply-chain delay: refuse versions younger than 7 days (minutes: 7 * 24 * 60),
# mitigating compromised-release attacks. Note: pnpm v11 also re-verifies existing
# lockfile entries, so installs fail until currently-locked deps age past the cutoff.
minimumReleaseAge: 10080
```

Add it to `pnpm-workspace.yaml`:

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

allowBuilds:
  '@biomejs/biome': true
  esbuild: true
```

pnpm v11 also re-checks existing lockfile entries against `minimumReleaseAge`. If a currently locked dependency is newer than 7 days, installs fail until that package version ages past the cutoff.

## Exceptions

Use targeted exceptions only when a package is tightly coupled to a hosted runtime or an urgent fix is explicitly approved:

```yaml
minimumReleaseAgeExclude:
  - runtime-adapter@1.2.3
  - platform-types@4.5.6
```

Use exact package entries. Do not add broad patterns.

## Catalogs

Use pnpm catalogs to keep one version range for dependencies shared across multiple workspaces.

Define catalog versions in `pnpm-workspace.yaml`:

```yaml
catalog:
  drizzle-orm: ^0.45.2
```

Reference the catalog entry from workspace `package.json` files:

```json
{
  "dependencies": {
    "drizzle-orm": "catalog:"
  }
}
```

This keeps the same `drizzle-orm` version range across workspaces without forcing it into every package.

Use the root `package.json` for truly shared repo-wide toolchain packages that every workspace relies on through root scripts:

```json
{
  "devDependencies": {
    "@biomejs/biome": "^2.0.0",
    "@types/node": "^24.0.0",
    "typescript": "^5.0.0",
    "vitest": "^3.0.0"
  }
}
```

Use catalogs for packages that are shared between several workspaces but remain application-dependent:

- Database clients and ORMs used by multiple backend apps.
- Framework/runtime adapters used by several apps but not by libraries.
- SDKs or API clients used by more than one workspace.
- UI/runtime packages shared by frontend apps but not required by backend or tooling packages.

Do not move dependencies into the root `package.json` only to align versions. If a dependency is not truly repo-wide tooling, keep it declared in the workspace that uses it and centralize only its version range through `catalog:`.

## Clean Installs

Use the project script when dependencies must be reset:

```bash
pnpm clean
pnpm install
```

The `clean` script should remove install artifacts and generated dependency caches owned by the project. Keep the script project-local, deterministic, and scoped to dependency/build artifacts only. Do not remove source files, configuration, or committed generated artifacts.

## Manual Updates

Update compatible dependency versions, install, verify, and report major upgrades.

### Discover packages

```bash
find . ./apps ./packages -maxdepth 2 -name 'package.json' -not -path '*/node_modules/*'
```

Note the list. It is needed for package sorting later.

### Check outdated

```bash
pnpm outdated -r --compatible
pnpm outdated -r
```

Use `pnpm outdated -r --compatible` to check dependencies ready for compatible updates across all workspaces. Use `pnpm outdated -r` to see all available updates, including majors that need separate review.

Capture the full output because the `Latest` column has target versions.

If nothing is outdated, report that and stop.

### Bump version ranges

Use `npm-check-updates` to update `package.json` ranges:

```bash
pnpx npm-check-updates --workspaces --root -u --target semver
pnpx npm-check-updates -u --target minor
pnpx npm-check-updates -u --target patch
```

Preferred default for workspaces: `--workspaces --root -u --target semver`, which updates all workspace and root dependency ranges within their existing semver ranges. Review major updates separately.

When editing manually:

- Update ranges to include the compatible latest version.
- Preserve range style (`^`, `~`, exact).
- Update every workspace package where the dependency appears.
- Do not bump major versions without explicit approval.

### Install and verify

```bash
pnpm install
pnpm bundle
```

If `pnpm bundle` is unavailable, run the configured quality gates:

```bash
pnpm run check:ci
pnpm run type-check
pnpm run test
pnpm run build
```

Omit commands only when the project does not define them.

### Check unused dependencies

```bash
pnpx depcheck
```

Remove unused dependencies. If a package is a false positive, add it to `.depcheckrc`:

```yaml
ignores:
  - "vitest"
  - "@vitest/coverage-v8"
```

### Sort package.json files

Run for each discovered `package.json`:

```bash
pnpx sort-package-json <path/to/package.json>
```

Run individually per package. Do not glob.

### Report major updates

```bash
pnpm outdated -r
```

List available major upgrades that were skipped. Present them separately so the user can decide on each major migration.

## Dependabot

Add `.github/dependabot.yml` to automate dependency update PRs.

Baseline npm configuration:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "monthly"
    cooldown:
      default-days: 7
      semver-major-days: 30
    allow:
      - dependency-type: "all"
    groups:
      main:
        patterns:
          - "*"
    commit-message:
      prefix: "TECH Dependabot [js] "
```

Add more npm entries only when workspace packages have their own lockfile context. For normal pnpm workspaces with a single root lockfile, the root npm entry is enough.

Also add ecosystem entries when present:

- `github-actions` for workflow action updates.
- `docker` for container image updates.
