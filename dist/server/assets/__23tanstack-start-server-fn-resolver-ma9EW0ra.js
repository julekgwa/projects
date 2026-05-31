import { a as __toESM } from "./chunk-_TIqcEvS.js";
import { t as require_react } from "./react-CUDtH9QT.js";
//#region node_modules/@tanstack/router-core/dist/esm/root.js
/** Stable identifier used for the root route in a route tree. */
var rootRouteId = "__root__";
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/matchContext.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var matchContext = import_react.createContext(void 0);
var dummyMatchContext = import_react.createContext(void 0);
//#endregion
//#region \0%23tanstack-start-server-fn-resolver
var manifest = { "8e0452817b964820dacb3c0a02f5930da26be51faa56a17c74c6b87addd8aadd": {
	functionName: "loadPackageDoc_createServerFn_handler",
	importer: () => import("./package-docs-B45l29qq.js")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { rootRouteId as i, dummyMatchContext as n, matchContext as r, getServerFnById as t };
