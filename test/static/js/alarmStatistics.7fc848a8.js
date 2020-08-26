(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./src/pages/alarm-statistics/store.ts + 3 modules
var alarm_statistics_store = __webpack_require__(395);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/tabs/style/css.js
var css = __webpack_require__(872);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/tabs/index.js
var lib_tabs = __webpack_require__(873);
var tabs_default = /*#__PURE__*/__webpack_require__.n(lib_tabs);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/picker/style/css.js
var style_css = __webpack_require__(908);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/picker/index.js
var picker = __webpack_require__(899);
var picker_default = /*#__PURE__*/__webpack_require__.n(picker);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var icon_style_css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/date-picker/style/css.js
var date_picker_style_css = __webpack_require__(879);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/date-picker/index.js
var date_picker = __webpack_require__(880);
var date_picker_default = /*#__PURE__*/__webpack_require__.n(date_picker);

// EXTERNAL MODULE: ./node_modules/_dayjs@1.8.34@dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(3);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./src/components/DatePickerSelect/index.tsx





function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




__webpack_require__(1208);

var DatePickerSelect_DatePickerSelect = function DatePickerSelect(props) {
  var _useState = Object(_react_16_13_1_react["useState"])(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  Object(_react_16_13_1_react["useEffect"])(function () {
    if (props.defaultValue) {
      setDate(props.defaultValue);
    }
  }, [props.defaultValue]);

  var onChange = function onChange(data) {
    setDate(data);
    props.onChange(data);
  };

  return Object(_react_16_13_1_react["useMemo"])(function () {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "datePicker-select-wrap"
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "datePicker-select"
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "datePicker-select-label"
    }, props.label), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "datePicker-select-value"
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(date_picker_default.a, {
      mode: props.mode,
      title: "\u9009\u62E9\u65E5\u671F",
      maxDate: new Date(Date.now()),
      format: props.format || "YYYY-MM-DD",
      value: date,
      onChange: onChange
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "datePicker-select-content"
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, dayjs_min_default()(date).format(props.format || "YYYY-MM-DD")), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
      type: "down",
      size: "sm"
    })))), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "datePicker-select-handle"
    }, props.handle || null)));
  }, [props.mode, props.format, date, props.handle, props.label]);
};

/* harmony default export */ var components_DatePickerSelect = (DatePickerSelect_DatePickerSelect);
// EXTERNAL MODULE: ./node_modules/_@antv_f2@3.7.6@@antv/f2/dist/f2.js
var f2 = __webpack_require__(996);
var f2_default = /*#__PURE__*/__webpack_require__.n(f2);

// CONCATENATED MODULE: ./src/components/Chart-line/index.tsx



__webpack_require__(1209);

var Chart_line_ChartLine = function ChartLine(props) {
  var mark = props.mark,
      data = props.data,
      active = props.active;
  var chart;

  var initChart = function initChart() {
    chart = new f2_default.a.Chart({
      id: "canvas-".concat(mark),
      pixelRatio: window.devicePixelRatio
    });
    var tabs = mark.substring(mark.indexOf("-") + 1),
        maskPro = "";
    var MASKPRO = tabs === "2" ? "YYYY-MM" : "YYYY-MM-DD";
    chart.source(data, {
      value: {
        tickCount: 4,
        min: 0
      },
      date: {
        type: "timeCat",
        range: [0, 1],
        tickCount: 3,
        mask: MASKPRO
      }
    });
    chart.tooltip({
      custom: true,
      showXTip: true,
      showYTip: true,
      snap: true,
      crosshairsType: "xy",
      crosshairsStyle: {
        lineDash: [2]
      }
    });
    chart.axis("date", {
      label: function label(text, index, total) {
        var textCfg = {};

        if (index === 0) {
          textCfg.textAlign = "left";
        } else if (index === total - 1) {
          textCfg.textAlign = "right";
        }

        return textCfg;
      }
    });
    chart.line().position("date*value");
    chart.render();
  };

  Object(_react_16_13_1_react["useEffect"])(function () {
    if (data && data.length && active) {
      initChart();
    }

    return function () {
      chart && chart.clear();
      chart = null;
    };
  }, [props.data, props.active]);
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "chart-line-wrap"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("canvas", {
    className: "chart-line",
    id: "canvas-".concat(mark)
  }));
};

