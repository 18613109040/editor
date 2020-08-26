(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ 1252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(859);

__webpack_require__(1253);

/***/ }),

/***/ 1253:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _button = __webpack_require__(860);

var _button2 = _interopRequireDefault(_button);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Result = function (_React$Component) {
    (0, _inherits3['default'])(Result, _React$Component);

    function Result() {
        (0, _classCallCheck3['default'])(this, Result);
        return (0, _possibleConstructorReturn3['default'])(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Result, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                img = _props.img,
                imgUrl = _props.imgUrl,
                title = _props.title,
                message = _props.message,
                buttonText = _props.buttonText,
                onButtonClick = _props.onButtonClick,
                buttonType = _props.buttonType;

            var imgContent = null;
            if (img) {
                imgContent = React.createElement(
                    'div',
                    { className: prefixCls + '-pic' },
                    img
                );
            } else if (imgUrl) {
                imgContent = React.createElement('div', { className: prefixCls + '-pic', style: { backgroundImage: 'url(' + imgUrl + ')' } });
            }
            return React.createElement(
                'div',
                { className: (0, _classnames2['default'])(prefixCls, className), style: style, role: 'alert' },
                imgContent,
                title ? React.createElement(
                    'div',
                    { className: prefixCls + '-title' },
                    title
                ) : null,
                message ? React.createElement(
                    'div',
                    { className: prefixCls + '-message' },
                    message
                ) : null,
                buttonText ? React.createElement(
                    'div',
                    { className: prefixCls + '-button' },
                    React.createElement(
                        _button2['default'],
                        { type: buttonType, onClick: onButtonClick },
                        buttonText
                    )
                ) : null
            );
        }
    }]);
    return Result;
}(React.Component); /* tslint:disable:jsx-no-multiline-js */


exports['default'] = Result;

Result.defaultProps = {
    prefixCls: 'am-result',
    buttonType: '',
    onButtonClick: function onButtonClick() {}
};
module.exports = exports['default'];

/***/ }),

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(859);
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(860);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_result_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1252);
/* harmony import */ var antd_mobile_lib_result_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_result_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1254);
/* harmony import */ var antd_mobile_lib_result__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_result__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(257);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(182);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_tools_getSearchParams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(185);
/* harmony import */ var _service_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5);













__webpack_require__(1255);

var ResultPage = function ResultPage(props) {
  var _getSearchParams = Object(_utils_tools_getSearchParams__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(location.search),
      code = _getSearchParams.code,
      client_token = _getSearchParams.client_token;

  _utils_storage__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].setItem("Authorization", client_token);
  var userToken = _utils_storage__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].getItem("userToken") ? _utils_storage__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].getItem("userToken") : "";

  var getMessage = function getMessage(code) {
    if (Array.isArray(code)) code = code[0];

    switch (Number(code)) {
      case 600009:
        return "系统错误，请联系系统管理员";

      case 600017:
        return "该账户已在别处登录";

      default:
        return "系统错误，请联系系统管理员";
    }
  };

  var ToLogin = function ToLogin() {
    Object(_service_http__WEBPACK_IMPORTED_MODULE_10__["QuitSys"])(userToken, 0).then(function (res) {
      if (res.code == 0) {
        window.location.replace(res.result);
      }
    })["catch"](function (err) {
      antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_7___default.a.fail(err.message || "系统出错", 1);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "result-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_mobile_lib_result__WEBPACK_IMPORTED_MODULE_3___default.a, {
    img: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "cross-circle-o",
      className: "spe",
      size: "lg",
      style: {
        fill: code === "600017" ? "rgba(42, 182, 217, 1)" : "#F13642"
      }
    }),
    title: code === "600017" ? "登录失败" : "页面错误",
    message: getMessage(code)
  }), code == "600017" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    size: "large",
    style: {
      backgroundColor: "rgba(42, 182, 217, 1)",
      borderRadius: "20px",
      margin: "20px"
    },
    onClick: ToLogin
  }, "\u8FD4\u56DE\u767B\u5F55") : "");
};

/* harmony default export */ __webpack_exports__["default"] = (ResultPage);

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ es_TouchFeedback; });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(96);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(64);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(66);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(57);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(65);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./node_modules/_classnames@2.2.6@classnames/index.js
var _classnames_2_2_6_classnames = __webpack_require__(97);
var _classnames_2_2_6_classnames_default = /*#__PURE__*/__webpack_require__.n(_classnames_2_2_6_classnames);

// CONCATENATED MODULE: ./node_modules/_rmc-feedback@2.0.0@rmc-feedback/es/TouchFeedback.js








