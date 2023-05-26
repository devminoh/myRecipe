webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _styles_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/layout */ \"./styles/layout.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/gyeongmin/project/myRecipe/front/components/layout/Layout.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Header,\n  Content = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Content,\n  Sider = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Sider;\nfunction getItem(label, key, icon, children) {\n  return {\n    key: key,\n    icon: icon,\n    children: children,\n    label: label\n  };\n}\nvar items = [getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  href: \"/login\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 11\n  }\n}, \"\\uB85C\\uADF8\\uC778\"), '1', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"UserOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 48\n  }\n})), getItem('한식', '레시피1', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 25\n  }\n}), [getItem('면', '2'), getItem('국', '3'), getItem('밥', '4')]), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  href: \"/recipe/china\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 11\n  }\n}, \"\\uC911\\uC2DD\"), '5', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 54\n  }\n})), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  href: \"/recipe/western\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 11\n  }\n}, \"\\uC591\\uC2DD\"), '6', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 56\n  }\n})), getItem('디저트', '레시피2', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"RestOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 26\n  }\n}), [getItem('구움과자', '7'), getItem('빵', '8'), getItem('케이크', '9')]), getItem(__jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n  href: \"/recipe/diet\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 11\n  }\n}, \"\\uB2E4\\uC774\\uC5B4\\uD2B8\"), '10', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"SmileOutlined\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 56\n  }\n}))];\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n  var children = _ref.children;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n    collapsed = _useState[0],\n    setCollapsed = _useState[1];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"한식\"),\n    current = _useState2[0],\n    setCurrent = _useState2[1];\n  var onMenu = function onMenu(e) {\n    setCurrent(e.key);\n  };\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    style: {\n      minHeight: 100\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(Sider, {\n    collapsible: true,\n    collapsed: collapsed,\n    onCollapse: function onCollapse(value) {\n      return setCollapsed(value);\n    },\n    theme: \"light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"demo-logo-vertical\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n    theme: \"light\",\n    defaultSelectedKeys: ['2'],\n    mode: \"inline\",\n    items: items,\n    onClick: onMenu,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_3__[\"Head\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"\\uB098\\uB9CC\\uC758 \\uB808\\uC2DC\\uD53C\")), __jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_3__[\"ContentContainer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_layout__WEBPACK_IMPORTED_MODULE_3__[\"SubTab\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"User\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Breadcrumb\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Bill\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, children))));\n};\n_s(AppLayout, \"R5IA3G34ZE/ENRfS29mdj0FGv0c=\");\n_c = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeD8yZWVkIl0sIm5hbWVzIjpbIkhlYWRlciIsIkxheW91dCIsIkNvbnRlbnQiLCJTaWRlciIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsIml0ZW1zIiwiX19qc3giLCJMaW5rIiwiaHJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiVXNlck91dGxpbmVkIiwiU21pbGVPdXRsaW5lZCIsIlJlc3RPdXRsaW5lZCIsIkFwcExheW91dCIsIl9yZWYiLCJfcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiX3VzZVN0YXRlMiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwib25NZW51IiwiZSIsInN0eWxlIiwibWluSGVpZ2h0IiwiX3RoaXMiLCJjb2xsYXBzaWJsZSIsIm9uQ29sbGFwc2UiLCJ2YWx1ZSIsInRoZW1lIiwiY2xhc3NOYW1lIiwiTWVudSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJtb2RlIiwib25DbGljayIsIkJyZWFkY3J1bWIiLCJJdGVtIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUtiO0FBRTRCO0FBQ1Y7QUFDaEI7QUFHN0IsSUFBUUEsTUFBTSxHQUFxQkMsMkNBQU0sQ0FBakNELE1BQU07RUFBRUUsT0FBTyxHQUFZRCwyQ0FBTSxDQUF6QkMsT0FBTztFQUFFQyxLQUFLLEdBQUtGLDJDQUFNLENBQWhCRSxLQUFLO0FBUTlCLFNBQVNDLE9BQU9BLENBQ2RDLEtBQXNCLEVBQ3RCQyxHQUFjLEVBQ2RDLElBQXNCLEVBQ3RCQyxRQUFxQixFQUNYO0VBQ1YsT0FBTztJQUNMRixHQUFHLEVBQUhBLEdBQUc7SUFDSEMsSUFBSSxFQUFKQSxJQUFJO0lB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QUFDLFlBQUE7SUFBQTtFQUFBLEdBQUMsTUFBcUIsQ0FBQyxFQUN2Q1IsS0FBQSxDQUFDb0MsK0NBQVUsQ0FBQ0MsSUFBSTtJQUFBbEMsTUFBQSxFQUFBdUIsS0FBQTtJQUFBdEIsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFDLE1BQXFCLENBQzFCLENBQUMsRUFDZlIsS0FBQTtJQUFBRyxNQUFBLEVBQUF1QixLQUFBO0lBQUF0QixRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0dWLFFBQ0UsQ0FDaUIsQ0FDbEIsQ0FDRixDQUFDO0FBRWIsQ0FBQztBQUFBZ0IsRUFBQSxDQS9CS0YsU0FBUztBQUFBMEIsRUFBQSxHQUFUMUIsU0FBUztBQWlDQUEsd0VBQVMsRUFBQztBQUFBLElBQUEwQixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFNtaWxlT3V0bGluZWQsXG4gIFJlc3RPdXRsaW5lZCxcbiAgVXNlck91dGxpbmVkLFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51LCB0aGVtZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBTaWRlciB9ID0gTGF5b3V0O1xuXG5pbnRlcmZhY2UgUHJvcFR5cGVzIHtcbiAgY2hpbGRyZW46IGFueTtcbn1cblxudHlwZSBNZW51SXRlbSA9IFJlcXVpcmVkPE1lbnVQcm9wcz5bJ2l0ZW1zJ11bbnVtYmVyXTtcblxuZnVuY3Rpb24gZ2V0SXRlbShcbiAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZSxcbiAga2V5OiBSZWFjdC5LZXksXG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGUsXG4gIGNoaWxkcmVuPzogTWVudUl0ZW1bXSxcbik6IE1lbnVJdGVtIHtcbiAgcmV0dXJuIHtcbiAgICBrZXksXG4gICAgaWNvbixcbiAgICBjaGlsZHJlbixcbiAgICBsYWJlbCxcbiAgfSBhcyBNZW51SXRlbTtcbn1cblxuY29uc3QgaXRlbXM6IE1lbnVJdGVtW10gPSBbXG4gIGdldEl0ZW0oPExpbmsgaHJlZj1cIi9sb2dpblwiPuuhnOq3uOyduDwvTGluaz4sICcxJywgPFVzZXJPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oJ+2VnOyLnScsICfroIjsi5ztlLwxJywgPFNtaWxlT3V0bGluZWQgLz4sIFtcbiAgICBnZXRJdGVtKCfrqbQnLCAnMicpLFxuICAgIGdldEl0ZW0oJ+q1rScsICczJyksXG4gICAgZ2V0SXRlbSgn67ClJywgJzQnKSxcbiAgXSksXG4gIGdldEl0ZW0oPExpbmsgaHJlZj1cIi9yZWNpcGUvY2hpbmFcIj7spJHsi508L0xpbms+LCAnNScsIDxTbWlsZU91dGxpbmVkIC8+KSxcbiAgZ2V0SXRlbSg8TGluayBocmVmPVwiL3JlY2lwZS93ZXN0ZXJuXCI+7JaR7IudPC9MaW5rPiwgJzYnLCA8U21pbGVPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oJ+uUlOyggO2KuCcsICfroIjsi5ztlLwyJywgPFJlc3RPdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oJ+q1rOybgOqzvOyekCcsICc3JyksXG4gICAgZ2V0SXRlbSgn67m1JywgJzgnKSxcbiAgICBnZXRJdGVtKCfsvIDsnbTtgawnLCAnOScpLFxuICBdKSxcbiAgZ2V0SXRlbSg8TGluayBocmVmPVwiL3JlY2lwZS9kaWV0XCI+64uk7J207Ja07Yq4PC9MaW5rPiwgJzEwJywgPFNtaWxlT3V0bGluZWQgLz4pLFxuXTtcblxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcFR5cGVzKSA9PiB7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCLtlZzsi51cIik7XG4gIFxuICBjb25zdCBvbk1lbnU6IE1lbnVQcm9wc1tcIm9uQ2xpY2tcIl0gPSAoZSkgPT57XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH1cblxuICByZXR1cm4oXG4gICAgPExheW91dCBzdHlsZT17eyBtaW5IZWlnaHQ6IDEwMCB9fT5cbiAgICAgIDxTaWRlciBjb2xsYXBzaWJsZSBjb2xsYXBzZWQ9e2NvbGxhcHNlZH0gb25Db2xsYXBzZT17KHZhbHVlKSA9PiBzZXRDb2xsYXBzZWQodmFsdWUpfSB0aGVtZT1cImxpZ2h0XCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbW8tbG9nby12ZXJ0aWNhbFwiIC8+XG4gICAgICAgIDxNZW51IHRoZW1lPVwibGlnaHRcIiAgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycyJ119IG1vZGU9XCJpbmxpbmVcIiBpdGVtcz17aXRlbXN9IG9uQ2xpY2s9e29uTWVudX0gLz5cbiAgICAgIDwvU2lkZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8c3R5bGUuSGVhZD5cbiAgICAgICAgICA8c3R5bGUuVGl0bGUgaHJlZj1cIi9cIj7rgpjrp4zsnZgg66CI7Iuc7ZS8PC9zdHlsZS5UaXRsZT5cbiAgICAgICAgPC9zdHlsZS5IZWFkPlxuICAgICAgICA8c3R5bGUuQ29udGVudENvbnRhaW5lcj5cbiAgICAgICAgICA8c3R5bGUuU3ViVGFiPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT5Vc2VyPC9CcmVhZGNydW1iLkl0ZW0+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPkJpbGw8L0JyZWFkY3J1bWIuSXRlbT5cbiAgICAgICAgICA8L3N0eWxlLlN1YlRhYj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3N0eWxlLkNvbnRlbnRDb250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Layout.tsx\n");