/* harmony default export */ var Chart_line = (Chart_line_ChartLine);
// CONCATENATED MODULE: ./src/pages/alarm-statistics/overview/index.tsx


__webpack_require__(1210);

var overview_Overview = function Overview(props) {
  var children = props.children;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "alarm-statistics-overview-wrap"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("ul", {
    className: "alarm-statistics-overview"
  }, children));
};

var Item = /*#__PURE__*/_react_16_13_1_react_default.a.memo(function (props) {
  var label = props.label,
      value = props.value;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("li", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "alarm-statistics-overview-value"
  }, value), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "alarm-statistics-overview-title"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "alarm-statistics-overview-label"
  }, label)));
});
overview_Overview.item = Item;
/* harmony default export */ var overview = (overview_Overview);
// CONCATENATED MODULE: ./src/pages/alarm-statistics/alarmType/index.tsx


__webpack_require__(1211);

var alarmType_AlarmType = function AlarmType(props) {
  var children = props.children;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "alarm-statistics-alarmType"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "alarm-statistics-alarmType-title"
  }, "\u62A5\u8B66\u7C7B\u578B\u6570\u91CFTOP10"), children && children.length > 0 ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement("ul", {
    className: "alarm-statistics-alarmType-ul"
  }, children) : /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "alarm-statistics-alarmType-empty"
  }, "\u6682\u65E0\u6570\u636E"));
};

var alarmType_Item = /*#__PURE__*/_react_16_13_1_react_default.a.memo(function (props) {
  var label = props.label,
      value = props.value,
      rate = props.rate,
      index = props.index;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("li", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "alarm-statistics-alarmType-item-index"
  }, index), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "alarm-statistics-alarmType-item-label"
  }, label), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "alarm-statistics-alarmType-item-main"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "alarm-statistics-alarmType-item-value"
  }, "\u6570\u91CF: ", /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, value)), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
    className: "alarm-statistics-alarmType-item-value"
  }, "\u5360\u6BD4: ", /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, "".concat(rate))))));
});
alarmType_AlarmType.item = alarmType_Item;
/* harmony default export */ var alarmType = (alarmType_AlarmType);
// CONCATENATED MODULE: ./src/pages/alarm-statistics/TabItem/index.tsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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







var TabItem_TabItem = /*#__PURE__*/function (_React$Component) {
  _inherits(TabItem, _React$Component);

  var _super = _createSuper(TabItem);

  function TabItem() {
    _classCallCheck(this, TabItem);

    return _super.apply(this, arguments);
  }

  _createClass(TabItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tab = _this$props.tab,
          mode = _this$props.mode,
          overviewData = _this$props.overviewData,
          alarmTypeData = _this$props.alarmTypeData,
          numberChartData = _this$props.numberChartData,
          active = _this$props.active,
          store = _this$props.store,
          format = _this$props.format;
      var evaluationValue = store.evaluationValue;
      var data = alarmTypeData.filter(function (item) {
        return item.value;
      });
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(components_DatePickerSelect, {
        label: "\u7EDF\u8BA1\u65F6\u95F4",
        mode: mode,
        format: format,
        onChange: evaluationValue
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "alarm-statistics-section"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(overview, null, overviewData.map(function (item, i) {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(overview.item, _extends({
          key: i
        }, item));
      })), active && /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "alarm-statistics-chart-wrap"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "alarm-statistics-chart-title"
      }, "\u6570\u91CF\u8D8B\u52BF"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Chart_line, {
        key: tab,
        mark: "number-".concat(tab),
        className: "alarm-statistics-chart",
        active: active,
        data: numberChartData
      })), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(alarmType, null, data.map(function (item, index) {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(alarmType.item, _extends({
          key: index,
          index: index + 1
        }, item));
      }))));
    }
  }]);

  return TabItem;
}(_react_16_13_1_react_default.a.Component);

