# Rollup issue with astro

## What is required

We would like to use starlight types in own typescript logic

```
import type { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

type DocsSchema = ReturnType<typeof docsSchema>;
type DocsSchemaType = z.infer<ReturnType<DocsSchema>>;

export function starlight(): DocsSchemaType {
  return {
    title: 'test',
    editUrl: '',
    template: 'doc',
    draft: false,
    head: [],
    pagefind: false,
    sidebar: {
      attrs: {},
      hidden: false
    }
  }
}
```

## Bundling

Rollup is supposed to be used as package builder

So far we have a following issue:

```
[!] (plugin rpt2) RollupError: The "fileName" or "name" properties of emitted chunks and assets must be strings that are neither absolute nor relative paths, received "../../../../../../node_modules/@astrojs/starlight/schema.d.ts".
    at getRollupError (/workspaces/astro-rollup-issue/node_modules/rollup/dist/shared/parseAst.js:285:41)
    at Object.error (/workspaces/astro-rollup-issue/node_modules/rollup/dist/shared/parseAst.js:281:42)
    at FileEmitter.emitFile (/workspaces/astro-rollup-issue/node_modules/rollup/dist/shared/rollup.js:277:36)
    at emitDeclaration (/workspaces/astro-rollup-issue/node_modules/rollup-plugin-typescript2/src/index.ts:424:10)
    at /workspaces/astro-rollup-issue/node_modules/rollup-plugin-typescript2/src/index.ts:434:5
    at Array.forEach (<anonymous>)
    at Object.generateBundle (/workspaces/astro-rollup-issue/node_modules/rollup-plugin-typescript2/src/index.ts:431:30)
    at /workspaces/astro-rollup-issue/node_modules/rollup/dist/shared/rollup.js:1073:40
```

## How to reproduce?

```
npx nx build starlight
```
