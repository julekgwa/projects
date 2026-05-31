import { n as createLucideIcon } from "./search-DmwepcW5.js";
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Airplay = createLucideIcon("airplay", [["path", {
	d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
	key: "ns4c3b"
}], ["path", {
	d: "m12 15 5 6H7Z",
	key: "14qnn2"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Languages = createLucideIcon("languages", [
	["path", {
		d: "m5 8 6 6",
		key: "1wu5hv"
	}],
	["path", {
		d: "m4 14 6-6 2-3",
		key: "1k1g8d"
	}],
	["path", {
		d: "M2 5h12",
		key: "or177f"
	}],
	["path", {
		d: "M7 2h1",
		key: "1t2jsx"
	}],
	["path", {
		d: "m22 22-5-10-5 10",
		key: "don7ne"
	}],
	["path", {
		d: "M14 18h6",
		key: "1m8k6r"
	}]
]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Moon = createLucideIcon("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]);
/**
* @license lucide-react v1.17.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sun = createLucideIcon("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]);
//#endregion
//#region node_modules/fumadocs-core/dist/utils-Dn9VIXRN.js
/**
* Search the path of a node in the tree matched by the matcher.
*
* @returns The path to the target node (from starting root), or null if the page doesn't exist
*/
function findPath(nodes, matcher, options = {}) {
	const { includeSeparator = true } = options;
	function run(nodes) {
		let separator;
		for (const node of nodes) {
			if (matcher(node)) {
				const items = [];
				if (separator) items.push(separator);
				items.push(node);
				return items;
			}
			if (node.type === "separator" && includeSeparator) {
				separator = node;
				continue;
			}
			if (node.type === "folder") {
				const items = node.index && matcher(node.index) ? [node.index] : run(node.children);
				if (items) {
					items.unshift(node);
					if (separator) items.unshift(separator);
					return items;
				}
			}
		}
	}
	return run(nodes) ?? null;
}
var VisitBreak = Symbol("VisitBreak");
/**
* Perform a depth-first search on page tree visiting every node.
*
* @param root - the root of page tree to visit.
* @param visitor - function to receive nodes, return `skip` to skip the children of current node, `break` to stop the search entirely.
*/
function visit(root, visitor) {
	function onNode(node, parent) {
		const result = visitor(node, parent);
		switch (result) {
			case "skip": return node;
			case "break": throw VisitBreak;
			default: if (result) node = result;
		}
		if ("index" in node && node.index) node.index = onNode(node.index, node);
		if ("fallback" in node && node.fallback) node.fallback = onNode(node.fallback, node);
		if ("children" in node) for (let i = 0; i < node.children.length; i++) node.children[i] = onNode(node.children[i], node);
		return node;
	}
	try {
		return onNode(root);
	} catch (e) {
		if (e === VisitBreak) return root;
		throw e;
	}
}
//#endregion
//#region src/lib/shared.ts
var appName = "React Native Libraries";
var siteUrl = "https://react-native-libraries.vercel.app";
var docsRoute = "/docs";
var componentLinks = [
	{
		label: "Places Autocomplete",
		to: "/places-autocomplete"
	},
	{
		label: "App Onboard",
		to: "/app-onboard"
	},
	{
		label: "Payment Card Icons",
		to: "/payment-card-icons"
	},
	{
		label: "Input Tag",
		to: "/input-tag"
	}
];
var packages = [
	{
		id: "places-autocomplete",
		name: "RN Places Autocomplete",
		description: "Provider-agnostic autocomplete for addresses and places. Supports OpenStreetMap, Google Places, Mapbox, and more.",
		tags: [
			"Multiple providers",
			"Recent searches",
			"Perf optimized",
			"Customizable"
		],
		to: "/places-autocomplete"
	},
	{
		id: "app-onboard",
		name: "RN App Onboard",
		description: "A library for creating compelling onboarding experiences in React Native applications.",
		tags: [
			"Multiple styles",
			"Smooth animations",
			"Cross-platform",
			"TypeScript ready"
		],
		to: "/app-onboard"
	},
	{
		id: "payment-card-icons",
		name: "RN Payment Card Icons",
		description: "High-quality payment card brand icons as React Native SVG components, supporting multiple styles and variants.",
		tags: [
			"17+ providers",
			"Multiple styles",
			"Zero dependencies",
			"Accessible"
		],
		to: "/payment-card-icons"
	},
	{
		id: "input-tag",
		name: "RN Input Tag",
		description: "A versatile component for entering and managing tags within React Native applications.",
		tags: [
			"Tag management",
			"Autocomplete",
			"Custom rendering",
			"Form integration"
		],
		to: "/input-tag"
	}
];
var packageGitConfig = {
	"places-autocomplete": {
		owner: "julekgwa",
		repo: "react-native-places-autocomplete",
		branch: "main"
	},
	"app-onboard": {
		owner: "julekgwa",
		repo: "react-native-app-onboard",
		branch: "main"
	},
	"payment-card-icons": {
		owner: "julekgwa",
		repo: "react-native-payment-card-icons",
		branch: "main"
	},
	"input-tag": {
		owner: "julekgwa",
		repo: "react-native-input-tag",
		branch: "main"
	}
};
//#endregion
export { packages as a, visit as c, Languages as d, ChevronDown as f, packageGitConfig as i, Sun as l, componentLinks as n, siteUrl as o, Airplay as p, docsRoute as r, findPath as s, appName as t, Moon as u };
