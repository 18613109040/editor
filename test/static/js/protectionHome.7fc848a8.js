(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1282:
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

// CONCATENATED MODULE: ./src/pages/protection/home/store.ts
var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var store_Store = (_dec = mobx_module["f" /* action */].bound, _dec2 = mobx_module["f" /* action */].bound, _dec3 = mobx_module["f" /* action */].bound, _dec4 = mobx_module["f" /* action */].bound, (_class = (_temp = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "modules", _descriptor, this);

    _initializerDefineProperty(this, "children", _descriptor2, this);

    _initializerDefineProperty(this, "error", _descriptor3, this);

    _initializerDefineProperty(this, "photo", _descriptor4, this);

    _initializerDefineProperty(this, "height", _descriptor5, this);

    _initializerDefineProperty(this, "defenceAreaSelected", _descriptor6, this);

    _initializerDefineProperty(this, "hostSelected", _descriptor7, this);

    _initializerDefineProperty(this, "defenceAreaData", _descriptor8, this);

    _initializerDefineProperty(this, "hostData", _descriptor9, this);

    _initializerDefineProperty(this, "deviceGroupStatus", _descriptor10, this);

    _initializerDefineProperty(this, "location", _descriptor11, this);

    _initializerDefineProperty(this, "setLocation", _descriptor12, this);

    _initializerDefineProperty(this, "resetStore", _descriptor13, this);

    _initializerDefineProperty(this, "fetchDeviceGroupStatus", _descriptor14, this);
  }

  _createClass(Store, [{
    key: "fetchDefenseArea",
    value: function fetchDefenseArea(skip, limit, location) {
      var filterCondition = [];

      if (this.defenceAreaSelected !== "all") {
        filterCondition.push({
          type: "1",
          field: "view_defense_area_information_main.status",
          condition: "=",
          connection: "&amp;&amp;",
          id: 1,
          pid: 0,
          value: this.defenceAreaSelected
        });
      }

      if (location && location.idKey !== "all" && location.id) {
        filterCondition.push({
          type: "1",
          field: "view_defense_area_information_main.".concat(location.idKey),
          condition: "=",
          connection: "&amp;&amp;",
          id: 1,
          pid: 0,
          value: location.id
        });
      }

      return new Promise(function (resolve, reject) {
        http["default"].getShowTableData({
          tableName: "view_defense_area_information_main",
          length: limit,
          start: skip,
          type: "TABLE_QUERY",
          params: Object.assign({}, filterCondition.length > 0 && {
            filterCondition: filterCondition
          }),
          fieldName: ["view_defense_area_information_main.id", "view_defense_area_information_main.name", "view_defense_area_information_main.status", "view_defense_area_information_main.mainFrameName", "view_defense_area_information_main.areaLocationName"]
        }).then(function (data) {
          var success = data.success;

          if (success) {
            resolve(data.result);
          } else {
            reject(new Error("数据错误，请确认"));
          }
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: "fetchDefenseHost",
    value: function fetchDefenseHost(skip, limit, location) {
      var filterCondition = [];

      if (this.hostSelected !== "all") {
        filterCondition.push({
          type: "1",
          field: "view_defense_host_information.check_value",
          condition: "=",
          connection: "&amp;&amp;",
          id: 1,
          pid: 0,
          value: this.hostSelected
        });
      }

      if (location && location.idKey !== "all" && location.id) {
        filterCondition.push({
          type: "1",
          field: "view_defense_host_information.".concat(location.idKey),
          condition: "=",
          connection: "&amp;&amp;",
          id: 1,
          pid: 0,
          value: location.id
        });
      }

      return new Promise(function (resolve, reject) {
        http["default"].getShowTableData({
          tableName: "view_defense_host_information",
          length: limit,
          start: skip,
          type: "TABLE_QUERY",
          params: Object.assign({}, filterCondition.length > 0 && {
            filterCondition: filterCondition
          }),
          fieldName: ["view_defense_host_information.id", "view_defense_host_information.name", "view_defense_host_information.DeviceIp", "view_defense_host_information.DevicePort", "view_defense_host_information.areaLocationName", "view_defense_host_information.check_value"]
        }).then(function (data) {
          var success = data.success;

          if (success) {
            resolve(data.result);
          } else {
            reject(new Error("数据错误，请确认"));
          }
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: "defenceAreaChange",
    value: function defenceAreaChange(value) {
      this.defenceAreaSelected = value;
    }
  }, {
    key: "hostChange",
    value: function hostChange(value) {
      this.hostSelected = value;
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
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "defenceAreaSelected", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "all";
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "hostSelected", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "all";
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "defenceAreaData", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "hostData", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "deviceGroupStatus", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "location", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      idKey: "all"
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "setLocation", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this = this;

    return function (location) {
      _this.location = location;
    };
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "resetStore", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.defenceAreaSelected = "all";
      _this2.hostSelected = "all";
      _this2.defenceAreaData = [];
      _this2.hostData = [];
      _this2.deviceGroupStatus = {};
    };
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "fetchDeviceGroupStatus", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      var _this3$location = _this3.location,
          idKey = _this3$location.idKey,
          id = _this3$location.id;
      var filterCondition = [];

      if (idKey !== "all") {
        filterCondition.push({
          type: "1",
          field: "view_defense_area_information.".concat(idKey),
          condition: "=",
          connection: "&amp;&amp;",
          id: 1,
          pid: 0,
          value: id
        });
      }

      return new Promise(function (resolve, reject) {
        http["default"].getShowTableData({
          tableName: "view_defense_area_information",
          start: 0,
          type: "TABLE_QUERY",
          params: {
            filterCondition: filterCondition
          },
          fieldName: ["view_defense_area_information.id", "view_defense_area_information.status"],
          statisticsColumn: [{
            tableName: "view_defense_area_information",
            columnType: "GROUP_BY",
            columnName: "status"
          }, {
            tableName: "view_defense_area_information",
            columnType: "COUNT",
            columnName: "id"
          }]
        }).then(function (data) {
          var result = data.result,
              success = data.success,
              message = data.message;

          if (!success) {
            reject(message);
            return;
          }

          result.aaData.unshift({
            view_defense_area_information_id: result.aaData.reduce(function (a, b) {
              return a + Number(b.view_defense_area_information_id);
            }, 0),
            view_defense_area_information_status: "all"
          });
          var deviceGroupStatus = {};
          result.aaData.forEach(function (item) {
            deviceGroupStatus[item.view_defense_area_information_status] = item.view_defense_area_information_id;
          });
          _this3.deviceGroupStatus = deviceGroupStatus;
          resolve(true);
        })["catch"](function (err) {
          _this3.deviceGroupStatus = {};
          reject(err);
        });
      });
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "fetchDefenseArea", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "fetchDefenseArea"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetchDefenseHost", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "fetchDefenseHost"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "defenceAreaChange", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "defenceAreaChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hostChange", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "hostChange"), _class.prototype)), _class));
/* harmony default export */ var home_store = (new store_Store());
// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/tabs/style/css.js
var css = __webpack_require__(872);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/tabs/index.js
var tabs = __webpack_require__(873);
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var style_css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// EXTERNAL MODULE: ./src/components/AreaSelect2/index.tsx + 4 modules
var AreaSelect2 = __webpack_require__(965);

// EXTERNAL MODULE: ./src/components/ProtectionList/index.tsx + 2 modules
var ProtectionList = __webpack_require__(967);

// CONCATENATED MODULE: ./src/pages/protection/home/DeviceNumber/index.tsx




__webpack_require__(1202);

var ProtectionDeviceNumber = /*#__PURE__*/_react_16_13_1_react_default.a.memo(function (props) {
  var children = props.children,
      isLoading = props.isLoading;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-deviceNumber-wrap"
  }, isLoading ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-deviceNumber-loading"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
    type: "loading"
  })) : "", /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-deviceNumber"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-deviceNumber-title"
  }, "\u9632\u533A\u8BBE\u5907\uFF08\u4E2A\uFF09"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("ul", {
    className: "protection-deviceNumber-list"
  }, children)));
});
var Item = /*#__PURE__*/_react_16_13_1_react_default.a.memo(function (props) {
  var statusName = props.statusName,
      _props$total = props.total,
      total = _props$total === void 0 ? 0 : _props$total;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("li", {
    className: "protection-deviceNumber-item"
  }, statusName, ": ", total);
});
ProtectionDeviceNumber.item = Item;
/* harmony default export */ var DeviceNumber = (ProtectionDeviceNumber);
// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/picker/style/css.js
var picker_style_css = __webpack_require__(908);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/picker/index.js
var picker = __webpack_require__(899);
var picker_default = /*#__PURE__*/__webpack_require__.n(picker);

// CONCATENATED MODULE: ./src/pages/protection/home/Picker/index.tsx





function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



__webpack_require__(1203);

var ProtectionPicker = /*#__PURE__*/_react_16_13_1_react_default.a.forwardRef(function (props, ref) {
  var data = props.data,
      select = props.select,
      _onChange = props.onChange;

  var returnLabel = function returnLabel() {
    var selectItem = data.find(function (d) {
      return d.value === select;
    });
    return selectItem ? selectItem.label : '未知';
  };

  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-picker",
    ref: ref
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-picker-label"
  }, "\u72B6\u6001"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(picker_default.a, {
    data: data,
    cols: 1,
    value: [select],
    onChange: function onChange(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          value = _ref2[0];

      _onChange && _onChange(value);
    }
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-picker-select"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, returnLabel()), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
    className: "protection-picker-more",
    type: "down",
    size: "sm"
  }))));
});
/* harmony default export */ var Picker = (ProtectionPicker);
// EXTERNAL MODULE: ./src/components/DefenseStatus/index.tsx
var DefenseStatus = __webpack_require__(916);

// EXTERNAL MODULE: ./src/pages/protection/constant.ts
var constant = __webpack_require__(885);

// EXTERNAL MODULE: ./src/components/EasyNarBar/index.tsx
var EasyNarBar = __webpack_require__(857);

// CONCATENATED MODULE: ./src/pages/protection/home/home.tsx





function home_slicedToArray(arr, i) { return home_arrayWithHoles(arr) || home_iterableToArrayLimit(arr, i) || home_unsupportedIterableToArray(arr, i) || home_nonIterableRest(); }

function home_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function home_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return home_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return home_arrayLikeToArray(o, minLen); }

function home_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function home_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function home_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var home_tabs = [{
  title: "防区列表"
}, {
  title: "主机列表"
}];
var EMPTY_TEXT = "无";
var AREA_LIMIT = 20;
var HOST_LIMIT = 20;

var statistics_status = function () {
  var keys = Object.keys(constant["a" /* DEFENSE_STATUS */]);
  var data = keys.map(function (key) {
    return {
      value: key,
      label: constant["a" /* DEFENSE_STATUS */][key]
    };
  }).filter(function (item) {
    return ["布防", "撤防", "旁路", "未知"].indexOf(item.label) !== -1;
  });
  data.unshift({
    value: "all",
    label: "总数"
  });
  return data;
}();

var defense_status = function () {
  var keys = Object.keys(constant["a" /* DEFENSE_STATUS */]);
  var data = keys.map(function (key) {
    return {
      value: key,
      label: constant["a" /* DEFENSE_STATUS */][key]
    };
  }).filter(function (item) {
    return ["布防", "撤防", "旁路", "未知"].indexOf(item.label) !== -1;
  });
  data.unshift({
    value: "all",
    label: "全部"
  });
  return data;
}();

var host_status = function () {
  var keys = Object.keys(constant["a" /* DEFENSE_STATUS */]);
  var data = keys.map(function (key) {
    return {
      value: key,
      label: constant["a" /* DEFENSE_STATUS */][key]
    };
  }).filter(function (item) {
    return ["在线", "离线"].indexOf(item.label) !== -1;
  });
  data.unshift({
    value: "all",
    label: "全部"
  });
  return data;
}();

var Home = Object(mobxreact_esm["c" /* observer */])(function (props) {
  var store = props.store,
      history = props.history;
  var deviceGroupStatus = store.deviceGroupStatus,
      defenceAreaSelected = store.defenceAreaSelected,
      hostSelected = store.hostSelected,
      defenceAreaChange = store.defenceAreaChange,
      hostChange = store.hostChange,
      fetchDefenseArea = store.fetchDefenseArea,
      fetchDefenseHost = store.fetchDefenseHost,
      resetStore = store.resetStore,
      location = store.location,
      setLocation = store.setLocation;
  var lv = Object(_react_16_13_1_react["useRef"])(null);
  var pickerRef = Object(_react_16_13_1_react["useRef"])(null);

  var _useState = Object(_react_16_13_1_react["useState"])(0),
      _useState2 = home_slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = Object(_react_16_13_1_react["useState"])(false),
      _useState4 = home_slicedToArray(_useState3, 2),
      isStatisticsLoading = _useState4[0],
      setIsStatisticsLoading = _useState4[1]; // const [location, setLocation] = useState({ idKey: "all", id: null });


  var returnIP = function returnIP(ip, port) {
    if (ip && port) {
      return "IP\u7AEF\u53E3:".concat(ip, ":").concat(port);
    }

    return "IP\u7AEF\u53E3:".concat(EMPTY_TEXT);
  };

  var onAreaChange = function onAreaChange(idKey, id) {
    setLocation({
      idKey: idKey,
      id: id
    });
    fetchDeviceGroupStatus();
  };

  var fetchDeviceGroupStatus = function fetchDeviceGroupStatus() {
    setIsStatisticsLoading(true);
    props.store.fetchDeviceGroupStatus().then(function () {
      setIsStatisticsLoading(false);
    });
  };

  Object(_react_16_13_1_react["useEffect"])(function () {
    fetchDeviceGroupStatus();
    var navbarDom = document.querySelector(".am-navbar");
    var breadcrumbDom = document.querySelector(".breadcrumb-wrap");
    var tabbarDom = document.querySelector(".am-tabs-tab-bar-wrap");
    var pickerDom = document.querySelector(".protection-picker");
    setHeight(Math.max(document.documentElement.clientHeight, document.body.clientHeight) - (navbarDom.offsetHeight || 0) - (breadcrumbDom.offsetHeight || 0) - (tabbarDom.offsetHeight || 0) - (pickerDom.offsetHeight || 0));
    return function () {// resetStore();
    };
  }, []);
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(EasyNarBar["a" /* default */], {
    mainContent: "\u5E03\u9632\u7BA1\u7406",
    leftContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
      type: "left"
    }),
    onLeftClick: function onLeftClick() {
      history.push({
        pathname: "/dashboard"
      });
    },
    rightContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
      onClick: function onClick() {
        history.push("/follow");
      },
      style: {
        fontSize: "15px"
      }
    }, "\u6211\u7684\u5173\u6CE8")
  }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "protection-content"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(AreaSelect2["a" /* default */], {
    onChange: onAreaChange,
    hasProtection: true,
    stateKeep: true
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(DeviceNumber, {
    isLoading: isStatisticsLoading
  }, statistics_status.map(function (item, i) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(DeviceNumber.item, {
      key: item.value,
      statusName: item.label,
      total: deviceGroupStatus[item.value]
    });
  }))), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    ref: lv
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(tabs_default.a, {
    tabs: home_tabs,
    initialPage: 0,
    animated: false,
    useOnPan: false,
    swipeable: false
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Picker, {
    data: defense_status,
    select: defenceAreaSelected,
    onChange: defenceAreaChange,
    ref: pickerRef
  }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(ProtectionList["c" /* default */], {
    select: defenceAreaSelected,
    location: location,
    fetchData: fetchDefenseArea,
    limit: AREA_LIMIT,
    height: height,
    renderRow: function renderRow(d) {
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(ProtectionList["a" /* Item */], {
        key: d.view_defense_area_information_main_id,
        title: d.view_defense_area_information_main_name || EMPTY_TEXT,
        mainDescription: "\u6240\u5C5E\u4E3B\u673A:".concat(d.view_defense_area_information_main_mainFrameName || EMPTY_TEXT),
        secondaryDescription: "\u533A\u57DF\u4FE1\u606F:".concat(d.view_defense_area_information_main_areaLocationName || EMPTY_TEXT),
        state: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(ProtectionList["b" /* State */], null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(DefenseStatus["a" /* default */], {
          status: d.view_defense_area_information_main_status
        })),
        handle: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "right",
          size: "sm"
        }),
        onClick: function onClick() {
          history.push("/protection/detail/".concat(d.view_defense_area_information_main_id));
        }
      });
    }
  })), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Picker, {
    data: host_status,
    select: hostSelected,
    onChange: hostChange
  }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(ProtectionList["c" /* default */], {
    select: hostSelected,
    location: location,
    fetchData: fetchDefenseHost,
    limit: HOST_LIMIT,
    height: height,
    renderRow: function renderRow(h) {
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(ProtectionList["a" /* Item */], {
        key: h.view_defense_host_information_id,
        title: h.view_defense_host_information_name || EMPTY_TEXT,
        mainDescription: returnIP(h.view_defense_host_information_DeviceIp, h.view_defense_host_information_DevicePort),
        secondaryDescription: "\u533A\u57DF\u4FE1\u606F:".concat(h.view_defense_host_information_areaLocationName || EMPTY_TEXT),
        state: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(ProtectionList["b" /* State */], null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(DefenseStatus["a" /* default */], {
          status: h.view_defense_host_information_check_value
        })),
        handle: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "right",
          size: "sm"
        })
      });
    }
  }))))));
});
/* harmony default export */ var home = (Home);
// CONCATENATED MODULE: ./src/pages/protection/home/index.tsx




