webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/traviswilliams/Desktop/moviedb/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Header,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Footer,\n    Sider = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Sider,\n    Content = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Content;\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      inputText = _useState[0],\n      setInputText = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      searchRes = _useState2[0],\n      setSearchRes = _useState2[1];\n\n  var getMovies = function getMovies(e) {\n    e.preventDefault();\n    axios.get(\"http://www.omdbapi.com/?apikey=cda2a2d3&i=tt3896198&s=\".concat(inputText)).then(function (res) {\n      setSearchRes(res.data.Search);\n      console.log(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n    setInputText('');\n  };\n\n  var handleChange = function handleChange(e) {\n    setInputText(e.target.value);\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Movie Database Search\"), __jsx(\"form\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: inputText,\n    onChange: handleChange,\n    className: \"mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    onClick: getMovies,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"Search Movies\")), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), searchRes.length >= 1 ? searchRes.map(function (result, idx) {\n    return __jsx(\"div\", {\n      className: \"card\",\n      style: {\n        width: '18rem'\n      },\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      className: \"card-img-top\",\n      src: result.Poster,\n      alt: \"Card image cap\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 19\n      }\n    }), __jsx(\"div\", {\n      className: \"card-body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      className: \"card-text\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 21\n      }\n    }, \"Some quick example text to build on the card title and make up the bulk of the card's content.\")));\n  }) : 'No movies searched'));\n};\n\n_s(Index, \"cLhaRd6rntBS4TsIJAUiBdduNgo=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJGb290ZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJheGlvcyIsInJlcXVpcmUiLCJJbmRleCIsInVzZVN0YXRlIiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0Iiwic2VhcmNoUmVzIiwic2V0U2VhcmNoUmVzIiwiZ2V0TW92aWVzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJTZWFyY2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJyZXN1bHQiLCJpZHgiLCJ3aWR0aCIsIlBvc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBR0VBLE0sR0FJRUMsMkMsQ0FKRkQsTTtJQUNBRSxNLEdBR0VELDJDLENBSEZDLE07SUFDQUMsSyxHQUVFRiwyQyxDQUZGRSxLO0lBQ0FDLE8sR0FDRUgsMkMsQ0FERkcsTzs7QUFHRixJQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVnQkMsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFWEMsU0FGVztBQUFBLE1BRUFDLFlBRkE7O0FBQUEsbUJBR2dCRixzREFBUSxDQUFDLEVBQUQsQ0FIeEI7QUFBQSxNQUdYRyxTQUhXO0FBQUEsTUFHQUMsWUFIQTs7QUFLbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFFQVYsU0FBSyxDQUFDVyxHQUFOLGlFQUFtRVAsU0FBbkUsR0FDR1EsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBSTtBQUNYTixrQkFBWSxDQUFDTSxHQUFHLENBQUNDLElBQUosQ0FBU0MsTUFBVixDQUFaO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFHLENBQUNDLElBQWhCO0FBQ0QsS0FKSCxXQUtTLFVBQUFJLEdBQUc7QUFBQSxhQUFJRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWixDQUFKO0FBQUEsS0FMWjtBQU9BYixnQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNELEdBWEQ7O0FBYUEsTUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1YsQ0FBRCxFQUFPO0FBQzFCSixnQkFBWSxDQUFDSSxDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFFakIsU0FBMUI7QUFBcUMsWUFBUSxFQUFFZSxZQUEvQztBQUE2RCxhQUFTLEVBQUMsTUFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBUSxXQUFPLEVBQUVYLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsQ0FGRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVdJRixTQUFTLENBQUNnQixNQUFWLElBQW9CLENBQXBCLEdBQ0VoQixTQUFTLENBQUNpQixHQUFWLENBQWMsVUFBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQzdCLFdBQ0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBN0I7QUFBaUQsU0FBRyxFQUFFRCxHQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUE4QixTQUFHLEVBQUVELE1BQU0sQ0FBQ0csTUFBMUM7QUFBa0QsU0FBRyxFQUFDLGdCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0dBREYsQ0FGRixDQURGO0FBUUQsR0FURCxDQURGLEdBV0ksb0JBdEJSLENBSkYsQ0FERjtBQWdDRCxDQXRERDs7R0FBTXpCLEs7O0tBQUFBLEs7QUF3RFNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCdcblxuY29uc3Qge1xuICBIZWFkZXIsXG4gIEZvb3RlcixcbiAgU2lkZXIsXG4gIENvbnRlbnRcbn0gPSBMYXlvdXRcblxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlYXJjaFJlcywgc2V0U2VhcmNoUmVzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGdldE1vdmllcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBheGlvcy5nZXQoYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jZGEyYTJkMyZpPXR0Mzg5NjE5OCZzPSR7aW5wdXRUZXh0fWApXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBzZXRTZWFyY2hSZXMocmVzLmRhdGEuU2VhcmNoKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG5cbiAgICBzZXRJbnB1dFRleHQoJycpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuXG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDQ+TW92aWUgRGF0YWJhc2UgU2VhcmNoPC9oND5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lucHV0VGV4dH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPSdtYi0zJyAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0TW92aWVzfT5TZWFyY2ggTW92aWVzPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8YnIgLz5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VhcmNoUmVzLmxlbmd0aCA+PSAxID9cbiAgICAgICAgICAgIHNlYXJjaFJlcy5tYXAoKHJlc3VsdCwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbScgfX0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Jlc3VsdC5Qb3N0ZXJ9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogJ05vIG1vdmllcyBzZWFyY2hlZCdcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})