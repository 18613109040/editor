(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./node_modules/_mobx@5.15.6@mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(0);

// EXTERNAL MODULE: ./src/service/http/index.ts + 16 modules
var http = __webpack_require__(13);

// EXTERNAL MODULE: ./src/utils/storage/index.ts
var storage = __webpack_require__(5);

// CONCATENATED MODULE: ./src/pages/follow/store.ts
var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




var store_Store = (_dec = mobx_module["f" /* action */].bound, _dec2 = mobx_module["f" /* action */].bound, _dec3 = mobx_module["f" /* action */].bound, _dec4 = mobx_module["f" /* action */].bound, (_class = (_temp = /*#__PURE__*/function () {
  function Store(props) {
    _classCallCheck(this, Store);

    _defineProperty(this, "tokenContext", void 0);

    _defineProperty(this, "NUM_ROWS", 10);

    _initializerDefineProperty(this, "data", _descriptor, this);

    _initializerDefineProperty(this, "followData", _descriptor2, this);

    _initializerDefineProperty(this, "pageNumber", _descriptor3, this);

    _initializerDefineProperty(this, "isLoading", _descriptor4, this);

    _initializerDefineProperty(this, "hasMore", _descriptor5, this);

    _initializerDefineProperty(this, "deleteDeviceData", _descriptor6, this);

    this.tokenContext = props.tokenContext;
  }

  _createClass(Store, [{
    key: "reset",
    value: function reset() {
      this.data = [];
      this.followData = {};
      this.pageNumber = 0;
      this.isLoading = false;
      this.hasMore = true;
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this = this;

      this.isLoading = true;
      var userId = storage["a" /* default */].getItem("userId");
      return http["default"].getShowTableData({
        tableName: "view_my_defense_area_information",
        length: this.NUM_ROWS,
        start: this.pageNumber * this.NUM_ROWS,
        type: "TABLE_QUERY",
        params: {
          filterCondition: [{
            type: "1",
            field: "view_my_defense_area_information.userId",
            condition: "=",
            connection: "&amp;&amp;",
            id: 1,
            pid: 0,
            value: userId
          }],
          orderBy: [{
            fieldName: "view_my_defense_area_information.name",
            sort: "DESC"
          }]
        },
        fieldName: ["view_my_defense_area_information.id", "view_my_defense_area_information.name", "view_my_defense_area_information.status", "view_my_defense_area_information.mainFrameName", "view_my_defense_area_information.areaLocationName", "view_my_defense_area_information.followId"]
      }).then(function (res) {
        var result = res.result;
        var data = [].concat(_toConsumableArray(Object(mobx_module["q" /* toJS */])(_this.data)), _toConsumableArray(result.aaData));
        var followData = {};

        if (data.length >= result.iTotalRecords) {
          _this.hasMore = false;
        }

        data.map(function (d) {
          followData[d.view_my_defense_area_information_id] = d.view_my_defense_area_information_followId || null;
        });
        _this.data = data;
        _this.pageNumber += 1;
        return {
          data: data,
          followData: followData
        };
      })["finally"](function () {
        return _this.isLoading = false;
      });
    }
  }, {
    key: "addDeviceFollow",
    value: function addDeviceFollow(device_id) {
      return http["default"].addDeviceFollow({
        device_id: device_id
      });
    }
  }, {
    key: "deleteDeviceFollow",
    value: function deleteDeviceFollow(followId) {
      return http["default"].deleteDeviceFollow({
        ids: [followId]
      });
    }
  }]);

  return Store;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "followData", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "pageNumber", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isLoading", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "hasMore", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _applyDecoratedDescriptor(_class.prototype, "reset", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "reset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetchData", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "fetchData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addDeviceFollow", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "addDeviceFollow"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteDeviceFollow", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "deleteDeviceFollow"), _class.prototype), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "deleteDeviceData", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (device_id, cb) {
      _this2.data = _this2.data.filter(function (item) {
        return item.view_my_defense_area_information_id !== device_id;
      });
      cb && cb(Object(mobx_module["q" /* toJS */])(_this2.data));
    };
  }
})), _class));
/* harmony default export */ var follow_store = (store_Store);
// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/style/css.js
var style_css = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/index.js
var toast = __webpack_require__(8);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/list-view/style/css.js
var list_view_style_css = __webpack_require__(868);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/list-view/index.js
var list_view = __webpack_require__(869);
var list_view_default = /*#__PURE__*/__webpack_require__.n(list_view);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// EXTERNAL MODULE: ./src/components/ProtectionList/index.tsx + 2 modules
var ProtectionList = __webpack_require__(967);

// EXTERNAL MODULE: ./src/components/DefenseStatus/index.tsx
var DefenseStatus = __webpack_require__(916);

// EXTERNAL MODULE: ./src/components/StarSwitch/index.tsx + 2 modules
var StarSwitch = __webpack_require__(968);

// EXTERNAL MODULE: ./src/components/EasyNarBar/index.tsx
var EasyNarBar = __webpack_require__(857);

// CONCATENATED MODULE: ./src/pages/follow/follow.tsx







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || follow_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function follow_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return follow_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return follow_arrayLikeToArray(o, minLen); }

function follow_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var EMPTY_TEXT = "无";
/* harmony default export */ var follow = (Object(mobxreact_esm["c" /* observer */])(function (props) {
  var store = props.store,
      history = props.history;
  var isLoading = store.isLoading,
      hasMore = store.hasMore,
      fetchData = store.fetchData,
      addDeviceFollow = store.addDeviceFollow,
      deleteDeviceFollow = store.deleteDeviceFollow,
      deleteDeviceData = store.deleteDeviceData,
      reset = store.reset,
      NUM_ROWS = store.NUM_ROWS;
  Object(_react_16_13_1_react["useEffect"])(function () {
    getData();
    return function () {
      reset();
    };
  }, []);

  var _useState = Object(_react_16_13_1_react["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      followData = _useState2[0],
      setFollowData = _useState2[1];

  var _useState3 = Object(_react_16_13_1_react["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      following = _useState4[0],
      setFollowimg = _useState4[1];

  var _useState5 = Object(_react_16_13_1_react["useState"])(new list_view_default.a.DataSource({
    rowHasChanged: function rowHasChanged(row1, row2) {
      return row1 !== row2;
    }
  })),
      _useState6 = _slicedToArray(_useState5, 2),
      dataSource = _useState6[0],
      setDataSource = _useState6[1];

  var getData = function getData() {
    fetchData().then(function (res) {
      setFollowData(res.followData);
      setDataSource(dataSource.cloneWithRows(res.data));
    })["catch"](function () {
      toast_default.a.info("请求失败", 1);
    });
  };

  var onEndReached = function onEndReached() {
    if (!isLoading && hasMore) {
      getData();
    }
  };

  var renderFooter = function renderFooter() {
    if (isLoading) {
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        style: {
          padding: 30,
          textAlign: "center"
        }
      }, "\u52A0\u8F7D\u4E2D...");
    } else if (!hasMore) {
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        style: {
          padding: 30,
          textAlign: "center"
        }
      }, "\u52A0\u8F7D\u5B8C\u6BD5");
    } else {
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        style: {
          padding: 30,
          textAlign: "center"
        }
      }, "\u6682\u65E0\u6570\u636E");
    }
  };

  var addFollow = function addFollow(userId) {
    if (following) return;
    setFollowimg(true);
    addDeviceFollow(userId).then(function (res) {
      toast_default.a.info("关注成功", 1);

      changeFollow(userId, res.result);
    })["finally"](function () {
      setFollowimg(false);
    });
  };

  var deleteFollow = function deleteFollow(userId, followId) {
    if (following) return;
    setFollowimg(true);
    deleteDeviceFollow(followId).then(function () {
      toast_default.a.info("取消成功", 1);

      changeFollow(userId, null); // 删除列表项

      deleteDeviceData(userId, function (data) {
        setDataSource(dataSource.cloneWithRows(data));
      });
    })["finally"](function () {
      setFollowimg(false);
    });
  };

  var changeFollow = function changeFollow(userId, followId) {
    var temp = Object.assign({}, followData);
    temp[userId] = followId;
    setFollowData(temp);
  };

  var renderRow = function renderRow(d) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(ProtectionList["a" /* Item */], {
      key: d.view_my_defense_area_information_id,
      title: d.view_my_defense_area_information_name || EMPTY_TEXT,
      mainDescription: "IP\u7AEF\u53E3:".concat(d.view_my_defense_area_information_mainFrameName || EMPTY_TEXT),
      secondaryDescription: "\u533A\u57DF\u4FE1\u606F:".concat(d.view_my_defense_area_information_areaLocationName || EMPTY_TEXT),
      state: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(ProtectionList["b" /* State */], null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(DefenseStatus["a" /* default */], {
        status: d.view_my_defense_area_information_status
      })),
      handle: /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        onClick: function onClick(e) {
          e.stopPropagation();

          if (followData[d.view_my_defense_area_information_id]) {
            deleteFollow(d.view_my_defense_area_information_id, followData[d.view_my_defense_area_information_id]);
          } else {
            addFollow(d.view_my_defense_area_information_id);
          }
        }
      }, followData[d.view_my_defense_area_information_id] ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement(StarSwitch["a" /* default */], {
        on: true
      }) : /*#__PURE__*/_react_16_13_1_react_default.a.createElement(StarSwitch["a" /* default */], null)),
      onClick: function onClick() {
        history.push("/protection/detail/".concat(d.view_my_defense_area_information_id));
      }
    });
  };

  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(EasyNarBar["a" /* default */], {
    mainContent: "\u6211\u7684\u5173\u6CE8",
    leftContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
      type: "left"
    }),
    onLeftClick: function onLeftClick() {
      history.goBack();
    }
  }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(list_view_default.a, {
    dataSource: dataSource,
    renderFooter: renderFooter,
    renderRow: renderRow,
    pageSize: NUM_ROWS,
    useBodyScroll: true,
    scrollRenderAheadDistance: 500,
    onEndReached: onEndReached,
    onEndReachedThreshold: 10
  }));
}));
// EXTERNAL MODULE: ./src/pages/_internal/app/middlewares/AppAuthorized/index.tsx + 1 modules
var AppAuthorized = __webpack_require__(258);

// CONCATENATED MODULE: ./src/pages/follow/index.tsx





__webpack_require__(1207);

/* harmony default export */ var pages_follow = __webpack_exports__["default"] = (function (props) {
  var tokenContext = Object(_react_16_13_1_react["useContext"])(AppAuthorized["a" /* TokenContext */]);
  var store = new follow_store({
    tokenContext: tokenContext
  });
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(follow, {
    store: store,
    history: props.history
  });
});

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

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EasyNarBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(854);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(256);
 // import store from './store';




__webpack_require__(858);

/* harmony default export */ __webpack_exports__["a"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* observer */ "c"])(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EasyNarBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], props);
}));

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFENSE_STATUS; });
var DEFENSE_STATUS = {
  10010: "在线",
  10011: "离线",
  // 10020: "正常",
  // 10021: "报警",
  10040: "布防",
  10041: "撤防",
  // 10042: "未知",
  10060: "旁路",
  10061: "无旁路",
  10012: "未知",
  10050: "开",
  10051: "关"
};

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_protection_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(885);



__webpack_require__(917);

var DefenseStatus = function DefenseStatus(props) {
  var status = props.status;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "defense-status defense-status_".concat(status)
  }, _pages_protection_constant__WEBPACK_IMPORTED_MODULE_1__[/* DEFENSE_STATUS */ "a"][Number(status)] || "无");
};

/* harmony default export */ __webpack_exports__["a"] = (DefenseStatus);

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Item; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ State; });

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/style/css.js
var style_css = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/index.js
var toast = __webpack_require__(8);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/list-view/style/css.js
var list_view_style_css = __webpack_require__(868);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/list-view/index.js
var list_view = __webpack_require__(869);
var list_view_default = /*#__PURE__*/__webpack_require__.n(list_view);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// CONCATENATED MODULE: ./src/components/ProtectionList/Item.tsx


var Item_ProtectionListItem = function ProtectionListItem(props) {
  var title = props.title,
      mainDescription = props.mainDescription,
      secondaryDescription = props.secondaryDescription,
      state = props.state,
      handle = props.handle,
      _onClick = props.onClick;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("a", {
    className: "protection-listItem",
    onClick: function onClick() {
      _onClick && _onClick();
    }
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-listItem-main"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("h3", null, title), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "protection-listItem-main-title"
  }, mainDescription), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "protection-listItem-main-desc"
  }, secondaryDescription)), state, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "protection-listItem-handle"
  }, handle));
};

/* harmony default export */ var Item = (Item_ProtectionListItem);
// CONCATENATED MODULE: ./src/components/ProtectionList/State.tsx


var State_ProtectionListItemState = function ProtectionListItemState(props) {
  var state = props.state,
      children = props.children;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "protection-listItem-state protection-listItem-state_".concat(state)
  }, children);
};

/* harmony default export */ var State = (State_ProtectionListItemState);
// CONCATENATED MODULE: ./src/components/ProtectionList/index.tsx







function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





__webpack_require__(950);

var ProtectionList_ProtectionList = function ProtectionList(props) {
  var fetchData = props.fetchData,
      renderRow = props.renderRow,
      limit = props.limit,
      height = props.height;
  var lv = Object(_react_16_13_1_react["useRef"])(null);

  var _useState = Object(_react_16_13_1_react["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      hasMore = _useState2[0],
      setHasMore = _useState2[1];

  var _useState3 = Object(_react_16_13_1_react["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = Object(_react_16_13_1_react["useState"])(new list_view_default.a.DataSource({
    rowHasChanged: function rowHasChanged(row1, row2) {
      return row1 !== row2;
    }
  })),
      _useState6 = _slicedToArray(_useState5, 2),
      dataSource = _useState6[0],
      setDataSource = _useState6[1];

  var currentSkipRef = Object(_react_16_13_1_react["useRef"])(0);
  var currentDataRef = Object(_react_16_13_1_react["useRef"])([]);

  var reset = function reset() {
    lv.current.scrollTo(0, 0);
    currentSkipRef.current = 0;
    currentDataRef.current = [];
    setHasMore(true);
    setIsLoading(false);
    setDataSource(new list_view_default.a.DataSource({
      rowHasChanged: function rowHasChanged(row1, row2) {
        return row1 !== row2;
      }
    }));
  };

  var getData = function getData() {
    setIsLoading(true);
    fetchData(currentSkipRef.current, props.limit, props.location).then(function (res) {
      var newData = [].concat(_toConsumableArray(currentDataRef.current), _toConsumableArray(res.aaData));
      currentSkipRef.current += props.limit;
      currentDataRef.current = newData;
      setDataSource(dataSource.cloneWithRows(newData));
      setHasMore(newData.length >= res.iTotalRecords ? false : true);
    })["catch"](function (err) {
      toast_default.a.info("请求失败", 1);
    })["finally"](function () {
      setIsLoading(false);
    });
  };

  var onEndReached = function onEndReached() {
    if (!isLoading && hasMore) {
      getData();
    }
  };

  Object(_react_16_13_1_react["useEffect"])(function () {
    reset();
    setTimeout(function () {
      getData();
    }, 50);
  }, [props.select, props.location]);
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(list_view_default.a, {
    ref: lv,
    dataSource: dataSource,
    renderFooter: function renderFooter() {
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "meetinglist-tip"
      }, isLoading ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
        type: "loading"
      }) : currentDataRef.current && currentDataRef.current.length > 0 ? "加载完成" : "暂无数据");
    },
    renderRow: renderRow,
    pageSize: limit || 20,
    style: {
      height: height
    },
    scrollRenderAheadDistance: 500,
    onEndReached: onEndReached,
    onEndReachedThreshold: 10
  });
};


/* harmony default export */ var components_ProtectionList = __webpack_exports__["c"] = (ProtectionList_ProtectionList);

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./node_modules/_classnames@2.2.6@classnames/index.js
var _classnames_2_2_6_classnames = __webpack_require__(97);
var _classnames_2_2_6_classnames_default = /*#__PURE__*/__webpack_require__.n(_classnames_2_2_6_classnames);

