import { a as createFileRoute, i as lazyRouteComponent, n as loadPackageDoc, r as packageDocClientLoader } from "./package-docs-DnvrNP00.js";
//#region src/routes/app-onboard/$.tsx
var $$splitComponentImporter = () => import("./_-D5YIyXqu.js");
var Route = createFileRoute("/app-onboard/$")({
	loader: async ({ params }) => {
		const data = await loadPackageDoc({ data: ["app-onboard", ...params._splat?.split("/").filter(Boolean) ?? []] });
		await packageDocClientLoader.preload(data.path);
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
