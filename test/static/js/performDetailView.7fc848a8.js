(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 1250:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// EXTERNAL MODULE: ./src/components/EasyNarBar/EasyNarBar.tsx
var EasyNarBar = __webpack_require__(854);

// CONCATENATED MODULE: ./src/pages/Perform/PerformanceManagementDetail/performDetailView/item.tsx



__webpack_require__(1250);

var PerformDetailViewItem = Object(mobxreact_esm["c" /* observer */])(function (props) {
  var _props$model = props.model,
      devname = _props$model.devname,
      areaandposition = _props$model.areaandposition,
      logtime = _props$model.logtime;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "perform_detail_view_item"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "perform_detail_view_item_deviceName"
  }, devname), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "perform_detail_view_item_deviceLocation"
  }, areaandposition ? areaandposition : "-"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "perform_detail_view_item_operateTime"
  }, logtime)));
});
/* harmony default export */ var item = (PerformDetailViewItem);
// EXTERNAL MODULE: ./node_modules/_react-router@5.2.0@react-router/esm/react-router.js
var react_router = __webpack_require__(24);

// EXTERNAL MODULE: ./src/components/ListView/listview.tsx
var listview = __webpack_require__(888);

// CONCATENATED MODULE: ./src/pages/Perform/PerformanceManagementDetail/performDetailView/index.tsx



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var PerformDetailView = Object(mobxreact_esm["c" /* observer */])(function (props) {
  var location = Object(react_router["g" /* useLocation */])();
  var history = Object(react_router["f" /* useHistory */])();

  var _useState = Object(_react_16_13_1_react["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _props$store = props.store,
      dataSource = _props$store.dataSource,
      initStore = _props$store.initStore,
      clearData = _props$store.clearData,
      isLoading = _props$store.isLoading,
      hashMore = _props$store.hashMore,
      performDetailViewFetch = _props$store.performDetailViewFetch,
      onRefresh = _props$store.onRefresh;
  Object(_react_16_13_1_react["useEffect"])(function () {
    var state = location.state;

    if (state) {
      clearData();
      initStore(state);
      var NarBar = document.querySelector(".am-navbar");
      var Height = Math.max(document.documentElement.clientHeight, document.body.clientHeight);
      Height = Height - (NarBar ? NarBar.offsetHeight : 0);
      setHeight(Height);
    }
  }, []);

  var onEndReached = function onEndReached() {
    if (!isLoading && hashMore) {
      performDetailViewFetch();
    }
  };

  var separator = function separator(sectionID, rowID) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      key: "".concat(sectionID, "-").concat(rowID),
      style: {
        backgroundColor: "#F5F5F9",
        width: "100%",
        height: "0",
        paddingLeft: "34px",
        borderBottom: "1px solid #ECECED"
      }
    });
  };

  var onLeftClick = function onLeftClick() {
    history.goBack();
  };

  var renderRow = function renderRow(rowData) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(item, {
      model: rowData
    });
  };

  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(EasyNarBar["a" /* default */], {
    mainContent: "\u5C65\u804C\u8BE6\u60C5",
    leftContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
      type: "left"
    }),
    onLeftClick: onLeftClick
  }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(listview["a" /* default */], {
    dataSource: dataSource,
    renderRow: renderRow,
    separator: separator,
    pageSize: 20,
    onEndReached: onEndReached,
    height: height,
    isLoading: isLoading,
    hasMore: hashMore
  }));
});
/* harmony default export */ var performDetailView = __webpack_exports__["default"] = (Object(mobxreact_esm["b" /* inject */])(function (stores) {
  return {
    store: stores.performDetailViewStore
  };
})(PerformDetailView));

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

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_mobile_lib_pull_to_refresh_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(889);
/* harmony import */ var antd_mobile_lib_pull_to_refresh_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_pull_to_refresh_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_pull_to_refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);
/* harmony import */ var antd_mobile_lib_pull_to_refresh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_pull_to_refresh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(868);
/* harmony import */ var antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(869);
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ListViewComponent = function ListViewComponent(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(new antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_3___default.a.DataSource({
    rowHasChanged: function rowHasChanged(row1, row2) {
      return row1 !== row2;
    }
  })),
      _useState2 = _slicedToArray(_useState, 2),
      dataSource = _useState2[0],
      setdataSource = _useState2[1];

  var onEndReached = function onEndReached(event) {
    if (hasMore && !isLoading) {
      props.onEndReached(event);
    }
  };

  var onRefresh = function onRefresh() {
    props.onRefresh(event);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setdataSource(dataSource.cloneWithRows(props.dataSource));
  }, [props.dataSource]);
  var hasMore = props.hasMore,
      isLoading = props.isLoading;
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_3___default.a, {
      dataSource: dataSource,
      renderFooter: function renderFooter() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
          style: {
            padding: 30,
            textAlign: "center"
          }
        }, !hasMore ? "没有更多数据了" : isLoading ? "正在加载中..." : "");
      },
      style: {
        height: props.height
      },
      renderRow: props.renderRow,
      renderSeparator: props.separator,
      className: "am-list",
      pageSize: props.pageSize,
      scrollRenderAheadDistance: 500,
      onEndReached: onEndReached,
      onEndReachedThreshold: 10,
      pullToRefresh: props.onRefresh && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_pull_to_refresh__WEBPACK_IMPORTED_MODULE_1___default.a, {
        refreshing: false,
        onRefresh: onRefresh
      })
    });
  }, [hasMore, isLoading, dataSource]);
};

/* harmony default export */ __webpack_exports__["a"] = (ListViewComponent);

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(257);

__webpack_require__(890);

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 891:
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

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(10);

var PropTypes = _interopRequireWildcard(_propTypes);

var _rmcPullToRefresh = __webpack_require__(897);

var _rmcPullToRefresh2 = _interopRequireDefault(_rmcPullToRefresh);

var _getLocale = __webpack_require__(862);

var _icon = __webpack_require__(182);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PullToRefresh = function (_React$Component) {
    (0, _inherits3['default'])(PullToRefresh, _React$Component);

    function PullToRefresh() {
        (0, _classCallCheck3['default'])(this, PullToRefresh);
        return (0, _possibleConstructorReturn3['default'])(this, (PullToRefresh.__proto__ || Object.getPrototypeOf(PullToRefresh)).apply(this, arguments));
    }

    (0, _createClass3['default'])(PullToRefresh, [{
        key: 'render',
        value: function render() {
            // tslint:disable-next-line:variable-name
            var _getComponentLocale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'PullToRefresh', function () {
                return __webpack_require__(892);
            }),
                activateText = _getComponentLocale.activateText,
                deactivateText = _getComponentLocale.deactivateText,
                finishText = _getComponentLocale.finishText;

            var ind = (0, _extends3['default'])({ activate: activateText, deactivate: deactivateText, release: React.createElement(_icon2['default'], { type: 'loading' }), finish: finishText }, this.props.indicator);
            return React.createElement(_rmcPullToRefresh2['default'], (0, _extends3['default'])({}, this.props, { indicator: ind }));
        }
    }]);
    return PullToRefresh;
}(React.Component);

exports['default'] = PullToRefresh;

PullToRefresh.defaultProps = {
    prefixCls: 'am-pull-to-refresh'
};
PullToRefresh.contextTypes = {
    antLocale: PropTypes.object
};
module.exports = exports['default'];

/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    activateText: '松开立即刷新',
    deactivateText: '下拉可以刷新',
    finishText: '完成刷新'
};
module.exports = exports['default'];

/***/ }),

/***/ 897:
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

// EXTERNAL MODULE: ./node_modules/_classnames@2.2.6@classnames/index.js
var _classnames_2_2_6_classnames = __webpack_require__(97);
var _classnames_2_2_6_classnames_default = /*#__PURE__*/__webpack_require__.n(_classnames_2_2_6_classnames);

