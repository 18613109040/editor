(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(1047);

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var React = _interopRequireWildcard(__webpack_require__(2));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _default(ComposedComponent) {
  var _a;

  return _a =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_a, _React$Component);

    function _a() {
      var _this;

      _classCallCheck(this, _a);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_a).apply(this, arguments));

      _this.getValue = function () {
        var _this$props = _this.props,
            children = _this$props.children,
            selectedValue = _this$props.selectedValue;

        if (selectedValue && selectedValue.length) {
          return selectedValue;
        } else {
          if (!children) {
            return [];
          }

          return React.Children.map(children, function (c) {
            var cc = React.Children.toArray(c.children || c.props.children);
            return cc && cc[0] && cc[0].props.value;
          });
        }
      };

      _this.onChange = function (i, v, cb) {
        var value = _this.getValue().concat();

        value[i] = v;

        if (cb) {
          cb(value, i);
        }
      };

      _this.onValueChange = function (i, v) {
        _this.onChange(i, v, _this.props.onValueChange);
      };

      _this.onScrollChange = function (i, v) {
        _this.onChange(i, v, _this.props.onScrollChange);
      };

      return _this;
    }

    _createClass(_a, [{
      key: "render",
      value: function render() {
        return React.createElement(ComposedComponent, _extends({}, this.props, {
          getValue: this.getValue,
          onValueChange: this.onValueChange,
          onScrollChange: this.props.onScrollChange && this.onScrollChange
        }));
      }
    }]);

    return _a;
  }(React.Component), _a.defaultProps = {
    prefixCls: 'rmc-multi-picker',
    onValueChange: function onValueChange() {}
  }, _a;
}

;

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var React = _interopRequireWildcard(__webpack_require__(2));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

;

var Item = function Item(_props) {
  return null;
};

function _default(ComposedComponent) {
  var _a;

  return _a =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_a, _React$Component);

    function _a() {
      var _this;

      _classCallCheck(this, _a);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_a).apply(this, arguments));

      _this.select = function (value, itemHeight, scrollTo) {
        var children = React.Children.toArray(_this.props.children);

        for (var i = 0, len = children.length; i < len; i++) {
          if (children[i].props.value === value) {
            _this.selectByIndex(i, itemHeight, scrollTo);

            return;
          }
        }

        _this.selectByIndex(0, itemHeight, scrollTo);
      };

      _this.doScrollingComplete = function (top, itemHeight, fireValueChange) {
        var children = React.Children.toArray(_this.props.children);

        var index = _this.computeChildIndex(top, itemHeight, children.length);

        var child = children[index];

        if (child) {
          fireValueChange(child.props.value);
        } else if (console.warn) {
          console.warn('child not found', children, index);
        }
      };

      return _this;
    }

    _createClass(_a, [{
      key: "selectByIndex",
      value: function selectByIndex(index, itemHeight, zscrollTo) {
        if (index < 0 || index >= React.Children.count(this.props.children) || !itemHeight) {
          return;
        }

        zscrollTo(index * itemHeight);
      }
    }, {
      key: "computeChildIndex",
      value: function computeChildIndex(top, itemHeight, childrenLength) {
        var index = Math.round(top / itemHeight);
        return Math.min(index, childrenLength - 1);
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(ComposedComponent, _extends({}, this.props, {
          doScrollingComplete: this.doScrollingComplete,
          computeChildIndex: this.computeChildIndex,
          select: this.select
        }));
      }
    }]);

    return _a;
  }(React.Component), _a.Item = Item, _a;
}

/***/ }),

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopupMixin;

