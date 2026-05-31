import { d as TSS_SERVER_FUNCTION, g as notFound, t as createServerFn } from "./createServerFn-QtWj-oD8.js";
import { r as source } from "./source-nBqQHYFW.js";
//#region node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/package-docs.tsx?tss-serverfn-split
var loadPackageDoc_createServerFn_handler = createServerRpc({
	id: "8e0452817b964820dacb3c0a02f5930da26be51faa56a17c74c6b87addd8aadd",
	name: "loadPackageDoc",
	filename: "src/lib/package-docs.tsx"
}, (opts) => loadPackageDoc.__executeServer(opts));
var loadPackageDoc = createServerFn({ method: "GET" }).inputValidator((slugs) => slugs).handler(loadPackageDoc_createServerFn_handler, async ({ data: slugs }) => {
	const page = source.getPage(slugs);
	if (!page) throw notFound();
	return {
		path: page.path,
		pageTree: await source.serializePageTree(source.getPageTree()),
		packageName: slugs[0],
		pageFilePath: page.path
	};
});
//#endregion
export { loadPackageDoc_createServerFn_handler };
