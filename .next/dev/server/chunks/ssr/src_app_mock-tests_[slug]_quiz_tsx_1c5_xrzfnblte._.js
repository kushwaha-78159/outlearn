module.exports = [
"[project]/src/app/mock-tests/[slug]/quiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Quiz({ test }) {
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const score = test.questions.reduce((n, q, i)=>n + (answers[i] === q.answer ? 1 : 0), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            test.questions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "card p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-violet-200",
                            children: [
                                "QUESTION ",
                                i + 1,
                                " OF ",
                                test.questions.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                            lineNumber: 8,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 font-semibold leading-7",
                            children: q.question
                        }, void 0, false, {
                            fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                            lineNumber: 8,
                            columnNumber: 194
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: q.options.map((option, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm ${answers[i] === j ? "border-violet-300 bg-violet-300/10" : "border-white/10"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: `q${i}`,
                                            disabled: submitted,
                                            checked: answers[i] === j,
                                            onChange: ()=>setAnswers((a)=>({
                                                        ...a,
                                                        [i]: j
                                                    }))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                                            lineNumber: 8,
                                            columnNumber: 492
                                        }, this),
                                        option
                                    ]
                                }, option, true, {
                                    fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                                    lineNumber: 8,
                                    columnNumber: 316
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                            lineNumber: 8,
                            columnNumber: 256
                        }, this),
                        submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm leading-6 text-gray-300",
                            children: [
                                "Correct answer: ",
                                q.options[q.answer],
                                ". ",
                                q.explanation
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                            lineNumber: 8,
                            columnNumber: 655
                        }, this)
                    ]
                }, q.question, true, {
                    fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                    lineNumber: 8,
                    columnNumber: 63
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: submitted || Object.keys(answers).length !== test.questions.length,
                onClick: ()=>setSubmitted(true),
                className: "rounded-xl bg-violet-300 px-5 py-3 font-semibold text-black disabled:opacity-40",
                children: submitted ? "Test submitted" : "Submit answers"
            }, void 0, false, {
                fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                lineNumber: 8,
                columnNumber: 778
            }, this),
            submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: "YOUR RESULT"
                    }, void 0, false, {
                        fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                        lineNumber: 8,
                        columnNumber: 1077
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-3xl font-semibold",
                        children: [
                            score,
                            " / ",
                            test.questions.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                        lineNumber: 8,
                        columnNumber: 1129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-gray-400",
                        children: [
                            Math.round(score / test.questions.length * 100),
                            "% correct. Review the explanations above to learn from each answer."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                        lineNumber: 8,
                        columnNumber: 1209
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setAnswers({});
                            setSubmitted(false);
                        },
                        className: "mt-4 text-sm text-violet-200",
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                        lineNumber: 8,
                        columnNumber: 1367
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
                lineNumber: 8,
                columnNumber: 1051
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/mock-tests/[slug]/quiz.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_mock-tests_%5Bslug%5D_quiz_tsx_1c5_xrzfnblte._.js.map