import { a as createFileRoute, i as lazyRouteComponent, n as loadPackageDoc, r as packageDocClientLoader } from "./package-docs-DnvrNP00.js";
//#region src/routes/input-tag/$.tsx
var $$splitComponentImporter = () => import("./_-y1UBGpHl.js");
var Route = createFileRoute("/input-tag/$")({
	loader: async ({ params }) => {
		const data = await loadPackageDoc({ data: ["input-tag", ...params._splat?.split("/").filter(Boolean) ?? []] });
		await packageDocClientLoader.preload(data.path);
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
