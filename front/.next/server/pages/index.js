module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/card.tsx":
/*!*****************************!*\
  !*** ./components/card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_cardStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/cardStyle */ \"./styles/cardStyle.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/gyeongmin/project/myRecipe/front/components/card.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Card = ({\n  post\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const handleCardClick = () => {\n    router.push({\n      pathname: `/about`,\n      query: {\n        pid: post.id\n      }\n    });\n  };\n  // console.log(post)\n  return __jsx(_styles_cardStyle__WEBPACK_IMPORTED_MODULE_2__[\"CardContainer\"], {\n    onClick: handleCardClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    width: 150,\n    height: 150,\n    src: post.image,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 10\n    }\n  })), __jsx(\"div\", {\n    className: \"title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, post.User.nickname));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmQudHN4PzhlYzMiXSwibmFtZXMiOlsiQ2FyZCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDYXJkQ2xpY2siLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInBpZCIsImlkIiwiX19qc3giLCJzdHlsZSIsIm9uQ2xpY2siLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZSIsImNsYXNzTmFtZSIsIlVzZXIiLCJuaWNrbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ2dCO0FBQ0w7QUFHeEMsTUFBTUEsSUFBSSxHQUFHQSxDQUFDO0VBQUNDO0FBQVMsQ0FBQyxLQUFLO0VBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsQ0FBQyxDQUFDO0VBQzFCLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzVCRixNQUFNLENBQUNHLElBQUksQ0FBQztNQUNWQyxRQUFRLEVBQUcsUUFBTztNQUNsQkMsS0FBSyxFQUFFO1FBQUVDLEdBQUcsRUFBRVAsSUFBSSxDQUFDUTtNQUFHO0lBQ3hCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRDtFQUNBLE9BQ0FDLEtBQUEsQ0FBQ0MsK0RBQW1CO0lBQUNDLE9BQU8sRUFBRVIsZUFBZ0I7SUFBQVMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzVDUixLQUFBO0lBQUFHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFLUixLQUFBLENBQUNTLDBDQUFLO0lBQ1hDLEtBQUssRUFBRSxHQUFJO0lBQ1hDLE1BQU0sRUFBRSxHQUFJO0lBQ1pDLEdBQUcsRUFBRXJCLElBQUksQ0FBQ3NCLEtBQU07SUFBQVYsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ2pCLENBQU0sQ0FBQyxFQUNSUixLQUFBO0lBQUtjLFNBQVMsRUFBQyxPQUFPO0lBQUFYLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFFakIsSUFBSSxDQUFDd0IsSUFBSSxDQUFDQyxRQUFjLENBQzNCLENBQUM7QUFFeEIsQ0FBQztBQUVjMUIsbUVBQUkiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuLi9zdHlsZXMvY2FyZFN0eWxlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGUnO1xuXG5jb25zdCBDYXJkID0gKHtwb3N0fTogYW55KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6IGAvYWJvdXRgLFxuICAgICAgcXVlcnk6IHsgcGlkOiBwb3N0LmlkIH1cbiAgICB9KVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKHBvc3QpXG4gIHJldHVybihcbiAgPHN0eWxlLkNhcmRDb250YWluZXIgb25DbGljaz17aGFuZGxlQ2FyZENsaWNrfT5cbiAgICA8ZGl2PjxJbWFnZVxuICAgIHdpZHRoPXsxNTB9XG4gICAgaGVpZ2h0PXsxNTB9XG4gICAgc3JjPXtwb3N0LmltYWdlfVxuICAvPjwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPntwb3N0LlVzZXIubmlja25hbWV9PC9kaXY+XG4gIDwvc3R5bGUuQ2FyZENvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card.tsx\n");

/***/ }),

/***/ "./components/main/loginMain.tsx":
/*!***************************************!*\
  !*** ./components/main/loginMain.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card */ \"./components/card.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/gyeongmin/project/myRecipe/front/components/main/loginMain.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n{/* xs:mobile, sm: tablet, md: 작은 데스크탑 */}\nconst LoginMain = () => {\n  const {\n    mainPosts\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(state => state.post);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, mainPosts.map(post => __jsx(_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    key: post.id,\n    post: post,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 41\n    }\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginMain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4vbG9naW5NYWluLnRzeD8xMWUwIl0sIm5hbWVzIjpbIkxvZ2luTWFpbiIsIm1haW5Qb3N0cyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiX19qc3giLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIm1hcCIsIkNhcmQiLCJrZXkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFQztBQUVlO0FBRTFDLENBQUM7QUFDRCxNQUFNQSxTQUFTLEdBQUdBLENBQUEsS0FBTTtFQUN0QixNQUFNO0lBQUVDO0VBQVUsQ0FBQyxHQUFHQywrREFBVyxDQUFFQyxLQUFTLElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO0VBRTNELE9BQ0VDLEtBQUE7SUFBQUMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBTUdWLFNBQVMsQ0FBQ1csR0FBRyxDQUFFUixJQUFjLElBQUlDLEtBQUEsQ0FBQ1EsNkNBQUk7SUFBQ0MsR0FBRyxFQUFFVixJQUFJLENBQUNXLEVBQUc7SUFBQ1gsSUFBSSxFQUFFQSxJQUFLO0lBQUFFLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsQ0FDakUsQ0FBQztBQUVWLENBQUM7QUFFY1gsd0VBQVMiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4vbG9naW5NYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY2FyZCc7XG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC90eXBlJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG57LyogeHM6bW9iaWxlLCBzbTogdGFibGV0LCBtZDog7J6R7J2AIOuNsOyKpO2BrO2DkSAqL31cbmNvbnN0IExvZ2luTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpPT4gc3RhdGUucG9zdClcbiAgXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgey8qIDxSb3cgZ3V0dGVyPXs4fT5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+66mU7J247Y6Y7J207KeAMTwvQ29sPiBcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+66mU7J247Y6Y7J207KeAMjwvQ29sPiBcbiAgICAgIDwvUm93PlxuICAgICAgPGRpdj7rqZTsnbjtjpjsnbTsp4AzPC9kaXY+ICovfVxuICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3Q6IFBvc3RUeXBlKT0+IDxDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxuICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main/loginMain.tsx\n");

