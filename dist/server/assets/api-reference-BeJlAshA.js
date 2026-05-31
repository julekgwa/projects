import { a as __toESM, r as __exportAll } from "./chunk-_TIqcEvS.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BtDrtBkJ.js";
//#region content/docs/input-tag/getting-started/api-reference.mdx?collection=docs
var api_reference_exports = /* @__PURE__ */ __exportAll({
	_markdown: () => _markdown,
	default: () => MDXContent,
	frontmatter: () => frontmatter,
	structuredData: () => structuredData,
	toc: () => toc
});
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var frontmatter = { "title": "API Reference" };
var _markdown = "\n\n# API Reference [#api-reference]\n\n## Core Props [#core-props]\n\n| Prop          | Type                    | Default           | Description                            |\n| ------------- | ----------------------- | ----------------- | -------------------------------------- |\n| `tags`        | `ITags`                 | required          | Current tags state object              |\n| `updateState` | `(tags: ITags) => void` | required          | Function to update tags state          |\n| `keysForTag`  | `string`                | `' '`             | Character(s) that trigger tag creation |\n| `suggestions` | `string[]`              | `[]`              | Array of suggestions for autocomplete  |\n| `label`       | `string`                | `undefined`       | Label text shown above the input       |\n| `placeholder` | `string`                | `'Enter tags...'` | Input placeholder text                 |\n| `maxTags`     | `number`                | `undefined`       | Maximum number of tags allowed         |\n| `disabled`    | `boolean`               | `false`           | Disable the input                      |\n\n## Types [#types]\n\n### ITags Interface [#itags-interface]\n\n```typescript\ninterface ITags {\n  tag: string;          // Current input value\n  tagsArray: string[];  // Array of created tags\n}\n```\n\n### Event Props [#event-props]\n\n| Prop           | Type                                   | Description                    |\n| -------------- | -------------------------------------- | ------------------------------ |\n| `onTagPress`   | `(index: number, tag: string) => void` | Called when a tag is pressed   |\n| `onTagDelete`  | `(index: number, tag: string) => void` | Called when a tag is deleted   |\n| `onFocus`      | `() => void`                           | Called when input is focused   |\n| `onBlur`       | `() => void`                           | Called when input loses focus  |\n| `onChangeText` | `(text: string) => void`               | Called when input text changes |\n\n### Style Props [#style-props]\n\n| Prop                  | Type                    | Description          |\n| --------------------- | ----------------------- | -------------------- |\n| `containerStyle`      | `StyleProp<ViewStyle>`  | Main container style |\n| `inputContainerStyle` | `StyleProp<ViewStyle>`  | Input wrapper style  |\n| `inputStyle`          | `StyleProp<TextStyle>`  | Input text style     |\n| `tagStyle`            | `StyleProp<ViewStyle>`  | Tag container style  |\n| `tagTextStyle`        | `StyleProp<TextStyle>`  | Tag text style       |\n| `deleteIconStyles`    | `StyleProp<ImageStyle>` | Delete icon style    |\n| `labelStyle`          | `StyleProp<TextStyle>`  | Label text style     |\n\n### Autocomplete Props [#autocomplete-props]\n\n| Prop                              | Type                   | Default | Description                      |\n| --------------------------------- | ---------------------- | ------- | -------------------------------- |\n| `maxSuggestions`                  | `number`               | `5`     | Maximum suggestions to show      |\n| `highlightMatchedText`            | `boolean`              | `false` | Highlight matched text           |\n| `caseSensitive`                   | `boolean`              | `false` | Case-sensitive matching          |\n| `showAutocompleteBorder`          | `boolean`              | `true`  | Show borders between suggestions |\n| `autocompleteSuggestionStyle`     | `StyleProp<ViewStyle>` | -       | Suggestion item style            |\n| `autocompleteSuggestionTextStyle` | `StyleProp<TextStyle>` | -       | Suggestion text style            |\n\n### Custom Rendering Props [#custom-rendering-props]\n\n| Prop                 | Type                                                                                            | Description                |\n| -------------------- | ----------------------------------------------------------------------------------------------- | -------------------------- |\n| `renderTag`          | `(tag: string, index: number, onDelete: () => void) => ReactNode`                               | Custom tag renderer        |\n| `renderDeleteButton` | `(onDelete: () => void, tag: string, index: number) => ReactNode`                               | Custom delete button       |\n| `renderSuggestion`   | `(suggestion: string, index: number, isHighlighted: boolean, onPress: () => void) => ReactNode` | Custom suggestion renderer |\n\n## Methods [#methods]\n\nAccess these methods via a ref:\n\n```typescript\ninterface TagInputMethods {\n  focus(): void;\n  blur(): void;\n  clear(): void;\n  addTag(tag: string): void;\n  removeTag(index: number): void;\n  getTags(): string[];\n}\n```\n\nExample usage:\n\n```tsx\nconst tagInputRef = useRef<TagInputMethods>(null);\n\n// Later in your code\ntagInputRef.current?.focus();\n```\n";
var structuredData = {
	"contents": [
		{
			"heading": "core-props",
			"content": "Prop"
		},
		{
			"heading": "core-props",
			"content": "Type"
		},
		{
			"heading": "core-props",
			"content": "Default"
		},
		{
			"heading": "core-props",
			"content": "Description"
		},
		{
			"heading": "core-props",
			"content": "`tags`"
		},
		{
			"heading": "core-props",
			"content": "`ITags`"
		},
		{
			"heading": "core-props",
			"content": "required"
		},
		{
			"heading": "core-props",
			"content": "Current tags state object"
		},
		{
			"heading": "core-props",
			"content": "`updateState`"
		},
		{
			"heading": "core-props",
			"content": "`(tags: ITags) => void`"
		},
		{
			"heading": "core-props",
			"content": "required"
		},
		{
			"heading": "core-props",
			"content": "Function to update tags state"
		},
		{
			"heading": "core-props",
			"content": "`keysForTag`"
		},
		{
			"heading": "core-props",
			"content": "`string`"
		},
		{
			"heading": "core-props",
			"content": "`' '`"
		},
		{
			"heading": "core-props",
			"content": "Character(s) that trigger tag creation"
		},
		{
			"heading": "core-props",
			"content": "`suggestions`"
		},
		{
			"heading": "core-props",
			"content": "`string[]`"
		},
		{
			"heading": "core-props",
			"content": "`[]`"
		},
		{
			"heading": "core-props",
			"content": "Array of suggestions for autocomplete"
		},
		{
			"heading": "core-props",
			"content": "`label`"
		},
		{
			"heading": "core-props",
			"content": "`string`"
		},
		{
			"heading": "core-props",
			"content": "`undefined`"
		},
		{
			"heading": "core-props",
			"content": "Label text shown above the input"
		},
		{
			"heading": "core-props",
			"content": "`placeholder`"
		},
		{
			"heading": "core-props",
			"content": "`string`"
		},
		{
			"heading": "core-props",
			"content": "`'Enter tags...'`"
		},
		{
			"heading": "core-props",
			"content": "Input placeholder text"
		},
		{
			"heading": "core-props",
			"content": "`maxTags`"
		},
		{
			"heading": "core-props",
			"content": "`number`"
		},
		{
			"heading": "core-props",
			"content": "`undefined`"
		},
		{
			"heading": "core-props",
			"content": "Maximum number of tags allowed"
		},
		{
			"heading": "core-props",
			"content": "`disabled`"
		},
		{
			"heading": "core-props",
			"content": "`boolean`"
		},
		{
			"heading": "core-props",
			"content": "`false`"
		},
		{
			"heading": "core-props",
			"content": "Disable the input"
		},
		{
			"heading": "event-props",
			"content": "Prop"
		},
		{
			"heading": "event-props",
			"content": "Type"
		},
		{
			"heading": "event-props",
			"content": "Description"
		},
		{
			"heading": "event-props",
			"content": "`onTagPress`"
		},
		{
			"heading": "event-props",
			"content": "`(index: number, tag: string) => void`"
		},
		{
			"heading": "event-props",
			"content": "Called when a tag is pressed"
		},
		{
			"heading": "event-props",
			"content": "`onTagDelete`"
		},
		{
			"heading": "event-props",
			"content": "`(index: number, tag: string) => void`"
		},
		{
			"heading": "event-props",
			"content": "Called when a tag is deleted"
		},
		{
			"heading": "event-props",
			"content": "`onFocus`"
		},
		{
			"heading": "event-props",
			"content": "`() => void`"
		},
		{
			"heading": "event-props",
			"content": "Called when input is focused"
		},
		{
			"heading": "event-props",
			"content": "`onBlur`"
		},
		{
			"heading": "event-props",
			"content": "`() => void`"
		},
		{
			"heading": "event-props",
			"content": "Called when input loses focus"
		},
		{
			"heading": "event-props",
			"content": "`onChangeText`"
		},
		{
			"heading": "event-props",
			"content": "`(text: string) => void`"
		},
		{
			"heading": "event-props",
			"content": "Called when input text changes"
		},
		{
			"heading": "style-props",
			"content": "Prop"
		},
		{
			"heading": "style-props",
			"content": "Type"
		},
		{
			"heading": "style-props",
			"content": "Description"
		},
		{
			"heading": "style-props",
			"content": "`containerStyle`"
		},
		{
			"heading": "style-props",
			"content": "`StyleProp<ViewStyle>`"
		},
		{
			"heading": "style-props",
			"content": "Main container style"
		},
		{
			"heading": "style-props",
			"content": "`inputContainerStyle`"
		},
		{
			"heading": "style-props",
			"content": "`StyleProp<ViewStyle>`"
		},
		{
			"heading": "style-props",
			"content": "Input wrapper style"
		},
		{
			"heading": "style-props",
			"content": "`inputStyle`"
		},
		{
			"heading": "style-props",
			"content": "`StyleProp<TextStyle>`"
		},
		{
			"heading": "style-props",
			"content": "Input text style"
		},
		{
			"heading": "style-props",
			"content": "`tagStyle`"
		},
		{
			"heading": "style-props",
			"content": "`StyleProp<ViewStyle>`"
		},
		{
			"heading": "style-props",
			"content": "Tag container style"
		},
		{
			"heading": "style-props",
			"content": "`tagTextStyle`"
		},
		{
			"heading": "style-props",
			"content": "`StyleProp<TextStyle>`"
		},
		{
			"heading": "style-props",
			"content": "Tag text style"
		},
		{
			"heading": "style-props",
			"content": "`deleteIconStyles`"
		},
		{
			"heading": "style-props",
			"content": "`StyleProp<ImageStyle>`"
		},
		{
			"heading": "style-props",
			"content": "Delete icon style"
		},
		{
			"heading": "style-props",
			"content": "`labelStyle`"
		},
		{
			"heading": "style-props",
			"content": "`StyleProp<TextStyle>`"
		},
		{
			"heading": "style-props",
			"content": "Label text style"
		},
		{
			"heading": "autocomplete-props",
			"content": "Prop"
		},
		{
			"heading": "autocomplete-props",
			"content": "Type"
		},
		{
			"heading": "autocomplete-props",
			"content": "Default"
		},
		{
			"heading": "autocomplete-props",
			"content": "Description"
		},
		{
			"heading": "autocomplete-props",
			"content": "`maxSuggestions`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`number`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`5`"
		},
		{
			"heading": "autocomplete-props",
			"content": "Maximum suggestions to show"
		},
		{
			"heading": "autocomplete-props",
			"content": "`highlightMatchedText`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`boolean`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`false`"
		},
		{
			"heading": "autocomplete-props",
			"content": "Highlight matched text"
		},
		{
			"heading": "autocomplete-props",
			"content": "`caseSensitive`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`boolean`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`false`"
		},
		{
			"heading": "autocomplete-props",
			"content": "Case-sensitive matching"
		},
		{
			"heading": "autocomplete-props",
			"content": "`showAutocompleteBorder`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`boolean`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`true`"
		},
		{
			"heading": "autocomplete-props",
			"content": "Show borders between suggestions"
		},
		{
			"heading": "autocomplete-props",
			"content": "`autocompleteSuggestionStyle`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`StyleProp<ViewStyle>`"
		},
		{
			"heading": "autocomplete-props",
			"content": "-"
		},
		{
			"heading": "autocomplete-props",
			"content": "Suggestion item style"
		},
		{
			"heading": "autocomplete-props",
			"content": "`autocompleteSuggestionTextStyle`"
		},
		{
			"heading": "autocomplete-props",
			"content": "`StyleProp<TextStyle>`"
		},
		{
			"heading": "autocomplete-props",
			"content": "-"
		},
		{
			"heading": "autocomplete-props",
			"content": "Suggestion text style"
		},
		{
			"heading": "custom-rendering-props",
			"content": "Prop"
		},
		{
			"heading": "custom-rendering-props",
			"content": "Type"
		},
		{
			"heading": "custom-rendering-props",
			"content": "Description"
		},
		{
			"heading": "custom-rendering-props",
			"content": "`renderTag`"
		},
		{
			"heading": "custom-rendering-props",
			"content": "`(tag: string, index: number, onDelete: () => void) => ReactNode`"
		},
		{
			"heading": "custom-rendering-props",
			"content": "Custom tag renderer"
		},
		{
			"heading": "custom-rendering-props",
			"content": "`renderDeleteButton`"
		},
		{
			"heading": "custom-rendering-props",
			"content": "`(onDelete: () => void, tag: string, index: number) => ReactNode`"
		},
		{
			"heading": "custom-rendering-props",
			"content": "Custom delete button"
		},
		{
			"heading": "custom-rendering-props",
			"content": "`renderSuggestion`"
		},
		{
			"heading": "custom-rendering-props",
			"content": "`(suggestion: string, index: number, isHighlighted: boolean, onPress: () => void) => ReactNode`"
		},
		{
			"heading": "custom-rendering-props",
			"content": "Custom suggestion renderer"
		},
		{
			"heading": "methods",
			"content": "Access these methods via a ref:"
		},
		{
			"heading": "methods",
			"content": "Example usage:"
		}
	],
	"headings": [
		{
			"id": "api-reference",
			"content": "API Reference"
		},
		{
			"id": "core-props",
			"content": "Core Props"
		},
		{
			"id": "types",
			"content": "Types"
		},
		{
			"id": "itags-interface",
			"content": "ITags Interface"
		},
		{
			"id": "event-props",
			"content": "Event Props"
		},
		{
			"id": "style-props",
			"content": "Style Props"
		},
		{
			"id": "autocomplete-props",
			"content": "Autocomplete Props"
		},
		{
			"id": "custom-rendering-props",
			"content": "Custom Rendering Props"
		},
		{
			"id": "methods",
			"content": "Methods"
		}
	]
};
var toc = [
	{
		depth: 1,
		url: "#api-reference",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "API Reference" })
	},
	{
		depth: 2,
		url: "#core-props",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Core Props" })
	},
	{
		depth: 2,
		url: "#types",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Types" })
	},
	{
		depth: 3,
		url: "#itags-interface",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "ITags Interface" })
	},
	{
		depth: 3,
		url: "#event-props",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Event Props" })
	},
	{
		depth: 3,
		url: "#style-props",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Style Props" })
	},
	{
		depth: 3,
		url: "#autocomplete-props",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Autocomplete Props" })
	},
	{
		depth: 3,
		url: "#custom-rendering-props",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Custom Rendering Props" })
	},
	{
		depth: 2,
		url: "#methods",
		title: (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Methods" })
	}
];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h1: "h1",
		h2: "h2",
		h3: "h3",
		p: "p",
		pre: "pre",
		span: "span",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	};
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(_components.h1, {
			id: "api-reference",
			children: "API Reference"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "core-props",
			children: "Core Props"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Prop" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Type" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Default" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "tags" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "ITags" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "required" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Current tags state object" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "updateState" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(tags: ITags) => void" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "required" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Function to update tags state" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "keysForTag" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "string" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "' '" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Character(s) that trigger tag creation" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "suggestions" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "string[]" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "[]" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Array of suggestions for autocomplete" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "label" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "string" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Label text shown above the input" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "placeholder" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "string" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "'Enter tags...'" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Input placeholder text" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "maxTags" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "number" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "undefined" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Maximum number of tags allowed" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "disabled" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "boolean" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "false" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Disable the input" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "types",
			children: "Types"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "itags-interface",
			children: "ITags Interface"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "interface"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " ITags"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "  tag"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " string"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";          "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// Current input value"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "  tagsArray"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " string"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "[];  "
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// Array of created tags"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "event-props",
			children: "Event Props"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Prop" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Type" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onTagPress" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(index: number, tag: string) => void" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Called when a tag is pressed" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onTagDelete" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(index: number, tag: string) => void" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Called when a tag is deleted" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onFocus" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "() => void" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Called when input is focused" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onBlur" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "() => void" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Called when input loses focus" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "onChangeText" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(text: string) => void" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Called when input text changes" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "style-props",
			children: "Style Props"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Prop" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Type" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "containerStyle" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<ViewStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Main container style" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "inputContainerStyle" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<ViewStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Input wrapper style" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "inputStyle" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<TextStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Input text style" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "tagStyle" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<ViewStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Tag container style" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "tagTextStyle" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<TextStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Tag text style" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "deleteIconStyles" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<ImageStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Delete icon style" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "labelStyle" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<TextStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Label text style" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "autocomplete-props",
			children: "Autocomplete Props"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Prop" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Type" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Default" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "maxSuggestions" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "number" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "5" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Maximum suggestions to show" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "highlightMatchedText" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "boolean" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "false" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Highlight matched text" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "caseSensitive" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "boolean" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "false" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Case-sensitive matching" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "showAutocompleteBorder" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "boolean" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "true" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Show borders between suggestions" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "autocompleteSuggestionStyle" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<ViewStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "-" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Suggestion item style" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "autocompleteSuggestionTextStyle" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "StyleProp<TextStyle>" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "-" }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Suggestion text style" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h3, {
			id: "custom-rendering-props",
			children: "Custom Rendering Props"
		}),
		"\n",
		(0, import_jsx_runtime.jsxs)(_components.table, { children: [(0, import_jsx_runtime.jsx)(_components.thead, { children: (0, import_jsx_runtime.jsxs)(_components.tr, { children: [
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Prop" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Type" }),
			(0, import_jsx_runtime.jsx)(_components.th, { children: "Description" })
		] }) }), (0, import_jsx_runtime.jsxs)(_components.tbody, { children: [
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "renderTag" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(tag: string, index: number, onDelete: () => void) => ReactNode" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Custom tag renderer" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "renderDeleteButton" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(onDelete: () => void, tag: string, index: number) => ReactNode" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Custom delete button" })
			] }),
			(0, import_jsx_runtime.jsxs)(_components.tr, { children: [
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "renderSuggestion" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: (0, import_jsx_runtime.jsx)(_components.code, { children: "(suggestion: string, index: number, isHighlighted: boolean, onPress: () => void) => ReactNode" }) }),
				(0, import_jsx_runtime.jsx)(_components.td, { children: "Custom suggestion renderer" })
			] })
		] })] }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.h2, {
			id: "methods",
			children: "Methods"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Access these methods via a ref:" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z\" fill=\"currentColor\" /></svg>",
			children: (0, import_jsx_runtime.jsxs)(_components.code, { children: [
				(0, import_jsx_runtime.jsxs)(_components.span, {
					className: "line",
					children: [
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "interface"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " TagInputMethods"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "  focus"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " void"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "  blur"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " void"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "  clear"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " void"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "  addTag"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "tag"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " string"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " void"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "  removeTag"
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
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "index"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " number"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " void"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "  getTags"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: ":"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " string"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "[];"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		(0, import_jsx_runtime.jsx)(_components.p, { children: "Example usage:" }),
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
							children: "const"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " tagInputRef"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " useRef"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "<"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "TagInputMethods"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">("
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "null"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
						})
					]
				}),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, { className: "line" }),
				"\n",
				(0, import_jsx_runtime.jsx)(_components.span, {
					className: "line",
					children: (0, import_jsx_runtime.jsx)(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Later in your code"
					})
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
							children: "tagInputRef.current?."
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "focus"
						}),
						(0, import_jsx_runtime.jsx)(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						})
					]
				})
			] })
		}) })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? (0, import_jsx_runtime.jsx)(MDXLayout, {
		...props,
		children: (0, import_jsx_runtime.jsx)(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { structuredData as a, frontmatter as i, _markdown as n, toc as o, api_reference_exports as r, MDXContent as t };
