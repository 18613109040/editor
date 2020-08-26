(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 1006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ store_MeetingListStore; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ store_MeetingDetailStore; });

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/style/css.js
var css = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/toast/index.js
var toast = __webpack_require__(8);
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// EXTERNAL MODULE: ./node_modules/_mobx@5.15.6@mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(0);

// EXTERNAL MODULE: ./src/pages/store.ts + 1 modules
var store = __webpack_require__(932);

// EXTERNAL MODULE: ./src/service/http/index.ts + 16 modules
var http = __webpack_require__(13);

// EXTERNAL MODULE: ./src/service/http/getDetailPageData/index.ts
var getDetailPageData = __webpack_require__(180);

// CONCATENATED MODULE: ./src/service/http/meeting/notification/index.ts

/**
 * 会议通知:获取详情
 * @param params {id: "会议ID"}
 */

function fetchMeetingNotificationDetail(params) {
  return Object(getDetailPageData["a" /* default */])({
    tableInfo: [{
      tableName: "meeting_details_info_wx_view",
      tableType: 1,
      dataColumns: [{
        columnName: "avoidLaterTime"
      }, {
        columnName: "cancelstate"
      }, {
        columnName: "specific_address"
      }, {
        columnName: "memberName"
      }, {
        columnName: "now_address"
      }, {
        columnName: "longitude"
      }, {
        columnName: "followId"
      }, {
        columnName: "latitude"
      }, {
        columnName: "workNumber"
      }, {
        columnName: "startTime"
      }, {
        columnName: "endTime"
      }, {
        columnName: "id"
      }, {
        columnName: "name"
      }, {
        columnName: "meetingDescribe"
      }, {
        columnName: "meetingSponsor"
      }, {
        columnName: "confereeId"
      }, {
        columnName: "type"
      }, {
        columnName: "signinType"
      }, {
        columnName: "nowAddress"
      }, {
        columnName: "specificAddress"
      }, {
        columnName: "checkinEarly"
      }, {
        columnName: "checkinDelay"
      }, {
        columnName: "roomName"
      }, {
        columnName: "scope"
      }, {
        columnName: "singinTime"
      }, {
        columnName: "cancelstate"
      }],
      filterCondition: [{
        field: "id",
        type: 3,
        value: params.id
      }]
    }],
    controlPermissionModelDTOs: []
  });
}


// CONCATENATED MODULE: ./src/pages/meeting/notification/constance.ts
var EnumState;

(function (EnumState) {
  EnumState["noop"] = "noop";
  EnumState["success"] = "success";
  EnumState["error"] = "error";
})(EnumState || (EnumState = {}));

;
// EXTERNAL MODULE: ./node_modules/_axios@0.19.2@axios/index.js
var _axios_0_19_2_axios = __webpack_require__(115);
var _axios_0_19_2_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_19_2_axios);

// CONCATENATED MODULE: ./src/pages/meeting/notification/store.ts



var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _dec, _class3, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp2;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



 // import { getWeChatCache } from '@/service/wechatAxiosInstance';




