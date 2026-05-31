import { a as __toESM, r as __exportAll } from "./chunk-_TIqcEvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BtDrtBkJ.js";
//#region content/docs/places-autocomplete/images/providers-dark.png
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var providers_dark_default = "/assets/providers-dark-DHfemkQ8.png";
//#endregion
//#region content/docs/places-autocomplete/images/providers-light.png
var providers_light_default = "/assets/providers-light-BUhRFaJ0.png";
//#endregion
//#region content/docs/places-autocomplete/index.mdx?collection=docs
var places_autocomplete_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var frontmatter = {
	"title": "React Native Places Autocomplete",
	"description": "A provider-agnostic React Native autocomplete component for searching addresses and places. Supports Google Places, OpenStreetMap, Mapbox, and more."
};
var _markdown = "\n\n\n\n<h1 align=\"center\">\n  react-native-places-autocomplete\n</h1>\n\nA provider-agnostic React Native autocomplete component for searching addresses and places. Supports multiple **built-in geocoding providers** including OpenStreetMap (free), OpenCage, Google Places, Mapbox, LocationIQ, Geoapify, HERE, and TomTom, or use any custom API. Easy to integrate, fully customizable, and lightweight.\n\n<BadgeRow>\n  <a href=\"https://www.npmjs.com/package/@julekgwa/react-native-places-autocomplete\">\n    <img src=\"https://img.shields.io/npm/v/@julekgwa/react-native-places-autocomplete.svg\" alt=\"npm version\" />\n  </a>\n\n  <a href=\"https://www.npmjs.com/package/@julekgwa/react-native-places-autocomplete\">\n    <img src=\"https://img.shields.io/npm/dm/@julekgwa/react-native-places-autocomplete.svg\" alt=\"npm downloads\" />\n  </a>\n\n  <a href=\"https://github.com/julekgwa/react-native-places-autocomplete/blob/main/LICENSE\">\n    <img src=\"https://img.shields.io/npm/l/@julekgwa/react-native-places-autocomplete.svg\" alt=\"license\" />\n  </a>\n\n  <a href=\"https://github.com/julekgwa/react-native-places-autocomplete\">\n    <img src=\"https://img.shields.io/github/stars/julekgwa/react-native-places-autocomplete.svg?style=social\" alt=\"stars\" />\n  </a>\n</BadgeRow>\n\n<img src=\"providersLight\" alt=\"Supported geocoding providers\" className=\"block dark:hidden\" />\n\n<img src=\"providersDark\" alt=\"Supported geocoding providers\" className=\"hidden dark:block\" />\n\n<BadgeRow>\n  <a href=\"https://snack.expo.dev/@lekgwaraj/react-native-places-autocomplete\">\n    <img src=\"https://img.shields.io/badge/Try%20it%20on-Expo%20Snack-4630EB.svg?style=for-the-badge&logo=expo&labelColor=FFF&logoColor=000\" alt=\"Try it on Expo Snack\" />\n  </a>\n</BadgeRow>\n\n## Overview [#overview]\n\n`@julekgwa/react-native-places-autocomplete` is a React Native component that provides a customizable location search and autocomplete interface. It supports multiple geocoding providers out of the box:\n\n* OpenStreetMap (Nominatim)\n* Google Places\n* Mapbox\n* Geoapify\n* LocationIQ\n* HERE\n* TomTom\n* OpenCage\n\n## Key Features [#key-features]\n\n* 🌍 **Multiple Providers**: Support for various geocoding services with no additional dependencies\n* 🎨 **Fully Customizable**: Style every aspect of the component to match your app's design\n* 🔍 **Recent Searches**: Built-in support for recent search history\n* ⚡️ **Performance Optimized**: Debounced API calls and optimized rendering\n* 🛠 **TypeScript Support**: Built with TypeScript for a better development experience\n\n## Quick Start [#quick-start]\n\n```jsx\nimport { LocationAutocomplete } from '@julekgwa/react-native-places-autocomplete';\n\nexport default function App() {\n  return (\n    <LocationAutocomplete\n      provider=\"openstreetmap\" // No API key required for OpenStreetMap\n      query={{\n        limit: 5,\n      }}\n      onLocationSelect={(location) => {\n        console.log('Selected location:', location);\n      }}\n    />\n  );\n}\n```\n\nSee the [Getting Started](/places-autocomplete/getting-started/installation) guide for complete documentation of available props and examples.\n\n## Installation [#installation]\n\n<CodeBlockTabs defaultValue=\"npm\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"npm\">\n      npm\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"yarn\">\n      Yarn\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"bun\">\n      Bun\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"pnpm\">\n      pnpm\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"npm\">\n    ```bash\n    npm install @julekgwa/react-native-places-autocomplete\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"yarn\">\n    ```bash\n    yarn add @julekgwa/react-native-places-autocomplete\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"bun\">\n    ```bash\n    bun add @julekgwa/react-native-places-autocomplete\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"pnpm\">\n    ```bash\n    pnpm add @julekgwa/react-native-places-autocomplete\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\nFor complete installation instructions, see the [Getting Started Guide](/places-autocomplete/getting-started/installation).\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "react-native-places-autocomplete"
		},
		{
			"heading": void 0,
			"content": "A provider-agnostic React Native autocomplete component for searching addresses and places. Supports multiple **built-in geocoding providers** including OpenStreetMap (free), OpenCage, Google Places, Mapbox, LocationIQ, Geoapify, HERE, and TomTom, or use any custom API. Easy to integrate, fully customizable, and lightweight."
		},
		{
			"heading": "overview",
			"content": "`@julekgwa/react-native-places-autocomplete` is a React Native component that provides a customizable location search and autocomplete interface. It supports multiple geocoding providers out of the box:"
		},
		{
			"heading": "overview",
			"content": "OpenStreetMap (Nominatim)"
		},
		{
			"heading": "overview",
			"content": "Google Places"
		},
		{
			"heading": "overview",
			"content": "Mapbox"
		},
		{
			"heading": "overview",
			"content": "Geoapify"
		},
		{
			"heading": "overview",
			"content": "LocationIQ"
		},
		{
			"heading": "overview",
			"content": "HERE"
		},
		{
			"heading": "overview",
			"content": "TomTom"
		},
		{
			"heading": "overview",
			"content": "OpenCage"
		},
		{
			"heading": "key-features",
			"content": "🌍 **Multiple Providers**: Support for various geocoding services with no additional dependencies"
		},
		{
			"heading": "key-features",
			"content": "🎨 **Fully Customizable**: Style every aspect of the component to match your app's design"
		},
		{
			"heading": "key-features",
			"content": "🔍 **Recent Searches**: Built-in support for recent search history"
		},
		{
			"heading": "key-features",
			"content": "⚡️ **Performance Optimized**: Debounced API calls and optimized rendering"
		},
		{
			"heading": "key-features",
			"content": "🛠 **TypeScript Support**: Built with TypeScript for a better development experience"
		},
		{
			"heading": "quick-start",
			"content": "See the Getting Started guide for complete documentation of available props and examples."
		},
		{
			"heading": "installation",
			"content": "For complete installation instructions, see the Getting Started Guide."
		}
	],
	"headings": [
		{
			"id": "overview",
			"content": "Overview"
		},
		{
			"id": "key-features",
			"content": "Key Features"
		},
		{
			"id": "quick-start",
			"content": "Quick Start"
		},
		{
			"id": "installation",
			"content": "Installation"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#overview",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Overview" })
	},
	{
		depth: 2,
		url: "#key-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Key Features" })
	},
	{
		depth: 2,
		url: "#quick-start",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Quick Start" })
	},
	{
		depth: 2,
		url: "#installation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Installation" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { BadgeRow, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!BadgeRow) _missingMdxReference("BadgeRow", true);
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)("h1", {
			align: "center",
			children: (0, import_jsx_runtime.jsx)(_components.p, { children: "react-native-places-autocomplete" })
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"A provider-agnostic React Native autocomplete component for searching addresses and places. Supports multiple ",
			(0, import_jsx_runtime.jsx)(_components.strong, { children: "built-in geocoding providers" }),
			" including OpenStreetMap (free), OpenCage, Google Places, Mapbox, LocationIQ, Geoapify, HERE, and TomTom, or use any custom API. Easy to integrate, fully customizable, and lightweight."
		] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(BadgeRow, { children: [
			(0, import_jsx_runtime.jsx)("a", {
				href: "https://www.npmjs.com/package/@julekgwa/react-native-places-autocomplete",
				children: (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.shields.io/npm/v/@julekgwa/react-native-places-autocomplete.svg",
					alt: "npm version"
				})
			}),
			(0, import_jsx_runtime.jsx)("a", {
				href: "https://www.npmjs.com/package/@julekgwa/react-native-places-autocomplete",
				children: (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.shields.io/npm/dm/@julekgwa/react-native-places-autocomplete.svg",
					alt: "npm downloads"
				})
			}),
			(0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/julekgwa/react-native-places-autocomplete/blob/main/LICENSE",
				children: (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.shields.io/npm/l/@julekgwa/react-native-places-autocomplete.svg",
					alt: "license"
				})
			}),
			(0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/julekgwa/react-native-places-autocomplete",
				children: (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.shields.io/github/stars/julekgwa/react-native-places-autocomplete.svg?style=social",
					alt: "stars"
				})
			})
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)("img", {
			src: providers_light_default,
			alt: "Supported geocoding providers",
			className: "block dark:hidden"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)("img", {
			src: providers_dark_default,
			alt: "Supported geocoding providers",
			className: "hidden dark:block"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(BadgeRow, { children: (0, import_jsx_runtime.jsx)("a", {
			href: "https://snack.expo.dev/@lekgwaraj/react-native-places-autocomplete",
			children: (0, import_jsx_runtime.jsx)("img", {
				src: "https://img.shields.io/badge/Try%20it%20on-Expo%20Snack-4630EB.svg?style=for-the-badge&logo=expo&labelColor=FFF&logoColor=000",
				alt: "Try it on Expo Snack"
			})
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "overview",
			children: "Overview"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [(0, import_jsx_runtime.jsx)(_components.code, { children: "@julekgwa/react-native-places-autocomplete" }), " is a React Native component that provides a customizable location search and autocomplete interface. It supports multiple geocoding providers out of the box:"] }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "OpenStreetMap (Nominatim)" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Google Places" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Mapbox" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Geoapify" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "LocationIQ" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "HERE" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "TomTom" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "OpenCage" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "key-features",
			children: "Key Features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"🌍 ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Multiple Providers" }),
				": Support for various geocoding services with no additional dependencies"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"🎨 ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Fully Customizable" }),
				": Style every aspect of the component to match your app's design"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"🔍 ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Recent Searches" }),
				": Built-in support for recent search history"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"⚡️ ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Performance Optimized" }),
				": Debounced API calls and optimized rendering"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"🛠 ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "TypeScript Support" }),
				": Built with TypeScript for a better development experience"
			] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "quick-start",
			children: "Quick Start"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "import"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " { LocationAutocomplete } "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "from"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: " '@julekgwa/react-native-places-autocomplete'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "export"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " default"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " function"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " App"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  return"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " ("
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    <"
					}), (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "LocationAutocomplete"
					})]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "      provider"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"openstreetmap\""
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: " // No API key required for OpenStreetMap"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "      query"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{{"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        limit: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "5"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      }}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "      onLocationSelect"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "location"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "=>"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " {"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "        console."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "log"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'Selected location:'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", location);"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "      }}"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    />"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "  );"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"See the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/places-autocomplete/getting-started/installation",
				children: "Getting Started"
			}),
			" guide for complete documentation of available props and examples."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "installation",
			children: "Installation"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(CodeBlockTabs, {
			defaultValue: "npm",
			children: [
				(0, import_jsx_runtime.jsxs)(CodeBlockTabsList, { children: [
					(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "npm",
						children: "npm"
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "yarn",
						children: "Yarn"
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "bun",
						children: "Bun"
					}),
					(0, import_jsx_runtime.jsx)(CodeBlockTabsTrigger, {
						value: "pnpm",
						children: "pnpm"
					})
				] }),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "npm",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
							className: "line",
							children: [
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "npm"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " install"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " @julekgwa/react-native-places-autocomplete"
								})
							]
						}) })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "yarn",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
							className: "line",
							children: [
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "yarn"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " add"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " @julekgwa/react-native-places-autocomplete"
								})
							]
						}) })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "bun",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
							className: "line",
							children: [
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "bun"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " add"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " @julekgwa/react-native-places-autocomplete"
								})
							]
						}) })
					}) })
				}),
				(0, import_jsx_runtime.jsx)(CodeBlockTab, {
					value: "pnpm",
					children: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsx)(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
						children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
							className: "line",
							children: [
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "pnpm"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " add"
								}),
								(0, import_jsx_runtime.jsx)(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " @julekgwa/react-native-places-autocomplete"
								})
							]
						}) })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For complete installation instructions, see the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "/places-autocomplete/getting-started/installation",
				children: "Getting Started Guide"
			}),
			"."
		] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { structuredData as a, places_autocomplete_exports as i, _markdown as n, toc as o, frontmatter as r, MDXContent as t };
