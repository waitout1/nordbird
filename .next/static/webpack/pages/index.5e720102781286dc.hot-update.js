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

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserProfile = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.user;\n    }), me = ref.me, logOutLoading = ref.logOutLoading;\n    var onLogOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_3__.logoutRequestAction)());\n    // setIsLoggedIn(false);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card, {\n        actions: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"짺짹\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, void 0, void 0),\n                    me.Posts.length\n                ]\n            }, \"twit\", true, void 0, void 0),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"팔로잉\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, void 0, void 0),\n                    me.Followings.length\n                ]\n            }, \"follwings\", true, void 0, void 0),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"팔로워\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, void 0, void 0),\n                    me.Followers.length\n                ]\n            }, \"follwers\", true, void 0, void 0), \n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {\n                avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                    children: \"me.nickname[0]\"\n                }, void 0, false, void 0, void 0),\n                title: me.nickname\n            }, void 0, false, {\n                fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/UserProfile.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                onClick: onLogOut,\n                loading: logOutLoading,\n                children: \"로그아웃\"\n            }, void 0, false, {\n                fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/UserProfile.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seungkim/Documents/VisualStudioCodeWorkspace/react-nodebird/prepare/front/components/UserProfile.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, _this));\n};\n_s(UserProfile, \"vyrowHTqhqIO66L5UXqqoOurJQ4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = UserProfile;\nUserProfile.propTypes = {\n    setIsLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0M7QUFDUjtBQUNvQjtBQUVBOzs7QUFFdEQsR0FBSyxDQUFDUyxXQUFXLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQzs7SUFDdkIsR0FBSyxDQUFDQyxRQUFRLEdBQUdKLHdEQUFXO0lBQzVCLEdBQUssQ0FBeUJDLEdBQWtDLEdBQWxDQSx3REFBVyxDQUFDLFFBQVEsQ0FBUEksS0FBSztRQUFLQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLElBQUk7UUFBdkRDLEVBQUUsR0FBb0JOLEdBQWtDLENBQXhETSxFQUFFLEVBQUVDLGFBQWEsR0FBS1AsR0FBa0MsQ0FBcERPLGFBQWE7SUFFekIsR0FBSyxDQUFDQyxRQUFRLEdBQUdkLGtEQUFXLENBQUMsUUFDakMsR0FEdUMsQ0FBQztRQUNoQ1MsUUFBUSxDQUFDRixtRUFBbUI7SUFDNUIsRUFBd0I7SUFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0ROLHNDQUFJO1FBQ0RjLE9BQU8sRUFBRSxDQUFDO3dGQUNMQyxDQUFHOztvQkFBWSxDQUFFO2dHQUFLQyxDQUFFO29CQUFHTCxFQUFFLENBQUNNLEtBQUssQ0FBQ0MsTUFBTTs7ZUFBbEMsQ0FBTTt3RkFDVkgsQ0FBRDs7b0JBQWlCLENBQUc7Z0dBQU9DLENBQUU7b0JBQUdMLEVBQUUsQ0FBQ1EsVUFBVSxDQUFDRCxNQUFNOztlQUEvQyxDQUFXO3dGQUNiSCxDQUFIOztvQkFBZ0IsQ0FBRztnR0FBT0MsQ0FBRTtvQkFBR0wsRUFBRSxDQUFDUyxTQUFTLENBQUNGLE1BQU07O2VBQTdDLENBQVU7UUFDakIsQ0FBTDs7d0ZBRUFsQiwyQ0FBUztnQkFDTnNCLE1BQU0sOEVBQUdyQix3Q0FBTTs4QkFBQyxDQUFjOztnQkFDOUJzQixLQUFLLEVBQUVaLEVBQUUsQ0FBQ2EsUUFBUTs7Ozs7O3dGQUVyQnRCLHdDQUFNO2dCQUFDdUIsT0FBTyxFQUFFWixRQUFRO2dCQUFFYSxPQUFPLEVBQUVkLGFBQWE7MEJBQUUsQ0FBSTs7Ozs7Ozs7Ozs7O0FBR25FLENBQUM7R0F4QktMLFdBQVc7O1FBQ0lILG9EQUFXO1FBQ0VDLG9EQUFXOzs7S0FGdkNFLFdBQVc7QUEwQmpCQSxXQUFXLENBQUNvQixTQUFTLEdBQUcsQ0FBQztJQUNyQkMsYUFBYSxFQUFFekIsbUVBQXlCO0FBQzVDLENBQUM7QUFFRCwrREFBZUksV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanM/NzE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfWZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEF2YXRhciwgQnV0dG9ufSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xuXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgeyBtZSwgbG9nT3V0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICAgIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xuICAgICAgICAvLyBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidHdpdFwiPuynuuynuTxici8+e21lLlBvc3RzLmxlbmd0aH08L2Rpdj4sXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsd2luZ3NcIj7tjJTroZzsnok8YnIvPnttZS5Gb2xsb3dpbmdzLmxlbmd0aH08L2Rpdj4sXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJmb2xsd2Vyc1wiPu2MlOuhnOybjDxici8+e21lLkZvbGxvd2Vycy5sZW5ndGh9PC9kaXY+LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPENhcmQuTWV0YVxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj5tZS5uaWNrbmFtZVswXTwvQXZhdGFyPn1cbiAgICAgICAgICAgICAgICB0aXRsZT17bWUubmlja25hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30+66Gc6re47JWE7JuDPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApO1xufVxuXG5Vc2VyUHJvZmlsZS5wcm9wVHlwZXMgPSB7XG4gICAgc2V0SXNMb2dnZWRJbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJDYXJkIiwiQXZhdGFyIiwiQnV0dG9uIiwiUHJvcFR5cGVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2dPdXRMb2FkaW5nIiwib25Mb2dPdXQiLCJhY3Rpb25zIiwiZGl2IiwiYnIiLCJQb3N0cyIsImxlbmd0aCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJNZXRhIiwiYXZhdGFyIiwidGl0bGUiLCJuaWNrbmFtZSIsIm9uQ2xpY2siLCJsb2FkaW5nIiwicHJvcFR5cGVzIiwic2V0SXNMb2dnZWRJbiIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n");

/***/ })

});