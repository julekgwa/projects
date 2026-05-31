import { a as createFileRoute, i as lazyRouteComponent, n as loadPackageDoc, r as packageDocClientLoader } from "./package-docs-DnvrNP00.js";
//#region src/routes/places-autocomplete/$.tsx
var $$splitComponentImporter = () => import("./_-jShsPWgw.js");
var Route = createFileRoute("/places-autocomplete/$")({
	loader: async ({ params }) => {
		const data = await loadPackageDoc({ data: ["places-autocomplete", ...params._splat?.split("/").filter(Boolean) ?? []] });
		await packageDocClientLoader.preload(data.path);
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
