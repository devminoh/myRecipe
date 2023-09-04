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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_cardStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/cardStyle */ "./styles/cardStyle.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\82109\\Desktop\\myRecipe\\front\\components\\card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Card = ({
  post
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const handleCardClick = () => {
    router.push({
      pathname: `/about`,
      query: {
        pid: post.id
      }
    });
  };
  // console.log(post)
  return __jsx(_styles_cardStyle__WEBPACK_IMPORTED_MODULE_2__["CardContainer"], {
    onClick: handleCardClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    width: 150,
    height: 150,
    src: post.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  })), __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 3
    }
  }, post.User.nickname));
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/main/loginMain.tsx":
/*!***************************************!*\
  !*** ./components/main/loginMain.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card */ "./components/card.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_cardStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/cardStyle */ "./styles/cardStyle.ts");
var _jsxFileName = "C:\\Users\\82109\\Desktop\\myRecipe\\front\\components\\main\\loginMain.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




{/* xs:mobile, sm: tablet, md: 작은 데스크탑 */}
const LoginMain = () => {
  const {
    mainPosts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  console.log(mainPosts);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_styles_cardStyle__WEBPACK_IMPORTED_MODULE_3__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, mainPosts.map(post => __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: post.id,
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 43
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (LoginMain);

/***/ }),

/***/ "./components/main/logoutMain.tsx":
/*!****************************************!*\
  !*** ./components/main/logoutMain.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_logoutMainStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/logoutMainStyle */ "./styles/logoutMainStyle.ts");
var _jsxFileName = "C:\\Users\\82109\\Desktop\\myRecipe\\front\\components\\main\\logoutMain.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LogoutMain = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_styles_logoutMainStyle__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "\uB85C\uADF8\uC778\uD558\uC2DC\uBA74 \uC774\uC6A9\uAC00\uB2A5\uD569\uB2C8\uB2E4!"));
};
/* harmony default export */ __webpack_exports__["default"] = (LogoutMain);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_loginMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/loginMain */ "./components/main/loginMain.tsx");
/* harmony import */ var _components_main_logoutMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/logoutMain */ "./components/main/logoutMain.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.tsx");
var _jsxFileName = "C:\\Users\\82109\\Desktop\\myRecipe\\front\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Home = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post.mainPosts);
  console.log(me);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight); // 얼마나 내렸는지, 화면 보이는길이, 총 길이
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, me ? __jsx(_components_main_loginMain__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 12
    }
  }) : __jsx(_components_main_logoutMain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 28
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./reducers/post.tsx":
/*!***************************!*\
  !*** ./reducers/post.tsx ***!
  \***************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPost, dummyPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyPost", function() { return dummyPost; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @faker-js/faker */ "@faker-js/faker");
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__);



_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].seed(123);
const initialState = {
  mainPosts: [],
  imagePaths: '',
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null
};
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].internet.userName()
  },
  serve: 2,
  category: '양식',
  Ingredients: [{
    name: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.paragraph()
  }, {
    name: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.paragraph()
  }],
  image: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].image.url(),
  Recipes: [{
    recipe: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.sentence()
  }, {
    recipe: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.sentence()
  }, {
    recipe: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.sentence()
  }],
  link: _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__["faker"].lorem.sentence()
}));

// initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const dummyPost = data => ({
  id: data.id,
  User: {
    id: 1,
    nickname: 'zerocho'
  },
  serve: data.serve,
  category: data.category,
  Ingredients: data.ingredients,
  image: data.image,
  Recipes: data.recipes,
  link: 'https://www.10000recipe.com/recipe/6878480'
});
const reducer = (state = initialState, action) => {
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      default:
        return state;
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./styles/cardStyle.ts":
/*!*****************************!*\
  !*** ./styles/cardStyle.ts ***!
  \*****************************/
/*! exports provided: CardWrapper, CardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContainer", function() { return CardContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cardStyle__CardWrapper",
  componentId: "sc-1aue9uh-0"
})(["display:grid;justify-items:center;grid-template-columns:repeat(4,1fr);row-gap:20px;"]);
const CardContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cardStyle__CardContainer",
  componentId: "sc-1aue9uh-1"
})(["display:flex;flex-direction:column;width:200px;padding:22px;background-color:#8294c4;border-radius:15px;cursor:pointer;box-shadow:0 5px 10px 0 #8294c4;.title{display:flex;justify-content:flex-end;margin:10px 0;color:white;font-weight:400;}&:hover{opacity:0.7;transition:opacity 1s ease-out;}"]);

/***/ }),

/***/ "./styles/logoutMainStyle.ts":
/*!***********************************!*\
  !*** ./styles/logoutMainStyle.ts ***!
  \***********************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "logoutMainStyle__Title",
  componentId: "sc-1ady8hk-0"
})(["display:flex;justify-content:center;color:#8294c4;font-weight:700;font-size:50px;"]);

/***/ }),