/* harmony default export */ var alarm_statistics_TabItem = (TabItem_TabItem);
// EXTERNAL MODULE: ./src/pages/alarm-statistics/constance.ts
var constance = __webpack_require__(49);

// EXTERNAL MODULE: ./src/components/EasyNarBar/index.tsx
var EasyNarBar = __webpack_require__(857);

// CONCATENATED MODULE: ./src/pages/alarm-statistics/alarmStatistics.tsx







var _dec, _class;

function alarmStatistics_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { alarmStatistics_typeof = function _typeof(obj) { return typeof obj; }; } else { alarmStatistics_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return alarmStatistics_typeof(obj); }

function alarmStatistics_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function alarmStatistics_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function alarmStatistics_createClass(Constructor, protoProps, staticProps) { if (protoProps) alarmStatistics_defineProperties(Constructor.prototype, protoProps); if (staticProps) alarmStatistics_defineProperties(Constructor, staticProps); return Constructor; }

function alarmStatistics_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) alarmStatistics_setPrototypeOf(subClass, superClass); }

function alarmStatistics_setPrototypeOf(o, p) { alarmStatistics_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return alarmStatistics_setPrototypeOf(o, p); }

function alarmStatistics_createSuper(Derived) { var hasNativeReflectConstruct = alarmStatistics_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = alarmStatistics_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = alarmStatistics_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return alarmStatistics_possibleConstructorReturn(this, result); }; }

function alarmStatistics_possibleConstructorReturn(self, call) { if (call && (alarmStatistics_typeof(call) === "object" || typeof call === "function")) { return call; } return alarmStatistics_assertThisInitialized(self); }

function alarmStatistics_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function alarmStatistics_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function alarmStatistics_getPrototypeOf(o) { alarmStatistics_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return alarmStatistics_getPrototypeOf(o); }

 // import { RouteComponentProps } from 'react-router-dom';





var alarmStatistics_tabs = [{
  title: "日"
}, {
  title: "月"
}, {
  title: "年"
}]; // interface IProps extends RouteComponentProps {
//     [key: string]: any;
// }