/***/ }),

/***/ "./components/main/logoutMain.tsx":
/*!****************************************!*\
  !*** ./components/main/logoutMain.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/gyeongmin/project/myRecipe/front/components/main/logoutMain.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst LogoutMain = () => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, \"\\uB85C\\uADF8\\uC778\\uD574\\uC8FC\\uC138\\uC694!\");\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogoutMain);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4vbG9nb3V0TWFpbi50c3g/YjUxOCJdLCJuYW1lcyI6WyJMb2dvdXRNYWluIiwiX19qc3giLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUEsVUFBVSxHQUFHQSxDQUFBLEtBQU07RUFDdkIsT0FDRUMsS0FBQTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBSyw2Q0FFQSxDQUFDO0FBRVYsQ0FBQztBQUVjUCx5RUFBVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWFpbi9sb2dvdXRNYWluLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExvZ291dE1haW4gPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAg66Gc6re47J247ZW07KO87IS47JqUIVxuICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXRNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main/logoutMain.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_main_loginMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/loginMain */ \"./components/main/loginMain.tsx\");\n/* harmony import */ var _components_main_logoutMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/logoutMain */ \"./components/main/logoutMain.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/gyeongmin/project/myRecipe/front/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Home = () => {\n  const {\n    isLoggedIn\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(state => state.user);\n  const {\n    mainPosts\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(state => state.post);\n  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(state => state.post.mainPosts);\n  console.log(id);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 3\n    }\n  }, isLoggedIn ? __jsx(_components_main_loginMain__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 20\n    }\n  }) : __jsx(_components_main_logoutMain__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 36\n    }\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWFpblBvc3RzIiwicG9zdCIsImlkIiwiY29uc29sZSIsImxvZyIsIl9fanN4IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJMb2dpbk1haW4iLCJMb2dvdXRNYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFHMkI7QUFDRTtBQUNiO0FBRTFDLE1BQU1BLElBQWMsR0FBR0EsQ0FBQSxLQUFNO0VBQzNCLE1BQU07SUFBRUM7RUFBVyxDQUFDLEdBQUdDLCtEQUFXLENBQUVDLEtBQVMsSUFBSUEsS0FBSyxDQUFDQyxJQUFJLENBQUM7RUFDNUQsTUFBTTtJQUFFQztFQUFVLENBQUMsR0FBR0gsK0RBQVcsQ0FBRUMsS0FBUyxJQUFJQSxLQUFLLENBQUNHLElBQUksQ0FBQztFQUMzRCxNQUFNQyxFQUFFLEdBQUdMLCtEQUFXLENBQUVDLEtBQVMsSUFBSUEsS0FBSyxDQUFDRyxJQUFJLENBQUNELFNBQVMsQ0FBQztFQUMxREcsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEVBQUUsQ0FBQztFQUNmLE9BQ0FHLEtBQUE7SUFBQUMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0lmLFVBQVUsR0FBR1MsS0FBQSxDQUFDTyxrRUFBUztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FBRSxDQUFDLEdBQUdOLEtBQUEsQ0FBQ1EsbUVBQVU7SUFBQVAsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDekMsQ0FBQztBQUVSLENBQUM7QUFFY2hCLG1FQUFJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcbmltcG9ydCBMb2dpbk1haW4gZnJvbSAnLi4vY29tcG9uZW50cy9tYWluL2xvZ2luTWFpbic7XG5pbXBvcnQgTG9nb3V0TWFpbiBmcm9tICcuLi9jb21wb25lbnRzL21haW4vbG9nb3V0TWFpbic7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSk9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpPT4gc3RhdGUucG9zdCk7XG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSk9PiBzdGF0ZS5wb3N0Lm1haW5Qb3N0cyk7XG4gIGNvbnNvbGUubG9nKGlkKVxuICByZXR1cm4oXG4gIDxkaXY+XG4gICAgIHtpc0xvZ2dlZEluID8gPExvZ2luTWFpbiAvPiA6IDxMb2dvdXRNYWluIC8+fVxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/cardStyle.ts":
/*!*****************************!*\
  !*** ./styles/cardStyle.ts ***!
  \*****************************/
/*! exports provided: CardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardContainer\", function() { return CardContainer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CardContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"cardStyle__CardContainer\",\n  componentId: \"sc-1aue9uh-0\"\n})([\"display:flex;flex-direction:column;width:200px;padding:22px;background-color:#F7E1AE;border-radius:15px;cursor:pointer;.title{display:flex;justify-content:flex-end;margin:10px 0;}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY2FyZFN0eWxlLnRzP2VmY2IiXSwibmFtZXMiOlsiQ2FyZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIndpdGhDb25maWciLCJkaXNwbGF5TmFtZSIsImNvbXBvbmVudElkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUVoQyxNQUFNQSxhQUFhLGdCQUFHQyx3REFBTSxDQUFDQyxHQUFHLENBQUFDLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsMkxBY3RDIiwiZmlsZSI6Ii4vc3R5bGVzL2NhcmRTdHlsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RTFBRTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC50aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/cardStyle.ts\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });