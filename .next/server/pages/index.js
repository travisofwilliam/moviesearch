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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SearchResult.js":
/*!************************************!*\
  !*** ./components/SearchResult.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/moviedb/components/SearchResult.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst SearchResult = ({\n  result,\n  selectMovie\n}) => {\n  return __jsx(\"div\", {\n    onClick: e => {\n      e.preventDefault();\n      selectMovie(result.imdbID);\n    },\n    className: \"card col-sm-3\",\n    style: {\n      width: '18rem'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: \"card-img-top\",\n    src: result.Poster,\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, result.Title)), __jsx(\"div\", {\n    className: \"card-body\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResult);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC5qcz8yOTY4Il0sIm5hbWVzIjpbIlNlYXJjaFJlc3VsdCIsInJlc3VsdCIsInNlbGVjdE1vdmllIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW1kYklEIiwid2lkdGgiLCJQb3N0ZXIiLCJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUM7QUFBVixDQUFELEtBQTZCO0FBQ2hELFNBQ0U7QUFBSyxXQUFPLEVBQUdDLENBQUQsSUFBTztBQUNuQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FGLGlCQUFXLENBQUNELE1BQU0sQ0FBQ0ksTUFBUixDQUFYO0FBQ0QsS0FIRDtBQUdHLGFBQVMsRUFBQyxlQUhiO0FBRzZCLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUhwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixPQUFHLEVBQUVMLE1BQU0sQ0FBQ00sTUFBMUM7QUFBa0QsT0FBRyxFQUFDLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sTUFBTSxDQUFDTyxLQUFaLENBREYsQ0FMRixFQVFFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFhRCxDQWREOztBQWdCZVIsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlYXJjaFJlc3VsdCA9ICh7IHJlc3VsdCwgc2VsZWN0TW92aWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17KGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgc2VsZWN0TW92aWUocmVzdWx0LmltZGJJRClcbiAgICB9fSBjbGFzc05hbWU9XCJjYXJkIGNvbC1zbS0zXCIgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbScgfX0+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17cmVzdWx0LlBvc3Rlcn0gYWx0PVwiXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoND57cmVzdWx0LlRpdGxlfTwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SearchResult.js\n");

/***/ }),

