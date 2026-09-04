# Testing Reference

- [Dependencies](#dependencies)
- [Config](#config)
- [Scripts](#scripts)
- [depcheck](#depcheck)

## Dependencies

Use Vitest for TypeScript projects:

```
vitest
@vitest/coverage-v8
```

Install both in the root workspace so every app or package can use the same test runner and coverage provider:

```json
"devDependencies": {
  "@vitest/coverage-v8": "latest",
  "vitest": "latest"
}
```

Do not add `vitest` or `@vitest/coverage-v8` to individual workspace packages.

## Config

Use `vitest.config.js`. Keep the config file JavaScript so the project does not need to type-check or build the test runner config itself.

```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8'
    }
  }
})
```

Use `.js` only for config files. Do not use `vitest.config.ts`, `.mjs`, or `.cjs`.

Set the test runtime explicitly when it matters:

```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['src/**/*.{test,spec}.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov']
    }
  }
})
```

Use runtime/framework adapters only in the package that needs them. Keep the generic Vitest dependency at the root, but package-specific adapters can live in that package's devDependencies.

## Scripts

Every workspace with tests declares `test` in its `package.json`:

```json
"test": "vitest"
```

Run one workspace test command from the root by filtering to that package name:

```bash
pnpm run --filter backend test
```

The root `package.json` uses `test` as the aggregate command. It runs every declared workspace `test` script in parallel and keeps going so all failures are surfaced in one pass:

```json
"test": "pnpm run -r --parallel --if-present --no-bail test"
```

Coverage, when configured, uses a separate script:

```json
"test:coverage": "pnpm exec vitest run --coverage"
```

CI/reporting integrations can add reporters such as JUnit without changing the local `test` contract.

## depcheck

Vitest and its coverage provider can look unused when they are only referenced through scripts or config. Add `.depcheckrc` at the root:

```yaml
ignores:
  - "vitest"
  - "@vitest/coverage-v8"
```
