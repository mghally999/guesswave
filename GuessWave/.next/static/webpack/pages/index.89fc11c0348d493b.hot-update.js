"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx":
/*!**************************************************************************************!*\
  !*** ./src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx ***!
  \**************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrentRound.module.scss */ \"./src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.module.scss\");\n/* harmony import */ var _CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CurrentRound = (param)=>{\n    let { currentRound, username, reveal, multiplier } = param;\n    const players = currentRound;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: players.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data available\"\n        }, void 0, false, {\n            fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1___default().tableContainer),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: (_CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1___default().table),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Points\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Multiplier\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: players && players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"\".concat((_CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1___default().tableRow), \" \").concat(player.username === username ? (_CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1___default().highlightRow) : index % 2 === 0 ? (_CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1___default().background1) : (_CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1___default().background2)),\n                                style: {\n                                    color: reveal ? player.multiplier < multiplier ? \"#326a54\" : \"#cf314b\" : \"#fff\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: (_CurrentRound_module_scss__WEBPACK_IMPORTED_MODULE_1___default().username),\n                                        children: player.username\n                                    }, void 0, false, {\n                                        fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: player.points\n                                    }, void 0, false, {\n                                        fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: player.multiplier\n                                    }, void 0, false, {\n                                        fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 19\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/JavaScript-Artist/Documents/guesswave/GuessWave/src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CurrentRound;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentRound);\nvar _c;\n$RefreshReg$(_c, \"CurrentRound\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVDb250YWluZXIvV2VsY29tZVJvdW5kL0N1cnJlbnRSb3VuZC9DdXJyZW50Um91bmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRDtBQWVoRCxNQUFNQyxlQUFlO1FBQUMsRUFDcEJDLFlBQVksRUFDWkMsUUFBUSxFQUNSQyxNQUFNLEVBQ05DLFVBQVUsRUFDUTtJQUNsQixNQUFNQyxVQUFVSjtJQUVoQixxQkFDRSw4REFBQ0s7a0JBQ0VELFFBQVFFLE1BQU0sS0FBSyxrQkFDbEIsOERBQUNDO3NCQUFFOzs7OztzQ0FFSCw4REFBQ0Y7WUFBSUcsV0FBV1YsaUZBQXFCO3NCQUNuQyw0RUFBQ1k7Z0JBQU1GLFdBQVdWLHdFQUFZOztrQ0FDNUIsOERBQUNhO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ0M7a0NBQ0VWLFdBQ0NBLFFBQVFXLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDbkIsOERBQUNMO2dDQUVDSixXQUFXLEdBQ1RRLE9BRFlsQiwyRUFBZSxFQUFDLEtBTTdCLE9BTENrQixPQUFPZixRQUFRLEtBQUtBLFdBQ2hCSCwrRUFBbUIsR0FDbkJtQixRQUFRLE1BQU0sSUFDZG5CLDhFQUFrQixHQUNsQkEsOEVBQWtCO2dDQUV4QndCLE9BQU87b0NBQ0xDLE9BQU9yQixTQUNIYyxPQUFPYixVQUFVLEdBQUdBLGFBQ2xCLFlBQ0EsWUFDRjtnQ0FDTjs7a0RBRUEsOERBQUNxQjt3Q0FBR2hCLFdBQVdWLDJFQUFlO2tEQUFHa0IsT0FBT2YsUUFBUTs7Ozs7O2tEQUNoRCw4REFBQ3VCO2tEQUFJUixPQUFPUyxNQUFNOzs7Ozs7a0RBQ2xCLDhEQUFDRDtrREFBSVIsT0FBT2IsVUFBVTs7Ozs7OzsrQkFsQmpCYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQnpCO0tBckRNbEI7QUF1RE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lQ29udGFpbmVyL1dlbGNvbWVSb3VuZC9DdXJyZW50Um91bmQvQ3VycmVudFJvdW5kLnRzeD8xMWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ3VycmVudFJvdW5kLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyIHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBvaW50czogbnVtYmVyO1xyXG4gIG11bHRpcGxpZXI6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEN1cnJlbnRSb3VuZFByb3BzIHtcclxuICBjdXJyZW50Um91bmQ6IFBsYXllcltdO1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcmV2ZWFsOiBib29sZWFuO1xyXG4gIG11bHRpcGxpZXI6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgQ3VycmVudFJvdW5kID0gKHtcclxuICBjdXJyZW50Um91bmQsXHJcbiAgdXNlcm5hbWUsXHJcbiAgcmV2ZWFsLFxyXG4gIG11bHRpcGxpZXIsXHJcbn06IEN1cnJlbnRSb3VuZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgcGxheWVycyA9IGN1cnJlbnRSb3VuZCBhcyBQbGF5ZXJbXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwbGF5ZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8cD5ObyBkYXRhIGF2YWlsYWJsZTwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29udGFpbmVyfT5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlcy50YWJsZX0+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+UG9pbnRzPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5NdWx0aXBsaWVyPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAge3BsYXllcnMgJiZcclxuICAgICAgICAgICAgICAgIHBsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudGFibGVSb3d9ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc3R5bGVzLmhpZ2hsaWdodFJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGluZGV4ICUgMiA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5iYWNrZ3JvdW5kMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5iYWNrZ3JvdW5kMlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmV2ZWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcGxheWVyLm11bHRpcGxpZXIgPCBtdWx0aXBsaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiMzMjZhNTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjY2YzMTRiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJuYW1lfT57cGxheWVyLnVzZXJuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIucG9pbnRzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntwbGF5ZXIubXVsdGlwbGllcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRSb3VuZDtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkN1cnJlbnRSb3VuZCIsImN1cnJlbnRSb3VuZCIsInVzZXJuYW1lIiwicmV2ZWFsIiwibXVsdGlwbGllciIsInBsYXllcnMiLCJkaXYiLCJsZW5ndGgiLCJwIiwiY2xhc3NOYW1lIiwidGFibGVDb250YWluZXIiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwicGxheWVyIiwiaW5kZXgiLCJ0YWJsZVJvdyIsImhpZ2hsaWdodFJvdyIsImJhY2tncm91bmQxIiwiYmFja2dyb3VuZDIiLCJzdHlsZSIsImNvbG9yIiwidGQiLCJwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Game/GameContainer/WelcomeRound/CurrentRound/CurrentRound.tsx\n"));

/***/ })

});