__webpack_require__(1204);

/* harmony default export */ var protection_home = __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(home, {
    store: home_store,
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

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./node_modules/_classnames@2.2.6@classnames/index.js
var _classnames_2_2_6_classnames = __webpack_require__(97);
var _classnames_2_2_6_classnames_default = /*#__PURE__*/__webpack_require__.n(_classnames_2_2_6_classnames);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// CONCATENATED MODULE: ./src/controls/hy-breadcrumb/BreadcrumbCollapsed.jsx

/* harmony default export */ var BreadcrumbCollapsed = (function () {
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, "...");
});
// CONCATENATED MODULE: ./src/controls/hy-breadcrumb/Breadcrumb.jsx
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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // import clsx from 'clsx';

 // 定义样式

var styles = {
  root: {},
  ol: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItem: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },
  li: {},
  separator: {
    display: 'flex',
    userSelect: 'none',
    marginLeft: 8,
    marginRight: 8
  }
}; // 插入面包屑的分割符

var Breadcrumb_insertSeparators = function insertSeparators(items, separator) {
  return items.reduce(function (acc, current, index) {
    if (index < items.length - 1) {
      acc = acc.concat(current, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("li", {
        key: "separator-".concat(index),
        className: "breadcrumb-separator"
      }, separator));
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}; // React.forwardRef => 创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中


var Breadcrumb_Breadcrumbs = function Breadcrumbs(props) {
  // 定义 面包屑组件接收的外部props值
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$expandText = props.expandText,
      expandText = _props$expandText === void 0 ? '展开' : _props$expandText,
      _props$itemsAfterColl = props.itemsAfterCollapse,
      itemsAfterCollapse = _props$itemsAfterColl === void 0 ? 1 : _props$itemsAfterColl,
      _props$itemsBeforeCol = props.itemsBeforeCollapse,
      itemsBeforeCollapse = _props$itemsBeforeCol === void 0 ? 1 : _props$itemsBeforeCol,
      _props$maxItems = props.maxItems,
      maxItems = _props$maxItems === void 0 ? 8 : _props$maxItems,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? '/' : _props$separator,
      other = _objectWithoutProperties(props, ["children", "classes", "className", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"]);

  var _React$useState = _react_16_13_1_react_default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1]; // 面包屑收起展开功能


  var renderItemsBeforeAndAfter = function renderItemsBeforeAndAfter(allItems) {
    var handleClickExpand = function handleClickExpand() {
      setExpanded(true);
    };

    var len = allItems.length;

    if (itemsBeforeCollapse + itemsAfterCollapse >= len) {
      return allItems;
    }

    return [].concat(_toConsumableArray(allItems.slice(0, itemsBeforeCollapse)), [/*#__PURE__*/_react_16_13_1_react_default.a.createElement(BreadcrumbCollapsed, {
      key: "ellipsis",
      onClick: handleClickExpand
    })], _toConsumableArray(allItems.slice(len - itemsAfterCollapse, len)));
  };

  var allItems = _react_16_13_1_react_default.a.Children.toArray(children).filter(function (child) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.isValidElement(child);
  }).map(function (child, index) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("li", {
      className: "breadcrumb-li",
      key: "child-".concat(index)
    }, child);
  });
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("ol", {
    className: "breadcrumb-ol"
  }, Breadcrumb_insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), // classes.separator, 
  separator)));
};

