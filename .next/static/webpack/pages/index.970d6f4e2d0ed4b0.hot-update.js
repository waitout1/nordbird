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

/***/ "./components/ImageZoom/index.js":
/*!***************************************!*\
  !*** ./components/ImageZoom/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ImagesZoom = function(param) {\n    var images = param.images, onClose = param.onClose;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSlide = ref[0], setCurrentSlide = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"상세 이미지\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClose,\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 18\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        initialSlide: 0,\n                        afterChange: function(slide) {\n                            return setCurrentSlide(slide);\n                        },\n                        infinite: true,\n                        arrows: false,\n                        slidesToShow: 1,\n                        slidesToScroll: 1,\n                        children: images.map(function(v) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: v.src,\n                                    alt: v.src\n                                }, void 0, false, {\n                                    fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 33\n                                }, _this1)\n                            }, v.src, false, {\n                                fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n                                lineNumber: 25,\n                                columnNumber: 29\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/ImageZoom/index.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, _this));\n};\n_s(ImagesZoom, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ImagesZoom;\nImagesZoom.propTypes = {\n    imges: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)).isRequired,\n    onClose: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\nvar _c;\n$RefreshReg$(_c, \"ImagesZoom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ltYWdlWm9vbS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFDUjtBQUNHO0FBQ0k7OztBQUV0QyxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLFFBQWlCLENBQUM7UUFBdkJDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87OztJQUNqQyxHQUFLLENBQW1DTixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUEzQ08sWUFBWSxHQUFxQlAsR0FBVyxLQUE5QlEsZUFBZSxHQUFJUixHQUFXO0lBQ25ELE1BQU0sNkVBQ0RTLENBQUc7O3dGQUNDQyxDQUFNOztnR0FDRkMsQ0FBRTtrQ0FBQyxDQUFNOzs7Ozs7Z0dBQ1JDLENBQU07d0JBQUNDLE9BQU8sRUFBRVAsT0FBTztrQ0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7d0ZBRS9CRyxDQUFHO3NHQUNDQSxDQUFHOzBHQUNDUixtREFBSzt3QkFDRmEsWUFBWSxFQUFFLENBQUM7d0JBQ2ZDLFdBQVcsRUFBRSxRQUFRLENBQVBDLEtBQUs7NEJBQUtSLE1BQU0sQ0FBTkEsZUFBZSxDQUFDUSxLQUFLOzt3QkFDN0NDLFFBQVE7d0JBQ1JDLE1BQU0sRUFBRSxLQUFLO3dCQUNiQyxZQUFZLEVBQUUsQ0FBQzt3QkFDZkMsY0FBYyxFQUFFLENBQUM7a0NBRWhCZixNQUFNLENBQUNnQixHQUFHLENBQUMsUUFBUSxDQUFQQyxDQUFDOzBDQUNWLE1BQU0sK0RBQUxiLENBQUc7c0hBQ0NjLENBQUc7b0NBQUNDLEdBQUcsRUFBRUYsQ0FBQyxDQUFDRSxHQUFHO29DQUFFQyxHQUFHLEVBQUVILENBQUMsQ0FBQ0UsR0FBRzs7Ozs7OytCQURyQkYsQ0FBQyxDQUFDRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVM0MsQ0FBQztHQTdCS3BCLFVBQVU7S0FBVkEsVUFBVTtBQWdDaEJBLFVBQVUsQ0FBQ3NCLFNBQVMsR0FBRyxDQUFDO0lBQ3BCQyxLQUFLLEVBQUV6Qix5REFBaUIsQ0FBQ0EsMERBQWdCLEVBQUU0QixVQUFVO0lBQ3JEeEIsT0FBTyxFQUFFSixtRUFBeUI7QUFDdEMsQ0FBQztBQUVELCtEQUFlRSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZVpvb20vaW5kZXguanM/ZWNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEltYWdlc1pvb20gPSAoeyBpbWFnZXMsIG9uQ2xvc2UgfSkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XG4gICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0+WDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxTbGljayAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbD17MX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHYpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17di5zcmN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17di5zcmN9IGFsdD17di5zcmN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TbGljaz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblxuSW1hZ2VzWm9vbS5wcm9wVHlwZXMgPSB7XG4gICAgaW1nZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNsaWNrIiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJkaXYiLCJoZWFkZXIiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbml0aWFsU2xpZGUiLCJhZnRlckNoYW5nZSIsInNsaWRlIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1hcCIsInYiLCJpbWciLCJzcmMiLCJhbHQiLCJwcm9wVHlwZXMiLCJpbWdlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ImageZoom/index.js\n");

/***/ })

});