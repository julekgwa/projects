import { a as __toESM } from "./chunk-_TIqcEvS.js";
import { b as Link, t as baseOptions } from "./layout.shared-BTAmWtvD.js";
import { t as require_jsx_runtime } from "./jsx-runtime-BtDrtBkJ.js";
import { a as packages } from "./shared-DqE0m7Bq.js";
import { a as ArrowRight, i as CreditCard, n as PanelsTopLeft, r as MapPin, t as Tags } from "./tags-B8W3moLs.js";
import { t as HomeLayout } from "./home-WRZy0ByV.js";
//#region src/routes/index.tsx?tsr-split=component
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
var iconMap = {
	"places-autocomplete": MapPin,
	"app-onboard": PanelsTopLeft,
	"payment-card-icons": CreditCard,
	"input-tag": Tags
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HomeLayout, {
		...baseOptions(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-fd-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.15]",
				style: {
					backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
					backgroundSize: "24px 24px"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl font-bold tracking-tight sm:text-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fd-foreground",
								children: "React Native"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-linear-to-r from-fd-primary to-purple-400 bg-clip-text text-transparent",
								children: "Libraries"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base text-fd-muted-foreground sm:text-lg",
						children: "A collection of high-quality, production-ready components for React Native."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/places-autocomplete/$",
							params: { _splat: "" },
							className: "inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90",
							children: ["Browse packages", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-5xl px-4 py-16 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-widest text-fd-muted-foreground",
					children: "Packages"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-fd-muted-foreground",
					children: "Each package is independently installable, fully typed, and production-tested."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: packages.map((pkg) => {
						const Icon = iconMap[pkg.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex flex-col rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-lg border border-fd-border bg-fd-background text-fd-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-base font-semibold text-fd-foreground",
									children: pkg.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm leading-relaxed text-fd-muted-foreground",
									children: pkg.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-2",
									children: pkg.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-md border border-fd-border bg-fd-background px-2 py-1 text-[11px] font-medium text-fd-muted-foreground",
										children: tag
									}, tag))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: `${pkg.to}/$`,
									params: { _splat: "" },
									className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-fd-primary transition-colors hover:underline",
									children: ["Get started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						}, pkg.id);
					})
				})
			]
		})]
	});
}
//#endregion
export { Home as component };
