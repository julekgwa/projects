import { a as __toESM, r as __exportAll } from "./chunk-_TIqcEvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BtDrtBkJ.js";
//#region content/docs/input-tag/getting-started/installation.mdx?collection=docs
var installation_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = { "title": "Installation" };
var _markdown = "\n\n# Installation [#installation]\n\n<CodeBlockTabs defaultValue=\"npm\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"npm\">\n      npm\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"yarn\">\n      Yarn\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"bun\">\n      Bun\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"pnpm\">\n      pnpm\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"npm\">\n    ```bash\n    npm install react-native-input-tag\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"yarn\">\n    ```bash\n    yarn add react-native-input-tag\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"bun\">\n    ```bash\n    bun add react-native-input-tag\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"pnpm\">\n    ```bash\n    pnpm add react-native-input-tag\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## Requirements [#requirements]\n\n* React Native >= 0.79\n* React >= 16.8\n\n## Cross-Platform Support [#cross-platform-support]\n\nThe package works on:\n\n* iOS\n* Android\n* Web (via React Native Web)\n\n## Next Steps [#next-steps]\n\nAfter installation:\n\n1. Check out the [Basic Usage](/input-tag/getting-started/basic-usage) guide to get started\n2. Review the [API Reference](/input-tag/getting-started/api-reference) for available options\n3. Learn about [Styling](/input-tag/getting-started/styling) customization\n";
var structuredData = {
	"contents": [
		{
			"heading": "requirements",
			"content": "React Native >= 0.79"
		},
		{
			"heading": "requirements",
			"content": "React >= 16.8"
		},
		{
			"heading": "cross-platform-support",
			"content": "The package works on:"
		},
		{
			"heading": "cross-platform-support",
			"content": "iOS"
		},
		{
			"heading": "cross-platform-support",
			"content": "Android"
		},
		{
			"heading": "cross-platform-support",
			"content": "Web (via React Native Web)"
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
			"content": "Review the API Reference for available options"
		},
		{
			"heading": "next-steps",
			"content": "Learn about Styling customization"
		}
	],
	"headings": [
		{
			"id": "installation",
			"content": "Installation"
		},
		{
			"id": "requirements",
			"content": "Requirements"
		},
		{
			"id": "cross-platform-support",
			"content": "Cross-Platform Support"
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
		url: "#requirements",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Requirements" })
	},
	{
		depth: 2,
		url: "#cross-platform-support",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Cross-Platform Support" })
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
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
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
									children: " react-native-input-tag"
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
									children: " react-native-input-tag"
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
									children: " react-native-input-tag"
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
									children: " react-native-input-tag"
								})
							]
						}) })
					}) })
				})
			]
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "requirements",
			children: "Requirements"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "React Native >= 0.79" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "React >= 16.8" }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "cross-platform-support",
			children: "Cross-Platform Support"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "The package works on:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "iOS" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Android" }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: "Web (via React Native Web)" }),
			"\n"
		] }),
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
					href: "/input-tag/getting-started/basic-usage",
					children: "Basic Usage"
				}),
				" guide to get started"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Review the ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/input-tag/getting-started/api-reference",
					children: "API Reference"
				}),
				" for available options"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"Learn about ",
				(0, import_jsx_runtime.jsx)(_components.a, {
					href: "/input-tag/getting-started/styling",
					children: "Styling"
				}),
				" customization"
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
