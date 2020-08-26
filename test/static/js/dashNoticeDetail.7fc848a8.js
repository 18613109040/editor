(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notice; });
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(256);
/* harmony import */ var _components_EasyNarBar_EasyNarBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(854);



var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





__webpack_require__(1174);

var Notice = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[/* inject */ "b"])('noticeDetailStore'), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[/* observer */ "c"])(_class = /*#__PURE__*/function (_React$Component) {
  _inherits(Notice, _React$Component);

  var _super = _createSuper(Notice);

  function Notice() {
    _classCallCheck(this, Notice);

    return _super.apply(this, arguments);
  }

  _createClass(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          inistore = _this$props.noticeDetailStore.inistore,
          MessData = _this$props.location.state.MessData;
      inistore(MessData);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var clearData = this.props.noticeDetailStore.clearData;
      clearData();
    }
  }, {
    key: "goback",
    value: function goback() {
      var history = this.props.history;
      history.goBack();
    }
  }, {
    key: "render",
    value: function render() {
      var notice = this.props.noticeDetailStore.notice;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "noticeDiv"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_EasyNarBar_EasyNarBar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        mainContent: "\u6D88\u606F\u8BE6\u60C5",
        leftContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
          type: "left"
        }),
        onLeftClick: this.goback.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "Ptitle"
      }, notice.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "noticeDate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, notice.date), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, notice.time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "contentDiv"
      }, notice.content)), notice.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "imgDiv"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: notice.url
      })) : '');
    }
  }]);

  return Notice;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component)) || _class) || _class);


/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(855);

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(64);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(66);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(97);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var NavBar = function (_React$Component) {
    (0, _inherits3['default'])(NavBar, _React$Component);

    function NavBar() {
        (0, _classCallCheck3['default'])(this, NavBar);
        return (0, _possibleConstructorReturn3['default'])(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    (0, _createClass3['default'])(NavBar, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                children = _a.children,
                mode = _a.mode,
                icon = _a.icon,
                onLeftClick = _a.onLeftClick,
                leftContent = _a.leftContent,
                rightContent = _a.rightContent,
                restProps = __rest(_a, ["prefixCls", "className", "children", "mode", "icon", "onLeftClick", "leftContent", "rightContent"]);
            return React.createElement(
                'div',
                (0, _extends3['default'])({}, restProps, { className: (0, _classnames2['default'])(className, prefixCls, prefixCls + '-' + mode) }),
                React.createElement(
                    'div',
                    { className: prefixCls + '-left', role: 'button', onClick: onLeftClick },
                    icon ?
                    // tslint:disable-next-line:jsx-no-multiline-js
                    React.createElement(
                        'span',
                        { className: prefixCls + '-left-icon', 'aria-hidden': 'true' },
                        icon
                    ) : null,
                    leftContent
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-title' },
                    children
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-right' },
                    rightContent
                )
            );
        }
    }]);
    return NavBar;
}(React.Component);

exports['default'] = NavBar;

NavBar.defaultProps = {
    prefixCls: 'am-navbar',
    mode: 'dark',
    onLeftClick: function onLeftClick() {}
};
module.exports = exports['default'];

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(850);
/* harmony import */ var antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(851);
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable react/display-name */

/* eslint-disable @typescript-eslint/no-explicit-any */

var EasyNarBar = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    mode: "dark",
    leftContent: props.leftContent,
    onLeftClick: function onLeftClick(e) {
      props.onLeftClick && props.onLeftClick(e);
    },
    rightContent: props.rightContent
  }, props.mainContent));
});
/* harmony default export */ __webpack_exports__["a"] = (EasyNarBar);

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../map/dashNoticeDetail.2d12cc62.map