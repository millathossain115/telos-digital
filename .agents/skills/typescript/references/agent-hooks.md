# Agent Hooks

- [Claude Code](#claude-code)
- [GitHub Copilot](#github-copilot)

PostToolUse hook for `.ts`/`.tsx` files. Runs `biome check --write .` (whole project — required for import sort to work correctly across files) then type-check on every edit. If errors remain, hook fails — agent sees errors and must fix before proceeding.

## Claude Code

`.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/ts.sh"
          }
        ]
      }
    ]
  }
}
```

`.claude/hooks/ts.sh` (`chmod +x`):

```bash
#!/bin/bash

INPUT=$(cat)
FILE=$(echo "$INPUT" | jq -r '.tool_input.file_path')
[[ "$FILE" == *.ts || "$FILE" == *.tsx ]] || exit 0

pnpm exec biome check --write . || {
  echo "Biome check failed — fix format/lint issues before proceeding"
  exit 1
}

OUTPUT=$(pnpm exec tsc --noEmit 2>&1)
STATUS=$?
if [ "$STATUS" -ne 0 ]; then
  echo "$OUTPUT" | head -20
  echo "Type errors — fix them before proceeding"
  exit 1
fi
```

## GitHub Copilot

`.github/hooks/ts-lint.json`:

```json
{
  "version": 1,
  "hooks": {
    "postToolUse": [
      {
        "type": "command",
        "bash": ".github/hooks/ts.sh",
        "timeoutSec": 30
      }
    ]
  }
}
```

`.github/hooks/ts.sh` (`chmod +x`):

```bash
#!/bin/bash
INPUT=$(cat)
TOOL=$(echo "$INPUT" | jq -r '.toolName')
[[ "$TOOL" == "edit" || "$TOOL" == "create" ]] || exit 0

FILE=$(echo "$INPUT" | jq -r '.toolArgs | (.file_path // .path // empty)')
[[ "$FILE" == *.ts || "$FILE" == *.tsx ]] || exit 0

pnpm exec biome check --write . || {
  echo "Biome check failed — fix format/lint issues before proceeding"
  exit 1
}

OUTPUT=$(pnpm exec tsc --noEmit 2>&1)
STATUS=$?
if [ "$STATUS" -ne 0 ]; then
  echo "$OUTPUT" | head -20
  echo "Type errors — fix them before proceeding"
  exit 1
fi
```
