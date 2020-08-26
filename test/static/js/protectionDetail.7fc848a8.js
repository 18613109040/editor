(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/style/css.js
var css = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/index.js
var toast = __webpack_require__(8);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// EXTERNAL MODULE: ./node_modules/_mobx@5.15.6@mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(0);

// EXTERNAL MODULE: ./src/service/http/index.ts + 16 modules
var http = __webpack_require__(13);

// CONCATENATED MODULE: ./src/pages/protection/detail/store.ts



var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var store_Store = (_dec = mobx_module["f" /* action */].bound, _dec2 = mobx_module["f" /* action */].bound, (_class = (_temp = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "modules", _descriptor, this);

    _initializerDefineProperty(this, "children", _descriptor2, this);

    _initializerDefineProperty(this, "error", _descriptor3, this);

    _initializerDefineProperty(this, "photo", _descriptor4, this);

    _initializerDefineProperty(this, "height", _descriptor5, this);

    _initializerDefineProperty(this, "response", _descriptor6, this);

    _initializerDefineProperty(this, "detail", _descriptor7, this);

    _initializerDefineProperty(this, "device_id", _descriptor8, this);

    _initializerDefineProperty(this, "following", _descriptor9, this);

    _initializerDefineProperty(this, "reset", _descriptor10, this);
  }

  _createClass(Store, [{
    key: "fetchDefenseAreaDetail",
    value: function fetchDefenseAreaDetail(id) {
      var _this = this;

      http["default"].getDetailPageData({
        tableInfo: [{
          tableName: "view_defense_area_information",
          tableType: 1,
          dataColumns: [{
            columnName: "areaLocationName"
          }, {
            columnName: "orgName"
          }, {
            columnName: "groupId"
          }, {
            columnName: "memberName"
          }, {
            columnName: "buildId"
          }, {
            columnName: "floorId"
          }, {
            columnName: "followId"
          }, {
            columnName: "areaId"
          }, {
            columnName: "phone"
          }, {
            columnName: "statusTime"
          }, {
            columnName: "name"
          }, {
            columnName: "id"
          }, {
            columnName: "mainFrameName"
          }, {
            columnName: "memberId"
          }, {
            columnName: "status"
          }, {
            columnName: "user_id"
          }],
          filterCondition: [{
            field: "id",
            type: 3,
            value: id
          }]
        }]
      }).then(function (res) {
        var result = res.result,
            success = res.success;

        if (success && result.dataJson && result.dataJson.view_defense_area_information) {
          _this.detail = result.dataJson.view_defense_area_information[0];
        } else {
          _this.detail = {};
        }
      })["catch"](function (err) {
        _this.detail = {};
      });
    }
  }, {
    key: "addDeviceFollow",
    value: function addDeviceFollow(device_id) {
      var _this2 = this;

      if (this.following) return;
      this.following = true;
      http["default"].addDeviceFollow({
        device_id: device_id
      }).then(function (res) {
        toast_default.a.info("关注成功", 1);

        _this2.response = res;
      })["finally"](function () {
        _this2.fetchDefenseAreaDetail(device_id);

        _this2.following = false;
      });
    }
  }, {
    key: "deleteDeviceFollow",
    value: function deleteDeviceFollow(device_id, followId) {
      var _this3 = this;

      if (this.following) return;
      this.following = true;
      http["default"].deleteDeviceFollow({
        ids: [followId]
      }).then(function (res) {
        toast_default.a.info("取消成功", 1);

        _this3.response = res;
      })["finally"](function () {
        _this3.fetchDefenseAreaDetail(device_id);

        _this3.following = false;
      });
    }
  }]);

  return Store;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "modules", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "children", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "error", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "photo", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "height", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "20%";
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "response", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "detail", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "device_id", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "following", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "reset", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      _this4.detail = {};
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "fetchDefenseAreaDetail", [mobx_module["f" /* action */]], Object.getOwnPropertyDescriptor(_class.prototype, "fetchDefenseAreaDetail"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addDeviceFollow", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addDeviceFollow"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteDeviceFollow", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "deleteDeviceFollow"), _class.prototype)), _class));
/* harmony default export */ var detail_store = (new store_Store());
// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var style_css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// EXTERNAL MODULE: ./node_modules/_dayjs@1.8.34@dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(3);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// EXTERNAL MODULE: ./src/components/SubPage/index.tsx
var SubPage = __webpack_require__(864);

// EXTERNAL MODULE: ./src/components/StarSwitch/index.tsx + 2 modules
var StarSwitch = __webpack_require__(968);

// EXTERNAL MODULE: ./src/pages/protection/constant.ts
var constant = __webpack_require__(885);

// CONCATENATED MODULE: ./src/pages/protection/detail/List/Item.tsx


var Item_ProtectionDetailListItem = function ProtectionDetailListItem(props) {
  var extra = props.extra,
      children = props.children;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-detail-listItem"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-detail-listItem-label"
  }, children), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-detail-listItem-extra"
  }, extra));
};

/* harmony default export */ var Item = (Item_ProtectionDetailListItem);
// CONCATENATED MODULE: ./src/pages/protection/detail/List/index.tsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function List_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function List_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function List_createClass(Constructor, protoProps, staticProps) { if (protoProps) List_defineProperties(Constructor.prototype, protoProps); if (staticProps) List_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function List_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