/* harmony default export */ var Breadcrumb = (Breadcrumb_Breadcrumbs);
// CONCATENATED MODULE: ./src/controls/hy-breadcrumb/index.jsx



__webpack_require__(945);

/* harmony default export */ var hy_breadcrumb = (function (props) {
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Breadcrumb, props);
});
// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./src/service/http/areasData/index.ts
var areasData = __webpack_require__(117);

// EXTERNAL MODULE: ./src/utils/storage/index.ts
var storage = __webpack_require__(5);

// CONCATENATED MODULE: ./src/components/AreaSelect2/List/index.tsx



function List_slicedToArray(arr, i) { return List_arrayWithHoles(arr) || List_iterableToArrayLimit(arr, i) || List_unsupportedIterableToArray(arr, i) || List_nonIterableRest(); }

function List_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function List_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return List_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return List_arrayLikeToArray(o, minLen); }

function List_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function List_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function List_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






__webpack_require__(946);

var List_AreaList = function AreaList(props) {
  var groupAndBuild = storage["a" /* default */].getItem("groupAndBuild");
  var floorAndArea = storage["a" /* default */].getItem("floorAndArea");
  groupAndBuild = groupAndBuild ? JSON.parse(groupAndBuild) : null;
  floorAndArea = floorAndArea ? JSON.parse(floorAndArea) : null;
  var isLoading = props.isLoading,
      _props$hasProtection = props.hasProtection,
      hasProtection = _props$hasProtection === void 0 ? false : _props$hasProtection,
      _props$hasVideo = props.hasVideo,
      hasVideo = _props$hasVideo === void 0 ? false : _props$hasVideo,
      pid = props.pid,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      onSelect = props.onSelect;

  var _useState = Object(_react_16_13_1_react["useState"])({}),
      _useState2 = List_slicedToArray(_useState, 2),
      protectionData = _useState2[0],
      setProtectionData = _useState2[1];

  var _useState3 = Object(_react_16_13_1_react["useState"])(groupAndBuild),
      _useState4 = List_slicedToArray(_useState3, 2),
      groupAndBuildData = _useState4[0],
      setGroupAndBuildData = _useState4[1];

  var _useState5 = Object(_react_16_13_1_react["useState"])(floorAndArea),
      _useState6 = List_slicedToArray(_useState5, 2),
      floorAndAreaData = _useState6[0],
      setfloorAndAreaData = _useState6[1];

  var updateprotectionData = function updateprotectionData(data) {
    if (Array.isArray(data)) {
      setProtectionData(data.map(function (item) {
        return {
          name: item.view_defense_area_device_total_locationName,
          id: item.view_defense_area_device_total_locationId,
          count: item.view_defense_area_device_total_id,
          useCount: item.view_defense_area_device_total_statusId
        };
      }).reduce(function (a, b) {
        a[b.id] = b;
        return a;
      }, {}));
    }
  };

  var updateVideoData = function updateVideoData(data, buildId) {
    if (Array.isArray(data)) {
      var videoData = data.reduce(function (a, b) {
        a[b.id] = b;
        return a;
      }, {});

      if (buildId) {
        setfloorAndAreaData(videoData);
        storage["a" /* default */].setItem("floorAndArea", JSON.stringify({
          buildId: buildId,
          data: videoData
        }));
      } else {
        setGroupAndBuildData(videoData);
        storage["a" /* default */].setItem("groupAndBuild", JSON.stringify(videoData));
      }
    }
  };

  Object(_react_16_13_1_react["useEffect"])(function () {
    if (pid && pid.id && pid !== "root" && pid.type) {
      if (hasProtection) {
        switch (pid.type) {
          case "groupId":
            Object(areasData["f" /* getGroupData */])({
              groupId: pid.id
            }).then(function (res) {
              var result = res.result;

              if (result && result.aaData) {
                updateprotectionData(result.aaData);
              }
            });
            break;

          case "buildId":
            Object(areasData["b" /* getBuildData */])({
              buildId: pid.id
            }).then(function (res) {
              var result = res.result;

              if (result && result.aaData) {
                updateprotectionData(result.aaData);
              }
            });
            break;

          case "floorId":
            Object(areasData["d" /* getFloorData */])({
              floorId: pid.id
            }).then(function (res) {
              var result = res.result;

              if (result && result.aaData) {
                updateprotectionData(result.aaData);
              }
            });
            break;

          default:
            break;
        }
      } else if (hasVideo) {
        switch (pid.type) {
          case "all":
            Object(areasData["c" /* getDeviceStatus */])({
              type: 1
            }).then(function (res) {
              var result = res.result;

              if (result) {
                updateVideoData(result);
              }
            });
            break;

          case "buildId":
            Object(areasData["c" /* getDeviceStatus */])({
              type: 5,
              nodeId: [pid.id]
            }).then(function (res) {
              var result = res.result;

              if (result) {
                updateVideoData(result, pid.id);
              }
            });
            break;

          default:
            break;
        }
      }
    }
  }, [pid]);
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: _classnames_2_2_6_classnames_default()("areaList-content", props.className)
  }, isLoading && /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "arealist-loading"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
    type: "loading"
  })), !isLoading && data.length === 0 && /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "arealist-loading"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, "\u6682\u65E0\u6570\u636E")), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("ul", {
    className: "areaList-ul"
  }, data.map(function (d) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("li", {
      key: d.id,
      "data-id": d.id,
      onClick: function onClick() {
        onSelect && onSelect(d);
      }
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "areaList-item-name"
    }, d.name), function () {
      if (hasProtection && protectionData[d.id]) {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: "areaList-item-main"
        }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
          className: "areaList-item-state"
        }, "\u5DF2\u5E03\u9632"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
          className: "areaList-item-value"
        }, protectionData[d.id].useCount || 0, "/", protectionData[d.id].count || 0), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "right",
          size: "sm"
        }));
      } else if (hasVideo && (groupAndBuildData && groupAndBuildData[d.id] || floorAndAreaData && floorAndAreaData[d.id])) {
        var o = groupAndBuildData[d.id] || floorAndAreaData[d.id];
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: "areaList-item-main"
        }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
          className: "areaList-item-value"
        }, o.total || 0), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "right",
          size: "sm"
        }));
      } else {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: "areaList-item-main"
        }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "right",
          size: "sm"
        }));
      }
    }());
  })));
};

/* harmony default export */ var List = (List_AreaList);
// CONCATENATED MODULE: ./src/components/AreaSelect2/index.tsx
var _dec, _class, _temp;

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







__webpack_require__(947);

var IDS_STR = ["all", "groupId", "buildId", "floorId", "areaId"];
var AreaSelect2_AreaSelect = (_dec = Object(mobxreact_esm["b" /* inject */])("AreaSelectStore"), _dec(_class = Object(mobxreact_esm["c" /* observer */])(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  _inherits(AreaSelect, _React$Component);

  var _super = _createSuper(AreaSelect);

  function AreaSelect() {
    var _this;

    _classCallCheck(this, AreaSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onDreadcrumbClick", function (item, i) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          _this$props$AreaSelec = _this$props.AreaSelectStore,
          findGroupData = _this$props$AreaSelec.findGroupData,
          fetchData = _this$props$AreaSelec.fetchData,
          updatePid = _this$props$AreaSelec.updatePid,
          updateBreadcrumbsLength = _this$props$AreaSelec.updateBreadcrumbsLength,
          showDropdownChange = _this$props$AreaSelec.showDropdownChange;
      var level;

      if (item.id === "root") {
        fetchData({
          type: 12
        });
        updatePid();
        level = "all";
      } else if (item.extraKeyData && Number(item.extraKeyData.LocationType) === 0) {
        var hasData = findGroupData(item.id);

        if (!hasData) {
          fetchData({
            type: 1,
            nodeId: [item.id]
          });
        }

        updatePid(item);
        level = "groupId";
      } else if (item.extraKeyData && Number(item.extraKeyData.LocationType) === 1) {
        fetchData({
          type: 2,
          nodeId: [item.id]
        });
        updatePid(item);
        level = "buildId";
      } else if (item.extraKeyData && Number(item.extraKeyData.LocationType) === 2) {
        fetchData({
          type: 3,
          nodeId: [item.id]
        });
        updatePid(item);
        level = "floorId";
      } else if (item.extraKeyData && Number(item.extraKeyData.LocationType) === 3) {
        level = "areaId";
      }

      updateBreadcrumbsLength(i + 1);
      onChange && onChange(level, item.id);
      showDropdownChange();
    });

    _defineProperty(_assertThisInitialized(_this), "onDropdownSelect", function (dropdown) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          _this$props2$AreaSele = _this$props2.AreaSelectStore,
          findGroupData = _this$props2$AreaSele.findGroupData,
          fetchData = _this$props2$AreaSele.fetchData,
          updatePid = _this$props2$AreaSele.updatePid,
          updateBreadcrumbs = _this$props2$AreaSele.updateBreadcrumbs,
          showDropdownChange = _this$props2$AreaSele.showDropdownChange;
      var LocationType = dropdown.extraKeyData.LocationType;
      var level;

      if (Number(LocationType) === 0) {
        var hasData = findGroupData(dropdown.id);

        if (!hasData) {
          fetchData({
            type: 1,
            nodeId: [dropdown.id]
          });
        }

        updatePid(dropdown);
        level = "groupId";
      } else if (Number(LocationType) === 1) {
        fetchData({
          type: 2,
          nodeId: [dropdown.id]
        });
        updatePid(dropdown);
        level = "buildId";
      } else if (Number(LocationType) === 2) {
        fetchData({
          type: 3,
          nodeId: [dropdown.id]
        });
        updatePid(dropdown);
        level = "floorId";
      } else if (Number(LocationType) === 3) {
        level = "areaId";
      }

      updateBreadcrumbs(dropdown);
      onChange && onChange(level, dropdown.id);
      showDropdownChange(false);
    });

    return _this;
  }

  _createClass(AreaSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fetchData = this.props.AreaSelectStore.fetchData;
      fetchData({
        type: 12
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
          stateKeep = _this$props3.stateKeep,
          reset = _this$props3.AreaSelectStore.reset;

      if (!stateKeep) {
        reset();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          hasProtection = _this$props4.hasProtection,
          hasVideo = _this$props4.hasVideo,
          _this$props4$AreaSele = _this$props4.AreaSelectStore,
          isLoading = _this$props4$AreaSele.isLoading,
          pid = _this$props4$AreaSele.pid,
          showDropdown = _this$props4$AreaSele.showDropdown,
          breadcrumbs = _this$props4$AreaSele.breadcrumbs,
          dropdowns = _this$props4$AreaSele.dropdowns;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "breadcrumb-wrap"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(hy_breadcrumb, null, breadcrumbs && breadcrumbs.length > 0 && breadcrumbs.map(function (item, i) {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: _classnames_2_2_6_classnames_default()({
            // "breadcrumb-end": item.id !== "root" && (!item.extraKeyData || Number(item.extraKeyData.LocationType) === 3)
            "breadcrumb-end": i === breadcrumbs.length - 1
          }),
          key: item.id,
          onClick: function onClick() {
            _this2.onDreadcrumbClick(item, i);
          }
        }, item.name);
      })), showDropdown || !children ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List, {
        pid: pid,
        className: "breadcrumb-dropdown",
        isLoading: isLoading,
        data: dropdowns,
        onSelect: this.onDropdownSelect,
        hasProtection: hasProtection,
        hasVideo: hasVideo
      }) : children);
    }
  }]);

  return AreaSelect;
}(_react_16_13_1_react_default.a.Component), _temp)) || _class) || _class);
/* harmony default export */ var AreaSelect2 = __webpack_exports__["a"] = (AreaSelect2_AreaSelect);

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

/***/ })

}]);
//# sourceMappingURL=../map/protectionHome.cb62ee33.map