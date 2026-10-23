module.exports = [
(()=>{"use strict";return[
"[project]/src/app/articles/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/content-page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Articles",
    description: "Educational explainers on technology, science, finance and more."
};
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$content$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionPage"], {
        title: "Articles",
        description: "Educational explainers on technology, science, finance and more.",
        items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articles"],
        basePath: "/articles"
    }, void 0, false, {
        fileName: "[project]/src/app/articles/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/content-page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionPage",
    ()=>CollectionPage,
    "DetailPage",
    ()=>DetailPage,
    "InfoPage",
    ()=>InfoPage,
    "PageShell",
    ()=>PageShell,
    "SearchBox",
    ()=>SearchBox,
    "SiteFooter",
    ()=>SiteFooter,
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-rsc] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-rsc] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-rsc] (ecmascript) <export default as Search>");
;
;
;
function SiteHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-white/10 bg-[#090b12]/90 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "container flex min-h-[72px] flex-wrap items-center justify-between gap-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2 text-xl font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-9 w-9 items-center justify-center rounded-xl bg-violet-300 text-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                size: 21
                            }, void 0, false, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 9,
                                columnNumber: 173
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 9,
                            columnNumber: 78
                        }, this),
                        "outlearn",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-violet-300",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 9,
                            columnNumber: 214
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/content-page.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/courses",
                            children: "Courses"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/blogs",
                            children: "Blogs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 11,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/articles",
                            children: "Articles"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 11,
                            columnNumber: 79
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 11,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/mock-tests",
                            children: "Tests"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 11,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            className: "text-violet-200",
                            children: "Admin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 11,
                            columnNumber: 192
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/content-page.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/content-page.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/content-page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "mt-20 border-t border-white/10 py-8 text-sm text-gray-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container flex flex-wrap justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Outlearn"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/content-page.tsx",
                    lineNumber: 19,
                    columnNumber: 152
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 19,
                            columnNumber: 240
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 19,
                            columnNumber: 272
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/privacy",
                            children: "Privacy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 19,
                            columnNumber: 308
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/terms",
                            children: "Terms"
                        }, void 0, false, {
                            fileName: "[project]/src/components/content-page.tsx",
                            lineNumber: 19,
                            columnNumber: 344
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/content-page.tsx",
                    lineNumber: 19,
                    columnNumber: 202
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/content-page.tsx",
            lineNumber: 19,
            columnNumber: 88
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/content-page.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
function PageShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteHeader, {}, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 23,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container min-h-[60vh] py-12 sm:py-16",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 23,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteFooter, {}, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 23,
                columnNumber: 98
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/content-page.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
function CollectionPage({ title, description, items, basePath }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "mb-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 28,
                        columnNumber: 107
                    }, this),
                    " Home"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold uppercase tracking-[.2em] text-violet-300",
                children: "OUTLEARN LIBRARY"
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-3 text-4xl font-semibold tracking-tight sm:text-5xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 max-w-2xl leading-7 text-gray-400",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "card flex flex-col p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-violet-300/10 px-3 py-1 text-xs text-violet-200",
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/content-page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 66
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 18,
                                        className: "text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/content-page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 170
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 34,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-5 text-xl font-semibold leading-snug",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 35,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 flex-1 text-sm leading-6 text-gray-400",
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 36,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/content-page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 159
                                            }, this),
                                            item.readTime
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/content-page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 117
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `${basePath}/${item.slug}`,
                                        className: "inline-flex items-center gap-1 text-violet-200",
                                        children: [
                                            "Explore ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/content-page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 307
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/content-page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 200
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 37,
                                columnNumber: 9
                            }, this)
                        ]
                    }, item.slug, true, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 33,
                        columnNumber: 26
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this),
            !items.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-10 text-gray-400",
                children: "No content is available yet."
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 40,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/content-page.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
function DetailPage({ item, backPath, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: backPath,
                className: "inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 46,
                        columnNumber: 109
                    }, this),
                    " Back to ",
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "mx-auto mt-8 max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-violet-300/10 px-3 py-1.5 text-xs text-violet-200",
                        children: item.category
                    }, void 0, false, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 48,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 49,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 text-lg leading-8 text-gray-400",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 50,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex flex-wrap gap-4 border-y border-white/10 py-4 text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.level
                            }, void 0, false, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 51,
                                columnNumber: 102
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.readTime
                            }, void 0, false, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 51,
                                columnNumber: 127
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 51,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-9 space-y-6",
                        children: item.content.map((paragraph, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: i === 0 ? "text-xl font-medium leading-8 text-gray-100" : "text-base leading-8 text-gray-300",
                                children: paragraph
                            }, i, false, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 53,
                                columnNumber: 45
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 52,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 rounded-2xl border border-violet-300/15 bg-violet-300/[0.05] p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "Keep exploring"
                            }, void 0, false, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 55,
                                columnNumber: 95
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-6 text-gray-400",
                                children: "Learning grows when you connect ideas, ask questions and practise what you discover."
                            }, void 0, false, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 55,
                                columnNumber: 152
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: backPath,
                                className: "mt-4 inline-flex items-center gap-2 text-sm text-violet-200",
                                children: [
                                    "Explore more ",
                                    label,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/content-page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 407
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/content-page.tsx",
                                lineNumber: 55,
                                columnNumber: 292
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 55,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/content-page.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
function InfoPage({ title, description, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageShell, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold tracking-[.2em] text-violet-300",
                children: "OUTLEARN"
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 61,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-3 text-4xl font-semibold sm:text-5xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 61,
                columnNumber: 102
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 max-w-2xl leading-7 text-gray-400",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 61,
                columnNumber: 170
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 max-w-3xl",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 61,
                columnNumber: 241
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/content-page.tsx",
        lineNumber: 61,
        columnNumber: 10
    }, this);
}
function SearchBox() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: "/search",
        className: "mt-8 flex max-w-2xl gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 18,
                        className: "text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 65,
                        columnNumber: 176
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "q",
                        placeholder: "Search courses, articles and blogs...",
                        className: "w-full bg-transparent py-3.5 text-sm outline-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/content-page.tsx",
                        lineNumber: 65,
                        columnNumber: 221
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 65,
                columnNumber: 71
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "rounded-xl bg-violet-300 px-5 font-semibold text-black",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/src/components/content-page.tsx",
                lineNumber: 65,
                columnNumber: 361
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/content-page.tsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/lib/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allContent",
    ()=>allContent,
    "articles",
    ()=>articles,
    "blogs",
    ()=>blogs,
    "courses",
    ()=>courses,
    "getCollection",
    ()=>getCollection,
    "mockTests",
    ()=>mockTests,
    "projects",
    ()=>projects,
    "stories",
    ()=>stories
]);
const courses = [
    {
        slug: "artificial-intelligence",
        title: "Introduction to Artificial Intelligence",
        category: "AI & Machine Learning",
        description: "Understand AI fundamentals, machine learning, neural networks and large language models.",
        level: "Beginner",
        readTime: "12 modules",
        content: [
            "What is artificial intelligence?",
            "AI is a field of computer science focused on systems that perform tasks associated with human intelligence. Common examples include recognising patterns, processing language and making predictions.",
            "Module 1 — AI foundations: learn about intelligent systems, datasets, algorithms and the difference between AI, machine learning and deep learning.",
            "Module 2 — Machine learning: explore training data, features, labels, evaluation and overfitting.",
            "Module 3 — Neural networks: understand layers, weights, activation functions and model training at a conceptual level.",
            "Module 4 — Generative AI: discover tokens, language models, prompts, limitations and responsible use.",
            "Practice: describe three AI applications, identify their inputs and outputs, and consider one risk for each."
        ]
    },
    {
        slug: "financial-literacy",
        title: "Financial Literacy Essentials",
        category: "Finance",
        description: "Learn budgeting, saving, interest, inflation and responsible financial decision-making.",
        level: "Beginner",
        readTime: "10 modules",
        content: [
            "Build your financial foundations.",
            "A budget compares money coming in with money going out. Tracking spending helps people make informed choices and plan for future needs.",
            "Module 1 — Income and expenses: distinguish fixed costs, variable costs, needs and wants.",
            "Module 2 — Saving: understand emergency funds, financial goals and the effect of consistency.",
            "Module 3 — Interest: compare simple and compound interest with worked examples.",
            "Module 4 — Inflation and risk: learn why purchasing power changes and why returns are never guaranteed.",
            "Practice: create a sample monthly budget and explain how you would adjust it after an unexpected expense."
        ]
    },
    {
        slug: "mathematics-problem-solving",
        title: "Mathematics for Problem Solving",
        category: "Mathematics",
        description: "Strengthen logical reasoning, patterns, algebra and practical mathematical thinking.",
        level: "Beginner",
        readTime: "14 modules",
        content: [
            "Learn to approach problems systematically.",
            "Mathematical problem solving begins by identifying what is known, what must be found and which assumptions are valid.",
            "Module 1 — Logic: use statements, examples and counterexamples to evaluate claims.",
            "Module 2 — Algebra: translate word problems into expressions and equations.",
            "Module 3 — Patterns: investigate sequences, functions and relationships.",
            "Module 4 — Probability: distinguish possible outcomes from likely outcomes.",
            "Practice: solve a multi-step word problem and explain why each step is valid."
        ]
    },
    {
        slug: "web-development-foundations",
        title: "Web Development Foundations",
        category: "Programming & Technology",
        description: "Explore HTML, CSS, JavaScript, React and the fundamentals of building websites.",
        level: "Beginner",
        readTime: "12 modules",
        content: [
            "Understand how websites work.",
            "Web development combines document structure, visual styling and programming to create interactive experiences.",
            "Module 1 — HTML: organise content with meaningful semantic elements.",
            "Module 2 — CSS: learn layout, responsive design, spacing and typography.",
            "Module 3 — JavaScript: work with variables, functions, arrays, objects and events.",
            "Module 4 — React: explore components, properties, state and reusable interfaces.",
            "Practice: build a responsive personal profile page and test it on mobile and desktop."
        ]
    },
    {
        slug: "blockchain-web3-basics",
        title: "Blockchain and Web3 Fundamentals",
        category: "Blockchain & Web3",
        description: "Learn distributed ledgers, consensus, smart contracts and decentralised applications.",
        level: "Intermediate",
        readTime: "8 modules",
        content: [
            "Explore the foundations of blockchain technology.",
            "A blockchain is a type of distributed ledger in which records are linked and validated according to a protocol.",
            "Module 1 — Distributed systems: learn about nodes, replication and trust.",
            "Module 2 — Consensus: understand at a high level how networks agree on valid records.",
            "Module 3 — Smart contracts: explore programs that execute on supported blockchain networks.",
            "Module 4 — Security: learn about key management, irreversible transactions and common risks.",
            "Practice: diagram a simple transaction and identify the parties, data and security assumptions."
        ]
    }
];
const articles = [
    {
        slug: "how-language-models-work",
        title: "How Large Language Models Actually Work",
        category: "Artificial Intelligence",
        description: "A beginner-friendly introduction to tokens, training, predictions and language models.",
        level: "Beginner",
        readTime: "8 min read",
        content: [
            "A language model learns statistical patterns from training data and uses those patterns to predict likely next tokens.",
            "Text is divided into tokens. A model processes token representations in context and produces a distribution over possible next tokens.",
            "During training, model parameters are adjusted to improve predictions on training examples. Training does not guarantee factual accuracy.",
            "Modern transformer architectures use attention mechanisms to represent relationships between tokens in context.",
            "Language models can assist with writing, coding and summarisation, but they may produce incorrect or fabricated statements. Verify important claims independently.",
            "Reflection: why can a fluent answer still be wrong? Consider the difference between generating plausible text and verifying a fact."
        ]
    },
    {
        slug: "understanding-compound-growth",
        title: "Understanding Compound Growth",
        category: "Finance",
        description: "Explore how repeated growth can change a value over time using simple examples.",
        level: "Beginner",
        readTime: "6 min read",
        content: [
            "Compound growth means that growth in one period can contribute to growth in later periods.",
            "For example, a value of 1,000 growing by 10% becomes 1,100 after one period. A further 10% increase makes it 1,210.",
            "The general model is final value = starting value × (1 + rate)^number of periods, assuming a constant rate and consistent compounding.",
            "Real-world returns vary. Fees, taxes, inflation and losses can significantly change outcomes, and no investment return is guaranteed.",
            "Practice: calculate the value after three periods for a starting amount of 500 and a hypothetical constant growth rate of 5%."
        ]
    },
    {
        slug: "building-your-first-web-project",
        title: "From Beginner to Building Real Projects",
        category: "Programming",
        description: "A practical method for turning programming knowledge into small, finished projects.",
        level: "Beginner",
        readTime: "10 min read",
        content: [
            "Projects help connect isolated programming concepts to real problems.",
            "Start by writing a one-sentence problem statement and listing the smallest features needed to solve it.",
            "Build one complete path before adding optional features. Keep components small and give each component a clear responsibility.",
            "Use Git to record changes, test important interactions and write a README explaining setup, features and limitations.",
            "Choose a manageable project such as a task tracker, quiz application or searchable resource library. Finish, test and improve it before expanding.",
            "Reflection: which single feature would make your next project genuinely useful to another person?"
        ]
    }
];
const blogs = [
    {
        slug: "learning-in-the-age-of-ai",
        title: "Learning in the Age of AI",
        category: "Ideas & Technology",
        description: "How to use AI tools as learning partners without giving up independent thinking.",
        level: "Perspective",
        readTime: "7 min read",
        content: [
            "AI tools can make explanations and examples easier to access, but access to an answer is not the same as understanding.",
            "Start with your own attempt. Then ask a tool to explain a difficult concept in different ways and compare the explanations against trusted material.",
            "Practise retrieval: close your notes and explain the idea in your own words. Try a new problem without copying a worked solution.",
            "Check claims, especially when they involve health, money, law or current events. Models can make mistakes and may not have current information.",
            "The most useful learning workflow combines curiosity, deliberate practice, feedback and independent judgement."
        ]
    },
    {
        slug: "why-small-projects-matter",
        title: "Why Small Projects Matter",
        category: "Learning",
        description: "Small finished projects can teach planning, debugging and communication.",
        level: "Perspective",
        readTime: "5 min read",
        content: [
            "A small project creates a concrete goal and gives new concepts a reason to exist.",
            "Keeping scope small reduces the number of unknowns and makes it easier to finish a first version.",
            "After the first version works, improve accessibility, validation, error handling and documentation.",
            "A clear demonstration and honest description of limitations help other people understand what you built.",
            "Choose a problem you can explain clearly, make a simple version, and improve it using feedback."
        ]
    }
];
const stories = [
    {
        slug: "the-power-of-curiosity",
        title: "The Power of Curiosity",
        category: "Learning Story",
        description: "A short reflection on asking better questions and exploring unfamiliar ideas.",
        level: "All levels",
        readTime: "4 min read",
        content: [
            "Every meaningful discovery begins with a question. Curiosity turns an unfamiliar subject from a barrier into an invitation.",
            "A learner who does not understand a concept can begin by asking what it means, why it matters and which simple example demonstrates it.",
            "Progress is rarely a straight line. Experiments fail, explanations need revisiting and early assumptions sometimes turn out to be wrong.",
            "The habit of asking questions, testing ideas and reflecting on results creates opportunities for lifelong learning."
        ]
    }
];
const projects = [
    {
        slug: "interactive-quiz-lab",
        title: "Interactive Quiz Lab",
        category: "Education",
        description: "A learning project concept for practising multiple-choice questions and reviewing answers.",
        level: "Beginner",
        readTime: "Practice project",
        content: [
            "Goal: create an accessible quiz with questions, answer choices, feedback and a final score.",
            "Suggested stack: Next.js, TypeScript and a reusable question component.",
            "Milestones: define a question data format, build the quiz interface, calculate the score and add review mode.",
            "Extension: persist results in a database and add topic-based question sets."
        ]
    },
    {
        slug: "personal-knowledge-library",
        title: "Personal Knowledge Library",
        category: "Productivity",
        description: "A searchable collection of notes, articles and learning resources.",
        level: "Intermediate",
        readTime: "Practice project",
        content: [
            "Goal: organise learning resources by title, category, tags and reading status.",
            "Start with a searchable list and add filters for topic and resource type.",
            "Use a database when multiple sessions or users need persistent storage.",
            "Extension: add authentication, private bookmarks and export options."
        ]
    }
];
const mockTests = [
    {
        slug: "ai-fundamentals",
        title: "AI Fundamentals Quiz",
        description: "Test your understanding of artificial intelligence and machine learning.",
        questions: [
            {
                question: "What is a machine learning model trained to do?",
                options: [
                    "Learn patterns from data",
                    "Replace all databases",
                    "Guarantee every prediction",
                    "Only store images"
                ],
                answer: 0,
                explanation: "Models learn patterns from examples to perform a specified task."
            },
            {
                question: "What is a token in a language model?",
                options: [
                    "A guaranteed fact",
                    "A unit of text processing",
                    "A database password",
                    "A type of monitor"
                ],
                answer: 1,
                explanation: "Tokens are units of text, such as word fragments, processed by a language model."
            },
            {
                question: "Why should AI-generated claims be checked?",
                options: [
                    "AI never produces text",
                    "All models are offline",
                    "Models can generate inaccurate answers",
                    "Checking is impossible"
                ],
                answer: 2,
                explanation: "Language models can produce plausible but incorrect information."
            },
            {
                question: "What does training data help a model do?",
                options: [
                    "Learn patterns",
                    "Guarantee future truth",
                    "Eliminate every bias",
                    "Replace evaluation"
                ],
                answer: 0,
                explanation: "Training data provides examples used to adjust a model's parameters."
            },
            {
                question: "What is a responsible use of AI?",
                options: [
                    "Trust every output",
                    "Share private data publicly",
                    "Ignore all limitations",
                    "Verify important results"
                ],
                answer: 3,
                explanation: "Reviewing important outputs helps identify errors and limitations."
            }
        ]
    },
    {
        slug: "web-basics",
        title: "Web Development Basics",
        description: "Check your understanding of HTML, CSS, JavaScript and web development.",
        questions: [
            {
                question: "What is HTML mainly used for?",
                options: [
                    "Structuring page content",
                    "Managing a server's power",
                    "Creating database backups",
                    "Encrypting every network"
                ],
                answer: 0,
                explanation: "HTML defines the structure and meaning of web content."
            },
            {
                question: "What does CSS control?",
                options: [
                    "Database credentials",
                    "Presentation and layout",
                    "Git history",
                    "Server hardware"
                ],
                answer: 1,
                explanation: "CSS controls styling, layout and visual presentation."
            },
            {
                question: "Which language adds browser-side interactivity?",
                options: [
                    "SQL only",
                    "Markdown only",
                    "JavaScript",
                    "CSV"
                ],
                answer: 2,
                explanation: "JavaScript can respond to events and update web interfaces."
            },
            {
                question: "What is a React component?",
                options: [
                    "A reusable UI building block",
                    "A domain registrar",
                    "A database table only",
                    "A CSS colour"
                ],
                answer: 0,
                explanation: "Components let developers organise interfaces into reusable units."
            },
            {
                question: "Why test a website on mobile?",
                options: [
                    "Mobile screens do not exist",
                    "To remove all HTML",
                    "To guarantee no bugs",
                    "To check responsive behaviour"
                ],
                answer: 3,
                explanation: "Responsive testing checks usability across different screen sizes."
            }
        ]
    }
];
function allContent() {
    return [
        ...courses.map((x)=>({
                ...x,
                type: "Course"
            })),
        ...articles.map((x)=>({
                ...x,
                type: "Article"
            })),
        ...blogs.map((x)=>({
                ...x,
                type: "Blog"
            })),
        ...stories.map((x)=>({
                ...x,
                type: "Story"
            })),
        ...projects.map((x)=>({
                ...x,
                type: "Project"
            }))
    ];
}
function getCollection(type) {
    const map = {
        courses,
        blogs,
        articles,
        stories,
        projects
    };
    return map[type] ?? [];
}
}),
]})(),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/articles/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/articles/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05t66nhggi-5w._.js.map