var React = _interopRequireWildcard(__webpack_require__(2));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function PopupMixin(getModal, platformProps) {
  var _a;

  return _a =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_a, _React$Component);

    function _a(props) {
      var _this;

      _classCallCheck(this, _a);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_a).call(this, props));

      _this.onPickerChange = function (pickerValue) {
        if (_this.state.pickerValue !== pickerValue) {
          _this.setState({
            pickerValue: pickerValue
          });

          var _this$props = _this.props,
              picker = _this$props.picker,
              pickerValueChangeProp = _this$props.pickerValueChangeProp;

          if (picker && picker.props[pickerValueChangeProp]) {
            picker.props[pickerValueChangeProp](pickerValue);
          }
        }
      };

      _this.saveRef = function (picker) {
        _this.picker = picker;
      };

      _this.onTriggerClick = function (e) {
        var child = _this.props.children;
        var childProps = child.props || {};

        if (childProps[_this.props.triggerType]) {
          childProps[_this.props.triggerType](e);
        }

        _this.fireVisibleChange(!_this.state.visible);
      };

      _this.onOk = function () {
        _this.props.onOk(_this.picker && _this.picker.getValue());

        _this.fireVisibleChange(false);
      };

      _this.getContent = function () {
        if (_this.props.picker) {
          var _React$cloneElement;

          var pickerValue = _this.state.pickerValue;

          if (pickerValue === null) {
            pickerValue = _this.props.value;
          }

          return React.cloneElement(_this.props.picker, (_React$cloneElement = {}, _defineProperty(_React$cloneElement, _this.props.pickerValueProp, pickerValue), _defineProperty(_React$cloneElement, _this.props.pickerValueChangeProp, _this.onPickerChange), _defineProperty(_React$cloneElement, "ref", _this.saveRef), _React$cloneElement));
        } else {
          return _this.props.content;
        }
      };

      _this.onDismiss = function () {
        _this.props.onDismiss();

        _this.fireVisibleChange(false);
      };

      _this.hide = function () {
        _this.fireVisibleChange(false);
      };

      _this.state = {
        pickerValue: 'value' in _this.props ? _this.props.value : null,
        visible: _this.props.visible || false
      };
      return _this;
    }

    _createClass(_a, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
          this.setState({
            pickerValue: nextProps.value
          });
        }

        if ('visible' in nextProps) {
          this.setVisibleState(nextProps.visible);
        }
      }
    }, {
      key: "setVisibleState",
      value: function setVisibleState(visible) {
        this.setState({
          visible: visible
        });

        if (!visible) {
          this.setState({
            pickerValue: null
          });
        }
      }
    }, {
      key: "fireVisibleChange",
      value: function fireVisibleChange(visible) {
        if (this.state.visible !== visible) {
          if (!('visible' in this.props)) {
            this.setVisibleState(visible);
          }

          this.props.onVisibleChange(visible);
        }
      }
    }, {
      key: "getRender",
      value: function getRender() {
        var props = this.props;
        var children = props.children;

        if (!children) {
          return getModal(props, this.state.visible, {
            getContent: this.getContent,
            onOk: this.onOk,
            hide: this.hide,
            onDismiss: this.onDismiss
          });
        }

        var _this$props2 = this.props,
            WrapComponent = _this$props2.WrapComponent,
            disabled = _this$props2.disabled;
        var child = children;
        var newChildProps = {};

        if (!disabled) {
          newChildProps[props.triggerType] = this.onTriggerClick;
        }

        return React.createElement(WrapComponent, {
          style: props.wrapStyle
        }, React.cloneElement(child, newChildProps), getModal(props, this.state.visible, {
          getContent: this.getContent,
          onOk: this.onOk,
          hide: this.hide,
          onDismiss: this.onDismiss
        }));
      }
    }, {
      key: "render",
      value: function render() {
        return this.getRender();
      }
    }]);

    return _a;
  }(React.Component), _a.defaultProps = _extends({
    onVisibleChange: function onVisibleChange(_) {},
    okText: 'Ok',
    dismissText: 'Dismiss',
    title: '',
    onOk: function onOk(_) {},
    onDismiss: function onDismiss() {}
  }, platformProps), _a;
}

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

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

