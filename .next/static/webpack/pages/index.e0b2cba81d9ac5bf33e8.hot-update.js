webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SelectedResult.js":
/*!**************************************!*\
  !*** ./components/SelectedResult.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/moviedb/components/SelectedResult.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar SelectedResult = function SelectedResult(_ref) {\n  var data = _ref.data,\n      back = _ref.back;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jumbotron col-centered\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: data.Poster,\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }), __jsx(\"h1\", {\n    className: \"display-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, data.Title), __jsx(\"p\", {\n    className: \"lead\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, data.Plot), __jsx(\"hr\", {\n    className: \"my-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }\n  }, \"Written By: \"), data.Writer), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 12\n    }\n  }, \"Rated: \"), data.Rated), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 12\n    }\n  }, \"Director: \"), data.Director), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 12\n    }\n  }, \"Starring: \"), data.Actors), __jsx(\"p\", {\n    className: \"lead\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    onClick: back,\n    className: \"btn btn-primary btn-lg\",\n    role: \"button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"Back to Search Results\"))));\n};\n\n_c = SelectedResult;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectedResult);\n\nvar _c;\n\n$RefreshReg$(_c, \"SelectedResult\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWxlY3RlZFJlc3VsdC5qcz8wYWNjIl0sIm5hbWVzIjpbIlNlbGVjdGVkUmVzdWx0IiwiZGF0YSIsImJhY2siLCJQb3N0ZXIiLCJUaXRsZSIsIlBsb3QiLCJXcml0ZXIiLCJSYXRlZCIsIkRpcmVjdG9yIiwiQWN0b3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQW9CO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVELElBQUksQ0FBQ0UsTUFBZjtBQUF1QixPQUFHLEVBQUMsRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCRixJQUFJLENBQUNHLEtBQWhDLENBRkYsRUFHRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUJILElBQUksQ0FBQ0ksSUFBMUIsQ0FIRixFQUlFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsRUFBaUNKLElBQUksQ0FBQ0ssTUFBdEMsQ0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsRUFBNEJMLElBQUksQ0FBQ00sS0FBakMsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFILEVBQStCTixJQUFJLENBQUNPLFFBQXBDLENBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxFQUErQlAsSUFBSSxDQUFDUSxNQUFwQyxDQVJGLEVBU0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxXQUFPLEVBQUVQLElBQVo7QUFBa0IsYUFBUyxFQUFDLHdCQUE1QjtBQUFxRCxRQUFJLEVBQUMsUUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixDQVRGLENBREYsQ0FERjtBQWlCRCxDQWxCRDs7S0FBTUYsYztBQW9CU0EsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdGVkUmVzdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2VsZWN0ZWRSZXN1bHQgPSAoeyBkYXRhLCBiYWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gY29sLWNlbnRlcmVkXCI+XG4gICAgICAgIDxpbWcgc3JjPXtkYXRhLlBvc3Rlcn0gYWx0PVwiXCIgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPntkYXRhLlRpdGxlfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj57ZGF0YS5QbG90fTwvcD5cbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTRcIiAvPlxuICAgICAgICA8cD48c3Ryb25nPldyaXR0ZW4gQnk6IDwvc3Ryb25nPntkYXRhLldyaXRlcn08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+UmF0ZWQ6IDwvc3Ryb25nPntkYXRhLlJhdGVkfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5EaXJlY3RvcjogPC9zdHJvbmc+e2RhdGEuRGlyZWN0b3J9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPlN0YXJyaW5nOiA8L3N0cm9uZz57ZGF0YS5BY3RvcnN9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgPGEgb25DbGljaz17YmFja30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiIHJvbGU9XCJidXR0b25cIj5CYWNrIHRvIFNlYXJjaCBSZXN1bHRzPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RlZFJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SelectedResult.js\n");

/***/ })

})