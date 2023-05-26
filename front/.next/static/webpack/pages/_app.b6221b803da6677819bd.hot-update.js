webpackHotUpdate_N_E("pages/_app",{

/***/ "./styles/layout.ts":
/*!**************************!*\
  !*** ./styles/layout.ts ***!
  \**************************/
/*! exports provided: Head, Title, ContentContainer, SubTab, SideBar, SearchInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Head\", function() { return Head; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentContainer\", function() { return ContentContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubTab\", function() { return SubTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SideBar\", function() { return SideBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchInput\", function() { return SearchInput; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Content = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Content,\n  Sider = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Sider;\nvar Head = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"layout__Head\",\n  componentId: \"sc-bqv7wf-0\"\n})([\"min-height:10vh;padding:10px;background-color:white;display:flex;flex-direction:column;justify-content:center;align-items:center;a{color:black;font-size:30px;font-weight:700;text-decoration:none;&:hover{color:#617A55;}}div{width:80vw;display:flex;justify-content:flex-end;margin:10px 0;}\"]);\nvar Title = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({\n  displayName: \"layout__Title\",\n  componentId: \"sc-bqv7wf-1\"\n})([\"display:flex;align-items:center;margin-top:20px;\"]);\nvar ContentContainer = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Content).withConfig({\n  displayName: \"layout__ContentContainer\",\n  componentId: \"sc-bqv7wf-2\"\n})([\"margin:0 16px;div{padding:24px;min-height:360px;background-color:white;}\"]);\nvar SubTab = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Breadcrumb\"]).withConfig({\n  displayName: \"layout__SubTab\",\n  componentId: \"sc-bqv7wf-3\"\n})([\"margin:16px 0;\"]);\nvar SideBar = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Sider).withConfig({\n  displayName: \"layout__SideBar\",\n  componentId: \"sc-bqv7wf-4\"\n})([\"background-color:white !important;\"]);\nvar SearchInput = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].Search).withConfig({\n  displayName: \"layout__SearchInput\",\n  componentId: \"sc-bqv7wf-5\"\n})([\"vertical-align:middle;display:flex;width:300px;margin-right:20px;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2xheW91dC50cz8yYWExIl0sIm5hbWVzIjpbIkNvbnRlbnQiLCJMYXlvdXQiLCJTaWRlciIsIkhlYWQiLCJzdHlsZWQiLCJkaXYiLCJ3aXRoQ29uZmlnIiwiZGlzcGxheU5hbWUiLCJjb21wb25lbnRJZCIsIlRpdGxlIiwiTGluayIsIkNvbnRlbnRDb250YWluZXIiLCJTdWJUYWIiLCJCcmVhZGNydW1iIiwiU2lkZUJhciIsIlNlYXJjaElucHV0IiwiSW5wdXQiLCJTZWFyY2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDVTtBQUNwQjtBQUU3QixJQUFRQSxPQUFPLEdBQVlDLDJDQUFNLENBQXpCRCxPQUFPO0VBQUVFLEtBQUssR0FBS0QsMkNBQU0sQ0FBaEJDLEtBQUs7QUFFZixJQUFNQyxJQUFJLGdCQUFHQyx5REFBTSxDQUFDQyxHQUFHLENBQUFDLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsdVNBMEI3QjtBQUVNLElBQU1DLEtBQUssZ0JBQUdMLGlFQUFNLENBQUNNLGdEQUFJLENBQUMsQ0FBQUosVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSx3REFJaEM7QUFFTSxJQUFNRyxnQkFBZ0IsZ0JBQUdQLGlFQUFNLENBQUNKLE9BQU8sQ0FBQyxDQUFBTSxVQUFBO0VBQUFDLFdBQUE7RUFBQUMsV0FBQTtBQUFBLGdGQVE5QztBQUVNLElBQU1JLE1BQU0sZ0JBQUdSLGlFQUFNLENBQUNTLCtDQUFVLENBQUMsQ0FBQVAsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSxzQkFFdkM7QUFFTSxJQUFNTSxPQUFPLGdCQUFHVixpRUFBTSxDQUFDRixLQUFLLENBQUMsQ0FBQUksVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSwwQ0FFbkM7QUFFTSxJQUFNTyxXQUFXLGdCQUFHWCxpRUFBTSxDQUFDWSwwQ0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQVgsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSx5RUFLOUMiLCJmaWxlIjoiLi9zdHlsZXMvbGF5b3V0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMYXlvdXQsIEJyZWFkY3J1bWIsIElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCB7IENvbnRlbnQsIFNpZGVyIH0gPSBMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCBIZWFkID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogMTB2aDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjNjE3QTU1O1xuICAgIH1cbiAgfVxuXG4gIGRpdiB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQoTGluaylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZChDb250ZW50KWBcbiAgbWFyZ2luOiAwIDE2cHg7XG5cbiAgZGl2e1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgbWluLWhlaWdodDogMzYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdWJUYWIgPSBzdHlsZWQoQnJlYWRjcnVtYilgXG4gIG1hcmdpbjogMTZweCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpZGVCYXIgPSBzdHlsZWQoU2lkZXIpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkKElucHV0LlNlYXJjaClgXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/layout.ts\n");

/***/ })

})