// CONCATENATED MODULE: ./node_modules/_rmc-pull-to-refresh@1.0.13@rmc-pull-to-refresh/es/PullToRefresh.js





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var PullToRefresh_StaticRenderer = function (_React$Component) {
    inherits_default()(StaticRenderer, _React$Component);

    function StaticRenderer() {
        classCallCheck_default()(this, StaticRenderer);

        return possibleConstructorReturn_default()(this, (StaticRenderer.__proto__ || Object.getPrototypeOf(StaticRenderer)).apply(this, arguments));
    }

    createClass_default()(StaticRenderer, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.shouldUpdate;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react_16_13_1_react_default.a.createElement(
                'div',
                null,
                this.props.render()
            );
        }
    }]);

    return StaticRenderer;
}(_react_16_13_1_react_default.a.Component);

function setTransform(nodeStyle, value) {
    nodeStyle.transform = value;
    nodeStyle.webkitTransform = value;
    nodeStyle.MozTransform = value;
}
var isWebView = typeof navigator !== 'undefined' && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
var DOWN = 'down';
var UP = 'up';
var INDICATOR = { activate: 'release', deactivate: 'pull', release: 'loading', finish: 'finish' };
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
            supportsPassive = true;
        }
    });
    window.addEventListener('test', null, opts);
} catch (e) {
    // empty
}
var willPreventDefault = supportsPassive ? { passive: false } : false;
// const willNotPreventDefault = supportsPassive ? { passive: true } : false;