/***/ "./components/SelectedResult.js":
/*!**************************************!*\
  !*** ./components/SelectedResult.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/moviedb/components/SelectedResult.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst SelectedResult = ({\n  data,\n  back\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jumbotron\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: data.Poster,\n    alt: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }), __jsx(\"h1\", {\n    className: \"display-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, data.Title), __jsx(\"p\", {\n    className: \"lead\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, data.Plot), __jsx(\"hr\", {\n    className: \"my-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }\n  }, \"Written By: \"), data.Writer), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 12\n    }\n  }, \"Rated: \"), data.Rated), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 12\n    }\n  }, \"Director: \"), data.Director), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 12\n    }\n  }, \"Starring: \"), data.Actors), __jsx(\"p\", {\n    className: \"lead\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    onClick: back,\n    className: \"btn btn-primary btn-lg\",\n    role: \"button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"Back to Search Results\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectedResult);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlbGVjdGVkUmVzdWx0LmpzPzBhY2MiXSwibmFtZXMiOlsiU2VsZWN0ZWRSZXN1bHQiLCJkYXRhIiwiYmFjayIsIlBvc3RlciIsIlRpdGxlIiwiUGxvdCIsIldyaXRlciIsIlJhdGVkIiwiRGlyZWN0b3IiLCJBY3RvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBRCxLQUFvQjtBQUN6QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUQsSUFBSSxDQUFDRSxNQUFmO0FBQXVCLE9BQUcsRUFBQyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJGLElBQUksQ0FBQ0csS0FBaEMsQ0FGRixFQUdFO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQkgsSUFBSSxDQUFDSSxJQUExQixDQUhGLEVBSUU7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSCxFQUFpQ0osSUFBSSxDQUFDSyxNQUF0QyxDQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxFQUE0QkwsSUFBSSxDQUFDTSxLQUFqQyxDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsRUFBK0JOLElBQUksQ0FBQ08sUUFBcEMsQ0FQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFILEVBQStCUCxJQUFJLENBQUNRLE1BQXBDLENBUkYsRUFTRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFdBQU8sRUFBRVAsSUFBWjtBQUFrQixhQUFTLEVBQUMsd0JBQTVCO0FBQXFELFFBQUksRUFBQyxRQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLENBVEYsQ0FERixDQURGO0FBaUJELENBbEJEOztBQW9CZUYsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdGVkUmVzdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VsZWN0ZWRSZXN1bHQgPSAoeyBkYXRhLCBiYWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgPGltZyBzcmM9e2RhdGEuUG9zdGVyfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+e2RhdGEuVGl0bGV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPntkYXRhLlBsb3R9PC9wPlxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNFwiIC8+XG4gICAgICAgIDxwPjxzdHJvbmc+V3JpdHRlbiBCeTogPC9zdHJvbmc+e2RhdGEuV3JpdGVyfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5SYXRlZDogPC9zdHJvbmc+e2RhdGEuUmF0ZWR9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPkRpcmVjdG9yOiA8L3N0cm9uZz57ZGF0YS5EaXJlY3Rvcn08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+U3RhcnJpbmc6IDwvc3Ryb25nPntkYXRhLkFjdG9yc308L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXtiYWNrfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgcm9sZT1cImJ1dHRvblwiPkJhY2sgdG8gU2VhcmNoIFJlc3VsdHM8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGVkUmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SelectedResult.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SearchResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SearchResult */ \"./components/SearchResult.js\");\n/* harmony import */ var _components_SelectedResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SelectedResult */ \"./components/SelectedResult.js\");\nvar _jsxFileName = \"/Users/traviswilliams/Desktop/moviedb/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst axios = __webpack_require__(/*! axios */ \"axios\");\n\n\n\n\nconst Index = () => {\n  const {\n    0: emptyMsg,\n    1: setEmptyMsg\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('No movies searched');\n  const {\n    0: inputText,\n    1: setInputText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: searchRes,\n    1: setSearchRes\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: singleResult,\n    1: setSingleResult\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: movieId,\n    1: setMovieId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const getMovies = e => {\n    e.preventDefault();\n    setMovieId('');\n    axios.get(`http://www.omdbapi.com/?apikey=cda2a2d3&s=${inputText}`).then(res => {\n      if (res) {\n        setSearchRes(res.data.Search);\n        setEmptyMsg('No search results');\n      }\n    }).catch(err => {\n      console.log(err);\n    });\n    setInputText('');\n  };\n\n  const handleChange = e => {\n    setInputText(e.target.value);\n  };\n\n  const selectMovie = id => {\n    axios.get(`http://www.omdbapi.com/?apikey=cda2a2d3&i=${id}`).then(res => {\n      setSingleResult(res.data);\n      setMovieId(id);\n    }).catch(err => console.log(err));\n  };\n\n  const back = e => {\n    e.preventDefault();\n    setMovieId('');\n  };\n\n  return __jsx(\"div\", {\n    className: \"container text-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/united/bootstrap.min.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, \"Movie Search\"), __jsx(\"form\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: inputText,\n    onChange: handleChange,\n    className: \"mb-3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    onClick: getMovies,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Search Movies\")), __jsx(\"br\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"row justify-content-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, movieId.length >= 1 ? __jsx(_components_SelectedResult__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    back: back,\n    data: singleResult,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 35\n    }\n  }) : searchRes && searchRes.length >= 1 ? searchRes.map((result, idx) => {\n    return __jsx(_components_SearchResult__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: idx,\n      result: result,\n      selectMovie: selectMovie,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 26\n      }\n    });\n  }) : __jsx(\"div\", {\n    className: \"text-center col-lg-4\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 19\n    }\n  }, emptyMsg))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIkluZGV4IiwiZW1wdHlNc2ciLCJzZXRFbXB0eU1zZyIsInVzZVN0YXRlIiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0Iiwic2VhcmNoUmVzIiwic2V0U2VhcmNoUmVzIiwic2luZ2xlUmVzdWx0Iiwic2V0U2luZ2xlUmVzdWx0IiwibW92aWVJZCIsInNldE1vdmllSWQiLCJnZXRNb3ZpZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIlNlYXJjaCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwic2VsZWN0TW92aWUiLCJpZCIsImJhY2siLCJsZW5ndGgiLCJtYXAiLCJyZXN1bHQiLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFyQjs7QUFFQTtBQUNBOztBQUVBLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBRWxCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxvQkFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCSixzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NOLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDTyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlIsc0RBQVEsQ0FBQyxFQUFELENBQXRD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QUFFQSxHQUFuQjtBQUF3QixZQUFNLEVBQUVELE1BQWhDO0FBQXdDLGlCQUFXLEVBQUVMLFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBRkQsQ0FERixHQUlJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUMxQixRQUF2QyxDQVJWLENBVkYsQ0FKRixDQURGO0FBOEJELENBM0VEOztBQTZFZUQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuaW1wb3J0IFNlYXJjaFJlc3VsdCBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdCdcbmltcG9ydCBTZWxlY3RlZFJlc3VsdCBmcm9tICcuLi9jb21wb25lbnRzL1NlbGVjdGVkUmVzdWx0J1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICBjb25zdCBbZW1wdHlNc2csIHNldEVtcHR5TXNnXSA9IHVzZVN0YXRlKCdObyBtb3ZpZXMgc2VhcmNoZWQnKVxuICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzZWFyY2hSZXMsIHNldFNlYXJjaFJlc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3NpbmdsZVJlc3VsdCwgc2V0U2luZ2xlUmVzdWx0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbW92aWVJZCwgc2V0TW92aWVJZF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBnZXRNb3ZpZXMgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgc2V0TW92aWVJZCgnJylcblxuICAgIGF4aW9zLmdldChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNkYTJhMmQzJnM9JHtpbnB1dFRleHR9YClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICBzZXRTZWFyY2hSZXMocmVzLmRhdGEuU2VhcmNoKVxuICAgICAgICAgIHNldEVtcHR5TXNnKCdObyBzZWFyY2ggcmVzdWx0cycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgfSlcblxuICAgIHNldElucHV0VGV4dCgnJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXRUZXh0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgY29uc3Qgc2VsZWN0TW92aWUgPSAoaWQpID0+IHtcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jZGEyYTJkMyZpPSR7aWR9YClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHNldFNpbmdsZVJlc3VsdChyZXMuZGF0YSlcbiAgICAgICAgc2V0TW92aWVJZChpZClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH1cblxuICBjb25zdCBiYWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRNb3ZpZUlkKCcnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC91bml0ZWQvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0Pk1vdmllIFNlYXJjaDwvaDQ+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dFRleHR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT0nbWItMycgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE1vdmllc30+U2VhcmNoIE1vdmllczwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtb3ZpZUlkLmxlbmd0aCA+PSAxID8gPFNlbGVjdGVkUmVzdWx0IGJhY2s9e2JhY2t9IGRhdGE9e3NpbmdsZVJlc3VsdH0gLz5cbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICBzZWFyY2hSZXMgJiYgc2VhcmNoUmVzLmxlbmd0aCA+PSAxID9cbiAgICAgICAgICAgICAgICBzZWFyY2hSZXMubWFwKChyZXN1bHQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTZWFyY2hSZXN1bHQga2V5PXtpZHh9IHJlc3VsdD17cmVzdWx0fSBzZWxlY3RNb3ZpZT17c2VsZWN0TW92aWV9IC8+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBjb2wtbGctNCc+e2VtcHR5TXNnfTwvZGl2PlxuXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });