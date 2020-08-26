(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1240:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./src/pages/meeting/notification/store.ts + 2 modules
var notification_store = __webpack_require__(1006);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/white-space/style/css.js
var style_css = __webpack_require__(870);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/white-space/index.js
var white_space = __webpack_require__(871);
var white_space_default = /*#__PURE__*/__webpack_require__.n(white_space);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/tabs/style/css.js
var tabs_style_css = __webpack_require__(872);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/tabs/index.js
var lib_tabs = __webpack_require__(873);
var tabs_default = /*#__PURE__*/__webpack_require__.n(lib_tabs);

// EXTERNAL MODULE: ./node_modules/_dayjs@1.8.34@dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(3);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// CONCATENATED MODULE: ./src/pages/meeting/notification/list/components/MeetingWillSignIn.tsx

/* harmony default export */ var MeetingWillSignIn = (function (props) {
  var store = props.store,
      params = props.params,
      limit = props.limit;
  var MeetingList = store.MeetingList;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(MeetingList, {
    height: props.height,
    params: params,
    limit: limit,
    onFetch: store.fetchWillSignInList
  }));
});
// EXTERNAL MODULE: ./node_modules/_react-router@5.2.0@react-router/esm/react-router.js
var react_router = __webpack_require__(24);

// EXTERNAL MODULE: ./src/components/EasyNarBar/index.tsx
var EasyNarBar = __webpack_require__(857);

// EXTERNAL MODULE: ./src/utils/storage/index.ts
var storage = __webpack_require__(5);

// CONCATENATED MODULE: ./src/pages/meeting/notification/list/MeetingNotification.tsx







function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable prefer-const */








var MeetingNotification_renderMeetingTab = function renderMeetingTab(props) {
  var lv = Object(_react_16_13_1_react["useRef"])(null);
  var userMemberInfo = props.userInfoStore.userMemberInfo;
  var now = dayjs_min_default()().format("YYYY-MM-DD HH:mm:ss");

  var _useState = Object(_react_16_13_1_react["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _ref = userMemberInfo || {},
      WorkNumber = _ref.WorkNumber;

  var tabs = [{
    title: "待签到"
  }, {
    title: "已签到"
  }, {
    title: "未签到"
  }];
  var initialPage = 0;

  if (storage["a" /* default */].getItem("meetingNotificationTab")) {
    var tab = Number(storage["a" /* default */].getItem("meetingNotificationTab"));

    if (tab >= 0) {
      initialPage = tab;
      storage["a" /* default */].removeItem("meetingNotificationTab");
    }
  }

  Object(_react_16_13_1_react["useEffect"])(function () {
    var barDom = document.querySelector(".am-tabs-tab-bar-wrap");
    var navbarDom = document.querySelector(".am-navbar");
    setHeight(Math.max(document.documentElement.clientHeight, document.body.clientHeight) - (barDom ? barDom.offsetHeight : 0) - (navbarDom ? navbarDom.offsetHeight : 0) - 10);
  }, []);
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    ref: lv
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(tabs_default.a, {
    tabs: tabs,
    initialPage: initialPage,
    animated: false,
    useOnPan: false
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "meeting-notification-tab-item"
  }, WorkNumber && /*#__PURE__*/_react_16_13_1_react_default.a.createElement(MeetingWillSignIn, {
    height: height,
    store: props.store,
    params: {
      filterCondition: [{
        type: "1",
        field: "meeting_info_wx_view.WorkNumber",
        condition: "=",
        connection: "&&",
        id: 1,
        value: WorkNumber // 登陆用户的ID

      }, {
        type: "1",
        field: "meeting_info_wx_view.endTime",
        condition: ">",
        connection: "&&",
        id: 2,
        value: now
      }, {
        type: "1",
        field: "meeting_info_wx_view.singinType",
        condition: "=",
        connection: "&&",
        id: 3,
        value: "0"
      }],
      orderBy: [{
        fieldName: "meeting_info_wx_view.startTime",
        sort: "ASC"
      }]
    },
    limit: 20
  })), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "meeting-notification-tab-item"
  }, WorkNumber && /*#__PURE__*/_react_16_13_1_react_default.a.createElement(MeetingWillSignIn, {
    height: height,
    store: props.store,
    params: {
      filterCondition: [{
        type: "1",
        field: "meeting_info_wx_view.WorkNumber",
        condition: "=",
        connection: "&&",
        id: 1,
        value: WorkNumber // useId

      }, {
        type: "1",
        field: "meeting_info_wx_view.singinType",
        condition: "=",
        connection: "&&",
        id: 2,
        value: "1"
      }],
      orderBy: [{
        fieldName: "meeting_info_wx_view.startTime",
        sort: "DESC"
      }]
    },
    limit: 20
  })), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "meeting-notification-tab-item"
  }, WorkNumber && /*#__PURE__*/_react_16_13_1_react_default.a.createElement(MeetingWillSignIn, {
    height: height,
    store: props.store,
    params: {
      filterCondition: [{
        type: "1",
        field: "meeting_info_wx_view.WorkNumber",
        condition: "=",
        connection: "&&",
        id: 1,
        value: WorkNumber // userId

      }, {
        type: "1",
        field: "meeting_info_wx_view.endTime",
        condition: "<",
        connection: "&&",
        id: 2,
        value: now
      }, {
        type: "1",
        field: "meeting_info_wx_view.singinType",
        condition: "=",
        connection: "&&",
        id: 3,
        value: "0"
      }],
      orderBy: [{
        fieldName: "meeting_info_wx_view.startTime",
        sort: "DESC"
      }]
    },
    limit: 20
  }))), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(white_space_default.a, null));
};

