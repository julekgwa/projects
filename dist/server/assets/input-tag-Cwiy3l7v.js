import { a as __toESM, r as __exportAll } from "./chunk-_TIqcEvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BtDrtBkJ.js";
//#region content/docs/input-tag/index.mdx?collection=docs
var input_tag_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = { "title": "Introduction" };
var _markdown = "\n\n# React Native Input Tag [#react-native-input-tag]\n\n<BadgeRow>\n  <a href=\"https://badge.fury.io/js/react-native-input-tag\">\n    <img src=\"https://badge.fury.io/js/react-native-input-tag.svg?icon=si%3Anpm\" alt=\"npm version\" />\n  </a>\n\n  <a href=\"https://www.npmjs.com/package/react-native-input-tag\">\n    <img src=\"https://img.shields.io/npm/dm/react-native-input-tag.svg\" alt=\"npm downloads\" />\n  </a>\n\n  <a href=\"https://github.com/julekgwa/react-native-input-tag\">\n    <img src=\"https://img.shields.io/github/stars/julekgwa/react-native-input-tag.svg?style=social&label=Star\" alt=\"GitHub stars\" />\n  </a>\n\n  <a href=\"https://bundlephobia.com/package/react-native-input-tag\">\n    <img src=\"https://img.shields.io/bundlephobia/minzip/react-native-input-tag\" alt=\"Bundle Size\" />\n  </a>\n</BadgeRow>\n\nA versatile and user-friendly component designed to simplify the process of entering and managing tags within a React Native application.\n\n## Features [#features]\n\n### 🎯 Core Features [#-core-features]\n\n* 📝 **Easy tag input and management**\n* 🔍 **Fully customizable autocomplete**\n* 🎨 **Complete custom rendering**\n* ⌨️ **Customizable key separators**\n* ♿ **Full accessibility support**\n\n### 🎨 Customization & Styling [#-customization--styling]\n\n* 🎯 **Extensive styling options**\n* 💡 **Text highlighting**\n* 📊 **Configurable suggestion limits**\n* 🔤 **Case-sensitive/insensitive filtering**\n\n### 🚀 Developer Experience [#-developer-experience]\n\n* 📱 **Cross-platform**: iOS, Android, and Web\n* 🚀 **Complete TypeScript support**\n* 📖 **Comprehensive documentation**\n* 🧪 **Well tested**\n\n## Quick Start [#quick-start]\n\n<CodeBlockTabs defaultValue=\"npm\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"npm\">\n      npm\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"yarn\">\n      Yarn\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"bun\">\n      Bun\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"pnpm\">\n      pnpm\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"npm\">\n    ```bash\n    npm install react-native-input-tag\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"yarn\">\n    ```bash\n    yarn add react-native-input-tag\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"bun\">\n    ```bash\n    bun add react-native-input-tag\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"pnpm\">\n    ```bash\n    pnpm add react-native-input-tag\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n```tsx\nimport React, { useState } from 'react';\nimport { TagInput } from 'react-native-input-tag';\n\nconst App = () => {\n  const [tags, updateState] = useState({\n    tag: '',\n    tagsArray: []\n  });\n\n  return (\n    <TagInput\n      tags={tags}\n      updateState={updateState}\n      suggestions={['React', 'TypeScript', 'Mobile']}\n    />\n  );\n};\n```\n\n## Live Examples [#live-examples]\n\nTry our interactive demos:\n\n* [Basic Usage](https://snack.expo.dev/@lekgwaraj/react-native-input-tag)\n* [Custom Rendering](https://snack.expo.dev/@lekgwaraj/react-native-input-tag-custom)\n* [Form Integration](https://snack.expo.dev/@lekgwaraj/react-native-input-tag-form)\n";
var structuredData = {
	"contents": [
		{
			"heading": "react-native-input-tag",
			"content": "A versatile and user-friendly component designed to simplify the process of entering and managing tags within a React Native application."
		},
		{
			"heading": "-core-features",
			"content": "📝 **Easy tag input and management**"
		},
		{
			"heading": "-core-features",
			"content": "🔍 **Fully customizable autocomplete**"
		},
		{
			"heading": "-core-features",
			"content": "🎨 **Complete custom rendering**"
		},
		{
			"heading": "-core-features",
			"content": "⌨️ **Customizable key separators**"
		},
		{
			"heading": "-core-features",
			"content": "♿ **Full accessibility support**"
		},
		{
			"heading": "-customization--styling",
			"content": "🎯 **Extensive styling options**"
		},
		{
			"heading": "-customization--styling",
			"content": "💡 **Text highlighting**"
		},
		{
			"heading": "-customization--styling",
			"content": "📊 **Configurable suggestion limits**"
		},
		{
			"heading": "-customization--styling",
			"content": "🔤 **Case-sensitive/insensitive filtering**"
		},
		{
			"heading": "-developer-experience",
			"content": "📱 **Cross-platform**: iOS, Android, and Web"
		},
		{
			"heading": "-developer-experience",
			"content": "🚀 **Complete TypeScript support**"
		},
		{
			"heading": "-developer-experience",
			"content": "📖 **Comprehensive documentation**"
		},
		{
			"heading": "-developer-experience",
			"content": "🧪 **Well tested**"
		},
		{
			"heading": "live-examples",
			"content": "Try our interactive demos:"
		},
		{
			"heading": "live-examples",
			"content": "Basic Usage"
		},
		{
			"heading": "live-examples",
			"content": "Custom Rendering"
		},
		{
			"heading": "live-examples",
			"content": "Form Integration"
		}
	],
	"headings": [
		{
			"id": "react-native-input-tag",
			"content": "React Native Input Tag"
		},
		{
			"id": "features",
			"content": "Features"
		},
		{
			"id": "-core-features",
			"content": "🎯 Core Features"
		},
		{
			"id": "-customization--styling",
			"content": "🎨 Customization & Styling"
		},
		{
			"id": "-developer-experience",
			"content": "🚀 Developer Experience"
		},
		{
			"id": "quick-start",
			"content": "Quick Start"
		},
		{
			"id": "live-examples",
			"content": "Live Examples"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#react-native-input-tag",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "React Native Input Tag" })
	},
	{
		depth: 2,
		url: "#features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Features" })
	},
	{
		depth: 3,
		url: "#-core-features",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "🎯 Core Features" })
	},
	{
		depth: 3,
		url: "#-customization--styling",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "🎨 Customization & Styling" })
	},
	{
		depth: 3,
		url: "#-developer-experience",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "🚀 Developer Experience" })
	},
	{
		depth: 2,
		url: "#quick-start",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Quick Start" })
	},
	{
		depth: 2,
		url: "#live-examples",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Live Examples" })
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
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "react-native-input-tag",
			children: "React Native Input Tag"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(BadgeRow, { children: [
			(0, import_jsx_runtime.jsx)("a", {
				href: "https://badge.fury.io/js/react-native-input-tag",
				children: (0, import_jsx_runtime.jsx)("img", {
					src: "https://badge.fury.io/js/react-native-input-tag.svg?icon=si%3Anpm",
					alt: "npm version"
				})
			}),
			(0, import_jsx_runtime.jsx)("a", {
				href: "https://www.npmjs.com/package/react-native-input-tag",
				children: (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.shields.io/npm/dm/react-native-input-tag.svg",
					alt: "npm downloads"
				})
			}),
			(0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/julekgwa/react-native-input-tag",
				children: (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.shields.io/github/stars/julekgwa/react-native-input-tag.svg?style=social&label=Star",
					alt: "GitHub stars"
				})
			}),
			(0, import_jsx_runtime.jsx)("a", {
				href: "https://bundlephobia.com/package/react-native-input-tag",
				children: (0, import_jsx_runtime.jsx)("img", {
					src: "https://img.shields.io/bundlephobia/minzip/react-native-input-tag",
					alt: "Bundle Size"
				})
			})
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "A versatile and user-friendly component designed to simplify the process of entering and managing tags within a React Native application." }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "features",
			children: "Features"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "-core-features",
			children: "🎯 Core Features"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["📝 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Easy tag input and management" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["🔍 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Fully customizable autocomplete" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["🎨 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Complete custom rendering" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["⌨️ ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Customizable key separators" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["♿ ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Full accessibility support" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "-customization--styling",
			children: "🎨 Customization & Styling"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["🎯 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Extensive styling options" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["💡 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Text highlighting" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["📊 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Configurable suggestion limits" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["🔤 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Case-sensitive/insensitive filtering" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "-developer-experience",
			children: "🚀 Developer Experience"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: [
				"📱 ",
				(0, import_jsx_runtime.jsx)(_components.strong, { children: "Cross-platform" }),
				": iOS, Android, and Web"
			] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["🚀 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Complete TypeScript support" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["📖 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Comprehensive documentation" })] }),
			"\n",
			(0, import_jsx_runtime.jsxs)(_components.li, { children: ["🧪 ", (0, import_jsx_runtime.jsx)(_components.strong, { children: "Well tested" })] }),
			"\n"
		] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "quick-start",
			children: "Quick Start"
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
							children: " React, { useState } "
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
							children: " 'react'"
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
							children: " { TagInput } "
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
							children: " 'react-native-input-tag'"
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
							children: "const"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " () "
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "  const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " ["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "tags"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "updateState"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "] "
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " useState"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({"
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
							children: "    tag: "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "''"
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
						children: "    tagsArray: []"
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
						children: "  });"
					})
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
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
						children: "TagInput"
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
							children: "      tags"
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
							children: "{tags}"
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
							children: "      updateState"
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
							children: "{updateState}"
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
							children: "      suggestions"
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
							children: "{["
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'React'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'TypeScript'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "'Mobile'"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "]}"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "live-examples",
			children: "Live Examples"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Try our interactive demos:" }),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.ul, { children: [
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://snack.expo.dev/@lekgwaraj/react-native-input-tag",
				children: "Basic Usage"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://snack.expo.dev/@lekgwaraj/react-native-input-tag-custom",
				children: "Custom Rendering"
			}) }),
			"\n",
			(0, import_jsx_runtime.jsx)(_components.li, { children: (0, import_jsx_runtime.jsx)(_components.a, {
				href: "https://snack.expo.dev/@lekgwaraj/react-native-input-tag-form",
				children: "Form Integration"
			}) }),
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
export { structuredData as a, input_tag_exports as i, _markdown as n, toc as o, frontmatter as r, MDXContent as t };
