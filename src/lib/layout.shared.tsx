import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, packageGitConfig } from './shared';

export function baseOptions(packageName?: string): BaseLayoutProps {
  const config = packageName ? packageGitConfig[packageName] : undefined;
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    githubUrl: config ? `https://github.com/${config.owner}/${config.repo}` : undefined,
  };
}
