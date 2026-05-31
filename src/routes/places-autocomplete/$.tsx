import { createFileRoute } from '@tanstack/react-router';
import {
  loadPackageDoc,
  packageDocClientLoader,
  PackageDocPage,
} from '@/lib/package-docs';

export const Route = createFileRoute('/places-autocomplete/$')({
  loader: async ({ params }) => {
    const slugs = params._splat?.split('/').filter(Boolean) ?? [];
    const data = await loadPackageDoc({
      data: ['places-autocomplete', ...slugs],
    });
    await packageDocClientLoader.preload(data.path);
    return data;
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <PackageDocPage loaderData={Route.useLoaderData()} />;
}
