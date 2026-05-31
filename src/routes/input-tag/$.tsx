import { createFileRoute } from '@tanstack/react-router';
import {
  loadPackageDoc,
  packageDocClientLoader,
  PackageDocPage,
} from '@/lib/package-docs';

export const Route = createFileRoute('/input-tag/$')({
  loader: async ({ params }) => {
    const slugs = params._splat?.split('/').filter(Boolean) ?? [];
    const data = await loadPackageDoc({
      data: ['input-tag', ...slugs],
    });
    await packageDocClientLoader.preload(data.path);
    return data;
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <PackageDocPage loaderData={Route.useLoaderData()} />;
}
