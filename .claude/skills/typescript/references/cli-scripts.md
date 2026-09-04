# CLI Scripts Reference

Executable `.ts` scripts (bin tools, one-off commands) run directly by the selected runtime.

- [Native Execution + Shebang](#native-execution--shebang)
- [Explicit Import Extensions](#explicit-import-extensions)
- [Constraints](#constraints)

## Native Execution + Shebang

Node **>= 24** runs `.ts` files directly via built-in type stripping — no `tsx`, `ts-node`, or build step. Use a plain `node` shebang:

```ts
#!/usr/bin/env node
```

Bun scripts should use Bun directly:

```ts
#!/usr/bin/env bun
```

Prefer runtime-native shebangs over `#!/usr/bin/env -S pnpm tsx`, `#!/usr/bin/env tsx`, or `ts-node` — they drop the extra runtime dependency. Make the file executable (`chmod +x`) and expose it via `package.json` `bin`, or run it through the selected runtime command.

## Explicit Import Extensions

Type stripping erases types **without rewriting import paths**. Every relative import reached by a directly-executed `.ts` script should carry the explicit `.ts` extension:

```ts
// ✅ resolves
import { type BotProfile, createBotConfig } from '../config/bot-config.ts'

// ❌ ERR_MODULE_NOT_FOUND — Node won't append .ts/.js for you
import { createBotConfig } from '../config/bot-config'
```

- Applies to the **entire import graph** the script reaches, not just the entry file.
- The extension is `.ts` (the file that exists on disk), not `.js` — there is no compiled output.
- Requires `allowImportingTsExtensions: true` in `tsconfig.json` (baseline) so `tsc` accepts the `.ts` specifier.
- Bare/package imports are unaffected — extensions are only for relative paths.

## Constraints

- Type stripping is **erasable-syntax only** in runtimes that strip types: no `enum`, no `namespace` with runtime members, no legacy `experimental` decorators. Set `"erasableSyntaxOnly": true` in `tsconfig.json` to let `tsc` flag non-erasable syntax before runtime.
- This applies to scripts executed directly by Node or Bun. Code that goes through a bundler is resolved by the bundler and may have different extension rules.