var alarmStatistics_AlarmStatistics = (_dec = Object(mobxreact_esm["b" /* inject */])("alarmStatisticsStore"), _dec(_class = Object(mobxreact_esm["c" /* observer */])(_class = /*#__PURE__*/function (_React$Component) {
  alarmStatistics_inherits(AlarmStatistics, _React$Component);

  var _super = alarmStatistics_createSuper(AlarmStatistics);

  function AlarmStatistics() {
    alarmStatistics_classCallCheck(this, AlarmStatistics);

    return _super.apply(this, arguments);
  }

  alarmStatistics_createClass(AlarmStatistics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$alarmStat = this.props.alarmStatisticsStore,
          fetchAllAgency = _this$props$alarmStat.fetchAllAgency,
          mediator = _this$props$alarmStat.mediator,
          allFetch = _this$props$alarmStat.allFetch,
          fetchTopTenData = _this$props$alarmStat.fetchTopTenData,
          initData = _this$props$alarmStat.initData,
          getAgencyseletedObj = _this$props$alarmStat.getAgencyseletedObj,
          fetchPanelData = _this$props$alarmStat.fetchPanelData,
          fetchAmountTrendEvent = _this$props$alarmStat.fetchAmountTrendEvent;
      mediator();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var initData = this.props.alarmStatisticsStore.initData;
      initData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          store = _this$props.store,
          history = _this$props.history,
          _this$props$alarmStat2 = _this$props.alarmStatisticsStore,
          getAgencyseletedObj = _this$props$alarmStat2.getAgencyseletedObj,
          mediator = _this$props$alarmStat2.mediator;
      var view = store.view,
          curPage = store.curPage,
          agency = store.agency,
          agencyName = store.agencyName,
          overviewData = store.overviewData,
          alarmTypeData = store.alarmTypeData,
          numberChartData = store.numberChartData,
          timeChartData = store.timeChartData,
          onSwitchView = store.onSwitchView,
          onPageChange = store.onPageChange,
          agencyId = store.agencyId;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(EasyNarBar["a" /* default */], {
        mainContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(picker_default.a, {
          data: agency,
          cols: 1,
          onChange: function onChange(choice) {
            getAgencyseletedObj(choice).mediator();
          }
        }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: "alarm-statistics-title"
        }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, agencyName), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "down",
          size: "xs"
        }))),
        leftContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "left"
        }),
        onLeftClick: function onLeftClick() {
          history.push("/dashboard");
        }
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(tabs_default.a, {
        tabs: alarmStatistics_tabs,
        page: curPage,
        onChange: onPageChange,
        animated: false,
        useOnPan: false,
        swipeable: false
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(alarm_statistics_TabItem, {
        key: 0,
        store: store,
        tab: constance["a" /* EnumDimension */]["day"],
        mode: "date",
        format: "YYYY-MM-DD",
        view: view,
        active: curPage === constance["a" /* EnumDimension */]["day"],
        overviewData: overviewData,
        alarmTypeData: alarmTypeData,
        numberChartData: numberChartData,
        timeChartData: timeChartData,
        onSwitchView: onSwitchView
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(alarm_statistics_TabItem, {
        key: 1,
        store: store,
        tab: constance["a" /* EnumDimension */]["month"],
        mode: "month",
        format: "YYYY-MM",
        view: view,
        active: curPage === constance["a" /* EnumDimension */]["month"],
        overviewData: overviewData,
        alarmTypeData: alarmTypeData,
        numberChartData: numberChartData,
        timeChartData: timeChartData,
        onSwitchView: onSwitchView
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(alarm_statistics_TabItem, {
        key: 2,
        store: store,
        tab: constance["a" /* EnumDimension */]["year"],
        mode: "year",
        format: "YYYY",
        view: view,
        active: curPage === constance["a" /* EnumDimension */]["year"],
        overviewData: overviewData,
        alarmTypeData: alarmTypeData,
        numberChartData: numberChartData,
        timeChartData: timeChartData,
        onSwitchView: onSwitchView
      })));
    }
  }]);

  return AlarmStatistics;
}(_react_16_13_1_react_default.a.Component)) || _class) || _class);
/* harmony default export */ var alarmStatistics = (alarmStatistics_AlarmStatistics);
// CONCATENATED MODULE: ./src/pages/alarm-statistics/index.tsx




__webpack_require__(1212);

/* harmony default export */ var alarm_statistics = __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(alarmStatistics, {
    store: alarm_statistics_store["a" /* default */],
    history: props.history
  });
});

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

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function arrayTreeFilter(data, filterFn, options) {
    options = options || {};
    options.childrenKeyName = options.childrenKeyName || "children";
    var children = data || [];
    var result = [];
    var level = 0;
    do {
        var foundItem = children.filter(function (item) {
            return filterFn(item, level);
        })[0];
        if (!foundItem) {
            break;
        }
        result.push(foundItem);
        children = foundItem[options.childrenKeyName] || [];
        level += 1;
    } while (children.length > 0);
    return result;
}

return arrayTreeFilter;

})));


/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nonsense = undefined;

var _classCallCheck2 = __webpack_require__(64);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _AbstractPicker2 = __webpack_require__(918);

var _AbstractPicker3 = _interopRequireDefault(_AbstractPicker2);

var _propTypes = __webpack_require__(10);

var PropTypes = _interopRequireWildcard(_propTypes);

var _popupProps = __webpack_require__(922);

var _popupProps2 = _interopRequireDefault(_popupProps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// TODO:
// fix error TS4026:Public static property 'defaultProps' of exported class has or is using name 'React.ReactElement'
// fix error TS6133: 'React' is declared but its value is never read.
var nonsense = exports.nonsense = React.createElement('div', null);

var Picker = function (_AbstractPicker) {
    (0, _inherits3['default'])(Picker, _AbstractPicker);

    function Picker() {
        (0, _classCallCheck3['default'])(this, Picker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));

        _this.popupProps = _popupProps2['default'];
        return _this;
    }

    return Picker;
}(_AbstractPicker3['default']);

exports['default'] = Picker;

Picker.defaultProps = (0, _AbstractPicker2.getDefaultProps)();
Picker.contextTypes = {
    antLocale: PropTypes.object
};

/***/ }),

/***/ 918:
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

exports.getDefaultProps = getDefaultProps;

var _arrayTreeFilter = __webpack_require__(886);

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _Cascader = __webpack_require__(919);

var _Cascader2 = _interopRequireDefault(_Cascader);

var _Popup = __webpack_require__(920);

var _Popup2 = _interopRequireDefault(_Popup);

var _MultiPicker = __webpack_require__(894);

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

var _Picker = __webpack_require__(895);

var _Picker2 = _interopRequireDefault(_Picker);

var _getLocale = __webpack_require__(862);

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
/* tslint:disable:jsx-no-multiline-js */
function getDefaultProps() {
    var defaultFormat = function defaultFormat(values) {
        // label is JSX.Element or other
        if (values.length > 0 && typeof values[0] !== 'string') {
            return values;
        }
        return values.join(',');
    };
    return {
        triggerType: 'onClick',
        prefixCls: 'am-picker',
        pickerPrefixCls: 'am-picker-col',
        popupPrefixCls: 'am-picker-popup',
        format: defaultFormat,
        cols: 3,
        cascade: true,
        title: ''
    };
}

