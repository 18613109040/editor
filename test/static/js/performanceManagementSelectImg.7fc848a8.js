(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_mobile_lib_image_picker_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1070);
/* harmony import */ var antd_mobile_lib_image_picker_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_image_picker_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_image_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1072);
/* harmony import */ var antd_mobile_lib_image_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_image_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(859);
/* harmony import */ var antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(860);
/* harmony import */ var antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(257);
/* harmony import */ var antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(182);
/* harmony import */ var antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_mobile_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(883);
/* harmony import */ var antd_mobile_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_checkbox_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_mobile_lib_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(884);
/* harmony import */ var antd_mobile_lib_checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(256);
/* harmony import */ var react_weui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1078);
/* harmony import */ var react_weui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_weui__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_wx_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(187);
/* harmony import */ var _components_EasyNarBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(857);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(0);











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








__webpack_require__(1173);

var BackButtonStyle = {
  display: "inline-block",
  width: "auto",
  color: "white",
  border: "none",
  position: "absolute",
  top: "5px",
  left: "15px"
};
var BatchDeleteIndexList = [];
var CheckboxItem = antd_mobile_lib_checkbox__WEBPACK_IMPORTED_MODULE_9___default.a.CheckboxItem;
var PerformanceManagementSelectImg = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__[/* inject */ "b"])("SelectImageStore"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__[/* observer */ "c"])(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  _inherits(PerformanceManagementSelectImg, _React$Component);

  var _super = _createSuper(PerformanceManagementSelectImg);

  function PerformanceManagementSelectImg(props) {
    var _this;

    _classCallCheck(this, PerformanceManagementSelectImg);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "apiWX", void 0);

    _defineProperty(_assertThisInitialized(_this), "getWXApiFun", void 0);

    _defineProperty(_assertThisInitialized(_this), "onPreview", function (index, files) {
      // const previewImage = this.apiWX.media.previewImage.previewImage;
      // previewImage({
      //     current:
      //         window.location.origin + files[this.state.currentIndex].url, // 当前显示图片的http链接
      //     urls: files.map((item) => window.location.origin + item.url), // 需要预览的图片http链接列表
      // });
      _this.setState({
        currentIndex: index,
        showMultiple: true,
        urls: files.map(function (item) {
          return window.location.origin + item.url;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "makesure", function () {
      var _this$props = _this.props,
          history = _this$props.history,
          location = _this$props.location,
          _this$props$SelectIma = _this$props.SelectImageStore,
          propsFiles = _this$props$SelectIma.propsFiles,
          uploading = _this$props$SelectIma.uploading;
      if (uploading) return;
      var state = {
        pathname: "/select-image",
        index: location.state.index,
        pics: Object(mobx__WEBPACK_IMPORTED_MODULE_15__[/* toJS */ "q"])(propsFiles, {
          recurseEverything: true
        })
      };
      history.push({
        pathname: location.state.pathname,
        state: state
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cancelBatchDelete", function () {
      _this.setState({
        docked: false,
        canAddPic: true
      });

      BatchDeleteIndexList = [];
    });

    _this.state = {
      preview: false,
      docked: false,
      canAddPic: true
    };
    _this.apiWX = Object(_service_wx_api__WEBPACK_IMPORTED_MODULE_13__[/* getWxApi */ "b"])(window.location.href);
    _this.state = {
      currentIndex: 0
    };
    return _this;
  }

  _createClass(PerformanceManagementSelectImg, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          location = _this$props2.location,
          initStore = _this$props2.SelectImageStore.initStore;
      initStore(location.state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          history = _this$props3.history,
          _this$props3$SelectIm = _this$props3.SelectImageStore,
          title = _this$props3$SelectIm.title,
          files = _this$props3$SelectIm.files,
          onFileChange = _this$props3$SelectIm.onFileChange,
          uploading = _this$props3$SelectIm.uploading,
          state = _this$props3.location.state;
      var _this$state = this.state,
          urls = _this$state.urls,
          currentIndex = _this$state.currentIndex,
          showMultiple = _this$state.showMultiple;
      var newFiles = Object(mobx__WEBPACK_IMPORTED_MODULE_15__[/* toJS */ "q"])(files); // const BatchDeleteList = () => {
      //   return (
      //     <div>
      //       <List
      //         renderHeader={() => {
      //           "批量删除";
      //         }}
      //       >
      //         {files.map((i: any, index: number) => (
      //           <CheckboxItem
      //             key={i.id}
      //             onChange={(event: any) => {
      //               if (!event.target.checked) {
      //                 const deteleindex = BatchDeleteIndexList.findIndex(item => item === i.id);
      //                 BatchDeleteIndexList.splice(deteleindex, 1);
      //               } else {
      //                 BatchDeleteIndexList.push(i.id);
      //               }
      //             }}
      //             defaultChecked={true}
      //           >
      //             <img src={i.url}></img>
      //           </CheckboxItem>
      //         ))}
      //       </List>
      //       <WingBlank className="operationButton">
      //         <Button
      //           className="BatchDeleteCancelButton"
      //           style={{ display: "inline-block" }}
      //           size="small"
      //           onClick={() => {
      //             this.cancelBatchDelete();
      //           }}
      //         >
      //           取消
      //         </Button>
      //         <Button
      //           type="primary"
      //           size="small"
      //           className="BatchDeleteButton"
      //           style={{ display: "inline-block" }}
      //           onClick={() => {
      //             BatchDelete(BatchDeleteIndexList);
      //             this.cancelBatchDelete();
      //           }}
      //         >
      //           删除
      //         </Button>
      //       </WingBlank>
      //     </div>
      //   );
      // };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "meeting-selectRoom-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_EasyNarBar__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
        mainContent: title,
        leftContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_mobile_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
          type: "left"
        }),
        onLeftClick: function onLeftClick() {
          history.goBack();
        },
        rightContent: !state.disabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
          type: "primary",
          size: "small",
          onClick: this.makesure,
          loading: uploading
        }, uploading ? "上传中" : "确定") : ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_mobile_lib_image_picker__WEBPACK_IMPORTED_MODULE_1___default.a, {
        files: newFiles,
        onImageClick: this.onPreview,
        onChange: onFileChange,
        selectable: !state.disabled && newFiles.length < 5 && this.state.canAddPic,
        length: 3,
        disableDelete: state.disabled ? state.disabled : false,
        onFail: function onFail() {
          antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_3___default.a.fail("选择失败");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_weui__WEBPACK_IMPORTED_MODULE_12__["Gallery"], {
        defaultIndex: currentIndex,
        src: urls,
        show: showMultiple
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "meeting-selectImage-goBack",
        onClick: function onClick() {
          return _this2.setState({
            showMultiple: false
          });
        }
      }, "\u8FD4\u56DE")));
    }
  }]);

  return PerformanceManagementSelectImg;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component), _temp)) || _class) || _class);
/* harmony default export */ __webpack_exports__["default"] = (PerformanceManagementSelectImg);

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

/***/ })

}]);
//# sourceMappingURL=../map/performanceManagementSelectImg.e07439dc.map