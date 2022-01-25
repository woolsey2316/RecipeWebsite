"use strict";
self["webpackHotUpdate_N_E"]("pages/mainSearch",{

/***/ "./src/container/RecipeQuery.js":
/*!**************************************!*\
  !*** ./src/container/RecipeQuery.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Recipe */ "./src/components/Recipe.js");
/* harmony import */ var _container_SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/container/SideBar */ "./src/container/SideBar.js");
/* harmony import */ var _components_SearchResultTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SearchResultTitle */ "./src/components/SearchResultTitle.js");
/* harmony import */ var _styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/sass/RecipeQuery.module.scss */ "./src/styles/sass/RecipeQuery.module.scss");
/* harmony import */ var _styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\wools\\github\\recipe-website\\src\\container\\RecipeQuery.js",
    _s = $RefreshSig$();








function RecipeQuery({
  healthLabel,
  diet,
  searchTerm,
  labels
}) {
  _s();

  const APP_ID = "bde76692";
  const APP_KEY = "a779c707df0015efad7cf8cee3391fe1";
  const {
    0: recipes,
    1: setRecipes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchTerm);

  if (labels) {
    healthLabel = Object.values(labels)[0].reduce((curr, prev, index) => {
      if (index !== 0) {
        return curr += "&" + prev;
      } else {
        return curr += prev;
      }
    }, "");
    diet = Object.values(labels)[1].reduce((curr, prev, index) => {
      if (index !== 0) {
        return curr += "&" + prev;
      } else {
        return curr += prev;
      }
    }, "");
  }

  let url = "";

  if (healthLabel && diet) {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}&Diet=${diet}`;
  } else if (healthLabel) {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`;
  } else if (diet) {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&Diet=${diet}`;
  } else {
    url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function getRecipes() {
      fetch(url).then(handleErrors).then(async function (response) {
        const data = await response.json();
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().background),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().searchForm),
      onSubmit: getSearch,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
        className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().input),
        placeholder: "search recipe",
        id: "seachbar",
        type: "text",
        value: search,
        onChange: updateSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().searchResults),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_sass_RecipeQuery_module_scss__WEBPACK_IMPORTED_MODULE_5___default().recipes),
        children: [query ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_SearchResultTitle__WEBPACK_IMPORTED_MODULE_3__.default, {
          searchTerm: query
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 20
        }, this) : null, recipes.map(recipe => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Recipe__WEBPACK_IMPORTED_MODULE_1__.default, {
          title: recipe.recipe.label,
          calories: recipe.recipe.calories,
          image: recipe.recipe.image,
          ingredients: recipe.recipe.ingredients,
          url: recipe.recipe.url
        }, recipe.recipe.url, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_container_SideBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpblNlYXJjaC5jNmI5OTVjNzY2ZjE1Y2NhOTU4YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU08sV0FBVCxDQUFxQjtBQUFFQyxFQUFBQSxXQUFGO0FBQWVDLEVBQUFBLElBQWY7QUFBcUJDLEVBQUFBLFVBQXJCO0FBQWlDQyxFQUFBQTtBQUFqQyxDQUFyQixFQUFnRTtBQUFBOztBQUM5RCxRQUFNQyxNQUFNLEdBQUcsVUFBZjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxrQ0FBaEI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JkLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDZSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQmhCLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDaUIsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JsQiwrQ0FBUSxDQUFDUyxVQUFELENBQWxDOztBQUVBLE1BQUlDLE1BQUosRUFBWTtBQUNWSCxJQUFBQSxXQUFXLEdBQUdZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVixNQUFkLEVBQXNCLENBQXRCLEVBQXlCVyxNQUF6QixDQUFnQyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBYUMsS0FBYixLQUF1QjtBQUNuRSxVQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFrQjtBQUNoQixlQUFPRixJQUFJLElBQUksTUFBTUMsSUFBckI7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPRCxJQUFJLElBQUlDLElBQWY7QUFDRDtBQUNGLEtBTmEsRUFNWixFQU5ZLENBQWQ7QUFPQWYsSUFBQUEsSUFBSSxHQUFHVyxNQUFNLENBQUNDLE1BQVAsQ0FBY1YsTUFBZCxFQUFzQixDQUF0QixFQUF5QlcsTUFBekIsQ0FBZ0MsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWFDLEtBQWIsS0FBdUI7QUFDNUQsVUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBa0I7QUFDaEIsZUFBT0YsSUFBSSxJQUFJLE1BQU1DLElBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0QsSUFBSSxJQUFJQyxJQUFmO0FBQ0Q7QUFDRixLQU5NLEVBTUwsRUFOSyxDQUFQO0FBT0Q7O0FBRUQsTUFBSUUsR0FBRyxHQUFHLEVBQVY7O0FBRUEsTUFBSWxCLFdBQVcsSUFBSUMsSUFBbkIsRUFBeUI7QUFDdkJpQixJQUFBQSxHQUFHLEdBQUksbUNBQWtDUixLQUFNLFdBQVVOLE1BQU8sWUFBV0MsT0FBUSxXQUFVTCxXQUFZLFNBQVFDLElBQUssRUFBdEg7QUFDRCxHQUZELE1BRU8sSUFBSUQsV0FBSixFQUFpQjtBQUN0QmtCLElBQUFBLEdBQUcsR0FBSSxtQ0FBa0NSLEtBQU0sV0FBVU4sTUFBTyxZQUFXQyxPQUFRLFdBQVVMLFdBQVksRUFBekc7QUFDRCxHQUZNLE1BRUEsSUFBSUMsSUFBSixFQUFVO0FBQ2ZpQixJQUFBQSxHQUFHLEdBQUksbUNBQWtDUixLQUFNLFdBQVVOLE1BQU8sWUFBV0MsT0FBUSxTQUFRSixJQUFLLEVBQWhHO0FBQ0QsR0FGTSxNQUVBO0FBQ0xpQixJQUFBQSxHQUFHLEdBQUksbUNBQWtDUixLQUFNLFdBQVVOLE1BQU8sWUFBV0MsT0FBUSxFQUFuRjtBQUNEOztBQUVELFdBQVNjLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQWdDO0FBQzlCLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFkLEVBQWtCO0FBQ2hCLFlBQU1DLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxVQUFWLENBQVg7QUFDRDs7QUFDRCxXQUFPSCxRQUFQO0FBQ0Q7O0FBQ0QxQixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZThCLFVBQWYsR0FBNEI7QUFDMUJDLE1BQUFBLEtBQUssQ0FBQ1AsR0FBRCxDQUFMLENBQ0dRLElBREgsQ0FDUVAsWUFEUixFQUVHTyxJQUZILENBRVEsZ0JBQWVOLFFBQWYsRUFBeUI7QUFDN0IsY0FBTU8sSUFBSSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFuQjtBQUNBckIsUUFBQUEsVUFBVSxDQUFDb0IsSUFBSSxDQUFDRSxJQUFOLENBQVY7QUFDRCxPQUxILEVBTUdDLEtBTkgsQ0FNU0MsS0FBSyxJQUFJO0FBQ2RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsT0FSSDtBQVNEOztBQUNEUCxJQUFBQSxVQUFVO0FBQ1gsR0FiUSxFQWFOLENBQUN4QixXQUFELEVBQWNVLEtBQWQsQ0FiTSxDQUFUOztBQWVBLFFBQU13QixZQUFZLEdBQUdDLENBQUMsSUFBSTtBQUN4QjFCLElBQUFBLFNBQVMsQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDQUwsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl6QixNQUFaO0FBQ0QsR0FIRDs7QUFLQSxRQUFNOEIsU0FBUyxHQUFHSCxDQUFDLElBQUk7QUFDckI7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDSSxjQUFGO0FBQ0E1QixJQUFBQSxRQUFRLENBQUNILE1BQUQsQ0FBUjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVWLHdGQUFoQjtBQUFBLDRCQUNFO0FBQU0sZUFBUyxFQUFFQSx3RkFBakI7QUFBbUMsY0FBUSxFQUFFd0MsU0FBN0M7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUV4QyxtRkFEYjtBQUVFLG1CQUFXLEVBQUMsZUFGZDtBQUdFLFVBQUUsRUFBQyxVQUhMO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFLRSxhQUFLLEVBQUVVLE1BTFQ7QUFNRSxnQkFBUSxFQUFFMEI7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBV0U7QUFBSyxlQUFTLEVBQUVwQywyRkFBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLHFGQUFoQjtBQUFBLG1CQUNHWSxLQUFLLGdCQUFHLDhEQUFDLGtFQUFEO0FBQW1CLG9CQUFVLEVBQUVBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUgsR0FBOEMsSUFEdEQsRUFFR0osT0FBTyxDQUFDc0MsR0FBUixDQUFZQyxNQUFNLGlCQUNqQiw4REFBQyx1REFBRDtBQUVFLGVBQUssRUFBRUEsTUFBTSxDQUFDQSxNQUFQLENBQWNDLEtBRnZCO0FBR0Usa0JBQVEsRUFBRUQsTUFBTSxDQUFDQSxNQUFQLENBQWNFLFFBSDFCO0FBSUUsZUFBSyxFQUFFRixNQUFNLENBQUNBLE1BQVAsQ0FBY0csS0FKdkI7QUFLRSxxQkFBVyxFQUFFSCxNQUFNLENBQUNBLE1BQVAsQ0FBY0ksV0FMN0I7QUFNRSxhQUFHLEVBQUVKLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjM0I7QUFOckIsV0FDTzJCLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjM0IsR0FEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBY0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQW5HUW5COztLQUFBQTtBQXFHVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVyL1JlY2lwZVF1ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWNpcGUgZnJvbSBcIkAvY29tcG9uZW50cy9SZWNpcGVcIjtcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIkAvY29udGFpbmVyL1NpZGVCYXJcIjtcclxuaW1wb3J0IFNlYXJjaFJlc3VsdFRpdGxlIGZyb20gXCJAL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0VGl0bGVcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCJAL3N0eWxlcy9zYXNzL1JlY2lwZVF1ZXJ5Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBSZWNpcGVRdWVyeSh7IGhlYWx0aExhYmVsLCBkaWV0LCBzZWFyY2hUZXJtLCBsYWJlbHMgfSkge1xyXG4gIGNvbnN0IEFQUF9JRCA9IFwiYmRlNzY2OTJcIjtcclxuICBjb25zdCBBUFBfS0VZID0gXCJhNzc5YzcwN2RmMDAxNWVmYWQ3Y2Y4Y2VlMzM5MWZlMVwiO1xyXG5cclxuICBjb25zdCBbcmVjaXBlcywgc2V0UmVjaXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoc2VhcmNoVGVybSk7XHJcblxyXG4gIGlmIChsYWJlbHMpIHtcclxuICAgIGhlYWx0aExhYmVsID0gT2JqZWN0LnZhbHVlcyhsYWJlbHMpWzBdLnJlZHVjZSgoY3VyciwgcHJldiwgaW5kZXgpID0+IHsgXHJcbiAgICAgIGlmIChpbmRleCAhPT0gMCApIHtcclxuICAgICAgICByZXR1cm4gY3VyciArPSBcIiZcIiArIHByZXYgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnIgKz0gcHJldjtcclxuICAgICAgfVxyXG4gICAgfSxcIlwiKVxyXG4gICAgZGlldCA9IE9iamVjdC52YWx1ZXMobGFiZWxzKVsxXS5yZWR1Y2UoKGN1cnIsIHByZXYsIGluZGV4KSA9PiB7IFxyXG4gICAgICBpZiAoaW5kZXggIT09IDAgKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1cnIgKz0gXCImXCIgKyBwcmV2IFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjdXJyICs9IHByZXY7XHJcbiAgICAgIH1cclxuICAgIH0sXCJcIilcclxuICB9XHJcbiAgXHJcbiAgbGV0IHVybCA9IFwiXCJcclxuICBcclxuICBpZiAoaGVhbHRoTGFiZWwgJiYgZGlldCkge1xyXG4gICAgdXJsID0gYGh0dHBzOi8vYXBpLmVkYW1hbS5jb20vc2VhcmNoP3E9JHtxdWVyeX0mYXBwX2lkPSR7QVBQX0lEfSZhcHBfa2V5PSR7QVBQX0tFWX0maGVhbHRoPSR7aGVhbHRoTGFiZWx9JkRpZXQ9JHtkaWV0fWBcclxuICB9IGVsc2UgaWYgKGhlYWx0aExhYmVsKSB7XHJcbiAgICB1cmwgPSBgaHR0cHM6Ly9hcGkuZWRhbWFtLmNvbS9zZWFyY2g/cT0ke3F1ZXJ5fSZhcHBfaWQ9JHtBUFBfSUR9JmFwcF9rZXk9JHtBUFBfS0VZfSZoZWFsdGg9JHtoZWFsdGhMYWJlbH1gXHJcbiAgfSBlbHNlIGlmIChkaWV0KSB7XHJcbiAgICB1cmwgPSBgaHR0cHM6Ly9hcGkuZWRhbWFtLmNvbS9zZWFyY2g/cT0ke3F1ZXJ5fSZhcHBfaWQ9JHtBUFBfSUR9JmFwcF9rZXk9JHtBUFBfS0VZfSZEaWV0PSR7ZGlldH1gXHJcbiAgfSBlbHNlIHtcclxuICAgIHVybCA9IGBodHRwczovL2FwaS5lZGFtYW0uY29tL3NlYXJjaD9xPSR7cXVlcnl9JmFwcF9pZD0ke0FQUF9JRH0mYXBwX2tleT0ke0FQUF9LRVl9YFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlcygpIHtcclxuICAgICAgZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKGhhbmRsZUVycm9ycylcclxuICAgICAgICAudGhlbihhc3luYyBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHNldFJlY2lwZXMoZGF0YS5oaXRzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRSZWNpcGVzKCk7XHJcbiAgfSwgW2hlYWx0aExhYmVsLCBxdWVyeV0pO1xyXG5cclxuICBjb25zdCB1cGRhdGVTZWFyY2ggPSBlID0+IHtcclxuICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFNlYXJjaCA9IGUgPT4ge1xyXG4gICAgLy9wcmV2ZW50IHJlZnJlc2hpbmcgcGFnZSB3aGVuIGV2ZXJ5IHRpbWUgYSBjaGFyYWN0ZXIgaXMgZW50ZXJlZCBpbiB0aGUgc2VhcmNoIGJhclxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0UXVlcnkoc2VhcmNoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJhY2tncm91bmR9PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlLnNlYXJjaEZvcm19IG9uU3VibWl0PXtnZXRTZWFyY2h9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIHJlY2lwZVwiXHJcbiAgICAgICAgICBpZD1cInNlYWNoYmFyXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNlYXJjaFJlc3VsdHN9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5yZWNpcGVzfT5cclxuICAgICAgICAgIHtxdWVyeSA/IDxTZWFyY2hSZXN1bHRUaXRsZSBzZWFyY2hUZXJtPXtxdWVyeX0gLz4gOiBudWxsfVxyXG4gICAgICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiAoXHJcbiAgICAgICAgICAgIDxSZWNpcGVcclxuICAgICAgICAgICAgICBrZXk9e3JlY2lwZS5yZWNpcGUudXJsfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtyZWNpcGUucmVjaXBlLmxhYmVsfVxyXG4gICAgICAgICAgICAgIGNhbG9yaWVzPXtyZWNpcGUucmVjaXBlLmNhbG9yaWVzfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtyZWNpcGUucmVjaXBlLmltYWdlfVxyXG4gICAgICAgICAgICAgIGluZ3JlZGllbnRzPXtyZWNpcGUucmVjaXBlLmluZ3JlZGllbnRzfVxyXG4gICAgICAgICAgICAgIHVybD17cmVjaXBlLnJlY2lwZS51cmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVF1ZXJ5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlY2lwZSIsIlNpZGVCYXIiLCJTZWFyY2hSZXN1bHRUaXRsZSIsInN0eWxlIiwiUmVjaXBlUXVlcnkiLCJoZWFsdGhMYWJlbCIsImRpZXQiLCJzZWFyY2hUZXJtIiwibGFiZWxzIiwiQVBQX0lEIiwiQVBQX0tFWSIsInJlY2lwZXMiLCJzZXRSZWNpcGVzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsImN1cnIiLCJwcmV2IiwiaW5kZXgiLCJ1cmwiLCJoYW5kbGVFcnJvcnMiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZ2V0UmVjaXBlcyIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwiaGl0cyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlU2VhcmNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0U2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJiYWNrZ3JvdW5kIiwic2VhcmNoRm9ybSIsImlucHV0Iiwic2VhcmNoUmVzdWx0cyIsIm1hcCIsInJlY2lwZSIsImxhYmVsIiwiY2Fsb3JpZXMiLCJpbWFnZSIsImluZ3JlZGllbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==