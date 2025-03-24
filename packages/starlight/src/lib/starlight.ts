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