exports.getComponentLocale = getComponentLocale;
exports.getLocaleCode = getLocaleCode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getComponentLocale(props, context, componentName, getDefaultLocale) {
    var locale = {};
    if (context && context.antLocale && context.antLocale[componentName]) {
        locale = context.antLocale[componentName];
    } else {
        var defaultLocale = getDefaultLocale();
        // TODO: make default lang of antd be English
        // https://github.com/ant-design/ant-design/issues/6334
        locale = defaultLocale['default'] || defaultLocale;
    }
    var result = (0, _extends3['default'])({}, locale);
    if (props.locale) {
        result = (0, _extends3['default'])({}, result, props.locale);
        if (props.locale.lang) {
            result.lang = (0, _extends3['default'])({}, locale.lang, props.locale.lang);
        }
    }
    return result;
}
function getLocaleCode(context) {
    var localeCode = context.antLocale && context.antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (context.antLocale && context.antLocale.exist && !localeCode) {
        return 'zh-cn';
    }
    return localeCode;
}

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(97));

var _MultiPickerMixin = _interopRequireDefault(__webpack_require__(1050));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MultiPicker = function MultiPicker(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      rootNativeProps = props.rootNativeProps,
      children = props.children,
      style = props.style;
  var selectedValue = props.getValue();
  var colElements = React.Children.map(children, function (col, i) {
    return React.cloneElement(col, {
      selectedValue: selectedValue[i],
      onValueChange: function onValueChange() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return props.onValueChange.apply(props, [i].concat(args));
      },
      onScrollChange: props.onScrollChange && function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return props.onScrollChange.apply(props, [i].concat(args));
      }
    });
  });
  return React.createElement("div", _extends({}, rootNativeProps, {
    style: style,
    className: (0, _classnames["default"])(className, prefixCls)
  }), colElements);
};

var _default = (0, _MultiPickerMixin["default"])(MultiPicker);

exports["default"] = _default;

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(97));

var _PickerMixin = _interopRequireDefault(__webpack_require__(1051));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

;

