(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 1246:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1247:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1248:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1249:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(872);
/* harmony import */ var antd_mobile_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(873);
/* harmony import */ var antd_mobile_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SubPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(864);



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




__webpack_require__(1249);

var State = /*#__PURE__*/function (_React$Component) {
  _inherits(State, _React$Component);

  var _super = _createSuper(State);

  function State() {
    _classCallCheck(this, State);

    return _super.apply(this, arguments);
  }

  _createClass(State, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          history = _this$props.history,
          _this$props$location$ = _this$props.location.state,
          state = _this$props$location$ === void 0 ? {} : _this$props$location$;
      var _state$checkedIn = state.checkedIn,
          checkedIn = _state$checkedIn === void 0 ? [] : _state$checkedIn,
          _state$notCheckedIn = state.notCheckedIn,
          notCheckedIn = _state$notCheckedIn === void 0 ? [] : _state$notCheckedIn;
      var tabs = [{
        title: "\u5DF2\u7B7E\u5230(".concat(checkedIn.length, "\u4EBA)")
      }, {
        title: "\u672A\u7B7E\u5230(".concat(notCheckedIn.length, "\u4EBA)")
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SubPage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        history: history,
        className: "choosePerson-state-page",
        title: "\u7B7E\u5230\u4FE1\u606F",
        bgColor: "#eee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_mobile_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {
        tabs: tabs,
        initialPage: 0,
        animated: false,
        useOnPan: false,
        swipeable: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "choosePerson-state-tab"
      }, checkedIn.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "choosePerson-state-item",
          key: item.confereeId || i
        }, item.confereeName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "(".concat(item.workNumber, ")")));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "choosePerson-state-tab"
      }, notCheckedIn.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "choosePerson-state-item",
          key: item.confereeId || i
        }, item.confereeName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "(".concat(item.workNumber, ")")));
      }))));
    }
  }]);

  return State;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 1280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/list/style/css.js
var css = __webpack_require__(853);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/list/index.js
var list = __webpack_require__(856);
var list_default = /*#__PURE__*/__webpack_require__.n(list);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/white-space/style/css.js
var style_css = __webpack_require__(870);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/white-space/index.js
var white_space = __webpack_require__(871);
var white_space_default = /*#__PURE__*/__webpack_require__.n(white_space);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/search-bar/style/css.js
var search_bar_style_css = __webpack_require__(911);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/search-bar/index.js
var search_bar = __webpack_require__(913);
var search_bar_default = /*#__PURE__*/__webpack_require__.n(search_bar);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/nav-bar/style/css.js
var nav_bar_style_css = __webpack_require__(850);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/nav-bar/index.js
var nav_bar = __webpack_require__(851);
var nav_bar_default = /*#__PURE__*/__webpack_require__.n(nav_bar);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var icon_style_css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/style/css.js
var toast_style_css = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/index.js
var toast = __webpack_require__(8);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// EXTERNAL MODULE: ./node_modules/_mobx@5.15.6@mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(1292);

// EXTERNAL MODULE: ./node_modules/_classnames@2.2.6@classnames/index.js
var _classnames_2_2_6_classnames = __webpack_require__(97);
var _classnames_2_2_6_classnames_default = /*#__PURE__*/__webpack_require__.n(_classnames_2_2_6_classnames);

// CONCATENATED MODULE: ./src/pages/choosePerson/SlideTree/index.tsx
var _class, _temp;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(1247);