// CONCATENATED MODULE: ./src/assets/imgs/protection/protection_bt_collection_off.png
/* harmony default export */ var protection_bt_collection_off = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABDlJREFUeNrMmWlIVFEYhu+MWVjantWPyLECK3OjqLQFy6UVCyyiHxG0QlG0/4gK+hGUaWEFLVC/IqMCIW2jTdqksrS9CMoWbBLNJTWjmt4P36HLNI53Zs4sHzzc650Zz3u+e+4573euqbUoQlMcYWA3WATMoABsAI0qG+mkqY/TYLbu72UgGqQDm6pGzIpFp1N0LRgNRoAvYCqYqbIh1cK385gDysBLDhv9Z0EnfAqYAGrAQd31I8AKxoAZwSjcntE88F13vYV3QGKbqsZMimaVyeAmx7YFNDh83hW8A5EgE1wJlozbs73fiWiJZpCrcqyryLiM61ugDkSB+na+F86s9wVp4FqgM75Dl+16F9/7rsv6jkBnPBncoeAoZt1VRDDrfTgL3QhUxu2zRL4B0RqX/X0qxronGZfODgGpnKMbmO1vBn/fHbwHvcBqjvW34JdKr9ITxOmIB7Gc3uxxyA3RGjsqWd+pW6h+ghfgOXhK5LzSiPDBYCzFichRvOYsPoAnbGCvB3c6ny5SkjCSc38C0Yc8O8+ItHUfPBSzJkNFsncSzGln/pWel/OHIrbC4Hh2J8JpyOLYmVgmLtLJd0tAlgg/jJMV7F2JTtwTjr0/WuAikh2IZafEefYDx0V4I3scy+wGcwzns1Br1pn7Bi344wePoSL8Av8o4BQVrCHD5hzPi0X4Rk47yXR4A4JQ9CA+f4ngNVgjwj/RKL3kA3Cb01OwxDCauBjwmBa62r7ki/iJ4AFXxTt8WAMd8RQt68ld+huro1epYVF7HQzkrRkXQNHJNGH9WXik69cPsxMTJHVhIegNrvIH/o40ipXJ4izn7+aO3GEryAYnQDdQBOb5UfRcmTXY9nGwgF7GkK39DZaw8O0MTnFjx9exGJxhm1KYLKUWt/y4jVtnW0EILexaH4pezgyHsEJa52rny0ghsYtuzsTp0lcRxzaO0vIqqYDs1cYjHwqv4DFMZelm98llfhCeqKp068JpUjrZAzT5SHgY27HRrbZ6m3FZQUPBGx+KlmihD+lkZNU2IjzRD8PEcbgkqBCexGO5H4Q/1nkUZcIf+THjXgsPYc1n02XDSEyhtxeLnOHhUDF5IzxG+7dFbKSyz6DYa/TNKeAybXKmgd+LZa3ippHFG+FJDmOvvZgO7lFkCi2yWIUtYvppUS/RU09T8YCaDc4ozsa33MpZ3KS5QO9eTbFRtAp7tLY3bpvBVzAeXASl7KzHD2hHwqN5fOUgOIs7Sue1tnc7VtauForVv0qR8xz+r03swFh2tlT7/73Qa4e2PRL+jseFrESymZFCDqMqujhpJLeDBaqJ23UWdtLKDhTzrsndk+3n+fx+pTdL/lAKDXe4/llrew14TLfX4W7IQ7+Sw6i/w2d1dIsfPc24bMGlsoSr4bbcKhbUB7wQrbEUy+MdWM/h2MJpdJIr0RJ/BRgAT+cJhYkahbIAAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./src/assets/imgs/protection/protection_bt_collection_on.png
/* harmony default export */ var protection_bt_collection_on = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqpJREFUeNrkmU1IVFEUx+9MWhga7VqaY8IsKqcgEjNLy5AiatGilZsygiDIrBaigougrCF0Z1CroMBFi3IRFLVpUUHQhxUEIRlhYiT2ZRD1P8x/YBjovTfvnbnvPTrwg9E7b+7v3bn33XPuJBZv1RjlqALnQBdIguvgJFjQ7KTC6McNsLfg726QAh3gj1YnSWXpjiLpfOwAezQ70hYf8NkWqng7aHFo3wR2R1Hcy4j2R018G3GLJrArSuIDZXpvWcVbOL+9xhY+ZUIXH7R0jap4M9jp47qtoC1M8X5L60JFXK5pAEdAZ4C+t4NjIO0n9Ui4JFkrwfoCGsFasFx5x/0FJsFL8JzI6ykvSVYt2Ew5kVzH/9mIpSBDCmMevCByM4/AE0nWZMRl9K6B/SYe8QDsk/majZF0fpfOyohLgl9t4hWfk5rJvcWoFPGJGIrfFvFep8dOBOMNOC7i00yUXsVA+ikX52x+55xm/vA4wtIPmYXOFG/5c0w370VQ+g4L8S//ylUWWBfejJD0OE8OvrslWYvgALgaAekr4CBzGU/Z4W9wiLtqWHEJHKZLSWmtbExydNYXgrRUSCecNkcv+fhZMGJRegwMaRUSNRbFqzQroIxF8Q1a4stY9diKNPsMLC7SlRbFK7wMVFLrq1OOjIb4xhDEG/9b8SWs9sOYKokg4ukynKF4iRWgLoi432kyx1ThjCT95VigbuKlPlFmKbuaqcJ5k/vF7TT4pDnP3cRTHjuZYe1aR9mvBW3yepifdaqEG0gFEX/n0v6RWZx0chF8c3ivtF3gzfXmSzCHcCzg3Q4917BALT4w+mByvx5fBj99zmFZ9Ec5jVYVtUmJJueX7/2O+FuTO4C/ywX3zOSOhuvBaABpw1Isy2+gB7wGP8B90OokLfFXgAEAPXN8AKOReTMAAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./src/components/StarSwitch/index.tsx





__webpack_require__(951);

var StarSwitch_StarSwitch = function StarSwitch(props) {
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("img", {
    className: _classnames_2_2_6_classnames_default()('starSwitch-img', props.className),
    src: props.on ? protection_bt_collection_on : protection_bt_collection_off
  });
};

/* harmony default export */ var components_StarSwitch = __webpack_exports__["a"] = (StarSwitch_StarSwitch);

/***/ })

}]);
//# sourceMappingURL=../map/follow.7997a075.map