var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));

    _this.scrollHanders = function () {
      var scrollY = -1;
      var lastY = 0;
      var startY = 0;
      var scrollDisabled = false;
      var isMoving = false;

      var setTransform = function setTransform(nodeStyle, value) {
        nodeStyle.transform = value;
        nodeStyle.webkitTransform = value;
      };

      var setTransition = function setTransition(nodeStyle, value) {
        nodeStyle.transition = value;
        nodeStyle.webkitTransition = value;
      };

      var scrollTo = function scrollTo(_x, y) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .3;

        if (scrollY !== y) {
          scrollY = y;

          if (time && !_this.props.noAnimate) {
            setTransition(_this.contentRef.style, "cubic-bezier(0,0,0.2,1.15) ".concat(time, "s"));
          }

          setTransform(_this.contentRef.style, "translate3d(0,".concat(-y, "px,0)"));
          setTimeout(function () {
            _this.scrollingComplete();

            if (_this.contentRef) {
              setTransition(_this.contentRef.style, '');
            }
          }, +time * 1000);
        }
      };

      var Velocity = function () {
        var minInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
        var maxInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var _time = 0;
        var _y = 0;
        var _velocity = 0;
        var recorder = {
          record: function record(y) {
            var now = +new Date();
            _velocity = (y - _y) / (now - _time);

            if (now - _time >= minInterval) {
              _velocity = now - _time <= maxInterval ? _velocity : 0;
              _y = y;
              _time = now;
            }
          },
          getVelocity: function getVelocity(y) {
            if (y !== _y) {
              recorder.record(y);
            }

            return _velocity;
          }
        };
        return recorder;
      }();

      var onFinish = function onFinish() {
        isMoving = false;
        var targetY = scrollY;
        var height = (_this.props.children.length - 1) * _this.itemHeight;
        var time = .3;
        var velocity = Velocity.getVelocity(targetY) * 4;

        if (velocity) {
          targetY = velocity * 40 + targetY;
          time = Math.abs(velocity) * .1;
        }

        if (targetY % _this.itemHeight !== 0) {
          targetY = Math.round(targetY / _this.itemHeight) * _this.itemHeight;
        }

        if (targetY < 0) {
          targetY = 0;
        } else if (targetY > height) {
          targetY = height;
        }

        scrollTo(0, targetY, time < .3 ? .3 : time);

        _this.onScrollChange();
      };

      var onStart = function onStart(y) {
        if (scrollDisabled) {
          return;
        }

        isMoving = true;
        startY = y;
        lastY = scrollY;
      };

      var onMove = function onMove(y) {
        if (scrollDisabled || !isMoving) {
          return;
        }

        scrollY = lastY - y + startY;
        Velocity.record(scrollY);

        _this.onScrollChange();

        setTransform(_this.contentRef.style, "translate3d(0,".concat(-scrollY, "px,0)"));
      };

      return {
        touchstart: function touchstart(evt) {
          return onStart(evt.touches[0].pageY);
        },
        mousedown: function mousedown(evt) {
          return onStart(evt.pageY);
        },
        touchmove: function touchmove(evt) {
          evt.preventDefault();
          onMove(evt.touches[0].pageY);
        },
        mousemove: function mousemove(evt) {
          evt.preventDefault();
          onMove(evt.pageY);
        },
        touchend: function touchend() {
          return onFinish();
        },
        touchcancel: function touchcancel() {
          return onFinish();
        },
        mouseup: function mouseup() {
          return onFinish();
        },
        getValue: function getValue() {
          return scrollY;
        },
        scrollTo: scrollTo,
        setDisabled: function setDisabled() {
          var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          scrollDisabled = disabled;
        }
      };
    }();

    _this.scrollTo = function (top) {
      _this.scrollHanders.scrollTo(0, top);
    };

    _this.scrollToWithoutAnimation = function (top) {
      _this.scrollHanders.scrollTo(0, top, 0);
    };

    _this.fireValueChange = function (selectedValue) {
      if (selectedValue !== _this.state.selectedValue) {
        if (!('selectedValue' in _this.props)) {
          _this.setState({
            selectedValue: selectedValue
          });
        }

        if (_this.props.onValueChange) {
          _this.props.onValueChange(selectedValue);
        }
      }
    };

    _this.onScrollChange = function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        var children = React.Children.toArray(_this.props.children);

        var index = _this.props.computeChildIndex(top, _this.itemHeight, children.length);

        if (_this.scrollValue !== index) {
          _this.scrollValue = index;
          var child = children[index];

          if (child && _this.props.onScrollChange) {
            _this.props.onScrollChange(child.props.value);
          } else if (!child && console.warn) {
            console.warn('child not found', children, index);
          }
        }
      }
    };

    _this.scrollingComplete = function () {
      var top = _this.scrollHanders.getValue();

      if (top >= 0) {
        _this.props.doScrollingComplete(top, _this.itemHeight, _this.fireValueChange);
      }
    };

    var selectedValueState;
    var _this$props = _this.props,
        selectedValue = _this$props.selectedValue,
        defaultSelectedValue = _this$props.defaultSelectedValue;

    if (selectedValue !== undefined) {
      selectedValueState = selectedValue;
    } else if (defaultSelectedValue !== undefined) {
      selectedValueState = defaultSelectedValue;
    } else {
      var children = React.Children.toArray(_this.props.children);
      selectedValueState = children && children[0] && children[0].props.value;
    }

    _this.state = {
      selectedValue: selectedValueState
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var contentRef = this.contentRef,
          indicatorRef = this.indicatorRef,
          maskRef = this.maskRef,
          rootRef = this.rootRef;
      var rootHeight = rootRef.getBoundingClientRect().height; // https://github.com/react-component/m-picker/issues/18

      var itemHeight = this.itemHeight = indicatorRef.getBoundingClientRect().height;
      var num = Math.floor(rootHeight / itemHeight);

      if (num % 2 === 0) {
        num--;
      }

      num--;
      num /= 2;
      contentRef.style.padding = "".concat(itemHeight * num, "px 0");
      indicatorRef.style.top = "".concat(itemHeight * num, "px");
      maskRef.style.backgroundSize = "100% ".concat(itemHeight * num, "px");
      this.scrollHanders.setDisabled(this.props.disabled);
      this.props.select(this.state.selectedValue, this.itemHeight, this.scrollTo);
      var passiveSupported = this.passiveSupported();
      var willPreventDefault = passiveSupported ? {
        passive: false
      } : false;
      var willNotPreventDefault = passiveSupported ? {
        passive: true
      } : false;
      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          var pd = key.indexOf('move') >= 0 ? willPreventDefault : willNotPreventDefault;
          rootRef.addEventListener(key, _this2.scrollHanders[key], pd);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.scrollHanders).forEach(function (key) {
        if (key.indexOf('touch') === 0 || key.indexOf('mouse') === 0) {
          _this3.rootRef.removeEventListener(key, _this3.scrollHanders[key]);
        }
      });
    }
  }, {
    key: "passiveSupported",
    value: function passiveSupported() {
      var passiveSupported = false;

      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', null, options);
      } catch (err) {}

      return passiveSupported;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this4 = this;

      if ('selectedValue' in nextProps) {
        if (this.state.selectedValue !== nextProps.selectedValue) {
          this.setState({
            selectedValue: nextProps.selectedValue
          }, function () {
            _this4.props.select(nextProps.selectedValue, _this4.itemHeight, nextProps.noAnimate ? _this4.scrollToWithoutAnimation : _this4.scrollTo);
          });
        }
      }

      this.scrollHanders.setDisabled(nextProps.disabled);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.selectedValue !== nextState.selectedValue || this.props.children !== nextProps.children;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.select(this.state.selectedValue, this.itemHeight, this.scrollToWithoutAnimation);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if ('selectedValue' in this.props) {
        return this.props.selectedValue;
      }

      var children = React.Children.toArray(this.props.children);
      return children && children[0] && children[0].props.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _pickerCls,
          _this5 = this;

      var props = this.props;
      var prefixCls = props.prefixCls,
          itemStyle = props.itemStyle,
          indicatorStyle = props.indicatorStyle,
          _props$indicatorClass = props.indicatorClassName,
          indicatorClassName = _props$indicatorClass === void 0 ? '' : _props$indicatorClass,
          children = props.children;
      var selectedValue = this.state.selectedValue;
      var itemClassName = "".concat(prefixCls, "-item");
      var selectedItemClassName = "".concat(itemClassName, " ").concat(prefixCls, "-item-selected");

      var map = function map(item) {
        var _item$props = item.props,
            _item$props$className = _item$props.className,
            className = _item$props$className === void 0 ? '' : _item$props$className,
            style = _item$props.style,
            value = _item$props.value;
        return React.createElement("div", {
          style: _extends({}, itemStyle, style),
          className: "".concat(selectedValue === value ? selectedItemClassName : itemClassName, " ").concat(className),
          key: value
        }, item.children || item.props.children);
      }; // compatibility for preact


      var items = React.Children ? React.Children.map(children, map) : [].concat(children).map(map);
      var pickerCls = (_pickerCls = {}, _defineProperty(_pickerCls, props.className, !!props.className), _defineProperty(_pickerCls, prefixCls, true), _pickerCls);
      return React.createElement("div", {
        className: (0, _classnames["default"])(pickerCls),
        ref: function ref(el) {
          return _this5.rootRef = el;
        },
        style: this.props.style
      }, React.createElement("div", {
        className: "".concat(prefixCls, "-mask"),
        ref: function ref(el) {
          return _this5.maskRef = el;
        }
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-indicator ").concat(indicatorClassName),
        ref: function ref(el) {
          return _this5.indicatorRef = el;
        },
        style: indicatorStyle
      }), React.createElement("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(el) {
          return _this5.contentRef = el;
        }
      }, items));
    }
  }]);

  return Picker;
}(React.Component);

