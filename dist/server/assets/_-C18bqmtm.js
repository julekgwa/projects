import { a as createFileRoute, i as lazyRouteComponent, n as loadPackageDoc, r as packageDocClientLoader } from "./package-docs-DnvrNP00.js";
//#region src/routes/payment-card-icons/$.tsx
var $$splitComponentImporter = () => import("./_-Ca-P_t7n.js");
var Route = createFileRoute("/payment-card-icons/$")({
	loader: async ({ params }) => {
		const data = await loadPackageDoc({ data: ["payment-card-icons", ...params._splat?.split("/").filter(Boolean) ?? []] });
		await packageDocClientLoader.preload(data.path);
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
