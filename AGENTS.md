# Meteor

High-level repo guide for orientation. Stay at this level first; read package-local docs only when working in that area.

## Repo layout

- `packages/` — reusable Meteor packages
- `examples/` — reference consumers for the packages
- `docs/admin-sdk/` — hand-written Admin SDK docs
- `scripts/` — repo maintenance

## Main packages

- `packages/admin-sdk` — Shopwell Administration SDK
- `packages/component-library` — Vue 3 component library
- `packages/tokens` — design tokens pipeline and outputs
- `packages/icon-kit` — icon assets and sync/build tooling
- `packages/stylelint-plugin-meteor` — stylelint rules for Meteor token usage
- `packages/create-meteor-extension` — scaffolding CLI and templates
- `packages/prettier-config` — shared Prettier config

## Notes

- This is a `pnpm` workspace with Turborepo (`pnpm-workspace.yaml`, `turbo.json`).
- Prefer source files over generated output.
- Usually ignore: `dist/`, `build/`, `es/`, `umd/`, `coverage/`, `.nuxt/`, `.output/`, `storybook-static/`, `node_modules/`, `.turbo/`.
- When SDK behavior changes, update `docs/admin-sdk/` too.

## Shopwell licensing guardrail

- Shopwell-owned code and publishable subpackages use Apache License 2.0.
- Project-owned package/composer manifests must declare `Apache-2.0`.
- Registered project-owned `LICENSE` files contain the standard Apache-2.0 text.
- Original upstream legal text is preserved verbatim in the root `NOTICE`; do not
  brand, shorten, delete, or move it into `LICENSE.upstream-*` files.
- Dependency lock files keep truthful third-party license metadata.
- Before commit, push, release, or sync completion, run:
  `../sync-upstream/bin/syncctl audit-license meteor`.
- If LICENSE, NOTICE, owned manifests, or upstream license inventory changes, update
  `../sync-upstream/config/repos.json` in the same task. A failed audit blocks completion.
