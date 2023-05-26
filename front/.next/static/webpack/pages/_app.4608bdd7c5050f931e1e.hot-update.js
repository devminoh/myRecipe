webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.tsx":
/*!****************************!*\
  !*** ./reducers/index.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// import { HYDRATE } from 'next-redux-wrapper';\n// import { combineReducers } from 'redux';\n// import user from './user';\n// // import post from './post';\n\n// // (이전상태, 액션) => 다음상태\n// const rootReducer = combineReducers({\n//   index: (state:object = {}, action) =>{\n//     switch(action.type){\n//       case HYDRATE:\n//         console.log('HYDRATE', action);\n//         return {...state, ...action.payload};\n//       default:\n//         return state;\n//     }\n//   },\n//   user,\n//   // post,\n// });\n\n// export default rootReducer;\nvar initialState = {\n  user: {\n    isLoggedIn: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n  },\n  post: {\n    mainPosts: []\n  }\n};\n\n//action creator\nvar login = function login(data) {\n  return {\n    type: 'LOG-IN',\n    data: data\n  };\n};\n\n// (이전상태, 액션) => 다음상태\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case 'LOG-IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: true\n        })\n      });\n      break;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXgudHN4PzBlYzgiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwicG9zdCIsIm1haW5Qb3N0cyIsImxvZ2luIiwiZGF0YSIsInR5cGUiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiX29iamVjdFNwcmVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0VBQ25CQyxJQUFJLEVBQUU7SUFDSkMsVUFBVSxFQUFFLEtBQUs7SUFDakJELElBQUksRUFBRSxJQUFJO0lBQ1ZFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDZEMsU0FBUyxFQUFFLENBQUM7RUFDZCxDQUFDO0VBQ0RDLElBQUksRUFBRTtJQUNKQyxTQUFTLEVBQUU7RUFDYjtBQUNGLENBQUM7O0FBRUQ7QUFDQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBSUMsSUFBUSxFQUFLO0VBQzFCLE9BQU87SUFDTEMsSUFBSSxFQUFFLFFBQVE7SUFDZEQsSUFBSSxFQUFFQTtFQUNSLENBQUM7QUFDSCxDQUFDOztBQUVEO0FBQ0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBeUM7RUFBQSxJQUFyQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR1osWUFBWTtFQUFBLElBQUVlLE1BQVUsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUNuRCxRQUFPQyxNQUFNLENBQUNOLElBQUk7SUFDaEIsS0FBSyxRQUFRO01BQ1gsT0FBQU8sYUFBQSxDQUFBQSxhQUFBLEtBQ0tMLEtBQUs7UUFDUlYsSUFBSSxFQUFBZSxhQUFBLENBQUFBLGFBQUEsS0FDQ0wsS0FBSyxDQUFDVixJQUFJO1VBQ2JDLFVBQVUsRUFBRTtRQUFJO01BQ2pCO01BRUg7RUFDSjtBQUNGLENBQUM7QUFFY1EsMEVBQVcsRUFBQyIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuLy8gaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuLy8gaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbi8vIC8vIGltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XG5cbi8vIC8vICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXG4vLyBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4vLyAgIGluZGV4OiAoc3RhdGU6b2JqZWN0ID0ge30sIGFjdGlvbikgPT57XG4vLyAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbi8vICAgICAgIGNhc2UgSFlEUkFURTpcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xuLy8gICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH07XG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXR1cm4gc3RhdGU7XG4vLyAgICAgfVxuLy8gICB9LFxuLy8gICB1c2VyLFxuLy8gICAvLyBwb3N0LFxuLy8gfSk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7XG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgdXNlcjogbnVsbCxcbiAgICBzaWduVXBEYXRhOiB7fSxcbiAgICBsb2dpbkRhdGE6IHt9LFxuICB9LFxuICBwb3N0OiB7XG4gICAgbWFpblBvc3RzOiBbXSxcbiAgfVxufVxuXG4vL2FjdGlvbiBjcmVhdG9yXG5jb25zdCBsb2dpbiA9IChkYXRhOmFueSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdMT0ctSU4nLFxuICAgIGRhdGE6IGRhdGEsXG4gIH1cbn1cblxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246YW55KSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSAnTE9HLUlOJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLCBcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.tsx\n");

/***/ })

})