/***/ "@faker-js/faker":
/*!**********************************!*\
  !*** external "@faker-js/faker" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@faker-js/faker");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4vbG9naW5NYWluLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW4vbG9nb3V0TWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Bvc3QudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9jYXJkU3R5bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2xvZ291dE1haW5TdHlsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZmFrZXItanMvZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDYXJkIiwicG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNhcmRDbGljayIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicGlkIiwiaWQiLCJfX2pzeCIsInN0eWxlIiwib25DbGljayIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImltYWdlIiwiY2xhc3NOYW1lIiwiVXNlciIsIm5pY2tuYW1lIiwiTG9naW5NYWluIiwibWFpblBvc3RzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJrZXkiLCJMb2dvdXRNYWluIiwiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZXIiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmYWtlciIsInNlZWQiLCJpbml0aWFsU3RhdGUiLCJpbWFnZVBhdGhzIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsImludGVybmV0IiwidXNlck5hbWUiLCJzZXJ2ZSIsImNhdGVnb3J5IiwiSW5ncmVkaWVudHMiLCJuYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJ1cmwiLCJSZWNpcGVzIiwicmVjaXBlIiwic2VudGVuY2UiLCJsaW5rIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJkdW1teVBvc3QiLCJpbmdyZWRpZW50cyIsInJlY2lwZXMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsIkNhcmRXcmFwcGVyIiwic3R5bGVkIiwiZGl2Iiwid2l0aENvbmZpZyIsImRpc3BsYXlOYW1lIiwiY29tcG9uZW50SWQiLCJDYXJkQ29udGFpbmVyIiwiVGl0bGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEYwQjtBQUNHO0FBQ2dCO0FBQ0w7QUFHeEMsTUFBTUEsSUFBSSxHQUFHQSxDQUFDO0VBQUNDO0FBQVMsQ0FBQyxLQUFLO0VBQzVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsQ0FBQyxDQUFDO0VBQzFCLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzVCRixNQUFNLENBQUNHLElBQUksQ0FB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UUFDeEVPLEtBQUssQ0FBQ3RDLGlCQUFpQixHQUFHLEtBQUs7UUFDL0JzQyxLQUFLLENBQUNyQyxjQUFjLEdBQUcsSUFBSTtRQUMzQjtNQUNGLEtBQUs0QixtQkFBbUI7UUFDdEJTLEtBQUssQ0FBQ3RDLGlCQUFpQixHQUFHLEtBQUs7UUFDL0JzQyxLQUFLLENBQUNwQyxlQUFlLEdBQUdrQyxNQUFNLENBQUNLLEtBQUs7UUFDcEM7TUFDRjtRQUNFLE9BQU8zRSxLQUFLO0lBQ2hCO0VBQ0YsQ0FBQyxDQUFDO0FBRUosQ0FBQztBQUVjcUUsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDakl0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBRWhDLE1BQU1VLFdBQVcsZ0JBQUdDLHdEQUFNLENBQUNDLEdBQUcsQ0FBQUMsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSwyRkFLcEM7QUFFTSxNQUFNQyxhQUFhLGdCQUFHTCx3REFBTSxDQUFDQyxHQUFHLENBQUFDLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsMlNBc0J0QyxDOzs7Ozs7Ozs7Ozs7QUMvQkQ7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFHaEMsTUFBTUUsS0FBSyxnQkFBR04sd0RBQU0sQ0FBQ0MsR0FBRyxDQUFBQyxVQUFBO0VBQUFDLFdBQUE7RUFBQUMsV0FBQTtBQUFBLHlGQU05QixDOzs7Ozs7Ozs7OztBQ1RELDRDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuLi9zdHlsZXMvY2FyZFN0eWxlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4uL3NoYXJlZC90eXBlJztcclxuXHJcbmNvbnN0IENhcmQgPSAoe3Bvc3R9OiBhbnkpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBgL2Fib3V0YCxcclxuICAgICAgcXVlcnk6IHsgcGlkOiBwb3N0LmlkIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKHBvc3QpXHJcbiAgcmV0dXJuKFxyXG4gIDxzdHlsZS5DYXJkQ29udGFpbmVyIG9uQ2xpY2s9e2hhbmRsZUNhcmRDbGlja30+XHJcbiAgICA8ZGl2PjxJbWFnZVxyXG4gICAgd2lkdGg9ezE1MH1cclxuICAgIGhlaWdodD17MTUwfVxyXG4gICAgc3JjPXtwb3N0LmltYWdlfVxyXG4gIC8+PC9kaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz57cG9zdC5Vc2VyLm5pY2tuYW1lfTwvZGl2PlxyXG4gIDwvc3R5bGUuQ2FyZENvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY2FyZCc7XHJcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGUnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2NhcmRTdHlsZSc7XHJcblxyXG57LyogeHM6bW9iaWxlLCBzbTogdGFibGV0LCBtZDog7J6R7J2AIOuNsOyKpO2BrO2DkSAqL31cclxuY29uc3QgTG9naW5NYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+IHN0YXRlLnBvc3QpXHJcbiAgY29uc29sZS5sb2cobWFpblBvc3RzKVxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMn0+66mU7J247Y6Y7J207KeAMTwvQ29sPiBcclxuICAgICAgICA8Q29sIHhzPXsyNH0gbWQ9ezEyfT7rqZTsnbjtjpjsnbTsp4AyPC9Db2w+IFxyXG4gICAgICA8L1Jvdz4gKi99XHJcbiAgICAgIDxzdHlsZS5DYXJkV3JhcHBlcj5cclxuICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdDogUG9zdFR5cGUpPT4gPENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgIDwvc3R5bGUuQ2FyZFdyYXBwZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1haW47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2xvZ291dE1haW5TdHlsZSc7XHJcblxyXG5jb25zdCBMb2dvdXRNYWluID0gKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzdHlsZS5UaXRsZT7roZzqt7jsnbjtlZjsi5zrqbQg7J207Jqp6rCA64ql7ZWp64uI64ukITwvc3R5bGUuVGl0bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXRNYWluOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTG9naW5NYWluIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbi9sb2dpbk1haW4nO1xyXG5pbXBvcnQgTG9nb3V0TWFpbiBmcm9tICcuLi9jb21wb25lbnRzL21haW4vbG9nb3V0TWFpbic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KT0+IHN0YXRlLnBvc3QubWFpblBvc3RzKTtcclxuICBjb25zb2xlLmxvZyhtZSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7IC8vIOyWvOuniOuCmCDrgrTroLjripTsp4AsIO2ZlOuptCDrs7TsnbTripTquLjsnbQsIOy0nSDquLjsnbRcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICAge21lID8gPExvZ2luTWFpbiAvPiA6IDxMb2dvdXRNYWluIC8+fVxyXG4gIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IHsgZmFrZXIgfSBmcm9tIFwiQGZha2VyLWpzL2Zha2VyXCI7XHJcbmZha2VyLnNlZWQoMTIzKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiAnJyxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXI6IG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBuaWNrbmFtZTogZmFrZXIuaW50ZXJuZXQudXNlck5hbWUoKSxcclxuICB9LFxyXG4gIHNlcnZlOiAyLFxyXG4gIGNhdGVnb3J5OiAn7JaR7IudJyxcclxuICBJbmdyZWRpZW50czogW3tcclxuICAgICAgbmFtZTogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICB9LHtcclxuICAgICAgbmFtZTogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICB9XSxcclxuICAgIGltYWdlOiBmYWtlci5pbWFnZS51cmwoKSxcclxuICAgIFJlY2lwZXM6IFt7XHJcbiAgICAgIHJlY2lwZTogZmFrZXIubG9yZW0uc2VudGVuY2UoKVxyXG4gICAgfSx7XHJcbiAgICAgIHJlY2lwZTogZmFrZXIubG9yZW0uc2VudGVuY2UoKVxyXG4gICAgfSx7XHJcbiAgICAgIHJlY2lwZTogZmFrZXIubG9yZW0uc2VudGVuY2UoKVxyXG4gICAgfV0sXHJcbiAgICBsaW5rOiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpXHJcbn0pKTtcclxuXHJcbi8vIGluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChnZW5lcmF0ZUR1bW15UG9zdCgxMCkpO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhOiBhbnkpPT4oe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW15UG9zdCA9IChkYXRhOmFueSk9Pih7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ3plcm9jaG8nLFxyXG4gIH0sXHJcbiAgc2VydmU6IGRhdGEuc2VydmUsXHJcbiAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgSW5ncmVkaWVudHM6IGRhdGEuaW5ncmVkaWVudHMsXHJcbiAgaW1hZ2U6IGRhdGEuaW1hZ2UsXHJcbiAgUmVjaXBlczogZGF0YS5yZWNpcGVzLFxyXG4gIGxpbms6ICdodHRwczovL3d3dy4xMDAwMHJlY2lwZS5jb20vcmVjaXBlLzY4Nzg0ODAnXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbjphbnkpID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0OmFueSkgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodjphbnkpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgcm93LWdhcDogMjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDIycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyOTRjNDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgIzgyOTRjNDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xyXG4gIH1cclxuYDsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICM4Mjk0YzQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbmA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZha2VyLWpzL2Zha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9