/* harmony default export */ var MeetingNotification = (Object(mobxreact_esm["b" /* inject */])("userInfoStore")(Object(mobxreact_esm["c" /* observer */])(function (props) {
  var history = Object(react_router["f" /* useHistory */])();
  Object(_react_16_13_1_react["useEffect"])(function () {
    var fetchUserInfo = props.userInfoStore.fetchUserInfo;
    fetchUserInfo();
  }, []);
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(EasyNarBar["a" /* default */], {
    mainContent: "\u4F1A\u8BAE\u901A\u77E5",
    leftContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
      type: "left"
    }),
    onLeftClick: function onLeftClick() {
      history.push({
        pathname: "/dashboard"
      });
    }
  }), MeetingNotification_renderMeetingTab(props));
})));
// CONCATENATED MODULE: ./src/components/MeetingList/Store.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Store = /*#__PURE__*/function () {
  function Store(props) {
    _classCallCheck(this, Store);

    _defineProperty(this, "historyContext", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "limit", void 0);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "onFetch", void 0);

    _defineProperty(this, "onSuccess", void 0);

    _defineProperty(this, "onFail", void 0);

    this.historyContext = props.historyContext;
    this.params = props.params;
    this.limit = props.limit || 20;
    this.data = props.data;
    this.onFetch = props.onFetch;
    this.onSuccess = props.onSuccess;
    this.onFail = props.onFail;
  }

  _createClass(Store, [{
    key: "fetchData",
    value: function fetchData(skip) {
      return this.onFetch(skip, this.limit, this.params);
    }
  }]);

  return Store;
}();


// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/style/css.js
var toast_style_css = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/index.js
var toast = __webpack_require__(8);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/list-view/style/css.js
var list_view_style_css = __webpack_require__(868);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/list-view/index.js
var list_view = __webpack_require__(869);
var list_view_default = /*#__PURE__*/__webpack_require__.n(list_view);

// EXTERNAL MODULE: ./node_modules/_react-router-dom@5.2.0@react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(183);

// CONCATENATED MODULE: ./src/components/MeetingList/MeetingListV2.tsx







function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || MeetingListV2_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return MeetingListV2_arrayLikeToArray(arr); }

function MeetingListV2_slicedToArray(arr, i) { return MeetingListV2_arrayWithHoles(arr) || MeetingListV2_iterableToArrayLimit(arr, i) || MeetingListV2_unsupportedIterableToArray(arr, i) || MeetingListV2_nonIterableRest(); }

function MeetingListV2_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MeetingListV2_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MeetingListV2_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MeetingListV2_arrayLikeToArray(o, minLen); }