__webpack_require__(1205);

var List_ProtectionDetailList = /*#__PURE__*/function (_React$Component) {
  _inherits(ProtectionDetailList, _React$Component);

  var _super = _createSuper(ProtectionDetailList);

  function ProtectionDetailList(props) {
    var _this;

    List_classCallCheck(this, ProtectionDetailList);

    _this = _super.call(this, props);

    List_defineProperty(_assertThisInitialized(_this), "props", void 0);

    return _this;
  }

  List_createClass(ProtectionDetailList, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "protection-detail-list"
      }, children);
    }
  }]);

  return ProtectionDetailList;
}(_react_16_13_1_react_default.a.Component);

List_defineProperty(List_ProtectionDetailList, "item", Item);


// EXTERNAL MODULE: ./src/utils/storage/index.ts
var storage = __webpack_require__(5);

// CONCATENATED MODULE: ./src/pages/protection/detail/detail.tsx










var Detail = Object(mobxreact_esm["c" /* observer */])(function (props) {
  var store = props.store,
      params = props.params,
      history = props.history;
  var detail = store.detail,
      reset = store.reset,
      addDeviceFollow = store.addDeviceFollow,
      deleteDeviceFollow = store.deleteDeviceFollow;
  Object(_react_16_13_1_react["useEffect"])(function () {
    store.fetchDefenseAreaDetail(params.id);
    return function () {
      reset();
    };
  }, []);

  var followChange = function followChange() {
    if (detail.followId) {
      deleteDeviceFollow(detail.id, detail.followId);
    } else {
      addDeviceFollow(detail.id);
    }
  };

  var renderItem = function renderItem() {
    var detail = store.detail;
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List_ProtectionDetailList, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List_ProtectionDetailList.item, {
      extra: constant["a" /* DEFENSE_STATUS */][detail.status] || "无"
    }, "\u5E03\u9632\u72B6\u6001"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List_ProtectionDetailList.item, {
      extra: detail.mainFrameName || "无"
    }, "\u6240\u5C5E\u4E3B\u673A"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List_ProtectionDetailList.item, {
      extra: detail.areaLocationName || "无"
    }, "\u4F4D\u7F6E\u4FE1\u606F"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List_ProtectionDetailList.item, {
      extra: detail.orgName || "无"
    }, "\u673A\u6784\u540D\u79F0"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List_ProtectionDetailList.item, {
      extra: "".concat(detail.memberName || "", " ").concat(detail.phone || "")
    }, "\u8D1F\u8D23\u4EBA"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List_ProtectionDetailList.item, {
      extra: detail.statusTime && dayjs_min_default()(detail.statusTime).format("YYYY-MM-DD HH:mm:ss")
    }, "\u6700\u8FD1\u5E03\u9632\u65F6\u95F4"));
  };

  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(SubPage["a" /* default */], {
    history: history,
    title: "\u9632\u533A\u8BE6\u60C5",
    bgColor: "#fff"
  }, detail && detail.id ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-detail-header",
    onClick: followChange
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "protection-detail-header-title"
  }, detail.name), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "protection-detail-header-state"
  }, detail.followId && detail.user_id === storage["a" /* default */].getItem("userId") ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement(StarSwitch["a" /* default */], {
    on: true
  }) : /*#__PURE__*/_react_16_13_1_react_default.a.createElement(StarSwitch["a" /* default */], null))), renderItem()) : /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-detail-loading"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
    type: "loading"
  })));
});
/* harmony default export */ var detail_detail = (Detail);
// CONCATENATED MODULE: ./src/pages/protection/detail/index.tsx




__webpack_require__(1206);

/* harmony default export */ var protection_detail = __webpack_exports__["default"] = (function (props) {
  var match = props.match;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(detail_detail, {
    store: detail_store,
    params: match.params,
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

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(850);
/* harmony import */ var antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(851);
/* harmony import */ var antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(257);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(182);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);







__webpack_require__(865);

var DEFAULT_BG_COLOR = "#fff";

var SubPage = function SubPage(props) {
  var title = props.title,
      className = props.className,
      bgColor = props.bgColor,
      rightContent = props.rightContent,
      children = props.children,
      history = props.history,
      prePage = props.prePage,
      isAccessory = props.isAccessory;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    document.body.style.backgroundColor = bgColor;
    return function () {
      document.body.style.backgroundColor = DEFAULT_BG_COLOR;
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "base-navBar",
    mode: "dark",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: "lg",
      type: "left"
    }),
    onLeftClick: function onLeftClick() {
      if (prePage && isAccessory) {
        history.replace({
          pathname: prePage,
          state: {
            pathname: location.pathname
          }
        });
      } else if (prePage && history.length === 1) {
        history.push({
          pathname: prePage
        });
      } else {
        // window.location.replace('/dashboard');
        history.goBack();
      }
    },
    rightContent: rightContent
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("base-content", className)
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (SubPage);

/***/ }),

/***/ 865:
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

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
//# sourceMappingURL=../map/protectionDetail.f082cc67.map