Picker.defaultProps = {
  prefixCls: 'rmc-picker'
};

var _default = (0, _PickerMixin["default"])(Picker);

exports["default"] = _default;

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1046);

__webpack_require__(1048);

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(2));

var _rmcDialog = _interopRequireDefault(__webpack_require__(969));

var _PopupMixin = _interopRequireDefault(__webpack_require__(1054));

var _rmcFeedback = _interopRequireDefault(__webpack_require__(852));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var getModal = function getModal(props, visible, _ref) {
  var getContent = _ref.getContent,
      hide = _ref.hide,
      onDismiss = _ref.onDismiss,
      onOk = _ref.onOk;

  if (!visible) {
    return null;
  }

  var prefixCls = props.prefixCls;
  return React.createElement(_rmcDialog["default"], {
    prefixCls: "".concat(prefixCls),
    className: props.className || '',
    visible: true,
    closable: false,
    transitionName: props.transitionName || props.popupTransitionName,
    maskTransitionName: props.maskTransitionName,
    onClose: hide,
    style: props.style
  }, React.createElement("div", null, React.createElement("div", {
    className: "".concat(prefixCls, "-header")
  }, React.createElement(_rmcFeedback["default"], {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-left"),
    onClick: onDismiss
  }, props.dismissText)), React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-title")
  }, props.title), React.createElement(_rmcFeedback["default"], {
    activeClassName: "".concat(prefixCls, "-item-active")
  }, React.createElement("div", {
    className: "".concat(prefixCls, "-item ").concat(prefixCls, "-header-right"),
    onClick: onOk
  }, props.okText))), getContent()));
};

