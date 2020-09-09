webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/moviedb/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Header,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Footer,\n    Sider = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Sider,\n    Content = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Content;\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      inputText = _useState[0],\n      setInputText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      searchRes = _useState2[0],\n      setSearchRes = _useState2[1];\n\n  var getMovies = function getMovies(e) {\n    e.preventDefault();\n    axios.get(\"http://www.omdbapi.com/?apikey=cda2a2d3&i=tt3896198&s=\".concat(inputText)).then(function (res) {\n      setSearchRes(res.data.Search);\n      console.log(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n    setInputText('');\n  };\n\n  var handleChange = function handleChange(e) {\n    setInputText(e.target.value);\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://bootswatch.com/4/united/bootstrap.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Movie Database Search\"), __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: inputText,\n    onChange: handleChange,\n    className: \"mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    onClick: getMovies,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"Search Movies\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, searchRes.length >= 1 ? searchRes.map(function (result, idx) {\n    return __jsx(\"div\", {\n      className: \"card col-sm-3\",\n      style: {\n        width: '18rem'\n      },\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      className: \"card-img-top\",\n      src: result.Poster,\n      alt: \"Card image cap\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      className: \"card-body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 21\n      }\n    }, __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 23\n      }\n    }, result.Title), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 23\n      }\n    }, result.Type)), __jsx(\"div\", {\n      className: \"card-body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      href: \"#\",\n      className: \"card-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 23\n      }\n    }, \"Card link\"), __jsx(\"a\", {\n      href: \"#\",\n      className: \"card-link\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 23\n      }\n    }, \"Another link\")));\n  }) : 'No movies searched')));\n};\n\n_s(Index, \"cLhaRd6rntBS4TsIJAUiBdduNgo=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJGb290ZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJheGlvcyIsInJlcXVpcmUiLCJJbmRleCIsInVzZVN0YXRlIiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0Iiwic2VhcmNoUmVzIiwic2V0U2VhcmNoUmVzIiwiZ2V0TW92aWVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJTZWFyY2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJyZXN1bHQiLCJpZHgiLCJ3aWR0aCIsIlBvc3RlciIsIlRpdGxlIiwiVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBR0VBLE0sR0FJRUMsMkMsQ0FKRkQsTTtJQUNBRSxNLEdBR0VELDJDLENBSEZDLE07SUFDQUMsSyxHQUVFRiwyQyxDQUZGRSxLO0lBQ0FDLE8sR0FDRUgsMkMsQ0FERkcsTzs7QUFHRixJQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVnQkMsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFWEMsU0FGVztBQUFBLE1BRUFDLFlBRkE7O0FBQUEsbUJBR2dCRixzREFBUSxDQUFDLEVBQUQsQ0FIeEI7QUFBQSxNQUdYRyxTQUhXO0FBQUEsTUFHQUMsWUFIQTs7QUFLbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFFQVYsU0FBSyxDQUFDVyxHQUFOLGlFQUFtRVAsU0FBbkUsR0FDR1EsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBSTtB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Qkksb0JBbEJSLENBVkYsQ0FKRixDQURGO0FBdUNELENBN0REOztHQUFNM0IsSzs7S0FBQUEsSztBQStEU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJ1xuXG5jb25zdCB7XG4gIEhlYWRlcixcbiAgRm9vdGVyLFxuICBTaWRlcixcbiAgQ29udGVudFxufSA9IExheW91dFxuXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbc2VhcmNoUmVzLCBzZXRTZWFyY2hSZXNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgZ2V0TW92aWVzID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGF4aW9zLmdldChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNkYTJhMmQzJmk9dHQzODk2MTk4JnM9JHtpbnB1dFRleHR9YClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHNldFNlYXJjaFJlcyhyZXMuZGF0YS5TZWFyY2gpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblxuICAgIHNldElucHV0VGV4dCgnJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXRUZXh0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L3VuaXRlZC9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+TW92aWUgRGF0YWJhc2UgU2VhcmNoPC9oND5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0VGV4dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPSdtYi0zJyAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0TW92aWVzfT5TZWFyY2ggTW92aWVzPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWFyY2hSZXMubGVuZ3RoID49IDEgP1xuICAgICAgICAgICAgICBzZWFyY2hSZXMubWFwKChyZXN1bHQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLXNtLTNcIiBzdHlsZT17eyB3aWR0aDogJzE4cmVtJyB9fSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtyZXN1bHQuUG9zdGVyfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0PntyZXN1bHQuVGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57cmVzdWx0LlR5cGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPkNhcmQgbGluazwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImNhcmQtbGlua1wiPkFub3RoZXIgbGluazwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogJ05vIG1vdmllcyBzZWFyY2hlZCdcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})