var TouchFeedback_TouchFeedback = function (_React$Component) {
    inherits_default()(TouchFeedback, _React$Component);

    function TouchFeedback() {
        classCallCheck_default()(this, TouchFeedback);

        var _this = possibleConstructorReturn_default()(this, (TouchFeedback.__proto__ || Object.getPrototypeOf(TouchFeedback)).apply(this, arguments));

        _this.state = {
            active: false
        };
        _this.onTouchStart = function (e) {
            _this.triggerEvent('TouchStart', true, e);
        };
        _this.onTouchMove = function (e) {
            _this.triggerEvent('TouchMove', false, e);
        };
        _this.onTouchEnd = function (e) {
            _this.triggerEvent('TouchEnd', false, e);
        };
        _this.onTouchCancel = function (e) {
            _this.triggerEvent('TouchCancel', false, e);
        };
        _this.onMouseDown = function (e) {
            // pc simulate mobile
            _this.triggerEvent('MouseDown', true, e);
        };
        _this.onMouseUp = function (e) {
            _this.triggerEvent('MouseUp', false, e);
        };
        _this.onMouseLeave = function (e) {
            _this.triggerEvent('MouseLeave', false, e);
        };
        return _this;
    }

    createClass_default()(TouchFeedback, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.disabled && this.state.active) {
                this.setState({
                    active: false
                });
            }
        }
    }, {
        key: 'triggerEvent',
        value: function triggerEvent(type, isActive, ev) {
            var eventType = 'on' + type;
            var children = this.props.children;

            if (children.props[eventType]) {
                children.props[eventType](ev);
            }
            if (isActive !== this.state.active) {
                this.setState({
                    active: isActive
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                disabled = _props.disabled,
                activeClassName = _props.activeClassName,
                activeStyle = _props.activeStyle;

            var events = disabled ? undefined : {
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                onTouchCancel: this.onTouchCancel,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseLeave: this.onMouseLeave
            };
            var child = _react_16_13_1_react_default.a.Children.only(children);
            if (!disabled && this.state.active) {
                var _child$props = child.props,
                    style = _child$props.style,
                    className = _child$props.className;

                if (activeStyle !== false) {
                    if (activeStyle) {
                        style = extends_default()({}, style, activeStyle);
                    }
                    className = _classnames_2_2_6_classnames_default()(className, activeClassName);
                }
                return _react_16_13_1_react_default.a.cloneElement(child, extends_default()({ className: className,
                    style: style }, events));
            }
            return _react_16_13_1_react_default.a.cloneElement(child, events);
        }
    }]);

    return TouchFeedback;
}(_react_16_13_1_react_default.a.Component);

/* harmony default export */ var es_TouchFeedback = (TouchFeedback_TouchFeedback);

TouchFeedback_TouchFeedback.defaultProps = {
    disabled: false
};
// CONCATENATED MODULE: ./node_modules/_rmc-feedback@2.0.0@rmc-feedback/es/index.js


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(257);

__webpack_require__(863);

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(64);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(66);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames2 = __webpack_require__(97);

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(852);

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _icon = __webpack_require__(182);

var _icon2 = _interopRequireDefault(_icon);

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

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return React.createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3['default'])(this, Button);
        return (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Button, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                type = _a.type,
                size = _a.size,
                inline = _a.inline,
                disabled = _a.disabled,
                icon = _a.icon,
                loading = _a.loading,
                activeStyle = _a.activeStyle,
                activeClassName = _a.activeClassName,
                onClick = _a.onClick,
                restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);
            var iconType = loading ? 'loading' : icon;
            var wrapCls = (0, _classnames3['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-primary', type === 'primary'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-ghost', type === 'ghost'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-warning', type === 'warning'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-small', size === 'small'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-inline', inline), (0, _defineProperty3['default'])(_classnames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classnames, prefixCls + '-icon', !!iconType), _classnames));
            var kids = React.Children.map(children, insertSpace);
            var iconEl = void 0;
            if (typeof iconType === 'string') {
                iconEl = React.createElement(_icon2['default'], { 'aria-hidden': 'true', type: iconType, size: size === 'small' ? 'xxs' : 'md', className: prefixCls + '-icon' });
            } else if (iconType) {
                var rawCls = iconType.props && iconType.props.className;
                var cls = (0, _classnames3['default'])('am-icon', prefixCls + '-icon', size === 'small' ? 'am-icon-xxs' : 'am-icon-md');
                iconEl = React.cloneElement(iconType, {
                    className: rawCls ? rawCls + ' ' + cls : cls
                });
            }
            // use div, button native is buggy @yiminghe
            return React.createElement(
                _rmcFeedback2['default']
                // tslint:disable-next-line:jsx-no-multiline-js
                ,
                { activeClassName: activeClassName || (activeStyle ? prefixCls + '-active' : undefined), disabled: disabled, activeStyle: activeStyle },
                React.createElement(
                    'a',
                    (0, _extends3['default'])({ role: 'button', className: wrapCls }, restProps, { onClick: disabled ? undefined : onClick, 'aria-disabled': disabled }),
                    iconEl,
                    kids
                )
            );
        }
    }]);
    return Button;
}(React.Component);

Button.defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
    activeStyle: {}
};
exports['default'] = Button;
module.exports = exports['default'];

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../map/resultPage.9ac78024.map