var _default = (0, _PopupMixin["default"])(getModal, {
  prefixCls: 'rmc-picker-popup',
  WrapComponent: 'span',
  triggerType: 'onClick',
  pickerValueProp: 'selectedValue',
  pickerValueChangeProp: 'onValueChange'
});

exports["default"] = _default;

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

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

// EXTERNAL MODULE: ./node_modules/_react-dom@16.13.1@react-dom/index.js
var _react_dom_16_13_1_react_dom = __webpack_require__(84);
var _react_dom_16_13_1_react_dom_default = /*#__PURE__*/__webpack_require__.n(_react_dom_16_13_1_react_dom);

// EXTERNAL MODULE: ./node_modules/_rc-animate@2.11.1@rc-animate/es/Animate.js + 6 modules
var Animate = __webpack_require__(394);

// CONCATENATED MODULE: ./node_modules/_rmc-dialog@1.1.1@rmc-dialog/es/LazyRenderBox.js







var LazyRenderBox_LazyRenderBox = function (_React$Component) {
    inherits_default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        classCallCheck_default()(this, LazyRenderBox);

        return possibleConstructorReturn_default()(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
    }

    createClass_default()(LazyRenderBox, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
            return !!nextProps.hiddenClassName || !!nextProps.visible;
        }
    }, {
        key: "render",
        value: function render() {
            var className = this.props.className;
            if (!!this.props.hiddenClassName && !this.props.visible) {
                className += " " + this.props.hiddenClassName;
            }
            var props = extends_default()({}, this.props);
            delete props.hiddenClassName;
            delete props.visible;
            props.className = className;
            return _react_16_13_1_react_default.a.createElement("div", extends_default()({}, props));
        }
    }]);

    return LazyRenderBox;
}(_react_16_13_1_react_default.a.Component);

/* harmony default export */ var es_LazyRenderBox = (LazyRenderBox_LazyRenderBox);
// CONCATENATED MODULE: ./node_modules/_rmc-dialog@1.1.1@rmc-dialog/es/Dialog.js








function noop() {}