var SlideTree_SlideTree = Object(mobxreact_esm["c" /* observer */])(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  _inherits(SlideTree, _React$Component);

  var _super = _createSuper(SlideTree);

  function SlideTree() {
    var _this;

    _classCallCheck(this, SlideTree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "slideHandle", function (index) {
      _this.props.model.setBreadcrumbsSlice(index);
    });

    return _this;
  }

  _createClass(SlideTree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var breadcrumbs = this.props.model.breadcrumbs;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "slide_tree"
      }, breadcrumbs.map(function (item, index) {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          key: index,
          className: "slide_tree_item"
        }, index === 0 ? null : /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: _classnames_2_2_6_classnames_default()("slide_tree_separator")
        }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(RightOutlined["a" /* default */], {
          style: {
            color: breadcrumbs.length - 1 === index ? "#666666" : "#0d8df9"
          }
        })), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          onClick: function onClick() {
            _this2.slideHandle(index);
          },
          className: _classnames_2_2_6_classnames_default()("slide_tree_title", {
            slideTreeBlue: breadcrumbs.length - 1 !== index,
            slideTreeCCC: breadcrumbs.length - 1 === index
          })
        }, item.orgName));
      }));
    }
  }]);

  return SlideTree;
}(_react_16_13_1_react_default.a.Component), _temp)) || _class;


// EXTERNAL MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(1008);

// CONCATENATED MODULE: ./src/pages/choosePerson/SelectedText/index.tsx
__webpack_require__(1248);





var SelectedText = Object(mobxreact_esm["c" /* observer */])(function (props) {
  var state = props.history.location;

  if (state) {
    var pathname = state.pathname,
        users = state.users;

    if (pathname === "/remove_person") {
      props.model.setSelected(users);
    }
  }

  var onSelectedRemove = function onSelectedRemove() {
    var selected = props.model.selected;
    var state = {
      pathname: "/choose_person",
      dataSource: Object(mobx_module["q" /* toJS */])(selected, {
        recurseEverything: true
      })
    };
    props.history.push({
      pathname: "/remove_person",
      state: state
    });
  };

  var selectedTitle = props.model.selectedTitle;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "selected_text",
    onClick: onSelectedRemove
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(UserOutlined["a" /* default */], null), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "selected_text_icon"
  }, "\u5DF2\u9009\u62E9:"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "selected_text_title"
  }, selectedTitle), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "selected_text_right"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(RightOutlined["a" /* default */], null))));
});
/* harmony default export */ var choosePerson_SelectedText = (SelectedText);
// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/checkbox/style/css.js
var checkbox_style_css = __webpack_require__(883);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(884);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(lib_checkbox);

// EXTERNAL MODULE: ./src/pages/choosePerson/SelectUserList/item.tsx
var SelectUserList_item = __webpack_require__(963);

// CONCATENATED MODULE: ./src/pages/choosePerson/SelectUserList/index.tsx





var SelectUserList = Object(mobxreact_esm["c" /* observer */])(function (props) {
  var searchText = props.searchText,
      _props$model = props.model,
      persons = _props$model.persons,
      usersMap = _props$model.usersMap,
      onSelectChange = _props$model.onSelectChange,
      allCheckBox = _props$model.allCheckBox;
  return /*#__PURE__*/_react_16_13_1_react["createElement"](_react_16_13_1_react["Fragment"], null, persons && persons.length ? /*#__PURE__*/_react_16_13_1_react["createElement"](checkbox_default.a.CheckboxItem, {
    onChange: allCheckBox
  }, "\u5168\u9009") : null, Array.isArray(persons) && persons.filter(function (item) {
    return !searchText || item.name && item.name.indexOf(searchText) !== -1;
  }).map(function (user, index) {
    return /*#__PURE__*/_react_16_13_1_react["createElement"](SelectUserList_item["a" /* default */], {
      key: user.memberId,
      index: index,
      rowData: user,
      checked: usersMap.has(user.memberId),
      onChange: onSelectChange
    });
  }));
});
/* harmony default export */ var choosePerson_SelectUserList = (SelectUserList);
// CONCATENATED MODULE: ./src/pages/choosePerson/DepartmentList/item.tsx





var item_class, item_temp;

function item_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { item_typeof = function _typeof(obj) { return typeof obj; }; } else { item_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return item_typeof(obj); }

function item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function item_createClass(Constructor, protoProps, staticProps) { if (protoProps) item_defineProperties(Constructor.prototype, protoProps); if (staticProps) item_defineProperties(Constructor, staticProps); return Constructor; }

function item_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) item_setPrototypeOf(subClass, superClass); }