var PullToRefresh_PullToRefresh = function (_React$Component2) {
    inherits_default()(PullToRefresh, _React$Component2);

    function PullToRefresh() {
        classCallCheck_default()(this, PullToRefresh);

        // https://github.com/yiminghe/zscroller/blob/2d97973287135745818a0537712235a39a6a62a1/src/Scroller.js#L355
        // currSt: `activate` / `deactivate` / `release` / `finish`
        var _this2 = possibleConstructorReturn_default()(this, (PullToRefresh.__proto__ || Object.getPrototypeOf(PullToRefresh)).apply(this, arguments));

        _this2.state = {
            currSt: 'deactivate',
            dragOnEdge: false
        };
        _this2._isMounted = false;
        _this2.shouldUpdateChildren = false;
        _this2.triggerPullToRefresh = function () {
            // 在初始化时、用代码 自动 触发 pullToRefresh
            // 注意：当 direction 为 up 时，当 visible length < content length 时、则看不到效果
            // 添加this._isMounted的判断，否则组建一实例化，currSt就会是finish
            if (!_this2.state.dragOnEdge && _this2._isMounted) {
                if (_this2.props.refreshing) {
                    if (_this2.props.direction === UP) {
                        _this2._lastScreenY = -_this2.props.distanceToRefresh - 1;
                    }
                    if (_this2.props.direction === DOWN) {
                        _this2._lastScreenY = _this2.props.distanceToRefresh + 1;
                    }
                    // change dom need after setState
                    _this2.setState({ currSt: 'release' }, function () {
                        return _this2.setContentStyle(_this2._lastScreenY);
                    });
                } else {
                    _this2.setState({ currSt: 'finish' }, function () {
                        return _this2.reset();
                    });
                }
            }
        };
        _this2.init = function (ele) {
            if (!ele) {
                // like return in destroy fn ???!!
                return;
            }
            _this2._to = {
                touchstart: _this2.onTouchStart.bind(_this2, ele),
                touchmove: _this2.onTouchMove.bind(_this2, ele),
                touchend: _this2.onTouchEnd.bind(_this2, ele),
                touchcancel: _this2.onTouchEnd.bind(_this2, ele)
            };
            Object.keys(_this2._to).forEach(function (key) {
                ele.addEventListener(key, _this2._to[key], willPreventDefault);
            });
        };
        _this2.destroy = function (ele) {
            if (!_this2._to || !ele) {
                // componentWillUnmount fire before componentDidMount, like forceUpdate ???!!
                return;
            }
            Object.keys(_this2._to).forEach(function (key) {
                ele.removeEventListener(key, _this2._to[key]);
            });
        };
        _this2.onTouchStart = function (_ele, e) {
            _this2._ScreenY = _this2._startScreenY = e.touches[0].screenY;
            _this2._startScreenX = e.touches[0].screenX;
            // 一开始 refreshing 为 true 时 this._lastScreenY 有值
            _this2._lastScreenY = _this2._lastScreenY || 0;
        };
        _this2.isEdge = function (ele, direction) {
            var container = _this2.props.getScrollContainer();
            if (container && container === document.body) {
                // In chrome61 `document.body.scrollTop` is invalid
                var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
                if (direction === UP) {
                    return scrollNode.scrollHeight - scrollNode.scrollTop <= window.innerHeight;
                }
                if (direction === DOWN) {
                    return scrollNode.scrollTop <= 0;
                }
            }
            if (direction === UP) {
                return ele.scrollHeight - ele.scrollTop === ele.clientHeight;
            }
            if (direction === DOWN) {
                return ele.scrollTop <= 0;
            }
        };
        _this2.damping = function (dy) {
            if (Math.abs(_this2._lastScreenY) > _this2.props.damping) {
                return 0;
            }
            var ratio = Math.abs(_this2._ScreenY - _this2._startScreenY) / window.screen.height;
            dy *= (1 - ratio) * _this2.props.scale;
            return dy;
        };
        _this2.onTouchMove = function (ele, e) {
            // 使用 pageY 对比有问题
            var _screenY = e.touches[0].screenY;
            var _screenX = e.touches[0].screenX;
            var direction = _this2.props.direction;
            // 横向滑动不处理

            if (Math.abs(_screenX - _this2._startScreenX) > 20 * window.devicePixelRatio) {
                return;
            }
            // 拖动方向不符合的不处理
            if (direction === UP && _this2._startScreenY < _screenY || direction === DOWN && _this2._startScreenY > _screenY) {
                return;
            }
            if (_this2.isEdge(ele, direction)) {
                if (!_this2.state.dragOnEdge) {
                    // 当用户开始往上滑的时候isEdge还是false的话，会导致this._ScreenY不是想要的，只有当isEdge为true时，再上滑，才有意义
                    // 下面这行代码解决了上面这个问题
                    _this2._ScreenY = _this2._startScreenY = e.touches[0].screenY;
                    _this2.setState({ dragOnEdge: true });
                }
                e.preventDefault();
                // add stopPropagation with fastclick will trigger content onClick event. why?
                // ref https://github.com/ant-design/ant-design-mobile/issues/2141
                // e.stopPropagation();
                var _diff = Math.round(_screenY - _this2._ScreenY);
                _this2._ScreenY = _screenY;
                _this2._lastScreenY += _this2.damping(_diff);
                _this2.setContentStyle(_this2._lastScreenY);
                if (Math.abs(_this2._lastScreenY) < _this2.props.distanceToRefresh) {
                    if (_this2.state.currSt !== 'deactivate') {
                        // console.log('back to the distance');
                        _this2.setState({ currSt: 'deactivate' });
                    }
                } else {
                    if (_this2.state.currSt === 'deactivate') {
                        // console.log('reach to the distance');
                        _this2.setState({ currSt: 'activate' });
                    }
                }
                // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
                // iOS UIWebView issue, It seems no problem in WKWebView
                if (isWebView && e.changedTouches[0].clientY < 0) {
                    _this2.onTouchEnd();
                }
            }
        };
        _this2.onTouchEnd = function () {
            if (_this2.state.dragOnEdge) {
                _this2.setState({ dragOnEdge: false });
            }
            if (_this2.state.currSt === 'activate') {
                _this2.setState({ currSt: 'release' });
                _this2._timer = setTimeout(function () {
                    if (!_this2.props.refreshing) {
                        _this2.setState({ currSt: 'finish' }, function () {
                            return _this2.reset();
                        });
                    }
                    _this2._timer = undefined;
                }, 1000);
                _this2.props.onRefresh();
            } else {
                _this2.reset();
            }
        };
        _this2.reset = function () {
            _this2._lastScreenY = 0;
            _this2.setContentStyle(0);
        };
        _this2.setContentStyle = function (ty) {
            // todos: Why sometimes do not have `this.contentRef` ?
            if (_this2.contentRef) {
                setTransform(_this2.contentRef.style, 'translate3d(0px,' + ty + 'px,0)');
            }
        };
        return _this2;
    }

    createClass_default()(PullToRefresh, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            this.shouldUpdateChildren = this.props.children !== nextProps.children;
            return true;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps === this.props || prevProps.refreshing === this.props.refreshing) {
                return;
            }
            // triggerPullToRefresh 需要尽可能减少 setState 次数
            this.triggerPullToRefresh();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            // `getScrollContainer` most likely return React.Node at the next tick. Need setTimeout
            setTimeout(function () {
                _this3.init(_this3.props.getScrollContainer() || _this3.containerRef);
                _this3.triggerPullToRefresh();
                _this3._isMounted = true;
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Should have no setTimeout here!
            this.destroy(this.props.getScrollContainer() || this.containerRef);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var props = extends_default()({}, this.props);
            delete props.damping;

            var className = props.className,
                prefixCls = props.prefixCls,
                children = props.children,
                getScrollContainer = props.getScrollContainer,
                direction = props.direction,
                onRefresh = props.onRefresh,
                refreshing = props.refreshing,
                indicator = props.indicator,
                distanceToRefresh = props.distanceToRefresh,
                restProps = __rest(props, ["className", "prefixCls", "children", "getScrollContainer", "direction", "onRefresh", "refreshing", "indicator", "distanceToRefresh"]);

            var renderChildren = _react_16_13_1_react_default.a.createElement(PullToRefresh_StaticRenderer, { shouldUpdate: this.shouldUpdateChildren, render: function render() {
                    return children;
                } });
            var renderRefresh = function renderRefresh(cls) {
                var cla = _classnames_2_2_6_classnames_default()(cls, !_this4.state.dragOnEdge && prefixCls + '-transition');
                return _react_16_13_1_react_default.a.createElement(
                    'div',
                    { className: prefixCls + '-content-wrapper' },
                    _react_16_13_1_react_default.a.createElement(
                        'div',
                        { className: cla, ref: function ref(el) {
                                return _this4.contentRef = el;
                            } },
                        direction === UP ? renderChildren : null,
                        _react_16_13_1_react_default.a.createElement(
                            'div',
                            { className: prefixCls + '-indicator' },
                            indicator[_this4.state.currSt] || INDICATOR[_this4.state.currSt]
                        ),
                        direction === DOWN ? renderChildren : null
                    )
                );
            };
            if (getScrollContainer()) {
                return renderRefresh(prefixCls + '-content ' + prefixCls + '-' + direction);
            }
            return _react_16_13_1_react_default.a.createElement(
                'div',
                extends_default()({ ref: function ref(el) {
                        return _this4.containerRef = el;
                    }, className: _classnames_2_2_6_classnames_default()(className, prefixCls, prefixCls + '-' + direction) }, restProps),
                renderRefresh(prefixCls + '-content')
            );
        }
    }]);

    return PullToRefresh;
}(_react_16_13_1_react_default.a.Component);

/* harmony default export */ var es_PullToRefresh = (PullToRefresh_PullToRefresh);

PullToRefresh_PullToRefresh.defaultProps = {
    prefixCls: 'rmc-pull-to-refresh',
    getScrollContainer: function getScrollContainer() {
        return undefined;
    },
    direction: DOWN,
    distanceToRefresh: 25,
    damping: 100,
    indicator: INDICATOR,
    scale: 0.6
};
// CONCATENATED MODULE: ./node_modules/_rmc-pull-to-refresh@1.0.13@rmc-pull-to-refresh/es/index.js

/* harmony default export */ var es = __webpack_exports__["default"] = (es_PullToRefresh);

/***/ })

}]);
//# sourceMappingURL=../map/performDetailView.ca6097d7.map