/***/ }),

/***/ "./styles/layout.ts":
/*!**************************!*\
  !*** ./styles/layout.ts ***!
  \**************************/
/*! exports provided: Head, Title, ContentContainer, SubTab, SideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Head\", function() { return Head; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentContainer\", function() { return ContentContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubTab\", function() { return SubTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SideBar\", function() { return SideBar; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Content = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Content,\n  Sider = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Sider;\nvar Head = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"layout__Head\",\n  componentId: \"sc-bqv7wf-0\"\n})([\"min-height:10vh;padding:10px;background-color:white;display:flex;justify-content:center;align-items:center;a{color:black;font-size:30px;font-weight:700;text-decoration:none;}\"]);\nvar Title = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({\n  displayName: \"layout__Title\",\n  componentId: \"sc-bqv7wf-1\"\n})([\"display:flex;align-items:center;:hover{color:blue;}\"]);\nvar ContentContainer = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Content).withConfig({\n  displayName: \"layout__ContentContainer\",\n  componentId: \"sc-bqv7wf-2\"\n})([\"margin:0 16px;div{padding:24px;min-height:360px;background-color:white;}\"]);\nvar SubTab = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Breadcrumb\"]).withConfig({\n  displayName: \"layout__SubTab\",\n  componentId: \"sc-bqv7wf-3\"\n})([\"margin:16px 0;\"]);\nvar SideBar = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Sider).withConfig({\n  displayName: \"layout__SideBar\",\n  componentId: \"sc-bqv7wf-4\"\n})([\"background-color:white !important;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2xheW91dC50cz8yYWExIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJMYXlvdXQiLCJTaWRlciIsIkhlYWQiLCJzdHlsZWQiLCJkaXYiLCJ3aXRoQ29uZmlnIiwiZGlzcGxheU5hbWUiLCJjb21wb25lbnRJZCIsIlRpdGxlIiwiTGluayIsIkNvbnRlbnRDb250YWluZXIiLCJTdWJUYWIiLCJCcmVhZGNydW1iIiwiU2lkZUJhciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDRztBQUNiO0FBRTdCLElBQVFBLE9BQU8sR0FBWUMsMkNBQU0sQ0FBekJELE9BQU87RUFBRUUsS0FBSyxHQUFLRCwyQ0FBTSxDQUFoQkMsS0FBSztBQUVmLElBQU1DLElBQUksZ0JBQUdDLHlEQUFNLENBQUNDLEdBQUcsQ0FBQUMsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSxzTEFjN0I7QUFFTSxJQUFNQyxLQUFLLGdCQUFHTCxpRUFBTSxDQUFDTSxnREFBSSxDQUFDLENBQUFKLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsMkRBT2hDO0FBRU0sSUFBTUcsZ0JBQWdCLGdCQUFHUCxpRUFBTSxDQUFDSixPQUFPLENBQUMsQ0FBQU0sVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSxnRkFROUM7QUFFTSxJQUFNSSxNQUFNLGdCQUFHUixpRUFBTSxDQUFDUywrQ0FBVSxDQUFDLENBQUFQLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsc0JBRXZDO0FBRU0sSUFBTU0sT0FBTyxnQkFBR1YsaUVBQU0sQ0FBQ0YsS0FBSyxDQUFDLENBQUFJLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsMENBRW5DIiwiZmlsZSI6Ii4vc3R5bGVzL2xheW91dC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGF5b3V0LCBCcmVhZGNydW1iIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCB7IENvbnRlbnQsIFNpZGVyIH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCBIZWFkID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogMTB2aDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZChMaW5rKWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZChDb250ZW50KWBcbiAgbWFyZ2luOiAwIDE2cHg7XG5cbiAgZGl2e1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgbWluLWhlaWdodDogMzYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdWJUYWIgPSBzdHlsZWQoQnJlYWRjcnVtYilgXG4gIG1hcmdpbjogMTZweCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpZGVCYXIgPSBzdHlsZWQoU2lkZXIpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/layout.ts\n");

/***/ })

})