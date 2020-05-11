webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/Users/davidpastor/DEV/playground/personal/pau-blog/components/PostList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    allArticles(orderBy: _createdAt_ASC) {\n      resumen\n      content(markdown: true)\n      id\n      title\n      featured\n      links {\n        id\n        category\n      }\n      mainImage {\n        id\n        url\n      }\n      images {\n        id\n        url\n      }\n      avatar {\n        id\n        url\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var query = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var PostList = function PostList(articles) {
  var data = articles.data;

  if (data && data.allArticles && data.allArticles.length) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, data.allArticles.map(function (post) {
      return __jsx("div", {
        key: post.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, post.featured ? __jsx("div", {
        className: "flex h-full bg-white rounded overflow-hidden shadow-lg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/post/".concat(post.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "flex flex-wrap no-underline hover:no-underline",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "w-full md:w-2/3 rounded-t",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 23
        }
      }, __jsx("img", {
        src: post.mainImage && post.mainImage.url,
        className: "h-full w-full shadow",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }
      })), __jsx("div", {
        key: post.id,
        className: "w-full md:w-1/3 flex flex-col flex-grow flex-shrink pt-10",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }, post.links && post.links.map(function (cat, index) {
        return __jsx("p", {
          key: index,
          className: "w-full text-gray-600 text-xs md:text-sm pt-6 px-6",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 31
          }
        }, cat.category);
      }), __jsx("div", {
        className: "w-full font-bold text-xl text-gray-900 px-6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 27
        }
      }, "\uD83D\uDC4B ", post.title), __jsx("div", {
        className: "text-gray-800 font-serif text-base px-6 mb-5",
        dangerouslySetInnerHTML: {
          __html: post.resumen
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 27
        }
      })), __jsx("div", {
        className: "flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "flex items-center justify-between",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 27
        }
      }, __jsx("img", {
        className: "w-8 h-8 rounded-full mr-4 avatar",
        "data-tippy-content": "Author Name",
        src: "http://i.pravatar.cc/300",
        alt: "Avatar of Author",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }
      }), __jsx("p", {
        className: "text-gray-600 text-xs md:text-sm",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 29
        }
      }, "1 MIN READ"))))))) : __jsx("div", {
        className: "flex flex-wrap justify-between pt-12 -mx-6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "w-full md:w-1/3 p-6 flex flex-col flex-shrink",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/post/".concat(post.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 23
        }
      }, __jsx("a", {
        className: "flex flex-wrap no-underline hover:no-underline",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: post.mainImage && post.mainImage.url,
        className: "h-64 w-full rounded-t pb-6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 27
        }
      }), __jsx("div", {
        className: "w-full font-bold text-xl text-gray-900 px-6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 27
        }
      }, post.title), __jsx("div", {
        className: "text-gray-800 font-serif text-base px-6 mb-5",
        dangerouslySetInnerHTML: {
          __html: post.resumen
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 27
        }
      })))), __jsx("div", {
        className: "flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "flex items-center justify-between",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 23
        }
      }, post.avatar, __jsx("img", {
        className: "w-8 h-8 rounded-full mr-4 avatar",
        "data-tippy-content": "Author Name",
        src: post && post.avatar ? post.avatar.url : "",
        alt: "Avatar of Author",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 25
        }
      }), __jsx("p", {
        className: "text-gray-600 text-xs md:text-sm",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 25
        }
      }, "1 MIN READ"))))));
    }));
  }

  return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 10
    }
  }, "Loading");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(query, {
  props: function props(_ref) {
    var data = _ref.data;
    return {
      data: data
    };
  }
})(PostList));

/***/ })

})
//# sourceMappingURL=index.js.6a3aeadad3bbc37bedba.hot-update.js.map