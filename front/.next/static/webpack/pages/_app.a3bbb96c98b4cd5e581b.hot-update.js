webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/layoutStyle */ \"./styles/layoutStyle.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/user */ \"./reducers/user.tsx\");\nvar _this = undefined,\n  _jsxFileName = \"/Users/gyeongmin/project/myRecipe/front/components/layout/Layout.tsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Sider = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Sider;\nfunction getItem(label, key, icon, children) {\n  return {\n    key: key,\n    icon: icon,\n    children: children,\n    label: label\n  };\n}\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n  var children = _ref.children;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    isLoggedIn = _useSelector.isLoggedIn;\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    me = _useSelector2.me,\n    isLogginOut = _useSelector2.isLogginOut;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n    collapsed = _useState[0],\n    setCollapsed = _useState[1];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"한식\"),\n    current = _useState2[0],\n    setCurrent = _useState2[1];\n  var onMenu = function onMenu(e) {\n    setCurrent(e.key);\n  };\n  var items = [getItem(isLoggedIn ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 26\n    }\n  }, \"\\uD68C\\uC6D0\\uC815\\uBCF4\") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 62\n    }\n  }, \"\\uB85C\\uADF8\\uC778\\xA0/\\xA0\\uD68C\\uC6D0\\uAC00\\uC785\"), '1', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"UserOutlined\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 116\n    }\n  })), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/recipe/korea\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"\\uD55C\\uC2DD\"), '2', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 56\n    }\n  })), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/recipe/china\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"\\uC911\\uC2DD\"), '3', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 56\n    }\n  })), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/recipe/western\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"\\uC591\\uC2DD\"), '4', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 58\n    }\n  })), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/recipe/dessert\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"\\uB514\\uC800\\uD2B8\"), '5', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"RestOutlined\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 59\n    }\n  })), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/recipe/diet\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"\\uB2E4\\uC774\\uC5B4\\uD2B8\"), '6', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 57\n    }\n  }))];\n  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__[\"logoutRequestAction\"])());\n  }, []);\n  return __jsx(_styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(Sider, {\n    collapsible: true,\n    collapsed: collapsed,\n    onCollapse: function onCollapse(value) {\n      return setCollapsed(value);\n    },\n    theme: \"light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"demo-logo-vertical\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n    theme: \"light\",\n    defaultSelectedKeys: ['2'],\n    mode: \"inline\",\n    items: items,\n    onClick: onMenu,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__[\"Head\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, me.nickname, \"\\uB2D8\"), __jsx(_styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__[\"LogoutBtn\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, isLoggedIn && __jsx(\"div\", {\n    onClick: onLogOut,\n    loading: isLogginOut,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 28\n    }\n  }, \"\\uB85C\\uADF8\\uC544\\uC6C3\")), __jsx(_styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, \"\\uB098\\uB9CC\\uC758 \\uB808\\uC2DC\\uD53C\"), __jsx(\"div\", {\n    className: \"searchInput\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, __jsx(_styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__[\"SearchInput\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__[\"ContentContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__[\"SubTab\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  }, \"Recipe\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 15\n    }\n  }, \"Bill\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/create\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(_styles_layoutStyle__WEBPACK_IMPORTED_MODULE_3__[\"createBtn\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, \"\\uC791\\uC131\\uD558\\uAE30\"))), __jsx(\"div\", {\n    className: \"children\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, children))));\n};\n_s(AppLayout, \"vDW3u4+IMs8lgQNKL5QwiAj0YfM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]];\n});\n_c = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeD8yZWVkIl0sIm5hbWVzIjpbIlNpZGVyIiwiTGF5b3V0IiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiQXBwTGF5b3V0IiwiX3JlZiIsIl9zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIl91c2VTZWxlY3RvciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsIl91c2VTZWxlY3RvcjIiLCJtZSIsImlzTG9nZ2luT3V0IiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJfdXNlU3RhdGUyIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbk1lbnUiLCJlIiwiaXRlbXMiLCJfX2pzeCIsIkxpbmsiLCJocmVmIiwiX19zZWxmIiwiX3RoaXMiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIlVzZXJPdXRsaW5lZCIsIlNtaWxlT3V0bGluZWQiLCJSZXN0T3V0bGluZWQiLCJvbkxvZ091dCIsInVzZUNhbGxiYWNrIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInN0eWxlIiwiY29sbGFwc2libGUiLCJvbkNvbGxhcHNlIiwidmFsdWUiLCJ0aGVtZSIsImNsYXNzTmFtZSIsIk1lbnUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwibW9kZSIsIm9uQ2xpY2siLCJuaWNrbmFtZSIsImxvYWRpbmciLCJCcmVhZGNydW1iIiwiSXRlbSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUsxQjtBQUVxQjtBQUNFO0FBQ3JCO0FBQzBCO0FBQ0c7QUFFMUQsSUFBUUEsS0FBSyxHQUFLQywyQ0FBTSxDQUFoQkQsS0FBSztBQVFiLFNBQVNFLE9BQU9BLENBQ2RDLEtBQXNCLEVB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QUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNsQlQsS0FBQSxDQUFDZ0IsNkRBQWU7SUFBQWIsTUFBQSxFQUFBQyxLQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQywwQkFBcUIsQ0FDbEMsQ0FDTSxDQUFDLEVBQ2ZULEtBQUE7SUFBS3FCLFNBQVMsRUFBQyxVQUFVO0lBQUFsQixNQUFBLEVBQUFDLEtBQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUN0QmpDLFFBQ0UsQ0FDaUIsQ0FDbEIsQ0FDTyxDQUFDO0FBRXRCLENBQUM7QUFBQUcsRUFBQSxDQTNES0YsU0FBUztFQUFBLFFBQ0lJLHVEQUFXLEVBQ0xFLHVEQUFXLEVBQ05BLHVEQUFXO0FBQUE7QUFBQStDLEVBQUEsR0FIbkNyRCxTQUFTO0FBNkRBQSx3RUFBUyxFQUFDO0FBQUEsSUFBQXFELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFNtaWxlT3V0bGluZWQsXG4gIFJlc3RPdXRsaW5lZCxcbiAgVXNlck91dGxpbmVkLFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvbGF5b3V0U3R5bGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcblxuY29uc3QgeyBTaWRlciB9ID0gTGF5b3V0O1xuXG5pbnRlcmZhY2UgUHJvcFR5cGVzIHtcbiAgY2hpbGRyZW46IGFueTtcbn1cblxudHlwZSBNZW51SXRlbSA9IFJlcXVpcmVkPE1lbnVQcm9wcz5bJ2l0ZW1zJ11bbnVtYmVyXTtcblxuZnVuY3Rpb24gZ2V0SXRlbShcbiAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZSxcbiAga2V5OiBSZWFjdC5LZXksXG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGUsXG4gIGNoaWxkcmVuPzogTWVudUl0ZW1bXSxcbik6IE1lbnVJdGVtIHtcbiAgcmV0dXJuIHtcbiAgICBrZXksXG4gICAgaWNvbixcbiAgICBjaGlsZHJlbixcbiAgICBsYWJlbCxcbiAgfSBhcyBNZW51SXRlbTtcbn1cblxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcFR5cGVzKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IG1lLCBpc0xvZ2dpbk91dCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSk9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIu2VnOyLnVwiKTtcbiAgXG4gIGNvbnN0IG9uTWVudTogTWVudVByb3BzW1wib25DbGlja1wiXSA9IChlKSA9PntcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW1zOiBNZW51SXRlbVtdID0gW1xuICAgIGdldEl0ZW0oaXNMb2dnZWRJbiA/IDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPu2ajOybkOygleuztDwvTGluaz4gOiA8TGluayBocmVmPVwiL2xvZ2luXCI+66Gc6re47J24Jm5ic3A7LyZuYnNwO+2ajOybkOqwgOyehTwvTGluaz4sICcxJywgPFVzZXJPdXRsaW5lZCAvPiksXG4gICAgZ2V0SXRlbSg8TGluayBocmVmPVwiL3JlY2lwZS9rb3JlYVwiPu2VnOyLnTwvTGluaz4sICcyJywgPFNtaWxlT3V0bGluZWQgLz4pLFxuICAgIGdldEl0ZW0oPExpbmsgaHJlZj1cIi9yZWNpcGUvY2hpbmFcIj7spJHsi508L0xpbms+LCAnMycsIDxTbWlsZU91dGxpbmVkIC8+KSxcbiAgICBnZXRJdGVtKDxMaW5rIGhyZWY9XCIvcmVjaXBlL3dlc3Rlcm5cIj7slpHsi508L0xpbms+LCAnNCcsIDxTbWlsZU91dGxpbmVkIC8+KSxcbiAgICBnZXRJdGVtKDxMaW5rIGhyZWY9XCIvcmVjaXBlL2Rlc3NlcnRcIj7rlJTsoIDtirg8L0xpbms+LCAnNScsIDxSZXN0T3V0bGluZWQgLz4pLFxuICAgIGdldEl0ZW0oPExpbmsgaHJlZj1cIi9yZWNpcGUvZGlldFwiPuuLpOydtOyWtO2KuDwvTGluaz4sICc2JywgPFNtaWxlT3V0bGluZWQgLz4pLFxuICBdO1xuXG4gIGNvbnN0IG9uTG9nT3V0ID0gdXNlQ2FsbGJhY2soKCk9PntcbiAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xuICB9LFtdKVxuXG4gIHJldHVybihcbiAgICA8c3R5bGUuQ29udGFpbmVyPlxuICAgICAgPFNpZGVyIGNvbGxhcHNpYmxlIGNvbGxhcHNlZD17Y29sbGFwc2VkfSBvbkNvbGxhcHNlPXsodmFsdWUpID0+IHNldENvbGxhcHNlZCh2YWx1ZSl9IHRoZW1lPVwibGlnaHRcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVtby1sb2dvLXZlcnRpY2FsXCIgLz5cbiAgICAgICAgPE1lbnUgdGhlbWU9XCJsaWdodFwiICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzInXX0gbW9kZT1cImlubGluZVwiIGl0ZW1zPXtpdGVtc30gb25DbGljaz17b25NZW51fSAvPlxuICAgICAgPC9TaWRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxzdHlsZS5IZWFkPlxuICAgICAgICAgIDxkaXY+e21lLm5pY2tuYW1lfeuLmDwvZGl2PlxuICAgICAgICAgIDxzdHlsZS5Mb2dvdXRCdG4+XG4gICAgICAgICAgICB7aXNMb2dnZWRJbiAmJiA8ZGl2IG9uQ2xpY2s9e29uTG9nT3V0fSBsb2FkaW5nPXtpc0xvZ2dpbk91dH0+66Gc6re47JWE7JuDPC9kaXY+fVxuICAgICAgICAgIDwvc3R5bGUuTG9nb3V0QnRuPlxuICAgICAgICAgIDxzdHlsZS5UaXRsZSBocmVmPVwiL1wiPuuCmOunjOydmCDroIjsi5ztlLw8L3N0eWxlLlRpdGxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoSW5wdXRcIj5cbiAgICAgICAgICAgIDxzdHlsZS5TZWFyY2hJbnB1dCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3N0eWxlLkhlYWQ+XG4gICAgICAgIDxzdHlsZS5Db250ZW50Q29udGFpbmVyPlxuICAgICAgICAgIDxzdHlsZS5TdWJUYWI+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYj5cbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5SZWNpcGU8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5CaWxsPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZVwiPlxuICAgICAgICAgICAgICA8c3R5bGUuY3JlYXRlQnRuPuyekeyEse2VmOq4sDwvc3R5bGUuY3JlYXRlQnRuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvc3R5bGUuU3ViVGFiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zdHlsZS5Db250ZW50Q29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9zdHlsZS5Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Layout.tsx\n");

/***/ })

})