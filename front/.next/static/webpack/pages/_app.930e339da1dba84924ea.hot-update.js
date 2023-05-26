webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styles_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/layout */ \"./styles/layout.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/gyeongmin/project/myRecipe/front/components/layout/Layout.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Sider = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Sider;\nfunction getItem(label, key, icon, children) {\n  return {\n    key: key,\n    icon: icon,\n    children: children,\n    label: label\n  };\n}\nvar items = [getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  href: \"/login\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 11\n  }\n}, \"\\uB85C\\uADF8\\uC778\"), '1', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"UserOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 48\n  }\n})), getItem('한식', '레시피1', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 25\n  }\n}), [getItem('면', '2'), getItem('국', '3'), getItem('밥', '4')]), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  href: \"/recipe/china\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 11\n  }\n}, \"\\uC911\\uC2DD\"), '5', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 54\n  }\n})), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  href: \"/recipe/western\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 11\n  }\n}, \"\\uC591\\uC2DD\"), '6', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 56\n  }\n})), getItem('디저트', '레시피2', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"RestOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 26\n  }\n}), [getItem('구움과자', '7'), getItem('빵', '8'), getItem('케이크', '9')]), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  href: \"/recipe/diet\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 11\n  }\n}, \"\\uB2E4\\uC774\\uC5B4\\uD2B8\"), '10', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 56\n  }\n}))];\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n  var children = _ref.children;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n    collapsed = _useState[0],\n    setCollapsed = _useState[1];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"한식\"),\n    current = _useState2[0],\n    setCurrent = _useState2[1];\n  var onMenu = function onMenu(e) {\n    setCurrent(e.key);\n  };\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    style: {\n      minHeight: 100\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(Sider, {\n    collapsible: true,\n    collapsed: collapsed,\n    onCollapse: function onCollapse(value) {\n      return setCollapsed(value);\n    },\n    theme: \"light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"demo-logo-vertical\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n    theme: \"light\",\n    defaultSelectedKeys: ['2'],\n    mode: \"inline\",\n    items: items,\n    onClick: onMenu,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_3__[\"Head\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"\\uB098\\uB9CC\\uC758 \\uB808\\uC2DC\\uD53C\")), __jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_3__[\"ContentContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_3__[\"SubTab\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"User\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Bill\")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].Search, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, children))));\n};\n_s(AppLayout, \"R5IA3G34ZE/ENRfS29mdj0FGv0c=\");\n_c = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeD8yZWVkIl0sIm5hbWVzIjpbIlNpZGVyIiwiTGF5b3V0IiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiaXRlbXMiLCJfX2pzeCIsIkxpbmsiLCJocmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJVc2VyT3V0bGluZWQiLCJTbWlsZU91dGxpbmVkIiwiUmVzdE91dGxpbmVkIiwiQXBwTGF5b3V0IiwiX3JlZiIsIl9zIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJfdXNlU3RhdGUyIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbk1lbnUiLCJlIiwic3R5bGUiLCJtaW5IZWlnaHQiLCJfdGhpcyIsImNvbGxhcHNpYmxlIiwib25Db2xsYXBzZSIsInZhbHVlIiwidGhlbWUiLCJjbGFzc05hbWUiLCJNZW51IiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsIm1vZGUiLCJvbkNsaWNrIiwiQnJlYWRjcnVtYiIsIkl0ZW0iLCJJbnB1dCIsIlNlYXJjaCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFLYjtBQUU0QjtBQUNWO0FBQ2hCO0FBRzdCLElBQVFBLEtBQUssR0FBS0MsMkNBQU0sQ0FBaEJELEtBQUs7QUFRYixTQUFTRSxPQUFPQSxDQUNkQyxLQUFzQixFQUN0QkMsR0FBYyxFQUNkQyxJQUFzQixFQUN0QkMsUUFBcUIsRUFDWDtFQUNWLE9BQU87SUFDTEYsR0FBRyxFQUFIQSxHQUFHO0lBQ0hDLElBQUksRUFBSkEsSUFBSTtJQUNKQyxRQUFRLEVBQVJBLFFBQVE7SUFDUkgsS0FBSyxFQUFMQTtFQUNGLENBQUM7QUFDSDtBQUVBLElBQU1JLEtBQWlCLEdBQUcs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QWxDLE1BQUEsRUFBQXVCLEtBQUE7SUFBQXRCLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBQyxNQUFxQixDQUMxQixDQUFDLEVBQ2ZSLEtBQUEsQ0FBQ3NDLDBDQUFLLENBQUNDLE1BQU07SUFBQXBDLE1BQUEsRUFBQXVCLEtBQUE7SUFBQXRCLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEVBQ2hCUixLQUFBO0lBQUFHLE1BQUEsRUFBQXVCLEtBQUE7SUFBQXRCLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDR1YsUUFDRSxDQUNpQixDQUNsQixDQUNGLENBQUM7QUFFYixDQUFDO0FBQUFnQixFQUFBLENBaENLRixTQUFTO0FBQUE0QixFQUFBLEdBQVQ1QixTQUFTO0FBa0NBQSx3RUFBUyxFQUFDO0FBQUEsSUFBQTRCLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU21pbGVPdXRsaW5lZCxcbiAgUmVzdE91dGxpbmVkLFxuICBVc2VyT3V0bGluZWQsXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB0eXBlIHsgTWVudVByb3BzIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iLCBMYXlvdXQsIE1lbnUsIElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvbGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgeyBTaWRlciB9ID0gTGF5b3V0O1xuXG5pbnRlcmZhY2UgUHJvcFR5cGVzIHtcbiAgY2hpbGRyZW46IGFueTtcbn1cblxudHlwZSBNZW51SXRlbSA9IFJlcXVpcmVkPE1lbnVQcm9wcz5bJ2l0ZW1zJ11bbnVtYmVyXTtcblxuZnVuY3Rpb24gZ2V0SXRlbShcbiAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZSxcbiAga2V5OiBSZWFjdC5LZXksXG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGUsXG4gIGNoaWxkcmVuPzogTWVudUl0ZW1bXSxcbik6IE1lbnVJdGVtIHtcbiAgcmV0dXJuIHtcbiAgICBrZXksXG4gICAgaWNvbixcbiAgICBjaGlsZHJlbixcbiAgICBsYWJlbCxcbiAgfSBhcyBNZW51SXRlbTtcbn1cblxuY29uc3QgaXRlbXM6IE1lbnVJdGVtW10gPSBbXG4gIGdldEl0ZW0oPExpbmsgaHJlZj1cIi9sb2dpblwiPuuhnOq3uOyduDwvTGluaz4sICcxJywgPFVzZXJPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oJ+2VnOyLnScsICfroIjsi5ztlLwxJywgPFNtaWxlT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKCfrqbQnLCAnMicpLFxuICAgIGdldEl0ZW0oJ+q1rScsICczJyksXG4gICAgZ2V0SXRlbSgn67ClJywgJzQnKSxcbiAgXSksXG4gIGdldEl0ZW0oPExpbmsgaHJlZj1cIi9yZWNpcGUvY2hpbmFcIj7spJHsi508L0xpbms+LCAnNScsIDxTbWlsZU91dGxpbmVkIC8+KSxcbiAgZ2V0SXRlbSg8TGluayBocmVmPVwiL3JlY2lwZS93ZXN0ZXJuXCI+7JaR7IudPC9MaW5rPiwgJzYnLCA8U21pbGVPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oJ+uUlOyggO2KuCcsICfroIjsi5ztlLwyJywgPFJlc3RPdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oJ+q1rOybgOqzvOyekCcsICc3JyksXG4gICAgZ2V0SXRlbSgn67m1JywgJzgnKSxcbiAgICBnZXRJdGVtKCfsvIDsnbTtgawnLCAnOScpLFxuICBdKSxcbiAgZ2V0SXRlbSg8TGluayBocmVmPVwiL3JlY2lwZS9kaWV0XCI+64uk7J207Ja07Yq4PC9MaW5rPiwgJzEwJywgPFNtaWxlT3V0bGluZWQgLz4pLFxuXTtcblxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcFR5cGVzKSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCLtlZzsi51cIik7XG4gIFxuICBjb25zdCBvbk1lbnU6IE1lbnVQcm9wc1tcIm9uQ2xpY2tcIl0gPSAoZSkgPT57XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPExheW91dCBzdHlsZT17eyBtaW5IZWlnaHQ6IDEwMCB9fT5cbiAgICAgIDxTaWRlciBjb2xsYXBzaWJsZSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25Db2xsYXBzZT17KHZhbHVlKSA9PiBzZXRDb2xsYXBzZWQodmFsdWUpfSB0aGVtZT1cImxpZ2h0XCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tbG9nby12ZXJ0aWNhbFwiIC8+XG4gICAgICAgIDxNZW51IHRoZW1lPVwibGlnaHRcIiAgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycyJ119IG1vZGU9XCJpbmxpbmVcIiBpdGVtcz17aXRlbXN9IG9uQ2xpY2s9e29uTWVudX0gLz5cbiAgICAgIDwvU2lkZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8c3R5bGUuSGVhZD5cbiAgICAgICAgICA8c3R5bGUuVGl0bGUgaHJlZj1cIi9cIj7rgpjrp4zsnZgg66CI7Iuc7ZS8PC9zdHlsZS5UaXRsZT5cbiAgICAgICAgPC9zdHlsZS5IZWFkPlxuICAgICAgICA8c3R5bGUuQ29udGVudENvbnRhaW5lcj5cbiAgICAgICAgICA8c3R5bGUuU3ViVGFiPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5Vc2VyPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkJpbGw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICA8L3N0eWxlLlN1YlRhYj5cbiAgICAgICAgICA8SW5wdXQuU2VhcmNoIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zdHlsZS5Db250ZW50Q29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Layout.tsx\n");

/***/ })

})