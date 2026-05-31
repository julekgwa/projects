import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { BadgeRow } from '@/components/ui/badge-row';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    BadgeRow,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
