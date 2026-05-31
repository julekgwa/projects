import { a as __toESM, r as __exportAll } from "./chunk-_TIqcEvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BtDrtBkJ.js";
//#region content/docs/places-autocomplete/getting-started/installation.mdx?collection=docs
var installation_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = {
	"title": "Installation",
	"description": "Learn how to install and set up React Native Places Autocomplete in your project. Simple installation guide with npm, yarn, and additional configuration options."
};
var _markdown = "\n\n# Installation [#installation]\n\n## Installing the Package [#installing-the-package]\n\n<CodeBlockTabs defaultValue=\"npm\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"npm\">\n      npm\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"yarn\">\n      Yarn\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"bun\">\n      Bun\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"pnpm\">\n      pnpm\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"npm\">\n    ```bash\n    npm install @julekgwa/react-native-places-autocomplete\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"yarn\">\n    ```bash\n    yarn add @julekgwa/react-native-places-autocomplete\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"bun\">\n    ```bash\n    bun add @julekgwa/react-native-places-autocomplete\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"pnpm\">\n    ```bash\n    pnpm add @julekgwa/react-native-places-autocomplete\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n### Additional Setup [#additional-setup]\n\nSince the component uses SVG icons, you'll need to install `react-native-svg`:\n\nFor Expo projects:\n\n```bash\nexpo install react-native-svg\n```\n\nFor bare React Native projects, follow the [react-native-svg installation guide](https://github.com/software-mansion/react-native-svg#installation).\n\n## Requirements [#requirements]\n\nThis package is designed to work with React Native and has no additional dependencies. It works out of the box with all supported providers without requiring any extra libraries.\n\n## Next Steps [#next-steps]\n\nAfter installation:\n\n1. Check out the [Basic Usage](/places-autocomplete/getting-started/basic-usage) guide to get started\n2. Configure your preferred provider in the [API Reference](/places-autocomplete/getting-started/api-reference) section\n3. Customize the appearance in the [Styling](/places-autocomplete/getting-started/styling) guide\n";
var structuredData = {
	"contents": [
		{
			"heading": "additional-setup",
			"content": "Since the component uses SVG icons, you'll need to install `react-native-svg`:"
		},
		{
			"heading": "additional-setup",
			"content": "For Expo projects:"
		},
		{
			"heading": "additional-setup",
			"content": "For bare React Native projects, follow the react-native-svg installation guide."
		},
		{
			"heading": "requirements",
			"content": "This package is designed to work with React Native and has no additional dependencies. It works out of the box with all supported providers without requiring any extra libraries."
		},
		{
			"heading": "next-steps",
			"content": "After installation:"
		},
		{
			"heading": "next-steps",
			"content": "Check out the Basic Usage guide to get started"
		},
		{
			"heading": "next-steps",
			"content": "Configure your preferred provider in the API Reference section"
		},
		{
			"heading": "next-steps",
			"content": "Customize the appearance in the Styling guide"
		}
	],
	"headings": [
		{
			"id": "installation",
			"content": "Installation"
		},
		{
			"id": "installing-the-package",
			"content": "Installing the Package"
		},
		{
			"id": "additional-setup",
			"content": "Additional Setup"
		},
		{
			"id": "requirements",
			"content": "Requirements"
		},
		{
			"id": "next-steps",
			"content": "Next Steps"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#installation",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Installation" })
	},
	{
		depth: 2,
		url: "#installing-the-package",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Installing the Package" })
	},
	{
		depth: 3,
		url: "#additional-setup",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Additional Setup" })
	},
	{
		depth: 2,
		url: "#requirements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Requirements" })
	},
	{
		depth: 2,
		url: "#next-steps",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Next Steps" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "installation",
			children: "Installation"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "installing-the-package",
			children: "Installing the Package"
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
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "additional-setup",
			children: "Additional Setup"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"Since the component uses SVG icons, you'll need to install ",
			(0, import_jsx_runtime.jsx)(_components.code, { children: "react-native-svg" }),
			":"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "For Expo projects:" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsx)(_components.code, { children: (0, import_jsx_runtime.jsxs)(_components.span, {
				className: "line",
				children: [
					(0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "expo"
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
						children: " react-native-svg"
					})
				]
			}) })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.p, { children: [
			"For bare React Native projects, follow the ",
			(0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://github.com/software-mansion/react-native-svg#installation",
				children: "react-native-svg installation guide"
			}),
			"."
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "requirements",
			children: "Requirements"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "This package is designed to work with React Native and has no additional dependencies. It works out of the box with all supported providers without requiring any extra libraries." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "next-steps",
			children: "Next Steps"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "After installation:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ol, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Check out the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/places-autocomplete/getting-started/basic-usage",
					children: "Basic Usage"
				}),
				" guide to get started"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Configure your preferred provider in the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/places-autocomplete/getting-started/api-reference",
					children: "API Reference"
				}),
				" section"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Customize the appearance in the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/places-autocomplete/getting-started/styling",
					children: "Styling"
				}),
				" guide"
			] }),
			"\n"
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
export { structuredData as a, installation_exports as i, _markdown as n, toc as o, frontmatter as r, MDXContent as t };