function item_setPrototypeOf(o, p) { item_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return item_setPrototypeOf(o, p); }

function item_createSuper(Derived) { var hasNativeReflectConstruct = item_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = item_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = item_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return item_possibleConstructorReturn(this, result); }; }

function item_possibleConstructorReturn(self, call) { if (call && (item_typeof(call) === "object" || typeof call === "function")) { return call; } return item_assertThisInitialized(self); }

function item_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function item_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function item_getPrototypeOf(o) { item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return item_getPrototypeOf(o); }

function item_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var CheckboxItem = checkbox_default.a.CheckboxItem;

var item_SelectUserItem = Object(mobxreact_esm["c" /* observer */])(item_class = (item_temp = /*#__PURE__*/function (_React$Component) {
  item_inherits(SelectUserItem, _React$Component);

  var _super = item_createSuper(SelectUserItem);

  function SelectUserItem() {
    var _this;

    item_classCallCheck(this, SelectUserItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    item_defineProperty(item_assertThisInitialized(_this), "departmentHandle", function () {
      _this.props.onClick(_this.props.model);
    });

    return _this;
  }

  item_createClass(SelectUserItem, [{
    key: "render",
    value: function render() {
      var _this$props$model = this.props.model,
          total = _this$props$model.total,
          orgName = _this$props$model.orgName;
      return /*#__PURE__*/_react_16_13_1_react["createElement"](list_default.a.Item, {
        arrow: "horizontal",
        onClick: this.departmentHandle
      }, orgName, " ", "(".concat(total, "\u4EBA)"));
    }
  }]);

  return SelectUserItem;
}(_react_16_13_1_react["Component"]), item_temp)) || item_class;


// CONCATENATED MODULE: ./src/pages/choosePerson/DepartmentList/index.tsx



var DepartmentList_class;

function DepartmentList_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DepartmentList_typeof = function _typeof(obj) { return typeof obj; }; } else { DepartmentList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DepartmentList_typeof(obj); }

function DepartmentList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DepartmentList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DepartmentList_createClass(Constructor, protoProps, staticProps) { if (protoProps) DepartmentList_defineProperties(Constructor.prototype, protoProps); if (staticProps) DepartmentList_defineProperties(Constructor, staticProps); return Constructor; }

function DepartmentList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DepartmentList_setPrototypeOf(subClass, superClass); }

function DepartmentList_setPrototypeOf(o, p) { DepartmentList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DepartmentList_setPrototypeOf(o, p); }

function DepartmentList_createSuper(Derived) { var hasNativeReflectConstruct = DepartmentList_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = DepartmentList_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = DepartmentList_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return DepartmentList_possibleConstructorReturn(this, result); }; }

function DepartmentList_possibleConstructorReturn(self, call) { if (call && (DepartmentList_typeof(call) === "object" || typeof call === "function")) { return call; } return DepartmentList_assertThisInitialized(self); }

function DepartmentList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DepartmentList_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function DepartmentList_getPrototypeOf(o) { DepartmentList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DepartmentList_getPrototypeOf(o); }




var DepartmentList_CheckboxItem = checkbox_default.a.CheckboxItem;

var DepartmentList_DepartmentList = Object(mobxreact_esm["c" /* observer */])(DepartmentList_class = /*#__PURE__*/function (_React$Component) {
  DepartmentList_inherits(DepartmentList, _React$Component);

  var _super = DepartmentList_createSuper(DepartmentList);

  function DepartmentList() {
    DepartmentList_classCallCheck(this, DepartmentList);

    return _super.apply(this, arguments);
  }

  DepartmentList_createClass(DepartmentList, [{
    key: "render",
    value: function render() {
      var _this$props$model = this.props.model,
          departments = _this$props$model.departments,
          setBreadcrumbsPush = _this$props$model.setBreadcrumbsPush;
      return /*#__PURE__*/_react_16_13_1_react["createElement"](_react_16_13_1_react["Fragment"], null, departments.map(function (item) {
        return /*#__PURE__*/_react_16_13_1_react["createElement"](item_SelectUserItem, {
          key: item.orgId,
          onClick: setBreadcrumbsPush,
          model: item
        });
      }));
    }
  }]);

  return DepartmentList;
}(_react_16_13_1_react["Component"])) || DepartmentList_class;