var Dialog_Dialog = function (_React$Component) {
    inherits_default()(Dialog, _React$Component);

    function Dialog() {
        classCallCheck_default()(this, Dialog);

        var _this = possibleConstructorReturn_default()(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));

        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var footer = void 0;
            if (props.footer) {
                footer = _react_16_13_1_react_default.a.createElement("div", { className: prefixCls + '-footer', ref: function ref(el) {
                        return _this.footerRef = el;
                    } }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = _react_16_13_1_react_default.a.createElement("div", { className: prefixCls + '-header', ref: function ref(el) {
                        return _this.headerRef = el;
                    } }, _react_16_13_1_react_default.a.createElement("div", { className: prefixCls + '-title' }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = _react_16_13_1_react_default.a.createElement("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, _react_16_13_1_react_default.a.createElement("span", { className: prefixCls + '-close-x' }));
            }
            var transitionName = _this.getTransitionName();
            var dialogElement = _react_16_13_1_react_default.a.createElement(es_LazyRenderBox, { key: "dialog-element", role: "document", ref: function ref(el) {
                    return _this.dialogRef = el;
                }, style: props.style || {}, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, _react_16_13_1_react_default.a.createElement("div", { className: prefixCls + '-content' }, closer, header, _react_16_13_1_react_default.a.createElement("div", { className: prefixCls + '-body', style: props.bodyStyle, ref: function ref(el) {
                    return _this.bodyRef = el;
                } }, props.children), footer));
            return _react_16_13_1_react_default.a.createElement(Animate["a" /* default */], { key: "dialog", showProp: "visible", onAppear: _this.onAnimateAppear, onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, dialogElement);
        };
        _this.onAnimateAppear = function () {
            document.body.style.overflow = 'hidden';
        };
        _this.onAnimateLeave = function () {
            document.body.style.overflow = '';
            if (_this.wrapRef) {
                _this.wrapRef.style.display = 'none';
            }
            if (_this.props.onAnimateLeave) {
                _this.props.onAnimateLeave();
            }
            if (_this.props.afterClose) {
                _this.props.afterClose();
            }
        };
        _this.close = function (e) {
            if (_this.props.onClose) {
                _this.props.onClose(e);
            }
        };
        _this.onMaskClick = function (e) {
            if (e.target === e.currentTarget) {
                _this.close(e);
            }
        };
        return _this;
    }

    createClass_default()(Dialog, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // fix: react@16 no dismissing animation
            document.body.style.overflow = '';
            if (this.wrapRef) {
                this.wrapRef.style.display = 'none';
            }
        }
    }, {
        key: 'getZIndexStyle',
        value: function getZIndexStyle() {
            var style = {};
            var props = this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        }
    }, {
        key: 'getWrapStyle',
        value: function getWrapStyle() {
            var wrapStyle = this.props.wrapStyle || {};
            return extends_default()({}, this.getZIndexStyle(), wrapStyle);
        }
    }, {
        key: 'getMaskStyle',
        value: function getMaskStyle() {
            var maskStyle = this.props.maskStyle || {};
            return extends_default()({}, this.getZIndexStyle(), maskStyle);
        }
    }, {
        key: 'getMaskTransitionName',
        value: function getMaskTransitionName() {
            var props = this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        }
    }, {
        key: 'getTransitionName',
        value: function getTransitionName() {
            var props = this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        }
    }, {
        key: 'getMaskElement',
        value: function getMaskElement() {
            var props = this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = this.getMaskTransitionName();
                maskElement = _react_16_13_1_react_default.a.createElement(es_LazyRenderBox, extends_default()({ style: this.getMaskStyle(), key: "mask-element", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = _react_16_13_1_react_default.a.createElement(Animate["a" /* default */], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var prefixCls = props.prefixCls,
                maskClosable = props.maskClosable;

            var style = this.getWrapStyle();
            if (props.visible) {
                style.display = null;
            }
            return _react_16_13_1_react_default.a.createElement("div", null, this.getMaskElement(), _react_16_13_1_react_default.a.createElement("div", extends_default()({ className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: function ref(el) {
                    return _this2.wrapRef = el;
                }, onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title, style: style }, props.wrapProps), this.getDialogElement()));
        }
    }]);

    return Dialog;
}(_react_16_13_1_react_default.a.Component);

/* harmony default export */ var es_Dialog = (Dialog_Dialog);

Dialog_Dialog.defaultProps = {
    afterClose: noop,
    className: '',
    mask: true,
    visible: false,
    closable: true,
    maskClosable: true,
    prefixCls: 'rmc-dialog',
    onClose: noop
};
// CONCATENATED MODULE: ./node_modules/_rmc-dialog@1.1.1@rmc-dialog/es/DialogWrap.js








function DialogWrap_noop() {}
var IS_REACT_16 = !!_react_dom_16_13_1_react_dom_default.a.createPortal;
var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var DialogWrap_DialogWrap = function (_React$Component) {
    inherits_default()(DialogWrap, _React$Component);

    function DialogWrap() {
        classCallCheck_default()(this, DialogWrap);

        var _this = possibleConstructorReturn_default()(this, (DialogWrap.__proto__ || Object.getPrototypeOf(DialogWrap)).apply(this, arguments));

        _this.saveRef = function (node) {
            if (IS_REACT_16) {
                _this._component = node;
            }
        };
        _this.getComponent = function (visible) {
            var props = extends_default()({}, _this.props);
            ['visible', 'onAnimateLeave'].forEach(function (key) {
                if (props.hasOwnProperty(key)) {
                    delete props[key];
                }
            });
            return _react_16_13_1_react_default.a.createElement(es_Dialog, extends_default()({}, props, { visible: visible, onAnimateLeave: _this.removeContainer, ref: _this.saveRef }));
        };
        _this.removeContainer = function () {
            if (_this.container) {
                if (!IS_REACT_16) {
                    _react_dom_16_13_1_react_dom_default.a.unmountComponentAtNode(_this.container);
                }
                _this.container.parentNode.removeChild(_this.container);
                _this.container = null;
            }
        };
        _this.getContainer = function () {
            if (!_this.container) {
                var container = document.createElement('div');
                var containerId = _this.props.prefixCls + '-container-' + new Date().getTime();
                container.setAttribute('id', containerId);
                document.body.appendChild(container);
                _this.container = container;
            }
            return _this.container;
        };
        return _this;
    }

    createClass_default()(DialogWrap, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.visible) {
                this.componentDidUpdate();
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(_ref) {
            var visible = _ref.visible;

            return !!(this.props.visible || visible);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.visible) {
                if (!IS_REACT_16) {
                    this.renderDialog(false);
                } else {
                    // TODO for react@16 createPortal animation
                    this.removeContainer();
                }
            } else {
                this.removeContainer();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!IS_REACT_16) {
                this.renderDialog(this.props.visible);
            }
        }
    }, {
        key: 'renderDialog',
        value: function renderDialog(visible) {
            _react_dom_16_13_1_react_dom_default.a.unstable_renderSubtreeIntoContainer(this, this.getComponent(visible), this.getContainer());
        }
    }, {
        key: 'render',
        value: function render() {
            if (!CAN_USE_DOM) {
                return null;
            }
            var visible = this.props.visible;

            if (IS_REACT_16 && (visible || this._component)) {
                return _react_dom_16_13_1_react_dom_default.a.createPortal(this.getComponent(visible), this.getContainer());
            }
            return null;
        }
    }]);

    return DialogWrap;
}(_react_16_13_1_react_default.a.Component);

/* harmony default export */ var es_DialogWrap = __webpack_exports__["default"] = (DialogWrap_DialogWrap);

DialogWrap_DialogWrap.defaultProps = {
    visible: false,
    prefixCls: 'rmc-dialog',
    onClose: DialogWrap_noop
};

/***/ })

}]);
//# sourceMappingURL=../map/vendors~alarmStatistics~meetingManagement~meetingManagementDetail~meetingManagementSelectRoom~meetin~6ad9d173.dc80ca72.map