var store_MeetingListStore = (_class = (_temp = /*#__PURE__*/function (_BaseStore) {
  _inherits(MeetingListStore, _BaseStore);

  var _super = _createSuper(MeetingListStore);

  function MeetingListStore(props) {
    var _this;

    _classCallCheck(this, MeetingListStore);

    _this = _super.call(this, props);

    _initializerDefineProperty(_assertThisInitialized(_this), "haveSignInList", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_assertThisInitialized(_this), "notSignInList", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_assertThisInitialized(_this), "willSignInList", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_assertThisInitialized(_this), "easyNarBar", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_assertThisInitialized(_this), "willSignInListState", _descriptor5, _assertThisInitialized(_this));

    _initializerDefineProperty(_assertThisInitialized(_this), "workNumber", _descriptor6, _assertThisInitialized(_this));

    _defineProperty(_assertThisInitialized(_this), "history", void 0);

    _defineProperty(_assertThisInitialized(_this), "MeetingList", void 0);

    _defineProperty(_assertThisInitialized(_this), "tokenContext", void 0);

    _this.haveSignInList = props.haveSignInList;
    _this.notSignInList = props.notSignInList;
    _this.willSignInList = props.willSignInList;
    _this.easyNarBar = props.easyNarBar;
    _this.history = props.history;
    _this.MeetingList = props.MeetingList;
    _this.tokenContext = props.tokenContext;
    return _this;
  }

  _createClass(MeetingListStore, [{
    key: "fetchWillSignInList",
    value: function fetchWillSignInList(skip, limit, params) {
      return new Promise(function (resolve, reject) {
        http["default"].getShowTableData({
          tableName: "meeting_info_wx_view",
          length: limit,
          start: skip,
          type: "TABLE_QUERY",
          subQuery: [],
          fieldName: ["meeting_info_wx_view.id", "meeting_info_wx_view.startTime", "meeting_info_wx_view.endTime", "meeting_info_wx_view.name", "meeting_info_wx_view.address", "meeting_info_wx_view.roomName", "meeting_info_wx_view.type"],
          controlPermissionModelDTOs: [],
          params: params
        }).then(function (data) {
          var result = data.result,
              success = data.success;

          if (success) {
            resolve(result);
          } else {
            reject(new Error("数据错误，请确认"));
          }
        })["catch"](function (err) {
          reject(err);
        });
      });
    }
  }]);

  return MeetingListStore;
}(store["a" /* default */]), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "haveSignInList", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "notSignInList", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "willSignInList", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "easyNarBar", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "willSignInListState", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return EnumState["noop"];
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "workNumber", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _applyDecoratedDescriptor(_class.prototype, "fetchWillSignInList", [mobx_module["f" /* action */]], Object.getOwnPropertyDescriptor(_class.prototype, "fetchWillSignInList"), _class.prototype)), _class);
var store_MeetingDetailStore = (_dec = mobx_module["f" /* action */].bound, (_class3 = (_temp2 = /*#__PURE__*/function (_BaseStore2) {
  _inherits(MeetingDetailStore, _BaseStore2);

  var _super2 = _createSuper(MeetingDetailStore);

  function MeetingDetailStore(props) {
    var _this2;

    _classCallCheck(this, MeetingDetailStore);

    _this2 = _super2.call(this, props);

    _initializerDefineProperty(_assertThisInitialized(_this2), "signError", _descriptor7, _assertThisInitialized(_this2));

    _initializerDefineProperty(_assertThisInitialized(_this2), "memberName", _descriptor8, _assertThisInitialized(_this2));

    _initializerDefineProperty(_assertThisInitialized(_this2), "signIning", _descriptor9, _assertThisInitialized(_this2));

    _defineProperty(_assertThisInitialized(_this2), "history", void 0);

    _defineProperty(_assertThisInitialized(_this2), "easyNarBar", void 0);

    _defineProperty(_assertThisInitialized(_this2), "tokenContext", void 0);

    _initializerDefineProperty(_assertThisInitialized(_this2), "reset", _descriptor10, _assertThisInitialized(_this2));

    _initializerDefineProperty(_assertThisInitialized(_this2), "fetchDetail", _descriptor11, _assertThisInitialized(_this2));

    _initializerDefineProperty(_assertThisInitialized(_this2), "getMemberName", _descriptor12, _assertThisInitialized(_this2));

    _defineProperty(_assertThisInitialized(_this2), "callGetCamera", function (getCamera) {
      return new Promise(function (resolve, reject) {
        getCamera({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["camera"],
          success: function success(res) {
            if (res.localIds && res.localIds[0]) {
              resolve(res.localIds[0]);
            } else {
              reject(false);
            }
          },
          fail: function fail(err) {
            console.log("getCamera err", err);
            reject(err);
          },
          cancel: function cancel() {
            reject(new Error("取消签到"));
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "callGetLocalImgData", function (getLocalImgData, localId) {
      return new Promise(function (resolve, reject) {
        getLocalImgData({
          localId: localId,
          success: function success(res) {
            var localData = res.localData;

            if (localData.indexOf("data:image") != 0) {
              localData = "data:image/jpeg;base64," + localData;
            }

            localData = localData.replace(/\r|\n/g, "").replace("data:image/jgp", "data:image/jpeg");
            localData = localData.replace(/^data:image\/\w+;base64,/, "");
            resolve(localData);
          },
          fail: function fail(err) {
            console.log("getLocalImgData err", err);
            reject(err);
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "checkAndSignIn", function (localData, id, type, cb) {
      _this2.checkSignIn(localData).then(function () {
        console.log("校验成功");

        _this2.submit(id, type).then(function () {
          console.log("签到成功");

          toast_default.a.hide();

          toast_default.a.success("签到成功", 1);

          cb && cb();
        })["catch"](function () {
          console.log("签到失败");
          Object(mobx_module["o" /* runInAction */])(function () {
            _this2.signError = {
              message: "签到失败"
            };

            toast_default.a.hide();

            setTimeout(function () {
              toast_default.a.fail(_this2.signError.message, 1);
            }, 50);
          });
        });
      })["catch"](function () {
        console.log("校验失败");
        Object(mobx_module["o" /* runInAction */])(function () {
          _this2.signError = {
            message: "校验出错"
          };

          toast_default.a.hide();

          setTimeout(function () {
            toast_default.a.fail(_this2.signError.message, 1);
          }, 50);
        });
      });
    });

    _initializerDefineProperty(_assertThisInitialized(_this2), "toDataURL", _descriptor13, _assertThisInitialized(_this2));

    _this2.history = props.history;
    _this2.easyNarBar = props.easyNarBar;
    _this2.tokenContext = props.tokenContext;
    return _this2;
  }

  _createClass(MeetingDetailStore, [{
    key: "signIn",
    value: function signIn(media, detail, hasToBase64, cb) {
      var _this3 = this;

      var id = detail.id,
          type = detail.type;
      if (this.signIning) return;

      toast_default.a.loading("签到中，请稍等", 0);

      this.signIning = true;
      this.callGetCamera(media.getCamera.getCamera).then(function (localId) {
        if (hasToBase64) {
          _this3.callGetLocalImgData(media.getLocalImgData.getLocalImgData, localId).then(function (localData) {
            _this3.checkAndSignIn(localData, id, type, cb);
          })["catch"](function () {
            Object(mobx_module["o" /* runInAction */])(function () {
              _this3.signError = {
                message: "微信获取照片数据异常"
              };

              toast_default.a.hide();

              setTimeout(function () {
                toast_default.a.fail(_this3.signError.message, 1);
              }, 50);
            });
          });
        } else {
          var uploadImage = media.uploadImage.uploadImage;
          uploadImage({
            localId: localId,
            isShowProgressTips: 0,
            success: function success(res) {
              _this3.toDataURL(res.serverId, function (res) {
                _this3.checkAndSignIn(res, id, type, cb);
              });
            }
          });
        }
      })["catch"](function (res) {
        Object(mobx_module["o" /* runInAction */])(function () {
          _this3.signError = {
            message: "微信获取照片异常"
          };

          toast_default.a.hide();

          setTimeout(function () {
            toast_default.a.fail(res.message || _this3.signError.message, 1);
          }, 50);
        });
      })["finally"](function () {
        _this3.signIning = false;
      });
    }
  }, {
    key: "checkSignIn",
    value: function checkSignIn(picture) {
      return new Promise(function (resolve, reject) {
        http["default"].meetingSignInCheck({
          picture: picture
        }).then(function (data) {
          var code = data.code,
              result = data.result;

          if (code === 0 && result) {
            resolve(true);
          } else {
            reject(false);
          }
        })["catch"](function () {
          reject(false);
        });
      });
    }
  }, {
    key: "submit",
    value: function submit(id, type) {
      return new Promise(function (resolve, reject) {
        http["default"].meetingSignIn({
          id: id,
          type: type
        }).then(function (data) {
          var success = data.success;

          if (success) {
            resolve(true);
          } else {
            reject(false);
          }
        })["catch"](function () {
          reject(false);
        });
      });
    }
  }]);

  return MeetingDetailStore;
}(store["a" /* default */]), _temp2), (_descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "signError", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      message: null
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "memberName", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, "signIning", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, "reset", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      _this4.signError = {
        message: null
      };
      _this4.memberName = "";
    };
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class3.prototype, "fetchDetail", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return function (id) {
      return new Promise(function (resolve, reject) {
        fetchMeetingNotificationDetail({
          id: id
        }).then(function (data) {
          var result = data.result,
              success = data.success;

          if (success) {
            var detail = result.dataJson.meeting_details_info_wx_view[0];
            resolve(detail);
          } else {
            reject(new Error("数据错误，请确认"));
          }
        })["catch"](function (err) {
          reject(err);
        });
      });
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class3.prototype, "getMemberName", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function () {
      Object(http["getUserInfo"])().then(function (res) {
        if (res && res.code === 0) {
          var result = res.result;
          var baseUserInfo = JSON.parse(result.baseUserInfo) || "";

          if (baseUserInfo) {
            _this5.memberName = baseUserInfo.memberName;
          }
        }
      });
    };
  }
}), _applyDecoratedDescriptor(_class3.prototype, "signIn", [_dec], Object.getOwnPropertyDescriptor(_class3.prototype, "signIn"), _class3.prototype), _descriptor13 = _applyDecoratedDescriptor(_class3.prototype, "toDataURL", [mobx_module["f" /* action */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return function (media_id, callback) {
      _axios_0_19_2_axios_default.a.request({
        url: "".concat(window.baseURL || "", "/doWeChat/weChat/cgi/getMaterial/").concat(media_id),
        method: "GET",
        responseType: "blob"
      }).then(function (res) {
        var reader = new FileReader();

        reader.onloadend = function () {
          var localData = reader.result.replace(/^data:application\/\w+;base64,/, "");
          callback && callback(localData);
        };

        reader.readAsDataURL(res.data);
      });
    };
  }
})), _class3));

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

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/constant.ts
var EnumState;

(function (EnumState) {
  EnumState[EnumState["noop"] = 0] = "noop";
  EnumState[EnumState["success"] = 1] = "success";
  EnumState[EnumState["error"] = 2] = "error";
})(EnumState || (EnumState = {}));

var EnumPlayerDuration;

(function (EnumPlayerDuration) {
  EnumPlayerDuration[EnumPlayerDuration["hidden"] = 0] = "hidden";
  EnumPlayerDuration[EnumPlayerDuration["visible"] = 1] = "visible";
})(EnumPlayerDuration || (EnumPlayerDuration = {}));

var EnumVideoType;

(function (EnumVideoType) {
  EnumVideoType["rtmp"] = "video/rtmp";
})(EnumVideoType || (EnumVideoType = {}));
// EXTERNAL MODULE: ./node_modules/_mobx@5.15.6@mobx/lib/mobx.module.js
var mobx_module = __webpack_require__(0);

// CONCATENATED MODULE: ./src/pages/store.ts
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var store_BaseStore = (_class = (_temp = /*#__PURE__*/function () {
  function BaseStore(props) {// switch(props) {
    //     case props.children:
    //         this.children = props.children;
    //         break;
    //     case props.error:
    //         this.error = props.error;
    //         break;
    //     case props.state: 
    //         this.state = props.state;
    //         break;
    //     case props.loading:
    //         this.loading = props.loading;
    //         break;
    //     default :
    //         break;
    // }

    _classCallCheck(this, BaseStore);

    _initializerDefineProperty(this, "state", _descriptor, this);

    _initializerDefineProperty(this, "children", _descriptor2, this);

    _initializerDefineProperty(this, "error", _descriptor3, this);

    _initializerDefineProperty(this, "loading", _descriptor4, this);
  }

  _createClass(BaseStore, [{
    key: "isSuccessState",
    value: function isSuccessState() {
      this.state = EnumState['success'];
    }
  }, {
    key: "isErrorState",
    value: function isErrorState() {
      this.state = EnumState['error'];
    }
  }, {
    key: "toggleLoading",
    value: function toggleLoading(loaded) {
      this.loading = loaded;
    }
  }]);

  return BaseStore;
}(), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "state", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return EnumState['noop'];
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
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "loading", [mobx_module["n" /* observable */]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "isSuccessState", [mobx_module["f" /* action */]], Object.getOwnPropertyDescriptor(_class.prototype, "isSuccessState"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isErrorState", [mobx_module["f" /* action */]], Object.getOwnPropertyDescriptor(_class.prototype, "isErrorState"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleLoading", [mobx_module["f" /* action */]], Object.getOwnPropertyDescriptor(_class.prototype, "toggleLoading"), _class.prototype)), _class);
/* harmony default export */ var store = __webpack_exports__["a"] = (store_BaseStore);

/***/ })

}]);
//# sourceMappingURL=../map/meetingNotification~meetingNotificationDetail.3c972501.map