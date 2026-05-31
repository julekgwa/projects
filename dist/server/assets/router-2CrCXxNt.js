import { a as __toESM, i as __toCommonJS, t as __commonJSMin } from "./chunk-_TIqcEvS.js";
import { t as require_react } from "./react-CUDtH9QT.js";
import { A as escapeHtml, O as deepEqual, R as replaceEqualDeep, a as useHydrated, n as useRouter, t as useStore } from "./useStore-QaLyuWZ_.js";
import { _ as RouterCore, b as createNonReactiveMutableStore, c as appendUniqueUserTags, d as getAssetCrossOrigin, g as resolveManifestCssLink, n as Outlet, p as getScriptPreloadAttrs, x as createNonReactiveReadonlyStore } from "./Match-CEyiccqG.js";
import { b as Link, g as DirectionProvider, t as baseOptions, u as Link$1, v as J, y as SearchProvider } from "./layout.shared-BTAmWtvD.js";
import { a as createFileRoute, i as lazyRouteComponent, o as createRootRoute, s as useParams } from "./package-docs-DnvrNP00.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BtDrtBkJ.js";
import { a as create, c as getInternalDocumentId, d as isVectorType, f as createError, i as save, l as isArrayType, m as sleep, n as searchSimple, o as runMultipleHook, p as isAsyncFunction, s as runSingleHook, t as searchAdvanced, u as isGeoPointType } from "./advanced-BJ-uurHJ-D6GIFNpM.js";
import { C as I18nProvider, D as FrameworkProvider, S as I18nLabel, x as twMerge, y as buttonVariants } from "./es2015-B4SUp18r.js";
import { a as basename, i as llms, o as extname, r as source, s as House, t as getLLMText } from "./source-nBqQHYFW.js";
import { o as siteUrl, s as findPath, t as appName } from "./shared-DqE0m7Bq.js";
import { p as worker_threads_exports, r as init_worker_threads } from "./worker_threads-Cwe5T9wG.js";
import { t as Route$6 } from "./_-C0oAplGG.js";
import { t as Route$7 } from "./_-C18bqmtm.js";
import { t as Route$8 } from "./_-pB--5_79.js";
import { t as Route$9 } from "./_-CoDU8em8.js";
import { t as HomeLayout } from "./home-WRZy0ByV.js";
//#region node_modules/@tanstack/react-router/dist/esm/routerStores.js
var getStoreFactory = (opts) => {
	return {
		createMutableStore: createNonReactiveMutableStore,
		createReadonlyStore: createNonReactiveReadonlyStore,
		batch: (fn) => fn()
	};
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/router.js
/**
* Creates a new Router instance for React.
*
* Pass the returned router to `RouterProvider` to enable routing.
* Notable options: `routeTree` (your route definitions) and `context`
* (required if the root route was created with `createRootRouteWithContext`).
*
* @param options Router options used to configure the router.
* @returns A Router instance to be provided to `RouterProvider`.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/createRouterFunction
*/
var createRouter = (options) => {
	return new Router(options);
};
var Router = class extends RouterCore {
	constructor(options) {
		super(options, getStoreFactory);
	}
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useRouterState.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Subscribe to the router's state store with optional selection and
* structural sharing for render optimization.
*
* Options:
* - `select`: Project the full router state to a derived slice
* - `structuralSharing`: Replace-equal semantics for stable references
* - `router`: Read state from a specific router instance instead of context
*
* @returns The selected router state (or the full state by default).
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/useRouterStateHook
*/
function useRouterState(opts) {
	const contextRouter = useRouter({ warn: opts?.router === void 0 });
	const router = opts?.router || contextRouter;
	{
		const state = router.stores.__store.get();
		return opts?.select ? opts.select(state) : state;
	}
	const previousResult = (0, import_react.useRef)(void 0);
	return useStore(router.stores.__store, (state) => {
		if (opts?.select) {
			if (opts.structuralSharing ?? router.options.defaultStructuralSharing) {
				const newSlice = replaceEqualDeep(previousResult.current, opts.select(state));
				previousResult.current = newSlice;
				return newSlice;
			}
			return opts.select(state);
		}
		return state;
	});
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Asset.js
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var noopScriptHandler = () => {};
function setScriptAttrs(script, attrs) {
	if (!attrs) return;
	for (const [key, value] of Object.entries(attrs)) if (key !== "suppressHydrationWarning" && value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
}
function Asset(asset) {
	const { attrs, children, nonce, preventScriptHoist } = asset;
	switch (asset.tag) {
		case "title": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
			...attrs,
			suppressHydrationWarning: true,
			children
		});
		case "meta": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
			...attrs,
			suppressHydrationWarning: true
		});
		case "link": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			...attrs,
			precedence: attrs?.precedence ?? (attrs?.rel === "stylesheet" ? "default" : void 0),
			nonce,
			suppressHydrationWarning: true
		});
		case "style":
			if (asset.inlineCss && false);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
				...attrs,
				dangerouslySetInnerHTML: { __html: children },
				nonce
			});
		case "script": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Script, {
			attrs,
			preventScriptHoist,
			children
		});
		default: return null;
	}
}
function Script({ attrs, children, preventScriptHoist }) {
	useRouter();
	useHydrated();
	const dataScript = typeof attrs?.type === "string" && attrs.type !== "" && attrs.type !== "text/javascript" && attrs.type !== "module";
	import_react.useEffect(() => {
		if (dataScript) return;
		if (attrs?.src) {
			const normSrc = (() => {
				try {
					const base = document.baseURI || window.location.href;
					return new URL(attrs.src, base).href;
				} catch {
					return attrs.src;
				}
			})();
			for (const el of document.querySelectorAll("script[src]")) if (el.src === normSrc) return;
			const script = document.createElement("script");
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
		if (typeof children === "string") {
			const typeAttr = typeof attrs?.type === "string" ? attrs.type : "text/javascript";
			const nonceAttr = typeof attrs?.nonce === "string" ? attrs.nonce : void 0;
			for (const el of document.querySelectorAll("script:not([src])")) {
				if (!(el instanceof HTMLScriptElement)) continue;
				const sType = el.getAttribute("type") ?? "text/javascript";
				const sNonce = el.getAttribute("nonce") ?? void 0;
				if (el.textContent === children && sType === typeAttr && sNonce === nonceAttr) return;
			}
			const script = document.createElement("script");
			script.textContent = children;
			setScriptAttrs(script, attrs);
			document.head.appendChild(script);
			return () => script.remove();
		}
	}, [
		attrs,
		children,
		dataScript
	]);
	if (attrs?.src) {
		if (!preventScriptHoist) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			suppressHydrationWarning: true
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			...attrs,
			onLoad: noopScriptHandler,
			suppressHydrationWarning: true
		});
	}
	if (typeof children === "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		...attrs,
		dangerouslySetInnerHTML: { __html: children },
		suppressHydrationWarning: true
	});
	return null;
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/headContentUtils.js
function buildTagsFromMatches(router, nonce, matches, assetCrossOrigin) {
	const routeMeta = matches.map((match) => match.meta).filter((meta) => meta !== void 0);
	const resultMeta = [];
	const metaByAttribute = {};
	let title;
	for (let i = routeMeta.length - 1; i >= 0; i--) {
		const metas = routeMeta[i];
		for (let j = metas.length - 1; j >= 0; j--) {
			const m = metas[j];
			if (!m) continue;
			if (m.title) {
				if (!title) title = {
					tag: "title",
					children: m.title
				};
			} else if ("script:ld+json" in m) try {
				const json = JSON.stringify(m["script:ld+json"]);
				resultMeta.push({
					tag: "script",
					attrs: { type: "application/ld+json" },
					children: escapeHtml(json)
				});
			} catch {}
			else {
				const attribute = m.name ?? m.property;
				if (attribute) if (metaByAttribute[attribute]) continue;
				else metaByAttribute[attribute] = true;
				resultMeta.push({
					tag: "meta",
					attrs: {
						...m,
						nonce
					}
				});
			}
		}
	}
	if (title) resultMeta.push(title);
	if (nonce) resultMeta.push({
		tag: "meta",
		attrs: {
			property: "csp-nonce",
			content: nonce
		}
	});
	resultMeta.reverse();
	const constructedLinks = matches.flatMap((match) => match.links ?? []).filter((link) => link !== void 0).map((link) => ({
		tag: "link",
		attrs: {
			...link,
			nonce
		}
	}));
	const manifest = router.ssr?.manifest;
	const manifestCssTags = [];
	if (manifest) {
		matches.forEach((match) => {
			(manifest.routes[match.routeId]?.css)?.forEach((link) => {
				const resolvedLink = resolveManifestCssLink(link);
				manifestCssTags.push({
					tag: "link",
					attrs: {
						rel: "stylesheet",
						...resolvedLink,
						crossOrigin: getAssetCrossOrigin(assetCrossOrigin, "stylesheet") ?? resolvedLink.crossOrigin,
						suppressHydrationWarning: true,
						nonce
					}
				});
			});
		});
		if (manifest.inlineStyle) manifestCssTags.push({
			tag: "style",
			attrs: {
				...manifest.inlineStyle.attrs,
				nonce
			},
			children: manifest.inlineStyle.children,
			inlineCss: true
		});
	}
	const preloadLinks = [];
	if (manifest) matches.forEach((match) => {
		manifest.routes[match.routeId]?.preloads?.forEach((preload) => {
			preloadLinks.push({
				tag: "link",
				attrs: {
					...getScriptPreloadAttrs(manifest, preload, assetCrossOrigin),
					nonce
				}
			});
		});
	});
	const styles = matches.flatMap((match) => match.styles ?? []).filter((style) => style !== void 0).map(({ children, ...attrs }) => ({
		tag: "style",
		attrs: {
			...attrs,
			nonce
		},
		children
	}));
	const headScripts = matches.flatMap((match) => match.headScripts ?? []).filter((script) => script !== void 0).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			nonce
		},
		children
	}));
	const tags = [];
	appendUniqueUserTags(tags, resultMeta);
	tags.push(...preloadLinks);
	appendUniqueUserTags(tags, constructedLinks);
	tags.push(...manifestCssTags);
	appendUniqueUserTags(tags, styles);
	appendUniqueUserTags(tags, headScripts);
	return tags;
}
/**
* Build the list of head/link/meta/script tags to render for active matches.
* Used internally by `HeadContent`.
*/
var useTags = (assetCrossOrigin) => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	return buildTagsFromMatches(router, nonce, router.stores.matches.get(), assetCrossOrigin);
};
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/HeadContent.js
/**
* Render route-managed head tags (title, meta, links, styles, head scripts).
* Place inside the document head of your app shell.
* @link https://tanstack.com/router/latest/docs/framework/react/guide/document-head-management
*/
function HeadContent(props) {
	const tags = useTags(props.assetCrossOrigin);
	const nonce = useRouter().options.ssr?.nonce;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tags.map((tag) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...tag,
		key: `tsr-meta-${JSON.stringify(tag)}`,
		nonce
	})) });
}
//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Scripts.js
/**
* Render body script tags collected from route matches and SSR manifests.
* Should be placed near the end of the document body.
*/
var Scripts = () => {
	const router = useRouter();
	const nonce = router.options.ssr?.nonce;
	const getAssetScripts = (matches) => {
		const assetScripts = [];
		const manifest = router.ssr?.manifest;
		if (!manifest) return [];
		for (const match of matches) {
			const scripts = manifest.routes[match.routeId]?.scripts;
			if (!scripts) continue;
			for (const asset of scripts) assetScripts.push({
				tag: "script",
				attrs: {
					...asset.attrs,
					nonce
				},
				children: asset.children,
				...typeof asset.attrs?.src === "string" ? { preventScriptHoist: true } : {}
			});
		}
		return assetScripts;
	};
	const getScripts = (matches) => matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({ children, ...script }) => ({
		tag: "script",
		attrs: {
			...script,
			suppressHydrationWarning: true,
			nonce
		},
		children
	}));
	{
		const activeMatches = router.stores.matches.get();
		const assetScripts = getAssetScripts(activeMatches);
		return renderScripts(router, getScripts(activeMatches), assetScripts);
	}
	const assetScripts = useStore(router.stores.matches, getAssetScripts, deepEqual);
	return renderScripts(router, useStore(router.stores.matches, getScripts, deepEqual), assetScripts);
};
function renderScripts(router, scripts, assetScripts) {
	const allScripts = [...scripts, ...assetScripts];
	if (router.serverSsr) {
		const serverBufferedScript = router.serverSsr.takeBufferedScripts();
		if (serverBufferedScript) allScripts.unshift(serverBufferedScript);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: allScripts.map((asset, i) => /* @__PURE__ */ (0, import_react.createElement)(Asset, {
		...asset,
		key: `tsr-scripts-${asset.tag}-${i}`
	})) });
}
//#endregion
//#region node_modules/@orama/orama/dist/browser/methods/insert.js
function insert(orama, doc, language, skipHooks, options) {
	const errorProperty = orama.validateSchema(doc, orama.schema);
	if (errorProperty) throw createError("SCHEMA_VALIDATION_FAILURE", errorProperty);
	if (isAsyncFunction(orama.beforeInsert) || isAsyncFunction(orama.afterInsert) || isAsyncFunction(orama.index.beforeInsert) || isAsyncFunction(orama.index.insert) || isAsyncFunction(orama.index.afterInsert)) return innerInsertAsync(orama, doc, language, skipHooks, options);
	return innerInsertSync(orama, doc, language, skipHooks, options);
}
var ENUM_TYPE = new Set(["enum", "enum[]"]);
var STRING_NUMBER_TYPE = new Set(["string", "number"]);
async function innerInsertAsync(orama, doc, language, skipHooks, options) {
	const { index, docs } = orama.data;
	const id = orama.getDocumentIndexId(doc);
	if (typeof id !== "string") throw createError("DOCUMENT_ID_MUST_BE_STRING", typeof id);
	const internalId = getInternalDocumentId(orama.internalDocumentIDStore, id);
	if (!skipHooks) await runSingleHook(orama.beforeInsert, orama, id, doc);
	if (!orama.documentsStore.store(docs, id, internalId, doc)) throw createError("DOCUMENT_ALREADY_EXISTS", id);
	const docsCount = orama.documentsStore.count(docs);
	const indexableProperties = orama.index.getSearchableProperties(index);
	const indexablePropertiesWithTypes = orama.index.getSearchablePropertiesWithTypes(index);
	const indexableValues = orama.getDocumentProperties(doc, indexableProperties);
	for (const [key, value] of Object.entries(indexableValues)) {
		if (typeof value === "undefined") continue;
		const actualType = typeof value;
		const expectedType = indexablePropertiesWithTypes[key];
		validateDocumentProperty(actualType, expectedType, key, value);
	}
	await indexAndSortDocument(orama, id, indexableProperties, indexableValues, docsCount, language, doc, options);
	if (!skipHooks) await runSingleHook(orama.afterInsert, orama, id, doc);
	return id;
}
function innerInsertSync(orama, doc, language, skipHooks, options) {
	const { index, docs } = orama.data;
	const id = orama.getDocumentIndexId(doc);
	if (typeof id !== "string") throw createError("DOCUMENT_ID_MUST_BE_STRING", typeof id);
	const internalId = getInternalDocumentId(orama.internalDocumentIDStore, id);
	if (!skipHooks) runSingleHook(orama.beforeInsert, orama, id, doc);
	if (!orama.documentsStore.store(docs, id, internalId, doc)) throw createError("DOCUMENT_ALREADY_EXISTS", id);
	const docsCount = orama.documentsStore.count(docs);
	const indexableProperties = orama.index.getSearchableProperties(index);
	const indexablePropertiesWithTypes = orama.index.getSearchablePropertiesWithTypes(index);
	const indexableValues = orama.getDocumentProperties(doc, indexableProperties);
	for (const [key, value] of Object.entries(indexableValues)) {
		if (typeof value === "undefined") continue;
		const actualType = typeof value;
		const expectedType = indexablePropertiesWithTypes[key];
		validateDocumentProperty(actualType, expectedType, key, value);
	}
	indexAndSortDocumentSync(orama, id, indexableProperties, indexableValues, docsCount, language, doc, options);
	if (!skipHooks) runSingleHook(orama.afterInsert, orama, id, doc);
	return id;
}
function validateDocumentProperty(actualType, expectedType, key, value) {
	if (isGeoPointType(expectedType) && typeof value === "object" && typeof value.lon === "number" && typeof value.lat === "number") return;
	if (isVectorType(expectedType) && Array.isArray(value)) return;
	if (isArrayType(expectedType) && Array.isArray(value)) return;
	if (ENUM_TYPE.has(expectedType) && STRING_NUMBER_TYPE.has(actualType)) return;
	if (actualType !== expectedType) throw createError("INVALID_DOCUMENT_PROPERTY", key, expectedType, actualType);
}
async function indexAndSortDocument(orama, id, indexableProperties, indexableValues, docsCount, language, doc, options) {
	for (const prop of indexableProperties) {
		const value = indexableValues[prop];
		if (typeof value === "undefined") continue;
		const expectedType = orama.index.getSearchablePropertiesWithTypes(orama.data.index)[prop];
		await orama.index.beforeInsert?.(orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
		const internalId = orama.internalDocumentIDStore.idToInternalId.get(id);
		await orama.index.insert(orama.index, orama.data.index, prop, id, internalId, value, expectedType, language, orama.tokenizer, docsCount, options);
		await orama.index.afterInsert?.(orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
	}
	const sortableProperties = orama.sorter.getSortableProperties(orama.data.sorting);
	const sortableValues = orama.getDocumentProperties(doc, sortableProperties);
	for (const prop of sortableProperties) {
		const value = sortableValues[prop];
		if (typeof value === "undefined") continue;
		const expectedType = orama.sorter.getSortablePropertiesWithTypes(orama.data.sorting)[prop];
		orama.sorter.insert(orama.data.sorting, prop, id, value, expectedType, language);
	}
}
function indexAndSortDocumentSync(orama, id, indexableProperties, indexableValues, docsCount, language, doc, options) {
	for (const prop of indexableProperties) {
		const value = indexableValues[prop];
		if (typeof value === "undefined") continue;
		const expectedType = orama.index.getSearchablePropertiesWithTypes(orama.data.index)[prop];
		const internalDocumentId = getInternalDocumentId(orama.internalDocumentIDStore, id);
		orama.index.beforeInsert?.(orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
		orama.index.insert(orama.index, orama.data.index, prop, id, internalDocumentId, value, expectedType, language, orama.tokenizer, docsCount, options);
		orama.index.afterInsert?.(orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
	}
	const sortableProperties = orama.sorter.getSortableProperties(orama.data.sorting);
	const sortableValues = orama.getDocumentProperties(doc, sortableProperties);
	for (const prop of sortableProperties) {
		const value = sortableValues[prop];
		if (typeof value === "undefined") continue;
		const expectedType = orama.sorter.getSortablePropertiesWithTypes(orama.data.sorting)[prop];
		orama.sorter.insert(orama.data.sorting, prop, id, value, expectedType, language);
	}
}
function insertMultiple(orama, docs, batchSize, language, skipHooks, timeout) {
	if (isAsyncFunction(orama.afterInsertMultiple) || isAsyncFunction(orama.beforeInsertMultiple) || isAsyncFunction(orama.index.beforeInsert) || isAsyncFunction(orama.index.insert) || isAsyncFunction(orama.index.afterInsert)) return innerInsertMultipleAsync(orama, docs, batchSize, language, skipHooks, timeout);
	return innerInsertMultipleSync(orama, docs, batchSize, language, skipHooks, timeout);
}
async function innerInsertMultipleAsync(orama, docs, batchSize = 1e3, language, skipHooks, timeout = 0) {
	const ids = [];
	const processNextBatch = async (startIndex) => {
		const endIndex = Math.min(startIndex + batchSize, docs.length);
		const batch = docs.slice(startIndex, endIndex);
		for (const doc of batch) {
			const id = await insert(orama, doc, language, skipHooks, { avlRebalanceThreshold: batch.length });
			ids.push(id);
		}
		return endIndex;
	};
	const processAllBatches = async () => {
		let currentIndex = 0;
		while (currentIndex < docs.length) {
			const startTime = Date.now();
			currentIndex = await processNextBatch(currentIndex);
			if (timeout > 0) {
				const waitTime = timeout - (Date.now() - startTime);
				if (waitTime > 0) sleep(waitTime);
			}
		}
	};
	await processAllBatches();
	if (!skipHooks) await runMultipleHook(orama.afterInsertMultiple, orama, docs);
	return ids;
}
function innerInsertMultipleSync(orama, docs, batchSize = 1e3, language, skipHooks, timeout = 0) {
	const ids = [];
	let i = 0;
	function processNextBatch() {
		const batch = docs.slice(i * batchSize, (i + 1) * batchSize);
		if (batch.length === 0) return false;
		for (const doc of batch) {
			const id = insert(orama, doc, language, skipHooks, { avlRebalanceThreshold: batch.length });
			ids.push(id);
		}
		i++;
		return true;
	}
	function processAllBatches() {
		const startTime = Date.now();
		while (true) {
			if (!processNextBatch()) break;
			if (timeout > 0) {
				const elapsedTime = Date.now() - startTime;
				if (elapsedTime >= timeout) {
					const remainingTime = timeout - elapsedTime % timeout;
					if (remainingTime > 0) sleep(remainingTime);
				}
			}
		}
	}
	processAllBatches();
	if (!skipHooks) runMultipleHook(orama.afterInsertMultiple, orama, docs);
	return ids;
}
//#endregion
//#region src/styles/app.css?url
var app_default = "/assets/app-B9xZM5Lc.css";
//#endregion
//#region node_modules/fumadocs-ui/dist/provider/base.js
var DefaultSearchDialog = (0, import_react.lazy)(() => import("./search-default-DOJZ1YPB.js"));
function RootProvider$1({ children, dir = "ltr", theme = {}, search, i18n }) {
	let body = children;
	if (search?.enabled !== false) body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchProvider, {
		SearchDialog: DefaultSearchDialog,
		...search,
		children: body
	});
	if (theme?.enabled !== false) body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(J, {
		attribute: "class",
		defaultTheme: "system",
		enableSystem: true,
		disableTransitionOnChange: true,
		...theme,
		children: body
	});
	if (i18n) body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, {
		...i18n,
		children: body
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionProvider, {
		dir,
		children: body
	});
}
//#endregion
//#region node_modules/fumadocs-core/dist/framework/tanstack.js
var framework = {
	Link({ href, prefetch = true, ...props }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: href,
			preload: prefetch ? "intent" : false,
			...props,
			children: props.children
		});
	},
	usePathname() {
		const { isLoading, pathname } = useRouterState({ select: (state) => ({
			isLoading: state.isLoading,
			pathname: state.location.pathname
		}) });
		const activePathname = (0, import_react.useRef)(pathname);
		return (0, import_react.useMemo)(() => {
			if (isLoading) return activePathname.current;
			activePathname.current = pathname;
			return pathname;
		}, [isLoading, pathname]);
	},
	useRouter() {
		const router = useRouter();
		return (0, import_react.useMemo)(() => ({
			push(url) {
				router.navigate({ href: url });
			},
			refresh() {
				router.invalidate();
			}
		}), [router]);
	},
	useParams() {
		return useParams({ strict: false });
	}
};
/**
* Fumadocs adapter for Tanstack Router/Start
*/
function TanstackProvider({ children, Link: CustomLink, Image: CustomImage }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrameworkProvider, {
		...framework,
		Link: CustomLink ?? framework.Link,
		Image: CustomImage ?? framework.Image,
		children
	});
}
//#endregion
//#region node_modules/fumadocs-ui/dist/provider/tanstack.js
function RootProvider({ components, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TanstackProvider, {
		Link: components?.Link,
		Image: components?.Image,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootProvider$1, {
			...props,
			children: props.children
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: appName },
			{
				name: "description",
				content: "A collection of high-quality, production-ready React Native libraries including Places Autocomplete, App Onboard, Payment Card Icons, and Input Tag."
			},
			{
				property: "og:site_name",
				content: appName
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_US"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0f0f0f"
			}
		],
		links: [{
			rel: "stylesheet",
			href: app_default
		}, {
			rel: "canonical",
			href: siteUrl
		}],
		scripts: [{
			src: "https://www.googletagmanager.com/gtag/js?id=G-DGRGT4ZTG7",
			async: true
		}, { children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DGRGT4ZTG7');` }]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "flex flex-col min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
//#endregion
//#region src/routes/llms[.]txt.ts
var Route$4 = createFileRoute("/llms.txt")({ server: { handlers: { GET() {
	return new Response(llms(source).index());
} } } });
//#endregion
//#region src/routes/llms-full[.]txt.ts
var Route$3 = createFileRoute("/llms-full.txt")({ server: { handlers: { GET: async () => {
	const scan = source.getPages().map(getLLMText);
	const scanned = await Promise.all(scan);
	return new Response(scanned.join("\n\n"));
} } } });
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-BP6tQ5VJ.js");
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "React Native Libraries | High-Quality React Native Components" },
			{
				name: "description",
				content: "A collection of high-quality, production-ready React Native libraries including Places Autocomplete, App Onboard, Payment Card Icons, and Input Tag. Open source and free to use."
			},
			{
				property: "og:title",
				content: "React Native Libraries | High-Quality React Native Components"
			},
			{
				property: "og:description",
				content: "A collection of high-quality, production-ready React Native libraries including Places Autocomplete, App Onboard, Payment Card Icons, and Input Tag."
			},
			{
				property: "og:url",
				content: siteUrl
			},
			{
				name: "twitter:title",
				content: "React Native Libraries | High-Quality React Native Components"
			},
			{
				name: "twitter:description",
				content: "A collection of high-quality, production-ready React Native libraries including Places Autocomplete, App Onboard, Payment Card Icons, and Input Tag."
			},
			{
				name: "keywords",
				content: "react native, libraries, components, autocomplete, onboarding, payment icons, input tag, open source"
			}
		],
		links: [{
			rel: "canonical",
			href: siteUrl
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region node_modules/fumadocs-core/dist/endpoint-MyoBU5IC.js
function createEndpoint(server, options = {}) {
	const { search } = server;
	const { readOptions = defaultReadOptions } = options;
	return {
		...server,
		async staticGET() {
			return Response.json(await server.export());
		},
		async GET(request) {
			const url = new URL(request.url);
			const query = url.searchParams.get("query");
			if (!query) return Response.json([]);
			return Response.json(await search(query, readOptions(url, request)));
		}
	};
}
function defaultReadOptions(url) {
	const params = url.searchParams;
	const limit = params.has("limit") ? Number(params.get("limit")) : void 0;
	return {
		tag: params.get("tag")?.split(","),
		locale: params.get("locale"),
		limit: Number.isInteger(limit) ? limit : void 0
	};
}
//#endregion
//#region node_modules/fumadocs-core/dist/build-doc-DHR7rjs9.js
async function buildIndexDefault(page) {
	let structuredData;
	if (page.data.structuredData) structuredData = typeof page.data.structuredData === "function" ? await page.data.structuredData() : page.data.structuredData;
	else if ("load" in page.data && typeof page.data.load === "function") structuredData = (await page.data.load()).structuredData;
	if (!structuredData) throw new Error("Cannot find structured data from page, please define the page to index function.");
	return {
		title: page.data.title ?? basename(page.path, extname(page.path)),
		description: page.data.description,
		url: page.url,
		id: page.url,
		structuredData
	};
}
function isBreadcrumbItem(item) {
	return typeof item === "string" && item.length > 0;
}
function buildBreadcrumbs(source, page) {
	const pageTree = source.getPageTree(page.locale);
	const path = findPath(pageTree.children, (node) => node.type === "page" && node.url === page.url);
	if (path) {
		const breadcrumbs = [];
		path.pop();
		if (isBreadcrumbItem(pageTree.name)) breadcrumbs.push(pageTree.name);
		for (const segment of path) {
			if (!isBreadcrumbItem(segment.name)) continue;
			breadcrumbs.push(segment.name);
		}
		return breadcrumbs;
	}
}
function buildDocuments(indexes) {
	const docs = [];
	for (const page of indexes) {
		const pageTag = page.tag ?? [];
		const tags = Array.isArray(pageTag) ? pageTag : [pageTag];
		const data = page.structuredData;
		let id = 0;
		docs.push({
			id: page.id,
			page_id: page.id,
			type: "page",
			content: page.title,
			breadcrumbs: page.breadcrumbs,
			tags,
			url: page.url
		});
		const nextId = () => `${page.id}-${id++}`;
		if (page.description) docs.push({
			id: nextId(),
			page_id: page.id,
			tags,
			type: "text",
			url: page.url,
			content: page.description
		});
		for (const heading of data.headings) docs.push({
			id: nextId(),
			page_id: page.id,
			type: "heading",
			tags,
			url: `${page.url}#${heading.id}`,
			content: heading.content
		});
		for (const content of data.contents) docs.push({
			id: nextId(),
			page_id: page.id,
			tags,
			type: "text",
			url: content.heading ? `${page.url}#${content.heading}` : page.url,
			content: content.content
		});
	}
	return docs;
}
//#endregion
//#region node_modules/fumadocs-core/dist/search/server.js
var STEMMERS = {
	arabic: "ar",
	armenian: "am",
	bulgarian: "bg",
	czech: "cz",
	danish: "dk",
	dutch: "nl",
	english: "en",
	finnish: "fi",
	french: "fr",
	german: "de",
	greek: "gr",
	hungarian: "hu",
	indian: "in",
	indonesian: "id",
	irish: "ie",
	italian: "it",
	lithuanian: "lt",
	nepali: "np",
	norwegian: "no",
	portuguese: "pt",
	romanian: "ro",
	russian: "ru",
	serbian: "rs",
	slovenian: "ru",
	spanish: "es",
	swedish: "se",
	tamil: "ta",
	turkish: "tr",
	ukrainian: "uk",
	vietnamese: "vi",
	sanskrit: "sk"
};
var simpleSchema = {
	url: "string",
	title: "string",
	breadcrumbs: "string[]",
	description: "string",
	content: "string",
	keywords: "string"
};
var advancedSchema = {
	content: "string",
	page_id: "string",
	type: "string",
	breadcrumbs: "string[]",
	tags: "enum[]",
	url: "string",
	embeddings: "vector[512]"
};
async function createDB({ indexes, tokenizer, search: _, ...rest }) {
	const items = typeof indexes === "function" ? await indexes() : indexes;
	const db = create({
		schema: advancedSchema,
		...rest,
		components: {
			...rest.components,
			tokenizer: tokenizer ?? rest.components?.tokenizer
		}
	});
	await insertMultiple(db, buildDocuments(items));
	return db;
}
async function createDBSimple({ indexes, tokenizer, ...rest }) {
	const items = typeof indexes === "function" ? await indexes() : indexes;
	const db = create({
		schema: simpleSchema,
		...rest,
		components: {
			...rest.components,
			tokenizer: tokenizer ?? rest.components?.tokenizer
		}
	});
	await insertMultiple(db, items.map((page) => ({
		title: page.title,
		description: page.description,
		breadcrumbs: page.breadcrumbs,
		url: page.url,
		content: page.content,
		keywords: page.keywords
	})));
	return db;
}
function initSimpleSearch(options) {
	const doc = createDBSimple(options);
	return {
		async export() {
			return {
				type: "simple",
				...save(await doc)
			};
		},
		async search(query, searchOptions = {}) {
			const db = await doc;
			const { limit } = searchOptions;
			return searchSimple(db, query, {
				limit,
				...options.search
			});
		}
	};
}
function initAdvancedSearch(options) {
	const get = createDB(options);
	return {
		async export() {
			return {
				type: "advanced",
				...save(await get)
			};
		},
		async search(query, searchOptions = {}) {
			const db = await get;
			const { limit, tag, mode } = searchOptions;
			return searchAdvanced(db, query, tag, {
				...options.search,
				limit,
				mode: mode === "vector" ? "vector" : "fulltext"
			}).catch((err) => {
				if (mode === "vector") throw new Error("failed to search, make sure you have installed `@orama/plugin-embeddings` according to their docs.", { cause: err });
				throw err;
			});
		}
	};
}
function getTokenizer(locale) {
	return { language: Object.keys(STEMMERS).find((lang) => STEMMERS[lang] === locale) ?? locale };
}
function createI18nSearchAPI(...[type, options]) {
	async function initSearchServers() {
		const map = /* @__PURE__ */ new Map();
		if (options.i18n.languages.length === 0) return map;
		const indexes = typeof options.indexes === "function" ? await options.indexes() : options.indexes;
		for (const locale of options.i18n.languages) {
			const localeIndexes = indexes.filter((index) => index.locale === locale);
			const mapped = options.localeMap?.[locale] ?? getTokenizer(locale);
			if (type === "simple") map.set(locale, typeof mapped === "object" ? initSimpleSearch({
				...options,
				...mapped,
				indexes: localeIndexes
			}) : initSimpleSearch({
				...options,
				language: mapped,
				indexes: localeIndexes
			}));
			else map.set(locale, typeof mapped === "object" ? initAdvancedSearch({
				...options,
				indexes: localeIndexes,
				...mapped
			}) : initAdvancedSearch({
				...options,
				language: mapped,
				indexes: localeIndexes
			}));
		}
		return map;
	}
	const get = initSearchServers();
	return toAPI({
		async export() {
			const map = await get;
			const entries = Array.from(map.entries()).map(async ([k, v]) => [k, await v.export()]);
			return {
				type: "i18n",
				data: Object.fromEntries(await Promise.all(entries))
			};
		},
		async search(query, searchOptions) {
			const map = await get;
			const locale = searchOptions?.locale ?? options.i18n.defaultLanguage;
			const handler = map.get(locale);
			if (handler) return handler.search(query, searchOptions);
			return [];
		}
	});
}
/**
* create server from loader, if passed as function, the server will re-index all records once a different instance of loader is returned.
*/
function createFromSource(loader, options = {}) {
	const { buildIndex = buildIndexDefault } = options;
	const cache = /* @__PURE__ */ new WeakMap();
	async function initServer(loader) {
		const indexes = await Promise.all(loader.getPages().map(async (page) => {
			const index = await buildIndex(page);
			return {
				...index,
				breadcrumbs: index.breadcrumbs ?? buildBreadcrumbs(loader, page),
				locale: page.locale
			};
		}));
		if (loader._i18n) return createI18nSearchAPI("advanced", {
			...options,
			indexes,
			i18n: loader._i18n
		});
		return initAdvancedSearch({
			indexes,
			...options
		});
	}
	async function getCurrentServer() {
		const l = typeof loader === "function" ? await loader() : loader;
		let server = cache.get(l);
		if (!server) {
			server = initServer(l);
			cache.set(l, server);
		}
		return await server;
	}
	return toAPI({
		async export() {
			return (await getCurrentServer()).export();
		},
		async search(query, options) {
			return (await getCurrentServer()).search(query, options);
		}
	});
}
function toAPI(server) {
	return createEndpoint(server, { readOptions(url) {
		return {
			...defaultReadOptions(url),
			mode: url.searchParams.get("mode") === "vector" ? "vector" : "full"
		};
	} });
}
//#endregion
//#region src/routes/api/search.ts
var server = createFromSource(source, { language: "english" });
var Route$1 = createFileRoute("/api/search")({ server: { handlers: { GET: async ({ request }) => server.GET(request) } } });
//#endregion
//#region node_modules/zod/v4/core/core.js
var _a$6;
function $constructor(name, initializer, params) {
	function init(inst, def) {
		if (!inst._zod) Object.defineProperty(inst, "_zod", {
			value: {
				def,
				constr: _,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: false
		});
		if (inst._zod.traits.has(name)) return;
		inst._zod.traits.add(name);
		initializer(inst, def);
		const proto = _.prototype;
		const keys = Object.keys(proto);
		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];
			if (!(k in inst)) inst[k] = proto[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name });
	function _(def) {
		var _a;
		const inst = params?.Parent ? new Definition() : this;
		init(inst, def);
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		for (const fn of inst._zod.deferred) fn();
		return inst;
	}
	Object.defineProperty(_, "init", { value: init });
	Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
		if (params?.Parent && inst instanceof params.Parent) return true;
		return inst?._zod?.traits?.has(name);
	} });
	Object.defineProperty(_, "name", { value: name });
	return _;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
	}
};
var $ZodEncodeError = class extends Error {
	constructor(name) {
		super(`Encountered unidirectional transform during encode: ${name}`);
		this.name = "ZodEncodeError";
	}
};
(_a$6 = globalThis).__zod_globalConfig ?? (_a$6.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}
//#endregion
//#region node_modules/zod/v4/core/util.js
function getEnumValues(entries) {
	const numericValues = Object.values(entries).filter((v) => typeof v === "number");
	return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
function cached(getter) {
	return { get value() {
		{
			const value = getter();
			Object.defineProperty(this, "value", { value });
			return value;
		}
		throw new Error("cached value already set");
	} };
}
function nullish(input) {
	return input === null || input === void 0;
}
function cleanRegex(source) {
	const start = source.startsWith("^") ? 1 : 0;
	const end = source.endsWith("$") ? source.length - 1 : source.length;
	return source.slice(start, end);
}
function floatSafeRemainder$1(val, step) {
	const ratio = val / step;
	const roundedRatio = Math.round(ratio);
	const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
	if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
	return ratio - roundedRatio;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object, key, getter) {
	let value = void 0;
	Object.defineProperty(object, key, {
		get() {
			if (value === EVALUATING) return;
			if (value === void 0) {
				value = EVALUATING;
				value = getter();
			}
			return value;
		},
		set(v) {
			Object.defineProperty(object, key, { value: v });
		},
		configurable: true
	});
}
function assignProp(target, prop, value) {
	Object.defineProperty(target, prop, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
function mergeDefs(...defs) {
	const mergedDescriptors = {};
	for (const def of defs) Object.assign(mergedDescriptors, Object.getOwnPropertyDescriptors(def));
	return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
	return JSON.stringify(str);
}
function slugify(input) {
	return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
	return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__ */ cached(() => {
	if (globalConfig.jitless) return false;
	if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
	try {
		new Function("");
		return true;
	} catch (_) {
		return false;
	}
});
function isPlainObject(o) {
	if (isObject(o) === false) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== "function") return true;
	const prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
	return true;
}
function shallowClone(o) {
	if (isPlainObject(o)) return { ...o };
	if (Array.isArray(o)) return [...o];
	if (o instanceof Map) return new Map(o);
	if (o instanceof Set) return new Set(o);
	return o;
}
var propertyKeyTypes = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
	const cl = new inst._zod.constr(def ?? inst._zod.def);
	if (!def || params?.parent) cl._zod.parent = inst;
	return cl;
}
function normalizeParams(_params) {
	const params = _params;
	if (!params) return {};
	if (typeof params === "string") return { error: () => params };
	if (params?.message !== void 0) {
		if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		params.error = params.message;
	}
	delete params.message;
	if (typeof params.error === "string") return {
		...params,
		error: () => params.error
	};
	return params;
}
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
	});
}
var NUMBER_FORMAT_RANGES = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function pick(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = {};
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				newShape[key] = currDef.shape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function omit(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = { ...schema._zod.def.shape };
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				delete newShape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function extend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = schema._zod.def.shape;
		for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function safeExtend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function merge(a, b) {
	if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return clone(a, mergeDefs(a._zod.def, {
		get shape() {
			const _shape = {
				...a._zod.def.shape,
				...b._zod.def.shape
			};
			assignProp(this, "shape", _shape);
			return _shape;
		},
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: b._zod.def.checks ?? []
	}));
}
function partial(Class, schema, mask) {
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const oldShape = schema._zod.def.shape;
			const shape = { ...oldShape };
			if (mask) for (const key in mask) {
				if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				shape[key] = Class ? new Class({
					type: "optional",
					innerType: oldShape[key]
				}) : oldShape[key];
			}
			else for (const key in oldShape) shape[key] = Class ? new Class({
				type: "optional",
				innerType: oldShape[key]
			}) : oldShape[key];
			assignProp(this, "shape", shape);
			return shape;
		},
		checks: []
	}));
}
function required(Class, schema, mask) {
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const oldShape = schema._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key in mask) {
			if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			shape[key] = new Class({
				type: "nonoptional",
				innerType: oldShape[key]
			});
		}
		else for (const key in oldShape) shape[key] = new Class({
			type: "nonoptional",
			innerType: oldShape[key]
		});
		assignProp(this, "shape", shape);
		return shape;
	} }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
	return false;
}
function explicitlyAborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
	return false;
}
function prefixIssues(path, issues) {
	return issues.map((iss) => {
		var _a;
		(_a = iss).path ?? (_a.path = []);
		iss.path.unshift(path);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config) {
	const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
	const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
	rest.path ?? (rest.path = []);
	rest.message = message;
	if (ctx?.reportInput) rest.input = _input;
	return rest;
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
}
function issue(...args) {
	const [iss, input, inst] = args;
	if (typeof iss === "string") return {
		message: iss,
		code: "custom",
		input,
		inst
	};
	return { ...iss };
}
//#endregion
//#region node_modules/zod/v4/core/errors.js
var initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	Object.defineProperty(inst, "_zod", {
		value: inst._zod,
		enumerable: false
	});
	Object.defineProperty(inst, "issues", {
		value: def,
		enumerable: false
	});
	inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
	Object.defineProperty(inst, "toString", {
		value: () => inst.message,
		enumerable: false
	});
};
var $ZodError = $constructor("$ZodError", initializer$1);
var $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
function flattenError(error, mapper = (issue) => issue.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error.issues) if (sub.path.length > 0) {
		fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
		fieldErrors[sub.path[0]].push(mapper(sub));
	} else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error, mapper = (issue) => issue.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error, path = []) => {
		for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
		else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else {
			const fullpath = [...path, ...issue.path];
			if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < fullpath.length) {
					const el = fullpath[i];
					if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue));
					}
					curr = curr[el];
					i++;
				}
			}
		}
	};
	processError(error);
	return fieldErrors;
}
//#endregion
//#region node_modules/zod/v4/core/parse.js
var _parse$2 = (_Err) => (schema, value, _ctx, _params) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	if (result.issues.length) {
		const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, _params?.callee);
		throw e;
	}
	return result.value;
};
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	if (result.issues.length) {
		const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, params?.callee);
		throw e;
	}
	return result.value;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? {
		success: false,
		error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
var safeParse$1 = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? {
		success: false,
		error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
var safeParseAsync$1 = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _parse$2(_Err)(schema, value, ctx);
};
var _decode = (_Err) => (schema, value, _ctx) => {
	return _parse$2(_Err)(schema, value, _ctx);
};
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _parseAsync(_Err)(schema, value, ctx);
};
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _parseAsync(_Err)(schema, value, _ctx);
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
	return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _safeParseAsync(_Err)(schema, value, _ctx);
};
//#endregion
//#region node_modules/zod/v4/core/regexes.js
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
var duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
*
* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
var uuid = (version) => {
	if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
	return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
/** Practical email validation */
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
	return new RegExp(_emoji$1, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date$1 = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time$1(args) {
	return new RegExp(`^${timeSource(args)}$`);
}
function datetime$1(args) {
	const time = timeSource({ precision: args.precision });
	const opts = ["Z"];
	if (args.local) opts.push("");
	if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
	const timeRegex = `${time}(?:${opts.join("|")})`;
	return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string$1 = (params) => {
	const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
	return new RegExp(`^${regex}$`);
};
var integer = /^-?\d+$/;
var number$1 = /^-?\d+(?:\.\d+)?$/;
var boolean$1 = /^(?:true|false)$/i;
var _null$2 = /^null$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
//#endregion
//#region node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
	var _a;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a = inst._zod).onattach ?? (_a.onattach = []);
});
var numericOriginMap = {
	number: "number",
	bigint: "bigint",
	object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
		if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
		else bag.exclusiveMaximum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
		if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
		else bag.exclusiveMinimum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		var _a;
		(_a = inst._zod.bag).multipleOf ?? (_a.multipleOf = def.value);
	});
	inst._zod.check = (payload) => {
		if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder$1(payload.value, def.value) === 0) return;
		payload.issues.push({
			origin: typeof payload.value,
			code: "not_multiple_of",
			divisor: def.value,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	def.format = def.format || "float64";
	const isInt = def.format?.includes("int");
	const origin = isInt ? "int" : "number";
	const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		bag.minimum = minimum;
		bag.maximum = maximum;
		if (isInt) bag.pattern = integer;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (isInt) {
			if (!Number.isInteger(input)) {
				payload.issues.push({
					expected: origin,
					format: def.format,
					code: "invalid_type",
					continue: false,
					input,
					inst
				});
				return;
			}
			if (!Number.isSafeInteger(input)) {
				if (input > 0) payload.issues.push({
					input,
					code: "too_big",
					maximum: Number.MAX_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				else payload.issues.push({
					input,
					code: "too_small",
					minimum: Number.MIN_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				return;
			}
		}
		if (input < minimum) payload.issues.push({
			origin: "number",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "number",
			input,
			code: "too_big",
			maximum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length <= def.maximum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length >= def.minimum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = (payload) => {
		const val = payload.value;
		return !nullish(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.minimum = def.length;
		bag.maximum = def.length;
		bag.length = def.length;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const length = input.length;
		if (length === def.length) return;
		const origin = getLengthableOrigin(input);
		const tooBig = length > def.length;
		payload.issues.push({
			origin,
			...tooBig ? {
				code: "too_big",
				maximum: def.length
			} : {
				code: "too_small",
				minimum: def.length
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a, _b;
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.format = def.format;
		if (def.pattern) {
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(def.pattern);
		}
	});
	if (def.pattern) (_a = inst._zod).check ?? (_a.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			...def.pattern ? { pattern: def.pattern.toString() } : {},
			inst,
			continue: !def.abort
		});
	});
	else (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: payload.value,
			pattern: def.pattern.toString(),
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
	def.pattern = pattern;
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.includes(def.includes, def.position)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: def.includes,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.startsWith(def.prefix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: def.prefix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.endsWith(def.suffix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: def.suffix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});
//#endregion
//#region node_modules/zod/v4/core/doc.js
var Doc = class {
	constructor(args = []) {
		this.content = [];
		this.indent = 0;
		if (this) this.args = args;
	}
	indented(fn) {
		this.indent += 1;
		fn(this);
		this.indent -= 1;
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line of dedented) this.content.push(line);
	}
	compile() {
		const F = Function;
		const args = this?.args;
		const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
		return new F(...args, lines.join("\n"));
	}
};
//#endregion
//#region node_modules/zod/v4/core/versions.js
var version = {
	major: 4,
	minor: 4,
	patch: 3
};
//#endregion
//#region node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
	var _a;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const checks = [...inst._zod.def.checks ?? []];
	if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks, ctx) => {
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks) {
				if (ch._zod.def.when) {
					if (explicitlyAborted(payload)) continue;
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					if (!isAborted) isAborted = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		const handleCanaryResult = (canary, payload, ctx) => {
			if (aborted(canary)) {
				canary.aborted = true;
				return canary;
			}
			const checkResult = runChecks(payload, checks, ctx);
			if (checkResult instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
			}
			return inst._zod.parse(checkResult, ctx);
		};
		inst._zod.run = (payload, ctx) => {
			if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
			if (ctx.direction === "backward") {
				const canary = inst._zod.parse({
					value: payload.value,
					issues: []
				}, {
					...ctx,
					skipChecks: true
				});
				if (canary instanceof Promise) return canary.then((canary) => {
					return handleCanaryResult(canary, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result) => runChecks(result, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
	defineLazy(inst, "~standard", () => ({
		validate: (value) => {
			try {
				const r = safeParse$1(inst, value);
				return r.success ? { value: r.data } : { issues: r.error?.issues };
			} catch (_) {
				return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
});
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$1(inst._zod.bag);
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_) {}
		if (typeof payload.value === "string") return payload;
		payload.issues.push({
			expected: "string",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid);
	$ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
	if (def.version) {
		const v = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[def.version];
		if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
		def.pattern ?? (def.pattern = uuid(v));
	} else def.pattern ?? (def.pattern = uuid());
	$ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email);
	$ZodStringFormat.init(inst, def);
});
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const trimmed = payload.value.trim();
			if (!def.normalize && def.protocol?.source === httpProtocol.source) {
				if (!/^https?:\/\//i.test(trimmed)) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: payload.value,
						inst,
						continue: !def.abort
					});
					return;
				}
			}
			const url = new URL(trimmed);
			if (def.hostname) {
				def.hostname.lastIndex = 0;
				if (!def.hostname.test(url.hostname)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: def.hostname.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.protocol) {
				def.protocol.lastIndex = 0;
				if (!def.protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: def.protocol.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.normalize) payload.value = url.href;
			else payload.value = trimmed;
			return;
		} catch (_) {
			payload.issues.push({
				code: "invalid_format",
				format: "url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji());
	$ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
	def.pattern ?? (def.pattern = nanoid);
	$ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2);
	$ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid);
	$ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid);
	$ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid);
	$ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time$1(def));
	$ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration$1);
	$ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv4`;
});
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv6`;
	inst._zod.check = (payload) => {
		try {
			new URL(`http://[${payload.value}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4);
	$ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		const parts = payload.value.split("/");
		try {
			if (parts.length !== 2) throw new Error();
			const [address, prefix] = parts;
			if (!prefix) throw new Error();
			const prefixNum = Number(prefix);
			if (`${prefixNum}` !== prefix) throw new Error();
			if (prefixNum < 0 || prefixNum > 128) throw new Error();
			new URL(`http://[${address}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
function isValidBase64(data) {
	if (data === "") return true;
	if (/\s/.test(data)) return false;
	if (data.length % 4 !== 0) return false;
	try {
		atob(data);
		return true;
	} catch {
		return false;
	}
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64";
	inst._zod.check = (payload) => {
		if (isValidBase64(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function isValidBase64URL(data) {
	if (!base64url.test(data)) return false;
	const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
	return isValidBase64(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64url);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64url";
	inst._zod.check = (payload) => {
		if (isValidBase64URL(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
	def.pattern ?? (def.pattern = e164);
	$ZodStringFormat.init(inst, def);
});
function isValidJWT$1(token, algorithm = null) {
	try {
		const tokensParts = token.split(".");
		if (tokensParts.length !== 3) return false;
		const [header] = tokensParts;
		if (!header) return false;
		const parsedHeader = JSON.parse(atob(header));
		if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
		if (!parsedHeader.alg) return false;
		if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
		return true;
	} catch {
		return false;
	}
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidJWT$1(payload.value, def.alg)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = inst._zod.bag.pattern ?? number$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Number(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
		const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
		payload.issues.push({
			expected: "number",
			code: "invalid_type",
			input,
			inst,
			...received ? { received } : {}
		});
		return payload;
	};
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
	$ZodCheckNumberFormat.init(inst, def);
	$ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = boolean$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Boolean(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "boolean") return payload;
		payload.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = _null$2;
	inst._zod.values = new Set([null]);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (input === null) return payload;
		payload.issues.push({
			expected: "null",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
function handleArrayResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				expected: "array",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = Array(input.length);
		const proms = [];
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
			else handleArrayResult(result, payload, i);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
	const isPresent = key in input;
	if (result.issues.length) {
		if (isOptionalIn && isOptionalOut && !isPresent) return;
		final.issues.push(...prefixIssues(key, result.issues));
	}
	if (!isPresent && !isOptionalIn) {
		if (!result.issues.length) final.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [key]
		});
		return;
	}
	if (result.value === void 0) {
		if (isPresent) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		keys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const isOptionalIn = _catchall.optin === "optional";
	const isOptionalOut = _catchall.optout === "optional";
	for (const key in input) {
		if (key === "__proto__") continue;
		if (keySet.has(key)) continue;
		if (t === "never") {
			unrecognized.push(key);
			continue;
		}
		const r = _catchall.run({
			value: input[key],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
		else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
		const sh = def.shape;
		Object.defineProperty(def, "shape", { get: () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			return newSh;
		} });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazy(inst._zod, "propValues", () => {
		const shape = def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
			}
		}
		return propValues;
	});
	const isObject$1 = isObject;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = {};
		const proms = [];
		const shape = value.shape;
		for (const key of value.keys) {
			const el = shape[key];
			const isOptionalIn = el._zod.optin === "optional";
			const isOptionalOut = el._zod.optout === "optional";
			const r = el._zod.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut)));
			else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
	};
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const generateFastpass = (shape) => {
		const doc = new Doc([
			"shape",
			"payload",
			"ctx"
		]);
		const normalized = _normalized.value;
		const parseStr = (key) => {
			const k = esc(key);
			return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		};
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.keys) ids[key] = `key_${counter++}`;
		doc.write(`const newResult = {};`);
		for (const key of normalized.keys) {
			const id = ids[key];
			const k = esc(key);
			const schema = shape[key];
			const isOptionalIn = schema?._zod?.optin === "optional";
			const isOptionalOut = schema?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(key)};`);
			if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
			else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
			else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		const fn = doc.compile();
		return (payload, ctx) => fn(shape, payload, ctx);
	};
	let fastpass;
	const isObject$2 = isObject;
	const jit = !globalConfig.jitless;
	const fastEnabled = jit && allowsEval.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$2(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst);
		}
		return superParse(payload, ctx);
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	const nonaborted = results.filter((r) => !aborted(r));
	if (nonaborted.length === 1) {
		final.value = nonaborted[0].value;
		return nonaborted[0];
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "values", () => {
		if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazy(inst._zod, "pattern", () => {
		if (def.options.every((o) => o._zod.pattern)) {
			const patterns = def.options.map((o) => o._zod.pattern);
			return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const first = def.options.length === 1 ? def.options[0]._zod.run : null;
	inst._zod.parse = (payload, ctx) => {
		if (first) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else {
				if (result.issues.length === 0) return result;
				results.push(result);
			}
		}
		if (!async) return handleUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results) => {
			return handleUnionResults(results, payload, inst, ctx);
		});
	};
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
	def.inclusive = false;
	$ZodUnion.init(inst, def);
	const _super = inst._zod.parse;
	defineLazy(inst._zod, "propValues", () => {
		const propValues = {};
		for (const option of def.options) {
			const pv = option._zod.propValues;
			if (!pv || Object.keys(pv).length === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
			for (const [k, v] of Object.entries(pv)) {
				if (!propValues[k]) propValues[k] = /* @__PURE__ */ new Set();
				for (const val of v) propValues[k].add(val);
			}
		}
		return propValues;
	});
	const disc = cached(() => {
		const opts = def.options;
		const map = /* @__PURE__ */ new Map();
		for (const o of opts) {
			const values = o._zod.propValues?.[def.discriminator];
			if (!values || values.size === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
			for (const v of values) {
				if (map.has(v)) throw new Error(`Duplicate discriminator value "${String(v)}"`);
				map.set(v, o);
			}
		}
		return map;
	});
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isObject(input)) {
			payload.issues.push({
				code: "invalid_type",
				expected: "object",
				input,
				inst
			});
			return payload;
		}
		const opt = disc.value.get(input?.[def.discriminator]);
		if (opt) return opt._zod.run(payload, ctx);
		if (def.unionFallback || ctx.direction === "backward") return _super(payload, ctx);
		payload.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: def.discriminator,
			options: Array.from(disc.value.keys()),
			input,
			path: [def.discriminator],
			inst
		});
		return payload;
	};
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
			return handleIntersectionResults(payload, left, right);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues$1(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject(a) && isPlainObject(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues$1(a[key], b[key]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
			};
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues$1(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
			};
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	}
	return {
		valid: false,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(result, left, right) {
	const unrecKeys = /* @__PURE__ */ new Map();
	let unrecIssue;
	for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
		unrecIssue ?? (unrecIssue = iss);
		for (const k of iss.keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k).l = true;
		}
	} else result.issues.push(iss);
	for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
		if (!unrecKeys.has(k)) unrecKeys.set(k, {});
		unrecKeys.get(k).r = true;
	}
	else result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length && unrecIssue) result.issues.push({
		...unrecIssue,
		keys: bothKeys
	});
	if (aborted(result)) return result;
	const merged = mergeValues$1(left.value, right.value);
	if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	result.value = merged.data;
	return result;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isPlainObject(input)) {
			payload.issues.push({
				expected: "record",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		const values = def.keyType._zod.values;
		if (values) {
			payload.value = {};
			const recordKeys = /* @__PURE__ */ new Set();
			for (const key of values) if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
				recordKeys.add(typeof key === "number" ? key.toString() : key);
				const keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (keyResult.issues.length) {
					payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					continue;
				}
				const outKey = keyResult.value;
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[outKey] = result.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[outKey] = result.value;
				}
			}
			let unrecognized;
			for (const key in input) if (!recordKeys.has(key)) {
				unrecognized = unrecognized ?? [];
				unrecognized.push(key);
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized
			});
		} else {
			payload.value = {};
			for (const key of Reflect.ownKeys(input)) {
				if (key === "__proto__") continue;
				if (!Object.prototype.propertyIsEnumerable.call(input, key)) continue;
				let keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (typeof key === "string" && number$1.test(key) && keyResult.issues.length) {
					const retryResult = def.keyType._zod.run({
						value: Number(key),
						issues: []
					}, ctx);
					if (retryResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					if (retryResult.issues.length === 0) keyResult = retryResult;
				}
				if (keyResult.issues.length) {
					if (def.mode === "loose") payload.value[key] = input[key];
					else payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					continue;
				}
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result) => {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[keyResult.value] = result.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[keyResult.value] = result.value;
				}
			}
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (valuesSet.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
	$ZodType.init(inst, def);
	if (def.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
	const values = new Set(def.values);
	inst._zod.values = values;
	inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (values.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values: def.values,
			input,
			inst
		});
		return payload;
	};
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		const _out = def.transform(payload.value, payload);
		if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			payload.fallback = true;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		payload.fallback = true;
		return payload;
	};
});
function handleOptionalResult(result, input) {
	if (input === void 0 && (result.issues.length || result.fallback)) return {
		issues: [],
		value: void 0
	};
	return result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.optout = "optional";
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
	});
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (def.innerType._zod.optin === "optional") {
			const input = payload.value;
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
			return handleOptionalResult(result, input);
		}
		if (payload.value === void 0) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			/**
			* $ZodDefault returns the default value immediately in forward direction.
			* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => {
		const v = def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => {
			payload.value = result.value;
			if (result.issues.length) {
				payload.value = def.catchValue({
					...payload,
					error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
					input: payload.value
				});
				payload.issues = [];
				payload.fallback = true;
			}
			return payload;
		});
		payload.value = result.value;
		if (result.issues.length) {
			payload.value = def.catchValue({
				...payload,
				error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
				input: payload.value
			});
			payload.issues = [];
			payload.fallback = true;
		}
		return payload;
	};
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next, ctx) {
	if (left.issues.length) {
		left.aborted = true;
		return left;
	}
	return next._zod.run({
		value: left.value,
		issues: left.issues,
		fallback: left.fallback
	}, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
	defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	payload.value = Object.freeze(payload.value);
	return payload;
}
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "innerType", () => {
		const d = def;
		if (!d._cachedInner) d._cachedInner = def.getter();
		return d._cachedInner;
	});
	defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
	defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
	defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0);
	defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0);
	inst._zod.parse = (payload, ctx) => {
		return inst._zod.innerType._zod.run(payload, ctx);
	};
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}
//#endregion
//#region node_modules/zod/v4/core/registries.js
var _a$5;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema, ..._meta) {
		const meta = _meta[0];
		this._map.set(schema, meta);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema) {
		const meta = this._map.get(schema);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
		this._map.delete(schema);
		return this;
	}
	get(schema) {
		const p = schema._zod.parent;
		if (p) {
			const pm = { ...this.get(p) ?? {} };
			delete pm.id;
			const f = {
				...pm,
				...this._map.get(schema)
			};
			return Object.keys(f).length ? f : void 0;
		}
		return this._map.get(schema);
	}
	has(schema) {
		return this._map.has(schema);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a$5 = globalThis).__zod_globalRegistry ?? (_a$5.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
//#endregion
//#region node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function _string(Class, params) {
	return new Class({
		type: "string",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv4(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v4",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv6(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v6",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv7(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v7",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link _cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
/* @__NO_SIDE_EFFECTS__ */
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDateTime(Class, params) {
	return new Class({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: false,
		local: false,
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _number(Class, params) {
	return new Class({
		type: "number",
		checks: [],
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _int(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "safeint",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _boolean(Class, params) {
	return new Class({
		type: "boolean",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _null$1(Class, params) {
	return new Class({
		type: "null",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _any(Class) {
	return new Class({ type: "any" });
}
/* @__NO_SIDE_EFFECTS__ */
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lt(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lte(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gt(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gte(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _multipleOf(value, params) {
	return new $ZodCheckMultipleOf({
		check: "multiple_of",
		...normalizeParams(params),
		value
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _normalize(form) {
	return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
/* @__NO_SIDE_EFFECTS__ */
function _trim() {
	return /* @__PURE__ */ _overwrite((input) => input.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _slugify() {
	return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
/* @__NO_SIDE_EFFECTS__ */
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _custom(Class, fn, _params) {
	const norm = normalizeParams(_params);
	norm.abort ?? (norm.abort = true);
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...norm
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _superRefine(fn, params) {
	const ch = /* @__PURE__ */ _check((payload) => {
		payload.addIssue = (issue$2) => {
			if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
			else {
				const _issue = issue$2;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	}, params);
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function _check(fn, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn;
	return ch;
}
//#endregion
//#region node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
	let target = params?.target ?? "draft-2020-12";
	if (target === "draft-4") target = "draft-04";
	if (target === "draft-7") target = "draft-07";
	return {
		processors: params.processors ?? {},
		metadataRegistry: params?.metadata ?? globalRegistry,
		target,
		unrepresentable: params?.unrepresentable ?? "throw",
		override: params?.override ?? (() => {}),
		io: params?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		external: params?.external ?? void 0
	};
}
function process$1(schema, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a;
	const def = schema._zod.def;
	const seen = ctx.seen.get(schema);
	if (seen) {
		seen.count++;
		if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
		return seen.schema;
	}
	const result = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: _params.path
	};
	ctx.seen.set(schema, result);
	const overrideSchema = schema._zod.toJSONSchema?.();
	if (overrideSchema) result.schema = overrideSchema;
	else {
		const params = {
			..._params,
			schemaPath: [..._params.schemaPath, schema],
			path: _params.path
		};
		if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
		else {
			const _json = result.schema;
			const processor = ctx.processors[def.type];
			if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
			processor(schema, ctx, _json, params);
		}
		const parent = schema._zod.parent;
		if (parent) {
			if (!result.ref) result.ref = parent;
			process$1(parent, ctx, params);
			ctx.seen.get(parent).isParent = true;
		}
	}
	const meta = ctx.metadataRegistry.get(schema);
	if (meta) Object.assign(result.schema, meta);
	if (ctx.io === "input" && isTransforming(schema)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema).schema;
}
function extractDefs(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const idToSchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.entries()) {
		const id = ctx.metadataRegistry.get(entry[0])?.id;
		if (id) {
			const existing = idToSchema.get(id);
			if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			idToSchema.set(id, entry[0]);
		}
	}
	const makeURI = (entry) => {
		const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
		if (ctx.external) {
			const externalId = ctx.external.registry.get(entry[0])?.id;
			const uriGenerator = ctx.external.uri ?? ((id) => id);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
			};
		}
		if (entry[1] === root) return { ref: "#" };
		const defUriPrefix = `#/${defsSegment}/`;
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + defId
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema = seen.schema;
		for (const key in schema) delete schema[key];
		schema.$ref = ref;
	};
	if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (schema === entry[0]) {
			extractToDef(entry);
			continue;
		}
		if (ctx.external) {
			const ext = ctx.external.registry.get(entry[0])?.id;
			if (schema !== entry[0] && ext) {
				extractToDef(entry);
				continue;
			}
		}
		if (ctx.metadataRegistry.get(entry[0])?.id) {
			extractToDef(entry);
			continue;
		}
		if (seen.cycle) {
			extractToDef(entry);
			continue;
		}
		if (seen.count > 1) {
			if (ctx.reused === "ref") {
				extractToDef(entry);
				continue;
			}
		}
	}
}
function finalize(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema = seen.def ?? seen.schema;
		const _cached = { ...schema };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema.allOf = schema.allOf ?? [];
				schema.allOf.push(refSchema);
			} else Object.assign(schema, refSchema);
			Object.assign(schema, _cached);
			if (zodSchema._zod.parent === ref) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (!(key in _cached)) delete schema[key];
			}
			if (refSchema.$ref && refSeen.def) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
			}
		}
		const parent = zodSchema._zod.parent;
		if (parent && parent !== ref) {
			flattenRef(parent);
			const parentSeen = ctx.seen.get(parent);
			if (parentSeen?.schema.$ref) {
				schema.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key in schema) {
					if (key === "$ref" || key === "allOf") continue;
					if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema,
			path: seen.path ?? []
		});
	};
	for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
	const result = {};
	if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
	else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
	else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
	else if (ctx.target === "openapi-3.0") {}
	if (ctx.external?.uri) {
		const id = ctx.external.registry.get(schema)?.id;
		if (!id) throw new Error("Schema is missing an `id` property");
		result.$id = ctx.external.uri(id);
	}
	Object.assign(result, root.def ?? root.schema);
	const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
	if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
	const defs = ctx.external?.defs ?? {};
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) {
			if (seen.def.id === seen.defId) delete seen.def.id;
			defs[seen.defId] = seen.def;
		}
	}
	if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
	else result.definitions = defs;
	try {
		const finalized = JSON.parse(JSON.stringify(result));
		Object.defineProperty(finalized, "~standard", {
			value: {
				...schema["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
					output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
				}
			},
			enumerable: false,
			writable: false
		});
		return finalized;
	} catch (_err) {
		throw new Error("Error converting schema to JSON.");
	}
}
function isTransforming(_schema, _ctx) {
	const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
	if (ctx.seen.has(_schema)) return false;
	ctx.seen.add(_schema);
	const def = _schema._zod.def;
	if (def.type === "transform") return true;
	if (def.type === "array") return isTransforming(def.element, ctx);
	if (def.type === "set") return isTransforming(def.valueType, ctx);
	if (def.type === "lazy") return isTransforming(def.getter(), ctx);
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") {
		if (_schema._zod.traits.has("$ZodCodec")) return true;
		return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
	}
	if (def.type === "object") {
		for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
		return false;
	}
	if (def.type === "union") {
		for (const option of def.options) if (isTransforming(option, ctx)) return true;
		return false;
	}
	if (def.type === "tuple") {
		for (const item of def.items) if (isTransforming(item, ctx)) return true;
		if (def.rest && isTransforming(def.rest, ctx)) return true;
		return false;
	}
	return false;
}
/**
* Creates a toJSONSchema method for a schema instance.
* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
*/
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	process$1(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	process$1(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
//#endregion
//#region node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
var stringProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	json.type = "string";
	const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
	if (typeof minimum === "number") json.minLength = minimum;
	if (typeof maximum === "number") json.maxLength = maximum;
	if (format) {
		json.format = formatMap[format] ?? format;
		if (json.format === "") delete json.format;
		if (format === "time") delete json.format;
	}
	if (contentEncoding) json.contentEncoding = contentEncoding;
	if (patterns && patterns.size > 0) {
		const regexes = [...patterns];
		if (regexes.length === 1) json.pattern = regexes[0].source;
		else if (regexes.length > 1) json.allOf = [...regexes.map((regex) => ({
			...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: regex.source
		}))];
	}
};
var numberProcessor = (schema, ctx, _json, _params) => {
	const json = _json;
	const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
	if (typeof format === "string" && format.includes("int")) json.type = "integer";
	else json.type = "number";
	const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
	const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
	const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
	if (exMin) if (legacy) {
		json.minimum = exclusiveMinimum;
		json.exclusiveMinimum = true;
	} else json.exclusiveMinimum = exclusiveMinimum;
	else if (typeof minimum === "number") json.minimum = minimum;
	if (exMax) if (legacy) {
		json.maximum = exclusiveMaximum;
		json.exclusiveMaximum = true;
	} else json.exclusiveMaximum = exclusiveMaximum;
	else if (typeof maximum === "number") json.maximum = maximum;
	if (typeof multipleOf === "number") json.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
var bigintProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
};
var symbolProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
};
var nullProcessor = (_schema, ctx, json, _params) => {
	if (ctx.target === "openapi-3.0") {
		json.type = "string";
		json.nullable = true;
		json.enum = [null];
	} else json.type = "null";
};
var undefinedProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
};
var voidProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
};
var neverProcessor = (_schema, _ctx, json, _params) => {
	json.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {};
var unknownProcessor = (_schema, _ctx, _json, _params) => {};
var dateProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
};
var enumProcessor = (schema, _ctx, json, _params) => {
	const def = schema._zod.def;
	const values = getEnumValues(def.entries);
	if (values.every((v) => typeof v === "number")) json.type = "number";
	if (values.every((v) => typeof v === "string")) json.type = "string";
	json.enum = values;
};
var literalProcessor = (schema, ctx, json, _params) => {
	const def = schema._zod.def;
	const vals = [];
	for (const val of def.values) if (val === void 0) {
		if (ctx.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof val === "bigint") if (ctx.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
	else vals.push(Number(val));
	else vals.push(val);
	if (vals.length === 0) {} else if (vals.length === 1) {
		const val = vals[0];
		json.type = val === null ? "null" : typeof val;
		if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") json.enum = [val];
		else json.const = val;
	} else {
		if (vals.every((v) => typeof v === "number")) json.type = "number";
		if (vals.every((v) => typeof v === "string")) json.type = "string";
		if (vals.every((v) => typeof v === "boolean")) json.type = "boolean";
		if (vals.every((v) => v === null)) json.type = "null";
		json.enum = vals;
	}
};
var nanProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
};
var templateLiteralProcessor = (schema, _ctx, json, _params) => {
	const _json = json;
	const pattern = schema._zod.pattern;
	if (!pattern) throw new Error("Pattern not found in template literal");
	_json.type = "string";
	_json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json, _params) => {
	const _json = json;
	const file = {
		type: "string",
		format: "binary",
		contentEncoding: "binary"
	};
	const { minimum, maximum, mime } = schema._zod.bag;
	if (minimum !== void 0) file.minLength = minimum;
	if (maximum !== void 0) file.maxLength = maximum;
	if (mime) if (mime.length === 1) {
		file.contentMediaType = mime[0];
		Object.assign(_json, file);
	} else {
		Object.assign(_json, file);
		_json.anyOf = mime.map((m) => ({ contentMediaType: m }));
	}
	else Object.assign(_json, file);
};
var successProcessor = (_schema, _ctx, json, _params) => {
	json.type = "boolean";
};
var customProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
};
var functionProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
};
var transformProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
};
var mapProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
};
var setProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
	json.type = "array";
	json.items = process$1(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
var objectProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	json.properties = {};
	const shape = def.shape;
	for (const key in shape) json.properties[key] = process$1(shape[key], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key
		]
	});
	const allKeys = new Set(Object.keys(shape));
	const requiredKeys = new Set([...allKeys].filter((key) => {
		const v = def.shape[key]._zod;
		if (ctx.io === "input") return v.optin === void 0;
		else return v.optout === void 0;
	}));
	if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
	if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json.additionalProperties = false;
	} else if (def.catchall) json.additionalProperties = process$1(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
var unionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i) => process$1(x, ctx, {
		...params,
		path: [
			...params.path,
			isExclusive ? "oneOf" : "anyOf",
			i
		]
	}));
	if (isExclusive) json.oneOf = options;
	else json.anyOf = options;
};
var intersectionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const a = process$1(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = process$1(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
	json.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
};
var tupleProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "array";
	const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
	const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
	const prefixItems = def.items.map((x, i) => process$1(x, ctx, {
		...params,
		path: [
			...params.path,
			prefixPath,
			i
		]
	}));
	const rest = def.rest ? process$1(def.rest, ctx, {
		...params,
		path: [
			...params.path,
			restPath,
			...ctx.target === "openapi-3.0" ? [def.items.length] : []
		]
	}) : null;
	if (ctx.target === "draft-2020-12") {
		json.prefixItems = prefixItems;
		if (rest) json.items = rest;
	} else if (ctx.target === "openapi-3.0") {
		json.items = { anyOf: prefixItems };
		if (rest) json.items.anyOf.push(rest);
		json.minItems = prefixItems.length;
		if (!rest) json.maxItems = prefixItems.length;
	} else {
		json.items = prefixItems;
		if (rest) json.additionalItems = rest;
	}
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	json.type = "object";
	const keyType = def.keyType;
	const patterns = keyType._zod.bag?.patterns;
	if (def.mode === "loose" && patterns && patterns.size > 0) {
		const valueSchema = process$1(def.valueType, ctx, {
			...params,
			path: [
				...params.path,
				"patternProperties",
				"*"
			]
		});
		json.patternProperties = {};
		for (const pattern of patterns) json.patternProperties[pattern.source] = valueSchema;
	} else {
		if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") json.propertyNames = process$1(def.keyType, ctx, {
			...params,
			path: [...params.path, "propertyNames"]
		});
		json.additionalProperties = process$1(def.valueType, ctx, {
			...params,
			path: [...params.path, "additionalProperties"]
		});
	}
	const keyValues = keyType._zod.values;
	if (keyValues) {
		const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
		if (validKeyValues.length > 0) json.required = validKeyValues;
	}
};
var nullableProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const inner = process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json.nullable = true;
	} else json.anyOf = [inner, { type: "null" }];
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	if (ctx.io === "input") json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		throw new Error("Dynamic catch values are not supported in JSON Schema");
	}
	json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	const inIsTransform = def.in._zod.traits.has("$ZodTransform");
	const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
	process$1(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
	const innerType = schema._zod.innerType;
	process$1(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
var allProcessors = {
	string: stringProcessor,
	number: numberProcessor,
	boolean: booleanProcessor,
	bigint: bigintProcessor,
	symbol: symbolProcessor,
	null: nullProcessor,
	undefined: undefinedProcessor,
	void: voidProcessor,
	never: neverProcessor,
	any: anyProcessor,
	unknown: unknownProcessor,
	date: dateProcessor,
	enum: enumProcessor,
	literal: literalProcessor,
	nan: nanProcessor,
	template_literal: templateLiteralProcessor,
	file: fileProcessor,
	success: successProcessor,
	custom: customProcessor,
	function: functionProcessor,
	transform: transformProcessor,
	map: mapProcessor,
	set: setProcessor,
	array: arrayProcessor,
	object: objectProcessor,
	union: unionProcessor,
	intersection: intersectionProcessor,
	tuple: tupleProcessor,
	record: recordProcessor,
	nullable: nullableProcessor,
	nonoptional: nonoptionalProcessor,
	default: defaultProcessor,
	prefault: prefaultProcessor,
	catch: catchProcessor,
	pipe: pipeProcessor,
	readonly: readonlyProcessor,
	promise: promiseProcessor,
	optional: optionalProcessor,
	lazy: lazyProcessor
};
function toJSONSchema(input, params) {
	if ("_idmap" in input) {
		const registry = input;
		const ctx = initializeContext({
			...params,
			processors: allProcessors
		});
		const defs = {};
		for (const entry of registry._idmap.entries()) {
			const [_, schema] = entry;
			process$1(schema, ctx);
		}
		const schemas = {};
		ctx.external = {
			registry,
			uri: params?.uri,
			defs
		};
		for (const entry of registry._idmap.entries()) {
			const [key, schema] = entry;
			extractDefs(ctx, schema);
			schemas[key] = finalize(ctx, schema);
		}
		if (Object.keys(defs).length > 0) schemas.__shared = { [ctx.target === "draft-2020-12" ? "$defs" : "definitions"]: defs };
		return { schemas };
	}
	const ctx = initializeContext({
		...params,
		processors: allProcessors
	});
	process$1(input, ctx);
	extractDefs(ctx, input);
	return finalize(ctx, input);
}
//#endregion
//#region node_modules/zod/v4/classic/iso.js
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function datetime(params) {
	return /* @__PURE__ */ _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function date(params) {
	return /* @__PURE__ */ _isoDate(ZodISODate, params);
}
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function time(params) {
	return /* @__PURE__ */ _isoTime(ZodISOTime, params);
}
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function duration(params) {
	return /* @__PURE__ */ _isoDuration(ZodISODuration, params);
}
//#endregion
//#region node_modules/zod/v4/classic/errors.js
var initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	Object.defineProperties(inst, {
		format: { value: (mapper) => formatError(inst, mapper) },
		flatten: { value: (mapper) => flattenError(inst, mapper) },
		addIssue: { value: (issue) => {
			inst.issues.push(issue);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		addIssues: { value: (issues) => {
			inst.issues.push(...issues);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		isEmpty: { get() {
			return inst.issues.length === 0;
		} }
	});
};
var ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer, { Parent: Error });
//#endregion
//#region node_modules/zod/v4/classic/parse.js
var parse = /* @__PURE__ */ _parse$2(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);
//#endregion
//#region node_modules/zod/v4/classic/schemas.js
var _installedGroups = /* @__PURE__ */ new WeakMap();
function _installLazyMethods(inst, group, methods) {
	const proto = Object.getPrototypeOf(inst);
	let installed = _installedGroups.get(proto);
	if (!installed) {
		installed = /* @__PURE__ */ new Set();
		_installedGroups.set(proto, installed);
	}
	if (installed.has(group)) return;
	installed.add(group);
	for (const key in methods) {
		const fn = methods[key];
		Object.defineProperty(proto, key, {
			configurable: true,
			enumerable: false,
			get() {
				const bound = fn.bind(this);
				Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: bound
				});
				return bound;
			},
			set(v) {
				Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: v
				});
			}
		});
	}
}
var ZodType$1 = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
	$ZodType.init(inst, def);
	Object.assign(inst["~standard"], { jsonSchema: {
		input: createStandardJSONSchemaMethod(inst, "input"),
		output: createStandardJSONSchemaMethod(inst, "output")
	} });
	inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
	inst.def = def;
	inst.type = def.type;
	Object.defineProperty(inst, "_def", { value: def });
	inst.parse = (data, params) => parse(inst, data, params, { callee: inst.parse });
	inst.safeParse = (data, params) => safeParse(inst, data, params);
	inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
	inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
	inst.spa = inst.safeParseAsync;
	inst.encode = (data, params) => encode(inst, data, params);
	inst.decode = (data, params) => decode(inst, data, params);
	inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
	inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
	inst.safeEncode = (data, params) => safeEncode(inst, data, params);
	inst.safeDecode = (data, params) => safeDecode(inst, data, params);
	inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
	inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
	_installLazyMethods(inst, "ZodType", {
		check(...chks) {
			const def = this.def;
			return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
				check: ch,
				def: { check: "custom" },
				onattach: []
			} } : ch)] }), { parent: true });
		},
		with(...chks) {
			return this.check(...chks);
		},
		clone(def, params) {
			return clone(this, def, params);
		},
		brand() {
			return this;
		},
		register(reg, meta) {
			reg.add(this, meta);
			return this;
		},
		refine(check, params) {
			return this.check(refine(check, params));
		},
		superRefine(refinement, params) {
			return this.check(superRefine(refinement, params));
		},
		overwrite(fn) {
			return this.check(/* @__PURE__ */ _overwrite(fn));
		},
		optional() {
			return optional(this);
		},
		exactOptional() {
			return exactOptional(this);
		},
		nullable() {
			return nullable(this);
		},
		nullish() {
			return optional(nullable(this));
		},
		nonoptional(params) {
			return nonoptional(this, params);
		},
		array() {
			return array$1(this);
		},
		or(arg) {
			return union([this, arg]);
		},
		and(arg) {
			return intersection(this, arg);
		},
		transform(tx) {
			return pipe(this, transform(tx));
		},
		default(d) {
			return _default(this, d);
		},
		prefault(d) {
			return prefault(this, d);
		},
		catch(params) {
			return _catch(this, params);
		},
		pipe(target) {
			return pipe(this, target);
		},
		readonly() {
			return readonly(this);
		},
		describe(description) {
			const cl = this.clone();
			globalRegistry.add(cl, { description });
			return cl;
		},
		meta(...args) {
			if (args.length === 0) return globalRegistry.get(this);
			const cl = this.clone();
			globalRegistry.add(cl, args[0]);
			return cl;
		},
		isOptional() {
			return this.safeParse(void 0).success;
		},
		isNullable() {
			return this.safeParse(null).success;
		},
		apply(fn) {
			return fn(this);
		}
	});
	Object.defineProperty(inst, "description", {
		get() {
			return globalRegistry.get(inst)?.description;
		},
		configurable: true
	});
	return inst;
});
/** @internal */
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
	const bag = inst._zod.bag;
	inst.format = bag.format ?? null;
	inst.minLength = bag.minimum ?? null;
	inst.maxLength = bag.maximum ?? null;
	_installLazyMethods(inst, "_ZodString", {
		regex(...args) {
			return this.check(/* @__PURE__ */ _regex(...args));
		},
		includes(...args) {
			return this.check(/* @__PURE__ */ _includes(...args));
		},
		startsWith(...args) {
			return this.check(/* @__PURE__ */ _startsWith(...args));
		},
		endsWith(...args) {
			return this.check(/* @__PURE__ */ _endsWith(...args));
		},
		min(...args) {
			return this.check(/* @__PURE__ */ _minLength(...args));
		},
		max(...args) {
			return this.check(/* @__PURE__ */ _maxLength(...args));
		},
		length(...args) {
			return this.check(/* @__PURE__ */ _length(...args));
		},
		nonempty(...args) {
			return this.check(/* @__PURE__ */ _minLength(1, ...args));
		},
		lowercase(params) {
			return this.check(/* @__PURE__ */ _lowercase(params));
		},
		uppercase(params) {
			return this.check(/* @__PURE__ */ _uppercase(params));
		},
		trim() {
			return this.check(/* @__PURE__ */ _trim());
		},
		normalize(...args) {
			return this.check(/* @__PURE__ */ _normalize(...args));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ _toLowerCase());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ _toUpperCase());
		},
		slugify() {
			return this.check(/* @__PURE__ */ _slugify());
		}
	});
});
var ZodString$1 = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
	inst.email = (params) => inst.check(/* @__PURE__ */ _email(ZodEmail, params));
	inst.url = (params) => inst.check(/* @__PURE__ */ _url(ZodURL, params));
	inst.jwt = (params) => inst.check(/* @__PURE__ */ _jwt(ZodJWT, params));
	inst.emoji = (params) => inst.check(/* @__PURE__ */ _emoji(ZodEmoji, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.uuid = (params) => inst.check(/* @__PURE__ */ _uuid(ZodUUID, params));
	inst.uuidv4 = (params) => inst.check(/* @__PURE__ */ _uuidv4(ZodUUID, params));
	inst.uuidv6 = (params) => inst.check(/* @__PURE__ */ _uuidv6(ZodUUID, params));
	inst.uuidv7 = (params) => inst.check(/* @__PURE__ */ _uuidv7(ZodUUID, params));
	inst.nanoid = (params) => inst.check(/* @__PURE__ */ _nanoid(ZodNanoID, params));
	inst.guid = (params) => inst.check(/* @__PURE__ */ _guid(ZodGUID, params));
	inst.cuid = (params) => inst.check(/* @__PURE__ */ _cuid(ZodCUID, params));
	inst.cuid2 = (params) => inst.check(/* @__PURE__ */ _cuid2(ZodCUID2, params));
	inst.ulid = (params) => inst.check(/* @__PURE__ */ _ulid(ZodULID, params));
	inst.base64 = (params) => inst.check(/* @__PURE__ */ _base64(ZodBase64, params));
	inst.base64url = (params) => inst.check(/* @__PURE__ */ _base64url(ZodBase64URL, params));
	inst.xid = (params) => inst.check(/* @__PURE__ */ _xid(ZodXID, params));
	inst.ksuid = (params) => inst.check(/* @__PURE__ */ _ksuid(ZodKSUID, params));
	inst.ipv4 = (params) => inst.check(/* @__PURE__ */ _ipv4(ZodIPv4, params));
	inst.ipv6 = (params) => inst.check(/* @__PURE__ */ _ipv6(ZodIPv6, params));
	inst.cidrv4 = (params) => inst.check(/* @__PURE__ */ _cidrv4(ZodCIDRv4, params));
	inst.cidrv6 = (params) => inst.check(/* @__PURE__ */ _cidrv6(ZodCIDRv6, params));
	inst.e164 = (params) => inst.check(/* @__PURE__ */ _e164(ZodE164, params));
	inst.datetime = (params) => inst.check(datetime(params));
	inst.date = (params) => inst.check(date(params));
	inst.time = (params) => inst.check(time(params));
	inst.duration = (params) => inst.check(duration(params));
});
function string(params) {
	return /* @__PURE__ */ _string(ZodString$1, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
var ZodNumber$1 = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
	$ZodNumber.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
	_installLazyMethods(inst, "ZodNumber", {
		gt(value, params) {
			return this.check(/* @__PURE__ */ _gt(value, params));
		},
		gte(value, params) {
			return this.check(/* @__PURE__ */ _gte(value, params));
		},
		min(value, params) {
			return this.check(/* @__PURE__ */ _gte(value, params));
		},
		lt(value, params) {
			return this.check(/* @__PURE__ */ _lt(value, params));
		},
		lte(value, params) {
			return this.check(/* @__PURE__ */ _lte(value, params));
		},
		max(value, params) {
			return this.check(/* @__PURE__ */ _lte(value, params));
		},
		int(params) {
			return this.check(int(params));
		},
		safe(params) {
			return this.check(int(params));
		},
		positive(params) {
			return this.check(/* @__PURE__ */ _gt(0, params));
		},
		nonnegative(params) {
			return this.check(/* @__PURE__ */ _gte(0, params));
		},
		negative(params) {
			return this.check(/* @__PURE__ */ _lt(0, params));
		},
		nonpositive(params) {
			return this.check(/* @__PURE__ */ _lte(0, params));
		},
		multipleOf(value, params) {
			return this.check(/* @__PURE__ */ _multipleOf(value, params));
		},
		step(value, params) {
			return this.check(/* @__PURE__ */ _multipleOf(value, params));
		},
		finite() {
			return this;
		}
	});
	const bag = inst._zod.bag;
	inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
	inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
	inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
	inst.isFinite = true;
	inst.format = bag.format ?? null;
});
function number(params) {
	return /* @__PURE__ */ _number(ZodNumber$1, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
	$ZodNumberFormat.init(inst, def);
	ZodNumber$1.init(inst, def);
});
function int(params) {
	return /* @__PURE__ */ _int(ZodNumberFormat, params);
}
var ZodBoolean$1 = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean(params) {
	return /* @__PURE__ */ _boolean(ZodBoolean$1, params);
}
var ZodNull$1 = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
	$ZodNull.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullProcessor(inst, ctx, json, params);
});
function _null(params) {
	return /* @__PURE__ */ _null$1(ZodNull$1, params);
}
var ZodAny$1 = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
	$ZodAny.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => void 0;
});
function any() {
	return /* @__PURE__ */ _any(ZodAny$1);
}
var ZodUnknown$1 = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => void 0;
});
function unknown() {
	return /* @__PURE__ */ _unknown(ZodUnknown$1);
}
var ZodNever$1 = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
	return /* @__PURE__ */ _never(ZodNever$1, params);
}
var ZodArray$1 = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
	$ZodArray.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
	inst.element = def.element;
	_installLazyMethods(inst, "ZodArray", {
		min(n, params) {
			return this.check(/* @__PURE__ */ _minLength(n, params));
		},
		nonempty(params) {
			return this.check(/* @__PURE__ */ _minLength(1, params));
		},
		max(n, params) {
			return this.check(/* @__PURE__ */ _maxLength(n, params));
		},
		length(n, params) {
			return this.check(/* @__PURE__ */ _length(n, params));
		},
		unwrap() {
			return this.element;
		}
	});
});
function array$1(element, params) {
	return /* @__PURE__ */ _array(ZodArray$1, element, params);
}
var ZodObject$1 = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
	$ZodObjectJIT.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
	defineLazy(inst, "shape", () => {
		return def.shape;
	});
	_installLazyMethods(inst, "ZodObject", {
		keyof() {
			return _enum(Object.keys(this._zod.def.shape));
		},
		catchall(catchall) {
			return this.clone({
				...this._zod.def,
				catchall
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: unknown()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: unknown()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: never()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(incoming) {
			return extend(this, incoming);
		},
		safeExtend(incoming) {
			return safeExtend(this, incoming);
		},
		merge(other) {
			return merge(this, other);
		},
		pick(mask) {
			return pick(this, mask);
		},
		omit(mask) {
			return omit(this, mask);
		},
		partial(...args) {
			return partial(ZodOptional$1, this, args[0]);
		},
		required(...args) {
			return required(ZodNonOptional, this, args[0]);
		}
	});
});
function object$1(shape, params) {
	return new ZodObject$1({
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	});
}
var ZodUnion$1 = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
	inst.options = def.options;
});
function union(options, params) {
	return new ZodUnion$1({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
var ZodDiscriminatedUnion$1 = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
	ZodUnion$1.init(inst, def);
	$ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
	return new ZodDiscriminatedUnion$1({
		type: "union",
		options,
		discriminator,
		...normalizeParams(params)
	});
}
var ZodIntersection$1 = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
	return new ZodIntersection$1({
		type: "intersection",
		left,
		right
	});
}
var ZodRecord$1 = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
	$ZodRecord.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
	if (!valueType || !valueType._zod) return new ZodRecord$1({
		type: "record",
		keyType: string(),
		valueType: keyType,
		...normalizeParams(valueType)
	});
	return new ZodRecord$1({
		type: "record",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
var ZodEnum$1 = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
	inst.enum = def.entries;
	inst.options = Object.values(def.entries);
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum$1({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum$1({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum(values, params) {
	return new ZodEnum$1({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
var ZodLiteral$1 = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
	$ZodLiteral.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
	inst.values = new Set(def.values);
	Object.defineProperty(inst, "value", { get() {
		if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return def.values[0];
	} });
});
function literal(value, params) {
	return new ZodLiteral$1({
		type: "literal",
		values: Array.isArray(value) ? value : [value],
		...normalizeParams(params)
	});
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
	$ZodTransform.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
	inst._zod.parse = (payload, _ctx) => {
		if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output) => {
			payload.value = output;
			payload.fallback = true;
			return payload;
		});
		payload.value = output;
		payload.fallback = true;
		return payload;
	};
});
function transform(fn) {
	return new ZodTransform({
		type: "transform",
		transform: fn
	});
}
var ZodOptional$1 = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
	return new ZodOptional$1({
		type: "optional",
		innerType
	});
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
	$ZodExactOptional.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
	return new ZodExactOptional({
		type: "optional",
		innerType
	});
}
var ZodNullable$1 = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable$1({
		type: "nullable",
		innerType
	});
}
var ZodDefault$1 = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault$1({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
var ZodCatch$1 = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch$1({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
	});
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
	inst.in = def.in;
	inst.out = def.out;
});
function pipe(in_, out) {
	return new ZodPipe({
		type: "pipe",
		in: in_,
		out
	});
}
var ZodReadonly$1 = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
	return new ZodReadonly$1({
		type: "readonly",
		innerType
	});
}
var ZodLazy$1 = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
	$ZodLazy.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => lazyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
	return new ZodLazy$1({
		type: "lazy",
		getter
	});
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType$1.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function custom(fn, _params) {
	return /* @__PURE__ */ _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
	return /* @__PURE__ */ _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
	return /* @__PURE__ */ _superRefine(fn, params);
}
function _instanceof(cls, params = {}) {
	const inst = new ZodCustom({
		type: "custom",
		check: "custom",
		fn: (data) => data instanceof cls,
		abort: true,
		...normalizeParams(params)
	});
	inst._zod.bag.Class = cls;
	inst._zod.check = (payload) => {
		if (!(payload.value instanceof cls)) payload.issues.push({
			code: "invalid_type",
			expected: cls.name,
			input: payload.value,
			inst,
			path: [...inst._zod.def.path ?? []]
		});
	};
	return inst;
}
//#endregion
//#region node_modules/zod/v3/helpers/util.js
var util;
(function(util) {
	util.assertEqual = (_) => {};
	function assertIs(_arg) {}
	util.assertIs = assertIs;
	function assertNever(_x) {
		throw new Error();
	}
	util.assertNever = assertNever;
	util.arrayToEnum = (items) => {
		const obj = {};
		for (const item of items) obj[item] = item;
		return obj;
	};
	util.getValidEnumValues = (obj) => {
		const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
		const filtered = {};
		for (const k of validKeys) filtered[k] = obj[k];
		return util.objectValues(filtered);
	};
	util.objectValues = (obj) => {
		return util.objectKeys(obj).map(function(e) {
			return obj[e];
		});
	};
	util.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
		const keys = [];
		for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
		return keys;
	};
	util.find = (arr, checker) => {
		for (const item of arr) if (checker(item)) return item;
	};
	util.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
	function joinValues(array, separator = " | ") {
		return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
	}
	util.joinValues = joinValues;
	util.jsonStringifyReplacer = (_, value) => {
		if (typeof value === "bigint") return value.toString();
		return value;
	};
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
	objectUtil.mergeShapes = (first, second) => {
		return {
			...first,
			...second
		};
	};
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]);
var getParsedType = (data) => {
	switch (typeof data) {
		case "undefined": return ZodParsedType.undefined;
		case "string": return ZodParsedType.string;
		case "number": return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
		case "boolean": return ZodParsedType.boolean;
		case "function": return ZodParsedType.function;
		case "bigint": return ZodParsedType.bigint;
		case "symbol": return ZodParsedType.symbol;
		case "object":
			if (Array.isArray(data)) return ZodParsedType.array;
			if (data === null) return ZodParsedType.null;
			if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
			if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
			if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
			if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
			return ZodParsedType.object;
		default: return ZodParsedType.unknown;
	}
};
//#endregion
//#region node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]);
var ZodError = class ZodError extends Error {
	get errors() {
		return this.issues;
	}
	constructor(issues) {
		super();
		this.issues = [];
		this.addIssue = (sub) => {
			this.issues = [...this.issues, sub];
		};
		this.addIssues = (subs = []) => {
			this.issues = [...this.issues, ...subs];
		};
		const actualProto = new.target.prototype;
		if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
		else this.__proto__ = actualProto;
		this.name = "ZodError";
		this.issues = issues;
	}
	format(_mapper) {
		const mapper = _mapper || function(issue) {
			return issue.message;
		};
		const fieldErrors = { _errors: [] };
		const processError = (error) => {
			for (const issue of error.issues) if (issue.code === "invalid_union") issue.unionErrors.map(processError);
			else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
			else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
			else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < issue.path.length) {
					const el = issue.path[i];
					if (!(i === issue.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue));
					}
					curr = curr[el];
					i++;
				}
			}
		};
		processError(this);
		return fieldErrors;
	}
	static assert(value) {
		if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(mapper = (issue) => issue.message) {
		const fieldErrors = Object.create(null);
		const formErrors = [];
		for (const sub of this.issues) if (sub.path.length > 0) {
			const firstEl = sub.path[0];
			fieldErrors[firstEl] = fieldErrors[firstEl] || [];
			fieldErrors[firstEl].push(mapper(sub));
		} else formErrors.push(mapper(sub));
		return {
			formErrors,
			fieldErrors
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
ZodError.create = (issues) => {
	return new ZodError(issues);
};
//#endregion
//#region node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
	let message;
	switch (issue.code) {
		case ZodIssueCode.invalid_type:
			if (issue.received === ZodParsedType.undefined) message = "Required";
			else message = `Expected ${issue.expected}, received ${issue.received}`;
			break;
		case ZodIssueCode.invalid_literal:
			message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
			break;
		case ZodIssueCode.unrecognized_keys:
			message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
			break;
		case ZodIssueCode.invalid_union:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_union_discriminator:
			message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
			break;
		case ZodIssueCode.invalid_enum_value:
			message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
			break;
		case ZodIssueCode.invalid_arguments:
			message = `Invalid function arguments`;
			break;
		case ZodIssueCode.invalid_return_type:
			message = `Invalid function return type`;
			break;
		case ZodIssueCode.invalid_date:
			message = `Invalid date`;
			break;
		case ZodIssueCode.invalid_string:
			if (typeof issue.validation === "object") if ("includes" in issue.validation) {
				message = `Invalid input: must include "${issue.validation.includes}"`;
				if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
			} else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
			else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
			else util.assertNever(issue.validation);
			else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
			else message = "Invalid";
			break;
		case ZodIssueCode.too_small:
			if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
			else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
			else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.too_big:
			if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
			else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
			else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.custom:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_intersection_types:
			message = `Intersection results could not be merged`;
			break;
		case ZodIssueCode.not_multiple_of:
			message = `Number must be a multiple of ${issue.multipleOf}`;
			break;
		case ZodIssueCode.not_finite:
			message = "Number must be finite";
			break;
		default:
			message = _ctx.defaultError;
			util.assertNever(issue);
	}
	return { message };
};
//#endregion
//#region node_modules/zod/v3/errors.js
var overrideErrorMap = errorMap;
function getErrorMap() {
	return overrideErrorMap;
}
//#endregion
//#region node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
	const { data, path, errorMaps, issueData } = params;
	const fullPath = [...path, ...issueData.path || []];
	const fullIssue = {
		...issueData,
		path: fullPath
	};
	if (issueData.message !== void 0) return {
		...issueData,
		path: fullPath,
		message: issueData.message
	};
	let errorMessage = "";
	const maps = errorMaps.filter((m) => !!m).slice().reverse();
	for (const map of maps) errorMessage = map(fullIssue, {
		data,
		defaultError: errorMessage
	}).message;
	return {
		...issueData,
		path: fullPath,
		message: errorMessage
	};
};
function addIssueToContext(ctx, issueData) {
	const overrideMap = getErrorMap();
	const issue = makeIssue({
		issueData,
		data: ctx.data,
		path: ctx.path,
		errorMaps: [
			ctx.common.contextualErrorMap,
			ctx.schemaErrorMap,
			overrideMap,
			overrideMap === errorMap ? void 0 : errorMap
		].filter((x) => !!x)
	});
	ctx.common.issues.push(issue);
}
var ParseStatus = class ParseStatus {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		if (this.value === "valid") this.value = "dirty";
	}
	abort() {
		if (this.value !== "aborted") this.value = "aborted";
	}
	static mergeArray(status, results) {
		const arrayValue = [];
		for (const s of results) {
			if (s.status === "aborted") return INVALID;
			if (s.status === "dirty") status.dirty();
			arrayValue.push(s.value);
		}
		return {
			status: status.value,
			value: arrayValue
		};
	}
	static async mergeObjectAsync(status, pairs) {
		const syncPairs = [];
		for (const pair of pairs) {
			const key = await pair.key;
			const value = await pair.value;
			syncPairs.push({
				key,
				value
			});
		}
		return ParseStatus.mergeObjectSync(status, syncPairs);
	}
	static mergeObjectSync(status, pairs) {
		const finalObject = {};
		for (const pair of pairs) {
			const { key, value } = pair;
			if (key.status === "aborted") return INVALID;
			if (value.status === "aborted") return INVALID;
			if (key.status === "dirty") status.dirty();
			if (value.status === "dirty") status.dirty();
			if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
		}
		return {
			status: status.value,
			value: finalObject
		};
	}
};
var INVALID = Object.freeze({ status: "aborted" });
var DIRTY = (value) => ({
	status: "dirty",
	value
});
var OK = (value) => ({
	status: "valid",
	value
});
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
//#endregion
//#region node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil) {
	errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
	errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
//#endregion
//#region node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
	constructor(parent, value, path, key) {
		this._cachedPath = [];
		this.parent = parent;
		this.data = value;
		this._path = path;
		this._key = key;
	}
	get path() {
		if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
		else this._cachedPath.push(...this._path, this._key);
		return this._cachedPath;
	}
};
var handleResult = (ctx, result) => {
	if (isValid(result)) return {
		success: true,
		data: result.value
	};
	else {
		if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
		return {
			success: false,
			get error() {
				if (this._error) return this._error;
				const error = new ZodError(ctx.common.issues);
				this._error = error;
				return this._error;
			}
		};
	}
};
function processCreateParams(params) {
	if (!params) return {};
	const { errorMap, invalid_type_error, required_error, description } = params;
	if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
	if (errorMap) return {
		errorMap,
		description
	};
	const customMap = (iss, ctx) => {
		const { message } = params;
		if (iss.code === "invalid_enum_value") return { message: message ?? ctx.defaultError };
		if (typeof ctx.data === "undefined") return { message: message ?? required_error ?? ctx.defaultError };
		if (iss.code !== "invalid_type") return { message: ctx.defaultError };
		return { message: message ?? invalid_type_error ?? ctx.defaultError };
	};
	return {
		errorMap: customMap,
		description
	};
}
var ZodType = class {
	get description() {
		return this._def.description;
	}
	_getType(input) {
		return getParsedType(input.data);
	}
	_getOrReturnCtx(input, ctx) {
		return ctx || {
			common: input.parent.common,
			data: input.data,
			parsedType: getParsedType(input.data),
			schemaErrorMap: this._def.errorMap,
			path: input.path,
			parent: input.parent
		};
	}
	_processInputParams(input) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent
			}
		};
	}
	_parseSync(input) {
		const result = this._parse(input);
		if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
		return result;
	}
	_parseAsync(input) {
		const result = this._parse(input);
		return Promise.resolve(result);
	}
	parse(data, params) {
		const result = this.safeParse(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	safeParse(data, params) {
		const ctx = {
			common: {
				issues: [],
				async: params?.async ?? false,
				contextualErrorMap: params?.errorMap
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		return handleResult(ctx, this._parseSync({
			data,
			path: ctx.path,
			parent: ctx
		}));
	}
	"~validate"(data) {
		const ctx = {
			common: {
				issues: [],
				async: !!this["~standard"].async
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		if (!this["~standard"].async) try {
			const result = this._parseSync({
				data,
				path: [],
				parent: ctx
			});
			return isValid(result) ? { value: result.value } : { issues: ctx.common.issues };
		} catch (err) {
			if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
			ctx.common = {
				issues: [],
				async: true
			};
		}
		return this._parseAsync({
			data,
			path: [],
			parent: ctx
		}).then((result) => isValid(result) ? { value: result.value } : { issues: ctx.common.issues });
	}
	async parseAsync(data, params) {
		const result = await this.safeParseAsync(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	async safeParseAsync(data, params) {
		const ctx = {
			common: {
				issues: [],
				contextualErrorMap: params?.errorMap,
				async: true
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		const maybeAsyncResult = this._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
		return handleResult(ctx, await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult)));
	}
	refine(check, message) {
		const getIssueProperties = (val) => {
			if (typeof message === "string" || typeof message === "undefined") return { message };
			else if (typeof message === "function") return message(val);
			else return message;
		};
		return this._refinement((val, ctx) => {
			const result = check(val);
			const setError = () => ctx.addIssue({
				code: ZodIssueCode.custom,
				...getIssueProperties(val)
			});
			if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data) => {
				if (!data) {
					setError();
					return false;
				} else return true;
			});
			if (!result) {
				setError();
				return false;
			} else return true;
		});
	}
	refinement(check, refinementData) {
		return this._refinement((val, ctx) => {
			if (!check(val)) {
				ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
				return false;
			} else return true;
		});
	}
	_refinement(refinement) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "refinement",
				refinement
			}
		});
	}
	superRefine(refinement) {
		return this._refinement(refinement);
	}
	constructor(def) {
		/** Alias of safeParseAsync */
		this.spa = this.safeParseAsync;
		this._def = def;
		this.parse = this.parse.bind(this);
		this.safeParse = this.safeParse.bind(this);
		this.parseAsync = this.parseAsync.bind(this);
		this.safeParseAsync = this.safeParseAsync.bind(this);
		this.spa = this.spa.bind(this);
		this.refine = this.refine.bind(this);
		this.refinement = this.refinement.bind(this);
		this.superRefine = this.superRefine.bind(this);
		this.optional = this.optional.bind(this);
		this.nullable = this.nullable.bind(this);
		this.nullish = this.nullish.bind(this);
		this.array = this.array.bind(this);
		this.promise = this.promise.bind(this);
		this.or = this.or.bind(this);
		this.and = this.and.bind(this);
		this.transform = this.transform.bind(this);
		this.brand = this.brand.bind(this);
		this.default = this.default.bind(this);
		this.catch = this.catch.bind(this);
		this.describe = this.describe.bind(this);
		this.pipe = this.pipe.bind(this);
		this.readonly = this.readonly.bind(this);
		this.isNullable = this.isNullable.bind(this);
		this.isOptional = this.isOptional.bind(this);
		this["~standard"] = {
			version: 1,
			vendor: "zod",
			validate: (data) => this["~validate"](data)
		};
	}
	optional() {
		return ZodOptional.create(this, this._def);
	}
	nullable() {
		return ZodNullable.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ZodArray.create(this);
	}
	promise() {
		return ZodPromise.create(this, this._def);
	}
	or(option) {
		return ZodUnion.create([this, option], this._def);
	}
	and(incoming) {
		return ZodIntersection.create(this, incoming, this._def);
	}
	transform(transform) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "transform",
				transform
			}
		});
	}
	default(def) {
		const defaultValueFunc = typeof def === "function" ? def : () => def;
		return new ZodDefault({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: defaultValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodDefault
		});
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def)
		});
	}
	catch(def) {
		const catchValueFunc = typeof def === "function" ? def : () => def;
		return new ZodCatch({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: catchValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodCatch
		});
	}
	describe(description) {
		const This = this.constructor;
		return new This({
			...this._def,
			description
		});
	}
	pipe(target) {
		return ZodPipeline.create(this, target);
	}
	readonly() {
		return ZodReadonly.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex$2;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
	let secondsRegexSource = `[0-5]\\d`;
	if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
	else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
	const secondsQuantifier = args.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
	return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
	let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
	const opts = [];
	opts.push(args.local ? `Z?` : `Z`);
	if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
	regex = `${regex}(${opts.join("|")})`;
	return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
	if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
	if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
	return false;
}
function isValidJWT(jwt, alg) {
	if (!jwtRegex.test(jwt)) return false;
	try {
		const [header] = jwt.split(".");
		if (!header) return false;
		const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
		const decoded = JSON.parse(atob(base64));
		if (typeof decoded !== "object" || decoded === null) return false;
		if ("typ" in decoded && decoded?.typ !== "JWT") return false;
		if (!decoded.alg) return false;
		if (alg && decoded.alg !== alg) return false;
		return true;
	} catch {
		return false;
	}
}
function isValidCidr(ip, version) {
	if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
	if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
	return false;
}
var ZodString = class ZodString extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = String(input.data);
		if (this._getType(input) !== ZodParsedType.string) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.string,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) if (check.kind === "min") {
			if (input.data.length < check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (input.data.length > check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "length") {
			const tooBig = input.data.length > check.value;
			const tooSmall = input.data.length < check.value;
			if (tooBig || tooSmall) {
				ctx = this._getOrReturnCtx(input, ctx);
				if (tooBig) addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check.message
				});
				else if (tooSmall) addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "email") {
			if (!emailRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "email",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "emoji") {
			if (!emojiRegex$2) emojiRegex$2 = new RegExp(_emojiRegex, "u");
			if (!emojiRegex$2.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "emoji",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "uuid") {
			if (!uuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "uuid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "nanoid") {
			if (!nanoidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "nanoid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cuid") {
			if (!cuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cuid2") {
			if (!cuid2Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid2",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "ulid") {
			if (!ulidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ulid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "url") try {
			new URL(input.data);
		} catch {
			ctx = this._getOrReturnCtx(input, ctx);
			addIssueToContext(ctx, {
				validation: "url",
				code: ZodIssueCode.invalid_string,
				message: check.message
			});
			status.dirty();
		}
		else if (check.kind === "regex") {
			check.regex.lastIndex = 0;
			if (!check.regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "regex",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "trim") input.data = input.data.trim();
		else if (check.kind === "includes") {
			if (!input.data.includes(check.value, check.position)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: {
						includes: check.value,
						position: check.position
					},
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
		else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
		else if (check.kind === "startsWith") {
			if (!input.data.startsWith(check.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { startsWith: check.value },
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "endsWith") {
			if (!input.data.endsWith(check.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { endsWith: check.value },
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "datetime") {
			if (!datetimeRegex(check).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "datetime",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "date") {
			if (!dateRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "date",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "time") {
			if (!timeRegex(check).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "time",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "duration") {
			if (!durationRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "duration",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "ip") {
			if (!isValidIP(input.data, check.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ip",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "jwt") {
			if (!isValidJWT(input.data, check.alg)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "jwt",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cidr") {
			if (!isValidCidr(input.data, check.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cidr",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "base64") {
			if (!base64Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "base64url") {
			if (!base64urlRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64url",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	_regex(regex, validation, message) {
		return this.refinement((data) => regex.test(data), {
			validation,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(message)
		});
	}
	_addCheck(check) {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	email(message) {
		return this._addCheck({
			kind: "email",
			...errorUtil.errToObj(message)
		});
	}
	url(message) {
		return this._addCheck({
			kind: "url",
			...errorUtil.errToObj(message)
		});
	}
	emoji(message) {
		return this._addCheck({
			kind: "emoji",
			...errorUtil.errToObj(message)
		});
	}
	uuid(message) {
		return this._addCheck({
			kind: "uuid",
			...errorUtil.errToObj(message)
		});
	}
	nanoid(message) {
		return this._addCheck({
			kind: "nanoid",
			...errorUtil.errToObj(message)
		});
	}
	cuid(message) {
		return this._addCheck({
			kind: "cuid",
			...errorUtil.errToObj(message)
		});
	}
	cuid2(message) {
		return this._addCheck({
			kind: "cuid2",
			...errorUtil.errToObj(message)
		});
	}
	ulid(message) {
		return this._addCheck({
			kind: "ulid",
			...errorUtil.errToObj(message)
		});
	}
	base64(message) {
		return this._addCheck({
			kind: "base64",
			...errorUtil.errToObj(message)
		});
	}
	base64url(message) {
		return this._addCheck({
			kind: "base64url",
			...errorUtil.errToObj(message)
		});
	}
	jwt(options) {
		return this._addCheck({
			kind: "jwt",
			...errorUtil.errToObj(options)
		});
	}
	ip(options) {
		return this._addCheck({
			kind: "ip",
			...errorUtil.errToObj(options)
		});
	}
	cidr(options) {
		return this._addCheck({
			kind: "cidr",
			...errorUtil.errToObj(options)
		});
	}
	datetime(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "datetime",
			precision: null,
			offset: false,
			local: false,
			message: options
		});
		return this._addCheck({
			kind: "datetime",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			offset: options?.offset ?? false,
			local: options?.local ?? false,
			...errorUtil.errToObj(options?.message)
		});
	}
	date(message) {
		return this._addCheck({
			kind: "date",
			message
		});
	}
	time(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "time",
			precision: null,
			message: options
		});
		return this._addCheck({
			kind: "time",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			...errorUtil.errToObj(options?.message)
		});
	}
	duration(message) {
		return this._addCheck({
			kind: "duration",
			...errorUtil.errToObj(message)
		});
	}
	regex(regex, message) {
		return this._addCheck({
			kind: "regex",
			regex,
			...errorUtil.errToObj(message)
		});
	}
	includes(value, options) {
		return this._addCheck({
			kind: "includes",
			value,
			position: options?.position,
			...errorUtil.errToObj(options?.message)
		});
	}
	startsWith(value, message) {
		return this._addCheck({
			kind: "startsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	endsWith(value, message) {
		return this._addCheck({
			kind: "endsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	min(minLength, message) {
		return this._addCheck({
			kind: "min",
			value: minLength,
			...errorUtil.errToObj(message)
		});
	}
	max(maxLength, message) {
		return this._addCheck({
			kind: "max",
			value: maxLength,
			...errorUtil.errToObj(message)
		});
	}
	length(len, message) {
		return this._addCheck({
			kind: "length",
			value: len,
			...errorUtil.errToObj(message)
		});
	}
	/**
	* Equivalent to `.min(1)`
	*/
	nonempty(message) {
		return this.min(1, errorUtil.errToObj(message));
	}
	trim() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		});
	}
	toLowerCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		});
	}
	toUpperCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((ch) => ch.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((ch) => ch.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((ch) => ch.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((ch) => ch.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((ch) => ch.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((ch) => ch.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((ch) => ch.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((ch) => ch.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((ch) => ch.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((ch) => ch.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((ch) => ch.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((ch) => ch.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((ch) => ch.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((ch) => ch.kind === "base64url");
	}
	get minLength() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxLength() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodString.create = (params) => {
	return new ZodString({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
function floatSafeRemainder(val, step) {
	const valDecCount = (val.toString().split(".")[1] || "").length;
	const stepDecCount = (step.toString().split(".")[1] || "").length;
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
}
var ZodNumber = class ZodNumber extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
		this.step = this.multipleOf;
	}
	_parse(input) {
		if (this._def.coerce) input.data = Number(input.data);
		if (this._getType(input) !== ZodParsedType.number) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: ctx.parsedType
			});
			return INVALID;
		}
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) if (check.kind === "int") {
			if (!util.isInteger(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: "integer",
					received: "float",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "min") {
			if (check.inclusive ? input.data < check.value : input.data <= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "number",
					inclusive: check.inclusive,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (check.inclusive ? input.data > check.value : input.data >= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "number",
					inclusive: check.inclusive,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "multipleOf") {
			if (floatSafeRemainder(input.data, check.value) !== 0) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check.value,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "finite") {
			if (!Number.isFinite(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_finite,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	int(message) {
		return this._addCheck({
			kind: "int",
			message: errorUtil.toString(message)
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	finite(message) {
		return this._addCheck({
			kind: "finite",
			message: errorUtil.toString(message)
		});
	}
	safe(message) {
		return this._addCheck({
			kind: "min",
			inclusive: true,
			value: Number.MIN_SAFE_INTEGER,
			message: errorUtil.toString(message)
		})._addCheck({
			kind: "max",
			inclusive: true,
			value: Number.MAX_SAFE_INTEGER,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
	get isInt() {
		return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
	}
	get isFinite() {
		let max = null;
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
		else if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		} else if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return Number.isFinite(min) && Number.isFinite(max);
	}
};
ZodNumber.create = (params) => {
	return new ZodNumber({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodNumber,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodBigInt = class ZodBigInt extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
	}
	_parse(input) {
		if (this._def.coerce) try {
			input.data = BigInt(input.data);
		} catch {
			return this._getInvalidInput(input);
		}
		if (this._getType(input) !== ZodParsedType.bigint) return this._getInvalidInput(input);
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) if (check.kind === "min") {
			if (check.inclusive ? input.data < check.value : input.data <= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					type: "bigint",
					minimum: check.value,
					inclusive: check.inclusive,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (check.inclusive ? input.data > check.value : input.data >= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					type: "bigint",
					maximum: check.value,
					inclusive: check.inclusive,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "multipleOf") {
			if (input.data % check.value !== BigInt(0)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check.value,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	_getInvalidInput(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.bigint,
			received: ctx.parsedType
		});
		return INVALID;
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodBigInt.create = (params) => {
	return new ZodBigInt({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
var ZodBoolean = class extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = Boolean(input.data);
		if (this._getType(input) !== ZodParsedType.boolean) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodBoolean.create = (params) => {
	return new ZodBoolean({
		typeName: ZodFirstPartyTypeKind.ZodBoolean,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodDate = class ZodDate extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = new Date(input.data);
		if (this._getType(input) !== ZodParsedType.date) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (Number.isNaN(input.data.getTime())) {
			addIssueToContext(this._getOrReturnCtx(input), { code: ZodIssueCode.invalid_date });
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) if (check.kind === "min") {
			if (input.data.getTime() < check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					message: check.message,
					inclusive: true,
					exact: false,
					minimum: check.value,
					type: "date"
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (input.data.getTime() > check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					message: check.message,
					inclusive: true,
					exact: false,
					maximum: check.value,
					type: "date"
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: new Date(input.data.getTime())
		};
	}
	_addCheck(check) {
		return new ZodDate({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	min(minDate, message) {
		return this._addCheck({
			kind: "min",
			value: minDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	max(maxDate, message) {
		return this._addCheck({
			kind: "max",
			value: maxDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	get minDate() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min != null ? new Date(min) : null;
	}
	get maxDate() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max != null ? new Date(max) : null;
	}
};
ZodDate.create = (params) => {
	return new ZodDate({
		checks: [],
		coerce: params?.coerce || false,
		typeName: ZodFirstPartyTypeKind.ZodDate,
		...processCreateParams(params)
	});
};
var ZodSymbol = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.symbol) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodSymbol.create = (params) => {
	return new ZodSymbol({
		typeName: ZodFirstPartyTypeKind.ZodSymbol,
		...processCreateParams(params)
	});
};
var ZodUndefined = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodUndefined.create = (params) => {
	return new ZodUndefined({
		typeName: ZodFirstPartyTypeKind.ZodUndefined,
		...processCreateParams(params)
	});
};
var ZodNull = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.null) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodNull.create = (params) => {
	return new ZodNull({
		typeName: ZodFirstPartyTypeKind.ZodNull,
		...processCreateParams(params)
	});
};
var ZodAny = class extends ZodType {
	constructor() {
		super(...arguments);
		this._any = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodAny.create = (params) => {
	return new ZodAny({
		typeName: ZodFirstPartyTypeKind.ZodAny,
		...processCreateParams(params)
	});
};
var ZodUnknown = class extends ZodType {
	constructor() {
		super(...arguments);
		this._unknown = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodUnknown.create = (params) => {
	return new ZodUnknown({
		typeName: ZodFirstPartyTypeKind.ZodUnknown,
		...processCreateParams(params)
	});
};
var ZodNever = class extends ZodType {
	_parse(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: ctx.parsedType
		});
		return INVALID;
	}
};
ZodNever.create = (params) => {
	return new ZodNever({
		typeName: ZodFirstPartyTypeKind.ZodNever,
		...processCreateParams(params)
	});
};
var ZodVoid = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodVoid.create = (params) => {
	return new ZodVoid({
		typeName: ZodFirstPartyTypeKind.ZodVoid,
		...processCreateParams(params)
	});
};
var ZodArray = class ZodArray extends ZodType {
	_parse(input) {
		const { ctx, status } = this._processInputParams(input);
		const def = this._def;
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (def.exactLength !== null) {
			const tooBig = ctx.data.length > def.exactLength.value;
			const tooSmall = ctx.data.length < def.exactLength.value;
			if (tooBig || tooSmall) {
				addIssueToContext(ctx, {
					code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
					minimum: tooSmall ? def.exactLength.value : void 0,
					maximum: tooBig ? def.exactLength.value : void 0,
					type: "array",
					inclusive: true,
					exact: true,
					message: def.exactLength.message
				});
				status.dirty();
			}
		}
		if (def.minLength !== null) {
			if (ctx.data.length < def.minLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.minLength.message
				});
				status.dirty();
			}
		}
		if (def.maxLength !== null) {
			if (ctx.data.length > def.maxLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.maxLength.message
				});
				status.dirty();
			}
		}
		if (ctx.common.async) return Promise.all([...ctx.data].map((item, i) => {
			return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		})).then((result) => {
			return ParseStatus.mergeArray(status, result);
		});
		const result = [...ctx.data].map((item, i) => {
			return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		});
		return ParseStatus.mergeArray(status, result);
	}
	get element() {
		return this._def.type;
	}
	min(minLength, message) {
		return new ZodArray({
			...this._def,
			minLength: {
				value: minLength,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxLength, message) {
		return new ZodArray({
			...this._def,
			maxLength: {
				value: maxLength,
				message: errorUtil.toString(message)
			}
		});
	}
	length(len, message) {
		return new ZodArray({
			...this._def,
			exactLength: {
				value: len,
				message: errorUtil.toString(message)
			}
		});
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodArray.create = (schema, params) => {
	return new ZodArray({
		type: schema,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ZodFirstPartyTypeKind.ZodArray,
		...processCreateParams(params)
	});
};
function deepPartialify(schema) {
	if (schema instanceof ZodObject) {
		const newShape = {};
		for (const key in schema.shape) {
			const fieldSchema = schema.shape[key];
			newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
		}
		return new ZodObject({
			...schema._def,
			shape: () => newShape
		});
	} else if (schema instanceof ZodArray) return new ZodArray({
		...schema._def,
		type: deepPartialify(schema.element)
	});
	else if (schema instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema.unwrap()));
	else if (schema instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema.unwrap()));
	else if (schema instanceof ZodTuple) return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
	else return schema;
}
var ZodObject = class ZodObject extends ZodType {
	constructor() {
		super(...arguments);
		this._cached = null;
		/**
		* @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
		* If you want to pass through unknown properties, use `.passthrough()` instead.
		*/
		this.nonstrict = this.passthrough;
		/**
		* @deprecated Use `.extend` instead
		*  */
		this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const shape = this._def.shape();
		const keys = util.objectKeys(shape);
		this._cached = {
			shape,
			keys
		};
		return this._cached;
	}
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.object) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const { status, ctx } = this._processInputParams(input);
		const { shape, keys: shapeKeys } = this._getCached();
		const extraKeys = [];
		if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
			for (const key in ctx.data) if (!shapeKeys.includes(key)) extraKeys.push(key);
		}
		const pairs = [];
		for (const key of shapeKeys) {
			const keyValidator = shape[key];
			const value = ctx.data[key];
			pairs.push({
				key: {
					status: "valid",
					value: key
				},
				value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
				alwaysSet: key in ctx.data
			});
		}
		if (this._def.catchall instanceof ZodNever) {
			const unknownKeys = this._def.unknownKeys;
			if (unknownKeys === "passthrough") for (const key of extraKeys) pairs.push({
				key: {
					status: "valid",
					value: key
				},
				value: {
					status: "valid",
					value: ctx.data[key]
				}
			});
			else if (unknownKeys === "strict") {
				if (extraKeys.length > 0) {
					addIssueToContext(ctx, {
						code: ZodIssueCode.unrecognized_keys,
						keys: extraKeys
					});
					status.dirty();
				}
			} else if (unknownKeys === "strip") {} else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
		} else {
			const catchall = this._def.catchall;
			for (const key of extraKeys) {
				const value = ctx.data[key];
				pairs.push({
					key: {
						status: "valid",
						value: key
					},
					value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
					alwaysSet: key in ctx.data
				});
			}
		}
		if (ctx.common.async) return Promise.resolve().then(async () => {
			const syncPairs = [];
			for (const pair of pairs) {
				const key = await pair.key;
				const value = await pair.value;
				syncPairs.push({
					key,
					value,
					alwaysSet: pair.alwaysSet
				});
			}
			return syncPairs;
		}).then((syncPairs) => {
			return ParseStatus.mergeObjectSync(status, syncPairs);
		});
		else return ParseStatus.mergeObjectSync(status, pairs);
	}
	get shape() {
		return this._def.shape();
	}
	strict(message) {
		errorUtil.errToObj;
		return new ZodObject({
			...this._def,
			unknownKeys: "strict",
			...message !== void 0 ? { errorMap: (issue, ctx) => {
				const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
				if (issue.code === "unrecognized_keys") return { message: errorUtil.errToObj(message).message ?? defaultError };
				return { message: defaultError };
			} } : {}
		});
	}
	strip() {
		return new ZodObject({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new ZodObject({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(augmentation) {
		return new ZodObject({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...augmentation
			})
		});
	}
	/**
	* Prior to zod@1.0.12 there was a bug in the
	* inferred type of merged objects. Please
	* upgrade if you are experiencing issues.
	*/
	merge(merging) {
		return new ZodObject({
			unknownKeys: merging._def.unknownKeys,
			catchall: merging._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...merging._def.shape()
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject
		});
	}
	setKey(key, schema) {
		return this.augment({ [key]: schema });
	}
	catchall(index) {
		return new ZodObject({
			...this._def,
			catchall: index
		});
	}
	pick(mask) {
		const shape = {};
		for (const key of util.objectKeys(mask)) if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
		return new ZodObject({
			...this._def,
			shape: () => shape
		});
	}
	omit(mask) {
		const shape = {};
		for (const key of util.objectKeys(this.shape)) if (!mask[key]) shape[key] = this.shape[key];
		return new ZodObject({
			...this._def,
			shape: () => shape
		});
	}
	/**
	* @deprecated
	*/
	deepPartial() {
		return deepPartialify(this);
	}
	partial(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) {
			const fieldSchema = this.shape[key];
			if (mask && !mask[key]) newShape[key] = fieldSchema;
			else newShape[key] = fieldSchema.optional();
		}
		return new ZodObject({
			...this._def,
			shape: () => newShape
		});
	}
	required(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) if (mask && !mask[key]) newShape[key] = this.shape[key];
		else {
			let newField = this.shape[key];
			while (newField instanceof ZodOptional) newField = newField._def.innerType;
			newShape[key] = newField;
		}
		return new ZodObject({
			...this._def,
			shape: () => newShape
		});
	}
	keyof() {
		return createZodEnum(util.objectKeys(this.shape));
	}
};
ZodObject.create = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject.strictCreate = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strict",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject.lazycreate = (shape, params) => {
	return new ZodObject({
		shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
var ZodUnion = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const options = this._def.options;
		function handleResults(results) {
			for (const result of results) if (result.result.status === "valid") return result.result;
			for (const result of results) if (result.result.status === "dirty") {
				ctx.common.issues.push(...result.ctx.common.issues);
				return result.result;
			}
			const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
		if (ctx.common.async) return Promise.all(options.map(async (option) => {
			const childCtx = {
				...ctx,
				common: {
					...ctx.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await option._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				}),
				ctx: childCtx
			};
		})).then(handleResults);
		else {
			let dirty = void 0;
			const issues = [];
			for (const option of options) {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: []
					},
					parent: null
				};
				const result = option._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				});
				if (result.status === "valid") return result;
				else if (result.status === "dirty" && !dirty) dirty = {
					result,
					ctx: childCtx
				};
				if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
			}
			if (dirty) {
				ctx.common.issues.push(...dirty.ctx.common.issues);
				return dirty.result;
			}
			const unionErrors = issues.map((issues) => new ZodError(issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
	}
	get options() {
		return this._def.options;
	}
};
ZodUnion.create = (types, params) => {
	return new ZodUnion({
		options: types,
		typeName: ZodFirstPartyTypeKind.ZodUnion,
		...processCreateParams(params)
	});
};
var getDiscriminator = (type) => {
	if (type instanceof ZodLazy) return getDiscriminator(type.schema);
	else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
	else if (type instanceof ZodLiteral) return [type.value];
	else if (type instanceof ZodEnum) return type.options;
	else if (type instanceof ZodNativeEnum) return util.objectValues(type.enum);
	else if (type instanceof ZodDefault) return getDiscriminator(type._def.innerType);
	else if (type instanceof ZodUndefined) return [void 0];
	else if (type instanceof ZodNull) return [null];
	else if (type instanceof ZodOptional) return [void 0, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodNullable) return [null, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodReadonly) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodCatch) return getDiscriminator(type._def.innerType);
	else return [];
};
var ZodDiscriminatedUnion = class ZodDiscriminatedUnion extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const discriminator = this.discriminator;
		const discriminatorValue = ctx.data[discriminator];
		const option = this.optionsMap.get(discriminatorValue);
		if (!option) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [discriminator]
			});
			return INVALID;
		}
		if (ctx.common.async) return option._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
		else return option._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	/**
	* The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
	* However, it only allows a union of objects, all of which need to share a discriminator property. This property must
	* have a different value for each object in the union.
	* @param discriminator the name of the discriminator property
	* @param types an array of object schemas
	* @param params
	*/
	static create(discriminator, options, params) {
		const optionsMap = /* @__PURE__ */ new Map();
		for (const type of options) {
			const discriminatorValues = getDiscriminator(type.shape[discriminator]);
			if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
			for (const value of discriminatorValues) {
				if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
				optionsMap.set(value, type);
			}
		}
		return new ZodDiscriminatedUnion({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator,
			options,
			optionsMap,
			...processCreateParams(params)
		});
	}
};
function mergeValues(a, b) {
	const aType = getParsedType(a);
	const bType = getParsedType(b);
	if (a === b) return {
		valid: true,
		data: a
	};
	else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
		const bKeys = util.objectKeys(b);
		const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return { valid: false };
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
		if (a.length !== b.length) return { valid: false };
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return { valid: false };
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
		valid: true,
		data: a
	};
	else return { valid: false };
}
var ZodIntersection = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const handleParsed = (parsedLeft, parsedRight) => {
			if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
			const merged = mergeValues(parsedLeft.value, parsedRight.value);
			if (!merged.valid) {
				addIssueToContext(ctx, { code: ZodIssueCode.invalid_intersection_types });
				return INVALID;
			}
			if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
			return {
				status: status.value,
				value: merged.data
			};
		};
		if (ctx.common.async) return Promise.all([this._def.left._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		})]).then(([left, right]) => handleParsed(left, right));
		else return handleParsed(this._def.left._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}));
	}
};
ZodIntersection.create = (left, right, params) => {
	return new ZodIntersection({
		left,
		right,
		typeName: ZodFirstPartyTypeKind.ZodIntersection,
		...processCreateParams(params)
	});
};
var ZodTuple = class ZodTuple extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (ctx.data.length < this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_small,
				minimum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			return INVALID;
		}
		if (!this._def.rest && ctx.data.length > this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_big,
				maximum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			status.dirty();
		}
		const items = [...ctx.data].map((item, itemIndex) => {
			const schema = this._def.items[itemIndex] || this._def.rest;
			if (!schema) return null;
			return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
		}).filter((x) => !!x);
		if (ctx.common.async) return Promise.all(items).then((results) => {
			return ParseStatus.mergeArray(status, results);
		});
		else return ParseStatus.mergeArray(status, items);
	}
	get items() {
		return this._def.items;
	}
	rest(rest) {
		return new ZodTuple({
			...this._def,
			rest
		});
	}
};
ZodTuple.create = (schemas, params) => {
	if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new ZodTuple({
		items: schemas,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(params)
	});
};
var ZodRecord = class ZodRecord extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const pairs = [];
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		for (const key in ctx.data) pairs.push({
			key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
			value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
			alwaysSet: key in ctx.data
		});
		if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs);
		else return ParseStatus.mergeObjectSync(status, pairs);
	}
	get element() {
		return this._def.valueType;
	}
	static create(first, second, third) {
		if (second instanceof ZodType) return new ZodRecord({
			keyType: first,
			valueType: second,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(third)
		});
		return new ZodRecord({
			keyType: ZodString.create(),
			valueType: first,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(second)
		});
	}
};
var ZodMap = class extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.map) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.map,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		const pairs = [...ctx.data.entries()].map(([key, value], index) => {
			return {
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
				value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
			};
		});
		if (ctx.common.async) {
			const finalMap = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (const pair of pairs) {
					const key = await pair.key;
					const value = await pair.value;
					if (key.status === "aborted" || value.status === "aborted") return INVALID;
					if (key.status === "dirty" || value.status === "dirty") status.dirty();
					finalMap.set(key.value, value.value);
				}
				return {
					status: status.value,
					value: finalMap
				};
			});
		} else {
			const finalMap = /* @__PURE__ */ new Map();
			for (const pair of pairs) {
				const key = pair.key;
				const value = pair.value;
				if (key.status === "aborted" || value.status === "aborted") return INVALID;
				if (key.status === "dirty" || value.status === "dirty") status.dirty();
				finalMap.set(key.value, value.value);
			}
			return {
				status: status.value,
				value: finalMap
			};
		}
	}
};
ZodMap.create = (keyType, valueType, params) => {
	return new ZodMap({
		valueType,
		keyType,
		typeName: ZodFirstPartyTypeKind.ZodMap,
		...processCreateParams(params)
	});
};
var ZodSet = class ZodSet extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.set) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.set,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const def = this._def;
		if (def.minSize !== null) {
			if (ctx.data.size < def.minSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.minSize.message
				});
				status.dirty();
			}
		}
		if (def.maxSize !== null) {
			if (ctx.data.size > def.maxSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.maxSize.message
				});
				status.dirty();
			}
		}
		const valueType = this._def.valueType;
		function finalizeSet(elements) {
			const parsedSet = /* @__PURE__ */ new Set();
			for (const element of elements) {
				if (element.status === "aborted") return INVALID;
				if (element.status === "dirty") status.dirty();
				parsedSet.add(element.value);
			}
			return {
				status: status.value,
				value: parsedSet
			};
		}
		const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
		if (ctx.common.async) return Promise.all(elements).then((elements) => finalizeSet(elements));
		else return finalizeSet(elements);
	}
	min(minSize, message) {
		return new ZodSet({
			...this._def,
			minSize: {
				value: minSize,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxSize, message) {
		return new ZodSet({
			...this._def,
			maxSize: {
				value: maxSize,
				message: errorUtil.toString(message)
			}
		});
	}
	size(size, message) {
		return this.min(size, message).max(size, message);
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodSet.create = (valueType, params) => {
	return new ZodSet({
		valueType,
		minSize: null,
		maxSize: null,
		typeName: ZodFirstPartyTypeKind.ZodSet,
		...processCreateParams(params)
	});
};
var ZodFunction = class ZodFunction extends ZodType {
	constructor() {
		super(...arguments);
		this.validate = this.implement;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.function) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.function,
				received: ctx.parsedType
			});
			return INVALID;
		}
		function makeArgsIssue(args, error) {
			return makeIssue({
				data: args,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: error
				}
			});
		}
		function makeReturnsIssue(returns, error) {
			return makeIssue({
				data: returns,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: error
				}
			});
		}
		const params = { errorMap: ctx.common.contextualErrorMap };
		const fn = ctx.data;
		if (this._def.returns instanceof ZodPromise) {
			const me = this;
			return OK(async function(...args) {
				const error = new ZodError([]);
				const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
					error.addIssue(makeArgsIssue(args, e));
					throw error;
				});
				const result = await Reflect.apply(fn, this, parsedArgs);
				return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
					error.addIssue(makeReturnsIssue(result, e));
					throw error;
				});
			});
		} else {
			const me = this;
			return OK(function(...args) {
				const parsedArgs = me._def.args.safeParse(args, params);
				if (!parsedArgs.success) throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
				const result = Reflect.apply(fn, this, parsedArgs.data);
				const parsedReturns = me._def.returns.safeParse(result, params);
				if (!parsedReturns.success) throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
				return parsedReturns.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...items) {
		return new ZodFunction({
			...this._def,
			args: ZodTuple.create(items).rest(ZodUnknown.create())
		});
	}
	returns(returnType) {
		return new ZodFunction({
			...this._def,
			returns: returnType
		});
	}
	implement(func) {
		return this.parse(func);
	}
	strictImplement(func) {
		return this.parse(func);
	}
	static create(args, returns, params) {
		return new ZodFunction({
			args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
			returns: returns || ZodUnknown.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(params)
		});
	}
};
var ZodLazy = class extends ZodType {
	get schema() {
		return this._def.getter();
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		return this._def.getter()._parse({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
};
ZodLazy.create = (getter, params) => {
	return new ZodLazy({
		getter,
		typeName: ZodFirstPartyTypeKind.ZodLazy,
		...processCreateParams(params)
	});
};
var ZodLiteral = class extends ZodType {
	_parse(input) {
		if (input.data !== this._def.value) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
	get value() {
		return this._def.value;
	}
};
ZodLiteral.create = (value, params) => {
	return new ZodLiteral({
		value,
		typeName: ZodFirstPartyTypeKind.ZodLiteral,
		...processCreateParams(params)
	});
};
function createZodEnum(values, params) {
	return new ZodEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(params)
	});
}
var ZodEnum = class ZodEnum extends ZodType {
	_parse(input) {
		if (typeof input.data !== "string") {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(this._def.values);
		if (!this._cache.has(input.data)) {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Values() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	extract(values, newDef = this._def) {
		return ZodEnum.create(values, {
			...this._def,
			...newDef
		});
	}
	exclude(values, newDef = this._def) {
		return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
			...this._def,
			...newDef
		});
	}
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
	_parse(input) {
		const nativeEnumValues = util.getValidEnumValues(this._def.values);
		const ctx = this._getOrReturnCtx(input);
		if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(util.getValidEnumValues(this._def.values));
		if (!this._cache.has(input.data)) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get enum() {
		return this._def.values;
	}
};
ZodNativeEnum.create = (values, params) => {
	return new ZodNativeEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
		...processCreateParams(params)
	});
};
var ZodPromise = class extends ZodType {
	unwrap() {
		return this._def.type;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.promise,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK((ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data)).then((data) => {
			return this._def.type.parseAsync(data, {
				path: ctx.path,
				errorMap: ctx.common.contextualErrorMap
			});
		}));
	}
};
ZodPromise.create = (schema, params) => {
	return new ZodPromise({
		type: schema,
		typeName: ZodFirstPartyTypeKind.ZodPromise,
		...processCreateParams(params)
	});
};
var ZodEffects = class extends ZodType {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const effect = this._def.effect || null;
		const checkCtx = {
			addIssue: (arg) => {
				addIssueToContext(ctx, arg);
				if (arg.fatal) status.abort();
				else status.dirty();
			},
			get path() {
				return ctx.path;
			}
		};
		checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
		if (effect.type === "preprocess") {
			const processed = effect.transform(ctx.data, checkCtx);
			if (ctx.common.async) return Promise.resolve(processed).then(async (processed) => {
				if (status.value === "aborted") return INVALID;
				const result = await this._def.schema._parseAsync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			});
			else {
				if (status.value === "aborted") return INVALID;
				const result = this._def.schema._parseSync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			}
		}
		if (effect.type === "refinement") {
			const executeRefinement = (acc) => {
				const result = effect.refinement(acc, checkCtx);
				if (ctx.common.async) return Promise.resolve(result);
				if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return acc;
			};
			if (ctx.common.async === false) {
				const inner = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				executeRefinement(inner.value);
				return {
					status: status.value,
					value: inner.value
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((inner) => {
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				return executeRefinement(inner.value).then(() => {
					return {
						status: status.value,
						value: inner.value
					};
				});
			});
		}
		if (effect.type === "transform") if (ctx.common.async === false) {
			const base = this._def.schema._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			if (!isValid(base)) return INVALID;
			const result = effect.transform(base.value, checkCtx);
			if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
			return {
				status: status.value,
				value: result
			};
		} else return this._def.schema._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}).then((base) => {
			if (!isValid(base)) return INVALID;
			return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
				status: status.value,
				value: result
			}));
		});
		util.assertNever(effect);
	}
};
ZodEffects.create = (schema, effect, params) => {
	return new ZodEffects({
		schema,
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		effect,
		...processCreateParams(params)
	});
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
	return new ZodEffects({
		schema,
		effect: {
			type: "preprocess",
			transform: preprocess
		},
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		...processCreateParams(params)
	});
};
var ZodOptional = class extends ZodType {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.undefined) return OK(void 0);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodOptional.create = (type, params) => {
	return new ZodOptional({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodOptional,
		...processCreateParams(params)
	});
};
var ZodNullable = class extends ZodType {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.null) return OK(null);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodNullable.create = (type, params) => {
	return new ZodNullable({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodNullable,
		...processCreateParams(params)
	});
};
var ZodDefault = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		let data = ctx.data;
		if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
		return this._def.innerType._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
ZodDefault.create = (type, params) => {
	return new ZodDefault({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodDefault,
		defaultValue: typeof params.default === "function" ? params.default : () => params.default,
		...processCreateParams(params)
	});
};
var ZodCatch = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const newCtx = {
			...ctx,
			common: {
				...ctx.common,
				issues: []
			}
		};
		const result = this._def.innerType._parse({
			data: newCtx.data,
			path: newCtx.path,
			parent: { ...newCtx }
		});
		if (isAsync(result)) return result.then((result) => {
			return {
				status: "valid",
				value: result.status === "valid" ? result.value : this._def.catchValue({
					get error() {
						return new ZodError(newCtx.common.issues);
					},
					input: newCtx.data
				})
			};
		});
		else return {
			status: "valid",
			value: result.status === "valid" ? result.value : this._def.catchValue({
				get error() {
					return new ZodError(newCtx.common.issues);
				},
				input: newCtx.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
ZodCatch.create = (type, params) => {
	return new ZodCatch({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodCatch,
		catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
		...processCreateParams(params)
	});
};
var ZodNaN = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.nan) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
};
ZodNaN.create = (params) => {
	return new ZodNaN({
		typeName: ZodFirstPartyTypeKind.ZodNaN,
		...processCreateParams(params)
	});
};
var ZodBranded = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const data = ctx.data;
		return this._def.type._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	unwrap() {
		return this._def.type;
	}
};
var ZodPipeline = class ZodPipeline extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.common.async) {
			const handleAsync = async () => {
				const inResult = await this._def.in._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inResult.status === "aborted") return INVALID;
				if (inResult.status === "dirty") {
					status.dirty();
					return DIRTY(inResult.value);
				} else return this._def.out._parseAsync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx
				});
			};
			return handleAsync();
		} else {
			const inResult = this._def.in._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			if (inResult.status === "aborted") return INVALID;
			if (inResult.status === "dirty") {
				status.dirty();
				return {
					status: "dirty",
					value: inResult.value
				};
			} else return this._def.out._parseSync({
				data: inResult.value,
				path: ctx.path,
				parent: ctx
			});
		}
	}
	static create(a, b) {
		return new ZodPipeline({
			in: a,
			out: b,
			typeName: ZodFirstPartyTypeKind.ZodPipeline
		});
	}
};
var ZodReadonly = class extends ZodType {
	_parse(input) {
		const result = this._def.innerType._parse(input);
		const freeze = (data) => {
			if (isValid(data)) data.value = Object.freeze(data.value);
			return data;
		};
		return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodReadonly.create = (type, params) => {
	return new ZodReadonly({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodReadonly,
		...processCreateParams(params)
	});
};
ZodObject.lazycreate;
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
	ZodFirstPartyTypeKind["ZodString"] = "ZodString";
	ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
	ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
	ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
	ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
	ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
	ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
	ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
	ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
	ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
	ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
	ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
	ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
	ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
	ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
	ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
	ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
	ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
	ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
	ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
	ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
	ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
	ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
	ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
	ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
	ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
	ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
	ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
	ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
	ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
	ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
	ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
	ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
	ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
	ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
	ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
ZodString.create;
ZodNumber.create;
ZodNaN.create;
ZodBigInt.create;
ZodBoolean.create;
ZodDate.create;
ZodSymbol.create;
ZodUndefined.create;
ZodNull.create;
ZodAny.create;
ZodUnknown.create;
ZodNever.create;
ZodVoid.create;
ZodArray.create;
ZodObject.create;
ZodObject.strictCreate;
ZodUnion.create;
ZodDiscriminatedUnion.create;
ZodIntersection.create;
ZodTuple.create;
ZodRecord.create;
ZodMap.create;
ZodSet.create;
ZodFunction.create;
ZodLazy.create;
ZodLiteral.create;
ZodEnum.create;
ZodNativeEnum.create;
ZodPromise.create;
ZodEffects.create;
ZodOptional.create;
ZodNullable.create;
ZodEffects.createWithPreprocess;
ZodPipeline.create;
//#endregion
//#region node_modules/@openrouter/ai-sdk-provider/dist/index.mjs
var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
	throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
	var target = {};
	for (var prop in source) if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
	if (source != null && __getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
	}
	return target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var marker$3 = "vercel.ai.error";
var symbol$4 = Symbol.for(marker$3);
var _a$4;
var _b$3;
var AISDKError$1 = class _AISDKError extends (_b$3 = Error, _a$4 = symbol$4, _b$3) {
	/**
	* Creates an AI SDK Error.
	*
	* @param {Object} params - The parameters for creating the error.
	* @param {string} params.name - The name of the error.
	* @param {string} params.message - The error message.
	* @param {unknown} [params.cause] - The underlying cause of the error.
	*/
	constructor({ name: name142, message, cause }) {
		super(message);
		this[_a$4] = true;
		this.name = name142;
		this.cause = cause;
	}
	/**
	* Checks if the given error is an AI SDK Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is an AI SDK Error, false otherwise.
	*/
	static isInstance(error) {
		return _AISDKError.hasMarker(error, marker$3);
	}
	static hasMarker(error, marker152) {
		const markerSymbol = Symbol.for(marker152);
		return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
	}
};
var name$4 = "AI_APICallError";
var marker2$3 = `vercel.ai.error.${name$4}`;
var symbol2$3 = Symbol.for(marker2$3);
var _a2$3;
var _b2$2;
var APICallError$1 = class extends (_b2$2 = AISDKError$1, _a2$3 = symbol2$3, _b2$2) {
	constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500), data }) {
		super({
			name: name$4,
			message,
			cause
		});
		this[_a2$3] = true;
		this.url = url;
		this.requestBodyValues = requestBodyValues;
		this.statusCode = statusCode;
		this.responseHeaders = responseHeaders;
		this.responseBody = responseBody;
		this.isRetryable = isRetryable;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker2$3);
	}
};
var name2$3 = "AI_EmptyResponseBodyError";
var marker3$3 = `vercel.ai.error.${name2$3}`;
var symbol3$3 = Symbol.for(marker3$3);
var _a3$3;
var _b3$2;
var EmptyResponseBodyError$1 = class extends (_b3$2 = AISDKError$1, _a3$3 = symbol3$3, _b3$2) {
	constructor({ message = "Empty response body" } = {}) {
		super({
			name: name2$3,
			message
		});
		this[_a3$3] = true;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker3$3);
	}
};
function getErrorMessage$2(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	return JSON.stringify(error);
}
var name3$3 = "AI_InvalidArgumentError";
var marker4$3 = `vercel.ai.error.${name3$3}`;
var symbol4$3 = Symbol.for(marker4$3);
var _a4$3;
var _b4$2;
var InvalidArgumentError$2 = class extends (_b4$2 = AISDKError$1, _a4$3 = symbol4$3, _b4$2) {
	constructor({ message, cause, argument }) {
		super({
			name: name3$3,
			message,
			cause
		});
		this[_a4$3] = true;
		this.argument = argument;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker4$3);
	}
};
var name4$3 = "AI_InvalidPromptError";
var marker5$3 = `vercel.ai.error.${name4$3}`;
var symbol5$3 = Symbol.for(marker5$3);
var _a5$3;
var _b5$2;
var InvalidPromptError$1 = class extends (_b5$2 = AISDKError$1, _a5$3 = symbol5$3, _b5$2) {
	constructor({ prompt, message, cause }) {
		super({
			name: name4$3,
			message: `Invalid prompt: ${message}`,
			cause
		});
		this[_a5$3] = true;
		this.prompt = prompt;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker5$3);
	}
};
var name5$3 = "AI_InvalidResponseDataError";
var marker6$3 = `vercel.ai.error.${name5$3}`;
var symbol6$3 = Symbol.for(marker6$3);
var _a6$3;
var _b6$2;
var InvalidResponseDataError$1 = class extends (_b6$2 = AISDKError$1, _a6$3 = symbol6$3, _b6$2) {
	constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }) {
		super({
			name: name5$3,
			message
		});
		this[_a6$3] = true;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker6$3);
	}
};
var name6$3 = "AI_JSONParseError";
var marker7$3 = `vercel.ai.error.${name6$3}`;
var symbol7$3 = Symbol.for(marker7$3);
var _a7$3;
var _b7$2;
var JSONParseError$1 = class extends (_b7$2 = AISDKError$1, _a7$3 = symbol7$3, _b7$2) {
	constructor({ text, cause }) {
		super({
			name: name6$3,
			message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage$2(cause)}`,
			cause
		});
		this[_a7$3] = true;
		this.text = text;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker7$3);
	}
};
var name7$3 = "AI_LoadAPIKeyError";
var marker8$3 = `vercel.ai.error.${name7$3}`;
var symbol8$3 = Symbol.for(marker8$3);
var _a8$3;
var _b8$2;
var LoadAPIKeyError$1 = class extends (_b8$2 = AISDKError$1, _a8$3 = symbol8$3, _b8$2) {
	constructor({ message }) {
		super({
			name: name7$3,
			message
		});
		this[_a8$3] = true;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker8$3);
	}
};
var name9$2 = "AI_NoContentGeneratedError";
var marker10$2 = `vercel.ai.error.${name9$2}`;
var symbol10$2 = Symbol.for(marker10$2);
var _a10$2;
var _b10$1;
var NoContentGeneratedError$1 = class extends (_b10$1 = AISDKError$1, _a10$2 = symbol10$2, _b10$1) {
	constructor({ message = "No content generated." } = {}) {
		super({
			name: name9$2,
			message
		});
		this[_a10$2] = true;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker10$2);
	}
};
var name12$2 = "AI_TypeValidationError";
var marker13$2 = `vercel.ai.error.${name12$2}`;
var symbol13$2 = Symbol.for(marker13$2);
var _a13$2;
var _b13$1;
var TypeValidationError$1 = class _TypeValidationError extends (_b13$1 = AISDKError$1, _a13$2 = symbol13$2, _b13$1) {
	constructor({ value, cause, context }) {
		let contextPrefix = "Type validation failed";
		if (context == null ? void 0 : context.field) contextPrefix += ` for ${context.field}`;
		if ((context == null ? void 0 : context.entityName) || (context == null ? void 0 : context.entityId)) {
			contextPrefix += " (";
			const parts = [];
			if (context.entityName) parts.push(context.entityName);
			if (context.entityId) parts.push(`id: "${context.entityId}"`);
			contextPrefix += parts.join(", ");
			contextPrefix += ")";
		}
		super({
			name: name12$2,
			message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage$2(cause)}`,
			cause
		});
		this[_a13$2] = true;
		this.value = value;
		this.context = context;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker13$2);
	}
	/**
	* Wraps an error into a TypeValidationError.
	* If the cause is already a TypeValidationError with the same value and context, it returns the cause.
	* Otherwise, it creates a new TypeValidationError.
	*
	* @param {Object} params - The parameters for wrapping the error.
	* @param {unknown} params.value - The value that failed validation.
	* @param {unknown} params.cause - The original error or cause of the validation failure.
	* @param {TypeValidationContext} params.context - Optional context about what is being validated.
	* @returns {TypeValidationError} A TypeValidationError instance.
	*/
	static wrap({ value, cause, context }) {
		var _a152, _b152, _c;
		if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a152 = cause.context) == null ? void 0 : _a152.field) === (context == null ? void 0 : context.field) && ((_b152 = cause.context) == null ? void 0 : _b152.entityName) === (context == null ? void 0 : context.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context == null ? void 0 : context.entityId)) return cause;
		return new _TypeValidationError({
			value,
			cause,
			context
		});
	}
};
var name13$2 = "AI_UnsupportedFunctionalityError";
var marker14$2 = `vercel.ai.error.${name13$2}`;
var symbol14$2 = Symbol.for(marker14$2);
var _a14$2;
var _b14$1;
var UnsupportedFunctionalityError$1 = class extends (_b14$1 = AISDKError$1, _a14$2 = symbol14$2, _b14$1) {
	constructor({ functionality, message = `'${functionality}' functionality not supported.` }) {
		super({
			name: name13$2,
			message
		});
		this[_a14$2] = true;
		this.functionality = functionality;
	}
	static isInstance(error) {
		return AISDKError$1.hasMarker(error, marker14$2);
	}
};
var ParseError$1 = class extends Error {
	constructor(message, options) {
		super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
	}
};
function noop$1(_arg) {}
function createParser$1(callbacks) {
	if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
	const { onEvent = noop$1, onError = noop$1, onRetry = noop$1, onComment } = callbacks;
	let incompleteLine = "", isFirstChunk = true, id, data = "", eventType = "";
	function feed(newChunk) {
		const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
		for (const line of complete) parseLine(line);
		incompleteLine = incomplete, isFirstChunk = false;
	}
	function parseLine(line) {
		if (line === "") {
			dispatchEvent();
			return;
		}
		if (line.startsWith(":")) {
			onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
			return;
		}
		const fieldSeparatorIndex = line.indexOf(":");
		if (fieldSeparatorIndex !== -1) {
			const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1;
			processField(field, line.slice(fieldSeparatorIndex + offset), line);
			return;
		}
		processField(line, "", line);
	}
	function processField(field, value, line) {
		switch (field) {
			case "event":
				eventType = value;
				break;
			case "data":
				data = `${data}${value}
`;
				break;
			case "id":
				id = value.includes("\0") ? void 0 : value;
				break;
			case "retry":
				/^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError$1(`Invalid \`retry\` value: "${value}"`, {
					type: "invalid-retry",
					value,
					line
				}));
				break;
			default:
				onError(new ParseError$1(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
					type: "unknown-field",
					field,
					value,
					line
				}));
				break;
		}
	}
	function dispatchEvent() {
		data.length > 0 && onEvent({
			id,
			event: eventType || void 0,
			data: data.endsWith(`
`) ? data.slice(0, -1) : data
		}), id = void 0, data = "", eventType = "";
	}
	function reset(options = {}) {
		incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = true, id = void 0, data = "", eventType = "", incompleteLine = "";
	}
	return {
		feed,
		reset
	};
}
function splitLines(chunk) {
	const lines = [];
	let incompleteLine = "", searchIndex = 0;
	for (; searchIndex < chunk.length;) {
		const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
		let lineEnd = -1;
		if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
			incompleteLine = chunk.slice(searchIndex);
			break;
		} else {
			const line = chunk.slice(searchIndex, lineEnd);
			lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
		}
	}
	return [lines, incompleteLine];
}
var EventSourceParserStream$1 = class extends TransformStream {
	constructor({ onError, onRetry, onComment } = {}) {
		let parser;
		super({
			start(controller) {
				parser = createParser$1({
					onEvent: (event) => {
						controller.enqueue(event);
					},
					onError(error) {
						onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
					},
					onRetry,
					onComment
				});
			},
			transform(chunk) {
				parser.feed(chunk);
			}
		});
	}
};
function combineHeaders$1(...headers) {
	return headers.reduce((combinedHeaders, currentHeaders) => __spreadValues(__spreadValues({}, combinedHeaders), currentHeaders != null ? currentHeaders : {}), {});
}
async function delay$1(delayInMs, options) {
	if (delayInMs == null) return Promise.resolve();
	const signal = options == null ? void 0 : options.abortSignal;
	return new Promise((resolve2, reject) => {
		if (signal == null ? void 0 : signal.aborted) {
			reject(createAbortError$1());
			return;
		}
		const timeoutId = setTimeout(() => {
			cleanup();
			resolve2();
		}, delayInMs);
		const cleanup = () => {
			clearTimeout(timeoutId);
			signal?.removeEventListener("abort", onAbort);
		};
		const onAbort = () => {
			cleanup();
			reject(createAbortError$1());
		};
		signal?.addEventListener("abort", onAbort);
	});
}
function createAbortError$1() {
	return new DOMException("Delay was aborted", "AbortError");
}
function extractResponseHeaders$1(response) {
	return Object.fromEntries([...response.headers]);
}
var { btoa: btoa$2, atob: atob$2 } = globalThis;
function convertUint8ArrayToBase64$1(array) {
	let latin1string = "";
	for (let i = 0; i < array.length; i++) latin1string += String.fromCodePoint(array[i]);
	return btoa$2(latin1string);
}
var createIdGenerator$1 = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {}) => {
	const generator = () => {
		const alphabetLength = alphabet.length;
		const chars = new Array(size);
		for (let i = 0; i < size; i++) chars[i] = alphabet[Math.random() * alphabetLength | 0];
		return chars.join("");
	};
	if (prefix == null) return generator;
	if (alphabet.includes(separator)) throw new InvalidArgumentError$2({
		argument: "separator",
		message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
	});
	return () => `${prefix}${separator}${generator()}`;
};
var generateId$1 = createIdGenerator$1();
function isAbortError$1(error) {
	return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES$1 = ["fetch failed", "failed to fetch"];
var BUN_ERROR_CODES$1 = [
	"ConnectionRefused",
	"ConnectionClosed",
	"FailedToOpenSocket",
	"ECONNRESET",
	"ECONNREFUSED",
	"ETIMEDOUT",
	"EPIPE"
];
function isBunNetworkError$1(error) {
	if (!(error instanceof Error)) return false;
	const code = error.code;
	if (typeof code === "string" && BUN_ERROR_CODES$1.includes(code)) return true;
	return false;
}
function handleFetchError$1({ error, url, requestBodyValues }) {
	if (isAbortError$1(error)) return error;
	if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES$1.includes(error.message.toLowerCase())) {
		const cause = error.cause;
		if (cause != null) return new APICallError$1({
			message: `Cannot connect to API: ${cause.message}`,
			cause,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	if (isBunNetworkError$1(error)) return new APICallError$1({
		message: `Cannot connect to API: ${error.message}`,
		cause: error,
		url,
		requestBodyValues,
		isRetryable: true
	});
	return error;
}
function getRuntimeEnvironmentUserAgent$1(globalThisAny = globalThis) {
	var _a22, _b22, _c;
	if (globalThisAny.window) return `runtime/browser`;
	if ((_a22 = globalThisAny.navigator) == null ? void 0 : _a22.userAgent) return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
	if ((_c = (_b22 = globalThisAny.process) == null ? void 0 : _b22.versions) == null ? void 0 : _c.node) return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
	if (globalThisAny.EdgeRuntime) return `runtime/vercel-edge`;
	return "runtime/unknown";
}
function normalizeHeaders$1(headers) {
	if (headers == null) return {};
	const normalized = {};
	if (headers instanceof Headers) headers.forEach((value, key) => {
		normalized[key.toLowerCase()] = value;
	});
	else {
		if (!Array.isArray(headers)) headers = Object.entries(headers);
		for (const [key, value] of headers) if (value != null) normalized[key.toLowerCase()] = value;
	}
	return normalized;
}
function withUserAgentSuffix$1(headers, ...userAgentSuffixParts) {
	const normalizedHeaders = new Headers(normalizeHeaders$1(headers));
	const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
	normalizedHeaders.set("user-agent", [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" "));
	return Object.fromEntries(normalizedHeaders.entries());
}
var VERSION$4 = "4.0.23";
var getOriginalFetch$1 = () => globalThis.fetch;
var getFromApi$1 = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch$1() }) => {
	try {
		const response = await fetch2(url, {
			method: "GET",
			headers: withUserAgentSuffix$1(headers, `ai-sdk/provider-utils/${VERSION$4}`, getRuntimeEnvironmentUserAgent$1()),
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders$1(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: {}
				});
			} catch (error) {
				if (isAbortError$1(error) || APICallError$1.isInstance(error)) throw error;
				throw new APICallError$1({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: {}
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: {}
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError$1(error) || APICallError$1.isInstance(error)) throw error;
			}
			throw new APICallError$1({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: {}
			});
		}
	} catch (error) {
		throw handleFetchError$1({
			error,
			url,
			requestBodyValues: {}
		});
	}
};
function loadApiKey({ apiKey, environmentVariableName, apiKeyParameterName = "apiKey", description }) {
	if (typeof apiKey === "string") return apiKey;
	if (apiKey != null) throw new LoadAPIKeyError$1({ message: `${description} API key must be a string.` });
	if (typeof process === "undefined") throw new LoadAPIKeyError$1({ message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables are not supported in this environment.` });
	apiKey = process.env[environmentVariableName];
	if (apiKey == null) throw new LoadAPIKeyError$1({ message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.` });
	if (typeof apiKey !== "string") throw new LoadAPIKeyError$1({ message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.` });
	return apiKey;
}
var suspectProtoRx$1 = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx$1 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse$1(text) {
	const obj = JSON.parse(text);
	if (obj === null || typeof obj !== "object") return obj;
	if (suspectProtoRx$1.test(text) === false && suspectConstructorRx$1.test(text) === false) return obj;
	return filter$1(obj);
}
function filter$1(obj) {
	let next = [obj];
	while (next.length) {
		const nodes = next;
		next = [];
		for (const node of nodes) {
			if (Object.prototype.hasOwnProperty.call(node, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(node, "constructor") && node.constructor !== null && typeof node.constructor === "object" && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const key in node) {
				const value = node[key];
				if (value && typeof value === "object") next.push(value);
			}
		}
	}
	return obj;
}
function secureJsonParse$1(text) {
	const { stackTraceLimit } = Error;
	try {
		Error.stackTraceLimit = 0;
	} catch (e) {
		return _parse$1(text);
	}
	try {
		return _parse$1(text);
	} finally {
		Error.stackTraceLimit = stackTraceLimit;
	}
}
function addAdditionalPropertiesToJsonSchema$1(jsonSchema2) {
	if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
		jsonSchema2.additionalProperties = false;
		const { properties } = jsonSchema2;
		if (properties != null) for (const key of Object.keys(properties)) properties[key] = visit$1(properties[key]);
	}
	if (jsonSchema2.items != null) jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit$1) : visit$1(jsonSchema2.items);
	if (jsonSchema2.anyOf != null) jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit$1);
	if (jsonSchema2.allOf != null) jsonSchema2.allOf = jsonSchema2.allOf.map(visit$1);
	if (jsonSchema2.oneOf != null) jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit$1);
	const { definitions } = jsonSchema2;
	if (definitions != null) for (const key of Object.keys(definitions)) definitions[key] = visit$1(definitions[key]);
	return jsonSchema2;
}
function visit$1(def) {
	if (typeof def === "boolean") return def;
	return addAdditionalPropertiesToJsonSchema$1(def);
}
var ignoreOverride$1 = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions$1 = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: true,
	rejectedAdditionalProperties: false,
	definitionPath: "definitions",
	strictUnions: false,
	definitions: {},
	errorMessages: false,
	patternStrategy: "escape",
	applyRegexFlags: false,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref"
};
var getDefaultOptions$1 = (options) => typeof options === "string" ? __spreadProps(__spreadValues({}, defaultOptions$1), { name: options }) : __spreadValues(__spreadValues({}, defaultOptions$1), options);
function parseAnyDef$1() {
	return {};
}
function parseArrayDef$1(def, refs) {
	var _a22, _b22, _c;
	const res = { type: "array" };
	if (((_a22 = def.type) == null ? void 0 : _a22._def) && ((_c = (_b22 = def.type) == null ? void 0 : _b22._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) res.items = parseDef$1(def.type._def, __spreadProps(__spreadValues({}, refs), { currentPath: [...refs.currentPath, "items"] }));
	if (def.minLength) res.minItems = def.minLength.value;
	if (def.maxLength) res.maxItems = def.maxLength.value;
	if (def.exactLength) {
		res.minItems = def.exactLength.value;
		res.maxItems = def.exactLength.value;
	}
	return res;
}
function parseBigintDef$1(def) {
	const res = {
		type: "integer",
		format: "int64"
	};
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf":
			res.multipleOf = check.value;
			break;
	}
	return res;
}
function parseBooleanDef$1() {
	return { type: "boolean" };
}
function parseBrandedDef$1(_def, refs) {
	return parseDef$1(_def.type._def, refs);
}
var parseCatchDef$1 = (def, refs) => {
	return parseDef$1(def.innerType._def, refs);
};
function parseDateDef$1(def, refs, overrideDateStrategy) {
	const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
	if (Array.isArray(strategy)) return { anyOf: strategy.map((item, i) => parseDateDef$1(def, refs, item)) };
	switch (strategy) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return integerDateParser$1(def);
	}
}
var integerDateParser$1 = (def) => {
	const res = {
		type: "integer",
		format: "unix-time"
	};
	for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minimum = check.value;
			break;
		case "max":
			res.maximum = check.value;
			break;
	}
	return res;
};
function parseDefaultDef$1(_def, refs) {
	return __spreadProps(__spreadValues({}, parseDef$1(_def.innerType._def, refs)), { default: _def.defaultValue() });
}
function parseEffectsDef$1(_def, refs) {
	return refs.effectStrategy === "input" ? parseDef$1(_def.schema._def, refs) : parseAnyDef$1();
}
function parseEnumDef$1(def) {
	return {
		type: "string",
		enum: Array.from(def.values)
	};
}
var isJsonSchema7AllOfType$1 = (type) => {
	if ("type" in type && type.type === "string") return false;
	return "allOf" in type;
};
function parseIntersectionDef$1(def, refs) {
	const allOf = [parseDef$1(def.left._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
		...refs.currentPath,
		"allOf",
		"0"
	] })), parseDef$1(def.right._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
		...refs.currentPath,
		"allOf",
		"1"
	] }))].filter((x) => !!x);
	const mergedAllOf = [];
	allOf.forEach((schema) => {
		if (isJsonSchema7AllOfType$1(schema)) mergedAllOf.push(...schema.allOf);
		else {
			let nestedSchema = schema;
			if ("additionalProperties" in schema && schema.additionalProperties === false) {
				const _a16 = schema, { additionalProperties } = _a16;
				nestedSchema = __objRest(_a16, ["additionalProperties"]);
			}
			mergedAllOf.push(nestedSchema);
		}
	});
	return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef$1(def) {
	const parsedType = typeof def.value;
	if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return { type: Array.isArray(def.value) ? "array" : "object" };
	return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		const: def.value
	};
}
var emojiRegex$1 = void 0;
var zodPatterns$1 = {
	/**
	* `c` was changed to `[cC]` to replicate /i flag
	*/
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	/**
	* `a-z` was added to replicate /i flag
	*/
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
	/**
	* Constructed a valid Unicode RegExp
	*
	* Lazily instantiate since this type of regex isn't supported
	* in all envs (e.g. React Native).
	*
	* See:
	* https://github.com/colinhacks/zod/issues/2433
	* Fix in Zod:
	* https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
	*/
	emoji: () => {
		if (emojiRegex$1 === void 0) emojiRegex$1 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
		return emojiRegex$1;
	},
	/**
	* Unused
	*/
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	/**
	* Unused
	*/
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	/**
	* Unused
	*/
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef$1(def, refs) {
	const res = { type: "string" };
	if (def.checks) for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			break;
		case "max":
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "email":
			switch (refs.emailStrategy) {
				case "format:email":
					addFormat$1(res, "email", check.message, refs);
					break;
				case "format:idn-email":
					addFormat$1(res, "idn-email", check.message, refs);
					break;
				case "pattern:zod":
					addPattern$1(res, zodPatterns$1.email, check.message, refs);
					break;
			}
			break;
		case "url":
			addFormat$1(res, "uri", check.message, refs);
			break;
		case "uuid":
			addFormat$1(res, "uuid", check.message, refs);
			break;
		case "regex":
			addPattern$1(res, check.regex, check.message, refs);
			break;
		case "cuid":
			addPattern$1(res, zodPatterns$1.cuid, check.message, refs);
			break;
		case "cuid2":
			addPattern$1(res, zodPatterns$1.cuid2, check.message, refs);
			break;
		case "startsWith":
			addPattern$1(res, RegExp(`^${escapeLiteralCheckValue$1(check.value, refs)}`), check.message, refs);
			break;
		case "endsWith":
			addPattern$1(res, RegExp(`${escapeLiteralCheckValue$1(check.value, refs)}$`), check.message, refs);
			break;
		case "datetime":
			addFormat$1(res, "date-time", check.message, refs);
			break;
		case "date":
			addFormat$1(res, "date", check.message, refs);
			break;
		case "time":
			addFormat$1(res, "time", check.message, refs);
			break;
		case "duration":
			addFormat$1(res, "duration", check.message, refs);
			break;
		case "length":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "includes":
			addPattern$1(res, RegExp(escapeLiteralCheckValue$1(check.value, refs)), check.message, refs);
			break;
		case "ip":
			if (check.version !== "v6") addFormat$1(res, "ipv4", check.message, refs);
			if (check.version !== "v4") addFormat$1(res, "ipv6", check.message, refs);
			break;
		case "base64url":
			addPattern$1(res, zodPatterns$1.base64url, check.message, refs);
			break;
		case "jwt":
			addPattern$1(res, zodPatterns$1.jwt, check.message, refs);
			break;
		case "cidr":
			if (check.version !== "v6") addPattern$1(res, zodPatterns$1.ipv4Cidr, check.message, refs);
			if (check.version !== "v4") addPattern$1(res, zodPatterns$1.ipv6Cidr, check.message, refs);
			break;
		case "emoji":
			addPattern$1(res, zodPatterns$1.emoji(), check.message, refs);
			break;
		case "ulid":
			addPattern$1(res, zodPatterns$1.ulid, check.message, refs);
			break;
		case "base64":
			switch (refs.base64Strategy) {
				case "format:binary":
					addFormat$1(res, "binary", check.message, refs);
					break;
				case "contentEncoding:base64":
					res.contentEncoding = "base64";
					break;
				case "pattern:zod":
					addPattern$1(res, zodPatterns$1.base64, check.message, refs);
					break;
			}
			break;
		case "nanoid": addPattern$1(res, zodPatterns$1.nanoid, check.message, refs);
		case "toLowerCase":
		case "toUpperCase":
		case "trim": break;
		default:
	}
	return res;
}
function escapeLiteralCheckValue$1(literal, refs) {
	return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric$1(literal) : literal;
}
var ALPHA_NUMERIC$1 = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric$1(source) {
	let result = "";
	for (let i = 0; i < source.length; i++) {
		if (!ALPHA_NUMERIC$1.has(source[i])) result += "\\";
		result += source[i];
	}
	return result;
}
function addFormat$1(schema, value, message, refs) {
	var _a22;
	if (schema.format || ((_a22 = schema.anyOf) == null ? void 0 : _a22.some((x) => x.format))) {
		if (!schema.anyOf) schema.anyOf = [];
		if (schema.format) {
			schema.anyOf.push({ format: schema.format });
			delete schema.format;
		}
		schema.anyOf.push(__spreadValues({ format: value }, message && refs.errorMessages && { errorMessage: { format: message } }));
	} else schema.format = value;
}
function addPattern$1(schema, regex, message, refs) {
	var _a22;
	if (schema.pattern || ((_a22 = schema.allOf) == null ? void 0 : _a22.some((x) => x.pattern))) {
		if (!schema.allOf) schema.allOf = [];
		if (schema.pattern) {
			schema.allOf.push({ pattern: schema.pattern });
			delete schema.pattern;
		}
		schema.allOf.push(__spreadValues({ pattern: stringifyRegExpWithFlags$1(regex, refs) }, message && refs.errorMessages && { errorMessage: { pattern: message } }));
	} else schema.pattern = stringifyRegExpWithFlags$1(regex, refs);
}
function stringifyRegExpWithFlags$1(regex, refs) {
	var _a22;
	if (!refs.applyRegexFlags || !regex.flags) return regex.source;
	const flags = {
		i: regex.flags.includes("i"),
		m: regex.flags.includes("m"),
		s: regex.flags.includes("s")
	};
	const source = flags.i ? regex.source.toLowerCase() : regex.source;
	let pattern = "";
	let isEscaped = false;
	let inCharGroup = false;
	let inCharRange = false;
	for (let i = 0; i < source.length; i++) {
		if (isEscaped) {
			pattern += source[i];
			isEscaped = false;
			continue;
		}
		if (flags.i) {
			if (inCharGroup) {
				if (source[i].match(/[a-z]/)) {
					if (inCharRange) {
						pattern += source[i];
						pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
						inCharRange = false;
					} else if (source[i + 1] === "-" && ((_a22 = source[i + 2]) == null ? void 0 : _a22.match(/[a-z]/))) {
						pattern += source[i];
						inCharRange = true;
					} else pattern += `${source[i]}${source[i].toUpperCase()}`;
					continue;
				}
			} else if (source[i].match(/[a-z]/)) {
				pattern += `[${source[i]}${source[i].toUpperCase()}]`;
				continue;
			}
		}
		if (flags.m) {
			if (source[i] === "^") {
				pattern += `(^|(?<=[\r
]))`;
				continue;
			} else if (source[i] === "$") {
				pattern += `($|(?=[\r
]))`;
				continue;
			}
		}
		if (flags.s && source[i] === ".") {
			pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
			continue;
		}
		pattern += source[i];
		if (source[i] === "\\") isEscaped = true;
		else if (inCharGroup && source[i] === "]") inCharGroup = false;
		else if (!inCharGroup && source[i] === "[") inCharGroup = true;
	}
	try {
		new RegExp(pattern);
	} catch (e) {
		console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
		return regex.source;
	}
	return pattern;
}
function parseRecordDef$1(def, refs) {
	var _a22, _b22, _c, _d, _e, _f;
	const schema = {
		type: "object",
		additionalProperties: (_a22 = parseDef$1(def.valueType._def, __spreadProps(__spreadValues({}, refs), { currentPath: [...refs.currentPath, "additionalProperties"] }))) != null ? _a22 : refs.allowedAdditionalProperties
	};
	if (((_b22 = def.keyType) == null ? void 0 : _b22._def.typeName) === ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
		const _a16 = parseStringDef$1(def.keyType._def, refs), { type } = _a16, keyType = __objRest(_a16, ["type"]);
		return __spreadProps(__spreadValues({}, schema), { propertyNames: keyType });
	} else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind.ZodEnum) return __spreadProps(__spreadValues({}, schema), { propertyNames: { enum: def.keyType._def.values } });
	else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
		const _b16 = parseBrandedDef$1(def.keyType._def, refs), { type } = _b16, keyType = __objRest(_b16, ["type"]);
		return __spreadProps(__spreadValues({}, schema), { propertyNames: keyType });
	}
	return schema;
}
function parseMapDef$1(def, refs) {
	if (refs.mapStrategy === "record") return parseRecordDef$1(def, refs);
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [parseDef$1(def.keyType._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
				...refs.currentPath,
				"items",
				"items",
				"0"
			] })) || parseAnyDef$1(), parseDef$1(def.valueType._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
				...refs.currentPath,
				"items",
				"items",
				"1"
			] })) || parseAnyDef$1()],
			minItems: 2,
			maxItems: 2
		}
	};
}
function parseNativeEnumDef$1(def) {
	const object = def.values;
	const actualValues = Object.keys(def.values).filter((key) => {
		return typeof object[object[key]] !== "number";
	}).map((key) => object[key]);
	const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
	return {
		type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: actualValues
	};
}
function parseNeverDef$1() {
	return { not: parseAnyDef$1() };
}
function parseNullDef$1() {
	return { type: "null" };
}
var primitiveMappings$1 = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function parseUnionDef$1(def, refs) {
	const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
	if (options.every((x) => x._def.typeName in primitiveMappings$1 && (!x._def.checks || !x._def.checks.length))) {
		const types = options.reduce((types2, x) => {
			const type = primitiveMappings$1[x._def.typeName];
			return type && !types2.includes(type) ? [...types2, type] : types2;
		}, []);
		return { type: types.length > 1 ? types : types[0] };
	} else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
		const types = options.reduce((acc, x) => {
			const type = typeof x._def.value;
			switch (type) {
				case "string":
				case "number":
				case "boolean": return [...acc, type];
				case "bigint": return [...acc, "integer"];
				case "object": if (x._def.value === null) return [...acc, "null"];
				default: return acc;
			}
		}, []);
		if (types.length === options.length) {
			const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
			return {
				type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
				enum: options.reduce((acc, x) => {
					return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
				}, [])
			};
		}
	} else if (options.every((x) => x._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x2) => !acc.includes(x2))], [])
	};
	return asAnyOf$1(def, refs);
}
var asAnyOf$1 = (def, refs) => {
	const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef$1(x._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
		...refs.currentPath,
		"anyOf",
		`${i}`
	] }))).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
	return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef$1(def, refs) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) return { type: [primitiveMappings$1[def.innerType._def.typeName], "null"] };
	const base = parseDef$1(def.innerType._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
		...refs.currentPath,
		"anyOf",
		"0"
	] }));
	return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef$1(def) {
	const res = { type: "number" };
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "int":
			res.type = "integer";
			break;
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf":
			res.multipleOf = check.value;
			break;
	}
	return res;
}
function parseObjectDef$1(def, refs) {
	const result = {
		type: "object",
		properties: {}
	};
	const required = [];
	const shape = def.shape();
	for (const propName in shape) {
		let propDef = shape[propName];
		if (propDef === void 0 || propDef._def === void 0) continue;
		const propOptional = safeIsOptional$1(propDef);
		const parsedDef = parseDef$1(propDef._def, __spreadProps(__spreadValues({}, refs), {
			currentPath: [
				...refs.currentPath,
				"properties",
				propName
			],
			propertyPath: [
				...refs.currentPath,
				"properties",
				propName
			]
		}));
		if (parsedDef === void 0) continue;
		result.properties[propName] = parsedDef;
		if (!propOptional) required.push(propName);
	}
	if (required.length) result.required = required;
	const additionalProperties = decideAdditionalProperties$1(def, refs);
	if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
	return result;
}
function decideAdditionalProperties$1(def, refs) {
	if (def.catchall._def.typeName !== "ZodNever") return parseDef$1(def.catchall._def, __spreadProps(__spreadValues({}, refs), { currentPath: [...refs.currentPath, "additionalProperties"] }));
	switch (def.unknownKeys) {
		case "passthrough": return refs.allowedAdditionalProperties;
		case "strict": return refs.rejectedAdditionalProperties;
		case "strip": return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
	}
}
function safeIsOptional$1(schema) {
	try {
		return schema.isOptional();
	} catch (e) {
		return true;
	}
}
var parseOptionalDef$1 = (def, refs) => {
	var _a22;
	if (refs.currentPath.toString() === ((_a22 = refs.propertyPath) == null ? void 0 : _a22.toString())) return parseDef$1(def.innerType._def, refs);
	const innerSchema = parseDef$1(def.innerType._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
		...refs.currentPath,
		"anyOf",
		"1"
	] }));
	return innerSchema ? { anyOf: [{ not: parseAnyDef$1() }, innerSchema] } : parseAnyDef$1();
};
var parsePipelineDef$1 = (def, refs) => {
	if (refs.pipeStrategy === "input") return parseDef$1(def.in._def, refs);
	else if (refs.pipeStrategy === "output") return parseDef$1(def.out._def, refs);
	const a = parseDef$1(def.in._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
		...refs.currentPath,
		"allOf",
		"0"
	] }));
	return { allOf: [a, parseDef$1(def.out._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
		...refs.currentPath,
		"allOf",
		a ? "1" : "0"
	] }))].filter((x) => x !== void 0) };
};
function parsePromiseDef$1(def, refs) {
	return parseDef$1(def.type._def, refs);
}
function parseSetDef$1(def, refs) {
	const schema = {
		type: "array",
		uniqueItems: true,
		items: parseDef$1(def.valueType._def, __spreadProps(__spreadValues({}, refs), { currentPath: [...refs.currentPath, "items"] }))
	};
	if (def.minSize) schema.minItems = def.minSize.value;
	if (def.maxSize) schema.maxItems = def.maxSize.value;
	return schema;
}
function parseTupleDef$1(def, refs) {
	if (def.rest) return {
		type: "array",
		minItems: def.items.length,
		items: def.items.map((x, i) => parseDef$1(x._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
			...refs.currentPath,
			"items",
			`${i}`
		] }))).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
		additionalItems: parseDef$1(def.rest._def, __spreadProps(__spreadValues({}, refs), { currentPath: [...refs.currentPath, "additionalItems"] }))
	};
	else return {
		type: "array",
		minItems: def.items.length,
		maxItems: def.items.length,
		items: def.items.map((x, i) => parseDef$1(x._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
			...refs.currentPath,
			"items",
			`${i}`
		] }))).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
	};
}
function parseUndefinedDef$1() {
	return { not: parseAnyDef$1() };
}
function parseUnknownDef$1() {
	return parseAnyDef$1();
}
var parseReadonlyDef$1 = (def, refs) => {
	return parseDef$1(def.innerType._def, refs);
};
var selectParser$1 = (def, typeName, refs) => {
	switch (typeName) {
		case ZodFirstPartyTypeKind.ZodString: return parseStringDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodNumber: return parseNumberDef$1(def);
		case ZodFirstPartyTypeKind.ZodObject: return parseObjectDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodBigInt: return parseBigintDef$1(def);
		case ZodFirstPartyTypeKind.ZodBoolean: return parseBooleanDef$1();
		case ZodFirstPartyTypeKind.ZodDate: return parseDateDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodUndefined: return parseUndefinedDef$1();
		case ZodFirstPartyTypeKind.ZodNull: return parseNullDef$1();
		case ZodFirstPartyTypeKind.ZodArray: return parseArrayDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodUnion:
		case ZodFirstPartyTypeKind.ZodDiscriminatedUnion: return parseUnionDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodIntersection: return parseIntersectionDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodTuple: return parseTupleDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodRecord: return parseRecordDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodLiteral: return parseLiteralDef$1(def);
		case ZodFirstPartyTypeKind.ZodEnum: return parseEnumDef$1(def);
		case ZodFirstPartyTypeKind.ZodNativeEnum: return parseNativeEnumDef$1(def);
		case ZodFirstPartyTypeKind.ZodNullable: return parseNullableDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodOptional: return parseOptionalDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodMap: return parseMapDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodSet: return parseSetDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodLazy: return () => def.getter()._def;
		case ZodFirstPartyTypeKind.ZodPromise: return parsePromiseDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodNaN:
		case ZodFirstPartyTypeKind.ZodNever: return parseNeverDef$1();
		case ZodFirstPartyTypeKind.ZodEffects: return parseEffectsDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodAny: return parseAnyDef$1();
		case ZodFirstPartyTypeKind.ZodUnknown: return parseUnknownDef$1();
		case ZodFirstPartyTypeKind.ZodDefault: return parseDefaultDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodBranded: return parseBrandedDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodReadonly: return parseReadonlyDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodCatch: return parseCatchDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodPipeline: return parsePipelineDef$1(def, refs);
		case ZodFirstPartyTypeKind.ZodFunction:
		case ZodFirstPartyTypeKind.ZodVoid:
		case ZodFirstPartyTypeKind.ZodSymbol: return;
		default: return /* @__PURE__ */ ((_) => void 0)(typeName);
	}
};
var getRelativePath$1 = (pathA, pathB) => {
	let i = 0;
	for (; i < pathA.length && i < pathB.length; i++) if (pathA[i] !== pathB[i]) break;
	return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef$1(def, refs, forceResolution = false) {
	var _a22;
	const seenItem = refs.seen.get(def);
	if (refs.override) {
		const overrideResult = (_a22 = refs.override) == null ? void 0 : _a22.call(refs, def, refs, seenItem, forceResolution);
		if (overrideResult !== ignoreOverride$1) return overrideResult;
	}
	if (seenItem && !forceResolution) {
		const seenSchema = get$ref$1(seenItem, refs);
		if (seenSchema !== void 0) return seenSchema;
	}
	const newItem = {
		def,
		path: refs.currentPath,
		jsonSchema: void 0
	};
	refs.seen.set(def, newItem);
	const jsonSchemaOrGetter = selectParser$1(def, def.typeName, refs);
	const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef$1(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
	if (jsonSchema2) addMeta$1(def, refs, jsonSchema2);
	if (refs.postProcess) {
		const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
		newItem.jsonSchema = jsonSchema2;
		return postProcessResult;
	}
	newItem.jsonSchema = jsonSchema2;
	return jsonSchema2;
}
var get$ref$1 = (item, refs) => {
	switch (refs.$refStrategy) {
		case "root": return { $ref: item.path.join("/") };
		case "relative": return { $ref: getRelativePath$1(refs.currentPath, item.path) };
		case "none":
		case "seen":
			if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
				console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
				return parseAnyDef$1();
			}
			return refs.$refStrategy === "seen" ? parseAnyDef$1() : void 0;
	}
};
var addMeta$1 = (def, refs, jsonSchema2) => {
	if (def.description) jsonSchema2.description = def.description;
	return jsonSchema2;
};
var getRefs$1 = (options) => {
	const _options = getDefaultOptions$1(options);
	const currentPath = _options.name !== void 0 ? [
		..._options.basePath,
		_options.definitionPath,
		_options.name
	] : _options.basePath;
	return __spreadProps(__spreadValues({}, _options), {
		currentPath,
		propertyPath: void 0,
		seen: new Map(Object.entries(_options.definitions).map(([name22, def]) => [def._def, {
			def: def._def,
			path: [
				..._options.basePath,
				_options.definitionPath,
				name22
			],
			jsonSchema: void 0
		}]))
	});
};
var zod3ToJsonSchema$1 = (schema, options) => {
	var _a22;
	const refs = getRefs$1(options);
	let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name32, schema2]) => {
		var _a32;
		return __spreadProps(__spreadValues({}, acc), { [name32]: (_a32 = parseDef$1(schema2._def, __spreadProps(__spreadValues({}, refs), { currentPath: [
			...refs.basePath,
			refs.definitionPath,
			name32
		] }), true)) != null ? _a32 : parseAnyDef$1() });
	}, {}) : void 0;
	const name22 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
	const main = (_a22 = parseDef$1(schema._def, name22 === void 0 ? refs : __spreadProps(__spreadValues({}, refs), { currentPath: [
		...refs.basePath,
		refs.definitionPath,
		name22
	] }), false)) != null ? _a22 : parseAnyDef$1();
	const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
	if (title !== void 0) main.title = title;
	const combined = name22 === void 0 ? definitions ? __spreadProps(__spreadValues({}, main), { [refs.definitionPath]: definitions }) : main : {
		$ref: [
			...refs.$refStrategy === "relative" ? [] : refs.basePath,
			refs.definitionPath,
			name22
		].join("/"),
		[refs.definitionPath]: __spreadProps(__spreadValues({}, definitions), { [name22]: main })
	};
	combined.$schema = "http://json-schema.org/draft-07/schema#";
	return combined;
};
var schemaSymbol$1 = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function jsonSchema$1(jsonSchema2, { validate } = {}) {
	return {
		[schemaSymbol$1]: true,
		_type: void 0,
		get jsonSchema() {
			if (typeof jsonSchema2 === "function") jsonSchema2 = jsonSchema2();
			return jsonSchema2;
		},
		validate
	};
}
function isSchema$1(value) {
	return typeof value === "object" && value !== null && schemaSymbol$1 in value && value[schemaSymbol$1] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema$1(schema) {
	return schema == null ? jsonSchema$1({
		properties: {},
		additionalProperties: false
	}) : isSchema$1(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema$1(schema) : standardSchema$1(schema) : schema();
}
function standardSchema$1(standardSchema2) {
	return jsonSchema$1(() => addAdditionalPropertiesToJsonSchema$1(standardSchema2["~standard"].jsonSchema.input({ target: "draft-07" })), { validate: async (value) => {
		const result = await standardSchema2["~standard"].validate(value);
		return "value" in result ? {
			success: true,
			value: result.value
		} : {
			success: false,
			error: new TypeValidationError$1({
				value,
				cause: result.issues
			})
		};
	} });
}
function zod3Schema$1(zodSchema2, options) {
	var _a22;
	const useReferences = (_a22 = options == null ? void 0 : options.useReferences) != null ? _a22 : false;
	return jsonSchema$1(() => zod3ToJsonSchema$1(zodSchema2, { $refStrategy: useReferences ? "root" : "none" }), { validate: async (value) => {
		const result = await zodSchema2.safeParseAsync(value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function zod4Schema$1(zodSchema2, options) {
	var _a22;
	const useReferences = (_a22 = options == null ? void 0 : options.useReferences) != null ? _a22 : false;
	return jsonSchema$1(() => addAdditionalPropertiesToJsonSchema$1(toJSONSchema(zodSchema2, {
		target: "draft-7",
		io: "input",
		reused: useReferences ? "ref" : "inline"
	})), { validate: async (value) => {
		const result = await safeParseAsync(zodSchema2, value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function isZod4Schema$1(zodSchema2) {
	return "_zod" in zodSchema2;
}
function zodSchema$1(zodSchema2, options) {
	if (isZod4Schema$1(zodSchema2)) return zod4Schema$1(zodSchema2, options);
	else return zod3Schema$1(zodSchema2, options);
}
async function validateTypes$1({ value, schema, context }) {
	const result = await safeValidateTypes$1({
		value,
		schema,
		context
	});
	if (!result.success) throw TypeValidationError$1.wrap({
		value,
		cause: result.error,
		context
	});
	return result.value;
}
async function safeValidateTypes$1({ value, schema, context }) {
	const actualSchema = asSchema$1(schema);
	try {
		if (actualSchema.validate == null) return {
			success: true,
			value,
			rawValue: value
		};
		const result = await actualSchema.validate(value);
		if (result.success) return {
			success: true,
			value: result.value,
			rawValue: value
		};
		return {
			success: false,
			error: TypeValidationError$1.wrap({
				value,
				cause: result.error,
				context
			}),
			rawValue: value
		};
	} catch (error) {
		return {
			success: false,
			error: TypeValidationError$1.wrap({
				value,
				cause: error,
				context
			}),
			rawValue: value
		};
	}
}
async function parseJSON$1({ text, schema }) {
	try {
		const value = secureJsonParse$1(text);
		if (schema == null) return value;
		return validateTypes$1({
			value,
			schema
		});
	} catch (error) {
		if (JSONParseError$1.isInstance(error) || TypeValidationError$1.isInstance(error)) throw error;
		throw new JSONParseError$1({
			text,
			cause: error
		});
	}
}
async function safeParseJSON$1({ text, schema }) {
	try {
		const value = secureJsonParse$1(text);
		if (schema == null) return {
			success: true,
			value,
			rawValue: value
		};
		return await safeValidateTypes$1({
			value,
			schema
		});
	} catch (error) {
		return {
			success: false,
			error: JSONParseError$1.isInstance(error) ? error : new JSONParseError$1({
				text,
				cause: error
			}),
			rawValue: void 0
		};
	}
}
function isParsableJson(input) {
	try {
		secureJsonParse$1(input);
		return true;
	} catch (e) {
		return false;
	}
}
function parseJsonEventStream$1({ stream, schema }) {
	return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream$1()).pipeThrough(new TransformStream({ async transform({ data }, controller) {
		if (data === "[DONE]") return;
		controller.enqueue(await safeParseJSON$1({
			text: data,
			schema
		}));
	} }));
}
var getOriginalFetch2$1 = () => globalThis.fetch;
var postJsonToApi$1 = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 }) => postToApi$1({
	url,
	headers: __spreadValues({ "Content-Type": "application/json" }, headers),
	body: {
		content: JSON.stringify(body),
		values: body
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch: fetch2
});
var postToApi$1 = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch2$1() }) => {
	try {
		const response = await fetch2(url, {
			method: "POST",
			headers: withUserAgentSuffix$1(headers, `ai-sdk/provider-utils/${VERSION$4}`, getRuntimeEnvironmentUserAgent$1()),
			body: body.content,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders$1(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: body.values
				});
			} catch (error) {
				if (isAbortError$1(error) || APICallError$1.isInstance(error)) throw error;
				throw new APICallError$1({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: body.values
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: body.values
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError$1(error) || APICallError$1.isInstance(error)) throw error;
			}
			throw new APICallError$1({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: body.values
			});
		}
	} catch (error) {
		throw handleFetchError$1({
			error,
			url,
			requestBodyValues: body.values
		});
	}
};
function tool$1(tool2) {
	return tool2;
}
function createProviderToolFactory({ id, inputSchema }) {
	return (_a16) => {
		var _b16 = _a16, { execute, outputSchema, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable } = _b16;
		return tool$1({
			type: "provider",
			id,
			args: __objRest(_b16, [
				"execute",
				"outputSchema",
				"needsApproval",
				"toModelOutput",
				"onInputStart",
				"onInputDelta",
				"onInputAvailable"
			]),
			inputSchema,
			outputSchema,
			execute,
			needsApproval,
			toModelOutput,
			onInputStart,
			onInputDelta,
			onInputAvailable
		});
	};
}
var createJsonErrorResponseHandler$1 = ({ errorSchema, errorToMessage, isRetryable }) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const responseHeaders = extractResponseHeaders$1(response);
	if (responseBody.trim() === "") return {
		responseHeaders,
		value: new APICallError$1({
			message: response.statusText,
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody,
			isRetryable: isRetryable == null ? void 0 : isRetryable(response)
		})
	};
	try {
		const parsedError = await parseJSON$1({
			text: responseBody,
			schema: errorSchema
		});
		return {
			responseHeaders,
			value: new APICallError$1({
				message: errorToMessage(parsedError),
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				data: parsedError,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
			})
		};
	} catch (parseError) {
		return {
			responseHeaders,
			value: new APICallError$1({
				message: response.statusText,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response)
			})
		};
	}
};
var createEventSourceResponseHandler$1 = (chunkSchema) => async ({ response }) => {
	const responseHeaders = extractResponseHeaders$1(response);
	if (response.body == null) throw new EmptyResponseBodyError$1({});
	return {
		responseHeaders,
		value: parseJsonEventStream$1({
			stream: response.body,
			schema: chunkSchema
		})
	};
};
var createJsonResponseHandler$1 = (responseSchema) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const parsedResult = await safeParseJSON$1({
		text: responseBody,
		schema: responseSchema
	});
	const responseHeaders = extractResponseHeaders$1(response);
	if (!parsedResult.success) throw new APICallError$1({
		message: "Invalid JSON response",
		cause: parsedResult.error,
		statusCode: response.status,
		responseHeaders,
		responseBody,
		url,
		requestBodyValues
	});
	return {
		responseHeaders,
		value: parsedResult.value,
		rawValue: parsedResult.rawValue
	};
};
function withoutTrailingSlash$1(url) {
	return url == null ? void 0 : url.replace(/\/$/, "");
}
function isDefinedOrNotNull(value) {
	return value !== null && value !== void 0;
}
var ReasoningFormat = /* @__PURE__ */ ((ReasoningFormat2) => {
	ReasoningFormat2["Unknown"] = "unknown";
	ReasoningFormat2["OpenAIResponsesV1"] = "openai-responses-v1";
	ReasoningFormat2["AzureOpenAIResponsesV1"] = "azure-openai-responses-v1";
	ReasoningFormat2["XAIResponsesV1"] = "xai-responses-v1";
	ReasoningFormat2["AnthropicClaudeV1"] = "anthropic-claude-v1";
	ReasoningFormat2["GoogleGeminiV1"] = "google-gemini-v1";
	return ReasoningFormat2;
})(ReasoningFormat || {});
var DEFAULT_REASONING_FORMAT = "anthropic-claude-v1";
var CommonReasoningDetailSchema = object$1({
	id: string().nullish(),
	format: _enum(ReasoningFormat).nullish(),
	index: number().optional()
}).loose();
var ReasoningDetailUnionSchema = union([
	object$1({
		type: literal("reasoning.summary"),
		summary: string()
	}).extend(CommonReasoningDetailSchema.shape),
	object$1({
		type: literal("reasoning.encrypted"),
		data: string()
	}).extend(CommonReasoningDetailSchema.shape),
	object$1({
		type: literal("reasoning.text"),
		text: string().nullish(),
		signature: string().nullish()
	}).extend(CommonReasoningDetailSchema.shape)
]);
var ReasoningDetailsWithUnknownSchema = union([ReasoningDetailUnionSchema, unknown().transform(() => null)]);
var ReasoningDetailArraySchema = array$1(ReasoningDetailsWithUnknownSchema).transform((d) => d.filter((d2) => !!d2));
union([
	object$1({ delta: object$1({ reasoning_details: array$1(ReasoningDetailsWithUnknownSchema) }) }).transform((data) => data.delta.reasoning_details.filter(isDefinedOrNotNull)),
	object$1({ message: object$1({ reasoning_details: array$1(ReasoningDetailsWithUnknownSchema) }) }).transform((data) => data.message.reasoning_details.filter(isDefinedOrNotNull)),
	object$1({
		text: string(),
		reasoning_details: array$1(ReasoningDetailsWithUnknownSchema)
	}).transform((data) => data.reasoning_details.filter(isDefinedOrNotNull))
]);
var OpenRouterErrorResponseSchema = object$1({ error: object$1({
	code: union([string(), number()]).nullable().optional().default(null),
	message: string(),
	type: string().nullable().optional().default(null),
	param: any().nullable().optional().default(null)
}).passthrough() }).passthrough();
function extractErrorMessage(data) {
	const metadata = data.error.metadata;
	if (!metadata) return data.error.message;
	const parts = [];
	if (typeof metadata.provider_name === "string" && metadata.provider_name) parts.push(`[${metadata.provider_name}]`);
	const raw = metadata.raw;
	const rawMessage = extractRawMessage(raw);
	if (rawMessage && rawMessage !== data.error.message) parts.push(rawMessage);
	else parts.push(data.error.message);
	return parts.join(" ");
}
function extractRawMessage(raw) {
	if (typeof raw === "string") try {
		const parsed = JSON.parse(raw);
		if (typeof parsed === "object" && parsed !== null) return extractRawMessage(parsed);
		return raw;
	} catch (e) {
		return raw;
	}
	if (typeof raw !== "object" || raw === null) return;
	const obj = raw;
	for (const field of [
		"message",
		"error",
		"detail",
		"details",
		"msg"
	]) {
		const value = obj[field];
		if (typeof value === "string" && value.length > 0) return value;
		if (typeof value === "object" && value !== null) {
			const nested = extractRawMessage(value);
			if (nested) return nested;
		}
	}
}
var openrouterFailedResponseHandler = createJsonErrorResponseHandler$1({
	errorSchema: OpenRouterErrorResponseSchema,
	errorToMessage: extractErrorMessage
});
var FileAnnotationSchema = object$1({
	type: literal("file"),
	file: object$1({
		hash: string(),
		name: string(),
		content: array$1(object$1({
			type: string(),
			text: string().optional()
		}).catchall(any())).optional()
	}).catchall(any())
}).catchall(any());
var OpenRouterProviderMetadataSchema = object$1({
	provider: string(),
	reasoning_details: array$1(ReasoningDetailUnionSchema).optional(),
	annotations: array$1(FileAnnotationSchema).optional(),
	usage: object$1({
		promptTokens: number(),
		promptTokensDetails: object$1({ cachedTokens: number() }).catchall(any()).optional(),
		completionTokens: number(),
		completionTokensDetails: object$1({ reasoningTokens: number() }).catchall(any()).optional(),
		totalTokens: number(),
		cost: number().optional(),
		costDetails: object$1({ upstreamInferenceCost: number() }).catchall(any()).optional()
	}).catchall(any())
}).catchall(any());
var OpenRouterProviderOptionsSchema = object$1({ openrouter: object$1({
	reasoning_details: ReasoningDetailArraySchema.optional(),
	annotations: array$1(FileAnnotationSchema).optional()
}).optional() }).optional();
function computeTokenUsage(usage) {
	var _a16, _b16, _c, _d, _e, _f, _g, _h;
	const promptTokens = (_a16 = usage.prompt_tokens) != null ? _a16 : 0;
	const completionTokens = (_b16 = usage.completion_tokens) != null ? _b16 : 0;
	const cacheReadTokens = (_d = (_c = usage.prompt_tokens_details) == null ? void 0 : _c.cached_tokens) != null ? _d : 0;
	const cacheWriteTokens = (_f = (_e = usage.prompt_tokens_details) == null ? void 0 : _e.cache_write_tokens) != null ? _f : void 0;
	const reasoningTokens = (_h = (_g = usage.completion_tokens_details) == null ? void 0 : _g.reasoning_tokens) != null ? _h : 0;
	return {
		inputTokens: {
			total: promptTokens,
			noCache: promptTokens - cacheReadTokens,
			cacheRead: cacheReadTokens,
			cacheWrite: cacheWriteTokens
		},
		outputTokens: {
			total: completionTokens,
			text: completionTokens - reasoningTokens,
			reasoning: reasoningTokens
		},
		raw: usage
	};
}
function emptyUsage() {
	return {
		inputTokens: {
			total: 0,
			noCache: void 0,
			cacheRead: void 0,
			cacheWrite: void 0
		},
		outputTokens: {
			total: 0,
			text: void 0,
			reasoning: void 0
		},
		raw: void 0
	};
}
function mapToUnified(finishReason) {
	switch (finishReason) {
		case "stop": return "stop";
		case "length": return "length";
		case "content_filter": return "content-filter";
		case "function_call":
		case "tool_calls": return "tool-calls";
		default: return "other";
	}
}
function mapOpenRouterFinishReason(finishReason) {
	return {
		unified: mapToUnified(finishReason),
		raw: finishReason != null ? finishReason : void 0
	};
}
function createFinishReason(unified, raw) {
	return {
		unified,
		raw
	};
}
function withStreamErrorHandling(source, onError) {
	const reader = source.getReader();
	return new ReadableStream({
		async pull(controller) {
			try {
				const { done, value } = await reader.read();
				if (done) controller.close();
				else controller.enqueue(value);
			} catch (err) {
				onError(err);
				reader.cancel().catch(() => {});
				controller.close();
			}
		},
		cancel(reason) {
			reader.cancel(reason);
		}
	});
}
function deterministicStringify(value) {
	return JSON.stringify(sortKeys(value));
}
function sortKeys(value) {
	if (value === null || value === void 0) return value;
	if (Array.isArray(value)) return value.map(sortKeys);
	if (typeof value === "object") {
		const sorted = {};
		const entries = Object.entries(value);
		entries.sort(([a], [b]) => a.localeCompare(b));
		for (const [key, val] of entries) sorted[key] = sortKeys(val);
		return sorted;
	}
	return value;
}
var _seenKeys;
var ReasoningDetailsDuplicateTracker = class {
	constructor() {
		__privateAdd(this, _seenKeys, /* @__PURE__ */ new Set());
	}
	/**
	* Attempts to track a detail.
	* Returns true if this is a NEW detail (not seen before and has valid key),
	* false if it was skipped (no valid key) or already seen (duplicate).
	*/
	upsert(detail) {
		const key = this.getCanonicalKey(detail);
		if (key === null) return false;
		if (__privateGet(this, _seenKeys).has(key)) return false;
		__privateGet(this, _seenKeys).add(key);
		return true;
	}
	getCanonicalKey(detail) {
		switch (detail.type) {
			case "reasoning.summary": return detail.summary;
			case "reasoning.encrypted":
				if (detail.id) return detail.id;
				return detail.data;
			case "reasoning.text":
				if (detail.text) return detail.text;
				if (detail.signature) return detail.signature;
				return null;
			default: return null;
		}
	}
};
_seenKeys = /* @__PURE__ */ new WeakMap();
var OPENROUTER_AUDIO_FORMATS = [
	"wav",
	"mp3",
	"aiff",
	"aac",
	"ogg",
	"flac",
	"m4a",
	"pcm16",
	"pcm24"
];
function isUrl({ url, protocols }) {
	try {
		const urlObj = new URL(url);
		return protocols.has(urlObj.protocol);
	} catch (_) {
		return false;
	}
}
function buildFileDataUrl({ data, mediaType, defaultMediaType }) {
	if (data instanceof Uint8Array) {
		const base64 = convertUint8ArrayToBase64$1(data);
		return `data:${mediaType != null ? mediaType : defaultMediaType};base64,${base64}`;
	}
	const stringData = data.toString();
	if (isUrl({
		url: stringData,
		protocols: /* @__PURE__ */ new Set(["http:", "https:"])
	})) return stringData;
	return stringData.startsWith("data:") ? stringData : `data:${mediaType != null ? mediaType : defaultMediaType};base64,${stringData}`;
}
function getFileUrl({ part, defaultMediaType }) {
	return buildFileDataUrl({
		data: part.data instanceof URL ? part.data.toString() : part.data,
		mediaType: part.mediaType,
		defaultMediaType
	});
}
function getMediaType(dataUrl, defaultMediaType) {
	var _a16;
	const match = dataUrl.match(/^data:([^;]+)/);
	return match ? (_a16 = match[1]) != null ? _a16 : defaultMediaType : defaultMediaType;
}
function getBase64FromDataUrl(dataUrl) {
	const match = dataUrl.match(/^data:[^;]*;base64,(.+)$/);
	return match ? match[1] : dataUrl;
}
var MIME_TO_FORMAT = {
	mpeg: "mp3",
	mp3: "mp3",
	"x-wav": "wav",
	wave: "wav",
	wav: "wav",
	ogg: "ogg",
	vorbis: "ogg",
	aac: "aac",
	"x-aac": "aac",
	m4a: "m4a",
	"x-m4a": "m4a",
	mp4: "m4a",
	aiff: "aiff",
	"x-aiff": "aiff",
	flac: "flac",
	"x-flac": "flac",
	pcm16: "pcm16",
	pcm24: "pcm24"
};
function getInputAudioData(part) {
	const fileData = getFileUrl({
		part,
		defaultMediaType: "audio/mpeg"
	});
	if (isUrl({
		url: fileData,
		protocols: /* @__PURE__ */ new Set(["http:", "https:"])
	})) throw new Error(`Audio files cannot be provided as URLs.

OpenRouter requires audio to be base64-encoded. Please:
1. Download the audio file locally
2. Read it as a Buffer or Uint8Array
3. Pass it as the data parameter

The AI SDK will automatically handle base64 encoding.

Learn more: https://openrouter.ai/docs/features/multimodal/audio`);
	const data = getBase64FromDataUrl(fileData);
	const mediaType = part.mediaType || "audio/mpeg";
	const format = MIME_TO_FORMAT[mediaType.replace("audio/", "")];
	if (format === void 0) {
		const supportedList = OPENROUTER_AUDIO_FORMATS.join(", ");
		throw new Error(`Unsupported audio format: "${mediaType}"

OpenRouter supports the following audio formats: ${supportedList}

Learn more: https://openrouter.ai/docs/features/multimodal/audio`);
	}
	return {
		data,
		format
	};
}
function getCacheControl(providerMetadata) {
	var _a16, _b16, _c;
	const anthropic = providerMetadata == null ? void 0 : providerMetadata.anthropic;
	const openrouter2 = providerMetadata == null ? void 0 : providerMetadata.openrouter;
	return (_c = (_b16 = (_a16 = openrouter2 == null ? void 0 : openrouter2.cacheControl) != null ? _a16 : openrouter2 == null ? void 0 : openrouter2.cache_control) != null ? _b16 : anthropic == null ? void 0 : anthropic.cacheControl) != null ? _c : anthropic == null ? void 0 : anthropic.cache_control;
}
function convertToOpenRouterChatMessages(prompt) {
	var _a16, _b16, _c, _d, _e, _f, _g, _h;
	const messages = [];
	const reasoningDetailsTracker = new ReasoningDetailsDuplicateTracker();
	for (const { role, content, providerOptions } of prompt) switch (role) {
		case "system": {
			const cacheControl = getCacheControl(providerOptions);
			messages.push({
				role: "system",
				content: [__spreadValues({
					type: "text",
					text: content
				}, cacheControl && { cache_control: cacheControl })]
			});
			break;
		}
		case "user": {
			if (content.length === 1 && ((_a16 = content[0]) == null ? void 0 : _a16.type) === "text") {
				const cacheControl = (_b16 = getCacheControl(providerOptions)) != null ? _b16 : getCacheControl(content[0].providerOptions);
				const contentWithCacheControl = cacheControl ? [{
					type: "text",
					text: content[0].text,
					cache_control: cacheControl
				}] : content[0].text;
				messages.push({
					role: "user",
					content: contentWithCacheControl
				});
				break;
			}
			const messageCacheControl = getCacheControl(providerOptions);
			let lastTextPartIndex = -1;
			for (let i = content.length - 1; i >= 0; i--) if (((_c = content[i]) == null ? void 0 : _c.type) === "text") {
				lastTextPartIndex = i;
				break;
			}
			const contentParts = content.map((part, index) => {
				var _a17, _b17, _c2, _d2, _e2, _f2, _g2;
				const isLastTextPart = part.type === "text" && index === lastTextPartIndex;
				const partCacheControl = getCacheControl(part.providerOptions);
				const cacheControl = part.type === "text" ? partCacheControl != null ? partCacheControl : isLastTextPart ? messageCacheControl : void 0 : partCacheControl;
				switch (part.type) {
					case "text": return __spreadValues({
						type: "text",
						text: part.text
					}, cacheControl && { cache_control: cacheControl });
					case "file": {
						if ((_a17 = part.mediaType) == null ? void 0 : _a17.startsWith("image/")) return __spreadValues({
							type: "image_url",
							image_url: { url: getFileUrl({
								part,
								defaultMediaType: "image/jpeg"
							}) }
						}, cacheControl && { cache_control: cacheControl });
						if ((_b17 = part.mediaType) == null ? void 0 : _b17.startsWith("video/")) return __spreadValues({
							type: "video_url",
							video_url: { url: getFileUrl({
								part,
								defaultMediaType: "video/mp4"
							}) }
						}, cacheControl && { cache_control: cacheControl });
						if ((_c2 = part.mediaType) == null ? void 0 : _c2.startsWith("audio/")) return __spreadValues({
							type: "input_audio",
							input_audio: getInputAudioData(part)
						}, cacheControl && { cache_control: cacheControl });
						const fileName = String((_g2 = (_f2 = (_e2 = (_d2 = part.providerOptions) == null ? void 0 : _d2.openrouter) == null ? void 0 : _e2.filename) != null ? _f2 : part.filename) != null ? _g2 : "");
						const fileData = getFileUrl({
							part,
							defaultMediaType: "application/pdf"
						});
						if (isUrl({
							url: fileData,
							protocols: /* @__PURE__ */ new Set(["http:", "https:"])
						})) return {
							type: "file",
							file: {
								filename: fileName,
								file_data: fileData
							}
						};
						return __spreadValues({
							type: "file",
							file: {
								filename: fileName,
								file_data: fileData
							}
						}, cacheControl && { cache_control: cacheControl });
					}
					default: return __spreadValues({
						type: "text",
						text: ""
					}, cacheControl && { cache_control: cacheControl });
				}
			});
			messages.push({
				role: "user",
				content: contentParts
			});
			break;
		}
		case "assistant": {
			let text = "";
			let reasoning = "";
			const toolCalls = [];
			for (const part of content) switch (part.type) {
				case "text":
					text += part.text;
					break;
				case "tool-call":
					toolCalls.push({
						id: part.toolCallId,
						type: "function",
						function: {
							name: part.toolName,
							arguments: deterministicStringify(part.input)
						}
					});
					break;
				case "reasoning":
					reasoning += part.text;
					break;
				case "file": break;
				default: break;
			}
			const parsedProviderOptions = OpenRouterProviderOptionsSchema.safeParse(providerOptions);
			const messageReasoningDetails = parsedProviderOptions.success ? (_e = (_d = parsedProviderOptions.data) == null ? void 0 : _d.openrouter) == null ? void 0 : _e.reasoning_details : void 0;
			const messageAnnotations = parsedProviderOptions.success ? (_g = (_f = parsedProviderOptions.data) == null ? void 0 : _f.openrouter) == null ? void 0 : _g.annotations : void 0;
			const candidateReasoningDetails = messageReasoningDetails && Array.isArray(messageReasoningDetails) ? messageReasoningDetails : findFirstReasoningDetails(content);
			let finalReasoningDetails;
			if (candidateReasoningDetails) {
				const validDetails = candidateReasoningDetails.filter((detail) => {
					var _a17;
					if (detail.type !== "reasoning.text") return true;
					const format = (_a17 = detail.format) != null ? _a17 : DEFAULT_REASONING_FORMAT;
					if (format !== "anthropic-claude-v1" && format !== "google-gemini-v1") return true;
					return !!detail.signature;
				});
				if (validDetails.length < candidateReasoningDetails.length) {
					const logger = globalThis.AI_SDK_LOG_WARNINGS;
					if (logger !== false && typeof logger !== "function") console.warn("[openrouter] Some reasoning_details entries were removed because they were missing signatures. See https://github.com/OpenRouterTeam/ai-sdk-provider/issues/423 and https://github.com/OpenRouterTeam/ai-sdk-provider/issues/418 for more details.");
				}
				const uniqueDetails = [];
				for (const detail of validDetails) if (reasoningDetailsTracker.upsert(detail)) uniqueDetails.push(detail);
				finalReasoningDetails = uniqueDetails;
			}
			const effectiveReasoning = reasoning && finalReasoningDetails && finalReasoningDetails.length > 0 ? reasoning : void 0;
			messages.push({
				role: "assistant",
				content: text,
				tool_calls: toolCalls.length > 0 ? toolCalls : void 0,
				reasoning: effectiveReasoning,
				reasoning_details: finalReasoningDetails,
				annotations: messageAnnotations,
				cache_control: getCacheControl(providerOptions)
			});
			break;
		}
		case "tool":
			for (const toolResponse of content) {
				if (toolResponse.type === "tool-approval-response") continue;
				const content2 = getToolResultContent(toolResponse);
				messages.push({
					role: "tool",
					tool_call_id: toolResponse.toolCallId,
					content: content2,
					name: toolResponse.toolName,
					cache_control: (_h = getCacheControl(providerOptions)) != null ? _h : getCacheControl(toolResponse.providerOptions)
				});
			}
			break;
		default: break;
	}
	return messages;
}
function getToolResultContent(input) {
	var _a16;
	switch (input.output.type) {
		case "text":
		case "error-text": return input.output.value;
		case "json":
		case "error-json": return JSON.stringify(input.output.value);
		case "content": return mapToolResultContentParts(input.output.value);
		case "execution-denied": return (_a16 = input.output.reason) != null ? _a16 : "Tool execution denied";
	}
}
function mapToolResultContentParts(parts) {
	return parts.map((part) => {
		var _a16, _b16, _c, _d;
		switch (part.type) {
			case "text": return {
				type: "text",
				text: part.text
			};
			case "image-data": return {
				type: "image_url",
				image_url: { url: buildFileDataUrl({
					data: part.data,
					mediaType: part.mediaType,
					defaultMediaType: "image/jpeg"
				}) }
			};
			case "image-url": return {
				type: "image_url",
				image_url: { url: part.url }
			};
			case "file-data": {
				const dataUrl = buildFileDataUrl({
					data: part.data,
					mediaType: part.mediaType,
					defaultMediaType: "application/octet-stream"
				});
				if ((_a16 = part.mediaType) == null ? void 0 : _a16.startsWith("image/")) return {
					type: "image_url",
					image_url: { url: dataUrl }
				};
				if ((_b16 = part.mediaType) == null ? void 0 : _b16.startsWith("video/")) return {
					type: "video_url",
					video_url: { url: dataUrl }
				};
				if ((_c = part.mediaType) == null ? void 0 : _c.startsWith("audio/")) {
					const format = MIME_TO_FORMAT[part.mediaType.replace("audio/", "")];
					if (format !== void 0) return {
						type: "input_audio",
						input_audio: {
							data: getBase64FromDataUrl(dataUrl),
							format
						}
					};
				}
				return {
					type: "file",
					file: {
						filename: (_d = part.filename) != null ? _d : "",
						file_data: dataUrl
					}
				};
			}
			case "file-url":
				if (looksLikeImageUrl(part.url)) return {
					type: "image_url",
					image_url: { url: part.url }
				};
				return {
					type: "file",
					file: {
						filename: filenameFromUrl(part.url),
						file_data: part.url
					}
				};
			case "file-id":
			case "image-file-id":
			case "custom": return {
				type: "text",
				text: JSON.stringify(part)
			};
			default: return {
				type: "text",
				text: JSON.stringify(part)
			};
		}
	});
}
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
	"jpg",
	"jpeg",
	"png",
	"gif",
	"webp",
	"svg",
	"bmp",
	"ico",
	"tif",
	"tiff",
	"avif"
]);
function looksLikeImageUrl(url) {
	var _a16;
	try {
		const ext = (_a16 = new URL(url).pathname.split(".").pop()) == null ? void 0 : _a16.toLowerCase();
		return ext !== void 0 && IMAGE_EXTENSIONS.has(ext);
	} catch (e) {
		return false;
	}
}
function filenameFromUrl(url) {
	try {
		const last = new URL(url).pathname.split("/").pop();
		return (last == null ? void 0 : last.includes(".")) ? last : "";
	} catch (e) {
		return "";
	}
}
function findFirstReasoningDetails(content) {
	var _a16, _b16, _c, _d;
	for (const part of content) if (part.type === "tool-call") {
		const parsed = OpenRouterProviderOptionsSchema.safeParse(part.providerOptions);
		if (parsed.success && ((_b16 = (_a16 = parsed.data) == null ? void 0 : _a16.openrouter) == null ? void 0 : _b16.reasoning_details) && parsed.data.openrouter.reasoning_details.length > 0) return parsed.data.openrouter.reasoning_details;
	}
	for (const part of content) if (part.type === "reasoning") {
		const parsed = OpenRouterProviderOptionsSchema.safeParse(part.providerOptions);
		if (parsed.success && ((_d = (_c = parsed.data) == null ? void 0 : _c.openrouter) == null ? void 0 : _d.reasoning_details) && parsed.data.openrouter.reasoning_details.length > 0) return parsed.data.openrouter.reasoning_details;
	}
}
union([
	literal("auto"),
	literal("none"),
	literal("required"),
	object$1({
		type: literal("function"),
		function: object$1({ name: string() })
	})
]);
function getChatCompletionToolChoice(toolChoice) {
	switch (toolChoice.type) {
		case "auto":
		case "none":
		case "required": return toolChoice.type;
		case "tool": return {
			type: "function",
			function: { name: toolChoice.toolName }
		};
		default: throw new InvalidArgumentError$2({
			argument: "toolChoice",
			message: `Invalid tool choice type: ${JSON.stringify(toolChoice)}`
		});
	}
}
var ImageResponseArraySchema = array$1(union([object$1({
	type: literal("image_url"),
	image_url: object$1({ url: string() }).passthrough()
}).passthrough(), unknown().transform(() => null)])).transform((d) => d.filter((d2) => !!d2));
var OpenRouterChatCompletionBaseResponseSchema = object$1({
	id: string().optional(),
	model: string().optional(),
	provider: string().optional(),
	usage: object$1({
		prompt_tokens: number(),
		prompt_tokens_details: object$1({
			cached_tokens: number(),
			cache_write_tokens: number().nullish()
		}).passthrough().nullish(),
		completion_tokens: number(),
		completion_tokens_details: object$1({ reasoning_tokens: number() }).passthrough().nullish(),
		total_tokens: number(),
		cost: number().optional(),
		cost_details: object$1({ upstream_inference_cost: number().nullish() }).passthrough().nullish()
	}).passthrough().nullish()
}).passthrough();
var OpenRouterNonStreamChatCompletionResponseSchema = union([OpenRouterChatCompletionBaseResponseSchema.extend({ choices: array$1(object$1({
	message: object$1({
		role: literal("assistant"),
		content: string().nullable().optional(),
		reasoning: string().nullable().optional(),
		reasoning_details: ReasoningDetailArraySchema.nullish(),
		images: ImageResponseArraySchema.nullish(),
		tool_calls: array$1(object$1({
			id: string().optional().nullable(),
			type: literal("function"),
			function: object$1({
				name: string(),
				arguments: string().optional()
			}).passthrough()
		}).passthrough()).optional(),
		annotations: array$1(union([
			object$1({
				type: literal("url_citation"),
				url_citation: object$1({
					url: string(),
					title: string().optional(),
					start_index: number().optional(),
					end_index: number().optional(),
					content: string().optional()
				}).passthrough()
			}).passthrough(),
			object$1({
				type: literal("file_annotation"),
				file_annotation: object$1({
					file_id: string(),
					quote: string().optional()
				}).passthrough()
			}).passthrough(),
			object$1({
				type: literal("file"),
				file: object$1({
					hash: string(),
					name: string(),
					content: array$1(object$1({
						type: string(),
						text: string().optional()
					}).passthrough()).optional()
				}).passthrough()
			}).passthrough()
		])).nullish()
	}).passthrough(),
	index: number().nullish(),
	logprobs: object$1({ content: array$1(object$1({
		token: string(),
		logprob: number(),
		top_logprobs: array$1(object$1({
			token: string(),
			logprob: number()
		}).passthrough())
	}).passthrough()).nullable() }).passthrough().nullable().optional(),
	finish_reason: string().optional().nullable()
}).passthrough()) }), OpenRouterErrorResponseSchema.extend({ user_id: string().optional() })]);
var OpenRouterStreamChatCompletionChunkSchema = union([OpenRouterChatCompletionBaseResponseSchema.extend({ choices: array$1(object$1({
	delta: object$1({
		role: _enum(["assistant"]).optional(),
		content: string().nullish(),
		reasoning: string().nullish().optional(),
		reasoning_details: ReasoningDetailArraySchema.nullish(),
		images: ImageResponseArraySchema.nullish(),
		tool_calls: array$1(object$1({
			index: number().nullish(),
			id: string().nullish(),
			type: literal("function").optional(),
			function: object$1({
				name: string().nullish(),
				arguments: string().nullish()
			}).passthrough()
		}).passthrough()).nullish(),
		annotations: array$1(union([
			object$1({
				type: literal("url_citation"),
				url_citation: object$1({
					url: string(),
					title: string().optional(),
					start_index: number().optional(),
					end_index: number().optional(),
					content: string().optional()
				}).passthrough()
			}).passthrough(),
			object$1({
				type: literal("file_annotation"),
				file_annotation: object$1({
					file_id: string(),
					quote: string().optional()
				}).passthrough()
			}).passthrough(),
			object$1({
				type: literal("file"),
				file: object$1({
					hash: string(),
					name: string(),
					content: array$1(object$1({
						type: string(),
						text: string().optional()
					}).passthrough()).optional()
				}).passthrough()
			}).passthrough()
		])).nullish()
	}).passthrough().nullish(),
	logprobs: object$1({ content: array$1(object$1({
		token: string(),
		logprob: number(),
		top_logprobs: array$1(object$1({
			token: string(),
			logprob: number()
		}).passthrough())
	}).passthrough()).nullable() }).passthrough().nullish(),
	finish_reason: string().nullable().optional(),
	index: number().nullish()
}).passthrough()) }), OpenRouterErrorResponseSchema]);
var OpenRouterChatLanguageModel = class {
	constructor(modelId, settings, config) {
		this.specificationVersion = "v3";
		this.provider = "openrouter";
		this.defaultObjectGenerationMode = "tool";
		this.supportsImageUrls = true;
		this.supportedUrls = {
			"image/*": [/^data:image\/[a-zA-Z]+;base64,/, /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(?:[?#].*)?$/i],
			"application/*": [/^data:application\//, /^https?:\/\/.+$/]
		};
		this.modelId = modelId;
		this.settings = settings;
		this.config = config;
	}
	getArgs({ prompt, maxOutputTokens, temperature, topP, frequencyPenalty, presencePenalty, seed, stopSequences, responseFormat, topK, tools, toolChoice }) {
		var _a16, _b16, _c, _d;
		const baseArgs = __spreadValues(__spreadValues({
			model: this.modelId,
			models: this.settings.models,
			logit_bias: this.settings.logitBias,
			logprobs: this.settings.logprobs === true || typeof this.settings.logprobs === "number" ? true : void 0,
			top_logprobs: typeof this.settings.logprobs === "number" ? this.settings.logprobs : typeof this.settings.logprobs === "boolean" ? this.settings.logprobs ? 0 : void 0 : void 0,
			user: this.settings.user,
			parallel_tool_calls: this.settings.parallelToolCalls,
			max_tokens: maxOutputTokens != null ? maxOutputTokens : this.settings.maxTokens,
			temperature: temperature != null ? temperature : this.settings.temperature,
			top_p: topP != null ? topP : this.settings.topP,
			frequency_penalty: frequencyPenalty != null ? frequencyPenalty : this.settings.frequencyPenalty,
			presence_penalty: presencePenalty != null ? presencePenalty : this.settings.presencePenalty,
			seed,
			stop: stopSequences,
			response_format: (responseFormat == null ? void 0 : responseFormat.type) === "json" ? responseFormat.schema != null ? {
				type: "json_schema",
				json_schema: __spreadValues({
					schema: responseFormat.schema,
					strict: (_b16 = (_a16 = this.settings.structuredOutputs) == null ? void 0 : _a16.strict) != null ? _b16 : true,
					name: (_c = responseFormat.name) != null ? _c : "response"
				}, responseFormat.description && { description: responseFormat.description })
			} : { type: "json_object" } : void 0,
			top_k: topK != null ? topK : this.settings.topK,
			messages: convertToOpenRouterChatMessages(prompt),
			include_reasoning: this.settings.includeReasoning,
			reasoning: this.settings.reasoning,
			usage: this.settings.usage,
			plugins: this.settings.plugins,
			web_search_options: this.settings.web_search_options,
			provider: this.settings.provider,
			debug: this.settings.debug,
			cache_control: this.settings.cache_control
		}, this.config.extraBody), this.settings.extraBody);
		if (tools && tools.length > 0) {
			const mappedTools = [];
			for (const tool2 of tools) if (tool2.type === "function") {
				const openrouterOptions = (_d = tool2.providerOptions) == null ? void 0 : _d.openrouter;
				const eagerInputStreaming = openrouterOptions == null ? void 0 : openrouterOptions.eager_input_streaming;
				mappedTools.push(__spreadValues({
					type: "function",
					function: {
						name: tool2.name,
						description: tool2.description,
						parameters: tool2.inputSchema
					}
				}, eagerInputStreaming != null && { eager_input_streaming: eagerInputStreaming }));
			} else if (tool2.type === "provider") mappedTools.push(mapProviderTool(tool2));
			return __spreadProps(__spreadValues({}, baseArgs), {
				tools: mappedTools,
				tool_choice: toolChoice ? getChatCompletionToolChoice(toolChoice) : void 0
			});
		}
		return baseArgs;
	}
	async doGenerate(options) {
		var _b16, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
		const _a16 = (options.providerOptions || {}).openrouter || {}, { cacheControl } = _a16, restOpenrouterOptions = __objRest(_a16, ["cacheControl"]);
		const args = __spreadValues(__spreadValues(__spreadValues({}, this.getArgs(options)), restOpenrouterOptions), cacheControl != null && !("cache_control" in restOpenrouterOptions) ? { cache_control: cacheControl } : {});
		const { value: responseValue, responseHeaders } = await postJsonToApi$1({
			url: this.config.url({
				path: "/chat/completions",
				modelId: this.modelId
			}),
			headers: combineHeaders$1(this.config.headers(), options.headers),
			body: args,
			failedResponseHandler: openrouterFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler$1(OpenRouterNonStreamChatCompletionResponseSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		if ("error" in responseValue) {
			const errorData = responseValue.error;
			throw new APICallError$1({
				message: errorData.message,
				url: this.config.url({
					path: "/chat/completions",
					modelId: this.modelId
				}),
				requestBodyValues: args,
				statusCode: 200,
				responseHeaders,
				data: errorData
			});
		}
		const response = responseValue;
		const choice = response.choices[0];
		if (!choice) throw new NoContentGeneratedError$1({ message: "No choice in response" });
		const usageInfo = response.usage ? computeTokenUsage(response.usage) : emptyUsage();
		const reasoningDetails = (_b16 = choice.message.reasoning_details) != null ? _b16 : [];
		const reasoning = reasoningDetails.length > 0 ? reasoningDetails.map((detail) => {
			switch (detail.type) {
				case "reasoning.text":
					if (detail.text) return {
						type: "reasoning",
						text: detail.text,
						providerMetadata: { openrouter: { reasoning_details: [detail] } }
					};
					break;
				case "reasoning.summary":
					if (detail.summary) return {
						type: "reasoning",
						text: detail.summary,
						providerMetadata: { openrouter: { reasoning_details: [detail] } }
					};
					break;
				case "reasoning.encrypted": break;
				default:
			}
			return null;
		}).filter((p) => p !== null) : choice.message.reasoning ? [{
			type: "reasoning",
			text: choice.message.reasoning
		}] : [];
		const content = [];
		content.push(...reasoning);
		if (choice.message.content) content.push({
			type: "text",
			text: choice.message.content
		});
		if (choice.message.tool_calls) {
			let reasoningDetailsAttachedToToolCall = false;
			const seenToolCallIds = /* @__PURE__ */ new Set();
			for (const toolCall of choice.message.tool_calls) {
				let toolCallId = toolCall.id;
				if (!toolCallId || seenToolCallIds.has(toolCallId)) toolCallId = generateId$1();
				seenToolCallIds.add(toolCallId);
				content.push({
					type: "tool-call",
					toolCallId,
					toolName: toolCall.function.name,
					input: (_c = toolCall.function.arguments) != null ? _c : "{}",
					providerMetadata: !reasoningDetailsAttachedToToolCall ? { openrouter: { reasoning_details: reasoningDetails } } : void 0
				});
				reasoningDetailsAttachedToToolCall = true;
			}
		}
		if (choice.message.images) for (const image of choice.message.images) content.push({
			type: "file",
			mediaType: getMediaType(image.image_url.url, "image/jpeg"),
			data: getBase64FromDataUrl(image.image_url.url)
		});
		if (choice.message.annotations) {
			for (const annotation of choice.message.annotations) if (annotation.type === "url_citation") content.push({
				type: "source",
				sourceType: "url",
				id: annotation.url_citation.url,
				url: annotation.url_citation.url,
				title: (_d = annotation.url_citation.title) != null ? _d : "",
				providerMetadata: { openrouter: {
					content: (_e = annotation.url_citation.content) != null ? _e : "",
					startIndex: (_f = annotation.url_citation.start_index) != null ? _f : 0,
					endIndex: (_g = annotation.url_citation.end_index) != null ? _g : 0
				} }
			});
		}
		const fileAnnotations = (_h = choice.message.annotations) == null ? void 0 : _h.filter((a) => a.type === "file");
		const hasToolCalls = choice.message.tool_calls && choice.message.tool_calls.length > 0;
		const hasEncryptedReasoning = reasoningDetails.some((d) => d.type === "reasoning.encrypted" && d.data);
		const mappedFinishReason = hasToolCalls && hasEncryptedReasoning && choice.finish_reason === "stop" ? createFinishReason("tool-calls", (_i = choice.finish_reason) != null ? _i : void 0) : mapOpenRouterFinishReason(choice.finish_reason);
		return {
			content,
			finishReason: hasToolCalls && mappedFinishReason.unified === "other" ? createFinishReason("tool-calls", mappedFinishReason.raw) : mappedFinishReason,
			usage: usageInfo,
			warnings: [],
			providerMetadata: { openrouter: OpenRouterProviderMetadataSchema.parse({
				provider: (_j = response.provider) != null ? _j : "",
				reasoning_details: (_k = choice.message.reasoning_details) != null ? _k : [],
				annotations: fileAnnotations && fileAnnotations.length > 0 ? fileAnnotations : void 0,
				usage: __spreadValues(__spreadValues(__spreadValues(__spreadValues({
					promptTokens: (_l = usageInfo.inputTokens.total) != null ? _l : 0,
					completionTokens: (_m = usageInfo.outputTokens.total) != null ? _m : 0,
					totalTokens: ((_n = usageInfo.inputTokens.total) != null ? _n : 0) + ((_o = usageInfo.outputTokens.total) != null ? _o : 0)
				}, ((_p = response.usage) == null ? void 0 : _p.cost) != null ? { cost: response.usage.cost } : {}), ((_r = (_q = response.usage) == null ? void 0 : _q.prompt_tokens_details) == null ? void 0 : _r.cached_tokens) != null ? { promptTokensDetails: { cachedTokens: response.usage.prompt_tokens_details.cached_tokens } } : {}), ((_t = (_s = response.usage) == null ? void 0 : _s.completion_tokens_details) == null ? void 0 : _t.reasoning_tokens) != null ? { completionTokensDetails: { reasoningTokens: response.usage.completion_tokens_details.reasoning_tokens } } : {}), ((_v = (_u = response.usage) == null ? void 0 : _u.cost_details) == null ? void 0 : _v.upstream_inference_cost) != null ? { costDetails: { upstreamInferenceCost: response.usage.cost_details.upstream_inference_cost } } : {})
			}) },
			request: { body: args },
			response: {
				id: response.id,
				modelId: response.model,
				headers: responseHeaders,
				body: response
			}
		};
	}
	async doStream(options) {
		var _b16;
		const _a16 = (options.providerOptions || {}).openrouter || {}, { cacheControl } = _a16, restOpenrouterOptions = __objRest(_a16, ["cacheControl"]);
		const args = __spreadValues(__spreadValues(__spreadValues({}, this.getArgs(options)), restOpenrouterOptions), cacheControl != null && !("cache_control" in restOpenrouterOptions) ? { cache_control: cacheControl } : {});
		const { value: response, responseHeaders } = await postJsonToApi$1({
			url: this.config.url({
				path: "/chat/completions",
				modelId: this.modelId
			}),
			headers: combineHeaders$1(this.config.headers(), options.headers),
			body: __spreadProps(__spreadValues({}, args), {
				stream: true,
				stream_options: this.config.compatibility === "strict" ? __spreadValues({ include_usage: true }, ((_b16 = this.settings.usage) == null ? void 0 : _b16.include) ? { include_usage: true } : {}) : void 0
			}),
			failedResponseHandler: openrouterFailedResponseHandler,
			successfulResponseHandler: createEventSourceResponseHandler$1(OpenRouterStreamChatCompletionChunkSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		let streamError;
		const safeResponse = withStreamErrorHandling(response, (err) => {
			streamError = err;
		});
		const toolCalls = [];
		const seenToolCallIds = /* @__PURE__ */ new Set();
		let finishReason = createFinishReason("other");
		const usage = {
			inputTokens: {
				total: void 0,
				noCache: void 0,
				cacheRead: void 0,
				cacheWrite: void 0
			},
			outputTokens: {
				total: void 0,
				text: void 0,
				reasoning: void 0
			},
			raw: void 0
		};
		const openrouterUsage = {};
		let rawUsage;
		const accumulatedReasoningDetails = [];
		let reasoningDetailsAttachedToToolCall = false;
		const accumulatedFileAnnotations = [];
		let textStarted = false;
		let reasoningStarted = false;
		let textId;
		let reasoningId;
		let openrouterResponseId;
		let provider;
		return {
			stream: safeResponse.pipeThrough(new TransformStream({
				transform(chunk, controller) {
					var _a17, _b17, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
					if (options.includeRawChunks) controller.enqueue({
						type: "raw",
						rawValue: chunk.rawValue
					});
					if (!chunk.success) {
						finishReason = createFinishReason("error");
						controller.enqueue({
							type: "error",
							error: chunk.error
						});
						return;
					}
					const value = chunk.value;
					if ("error" in value) {
						finishReason = createFinishReason("error");
						controller.enqueue({
							type: "error",
							error: value.error
						});
						return;
					}
					if (value.provider) provider = value.provider;
					if (value.id) {
						openrouterResponseId = value.id;
						controller.enqueue({
							type: "response-metadata",
							id: value.id
						});
					}
					if (value.model) controller.enqueue({
						type: "response-metadata",
						modelId: value.model
					});
					if (value.usage != null) {
						const computed = computeTokenUsage(value.usage);
						Object.assign(usage.inputTokens, computed.inputTokens);
						Object.assign(usage.outputTokens, computed.outputTokens);
						rawUsage = value.usage;
						const promptTokens = (_a17 = value.usage.prompt_tokens) != null ? _a17 : 0;
						const completionTokens = (_b17 = value.usage.completion_tokens) != null ? _b17 : 0;
						openrouterUsage.promptTokens = promptTokens;
						if (value.usage.prompt_tokens_details) openrouterUsage.promptTokensDetails = { cachedTokens: (_c = value.usage.prompt_tokens_details.cached_tokens) != null ? _c : 0 };
						openrouterUsage.completionTokens = completionTokens;
						if (value.usage.completion_tokens_details) openrouterUsage.completionTokensDetails = { reasoningTokens: (_d = value.usage.completion_tokens_details.reasoning_tokens) != null ? _d : 0 };
						if (value.usage.cost != null) openrouterUsage.cost = value.usage.cost;
						openrouterUsage.totalTokens = value.usage.total_tokens;
						const upstreamInferenceCost = (_e = value.usage.cost_details) == null ? void 0 : _e.upstream_inference_cost;
						if (upstreamInferenceCost != null) openrouterUsage.costDetails = { upstreamInferenceCost };
					}
					const choice = value.choices[0];
					if ((choice == null ? void 0 : choice.finish_reason) != null) finishReason = mapOpenRouterFinishReason(choice.finish_reason);
					if ((choice == null ? void 0 : choice.delta) == null) return;
					const delta = choice.delta;
					const emitReasoningChunk = (chunkText) => {
						if (!reasoningStarted) {
							reasoningId = generateId$1();
							controller.enqueue({
								type: "reasoning-start",
								id: reasoningId
							});
							reasoningStarted = true;
						}
						controller.enqueue({
							type: "reasoning-delta",
							delta: chunkText,
							id: reasoningId || generateId$1()
						});
					};
					if (delta.reasoning_details && delta.reasoning_details.length > 0) {
						for (const detail of delta.reasoning_details) if (detail.type === "reasoning.text") {
							const lastDetail = accumulatedReasoningDetails[accumulatedReasoningDetails.length - 1];
							if ((lastDetail == null ? void 0 : lastDetail.type) === "reasoning.text") {
								lastDetail.text = (lastDetail.text || "") + (detail.text || "");
								lastDetail.signature = lastDetail.signature || detail.signature;
								lastDetail.format = lastDetail.format || detail.format;
							} else accumulatedReasoningDetails.push(__spreadValues({}, detail));
						} else accumulatedReasoningDetails.push(detail);
						if (!textStarted) for (const detail of delta.reasoning_details) switch (detail.type) {
							case "reasoning.text":
								emitReasoningChunk(detail.text || "");
								break;
							case "reasoning.encrypted": break;
							case "reasoning.summary":
								if (detail.summary) emitReasoningChunk(detail.summary);
								break;
							default: break;
						}
					} else if (delta.reasoning && !textStarted) emitReasoningChunk(delta.reasoning);
					if (delta.content) {
						if (reasoningStarted && !textStarted) {
							controller.enqueue({
								type: "reasoning-end",
								id: reasoningId || generateId$1(),
								providerMetadata: { openrouter: { reasoning_details: accumulatedReasoningDetails } }
							});
							reasoningStarted = false;
						}
						if (!textStarted) {
							textId = openrouterResponseId || generateId$1();
							controller.enqueue({
								type: "text-start",
								id: textId
							});
							textStarted = true;
						}
						controller.enqueue({
							type: "text-delta",
							delta: delta.content,
							id: textId || generateId$1()
						});
					}
					if (delta.annotations) {
						for (const annotation of delta.annotations) if (annotation.type === "url_citation") controller.enqueue({
							type: "source",
							sourceType: "url",
							id: annotation.url_citation.url,
							url: annotation.url_citation.url,
							title: (_f = annotation.url_citation.title) != null ? _f : "",
							providerMetadata: { openrouter: {
								content: (_g = annotation.url_citation.content) != null ? _g : "",
								startIndex: (_h = annotation.url_citation.start_index) != null ? _h : 0,
								endIndex: (_i = annotation.url_citation.end_index) != null ? _i : 0
							} }
						});
						else if (annotation.type === "file") {
							const file = annotation.file;
							if (file && typeof file === "object" && "hash" in file && "name" in file) accumulatedFileAnnotations.push(annotation);
						}
					}
					if (delta.tool_calls != null) for (const toolCallDelta of delta.tool_calls) {
						const index = (_j = toolCallDelta.index) != null ? _j : toolCalls.length - 1;
						if (toolCalls[index] == null) {
							if (toolCallDelta.type !== "function") throw new InvalidResponseDataError$1({
								data: toolCallDelta,
								message: `Expected 'function' type.`
							});
							if (((_k = toolCallDelta.function) == null ? void 0 : _k.name) == null) throw new InvalidResponseDataError$1({
								data: toolCallDelta,
								message: `Expected 'function.name' to be a string.`
							});
							let toolCallId = (_l = toolCallDelta.id) != null ? _l : "";
							if (!toolCallId || seenToolCallIds.has(toolCallId)) toolCallId = generateId$1();
							seenToolCallIds.add(toolCallId);
							toolCalls[index] = {
								id: toolCallId,
								type: "function",
								function: {
									name: toolCallDelta.function.name,
									arguments: (_m = toolCallDelta.function.arguments) != null ? _m : ""
								},
								inputStarted: false,
								sent: false
							};
							const toolCall2 = toolCalls[index];
							if (toolCall2 == null) throw new InvalidResponseDataError$1({
								data: {
									index,
									toolCallsLength: toolCalls.length
								},
								message: `Tool call at index ${index} is missing after creation.`
							});
							if (((_n = toolCall2.function) == null ? void 0 : _n.name) != null && ((_o = toolCall2.function) == null ? void 0 : _o.arguments) != null && isParsableJson(toolCall2.function.arguments)) {
								toolCall2.inputStarted = true;
								controller.enqueue({
									type: "tool-input-start",
									id: toolCall2.id,
									toolName: toolCall2.function.name
								});
								controller.enqueue({
									type: "tool-input-delta",
									id: toolCall2.id,
									delta: toolCall2.function.arguments
								});
								controller.enqueue({
									type: "tool-input-end",
									id: toolCall2.id
								});
								controller.enqueue({
									type: "tool-call",
									toolCallId: toolCall2.id,
									toolName: toolCall2.function.name,
									input: toolCall2.function.arguments,
									providerMetadata: !reasoningDetailsAttachedToToolCall ? { openrouter: { reasoning_details: accumulatedReasoningDetails } } : void 0
								});
								reasoningDetailsAttachedToToolCall = true;
								toolCall2.sent = true;
							}
							continue;
						}
						const toolCall = toolCalls[index];
						if (toolCall == null) throw new InvalidResponseDataError$1({
							data: {
								index,
								toolCallsLength: toolCalls.length,
								toolCallDelta
							},
							message: `Tool call at index ${index} is missing during merge.`
						});
						if (!toolCall.inputStarted) {
							toolCall.inputStarted = true;
							controller.enqueue({
								type: "tool-input-start",
								id: toolCall.id,
								toolName: toolCall.function.name
							});
							if (toolCall.function.arguments) controller.enqueue({
								type: "tool-input-delta",
								id: toolCall.id,
								delta: toolCall.function.arguments
							});
						}
						if (((_p = toolCallDelta.function) == null ? void 0 : _p.arguments) != null) toolCall.function.arguments += (_r = (_q = toolCallDelta.function) == null ? void 0 : _q.arguments) != null ? _r : "";
						controller.enqueue({
							type: "tool-input-delta",
							id: toolCall.id,
							delta: (_s = toolCallDelta.function.arguments) != null ? _s : ""
						});
						if (!toolCall.sent && ((_t = toolCall.function) == null ? void 0 : _t.name) != null && ((_u = toolCall.function) == null ? void 0 : _u.arguments) != null && isParsableJson(toolCall.function.arguments)) {
							controller.enqueue({
								type: "tool-input-end",
								id: toolCall.id
							});
							controller.enqueue({
								type: "tool-call",
								toolCallId: toolCall.id,
								toolName: toolCall.function.name,
								input: toolCall.function.arguments,
								providerMetadata: !reasoningDetailsAttachedToToolCall ? { openrouter: { reasoning_details: accumulatedReasoningDetails } } : void 0
							});
							reasoningDetailsAttachedToToolCall = true;
							toolCall.sent = true;
						}
					}
					if (delta.images != null) for (const image of delta.images) controller.enqueue({
						type: "file",
						mediaType: getMediaType(image.image_url.url, "image/jpeg"),
						data: getBase64FromDataUrl(image.image_url.url)
					});
				},
				flush(controller) {
					const hasToolCalls = toolCalls.length > 0;
					if (streamError != null) {
						finishReason = createFinishReason("error");
						controller.enqueue({
							type: "error",
							error: streamError
						});
					}
					const hasEncryptedReasoning = accumulatedReasoningDetails.some((d) => d.type === "reasoning.encrypted" && d.data);
					if (hasToolCalls && hasEncryptedReasoning && finishReason.unified === "stop") finishReason = createFinishReason("tool-calls", finishReason.raw);
					if (hasToolCalls && finishReason.unified === "other") finishReason = createFinishReason("tool-calls", finishReason.raw);
					if (finishReason.unified === "tool-calls") {
						for (const toolCall of toolCalls) if (toolCall && !toolCall.sent) {
							const input = isParsableJson(toolCall.function.arguments) ? toolCall.function.arguments : "{}";
							if (!toolCall.inputStarted) {
								controller.enqueue({
									type: "tool-input-start",
									id: toolCall.id,
									toolName: toolCall.function.name
								});
								controller.enqueue({
									type: "tool-input-delta",
									id: toolCall.id,
									delta: input
								});
							}
							controller.enqueue({
								type: "tool-input-end",
								id: toolCall.id
							});
							controller.enqueue({
								type: "tool-call",
								toolCallId: toolCall.id,
								toolName: toolCall.function.name,
								input,
								providerMetadata: !reasoningDetailsAttachedToToolCall ? { openrouter: { reasoning_details: accumulatedReasoningDetails } } : void 0
							});
							reasoningDetailsAttachedToToolCall = true;
							toolCall.sent = true;
						}
					}
					if (reasoningStarted) controller.enqueue({
						type: "reasoning-end",
						id: reasoningId || generateId$1(),
						providerMetadata: { openrouter: { reasoning_details: accumulatedReasoningDetails } }
					});
					if (textStarted) controller.enqueue({
						type: "text-end",
						id: textId || generateId$1()
					});
					const openrouterMetadata = { usage: openrouterUsage };
					if (provider !== void 0) openrouterMetadata.provider = provider;
					openrouterMetadata.reasoning_details = accumulatedReasoningDetails;
					if (accumulatedFileAnnotations.length > 0) openrouterMetadata.annotations = accumulatedFileAnnotations;
					if (usage.inputTokens.total === void 0 && openrouterUsage.promptTokens !== void 0) usage.inputTokens.total = openrouterUsage.promptTokens;
					if (usage.outputTokens.total === void 0 && openrouterUsage.completionTokens !== void 0) usage.outputTokens.total = openrouterUsage.completionTokens;
					usage.raw = rawUsage;
					controller.enqueue({
						type: "finish",
						finishReason,
						usage,
						providerMetadata: { openrouter: openrouterMetadata }
					});
				}
			})),
			warnings: [],
			request: { body: args },
			response: { headers: responseHeaders }
		};
	}
};
function mapProviderTool(tool2) {
	const [provider, toolName] = tool2.id.split(".");
	const apiToolType = `${provider}:${toolName}`;
	const mappedArgs = {};
	for (const [key, value] of Object.entries(tool2.args)) if (value !== void 0) mappedArgs[camelToSnake(key)] = value;
	return __spreadValues({ type: apiToolType }, mappedArgs);
}
function camelToSnake(str) {
	return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
function convertToOpenRouterCompletionPrompt({ prompt, inputFormat, user = "user", assistant = "assistant" }) {
	if (inputFormat === "prompt" && prompt.length === 1 && prompt[0] && prompt[0].role === "user" && prompt[0].content.length === 1 && prompt[0].content[0] && prompt[0].content[0].type === "text") return { prompt: prompt[0].content[0].text };
	let text = "";
	if (prompt[0] && prompt[0].role === "system") {
		text += `${prompt[0].content}

`;
		prompt = prompt.slice(1);
	}
	for (const { role, content } of prompt) switch (role) {
		case "system": throw new InvalidPromptError$1({
			message: `Unexpected system message in prompt: ${content}`,
			prompt
		});
		case "user": {
			const userMessage = content.map((part) => {
				switch (part.type) {
					case "text": return part.text;
					case "file": throw new UnsupportedFunctionalityError$1({ functionality: "file attachments" });
					default: return "";
				}
			}).join("");
			text += `${user}:
${userMessage}

`;
			break;
		}
		case "assistant": {
			const assistantMessage = content.map((part) => {
				switch (part.type) {
					case "text": return part.text;
					case "tool-call": throw new UnsupportedFunctionalityError$1({ functionality: "tool-call messages" });
					case "tool-result": throw new UnsupportedFunctionalityError$1({ functionality: "tool-result messages" });
					case "reasoning": throw new UnsupportedFunctionalityError$1({ functionality: "reasoning messages" });
					case "file": throw new UnsupportedFunctionalityError$1({ functionality: "file attachments" });
					default: return "";
				}
			}).join("");
			text += `${assistant}:
${assistantMessage}

`;
			break;
		}
		case "tool": throw new UnsupportedFunctionalityError$1({ functionality: "tool messages" });
		default: break;
	}
	text += `${assistant}:
`;
	return { prompt: text };
}
var OpenRouterCompletionChunkSchema = union([object$1({
	id: string().optional(),
	model: string().optional(),
	provider: string().optional(),
	choices: array$1(object$1({
		text: string(),
		reasoning: string().nullish().optional(),
		reasoning_details: ReasoningDetailArraySchema.nullish(),
		finish_reason: string().nullish(),
		index: number().nullish(),
		logprobs: object$1({
			tokens: array$1(string()),
			token_logprobs: array$1(number()),
			top_logprobs: array$1(record(string(), number())).nullable()
		}).passthrough().nullable().optional()
	}).passthrough()),
	usage: object$1({
		prompt_tokens: number(),
		prompt_tokens_details: object$1({
			cached_tokens: number(),
			cache_write_tokens: number().nullish()
		}).passthrough().nullish(),
		completion_tokens: number(),
		completion_tokens_details: object$1({ reasoning_tokens: number() }).passthrough().nullish(),
		total_tokens: number(),
		cost: number().optional(),
		cost_details: object$1({ upstream_inference_cost: number().nullish() }).passthrough().nullish()
	}).passthrough().nullish()
}).passthrough(), OpenRouterErrorResponseSchema]);
var OpenRouterCompletionLanguageModel = class {
	constructor(modelId, settings, config) {
		this.specificationVersion = "v3";
		this.provider = "openrouter";
		this.supportsImageUrls = true;
		this.supportedUrls = {
			"image/*": [/^data:image\/[a-zA-Z]+;base64,/, /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(?:[?#].*)?$/i],
			"text/*": [/^data:text\//, /^https?:\/\/.+$/],
			"application/*": [/^data:application\//, /^https?:\/\/.+$/]
		};
		this.defaultObjectGenerationMode = void 0;
		this.modelId = modelId;
		this.settings = settings;
		this.config = config;
	}
	getArgs({ prompt, maxOutputTokens, temperature, topP, frequencyPenalty, presencePenalty, seed, responseFormat, topK, stopSequences, tools, toolChoice }) {
		const { prompt: completionPrompt } = convertToOpenRouterCompletionPrompt({
			prompt,
			inputFormat: "prompt"
		});
		if (tools == null ? void 0 : tools.length) throw new UnsupportedFunctionalityError$1({ functionality: "tools" });
		if (toolChoice) throw new UnsupportedFunctionalityError$1({ functionality: "toolChoice" });
		return __spreadValues(__spreadValues({
			model: this.modelId,
			models: this.settings.models,
			logit_bias: this.settings.logitBias,
			logprobs: typeof this.settings.logprobs === "number" ? this.settings.logprobs : typeof this.settings.logprobs === "boolean" ? this.settings.logprobs ? 0 : void 0 : void 0,
			suffix: this.settings.suffix,
			user: this.settings.user,
			max_tokens: maxOutputTokens != null ? maxOutputTokens : this.settings.maxTokens,
			temperature: temperature != null ? temperature : this.settings.temperature,
			top_p: topP != null ? topP : this.settings.topP,
			frequency_penalty: frequencyPenalty != null ? frequencyPenalty : this.settings.frequencyPenalty,
			presence_penalty: presencePenalty != null ? presencePenalty : this.settings.presencePenalty,
			seed,
			stop: stopSequences,
			response_format: responseFormat,
			top_k: topK != null ? topK : this.settings.topK,
			prompt: completionPrompt,
			include_reasoning: this.settings.includeReasoning,
			reasoning: this.settings.reasoning
		}, this.config.extraBody), this.settings.extraBody);
	}
	async doGenerate(options) {
		var _a16, _b16, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
		const openrouterOptions = (options.providerOptions || {}).openrouter || {};
		const args = __spreadValues(__spreadValues({}, this.getArgs(options)), openrouterOptions);
		const { value: response, responseHeaders } = await postJsonToApi$1({
			url: this.config.url({
				path: "/completions",
				modelId: this.modelId
			}),
			headers: combineHeaders$1(this.config.headers(), options.headers),
			body: args,
			failedResponseHandler: openrouterFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler$1(OpenRouterCompletionChunkSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		if ("error" in response) {
			const errorData = response.error;
			throw new APICallError$1({
				message: errorData.message,
				url: this.config.url({
					path: "/completions",
					modelId: this.modelId
				}),
				requestBodyValues: args,
				statusCode: 200,
				responseHeaders,
				data: errorData
			});
		}
		const choice = response.choices[0];
		if (!choice) throw new NoContentGeneratedError$1({ message: "No choice in OpenRouter completion response" });
		return {
			content: [{
				type: "text",
				text: (_a16 = choice.text) != null ? _a16 : ""
			}],
			finishReason: mapOpenRouterFinishReason(choice.finish_reason),
			usage: response.usage ? computeTokenUsage(response.usage) : emptyUsage(),
			warnings: [],
			providerMetadata: { openrouter: OpenRouterProviderMetadataSchema.parse({
				provider: (_b16 = response.provider) != null ? _b16 : "",
				usage: __spreadValues(__spreadValues(__spreadValues(__spreadValues({
					promptTokens: (_d = (_c = response.usage) == null ? void 0 : _c.prompt_tokens) != null ? _d : 0,
					completionTokens: (_f = (_e = response.usage) == null ? void 0 : _e.completion_tokens) != null ? _f : 0,
					totalTokens: ((_h = (_g = response.usage) == null ? void 0 : _g.prompt_tokens) != null ? _h : 0) + ((_j = (_i = response.usage) == null ? void 0 : _i.completion_tokens) != null ? _j : 0)
				}, ((_k = response.usage) == null ? void 0 : _k.cost) != null ? { cost: response.usage.cost } : {}), ((_m = (_l = response.usage) == null ? void 0 : _l.prompt_tokens_details) == null ? void 0 : _m.cached_tokens) != null ? { promptTokensDetails: { cachedTokens: response.usage.prompt_tokens_details.cached_tokens } } : {}), ((_o = (_n = response.usage) == null ? void 0 : _n.completion_tokens_details) == null ? void 0 : _o.reasoning_tokens) != null ? { completionTokensDetails: { reasoningTokens: response.usage.completion_tokens_details.reasoning_tokens } } : {}), ((_q = (_p = response.usage) == null ? void 0 : _p.cost_details) == null ? void 0 : _q.upstream_inference_cost) != null ? { costDetails: { upstreamInferenceCost: response.usage.cost_details.upstream_inference_cost } } : {})
			}) },
			response: { headers: responseHeaders }
		};
	}
	async doStream(options) {
		const openrouterOptions = (options.providerOptions || {}).openrouter || {};
		const args = __spreadValues(__spreadValues({}, this.getArgs(options)), openrouterOptions);
		const { value: response, responseHeaders } = await postJsonToApi$1({
			url: this.config.url({
				path: "/completions",
				modelId: this.modelId
			}),
			headers: combineHeaders$1(this.config.headers(), options.headers),
			body: __spreadProps(__spreadValues({}, args), {
				stream: true,
				stream_options: this.config.compatibility === "strict" ? { include_usage: true } : void 0
			}),
			failedResponseHandler: openrouterFailedResponseHandler,
			successfulResponseHandler: createEventSourceResponseHandler$1(OpenRouterCompletionChunkSchema),
			abortSignal: options.abortSignal,
			fetch: this.config.fetch
		});
		let streamError;
		const safeResponse = withStreamErrorHandling(response, (err) => {
			streamError = err;
		});
		let finishReason = createFinishReason("other");
		const usage = {
			inputTokens: {
				total: void 0,
				noCache: void 0,
				cacheRead: void 0,
				cacheWrite: void 0
			},
			outputTokens: {
				total: void 0,
				text: void 0,
				reasoning: void 0
			},
			raw: void 0
		};
		const openrouterUsage = {};
		let provider;
		let rawUsage;
		return {
			stream: safeResponse.pipeThrough(new TransformStream({
				transform(chunk, controller) {
					var _a16, _b16, _c, _d, _e;
					if (options.includeRawChunks) controller.enqueue({
						type: "raw",
						rawValue: chunk.rawValue
					});
					if (!chunk.success) {
						finishReason = createFinishReason("error");
						controller.enqueue({
							type: "error",
							error: chunk.error
						});
						return;
					}
					const value = chunk.value;
					if ("error" in value) {
						finishReason = createFinishReason("error");
						controller.enqueue({
							type: "error",
							error: value.error
						});
						return;
					}
					if (value.provider) provider = value.provider;
					if (value.usage != null) {
						const computed = computeTokenUsage(value.usage);
						Object.assign(usage.inputTokens, computed.inputTokens);
						Object.assign(usage.outputTokens, computed.outputTokens);
						rawUsage = value.usage;
						const promptTokens = (_a16 = value.usage.prompt_tokens) != null ? _a16 : 0;
						const completionTokens = (_b16 = value.usage.completion_tokens) != null ? _b16 : 0;
						openrouterUsage.promptTokens = promptTokens;
						if (value.usage.prompt_tokens_details) openrouterUsage.promptTokensDetails = { cachedTokens: (_c = value.usage.prompt_tokens_details.cached_tokens) != null ? _c : 0 };
						openrouterUsage.completionTokens = completionTokens;
						if (value.usage.completion_tokens_details) openrouterUsage.completionTokensDetails = { reasoningTokens: (_d = value.usage.completion_tokens_details.reasoning_tokens) != null ? _d : 0 };
						if (value.usage.cost != null) openrouterUsage.cost = value.usage.cost;
						openrouterUsage.totalTokens = value.usage.total_tokens;
						const upstreamInferenceCost = (_e = value.usage.cost_details) == null ? void 0 : _e.upstream_inference_cost;
						if (upstreamInferenceCost != null) openrouterUsage.costDetails = { upstreamInferenceCost };
					}
					const choice = value.choices[0];
					if ((choice == null ? void 0 : choice.finish_reason) != null) finishReason = mapOpenRouterFinishReason(choice.finish_reason);
					if ((choice == null ? void 0 : choice.text) != null) controller.enqueue({
						type: "text-delta",
						delta: choice.text,
						id: generateId$1()
					});
				},
				flush(controller) {
					if (streamError != null) {
						finishReason = createFinishReason("error");
						controller.enqueue({
							type: "error",
							error: streamError
						});
					}
					usage.raw = rawUsage;
					const openrouterMetadata = { usage: openrouterUsage };
					if (provider !== void 0) openrouterMetadata.provider = provider;
					controller.enqueue({
						type: "finish",
						finishReason,
						usage,
						providerMetadata: { openrouter: openrouterMetadata }
					});
				}
			})),
			response: { headers: responseHeaders }
		};
	}
};
var openrouterEmbeddingUsageSchema = object$1({
	prompt_tokens: number(),
	total_tokens: number(),
	cost: number().optional()
});
var openrouterEmbeddingDataSchema = object$1({
	object: literal("embedding"),
	embedding: array$1(number()),
	index: number().optional()
});
var OpenRouterEmbeddingResponseSchema = object$1({
	id: string().optional(),
	object: literal("list"),
	data: array$1(openrouterEmbeddingDataSchema),
	model: string(),
	provider: string().optional(),
	usage: openrouterEmbeddingUsageSchema.optional()
});
var OpenRouterEmbeddingModel = class {
	constructor(modelId, settings, config) {
		this.specificationVersion = "v3";
		this.provider = "openrouter";
		this.maxEmbeddingsPerCall = void 0;
		this.supportsParallelCalls = true;
		this.modelId = modelId;
		this.settings = settings;
		this.config = config;
	}
	async doEmbed(options) {
		var _a16, _b16, _c, _d, _e, _f;
		const { values, abortSignal, headers } = options;
		const args = __spreadValues(__spreadValues({
			model: this.modelId,
			input: values,
			user: this.settings.user,
			provider: this.settings.provider
		}, this.config.extraBody), this.settings.extraBody);
		const { value: responseValue, responseHeaders } = await postJsonToApi$1({
			url: this.config.url({
				path: "/embeddings",
				modelId: this.modelId
			}),
			headers: combineHeaders$1(this.config.headers(), headers),
			body: args,
			failedResponseHandler: openrouterFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler$1(OpenRouterEmbeddingResponseSchema),
			abortSignal,
			fetch: this.config.fetch
		});
		return {
			embeddings: responseValue.data.map((item) => item.embedding),
			usage: responseValue.usage ? { tokens: responseValue.usage.prompt_tokens } : void 0,
			providerMetadata: { openrouter: OpenRouterProviderMetadataSchema.parse({
				provider: (_a16 = responseValue.provider) != null ? _a16 : "",
				usage: __spreadValues({
					promptTokens: (_c = (_b16 = responseValue.usage) == null ? void 0 : _b16.prompt_tokens) != null ? _c : 0,
					completionTokens: 0,
					totalTokens: (_e = (_d = responseValue.usage) == null ? void 0 : _d.total_tokens) != null ? _e : 0
				}, ((_f = responseValue.usage) == null ? void 0 : _f.cost) != null ? { cost: responseValue.usage.cost } : {})
			}) },
			response: {
				headers: responseHeaders,
				body: responseValue
			},
			warnings: []
		};
	}
};
var OpenRouterImageResponseSchema = object$1({
	id: string().optional(),
	object: string().optional(),
	created: number().optional(),
	model: string(),
	choices: array$1(object$1({
		index: number(),
		message: object$1({
			role: string(),
			content: string().nullable().optional(),
			images: array$1(object$1({
				type: literal("image_url"),
				image_url: object$1({ url: string() })
			}).passthrough()).optional()
		}).passthrough(),
		finish_reason: string().nullable().optional()
	}).passthrough()),
	usage: object$1({
		prompt_tokens: number(),
		completion_tokens: number(),
		total_tokens: number()
	}).passthrough().optional()
}).passthrough();
var OpenRouterImageModel = class {
	constructor(modelId, settings, config) {
		this.specificationVersion = "v3";
		this.provider = "openrouter";
		this.maxImagesPerCall = 1;
		this.modelId = modelId;
		this.settings = settings;
		this.config = config;
	}
	async doGenerate(options) {
		var _a16;
		const { prompt, n, size, aspectRatio, seed, files, mask, abortSignal, headers, providerOptions } = options;
		const openrouterOptions = (providerOptions == null ? void 0 : providerOptions.openrouter) || {};
		const warnings = [];
		if (mask !== void 0) throw new UnsupportedFunctionalityError$1({ functionality: "image inpainting (mask parameter)" });
		if (n > 1) warnings.push({
			type: "unsupported",
			feature: "n > 1",
			details: `OpenRouter image generation returns 1 image per call. Requested ${n} images.`
		});
		if (size !== void 0) warnings.push({
			type: "unsupported",
			feature: "size",
			details: "Use aspectRatio instead. Size parameter is not supported by OpenRouter image generation."
		});
		const imageConfig = aspectRatio !== void 0 ? { aspect_ratio: aspectRatio } : void 0;
		const userContent = files !== void 0 && files.length > 0 ? [...files.map((file) => convertImageFileToContentPart(file)), {
			type: "text",
			text: prompt != null ? prompt : ""
		}] : prompt != null ? prompt : "";
		const body = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
			model: this.modelId,
			messages: [{
				role: "user",
				content: userContent
			}],
			modalities: ["image", "text"]
		}, imageConfig !== void 0 && { image_config: imageConfig }), seed !== void 0 && { seed }), this.settings.user !== void 0 && { user: this.settings.user }), this.settings.provider !== void 0 && { provider: this.settings.provider }), this.config.extraBody), this.settings.extraBody), openrouterOptions);
		const { value: responseValue, responseHeaders } = await postJsonToApi$1({
			url: this.config.url({
				path: "/chat/completions",
				modelId: this.modelId
			}),
			headers: combineHeaders$1(this.config.headers(), headers),
			body,
			failedResponseHandler: openrouterFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler$1(OpenRouterImageResponseSchema),
			abortSignal,
			fetch: this.config.fetch
		});
		const choice = responseValue.choices[0];
		if (!choice) throw new NoContentGeneratedError$1({ message: "No choice in response" });
		const images = [];
		if ((_a16 = choice.message) == null ? void 0 : _a16.images) for (const image of choice.message.images) {
			const dataUrl = image.image_url.url;
			images.push(getBase64FromDataUrl(dataUrl));
		}
		const usage = responseValue.usage ? {
			inputTokens: responseValue.usage.prompt_tokens,
			outputTokens: responseValue.usage.completion_tokens,
			totalTokens: responseValue.usage.total_tokens
		} : void 0;
		return {
			images,
			warnings,
			response: {
				timestamp: /* @__PURE__ */ new Date(),
				modelId: responseValue.model,
				headers: responseHeaders
			},
			usage
		};
	}
};
var DEFAULT_IMAGE_MEDIA_TYPE = "image/png";
function convertImageFileToContentPart(file) {
	if (file.type === "url") return {
		type: "image_url",
		image_url: { url: file.url }
	};
	return {
		type: "image_url",
		image_url: { url: buildFileDataUrl({
			data: file.data,
			mediaType: file.mediaType,
			defaultMediaType: DEFAULT_IMAGE_MEDIA_TYPE
		}) }
	};
}
var webSearch = createProviderToolFactory({
	id: "openrouter.web_search",
	inputSchema: object$1({ 
	/** Search results returned by the server tool */
results: array$1(unknown()).optional() })
});
function removeUndefinedEntries(record) {
	return Object.fromEntries(Object.entries(record).filter(([, value]) => value != null));
}
function normalizeHeaders2(headers) {
	if (!headers) return {};
	if (headers instanceof Headers) return Object.fromEntries(headers.entries());
	if (Array.isArray(headers)) return Object.fromEntries(headers);
	return headers;
}
function findHeaderKey(headers, targetKey) {
	const lowerTarget = targetKey.toLowerCase();
	return Object.keys(headers).find((key) => key.toLowerCase() === lowerTarget);
}
function withUserAgentSuffix2(headers, ...userAgentSuffixParts) {
	const cleanedHeaders = removeUndefinedEntries(normalizeHeaders2(headers));
	const existingUserAgentKey = findHeaderKey(cleanedHeaders, "user-agent");
	const existingUserAgentValue = existingUserAgentKey ? cleanedHeaders[existingUserAgentKey] : void 0;
	const userAgent = (existingUserAgentValue == null ? void 0 : existingUserAgentValue.trim()) ? existingUserAgentValue : userAgentSuffixParts.filter(Boolean).join(" ");
	return __spreadProps(__spreadValues({}, Object.fromEntries(Object.entries(cleanedHeaders).filter(([key]) => key.toLowerCase() !== "user-agent"))), { "user-agent": userAgent });
}
var VERSION2 = "2.9.0";
var VideoGenerationSubmitResponseSchema = object$1({
	id: string(),
	generation_id: string().optional(),
	polling_url: string(),
	status: string()
}).passthrough();
var VideoGenerationPollResponseSchema = object$1({
	id: string(),
	generation_id: string().optional(),
	polling_url: string(),
	status: string(),
	unsigned_urls: array$1(string()).optional(),
	usage: object$1({
		cost: number().optional(),
		is_byok: boolean().optional()
	}).passthrough().optional(),
	error: string().optional()
}).passthrough();
var DEFAULT_POLL_INTERVAL_MS = 2e3;
var DEFAULT_MAX_POLL_TIME_MS = 6e5;
var OpenRouterVideoModel = class {
	constructor(modelId, settings, config) {
		this.specificationVersion = "v3";
		this.provider = "openrouter";
		this.maxVideosPerCall = 1;
		this.modelId = modelId;
		this.settings = settings;
		this.config = config;
	}
	async doGenerate(options) {
		var _a16, _b16, _c, _d, _e;
		const { prompt, n, aspectRatio, resolution, duration, seed, image, abortSignal, headers, providerOptions } = options;
		const warnings = [];
		if (n > 1) warnings.push({
			type: "unsupported",
			feature: "n > 1",
			details: `OpenRouter video generation returns 1 video per call. Requested ${n} videos.`
		});
		const body = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
			model: this.modelId,
			prompt: prompt != null ? prompt : ""
		}, aspectRatio !== void 0 && { aspect_ratio: aspectRatio }), resolution !== void 0 && { size: resolution }), duration !== void 0 && { duration }), seed !== void 0 && { seed }), this.settings.generateAudio !== void 0 && { generate_audio: this.settings.generateAudio }), image !== void 0 && { frame_images: [convertImageToFrameImage(image)] }), this.config.extraBody), this.settings.extraBody), providerOptions.openrouter);
		const mergedHeaders = combineHeaders$1(this.config.headers(), headers);
		const { value: submitResponse, responseHeaders } = await postJsonToApi$1({
			url: this.config.url({
				path: "/videos",
				modelId: this.modelId
			}),
			headers: mergedHeaders,
			body,
			failedResponseHandler: openrouterFailedResponseHandler,
			successfulResponseHandler: createJsonResponseHandler$1(VideoGenerationSubmitResponseSchema),
			abortSignal,
			fetch: this.config.fetch
		});
		const pollIntervalMs = (_a16 = this.settings.pollIntervalMs) != null ? _a16 : DEFAULT_POLL_INTERVAL_MS;
		const maxPollTimeMs = (_b16 = this.settings.maxPollTimeMs) != null ? _b16 : DEFAULT_MAX_POLL_TIME_MS;
		const pollResult = await this.pollUntilComplete({
			jobId: submitResponse.id,
			headers: mergedHeaders,
			abortSignal,
			pollIntervalMs,
			maxPollTimeMs
		});
		const videos = [];
		if (pollResult.unsigned_urls) for (const url of pollResult.unsigned_urls) videos.push({
			type: "url",
			url,
			mediaType: "video/mp4"
		});
		return {
			videos,
			warnings,
			providerMetadata: { openrouter: {
				generationId: (_c = pollResult.generation_id) != null ? _c : null,
				cost: (_e = (_d = pollResult.usage) == null ? void 0 : _d.cost) != null ? _e : null
			} },
			response: {
				timestamp: /* @__PURE__ */ new Date(),
				modelId: this.modelId,
				headers: responseHeaders
			}
		};
	}
	async pollUntilComplete({ jobId, headers, abortSignal, pollIntervalMs, maxPollTimeMs }) {
		var _a16;
		const startTime = Date.now();
		while (Date.now() - startTime < maxPollTimeMs) {
			abortSignal?.throwIfAborted();
			await delay$1(pollIntervalMs);
			abortSignal?.throwIfAborted();
			const { value: pollResponse } = await getFromApi$1({
				url: this.config.url({
					path: `/videos/${jobId}`,
					modelId: this.modelId
				}),
				headers,
				failedResponseHandler: openrouterFailedResponseHandler,
				successfulResponseHandler: createJsonResponseHandler$1(VideoGenerationPollResponseSchema),
				abortSignal,
				fetch: this.config.fetch
			});
			if (pollResponse.status === "completed") return {
				generation_id: pollResponse.generation_id,
				unsigned_urls: pollResponse.unsigned_urls,
				usage: pollResponse.usage
			};
			if (pollResponse.status === "failed" || pollResponse.status === "dead" || pollResponse.status === "cancelled" || pollResponse.status === "expired") throw new APICallError$1({
				message: (_a16 = pollResponse.error) != null ? _a16 : `Video generation failed with status: ${pollResponse.status}`,
				url: this.config.url({
					path: `/videos/${jobId}`,
					modelId: this.modelId
				}),
				requestBodyValues: {},
				statusCode: 500,
				isRetryable: false
			});
		}
		throw new APICallError$1({
			message: `Video generation timed out after ${maxPollTimeMs}ms`,
			url: this.config.url({
				path: `/videos/${jobId}`,
				modelId: this.modelId
			}),
			requestBodyValues: {},
			statusCode: 408,
			isRetryable: true
		});
	}
};
function convertImageToFrameImage(file) {
	if (file.type === "url") return {
		type: "image_url",
		image_url: { url: file.url },
		frame_type: "first_frame"
	};
	return {
		type: "image_url",
		image_url: { url: buildFileDataUrl({
			data: file.data,
			mediaType: file.mediaType,
			defaultMediaType: "image/png"
		}) },
		frame_type: "first_frame"
	};
}
function createOpenRouter(options = {}) {
	var _a16, _b16, _c;
	const baseURL = (_b16 = withoutTrailingSlash$1((_a16 = options.baseURL) != null ? _a16 : options.baseUrl)) != null ? _b16 : "https://openrouter.ai/api/v1";
	const compatibility = (_c = options.compatibility) != null ? _c : "compatible";
	const getHeaders = () => withUserAgentSuffix2(__spreadValues(__spreadValues(__spreadValues(__spreadValues({ Authorization: `Bearer ${loadApiKey({
		apiKey: options.apiKey,
		environmentVariableName: "OPENROUTER_API_KEY",
		description: "OpenRouter"
	})}` }, options.appName && { "X-OpenRouter-Title": options.appName }), options.appUrl && { "HTTP-Referer": options.appUrl }), options.headers), options.api_keys && Object.keys(options.api_keys).length > 0 && { "X-Provider-API-Keys": JSON.stringify(options.api_keys) }), `ai-sdk/openrouter/${VERSION2}`);
	const createChatModel = (modelId, settings = {}) => new OpenRouterChatLanguageModel(modelId, settings, {
		provider: "openrouter.chat",
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		compatibility,
		fetch: options.fetch,
		extraBody: options.extraBody
	});
	const createCompletionModel = (modelId, settings = {}) => new OpenRouterCompletionLanguageModel(modelId, settings, {
		provider: "openrouter.completion",
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		compatibility,
		fetch: options.fetch,
		extraBody: options.extraBody
	});
	const createEmbeddingModel = (modelId, settings = {}) => new OpenRouterEmbeddingModel(modelId, settings, {
		provider: "openrouter.embedding",
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch,
		extraBody: options.extraBody
	});
	const createImageModel = (modelId, settings = {}) => new OpenRouterImageModel(modelId, settings, {
		provider: "openrouter.image",
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch,
		extraBody: options.extraBody
	});
	const createVideoModel = (modelId, settings = {}) => new OpenRouterVideoModel(modelId, settings, {
		provider: "openrouter.video",
		url: ({ path }) => `${baseURL}${path}`,
		headers: getHeaders,
		fetch: options.fetch,
		extraBody: options.extraBody
	});
	const createLanguageModel = (modelId, settings) => {
		if (new.target) throw new Error("The OpenRouter model function cannot be called with the new keyword.");
		if (modelId === "openai/gpt-3.5-turbo-instruct") return createCompletionModel(modelId, settings);
		return createChatModel(modelId, settings);
	};
	const provider = (modelId, settings) => createLanguageModel(modelId, settings);
	provider.languageModel = createLanguageModel;
	provider.chat = createChatModel;
	provider.completion = createCompletionModel;
	provider.textEmbeddingModel = createEmbeddingModel;
	provider.embedding = createEmbeddingModel;
	provider.imageModel = createImageModel;
	provider.videoModel = createVideoModel;
	provider.tools = { webSearch };
	return provider;
}
createOpenRouter({ compatibility: "strict" });
//#endregion
//#region node_modules/@ai-sdk/provider/dist/index.mjs
var marker$2 = "vercel.ai.error";
var symbol$3 = Symbol.for(marker$2);
var _a$3, _b$2;
var AISDKError = class _AISDKError extends (_b$2 = Error, _a$3 = symbol$3, _b$2) {
	/**
	* Creates an AI SDK Error.
	*
	* @param {Object} params - The parameters for creating the error.
	* @param {string} params.name - The name of the error.
	* @param {string} params.message - The error message.
	* @param {unknown} [params.cause] - The underlying cause of the error.
	*/
	constructor({ name: name14, message, cause }) {
		super(message);
		this[_a$3] = true;
		this.name = name14;
		this.cause = cause;
	}
	/**
	* Checks if the given error is an AI SDK Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is an AI SDK Error, false otherwise.
	*/
	static isInstance(error) {
		return _AISDKError.hasMarker(error, marker$2);
	}
	static hasMarker(error, marker15) {
		const markerSymbol = Symbol.for(marker15);
		return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
	}
};
var name$3 = "AI_APICallError";
var marker2$2 = `vercel.ai.error.${name$3}`;
var symbol2$2 = Symbol.for(marker2$2);
var _a2$2, _b2$1;
var APICallError = class extends (_b2$1 = AISDKError, _a2$2 = symbol2$2, _b2$1) {
	constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500), data }) {
		super({
			name: name$3,
			message,
			cause
		});
		this[_a2$2] = true;
		this.url = url;
		this.requestBodyValues = requestBodyValues;
		this.statusCode = statusCode;
		this.responseHeaders = responseHeaders;
		this.responseBody = responseBody;
		this.isRetryable = isRetryable;
		this.data = data;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker2$2);
	}
};
var name2$2 = "AI_EmptyResponseBodyError";
var marker3$2 = `vercel.ai.error.${name2$2}`;
var symbol3$2 = Symbol.for(marker3$2);
var _a3$2, _b3$1;
var EmptyResponseBodyError = class extends (_b3$1 = AISDKError, _a3$2 = symbol3$2, _b3$1) {
	constructor({ message = "Empty response body" } = {}) {
		super({
			name: name2$2,
			message
		});
		this[_a3$2] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3$2);
	}
};
function getErrorMessage$1(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	return JSON.stringify(error);
}
var name3$2 = "AI_InvalidArgumentError";
var marker4$2 = `vercel.ai.error.${name3$2}`;
var symbol4$2 = Symbol.for(marker4$2);
var _a4$2, _b4$1;
var InvalidArgumentError$1 = class extends (_b4$1 = AISDKError, _a4$2 = symbol4$2, _b4$1) {
	constructor({ message, cause, argument }) {
		super({
			name: name3$2,
			message,
			cause
		});
		this[_a4$2] = true;
		this.argument = argument;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4$2);
	}
};
var name4$2 = "AI_InvalidPromptError";
var marker5$2 = `vercel.ai.error.${name4$2}`;
var symbol5$2 = Symbol.for(marker5$2);
var _a5$2, _b5$1;
var InvalidPromptError = class extends (_b5$1 = AISDKError, _a5$2 = symbol5$2, _b5$1) {
	constructor({ prompt, message, cause }) {
		super({
			name: name4$2,
			message: `Invalid prompt: ${message}`,
			cause
		});
		this[_a5$2] = true;
		this.prompt = prompt;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker5$2);
	}
};
var name6$2 = "AI_JSONParseError";
var marker7$2 = `vercel.ai.error.${name6$2}`;
var symbol7$2 = Symbol.for(marker7$2);
var _a7$2, _b7$1;
var JSONParseError = class extends (_b7$1 = AISDKError, _a7$2 = symbol7$2, _b7$1) {
	constructor({ text, cause }) {
		super({
			name: name6$2,
			message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage$1(cause)}`,
			cause
		});
		this[_a7$2] = true;
		this.text = text;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker7$2);
	}
};
var name12$1 = "AI_TypeValidationError";
var marker13$1 = `vercel.ai.error.${name12$1}`;
var symbol13$1 = Symbol.for(marker13$1);
var _a13$1, _b13;
var TypeValidationError = class _TypeValidationError extends (_b13 = AISDKError, _a13$1 = symbol13$1, _b13) {
	constructor({ value, cause, context }) {
		let contextPrefix = "Type validation failed";
		if (context == null ? void 0 : context.field) contextPrefix += ` for ${context.field}`;
		if ((context == null ? void 0 : context.entityName) || (context == null ? void 0 : context.entityId)) {
			contextPrefix += " (";
			const parts = [];
			if (context.entityName) parts.push(context.entityName);
			if (context.entityId) parts.push(`id: "${context.entityId}"`);
			contextPrefix += parts.join(", ");
			contextPrefix += ")";
		}
		super({
			name: name12$1,
			message: `${contextPrefix}: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage$1(cause)}`,
			cause
		});
		this[_a13$1] = true;
		this.value = value;
		this.context = context;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker13$1);
	}
	/**
	* Wraps an error into a TypeValidationError.
	* If the cause is already a TypeValidationError with the same value and context, it returns the cause.
	* Otherwise, it creates a new TypeValidationError.
	*
	* @param {Object} params - The parameters for wrapping the error.
	* @param {unknown} params.value - The value that failed validation.
	* @param {unknown} params.cause - The original error or cause of the validation failure.
	* @param {TypeValidationContext} params.context - Optional context about what is being validated.
	* @returns {TypeValidationError} A TypeValidationError instance.
	*/
	static wrap({ value, cause, context }) {
		var _a15, _b15, _c;
		if (_TypeValidationError.isInstance(cause) && cause.value === value && ((_a15 = cause.context) == null ? void 0 : _a15.field) === (context == null ? void 0 : context.field) && ((_b15 = cause.context) == null ? void 0 : _b15.entityName) === (context == null ? void 0 : context.entityName) && ((_c = cause.context) == null ? void 0 : _c.entityId) === (context == null ? void 0 : context.entityId)) return cause;
		return new _TypeValidationError({
			value,
			cause,
			context
		});
	}
};
var name13$1 = "AI_UnsupportedFunctionalityError";
var marker14$1 = `vercel.ai.error.${name13$1}`;
var symbol14$1 = Symbol.for(marker14$1);
var _a14$1, _b14;
var UnsupportedFunctionalityError = class extends (_b14 = AISDKError, _a14$1 = symbol14$1, _b14) {
	constructor({ functionality, message = `'${functionality}' functionality not supported.` }) {
		super({
			name: name13$1,
			message
		});
		this[_a14$1] = true;
		this.functionality = functionality;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker14$1);
	}
};
//#endregion
//#region node_modules/eventsource-parser/dist/index.js
var ParseError = class extends Error {
	constructor(message, options) {
		super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
	}
};
var LF = 10, CR = 13, SPACE = 32;
function noop(_arg) {}
function createParser(config) {
	if (typeof config == "function") throw new TypeError("`config` must be an object, got a function instead. Did you mean `createParser({onEvent: fn})`?");
	const { onEvent = noop, onError = noop, onRetry = noop, onComment, maxBufferSize } = config, pendingFragments = [];
	let pendingFragmentsLength = 0, isFirstChunk = !0, id, data = "", dataLines = 0, eventType, terminated = !1;
	function feed(chunk) {
		if (terminated) throw new Error("Cannot feed parser: it was terminated after exceeding the configured max buffer size. Call `reset()` to resume parsing.");
		if (isFirstChunk && (isFirstChunk = !1, chunk.charCodeAt(0) === 239 && chunk.charCodeAt(1) === 187 && chunk.charCodeAt(2) === 191 && (chunk = chunk.slice(3))), pendingFragments.length === 0) {
			const trailing2 = processLines(chunk);
			trailing2 !== "" && (pendingFragments.push(trailing2), pendingFragmentsLength = trailing2.length), checkBufferSize();
			return;
		}
		if (chunk.indexOf(`
`) === -1 && chunk.indexOf("\r") === -1) {
			pendingFragments.push(chunk), pendingFragmentsLength += chunk.length, checkBufferSize();
			return;
		}
		pendingFragments.push(chunk);
		const input = pendingFragments.join("");
		pendingFragments.length = 0, pendingFragmentsLength = 0;
		const trailing = processLines(input);
		trailing !== "" && (pendingFragments.push(trailing), pendingFragmentsLength = trailing.length), checkBufferSize();
	}
	function checkBufferSize() {
		maxBufferSize !== void 0 && (pendingFragmentsLength + data.length <= maxBufferSize || (terminated = !0, pendingFragments.length = 0, pendingFragmentsLength = 0, id = void 0, data = "", dataLines = 0, eventType = void 0, onError(new ParseError(`Buffered data exceeded max buffer size of ${maxBufferSize} characters`, { type: "max-buffer-size-exceeded" }))));
	}
	function processLines(chunk) {
		let searchIndex = 0;
		if (chunk.indexOf("\r") === -1) {
			let lfIndex = chunk.indexOf(`
`, searchIndex);
			for (; lfIndex !== -1;) {
				if (searchIndex === lfIndex) {
					dataLines > 0 && onEvent({
						id,
						event: eventType,
						data
					}), id = void 0, data = "", dataLines = 0, eventType = void 0, searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
					continue;
				}
				const firstCharCode = chunk.charCodeAt(searchIndex);
				if (isDataPrefix(chunk, searchIndex, firstCharCode)) {
					const valueStart = chunk.charCodeAt(searchIndex + 5) === SPACE ? searchIndex + 6 : searchIndex + 5, value = chunk.slice(valueStart, lfIndex);
					if (dataLines === 0 && chunk.charCodeAt(lfIndex + 1) === LF) {
						onEvent({
							id,
							event: eventType,
							data: value
						}), id = void 0, data = "", eventType = void 0, searchIndex = lfIndex + 2, lfIndex = chunk.indexOf(`
`, searchIndex);
						continue;
					}
					data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
				} else isEventPrefix(chunk, searchIndex, firstCharCode) ? eventType = chunk.slice(chunk.charCodeAt(searchIndex + 6) === SPACE ? searchIndex + 7 : searchIndex + 6, lfIndex) || void 0 : parseLine(chunk, searchIndex, lfIndex);
				searchIndex = lfIndex + 1, lfIndex = chunk.indexOf(`
`, searchIndex);
			}
			return chunk.slice(searchIndex);
		}
		for (; searchIndex < chunk.length;) {
			const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
			let lineEnd = -1;
			if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = crIndex < lfIndex ? crIndex : lfIndex : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) break;
			parseLine(chunk, searchIndex, lineEnd), searchIndex = lineEnd + 1, chunk.charCodeAt(searchIndex - 1) === CR && chunk.charCodeAt(searchIndex) === LF && searchIndex++;
		}
		return chunk.slice(searchIndex);
	}
	function parseLine(chunk, start, end) {
		if (start === end) {
			dispatchEvent();
			return;
		}
		const firstCharCode = chunk.charCodeAt(start);
		if (isDataPrefix(chunk, start, firstCharCode)) {
			const valueStart = chunk.charCodeAt(start + 5) === SPACE ? start + 6 : start + 5, value2 = chunk.slice(valueStart, end);
			data = dataLines === 0 ? value2 : `${data}
${value2}`, dataLines++;
			return;
		}
		if (isEventPrefix(chunk, start, firstCharCode)) {
			eventType = chunk.slice(chunk.charCodeAt(start + 6) === SPACE ? start + 7 : start + 6, end) || void 0;
			return;
		}
		if (firstCharCode === 105 && chunk.charCodeAt(start + 1) === 100 && chunk.charCodeAt(start + 2) === 58) {
			const value2 = chunk.slice(chunk.charCodeAt(start + 3) === SPACE ? start + 4 : start + 3, end);
			id = value2.includes("\0") ? void 0 : value2;
			return;
		}
		if (firstCharCode === 58) {
			if (onComment) onComment(chunk.slice(start, end).slice(chunk.charCodeAt(start + 1) === SPACE ? 2 : 1));
			return;
		}
		const line = chunk.slice(start, end), fieldSeparatorIndex = line.indexOf(":");
		if (fieldSeparatorIndex === -1) {
			processField(line, "", line);
			return;
		}
		const field = line.slice(0, fieldSeparatorIndex), offset = line.charCodeAt(fieldSeparatorIndex + 1) === SPACE ? 2 : 1;
		processField(field, line.slice(fieldSeparatorIndex + offset), line);
	}
	function processField(field, value, line) {
		switch (field) {
			case "event":
				eventType = value || void 0;
				break;
			case "data":
				data = dataLines === 0 ? value : `${data}
${value}`, dataLines++;
				break;
			case "id":
				id = value.includes("\0") ? void 0 : value;
				break;
			case "retry":
				/^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
					type: "invalid-retry",
					value,
					line
				}));
				break;
			default:
				onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
					type: "unknown-field",
					field,
					value,
					line
				}));
				break;
		}
	}
	function dispatchEvent() {
		dataLines > 0 && onEvent({
			id,
			event: eventType,
			data
		}), id = void 0, data = "", dataLines = 0, eventType = void 0;
	}
	function reset(options = {}) {
		if (options.consume && pendingFragments.length > 0) {
			const incompleteLine = pendingFragments.join("");
			parseLine(incompleteLine, 0, incompleteLine.length);
		}
		isFirstChunk = !0, id = void 0, data = "", dataLines = 0, eventType = void 0, pendingFragments.length = 0, pendingFragmentsLength = 0, terminated = !1;
	}
	return {
		feed,
		reset
	};
}
function isDataPrefix(chunk, i, firstCharCode) {
	return firstCharCode === 100 && chunk.charCodeAt(i + 1) === 97 && chunk.charCodeAt(i + 2) === 116 && chunk.charCodeAt(i + 3) === 97 && chunk.charCodeAt(i + 4) === 58;
}
function isEventPrefix(chunk, i, firstCharCode) {
	return firstCharCode === 101 && chunk.charCodeAt(i + 1) === 118 && chunk.charCodeAt(i + 2) === 101 && chunk.charCodeAt(i + 3) === 110 && chunk.charCodeAt(i + 4) === 116 && chunk.charCodeAt(i + 5) === 58;
}
//#endregion
//#region node_modules/eventsource-parser/dist/stream.js
var EventSourceParserStream = class extends TransformStream {
	constructor({ onError, onRetry, onComment, maxBufferSize } = {}) {
		let parser;
		super({
			start(controller) {
				parser = createParser({
					onEvent: (event) => {
						controller.enqueue(event);
					},
					onError(error) {
						typeof onError == "function" && onError(error), (onError === "terminate" || error.type === "max-buffer-size-exceeded") && controller.error(error);
					},
					onRetry,
					onComment,
					maxBufferSize
				});
			},
			transform(chunk) {
				parser.feed(chunk);
			}
		});
	}
};
//#endregion
//#region node_modules/@ai-sdk/provider-utils/dist/index.mjs
function combineHeaders(...headers) {
	return headers.reduce((combinedHeaders, currentHeaders) => ({
		...combinedHeaders,
		...currentHeaders != null ? currentHeaders : {}
	}), {});
}
async function delay(delayInMs, options) {
	if (delayInMs == null) return Promise.resolve();
	const signal = options == null ? void 0 : options.abortSignal;
	return new Promise((resolve2, reject) => {
		if (signal == null ? void 0 : signal.aborted) {
			reject(createAbortError());
			return;
		}
		const timeoutId = setTimeout(() => {
			cleanup();
			resolve2();
		}, delayInMs);
		const cleanup = () => {
			clearTimeout(timeoutId);
			signal?.removeEventListener("abort", onAbort);
		};
		const onAbort = () => {
			cleanup();
			reject(createAbortError());
		};
		signal?.addEventListener("abort", onAbort);
	});
}
function createAbortError() {
	return new DOMException("Delay was aborted", "AbortError");
}
var DelayedPromise = class {
	constructor() {
		this.status = { type: "pending" };
		this._resolve = void 0;
		this._reject = void 0;
	}
	get promise() {
		if (this._promise) return this._promise;
		this._promise = new Promise((resolve2, reject) => {
			if (this.status.type === "resolved") resolve2(this.status.value);
			else if (this.status.type === "rejected") reject(this.status.error);
			this._resolve = resolve2;
			this._reject = reject;
		});
		return this._promise;
	}
	resolve(value) {
		var _a2;
		this.status = {
			type: "resolved",
			value
		};
		if (this._promise) (_a2 = this._resolve) == null || _a2.call(this, value);
	}
	reject(error) {
		var _a2;
		this.status = {
			type: "rejected",
			error
		};
		if (this._promise) (_a2 = this._reject) == null || _a2.call(this, error);
	}
	isResolved() {
		return this.status.type === "resolved";
	}
	isRejected() {
		return this.status.type === "rejected";
	}
	isPending() {
		return this.status.type === "pending";
	}
};
function extractResponseHeaders(response) {
	return Object.fromEntries([...response.headers]);
}
var { btoa: btoa$1, atob: atob$1 } = globalThis;
function convertBase64ToUint8Array(base64String) {
	const latin1string = atob$1(base64String.replace(/-/g, "+").replace(/_/g, "/"));
	return Uint8Array.from(latin1string, (byte) => byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
	let latin1string = "";
	for (let i = 0; i < array.length; i++) latin1string += String.fromCodePoint(array[i]);
	return btoa$1(latin1string);
}
var name$2 = "AI_DownloadError";
var marker$1 = `vercel.ai.error.${name$2}`;
var symbol$2 = Symbol.for(marker$1);
var _a$2, _b$1;
var DownloadError = class extends (_b$1 = AISDKError, _a$2 = symbol$2, _b$1) {
	constructor({ url, statusCode, statusText, cause, message = cause == null ? `Failed to download ${url}: ${statusCode} ${statusText}` : `Failed to download ${url}: ${cause}` }) {
		super({
			name: name$2,
			message,
			cause
		});
		this[_a$2] = true;
		this.url = url;
		this.statusCode = statusCode;
		this.statusText = statusText;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker$1);
	}
};
var DEFAULT_MAX_DOWNLOAD_SIZE = 2 * 1024 * 1024 * 1024;
async function readResponseWithSizeLimit({ response, url, maxBytes = DEFAULT_MAX_DOWNLOAD_SIZE }) {
	const contentLength = response.headers.get("content-length");
	if (contentLength != null) {
		const length = parseInt(contentLength, 10);
		if (!isNaN(length) && length > maxBytes) throw new DownloadError({
			url,
			message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes (Content-Length: ${length}).`
		});
	}
	const body = response.body;
	if (body == null) return new Uint8Array(0);
	const reader = body.getReader();
	const chunks = [];
	let totalBytes = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			totalBytes += value.length;
			if (totalBytes > maxBytes) throw new DownloadError({
				url,
				message: `Download of ${url} exceeded maximum size of ${maxBytes} bytes.`
			});
			chunks.push(value);
		}
	} finally {
		try {
			await reader.cancel();
		} finally {
			reader.releaseLock();
		}
	}
	const result = new Uint8Array(totalBytes);
	let offset = 0;
	for (const chunk of chunks) {
		result.set(chunk, offset);
		offset += chunk.length;
	}
	return result;
}
function validateDownloadUrl(url) {
	let parsed;
	try {
		parsed = new URL(url);
	} catch (e) {
		throw new DownloadError({
			url,
			message: `Invalid URL: ${url}`
		});
	}
	if (parsed.protocol === "data:") return;
	if (parsed.protocol !== "http:" && parsed.protocol !== "https:") throw new DownloadError({
		url,
		message: `URL scheme must be http, https, or data, got ${parsed.protocol}`
	});
	const hostname = parsed.hostname;
	if (!hostname) throw new DownloadError({
		url,
		message: `URL must have a hostname`
	});
	if (hostname === "localhost" || hostname.endsWith(".local") || hostname.endsWith(".localhost")) throw new DownloadError({
		url,
		message: `URL with hostname ${hostname} is not allowed`
	});
	if (hostname.startsWith("[") && hostname.endsWith("]")) {
		if (isPrivateIPv6(hostname.slice(1, -1))) throw new DownloadError({
			url,
			message: `URL with IPv6 address ${hostname} is not allowed`
		});
		return;
	}
	if (isIPv4(hostname)) {
		if (isPrivateIPv4(hostname)) throw new DownloadError({
			url,
			message: `URL with IP address ${hostname} is not allowed`
		});
		return;
	}
}
function isIPv4(hostname) {
	const parts = hostname.split(".");
	if (parts.length !== 4) return false;
	return parts.every((part) => {
		const num = Number(part);
		return Number.isInteger(num) && num >= 0 && num <= 255 && String(num) === part;
	});
}
function isPrivateIPv4(ip) {
	const [a, b] = ip.split(".").map(Number);
	if (a === 0) return true;
	if (a === 10) return true;
	if (a === 127) return true;
	if (a === 169 && b === 254) return true;
	if (a === 172 && b >= 16 && b <= 31) return true;
	if (a === 192 && b === 168) return true;
	return false;
}
function isPrivateIPv6(ip) {
	const normalized = ip.toLowerCase();
	if (normalized === "::1") return true;
	if (normalized === "::") return true;
	if (normalized.startsWith("::ffff:")) {
		const mappedPart = normalized.slice(7);
		if (isIPv4(mappedPart)) return isPrivateIPv4(mappedPart);
		const hexParts = mappedPart.split(":");
		if (hexParts.length === 2) {
			const high = parseInt(hexParts[0], 16);
			const low = parseInt(hexParts[1], 16);
			if (!isNaN(high) && !isNaN(low)) return isPrivateIPv4(`${high >> 8 & 255}.${high & 255}.${low >> 8 & 255}.${low & 255}`);
		}
	}
	if (normalized.startsWith("fc") || normalized.startsWith("fd")) return true;
	if (normalized.startsWith("fe80")) return true;
	return false;
}
var createIdGenerator = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {}) => {
	const generator = () => {
		const alphabetLength = alphabet.length;
		const chars = new Array(size);
		for (let i = 0; i < size; i++) chars[i] = alphabet[Math.random() * alphabetLength | 0];
		return chars.join("");
	};
	if (prefix == null) return generator;
	if (alphabet.includes(separator)) throw new InvalidArgumentError$1({
		argument: "separator",
		message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
	});
	return () => `${prefix}${separator}${generator()}`;
};
createIdGenerator();
function getErrorMessage(error) {
	if (error == null) return "unknown error";
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	return JSON.stringify(error);
}
function isAbortError(error) {
	return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || error.name === "TimeoutError");
}
var FETCH_FAILED_ERROR_MESSAGES = ["fetch failed", "failed to fetch"];
var BUN_ERROR_CODES = [
	"ConnectionRefused",
	"ConnectionClosed",
	"FailedToOpenSocket",
	"ECONNRESET",
	"ECONNREFUSED",
	"ETIMEDOUT",
	"EPIPE"
];
function isBunNetworkError(error) {
	if (!(error instanceof Error)) return false;
	const code = error.code;
	if (typeof code === "string" && BUN_ERROR_CODES.includes(code)) return true;
	return false;
}
function handleFetchError({ error, url, requestBodyValues }) {
	if (isAbortError(error)) return error;
	if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
		const cause = error.cause;
		if (cause != null) return new APICallError({
			message: `Cannot connect to API: ${cause.message}`,
			cause,
			url,
			requestBodyValues,
			isRetryable: true
		});
	}
	if (isBunNetworkError(error)) return new APICallError({
		message: `Cannot connect to API: ${error.message}`,
		cause: error,
		url,
		requestBodyValues,
		isRetryable: true
	});
	return error;
}
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
	var _a2, _b2, _c;
	if (globalThisAny.window) return `runtime/browser`;
	if ((_a2 = globalThisAny.navigator) == null ? void 0 : _a2.userAgent) return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
	if ((_c = (_b2 = globalThisAny.process) == null ? void 0 : _b2.versions) == null ? void 0 : _c.node) return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
	if (globalThisAny.EdgeRuntime) return `runtime/vercel-edge`;
	return "runtime/unknown";
}
function normalizeHeaders(headers) {
	if (headers == null) return {};
	const normalized = {};
	if (headers instanceof Headers) headers.forEach((value, key) => {
		normalized[key.toLowerCase()] = value;
	});
	else {
		if (!Array.isArray(headers)) headers = Object.entries(headers);
		for (const [key, value] of headers) if (value != null) normalized[key.toLowerCase()] = value;
	}
	return normalized;
}
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
	const normalizedHeaders = new Headers(normalizeHeaders(headers));
	const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
	normalizedHeaders.set("user-agent", [currentUserAgentHeader, ...userAgentSuffixParts].filter(Boolean).join(" "));
	return Object.fromEntries(normalizedHeaders.entries());
}
var VERSION$3 = "4.0.27";
var getOriginalFetch = () => globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch() }) => {
	try {
		const response = await fetch2(url, {
			method: "GET",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$3}`, getRuntimeEnvironmentUserAgent()),
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: {}
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: {}
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: {}
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: {}
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: {}
		});
	}
};
function isNonNullable(value) {
	return value != null;
}
function isUrlSupported({ mediaType, url, supportedUrls }) {
	url = url.toLowerCase();
	mediaType = mediaType.toLowerCase();
	return Object.entries(supportedUrls).map(([key, value]) => {
		const mediaType2 = key.toLowerCase();
		return mediaType2 === "*" || mediaType2 === "*/*" ? {
			mediaTypePrefix: "",
			regexes: value
		} : {
			mediaTypePrefix: mediaType2.replace(/\*/, ""),
			regexes: value
		};
	}).filter(({ mediaTypePrefix }) => mediaType.startsWith(mediaTypePrefix)).flatMap(({ regexes }) => regexes).some((pattern) => pattern.test(url));
}
function loadOptionalSetting({ settingValue, environmentVariableName }) {
	if (typeof settingValue === "string") return settingValue;
	if (settingValue != null || typeof process === "undefined") return;
	settingValue = process.env[environmentVariableName];
	if (settingValue == null || typeof settingValue !== "string") return;
	return settingValue;
}
var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function _parse(text) {
	const obj = JSON.parse(text);
	if (obj === null || typeof obj !== "object") return obj;
	if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) return obj;
	return filter(obj);
}
function filter(obj) {
	let next = [obj];
	while (next.length) {
		const nodes = next;
		next = [];
		for (const node of nodes) {
			if (Object.prototype.hasOwnProperty.call(node, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
			if (Object.prototype.hasOwnProperty.call(node, "constructor") && node.constructor !== null && typeof node.constructor === "object" && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
			for (const key in node) {
				const value = node[key];
				if (value && typeof value === "object") next.push(value);
			}
		}
	}
	return obj;
}
function secureJsonParse(text) {
	const { stackTraceLimit } = Error;
	try {
		Error.stackTraceLimit = 0;
	} catch (e) {
		return _parse(text);
	}
	try {
		return _parse(text);
	} finally {
		Error.stackTraceLimit = stackTraceLimit;
	}
}
function addAdditionalPropertiesToJsonSchema(jsonSchema2) {
	if (jsonSchema2.type === "object" || Array.isArray(jsonSchema2.type) && jsonSchema2.type.includes("object")) {
		jsonSchema2.additionalProperties = false;
		const { properties } = jsonSchema2;
		if (properties != null) for (const key of Object.keys(properties)) properties[key] = visit(properties[key]);
	}
	if (jsonSchema2.items != null) jsonSchema2.items = Array.isArray(jsonSchema2.items) ? jsonSchema2.items.map(visit) : visit(jsonSchema2.items);
	if (jsonSchema2.anyOf != null) jsonSchema2.anyOf = jsonSchema2.anyOf.map(visit);
	if (jsonSchema2.allOf != null) jsonSchema2.allOf = jsonSchema2.allOf.map(visit);
	if (jsonSchema2.oneOf != null) jsonSchema2.oneOf = jsonSchema2.oneOf.map(visit);
	const { definitions } = jsonSchema2;
	if (definitions != null) for (const key of Object.keys(definitions)) definitions[key] = visit(definitions[key]);
	return jsonSchema2;
}
function visit(def) {
	if (typeof def === "boolean") return def;
	return addAdditionalPropertiesToJsonSchema(def);
}
var ignoreOverride = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: true,
	rejectedAdditionalProperties: false,
	definitionPath: "definitions",
	strictUnions: false,
	definitions: {},
	errorMessages: false,
	patternStrategy: "escape",
	applyRegexFlags: false,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref"
};
var getDefaultOptions = (options) => typeof options === "string" ? {
	...defaultOptions,
	name: options
} : {
	...defaultOptions,
	...options
};
function parseAnyDef() {
	return {};
}
function parseArrayDef(def, refs) {
	var _a2, _b2, _c;
	const res = { type: "array" };
	if (((_a2 = def.type) == null ? void 0 : _a2._def) && ((_c = (_b2 = def.type) == null ? void 0 : _b2._def) == null ? void 0 : _c.typeName) !== ZodFirstPartyTypeKind.ZodAny) res.items = parseDef(def.type._def, {
		...refs,
		currentPath: [...refs.currentPath, "items"]
	});
	if (def.minLength) res.minItems = def.minLength.value;
	if (def.maxLength) res.maxItems = def.maxLength.value;
	if (def.exactLength) {
		res.minItems = def.exactLength.value;
		res.maxItems = def.exactLength.value;
	}
	return res;
}
function parseBigintDef(def) {
	const res = {
		type: "integer",
		format: "int64"
	};
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf":
			res.multipleOf = check.value;
			break;
	}
	return res;
}
function parseBooleanDef() {
	return { type: "boolean" };
}
function parseBrandedDef(_def, refs) {
	return parseDef(_def.type._def, refs);
}
var parseCatchDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
function parseDateDef(def, refs, overrideDateStrategy) {
	const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
	if (Array.isArray(strategy)) return { anyOf: strategy.map((item, i) => parseDateDef(def, refs, item)) };
	switch (strategy) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return integerDateParser(def);
	}
}
var integerDateParser = (def) => {
	const res = {
		type: "integer",
		format: "unix-time"
	};
	for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minimum = check.value;
			break;
		case "max":
			res.maximum = check.value;
			break;
	}
	return res;
};
function parseDefaultDef(_def, refs) {
	return {
		...parseDef(_def.innerType._def, refs),
		default: _def.defaultValue()
	};
}
function parseEffectsDef(_def, refs) {
	return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
function parseEnumDef(def) {
	return {
		type: "string",
		enum: Array.from(def.values)
	};
}
var isJsonSchema7AllOfType = (type) => {
	if ("type" in type && type.type === "string") return false;
	return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
	const allOf = [parseDef(def.left._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	}), parseDef(def.right._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"1"
		]
	})].filter((x) => !!x);
	const mergedAllOf = [];
	allOf.forEach((schema) => {
		if (isJsonSchema7AllOfType(schema)) mergedAllOf.push(...schema.allOf);
		else {
			let nestedSchema = schema;
			if ("additionalProperties" in schema && schema.additionalProperties === false) {
				const { additionalProperties, ...rest } = schema;
				nestedSchema = rest;
			}
			mergedAllOf.push(nestedSchema);
		}
	});
	return mergedAllOf.length ? { allOf: mergedAllOf } : void 0;
}
function parseLiteralDef(def) {
	const parsedType = typeof def.value;
	if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return { type: Array.isArray(def.value) ? "array" : "object" };
	return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		const: def.value
	};
}
var emojiRegex = void 0;
var zodPatterns = {
	/**
	* `c` was changed to `[cC]` to replicate /i flag
	*/
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	/**
	* `a-z` was added to replicate /i flag
	*/
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
	/**
	* Constructed a valid Unicode RegExp
	*
	* Lazily instantiate since this type of regex isn't supported
	* in all envs (e.g. React Native).
	*
	* See:
	* https://github.com/colinhacks/zod/issues/2433
	* Fix in Zod:
	* https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
	*/
	emoji: () => {
		if (emojiRegex === void 0) emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
		return emojiRegex;
	},
	/**
	* Unused
	*/
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	/**
	* Unused
	*/
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	/**
	* Unused
	*/
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
	const res = { type: "string" };
	if (def.checks) for (const check of def.checks) switch (check.kind) {
		case "min":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			break;
		case "max":
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "email":
			switch (refs.emailStrategy) {
				case "format:email":
					addFormat(res, "email", check.message, refs);
					break;
				case "format:idn-email":
					addFormat(res, "idn-email", check.message, refs);
					break;
				case "pattern:zod":
					addPattern(res, zodPatterns.email, check.message, refs);
					break;
			}
			break;
		case "url":
			addFormat(res, "uri", check.message, refs);
			break;
		case "uuid":
			addFormat(res, "uuid", check.message, refs);
			break;
		case "regex":
			addPattern(res, check.regex, check.message, refs);
			break;
		case "cuid":
			addPattern(res, zodPatterns.cuid, check.message, refs);
			break;
		case "cuid2":
			addPattern(res, zodPatterns.cuid2, check.message, refs);
			break;
		case "startsWith":
			addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
			break;
		case "endsWith":
			addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
			break;
		case "datetime":
			addFormat(res, "date-time", check.message, refs);
			break;
		case "date":
			addFormat(res, "date", check.message, refs);
			break;
		case "time":
			addFormat(res, "time", check.message, refs);
			break;
		case "duration":
			addFormat(res, "duration", check.message, refs);
			break;
		case "length":
			res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
			res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
			break;
		case "includes":
			addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
			break;
		case "ip":
			if (check.version !== "v6") addFormat(res, "ipv4", check.message, refs);
			if (check.version !== "v4") addFormat(res, "ipv6", check.message, refs);
			break;
		case "base64url":
			addPattern(res, zodPatterns.base64url, check.message, refs);
			break;
		case "jwt":
			addPattern(res, zodPatterns.jwt, check.message, refs);
			break;
		case "cidr":
			if (check.version !== "v6") addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
			if (check.version !== "v4") addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
			break;
		case "emoji":
			addPattern(res, zodPatterns.emoji(), check.message, refs);
			break;
		case "ulid":
			addPattern(res, zodPatterns.ulid, check.message, refs);
			break;
		case "base64":
			switch (refs.base64Strategy) {
				case "format:binary":
					addFormat(res, "binary", check.message, refs);
					break;
				case "contentEncoding:base64":
					res.contentEncoding = "base64";
					break;
				case "pattern:zod":
					addPattern(res, zodPatterns.base64, check.message, refs);
					break;
			}
			break;
		case "nanoid": addPattern(res, zodPatterns.nanoid, check.message, refs);
		case "toLowerCase":
		case "toUpperCase":
		case "trim": break;
		default:
	}
	return res;
}
function escapeLiteralCheckValue(literal, refs) {
	return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
	let result = "";
	for (let i = 0; i < source.length; i++) {
		if (!ALPHA_NUMERIC.has(source[i])) result += "\\";
		result += source[i];
	}
	return result;
}
function addFormat(schema, value, message, refs) {
	var _a2;
	if (schema.format || ((_a2 = schema.anyOf) == null ? void 0 : _a2.some((x) => x.format))) {
		if (!schema.anyOf) schema.anyOf = [];
		if (schema.format) {
			schema.anyOf.push({ format: schema.format });
			delete schema.format;
		}
		schema.anyOf.push({
			format: value,
			...message && refs.errorMessages && { errorMessage: { format: message } }
		});
	} else schema.format = value;
}
function addPattern(schema, regex, message, refs) {
	var _a2;
	if (schema.pattern || ((_a2 = schema.allOf) == null ? void 0 : _a2.some((x) => x.pattern))) {
		if (!schema.allOf) schema.allOf = [];
		if (schema.pattern) {
			schema.allOf.push({ pattern: schema.pattern });
			delete schema.pattern;
		}
		schema.allOf.push({
			pattern: stringifyRegExpWithFlags(regex, refs),
			...message && refs.errorMessages && { errorMessage: { pattern: message } }
		});
	} else schema.pattern = stringifyRegExpWithFlags(regex, refs);
}
function stringifyRegExpWithFlags(regex, refs) {
	var _a2;
	if (!refs.applyRegexFlags || !regex.flags) return regex.source;
	const flags = {
		i: regex.flags.includes("i"),
		m: regex.flags.includes("m"),
		s: regex.flags.includes("s")
	};
	const source = flags.i ? regex.source.toLowerCase() : regex.source;
	let pattern = "";
	let isEscaped = false;
	let inCharGroup = false;
	let inCharRange = false;
	for (let i = 0; i < source.length; i++) {
		if (isEscaped) {
			pattern += source[i];
			isEscaped = false;
			continue;
		}
		if (flags.i) {
			if (inCharGroup) {
				if (source[i].match(/[a-z]/)) {
					if (inCharRange) {
						pattern += source[i];
						pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
						inCharRange = false;
					} else if (source[i + 1] === "-" && ((_a2 = source[i + 2]) == null ? void 0 : _a2.match(/[a-z]/))) {
						pattern += source[i];
						inCharRange = true;
					} else pattern += `${source[i]}${source[i].toUpperCase()}`;
					continue;
				}
			} else if (source[i].match(/[a-z]/)) {
				pattern += `[${source[i]}${source[i].toUpperCase()}]`;
				continue;
			}
		}
		if (flags.m) {
			if (source[i] === "^") {
				pattern += `(^|(?<=[\r
]))`;
				continue;
			} else if (source[i] === "$") {
				pattern += `($|(?=[\r
]))`;
				continue;
			}
		}
		if (flags.s && source[i] === ".") {
			pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
			continue;
		}
		pattern += source[i];
		if (source[i] === "\\") isEscaped = true;
		else if (inCharGroup && source[i] === "]") inCharGroup = false;
		else if (!inCharGroup && source[i] === "[") inCharGroup = true;
	}
	try {
		new RegExp(pattern);
	} catch (e) {
		console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
		return regex.source;
	}
	return pattern;
}
function parseRecordDef(def, refs) {
	var _a2, _b2, _c, _d, _e, _f;
	const schema = {
		type: "object",
		additionalProperties: (_a2 = parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalProperties"]
		})) != null ? _a2 : refs.allowedAdditionalProperties
	};
	if (((_b2 = def.keyType) == null ? void 0 : _b2._def.typeName) === ZodFirstPartyTypeKind.ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
		const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	} else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === ZodFirstPartyTypeKind.ZodEnum) return {
		...schema,
		propertyNames: { enum: def.keyType._def.values }
	};
	else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
		const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	}
	return schema;
}
function parseMapDef(def, refs) {
	if (refs.mapStrategy === "record") return parseRecordDef(def, refs);
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [parseDef(def.keyType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"0"
				]
			}) || parseAnyDef(), parseDef(def.valueType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"1"
				]
			}) || parseAnyDef()],
			minItems: 2,
			maxItems: 2
		}
	};
}
function parseNativeEnumDef(def) {
	const object = def.values;
	const actualValues = Object.keys(def.values).filter((key) => {
		return typeof object[object[key]] !== "number";
	}).map((key) => object[key]);
	const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
	return {
		type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: actualValues
	};
}
function parseNeverDef() {
	return { not: parseAnyDef() };
}
function parseNullDef() {
	return { type: "null" };
}
var primitiveMappings = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function parseUnionDef(def, refs) {
	const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
	if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
		const types = options.reduce((types2, x) => {
			const type = primitiveMappings[x._def.typeName];
			return type && !types2.includes(type) ? [...types2, type] : types2;
		}, []);
		return { type: types.length > 1 ? types : types[0] };
	} else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
		const types = options.reduce((acc, x) => {
			const type = typeof x._def.value;
			switch (type) {
				case "string":
				case "number":
				case "boolean": return [...acc, type];
				case "bigint": return [...acc, "integer"];
				case "object": if (x._def.value === null) return [...acc, "null"];
				default: return acc;
			}
		}, []);
		if (types.length === options.length) {
			const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
			return {
				type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
				enum: options.reduce((acc, x) => {
					return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
				}, [])
			};
		}
	} else if (options.every((x) => x._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x2) => !acc.includes(x2))], [])
	};
	return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
	const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			`${i}`
		]
	})).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
	return anyOf.length ? { anyOf } : void 0;
};
function parseNullableDef(def, refs) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) return { type: [primitiveMappings[def.innerType._def.typeName], "null"] };
	const base = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"0"
		]
	});
	return base && { anyOf: [base, { type: "null" }] };
}
function parseNumberDef(def) {
	const res = { type: "number" };
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "int":
			res.type = "integer";
			break;
		case "min":
			if (check.inclusive) res.minimum = check.value;
			else res.exclusiveMinimum = check.value;
			break;
		case "max":
			if (check.inclusive) res.maximum = check.value;
			else res.exclusiveMaximum = check.value;
			break;
		case "multipleOf":
			res.multipleOf = check.value;
			break;
	}
	return res;
}
function parseObjectDef(def, refs) {
	const result = {
		type: "object",
		properties: {}
	};
	const required = [];
	const shape = def.shape();
	for (const propName in shape) {
		let propDef = shape[propName];
		if (propDef === void 0 || propDef._def === void 0) continue;
		const propOptional = safeIsOptional(propDef);
		const parsedDef = parseDef(propDef._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"properties",
				propName
			],
			propertyPath: [
				...refs.currentPath,
				"properties",
				propName
			]
		});
		if (parsedDef === void 0) continue;
		result.properties[propName] = parsedDef;
		if (!propOptional) required.push(propName);
	}
	if (required.length) result.required = required;
	const additionalProperties = decideAdditionalProperties(def, refs);
	if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
	return result;
}
function decideAdditionalProperties(def, refs) {
	if (def.catchall._def.typeName !== "ZodNever") return parseDef(def.catchall._def, {
		...refs,
		currentPath: [...refs.currentPath, "additionalProperties"]
	});
	switch (def.unknownKeys) {
		case "passthrough": return refs.allowedAdditionalProperties;
		case "strict": return refs.rejectedAdditionalProperties;
		case "strip": return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
	}
}
function safeIsOptional(schema) {
	try {
		return schema.isOptional();
	} catch (e) {
		return true;
	}
}
var parseOptionalDef = (def, refs) => {
	var _a2;
	if (refs.currentPath.toString() === ((_a2 = refs.propertyPath) == null ? void 0 : _a2.toString())) return parseDef(def.innerType._def, refs);
	const innerSchema = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"1"
		]
	});
	return innerSchema ? { anyOf: [{ not: parseAnyDef() }, innerSchema] } : parseAnyDef();
};
var parsePipelineDef = (def, refs) => {
	if (refs.pipeStrategy === "input") return parseDef(def.in._def, refs);
	else if (refs.pipeStrategy === "output") return parseDef(def.out._def, refs);
	const a = parseDef(def.in._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	});
	return { allOf: [a, parseDef(def.out._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			a ? "1" : "0"
		]
	})].filter((x) => x !== void 0) };
};
function parsePromiseDef(def, refs) {
	return parseDef(def.type._def, refs);
}
function parseSetDef(def, refs) {
	const schema = {
		type: "array",
		uniqueItems: true,
		items: parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "items"]
		})
	};
	if (def.minSize) schema.minItems = def.minSize.value;
	if (def.maxSize) schema.maxItems = def.maxSize.value;
	return schema;
}
function parseTupleDef(def, refs) {
	if (def.rest) return {
		type: "array",
		minItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
		additionalItems: parseDef(def.rest._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalItems"]
		})
	};
	else return {
		type: "array",
		minItems: def.items.length,
		maxItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
	};
}
function parseUndefinedDef() {
	return { not: parseAnyDef() };
}
function parseUnknownDef() {
	return parseAnyDef();
}
var parseReadonlyDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
var selectParser = (def, typeName, refs) => {
	switch (typeName) {
		case ZodFirstPartyTypeKind.ZodString: return parseStringDef(def, refs);
		case ZodFirstPartyTypeKind.ZodNumber: return parseNumberDef(def);
		case ZodFirstPartyTypeKind.ZodObject: return parseObjectDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBigInt: return parseBigintDef(def);
		case ZodFirstPartyTypeKind.ZodBoolean: return parseBooleanDef();
		case ZodFirstPartyTypeKind.ZodDate: return parseDateDef(def, refs);
		case ZodFirstPartyTypeKind.ZodUndefined: return parseUndefinedDef();
		case ZodFirstPartyTypeKind.ZodNull: return parseNullDef();
		case ZodFirstPartyTypeKind.ZodArray: return parseArrayDef(def, refs);
		case ZodFirstPartyTypeKind.ZodUnion:
		case ZodFirstPartyTypeKind.ZodDiscriminatedUnion: return parseUnionDef(def, refs);
		case ZodFirstPartyTypeKind.ZodIntersection: return parseIntersectionDef(def, refs);
		case ZodFirstPartyTypeKind.ZodTuple: return parseTupleDef(def, refs);
		case ZodFirstPartyTypeKind.ZodRecord: return parseRecordDef(def, refs);
		case ZodFirstPartyTypeKind.ZodLiteral: return parseLiteralDef(def);
		case ZodFirstPartyTypeKind.ZodEnum: return parseEnumDef(def);
		case ZodFirstPartyTypeKind.ZodNativeEnum: return parseNativeEnumDef(def);
		case ZodFirstPartyTypeKind.ZodNullable: return parseNullableDef(def, refs);
		case ZodFirstPartyTypeKind.ZodOptional: return parseOptionalDef(def, refs);
		case ZodFirstPartyTypeKind.ZodMap: return parseMapDef(def, refs);
		case ZodFirstPartyTypeKind.ZodSet: return parseSetDef(def, refs);
		case ZodFirstPartyTypeKind.ZodLazy: return () => def.getter()._def;
		case ZodFirstPartyTypeKind.ZodPromise: return parsePromiseDef(def, refs);
		case ZodFirstPartyTypeKind.ZodNaN:
		case ZodFirstPartyTypeKind.ZodNever: return parseNeverDef();
		case ZodFirstPartyTypeKind.ZodEffects: return parseEffectsDef(def, refs);
		case ZodFirstPartyTypeKind.ZodAny: return parseAnyDef();
		case ZodFirstPartyTypeKind.ZodUnknown: return parseUnknownDef();
		case ZodFirstPartyTypeKind.ZodDefault: return parseDefaultDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBranded: return parseBrandedDef(def, refs);
		case ZodFirstPartyTypeKind.ZodReadonly: return parseReadonlyDef(def, refs);
		case ZodFirstPartyTypeKind.ZodCatch: return parseCatchDef(def, refs);
		case ZodFirstPartyTypeKind.ZodPipeline: return parsePipelineDef(def, refs);
		case ZodFirstPartyTypeKind.ZodFunction:
		case ZodFirstPartyTypeKind.ZodVoid:
		case ZodFirstPartyTypeKind.ZodSymbol: return;
		default: return /* @__PURE__ */ ((_) => void 0)(typeName);
	}
};
var getRelativePath = (pathA, pathB) => {
	let i = 0;
	for (; i < pathA.length && i < pathB.length; i++) if (pathA[i] !== pathB[i]) break;
	return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
function parseDef(def, refs, forceResolution = false) {
	var _a2;
	const seenItem = refs.seen.get(def);
	if (refs.override) {
		const overrideResult = (_a2 = refs.override) == null ? void 0 : _a2.call(refs, def, refs, seenItem, forceResolution);
		if (overrideResult !== ignoreOverride) return overrideResult;
	}
	if (seenItem && !forceResolution) {
		const seenSchema = get$ref(seenItem, refs);
		if (seenSchema !== void 0) return seenSchema;
	}
	const newItem = {
		def,
		path: refs.currentPath,
		jsonSchema: void 0
	};
	refs.seen.set(def, newItem);
	const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
	const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
	if (jsonSchema2) addMeta(def, refs, jsonSchema2);
	if (refs.postProcess) {
		const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
		newItem.jsonSchema = jsonSchema2;
		return postProcessResult;
	}
	newItem.jsonSchema = jsonSchema2;
	return jsonSchema2;
}
var get$ref = (item, refs) => {
	switch (refs.$refStrategy) {
		case "root": return { $ref: item.path.join("/") };
		case "relative": return { $ref: getRelativePath(refs.currentPath, item.path) };
		case "none":
		case "seen":
			if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
				console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
				return parseAnyDef();
			}
			return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
	}
};
var addMeta = (def, refs, jsonSchema2) => {
	if (def.description) jsonSchema2.description = def.description;
	return jsonSchema2;
};
var getRefs = (options) => {
	const _options = getDefaultOptions(options);
	const currentPath = _options.name !== void 0 ? [
		..._options.basePath,
		_options.definitionPath,
		_options.name
	] : _options.basePath;
	return {
		..._options,
		currentPath,
		propertyPath: void 0,
		seen: new Map(Object.entries(_options.definitions).map(([name2, def]) => [def._def, {
			def: def._def,
			path: [
				..._options.basePath,
				_options.definitionPath,
				name2
			],
			jsonSchema: void 0
		}]))
	};
};
var zod3ToJsonSchema = (schema, options) => {
	var _a2;
	const refs = getRefs(options);
	let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name3, schema2]) => {
		var _a3;
		return {
			...acc,
			[name3]: (_a3 = parseDef(schema2._def, {
				...refs,
				currentPath: [
					...refs.basePath,
					refs.definitionPath,
					name3
				]
			}, true)) != null ? _a3 : parseAnyDef()
		};
	}, {}) : void 0;
	const name2 = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
	const main = (_a2 = parseDef(schema._def, name2 === void 0 ? refs : {
		...refs,
		currentPath: [
			...refs.basePath,
			refs.definitionPath,
			name2
		]
	}, false)) != null ? _a2 : parseAnyDef();
	const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
	if (title !== void 0) main.title = title;
	const combined = name2 === void 0 ? definitions ? {
		...main,
		[refs.definitionPath]: definitions
	} : main : {
		$ref: [
			...refs.$refStrategy === "relative" ? [] : refs.basePath,
			refs.definitionPath,
			name2
		].join("/"),
		[refs.definitionPath]: {
			...definitions,
			[name2]: main
		}
	};
	combined.$schema = "http://json-schema.org/draft-07/schema#";
	return combined;
};
var schemaSymbol = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
	let schema;
	return () => {
		if (schema == null) schema = createSchema();
		return schema;
	};
}
function jsonSchema(jsonSchema2, { validate } = {}) {
	return {
		[schemaSymbol]: true,
		_type: void 0,
		get jsonSchema() {
			if (typeof jsonSchema2 === "function") jsonSchema2 = jsonSchema2();
			return jsonSchema2;
		},
		validate
	};
}
function isSchema(value) {
	return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
	return schema == null ? jsonSchema({
		properties: {},
		additionalProperties: false
	}) : isSchema(schema) ? schema : "~standard" in schema ? schema["~standard"].vendor === "zod" ? zodSchema(schema) : standardSchema(schema) : schema();
}
function standardSchema(standardSchema2) {
	return jsonSchema(() => addAdditionalPropertiesToJsonSchema(standardSchema2["~standard"].jsonSchema.input({ target: "draft-07" })), { validate: async (value) => {
		const result = await standardSchema2["~standard"].validate(value);
		return "value" in result ? {
			success: true,
			value: result.value
		} : {
			success: false,
			error: new TypeValidationError({
				value,
				cause: result.issues
			})
		};
	} });
}
function zod3Schema(zodSchema2, options) {
	var _a2;
	const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
	return jsonSchema(() => zod3ToJsonSchema(zodSchema2, { $refStrategy: useReferences ? "root" : "none" }), { validate: async (value) => {
		const result = await zodSchema2.safeParseAsync(value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function zod4Schema(zodSchema2, options) {
	var _a2;
	const useReferences = (_a2 = options == null ? void 0 : options.useReferences) != null ? _a2 : false;
	return jsonSchema(() => addAdditionalPropertiesToJsonSchema(toJSONSchema(zodSchema2, {
		target: "draft-7",
		io: "input",
		reused: useReferences ? "ref" : "inline"
	})), { validate: async (value) => {
		const result = await safeParseAsync(zodSchema2, value);
		return result.success ? {
			success: true,
			value: result.data
		} : {
			success: false,
			error: result.error
		};
	} });
}
function isZod4Schema(zodSchema2) {
	return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
	if (isZod4Schema(zodSchema2)) return zod4Schema(zodSchema2, options);
	else return zod3Schema(zodSchema2, options);
}
async function validateTypes({ value, schema, context }) {
	const result = await safeValidateTypes({
		value,
		schema,
		context
	});
	if (!result.success) throw TypeValidationError.wrap({
		value,
		cause: result.error,
		context
	});
	return result.value;
}
async function safeValidateTypes({ value, schema, context }) {
	const actualSchema = asSchema(schema);
	try {
		if (actualSchema.validate == null) return {
			success: true,
			value,
			rawValue: value
		};
		const result = await actualSchema.validate(value);
		if (result.success) return {
			success: true,
			value: result.value,
			rawValue: value
		};
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: result.error,
				context
			}),
			rawValue: value
		};
	} catch (error) {
		return {
			success: false,
			error: TypeValidationError.wrap({
				value,
				cause: error,
				context
			}),
			rawValue: value
		};
	}
}
async function parseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return value;
		return validateTypes({
			value,
			schema
		});
	} catch (error) {
		if (JSONParseError.isInstance(error) || TypeValidationError.isInstance(error)) throw error;
		throw new JSONParseError({
			text,
			cause: error
		});
	}
}
async function safeParseJSON({ text, schema }) {
	try {
		const value = secureJsonParse(text);
		if (schema == null) return {
			success: true,
			value,
			rawValue: value
		};
		return await safeValidateTypes({
			value,
			schema
		});
	} catch (error) {
		return {
			success: false,
			error: JSONParseError.isInstance(error) ? error : new JSONParseError({
				text,
				cause: error
			}),
			rawValue: void 0
		};
	}
}
function parseJsonEventStream({ stream, schema }) {
	return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(new TransformStream({ async transform({ data }, controller) {
		if (data === "[DONE]") return;
		controller.enqueue(await safeParseJSON({
			text: data,
			schema
		}));
	} }));
}
var getOriginalFetch2 = () => globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 }) => postToApi({
	url,
	headers: {
		"Content-Type": "application/json",
		...headers
	},
	body: {
		content: JSON.stringify(body),
		values: body
	},
	failedResponseHandler,
	successfulResponseHandler,
	abortSignal,
	fetch: fetch2
});
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch2() }) => {
	try {
		const response = await fetch2(url, {
			method: "POST",
			headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION$3}`, getRuntimeEnvironmentUserAgent()),
			body: body.content,
			signal: abortSignal
		});
		const responseHeaders = extractResponseHeaders(response);
		if (!response.ok) {
			let errorInformation;
			try {
				errorInformation = await failedResponseHandler({
					response,
					url,
					requestBodyValues: body.values
				});
			} catch (error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
				throw new APICallError({
					message: "Failed to process error response",
					cause: error,
					statusCode: response.status,
					url,
					responseHeaders,
					requestBodyValues: body.values
				});
			}
			throw errorInformation.value;
		}
		try {
			return await successfulResponseHandler({
				response,
				url,
				requestBodyValues: body.values
			});
		} catch (error) {
			if (error instanceof Error) {
				if (isAbortError(error) || APICallError.isInstance(error)) throw error;
			}
			throw new APICallError({
				message: "Failed to process successful response",
				cause: error,
				statusCode: response.status,
				url,
				responseHeaders,
				requestBodyValues: body.values
			});
		}
	} catch (error) {
		throw handleFetchError({
			error,
			url,
			requestBodyValues: body.values
		});
	}
};
function tool(tool2) {
	return tool2;
}
function createProviderToolFactoryWithOutputSchema({ id, inputSchema, outputSchema, supportsDeferredResults }) {
	return ({ execute, needsApproval, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args }) => tool({
		type: "provider",
		id,
		args,
		inputSchema,
		outputSchema,
		execute,
		needsApproval,
		toModelOutput,
		onInputStart,
		onInputDelta,
		onInputAvailable,
		supportsDeferredResults
	});
}
async function resolve(value) {
	if (typeof value === "function") value = value();
	return Promise.resolve(value);
}
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable }) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const responseHeaders = extractResponseHeaders(response);
	if (responseBody.trim() === "") return {
		responseHeaders,
		value: new APICallError({
			message: response.statusText,
			url,
			requestBodyValues,
			statusCode: response.status,
			responseHeaders,
			responseBody,
			isRetryable: isRetryable == null ? void 0 : isRetryable(response)
		})
	};
	try {
		const parsedError = await parseJSON({
			text: responseBody,
			schema: errorSchema
		});
		return {
			responseHeaders,
			value: new APICallError({
				message: errorToMessage(parsedError),
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				data: parsedError,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
			})
		};
	} catch (parseError) {
		return {
			responseHeaders,
			value: new APICallError({
				message: response.statusText,
				url,
				requestBodyValues,
				statusCode: response.status,
				responseHeaders,
				responseBody,
				isRetryable: isRetryable == null ? void 0 : isRetryable(response)
			})
		};
	}
};
var createEventSourceResponseHandler = (chunkSchema) => async ({ response }) => {
	const responseHeaders = extractResponseHeaders(response);
	if (response.body == null) throw new EmptyResponseBodyError({});
	return {
		responseHeaders,
		value: parseJsonEventStream({
			stream: response.body,
			schema: chunkSchema
		})
	};
};
var createJsonResponseHandler = (responseSchema) => async ({ response, url, requestBodyValues }) => {
	const responseBody = await response.text();
	const parsedResult = await safeParseJSON({
		text: responseBody,
		schema: responseSchema
	});
	const responseHeaders = extractResponseHeaders(response);
	if (!parsedResult.success) throw new APICallError({
		message: "Invalid JSON response",
		cause: parsedResult.error,
		statusCode: response.status,
		responseHeaders,
		responseBody,
		url,
		requestBodyValues
	});
	return {
		responseHeaders,
		value: parsedResult.value,
		rawValue: parsedResult.rawValue
	};
};
function withoutTrailingSlash(url) {
	return url == null ? void 0 : url.replace(/\/$/, "");
}
function isAsyncIterable(obj) {
	return obj != null && typeof obj[Symbol.asyncIterator] === "function";
}
async function* executeTool({ execute, input, options }) {
	const result = execute(input, options);
	if (isAsyncIterable(result)) {
		let lastOutput;
		for await (const output of result) {
			lastOutput = output;
			yield {
				type: "preliminary",
				output
			};
		}
		yield {
			type: "final",
			output: lastOutput
		};
	} else yield {
		type: "final",
		output: await result
	};
}
//#endregion
//#region node_modules/@vercel/oidc/dist/get-context.js
var require_get_context = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var get_context_exports = {};
	__export(get_context_exports, {
		SYMBOL_FOR_REQ_CONTEXT: () => SYMBOL_FOR_REQ_CONTEXT,
		getContext: () => getContext
	});
	module.exports = __toCommonJS(get_context_exports);
	var SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
	function getContext() {
		return globalThis[SYMBOL_FOR_REQ_CONTEXT]?.get?.() ?? {};
	}
}));
//#endregion
//#region node_modules/@vercel/oidc/dist/auth-errors.js
var require_auth_errors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var auth_errors_exports = {};
	__export(auth_errors_exports, {
		AccessTokenMissingError: () => AccessTokenMissingError,
		RefreshAccessTokenFailedError: () => RefreshAccessTokenFailedError
	});
	module.exports = __toCommonJS(auth_errors_exports);
	var AccessTokenMissingError = class extends Error {
		constructor() {
			super("No authentication found. Please log in with the Vercel CLI (vercel login).");
			this.name = "AccessTokenMissingError";
		}
	};
	var RefreshAccessTokenFailedError = class extends Error {
		constructor(cause) {
			super("Failed to refresh authentication token.", { cause });
			this.name = "RefreshAccessTokenFailedError";
		}
	};
}));
//#endregion
//#region node_modules/@ai-sdk/gateway/dist/index.mjs
var import_index_browser = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var index_browser_exports = {};
	__export(index_browser_exports, {
		AccessTokenMissingError: () => import_auth_errors.AccessTokenMissingError,
		RefreshAccessTokenFailedError: () => import_auth_errors.RefreshAccessTokenFailedError,
		getContext: () => import_get_context.getContext,
		getVercelOidcToken: () => getVercelOidcToken,
		getVercelOidcTokenSync: () => getVercelOidcTokenSync,
		getVercelToken: () => getVercelToken
	});
	module.exports = __toCommonJS(index_browser_exports);
	var import_get_context = require_get_context();
	var import_auth_errors = require_auth_errors();
	async function getVercelOidcToken() {
		return "";
	}
	function getVercelOidcTokenSync() {
		return "";
	}
	async function getVercelToken() {
		throw new Error("getVercelToken is not supported in browser environments");
	}
})))();
var symbol$1 = Symbol.for("vercel.ai.gateway.error");
var _a$1, _b;
var GatewayError = class _GatewayError extends (_b = Error, _a$1 = symbol$1, _b) {
	constructor({ message, statusCode = 500, cause, generationId, isRetryable = statusCode != null && (statusCode === 408 || statusCode === 409 || statusCode === 429 || statusCode >= 500) }) {
		super(generationId ? `${message} [${generationId}]` : message);
		this[_a$1] = true;
		this.statusCode = statusCode;
		this.cause = cause;
		this.generationId = generationId;
		this.isRetryable = isRetryable;
	}
	/**
	* Checks if the given error is a Gateway Error.
	* @param {unknown} error - The error to check.
	* @returns {boolean} True if the error is a Gateway Error, false otherwise.
	*/
	static isInstance(error) {
		return _GatewayError.hasMarker(error);
	}
	static hasMarker(error) {
		return typeof error === "object" && error !== null && symbol$1 in error && error[symbol$1] === true;
	}
};
var name$1 = "GatewayAuthenticationError";
var marker2$1 = `vercel.ai.gateway.error.${name$1}`;
var symbol2$1 = Symbol.for(marker2$1);
var _a2$1, _b2;
var GatewayAuthenticationError = class _GatewayAuthenticationError extends (_b2 = GatewayError, _a2$1 = symbol2$1, _b2) {
	constructor({ message = "Authentication failed", statusCode = 401, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a2$1] = true;
		this.name = name$1;
		this.type = "authentication_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol2$1 in error;
	}
	/**
	* Creates a contextual error message when authentication fails
	*/
	static createContextualError({ apiKeyProvided, oidcTokenProvided, message = "Authentication failed", statusCode = 401, cause, generationId }) {
		let contextualMessage;
		if (apiKeyProvided) contextualMessage = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`;
		else if (oidcTokenProvided) contextualMessage = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`;
		else contextualMessage = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`;
		return new _GatewayAuthenticationError({
			message: contextualMessage,
			statusCode,
			cause,
			generationId
		});
	}
};
var name2$1 = "GatewayInvalidRequestError";
var marker3$1 = `vercel.ai.gateway.error.${name2$1}`;
var symbol3$1 = Symbol.for(marker3$1);
var _a3$1, _b3;
var GatewayInvalidRequestError = class extends (_b3 = GatewayError, _a3$1 = symbol3$1, _b3) {
	constructor({ message = "Invalid request", statusCode = 400, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a3$1] = true;
		this.name = name2$1;
		this.type = "invalid_request_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol3$1 in error;
	}
};
var name3$1 = "GatewayRateLimitError";
var marker4$1 = `vercel.ai.gateway.error.${name3$1}`;
var symbol4$1 = Symbol.for(marker4$1);
var _a4$1, _b4;
var GatewayRateLimitError = class extends (_b4 = GatewayError, _a4$1 = symbol4$1, _b4) {
	constructor({ message = "Rate limit exceeded", statusCode = 429, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a4$1] = true;
		this.name = name3$1;
		this.type = "rate_limit_exceeded";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol4$1 in error;
	}
};
var name4$1 = "GatewayModelNotFoundError";
var marker5$1 = `vercel.ai.gateway.error.${name4$1}`;
var symbol5$1 = Symbol.for(marker5$1);
var modelNotFoundParamSchema = lazySchema(() => zodSchema(object$1({ modelId: string() })));
var _a5$1, _b5;
var GatewayModelNotFoundError = class extends (_b5 = GatewayError, _a5$1 = symbol5$1, _b5) {
	constructor({ message = "Model not found", statusCode = 404, modelId, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a5$1] = true;
		this.name = name4$1;
		this.type = "model_not_found";
		this.modelId = modelId;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol5$1 in error;
	}
};
var name5$1 = "GatewayInternalServerError";
var marker6$1 = `vercel.ai.gateway.error.${name5$1}`;
var symbol6$1 = Symbol.for(marker6$1);
var _a6$1, _b6;
var GatewayInternalServerError = class extends (_b6 = GatewayError, _a6$1 = symbol6$1, _b6) {
	constructor({ message = "Internal server error", statusCode = 500, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a6$1] = true;
		this.name = name5$1;
		this.type = "internal_server_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol6$1 in error;
	}
};
var name6$1 = "GatewayResponseError";
var marker7$1 = `vercel.ai.gateway.error.${name6$1}`;
var symbol7$1 = Symbol.for(marker7$1);
var _a7$1, _b7;
var GatewayResponseError = class extends (_b7 = GatewayError, _a7$1 = symbol7$1, _b7) {
	constructor({ message = "Invalid response from Gateway", statusCode = 502, response, validationError, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a7$1] = true;
		this.name = name6$1;
		this.type = "response_error";
		this.response = response;
		this.validationError = validationError;
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol7$1 in error;
	}
};
async function createGatewayErrorFromResponse({ response, statusCode, defaultMessage = "Gateway request failed", cause, authMethod }) {
	var _a9;
	const parseResult = await safeValidateTypes({
		value: response,
		schema: gatewayErrorResponseSchema
	});
	if (!parseResult.success) {
		const rawGenerationId = typeof response === "object" && response !== null && "generationId" in response ? response.generationId : void 0;
		return new GatewayResponseError({
			message: `Invalid error response format: ${defaultMessage}`,
			statusCode,
			response,
			validationError: parseResult.error,
			cause,
			generationId: rawGenerationId
		});
	}
	const validatedResponse = parseResult.value;
	const errorType = validatedResponse.error.type;
	const message = validatedResponse.error.message;
	const generationId = (_a9 = validatedResponse.generationId) != null ? _a9 : void 0;
	switch (errorType) {
		case "authentication_error": return GatewayAuthenticationError.createContextualError({
			apiKeyProvided: authMethod === "api-key",
			oidcTokenProvided: authMethod === "oidc",
			statusCode,
			cause,
			generationId
		});
		case "invalid_request_error": return new GatewayInvalidRequestError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "rate_limit_exceeded": return new GatewayRateLimitError({
			message,
			statusCode,
			cause,
			generationId
		});
		case "model_not_found": {
			const modelResult = await safeValidateTypes({
				value: validatedResponse.error.param,
				schema: modelNotFoundParamSchema
			});
			return new GatewayModelNotFoundError({
				message,
				statusCode,
				modelId: modelResult.success ? modelResult.value.modelId : void 0,
				cause,
				generationId
			});
		}
		case "internal_server_error": return new GatewayInternalServerError({
			message,
			statusCode,
			cause,
			generationId
		});
		default: return new GatewayInternalServerError({
			message,
			statusCode,
			cause,
			generationId
		});
	}
}
var gatewayErrorResponseSchema = lazySchema(() => zodSchema(object$1({
	error: object$1({
		message: string(),
		type: string().nullish(),
		param: unknown().nullish(),
		code: union([string(), number()]).nullish()
	}),
	generationId: string().nullish()
})));
function extractApiCallResponse(error) {
	if (error.data !== void 0) return error.data;
	if (error.responseBody != null) try {
		return JSON.parse(error.responseBody);
	} catch (e) {
		return error.responseBody;
	}
	return {};
}
var name7$1 = "GatewayTimeoutError";
var marker8$1 = `vercel.ai.gateway.error.${name7$1}`;
var symbol8$1 = Symbol.for(marker8$1);
var _a8$1, _b8;
var GatewayTimeoutError = class _GatewayTimeoutError extends (_b8 = GatewayError, _a8$1 = symbol8$1, _b8) {
	constructor({ message = "Request timed out", statusCode = 408, cause, generationId } = {}) {
		super({
			message,
			statusCode,
			cause,
			generationId
		});
		this[_a8$1] = true;
		this.name = name7$1;
		this.type = "timeout_error";
	}
	static isInstance(error) {
		return GatewayError.hasMarker(error) && symbol8$1 in error;
	}
	/**
	* Creates a helpful timeout error message with troubleshooting guidance
	*/
	static createTimeoutError({ originalMessage, statusCode = 408, cause, generationId }) {
		return new _GatewayTimeoutError({
			message: `Gateway request timed out: ${originalMessage}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`,
			statusCode,
			cause,
			generationId
		});
	}
};
function isTimeoutError(error) {
	if (!(error instanceof Error)) return false;
	const errorCode = error.code;
	if (typeof errorCode === "string") return [
		"UND_ERR_HEADERS_TIMEOUT",
		"UND_ERR_BODY_TIMEOUT",
		"UND_ERR_CONNECT_TIMEOUT"
	].includes(errorCode);
	return false;
}
async function asGatewayError(error, authMethod) {
	var _a9;
	if (GatewayError.isInstance(error)) return error;
	if (isTimeoutError(error)) return GatewayTimeoutError.createTimeoutError({
		originalMessage: error instanceof Error ? error.message : "Unknown error",
		cause: error
	});
	if (APICallError.isInstance(error)) {
		if (error.cause && isTimeoutError(error.cause)) return GatewayTimeoutError.createTimeoutError({
			originalMessage: error.message,
			cause: error
		});
		return await createGatewayErrorFromResponse({
			response: extractApiCallResponse(error),
			statusCode: (_a9 = error.statusCode) != null ? _a9 : 500,
			defaultMessage: "Gateway request failed",
			cause: error,
			authMethod
		});
	}
	return await createGatewayErrorFromResponse({
		response: {},
		statusCode: 500,
		defaultMessage: error instanceof Error ? `Gateway request failed: ${error.message}` : "Unknown Gateway error",
		cause: error,
		authMethod
	});
}
var GATEWAY_AUTH_METHOD_HEADER = "ai-gateway-auth-method";
async function parseAuthMethod(headers) {
	const result = await safeValidateTypes({
		value: headers[GATEWAY_AUTH_METHOD_HEADER],
		schema: gatewayAuthMethodSchema
	});
	return result.success ? result.value : void 0;
}
var gatewayAuthMethodSchema = lazySchema(() => zodSchema(union([literal("api-key"), literal("oidc")])));
var KNOWN_MODEL_TYPES = [
	"embedding",
	"image",
	"language",
	"reranking",
	"video"
];
var GatewayFetchMetadata = class {
	constructor(config) {
		this.config = config;
	}
	async getAvailableModels() {
		try {
			const { value } = await getFromApi({
				url: `${this.config.baseURL}/config`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewayAvailableModelsResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
	async getCredits() {
		try {
			const { value } = await getFromApi({
				url: `${new URL(this.config.baseURL).origin}/v1/credits`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewayCreditsResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewayAvailableModelsResponseSchema = lazySchema(() => zodSchema(object$1({ models: array$1(object$1({
	id: string(),
	name: string(),
	description: string().nullish(),
	pricing: object$1({
		input: string(),
		output: string(),
		input_cache_read: string().nullish(),
		input_cache_write: string().nullish()
	}).transform(({ input, output, input_cache_read, input_cache_write }) => ({
		input,
		output,
		...input_cache_read ? { cachedInputTokens: input_cache_read } : {},
		...input_cache_write ? { cacheCreationInputTokens: input_cache_write } : {}
	})).nullish(),
	specification: object$1({
		specificationVersion: literal("v3"),
		provider: string(),
		modelId: string()
	}),
	modelType: string().nullish()
})).transform((models) => models.filter((m) => m.modelType == null || KNOWN_MODEL_TYPES.includes(m.modelType))) })));
var gatewayCreditsResponseSchema = lazySchema(() => zodSchema(object$1({
	balance: string(),
	total_used: string()
}).transform(({ balance, total_used }) => ({
	balance,
	totalUsed: total_used
}))));
var GatewaySpendReport = class {
	constructor(config) {
		this.config = config;
	}
	async getSpendReport(params) {
		try {
			const baseUrl = new URL(this.config.baseURL);
			const searchParams = new URLSearchParams();
			searchParams.set("start_date", params.startDate);
			searchParams.set("end_date", params.endDate);
			if (params.groupBy) searchParams.set("group_by", params.groupBy);
			if (params.datePart) searchParams.set("date_part", params.datePart);
			if (params.userId) searchParams.set("user_id", params.userId);
			if (params.model) searchParams.set("model", params.model);
			if (params.provider) searchParams.set("provider", params.provider);
			if (params.credentialType) searchParams.set("credential_type", params.credentialType);
			if (params.tags && params.tags.length > 0) searchParams.set("tags", params.tags.join(","));
			const { value } = await getFromApi({
				url: `${baseUrl.origin}/v1/report?${searchParams.toString()}`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewaySpendReportResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewaySpendReportResponseSchema = lazySchema(() => zodSchema(object$1({ results: array$1(object$1({
	day: string().optional(),
	hour: string().optional(),
	user: string().optional(),
	model: string().optional(),
	tag: string().optional(),
	provider: string().optional(),
	credential_type: _enum(["byok", "system"]).optional(),
	total_cost: number(),
	market_cost: number().optional(),
	input_tokens: number().optional(),
	output_tokens: number().optional(),
	cached_input_tokens: number().optional(),
	cache_creation_input_tokens: number().optional(),
	reasoning_tokens: number().optional(),
	request_count: number().optional()
}).transform(({ credential_type, total_cost, market_cost, input_tokens, output_tokens, cached_input_tokens, cache_creation_input_tokens, reasoning_tokens, request_count, ...rest }) => ({
	...rest,
	...credential_type !== void 0 ? { credentialType: credential_type } : {},
	totalCost: total_cost,
	...market_cost !== void 0 ? { marketCost: market_cost } : {},
	...input_tokens !== void 0 ? { inputTokens: input_tokens } : {},
	...output_tokens !== void 0 ? { outputTokens: output_tokens } : {},
	...cached_input_tokens !== void 0 ? { cachedInputTokens: cached_input_tokens } : {},
	...cache_creation_input_tokens !== void 0 ? { cacheCreationInputTokens: cache_creation_input_tokens } : {},
	...reasoning_tokens !== void 0 ? { reasoningTokens: reasoning_tokens } : {},
	...request_count !== void 0 ? { requestCount: request_count } : {}
}))) })));
var GatewayGenerationInfoFetcher = class {
	constructor(config) {
		this.config = config;
	}
	async getGenerationInfo(params) {
		try {
			const { value } = await getFromApi({
				url: `${new URL(this.config.baseURL).origin}/v1/generation?id=${encodeURIComponent(params.id)}`,
				headers: await resolve(this.config.headers()),
				successfulResponseHandler: createJsonResponseHandler(gatewayGenerationInfoResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				fetch: this.config.fetch
			});
			return value;
		} catch (error) {
			throw await asGatewayError(error);
		}
	}
};
var gatewayGenerationInfoResponseSchema = lazySchema(() => zodSchema(object$1({ data: object$1({
	id: string(),
	total_cost: number(),
	upstream_inference_cost: number(),
	usage: number(),
	created_at: string(),
	model: string(),
	is_byok: boolean(),
	provider_name: string(),
	streamed: boolean(),
	finish_reason: string(),
	latency: number(),
	generation_time: number(),
	native_tokens_prompt: number(),
	native_tokens_completion: number(),
	native_tokens_reasoning: number(),
	native_tokens_cached: number(),
	native_tokens_cache_creation: number(),
	billable_web_search_calls: number()
}).transform(({ total_cost, upstream_inference_cost, created_at, is_byok, provider_name, finish_reason, generation_time, native_tokens_prompt, native_tokens_completion, native_tokens_reasoning, native_tokens_cached, native_tokens_cache_creation, billable_web_search_calls, ...rest }) => ({
	...rest,
	totalCost: total_cost,
	upstreamInferenceCost: upstream_inference_cost,
	createdAt: created_at,
	isByok: is_byok,
	providerName: provider_name,
	finishReason: finish_reason,
	generationTime: generation_time,
	promptTokens: native_tokens_prompt,
	completionTokens: native_tokens_completion,
	reasoningTokens: native_tokens_reasoning,
	cachedTokens: native_tokens_cached,
	cacheCreationTokens: native_tokens_cache_creation,
	billableWebSearchCalls: billable_web_search_calls
})) }).transform(({ data }) => data)));
var GatewayLanguageModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.supportedUrls = { "*/*": [/.*/] };
	}
	get provider() {
		return this.config.provider;
	}
	async getArgs(options) {
		const { abortSignal: _abortSignal, ...optionsWithoutSignal } = options;
		return {
			args: this.maybeEncodeFileParts(optionsWithoutSignal),
			warnings: []
		};
	}
	async doGenerate(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue: rawResponse } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, false), await resolve(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createJsonResponseHandler(any()),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				...responseBody,
				request: { body: args },
				response: {
					headers: responseHeaders,
					body: rawResponse
				},
				warnings
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	async doStream(options) {
		const { args, warnings } = await this.getArgs(options);
		const { abortSignal } = options;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { value: response, responseHeaders } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, options.headers, this.getModelConfigHeaders(this.modelId, true), await resolve(this.config.o11yHeaders)),
				body: args,
				successfulResponseHandler: createEventSourceResponseHandler(any()),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				stream: response.pipeThrough(new TransformStream({
					start(controller) {
						if (warnings.length > 0) controller.enqueue({
							type: "stream-start",
							warnings
						});
					},
					transform(chunk, controller) {
						if (chunk.success) {
							const streamPart = chunk.value;
							if (streamPart.type === "raw" && !options.includeRawChunks) return;
							if (streamPart.type === "response-metadata" && streamPart.timestamp && typeof streamPart.timestamp === "string") streamPart.timestamp = new Date(streamPart.timestamp);
							controller.enqueue(streamPart);
						} else controller.error(chunk.error);
					}
				})),
				request: { body: args },
				response: { headers: responseHeaders }
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	isFilePart(part) {
		return part && typeof part === "object" && "type" in part && part.type === "file";
	}
	/**
	* Encodes file parts in the prompt to base64. Mutates the passed options
	* instance directly to avoid copying the file data.
	* @param options - The options to encode.
	* @returns The options with the file parts encoded.
	*/
	maybeEncodeFileParts(options) {
		for (const message of options.prompt) for (const part of message.content) if (this.isFilePart(part)) {
			const filePart = part;
			if (filePart.data instanceof Uint8Array) {
				const buffer = Uint8Array.from(filePart.data);
				const base64Data = Buffer.from(buffer).toString("base64");
				filePart.data = new URL(`data:${filePart.mediaType || "application/octet-stream"};base64,${base64Data}`);
			}
		}
		return options;
	}
	getUrl() {
		return `${this.config.baseURL}/language-model`;
	}
	getModelConfigHeaders(modelId, streaming) {
		return {
			"ai-language-model-specification-version": "3",
			"ai-language-model-id": modelId,
			"ai-language-model-streaming": String(streaming)
		};
	}
};
var GatewayEmbeddingModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxEmbeddingsPerCall = 2048;
		this.supportsParallelCalls = true;
	}
	get provider() {
		return this.config.provider;
	}
	async doEmbed({ values, headers, abortSignal, providerOptions }) {
		var _a9;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					values,
					...providerOptions ? { providerOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayEmbeddingResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				embeddings: responseBody.embeddings,
				usage: (_a9 = responseBody.usage) != null ? _a9 : void 0,
				providerMetadata: responseBody.providerMetadata,
				response: {
					headers: responseHeaders,
					body: rawValue
				},
				warnings: []
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/embedding-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-embedding-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayEmbeddingResponseSchema = lazySchema(() => zodSchema(object$1({
	embeddings: array$1(array$1(number())),
	usage: object$1({ tokens: number() }).nullish(),
	providerMetadata: record(string(), record(string(), unknown())).optional()
})));
var GatewayImageModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ prompt, n, size, aspectRatio, seed, files, mask, providerOptions, headers, abortSignal }) {
		var _a9, _b9, _c, _d;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					prompt,
					n,
					...size && { size },
					...aspectRatio && { aspectRatio },
					...seed && { seed },
					...providerOptions && { providerOptions },
					...files && { files: files.map((file) => maybeEncodeImageFile(file)) },
					...mask && { mask: maybeEncodeImageFile(mask) }
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayImageResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				images: responseBody.images,
				warnings: (_a9 = responseBody.warnings) != null ? _a9 : [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				},
				...responseBody.usage != null && { usage: {
					inputTokens: (_b9 = responseBody.usage.inputTokens) != null ? _b9 : void 0,
					outputTokens: (_c = responseBody.usage.outputTokens) != null ? _c : void 0,
					totalTokens: (_d = responseBody.usage.totalTokens) != null ? _d : void 0
				} }
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/image-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-image-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
function maybeEncodeImageFile(file) {
	if (file.type === "file" && file.data instanceof Uint8Array) return {
		...file,
		data: convertUint8ArrayToBase64(file.data)
	};
	return file;
}
var providerMetadataEntrySchema = object$1({ images: array$1(unknown()).optional() }).catchall(unknown());
var gatewayImageWarningSchema = discriminatedUnion("type", [
	object$1({
		type: literal("unsupported"),
		feature: string(),
		details: string().optional()
	}),
	object$1({
		type: literal("compatibility"),
		feature: string(),
		details: string().optional()
	}),
	object$1({
		type: literal("other"),
		message: string()
	})
]);
var gatewayImageUsageSchema = object$1({
	inputTokens: number().nullish(),
	outputTokens: number().nullish(),
	totalTokens: number().nullish()
});
var gatewayImageResponseSchema = object$1({
	images: array$1(string()),
	warnings: array$1(gatewayImageWarningSchema).optional(),
	providerMetadata: record(string(), providerMetadataEntrySchema).optional(),
	usage: gatewayImageUsageSchema.optional()
});
var GatewayVideoModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
		this.maxVideosPerCall = Number.MAX_SAFE_INTEGER;
	}
	get provider() {
		return this.config.provider;
	}
	async doGenerate({ prompt, n, aspectRatio, resolution, duration, fps, seed, image, providerOptions, headers, abortSignal }) {
		var _a9;
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders), { accept: "text/event-stream" }),
				body: {
					prompt,
					n,
					...aspectRatio && { aspectRatio },
					...resolution && { resolution },
					...duration && { duration },
					...fps && { fps },
					...seed && { seed },
					...providerOptions && { providerOptions },
					...image && { image: maybeEncodeVideoFile(image) }
				},
				successfulResponseHandler: async ({ response, url, requestBodyValues }) => {
					if (response.body == null) throw new APICallError({
						message: "SSE response body is empty",
						url,
						requestBodyValues,
						statusCode: response.status
					});
					const reader = parseJsonEventStream({
						stream: response.body,
						schema: gatewayVideoEventSchema
					}).getReader();
					const { done, value: parseResult } = await reader.read();
					reader.releaseLock();
					if (done || !parseResult) throw new APICallError({
						message: "SSE stream ended without a data event",
						url,
						requestBodyValues,
						statusCode: response.status
					});
					if (!parseResult.success) throw new APICallError({
						message: "Failed to parse video SSE event",
						cause: parseResult.error,
						url,
						requestBodyValues,
						statusCode: response.status
					});
					const event = parseResult.value;
					if (event.type === "error") throw new APICallError({
						message: event.message,
						statusCode: event.statusCode,
						url,
						requestBodyValues,
						responseHeaders: Object.fromEntries([...response.headers]),
						responseBody: JSON.stringify(event),
						data: { error: {
							message: event.message,
							type: event.errorType,
							param: event.param
						} }
					});
					return {
						value: {
							videos: event.videos,
							warnings: event.warnings,
							providerMetadata: event.providerMetadata
						},
						responseHeaders: Object.fromEntries([...response.headers])
					};
				},
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				videos: responseBody.videos,
				warnings: (_a9 = responseBody.warnings) != null ? _a9 : [],
				providerMetadata: responseBody.providerMetadata,
				response: {
					timestamp: /* @__PURE__ */ new Date(),
					modelId: this.modelId,
					headers: responseHeaders
				}
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/video-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-video-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
function maybeEncodeVideoFile(file) {
	if (file.type === "file" && file.data instanceof Uint8Array) return {
		...file,
		data: convertUint8ArrayToBase64(file.data)
	};
	return file;
}
var providerMetadataEntrySchema2 = object$1({ videos: array$1(unknown()).optional() }).catchall(unknown());
var gatewayVideoDataSchema = union([object$1({
	type: literal("url"),
	url: string(),
	mediaType: string()
}), object$1({
	type: literal("base64"),
	data: string(),
	mediaType: string()
})]);
var gatewayVideoWarningSchema = discriminatedUnion("type", [
	object$1({
		type: literal("unsupported"),
		feature: string(),
		details: string().optional()
	}),
	object$1({
		type: literal("compatibility"),
		feature: string(),
		details: string().optional()
	}),
	object$1({
		type: literal("other"),
		message: string()
	})
]);
var gatewayVideoEventSchema = discriminatedUnion("type", [object$1({
	type: literal("result"),
	videos: array$1(gatewayVideoDataSchema),
	warnings: array$1(gatewayVideoWarningSchema).optional(),
	providerMetadata: record(string(), providerMetadataEntrySchema2).optional()
}), object$1({
	type: literal("error"),
	message: string(),
	errorType: string(),
	statusCode: number(),
	param: unknown().nullable()
})]);
var GatewayRerankingModel = class {
	constructor(modelId, config) {
		this.modelId = modelId;
		this.config = config;
		this.specificationVersion = "v3";
	}
	get provider() {
		return this.config.provider;
	}
	async doRerank({ documents, query, topN, headers, abortSignal, providerOptions }) {
		const resolvedHeaders = await resolve(this.config.headers());
		try {
			const { responseHeaders, value: responseBody, rawValue } = await postJsonToApi({
				url: this.getUrl(),
				headers: combineHeaders(resolvedHeaders, headers != null ? headers : {}, this.getModelConfigHeaders(), await resolve(this.config.o11yHeaders)),
				body: {
					documents,
					query,
					...topN != null ? { topN } : {},
					...providerOptions ? { providerOptions } : {}
				},
				successfulResponseHandler: createJsonResponseHandler(gatewayRerankingResponseSchema),
				failedResponseHandler: createJsonErrorResponseHandler({
					errorSchema: any(),
					errorToMessage: (data) => data
				}),
				...abortSignal && { abortSignal },
				fetch: this.config.fetch
			});
			return {
				ranking: responseBody.ranking,
				providerMetadata: responseBody.providerMetadata,
				response: {
					headers: responseHeaders,
					body: rawValue
				},
				warnings: []
			};
		} catch (error) {
			throw await asGatewayError(error, await parseAuthMethod(resolvedHeaders));
		}
	}
	getUrl() {
		return `${this.config.baseURL}/reranking-model`;
	}
	getModelConfigHeaders() {
		return {
			"ai-reranking-model-specification-version": "3",
			"ai-model-id": this.modelId
		};
	}
};
var gatewayRerankingResponseSchema = lazySchema(() => zodSchema(object$1({
	ranking: array$1(object$1({
		index: number(),
		relevanceScore: number()
	})),
	providerMetadata: record(string(), record(string(), unknown())).optional()
})));
var parallelSearchToolFactory = createProviderToolFactoryWithOutputSchema({
	id: "gateway.parallel_search",
	inputSchema: lazySchema(() => zodSchema(object$1({
		objective: string().describe("Natural-language description of the web research goal, including source or freshness guidance and broader context from the task. Maximum 5000 characters."),
		search_queries: array$1(string()).optional().describe("Optional search queries to supplement the objective. Maximum 200 characters per query."),
		mode: _enum(["one-shot", "agentic"]).optional().describe("Mode preset: \"one-shot\" for comprehensive results with longer excerpts (default), \"agentic\" for concise, token-efficient results for multi-step workflows."),
		max_results: number().optional().describe("Maximum number of results to return (1-20). Defaults to 10 if not specified."),
		source_policy: object$1({
			include_domains: array$1(string()).optional().describe("List of domains to include in search results."),
			exclude_domains: array$1(string()).optional().describe("List of domains to exclude from search results."),
			after_date: string().optional().describe("Only include results published after this date (ISO 8601 format).")
		}).optional().describe("Source policy for controlling which domains to include/exclude and freshness."),
		excerpts: object$1({
			max_chars_per_result: number().optional().describe("Maximum characters per result."),
			max_chars_total: number().optional().describe("Maximum total characters across all results.")
		}).optional().describe("Excerpt configuration for controlling result length."),
		fetch_policy: object$1({ max_age_seconds: number().optional().describe("Maximum age in seconds for cached content. Set to 0 to always fetch fresh content.") }).optional().describe("Fetch policy for controlling content freshness.")
	}))),
	outputSchema: lazySchema(() => zodSchema(union([object$1({
		searchId: string(),
		results: array$1(object$1({
			url: string(),
			title: string(),
			excerpt: string(),
			publishDate: string().nullable().optional(),
			relevanceScore: number().optional()
		}))
	}), object$1({
		error: _enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"configuration_error",
			"unknown"
		]),
		statusCode: number().optional(),
		message: string()
	})])))
});
var parallelSearch = (config = {}) => parallelSearchToolFactory(config);
var perplexitySearchToolFactory = createProviderToolFactoryWithOutputSchema({
	id: "gateway.perplexity_search",
	inputSchema: lazySchema(() => zodSchema(object$1({
		query: union([string(), array$1(string())]).describe("Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."),
		max_results: number().optional().describe("Maximum number of search results to return (1-20, default: 10)"),
		max_tokens_per_page: number().optional().describe("Maximum number of tokens to extract per search result page (256-2048, default: 2048)"),
		max_tokens: number().optional().describe("Maximum total tokens across all search results (default: 25000, max: 1000000)"),
		country: string().optional().describe("Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"),
		search_domain_filter: array$1(string()).optional().describe("List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"),
		search_language_filter: array$1(string()).optional().describe("List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"),
		search_after_date: string().optional().describe("Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		search_before_date: string().optional().describe("Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		last_updated_after_filter: string().optional().describe("Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."),
		last_updated_before_filter: string().optional().describe("Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."),
		search_recency_filter: _enum([
			"day",
			"week",
			"month",
			"year"
		]).optional().describe("Filter results by relative time period. Cannot be used with search_after_date or search_before_date.")
	}))),
	outputSchema: lazySchema(() => zodSchema(union([object$1({
		results: array$1(object$1({
			title: string(),
			url: string(),
			snippet: string(),
			date: string().optional(),
			lastUpdated: string().optional()
		})),
		id: string()
	}), object$1({
		error: _enum([
			"api_error",
			"rate_limit",
			"timeout",
			"invalid_input",
			"unknown"
		]),
		statusCode: number().optional(),
		message: string()
	})])))
});
var perplexitySearch = (config = {}) => perplexitySearchToolFactory(config);
var gatewayTools = {
	/**
	* Search the web using Parallel AI's Search API for LLM-optimized excerpts.
	*
	* Takes a natural language objective and returns relevant excerpts,
	* replacing multiple keyword searches with a single call for broad
	* or complex queries. Supports different search types for depth vs
	* breadth tradeoffs.
	*/
	parallelSearch,
	/**
	* Search the web using Perplexity's Search API for real-time information,
	* news, research papers, and articles.
	*
	* Provides ranked search results with advanced filtering options including
	* domain, language, date range, and recency filters.
	*/
	perplexitySearch
};
async function getVercelRequestId() {
	var _a9;
	return (_a9 = (0, import_index_browser.getContext)().headers) == null ? void 0 : _a9["x-vercel-id"];
}
var VERSION$2 = "3.0.121";
var AI_GATEWAY_PROTOCOL_VERSION = "0.0.1";
function createGatewayProvider(options = {}) {
	var _a9, _b9;
	let pendingMetadata = null;
	let metadataCache = null;
	const cacheRefreshMillis = (_a9 = options.metadataCacheRefreshMillis) != null ? _a9 : 1e3 * 60 * 5;
	let lastFetchTime = 0;
	const baseURL = (_b9 = withoutTrailingSlash(options.baseURL)) != null ? _b9 : "https://ai-gateway.vercel.sh/v3/ai";
	const getHeaders = async () => {
		try {
			const auth = await getGatewayAuthToken(options);
			return withUserAgentSuffix({
				Authorization: `Bearer ${auth.token}`,
				"ai-gateway-protocol-version": AI_GATEWAY_PROTOCOL_VERSION,
				[GATEWAY_AUTH_METHOD_HEADER]: auth.authMethod,
				...options.headers
			}, `ai-sdk/gateway/${VERSION$2}`);
		} catch (error) {
			throw GatewayAuthenticationError.createContextualError({
				apiKeyProvided: false,
				oidcTokenProvided: false,
				statusCode: 401,
				cause: error
			});
		}
	};
	const createO11yHeaders = () => {
		const deploymentId = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_DEPLOYMENT_ID"
		});
		const environment = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_ENV"
		});
		const region = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_REGION"
		});
		const projectId = loadOptionalSetting({
			settingValue: void 0,
			environmentVariableName: "VERCEL_PROJECT_ID"
		});
		return async () => {
			const requestId = await getVercelRequestId();
			return {
				...deploymentId && { "ai-o11y-deployment-id": deploymentId },
				...environment && { "ai-o11y-environment": environment },
				...region && { "ai-o11y-region": region },
				...requestId && { "ai-o11y-request-id": requestId },
				...projectId && { "ai-o11y-project-id": projectId }
			};
		};
	};
	const createLanguageModel = (modelId) => {
		return new GatewayLanguageModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	const getAvailableModels = async () => {
		var _a10, _b10, _c;
		const now = (_c = (_b10 = (_a10 = options._internal) == null ? void 0 : _a10.currentDate) == null ? void 0 : _b10.call(_a10).getTime()) != null ? _c : Date.now();
		if (!pendingMetadata || now - lastFetchTime > cacheRefreshMillis) {
			lastFetchTime = now;
			pendingMetadata = new GatewayFetchMetadata({
				baseURL,
				headers: getHeaders,
				fetch: options.fetch
			}).getAvailableModels().then((metadata) => {
				metadataCache = metadata;
				return metadata;
			}).catch(async (error) => {
				throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
			});
		}
		return metadataCache ? Promise.resolve(metadataCache) : pendingMetadata;
	};
	const getCredits = async () => {
		return new GatewayFetchMetadata({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getCredits().catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const getSpendReport = async (params) => {
		return new GatewaySpendReport({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getSpendReport(params).catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const getGenerationInfo = async (params) => {
		return new GatewayGenerationInfoFetcher({
			baseURL,
			headers: getHeaders,
			fetch: options.fetch
		}).getGenerationInfo(params).catch(async (error) => {
			throw await asGatewayError(error, await parseAuthMethod(await getHeaders()));
		});
	};
	const provider = function(modelId) {
		if (new.target) throw new Error("The Gateway Provider model function cannot be called with the new keyword.");
		return createLanguageModel(modelId);
	};
	provider.specificationVersion = "v3";
	provider.getAvailableModels = getAvailableModels;
	provider.getCredits = getCredits;
	provider.getSpendReport = getSpendReport;
	provider.getGenerationInfo = getGenerationInfo;
	provider.imageModel = (modelId) => {
		return new GatewayImageModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.languageModel = createLanguageModel;
	const createEmbeddingModel = (modelId) => {
		return new GatewayEmbeddingModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.embeddingModel = createEmbeddingModel;
	provider.textEmbeddingModel = createEmbeddingModel;
	provider.videoModel = (modelId) => {
		return new GatewayVideoModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	const createRerankingModel = (modelId) => {
		return new GatewayRerankingModel(modelId, {
			provider: "gateway",
			baseURL,
			headers: getHeaders,
			fetch: options.fetch,
			o11yHeaders: createO11yHeaders()
		});
	};
	provider.rerankingModel = createRerankingModel;
	provider.reranking = createRerankingModel;
	provider.chat = provider.languageModel;
	provider.embedding = provider.embeddingModel;
	provider.image = provider.imageModel;
	provider.video = provider.videoModel;
	provider.tools = gatewayTools;
	return provider;
}
var gateway = createGatewayProvider();
async function getGatewayAuthToken(options) {
	const apiKey = loadOptionalSetting({
		settingValue: options.apiKey,
		environmentVariableName: "AI_GATEWAY_API_KEY"
	});
	if (apiKey) return {
		token: apiKey,
		authMethod: "api-key"
	};
	return {
		token: await (0, import_index_browser.getVercelOidcToken)(),
		authMethod: "oidc"
	};
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/version.js
var VERSION$1 = "1.9.1";
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/internal/semver.js
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
* Create a function to test an API version to see if it is compatible with the provided ownVersion.
*
* The returned function has the following semantics:
* - Exact match is always compatible
* - Major versions must match exactly
*    - 1.x package cannot use global 2.x package
*    - 2.x package cannot use global 1.x package
* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
* - Patch and build tag differences are not considered at this time
*
* @param ownVersion version which should be checked against
*/
function _makeCompatibilityCheck(ownVersion) {
	const acceptedVersions = new Set([ownVersion]);
	const rejectedVersions = /* @__PURE__ */ new Set();
	const myVersionMatch = ownVersion.match(re);
	if (!myVersionMatch) return () => false;
	const ownVersionParsed = {
		major: +myVersionMatch[1],
		minor: +myVersionMatch[2],
		patch: +myVersionMatch[3],
		prerelease: myVersionMatch[4]
	};
	if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
		return globalVersion === ownVersion;
	};
	function _reject(v) {
		rejectedVersions.add(v);
		return false;
	}
	function _accept(v) {
		acceptedVersions.add(v);
		return true;
	}
	return function isCompatible(globalVersion) {
		if (acceptedVersions.has(globalVersion)) return true;
		if (rejectedVersions.has(globalVersion)) return false;
		const globalVersionMatch = globalVersion.match(re);
		if (!globalVersionMatch) return _reject(globalVersion);
		const globalVersionParsed = {
			major: +globalVersionMatch[1],
			minor: +globalVersionMatch[2],
			patch: +globalVersionMatch[3],
			prerelease: globalVersionMatch[4]
		};
		if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
		if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
		if (ownVersionParsed.major === 0) {
			if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
			return _reject(globalVersion);
		}
		if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
		return _reject(globalVersion);
	};
}
/**
* Test an API version to see if it is compatible with this API.
*
* - Exact match is always compatible
* - Major versions must match exactly
*    - 1.x package cannot use global 2.x package
*    - 2.x package cannot use global 1.x package
* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
* - Patch and build tag differences are not considered at this time
*
* @param version version of the API requesting an instance of the global API
*/
var isCompatible = _makeCompatibilityCheck(VERSION$1);
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/internal/global-utils.js
var major = VERSION$1.split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for(`opentelemetry.js.api.${major}`);
var _global = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
function registerGlobal(type, instance, diag, allowOverride = false) {
	var _a;
	const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : { version: VERSION$1 };
	if (!allowOverride && api[type]) {
		const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
		diag.error(err.stack || err.message);
		return false;
	}
	if (api.version !== "1.9.1") {
		const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${VERSION$1}`);
		diag.error(err.stack || err.message);
		return false;
	}
	api[type] = instance;
	diag.debug(`@opentelemetry/api: Registered a global for ${type} v${VERSION$1}.`);
	return true;
}
function getGlobal(type) {
	var _a, _b;
	const globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
	if (!globalVersion || !isCompatible(globalVersion)) return;
	return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
	diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${VERSION$1}.`);
	const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
	if (api) delete api[type];
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js
/**
* Component Logger which is meant to be used as part of any component which
* will add automatically additional namespace in front of the log message.
* It will then forward all message to global diag logger
* @example
* const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
* cLogger.debug('test');
* // @opentelemetry/instrumentation-http test
*/
var DiagComponentLogger = class {
	constructor(props) {
		this._namespace = props.namespace || "DiagComponentLogger";
	}
	debug(...args) {
		return logProxy("debug", this._namespace, args);
	}
	error(...args) {
		return logProxy("error", this._namespace, args);
	}
	info(...args) {
		return logProxy("info", this._namespace, args);
	}
	warn(...args) {
		return logProxy("warn", this._namespace, args);
	}
	verbose(...args) {
		return logProxy("verbose", this._namespace, args);
	}
};
function logProxy(funcName, namespace, args) {
	const logger = getGlobal("diag");
	if (!logger) return;
	return logger[funcName](namespace, ...args);
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/diag/types.js
/**
* Defines the available internal logging levels for the diagnostic logger, the numeric values
* of the levels are defined to match the original values from the initial LogLevel to avoid
* compatibility/migration issues for any implementation that assume the numeric ordering.
*/
var DiagLogLevel;
(function(DiagLogLevel) {
	/** Diagnostic Logging level setting to disable all logging (except and forced logs) */
	DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
	/** Identifies an error scenario */
	DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
	/** Identifies a warning scenario */
	DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
	/** General informational log message */
	DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
	/** General debug log message */
	DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
	/**
	* Detailed trace level logging should only be used for development, should only be set
	* in a development environment.
	*/
	DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
	/** Used to set the logging level to include all logging */
	DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js
function createLogLevelDiagLogger(maxLevel, logger) {
	if (maxLevel < DiagLogLevel.NONE) maxLevel = DiagLogLevel.NONE;
	else if (maxLevel > DiagLogLevel.ALL) maxLevel = DiagLogLevel.ALL;
	logger = logger || {};
	function _filterFunc(funcName, theLevel) {
		const theFunc = logger[funcName];
		if (typeof theFunc === "function" && maxLevel >= theLevel) return theFunc.bind(logger);
		return function() {};
	}
	return {
		error: _filterFunc("error", DiagLogLevel.ERROR),
		warn: _filterFunc("warn", DiagLogLevel.WARN),
		info: _filterFunc("info", DiagLogLevel.INFO),
		debug: _filterFunc("debug", DiagLogLevel.DEBUG),
		verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
	};
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/api/diag.js
var API_NAME$2 = "diag";
/**
* Singleton object which represents the entry point to the OpenTelemetry internal
* diagnostic API
*
* @since 1.0.0
*/
var DiagAPI = class DiagAPI {
	/** Get the singleton instance of the DiagAPI API */
	static instance() {
		if (!this._instance) this._instance = new DiagAPI();
		return this._instance;
	}
	/**
	* Private internal constructor
	* @private
	*/
	constructor() {
		function _logProxy(funcName) {
			return function(...args) {
				const logger = getGlobal("diag");
				if (!logger) return;
				return logger[funcName](...args);
			};
		}
		const self = this;
		const setLogger = (logger, optionsOrLogLevel = { logLevel: DiagLogLevel.INFO }) => {
			var _a, _b, _c;
			if (logger === self) {
				const err = /* @__PURE__ */ new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
				self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
				return false;
			}
			if (typeof optionsOrLogLevel === "number") optionsOrLogLevel = { logLevel: optionsOrLogLevel };
			const oldLogger = getGlobal("diag");
			const newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : DiagLogLevel.INFO, logger);
			if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
				const stack = (_c = (/* @__PURE__ */ new Error()).stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
				oldLogger.warn(`Current logger will be overwritten from ${stack}`);
				newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
			}
			return registerGlobal("diag", newLogger, self, true);
		};
		self.setLogger = setLogger;
		self.disable = () => {
			unregisterGlobal(API_NAME$2, self);
		};
		self.createComponentLogger = (options) => {
			return new DiagComponentLogger(options);
		};
		self.verbose = _logProxy("verbose");
		self.debug = _logProxy("debug");
		self.info = _logProxy("info");
		self.warn = _logProxy("warn");
		self.error = _logProxy("error");
	}
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/context/context.js
/**
* Get a key to uniquely identify a context value
*
* @since 1.0.0
*/
function createContextKey(description) {
	return Symbol.for(description);
}
/**
* The root context is used as the default parent context when there is no active context
*
* @since 1.0.0
*/
var ROOT_CONTEXT = new class BaseContext {
	/**
	* Construct a new context which inherits values from an optional parent context.
	*
	* @param parentContext a context from which to inherit values
	*/
	constructor(parentContext) {
		const self = this;
		self._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
		self.getValue = (key) => self._currentContext.get(key);
		self.setValue = (key, value) => {
			const context = new BaseContext(self._currentContext);
			context._currentContext.set(key, value);
			return context;
		};
		self.deleteValue = (key) => {
			const context = new BaseContext(self._currentContext);
			context._currentContext.delete(key);
			return context;
		};
	}
}();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js
var NoopContextManager = class {
	active() {
		return ROOT_CONTEXT;
	}
	with(_context, fn, thisArg, ...args) {
		return fn.call(thisArg, ...args);
	}
	bind(_context, target) {
		return target;
	}
	enable() {
		return this;
	}
	disable() {
		return this;
	}
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/api/context.js
var API_NAME$1 = "context";
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
/**
* Singleton object which represents the entry point to the OpenTelemetry Context API
*
* @since 1.0.0
*/
var ContextAPI = class ContextAPI {
	/** Empty private constructor prevents end users from constructing a new instance of the API */
	constructor() {}
	/** Get the singleton instance of the Context API */
	static getInstance() {
		if (!this._instance) this._instance = new ContextAPI();
		return this._instance;
	}
	/**
	* Set the current context manager.
	*
	* @returns true if the context manager was successfully registered, else false
	*/
	setGlobalContextManager(contextManager) {
		return registerGlobal(API_NAME$1, contextManager, DiagAPI.instance());
	}
	/**
	* Get the currently active context
	*/
	active() {
		return this._getContextManager().active();
	}
	/**
	* Execute a function with an active context
	*
	* @param context context to be active during function execution
	* @param fn function to execute in a context
	* @param thisArg optional receiver to be used for calling fn
	* @param args optional arguments forwarded to fn
	*/
	with(context, fn, thisArg, ...args) {
		return this._getContextManager().with(context, fn, thisArg, ...args);
	}
	/**
	* Bind a context to a target function or event emitter
	*
	* @param context context to bind to the event emitter or function. Defaults to the currently active context
	* @param target function or event emitter to bind
	*/
	bind(context, target) {
		return this._getContextManager().bind(context, target);
	}
	_getContextManager() {
		return getGlobal(API_NAME$1) || NOOP_CONTEXT_MANAGER;
	}
	/** Disable and remove the global context manager */
	disable() {
		this._getContextManager().disable();
		unregisterGlobal(API_NAME$1, DiagAPI.instance());
	}
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js
/**
* @since 1.0.0
*/
var TraceFlags;
(function(TraceFlags) {
	/** Represents no flag set. */
	TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
	/** Bit to represent whether trace is sampled in trace flags. */
	TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
/**
* @since 1.0.0
*/
var INVALID_SPAN_CONTEXT = {
	traceId: "00000000000000000000000000000000",
	spanId: "0000000000000000",
	traceFlags: TraceFlags.NONE
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js
/**
* The NonRecordingSpan is the default {@link Span} that is used when no Span
* implementation is available. All operations are no-op including context
* propagation.
*/
var NonRecordingSpan = class {
	constructor(spanContext = INVALID_SPAN_CONTEXT) {
		this._spanContext = spanContext;
	}
	spanContext() {
		return this._spanContext;
	}
	setAttribute(_key, _value) {
		return this;
	}
	setAttributes(_attributes) {
		return this;
	}
	addEvent(_name, _attributes) {
		return this;
	}
	addLink(_link) {
		return this;
	}
	addLinks(_links) {
		return this;
	}
	setStatus(_status) {
		return this;
	}
	updateName(_name) {
		return this;
	}
	end(_endTime) {}
	isRecording() {
		return false;
	}
	recordException(_exception, _time) {}
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/context-utils.js
/**
* span key
*/
var SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
/**
* Return the span if one exists
*
* @param context context to get span from
*/
function getSpan(context) {
	return context.getValue(SPAN_KEY) || void 0;
}
/**
* Gets the span from the current context, if one exists.
*/
function getActiveSpan() {
	return getSpan(ContextAPI.getInstance().active());
}
/**
* Set the span on a context
*
* @param context context to use as parent
* @param span span to set active
*/
function setSpan(context, span) {
	return context.setValue(SPAN_KEY, span);
}
/**
* Remove current span stored in the context
*
* @param context context to delete span from
*/
function deleteSpan(context) {
	return context.deleteValue(SPAN_KEY);
}
/**
* Wrap span context in a NoopSpan and set as span in a new
* context
*
* @param context context to set active span on
* @param spanContext span context to be wrapped
*/
function setSpanContext(context, spanContext) {
	return setSpan(context, new NonRecordingSpan(spanContext));
}
/**
* Get the span context of the span if it exists.
*
* @param context context to get values from
*/
function getSpanContext(context) {
	var _a;
	return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
var isHex = new Uint8Array([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	1,
	1,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	1,
	1
]);
function isValidHex(id, length) {
	if (typeof id !== "string" || id.length !== length) return false;
	let r = 0;
	for (let i = 0; i < id.length; i += 4) r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
	return r === length;
}
/**
* @since 1.0.0
*/
function isValidTraceId(traceId) {
	return isValidHex(traceId, 32) && traceId !== "00000000000000000000000000000000";
}
/**
* @since 1.0.0
*/
function isValidSpanId(spanId) {
	return isValidHex(spanId, 16) && spanId !== "0000000000000000";
}
/**
* Returns true if this {@link SpanContext} is valid.
* @return true if this {@link SpanContext} is valid.
*
* @since 1.0.0
*/
function isSpanContextValid(spanContext) {
	return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
/**
* Wrap the given {@link SpanContext} in a new non-recording {@link Span}
*
* @param spanContext span context to be wrapped
* @returns a new non-recording {@link Span} with the provided context
*/
function wrapSpanContext(spanContext) {
	return new NonRecordingSpan(spanContext);
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js
var contextApi = ContextAPI.getInstance();
/**
* No-op implementations of {@link Tracer}.
*/
var NoopTracer = class {
	startSpan(name, options, context = contextApi.active()) {
		if (Boolean(options === null || options === void 0 ? void 0 : options.root)) return new NonRecordingSpan();
		const parentFromContext = context && getSpanContext(context);
		if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) return new NonRecordingSpan(parentFromContext);
		else return new NonRecordingSpan();
	}
	startActiveSpan(name, arg2, arg3, arg4) {
		let opts;
		let ctx;
		let fn;
		if (arguments.length < 2) return;
		else if (arguments.length === 2) fn = arg2;
		else if (arguments.length === 3) {
			opts = arg2;
			fn = arg3;
		} else {
			opts = arg2;
			ctx = arg3;
			fn = arg4;
		}
		const parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
		const span = this.startSpan(name, opts, parentContext);
		const contextWithSpanSet = setSpan(parentContext, span);
		return contextApi.with(contextWithSpanSet, fn, void 0, span);
	}
};
function isSpanContext(spanContext) {
	return spanContext !== null && typeof spanContext === "object" && "spanId" in spanContext && typeof spanContext["spanId"] === "string" && "traceId" in spanContext && typeof spanContext["traceId"] === "string" && "traceFlags" in spanContext && typeof spanContext["traceFlags"] === "number";
}
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
var NOOP_TRACER = new NoopTracer();
/**
* Proxy tracer provided by the proxy tracer provider
*
* @since 1.0.0
*/
var ProxyTracer = class {
	constructor(provider, name, version, options) {
		this._provider = provider;
		this.name = name;
		this.version = version;
		this.options = options;
	}
	startSpan(name, options, context) {
		return this._getTracer().startSpan(name, options, context);
	}
	startActiveSpan(_name, _options, _context, _fn) {
		const tracer = this._getTracer();
		return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
	}
	/**
	* Try to get a tracer from the proxy tracer provider.
	* If the proxy tracer provider has no delegate, return a noop tracer.
	*/
	_getTracer() {
		if (this._delegate) return this._delegate;
		const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
		if (!tracer) return NOOP_TRACER;
		this._delegate = tracer;
		return this._delegate;
	}
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js
/**
* An implementation of the {@link TracerProvider} which returns an impotent
* Tracer for all calls to `getTracer`.
*
* All operations are no-op.
*/
var NoopTracerProvider = class {
	getTracer(_name, _version, _options) {
		return new NoopTracer();
	}
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js
var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
/**
* Tracer provider which provides {@link ProxyTracer}s.
*
* Before a delegate is set, tracers provided are NoOp.
*   When a delegate is set, traces are provided from the delegate.
*   When a delegate is set after tracers have already been provided,
*   all tracers already provided will use the provided delegate implementation.
*
* @deprecated This will be removed in the next major version.
* @since 1.0.0
*/
var ProxyTracerProvider = class {
	/**
	* Get a {@link ProxyTracer}
	*/
	getTracer(name, version, options) {
		var _a;
		return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer(this, name, version, options);
	}
	getDelegate() {
		var _a;
		return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
	}
	/**
	* Set the delegate tracer provider
	*/
	setDelegate(delegate) {
		this._delegate = delegate;
	}
	getDelegateTracer(name, version, options) {
		var _a;
		return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
	}
};
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace/status.js
/**
* An enumeration of status codes.
*
* @since 1.0.0
*/
var SpanStatusCode;
(function(SpanStatusCode) {
	/**
	* The default status.
	*/
	SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
	/**
	* The operation has been validated by an Application developer or
	* Operator to have completed successfully.
	*/
	SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
	/**
	* The operation contains an error.
	*/
	SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/context-api.js
/**
* Entrypoint for context API
* @since 1.0.0
*/
var context = ContextAPI.getInstance();
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/api/trace.js
var API_NAME = "trace";
//#endregion
//#region node_modules/@opentelemetry/api/build/esm/trace-api.js
/**
* Entrypoint for trace API
*
* @since 1.0.0
*/
var trace = class TraceAPI {
	/** Empty private constructor prevents end users from constructing a new instance of the API */
	constructor() {
		this._proxyTracerProvider = new ProxyTracerProvider();
		this.wrapSpanContext = wrapSpanContext;
		this.isSpanContextValid = isSpanContextValid;
		this.deleteSpan = deleteSpan;
		this.getSpan = getSpan;
		this.getActiveSpan = getActiveSpan;
		this.getSpanContext = getSpanContext;
		this.setSpan = setSpan;
		this.setSpanContext = setSpanContext;
	}
	/** Get the singleton instance of the Trace API */
	static getInstance() {
		if (!this._instance) this._instance = new TraceAPI();
		return this._instance;
	}
	/**
	* Set the current global tracer.
	*
	* @returns true if the tracer provider was successfully registered, else false
	*/
	setGlobalTracerProvider(provider) {
		const success = registerGlobal(API_NAME, this._proxyTracerProvider, DiagAPI.instance());
		if (success) this._proxyTracerProvider.setDelegate(provider);
		return success;
	}
	/**
	* Returns the global tracer provider.
	*/
	getTracerProvider() {
		return getGlobal(API_NAME) || this._proxyTracerProvider;
	}
	/**
	* Returns a tracer from the global tracer provider.
	*/
	getTracer(name, version) {
		return this.getTracerProvider().getTracer(name, version);
	}
	/** Remove the global tracer provider */
	disable() {
		unregisterGlobal(API_NAME, DiagAPI.instance());
		this._proxyTracerProvider = new ProxyTracerProvider();
	}
}.getInstance();
//#endregion
//#region node_modules/ai/dist/index.mjs
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name21 in all) __defProp(target, name21, {
		get: all[name21],
		enumerable: true
	});
};
var name = "AI_InvalidArgumentError";
var marker = `vercel.ai.error.${name}`;
var symbol = Symbol.for(marker);
var _a;
var InvalidArgumentError = class extends AISDKError {
	constructor({ parameter, value, message }) {
		super({
			name,
			message: `Invalid argument for parameter ${parameter}: ${message}`
		});
		this[_a] = true;
		this.parameter = parameter;
		this.value = value;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker);
	}
};
_a = symbol;
var name3 = "AI_InvalidToolApprovalError";
var marker3 = `vercel.ai.error.${name3}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var InvalidToolApprovalError = class extends AISDKError {
	constructor({ approvalId }) {
		super({
			name: name3,
			message: `Tool approval response references unknown approvalId: "${approvalId}". No matching tool-approval-request found in message history.`
		});
		this[_a3] = true;
		this.approvalId = approvalId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker3);
	}
};
_a3 = symbol3;
var name4 = "AI_InvalidToolInputError";
var marker4 = `vercel.ai.error.${name4}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidToolInputError = class extends AISDKError {
	constructor({ toolInput, toolName, cause, message = `Invalid input for tool ${toolName}: ${getErrorMessage$1(cause)}` }) {
		super({
			name: name4,
			message,
			cause
		});
		this[_a4] = true;
		this.toolInput = toolInput;
		this.toolName = toolName;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker4);
	}
};
_a4 = symbol4;
var name5 = "AI_ToolCallNotFoundForApprovalError";
var marker5 = `vercel.ai.error.${name5}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var ToolCallNotFoundForApprovalError = class extends AISDKError {
	constructor({ toolCallId, approvalId }) {
		super({
			name: name5,
			message: `Tool call "${toolCallId}" not found for approval request "${approvalId}".`
		});
		this[_a5] = true;
		this.toolCallId = toolCallId;
		this.approvalId = approvalId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker5);
	}
};
_a5 = symbol5;
var name6 = "AI_MissingToolResultsError";
var marker6 = `vercel.ai.error.${name6}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var MissingToolResultsError = class extends AISDKError {
	constructor({ toolCallIds }) {
		super({
			name: name6,
			message: `Tool result${toolCallIds.length > 1 ? "s are" : " is"} missing for tool call${toolCallIds.length > 1 ? "s" : ""} ${toolCallIds.join(", ")}.`
		});
		this[_a6] = true;
		this.toolCallIds = toolCallIds;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker6);
	}
};
_a6 = symbol6;
var name8 = "AI_NoObjectGeneratedError";
var marker8 = `vercel.ai.error.${name8}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var NoObjectGeneratedError = class extends AISDKError {
	constructor({ message = "No object generated.", cause, text: text2, response, usage, finishReason }) {
		super({
			name: name8,
			message,
			cause
		});
		this[_a8] = true;
		this.text = text2;
		this.response = response;
		this.usage = usage;
		this.finishReason = finishReason;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker8);
	}
};
_a8 = symbol8;
var name9 = "AI_NoOutputGeneratedError";
var marker9 = `vercel.ai.error.${name9}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var NoOutputGeneratedError = class extends AISDKError {
	constructor({ message = "No output generated.", cause } = {}) {
		super({
			name: name9,
			message,
			cause
		});
		this[_a9] = true;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker9);
	}
};
_a9 = symbol9;
var name13 = "AI_NoSuchToolError";
var marker13 = `vercel.ai.error.${name13}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var NoSuchToolError = class extends AISDKError {
	constructor({ toolName, availableTools = void 0, message = `Model tried to call unavailable tool '${toolName}'. ${availableTools === void 0 ? "No tools are available." : `Available tools: ${availableTools.join(", ")}.`}` }) {
		super({
			name: name13,
			message
		});
		this[_a13] = true;
		this.toolName = toolName;
		this.availableTools = availableTools;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker13);
	}
};
_a13 = symbol13;
var name14 = "AI_ToolCallRepairError";
var marker14 = `vercel.ai.error.${name14}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var ToolCallRepairError = class extends AISDKError {
	constructor({ cause, originalError, message = `Error repairing tool call: ${getErrorMessage$1(cause)}` }) {
		super({
			name: name14,
			message,
			cause
		});
		this[_a14] = true;
		this.originalError = originalError;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker14);
	}
};
_a14 = symbol14;
var UnsupportedModelVersionError = class extends AISDKError {
	constructor(options) {
		super({
			name: "AI_UnsupportedModelVersionError",
			message: `Unsupported model version ${options.version} for provider "${options.provider}" and model "${options.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
		});
		this.version = options.version;
		this.provider = options.provider;
		this.modelId = options.modelId;
	}
};
var name15 = "AI_UIMessageStreamError";
var marker15 = `vercel.ai.error.${name15}`;
var symbol15 = Symbol.for(marker15);
var _a15;
var UIMessageStreamError = class extends AISDKError {
	constructor({ chunkType, chunkId, message }) {
		super({
			name: name15,
			message
		});
		this[_a15] = true;
		this.chunkType = chunkType;
		this.chunkId = chunkId;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker15);
	}
};
_a15 = symbol15;
var name17 = "AI_InvalidMessageRoleError";
var marker17 = `vercel.ai.error.${name17}`;
var symbol17 = Symbol.for(marker17);
var _a17;
var InvalidMessageRoleError = class extends AISDKError {
	constructor({ role, message = `Invalid message role: '${role}'. Must be one of: "system", "user", "assistant", "tool".` }) {
		super({
			name: name17,
			message
		});
		this[_a17] = true;
		this.role = role;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker17);
	}
};
_a17 = symbol17;
var name18 = "AI_MessageConversionError";
var marker18 = `vercel.ai.error.${name18}`;
var symbol18 = Symbol.for(marker18);
var _a18;
var MessageConversionError = class extends AISDKError {
	constructor({ originalMessage, message }) {
		super({
			name: name18,
			message
		});
		this[_a18] = true;
		this.originalMessage = originalMessage;
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker18);
	}
};
_a18 = symbol18;
var name19 = "AI_RetryError";
var marker19 = `vercel.ai.error.${name19}`;
var symbol19 = Symbol.for(marker19);
var _a19;
var RetryError = class extends AISDKError {
	constructor({ message, reason, errors }) {
		super({
			name: name19,
			message
		});
		this[_a19] = true;
		this.reason = reason;
		this.errors = errors;
		this.lastError = errors[errors.length - 1];
	}
	static isInstance(error) {
		return AISDKError.hasMarker(error, marker19);
	}
};
_a19 = symbol19;
function asArray(value) {
	return value === void 0 ? [] : Array.isArray(value) ? value : [value];
}
async function notify(options) {
	for (const callback of asArray(options.callbacks)) {
		if (callback == null) continue;
		try {
			await callback(options.event);
		} catch (_ignored) {}
	}
}
function formatWarning({ warning, provider, model }) {
	const prefix = `AI SDK Warning (${provider} / ${model}):`;
	switch (warning.type) {
		case "unsupported": {
			let message = `${prefix} The feature "${warning.feature}" is not supported.`;
			if (warning.details) message += ` ${warning.details}`;
			return message;
		}
		case "compatibility": {
			let message = `${prefix} The feature "${warning.feature}" is used in a compatibility mode.`;
			if (warning.details) message += ` ${warning.details}`;
			return message;
		}
		case "other": return `${prefix} ${warning.message}`;
		default: return `${prefix} ${JSON.stringify(warning, null, 2)}`;
	}
}
var FIRST_WARNING_INFO_MESSAGE = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.";
var hasLoggedBefore = false;
var logWarnings = (options) => {
	if (options.warnings.length === 0) return;
	const logger = globalThis.AI_SDK_LOG_WARNINGS;
	if (logger === false) return;
	if (typeof logger === "function") {
		logger(options);
		return;
	}
	if (!hasLoggedBefore) {
		hasLoggedBefore = true;
		console.info(FIRST_WARNING_INFO_MESSAGE);
	}
	for (const warning of options.warnings) console.warn(formatWarning({
		warning,
		provider: options.provider,
		model: options.model
	}));
};
function logV2CompatibilityWarning({ provider, modelId }) {
	logWarnings({
		warnings: [{
			type: "compatibility",
			feature: "specificationVersion",
			details: `Using v2 specification compatibility mode. Some features may not be available.`
		}],
		provider,
		model: modelId
	});
}
function asLanguageModelV3(model) {
	if (model.specificationVersion === "v3") return model;
	logV2CompatibilityWarning({
		provider: model.provider,
		modelId: model.modelId
	});
	return new Proxy(model, { get(target, prop) {
		switch (prop) {
			case "specificationVersion": return "v3";
			case "doGenerate": return async (...args) => {
				const result = await target.doGenerate(...args);
				return {
					...result,
					finishReason: convertV2FinishReasonToV3(result.finishReason),
					usage: convertV2UsageToV3(result.usage)
				};
			};
			case "doStream": return async (...args) => {
				const result = await target.doStream(...args);
				return {
					...result,
					stream: convertV2StreamToV3(result.stream)
				};
			};
			default: return target[prop];
		}
	} });
}
function convertV2StreamToV3(stream) {
	return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		switch (chunk.type) {
			case "finish":
				controller.enqueue({
					...chunk,
					finishReason: convertV2FinishReasonToV3(chunk.finishReason),
					usage: convertV2UsageToV3(chunk.usage)
				});
				break;
			default:
				controller.enqueue(chunk);
				break;
		}
	} }));
}
function convertV2FinishReasonToV3(finishReason) {
	return {
		unified: finishReason === "unknown" ? "other" : finishReason,
		raw: void 0
	};
}
function convertV2UsageToV3(usage) {
	return {
		inputTokens: {
			total: usage.inputTokens,
			noCache: void 0,
			cacheRead: usage.cachedInputTokens,
			cacheWrite: void 0
		},
		outputTokens: {
			total: usage.outputTokens,
			text: void 0,
			reasoning: usage.reasoningTokens
		}
	};
}
function resolveLanguageModel(model) {
	if (typeof model !== "string") {
		if (model.specificationVersion !== "v3" && model.specificationVersion !== "v2") {
			const unsupportedModel = model;
			throw new UnsupportedModelVersionError({
				version: unsupportedModel.specificationVersion,
				provider: unsupportedModel.provider,
				modelId: unsupportedModel.modelId
			});
		}
		return asLanguageModelV3(model);
	}
	return getGlobalProvider().languageModel(model);
}
function getGlobalProvider() {
	var _a21;
	return (_a21 = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? _a21 : gateway;
}
function getTotalTimeoutMs(timeout) {
	if (timeout == null) return;
	if (typeof timeout === "number") return timeout;
	return timeout.totalMs;
}
function getStepTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.stepMs;
}
function getChunkTimeoutMs(timeout) {
	if (timeout == null || typeof timeout === "number") return;
	return timeout.chunkMs;
}
var imageMediaTypeSignatures = [
	{
		mediaType: "image/gif",
		bytesPrefix: [
			71,
			73,
			70
		]
	},
	{
		mediaType: "image/png",
		bytesPrefix: [
			137,
			80,
			78,
			71
		]
	},
	{
		mediaType: "image/jpeg",
		bytesPrefix: [255, 216]
	},
	{
		mediaType: "image/webp",
		bytesPrefix: [
			82,
			73,
			70,
			70,
			null,
			null,
			null,
			null,
			87,
			69,
			66,
			80
		]
	},
	{
		mediaType: "image/bmp",
		bytesPrefix: [66, 77]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			73,
			73,
			42,
			0
		]
	},
	{
		mediaType: "image/tiff",
		bytesPrefix: [
			77,
			77,
			0,
			42
		]
	},
	{
		mediaType: "image/avif",
		bytesPrefix: [
			0,
			0,
			0,
			32,
			102,
			116,
			121,
			112,
			97,
			118,
			105,
			102
		]
	},
	{
		mediaType: "image/heic",
		bytesPrefix: [
			0,
			0,
			0,
			32,
			102,
			116,
			121,
			112,
			104,
			101,
			105,
			99
		]
	}
];
var stripID3 = (data) => {
	const bytes = typeof data === "string" ? convertBase64ToUint8Array(data) : data;
	const id3Size = (bytes[6] & 127) << 21 | (bytes[7] & 127) << 14 | (bytes[8] & 127) << 7 | bytes[9] & 127;
	return bytes.slice(id3Size + 10);
};
function stripID3TagsIfPresent(data) {
	return typeof data === "string" && data.startsWith("SUQz") || typeof data !== "string" && data.length > 10 && data[0] === 73 && data[1] === 68 && data[2] === 51 ? stripID3(data) : data;
}
function detectMediaType({ data, signatures }) {
	const processedData = stripID3TagsIfPresent(data);
	const bytes = typeof processedData === "string" ? convertBase64ToUint8Array(processedData.substring(0, Math.min(processedData.length, 24))) : processedData;
	for (const signature of signatures) if (bytes.length >= signature.bytesPrefix.length && signature.bytesPrefix.every((byte, index) => byte === null || bytes[index] === byte)) return signature.mediaType;
}
var VERSION = "6.0.193";
var download = async ({ url, maxBytes, abortSignal }) => {
	var _a21;
	const urlText = url.toString();
	validateDownloadUrl(urlText);
	try {
		const response = await fetch(urlText, {
			headers: withUserAgentSuffix({}, `ai-sdk/${VERSION}`, getRuntimeEnvironmentUserAgent()),
			signal: abortSignal
		});
		if (response.redirected) validateDownloadUrl(response.url);
		if (!response.ok) throw new DownloadError({
			url: urlText,
			statusCode: response.status,
			statusText: response.statusText
		});
		return {
			data: await readResponseWithSizeLimit({
				response,
				url: urlText,
				maxBytes: maxBytes != null ? maxBytes : DEFAULT_MAX_DOWNLOAD_SIZE
			}),
			mediaType: (_a21 = response.headers.get("content-type")) != null ? _a21 : void 0
		};
	} catch (error) {
		if (DownloadError.isInstance(error)) throw error;
		throw new DownloadError({
			url: urlText,
			cause: error
		});
	}
};
var createDefaultDownloadFunction = (download2 = download) => (requestedDownloads) => Promise.all(requestedDownloads.map(async (requestedDownload) => requestedDownload.isUrlSupportedByModel ? null : download2(requestedDownload)));
function splitDataUrl(dataUrl) {
	try {
		const [header, base64Content] = dataUrl.split(",");
		return {
			mediaType: header.split(";")[0].split(":")[1],
			base64Content
		};
	} catch (error) {
		return {
			mediaType: void 0,
			base64Content: void 0
		};
	}
}
var dataContentSchema = union([
	string(),
	_instanceof(Uint8Array),
	_instanceof(ArrayBuffer),
	custom((value) => {
		var _a21, _b;
		return (_b = (_a21 = globalThis.Buffer) == null ? void 0 : _a21.isBuffer(value)) != null ? _b : false;
	}, { message: "Must be a Buffer" })
]);
function convertToLanguageModelV3DataContent(content) {
	if (content instanceof Uint8Array) return {
		data: content,
		mediaType: void 0
	};
	if (content instanceof ArrayBuffer) return {
		data: new Uint8Array(content),
		mediaType: void 0
	};
	if (typeof content === "string") try {
		content = new URL(content);
	} catch (error) {}
	if (content instanceof URL && content.protocol === "data:") {
		const { mediaType: dataUrlMediaType, base64Content } = splitDataUrl(content.toString());
		if (dataUrlMediaType == null || base64Content == null) throw new AISDKError({
			name: "InvalidDataContentError",
			message: `Invalid data URL format in content ${content.toString()}`
		});
		return {
			data: base64Content,
			mediaType: dataUrlMediaType
		};
	}
	return {
		data: content,
		mediaType: void 0
	};
}
function convertDataContentToBase64String(content) {
	if (typeof content === "string") return content;
	if (content instanceof ArrayBuffer) return convertUint8ArrayToBase64(new Uint8Array(content));
	return convertUint8ArrayToBase64(content);
}
async function convertToLanguageModelPrompt({ prompt, supportedUrls, download: download2 = createDefaultDownloadFunction() }) {
	const downloadedAssets = await downloadAssets(prompt.messages, download2, supportedUrls);
	const approvalIdToToolCallId = /* @__PURE__ */ new Map();
	for (const message of prompt.messages) if (message.role === "assistant" && Array.isArray(message.content)) {
		for (const part of message.content) if (part.type === "tool-approval-request" && "approvalId" in part && "toolCallId" in part) approvalIdToToolCallId.set(part.approvalId, part.toolCallId);
	}
	const approvedToolCallIds = /* @__PURE__ */ new Set();
	for (const message of prompt.messages) if (message.role === "tool") {
		for (const part of message.content) if (part.type === "tool-approval-response") {
			const toolCallId = approvalIdToToolCallId.get(part.approvalId);
			if (toolCallId) approvedToolCallIds.add(toolCallId);
		}
	}
	const messages = [...prompt.system != null ? typeof prompt.system === "string" ? [{
		role: "system",
		content: prompt.system
	}] : asArray(prompt.system).map((message) => ({
		role: "system",
		content: message.content,
		providerOptions: message.providerOptions
	})) : [], ...prompt.messages.map((message) => convertToLanguageModelMessage({
		message,
		downloadedAssets
	}))];
	const combinedMessages = [];
	for (const message of messages) {
		if (message.role !== "tool") {
			combinedMessages.push(message);
			continue;
		}
		const lastCombinedMessage = combinedMessages.at(-1);
		if ((lastCombinedMessage == null ? void 0 : lastCombinedMessage.role) === "tool") lastCombinedMessage.content.push(...message.content);
		else combinedMessages.push(message);
	}
	const toolCallIds = /* @__PURE__ */ new Set();
	for (const message of combinedMessages) switch (message.role) {
		case "assistant":
			for (const content of message.content) if (content.type === "tool-call" && !content.providerExecuted) toolCallIds.add(content.toolCallId);
			break;
		case "tool":
			for (const content of message.content) if (content.type === "tool-result") toolCallIds.delete(content.toolCallId);
			break;
		case "user":
		case "system":
			for (const id of approvedToolCallIds) toolCallIds.delete(id);
			if (toolCallIds.size > 0) throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
			break;
	}
	for (const id of approvedToolCallIds) toolCallIds.delete(id);
	if (toolCallIds.size > 0) throw new MissingToolResultsError({ toolCallIds: Array.from(toolCallIds) });
	return combinedMessages.filter((message) => message.role !== "tool" || message.content.length > 0);
}
function convertToLanguageModelMessage({ message, downloadedAssets }) {
	const role = message.role;
	switch (role) {
		case "system": return {
			role: "system",
			content: message.content,
			providerOptions: message.providerOptions
		};
		case "user":
			if (typeof message.content === "string") return {
				role: "user",
				content: [{
					type: "text",
					text: message.content
				}],
				providerOptions: message.providerOptions
			};
			return {
				role: "user",
				content: message.content.map((part) => convertPartToLanguageModelPart(part, downloadedAssets)).filter((part) => part.type !== "text" || part.text !== ""),
				providerOptions: message.providerOptions
			};
		case "assistant":
			if (typeof message.content === "string") return {
				role: "assistant",
				content: [{
					type: "text",
					text: message.content
				}],
				providerOptions: message.providerOptions
			};
			return {
				role: "assistant",
				content: message.content.filter((part) => part.type !== "text" || part.text !== "" || part.providerOptions != null).filter((part) => part.type !== "tool-approval-request").map((part) => {
					const providerOptions = part.providerOptions;
					switch (part.type) {
						case "file": {
							const { data, mediaType } = convertToLanguageModelV3DataContent(part.data);
							return {
								type: "file",
								data,
								filename: part.filename,
								mediaType: mediaType != null ? mediaType : part.mediaType,
								providerOptions
							};
						}
						case "reasoning": return {
							type: "reasoning",
							text: part.text,
							providerOptions
						};
						case "text": return {
							type: "text",
							text: part.text,
							providerOptions
						};
						case "tool-call": return {
							type: "tool-call",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							providerExecuted: part.providerExecuted,
							providerOptions
						};
						case "tool-result": return {
							type: "tool-result",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							output: mapToolResultOutput({
								output: part.output,
								downloadedAssets
							}),
							providerOptions
						};
					}
				}),
				providerOptions: message.providerOptions
			};
		case "tool": return {
			role: "tool",
			content: message.content.filter((part) => part.type !== "tool-approval-response" || part.providerExecuted).map((part) => {
				switch (part.type) {
					case "tool-result": return {
						type: "tool-result",
						toolCallId: part.toolCallId,
						toolName: part.toolName,
						output: mapToolResultOutput({
							output: part.output,
							downloadedAssets
						}),
						providerOptions: part.providerOptions
					};
					case "tool-approval-response": return {
						type: "tool-approval-response",
						approvalId: part.approvalId,
						approved: part.approved,
						reason: part.reason
					};
				}
			}),
			providerOptions: message.providerOptions
		};
		default: throw new InvalidMessageRoleError({ role });
	}
}
async function downloadAssets(messages, download2, supportedUrls) {
	var _a21;
	const downloadableFiles = [];
	for (const message of messages) {
		if (message.role === "user" && Array.isArray(message.content)) {
			for (const part of message.content) if (part.type === "image" || part.type === "file") downloadableFiles.push({
				data: part.type === "image" ? part.image : part.data,
				mediaType: (_a21 = part.mediaType) != null ? _a21 : part.type === "image" ? "image/*" : void 0
			});
		}
		if (message.role === "tool" || message.role === "assistant") {
			if (!Array.isArray(message.content)) continue;
			for (const part of message.content) {
				if (part.type !== "tool-result") continue;
				if (part.output.type !== "content") continue;
				for (const contentPart of part.output.value) if (contentPart.type === "image-url" || contentPart.type === "file-url") downloadableFiles.push({
					data: new URL(contentPart.url),
					mediaType: contentPart.type === "image-url" ? "image/*" : void 0
				});
			}
		}
	}
	const plannedDownloads = downloadableFiles.map((part) => {
		const mediaType = part.mediaType;
		const { data } = convertToLanguageModelV3DataContent(part.data);
		return {
			mediaType,
			data
		};
	}).filter((part) => part.data instanceof URL).map((part) => ({
		url: part.data,
		isUrlSupportedByModel: part.mediaType != null && isUrlSupported({
			url: part.data.toString(),
			mediaType: part.mediaType,
			supportedUrls
		})
	}));
	const downloadedFiles = await download2(plannedDownloads);
	return Object.fromEntries(downloadedFiles.map((file, index) => file == null ? null : [plannedDownloads[index].url.toString(), {
		data: file.data,
		mediaType: file.mediaType
	}]).filter((file) => file != null));
}
function convertPartToLanguageModelPart(part, downloadedAssets) {
	var _a21;
	if (part.type === "text") return {
		type: "text",
		text: part.text,
		providerOptions: part.providerOptions
	};
	let originalData;
	const type = part.type;
	switch (type) {
		case "image":
			originalData = part.image;
			break;
		case "file":
			originalData = part.data;
			break;
		default: throw new Error(`Unsupported part type: ${type}`);
	}
	const { data: convertedData, mediaType: convertedMediaType } = convertToLanguageModelV3DataContent(originalData);
	let mediaType = convertedMediaType != null ? convertedMediaType : part.mediaType;
	let data = convertedData;
	if (data instanceof URL) {
		const downloadedFile = downloadedAssets[data.toString()];
		if (downloadedFile) {
			data = downloadedFile.data;
			mediaType ??= downloadedFile.mediaType;
		}
	}
	switch (type) {
		case "image":
			if (data instanceof Uint8Array || typeof data === "string") mediaType = (_a21 = detectMediaType({
				data,
				signatures: imageMediaTypeSignatures
			})) != null ? _a21 : mediaType;
			return {
				type: "file",
				mediaType: mediaType != null ? mediaType : "image/*",
				filename: void 0,
				data,
				providerOptions: part.providerOptions
			};
		case "file":
			if (mediaType == null) throw new Error(`Media type is missing for file part`);
			return {
				type: "file",
				mediaType,
				filename: part.filename,
				data,
				providerOptions: part.providerOptions
			};
	}
}
function mapToolResultOutput({ output, downloadedAssets }) {
	if (output.type !== "content") return output;
	return {
		type: "content",
		value: output.value.map((item) => {
			var _a21, _b;
			if (item.type === "image-url") {
				const downloadedFile = downloadedAssets[new URL(item.url).toString()];
				if (downloadedFile) return {
					type: "image-data",
					data: convertDataContentToBase64String(downloadedFile.data),
					mediaType: (_a21 = downloadedFile.mediaType) != null ? _a21 : "image/*",
					providerOptions: item.providerOptions
				};
				return item;
			}
			if (item.type === "file-url") {
				const downloadedFile = downloadedAssets[new URL(item.url).toString()];
				if (downloadedFile) return {
					type: "file-data",
					data: convertDataContentToBase64String(downloadedFile.data),
					mediaType: (_b = downloadedFile.mediaType) != null ? _b : "application/octet-stream",
					providerOptions: item.providerOptions
				};
				return item;
			}
			if (item.type !== "media") return item;
			if (item.mediaType.startsWith("image/")) return {
				type: "image-data",
				data: item.data,
				mediaType: item.mediaType
			};
			return {
				type: "file-data",
				data: item.data,
				mediaType: item.mediaType
			};
		})
	};
}
async function createToolModelOutput({ toolCallId, input, output, tool: tool2, errorMode }) {
	if (errorMode === "text") return {
		type: "error-text",
		value: getErrorMessage$1(output)
	};
	else if (errorMode === "json") return {
		type: "error-json",
		value: toJSONValue(output)
	};
	if (tool2 == null ? void 0 : tool2.toModelOutput) return await tool2.toModelOutput({
		toolCallId,
		input,
		output
	});
	return typeof output === "string" ? {
		type: "text",
		value: output
	} : {
		type: "json",
		value: toJSONValue(output)
	};
}
function toJSONValue(value) {
	return value === void 0 ? null : value;
}
function prepareCallSettings({ maxOutputTokens, temperature, topP, topK, presencePenalty, frequencyPenalty, seed, stopSequences }) {
	if (maxOutputTokens != null) {
		if (!Number.isInteger(maxOutputTokens)) throw new InvalidArgumentError({
			parameter: "maxOutputTokens",
			value: maxOutputTokens,
			message: "maxOutputTokens must be an integer"
		});
		if (maxOutputTokens < 1) throw new InvalidArgumentError({
			parameter: "maxOutputTokens",
			value: maxOutputTokens,
			message: "maxOutputTokens must be >= 1"
		});
	}
	if (temperature != null) {
		if (typeof temperature !== "number") throw new InvalidArgumentError({
			parameter: "temperature",
			value: temperature,
			message: "temperature must be a number"
		});
	}
	if (topP != null) {
		if (typeof topP !== "number") throw new InvalidArgumentError({
			parameter: "topP",
			value: topP,
			message: "topP must be a number"
		});
	}
	if (topK != null) {
		if (typeof topK !== "number") throw new InvalidArgumentError({
			parameter: "topK",
			value: topK,
			message: "topK must be a number"
		});
	}
	if (presencePenalty != null) {
		if (typeof presencePenalty !== "number") throw new InvalidArgumentError({
			parameter: "presencePenalty",
			value: presencePenalty,
			message: "presencePenalty must be a number"
		});
	}
	if (frequencyPenalty != null) {
		if (typeof frequencyPenalty !== "number") throw new InvalidArgumentError({
			parameter: "frequencyPenalty",
			value: frequencyPenalty,
			message: "frequencyPenalty must be a number"
		});
	}
	if (seed != null) {
		if (!Number.isInteger(seed)) throw new InvalidArgumentError({
			parameter: "seed",
			value: seed,
			message: "seed must be an integer"
		});
	}
	return {
		maxOutputTokens,
		temperature,
		topP,
		topK,
		presencePenalty,
		frequencyPenalty,
		stopSequences,
		seed
	};
}
function isNonEmptyObject(object2) {
	return object2 != null && Object.keys(object2).length > 0;
}
async function prepareToolsAndToolChoice({ tools, toolChoice, activeTools }) {
	if (!isNonEmptyObject(tools)) return {
		tools: void 0,
		toolChoice: void 0
	};
	const filteredTools = activeTools != null ? Object.entries(tools).filter(([name21]) => activeTools.includes(name21)) : Object.entries(tools);
	const languageModelTools = [];
	for (const [name21, tool2] of filteredTools) {
		const toolType = tool2.type;
		switch (toolType) {
			case void 0:
			case "dynamic":
			case "function":
				languageModelTools.push({
					type: "function",
					name: name21,
					description: tool2.description,
					inputSchema: await asSchema(tool2.inputSchema).jsonSchema,
					...tool2.inputExamples != null ? { inputExamples: tool2.inputExamples } : {},
					providerOptions: tool2.providerOptions,
					...tool2.strict != null ? { strict: tool2.strict } : {}
				});
				break;
			case "provider":
				languageModelTools.push({
					type: "provider",
					name: name21,
					id: tool2.id,
					args: tool2.args
				});
				break;
			default: throw new Error(`Unsupported tool type: ${toolType}`);
		}
	}
	return {
		tools: languageModelTools,
		toolChoice: toolChoice == null ? { type: "auto" } : typeof toolChoice === "string" ? { type: toolChoice } : {
			type: "tool",
			toolName: toolChoice.toolName
		}
	};
}
var jsonValueSchema = lazy(() => union([
	_null(),
	string(),
	number(),
	boolean(),
	record(string(), jsonValueSchema.optional()),
	array$1(jsonValueSchema)
]));
var providerMetadataSchema = record(string(), record(string(), jsonValueSchema.optional()));
var textPartSchema = object$1({
	type: literal("text"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var imagePartSchema = object$1({
	type: literal("image"),
	image: union([dataContentSchema, _instanceof(URL)]),
	mediaType: string().optional(),
	providerOptions: providerMetadataSchema.optional()
});
var filePartSchema = object$1({
	type: literal("file"),
	data: union([dataContentSchema, _instanceof(URL)]),
	filename: string().optional(),
	mediaType: string(),
	providerOptions: providerMetadataSchema.optional()
});
var reasoningPartSchema = object$1({
	type: literal("reasoning"),
	text: string(),
	providerOptions: providerMetadataSchema.optional()
});
var toolCallPartSchema = object$1({
	type: literal("tool-call"),
	toolCallId: string(),
	toolName: string(),
	input: unknown(),
	providerOptions: providerMetadataSchema.optional(),
	providerExecuted: boolean().optional()
});
var outputSchema = discriminatedUnion("type", [
	object$1({
		type: literal("text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("execution-denied"),
		reason: string().optional(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("error-text"),
		value: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("error-json"),
		value: jsonValueSchema,
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		type: literal("content"),
		value: array$1(union([
			object$1({
				type: literal("text"),
				text: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("media"),
				data: string(),
				mediaType: string()
			}),
			object$1({
				type: literal("file-data"),
				data: string(),
				mediaType: string(),
				filename: string().optional(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("file-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-data"),
				data: string(),
				mediaType: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-url"),
				url: string(),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("image-file-id"),
				fileId: union([string(), record(string(), string())]),
				providerOptions: providerMetadataSchema.optional()
			}),
			object$1({
				type: literal("custom"),
				providerOptions: providerMetadataSchema.optional()
			})
		]))
	})
]);
var toolResultPartSchema = object$1({
	type: literal("tool-result"),
	toolCallId: string(),
	toolName: string(),
	output: outputSchema,
	providerOptions: providerMetadataSchema.optional()
});
var toolApprovalRequestSchema = object$1({
	type: literal("tool-approval-request"),
	approvalId: string(),
	toolCallId: string()
});
var toolApprovalResponseSchema = object$1({
	type: literal("tool-approval-response"),
	approvalId: string(),
	approved: boolean(),
	reason: string().optional()
});
var modelMessageSchema = union([
	object$1({
		role: literal("system"),
		content: string(),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("user"),
		content: union([string(), array$1(union([
			textPartSchema,
			imagePartSchema,
			filePartSchema
		]))]),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("assistant"),
		content: union([string(), array$1(union([
			textPartSchema,
			filePartSchema,
			reasoningPartSchema,
			toolCallPartSchema,
			toolResultPartSchema,
			toolApprovalRequestSchema
		]))]),
		providerOptions: providerMetadataSchema.optional()
	}),
	object$1({
		role: literal("tool"),
		content: array$1(union([toolResultPartSchema, toolApprovalResponseSchema])),
		providerOptions: providerMetadataSchema.optional()
	})
]);
async function standardizePrompt({ allowSystemInMessages, system, prompt, messages }) {
	if (prompt == null && messages == null) throw new InvalidPromptError({
		prompt,
		message: "prompt or messages must be defined"
	});
	if (prompt != null && messages != null) throw new InvalidPromptError({
		prompt,
		message: "prompt and messages cannot be defined at the same time"
	});
	if (typeof system !== "string" && !asArray(system).every((message) => message.role === "system")) throw new InvalidPromptError({
		prompt,
		message: "system must be a string, SystemModelMessage, or array of SystemModelMessage"
	});
	if (prompt != null && typeof prompt === "string") messages = [{
		role: "user",
		content: prompt
	}];
	else if (prompt != null && Array.isArray(prompt)) messages = prompt;
	else if (messages == null) throw new InvalidPromptError({
		prompt,
		message: "prompt or messages must be defined"
	});
	if (messages.length === 0) throw new InvalidPromptError({
		prompt,
		message: "messages must not be empty"
	});
	if (messages.some((message) => message.role === "system")) {
		if (allowSystemInMessages === false) throw new InvalidPromptError({
			prompt,
			message: "System messages are not allowed in the prompt or messages fields. Use the system option instead."
		});
		if (allowSystemInMessages === void 0) console.warn("AI SDK Warning: System messages in the prompt or messages fields can be a security risk because they may enable prompt injection attacks. Use the system option instead when possible. Set allowSystemInMessages to true to suppress this warning, or false to throw an error.");
	}
	const validationResult = await safeValidateTypes({
		value: messages,
		schema: array$1(modelMessageSchema)
	});
	if (!validationResult.success) throw new InvalidPromptError({
		prompt,
		message: "The messages do not match the ModelMessage[] schema.",
		cause: validationResult.error
	});
	return {
		messages,
		system
	};
}
function wrapGatewayError(error) {
	if (!GatewayAuthenticationError.isInstance(error)) return error;
	const isProductionEnv = (process == null ? void 0 : "production") === "production";
	const moreInfoURL = "https://ai-sdk.dev/unauthenticated-ai-gateway";
	if (isProductionEnv) return new AISDKError({
		name: "GatewayError",
		message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: ${moreInfoURL}`
	});
	return Object.assign(/* @__PURE__ */ new Error(`\x1B[1m\x1B[31mUnauthenticated request to AI Gateway.\x1B[0m

To authenticate, set the \x1B[33mAI_GATEWAY_API_KEY\x1B[0m environment variable with your API key.

Alternatively, you can use a provider module instead of the AI Gateway.

Learn more: \x1B[34m${moreInfoURL}\x1B[0m

`), { name: "GatewayAuthenticationError" });
}
function assembleOperationName({ operationId, telemetry }) {
	return {
		"operation.name": `${operationId}${(telemetry == null ? void 0 : telemetry.functionId) != null ? ` ${telemetry.functionId}` : ""}`,
		"resource.name": telemetry == null ? void 0 : telemetry.functionId,
		"ai.operationId": operationId,
		"ai.telemetry.functionId": telemetry == null ? void 0 : telemetry.functionId
	};
}
function getBaseTelemetryAttributes({ model, settings, telemetry, headers }) {
	var _a21;
	return {
		"ai.model.provider": model.provider,
		"ai.model.id": model.modelId,
		...Object.entries(settings).reduce((attributes, [key, value]) => {
			if (key === "timeout") {
				const totalTimeoutMs = getTotalTimeoutMs(value);
				if (totalTimeoutMs != null) attributes[`ai.settings.${key}`] = totalTimeoutMs;
			} else attributes[`ai.settings.${key}`] = value;
			return attributes;
		}, {}),
		...Object.entries((_a21 = telemetry == null ? void 0 : telemetry.metadata) != null ? _a21 : {}).reduce((attributes, [key, value]) => {
			attributes[`ai.telemetry.metadata.${key}`] = value;
			return attributes;
		}, {}),
		...Object.entries(headers != null ? headers : {}).reduce((attributes, [key, value]) => {
			if (value !== void 0) attributes[`ai.request.headers.${key}`] = value;
			return attributes;
		}, {})
	};
}
var noopTracer = {
	startSpan() {
		return noopSpan;
	},
	startActiveSpan(name21, arg1, arg2, arg3) {
		if (typeof arg1 === "function") return arg1(noopSpan);
		if (typeof arg2 === "function") return arg2(noopSpan);
		if (typeof arg3 === "function") return arg3(noopSpan);
	}
};
var noopSpan = {
	spanContext() {
		return noopSpanContext;
	},
	setAttribute() {
		return this;
	},
	setAttributes() {
		return this;
	},
	addEvent() {
		return this;
	},
	addLink() {
		return this;
	},
	addLinks() {
		return this;
	},
	setStatus() {
		return this;
	},
	updateName() {
		return this;
	},
	end() {
		return this;
	},
	isRecording() {
		return false;
	},
	recordException() {
		return this;
	}
};
var noopSpanContext = {
	traceId: "",
	spanId: "",
	traceFlags: 0
};
function getTracer({ isEnabled = false, tracer } = {}) {
	if (!isEnabled) return noopTracer;
	if (tracer) return tracer;
	return trace.getTracer("ai");
}
async function recordSpan({ name: name21, tracer, attributes, fn, endWhenDone = true }) {
	return tracer.startActiveSpan(name21, { attributes: await attributes }, async (span) => {
		const ctx = context.active();
		try {
			const result = await context.with(ctx, () => fn(span));
			if (endWhenDone) span.end();
			return result;
		} catch (error) {
			try {
				recordErrorOnSpan(span, error);
			} finally {
				span.end();
			}
			throw error;
		}
	});
}
function recordErrorOnSpan(span, error) {
	if (error instanceof Error) {
		span.recordException({
			name: error.name,
			message: error.message,
			stack: error.stack
		});
		span.setStatus({
			code: SpanStatusCode.ERROR,
			message: error.message
		});
	} else span.setStatus({ code: SpanStatusCode.ERROR });
}
async function selectTelemetryAttributes({ telemetry, attributes }) {
	if ((telemetry == null ? void 0 : telemetry.isEnabled) !== true) return {};
	const resultAttributes = {};
	for (const [key, value] of Object.entries(attributes)) {
		if (value == null) continue;
		if (typeof value === "object" && "input" in value && typeof value.input === "function") {
			if ((telemetry == null ? void 0 : telemetry.recordInputs) === false) continue;
			const result = await value.input();
			if (result != null) resultAttributes[key] = result;
			continue;
		}
		if (typeof value === "object" && "output" in value && typeof value.output === "function") {
			if ((telemetry == null ? void 0 : telemetry.recordOutputs) === false) continue;
			const result = await value.output();
			if (result != null) resultAttributes[key] = result;
			continue;
		}
		resultAttributes[key] = value;
	}
	return resultAttributes;
}
function stringifyForTelemetry(prompt) {
	return JSON.stringify(prompt.map((message) => ({
		...message,
		content: typeof message.content === "string" ? message.content : message.content.map((part) => part.type === "file" ? {
			...part,
			data: part.data instanceof Uint8Array ? convertDataContentToBase64String(part.data) : part.data
		} : part)
	})));
}
function getGlobalTelemetryIntegrations() {
	var _a21;
	return (_a21 = globalThis.AI_SDK_TELEMETRY_INTEGRATIONS) != null ? _a21 : [];
}
function getGlobalTelemetryIntegration() {
	const globalIntegrations = getGlobalTelemetryIntegrations();
	return (integrations) => {
		const localIntegrations = asArray(integrations);
		const allIntegrations = [...globalIntegrations, ...localIntegrations];
		function createTelemetryComposite(getListenerFromIntegration) {
			const listeners = allIntegrations.map(getListenerFromIntegration).filter(Boolean);
			return async (event) => {
				for (const listener of listeners) try {
					await listener(event);
				} catch (_ignored) {}
			};
		}
		return {
			onStart: createTelemetryComposite((integration) => integration.onStart),
			onStepStart: createTelemetryComposite((integration) => integration.onStepStart),
			onToolCallStart: createTelemetryComposite((integration) => integration.onToolCallStart),
			onToolCallFinish: createTelemetryComposite((integration) => integration.onToolCallFinish),
			onStepFinish: createTelemetryComposite((integration) => integration.onStepFinish),
			onFinish: createTelemetryComposite((integration) => integration.onFinish)
		};
	};
}
function asLanguageModelUsage(usage) {
	return {
		inputTokens: usage.inputTokens.total,
		inputTokenDetails: {
			noCacheTokens: usage.inputTokens.noCache,
			cacheReadTokens: usage.inputTokens.cacheRead,
			cacheWriteTokens: usage.inputTokens.cacheWrite
		},
		outputTokens: usage.outputTokens.total,
		outputTokenDetails: {
			textTokens: usage.outputTokens.text,
			reasoningTokens: usage.outputTokens.reasoning
		},
		totalTokens: addTokenCounts(usage.inputTokens.total, usage.outputTokens.total),
		raw: usage.raw,
		reasoningTokens: usage.outputTokens.reasoning,
		cachedInputTokens: usage.inputTokens.cacheRead
	};
}
function createNullLanguageModelUsage() {
	return {
		inputTokens: void 0,
		inputTokenDetails: {
			noCacheTokens: void 0,
			cacheReadTokens: void 0,
			cacheWriteTokens: void 0
		},
		outputTokens: void 0,
		outputTokenDetails: {
			textTokens: void 0,
			reasoningTokens: void 0
		},
		totalTokens: void 0,
		raw: void 0
	};
}
function addLanguageModelUsage(usage1, usage2) {
	var _a21, _b, _c, _d, _e, _f, _g, _h, _i, _j;
	return {
		inputTokens: addTokenCounts(usage1.inputTokens, usage2.inputTokens),
		inputTokenDetails: {
			noCacheTokens: addTokenCounts((_a21 = usage1.inputTokenDetails) == null ? void 0 : _a21.noCacheTokens, (_b = usage2.inputTokenDetails) == null ? void 0 : _b.noCacheTokens),
			cacheReadTokens: addTokenCounts((_c = usage1.inputTokenDetails) == null ? void 0 : _c.cacheReadTokens, (_d = usage2.inputTokenDetails) == null ? void 0 : _d.cacheReadTokens),
			cacheWriteTokens: addTokenCounts((_e = usage1.inputTokenDetails) == null ? void 0 : _e.cacheWriteTokens, (_f = usage2.inputTokenDetails) == null ? void 0 : _f.cacheWriteTokens)
		},
		outputTokens: addTokenCounts(usage1.outputTokens, usage2.outputTokens),
		outputTokenDetails: {
			textTokens: addTokenCounts((_g = usage1.outputTokenDetails) == null ? void 0 : _g.textTokens, (_h = usage2.outputTokenDetails) == null ? void 0 : _h.textTokens),
			reasoningTokens: addTokenCounts((_i = usage1.outputTokenDetails) == null ? void 0 : _i.reasoningTokens, (_j = usage2.outputTokenDetails) == null ? void 0 : _j.reasoningTokens)
		},
		totalTokens: addTokenCounts(usage1.totalTokens, usage2.totalTokens),
		reasoningTokens: addTokenCounts(usage1.reasoningTokens, usage2.reasoningTokens),
		cachedInputTokens: addTokenCounts(usage1.cachedInputTokens, usage2.cachedInputTokens)
	};
}
function addTokenCounts(tokenCount1, tokenCount2) {
	return tokenCount1 == null && tokenCount2 == null ? void 0 : (tokenCount1 != null ? tokenCount1 : 0) + (tokenCount2 != null ? tokenCount2 : 0);
}
function mergeObjects(base, overrides) {
	if (base === void 0 && overrides === void 0) return;
	if (base === void 0) return overrides;
	if (overrides === void 0) return base;
	const result = { ...base };
	for (const key in overrides) {
		if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
		if (Object.prototype.hasOwnProperty.call(overrides, key)) {
			const overridesValue = overrides[key];
			if (overridesValue === void 0) continue;
			const baseValue = key in base ? base[key] : void 0;
			const isSourceObject = overridesValue !== null && typeof overridesValue === "object" && !Array.isArray(overridesValue) && !(overridesValue instanceof Date) && !(overridesValue instanceof RegExp);
			const isTargetObject = baseValue !== null && baseValue !== void 0 && typeof baseValue === "object" && !Array.isArray(baseValue) && !(baseValue instanceof Date) && !(baseValue instanceof RegExp);
			if (isSourceObject && isTargetObject) result[key] = mergeObjects(baseValue, overridesValue);
			else result[key] = overridesValue;
		}
	}
	return result;
}
function getRetryDelayInMs({ error, exponentialBackoffDelay }) {
	const headers = APICallError.isInstance(error) ? error.responseHeaders : APICallError.isInstance(error.cause) ? error.cause.responseHeaders : void 0;
	if (!headers) return exponentialBackoffDelay;
	let ms;
	const retryAfterMs = headers["retry-after-ms"];
	if (retryAfterMs) {
		const timeoutMs = parseFloat(retryAfterMs);
		if (!Number.isNaN(timeoutMs)) ms = timeoutMs;
	}
	const retryAfter = headers["retry-after"];
	if (retryAfter && ms === void 0) {
		const timeoutSeconds = parseFloat(retryAfter);
		if (!Number.isNaN(timeoutSeconds)) ms = timeoutSeconds * 1e3;
		else ms = Date.parse(retryAfter) - Date.now();
	}
	if (ms != null && !Number.isNaN(ms) && 0 <= ms && (ms < 60 * 1e3 || ms < exponentialBackoffDelay)) return ms;
	return exponentialBackoffDelay;
}
var retryWithExponentialBackoffRespectingRetryHeaders = ({ maxRetries = 2, initialDelayInMs = 2e3, backoffFactor = 2, abortSignal } = {}) => async (f) => _retryWithExponentialBackoff(f, {
	maxRetries,
	delayInMs: initialDelayInMs,
	backoffFactor,
	abortSignal
});
async function _retryWithExponentialBackoff(f, { maxRetries, delayInMs, backoffFactor, abortSignal }, errors = []) {
	try {
		return await f();
	} catch (error) {
		if (isAbortError(error)) throw error;
		if (maxRetries === 0) throw error;
		const errorMessage = getErrorMessage(error);
		const newErrors = [...errors, error];
		const tryNumber = newErrors.length;
		if (tryNumber > maxRetries) throw new RetryError({
			message: `Failed after ${tryNumber} attempts. Last error: ${errorMessage}`,
			reason: "maxRetriesExceeded",
			errors: newErrors
		});
		if (error instanceof Error && (APICallError.isInstance(error) && error.isRetryable === true || GatewayError.isInstance(error) && error.isRetryable === true) && tryNumber <= maxRetries) {
			await delay(getRetryDelayInMs({
				error,
				exponentialBackoffDelay: delayInMs
			}), { abortSignal });
			return _retryWithExponentialBackoff(f, {
				maxRetries,
				delayInMs: backoffFactor * delayInMs,
				backoffFactor,
				abortSignal
			}, newErrors);
		}
		if (tryNumber === 1) throw error;
		throw new RetryError({
			message: `Failed after ${tryNumber} attempts with non-retryable error: '${errorMessage}'`,
			reason: "errorNotRetryable",
			errors: newErrors
		});
	}
}
function prepareRetries({ maxRetries, abortSignal }) {
	if (maxRetries != null) {
		if (!Number.isInteger(maxRetries)) throw new InvalidArgumentError({
			parameter: "maxRetries",
			value: maxRetries,
			message: "maxRetries must be an integer"
		});
		if (maxRetries < 0) throw new InvalidArgumentError({
			parameter: "maxRetries",
			value: maxRetries,
			message: "maxRetries must be >= 0"
		});
	}
	const maxRetriesResult = maxRetries != null ? maxRetries : 2;
	return {
		maxRetries: maxRetriesResult,
		retry: retryWithExponentialBackoffRespectingRetryHeaders({
			maxRetries: maxRetriesResult,
			abortSignal
		})
	};
}
function collectToolApprovals({ messages }) {
	const lastMessage = messages.at(-1);
	if ((lastMessage == null ? void 0 : lastMessage.role) != "tool") return {
		approvedToolApprovals: [],
		deniedToolApprovals: []
	};
	const toolCallsByToolCallId = {};
	for (const message of messages) if (message.role === "assistant" && typeof message.content !== "string") {
		const content = message.content;
		for (const part of content) if (part.type === "tool-call") toolCallsByToolCallId[part.toolCallId] = part;
	}
	const toolApprovalRequestsByApprovalId = {};
	for (const message of messages) if (message.role === "assistant" && typeof message.content !== "string") {
		const content = message.content;
		for (const part of content) if (part.type === "tool-approval-request") toolApprovalRequestsByApprovalId[part.approvalId] = part;
	}
	const toolResults = {};
	for (const part of lastMessage.content) if (part.type === "tool-result") toolResults[part.toolCallId] = part;
	const approvedToolApprovals = [];
	const deniedToolApprovals = [];
	const approvalResponses = lastMessage.content.filter((part) => part.type === "tool-approval-response");
	for (const approvalResponse of approvalResponses) {
		const approvalRequest = toolApprovalRequestsByApprovalId[approvalResponse.approvalId];
		if (approvalRequest == null) throw new InvalidToolApprovalError({ approvalId: approvalResponse.approvalId });
		if (toolResults[approvalRequest.toolCallId] != null) continue;
		const toolCall = toolCallsByToolCallId[approvalRequest.toolCallId];
		if (toolCall == null) throw new ToolCallNotFoundForApprovalError({
			toolCallId: approvalRequest.toolCallId,
			approvalId: approvalRequest.approvalId
		});
		const approval = {
			approvalRequest,
			approvalResponse,
			toolCall
		};
		if (approvalResponse.approved) approvedToolApprovals.push(approval);
		else deniedToolApprovals.push(approval);
	}
	return {
		approvedToolApprovals,
		deniedToolApprovals
	};
}
function now() {
	var _a21, _b;
	return (_b = (_a21 = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : _a21.now()) != null ? _b : Date.now();
}
async function executeToolCall({ toolCall, tools, tracer, telemetry, messages, abortSignal, experimental_context, stepNumber, model, onPreliminaryToolResult, onToolCallStart, onToolCallFinish }) {
	const { toolName, toolCallId, input } = toolCall;
	const tool2 = tools == null ? void 0 : tools[toolName];
	if ((tool2 == null ? void 0 : tool2.execute) == null) return;
	const baseCallbackEvent = {
		stepNumber,
		model,
		toolCall,
		messages,
		abortSignal,
		functionId: telemetry == null ? void 0 : telemetry.functionId,
		metadata: telemetry == null ? void 0 : telemetry.metadata,
		experimental_context
	};
	return recordSpan({
		name: "ai.toolCall",
		attributes: selectTelemetryAttributes({
			telemetry,
			attributes: {
				...assembleOperationName({
					operationId: "ai.toolCall",
					telemetry
				}),
				"ai.toolCall.name": toolName,
				"ai.toolCall.id": toolCallId,
				"ai.toolCall.args": { output: () => JSON.stringify(input) }
			}
		}),
		tracer,
		fn: async (span) => {
			let output;
			await notify({
				event: baseCallbackEvent,
				callbacks: onToolCallStart
			});
			const startTime = now();
			try {
				const stream = executeTool({
					execute: tool2.execute.bind(tool2),
					input,
					options: {
						toolCallId,
						messages,
						abortSignal,
						experimental_context
					}
				});
				for await (const part of stream) if (part.type === "preliminary") onPreliminaryToolResult?.({
					...toolCall,
					type: "tool-result",
					output: part.output,
					preliminary: true
				});
				else output = part.output;
			} catch (error) {
				const durationMs2 = now() - startTime;
				await notify({
					event: {
						...baseCallbackEvent,
						success: false,
						error,
						durationMs: durationMs2
					},
					callbacks: onToolCallFinish
				});
				recordErrorOnSpan(span, error);
				return {
					type: "tool-error",
					toolCallId,
					toolName,
					input,
					error,
					dynamic: tool2.type === "dynamic",
					...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {},
					...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
				};
			}
			const durationMs = now() - startTime;
			await notify({
				event: {
					...baseCallbackEvent,
					success: true,
					output,
					durationMs
				},
				callbacks: onToolCallFinish
			});
			try {
				span.setAttributes(await selectTelemetryAttributes({
					telemetry,
					attributes: { "ai.toolCall.result": { output: () => JSON.stringify(output) } }
				}));
			} catch (ignored) {}
			return {
				type: "tool-result",
				toolCallId,
				toolName,
				input,
				output,
				dynamic: tool2.type === "dynamic",
				...toolCall.providerMetadata != null ? { providerMetadata: toolCall.providerMetadata } : {},
				...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
			};
		}
	});
}
var DefaultGeneratedFile = class {
	constructor({ data, mediaType }) {
		const isUint8Array = data instanceof Uint8Array;
		this.base64Data = isUint8Array ? void 0 : data;
		this.uint8ArrayData = isUint8Array ? data : void 0;
		this.mediaType = mediaType;
	}
	get base64() {
		if (this.base64Data == null) this.base64Data = convertUint8ArrayToBase64(this.uint8ArrayData);
		return this.base64Data;
	}
	get uint8Array() {
		if (this.uint8ArrayData == null) this.uint8ArrayData = convertBase64ToUint8Array(this.base64Data);
		return this.uint8ArrayData;
	}
};
var DefaultGeneratedFileWithType = class extends DefaultGeneratedFile {
	constructor(options) {
		super(options);
		this.type = "file";
	}
};
async function isApprovalNeeded({ tool: tool2, toolCall, messages, experimental_context }) {
	if (tool2.needsApproval == null) return false;
	if (typeof tool2.needsApproval === "boolean") return tool2.needsApproval;
	return await tool2.needsApproval(toolCall.input, {
		toolCallId: toolCall.toolCallId,
		messages,
		experimental_context
	});
}
__export({}, {
	array: () => array,
	choice: () => choice,
	json: () => json,
	object: () => object,
	text: () => text
});
function fixJson(input) {
	const stack = ["ROOT"];
	let lastValidIndex = -1;
	let literalStart = null;
	function processValueStart(char, i, swapState) {
		switch (char) {
			case "\"":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_STRING");
				break;
			case "f":
			case "t":
			case "n":
				lastValidIndex = i;
				literalStart = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_LITERAL");
				break;
			case "-":
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_NUMBER");
				break;
			case "{":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_OBJECT_START");
				break;
			case "[":
				lastValidIndex = i;
				stack.pop();
				stack.push(swapState);
				stack.push("INSIDE_ARRAY_START");
				break;
		}
	}
	function processAfterObjectValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_OBJECT_AFTER_COMMA");
				break;
			case "}":
				lastValidIndex = i;
				stack.pop();
				break;
		}
	}
	function processAfterArrayValue(char, i) {
		switch (char) {
			case ",":
				stack.pop();
				stack.push("INSIDE_ARRAY_AFTER_COMMA");
				break;
			case "]":
				lastValidIndex = i;
				stack.pop();
				break;
		}
	}
	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		switch (stack[stack.length - 1]) {
			case "ROOT":
				processValueStart(char, i, "FINISH");
				break;
			case "INSIDE_OBJECT_START":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
					case "}":
						lastValidIndex = i;
						stack.pop();
						break;
				}
				break;
			case "INSIDE_OBJECT_AFTER_COMMA":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_KEY");
						break;
				}
				break;
			case "INSIDE_OBJECT_KEY":
				switch (char) {
					case "\"":
						stack.pop();
						stack.push("INSIDE_OBJECT_AFTER_KEY");
						break;
				}
				break;
			case "INSIDE_OBJECT_AFTER_KEY":
				switch (char) {
					case ":":
						stack.pop();
						stack.push("INSIDE_OBJECT_BEFORE_VALUE");
						break;
				}
				break;
			case "INSIDE_OBJECT_BEFORE_VALUE":
				processValueStart(char, i, "INSIDE_OBJECT_AFTER_VALUE");
				break;
			case "INSIDE_OBJECT_AFTER_VALUE":
				processAfterObjectValue(char, i);
				break;
			case "INSIDE_STRING":
				switch (char) {
					case "\"":
						stack.pop();
						lastValidIndex = i;
						break;
					case "\\":
						stack.push("INSIDE_STRING_ESCAPE");
						break;
					default: lastValidIndex = i;
				}
				break;
			case "INSIDE_ARRAY_START":
				switch (char) {
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
						break;
				}
				break;
			case "INSIDE_ARRAY_AFTER_VALUE":
				switch (char) {
					case ",":
						stack.pop();
						stack.push("INSIDE_ARRAY_AFTER_COMMA");
						break;
					case "]":
						lastValidIndex = i;
						stack.pop();
						break;
					default:
						lastValidIndex = i;
						break;
				}
				break;
			case "INSIDE_ARRAY_AFTER_COMMA":
				processValueStart(char, i, "INSIDE_ARRAY_AFTER_VALUE");
				break;
			case "INSIDE_STRING_ESCAPE":
				stack.pop();
				lastValidIndex = i;
				break;
			case "INSIDE_NUMBER":
				switch (char) {
					case "0":
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						lastValidIndex = i;
						break;
					case "e":
					case "E":
					case "-":
					case ".": break;
					case ",":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "}":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
						break;
					case "]":
						stack.pop();
						if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
						break;
					default:
						stack.pop();
						break;
				}
				break;
			case "INSIDE_LITERAL": {
				const partialLiteral = input.substring(literalStart, i + 1);
				if (!"false".startsWith(partialLiteral) && !"true".startsWith(partialLiteral) && !"null".startsWith(partialLiteral)) {
					stack.pop();
					if (stack[stack.length - 1] === "INSIDE_OBJECT_AFTER_VALUE") processAfterObjectValue(char, i);
					else if (stack[stack.length - 1] === "INSIDE_ARRAY_AFTER_VALUE") processAfterArrayValue(char, i);
				} else lastValidIndex = i;
				break;
			}
		}
	}
	let result = input.slice(0, lastValidIndex + 1);
	for (let i = stack.length - 1; i >= 0; i--) switch (stack[i]) {
		case "INSIDE_STRING":
			result += "\"";
			break;
		case "INSIDE_OBJECT_KEY":
		case "INSIDE_OBJECT_AFTER_KEY":
		case "INSIDE_OBJECT_AFTER_COMMA":
		case "INSIDE_OBJECT_START":
		case "INSIDE_OBJECT_BEFORE_VALUE":
		case "INSIDE_OBJECT_AFTER_VALUE":
			result += "}";
			break;
		case "INSIDE_ARRAY_START":
		case "INSIDE_ARRAY_AFTER_COMMA":
		case "INSIDE_ARRAY_AFTER_VALUE":
			result += "]";
			break;
		case "INSIDE_LITERAL": {
			const partialLiteral = input.substring(literalStart, input.length);
			if ("true".startsWith(partialLiteral)) result += "true".slice(partialLiteral.length);
			else if ("false".startsWith(partialLiteral)) result += "false".slice(partialLiteral.length);
			else if ("null".startsWith(partialLiteral)) result += "null".slice(partialLiteral.length);
		}
	}
	return result;
}
async function parsePartialJson(jsonText) {
	if (jsonText === void 0) return {
		value: void 0,
		state: "undefined-input"
	};
	let result = await safeParseJSON({ text: jsonText });
	if (result.success) return {
		value: result.value,
		state: "successful-parse"
	};
	result = await safeParseJSON({ text: fixJson(jsonText) });
	if (result.success) return {
		value: result.value,
		state: "repaired-parse"
	};
	return {
		value: void 0,
		state: "failed-parse"
	};
}
var text = () => ({
	name: "text",
	responseFormat: Promise.resolve({ type: "text" }),
	async parseCompleteOutput({ text: text2 }) {
		return text2;
	},
	async parsePartialOutput({ text: text2 }) {
		return { partial: text2 };
	},
	createElementStreamTransform() {}
});
var object = ({ schema: inputSchema, name: name21, description }) => {
	const schema = asSchema(inputSchema);
	return {
		name: "object",
		responseFormat: resolve(schema.jsonSchema).then((jsonSchema2) => ({
			type: "json",
			schema: jsonSchema2,
			...name21 != null && { name: name21 },
			...description != null && { description }
		})),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const validationResult = await safeValidateTypes({
				value: parseResult.value,
				schema
			});
			if (!validationResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: validationResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return validationResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
var array = ({ element: inputElementSchema, name: name21, description }) => {
	const elementSchema = asSchema(inputElementSchema);
	return {
		name: "array",
		responseFormat: resolve(elementSchema.jsonSchema).then((jsonSchema2) => {
			const { $schema, ...itemSchema } = jsonSchema2;
			return {
				type: "json",
				schema: {
					$schema: "http://json-schema.org/draft-07/schema#",
					type: "object",
					properties: { elements: {
						type: "array",
						items: itemSchema
					} },
					required: ["elements"],
					additionalProperties: false
				},
				...name21 != null && { name: name21 },
				...description != null && { description }
			};
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object with an elements array"
				}),
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			for (const element of outerValue.elements) {
				const validationResult = await safeValidateTypes({
					value: element,
					schema: elementSchema
				});
				if (!validationResult.success) throw new NoObjectGeneratedError({
					message: "No object generated: response did not match schema.",
					cause: validationResult.error,
					text: text2,
					response: context2.response,
					usage: context2.usage,
					finishReason: context2.finishReason
				});
			}
			return outerValue.elements;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("elements" in outerValue) || !Array.isArray(outerValue.elements)) return;
					const rawElements = result.state === "repaired-parse" && outerValue.elements.length > 0 ? outerValue.elements.slice(0, -1) : outerValue.elements;
					const parsedElements = [];
					for (const rawElement of rawElements) {
						const validationResult = await safeValidateTypes({
							value: rawElement,
							schema: elementSchema
						});
						if (validationResult.success) parsedElements.push(validationResult.value);
					}
					return { partial: parsedElements };
				}
			}
		},
		createElementStreamTransform() {
			let publishedElements = 0;
			return new TransformStream({ transform({ partialOutput }, controller) {
				if (partialOutput != null) for (; publishedElements < partialOutput.length; publishedElements++) controller.enqueue(partialOutput[publishedElements]);
			} });
		}
	};
};
var choice = ({ options: choiceOptions, name: name21, description }) => {
	return {
		name: "choice",
		responseFormat: Promise.resolve({
			type: "json",
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				type: "object",
				properties: { result: {
					type: "string",
					enum: choiceOptions
				} },
				required: ["result"],
				additionalProperties: false
			},
			...name21 != null && { name: name21 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			const outerValue = parseResult.value;
			if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string" || !choiceOptions.includes(outerValue.result)) throw new NoObjectGeneratedError({
				message: "No object generated: response did not match schema.",
				cause: new TypeValidationError({
					value: outerValue,
					cause: "response must be an object that contains a choice value."
				}),
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return outerValue.result;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": {
					const outerValue = result.value;
					if (outerValue == null || typeof outerValue !== "object" || !("result" in outerValue) || typeof outerValue.result !== "string") return;
					const potentialMatches = choiceOptions.filter((choiceOption) => choiceOption.startsWith(outerValue.result));
					if (result.state === "successful-parse") return potentialMatches.includes(outerValue.result) ? { partial: outerValue.result } : void 0;
					else return potentialMatches.length === 1 ? { partial: potentialMatches[0] } : void 0;
				}
			}
		},
		createElementStreamTransform() {}
	};
};
var json = ({ name: name21, description } = {}) => {
	return {
		name: "json",
		responseFormat: Promise.resolve({
			type: "json",
			...name21 != null && { name: name21 },
			...description != null && { description }
		}),
		async parseCompleteOutput({ text: text2 }, context2) {
			const parseResult = await safeParseJSON({ text: text2 });
			if (!parseResult.success) throw new NoObjectGeneratedError({
				message: "No object generated: could not parse the response.",
				cause: parseResult.error,
				text: text2,
				response: context2.response,
				usage: context2.usage,
				finishReason: context2.finishReason
			});
			return parseResult.value;
		},
		async parsePartialOutput({ text: text2 }) {
			const result = await parsePartialJson(text2);
			switch (result.state) {
				case "failed-parse":
				case "undefined-input": return;
				case "repaired-parse":
				case "successful-parse": return result.value === void 0 ? void 0 : { partial: result.value };
			}
		},
		createElementStreamTransform() {}
	};
};
async function parseToolCall({ toolCall, tools, repairToolCall, system, messages }) {
	try {
		if (tools == null) {
			if (toolCall.providerExecuted && toolCall.dynamic) return await parseProviderExecutedDynamicToolCall(toolCall);
			throw new NoSuchToolError({ toolName: toolCall.toolName });
		}
		try {
			return await doParseToolCall({
				toolCall,
				tools
			});
		} catch (error) {
			if (repairToolCall == null || !(NoSuchToolError.isInstance(error) || InvalidToolInputError.isInstance(error))) throw error;
			let repairedToolCall = null;
			try {
				repairedToolCall = await repairToolCall({
					toolCall,
					tools,
					inputSchema: async ({ toolName }) => {
						const { inputSchema } = tools[toolName];
						return await asSchema(inputSchema).jsonSchema;
					},
					system,
					messages,
					error
				});
			} catch (repairError) {
				throw new ToolCallRepairError({
					cause: repairError,
					originalError: error
				});
			}
			if (repairedToolCall == null) throw error;
			return await doParseToolCall({
				toolCall: repairedToolCall,
				tools
			});
		}
	} catch (error) {
		const parsedInput = await safeParseJSON({ text: toolCall.input });
		const input = parsedInput.success ? parsedInput.value : toolCall.input;
		const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
		return {
			type: "tool-call",
			toolCallId: toolCall.toolCallId,
			toolName: toolCall.toolName,
			input,
			dynamic: true,
			invalid: true,
			error,
			title: tool2 == null ? void 0 : tool2.title,
			providerExecuted: toolCall.providerExecuted,
			providerMetadata: toolCall.providerMetadata,
			...(tool2 == null ? void 0 : tool2.metadata) != null ? { toolMetadata: tool2.metadata } : {}
		};
	}
}
async function parseProviderExecutedDynamicToolCall(toolCall) {
	const parseResult = toolCall.input.trim() === "" ? {
		success: true,
		value: {}
	} : await safeParseJSON({ text: toolCall.input });
	if (parseResult.success === false) throw new InvalidToolInputError({
		toolName: toolCall.toolName,
		toolInput: toolCall.input,
		cause: parseResult.error
	});
	return {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: parseResult.value,
		providerExecuted: true,
		dynamic: true,
		providerMetadata: toolCall.providerMetadata
	};
}
async function doParseToolCall({ toolCall, tools }) {
	const toolName = toolCall.toolName;
	const tool2 = tools[toolName];
	if (tool2 == null) {
		if (toolCall.providerExecuted && toolCall.dynamic) return await parseProviderExecutedDynamicToolCall(toolCall);
		throw new NoSuchToolError({
			toolName: toolCall.toolName,
			availableTools: Object.keys(tools)
		});
	}
	const schema = asSchema(tool2.inputSchema);
	const parseResult = toolCall.input.trim() === "" ? await safeValidateTypes({
		value: {},
		schema
	}) : await safeParseJSON({
		text: toolCall.input,
		schema
	});
	if (parseResult.success === false) throw new InvalidToolInputError({
		toolName,
		toolInput: toolCall.input,
		cause: parseResult.error
	});
	return tool2.type === "dynamic" ? {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName: toolCall.toolName,
		input: parseResult.value,
		providerExecuted: toolCall.providerExecuted,
		providerMetadata: toolCall.providerMetadata,
		...tool2.metadata != null ? { toolMetadata: tool2.metadata } : {},
		dynamic: true,
		title: tool2.title
	} : {
		type: "tool-call",
		toolCallId: toolCall.toolCallId,
		toolName,
		input: parseResult.value,
		providerExecuted: toolCall.providerExecuted,
		providerMetadata: toolCall.providerMetadata,
		...tool2.metadata != null ? { toolMetadata: tool2.metadata } : {},
		title: tool2.title
	};
}
var DefaultStepResult = class {
	constructor({ stepNumber, model, functionId, metadata, experimental_context, content, finishReason, rawFinishReason, usage, warnings, request, response, providerMetadata }) {
		this.stepNumber = stepNumber;
		this.model = model;
		this.functionId = functionId;
		this.metadata = metadata;
		this.experimental_context = experimental_context;
		this.content = content;
		this.finishReason = finishReason;
		this.rawFinishReason = rawFinishReason;
		this.usage = usage;
		this.warnings = warnings;
		this.request = request;
		this.response = response;
		this.providerMetadata = providerMetadata;
	}
	get text() {
		return this.content.filter((part) => part.type === "text").map((part) => part.text).join("");
	}
	get reasoning() {
		return this.content.filter((part) => part.type === "reasoning");
	}
	get reasoningText() {
		return this.reasoning.length === 0 ? void 0 : this.reasoning.map((part) => part.text).join("");
	}
	get files() {
		return this.content.filter((part) => part.type === "file").map((part) => part.file);
	}
	get sources() {
		return this.content.filter((part) => part.type === "source");
	}
	get toolCalls() {
		return this.content.filter((part) => part.type === "tool-call");
	}
	get staticToolCalls() {
		return this.toolCalls.filter((toolCall) => toolCall.dynamic !== true);
	}
	get dynamicToolCalls() {
		return this.toolCalls.filter((toolCall) => toolCall.dynamic === true);
	}
	get toolResults() {
		return this.content.filter((part) => part.type === "tool-result");
	}
	get staticToolResults() {
		return this.toolResults.filter((toolResult) => toolResult.dynamic !== true);
	}
	get dynamicToolResults() {
		return this.toolResults.filter((toolResult) => toolResult.dynamic === true);
	}
};
function stepCountIs(stepCount) {
	return ({ steps }) => steps.length === stepCount;
}
async function isStopConditionMet({ stopConditions, steps }) {
	return (await Promise.all(stopConditions.map((condition) => condition({ steps })))).some((result) => result);
}
async function toResponseMessages({ content: inputContent, tools }) {
	const responseMessages = [];
	const content = [];
	for (const part of inputContent) {
		if (part.type === "source") continue;
		if ((part.type === "tool-result" || part.type === "tool-error") && !part.providerExecuted) continue;
		if (part.type === "text" && part.text.length === 0) continue;
		switch (part.type) {
			case "text":
				content.push({
					type: "text",
					text: part.text,
					providerOptions: part.providerMetadata
				});
				break;
			case "reasoning":
				content.push({
					type: "reasoning",
					text: part.text,
					providerOptions: part.providerMetadata
				});
				break;
			case "file":
				content.push({
					type: "file",
					data: part.file.base64,
					mediaType: part.file.mediaType,
					providerOptions: part.providerMetadata
				});
				break;
			case "tool-call":
				content.push({
					type: "tool-call",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					input: part.invalid && typeof part.input !== "object" ? {} : part.input,
					providerExecuted: part.providerExecuted,
					providerOptions: part.providerMetadata
				});
				break;
			case "tool-result": {
				const output = await createToolModelOutput({
					toolCallId: part.toolCallId,
					input: part.input,
					tool: tools == null ? void 0 : tools[part.toolName],
					output: part.output,
					errorMode: "none"
				});
				content.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					output,
					providerOptions: part.providerMetadata
				});
				break;
			}
			case "tool-error": {
				const output = await createToolModelOutput({
					toolCallId: part.toolCallId,
					input: part.input,
					tool: tools == null ? void 0 : tools[part.toolName],
					output: part.error,
					errorMode: "json"
				});
				content.push({
					type: "tool-result",
					toolCallId: part.toolCallId,
					toolName: part.toolName,
					output,
					providerOptions: part.providerMetadata
				});
				break;
			}
			case "tool-approval-request":
				content.push({
					type: "tool-approval-request",
					approvalId: part.approvalId,
					toolCallId: part.toolCall.toolCallId
				});
				break;
		}
	}
	if (content.length > 0) responseMessages.push({
		role: "assistant",
		content
	});
	const toolResultContent = [];
	for (const part of inputContent) {
		if (!(part.type === "tool-result" || part.type === "tool-error") || part.providerExecuted) continue;
		const output = await createToolModelOutput({
			toolCallId: part.toolCallId,
			input: part.input,
			tool: tools == null ? void 0 : tools[part.toolName],
			output: part.type === "tool-result" ? part.output : part.error,
			errorMode: part.type === "tool-error" ? "text" : "none"
		});
		toolResultContent.push({
			type: "tool-result",
			toolCallId: part.toolCallId,
			toolName: part.toolName,
			output,
			...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
		});
	}
	if (toolResultContent.length > 0) responseMessages.push({
		role: "tool",
		content: toolResultContent
	});
	return responseMessages;
}
function mergeAbortSignals(...signals) {
	const validSignals = signals.filter((signal) => signal != null);
	if (validSignals.length === 0) return;
	if (validSignals.length === 1) return validSignals[0];
	const controller = new AbortController();
	for (const signal of validSignals) {
		if (signal.aborted) {
			controller.abort(signal.reason);
			return controller.signal;
		}
		signal.addEventListener("abort", () => {
			controller.abort(signal.reason);
		}, { once: true });
	}
	return controller.signal;
}
createIdGenerator({
	prefix: "aitxt",
	size: 24
});
function prepareHeaders(headers, defaultHeaders) {
	const responseHeaders = new Headers(headers != null ? headers : {});
	for (const [key, value] of Object.entries(defaultHeaders)) if (!responseHeaders.has(key)) responseHeaders.set(key, value);
	return responseHeaders;
}
function createTextStreamResponse({ status, statusText, headers, textStream }) {
	return new Response(textStream.pipeThrough(new TextEncoderStream()), {
		status: status != null ? status : 200,
		statusText,
		headers: prepareHeaders(headers, { "content-type": "text/plain; charset=utf-8" })
	});
}
function writeToServerResponse({ response, status, statusText, headers, stream }) {
	const statusCode = status != null ? status : 200;
	if (statusText !== void 0) response.writeHead(statusCode, statusText, headers);
	else response.writeHead(statusCode, headers);
	const reader = stream.getReader();
	const read = async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				if (!response.write(value)) await new Promise((resolve3) => {
					response.once("drain", resolve3);
				});
			}
		} catch (error) {
			throw error;
		} finally {
			response.end();
		}
	};
	read();
}
function pipeTextStreamToResponse({ response, status, statusText, headers, textStream }) {
	writeToServerResponse({
		response,
		status,
		statusText,
		headers: Object.fromEntries(prepareHeaders(headers, { "content-type": "text/plain; charset=utf-8" }).entries()),
		stream: textStream.pipeThrough(new TextEncoderStream())
	});
}
var JsonToSseTransformStream = class extends TransformStream {
	constructor() {
		super({
			transform(part, controller) {
				controller.enqueue(`data: ${JSON.stringify(part)}

`);
			},
			flush(controller) {
				controller.enqueue("data: [DONE]\n\n");
			}
		});
	}
};
var UI_MESSAGE_STREAM_HEADERS = {
	"content-type": "text/event-stream",
	"cache-control": "no-cache",
	connection: "keep-alive",
	"x-vercel-ai-ui-message-stream": "v1",
	"x-accel-buffering": "no"
};
function createUIMessageStreamResponse({ status, statusText, headers, stream, consumeSseStream }) {
	let sseStream = stream.pipeThrough(new JsonToSseTransformStream());
	if (consumeSseStream) {
		const [stream1, stream2] = sseStream.tee();
		sseStream = stream1;
		consumeSseStream({ stream: stream2 });
	}
	return new Response(sseStream.pipeThrough(new TextEncoderStream()), {
		status,
		statusText,
		headers: prepareHeaders(headers, UI_MESSAGE_STREAM_HEADERS)
	});
}
function getResponseUIMessageId({ originalMessages, responseMessageId }) {
	if (originalMessages == null) return;
	const lastMessage = originalMessages[originalMessages.length - 1];
	return (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage.id : typeof responseMessageId === "function" ? responseMessageId() : responseMessageId;
}
record(string(), jsonValueSchema.optional());
function isDataUIMessageChunk(chunk) {
	return chunk.type.startsWith("data-");
}
function isDataUIPart(part) {
	return part.type.startsWith("data-");
}
function isTextUIPart(part) {
	return part.type === "text";
}
function isFileUIPart(part) {
	return part.type === "file";
}
function isReasoningUIPart(part) {
	return part.type === "reasoning";
}
function isStaticToolUIPart(part) {
	return part.type.startsWith("tool-");
}
function isDynamicToolUIPart(part) {
	return part.type === "dynamic-tool";
}
function isToolUIPart(part) {
	return isStaticToolUIPart(part) || isDynamicToolUIPart(part);
}
function getStaticToolName(part) {
	return part.type.split("-").slice(1).join("-");
}
function getToolName(part) {
	return isDynamicToolUIPart(part) ? part.toolName : getStaticToolName(part);
}
function createStreamingUIMessageState({ lastMessage, messageId }) {
	return {
		message: (lastMessage == null ? void 0 : lastMessage.role) === "assistant" ? lastMessage : {
			id: messageId,
			metadata: void 0,
			role: "assistant",
			parts: []
		},
		activeTextParts: {},
		activeReasoningParts: {},
		partialToolCalls: {}
	};
}
function processUIMessageStream({ stream, messageMetadataSchema, dataPartSchemas, runUpdateMessageJob, onError, onToolCall, onData }) {
	return stream.pipeThrough(new TransformStream({ async transform(chunk, controller) {
		await runUpdateMessageJob(async ({ state, write }) => {
			var _a21, _b, _c, _d;
			function getToolInvocation(toolCallId) {
				const toolInvocation = state.message.parts.filter(isToolUIPart).find((invocation) => invocation.toolCallId === toolCallId);
				if (toolInvocation == null) throw new UIMessageStreamError({
					chunkType: "tool-invocation",
					chunkId: toolCallId,
					message: `No tool invocation found for tool call ID "${toolCallId}".`
				});
				return toolInvocation;
			}
			function updateToolPart(options) {
				var _a22;
				const part = state.message.parts.find((part2) => isStaticToolUIPart(part2) && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = anyOptions.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = (_a22 = anyOptions.providerExecuted) != null ? _a22 : part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: `tool-${options.toolName}`,
					toolCallId: options.toolCallId,
					state: options.state,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					input: anyOptions.input,
					output: anyOptions.output,
					rawInput: anyOptions.rawInput,
					errorText: anyOptions.errorText,
					providerExecuted: anyOptions.providerExecuted,
					preliminary: anyOptions.preliminary,
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			function updateDynamicToolPart(options) {
				var _a22, _b2;
				const part = state.message.parts.find((part2) => part2.type === "dynamic-tool" && part2.toolCallId === options.toolCallId);
				const anyOptions = options;
				const anyPart = part;
				if (part != null) {
					part.state = options.state;
					anyPart.toolName = options.toolName;
					anyPart.input = anyOptions.input;
					anyPart.output = anyOptions.output;
					anyPart.errorText = anyOptions.errorText;
					anyPart.rawInput = (_a22 = anyOptions.rawInput) != null ? _a22 : anyPart.rawInput;
					anyPart.preliminary = anyOptions.preliminary;
					if (options.title !== void 0) anyPart.title = options.title;
					if (options.toolMetadata !== void 0) anyPart.toolMetadata = options.toolMetadata;
					anyPart.providerExecuted = (_b2 = anyOptions.providerExecuted) != null ? _b2 : part.providerExecuted;
					const providerMetadata = anyOptions.providerMetadata;
					if (providerMetadata != null) if (options.state === "output-available" || options.state === "output-error") {
						const resultPart = part;
						resultPart.resultProviderMetadata = providerMetadata;
					} else part.callProviderMetadata = providerMetadata;
				} else state.message.parts.push({
					type: "dynamic-tool",
					toolName: options.toolName,
					toolCallId: options.toolCallId,
					state: options.state,
					input: anyOptions.input,
					output: anyOptions.output,
					errorText: anyOptions.errorText,
					preliminary: anyOptions.preliminary,
					providerExecuted: anyOptions.providerExecuted,
					title: options.title,
					...options.toolMetadata !== void 0 ? { toolMetadata: options.toolMetadata } : {},
					...anyOptions.providerMetadata != null && (options.state === "output-available" || options.state === "output-error") ? { resultProviderMetadata: anyOptions.providerMetadata } : {},
					...anyOptions.providerMetadata != null && !(options.state === "output-available" || options.state === "output-error") ? { callProviderMetadata: anyOptions.providerMetadata } : {}
				});
			}
			async function updateMessageMetadata(metadata) {
				if (metadata != null) {
					const mergedMetadata = state.message.metadata != null ? mergeObjects(state.message.metadata, metadata) : metadata;
					if (messageMetadataSchema != null) await validateTypes({
						value: mergedMetadata,
						schema: messageMetadataSchema,
						context: {
							field: "message.metadata",
							entityId: state.message.id
						}
					});
					state.message.metadata = mergedMetadata;
				}
			}
			switch (chunk.type) {
				case "text-start": {
					const textPart = {
						type: "text",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeTextParts[chunk.id] = textPart;
					state.message.parts.push(textPart);
					write();
					break;
				}
				case "text-delta": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-delta",
						chunkId: chunk.id,
						message: `Received text-delta for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`
					});
					textPart.text += chunk.delta;
					textPart.providerMetadata = (_a21 = chunk.providerMetadata) != null ? _a21 : textPart.providerMetadata;
					write();
					break;
				}
				case "text-end": {
					const textPart = state.activeTextParts[chunk.id];
					if (textPart == null) throw new UIMessageStreamError({
						chunkType: "text-end",
						chunkId: chunk.id,
						message: `Received text-end for missing text part with ID "${chunk.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`
					});
					textPart.state = "done";
					textPart.providerMetadata = (_b = chunk.providerMetadata) != null ? _b : textPart.providerMetadata;
					delete state.activeTextParts[chunk.id];
					write();
					break;
				}
				case "reasoning-start": {
					const reasoningPart = {
						type: "reasoning",
						text: "",
						providerMetadata: chunk.providerMetadata,
						state: "streaming"
					};
					state.activeReasoningParts[chunk.id] = reasoningPart;
					state.message.parts.push(reasoningPart);
					write();
					break;
				}
				case "reasoning-delta": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-delta",
						chunkId: chunk.id,
						message: `Received reasoning-delta for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`
					});
					reasoningPart.text += chunk.delta;
					reasoningPart.providerMetadata = (_c = chunk.providerMetadata) != null ? _c : reasoningPart.providerMetadata;
					write();
					break;
				}
				case "reasoning-end": {
					const reasoningPart = state.activeReasoningParts[chunk.id];
					if (reasoningPart == null) throw new UIMessageStreamError({
						chunkType: "reasoning-end",
						chunkId: chunk.id,
						message: `Received reasoning-end for missing reasoning part with ID "${chunk.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`
					});
					reasoningPart.providerMetadata = (_d = chunk.providerMetadata) != null ? _d : reasoningPart.providerMetadata;
					reasoningPart.state = "done";
					delete state.activeReasoningParts[chunk.id];
					write();
					break;
				}
				case "file":
					state.message.parts.push({
						type: "file",
						mediaType: chunk.mediaType,
						url: chunk.url,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					write();
					break;
				case "source-url":
					state.message.parts.push({
						type: "source-url",
						sourceId: chunk.sourceId,
						url: chunk.url,
						title: chunk.title,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "source-document":
					state.message.parts.push({
						type: "source-document",
						sourceId: chunk.sourceId,
						mediaType: chunk.mediaType,
						title: chunk.title,
						filename: chunk.filename,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				case "tool-input-start": {
					const toolInvocations = state.message.parts.filter(isStaticToolUIPart);
					state.partialToolCalls[chunk.toolCallId] = {
						text: "",
						toolName: chunk.toolName,
						index: toolInvocations.length,
						dynamic: chunk.dynamic,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					};
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-streaming",
						input: void 0,
						providerExecuted: chunk.providerExecuted,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata,
						providerMetadata: chunk.providerMetadata
					});
					write();
					break;
				}
				case "tool-input-delta": {
					const partialToolCall = state.partialToolCalls[chunk.toolCallId];
					if (partialToolCall == null) throw new UIMessageStreamError({
						chunkType: "tool-input-delta",
						chunkId: chunk.toolCallId,
						message: `Received tool-input-delta for missing tool call with ID "${chunk.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`
					});
					partialToolCall.text += chunk.inputTextDelta;
					const { value: partialArgs } = await parsePartialJson(partialToolCall.text);
					if (partialToolCall.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: partialToolCall.toolName,
						state: "input-streaming",
						input: partialArgs,
						title: partialToolCall.title,
						toolMetadata: partialToolCall.toolMetadata
					});
					write();
					break;
				}
				case "tool-input-available":
					if (chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "input-available",
						input: chunk.input,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: chunk.title,
						toolMetadata: chunk.toolMetadata
					});
					write();
					if (onToolCall && !chunk.providerExecuted) await onToolCall({ toolCall: chunk });
					break;
				case "tool-input-error": {
					const existingPart = state.message.parts.filter(isToolUIPart).find((p) => p.toolCallId === chunk.toolCallId);
					if (existingPart != null ? existingPart.type === "dynamic-tool" : !!chunk.dynamic) updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: chunk.toolName,
						state: "output-error",
						input: void 0,
						rawInput: chunk.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						toolMetadata: chunk.toolMetadata
					});
					write();
					break;
				}
				case "tool-approval-request": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "approval-requested";
					toolInvocation.approval = { id: chunk.approvalId };
					write();
					break;
				}
				case "tool-output-denied": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					toolInvocation.state = "output-denied";
					write();
					break;
				}
				case "tool-output-available": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						preliminary: chunk.preliminary,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-available",
						input: toolInvocation.input,
						output: chunk.output,
						providerExecuted: chunk.providerExecuted,
						preliminary: chunk.preliminary,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					write();
					break;
				}
				case "tool-output-error": {
					const toolInvocation = getToolInvocation(chunk.toolCallId);
					if (toolInvocation.type === "dynamic-tool") updateDynamicToolPart({
						toolCallId: chunk.toolCallId,
						toolName: toolInvocation.toolName,
						state: "output-error",
						input: toolInvocation.input,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					else updateToolPart({
						toolCallId: chunk.toolCallId,
						toolName: getStaticToolName(toolInvocation),
						state: "output-error",
						input: toolInvocation.input,
						rawInput: toolInvocation.rawInput,
						errorText: chunk.errorText,
						providerExecuted: chunk.providerExecuted,
						providerMetadata: chunk.providerMetadata,
						title: toolInvocation.title,
						toolMetadata: toolInvocation.toolMetadata
					});
					write();
					break;
				}
				case "start-step":
					state.message.parts.push({ type: "step-start" });
					break;
				case "finish-step":
					state.activeTextParts = {};
					state.activeReasoningParts = {};
					break;
				case "start":
					if (chunk.messageId != null) state.message.id = chunk.messageId;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageId != null || chunk.messageMetadata != null) write();
					break;
				case "finish":
					if (chunk.finishReason != null) state.finishReason = chunk.finishReason;
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "message-metadata":
					await updateMessageMetadata(chunk.messageMetadata);
					if (chunk.messageMetadata != null) write();
					break;
				case "error":
					onError?.(new Error(chunk.errorText));
					break;
				default: if (isDataUIMessageChunk(chunk)) {
					if ((dataPartSchemas == null ? void 0 : dataPartSchemas[chunk.type]) != null) {
						const partIdx = state.message.parts.findIndex((p) => "id" in p && "data" in p && p.id === chunk.id && p.type === chunk.type);
						const actualPartIdx = partIdx >= 0 ? partIdx : state.message.parts.length;
						await validateTypes({
							value: chunk.data,
							schema: dataPartSchemas[chunk.type],
							context: {
								field: `message.parts[${actualPartIdx}].data`,
								entityName: chunk.type,
								entityId: chunk.id
							}
						});
					}
					const dataChunk = chunk;
					if (dataChunk.transient) {
						onData?.(dataChunk);
						break;
					}
					const existingUIPart = dataChunk.id != null ? state.message.parts.find((chunkArg) => dataChunk.type === chunkArg.type && dataChunk.id === chunkArg.id) : void 0;
					if (existingUIPart != null) existingUIPart.data = dataChunk.data;
					else state.message.parts.push(dataChunk);
					onData?.(dataChunk);
					write();
				}
			}
			controller.enqueue(chunk);
		});
	} }));
}
function handleUIMessageStreamFinish({ messageId, originalMessages = [], onStepFinish, onFinish, onError, stream }) {
	let lastMessage = originalMessages == null ? void 0 : originalMessages[originalMessages.length - 1];
	if ((lastMessage == null ? void 0 : lastMessage.role) !== "assistant") lastMessage = void 0;
	else messageId = lastMessage.id;
	let isAborted = false;
	const idInjectedStream = stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
		if (chunk.type === "start") {
			const startChunk = chunk;
			if (startChunk.messageId == null && messageId != null) startChunk.messageId = messageId;
		}
		if (chunk.type === "abort") isAborted = true;
		controller.enqueue(chunk);
	} }));
	if (onFinish == null && onStepFinish == null) return idInjectedStream;
	const state = createStreamingUIMessageState({
		lastMessage: lastMessage ? structuredClone(lastMessage) : void 0,
		messageId: messageId != null ? messageId : ""
	});
	const runUpdateMessageJob = async (job) => {
		await job({
			state,
			write: () => {}
		});
	};
	let finishCalled = false;
	const callOnFinish = async () => {
		if (finishCalled || !onFinish) return;
		finishCalled = true;
		const isContinuation = state.message.id === (lastMessage == null ? void 0 : lastMessage.id);
		await onFinish({
			isAborted,
			isContinuation,
			responseMessage: state.message,
			messages: [...isContinuation ? originalMessages.slice(0, -1) : originalMessages, state.message],
			finishReason: state.finishReason
		});
	};
	const callOnStepFinish = async () => {
		if (!onStepFinish) return;
		const isContinuation = state.message.id === (lastMessage == null ? void 0 : lastMessage.id);
		try {
			await onStepFinish({
				isContinuation,
				responseMessage: structuredClone(state.message),
				messages: [...isContinuation ? originalMessages.slice(0, -1) : originalMessages, structuredClone(state.message)]
			});
		} catch (error) {
			onError(error);
		}
	};
	return processUIMessageStream({
		stream: idInjectedStream,
		runUpdateMessageJob,
		onError
	}).pipeThrough(new TransformStream({
		async transform(chunk, controller) {
			if (chunk.type === "finish-step") await callOnStepFinish();
			controller.enqueue(chunk);
		},
		async cancel() {
			await callOnFinish();
		},
		async flush() {
			await callOnFinish();
		}
	}));
}
function pipeUIMessageStreamToResponse({ response, status, statusText, headers, stream, consumeSseStream }) {
	let sseStream = stream.pipeThrough(new JsonToSseTransformStream());
	if (consumeSseStream) {
		const [stream1, stream2] = sseStream.tee();
		sseStream = stream1;
		consumeSseStream({ stream: stream2 });
	}
	writeToServerResponse({
		response,
		status,
		statusText,
		headers: Object.fromEntries(prepareHeaders(headers, UI_MESSAGE_STREAM_HEADERS).entries()),
		stream: sseStream.pipeThrough(new TextEncoderStream())
	});
}
function createAsyncIterableStream(source) {
	const stream = source.pipeThrough(new TransformStream());
	stream[Symbol.asyncIterator] = function() {
		const reader = this.getReader();
		let finished = false;
		async function cleanup(cancelStream) {
			var _a21;
			if (finished) return;
			finished = true;
			try {
				if (cancelStream) await ((_a21 = reader.cancel) == null ? void 0 : _a21.call(reader));
			} finally {
				try {
					reader.releaseLock();
				} catch (e) {}
			}
		}
		return {
			/**
			* Reads the next chunk from the stream.
			* @returns A promise resolving to the next IteratorResult.
			*/
			async next() {
				if (finished) return {
					done: true,
					value: void 0
				};
				const { done, value } = await reader.read();
				if (done) {
					await cleanup(true);
					return {
						done: true,
						value: void 0
					};
				}
				return {
					done: false,
					value
				};
			},
			/**
			* May be called on early exit (e.g., break from for-await) or after completion.
			* Ensures the stream is cancelled and resources are released.
			* @returns A promise resolving to a completed IteratorResult.
			*/
			async return() {
				await cleanup(true);
				return {
					done: true,
					value: void 0
				};
			},
			/**
			* Called on early exit with error.
			* Ensures the stream is cancelled and resources are released, then rethrows the error.
			* @param err The error to throw.
			* @returns A promise that rejects with the provided error.
			*/
			async throw(err) {
				await cleanup(true);
				throw err;
			}
		};
	};
	return stream;
}
async function consumeStream({ stream, onError }) {
	const reader = stream.getReader();
	try {
		while (true) {
			const { done } = await reader.read();
			if (done) break;
		}
	} catch (error) {
		onError?.(error);
	} finally {
		reader.releaseLock();
	}
}
function createResolvablePromise() {
	let resolve3;
	let reject;
	return {
		promise: new Promise((res, rej) => {
			resolve3 = res;
			reject = rej;
		}),
		resolve: resolve3,
		reject
	};
}
function createStitchableStream() {
	let innerStreamReaders = [];
	let controller = null;
	let isClosed = false;
	let waitForNewStream = createResolvablePromise();
	const terminate = () => {
		isClosed = true;
		waitForNewStream.resolve();
		innerStreamReaders.forEach((reader) => reader.cancel());
		innerStreamReaders = [];
		controller?.close();
	};
	const processPull = async () => {
		if (isClosed && innerStreamReaders.length === 0) {
			controller?.close();
			return;
		}
		if (innerStreamReaders.length === 0) {
			waitForNewStream = createResolvablePromise();
			await waitForNewStream.promise;
			return processPull();
		}
		try {
			const { value, done } = await innerStreamReaders[0].read();
			if (done) {
				innerStreamReaders.shift();
				if (innerStreamReaders.length === 0 && isClosed) controller?.close();
				else await processPull();
			} else controller?.enqueue(value);
		} catch (error) {
			controller?.error(error);
			innerStreamReaders.shift();
			terminate();
		}
	};
	return {
		stream: new ReadableStream({
			start(controllerParam) {
				controller = controllerParam;
			},
			pull: processPull,
			async cancel() {
				for (const reader of innerStreamReaders) await reader.cancel();
				innerStreamReaders = [];
				isClosed = true;
			}
		}),
		addStream: (innerStream) => {
			if (isClosed) throw new Error("Cannot add inner stream: outer stream is closed");
			innerStreamReaders.push(innerStream.getReader());
			waitForNewStream.resolve();
		},
		/**
		* Gracefully close the outer stream. This will let the inner streams
		* finish processing and then close the outer stream.
		*/
		close: () => {
			isClosed = true;
			waitForNewStream.resolve();
			if (innerStreamReaders.length === 0) controller?.close();
		},
		/**
		* Immediately close the outer stream. This will cancel all inner streams
		* and close the outer stream.
		*/
		terminate
	};
}
function runToolsTransformation({ tools, generatorStream, tracer, telemetry, system, messages, abortSignal, repairToolCall, experimental_context, generateId: generateId2, stepNumber, model, onToolCallStart, onToolCallFinish }) {
	let toolResultsStreamController = null;
	const toolResultsStream = new ReadableStream({ start(controller) {
		toolResultsStreamController = controller;
	} });
	const outstandingToolResults = /* @__PURE__ */ new Set();
	const toolInputs = /* @__PURE__ */ new Map();
	const toolCallsByToolCallId = /* @__PURE__ */ new Map();
	let canClose = false;
	let finishChunk = void 0;
	function attemptClose() {
		if (canClose && outstandingToolResults.size === 0) {
			if (finishChunk != null) toolResultsStreamController.enqueue(finishChunk);
			toolResultsStreamController.close();
		}
	}
	const forwardStream = new TransformStream({
		async transform(chunk, controller) {
			const chunkType = chunk.type;
			switch (chunkType) {
				case "stream-start":
				case "text-start":
				case "text-delta":
				case "text-end":
				case "reasoning-start":
				case "reasoning-delta":
				case "reasoning-end":
				case "tool-input-start":
				case "tool-input-delta":
				case "tool-input-end":
				case "source":
				case "response-metadata":
				case "error":
				case "raw":
					controller.enqueue(chunk);
					break;
				case "file":
					controller.enqueue({
						type: "file",
						file: new DefaultGeneratedFileWithType({
							data: chunk.data,
							mediaType: chunk.mediaType
						}),
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {}
					});
					break;
				case "finish":
					finishChunk = {
						type: "finish",
						finishReason: chunk.finishReason.unified,
						rawFinishReason: chunk.finishReason.raw,
						usage: asLanguageModelUsage(chunk.usage),
						providerMetadata: chunk.providerMetadata
					};
					break;
				case "tool-approval-request": {
					const toolCall = toolCallsByToolCallId.get(chunk.toolCallId);
					if (toolCall == null) {
						toolResultsStreamController.enqueue({
							type: "error",
							error: new ToolCallNotFoundForApprovalError({
								toolCallId: chunk.toolCallId,
								approvalId: chunk.approvalId
							})
						});
						break;
					}
					controller.enqueue({
						type: "tool-approval-request",
						approvalId: chunk.approvalId,
						toolCall
					});
					break;
				}
				case "tool-call":
					try {
						const toolCall = await parseToolCall({
							toolCall: chunk,
							tools,
							repairToolCall,
							system,
							messages
						});
						toolCallsByToolCallId.set(toolCall.toolCallId, toolCall);
						controller.enqueue(toolCall);
						if (toolCall.invalid) {
							toolResultsStreamController.enqueue({
								type: "tool-error",
								toolCallId: toolCall.toolCallId,
								toolName: toolCall.toolName,
								input: toolCall.input,
								error: getErrorMessage(toolCall.error),
								dynamic: true,
								title: toolCall.title,
								...toolCall.toolMetadata != null ? { toolMetadata: toolCall.toolMetadata } : {}
							});
							break;
						}
						const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
						if (tool2 == null) break;
						if (tool2.onInputAvailable != null) await tool2.onInputAvailable({
							input: toolCall.input,
							toolCallId: toolCall.toolCallId,
							messages,
							abortSignal,
							experimental_context
						});
						if (await isApprovalNeeded({
							tool: tool2,
							toolCall,
							messages,
							experimental_context
						})) {
							toolResultsStreamController.enqueue({
								type: "tool-approval-request",
								approvalId: generateId2(),
								toolCall
							});
							break;
						}
						toolInputs.set(toolCall.toolCallId, toolCall.input);
						if (tool2.execute != null && toolCall.providerExecuted !== true) {
							const toolExecutionId = generateId2();
							outstandingToolResults.add(toolExecutionId);
							executeToolCall({
								toolCall,
								tools,
								tracer,
								telemetry,
								messages,
								abortSignal,
								experimental_context,
								stepNumber,
								model,
								onToolCallStart,
								onToolCallFinish,
								onPreliminaryToolResult: (result) => {
									toolResultsStreamController.enqueue(result);
								}
							}).then((result) => {
								toolResultsStreamController.enqueue(result);
							}).catch((error) => {
								toolResultsStreamController.enqueue({
									type: "error",
									error
								});
							}).finally(() => {
								outstandingToolResults.delete(toolExecutionId);
								attemptClose();
							});
						}
					} catch (error) {
						toolResultsStreamController.enqueue({
							type: "error",
							error
						});
					}
					break;
				case "tool-result": {
					const toolName = chunk.toolName;
					const toolCall = toolCallsByToolCallId.get(chunk.toolCallId);
					if (chunk.isError) toolResultsStreamController.enqueue({
						type: "tool-error",
						toolCallId: chunk.toolCallId,
						toolName,
						input: toolInputs.get(chunk.toolCallId),
						providerExecuted: true,
						error: chunk.result,
						dynamic: chunk.dynamic,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {},
						...(toolCall == null ? void 0 : toolCall.toolMetadata) != null ? { toolMetadata: toolCall.toolMetadata } : {}
					});
					else controller.enqueue({
						type: "tool-result",
						toolCallId: chunk.toolCallId,
						toolName,
						input: toolInputs.get(chunk.toolCallId),
						output: chunk.result,
						providerExecuted: true,
						dynamic: chunk.dynamic,
						...chunk.providerMetadata != null ? { providerMetadata: chunk.providerMetadata } : {},
						...(toolCall == null ? void 0 : toolCall.toolMetadata) != null ? { toolMetadata: toolCall.toolMetadata } : {}
					});
					break;
				}
				default: throw new Error(`Unhandled chunk type: ${chunkType}`);
			}
		},
		flush() {
			canClose = true;
			attemptClose();
		}
	});
	return new ReadableStream({ async start(controller) {
		return Promise.all([generatorStream.pipeThrough(forwardStream).pipeTo(new WritableStream({
			write(chunk) {
				controller.enqueue(chunk);
			},
			close() {}
		})), toolResultsStream.pipeTo(new WritableStream({
			write(chunk) {
				controller.enqueue(chunk);
			},
			close() {
				controller.close();
			}
		}))]);
	} });
}
var originalGenerateId2 = createIdGenerator({
	prefix: "aitxt",
	size: 24
});
function streamText({ model, tools, toolChoice, system, prompt, messages, allowSystemInMessages, maxRetries, abortSignal, timeout, headers, stopWhen = stepCountIs(1), experimental_output, output = experimental_output, experimental_telemetry: telemetry, prepareStep, providerOptions, experimental_activeTools, activeTools = experimental_activeTools, experimental_repairToolCall: repairToolCall, experimental_transform: transform, experimental_download: download2, includeRawChunks = false, onChunk, onError = ({ error }) => {
	console.error(error);
}, onFinish, onAbort, onStepFinish, experimental_onStart: onStart, experimental_onStepStart: onStepStart, experimental_onToolCallStart: onToolCallStart, experimental_onToolCallFinish: onToolCallFinish, experimental_context, experimental_include: include, _internal: { now: now2 = now, generateId: generateId2 = originalGenerateId2 } = {}, ...settings }) {
	const totalTimeoutMs = getTotalTimeoutMs(timeout);
	const stepTimeoutMs = getStepTimeoutMs(timeout);
	const chunkTimeoutMs = getChunkTimeoutMs(timeout);
	const stepAbortController = stepTimeoutMs != null ? new AbortController() : void 0;
	const chunkAbortController = chunkTimeoutMs != null ? new AbortController() : void 0;
	return new DefaultStreamTextResult({
		model: resolveLanguageModel(model),
		telemetry,
		headers,
		settings,
		maxRetries,
		abortSignal: mergeAbortSignals(abortSignal, totalTimeoutMs != null ? AbortSignal.timeout(totalTimeoutMs) : void 0, stepAbortController == null ? void 0 : stepAbortController.signal, chunkAbortController == null ? void 0 : chunkAbortController.signal),
		stepTimeoutMs,
		stepAbortController,
		chunkTimeoutMs,
		chunkAbortController,
		system,
		prompt,
		messages,
		allowSystemInMessages,
		tools,
		toolChoice,
		transforms: asArray(transform),
		activeTools,
		repairToolCall,
		stopConditions: asArray(stopWhen),
		output,
		providerOptions,
		prepareStep,
		includeRawChunks,
		timeout,
		stopWhen,
		originalAbortSignal: abortSignal,
		onChunk,
		onError,
		onFinish,
		onAbort,
		onStepFinish,
		onStart,
		onStepStart,
		onToolCallStart,
		onToolCallFinish,
		now: now2,
		generateId: generateId2,
		experimental_context,
		download: download2,
		include
	});
}
function createOutputTransformStream(output) {
	let firstTextChunkId = void 0;
	let text2 = "";
	let textChunk = "";
	let textProviderMetadata = void 0;
	let lastPublishedValue = "";
	function publishTextChunk({ controller, partialOutput = void 0 }) {
		controller.enqueue({
			part: {
				type: "text-delta",
				id: firstTextChunkId,
				text: textChunk,
				providerMetadata: textProviderMetadata
			},
			partialOutput
		});
		textChunk = "";
	}
	return new TransformStream({ async transform(chunk, controller) {
		var _a21;
		if (chunk.type === "finish-step" && textChunk.length > 0) publishTextChunk({ controller });
		if (chunk.type !== "text-delta" && chunk.type !== "text-start" && chunk.type !== "text-end") {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (firstTextChunkId == null) firstTextChunkId = chunk.id;
		else if (chunk.id !== firstTextChunkId) {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (chunk.type === "text-start") {
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		if (chunk.type === "text-end") {
			if (textChunk.length > 0) publishTextChunk({ controller });
			controller.enqueue({
				part: chunk,
				partialOutput: void 0
			});
			return;
		}
		text2 += chunk.text;
		textChunk += chunk.text;
		textProviderMetadata = (_a21 = chunk.providerMetadata) != null ? _a21 : textProviderMetadata;
		const result = await output.parsePartialOutput({ text: text2 });
		if (result !== void 0) {
			const currentValue = typeof result.partial === "string" ? result.partial : JSON.stringify(result.partial);
			if (currentValue !== lastPublishedValue) {
				publishTextChunk({
					controller,
					partialOutput: result.partial
				});
				lastPublishedValue = currentValue;
			}
		}
	} });
}
var DefaultStreamTextResult = class {
	constructor({ model, telemetry, headers, settings, maxRetries: maxRetriesArg, abortSignal, stepTimeoutMs, stepAbortController, chunkTimeoutMs, chunkAbortController, system, prompt, messages, allowSystemInMessages, tools, toolChoice, transforms, activeTools, repairToolCall, stopConditions, output, providerOptions, prepareStep, includeRawChunks, now: now2, generateId: generateId2, timeout, stopWhen, originalAbortSignal, onChunk, onError, onFinish, onAbort, onStepFinish, onStart, onStepStart, onToolCallStart, onToolCallFinish, experimental_context, download: download2, include }) {
		this._totalUsage = new DelayedPromise();
		this._finishReason = new DelayedPromise();
		this._rawFinishReason = new DelayedPromise();
		this._steps = new DelayedPromise();
		this.outputSpecification = output;
		this.includeRawChunks = includeRawChunks;
		this.tools = tools;
		const globalTelemetry = getGlobalTelemetryIntegration()(telemetry == null ? void 0 : telemetry.integrations);
		let stepFinish;
		let recordedContent = [];
		const recordedResponseMessages = [];
		let recordedFinishReason = void 0;
		let recordedRawFinishReason = void 0;
		let recordedTotalUsage = void 0;
		let recordedRequest = {};
		let recordedWarnings = [];
		const recordedSteps = [];
		const pendingDeferredToolCalls = /* @__PURE__ */ new Map();
		let rootSpan;
		let activeTextContent = {};
		let activeReasoningContent = {};
		const eventProcessor = new TransformStream({
			async transform(chunk, controller) {
				var _a21, _b, _c, _d;
				controller.enqueue(chunk);
				const { part } = chunk;
				if (part.type === "text-delta" || part.type === "reasoning-delta" || part.type === "source" || part.type === "tool-call" || part.type === "tool-result" || part.type === "tool-input-start" || part.type === "tool-input-delta" || part.type === "raw") await (onChunk == null ? void 0 : onChunk({ chunk: part }));
				if (part.type === "error") await onError({ error: wrapGatewayError(part.error) });
				if (part.type === "text-start") {
					activeTextContent[part.id] = {
						type: "text",
						text: "",
						providerMetadata: part.providerMetadata
					};
					recordedContent.push(activeTextContent[part.id]);
				}
				if (part.type === "text-delta") {
					const activeText = activeTextContent[part.id];
					if (activeText == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `text part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeText.text += part.text;
					activeText.providerMetadata = (_a21 = part.providerMetadata) != null ? _a21 : activeText.providerMetadata;
				}
				if (part.type === "text-end") {
					const activeText = activeTextContent[part.id];
					if (activeText == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `text part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeText.providerMetadata = (_b = part.providerMetadata) != null ? _b : activeText.providerMetadata;
					delete activeTextContent[part.id];
				}
				if (part.type === "reasoning-start") {
					activeReasoningContent[part.id] = {
						type: "reasoning",
						text: "",
						providerMetadata: part.providerMetadata
					};
					recordedContent.push(activeReasoningContent[part.id]);
				}
				if (part.type === "reasoning-delta") {
					const activeReasoning = activeReasoningContent[part.id];
					if (activeReasoning == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `reasoning part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeReasoning.text += part.text;
					activeReasoning.providerMetadata = (_c = part.providerMetadata) != null ? _c : activeReasoning.providerMetadata;
				}
				if (part.type === "reasoning-end") {
					const activeReasoning = activeReasoningContent[part.id];
					if (activeReasoning == null) {
						controller.enqueue({
							part: {
								type: "error",
								error: `reasoning part ${part.id} not found`
							},
							partialOutput: void 0
						});
						return;
					}
					activeReasoning.providerMetadata = (_d = part.providerMetadata) != null ? _d : activeReasoning.providerMetadata;
					delete activeReasoningContent[part.id];
				}
				if (part.type === "file") recordedContent.push({
					type: "file",
					file: part.file,
					...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
				});
				if (part.type === "source") recordedContent.push(part);
				if (part.type === "tool-call") recordedContent.push(part);
				if (part.type === "tool-result" && !part.preliminary) recordedContent.push(part);
				if (part.type === "tool-approval-request") recordedContent.push(part);
				if (part.type === "tool-error") recordedContent.push(part);
				if (part.type === "start-step") {
					recordedContent = [];
					activeReasoningContent = {};
					activeTextContent = {};
					recordedRequest = part.request;
					recordedWarnings = part.warnings;
				}
				if (part.type === "finish-step") {
					const stepMessages = await toResponseMessages({
						content: recordedContent,
						tools
					});
					const currentStepResult = new DefaultStepResult({
						stepNumber: recordedSteps.length,
						model: modelInfo,
						...callbackTelemetryProps,
						experimental_context,
						content: recordedContent,
						finishReason: part.finishReason,
						rawFinishReason: part.rawFinishReason,
						usage: part.usage,
						warnings: recordedWarnings,
						request: recordedRequest,
						response: {
							...part.response,
							messages: [...recordedResponseMessages, ...stepMessages]
						},
						providerMetadata: part.providerMetadata
					});
					await notify({
						event: currentStepResult,
						callbacks: [onStepFinish, globalTelemetry.onStepFinish]
					});
					logWarnings({
						warnings: recordedWarnings,
						provider: modelInfo.provider,
						model: modelInfo.modelId
					});
					recordedSteps.push(currentStepResult);
					recordedResponseMessages.push(...stepMessages);
					stepFinish.resolve();
				}
				if (part.type === "finish") {
					recordedTotalUsage = part.totalUsage;
					recordedFinishReason = part.finishReason;
					recordedRawFinishReason = part.rawFinishReason;
				}
			},
			async flush(controller) {
				var _a21, _b, _c, _d, _e, _f, _g;
				try {
					if (recordedSteps.length === 0) {
						const error = (abortSignal == null ? void 0 : abortSignal.aborted) ? abortSignal.reason : new NoOutputGeneratedError({ message: "No output generated. Check the stream for errors." });
						self._finishReason.reject(error);
						self._rawFinishReason.reject(error);
						self._totalUsage.reject(error);
						self._steps.reject(error);
						return;
					}
					const finishReason = recordedFinishReason != null ? recordedFinishReason : "other";
					const totalUsage = recordedTotalUsage != null ? recordedTotalUsage : createNullLanguageModelUsage();
					self._finishReason.resolve(finishReason);
					self._rawFinishReason.resolve(recordedRawFinishReason);
					self._totalUsage.resolve(totalUsage);
					self._steps.resolve(recordedSteps);
					const finalStep = recordedSteps[recordedSteps.length - 1];
					await notify({
						event: {
							stepNumber: finalStep.stepNumber,
							model: finalStep.model,
							functionId: finalStep.functionId,
							metadata: finalStep.metadata,
							experimental_context: finalStep.experimental_context,
							finishReason: finalStep.finishReason,
							rawFinishReason: finalStep.rawFinishReason,
							totalUsage,
							usage: finalStep.usage,
							content: finalStep.content,
							text: finalStep.text,
							reasoningText: finalStep.reasoningText,
							reasoning: finalStep.reasoning,
							files: finalStep.files,
							sources: finalStep.sources,
							toolCalls: finalStep.toolCalls,
							staticToolCalls: finalStep.staticToolCalls,
							dynamicToolCalls: finalStep.dynamicToolCalls,
							toolResults: finalStep.toolResults,
							staticToolResults: finalStep.staticToolResults,
							dynamicToolResults: finalStep.dynamicToolResults,
							request: finalStep.request,
							response: finalStep.response,
							warnings: finalStep.warnings,
							providerMetadata: finalStep.providerMetadata,
							steps: recordedSteps
						},
						callbacks: [onFinish, globalTelemetry.onFinish]
					});
					rootSpan.setAttributes(await selectTelemetryAttributes({
						telemetry,
						attributes: {
							"ai.response.finishReason": finishReason,
							"ai.response.text": { output: () => finalStep.text },
							"ai.response.reasoning": { output: () => finalStep.reasoningText },
							"ai.response.toolCalls": { output: () => {
								var _a22;
								return ((_a22 = finalStep.toolCalls) == null ? void 0 : _a22.length) ? JSON.stringify(finalStep.toolCalls) : void 0;
							} },
							"ai.response.providerMetadata": JSON.stringify(finalStep.providerMetadata),
							"ai.usage.inputTokens": totalUsage.inputTokens,
							"ai.usage.inputTokenDetails.noCacheTokens": (_a21 = totalUsage.inputTokenDetails) == null ? void 0 : _a21.noCacheTokens,
							"ai.usage.inputTokenDetails.cacheReadTokens": (_b = totalUsage.inputTokenDetails) == null ? void 0 : _b.cacheReadTokens,
							"ai.usage.inputTokenDetails.cacheWriteTokens": (_c = totalUsage.inputTokenDetails) == null ? void 0 : _c.cacheWriteTokens,
							"ai.usage.outputTokens": totalUsage.outputTokens,
							"ai.usage.outputTokenDetails.textTokens": (_d = totalUsage.outputTokenDetails) == null ? void 0 : _d.textTokens,
							"ai.usage.outputTokenDetails.reasoningTokens": (_e = totalUsage.outputTokenDetails) == null ? void 0 : _e.reasoningTokens,
							"ai.usage.totalTokens": totalUsage.totalTokens,
							"ai.usage.reasoningTokens": (_f = totalUsage.outputTokenDetails) == null ? void 0 : _f.reasoningTokens,
							"ai.usage.cachedInputTokens": (_g = totalUsage.inputTokenDetails) == null ? void 0 : _g.cacheReadTokens
						}
					}));
				} catch (error) {
					controller.error(error);
				} finally {
					rootSpan.end();
				}
			}
		});
		const stitchableStream = createStitchableStream();
		this.addStream = stitchableStream.addStream;
		this.closeStream = stitchableStream.close;
		const reader = stitchableStream.stream.getReader();
		let stream = new ReadableStream({
			async start(controller) {
				controller.enqueue({ type: "start" });
			},
			async pull(controller) {
				function abort() {
					onAbort?.({ steps: recordedSteps });
					controller.enqueue({
						type: "abort",
						...(abortSignal == null ? void 0 : abortSignal.reason) !== void 0 ? { reason: getErrorMessage$1(abortSignal.reason) } : {}
					});
					controller.close();
				}
				try {
					const { done, value } = await reader.read();
					if (done) {
						controller.close();
						return;
					}
					if (abortSignal == null ? void 0 : abortSignal.aborted) {
						abort();
						return;
					}
					controller.enqueue(value);
				} catch (error) {
					if (isAbortError(error) && (abortSignal == null ? void 0 : abortSignal.aborted)) abort();
					else controller.error(error);
				}
			},
			cancel(reason) {
				return stitchableStream.stream.cancel(reason);
			}
		});
		for (const transform of transforms) stream = stream.pipeThrough(transform({
			tools,
			stopStream() {
				stitchableStream.terminate();
			}
		}));
		this.baseStream = stream.pipeThrough(createOutputTransformStream(output != null ? output : text())).pipeThrough(eventProcessor);
		const { maxRetries, retry } = prepareRetries({
			maxRetries: maxRetriesArg,
			abortSignal
		});
		const tracer = getTracer(telemetry);
		const callSettings = prepareCallSettings(settings);
		const baseTelemetryAttributes = getBaseTelemetryAttributes({
			model,
			telemetry,
			headers,
			settings: {
				...callSettings,
				maxRetries
			}
		});
		const self = this;
		const modelInfo = {
			provider: model.provider,
			modelId: model.modelId
		};
		const callbackTelemetryProps = {
			functionId: telemetry == null ? void 0 : telemetry.functionId,
			metadata: telemetry == null ? void 0 : telemetry.metadata
		};
		recordSpan({
			name: "ai.streamText",
			attributes: selectTelemetryAttributes({
				telemetry,
				attributes: {
					...assembleOperationName({
						operationId: "ai.streamText",
						telemetry
					}),
					...baseTelemetryAttributes,
					"ai.prompt": { input: () => JSON.stringify({
						system,
						prompt,
						messages
					}) }
				}
			}),
			tracer,
			endWhenDone: false,
			fn: async (rootSpanArg) => {
				rootSpan = rootSpanArg;
				const initialPrompt = await standardizePrompt({
					system,
					prompt,
					messages,
					allowSystemInMessages
				});
				await notify({
					event: {
						model: modelInfo,
						system,
						prompt,
						messages,
						tools,
						toolChoice,
						activeTools,
						maxOutputTokens: callSettings.maxOutputTokens,
						temperature: callSettings.temperature,
						topP: callSettings.topP,
						topK: callSettings.topK,
						presencePenalty: callSettings.presencePenalty,
						frequencyPenalty: callSettings.frequencyPenalty,
						stopSequences: callSettings.stopSequences,
						seed: callSettings.seed,
						maxRetries,
						timeout,
						headers,
						providerOptions,
						stopWhen,
						output,
						abortSignal: originalAbortSignal,
						include,
						...callbackTelemetryProps,
						experimental_context
					},
					callbacks: [onStart, globalTelemetry.onStart]
				});
				const initialMessages = initialPrompt.messages;
				const initialResponseMessages = [];
				const { approvedToolApprovals, deniedToolApprovals } = collectToolApprovals({ messages: initialMessages });
				if (deniedToolApprovals.length > 0 || approvedToolApprovals.length > 0) {
					const localApprovedToolApprovals = approvedToolApprovals.filter((toolApproval) => !toolApproval.toolCall.providerExecuted);
					const localDeniedToolApprovals = deniedToolApprovals.filter((toolApproval) => !toolApproval.toolCall.providerExecuted);
					const deniedProviderExecutedToolApprovals = deniedToolApprovals.filter((toolApproval) => toolApproval.toolCall.providerExecuted);
					let toolExecutionStepStreamController;
					const toolExecutionStepStream = new ReadableStream({ start(controller) {
						toolExecutionStepStreamController = controller;
					} });
					self.addStream(toolExecutionStepStream);
					try {
						for (const toolApproval of [...localDeniedToolApprovals, ...deniedProviderExecutedToolApprovals]) toolExecutionStepStreamController?.enqueue({
							type: "tool-output-denied",
							toolCallId: toolApproval.toolCall.toolCallId,
							toolName: toolApproval.toolCall.toolName
						});
						const toolOutputs = [];
						await Promise.all(localApprovedToolApprovals.map(async (toolApproval) => {
							const result = await executeToolCall({
								toolCall: toolApproval.toolCall,
								tools,
								tracer,
								telemetry,
								messages: initialMessages,
								abortSignal,
								experimental_context,
								stepNumber: recordedSteps.length,
								model: modelInfo,
								onToolCallStart: [onToolCallStart, globalTelemetry.onToolCallStart],
								onToolCallFinish: [onToolCallFinish, globalTelemetry.onToolCallFinish],
								onPreliminaryToolResult: (result2) => {
									toolExecutionStepStreamController?.enqueue(result2);
								}
							});
							if (result != null) {
								toolExecutionStepStreamController?.enqueue(result);
								toolOutputs.push(result);
							}
						}));
						if (toolOutputs.length > 0 || localDeniedToolApprovals.length > 0) {
							const localToolContent = [];
							for (const output2 of toolOutputs) localToolContent.push({
								type: "tool-result",
								toolCallId: output2.toolCallId,
								toolName: output2.toolName,
								output: await createToolModelOutput({
									toolCallId: output2.toolCallId,
									input: output2.input,
									tool: tools == null ? void 0 : tools[output2.toolName],
									output: output2.type === "tool-result" ? output2.output : output2.error,
									errorMode: output2.type === "tool-error" ? "text" : "none"
								})
							});
							for (const toolApproval of localDeniedToolApprovals) localToolContent.push({
								type: "tool-result",
								toolCallId: toolApproval.toolCall.toolCallId,
								toolName: toolApproval.toolCall.toolName,
								output: {
									type: "execution-denied",
									reason: toolApproval.approvalResponse.reason
								}
							});
							initialResponseMessages.push({
								role: "tool",
								content: localToolContent
							});
						}
					} finally {
						toolExecutionStepStreamController?.close();
					}
				}
				recordedResponseMessages.push(...initialResponseMessages);
				async function streamStep({ currentStep, responseMessages, usage }) {
					var _a21, _b, _c, _d, _e, _f, _g, _h, _i;
					const includeRawChunks2 = self.includeRawChunks;
					const stepTimeoutId = stepTimeoutMs != null ? setTimeout(() => stepAbortController.abort(), stepTimeoutMs) : void 0;
					let chunkTimeoutId = void 0;
					function resetChunkTimeout() {
						if (chunkTimeoutMs != null) {
							if (chunkTimeoutId != null) clearTimeout(chunkTimeoutId);
							chunkTimeoutId = setTimeout(() => chunkAbortController.abort(), chunkTimeoutMs);
						}
					}
					function clearChunkTimeout() {
						if (chunkTimeoutId != null) {
							clearTimeout(chunkTimeoutId);
							chunkTimeoutId = void 0;
						}
					}
					function clearStepTimeout() {
						if (stepTimeoutId != null) clearTimeout(stepTimeoutId);
					}
					try {
						stepFinish = new DelayedPromise();
						const stepInputMessages = [...initialMessages, ...responseMessages];
						const prepareStepResult = await (prepareStep == null ? void 0 : prepareStep({
							model,
							steps: recordedSteps,
							stepNumber: recordedSteps.length,
							messages: stepInputMessages,
							experimental_context
						}));
						const stepModel = resolveLanguageModel((_a21 = prepareStepResult == null ? void 0 : prepareStepResult.model) != null ? _a21 : model);
						const stepModelInfo = {
							provider: stepModel.provider,
							modelId: stepModel.modelId
						};
						const promptMessages = await convertToLanguageModelPrompt({
							prompt: {
								system: (_b = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _b : initialPrompt.system,
								messages: (_c = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _c : stepInputMessages
							},
							supportedUrls: await stepModel.supportedUrls,
							download: download2
						});
						const stepActiveTools = (_d = prepareStepResult == null ? void 0 : prepareStepResult.activeTools) != null ? _d : activeTools;
						const { toolChoice: stepToolChoice, tools: stepTools } = await prepareToolsAndToolChoice({
							tools,
							toolChoice: (_e = prepareStepResult == null ? void 0 : prepareStepResult.toolChoice) != null ? _e : toolChoice,
							activeTools: stepActiveTools
						});
						experimental_context = (_f = prepareStepResult == null ? void 0 : prepareStepResult.experimental_context) != null ? _f : experimental_context;
						const stepMessages = (_g = prepareStepResult == null ? void 0 : prepareStepResult.messages) != null ? _g : stepInputMessages;
						const stepSystem = (_h = prepareStepResult == null ? void 0 : prepareStepResult.system) != null ? _h : initialPrompt.system;
						const stepProviderOptions = mergeObjects(providerOptions, prepareStepResult == null ? void 0 : prepareStepResult.providerOptions);
						await notify({
							event: {
								stepNumber: recordedSteps.length,
								model: stepModelInfo,
								system: stepSystem,
								messages: stepMessages,
								tools,
								toolChoice: stepToolChoice,
								activeTools: stepActiveTools,
								steps: [...recordedSteps],
								providerOptions: stepProviderOptions,
								timeout,
								headers,
								stopWhen,
								output,
								abortSignal: originalAbortSignal,
								include,
								...callbackTelemetryProps,
								experimental_context
							},
							callbacks: [onStepStart, globalTelemetry.onStepStart]
						});
						const { result: { stream: stream2, response, request }, doStreamSpan, startTimestampMs } = await retry(() => recordSpan({
							name: "ai.streamText.doStream",
							attributes: selectTelemetryAttributes({
								telemetry,
								attributes: {
									...assembleOperationName({
										operationId: "ai.streamText.doStream",
										telemetry
									}),
									...baseTelemetryAttributes,
									"ai.model.provider": stepModel.provider,
									"ai.model.id": stepModel.modelId,
									"ai.prompt.messages": { input: () => stringifyForTelemetry(promptMessages) },
									"ai.prompt.tools": { input: () => stepTools == null ? void 0 : stepTools.map((tool2) => JSON.stringify(tool2)) },
									"ai.prompt.toolChoice": { input: () => stepToolChoice != null ? JSON.stringify(stepToolChoice) : void 0 },
									"gen_ai.system": stepModel.provider,
									"gen_ai.request.model": stepModel.modelId,
									"gen_ai.request.frequency_penalty": callSettings.frequencyPenalty,
									"gen_ai.request.max_tokens": callSettings.maxOutputTokens,
									"gen_ai.request.presence_penalty": callSettings.presencePenalty,
									"gen_ai.request.stop_sequences": callSettings.stopSequences,
									"gen_ai.request.temperature": callSettings.temperature,
									"gen_ai.request.top_k": callSettings.topK,
									"gen_ai.request.top_p": callSettings.topP
								}
							}),
							tracer,
							endWhenDone: false,
							fn: async (doStreamSpan2) => ({
								startTimestampMs: now2(),
								doStreamSpan: doStreamSpan2,
								result: await stepModel.doStream({
									...callSettings,
									tools: stepTools,
									toolChoice: stepToolChoice,
									responseFormat: await (output == null ? void 0 : output.responseFormat),
									prompt: promptMessages,
									providerOptions: stepProviderOptions,
									abortSignal,
									headers,
									includeRawChunks: includeRawChunks2
								})
							})
						}));
						const streamWithToolResults = runToolsTransformation({
							tools,
							generatorStream: stream2,
							tracer,
							telemetry,
							system,
							messages: stepInputMessages,
							repairToolCall,
							abortSignal,
							experimental_context,
							generateId: generateId2,
							stepNumber: recordedSteps.length,
							model: stepModelInfo,
							onToolCallStart: [onToolCallStart, globalTelemetry.onToolCallStart],
							onToolCallFinish: [onToolCallFinish, globalTelemetry.onToolCallFinish]
						});
						const stepRequest = ((_i = include == null ? void 0 : include.requestBody) != null ? _i : true) ? request != null ? request : {} : {
							...request,
							body: void 0
						};
						const stepToolCalls = [];
						const stepToolOutputs = [];
						let warnings;
						const activeToolCallToolNames = {};
						let stepFinishReason = "other";
						let stepRawFinishReason = void 0;
						let stepUsage = createNullLanguageModelUsage();
						let stepProviderMetadata;
						let stepFirstChunk = true;
						let stepResponse = {
							id: generateId2(),
							timestamp: /* @__PURE__ */ new Date(),
							modelId: modelInfo.modelId
						};
						let activeText = "";
						self.addStream(streamWithToolResults.pipeThrough(new TransformStream({
							async transform(chunk, controller) {
								var _a22, _b2, _c2, _d2, _e2;
								resetChunkTimeout();
								if (chunk.type === "stream-start") {
									warnings = chunk.warnings;
									return;
								}
								if (stepFirstChunk) {
									const msToFirstChunk = now2() - startTimestampMs;
									stepFirstChunk = false;
									doStreamSpan.addEvent("ai.stream.firstChunk", { "ai.response.msToFirstChunk": msToFirstChunk });
									doStreamSpan.setAttributes({ "ai.response.msToFirstChunk": msToFirstChunk });
									controller.enqueue({
										type: "start-step",
										request: stepRequest,
										warnings: warnings != null ? warnings : []
									});
								}
								const chunkType = chunk.type;
								switch (chunkType) {
									case "tool-approval-request":
									case "text-start":
									case "text-end":
										controller.enqueue(chunk);
										break;
									case "text-delta":
										if (chunk.delta.length > 0) {
											controller.enqueue({
												type: "text-delta",
												id: chunk.id,
												text: chunk.delta,
												providerMetadata: chunk.providerMetadata
											});
											activeText += chunk.delta;
										}
										break;
									case "reasoning-start":
									case "reasoning-end":
										controller.enqueue(chunk);
										break;
									case "reasoning-delta":
										controller.enqueue({
											type: "reasoning-delta",
											id: chunk.id,
											text: chunk.delta,
											providerMetadata: chunk.providerMetadata
										});
										break;
									case "tool-call":
										controller.enqueue(chunk);
										stepToolCalls.push(chunk);
										break;
									case "tool-result":
										controller.enqueue(chunk);
										if (!chunk.preliminary) stepToolOutputs.push(chunk);
										break;
									case "tool-error":
										controller.enqueue(chunk);
										stepToolOutputs.push(chunk);
										break;
									case "response-metadata":
										stepResponse = {
											id: (_a22 = chunk.id) != null ? _a22 : stepResponse.id,
											timestamp: (_b2 = chunk.timestamp) != null ? _b2 : stepResponse.timestamp,
											modelId: (_c2 = chunk.modelId) != null ? _c2 : stepResponse.modelId
										};
										break;
									case "finish": {
										stepUsage = chunk.usage;
										stepFinishReason = chunk.finishReason;
										stepRawFinishReason = chunk.rawFinishReason;
										stepProviderMetadata = chunk.providerMetadata;
										const msToFinish = now2() - startTimestampMs;
										doStreamSpan.addEvent("ai.stream.finish");
										doStreamSpan.setAttributes({
											"ai.response.msToFinish": msToFinish,
											"ai.response.avgOutputTokensPerSecond": 1e3 * ((_d2 = stepUsage.outputTokens) != null ? _d2 : 0) / msToFinish
										});
										break;
									}
									case "file":
										controller.enqueue(chunk);
										break;
									case "source":
										controller.enqueue(chunk);
										break;
									case "tool-input-start": {
										activeToolCallToolNames[chunk.id] = chunk.toolName;
										const tool2 = tools == null ? void 0 : tools[chunk.toolName];
										if ((tool2 == null ? void 0 : tool2.onInputStart) != null) await tool2.onInputStart({
											toolCallId: chunk.id,
											messages: stepInputMessages,
											abortSignal,
											experimental_context
										});
										controller.enqueue({
											...chunk,
											dynamic: (_e2 = chunk.dynamic) != null ? _e2 : (tool2 == null ? void 0 : tool2.type) === "dynamic",
											title: tool2 == null ? void 0 : tool2.title
										});
										break;
									}
									case "tool-input-end":
										delete activeToolCallToolNames[chunk.id];
										controller.enqueue(chunk);
										break;
									case "tool-input-delta": {
										const toolName = activeToolCallToolNames[chunk.id];
										const tool2 = tools == null ? void 0 : tools[toolName];
										if ((tool2 == null ? void 0 : tool2.onInputDelta) != null) await tool2.onInputDelta({
											inputTextDelta: chunk.delta,
											toolCallId: chunk.id,
											messages: stepInputMessages,
											abortSignal,
											experimental_context
										});
										controller.enqueue(chunk);
										break;
									}
									case "error":
										controller.enqueue(chunk);
										stepFinishReason = "error";
										break;
									case "raw":
										if (includeRawChunks2) controller.enqueue(chunk);
										break;
									default: throw new Error(`Unknown chunk type: ${chunkType}`);
								}
							},
							async flush(controller) {
								var _a22, _b2, _c2, _d2, _e2, _f2, _g2;
								const stepToolCallsJson = stepToolCalls.length > 0 ? JSON.stringify(stepToolCalls) : void 0;
								try {
									doStreamSpan.setAttributes(await selectTelemetryAttributes({
										telemetry,
										attributes: {
											"ai.response.finishReason": stepFinishReason,
											"ai.response.toolCalls": { output: () => stepToolCallsJson },
											"ai.response.id": stepResponse.id,
											"ai.response.model": stepResponse.modelId,
											"ai.response.timestamp": stepResponse.timestamp.toISOString(),
											"ai.usage.inputTokens": stepUsage.inputTokens,
											"ai.usage.inputTokenDetails.noCacheTokens": (_a22 = stepUsage.inputTokenDetails) == null ? void 0 : _a22.noCacheTokens,
											"ai.usage.inputTokenDetails.cacheReadTokens": (_b2 = stepUsage.inputTokenDetails) == null ? void 0 : _b2.cacheReadTokens,
											"ai.usage.inputTokenDetails.cacheWriteTokens": (_c2 = stepUsage.inputTokenDetails) == null ? void 0 : _c2.cacheWriteTokens,
											"ai.usage.outputTokens": stepUsage.outputTokens,
											"ai.usage.outputTokenDetails.textTokens": (_d2 = stepUsage.outputTokenDetails) == null ? void 0 : _d2.textTokens,
											"ai.usage.outputTokenDetails.reasoningTokens": (_e2 = stepUsage.outputTokenDetails) == null ? void 0 : _e2.reasoningTokens,
											"ai.usage.totalTokens": stepUsage.totalTokens,
											"ai.usage.reasoningTokens": (_f2 = stepUsage.outputTokenDetails) == null ? void 0 : _f2.reasoningTokens,
											"ai.usage.cachedInputTokens": (_g2 = stepUsage.inputTokenDetails) == null ? void 0 : _g2.cacheReadTokens,
											"gen_ai.response.finish_reasons": [stepFinishReason],
											"gen_ai.response.id": stepResponse.id,
											"gen_ai.response.model": stepResponse.modelId,
											"gen_ai.usage.input_tokens": stepUsage.inputTokens,
											"gen_ai.usage.output_tokens": stepUsage.outputTokens
										}
									}));
								} catch (error) {}
								controller.enqueue({
									type: "finish-step",
									finishReason: stepFinishReason,
									rawFinishReason: stepRawFinishReason,
									usage: stepUsage,
									providerMetadata: stepProviderMetadata,
									response: {
										...stepResponse,
										headers: response == null ? void 0 : response.headers
									}
								});
								const combinedUsage = addLanguageModelUsage(usage, stepUsage);
								await stepFinish.promise;
								const processedStep = recordedSteps[recordedSteps.length - 1];
								try {
									doStreamSpan.setAttributes(await selectTelemetryAttributes({
										telemetry,
										attributes: {
											"ai.response.text": { output: () => processedStep.text },
											"ai.response.reasoning": { output: () => processedStep.reasoningText },
											"ai.response.providerMetadata": JSON.stringify(processedStep.providerMetadata)
										}
									}));
								} catch (error) {} finally {
									doStreamSpan.end();
								}
								const clientToolCalls = stepToolCalls.filter((toolCall) => toolCall.providerExecuted !== true);
								const clientToolOutputs = stepToolOutputs.filter((toolOutput) => toolOutput.providerExecuted !== true);
								for (const toolCall of stepToolCalls) {
									if (toolCall.providerExecuted !== true) continue;
									const tool2 = tools == null ? void 0 : tools[toolCall.toolName];
									if ((tool2 == null ? void 0 : tool2.type) === "provider" && tool2.supportsDeferredResults) {
										if (!stepToolOutputs.some((output2) => (output2.type === "tool-result" || output2.type === "tool-error") && output2.toolCallId === toolCall.toolCallId)) pendingDeferredToolCalls.set(toolCall.toolCallId, { toolName: toolCall.toolName });
									}
								}
								for (const output2 of stepToolOutputs) if (output2.type === "tool-result" || output2.type === "tool-error") pendingDeferredToolCalls.delete(output2.toolCallId);
								clearStepTimeout();
								clearChunkTimeout();
								if ((clientToolCalls.length > 0 && clientToolOutputs.length === clientToolCalls.length || pendingDeferredToolCalls.size > 0) && !await isStopConditionMet({
									stopConditions,
									steps: recordedSteps
								})) {
									responseMessages.push(...await toResponseMessages({
										content: recordedSteps[recordedSteps.length - 1].content,
										tools
									}));
									try {
										await streamStep({
											currentStep: currentStep + 1,
											responseMessages,
											usage: combinedUsage
										});
									} catch (error) {
										controller.enqueue({
											type: "error",
											error
										});
										self.closeStream();
									}
								} else {
									controller.enqueue({
										type: "finish",
										finishReason: stepFinishReason,
										rawFinishReason: stepRawFinishReason,
										totalUsage: combinedUsage
									});
									self.closeStream();
								}
							}
						})));
					} finally {
						clearStepTimeout();
						clearChunkTimeout();
					}
				}
				await streamStep({
					currentStep: 0,
					responseMessages: initialResponseMessages,
					usage: createNullLanguageModelUsage()
				});
			}
		}).catch((error) => {
			self.addStream(new ReadableStream({ start(controller) {
				controller.enqueue({
					type: "error",
					error
				});
				controller.close();
			} }));
			self.closeStream();
		});
	}
	get steps() {
		this.consumeStream();
		return this._steps.promise;
	}
	get finalStep() {
		return this.steps.then((steps) => steps[steps.length - 1]);
	}
	get content() {
		return this.finalStep.then((step) => step.content);
	}
	get warnings() {
		return this.finalStep.then((step) => step.warnings);
	}
	get providerMetadata() {
		return this.finalStep.then((step) => step.providerMetadata);
	}
	get text() {
		return this.finalStep.then((step) => step.text);
	}
	get reasoningText() {
		return this.finalStep.then((step) => step.reasoningText);
	}
	get reasoning() {
		return this.finalStep.then((step) => step.reasoning);
	}
	get sources() {
		return this.finalStep.then((step) => step.sources);
	}
	get files() {
		return this.finalStep.then((step) => step.files);
	}
	get toolCalls() {
		return this.finalStep.then((step) => step.toolCalls);
	}
	get staticToolCalls() {
		return this.finalStep.then((step) => step.staticToolCalls);
	}
	get dynamicToolCalls() {
		return this.finalStep.then((step) => step.dynamicToolCalls);
	}
	get toolResults() {
		return this.finalStep.then((step) => step.toolResults);
	}
	get staticToolResults() {
		return this.finalStep.then((step) => step.staticToolResults);
	}
	get dynamicToolResults() {
		return this.finalStep.then((step) => step.dynamicToolResults);
	}
	get usage() {
		return this.finalStep.then((step) => step.usage);
	}
	get request() {
		return this.finalStep.then((step) => step.request);
	}
	get response() {
		return this.finalStep.then((step) => step.response);
	}
	get totalUsage() {
		this.consumeStream();
		return this._totalUsage.promise;
	}
	get finishReason() {
		this.consumeStream();
		return this._finishReason.promise;
	}
	get rawFinishReason() {
		this.consumeStream();
		return this._rawFinishReason.promise;
	}
	/**
	* Split out a new stream from the original stream.
	* The original stream is replaced to allow for further splitting,
	* since we do not know how many times the stream will be split.
	*
	* Note: this leads to buffering the stream content on the server.
	* However, the LLM results are expected to be small enough to not cause issues.
	*/
	teeStream() {
		const [stream1, stream2] = this.baseStream.tee();
		this.baseStream = stream2;
		return stream1;
	}
	get textStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ part }, controller) {
			if (part.type === "text-delta") controller.enqueue(part.text);
		} })));
	}
	get fullStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ part }, controller) {
			controller.enqueue(part);
		} })));
	}
	async consumeStream(options) {
		var _a21;
		try {
			await consumeStream({
				stream: this.fullStream,
				onError: options == null ? void 0 : options.onError
			});
		} catch (error) {
			(_a21 = options == null ? void 0 : options.onError) == null || _a21.call(options, error);
		}
	}
	get experimental_partialOutputStream() {
		return this.partialOutputStream;
	}
	get partialOutputStream() {
		return createAsyncIterableStream(this.teeStream().pipeThrough(new TransformStream({ transform({ partialOutput }, controller) {
			if (partialOutput != null) controller.enqueue(partialOutput);
		} })));
	}
	get elementStream() {
		var _a21, _b, _c;
		const transform = (_a21 = this.outputSpecification) == null ? void 0 : _a21.createElementStreamTransform();
		if (transform == null) throw new UnsupportedFunctionalityError({ functionality: `element streams in ${(_c = (_b = this.outputSpecification) == null ? void 0 : _b.name) != null ? _c : "text"} mode` });
		return createAsyncIterableStream(this.teeStream().pipeThrough(transform));
	}
	get output() {
		return this.finalStep.then((step) => {
			var _a21;
			return ((_a21 = this.outputSpecification) != null ? _a21 : text()).parseCompleteOutput({ text: step.text }, {
				response: step.response,
				usage: step.usage,
				finishReason: step.finishReason
			});
		});
	}
	toUIMessageStream({ originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning = true, sendSources = false, sendStart = true, sendFinish = true, onError = getErrorMessage$1 } = {}) {
		const responseMessageId = generateMessageId != null ? getResponseUIMessageId({
			originalMessages,
			responseMessageId: generateMessageId
		}) : void 0;
		const isDynamic = (part) => {
			var _a21;
			const tool2 = (_a21 = this.tools) == null ? void 0 : _a21[part.toolName];
			if (tool2 == null) return part.dynamic;
			return (tool2 == null ? void 0 : tool2.type) === "dynamic" ? true : void 0;
		};
		return createAsyncIterableStream(handleUIMessageStreamFinish({
			stream: this.fullStream.pipeThrough(new TransformStream({ transform: async (part, controller) => {
				const messageMetadataValue = messageMetadata == null ? void 0 : messageMetadata({ part });
				const partType = part.type;
				switch (partType) {
					case "text-start":
						controller.enqueue({
							type: "text-start",
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "text-delta":
						controller.enqueue({
							type: "text-delta",
							id: part.id,
							delta: part.text,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "text-end":
						controller.enqueue({
							type: "text-end",
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "reasoning-start":
					case "reasoning-end":
						if (sendReasoning) controller.enqueue({
							type: partType,
							id: part.id,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "reasoning-delta":
						if (sendReasoning) controller.enqueue({
							type: "reasoning-delta",
							id: part.id,
							delta: part.text,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "file":
						controller.enqueue({
							type: "file",
							mediaType: part.file.mediaType,
							url: `data:${part.file.mediaType};base64,${part.file.base64}`,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "source":
						if (sendSources && part.sourceType === "url") controller.enqueue({
							type: "source-url",
							sourceId: part.id,
							url: part.url,
							title: part.title,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						if (sendSources && part.sourceType === "document") controller.enqueue({
							type: "source-document",
							sourceId: part.id,
							mediaType: part.mediaType,
							title: part.title,
							filename: part.filename,
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {}
						});
						break;
					case "tool-input-start": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-input-start",
							toolCallId: part.id,
							toolName: part.toolName,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							...part.title != null ? { title: part.title } : {}
						});
						break;
					}
					case "tool-input-delta":
						controller.enqueue({
							type: "tool-input-delta",
							toolCallId: part.id,
							inputTextDelta: part.delta
						});
						break;
					case "tool-call": {
						const dynamic = isDynamic(part);
						if (part.invalid) controller.enqueue({
							type: "tool-input-error",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							errorText: onError(part.error),
							...part.title != null ? { title: part.title } : {}
						});
						else controller.enqueue({
							type: "tool-input-available",
							toolCallId: part.toolCallId,
							toolName: part.toolName,
							input: part.input,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...dynamic != null ? { dynamic } : {},
							...part.title != null ? { title: part.title } : {}
						});
						break;
					}
					case "tool-approval-request":
						controller.enqueue({
							type: "tool-approval-request",
							approvalId: part.approvalId,
							toolCallId: part.toolCall.toolCallId
						});
						break;
					case "tool-result": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-output-available",
							toolCallId: part.toolCallId,
							output: part.output,
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...part.preliminary != null ? { preliminary: part.preliminary } : {},
							...dynamic != null ? { dynamic } : {}
						});
						break;
					}
					case "tool-error": {
						const dynamic = isDynamic(part);
						controller.enqueue({
							type: "tool-output-error",
							toolCallId: part.toolCallId,
							errorText: part.providerExecuted ? typeof part.error === "string" ? part.error : JSON.stringify(part.error) : onError(part.error),
							...part.providerExecuted != null ? { providerExecuted: part.providerExecuted } : {},
							...part.providerMetadata != null ? { providerMetadata: part.providerMetadata } : {},
							...part.toolMetadata != null ? { toolMetadata: part.toolMetadata } : {},
							...dynamic != null ? { dynamic } : {}
						});
						break;
					}
					case "tool-output-denied":
						controller.enqueue({
							type: "tool-output-denied",
							toolCallId: part.toolCallId
						});
						break;
					case "error":
						controller.enqueue({
							type: "error",
							errorText: onError(part.error)
						});
						break;
					case "start-step":
						controller.enqueue({ type: "start-step" });
						break;
					case "finish-step":
						controller.enqueue({ type: "finish-step" });
						break;
					case "start":
						if (sendStart) controller.enqueue({
							type: "start",
							...messageMetadataValue != null ? { messageMetadata: messageMetadataValue } : {},
							...responseMessageId != null ? { messageId: responseMessageId } : {}
						});
						break;
					case "finish":
						if (sendFinish) controller.enqueue({
							type: "finish",
							finishReason: part.finishReason,
							...messageMetadataValue != null ? { messageMetadata: messageMetadataValue } : {}
						});
						break;
					case "abort":
						controller.enqueue(part);
						break;
					case "tool-input-end": break;
					case "raw": break;
					default: throw new Error(`Unknown chunk type: ${partType}`);
				}
				if (messageMetadataValue != null && partType !== "start" && partType !== "finish") controller.enqueue({
					type: "message-metadata",
					messageMetadata: messageMetadataValue
				});
			} })),
			messageId: responseMessageId != null ? responseMessageId : generateMessageId == null ? void 0 : generateMessageId(),
			originalMessages,
			onFinish,
			onError
		}));
	}
	pipeUIMessageStreamToResponse(response, { originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning, sendSources, sendFinish, sendStart, onError, ...init } = {}) {
		pipeUIMessageStreamToResponse({
			response,
			stream: this.toUIMessageStream({
				originalMessages,
				generateMessageId,
				onFinish,
				messageMetadata,
				sendReasoning,
				sendSources,
				sendFinish,
				sendStart,
				onError
			}),
			...init
		});
	}
	pipeTextStreamToResponse(response, init) {
		pipeTextStreamToResponse({
			response,
			textStream: this.textStream,
			...init
		});
	}
	toUIMessageStreamResponse({ originalMessages, generateMessageId, onFinish, messageMetadata, sendReasoning, sendSources, sendFinish, sendStart, onError, ...init } = {}) {
		return createUIMessageStreamResponse({
			stream: this.toUIMessageStream({
				originalMessages,
				generateMessageId,
				onFinish,
				messageMetadata,
				sendReasoning,
				sendSources,
				sendFinish,
				sendStart,
				onError
			}),
			...init
		});
	}
	toTextStreamResponse(init) {
		return createTextStreamResponse({
			textStream: this.textStream,
			...init
		});
	}
};
async function convertToModelMessages(messages, options) {
	const modelMessages = [];
	if (options == null ? void 0 : options.ignoreIncompleteToolCalls) messages = messages.map((message) => ({
		...message,
		parts: message.parts.filter((part) => !isToolUIPart(part) || part.state !== "input-streaming" && part.state !== "input-available")
	}));
	for (const message of messages) switch (message.role) {
		case "system": {
			const textParts = message.parts.filter((part) => part.type === "text");
			const providerMetadata = textParts.reduce((acc, part) => {
				if (part.providerMetadata != null) return {
					...acc,
					...part.providerMetadata
				};
				return acc;
			}, {});
			modelMessages.push({
				role: "system",
				content: textParts.map((part) => part.text).join(""),
				...Object.keys(providerMetadata).length > 0 ? { providerOptions: providerMetadata } : {}
			});
			break;
		}
		case "user":
			modelMessages.push({
				role: "user",
				content: message.parts.map((part) => {
					var _a21;
					if (isTextUIPart(part)) return {
						type: "text",
						text: part.text,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					};
					if (isFileUIPart(part)) return {
						type: "file",
						mediaType: part.mediaType,
						filename: part.filename,
						data: part.url,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					};
					if (isDataUIPart(part)) return (_a21 = options == null ? void 0 : options.convertDataPart) == null ? void 0 : _a21.call(options, part);
				}).filter(isNonNullable)
			});
			break;
		case "assistant":
			if (message.parts != null) {
				let block = [];
				async function processBlock() {
					var _a21, _b, _c, _d, _e, _f, _g;
					if (block.length === 0) return;
					const content = [];
					for (const part of block) if (isTextUIPart(part)) content.push({
						type: "text",
						text: part.text,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isFileUIPart(part)) content.push({
						type: "file",
						mediaType: part.mediaType,
						filename: part.filename,
						data: part.url,
						...part.providerMetadata != null ? { providerOptions: part.providerMetadata } : {}
					});
					else if (isReasoningUIPart(part)) content.push({
						type: "reasoning",
						text: part.text,
						providerOptions: part.providerMetadata
					});
					else if (isToolUIPart(part)) {
						const toolName = getToolName(part);
						if (part.state !== "input-streaming") {
							content.push({
								type: "tool-call",
								toolCallId: part.toolCallId,
								toolName,
								input: part.state === "output-error" ? (_a21 = part.input) != null ? _a21 : "rawInput" in part ? part.rawInput : void 0 : part.input,
								providerExecuted: part.providerExecuted,
								...part.callProviderMetadata != null ? { providerOptions: part.callProviderMetadata } : {}
							});
							if (part.approval != null) content.push({
								type: "tool-approval-request",
								approvalId: part.approval.id,
								toolCallId: part.toolCallId
							});
							if (part.providerExecuted === true && part.state !== "approval-responded" && (part.state === "output-available" || part.state === "output-error")) {
								const resultProviderMetadata = (_b = part.resultProviderMetadata) != null ? _b : part.callProviderMetadata;
								content.push({
									type: "tool-result",
									toolCallId: part.toolCallId,
									toolName,
									output: await createToolModelOutput({
										toolCallId: part.toolCallId,
										input: part.input,
										output: part.state === "output-error" ? part.errorText : part.output,
										tool: (_c = options == null ? void 0 : options.tools) == null ? void 0 : _c[toolName],
										errorMode: part.state === "output-error" ? "json" : "none"
									}),
									...resultProviderMetadata != null ? { providerOptions: resultProviderMetadata } : {}
								});
							}
						}
					} else if (isDataUIPart(part)) {
						const dataPart = (_d = options == null ? void 0 : options.convertDataPart) == null ? void 0 : _d.call(options, part);
						if (dataPart != null) content.push(dataPart);
					} else throw new Error(`Unsupported part: ${part}`);
					modelMessages.push({
						role: "assistant",
						content
					});
					const toolParts = block.filter((part) => {
						var _a22;
						return isToolUIPart(part) && (part.providerExecuted !== true || ((_a22 = part.approval) == null ? void 0 : _a22.approved) != null);
					});
					if (toolParts.length > 0) {
						const content2 = [];
						for (const toolPart of toolParts) {
							if (((_e = toolPart.approval) == null ? void 0 : _e.approved) != null) content2.push({
								type: "tool-approval-response",
								approvalId: toolPart.approval.id,
								approved: toolPart.approval.approved,
								reason: toolPart.approval.reason,
								providerExecuted: toolPart.providerExecuted
							});
							if (toolPart.providerExecuted === true) continue;
							switch (toolPart.state) {
								case "output-denied":
									content2.push({
										type: "tool-result",
										toolCallId: toolPart.toolCallId,
										toolName: getToolName(toolPart),
										output: {
											type: "error-text",
											value: (_f = toolPart.approval.reason) != null ? _f : "Tool execution denied."
										},
										...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
									});
									break;
								case "output-error":
								case "output-available": {
									const toolName = getToolName(toolPart);
									content2.push({
										type: "tool-result",
										toolCallId: toolPart.toolCallId,
										toolName,
										output: await createToolModelOutput({
											toolCallId: toolPart.toolCallId,
											input: toolPart.input,
											output: toolPart.state === "output-error" ? toolPart.errorText : toolPart.output,
											tool: (_g = options == null ? void 0 : options.tools) == null ? void 0 : _g[toolName],
											errorMode: toolPart.state === "output-error" ? "text" : "none"
										}),
										...toolPart.callProviderMetadata != null ? { providerOptions: toolPart.callProviderMetadata } : {}
									});
									break;
								}
							}
						}
						if (content2.length > 0) modelMessages.push({
							role: "tool",
							content: content2
						});
					}
					block = [];
				}
				for (const part of message.parts) if (isTextUIPart(part) || isReasoningUIPart(part) || isFileUIPart(part) || isToolUIPart(part) || isDataUIPart(part)) block.push(part);
				else if (part.type === "step-start") await processBlock();
				await processBlock();
				break;
			}
			break;
		default: {
			const _exhaustiveCheck = message.role;
			throw new MessageConversionError({
				originalMessage: message,
				message: `Unsupported role: ${_exhaustiveCheck}`
			});
		}
	}
	return modelMessages;
}
record(string(), jsonValueSchema.optional());
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
createIdGenerator({
	prefix: "aiobj",
	size: 24
});
//#endregion
//#region node_modules/flexsearch/dist/flexsearch.bundle.module.min.mjs
/**!
* FlexSearch.js v0.8.212 (Bundle/Module)
* Author and Copyright: Thomas Wilkerling
* Licence: Apache-2.0
* Hosted by Nextapps GmbH
* https://github.com/nextapps-de/flexsearch
*/
var w;
function H(a, c, b) {
	const e = typeof b, d = typeof a;
	if (e !== "undefined") {
		if (d !== "undefined") {
			if (b) {
				if (d === "function" && e === d) return function(k) {
					return a(b(k));
				};
				c = a.constructor;
				if (c === b.constructor) {
					if (c === Array) return b.concat(a);
					if (c === Map) {
						var f = new Map(b);
						for (var g of a) f.set(g[0], g[1]);
						return f;
					}
					if (c === Set) {
						g = new Set(b);
						for (f of a.values()) g.add(f);
						return g;
					}
				}
			}
			return a;
		}
		return b;
	}
	return d === "undefined" ? c : a;
}
function aa(a, c) {
	return typeof a === "undefined" ? c : a;
}
function I() {
	return Object.create(null);
}
function M(a) {
	return typeof a === "string";
}
function ba(a) {
	return typeof a === "object";
}
function ca(a, c) {
	if (M(c)) a = a[c];
	else for (let b = 0; a && b < c.length; b++) a = a[c[b]];
	return a;
}
var ea = /[^\p{L}\p{N}]+/u, fa = /(\d{3})/g, ha = /(\D)(\d{3})/g, ia = /(\d{3})(\D)/g, ja = /[\u0300-\u036f]/g;
function ka(a = {}) {
	if (!this || this.constructor !== ka) return new ka(...arguments);
	if (arguments.length) for (a = 0; a < arguments.length; a++) this.assign(arguments[a]);
	else this.assign(a);
}
w = ka.prototype;
w.assign = function(a) {
	this.normalize = H(a.normalize, !0, this.normalize);
	let c = a.include, b = c || a.exclude || a.split, e;
	if (b || b === "") {
		if (typeof b === "object" && b.constructor !== RegExp) {
			let d = "";
			e = !c;
			c || (d += "\\p{Z}");
			b.letter && (d += "\\p{L}");
			b.number && (d += "\\p{N}", e = !!c);
			b.symbol && (d += "\\p{S}");
			b.punctuation && (d += "\\p{P}");
			b.control && (d += "\\p{C}");
			if (b = b.char) d += typeof b === "object" ? b.join("") : b;
			try {
				this.split = new RegExp("[" + (c ? "^" : "") + d + "]+", "u");
			} catch (f) {
				this.split = /\s+/;
			}
		} else this.split = b, e = b === !1 || "a1a".split(b).length < 2;
		this.numeric = H(a.numeric, e);
	} else {
		try {
			this.split = H(this.split, ea);
		} catch (d) {
			this.split = /\s+/;
		}
		this.numeric = H(a.numeric, H(this.numeric, !0));
	}
	this.prepare = H(a.prepare, null, this.prepare);
	this.finalize = H(a.finalize, null, this.finalize);
	b = a.filter;
	this.filter = typeof b === "function" ? b : H(b && new Set(b), null, this.filter);
	this.dedupe = H(a.dedupe, !0, this.dedupe);
	this.matcher = H((b = a.matcher) && new Map(b), null, this.matcher);
	this.mapper = H((b = a.mapper) && new Map(b), null, this.mapper);
	this.stemmer = H((b = a.stemmer) && new Map(b), null, this.stemmer);
	this.replacer = H(a.replacer, null, this.replacer);
	this.minlength = H(a.minlength, 1, this.minlength);
	this.maxlength = H(a.maxlength, 1024, this.maxlength);
	this.rtl = H(a.rtl, !1, this.rtl);
	if (this.cache = b = H(a.cache, !0, this.cache)) this.F = null, this.L = typeof b === "number" ? b : 2e5, this.B = /* @__PURE__ */ new Map(), this.D = /* @__PURE__ */ new Map(), this.I = this.H = 128;
	this.h = "";
	this.J = null;
	this.A = "";
	this.K = null;
	if (this.matcher) for (const d of this.matcher.keys()) this.h += (this.h ? "|" : "") + d;
	if (this.stemmer) for (const d of this.stemmer.keys()) this.A += (this.A ? "|" : "") + d;
	return this;
};
w.addStemmer = function(a, c) {
	this.stemmer || (this.stemmer = /* @__PURE__ */ new Map());
	this.stemmer.set(a, c);
	this.A += (this.A ? "|" : "") + a;
	this.K = null;
	this.cache && Q(this);
	return this;
};
w.addFilter = function(a) {
	typeof a === "function" ? this.filter = a : (this.filter || (this.filter = /* @__PURE__ */ new Set()), this.filter.add(a));
	this.cache && Q(this);
	return this;
};
w.addMapper = function(a, c) {
	if (typeof a === "object") return this.addReplacer(a, c);
	if (a.length > 1) return this.addMatcher(a, c);
	this.mapper || (this.mapper = /* @__PURE__ */ new Map());
	this.mapper.set(a, c);
	this.cache && Q(this);
	return this;
};
w.addMatcher = function(a, c) {
	if (typeof a === "object") return this.addReplacer(a, c);
	if (a.length < 2 && (this.dedupe || this.mapper)) return this.addMapper(a, c);
	this.matcher || (this.matcher = /* @__PURE__ */ new Map());
	this.matcher.set(a, c);
	this.h += (this.h ? "|" : "") + a;
	this.J = null;
	this.cache && Q(this);
	return this;
};
w.addReplacer = function(a, c) {
	if (typeof a === "string") return this.addMatcher(a, c);
	this.replacer || (this.replacer = []);
	this.replacer.push(a, c);
	this.cache && Q(this);
	return this;
};
w.encode = function(a, c) {
	if (this.cache && a.length <= this.H) if (this.F) {
		if (this.B.has(a)) return this.B.get(a);
	} else this.F = setTimeout(Q, 50, this);
	this.normalize && (typeof this.normalize === "function" ? a = this.normalize(a) : a = ja ? a.normalize("NFKD").replace(ja, "").toLowerCase() : a.toLowerCase());
	this.prepare && (a = this.prepare(a));
	this.numeric && a.length > 3 && (a = a.replace(ha, "$1 $2").replace(ia, "$1 $2").replace(fa, "$1 "));
	const b = !(this.dedupe || this.mapper || this.filter || this.matcher || this.stemmer || this.replacer);
	let e = [], d = I(), f, g, k = this.split || this.split === "" ? a.split(this.split) : [a];
	for (let l = 0, m, p; l < k.length; l++) if ((m = p = k[l]) && !(m.length < this.minlength || m.length > this.maxlength)) {
		if (c) {
			if (d[m]) continue;
			d[m] = 1;
		} else {
			if (f === m) continue;
			f = m;
		}
		if (b) e.push(m);
		else if (!this.filter || (typeof this.filter === "function" ? this.filter(m) : !this.filter.has(m))) {
			if (this.cache && m.length <= this.I) if (this.F) {
				var h = this.D.get(m);
				if (h || h === "") {
					h && e.push(h);
					continue;
				}
			} else this.F = setTimeout(Q, 50, this);
			if (this.stemmer) {
				this.K || (this.K = new RegExp("(?!^)(" + this.A + ")$"));
				let u;
				for (; u !== m && m.length > 2;) u = m, m = m.replace(this.K, (r) => this.stemmer.get(r));
			}
			if (m && (this.mapper || this.dedupe && m.length > 1)) {
				h = "";
				for (let u = 0, r = "", t, n; u < m.length; u++) t = m.charAt(u), t === r && this.dedupe || ((n = this.mapper && this.mapper.get(t)) || n === "" ? n === r && this.dedupe || !(r = n) || (h += n) : h += r = t);
				m = h;
			}
			this.matcher && m.length > 1 && (this.J || (this.J = new RegExp("(" + this.h + ")", "g")), m = m.replace(this.J, (u) => this.matcher.get(u)));
			if (m && this.replacer) for (h = 0; m && h < this.replacer.length; h += 2) m = m.replace(this.replacer[h], this.replacer[h + 1]);
			this.cache && p.length <= this.I && (this.D.set(p, m), this.D.size > this.L && (this.D.clear(), this.I = this.I / 1.1 | 0));
			if (m) {
				if (m !== p) if (c) {
					if (d[m]) continue;
					d[m] = 1;
				} else {
					if (g === m) continue;
					g = m;
				}
				e.push(m);
			}
		}
	}
	this.finalize && (e = this.finalize(e) || e);
	this.cache && a.length <= this.H && (this.B.set(a, e), this.B.size > this.L && (this.B.clear(), this.H = this.H / 1.1 | 0));
	return e;
};
function Q(a) {
	a.F = null;
	a.B.clear();
	a.D.clear();
}
function la(a, c, b) {
	b || (c || typeof a !== "object" ? typeof c === "object" && (b = c, c = 0) : b = a);
	b && (a = b.query || a, c = b.limit || c);
	let e = "" + (c || 0);
	b && (e += (b.offset || 0) + !!b.context + !!b.suggest + (b.resolve !== !1) + (b.resolution || this.resolution) + (b.boost || 0));
	a = ("" + a).toLowerCase();
	this.cache || (this.cache = new ma());
	let d = this.cache.get(a + e);
	if (!d) {
		const f = b && b.cache;
		f && (b.cache = !1);
		d = this.search(a, c, b);
		f && (b.cache = f);
		this.cache.set(a + e, d);
	}
	return d;
}
function ma(a) {
	this.limit = a && a !== !0 ? a : 1e3;
	this.cache = /* @__PURE__ */ new Map();
	this.h = "";
}
ma.prototype.set = function(a, c) {
	this.cache.set(this.h = a, c);
	this.cache.size > this.limit && this.cache.delete(this.cache.keys().next().value);
};
ma.prototype.get = function(a) {
	const c = this.cache.get(a);
	c && this.h !== a && (this.cache.delete(a), this.cache.set(this.h = a, c));
	return c;
};
ma.prototype.remove = function(a) {
	for (const c of this.cache) {
		const b = c[0];
		c[1].includes(a) && this.cache.delete(b);
	}
};
ma.prototype.clear = function() {
	this.cache.clear();
	this.h = "";
};
var na = {
	normalize: !1,
	numeric: !1,
	dedupe: !1
};
var oa = {};
var ra = new Map([
	["b", "p"],
	["v", "f"],
	["w", "f"],
	["z", "s"],
	["x", "s"],
	["d", "t"],
	["n", "m"],
	["c", "k"],
	["g", "k"],
	["j", "k"],
	["q", "k"],
	["i", "e"],
	["y", "e"],
	["u", "o"]
]);
var sa = new Map([
	["ae", "a"],
	["oe", "o"],
	["sh", "s"],
	["kh", "k"],
	["th", "t"],
	["ph", "f"],
	["pf", "f"]
]), ta = [
	/([^aeo])h(.)/g,
	"$1$2",
	/([aeo])h([^aeo]|$)/g,
	"$1$2",
	/(.)\1+/g,
	"$1"
];
var ua = {
	a: "",
	e: "",
	i: "",
	o: "",
	u: "",
	y: "",
	b: 1,
	f: 1,
	p: 1,
	v: 1,
	c: 2,
	g: 2,
	j: 2,
	k: 2,
	q: 2,
	s: 2,
	x: 2,
	z: 2,
	"ß": 2,
	d: 3,
	t: 3,
	l: 4,
	m: 5,
	n: 5,
	r: 6
};
var va = {
	Exact: na,
	Default: oa,
	Normalize: oa,
	LatinBalance: { mapper: ra },
	LatinAdvanced: {
		mapper: ra,
		matcher: sa,
		replacer: ta
	},
	LatinExtra: {
		mapper: ra,
		replacer: ta.concat([/(?!^)[aeo]/g, ""]),
		matcher: sa
	},
	LatinSoundex: {
		dedupe: !1,
		include: { letter: !0 },
		finalize: function(a) {
			for (let b = 0; b < a.length; b++) {
				var c = a[b];
				let e = c.charAt(0), d = ua[e];
				for (let f = 1, g; f < c.length && (g = c.charAt(f), g === "h" || g === "w" || !(g = ua[g]) || g === d || (e += g, d = g, e.length !== 4)); f++);
				a[b] = e;
			}
		}
	},
	CJK: { split: "" },
	LatinExact: na,
	LatinDefault: oa,
	LatinSimple: oa
};
function wa(a, c, b, e) {
	let d = [];
	for (let f = 0, g; f < a.index.length; f++) if (g = a.index[f], c >= g.length) c -= g.length;
	else {
		c = g[e ? "splice" : "slice"](c, b);
		const k = c.length;
		if (k && (d = d.length ? d.concat(c) : c, b -= k, e && (a.length -= k), !b)) break;
		c = 0;
	}
	return d;
}
function xa(a) {
	if (!this || this.constructor !== xa) return new xa(a);
	this.index = a ? [a] : [];
	this.length = a ? a.length : 0;
	const c = this;
	return new Proxy([], {
		get(b, e) {
			if (e === "length") return c.length;
			if (e === "push") return function(d) {
				c.index[c.index.length - 1].push(d);
				c.length++;
			};
			if (e === "pop") return function() {
				if (c.length) return c.length--, c.index[c.index.length - 1].pop();
			};
			if (e === "indexOf") return function(d) {
				let f = 0;
				for (let g = 0, k, h; g < c.index.length; g++) {
					k = c.index[g];
					h = k.indexOf(d);
					if (h >= 0) return f + h;
					f += k.length;
				}
				return -1;
			};
			if (e === "includes") return function(d) {
				for (let f = 0; f < c.index.length; f++) if (c.index[f].includes(d)) return !0;
				return !1;
			};
			if (e === "slice") return function(d, f) {
				return wa(c, d || 0, f || c.length, !1);
			};
			if (e === "splice") return function(d, f) {
				return wa(c, d || 0, f || c.length, !0);
			};
			if (e === "constructor") return Array;
			if (typeof e !== "symbol") return (b = c.index[e / 2 ** 31 | 0]) && b[e];
		},
		set(b, e, d) {
			b = e / 2 ** 31 | 0;
			(c.index[b] || (c.index[b] = []))[e] = d;
			c.length++;
			return !0;
		}
	});
}
xa.prototype.clear = function() {
	this.index.length = 0;
};
xa.prototype.push = function() {};
function R(a = 8) {
	if (!this || this.constructor !== R) return new R(a);
	this.index = I();
	this.h = [];
	this.size = 0;
	a > 32 ? (this.B = Aa, this.A = BigInt(a)) : (this.B = Ba, this.A = a);
}
R.prototype.get = function(a) {
	const c = this.index[this.B(a)];
	return c && c.get(a);
};
R.prototype.set = function(a, c) {
	var b = this.B(a);
	let e = this.index[b];
	e ? (b = e.size, e.set(a, c), (b -= e.size) && this.size++) : (this.index[b] = e = new Map([[a, c]]), this.h.push(e), this.size++);
};
function S(a = 8) {
	if (!this || this.constructor !== S) return new S(a);
	this.index = I();
	this.h = [];
	this.size = 0;
	a > 32 ? (this.B = Aa, this.A = BigInt(a)) : (this.B = Ba, this.A = a);
}
S.prototype.add = function(a) {
	var c = this.B(a);
	let b = this.index[c];
	b ? (c = b.size, b.add(a), (c -= b.size) && this.size++) : (this.index[c] = b = new Set([a]), this.h.push(b), this.size++);
};
w = R.prototype;
w.has = S.prototype.has = function(a) {
	const c = this.index[this.B(a)];
	return c && c.has(a);
};
w.delete = S.prototype.delete = function(a) {
	const c = this.index[this.B(a)];
	c && c.delete(a) && this.size--;
};
w.clear = S.prototype.clear = function() {
	this.index = I();
	this.h = [];
	this.size = 0;
};
w.values = S.prototype.values = function* () {
	for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].values()) yield c;
};
w.keys = S.prototype.keys = function* () {
	for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].keys()) yield c;
};
w.entries = S.prototype.entries = function* () {
	for (let a = 0; a < this.h.length; a++) for (let c of this.h[a].entries()) yield c;
};
function Ba(a) {
	let c = 2 ** this.A - 1;
	if (typeof a == "number") return a & c;
	let b = 0, e = this.A + 1;
	for (let d = 0; d < a.length; d++) b = (b * e ^ a.charCodeAt(d)) & c;
	return this.A === 32 ? b + 2 ** 31 : b;
}
function Aa(a) {
	let c = BigInt(2) ** this.A - BigInt(1);
	var b = typeof a;
	if (b === "bigint") return a & c;
	if (b === "number") return BigInt(a) & c;
	b = BigInt(0);
	let e = this.A + BigInt(1);
	for (let d = 0; d < a.length; d++) b = (b * e ^ BigInt(a.charCodeAt(d))) & c;
	return b;
}
var Ca, Da;
async function Ea(a) {
	a = a.data;
	var c = a.task;
	const b = a.id;
	let e = a.args;
	switch (c) {
		case "init":
			Da = a.options || {};
			(c = a.factory) ? (Function("return " + c)()(self), Ca = new self.FlexSearch.Index(Da), delete self.FlexSearch) : Ca = new T(Da);
			postMessage({ id: b });
			break;
		default:
			let d;
			c === "export" && (e[1] ? (e[0] = Da.export, e[2] = 0, e[3] = 1) : e = null);
			c === "import" ? e[0] && (a = await Da.import.call(Ca, e[0]), Ca.import(e[0], a)) : ((d = e && Ca[c].apply(Ca, e)) && d.then && (d = await d), d && d.await && (d = await d.await), c === "search" && d.result && (d = d.result));
			postMessage(c === "search" ? {
				id: b,
				msg: d
			} : { id: b });
	}
}
function Fa(a) {
	Ga.call(a, "add");
	Ga.call(a, "append");
	Ga.call(a, "search");
	Ga.call(a, "update");
	Ga.call(a, "remove");
	Ga.call(a, "searchCache");
}
var Ha, Ia, Ja;
function Ka() {
	Ha = Ja = 0;
}
function Ga(a) {
	this[a + "Async"] = function() {
		const c = arguments;
		var b = c[c.length - 1];
		let e;
		typeof b === "function" && (e = b, delete c[c.length - 1]);
		Ha ? Ja || (Ja = Date.now() - Ia >= this.priority * this.priority * 3) : (Ha = setTimeout(Ka, 0), Ia = Date.now());
		if (Ja) {
			const f = this;
			return new Promise((g) => {
				setTimeout(function() {
					g(f[a + "Async"].apply(f, c));
				}, 0);
			});
		}
		const d = this[a].apply(this, c);
		b = d.then ? d : new Promise((f) => f(d));
		e && b.then(e);
		return b;
	};
}
var V = 0;
function La(a = {}, c) {
	function b(k) {
		function h(l) {
			l = l.data || l;
			const m = l.id, p = m && f.h[m];
			p && (p(l.msg), delete f.h[m]);
		}
		this.worker = k;
		this.h = I();
		if (this.worker) {
			d ? this.worker.on("message", h) : this.worker.onmessage = h;
			if (a.config) return new Promise(function(l) {
				V > 1e9 && (V = 0);
				f.h[++V] = function() {
					l(f);
				};
				f.worker.postMessage({
					id: V,
					task: "init",
					factory: e,
					options: a
				});
			});
			this.priority = a.priority || 4;
			this.encoder = c || null;
			this.worker.postMessage({
				task: "init",
				factory: e,
				options: a
			});
			return this;
		}
	}
	if (!this || this.constructor !== La) return new La(a);
	let e = typeof self !== "undefined" ? self._factory : typeof window !== "undefined" ? window._factory : null;
	e && (e = e.toString());
	const d = typeof window === "undefined", f = this, g = Ma(e, d, a.worker);
	return g.then ? g.then(function(k) {
		return b.call(f, k);
	}) : b.call(this, g);
}
W("add");
W("append");
W("search");
W("update");
W("remove");
W("clear");
W("export");
W("import");
La.prototype.searchCache = la;
Fa(La.prototype);
function W(a) {
	La.prototype[a] = function() {
		const c = this, b = [].slice.call(arguments);
		var e = b[b.length - 1];
		let d;
		typeof e === "function" && (d = e, b.pop());
		e = new Promise(function(f) {
			a === "export" && typeof b[0] === "function" && (b[0] = null);
			V > 1e9 && (V = 0);
			c.h[++V] = f;
			c.worker.postMessage({
				task: a,
				id: V,
				args: b
			});
		});
		return d ? (e.then(d), this) : e;
	};
}
function Ma(a, c, b) {
	return c ? typeof module !== "undefined" ? new (init_worker_threads(), __toCommonJS(worker_threads_exports))["Worker"](__dirname + "/worker/node.js") : import("./worker_threads-D4wNyYLw.js").then(function(worker) {
		return new worker["Worker"](import.meta.dirname + "/node/node.mjs");
	}) : a ? new window.Worker(URL.createObjectURL(new Blob(["onmessage=" + Ea.toString()], { type: "text/javascript" }))) : new window.Worker(typeof b === "string" ? b : import.meta.url.replace("/worker.js", "/worker/worker.js").replace("flexsearch.bundle.module.min.js", "module/worker/worker.js").replace("flexsearch.bundle.module.min.mjs", "module/worker/worker.js"), { type: "module" });
}
Na.prototype.add = function(a, c, b) {
	ba(a) && (c = a, a = ca(c, this.key));
	if (c && (a || a === 0)) {
		if (!b && this.reg.has(a)) return this.update(a, c);
		for (let k = 0, h; k < this.field.length; k++) {
			h = this.B[k];
			var e = this.index.get(this.field[k]);
			if (typeof h === "function") {
				var d = h(c);
				d && e.add(a, d, b, !0);
			} else if (d = h.G, !d || d(c)) h.constructor === String ? h = ["" + h] : M(h) && (h = [h]), Qa(c, h, this.D, 0, e, a, h[0], b);
		}
		if (this.tag) for (e = 0; e < this.A.length; e++) {
			var f = this.A[e];
			d = this.tag.get(this.F[e]);
			let k = I();
			if (typeof f === "function") {
				if (f = f(c), !f) continue;
			} else {
				var g = f.G;
				if (g && !g(c)) continue;
				f.constructor === String && (f = "" + f);
				f = ca(c, f);
			}
			if (d && f) {
				M(f) && (f = [f]);
				for (let h = 0, l, m; h < f.length; h++) if (l = f[h], !k[l] && (k[l] = 1, (g = d.get(l)) ? m = g : d.set(l, m = []), !b || !m.includes(a))) {
					if (m.length === 2 ** 31 - 1) {
						g = new xa(m);
						if (this.fastupdate) for (let p of this.reg.values()) p.includes(m) && (p[p.indexOf(m)] = g);
						d.set(l, m = g);
					}
					m.push(a);
					this.fastupdate && ((g = this.reg.get(a)) ? g.push(m) : this.reg.set(a, [m]));
				}
			}
		}
		if (this.store && (!b || !this.store.has(a))) {
			let k;
			if (this.h) {
				k = I();
				for (let h = 0, l; h < this.h.length; h++) {
					l = this.h[h];
					if ((b = l.G) && !b(c)) continue;
					let m;
					if (typeof l === "function") {
						m = l(c);
						if (!m) continue;
						l = [l.O];
					} else if (M(l) || l.constructor === String) {
						k[l] = c[l];
						continue;
					}
					Ra(c, k, l, 0, l[0], m);
				}
			}
			this.store.set(a, k || c);
		}
		this.worker && (this.fastupdate || this.reg.add(a));
	}
	return this;
};
function Ra(a, c, b, e, d, f) {
	a = a[d];
	if (e === b.length - 1) c[d] = f || a;
	else if (a) if (a.constructor === Array) for (c = c[d] = Array(a.length), d = 0; d < a.length; d++) Ra(a, c, b, e, d);
	else c = c[d] || (c[d] = I()), d = b[++e], Ra(a, c, b, e, d);
}
function Qa(a, c, b, e, d, f, g, k) {
	if (a = a[g]) if (e === c.length - 1) {
		if (a.constructor === Array) {
			if (b[e]) {
				for (c = 0; c < a.length; c++) d.add(f, a[c], !0, !0);
				return;
			}
			a = a.join(" ");
		}
		d.add(f, a, k, !0);
	} else if (a.constructor === Array) for (g = 0; g < a.length; g++) Qa(a, c, b, e, d, f, g, k);
	else g = c[++e], Qa(a, c, b, e, d, f, g, k);
}
function Sa(a, c, b, e) {
	if (!a.length) return a;
	if (a.length === 1) return a = a[0], a = b || a.length > c ? a.slice(b, b + c) : a, e ? Ta.call(this, a) : a;
	let d = [];
	for (let f = 0, g, k; f < a.length; f++) if ((g = a[f]) && (k = g.length)) {
		if (b) {
			if (b >= k) {
				b -= k;
				continue;
			}
			g = g.slice(b, b + c);
			k = g.length;
			b = 0;
		}
		k > c && (g = g.slice(0, c), k = c);
		if (!d.length && k >= c) return e ? Ta.call(this, g) : g;
		d.push(g);
		c -= k;
		if (!c) break;
	}
	d = d.length > 1 ? [].concat.apply([], d) : d[0];
	return e ? Ta.call(this, d) : d;
}
function Ua(a, c, b, e) {
	var d = e[0];
	if (d[0] && d[0].query) return a[c].apply(a, d);
	if (!(c !== "and" && c !== "not" || a.result.length || a.await || d.suggest)) return e.length > 1 && (d = e[e.length - 1]), (e = d.resolve) ? a.await || a.result : a;
	let f = [], g = 0, k = 0, h, l, m, p, u;
	for (c = 0; c < e.length; c++) if (d = e[c]) {
		var r = void 0;
		if (d.constructor === X) r = d.await || d.result;
		else if (d.then || d.constructor === Array) r = d;
		else {
			g = d.limit || 0;
			k = d.offset || 0;
			m = d.suggest;
			l = d.resolve;
			h = ((p = d.highlight || a.highlight) || d.enrich) && l;
			r = d.queue;
			let t = d.async || r, n = d.index, q = d.query;
			n ? a.index || (a.index = n) : n = a.index;
			if (q || d.tag) {
				const x = d.field || d.pluck;
				x && (!q || a.query && !p || (a.query = q, a.field = x, a.highlight = p), n = n.index.get(x));
				if (r && (u || a.await)) {
					u = 1;
					let v;
					const A = a.C.length, D = new Promise(function(F) {
						v = F;
					});
					(function(F, E) {
						D.h = function() {
							E.index = null;
							E.resolve = !1;
							let B = t ? F.searchAsync(E) : F.search(E);
							if (B.then) return B.then(function(z) {
								a.C[A] = z = z.result || z;
								v(z);
								return z;
							});
							B = B.result || B;
							v(B);
							return B;
						};
					})(n, Object.assign({}, d));
					a.C.push(D);
					f[c] = D;
					continue;
				} else d.resolve = !1, d.index = null, r = t ? n.searchAsync(d) : n.search(d), d.resolve = l, d.index = n;
			} else if (d.and) r = Va(d, "and", n);
			else if (d.or) r = Va(d, "or", n);
			else if (d.not) r = Va(d, "not", n);
			else if (d.xor) r = Va(d, "xor", n);
			else continue;
		}
		r.await ? (u = 1, r = r.await) : r.then ? (u = 1, r = r.then(function(t) {
			return t.result || t;
		})) : r = r.result || r;
		f[c] = r;
	}
	u && !a.await && (a.await = new Promise(function(t) {
		a.return = t;
	}));
	if (u) {
		const t = Promise.all(f).then(function(n) {
			for (let q = 0; q < a.C.length; q++) if (a.C[q] === t) {
				a.C[q] = function() {
					return b.call(a, n, g, k, h, l, m, p);
				};
				break;
			}
			Wa(a);
		});
		a.C.push(t);
	} else if (a.await) a.C.push(function() {
		return b.call(a, f, g, k, h, l, m, p);
	});
	else return b.call(a, f, g, k, h, l, m, p);
	return l ? a.await || a.result : a;
}
function Va(a, c, b) {
	a = a[c];
	const e = a[0] || a;
	e.index || (e.index = b);
	b = new X(e);
	a.length > 1 && (b = b[c].apply(b, a.slice(1)));
	return b;
}
X.prototype.or = function() {
	return Ua(this, "or", Xa, arguments);
};
function Xa(a, c, b, e, d, f, g) {
	a.length && (this.result.length && a.push(this.result), a.length < 2 ? this.result = a[0] : (this.result = Ya(a, c, b, !1, this.h), b = 0));
	d && (this.await = null);
	return d ? this.resolve(c, b, e, g) : this;
}
X.prototype.and = function() {
	return Ua(this, "and", Za, arguments);
};
function Za(a, c, b, e, d, f, g) {
	if (!f && !this.result.length) return d ? this.result : this;
	let k;
	if (a.length) if (this.result.length && a.unshift(this.result), a.length < 2) this.result = a[0];
	else {
		let h = 0;
		for (let l = 0, m, p; l < a.length; l++) if ((m = a[l]) && (p = m.length)) h < p && (h = p);
		else if (!f) {
			h = 0;
			break;
		}
		h ? (this.result = $a(a, h, c, b, f, this.h, d), k = !0) : this.result = [];
	}
	else f || (this.result = a);
	d && (this.await = null);
	return d ? this.resolve(c, b, e, g, k) : this;
}
X.prototype.xor = function() {
	return Ua(this, "xor", ab, arguments);
};
function ab(a, c, b, e, d, f, g) {
	if (a.length) if (this.result.length && a.unshift(this.result), a.length < 2) this.result = a[0];
	else {
		a: {
			f = b;
			var k = this.h;
			const h = [], l = I();
			let m = 0;
			for (let p = 0, u; p < a.length; p++) if (u = a[p]) {
				m < u.length && (m = u.length);
				for (let r = 0, t; r < u.length; r++) if (t = u[r]) for (let n = 0, q; n < t.length; n++) q = t[n], l[q] = l[q] ? 2 : 1;
			}
			for (let p = 0, u, r = 0; p < m; p++) for (let t = 0, n; t < a.length; t++) if (n = a[t]) {
				if (u = n[p]) {
					for (let q = 0, x; q < u.length; q++) if (x = u[q], l[x] === 1) if (f) f--;
					else if (d) {
						if (h.push(x), h.length === c) {
							a = h;
							break a;
						}
					} else {
						const v = p + (t ? k : 0);
						h[v] || (h[v] = []);
						h[v].push(x);
						if (++r === c) {
							a = h;
							break a;
						}
					}
				}
			}
			a = h;
		}
		this.result = a;
		k = !0;
	}
	else f || (this.result = a);
	d && (this.await = null);
	return d ? this.resolve(c, b, e, g, k) : this;
}
X.prototype.not = function() {
	return Ua(this, "not", bb, arguments);
};
function bb(a, c, b, e, d, f, g) {
	if (!f && !this.result.length) return d ? this.result : this;
	if (a.length && this.result.length) {
		a: {
			f = b;
			var k = [];
			a = new Set(a.flat().flat());
			for (let h = 0, l, m = 0; h < this.result.length; h++) if (l = this.result[h]) {
				for (let p = 0, u; p < l.length; p++) if (u = l[p], !a.has(u)) {
					if (f) f--;
					else if (d) {
						if (k.push(u), k.length === c) {
							a = k;
							break a;
						}
					} else if (k[h] || (k[h] = []), k[h].push(u), ++m === c) {
						a = k;
						break a;
					}
				}
			}
			a = k;
		}
		this.result = a;
		k = !0;
	}
	d && (this.await = null);
	return d ? this.resolve(c, b, e, g, k) : this;
}
function cb(a, c, b, e, d) {
	let f, g, k;
	typeof d === "string" ? (f = d, d = "") : f = d.template;
	g = f.indexOf("$1");
	k = f.substring(g + 2);
	g = f.substring(0, g);
	let h = d && d.boundary, l = !d || d.clip !== !1, m = d && d.merge && k && g && new RegExp(k + " " + g, "g");
	d = d && d.ellipsis;
	var p = 0;
	if (typeof d === "object") {
		var u = d.template;
		p = u.length - 2;
		d = d.pattern;
	}
	typeof d !== "string" && (d = d === !1 ? "" : "...");
	p && (d = u.replace("$1", d));
	u = d.length - p;
	let r, t;
	typeof h === "object" && (r = h.before, r === 0 && (r = -1), t = h.after, t === 0 && (t = -1), h = h.total || 9e5);
	p = /* @__PURE__ */ new Map();
	for (let Oa = 0, da, db, pa; Oa < c.length; Oa++) {
		let qa;
		if (e) qa = c, pa = e;
		else {
			var n = c[Oa];
			pa = n.field;
			if (!pa) continue;
			qa = n.result;
		}
		db = b.get(pa);
		da = db.encoder;
		n = p.get(da);
		typeof n !== "string" && (n = da.encode(a), p.set(da, n));
		for (let ya = 0; ya < qa.length; ya++) {
			var q = qa[ya].doc;
			if (!q) continue;
			q = ca(q, pa);
			if (!q) continue;
			var x = q.trim().split(/\s+/);
			if (!x.length) continue;
			q = "";
			var v = [];
			let za = [];
			var A = -1, D = -1, F = 0;
			for (var E = 0; E < x.length; E++) {
				var B = x[E], z = da.encode(B);
				z = z.length > 1 ? z.join(" ") : z[0];
				let y;
				if (z && B) {
					var C = B.length, J = (da.split ? B.replace(da.split, "") : B).length - z.length, G = "", N = 0;
					for (var O = 0; O < n.length; O++) {
						var P = n[O];
						if (P) {
							var L = P.length;
							L += J < 0 ? 0 : J;
							N && L <= N || (P = z.indexOf(P), P > -1 && (G = (P ? B.substring(0, P) : "") + g + B.substring(P, P + L) + k + (P + L < C ? B.substring(P + L) : ""), N = L, y = !0));
						}
					}
					G && (h && (A < 0 && (A = q.length + (q ? 1 : 0)), D = q.length + (q ? 1 : 0) + G.length, F += C, za.push(v.length), v.push({ match: G })), q += (q ? " " : "") + G);
				}
				if (!y) B = x[E], q += (q ? " " : "") + B, h && v.push({ text: B });
				else if (h && F >= h) break;
			}
			F = za.length * (f.length - 2);
			if (r || t || h && q.length - F > h) if (F = h + F - u * 2, E = D - A, r > 0 && (E += r), t > 0 && (E += t), E <= F) x = r ? A - (r > 0 ? r : 0) : A - ((F - E) / 2 | 0), v = t ? D + (t > 0 ? t : 0) : x + F, l || (x > 0 && q.charAt(x) !== " " && q.charAt(x - 1) !== " " && (x = q.indexOf(" ", x), x < 0 && (x = 0)), v < q.length && q.charAt(v - 1) !== " " && q.charAt(v) !== " " && (v = q.lastIndexOf(" ", v), v < D ? v = D : ++v)), q = (x ? d : "") + q.substring(x, v) + (v < q.length ? d : "");
			else {
				D = [];
				A = {};
				F = {};
				E = {};
				B = {};
				z = {};
				G = J = C = 0;
				for (O = N = 1;;) {
					var U = void 0;
					for (let y = 0, K; y < za.length; y++) {
						K = za[y];
						if (G) if (J !== G) {
							if (E[y + 1]) continue;
							K += G;
							if (A[K]) {
								C -= u;
								F[y + 1] = 1;
								E[y + 1] = 1;
								continue;
							}
							if (K >= v.length - 1) {
								if (K >= v.length) {
									E[y + 1] = 1;
									K >= x.length && (F[y + 1] = 1);
									continue;
								}
								C -= u;
							}
							q = v[K].text;
							if (L = t && z[y]) if (L > 0) {
								if (q.length > L) if (E[y + 1] = 1, l) q = q.substring(0, L);
								else continue;
								(L -= q.length) || (L = -1);
								z[y] = L;
							} else {
								E[y + 1] = 1;
								continue;
							}
							if (C + q.length + 1 <= h) q = " " + q, D[y] += q;
							else if (l) U = h - C - 1, U > 0 && (q = " " + q.substring(0, U), D[y] += q), E[y + 1] = 1;
							else {
								E[y + 1] = 1;
								continue;
							}
						} else {
							if (E[y]) continue;
							K -= J;
							if (A[K]) {
								C -= u;
								E[y] = 1;
								F[y] = 1;
								continue;
							}
							if (K <= 0) {
								if (K < 0) {
									E[y] = 1;
									F[y] = 1;
									continue;
								}
								C -= u;
							}
							q = v[K].text;
							if (L = r && B[y]) if (L > 0) {
								if (q.length > L) if (E[y] = 1, l) q = q.substring(q.length - L);
								else continue;
								(L -= q.length) || (L = -1);
								B[y] = L;
							} else {
								E[y] = 1;
								continue;
							}
							if (C + q.length + 1 <= h) q += " ", D[y] = q + D[y];
							else if (l) U = q.length + 1 - (h - C), U >= 0 && U < q.length && (q = q.substring(U) + " ", D[y] = q + D[y]), E[y] = 1;
							else {
								E[y] = 1;
								continue;
							}
						}
						else {
							q = v[K].match;
							r && (B[y] = r);
							t && (z[y] = t);
							y && C++;
							let Pa;
							K ? !y && u && (C += u) : (F[y] = 1, E[y] = 1);
							K >= x.length - 1 ? Pa = 1 : K < v.length - 1 && v[K + 1].match ? Pa = 1 : u && (C += u);
							C -= f.length - 2;
							if (!y || C + q.length <= h) D[y] = q;
							else {
								U = N = O = F[y] = 0;
								break;
							}
							Pa && (F[y + 1] = 1, E[y + 1] = 1);
						}
						C += q.length;
						U = A[K] = 1;
					}
					if (U) J === G ? G++ : J++;
					else {
						J === G ? N = 0 : O = 0;
						if (!N && !O) break;
						N ? (J++, G = J) : G++;
					}
				}
				q = "";
				for (let y = 0, K; y < D.length; y++) K = (F[y] ? y ? " " : "" : (y && !d ? " " : "") + d) + D[y], q += K;
				d && !F[D.length] && (q += d);
			}
			m && (q = q.replace(m, " "));
			qa[ya].highlight = q;
		}
		if (e) break;
	}
	return c;
}
function X(a, c) {
	if (!this || this.constructor !== X) return new X(a, c);
	let b = 0, e, d, f, g, k, h;
	if (a && a.index) {
		const l = a;
		c = l.index;
		b = l.boost || 0;
		if (d = l.query) {
			f = l.field || l.pluck;
			g = l.highlight;
			const m = l.resolve;
			a = l.async || l.queue;
			l.resolve = !1;
			l.index = null;
			a = a ? c.searchAsync(l) : c.search(l);
			l.resolve = m;
			l.index = c;
			a = a.result || a;
		} else a = [];
	}
	if (a && a.then) {
		const l = this;
		a = a.then(function(m) {
			l.C[0] = l.result = m.result || m;
			Wa(l);
		});
		e = [a];
		a = [];
		k = new Promise(function(m) {
			h = m;
		});
	}
	this.index = c || null;
	this.result = a || [];
	this.h = b;
	this.C = e || [];
	this.await = k || null;
	this.return = h || null;
	this.highlight = g || null;
	this.query = d || "";
	this.field = f || "";
}
w = X.prototype;
w.limit = function(a) {
	if (this.await) {
		const c = this;
		this.C.push(function() {
			return c.limit(a).result;
		});
	} else if (this.result.length) {
		const c = [];
		for (let b = 0, e; b < this.result.length; b++) if (e = this.result[b]) if (e.length <= a) {
			if (c[b] = e, a -= e.length, !a) break;
		} else {
			c[b] = e.slice(0, a);
			break;
		}
		this.result = c;
	}
	return this;
};
w.offset = function(a) {
	if (this.await) {
		const c = this;
		this.C.push(function() {
			return c.offset(a).result;
		});
	} else if (this.result.length) {
		const c = [];
		for (let b = 0, e; b < this.result.length; b++) if (e = this.result[b]) e.length <= a ? a -= e.length : (c[b] = e.slice(a), a = 0);
		this.result = c;
	}
	return this;
};
w.boost = function(a) {
	if (this.await) {
		const c = this;
		this.C.push(function() {
			return c.boost(a).result;
		});
	} else this.h += a;
	return this;
};
function Wa(a, c) {
	let b = a.result;
	var e = a.await;
	a.await = null;
	for (let d = 0, f; d < a.C.length; d++) if (f = a.C[d]) {
		if (typeof f === "function") b = f(), a.C[d] = b = b.result || b, d--;
		else if (f.h) b = f.h(), a.C[d] = b = b.result || b, d--;
		else if (f.then) return a.await = e;
	}
	e = a.return;
	a.C = [];
	a.return = null;
	c || e(b);
	return b;
}
w.resolve = function(a, c, b, e, d) {
	let f = this.await ? Wa(this, !0) : this.result;
	if (f.then) {
		const g = this;
		return f.then(function() {
			return g.resolve(a, c, b, e, d);
		});
	}
	f.length && (typeof a === "object" ? (e = a.highlight || this.highlight, b = !!e || a.enrich, c = a.offset, a = a.limit) : (e = e || this.highlight, b = !!e || b), f = d ? b ? Ta.call(this.index, f) : f : Sa.call(this.index, f, a || 100, c, b));
	return this.finalize(f, e);
};
w.finalize = function(a, c) {
	if (a.then) {
		const e = this;
		return a.then(function(d) {
			return e.finalize(d, c);
		});
	}
	c && a.length && this.query && (a = cb(this.query, a, this.index.index, this.field, c));
	const b = this.return;
	this.highlight = this.index = this.result = this.C = this.await = this.return = null;
	this.query = this.field = "";
	b && b(a);
	return a;
};
function $a(a, c, b, e, d, f, g) {
	const k = a.length;
	let h = [], l, m;
	l = I();
	for (let p = 0, u, r, t, n; p < c; p++) for (let q = 0; q < k; q++) if (t = a[q], p < t.length && (u = t[p])) for (let x = 0; x < u.length; x++) {
		r = u[x];
		(m = l[r]) ? l[r]++ : (m = 0, l[r] = 1);
		n = h[m] || (h[m] = []);
		if (!g) {
			let v = p + (q || !d ? 0 : f || 0);
			n = n[v] || (n[v] = []);
		}
		n.push(r);
		if (g && b && m === k - 1 && n.length - e === b) return e ? n.slice(e) : n;
	}
	if (a = h.length) if (d) h = h.length > 1 ? Ya(h, b, e, g, f) : (h = h[0]) && b && h.length > b || e ? h.slice(e, b + e) : h;
	else {
		if (a < k) return [];
		h = h[a - 1];
		if (b || e) if (g) {
			if (h.length > b || e) h = h.slice(e, b + e);
		} else {
			d = [];
			for (let p = 0, u; p < h.length; p++) if (u = h[p]) if (e && u.length > e) e -= u.length;
			else {
				if (b && u.length > b || e) u = u.slice(e, b + e), b -= u.length, e && (e -= u.length);
				d.push(u);
				if (!b) break;
			}
			h = d;
		}
	}
	return h;
}
function Ya(a, c, b, e, d) {
	const f = [], g = I();
	let k;
	var h = a.length;
	let l;
	if (e) {
		for (d = h - 1; d >= 0; d--) if (l = (e = a[d]) && e.length) {
			for (h = 0; h < l; h++) if (k = e[h], !g[k]) {
				if (g[k] = 1, b) b--;
				else if (f.push(k), f.length === c) return f;
			}
		}
	} else for (let m = h - 1, p, u = 0; m >= 0; m--) {
		p = a[m];
		for (let r = 0; r < p.length; r++) if (l = (e = p[r]) && e.length) {
			for (let t = 0; t < l; t++) if (k = e[t], !g[k]) if (g[k] = 1, b) b--;
			else {
				let n = (r + (m < h - 1 ? d || 0 : 0)) / (m + 1) | 0;
				(f[n] || (f[n] = [])).push(k);
				if (++u === c) return f;
			}
		}
	}
	return f;
}
function eb(a, c, b, e, d) {
	const f = I(), g = [];
	for (let k = 0, h; k < c.length; k++) {
		h = c[k];
		for (let l = 0; l < h.length; l++) f[h[l]] = 1;
	}
	if (d) {
		for (let k = 0, h; k < a.length; k++) if (h = a[k], f[h]) {
			if (e) e--;
			else if (g.push(h), f[h] = 0, b && --b === 0) break;
		}
	} else for (let k = 0, h, l; k < a.result.length; k++) for (h = a.result[k], c = 0; c < h.length; c++) l = h[c], f[l] && ((g[k] || (g[k] = [])).push(l), f[l] = 0);
	return g;
}
Na.prototype.search = function(a, c, b, e) {
	b || (!c && ba(a) ? (b = a, a = "") : ba(c) && (b = c, c = 0));
	let d = [];
	var f = [];
	let g;
	let k, h, l, m, p;
	let u = 0, r = !0, t;
	if (b) {
		b.constructor === Array && (b = { index: b });
		a = b.query || a;
		g = b.pluck;
		k = b.merge;
		l = b.boost;
		p = g || b.field || (p = b.index) && (p.index ? null : p);
		var n = this.tag && b.tag;
		h = b.suggest;
		r = b.resolve !== !1;
		m = b.cache;
		t = r && this.store && b.highlight;
		var q = !!t || r && this.store && b.enrich;
		c = b.limit || c;
		var x = b.offset || 0;
		c || (c = r ? 100 : 0);
		if (n && (!this.db || !e)) {
			n.constructor !== Array && (n = [n]);
			var v = [];
			for (let B = 0, z; B < n.length; B++) if (z = n[B], z.field && z.tag) {
				var A = z.tag;
				if (A.constructor === Array) for (var D = 0; D < A.length; D++) v.push(z.field, A[D]);
				else v.push(z.field, A);
			} else {
				A = Object.keys(z);
				for (let C = 0, J, G; C < A.length; C++) if (J = A[C], G = z[J], G.constructor === Array) for (D = 0; D < G.length; D++) v.push(J, G[D]);
				else v.push(J, G);
			}
			n = v;
			if (!a) {
				f = [];
				if (v.length) for (n = 0; n < v.length; n += 2) {
					if (this.db) {
						e = this.index.get(v[n]);
						if (!e) continue;
						f.push(e = e.db.tag(v[n + 1], c, x, q));
					} else e = fb.call(this, v[n], v[n + 1], c, x, q);
					d.push(r ? {
						field: v[n],
						tag: v[n + 1],
						result: e
					} : [e]);
				}
				if (f.length) {
					const B = this;
					return Promise.all(f).then(function(z) {
						for (let C = 0; C < z.length; C++) r ? d[C].result = z[C] : d[C] = z[C];
						return r ? d : new X(d.length > 1 ? $a(d, 1, 0, 0, h, l) : d[0], B);
					});
				}
				return r ? d : new X(d.length > 1 ? $a(d, 1, 0, 0, h, l) : d[0], this);
			}
		}
		r || g || !(p = p || this.field) || (M(p) ? g = p : (p.constructor === Array && p.length === 1 && (p = p[0]), g = p.field || p.index));
		p && p.constructor !== Array && (p = [p]);
	}
	p || (p = this.field);
	let F;
	v = (this.worker || this.db) && !e && [];
	for (let B = 0, z, C, J; B < p.length; B++) {
		C = p[B];
		if (this.db && this.tag && !this.B[B]) continue;
		let G;
		M(C) || (G = C, C = G.field, a = G.query || a, c = aa(G.limit, c), x = aa(G.offset, x), h = aa(G.suggest, h), t = r && this.store && aa(G.highlight, t), q = !!t || r && this.store && aa(G.enrich, q), m = aa(G.cache, m));
		if (e) z = e[B];
		else {
			A = G || b || {};
			D = A.enrich;
			var E = this.index.get(C);
			n && (this.db && (A.tag = n, A.field = p, F = E.db.support_tag_search), !F && D && (A.enrich = !1), F || (A.limit = 0, A.offset = 0));
			z = m ? E.searchCache(a, n && !F ? 0 : c, A) : E.search(a, n && !F ? 0 : c, A);
			n && !F && (A.limit = c, A.offset = x);
			D && (A.enrich = D);
			if (v) {
				v[B] = z;
				continue;
			}
		}
		J = (z = z.result || z) && z.length;
		if (n && J) {
			A = [];
			D = 0;
			if (this.db && e) {
				if (!F) for (E = p.length; E < e.length; E++) {
					let N = e[E];
					if (N && N.length) D++, A.push(N);
					else if (!h) return r ? d : new X(d, this);
				}
			} else for (let N = 0, O, P; N < n.length; N += 2) {
				O = this.tag.get(n[N]);
				if (!O) if (h) continue;
				else return r ? d : new X(d, this);
				if ((O = O && O.get(n[N + 1])) && O.length) D++, A.push(O);
				else if (!h) return r ? d : new X(d, this);
			}
			if (D) {
				z = eb(z, A, c, x, r);
				J = z.length;
				if (!J && !h) return r ? z : new X(z, this);
				D--;
			}
		}
		if (J) f[u] = C, d.push(z), u++;
		else if (p.length === 1) return r ? d : new X(d, this);
	}
	if (v) {
		if (this.db && n && n.length && !F) for (q = 0; q < n.length; q += 2) {
			f = this.index.get(n[q]);
			if (!f) if (h) continue;
			else return r ? d : new X(d, this);
			v.push(f.db.tag(n[q + 1], c, x, !1));
		}
		const B = this;
		return Promise.all(v).then(function(z) {
			b && (b.resolve = r);
			z.length && (z = B.search(a, c, b, z));
			return z;
		});
	}
	if (!u) return r ? d : new X(d, this);
	if (g && (!q || !this.store)) return d = d[0], r ? d : new X(d, this);
	v = [];
	for (x = 0; x < f.length; x++) {
		n = d[x];
		q && n.length && typeof n[0].doc === "undefined" && (this.db ? v.push(n = this.index.get(this.field[0]).db.enrich(n)) : n = Ta.call(this, n));
		if (g) return r ? t ? cb(a, n, this.index, g, t) : n : new X(n, this);
		d[x] = {
			field: f[x],
			result: n
		};
	}
	if (q && this.db && v.length) {
		const B = this;
		return Promise.all(v).then(function(z) {
			for (let C = 0; C < z.length; C++) d[C].result = z[C];
			t && (d = cb(a, d, B.index, g, t));
			return k ? gb(d) : d;
		});
	}
	t && (d = cb(a, d, this.index, g, t));
	return k ? gb(d) : d;
};
function gb(a) {
	const c = [], b = I(), e = I();
	for (let d = 0, f, g, k, h, l, m, p; d < a.length; d++) {
		f = a[d];
		g = f.field;
		k = f.result;
		for (let u = 0; u < k.length; u++) if (l = k[u], typeof l !== "object" ? l = { id: h = l } : h = l.id, (m = b[h]) ? m.push(g) : (l.field = b[h] = [g], c.push(l)), p = l.highlight) m = e[h], m || (e[h] = m = {}, l.highlight = m), m[g] = p;
	}
	return c;
}
function fb(a, c, b, e, d) {
	a = this.tag.get(a);
	if (!a) return [];
	a = a.get(c);
	if (!a) return [];
	c = a.length - e;
	if (c > 0) {
		if (b && c > b || e) a = a.slice(e, e + b);
		d && (a = Ta.call(this, a));
	}
	return a;
}
function Ta(a) {
	if (!this || !this.store) return a;
	if (this.db) return this.index.get(this.field[0]).db.enrich(a);
	const c = Array(a.length);
	for (let b = 0, e; b < a.length; b++) e = a[b], c[b] = {
		id: e,
		doc: this.store.get(e)
	};
	return c;
}
function Na(a) {
	if (!this || this.constructor !== Na) return new Na(a);
	const c = a.document || a.doc || a;
	let b, e;
	this.B = [];
	this.field = [];
	this.D = [];
	this.key = (b = c.key || c.id) && hb(b, this.D) || "id";
	(e = a.keystore || 0) && (this.keystore = e);
	this.fastupdate = !!a.fastupdate;
	this.reg = !this.fastupdate || a.worker || a.db ? e ? new S(e) : /* @__PURE__ */ new Set() : e ? new R(e) : /* @__PURE__ */ new Map();
	this.h = (b = c.store || null) && b && b !== !0 && [];
	this.store = b ? e ? new R(e) : /* @__PURE__ */ new Map() : null;
	this.cache = (b = a.cache || null) && new ma(b);
	a.cache = !1;
	this.worker = a.worker || !1;
	this.priority = a.priority || 4;
	this.index = ib.call(this, a, c);
	this.tag = null;
	if (b = c.tag) {
		if (typeof b === "string" && (b = [b]), b.length) {
			this.tag = /* @__PURE__ */ new Map();
			this.A = [];
			this.F = [];
			for (let d = 0, f, g; d < b.length; d++) {
				f = b[d];
				g = f.field || f;
				if (!g) throw Error("The tag field from the document descriptor is undefined.");
				f.custom ? this.A[d] = f.custom : (this.A[d] = hb(g, this.D), f.filter && (typeof this.A[d] === "string" && (this.A[d] = new String(this.A[d])), this.A[d].G = f.filter));
				this.F[d] = g;
				this.tag.set(g, /* @__PURE__ */ new Map());
			}
		}
	}
	if (this.worker) {
		this.fastupdate = !1;
		a = [];
		for (const d of this.index.values()) d.then && a.push(d);
		if (a.length) {
			const d = this;
			return Promise.all(a).then(function(f) {
				let g = 0;
				for (const k of d.index.entries()) {
					const h = k[0];
					let l = k[1];
					l.then && (l = f[g], d.index.set(h, l), g++);
				}
				return d;
			});
		}
	} else a.db && (this.fastupdate = !1, this.mount(a.db));
}
w = Na.prototype;
w.mount = function(a) {
	let c = this.field;
	if (this.tag) for (let f = 0, g; f < this.F.length; f++) {
		g = this.F[f];
		var b = void 0;
		this.index.set(g, b = new T({}, this.reg));
		c === this.field && (c = c.slice(0));
		c.push(g);
		b.tag = this.tag.get(g);
	}
	b = [];
	const e = {
		db: a.db,
		type: a.type,
		fastupdate: a.fastupdate
	};
	for (let f = 0, g, k; f < c.length; f++) {
		e.field = k = c[f];
		g = this.index.get(k);
		const h = new a.constructor(a.id, e);
		h.id = a.id;
		b[f] = h.mount(g);
		g.document = !0;
		f ? g.bypass = !0 : g.store = this.store;
	}
	const d = this;
	return this.db = Promise.all(b).then(function() {
		d.db = !0;
	});
};
w.commit = async function() {
	const a = [];
	for (const c of this.index.values()) a.push(c.commit());
	await Promise.all(a);
	this.reg.clear();
};
w.destroy = function() {
	const a = [];
	for (const c of this.index.values()) a.push(c.destroy());
	return Promise.all(a);
};
function ib(a, c) {
	const b = /* @__PURE__ */ new Map();
	let e = c.index || c.field || c;
	M(e) && (e = [e]);
	for (let f = 0, g, k; f < e.length; f++) {
		g = e[f];
		M(g) || (k = g, g = g.field);
		k = ba(k) ? Object.assign({}, a, k) : a;
		if (this.worker) {
			var d = void 0;
			d = (d = k.encoder) && d.encode ? d : new ka(typeof d === "string" ? va[d] : d || {});
			d = new La(k, d);
			b.set(g, d);
		}
		this.worker || b.set(g, new T(k, this.reg));
		k.custom ? this.B[f] = k.custom : (this.B[f] = hb(g, this.D), k.filter && (typeof this.B[f] === "string" && (this.B[f] = new String(this.B[f])), this.B[f].G = k.filter));
		this.field[f] = g;
	}
	if (this.h) {
		a = c.store;
		M(a) && (a = [a]);
		for (let f = 0, g, k; f < a.length; f++) g = a[f], k = g.field || g, g.custom ? (this.h[f] = g.custom, g.custom.O = k) : (this.h[f] = hb(k, this.D), g.filter && (typeof this.h[f] === "string" && (this.h[f] = new String(this.h[f])), this.h[f].G = g.filter));
	}
	return b;
}
function hb(a, c) {
	const b = a.split(":");
	let e = 0;
	for (let d = 0; d < b.length; d++) a = b[d], a[a.length - 1] === "]" && (a = a.substring(0, a.length - 2)) && (c[e] = !0), a && (b[e++] = a);
	e < b.length && (b.length = e);
	return e > 1 ? b : b[0];
}
w.append = function(a, c) {
	return this.add(a, c, !0);
};
w.update = function(a, c) {
	return this.remove(a).add(a, c);
};
w.remove = function(a) {
	ba(a) && (a = ca(a, this.key));
	for (var c of this.index.values()) c.remove(a, !0);
	if (this.reg.has(a)) {
		if (this.tag && !this.fastupdate) for (let b of this.tag.values()) for (let e of b) {
			c = e[0];
			const d = e[1], f = d.indexOf(a);
			f > -1 && (d.length > 1 ? d.splice(f, 1) : b.delete(c));
		}
		this.store && this.store.delete(a);
		this.reg.delete(a);
	}
	this.cache && this.cache.remove(a);
	return this;
};
w.clear = function() {
	const a = [];
	for (const c of this.index.values()) {
		const b = c.clear();
		b.then && a.push(b);
	}
	if (this.tag) for (const c of this.tag.values()) c.clear();
	this.store && this.store.clear();
	this.cache && this.cache.clear();
	return a.length ? Promise.all(a) : this;
};
w.contain = function(a) {
	return this.db ? this.index.get(this.field[0]).db.has(a) : this.reg.has(a);
};
w.cleanup = function() {
	for (const a of this.index.values()) a.cleanup();
	return this;
};
w.get = function(a) {
	return this.db ? this.index.get(this.field[0]).db.enrich(a).then(function(c) {
		return c[0] && c[0].doc || null;
	}) : this.store.get(a) || null;
};
w.set = function(a, c) {
	typeof a === "object" && (c = a, a = ca(c, this.key));
	this.store.set(a, c);
	return this;
};
w.searchCache = la;
w.export = jb;
w.import = kb;
Fa(Na.prototype);
function lb(a, c = 0) {
	let b = [], e = [];
	c && (c = 25e4 / c * 5e3 | 0);
	for (const d of a.entries()) e.push(d), e.length === c && (b.push(e), e = []);
	e.length && b.push(e);
	return b;
}
function mb(a, c) {
	c || (c = /* @__PURE__ */ new Map());
	for (let b = 0, e; b < a.length; b++) e = a[b], c.set(e[0], e[1]);
	return c;
}
function nb(a, c = 0) {
	let b = [], e = [];
	c && (c = 25e4 / c * 1e3 | 0);
	for (const d of a.entries()) e.push([d[0], lb(d[1])[0] || []]), e.length === c && (b.push(e), e = []);
	e.length && b.push(e);
	return b;
}
function ob(a, c) {
	c || (c = /* @__PURE__ */ new Map());
	for (let b = 0, e, d; b < a.length; b++) e = a[b], d = c.get(e[0]), c.set(e[0], mb(e[1], d));
	return c;
}
function pb(a) {
	let c = [], b = [];
	for (const e of a.keys()) b.push(e), b.length === 25e4 && (c.push(b), b = []);
	b.length && c.push(b);
	return c;
}
function qb(a, c) {
	c || (c = /* @__PURE__ */ new Set());
	for (let b = 0; b < a.length; b++) c.add(a[b]);
	return c;
}
function rb(a, c, b, e, d, f, g = 0) {
	const k = e && e.constructor === Array;
	var h = k ? e.shift() : e;
	if (!h) return this.export(a, c, d, f + 1);
	if ((h = a((c ? c + "." : "") + (g + 1) + "." + b, JSON.stringify(h))) && h.then) {
		const l = this;
		return h.then(function() {
			return rb.call(l, a, c, b, k ? e : null, d, f, g + 1);
		});
	}
	return rb.call(this, a, c, b, k ? e : null, d, f, g + 1);
}
function jb(a, c, b = 0, e = 0) {
	if (b < this.field.length) {
		const g = this.field[b];
		if ((c = this.index.get(g).export(a, g, b, e = 1)) && c.then) {
			const k = this;
			return c.then(function() {
				return k.export(a, g, b + 1);
			});
		}
		return this.export(a, g, b + 1);
	}
	let d, f;
	switch (e) {
		case 0:
			d = "reg";
			f = pb(this.reg);
			c = null;
			break;
		case 1:
			d = "tag";
			f = this.tag && nb(this.tag, this.reg.size);
			c = null;
			break;
		case 2:
			d = "doc";
			f = this.store && lb(this.store);
			c = null;
			break;
		default: return;
	}
	return rb.call(this, a, c, d, f || null, b, e);
}
function kb(a, c) {
	var b = a.split(".");
	b[b.length - 1] === "json" && b.pop();
	const e = b.length > 2 ? b[0] : "";
	b = b.length > 2 ? b[2] : b[1];
	if (this.worker && e) return this.index.get(e).import(a);
	if (c) {
		typeof c === "string" && (c = JSON.parse(c));
		if (e) return this.index.get(e).import(b, c);
		switch (b) {
			case "reg":
				this.fastupdate = !1;
				this.reg = qb(c, this.reg);
				for (let d = 0, f; d < this.field.length; d++) f = this.index.get(this.field[d]), f.fastupdate = !1, f.reg = this.reg;
				if (this.worker) {
					c = [];
					for (const d of this.index.values()) c.push(d.import(a));
					return Promise.all(c);
				}
				break;
			case "tag":
				this.tag = ob(c, this.tag);
				break;
			case "doc": this.store = mb(c, this.store);
		}
	}
}
function sb(a, c) {
	let b = "";
	for (const e of a.entries()) {
		a = e[0];
		const d = e[1];
		let f = "";
		for (let g = 0, k; g < d.length; g++) {
			k = d[g] || [""];
			let h = "";
			for (let l = 0; l < k.length; l++) h += (h ? "," : "") + (c === "string" ? "\"" + k[l] + "\"" : k[l]);
			h = "[" + h + "]";
			f += (f ? "," : "") + h;
		}
		f = "[\"" + a + "\",[" + f + "]]";
		b += (b ? "," : "") + f;
	}
	return b;
}
T.prototype.remove = function(a, c) {
	const b = this.reg.size && (this.fastupdate ? this.reg.get(a) : this.reg.has(a));
	if (b) {
		if (this.fastupdate) {
			for (let e = 0, d, f; e < b.length; e++) if ((d = b[e]) && (f = d.length)) if (d[f - 1] === a) d.pop();
			else {
				const g = d.indexOf(a);
				g >= 0 && d.splice(g, 1);
			}
		} else tb(this.map, a), this.depth && tb(this.ctx, a);
		c || this.reg.delete(a);
	}
	this.db && (this.commit_task.push({ del: a }), this.M && ub(this));
	this.cache && this.cache.remove(a);
	return this;
};
function tb(a, c) {
	let b = 0;
	var e = typeof c === "undefined";
	if (a.constructor === Array) {
		for (let d = 0, f, g, k; d < a.length; d++) if ((f = a[d]) && f.length) {
			if (e) return 1;
			g = f.indexOf(c);
			if (g >= 0) {
				if (f.length > 1) return f.splice(g, 1), 1;
				delete a[d];
				if (b) return 1;
				k = 1;
			} else {
				if (k) return 1;
				b++;
			}
		}
	} else for (let d of a.entries()) e = d[0], tb(d[1], c) ? b++ : a.delete(e);
	return b;
}
var vb = {
	memory: { resolution: 1 },
	performance: {
		resolution: 3,
		fastupdate: !0,
		context: {
			depth: 1,
			resolution: 1
		}
	},
	match: { tokenize: "forward" },
	score: {
		resolution: 9,
		context: {
			depth: 2,
			resolution: 3
		}
	}
};
T.prototype.add = function(a, c, b, e) {
	if (c && (a || a === 0)) {
		if (!e && !b && this.reg.has(a)) return this.update(a, c);
		e = this.depth;
		c = this.encoder.encode(c, !e);
		const l = c.length;
		if (l) {
			const m = I(), p = I(), u = this.resolution;
			for (let r = 0; r < l; r++) {
				let t = c[this.rtl ? l - 1 - r : r];
				var d = t.length;
				if (d && (e || !p[t])) {
					var f = this.score ? this.score(c, t, r, null, 0) : wb(u, l, r), g = "";
					switch (this.tokenize) {
						case "tolerant":
							Y(this, p, t, f, a, b);
							if (d > 2) {
								for (let n = 1, q, x, v, A; n < d - 1; n++) q = t.charAt(n), x = t.charAt(n + 1), v = t.substring(0, n) + x, A = t.substring(n + 2), g = v + q + A, Y(this, p, g, f, a, b), g = v + A, Y(this, p, g, f, a, b);
								Y(this, p, t.substring(0, t.length - 1), f, a, b);
							}
							break;
						case "full": if (d > 2) {
							for (let n = 0, q; n < d; n++) for (f = d; f > n; f--) {
								g = t.substring(n, f);
								q = this.rtl ? d - 1 - n : n;
								var k = this.score ? this.score(c, t, r, g, q) : wb(u, l, r, d, q);
								Y(this, p, g, k, a, b);
							}
							break;
						}
						case "bidirectional":
						case "reverse": if (d > 1) {
							for (k = d - 1; k > 0; k--) {
								g = t[this.rtl ? d - 1 - k : k] + g;
								var h = this.score ? this.score(c, t, r, g, k) : wb(u, l, r, d, k);
								Y(this, p, g, h, a, b);
							}
							g = "";
						}
						case "forward": if (d > 1) {
							for (k = 0; k < d; k++) g += t[this.rtl ? d - 1 - k : k], Y(this, p, g, f, a, b);
							break;
						}
						default: if (Y(this, p, t, f, a, b), e && l > 1 && r < l - 1) for (d = this.N, g = t, f = Math.min(e + 1, this.rtl ? r + 1 : l - r), k = 1; k < f; k++) {
							t = c[this.rtl ? l - 1 - r - k : r + k];
							h = this.bidirectional && t > g;
							const n = this.score ? this.score(c, g, r, t, k - 1) : wb(d + (l / 2 > d ? 0 : 1), l, r, f - 1, k - 1);
							Y(this, m, h ? g : t, n, a, b, h ? t : g);
						}
					}
				}
			}
			this.fastupdate || this.reg.add(a);
		}
	}
	this.db && (this.commit_task.push(b ? { ins: a } : { del: a }), this.M && ub(this));
	return this;
};
function Y(a, c, b, e, d, f, g) {
	let k, h;
	if (!(k = c[b]) || g && !k[g]) {
		g ? (c = k || (c[b] = I()), c[g] = 1, h = a.ctx, (k = h.get(g)) ? h = k : h.set(g, h = a.keystore ? new R(a.keystore) : /* @__PURE__ */ new Map())) : (h = a.map, c[b] = 1);
		(k = h.get(b)) ? h = k : h.set(b, h = k = []);
		if (f) {
			for (let l = 0, m; l < k.length; l++) if ((m = k[l]) && m.includes(d)) {
				if (l <= e) return;
				m.splice(m.indexOf(d), 1);
				a.fastupdate && (c = a.reg.get(d)) && c.splice(c.indexOf(m), 1);
				break;
			}
		}
		h = h[e] || (h[e] = []);
		h.push(d);
		if (h.length === 2 ** 31 - 1) {
			c = new xa(h);
			if (a.fastupdate) for (let l of a.reg.values()) l.includes(h) && (l[l.indexOf(h)] = c);
			k[e] = h = c;
		}
		a.fastupdate && ((e = a.reg.get(d)) ? e.push(h) : a.reg.set(d, [h]));
	}
}
function wb(a, c, b, e, d) {
	return b && a > 1 ? c + (e || 0) <= a ? b + (d || 0) : (a - 1) / (c + (e || 0)) * (b + (d || 0)) + 1 | 0 : 0;
}
T.prototype.search = function(a, c, b) {
	b || (c || typeof a !== "object" ? typeof c === "object" && (b = c, c = 0) : (b = a, a = ""));
	if (b && b.cache) return b.cache = !1, a = this.searchCache(a, c, b), b.cache = !0, a;
	let e = [], d, f, g, k = 0, h, l, m, p, u;
	b && (a = b.query || a, c = b.limit || c, k = b.offset || 0, f = b.context, g = b.suggest, u = (h = b.resolve) && b.enrich, m = b.boost, p = b.resolution, l = this.db && b.tag);
	typeof h === "undefined" && (h = this.resolve);
	f = this.depth && f !== !1;
	let r = this.encoder.encode(a, !f);
	d = r.length;
	c = c || (h ? 100 : 0);
	if (d === 1) return xb.call(this, r[0], "", c, k, h, u, l);
	if (d === 2 && f && !g) return xb.call(this, r[1], r[0], c, k, h, u, l);
	let t = I(), n = 0, q;
	f && (q = r[0], n = 1);
	p || p === 0 || (p = q ? this.N : this.resolution);
	if (this.db) {
		if (this.db.search && (b = this.db.search(this, r, c, k, g, h, u, l), b !== !1)) return b;
		const x = this;
		return async function() {
			for (let v, A; n < d; n++) {
				if ((A = r[n]) && !t[A]) {
					t[A] = 1;
					v = await yb(x, A, q, 0, 0, !1, !1);
					if (v = zb(v, e, g, p)) {
						e = v;
						break;
					}
					q && (g && v && e.length || (q = A));
				}
				g && q && n === d - 1 && !e.length && (p = x.resolution, q = "", n = -1, t = I());
			}
			return Ab(e, p, c, k, g, m, h);
		}();
	}
	for (let x, v; n < d; n++) {
		if ((v = r[n]) && !t[v]) {
			t[v] = 1;
			x = yb(this, v, q, 0, 0, !1, !1);
			if (x = zb(x, e, g, p)) {
				e = x;
				break;
			}
			q && (g && x && e.length || (q = v));
		}
		g && q && n === d - 1 && !e.length && (p = this.resolution, q = "", n = -1, t = I());
	}
	return Ab(e, p, c, k, g, m, h);
};
function Ab(a, c, b, e, d, f, g) {
	let k = a.length, h = a;
	if (k > 1) h = $a(a, c, b, e, d, f, g);
	else if (k === 1) return g ? Sa.call(null, a[0], b, e) : new X(a[0], this);
	return g ? h : new X(h, this);
}
function xb(a, c, b, e, d, f, g) {
	a = yb(this, a, c, b, e, d, f, g);
	return this.db ? a.then(function(k) {
		return d ? k || [] : new X(k, this);
	}) : a && a.length ? d ? Sa.call(this, a, b, e) : new X(a, this) : d ? [] : new X([], this);
}
function zb(a, c, b, e) {
	let d = [];
	if (a && a.length) {
		if (a.length <= e) {
			c.push(a);
			return;
		}
		for (let f = 0, g; f < e; f++) if (g = a[f]) d[f] = g;
		if (d.length) {
			c.push(d);
			return;
		}
	}
	if (!b) return d;
}
function yb(a, c, b, e, d, f, g, k) {
	let h;
	b && (h = a.bidirectional && c > b) && (h = b, b = c, c = h);
	if (a.db) return a.db.get(c, b, e, d, f, g, k);
	a = b ? (a = a.ctx.get(b)) && a.get(c) : a.map.get(c);
	return a;
}
function T(a, c) {
	if (!this || this.constructor !== T) return new T(a);
	if (a) {
		var b = M(a) ? a : a.preset;
		b && (a = Object.assign({}, vb[b], a));
	} else a = {};
	b = a.context;
	const e = b === !0 ? { depth: 1 } : b || {}, d = M(a.encoder) ? va[a.encoder] : a.encode || a.encoder || {};
	this.encoder = d.encode ? d : typeof d === "object" ? new ka(d) : { encode: d };
	this.resolution = a.resolution || 9;
	this.tokenize = b = (b = a.tokenize) && b !== "default" && b !== "exact" && b || "strict";
	this.depth = b === "strict" && e.depth || 0;
	this.bidirectional = e.bidirectional !== !1;
	this.fastupdate = !!a.fastupdate;
	this.score = a.score || null;
	(b = a.keystore || 0) && (this.keystore = b);
	this.map = b ? new R(b) : /* @__PURE__ */ new Map();
	this.ctx = b ? new R(b) : /* @__PURE__ */ new Map();
	this.reg = c || (this.fastupdate ? b ? new R(b) : /* @__PURE__ */ new Map() : b ? new S(b) : /* @__PURE__ */ new Set());
	this.N = e.resolution || 3;
	this.rtl = d.rtl || a.rtl || !1;
	this.cache = (b = a.cache || null) && new ma(b);
	this.resolve = a.resolve !== !1;
	if (b = a.db) this.db = this.mount(b);
	this.M = a.commit !== !1;
	this.commit_task = [];
	this.commit_timer = null;
	this.priority = a.priority || 4;
}
w = T.prototype;
w.mount = function(a) {
	this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
	return a.mount(this);
};
w.commit = function() {
	this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
	return this.db.commit(this);
};
w.destroy = function() {
	this.commit_timer && (clearTimeout(this.commit_timer), this.commit_timer = null);
	return this.db.destroy();
};
function ub(a) {
	a.commit_timer || (a.commit_timer = setTimeout(function() {
		a.commit_timer = null;
		a.db.commit(a);
	}, 1));
}
w.clear = function() {
	this.map.clear();
	this.ctx.clear();
	this.reg.clear();
	this.cache && this.cache.clear();
	return this.db ? (this.commit_timer && clearTimeout(this.commit_timer), this.commit_timer = null, this.commit_task = [], this.db.clear()) : this;
};
w.append = function(a, c) {
	return this.add(a, c, !0);
};
w.contain = function(a) {
	return this.db ? this.db.has(a) : this.reg.has(a);
};
w.update = function(a, c) {
	const b = this, e = this.remove(a);
	return e && e.then ? e.then(() => b.add(a, c)) : this.add(a, c);
};
w.cleanup = function() {
	if (!this.fastupdate) return this;
	tb(this.map);
	this.depth && tb(this.ctx);
	return this;
};
w.searchCache = la;
w.export = function(a, c, b = 0, e = 0) {
	let d, f;
	switch (e) {
		case 0:
			d = "reg";
			f = pb(this.reg);
			break;
		case 1:
			d = "cfg";
			f = null;
			break;
		case 2:
			d = "map";
			f = lb(this.map, this.reg.size);
			break;
		case 3:
			d = "ctx";
			f = nb(this.ctx, this.reg.size);
			break;
		default: return;
	}
	return rb.call(this, a, c, d, f, b, e);
};
w.import = function(a, c) {
	if (c) switch (typeof c === "string" && (c = JSON.parse(c)), a = a.split("."), a[a.length - 1] === "json" && a.pop(), a.length === 3 && a.shift(), a = a.length > 1 ? a[1] : a[0], a) {
		case "reg":
			this.fastupdate = !1;
			this.reg = qb(c, this.reg);
			break;
		case "map":
			this.map = mb(c, this.map);
			break;
		case "ctx": this.ctx = ob(c, this.ctx);
	}
};
w.serialize = function(a = !0) {
	let c = "", b = "", e = "";
	if (this.reg.size) {
		let f;
		for (var d of this.reg.keys()) f || (f = typeof d), c += (c ? "," : "") + (f === "string" ? "\"" + d + "\"" : d);
		c = "index.reg=new Set([" + c + "]);";
		b = sb(this.map, f);
		b = "index.map=new Map([" + b + "]);";
		for (const g of this.ctx.entries()) {
			d = g[0];
			let k = sb(g[1], f);
			k = "new Map([" + k + "])";
			k = "[\"" + d + "\"," + k + "]";
			e += (e ? "," : "") + k;
		}
		e = "index.ctx=new Map([" + e + "]);";
	}
	return a ? "function inject(index){" + c + b + e + "}" : c + b + e;
};
Fa(T.prototype);
var Bb = typeof window !== "undefined" && (window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), Cb = [
	"map",
	"ctx",
	"tag",
	"reg",
	"cfg"
], Db = I();
function Eb(a, c = {}) {
	if (!this || this.constructor !== Eb) return new Eb(a, c);
	typeof a === "object" && (c = a, a = a.name);
	a || console.info("Default storage space was used, because a name was not passed.");
	this.id = "flexsearch" + (a ? ":" + a.toLowerCase().replace(/[^a-z0-9_\-]/g, "") : "");
	this.field = c.field ? c.field.toLowerCase().replace(/[^a-z0-9_\-]/g, "") : "";
	this.type = c.type;
	this.fastupdate = this.support_tag_search = !1;
	this.db = null;
	this.h = {};
}
w = Eb.prototype;
w.mount = function(a) {
	if (a.index) return a.mount(this);
	a.db = this;
	return this.open();
};
w.open = function() {
	if (this.db) return this.db;
	let a = this;
	navigator.storage && navigator.storage.persist && navigator.storage.persist();
	Db[a.id] || (Db[a.id] = []);
	Db[a.id].push(a.field);
	const c = Bb.open(a.id, 1);
	c.onupgradeneeded = function() {
		const b = a.db = this.result;
		for (let e = 0, d; e < Cb.length; e++) {
			d = Cb[e];
			for (let f = 0, g; f < Db[a.id].length; f++) g = Db[a.id][f], b.objectStoreNames.contains(d + (d !== "reg" ? g ? ":" + g : "" : "")) || b.createObjectStore(d + (d !== "reg" ? g ? ":" + g : "" : ""));
		}
	};
	return a.db = Z(c, function(b) {
		a.db = b;
		a.db.onversionchange = function() {
			a.close();
		};
	});
};
w.close = function() {
	this.db && this.db.close();
	this.db = null;
};
w.destroy = function() {
	return Z(Bb.deleteDatabase(this.id));
};
w.clear = function() {
	const a = [];
	for (let b = 0, e; b < Cb.length; b++) {
		e = Cb[b];
		for (let d = 0, f; d < Db[this.id].length; d++) f = Db[this.id][d], a.push(e + (e !== "reg" ? f ? ":" + f : "" : ""));
	}
	const c = this.db.transaction(a, "readwrite");
	for (let b = 0; b < a.length; b++) c.objectStore(a[b]).clear();
	return Z(c);
};
w.get = function(a, c, b = 0, e = 0, d = !0, f = !1) {
	a = this.db.transaction((c ? "ctx" : "map") + (this.field ? ":" + this.field : ""), "readonly").objectStore((c ? "ctx" : "map") + (this.field ? ":" + this.field : "")).get(c ? c + ":" + a : a);
	const g = this;
	return Z(a).then(function(k) {
		let h = [];
		if (!k || !k.length) return h;
		if (d) {
			if (!b && !e && k.length === 1) return k[0];
			for (let l = 0, m; l < k.length; l++) if ((m = k[l]) && m.length) {
				if (e >= m.length) {
					e -= m.length;
					continue;
				}
				const p = b ? e + Math.min(m.length - e, b) : m.length;
				for (let u = e; u < p; u++) h.push(m[u]);
				e = 0;
				if (h.length === b) break;
			}
			return f ? g.enrich(h) : h;
		}
		return k;
	});
};
w.tag = function(a, c = 0, b = 0, e = !1) {
	a = this.db.transaction("tag" + (this.field ? ":" + this.field : ""), "readonly").objectStore("tag" + (this.field ? ":" + this.field : "")).get(a);
	const d = this;
	return Z(a).then(function(f) {
		if (!f || !f.length || b >= f.length) return [];
		if (!c && !b) return f;
		f = f.slice(b, b + c);
		return e ? d.enrich(f) : f;
	});
};
w.enrich = function(a) {
	typeof a !== "object" && (a = [a]);
	const c = this.db.transaction("reg", "readonly").objectStore("reg"), b = [];
	for (let e = 0; e < a.length; e++) b[e] = Z(c.get(a[e]));
	return Promise.all(b).then(function(e) {
		for (let d = 0; d < e.length; d++) e[d] = {
			id: a[d],
			doc: e[d] ? JSON.parse(e[d]) : null
		};
		return e;
	});
};
w.has = function(a) {
	a = this.db.transaction("reg", "readonly").objectStore("reg").getKey(a);
	return Z(a).then(function(c) {
		return !!c;
	});
};
w.search = null;
w.info = function() {};
w.transaction = function(a, c, b) {
	a += a !== "reg" ? this.field ? ":" + this.field : "" : "";
	let e = this.h[a + ":" + c];
	if (e) return b.call(this, e);
	let d = this.db.transaction(a, c);
	this.h[a + ":" + c] = e = d.objectStore(a);
	const f = b.call(this, e);
	this.h[a + ":" + c] = null;
	return Z(d).finally(function() {
		return f;
	});
};
w.commit = async function(a) {
	let c = a.commit_task, b = [];
	a.commit_task = [];
	for (let e = 0, d; e < c.length; e++) d = c[e], d.del && b.push(d.del);
	b.length && await this.remove(b);
	a.reg.size && (await this.transaction("map", "readwrite", function(e) {
		for (const d of a.map) {
			const f = d[0], g = d[1];
			g.length && (e.get(f).onsuccess = function() {
				let k = this.result;
				var h;
				if (k && k.length) {
					const l = Math.max(k.length, g.length);
					for (let m = 0, p, u; m < l; m++) if ((u = g[m]) && u.length) {
						if ((p = k[m]) && p.length) for (h = 0; h < u.length; h++) p.push(u[h]);
						else k[m] = u;
						h = 1;
					}
				} else k = g, h = 1;
				h && e.put(k, f);
			});
		}
	}), await this.transaction("ctx", "readwrite", function(e) {
		for (const d of a.ctx) {
			const f = d[0], g = d[1];
			for (const k of g) {
				const h = k[0], l = k[1];
				l.length && (e.get(f + ":" + h).onsuccess = function() {
					let m = this.result;
					var p;
					if (m && m.length) {
						const u = Math.max(m.length, l.length);
						for (let r = 0, t, n; r < u; r++) if ((n = l[r]) && n.length) {
							if ((t = m[r]) && t.length) for (p = 0; p < n.length; p++) t.push(n[p]);
							else m[r] = n;
							p = 1;
						}
					} else m = l, p = 1;
					p && e.put(m, f + ":" + h);
				});
			}
		}
	}), a.store ? await this.transaction("reg", "readwrite", function(e) {
		for (const d of a.store) {
			const f = d[0], g = d[1];
			e.put(typeof g === "object" ? JSON.stringify(g) : 1, f);
		}
	}) : a.bypass || await this.transaction("reg", "readwrite", function(e) {
		for (const d of a.reg.keys()) e.put(1, d);
	}), a.tag && await this.transaction("tag", "readwrite", function(e) {
		for (const d of a.tag) {
			const f = d[0], g = d[1];
			g.length && (e.get(f).onsuccess = function() {
				let k = this.result;
				k = k && k.length ? k.concat(g) : g;
				e.put(k, f);
			});
		}
	}), a.map.clear(), a.ctx.clear(), a.tag && a.tag.clear(), a.store && a.store.clear(), a.document || a.reg.clear());
};
function Fb(a, c, b) {
	const e = a.value;
	let d, f = 0;
	for (let g = 0, k; g < e.length; g++) {
		if (k = b ? e : e[g]) {
			for (let h = 0, l, m; h < c.length; h++) if (m = c[h], l = k.indexOf(m), l >= 0) if (d = 1, k.length > 1) k.splice(l, 1);
			else {
				e[g] = [];
				break;
			}
			f += k.length;
		}
		if (b) break;
	}
	f ? d && a.update(e) : a.delete();
	a.continue();
}
w.remove = function(a) {
	typeof a !== "object" && (a = [a]);
	return Promise.all([
		this.transaction("map", "readwrite", function(c) {
			c.openCursor().onsuccess = function() {
				const b = this.result;
				b && Fb(b, a);
			};
		}),
		this.transaction("ctx", "readwrite", function(c) {
			c.openCursor().onsuccess = function() {
				const b = this.result;
				b && Fb(b, a);
			};
		}),
		this.transaction("tag", "readwrite", function(c) {
			c.openCursor().onsuccess = function() {
				const b = this.result;
				b && Fb(b, a, !0);
			};
		}),
		this.transaction("reg", "readwrite", function(c) {
			for (let b = 0; b < a.length; b++) c.delete(a[b]);
		})
	]);
};
function Z(a, c) {
	return new Promise((b, e) => {
		a.onsuccess = a.oncomplete = function() {
			c && c(this.result);
			c = null;
			b(this.result);
		};
		a.onerror = a.onblocked = e;
		a = null;
	});
}
var Document = Na;
//#endregion
//#region src/routes/api.chat.ts
var searchServer = createSearchServer();
async function createSearchServer() {
	const search = new Document({ document: {
		id: "url",
		index: [
			"title",
			"description",
			"content"
		],
		store: true
	} });
	const docs = await chunkedAll(source.getPages().map(async (page) => {
		if (!("getText" in page.data)) return null;
		return {
			title: page.data.title,
			description: page.data.description,
			url: page.url,
			content: await page.data.getText("processed")
		};
	}));
	for (const doc of docs) if (doc) search.add(doc);
	return search;
}
async function chunkedAll(promises) {
	const SIZE = 50;
	const out = [];
	for (let i = 0; i < promises.length; i += SIZE) out.push(...await Promise.all(promises.slice(i, i + SIZE)));
	return out;
}
var openrouter = createOpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });
/** System prompt, you can update it to provide more specific information */
var systemPrompt = [
	"You are an AI assistant for a documentation site.",
	"Use the `search` tool to retrieve relevant docs context before answering when needed.",
	"The `search` tool returns raw JSON results from documentation. Use those results to ground your answer and cite sources as markdown links using the document `url` field when available.",
	"If you cannot find the answer in search results, say you do not know and suggest a better search query."
].join("\n");
var Route = createFileRoute("/api/chat")({ server: { handlers: { POST: async (ctx) => {
	const reqJson = await ctx.request.json();
	return streamText({
		model: openrouter.chat(process.env.OPENROUTER_MODEL ?? "anthropic/claude-3.5-sonnet"),
		stopWhen: stepCountIs(5),
		tools: { search: searchTool },
		messages: [{
			role: "system",
			content: systemPrompt
		}, ...await convertToModelMessages(reqJson.messages ?? [], { convertDataPart(part) {
			if (part.type === "data-client") return {
				type: "text",
				text: `[Client Context: ${JSON.stringify(part.data)}]`
			};
		} })],
		toolChoice: "auto"
	}).toUIMessageStreamResponse();
} } } });
var searchTool = tool({
	description: "Search the docs content and return raw JSON results.",
	inputSchema: object$1({
		query: string(),
		limit: number().int().min(1).max(100).default(10)
	}),
	async execute({ query, limit }) {
		return await (await searchServer).searchAsync(query, {
			limit,
			merge: true,
			enrich: true
		});
	}
});
//#endregion
//#region src/routeTree.gen.ts
var LlmsDottxtRoute = Route$4.update({
	id: "/llms.txt",
	path: "/llms.txt",
	getParentRoute: () => Route$5
});
var LlmsFullDottxtRoute = Route$3.update({
	id: "/llms-full.txt",
	path: "/llms-full.txt",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var PlacesAutocompleteSplatRoute = Route$6.update({
	id: "/places-autocomplete/$",
	path: "/places-autocomplete/$",
	getParentRoute: () => Route$5
});
var PaymentCardIconsSplatRoute = Route$7.update({
	id: "/payment-card-icons/$",
	path: "/payment-card-icons/$",
	getParentRoute: () => Route$5
});
var InputTagSplatRoute = Route$8.update({
	id: "/input-tag/$",
	path: "/input-tag/$",
	getParentRoute: () => Route$5
});
var AppOnboardSplatRoute = Route$9.update({
	id: "/app-onboard/$",
	path: "/app-onboard/$",
	getParentRoute: () => Route$5
});
var ApiSearchRoute = Route$1.update({
	id: "/api/search",
	path: "/api/search",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	LlmsFullDottxtRoute,
	LlmsDottxtRoute,
	ApiChatRoute: Route.update({
		id: "/api/chat",
		path: "/api/chat",
		getParentRoute: () => Route$5
	}),
	ApiSearchRoute,
	AppOnboardSplatRoute,
	InputTagSplatRoute,
	PaymentCardIconsSplatRoute,
	PlacesAutocompleteSplatRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region node_modules/fumadocs-ui/dist/layouts/home/not-found.js
/**
* the default not found page content, please make your own if you want to customize it.
*/
function DefaultNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col px-8 justify-center flex-1 text-center items-center gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-6xl font-bold text-fd-muted-foreground",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nLabel, { label: "notFoundTitle" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-fd-muted-foreground max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nLabel, { label: "notFoundDescription" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
				href: "/",
				className: twMerge(buttonVariants({
					className: "mt-4 gap-1.5",
					variant: "primary"
				})),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nLabel, { label: "notFoundLink" })]
			})
		]
	});
}
//#endregion
//#region src/components/not-found.tsx
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeLayout, {
		...baseOptions(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultNotFound, {})
	});
}
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		defaultPreload: "intent",
		scrollRestoration: true,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { getRouter };