var AbstractPicker = function (_React$Component) {
    (0, _inherits3['default'])(AbstractPicker, _React$Component);

    function AbstractPicker() {
        (0, _classCallCheck3['default'])(this, AbstractPicker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (AbstractPicker.__proto__ || Object.getPrototypeOf(AbstractPicker)).apply(this, arguments));

        _this.getSel = function () {
            var value = _this.props.value || [];
            var treeChildren = void 0;
            var data = _this.props.data;

            if (_this.props.cascade) {
                treeChildren = (0, _arrayTreeFilter2['default'])(data, function (c, level) {
                    return c.value === value[level];
                });
            } else {
                treeChildren = value.map(function (v, i) {
                    return data[i].filter(function (d) {
                        return d.value === v;
                    })[0];
                });
            }
            return _this.props.format && _this.props.format(treeChildren.map(function (v) {
                return v.label;
            }));
        };
        _this.getPickerCol = function () {
            var _this$props = _this.props,
                data = _this$props.data,
                pickerPrefixCls = _this$props.pickerPrefixCls,
                itemStyle = _this$props.itemStyle,
                indicatorStyle = _this$props.indicatorStyle;

            return data.map(function (col, index) {
                return React.createElement(
                    _Picker2['default'],
                    { key: index, prefixCls: pickerPrefixCls, style: { flex: 1 }, itemStyle: itemStyle, indicatorStyle: indicatorStyle },
                    col.map(function (item) {
                        return React.createElement(
                            _Picker2['default'].Item,
                            { key: item.value, value: item.value },
                            item.label
                        );
                    })
                );
            });
        };
        _this.onOk = function (v) {
            if (_this.scrollValue !== undefined) {
                v = _this.scrollValue;
            }
            if (_this.props.onChange) {
                _this.props.onChange(v);
            }
            if (_this.props.onOk) {
                _this.props.onOk(v);
            }
        };
        _this.setScrollValue = function (v) {
            _this.scrollValue = v;
        };
        _this.setCasecadeScrollValue = function (v) {
            // 级联情况下保证数据正确性，滚动过程中只有当最后一级变化时才变更数据
            if (v && _this.scrollValue) {
                var length = _this.scrollValue.length;
                if (length === v.length && _this.scrollValue[length - 1] === v[length - 1]) {
                    return;
                }
            }
            _this.setScrollValue(v);
        };
        _this.fixOnOk = function (cascader) {
            if (cascader && cascader.onOk !== _this.onOk) {
                cascader.onOk = _this.onOk;
                cascader.forceUpdate();
            }
        };
        _this.onPickerChange = function (v) {
            _this.setScrollValue(v);
            if (_this.props.onPickerChange) {
                _this.props.onPickerChange(v);
            }
        };
        _this.onVisibleChange = function (visible) {
            _this.setScrollValue(undefined);
            if (_this.props.onVisibleChange) {
                _this.props.onVisibleChange(visible);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(AbstractPicker, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                _a$value = _a.value,
                value = _a$value === undefined ? [] : _a$value,
                popupPrefixCls = _a.popupPrefixCls,
                itemStyle = _a.itemStyle,
                indicatorStyle = _a.indicatorStyle,
                okText = _a.okText,
                dismissText = _a.dismissText,
                extra = _a.extra,
                cascade = _a.cascade,
                prefixCls = _a.prefixCls,
                pickerPrefixCls = _a.pickerPrefixCls,
                data = _a.data,
                cols = _a.cols,
                onOk = _a.onOk,
                restProps = __rest(_a, ["children", "value", "popupPrefixCls", "itemStyle", "indicatorStyle", "okText", "dismissText", "extra", "cascade", "prefixCls", "pickerPrefixCls", "data", "cols", "onOk"]);
            // tslint:disable-next-line:variable-name
            var _locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'Picker', function () {
                return __webpack_require__(921);
            });
            var cascader = void 0;
            var popupMoreProps = {};
            if (cascade) {
                cascader = React.createElement(_Cascader2['default'], { prefixCls: prefixCls, pickerPrefixCls: pickerPrefixCls, data: data, cols: cols, onChange: this.onPickerChange, onScrollChange: this.setCasecadeScrollValue, pickerItemStyle: itemStyle, indicatorStyle: indicatorStyle });
            } else {
                cascader = React.createElement(
                    _MultiPicker2['default'],
                    { style: { flexDirection: 'row', alignItems: 'center' }, prefixCls: prefixCls, onScrollChange: this.setScrollValue },
                    this.getPickerCol()
                );
                popupMoreProps = {
                    pickerValueProp: 'selectedValue',
                    pickerValueChangeProp: 'onValueChange'
                };
            }
            return React.createElement(
                _Popup2['default'],
                (0, _extends3['default'])({ cascader: cascader }, this.popupProps, restProps, { prefixCls: popupPrefixCls, value: value, dismissText: dismissText || _locale.dismissText, okText: okText || _locale.okText }, popupMoreProps, { ref: this.fixOnOk, onVisibleChange: this.onVisibleChange }),
                children && typeof children !== 'string' && React.isValidElement(children) && React.cloneElement(children, {
                    extra: this.getSel() || extra || _locale.extra
                })
            );
        }
    }]);
    return AbstractPicker;
}(React.Component);

exports['default'] = AbstractPicker;

/***/ }),

/***/ 919:
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

var _react2 = _interopRequireDefault(_react);

var _arrayTreeFilter = __webpack_require__(886);

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _MultiPicker = __webpack_require__(894);

var _MultiPicker2 = _interopRequireDefault(_MultiPicker);