// EXTERNAL MODULE: ./src/utils/storage/index.ts
var storage = __webpack_require__(5);

// CONCATENATED MODULE: ./src/pages/choosePerson/index.tsx













var _dec, choosePerson_class, choosePerson_temp;

function choosePerson_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { choosePerson_typeof = function _typeof(obj) { return typeof obj; }; } else { choosePerson_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return choosePerson_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function choosePerson_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function choosePerson_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function choosePerson_createClass(Constructor, protoProps, staticProps) { if (protoProps) choosePerson_defineProperties(Constructor.prototype, protoProps); if (staticProps) choosePerson_defineProperties(Constructor, staticProps); return Constructor; }

function choosePerson_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) choosePerson_setPrototypeOf(subClass, superClass); }

function choosePerson_setPrototypeOf(o, p) { choosePerson_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return choosePerson_setPrototypeOf(o, p); }

function choosePerson_createSuper(Derived) { var hasNativeReflectConstruct = choosePerson_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = choosePerson_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = choosePerson_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return choosePerson_possibleConstructorReturn(this, result); }; }

function choosePerson_possibleConstructorReturn(self, call) { if (call && (choosePerson_typeof(call) === "object" || typeof call === "function")) { return call; } return choosePerson_assertThisInitialized(self); }

function choosePerson_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function choosePerson_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function choosePerson_getPrototypeOf(o) { choosePerson_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return choosePerson_getPrototypeOf(o); }

function choosePerson_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





__webpack_require__(1246);






