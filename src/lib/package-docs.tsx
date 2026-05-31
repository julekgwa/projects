import { createServerFn } from '@tanstack/react-start';
import { notFound } from '@tanstack/react-router';
import browserCollections from 'collections/browser';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { DocsPage as DocsPageWithEdit } from 'fumadocs-ui/page';
import type { LayoutTab } from 'fumadocs-ui/layouts/shared';
import { useFumadocsLoader } from 'fumadocs-core/source/client';
import { Suspense } from 'react';
import { useMDXComponents } from '@/components/mdx';
import { baseOptions } from '@/lib/layout.shared';
import { componentLinks, packageGitConfig } from '@/lib/shared';
import { source } from '@/lib/source';

const packageTabs = componentLinks.map((item) => ({
  title: item.label,
  url: item.to,
})) satisfies LayoutTab[];

export const loadPackageDoc = createServerFn({
  method: 'GET',
})
  .inputValidator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs);
    if (!page) throw notFound();

    return {
      path: page.path,
      pageTree: await source.serializePageTree(source.getPageTree()),
      packageName: slugs[0],
      pageFilePath: page.path,
    };
  });

type EditOnGithubConfig = {
  owner: string;
  repo: string;
  sha: string;
  path: string;
};

export const packageDocClientLoader = browserCollections.docs.createClientLoader({
  component({ toc, frontmatter, default: MDX }, props: { editOnGithub?: EditOnGithubConfig }) {
    return (
      <DocsPageWithEdit toc={toc} editOnGithub={props.editOnGithub}>
        <DocsTitle>{frontmatter.title}</DocsTitle>
        <DocsDescription>{frontmatter.description}</DocsDescription>
        <DocsBody>
          <MDX components={useMDXComponents()} />
        </DocsBody>
      </DocsPageWithEdit>
    );
  },
});

export function PackageDocPage({
  loaderData,
}: {
  loaderData: Awaited<ReturnType<typeof loadPackageDoc>>;
}) {
  const { path, pageTree, packageName, pageFilePath } = useFumadocsLoader(loaderData);
  const config = packageName ? packageGitConfig[packageName] : undefined;

  const editOnGithub = {
    owner: 'julekgwa',
    repo: 'projects',
    sha: 'main',
    path: `content/docs/${pageFilePath}`,
  };

  return (
    <DocsLayout
      {...baseOptions(packageName)}
      tabs={packageTabs}
      tree={pageTree}
    >
      <Suspense>{packageDocClientLoader.useContent(path, { editOnGithub })}</Suspense>
    </DocsLayout>
  );
}