function MeetingListV2_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MeetingListV2_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MeetingListV2_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var MeetingListV2_MeetingList = function MeetingList(props) {
  var lv = Object(_react_16_13_1_react["useRef"])(null);

  var _useState = Object(_react_16_13_1_react["useState"])(0),
      _useState2 = MeetingListV2_slicedToArray(_useState, 2),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = Object(_react_16_13_1_react["useState"])(true),
      _useState4 = MeetingListV2_slicedToArray(_useState3, 2),
      hasMore = _useState4[0],
      setHasMore = _useState4[1];

  var _useState5 = Object(_react_16_13_1_react["useState"])(false),
      _useState6 = MeetingListV2_slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = Object(_react_16_13_1_react["useState"])([]),
      _useState8 = MeetingListV2_slicedToArray(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = Object(_react_16_13_1_react["useState"])(new list_view_default.a.DataSource({
    rowHasChanged: function rowHasChanged(row1, row2) {
      return row1 !== row2;
    }
  })),
      _useState10 = MeetingListV2_slicedToArray(_useState9, 2),
      dataSource = _useState10[0],
      setDataSource = _useState10[1];

  Object(_react_16_13_1_react["useEffect"])(function () {
    getData();
  }, []);

  var getData = function getData() {
    var store = props.store;
    setIsLoading(true);
    store.fetchData(skip).then(function (res) {
      var newData = [].concat(_toConsumableArray(data), _toConsumableArray(res.aaData));
      setSkip(function (preSkip) {
        return preSkip + props.limit;
      });
      setData(newData);
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

  var isSameDate = function isSameDate(start, end) {
    var startFormated = dayjs_min_default()(start).format("YYYY-MM-DD");
    var endFormated = dayjs_min_default()(end).format("YYYY-MM-DD");
    return startFormated === endFormated;
  };

  var renderMeetinglistTime = function renderMeetinglistTime(start, end) {
    var isSame = isSameDate(start, end);

    if (isSame) {
      return dayjs_min_default()(start).format("YYYY-MM-DD HH:mm") + " - " + dayjs_min_default()(end).format("HH:mm");
    } else {
      return dayjs_min_default()(start).format("YYYY-MM-DD HH:mm") + " - " + dayjs_min_default()(end).format("YYYY-MM-DD HH:mm");
    }
  };

  var renderRow = function renderRow(item) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      key: item.meeting_info_wx_view_id,
      className: "meetinglist-item"
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(react_router_dom["b" /* Link */], {
      className: "meetinglist-link",
      to: "/meeting-notification/".concat(item.meeting_info_wx_view_id)
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "meetinglist-content"
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "meetinglist-title"
    }, item.meeting_info_wx_view_name), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "meetinglist-brief"
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "meetinglist-time"
    }, function () {
      if (item.meeting_info_wx_view_startTime && item.meeting_info_wx_view_endTime) {
        return renderMeetinglistTime(item.meeting_info_wx_view_startTime, item.meeting_info_wx_view_endTime);
      } else {
        return null;
      }
    }()), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, function () {
      if (Number(item.meeting_info_wx_view_type) === 0) {
        return "\u5730\u70B9: ".concat(item.meeting_info_wx_view_roomName || "");
      } else {
        return "\u5730\u70B9: ".concat(item.meeting_info_wx_view_address || "");
      }
    }())))), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
      className: "meetinglist-arrow",
      type: "right",
      size: "sm"
    })));
  };

  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    ref: lv,
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(list_view_default.a, {
    dataSource: dataSource,
    renderFooter: function renderFooter() {
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "meetinglist-tip"
      }, isLoading ? "加载中..." : data.length > 0 ? "加载完成" : "暂无数据");
    },
    renderRow: renderRow,
    pageSize: props.limit || 20,
    style: {
      height: props.height
    },
    scrollRenderAheadDistance: 500,
    onEndReached: onEndReached,
    onEndReachedThreshold: 10
  }));
};

/* harmony default export */ var MeetingListV2 = (MeetingListV2_MeetingList);
// EXTERNAL MODULE: ./src/router/index.tsx + 29 modules
var router = __webpack_require__(263);

// CONCATENATED MODULE: ./src/components/MeetingList/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { MeetingList_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MeetingList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







__webpack_require__(1239);

/* harmony default export */ var components_MeetingList = (Object(mobxreact_esm["c" /* observer */])(function (props) {
  var store = new Store(_objectSpread({
    history: router["a" /* HistoryContext */]
  }, props));
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(MeetingListV2, {
    store: store,
    limit: props.limit,
    height: props.height
  });
}));
// EXTERNAL MODULE: ./src/pages/_internal/app/middlewares/AppAuthorized/index.tsx + 1 modules
var AppAuthorized = __webpack_require__(258);

// CONCATENATED MODULE: ./src/pages/meeting/notification/meetingNotification.tsx







__webpack_require__(1240);

var meetingNotification_MeetingNotification = Object(mobxreact_esm["b" /* inject */])('userInfoStore')(function (props) {
  var tokenContext = Object(_react_16_13_1_react["useContext"])(AppAuthorized["a" /* TokenContext */]);
  var meetingListStore = new notification_store["b" /* MeetingListStore */]({
    history: props.history,
    MeetingList: components_MeetingList,
    tokenContext: tokenContext
  });
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(MeetingNotification, {
    store: meetingListStore,
    userInfoStore: props.userInfoStore
  });
});
/* harmony default export */ var meetingNotification = __webpack_exports__["default"] = (meetingNotification_MeetingNotification);

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

/***/ })

}]);
//# sourceMappingURL=../map/meetingNotification.454f5afa.map