var _Picker = __webpack_require__(895);

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Cascader = function (_React$Component) {
    (0, _inherits3['default'])(Cascader, _React$Component);

    function Cascader() {
        (0, _classCallCheck3['default'])(this, Cascader);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).apply(this, arguments));

        _this.state = {
            value: _this.getValue(_this.props.data, _this.props.defaultValue || _this.props.value)
        };
        _this.onValueChange = function (value, index) {
            var children = (0, _arrayTreeFilter2['default'])(_this.props.data, function (c, level) {
                return level <= index && c.value === value[level];
            });
            var data = children[index];
            var i = void 0;
            for (i = index + 1; data && data.children && data.children.length && i < _this.props.cols; i++) {
                data = data.children[0];
                value[i] = data.value;
            }
            value.length = i;
            _this.setState({ value: value });
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Cascader, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: this.getValue(nextProps.data, nextProps.value)
                });
            }
        }
    }, {
        key: 'getValue',
        value: function getValue(d, val) {
            var data = d || this.props.data;
            var value = val || this.props.value || this.props.defaultValue;
            if (!value || !value.length || value.indexOf(undefined) > -1) {
                value = [];
                for (var i = 0; i < this.props.cols; i++) {
                    if (data && data.length) {
                        value[i] = data[0].value;
                        data = data[0].children;
                    }
                }
            }
            return value;
        }
    }, {
        key: 'getCols',
        value: function getCols() {
            var _props = this.props,
                data = _props.data,
                cols = _props.cols,
                pickerPrefixCls = _props.pickerPrefixCls,
                disabled = _props.disabled,
                pickerItemStyle = _props.pickerItemStyle,
                indicatorStyle = _props.indicatorStyle;

            var value = this.state.value;
            var childrenTree = (0, _arrayTreeFilter2['default'])(data, function (c, level) {
                return c.value === value[level];
            }).map(function (c) {
                return c.children;
            });
            // in case the users data is async get when select change
            var needPad = cols - childrenTree.length;
            if (needPad > 0) {
                for (var i = 0; i < needPad; i++) {
                    childrenTree.push([]);
                }
            }
            childrenTree.length = cols - 1;
            childrenTree.unshift(data);
            return childrenTree.map(function () {
                var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var level = arguments[1];
                return _react2['default'].createElement(_Picker2['default'], { key: level, prefixCls: pickerPrefixCls, style: { flex: 1 }, disabled: disabled, itemStyle: pickerItemStyle, indicatorStyle: indicatorStyle }, children.map(function (item) {
                    return _react2['default'].createElement(_Picker2['default'].Item, { value: item.value, key: item.value }, item.label);
                }));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var prefixCls = props.prefixCls,
                className = props.className,
                rootNativeProps = props.rootNativeProps,
                style = props.style;

            var cols = this.getCols();
            var multiStyle = (0, _extends3['default'])({ flexDirection: 'row', alignItems: 'center' }, style);
            return _react2['default'].createElement(_MultiPicker2['default'], { style: multiStyle, prefixCls: prefixCls, className: className, selectedValue: this.state.value, rootNativeProps: rootNativeProps, onValueChange: this.onValueChange, onScrollChange: props.onScrollChange }, cols);
        }
    }]);
    return Cascader;
}(_react2['default'].Component);

Cascader.defaultProps = {
    cols: 3,
    prefixCls: 'rmc-cascader',
    pickerPrefixCls: 'rmc-picker',
    data: [],
    disabled: false
};
exports['default'] = Cascader;
module.exports = exports['default'];

/***/ }),

/***/ 920:
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

var _react2 = _interopRequireDefault(_react);

var _Popup = __webpack_require__(928);

var _Popup2 = _interopRequireDefault(_Popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PopupCascader = function (_React$Component) {
    (0, _inherits3['default'])(PopupCascader, _React$Component);

    function PopupCascader() {
        (0, _classCallCheck3['default'])(this, PopupCascader);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (PopupCascader.__proto__ || Object.getPrototypeOf(PopupCascader)).apply(this, arguments));

        _this.onOk = function (v) {
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                onOk = _this$props.onOk;

            if (onChange) {
                onChange(v);
            }
            if (onOk) {
                onOk(v);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(PopupCascader, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(_Popup2['default'], (0, _extends3['default'])({ picker: this.props.cascader }, this.props, { onOk: this.onOk }));
        }
    }]);
    return PopupCascader;
}(_react2['default'].Component);

PopupCascader.defaultProps = {
    pickerValueProp: 'value',
    pickerValueChangeProp: 'onChange'
};
exports['default'] = PopupCascader;
module.exports = exports['default'];

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    okText: '确定',
    dismissText: '取消',
    extra: '请选择'
};
module.exports = exports['default'];

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    WrapComponent: 'div',
    transitionName: 'am-slide-up',
    maskTransitionName: 'am-fade'
};
module.exports = exports['default'];

/***/ })

}]);
//# sourceMappingURL=../map/alarmStatistics.3d37d070.map