(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ 1264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      route = _useState2[0],
      setRoute = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var localtion = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* useLocation */ "g"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var routerUrl = localtion.state.routerUrl;
    setRoute(routerUrl);
  }, []);

  var onLoadiFrame = function onLoadiFrame() {
    var iframeWindow = ref.current.contentWindow;

    if (!navigator.userAgent.match(/iPad|iPhone/i)) {
      return false;
    }

    var iframebody = iframeWindow.document.body;
    iframebody.style.width = document.body.clientWidth + "px";
  };

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        overflow: "scroll",
        WebkitOverflowScrolling: "touch",
        width: "100%",
        height: "".concat(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__[/* getClintHeight */ "a"])(), "px")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      ref: ref,
      src: route,
      frameBorder: 0,
      style: {
        width: "100%",
        display: "flex",
        height: "".concat(Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__[/* getClintHeight */ "a"])(), "px"),
        overflow: "visible"
      },
      scrolling: "no",
      onLoad: onLoadiFrame
    })));
  }, [route]);
});

/***/ })

}]);
//# sourceMappingURL=../map/process.3a59ceff.map