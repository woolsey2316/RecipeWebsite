"use strict";
self["webpackHotUpdate_N_E"]("pages/vegan",{

/***/ "./src/container/RecipeQuery.js":
/*!**************************************!*\
  !*** ./src/container/RecipeQuery.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Recipe */ "./src/components/Recipe.js");
/* harmony import */ var _container_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/container/SideBar */ "./src/container/SideBar.js");
/* harmony import */ var _components_SearchResultTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SearchResultTitle */ "./src/components/SearchResultTitle.js");
/* harmony import */ var _styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/sass/RecipeQuery.module.scss */ "./src/styles/sass/RecipeQuery.module.scss");
/* harmony import */ var _styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\wools\\github\\RecipeWebsite\\src\\container\\RecipeQuery.js",
    _s = $RefreshSig$();







function RecipeQuery({
  healthLabel,
  searchTerm
}) {
  _s();

  const APP_ID = "bde76692";
  const APP_KEY = "a779c707df0015efad7cf8cee3391fe1";
  const {
    0: recipes,
    1: setRecipes
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(searchTerm);

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function getRecipes() {
      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&HealthLabel=${healthLabel}`).then(handleErrors).then(async function (response) {
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
      }).catch(error => {
        console.log(error);
      });
    }

    getRecipes();
  }, [healthLabel, query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    //prevent refreshing page when every time a character is entered in the search bar
    e.preventDefault();
    setQuery(search);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().searchForm),
      onSubmit: getSearch,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().input),
        placeholder: "search recipe",
        id: "seachbar",
        type: "text",
        value: search,
        onChange: updateSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().searchResults),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().recipes),
        children: [query ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResultTitle__WEBPACK_IMPORTED_MODULE_4__.default, {
          searchTerm: query
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 20
        }, this) : null, recipes.map(recipe => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Recipe__WEBPACK_IMPORTED_MODULE_2__.default, {
          title: recipe.recipe.label,
          calories: recipe.recipe.calories,
          image: recipe.recipe.image,
          ingredients: recipe.recipe.ingredients,
          url: recipe.recipe.url
        }, recipe.recipe.url, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_SideBar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(RecipeQuery, "qXAs1F3cBFQeKH4pHnmnO0Glf24=");

_c = RecipeQuery;
/* harmony default export */ __webpack_exports__["default"] = (RecipeQuery);

var _c;

$RefreshReg$(_c, "RecipeQuery");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVnYW4uYjUxMjQ0MGM3YmQ3ZDMyNTY2NzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTTyxXQUFULENBQXFCO0FBQUVDLEVBQUFBLFdBQUY7QUFBZUMsRUFBQUE7QUFBZixDQUFyQixFQUFrRDtBQUFBOztBQUNoRCxRQUFNQyxNQUFNLEdBQUcsVUFBZjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxrQ0FBaEI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JaLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDYSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQmQsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNlLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CaEIsK0NBQVEsQ0FBQ1EsVUFBRCxDQUFsQzs7QUFFQSxXQUFTUyxZQUFULENBQXNCQyxRQUF0QixFQUFnQztBQUM5QixRQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUNoQixZQUFNQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csVUFBVixDQUFYO0FBQ0Q7O0FBQ0QsV0FBT0gsUUFBUDtBQUNEOztBQUNEakIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsbUJBQWVxQixVQUFmLEdBQTRCO0FBQzFCQyxNQUFBQSxLQUFLLENBQ0YsbUNBQWtDUixLQUFNLFdBQVVOLE1BQU8sWUFBV0MsT0FBUSxnQkFBZUgsV0FBWSxFQURyRyxDQUFMLENBR0dpQixJQUhILENBR1FQLFlBSFIsRUFJR08sSUFKSCxDQUlRLGdCQUFlTixRQUFmLEVBQXlCO0FBQzdCLGNBQU1PLElBQUksR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQVQsRUFBbkI7QUFDQUMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQWIsUUFBQUEsVUFBVSxDQUFDYSxJQUFJLENBQUNJLElBQU4sQ0FBVjtBQUNELE9BUkgsRUFTR0MsS0FUSCxDQVNTQyxLQUFLLElBQUk7QUFDZEosUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLEtBQVo7QUFDRCxPQVhIO0FBWUQ7O0FBQ0RULElBQUFBLFVBQVU7QUFDWCxHQWhCUSxFQWdCTixDQUFDZixXQUFELEVBQWNRLEtBQWQsQ0FoQk0sQ0FBVDs7QUFrQkEsUUFBTWlCLFlBQVksR0FBR0MsQ0FBQyxJQUFJO0FBQ3hCbkIsSUFBQUEsU0FBUyxDQUFDbUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUNBUixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWYsTUFBWjtBQUNELEdBSEQ7O0FBS0EsUUFBTXVCLFNBQVMsR0FBR0gsQ0FBQyxJQUFJO0FBQ3JCO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ0ksY0FBRjtBQUNBckIsSUFBQUEsUUFBUSxDQUFDSCxNQUFELENBQVI7QUFDRCxHQUpEOztBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFUix3RkFBaEI7QUFBQSw0QkFDRTtBQUFNLGVBQVMsRUFBRUEsd0ZBQWpCO0FBQW1DLGNBQVEsRUFBRStCLFNBQTdDO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFFL0IsbUZBRGI7QUFFRSxtQkFBVyxFQUFDLGVBRmQ7QUFHRSxVQUFFLEVBQUMsVUFITDtBQUlFLFlBQUksRUFBQyxNQUpQO0FBS0UsYUFBSyxFQUFFUSxNQUxUO0FBTUUsZ0JBQVEsRUFBRW1CO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUssZUFBUyxFQUFFM0IsMkZBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxxRkFBaEI7QUFBQSxtQkFDR1UsS0FBSyxnQkFBRyw4REFBQyxrRUFBRDtBQUFtQixvQkFBVSxFQUFFQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFILEdBQThDLElBRHRELEVBRUdKLE9BQU8sQ0FBQytCLEdBQVIsQ0FBWUMsTUFBTSxpQkFDakIsOERBQUMsdURBQUQ7QUFFRSxlQUFLLEVBQUVBLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjQyxLQUZ2QjtBQUdFLGtCQUFRLEVBQUVELE1BQU0sQ0FBQ0EsTUFBUCxDQUFjRSxRQUgxQjtBQUlFLGVBQUssRUFBRUYsTUFBTSxDQUFDQSxNQUFQLENBQWNHLEtBSnZCO0FBS0UscUJBQVcsRUFBRUgsTUFBTSxDQUFDQSxNQUFQLENBQWNJLFdBTDdCO0FBTUUsYUFBRyxFQUFFSixNQUFNLENBQUNBLE1BQVAsQ0FBY0s7QUFOckIsV0FDT0wsTUFBTSxDQUFDQSxNQUFQLENBQWNLLEdBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0F6RVExQzs7S0FBQUE7QUEyRVQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9SZWNpcGVRdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVjaXBlIGZyb20gXCJAL2NvbXBvbmVudHMvUmVjaXBlXCI7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gXCJAL2NvbnRhaW5lci9TaWRlQmFyXCI7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaFJlc3VsdFRpdGxlXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiQC9zdHlsZXMvc2Fzcy9SZWNpcGVRdWVyeS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZnVuY3Rpb24gUmVjaXBlUXVlcnkoeyBoZWFsdGhMYWJlbCwgc2VhcmNoVGVybSB9KSB7XHJcbiAgY29uc3QgQVBQX0lEID0gXCJiZGU3NjY5MlwiO1xyXG4gIGNvbnN0IEFQUF9LRVkgPSBcImE3NzljNzA3ZGYwMDE1ZWZhZDdjZjhjZWUzMzkxZmUxXCI7XHJcblxyXG4gIGNvbnN0IFtyZWNpcGVzLCBzZXRSZWNpcGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShzZWFyY2hUZXJtKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlcygpIHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLmVkYW1hbS5jb20vc2VhcmNoP3E9JHtxdWVyeX0mYXBwX2lkPSR7QVBQX0lEfSZhcHBfa2V5PSR7QVBQX0tFWX0mSGVhbHRoTGFiZWw9JHtoZWFsdGhMYWJlbH1gXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbihoYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHNldFJlY2lwZXMoZGF0YS5oaXRzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRSZWNpcGVzKCk7XHJcbiAgfSwgW2hlYWx0aExhYmVsLCBxdWVyeV0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWFyY2ggPSBlID0+IHtcclxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFNlYXJjaCA9IGUgPT4ge1xyXG4gICAgLy9wcmV2ZW50IHJlZnJlc2hpbmcgcGFnZSB3aGVuIGV2ZXJ5IHRpbWUgYSBjaGFyYWN0ZXIgaXMgZW50ZXJlZCBpbiB0aGUgc2VhcmNoIGJhclxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0UXVlcnkoc2VhcmNoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJhY2tncm91bmR9PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlLnNlYXJjaEZvcm19IG9uU3VibWl0PXtnZXRTZWFyY2h9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIHJlY2lwZVwiXHJcbiAgICAgICAgICBpZD1cInNlYWNoYmFyXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNlYXJjaFJlc3VsdHN9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yZWNpcGVzfT5cclxuICAgICAgICAgIHtxdWVyeSA/IDxTZWFyY2hSZXN1bHRUaXRsZSBzZWFyY2hUZXJtPXtxdWVyeX0gLz4gOiBudWxsfVxyXG4gICAgICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWNpcGVcclxuICAgICAgICAgICAgICBrZXk9e3JlY2lwZS5yZWNpcGUudXJsfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtyZWNpcGUucmVjaXBlLmxhYmVsfVxyXG4gICAgICAgICAgICAgIGNhbG9yaWVzPXtyZWNpcGUucmVjaXBlLmNhbG9yaWVzfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtyZWNpcGUucmVjaXBlLmltYWdlfVxyXG4gICAgICAgICAgICAgIGluZ3JlZGllbnRzPXtyZWNpcGUucmVjaXBlLmluZ3JlZGllbnRzfVxyXG4gICAgICAgICAgICAgIHVybD17cmVjaXBlLnJlY2lwZS51cmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVF1ZXJ5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlY2lwZSIsIlNpZGVCYXIiLCJTZWFyY2hSZXN1bHRUaXRsZSIsInN0eWxlIiwiUmVjaXBlUXVlcnkiLCJoZWFsdGhMYWJlbCIsInNlYXJjaFRlcm0iLCJBUFBfSUQiLCJBUFBfS0VZIiwicmVjaXBlcyIsInNldFJlY2lwZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwiaGFuZGxlRXJyb3JzIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsImdldFJlY2lwZXMiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJoaXRzIiwiY2F0Y2giLCJlcnJvciIsInVwZGF0ZVNlYXJjaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFNlYXJjaCIsInByZXZlbnREZWZhdWx0IiwiYmFja2dyb3VuZCIsInNlYXJjaEZvcm0iLCJpbnB1dCIsInNlYXJjaFJlc3VsdHMiLCJtYXAiLCJyZWNpcGUiLCJsYWJlbCIsImNhbG9yaWVzIiwiaW1hZ2UiLCJpbmdyZWRpZW50cyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=