var choosePerson_ChoosePerson = (_dec = Object(mobxreact_esm["b" /* inject */])(function (stores) {
  return {
    store: stores.choosePersonStore
  };
}), _dec(choosePerson_class = Object(mobxreact_esm["c" /* observer */])(choosePerson_class = (choosePerson_temp = /*#__PURE__*/function (_React$Component) {
  choosePerson_inherits(ChoosePerson, _React$Component);

  var _super = choosePerson_createSuper(ChoosePerson);

  function ChoosePerson(props) {
    var _this;

    choosePerson_classCallCheck(this, ChoosePerson);

    _this = _super.call(this, props);

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "listRef", void 0);

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "height", void 0);

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "onSlideTreeChange", function (breadcrumbs) {
      //去刷新接口取数组最后一个id
      var onSlideTreeChange = _this.props.store.onSlideTreeChange;
      onSlideTreeChange(breadcrumbs[breadcrumbs.length - 1]);
    });

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "onSelectedChange", function (users) {
      var setSelected = _this.props.store.setSelected;
      setSelected(users);
    });

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "onLeftClick", function () {
      _this.props.history.goBack();
    });

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "onSubmit", function () {
      _this.props.store.onSubmit(function (pathname, selected) {
        var state = {
          pathname: "/choose_person",
          selected: Object(mobx_module["q" /* toJS */])(selected.filter(function (item) {
            return item.memberId;
          }), {
            recurseEverything: true
          })
        }; // this.props.history.push({
        //   pathname,
        //   state,
        // });

        _this.props.history.goBack();

        storage["a" /* default */].setItem("meetingPerson", JSON.stringify(state.selected));
      });
    });

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "departmentHandle", function (row) {
      //Todo去刷新接口
      var setBreadcrumbsPush = _this.props.store.setBreadcrumbsPush;
      setBreadcrumbsPush(row);
    });

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "onSelectChange", function (rowData) {
      var onSelectChange = _this.props.store.onSelectChange;
      onSelectChange(rowData);
    });

    choosePerson_defineProperty(choosePerson_assertThisInitialized(_this), "onSearchSubmit", function (value) {
      //去调用搜索接口
      if (!value.trim()) {
        return toast_default.a.success("搜索内容不能为空");
      }

      var onSearchSubmit = _this.props.store.onSearchSubmit;
      onSearchSubmit(value);
    });

    _this.state = {
      height: 0
    };
    _this.listRef = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    return _this;
  }

  choosePerson_createClass(ChoosePerson, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var selectedPerson = storage["a" /* default */].getItem("selectedPerson") ? JSON.parse(storage["a" /* default */].getItem("selectedPerson")) : null;

      if (selectedPerson) {// storage.removeItem("selectedPerson");
      }

      var state = selectedPerson || this.props.location.state;
      var _this$props$store = this.props.store,
          initStore = _this$props$store.initStore,
          onSlideTreeChange = _this$props$store.onSlideTreeChange,
          breadcrumbs = _this$props$store.breadcrumbs;

      if (state) {
        initStore(state);
      }

      if (state.pathname === "/remove_person") {
        onSlideTreeChange({
          orgId: breadcrumbs[breadcrumbs.length - 1].orgId
        });
      } else {
        onSlideTreeChange({
          orgId: breadcrumbs[0].orgId
        });
      }

      this.setState({
        height: document.documentElement.clientHeight - this.listRef.current.offsetTop
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$store2 = this.props.store,
          pageTitle = _this$props$store2.pageTitle,
          searchText = _this$props$store2.searchText,
          setSearchText = _this$props$store2.setSearchText,
          searchValue = _this$props$store2.searchValue,
          setSearchValue = _this$props$store2.setSearchValue;
      var height = this.state.height;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "choosePerson-page"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(nav_bar_default.a, {
        mode: "dark",
        icon: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "left"
        }),
        onLeftClick: this.onLeftClick,
        rightContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement("a", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.onSubmit();
          },
          style: {
            marginRight: "5px"
          }
        }, "\u786E\u5B9A")
      }, pageTitle), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(choosePerson_SelectedText, _extends({}, this.props, {
        model: this.props.store
      })), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(search_bar_default.a, {
        placeholder: "\u5728\u7ED3\u679C\u4E2D\u641C\u7D22",
        className: "choose_person_search",
        value: searchValue,
        onChange: setSearchValue,
        onSubmit: setSearchText,
        onCancel: function onCancel() {
          setSearchText("");
          setSearchValue("");
        },
        onClear: function onClear() {
          setSearchText("");
          setSearchValue("");
        }
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(SlideTree_SlideTree, {
        model: this.props.store
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(white_space_default.a, null), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        ref: this.listRef
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(list_default.a, {
        style: {
          height: height || 0,
          overflow: "auto"
        }
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(DepartmentList_DepartmentList, {
        model: this.props.store
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(white_space_default.a, null), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(choosePerson_SelectUserList, {
        model: this.props.store,
        searchText: searchText
      }))));
    }
  }]);

  return ChoosePerson;
}(_react_16_13_1_react_default.a.Component), choosePerson_temp)) || choosePerson_class) || choosePerson_class);
/* harmony default export */ var choosePerson = __webpack_exports__["default"] = (choosePerson_ChoosePerson);

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

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_mobile_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(883);
/* harmony import */ var antd_mobile_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(884);
/* harmony import */ var antd_mobile_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(256);




var CheckboxItem = antd_mobile_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a.CheckboxItem;
var SelectUserItem = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[/* observer */ "c"])(function (props) {
  var onChange = function onChange(e) {
    props.onChange(props.rowData);
  };

  var _props$rowData = props.rowData,
      memberId = _props$rowData.memberId,
      workNumber = _props$rowData.workNumber,
      name = _props$rowData.name,
      position = _props$rowData.position,
      checked = props.checked;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](CheckboxItem, {
    checked: checked,
    onChange: onChange,
    disabled: !workNumber
  }, name, " (", position, "\u3001", workNumber, ")");
});
/* harmony default export */ __webpack_exports__["a"] = (SelectUserItem);

/***/ })

}]);
//# sourceMappingURL=../map/choosePerson.a6c73e21.map