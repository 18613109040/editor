(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

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

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(878);

/***/ }),

/***/ 871:
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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var WhiteSpace = function (_React$Component) {
    (0, _inherits3['default'])(WhiteSpace, _React$Component);

    function WhiteSpace() {
        (0, _classCallCheck3['default'])(this, WhiteSpace);
        return (0, _possibleConstructorReturn3['default'])(this, (WhiteSpace.__proto__ || Object.getPrototypeOf(WhiteSpace)).apply(this, arguments));
    }

    (0, _createClass3['default'])(WhiteSpace, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                className = _props.className,
                style = _props.style,
                onClick = _props.onClick;

            var wrapCls = (0, _classnames2['default'])(prefixCls, prefixCls + '-' + size, className);
            return React.createElement('div', { className: wrapCls, style: style, onClick: onClick });
        }
    }]);
    return WhiteSpace;
}(React.Component);

exports['default'] = WhiteSpace;

WhiteSpace.defaultProps = {
    prefixCls: 'am-whitespace',
    size: 'md'
};
module.exports = exports['default'];

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(893);

/***/ }),

/***/ 877:
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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var WingBlank = function (_React$Component) {
    (0, _inherits3['default'])(WingBlank, _React$Component);

    function WingBlank() {
        (0, _classCallCheck3['default'])(this, WingBlank);
        return (0, _possibleConstructorReturn3['default'])(this, (WingBlank.__proto__ || Object.getPrototypeOf(WingBlank)).apply(this, arguments));
    }

    (0, _createClass3['default'])(WingBlank, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                className = _props.className,
                children = _props.children,
                style = _props.style;

            var wrapCls = (0, _classnames2['default'])(prefixCls, prefixCls + '-' + size, className);
            return React.createElement(
                'div',
                { className: wrapCls, style: style },
                children
            );
        }
    }]);
    return WingBlank;
}(React.Component);

exports['default'] = WingBlank;

WingBlank.defaultProps = {
    prefixCls: 'am-wingblank',
    size: 'lg'
};
module.exports = exports['default'];

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(903);

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Flex = __webpack_require__(905);

var _Flex2 = _interopRequireDefault(_Flex);

var _FlexItem = __webpack_require__(906);

var _FlexItem2 = _interopRequireDefault(_FlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Flex2['default'].Item = _FlexItem2['default'];
exports['default'] = _Flex2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 905:
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

var Flex = function (_React$Component) {
    (0, _inherits3['default'])(Flex, _React$Component);

    function Flex() {
        (0, _classCallCheck3['default'])(this, Flex);
        return (0, _possibleConstructorReturn3['default'])(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Flex, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                direction = _a.direction,
                wrap = _a.wrap,
                justify = _a.justify,
                align = _a.align,
                alignContent = _a.alignContent,
                className = _a.className,
                children = _a.children,
                prefixCls = _a.prefixCls,
                style = _a.style,
                restProps = __rest(_a, ["direction", "wrap", "justify", "align", "alignContent", "className", "children", "prefixCls", "style"]);
            var wrapCls = (0, _classnames3['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-dir-row', direction === 'row'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-dir-row-reverse', direction === 'row-reverse'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-dir-column', direction === 'column'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-dir-column-reverse', direction === 'column-reverse'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-nowrap', wrap === 'nowrap'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-wrap', wrap === 'wrap'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-wrap-reverse', wrap === 'wrap-reverse'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-start', justify === 'start'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-end', justify === 'end'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-center', justify === 'center'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-between', justify === 'between'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-around', justify === 'around'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-start', align === 'start'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-center', align === 'center'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-end', align === 'end'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-baseline', align === 'baseline'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-stretch', align === 'stretch'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-start', alignContent === 'start'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-end', alignContent === 'end'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-center', alignContent === 'center'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-between', alignContent === 'between'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-around', alignContent === 'around'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-stretch', alignContent === 'stretch'), _classnames));
            return React.createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                children
            );
        }
    }]);
    return Flex;
}(React.Component);

exports['default'] = Flex;

Flex.defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center'
};
module.exports = exports['default'];

/***/ }),

/***/ 906:
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

var FlexItem = function (_React$Component) {
    (0, _inherits3['default'])(FlexItem, _React$Component);

    function FlexItem() {
        (0, _classCallCheck3['default'])(this, FlexItem);
        return (0, _possibleConstructorReturn3['default'])(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(FlexItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                style = _a.style,
                restProps = __rest(_a, ["children", "className", "prefixCls", "style"]);
            var wrapCls = (0, _classnames2['default'])(prefixCls + '-item', className);
            return React.createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                children
            );
        }
    }]);
    return FlexItem;
}(React.Component);

exports['default'] = FlexItem;

FlexItem.defaultProps = {
    prefixCls: 'am-flexbox'
};
module.exports = exports['default'];

/***/ })

}]);
//# sourceMappingURL=../map/vendors~userBinding.a5b311fa.map