(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(902);

__webpack_require__(1071);

/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1072:
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

var _rmcFeedback = __webpack_require__(852);

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _flex = __webpack_require__(904);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:no-bitwise */
function noop() {}

var ImagePicker = function (_React$Component) {
    (0, _inherits3['default'])(ImagePicker, _React$Component);

    function ImagePicker() {
        (0, _classCallCheck3['default'])(this, ImagePicker);

        // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
        var _this = (0, _possibleConstructorReturn3['default'])(this, (ImagePicker.__proto__ || Object.getPrototypeOf(ImagePicker)).apply(this, arguments));

        _this.getOrientation = function (file, callback) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var view = new DataView(e.target.result);
                if (view.getUint16(0, false) !== 0xffd8) {
                    return callback(-2);
                }
                var length = view.byteLength;
                var offset = 2;
                while (offset < length) {
                    var marker = view.getUint16(offset, false);
                    offset += 2;
                    if (marker === 0xffe1) {
                        var tmp = view.getUint32(offset += 2, false);
                        if (tmp !== 0x45786966) {
                            return callback(-1);
                        }
                        var little = view.getUint16(offset += 6, false) === 0x4949;
                        offset += view.getUint32(offset + 4, little);
                        var tags = view.getUint16(offset, little);
                        offset += 2;
                        for (var i = 0; i < tags; i++) {
                            if (view.getUint16(offset + i * 12, little) === 0x0112) {
                                return callback(view.getUint16(offset + i * 12 + 8, little));
                            }
                        }
                    } else if ((marker & 0xff00) !== 0xff00) {
                        break;
                    } else {
                        offset += view.getUint16(offset, false);
                    }
                }
                return callback(-1);
            };
            reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
        };
        _this.getRotation = function () {
            var orientation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var imgRotation = 0;
            switch (orientation) {
                case 3:
                    imgRotation = 180;
                    break;
                case 6:
                    imgRotation = 90;
                    break;
                case 8:
                    imgRotation = 270;
                    break;
                default:
            }
            return imgRotation;
        };
        _this.removeImage = function (index) {
            var newImages = [];
            var _this$props$files = _this.props.files,
                files = _this$props$files === undefined ? [] : _this$props$files;

            files.forEach(function (image, idx) {
                if (index !== idx) {
                    newImages.push(image);
                }
            });
            if (_this.props.onChange) {
                _this.props.onChange(newImages, 'remove', index);
            }
        };
        _this.addImage = function (imgItem) {
            var _this$props$files2 = _this.props.files,
                files = _this$props$files2 === undefined ? [] : _this$props$files2;

            var newImages = files.concat(imgItem);
            if (_this.props.onChange) {
                _this.props.onChange(newImages, 'add');
            }
        };
        _this.onImageClick = function (index) {
            if (_this.props.onImageClick) {
                _this.props.onImageClick(index, _this.props.files);
            }
        };
        _this.onFileChange = function () {
            var fileSelectorEl = _this.fileSelectorInput;
            if (fileSelectorEl && fileSelectorEl.files && fileSelectorEl.files.length) {
                var files = fileSelectorEl.files;
                var imageParsePromiseList = [];
                for (var i = 0; i < files.length; i++) {
                    imageParsePromiseList.push(_this.parseFile(files[i], i));
                }
                Promise.all(imageParsePromiseList).then(function (imageItems) {
                    return _this.addImage(imageItems);
                })['catch'](function (error) {
                    if (_this.props.onFail) {
                        _this.props.onFail(error);
                    }
                });
            }
            if (fileSelectorEl) {
                fileSelectorEl.value = '';
            }
        };
        _this.parseFile = function (file, index) {
            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dataURL = e.target.result;
                    if (!dataURL) {
                        reject('Fail to get the ' + index + ' image');
                        return;
                    }
                    var orientation = 1;
                    _this.getOrientation(file, function (res) {
                        // -2: not jpeg , -1: not defined
                        if (res > 0) {
                            orientation = res;
                        }
                        resolve({
                            url: dataURL,
                            orientation: orientation,
                            file: file
                        });
                    });
                };
                reader.readAsDataURL(file);
            });
        };
        return _this;
    }

    (0, _createClass3['default'])(ImagePicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                _props$files = _props.files,
                files = _props$files === undefined ? [] : _props$files,
                selectable = _props.selectable,
                onAddImageClick = _props.onAddImageClick,
                multiple = _props.multiple,
                accept = _props.accept,
                capture = _props.capture,
                disableDelete = _props.disableDelete;

            var imgItemList = [];
            var count = parseInt('' + this.props.length, 10);
            if (count <= 0) {
                count = 4;
            }
            var wrapCls = (0, _classnames2['default'])('' + prefixCls, className);
            files.forEach(function (image, index) {
                var imgStyle = {
                    backgroundImage: 'url("' + image.url + '")',
                    transform: 'rotate(' + _this2.getRotation(image.orientation) + 'deg)'
                };
                var itemStyle = {};
                imgItemList.push(React.createElement(
                    _flex2['default'].Item,
                    { key: 'item-' + index, style: itemStyle },
                    React.createElement(
                        'div',
                        { key: index, className: prefixCls + '-item' },
                        !disableDelete && React.createElement('div', { className: prefixCls + '-item-remove', role: 'button', 'aria-label': 'Click and Remove this image'
                            // tslint:disable-next-line:jsx-no-multiline-js
                            , onClick: function onClick() {
                                _this2.removeImage(index);
                            } }),
                        React.createElement('div', { className: prefixCls + '-item-content', role: 'button', 'aria-label': 'Image can be clicked'
                            // tslint:disable-next-line:jsx-no-multiline-js
                            , onClick: function onClick() {
                                _this2.onImageClick(index);
                            }, style: imgStyle })
                    )
                ));
            });
            var selectEl = React.createElement(
                _flex2['default'].Item,
                { key: 'select' },
                React.createElement(
                    _rmcFeedback2['default'],
                    { activeClassName: prefixCls + '-upload-btn-active' },
                    React.createElement(
                        'div',
                        { className: prefixCls + '-item ' + prefixCls + '-upload-btn', onClick: onAddImageClick, role: 'button', 'aria-label': 'Choose and add image' },
                        React.createElement('input', { ref: function ref(input) {
                                if (input) {
                                    _this2.fileSelectorInput = input;
                                }
                            }, type: 'file', accept: accept
                            // tslint:disable-next-line:jsx-no-multiline-js
                            , onChange: function onChange() {
                                _this2.onFileChange();
                            }, multiple: multiple, capture: capture })
                    )
                )
            );
            var allEl = selectable ? imgItemList.concat([selectEl]) : imgItemList;
            var length = allEl.length;
            if (length !== 0 && length % count !== 0) {
                var blankCount = count - length % count;
                var fillBlankEl = [];
                for (var i = 0; i < blankCount; i++) {
                    fillBlankEl.push(React.createElement(_flex2['default'].Item, { key: 'blank-' + i }));
                }
                allEl = allEl.concat(fillBlankEl);
            }
            var flexEl = [];
            for (var _i = 0; _i < allEl.length / count; _i++) {
                var rowEl = allEl.slice(_i * count, _i * count + count);
                flexEl.push(rowEl);
            }
            var renderEl = flexEl.map(function (item, index) {
                return React.createElement(
                    _flex2['default'],
                    { key: 'flex-' + index },
                    item
                );
            });
            return React.createElement(
                'div',
                { className: wrapCls, style: style },
                React.createElement(
                    'div',
                    { className: prefixCls + '-list', role: 'group' },
                    renderEl
                )
            );
        }
    }]);
    return ImagePicker;
}(React.Component);

exports['default'] = ImagePicker;

ImagePicker.defaultProps = {
    prefixCls: 'am-image-picker',
    files: [],
    onChange: noop,
    onImageClick: noop,
    onAddImageClick: noop,
    onFail: noop,
    selectable: true,
    multiple: false,
    accept: 'image/*',
    length: 4,
    disableDelete: false
};
module.exports = exports['default'];

/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _version = __webpack_require__(1079);

var _version2 = _interopRequireDefault(_version);

var _index = __webpack_require__(978);

var _index2 = __webpack_require__(1083);

var _index3 = __webpack_require__(898);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(1092);

var _index6 = __webpack_require__(1114);

var _index7 = _interopRequireDefault(_index6);

var _index8 = __webpack_require__(1116);

var _index9 = _interopRequireDefault(_index8);

var _index10 = __webpack_require__(1118);

var _index11 = _interopRequireDefault(_index10);

var _index12 = __webpack_require__(1120);

var _index13 = _interopRequireDefault(_index12);

var _index14 = __webpack_require__(1122);

var _index15 = _interopRequireDefault(_index14);

var _index16 = __webpack_require__(1124);

var _index17 = _interopRequireDefault(_index16);

var _index18 = __webpack_require__(1130);

var _index19 = _interopRequireDefault(_index18);

var _index20 = __webpack_require__(881);

var _index21 = _interopRequireDefault(_index20);

var _index22 = __webpack_require__(1132);

var _index23 = __webpack_require__(1134);

var _index24 = __webpack_require__(1139);

var _index25 = __webpack_require__(1146);

var _index26 = __webpack_require__(1148);

var _index27 = _interopRequireDefault(_index26);

var _index28 = __webpack_require__(1150);

var _toptips = __webpack_require__(1153);

var _toptips2 = _interopRequireDefault(_toptips);

var _gallery = __webpack_require__(1155);

var _footer = __webpack_require__(979);

var _loadmore = __webpack_require__(944);

var _loadmore2 = _interopRequireDefault(_loadmore);

var _picker = __webpack_require__(1160);

var _badge = __webpack_require__(1164);

var _badge2 = _interopRequireDefault(_badge);

var _popup = __webpack_require__(1166);

var _ptr = __webpack_require__(993);

var _ptr2 = _interopRequireDefault(_ptr);

var _infiniteloader = __webpack_require__(994);

var _infiniteloader2 = _interopRequireDefault(_infiniteloader);

var _swiper = __webpack_require__(990);

var _swiper2 = _interopRequireDefault(_swiper);

var _page = __webpack_require__(1171);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.0.0 components
/**
 * Created by jf on 15/10/27.
 */
exports.default = {
    version: _version2.default,

    //0.4.x
    Button: _index.Button,
    ButtonArea: _index.ButtonArea,
    Cells: _index2.Cells,
    CellsTitle: _index2.CellsTitle,
    CellsTips: _index2.CellsTips,
    Cell: _index2.Cell,
    CellHeader: _index2.CellHeader,
    CellBody: _index2.CellBody,
    CellFooter: _index2.CellFooter,
    Mask: _index4.default,
    Form: _index5.Form,
    FormCell: _index5.FormCell,
    Radio: _index5.Radio,
    Checkbox: _index5.Checkbox,
    Input: _index5.Input,
    TextArea: _index5.TextArea,
    Switch: _index5.Switch,
    Select: _index5.Select,
    Uploader: _index5.Uploader,
    Label: _index7.default,
    Toast: _index9.default,
    Progress: _index11.default,
    ActionSheet: _index13.default,
    Dialog: _index15.default,
    Msg: _index17.default,
    Article: _index19.default,
    Icon: _index21.default,
    Grids: _index22.Grids,
    Grid: _index22.Grid,
    GridIcon: _index22.GridIcon,
    GridLabel: _index22.GridLabel,
    Panel: _index23.Panel,
    PanelHeader: _index23.PanelHeader,
    PanelBody: _index23.PanelBody,
    PanelFooter: _index23.PanelFooter,
    MediaBox: _index24.MediaBox,
    MediaBoxHeader: _index24.MediaBoxHeader,
    MediaBoxBody: _index24.MediaBoxBody,
    MediaBoxTitle: _index24.MediaBoxTitle,
    MediaBoxDescription: _index24.MediaBoxDescription,
    MediaBoxInfo: _index24.MediaBoxInfo,
    MediaBoxInfoMeta: _index24.MediaBoxInfoMeta,
    NavBar: _index25.NavBar,
    NavBarItem: _index25.NavBarItem,
    Tab: _index25.Tab,
    TabBody: _index25.TabBody,
    TabBodyItem: _index25.TabBodyItem,
    TabBar: _index25.TabBar,
    TabBarIcon: _index25.TabBarIcon,
    TabBarItem: _index25.TabBarItem,
    TabBarLabel: _index25.TabBarLabel,
    SearchBar: _index27.default,

    //1.0.0
    Flex: _index28.Flex,
    FlexItem: _index28.FlexItem,
    VCode: _index5.VCode,
    Agreement: _index5.Agreement,
    Toptips: _toptips2.default,
    Gallery: _gallery.Gallery,
    GalleryDelete: _gallery.GalleryDelete,
    Footer: _footer.Footer,
    FooterText: _footer.FooterText,
    FooterLinks: _footer.FooterLinks,
    FooterLink: _footer.FooterLink,
    LoadMore: _loadmore2.default,
    Preview: _index5.Preview,
    PreviewHeader: _index5.PreviewHeader,
    PreviewBody: _index5.PreviewBody,
    PreviewFooter: _index5.PreviewFooter,
    PreviewItem: _index5.PreviewItem,
    PreviewButton: _index.PreviewButton,
    Picker: _picker.Picker,
    PickerGroup: _picker.PickerGroup,
    CityPicker: _picker.CityPicker,
    Slider: _index5.Slider,
    Badge: _badge2.default,

    //non-standard
    Popup: _popup.Popup,
    PopupHeader: _popup.PopupHeader,
    PullToRefresh: _ptr2.default,
    InfiniteLoader: _infiniteloader2.default,
    Swiper: _swiper2.default,
    Page: _page2.default
};
//non standard


//0.4.x components

module.exports = exports['default'];

/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '1.2.2';
module.exports = exports['default'];

/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
 *
 */
var Button = function (_React$Component) {
    (0, _inherits3.default)(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
    }

    (0, _createClass3.default)(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                component = _props.component,
                type = _props.type,
                size = _props.size,
                plain = _props.plain,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

            var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
            var cls = type === 'vcode' ? (0, _classnames2.default)('weui-vcode-btn', (0, _defineProperty3.default)({}, className, className)) : (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-btn': true,
                'weui-btn_mini': size === 'small',
                'weui-btn_primary': type === 'primary' && !plain,
                'weui-btn_default': type === 'default' && !plain,
                'weui-btn_warn': type === 'warn',
                'weui-btn_plain-primary': type === 'primary' && plain,
                'weui-btn_plain-default': type === 'default' && plain,
                'weui-btn_disabled': this.props.disabled && !plain,
                'weui-btn_plain-disabled': this.props.disabled && plain
            }, className, className));

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({}, others, { className: cls }),
                children
            );
        }
    }]);
    return Button;
}(_react2.default.Component);

Button.propTypes = {
    disabled: _propTypes2.default.bool,
    /**
     * Options: primary, default, warn, vcode
     *
     */
    type: _propTypes2.default.string,
    /**
     * Options: normal, small
     *
     */
    size: _propTypes2.default.string
};
Button.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal'
};
exports.default = Button;
;
module.exports = exports['default'];

/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonArea = function (_Component) {
    (0, _inherits3.default)(ButtonArea, _Component);

    function ButtonArea() {
        (0, _classCallCheck3.default)(this, ButtonArea);
        return (0, _possibleConstructorReturn3.default)(this, (ButtonArea.__proto__ || (0, _getPrototypeOf2.default)(ButtonArea)).apply(this, arguments));
    }

    (0, _createClass3.default)(ButtonArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                direction = _props.direction,
                children = _props.children,
                className = _props.className;

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-btn-area': true,
                'weui-btn-area_inline': direction === 'horizontal'
            }, className, className));

            return _react2.default.createElement(
                'div',
                { className: cls },
                children
            );
        }
    }]);
    return ButtonArea;
}(_react.Component);

ButtonArea.propTypes = {
    /**
     * Direction of Button Layout inside, Options: veritical, horizontal
     *
     */
    direction: _propTypes2.default.string
};
ButtonArea.defaultProps = {
    direction: 'vertical'
};
;

exports.default = ButtonArea;
module.exports = exports['default'];

/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewButton = function PreviewButton(props) {
    var className = props.className,
        primary = props.primary,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'primary', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default': !primary,
        'weui-form-preview__btn_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

PreviewButton.propTypes = {
    /**
     * Primary style of button
     *
     */
    primary: _propTypes2.default.bool
};

PreviewButton.defaultProps = {
    primary: false
};

exports.default = PreviewButton;
module.exports = exports['default'];

/***/ }),

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CellFooter = exports.CellBody = exports.CellHeader = exports.CellsTips = exports.CellsTitle = exports.Cell = exports.Cells = undefined;

var _cells = __webpack_require__(1084);

var _cells2 = _interopRequireDefault(_cells);

var _cell = __webpack_require__(1085);

var _cell2 = _interopRequireDefault(_cell);

var _cells_title = __webpack_require__(1086);

var _cells_title2 = _interopRequireDefault(_cells_title);

var _cells_tips = __webpack_require__(1087);

var _cells_tips2 = _interopRequireDefault(_cells_tips);

var _cell_header = __webpack_require__(1088);

var _cell_header2 = _interopRequireDefault(_cell_header);

var _cell_body = __webpack_require__(1089);

var _cell_body2 = _interopRequireDefault(_cell_body);

var _cell_footer = __webpack_require__(1090);

var _cell_footer2 = _interopRequireDefault(_cell_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Cells = _cells2.default;
exports.Cell = _cell2.default;
exports.CellsTitle = _cells_title2.default;
exports.CellsTips = _cells_tips2.default;
exports.CellHeader = _cell_header2.default;
exports.CellBody = _cell_body2.default;
exports.CellFooter = _cell_footer2.default;

/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = __webpack_require__(910);

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper for `Cell`
 *
 */
var Cells = function Cells(props) {
    var children = props.children,
        className = props.className,
        access = props.access,
        others = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'access']);


    if (access) {
        (0, _deprecationWarning2.default)('Cells Access', 'Cell Access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#%E5%B8%A6%E7%AE%AD%E5%A4%B4%E7%9A%84%E5%88%97%E8%A1%A8%E7%94%B1%E4%B9%8B%E5%89%8D%E7%9A%84weui_cells_access%E6%94%B9%E4%B8%BA%E5%8D%95%E7%8B%AC%E6%8E%A7%E5%88%B6%E7%9A%84weui-cell_access');
    }

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cells': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

Cells.propTypes = {};

Cells.defaultProps = {};

exports.default = Cells;
module.exports = exports['default'];

/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
var Cell = function Cell(props) {
    var className = props.className,
        children = props.children,
        access = props.access,
        href = props.href,
        link = props.link,
        component = props.component,
        htmlFor = props.htmlFor,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'access', 'href', 'link', 'component', 'htmlFor']);

    var DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell': true,
        'weui-cell_access': access,
        'weui-cell_link': link
    }, className, className));

    return _react2.default.createElement(
        CellComponent,
        (0, _extends3.default)({
            className: cls,
            href: href,
            htmlFor: htmlFor
        }, others),
        children
    );
};

Cell.propTypes = {
    /**
     * if cell should have arrow or link
     *
     */
    access: _propTypes2.default.bool,
    /**
     * if this cell body is link
     *
     */
    link: _propTypes2.default.bool,
    /**
     * pass in an component to replace Cell but apply same style
     *
     */
    component: _propTypes2.default.func
};

Cell.defaultProps = {
    access: false,
    link: false
};

exports.default = Cell;
module.exports = exports['default'];

/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Heading for `Cells`
 *
 */
var CellsTitle = function CellsTitle(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cells__title': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = CellsTitle;
module.exports = exports['default'];

/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer Information for `Cells`
 *
 */
var CellsTips = function CellsTips(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cells__tips': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = CellsTips;
module.exports = exports['default'];

/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header of `Cell`
 *
 */
var CellHeader = function CellHeader(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'primary']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell__hd': true,
        'weui-cell_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

CellHeader.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: _propTypes2.default.bool
};

CellHeader.defaultProps = {
    primary: false
};

exports.default = CellHeader;
module.exports = exports['default'];

/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of `Cell`
 *
 */
var CellBody = function CellBody(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'primary']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell__bd': true,
        'weui-cell_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

CellBody.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: _propTypes2.default.bool
};

CellBody.defaultProps = {
    primary: false
};

exports.default = CellBody;
module.exports = exports['default'];

/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer of `Cell`
 *
 */
var CellFooter = function CellFooter(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'primary']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell__ft': true,
        'weui-cell_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

CellFooter.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: _propTypes2.default.bool
};

CellFooter.defaultProps = {
    primary: false
};

exports.default = CellFooter;
module.exports = exports['default'];

/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
var Mask = function (_React$Component) {
    (0, _inherits3.default)(Mask, _React$Component);

    function Mask() {
        (0, _classCallCheck3.default)(this, Mask);
        return (0, _possibleConstructorReturn3.default)(this, (Mask.__proto__ || (0, _getPrototypeOf2.default)(Mask)).apply(this, arguments));
    }

    (0, _createClass3.default)(Mask, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                transparent = _props.transparent,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['transparent', 'className']);

            var clz = (0, _classnames2.default)({
                'weui-mask': !transparent,
                'weui-mask_transparent': transparent
            }, className);

            return _react2.default.createElement('div', (0, _extends3.default)({ className: clz }, others));
        }
    }]);
    return Mask;
}(_react2.default.Component);

Mask.propTypes = {
    /**
     * Whather mask should be transparent (no color)
     *
     */
    transparent: _propTypes2.default.bool
};
Mask.defaultProps = {
    transparent: false
};
exports.default = Mask;
module.exports = exports['default'];

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slider = exports.PreviewItem = exports.PreviewFooter = exports.PreviewBody = exports.PreviewHeader = exports.Preview = exports.Agreement = exports.VCode = exports.Uploader = exports.Select = exports.Checkbox = exports.Radio = exports.Switch = exports.Input = exports.TextArea = exports.FormCell = exports.Form = undefined;

var _form = __webpack_require__(1093);

var _form2 = _interopRequireDefault(_form);

var _form_cell = __webpack_require__(1094);

var _form_cell2 = _interopRequireDefault(_form_cell);

var _textarea = __webpack_require__(1095);

var _textarea2 = _interopRequireDefault(_textarea);

var _input = __webpack_require__(1096);

var _input2 = _interopRequireDefault(_input);

var _switch = __webpack_require__(1097);

var _switch2 = _interopRequireDefault(_switch);

var _radio = __webpack_require__(1098);

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = __webpack_require__(1099);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _select = __webpack_require__(1100);

var _select2 = _interopRequireDefault(_select);

var _uploader = __webpack_require__(1101);

var _uploader2 = _interopRequireDefault(_uploader);

var _vcode = __webpack_require__(1106);

var _vcode2 = _interopRequireDefault(_vcode);

var _agreement = __webpack_require__(1107);

var _agreement2 = _interopRequireDefault(_agreement);

var _preview = __webpack_require__(1108);

var _preview2 = _interopRequireDefault(_preview);

var _preview_header = __webpack_require__(1109);

var _preview_header2 = _interopRequireDefault(_preview_header);

var _preview_body = __webpack_require__(1110);

var _preview_body2 = _interopRequireDefault(_preview_body);

var _preview_footer = __webpack_require__(1111);

var _preview_footer2 = _interopRequireDefault(_preview_footer);

var _preview_item = __webpack_require__(1112);

var _preview_item2 = _interopRequireDefault(_preview_item);

var _slider = __webpack_require__(1113);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Form = _form2.default;
exports.FormCell = _form_cell2.default;
exports.TextArea = _textarea2.default;
exports.Input = _input2.default;
exports.Switch = _switch2.default;
exports.Radio = _radio2.default;
exports.Checkbox = _checkbox2.default;
exports.Select = _select2.default;
exports.Uploader = _uploader2.default;
exports.VCode = _vcode2.default;
exports.Agreement = _agreement2.default;
exports.Preview = _preview2.default;
exports.PreviewHeader = _preview_header2.default;
exports.PreviewBody = _preview_body2.default;
exports.PreviewFooter = _preview_footer2.default;
exports.PreviewItem = _preview_item2.default;
exports.Slider = _slider2.default;

/***/ }),

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for form
 *
 */
var Form = function (_Component) {
    (0, _inherits3.default)(Form, _Component);

    function Form() {
        (0, _classCallCheck3.default)(this, Form);
        return (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).apply(this, arguments));
    }

    (0, _createClass3.default)(Form, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                radio = _props.radio,
                checkbox = _props.checkbox,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'radio', 'checkbox']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-cells': true,
                'weui-cells_form': !radio && !checkbox,
                'weui-cells_radio': radio,
                'weui-cells_checkbox': checkbox
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return Form;
}(_react.Component);

Form.propTypes = {
    /**
     * if this form is use for radios
     *
     */
    radio: _propTypes2.default.bool,
    /**
     * if this form is use for checkbox
     *
     */
    checkbox: _propTypes2.default.bool
};
Form.defaultProps = {
    radio: false,
    checkbox: false
};
;

exports.default = Form;
module.exports = exports['default'];

/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(404);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * form wrapper for `Cell`
 *
 */
var FormCell = function (_Component) {
    (0, _inherits3.default)(FormCell, _Component);

    function FormCell() {
        (0, _classCallCheck3.default)(this, FormCell);
        return (0, _possibleConstructorReturn3.default)(this, (FormCell.__proto__ || (0, _getPrototypeOf2.default)(FormCell)).apply(this, arguments));
    }

    (0, _createClass3.default)(FormCell, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                radio = _props.radio,
                checkbox = _props.checkbox,
                vcode = _props.vcode,
                warn = _props.warn,
                select = _props.select,
                selectPos = _props.selectPos,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'radio', 'checkbox', 'vcode', 'warn', 'select', 'selectPos']);

            var cellDomProps = (0, _assign2.default)({}, others);
            delete cellDomProps.switch;
            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-cell': true,
                'weui-cell_vcode': vcode,
                'weui-cell_warn': warn,
                'weui-cell_switch': this.props.switch,
                'weui-cell_select': select,
                'weui-cell_select-before': selectPos === 'before',
                'weui-cell_select-after': selectPos === 'after',
                'weui-check__label': radio || checkbox
            }, className, className));

            if (radio || checkbox) {
                return _react2.default.createElement(
                    'label',
                    (0, _extends3.default)({ className: cls }, cellDomProps),
                    children
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, cellDomProps),
                    children
                );
            }
        }
    }]);
    return FormCell;
}(_react.Component);

FormCell.propTypes = {
    /**
     * if cell use for vcode
     *
     */
    vcode: _propTypes2.default.bool,
    /**
     * display warn style of cell
     *
     */
    warn: _propTypes2.default.bool,
    /**
     * if cell use for radio
     *
     */
    radio: _propTypes2.default.bool,
    /**
     * if cell use for checkbox
     *
     */
    checkbox: _propTypes2.default.bool,
    /**
     * if cell use for switch checkbox
     *
     */
    'switch': _propTypes2.default.bool,
    /**
     * if cell use for select
     *
     */
    select: _propTypes2.default.bool,
    /**
     * select position, options: before, after
     *
     */
    selectPos: _propTypes2.default.string
};
FormCell.defaultProps = {
    vcode: false,
    warn: false,
    radio: false,
    checkbox: false,
    select: false,
    'switch': false,
    selectPos: undefined
};
exports.default = FormCell;
;
module.exports = exports['default'];

/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for textarea
 *
 */
var TextArea = function (_Component) {
    (0, _inherits3.default)(TextArea, _Component);

    function TextArea() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            textCounter: _this.props.defaultValue ? _this.props.defaultValue.length : 0
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TextArea, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ textCounter: e.target.value.length });

            //forward event to props if any
            if (this.props.onChange) this.props.onChange(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                showCounter = _props.showCounter,
                maxLength = _props.maxLength,
                onChange = _props.onChange,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'showCounter', 'maxLength', 'onChange']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-textarea': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'textarea',
                    (0, _extends3.default)({
                        className: cls,
                        maxLength: maxLength,
                        onChange: this.handleChange.bind(this)
                    }, others),
                    children
                ),
                showCounter ? _react2.default.createElement(
                    'div',
                    { className: 'weui-textarea-counter' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.textCounter
                    ),
                    maxLength ? '/' + maxLength : false
                ) : false
            );
        }
    }]);
    return TextArea;
}(_react.Component);

TextArea.propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: _propTypes2.default.bool,
    /**
     * max character allow for textarea
     *
     */
    maxLength: _propTypes2.default.number,
    defaultValue: _propTypes2.default.string
};
TextArea.defaultProps = {
    showCounter: true,
    defaultValue: undefined
};
exports.default = TextArea;
;
module.exports = exports['default'];

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Input wrapper for `input`
 *
 */
var Input = function Input(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-input': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', (0, _extends3.default)({ className: cls }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

Input.propTypes = {
    defaultValue: _propTypes2.default.string
};

Input.defaultProps = {
    defaultValue: undefined
};

exports.default = Input;
module.exports = exports['default'];

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui switch style for checkbox
 *
 */
var Switch = function Switch(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-switch': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', (0, _extends3.default)({ className: cls, type: 'checkbox' }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

exports.default = Switch;
module.exports = exports['default'];

/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for radio
 *
 */
var Radio = function Radio(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-check': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', (0, _extends3.default)({ className: cls, type: 'radio' }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

exports.default = Radio;
module.exports = exports['default'];

/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for checkbox
 *
 */
var Checkbox = function Checkbox(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-check': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', (0, _extends3.default)({ className: cls, type: 'checkbox' }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

exports.default = Checkbox;
module.exports = exports['default'];

/***/ }),

/***/ 1100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for select
 *
 */
var Select = function (_Component) {
    (0, _inherits3.default)(Select, _Component);

    function Select() {
        (0, _classCallCheck3.default)(this, Select);
        return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).apply(this, arguments));
    }

    (0, _createClass3.default)(Select, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return _react2.default.createElement(
                    'option',
                    (0, _extends3.default)({
                        key: i,
                        value: item.value
                    }, item),
                    item.label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                data = _props.data,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'data', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-select': true
            }, className, className));

            return _react2.default.createElement(
                'select',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return Select;
}(_react.Component);

Select.propTypes = {
    /**
     * object arrays of options, `value` and `label` properties is required
     *
     */
    data: _propTypes2.default.array
};
Select.defaultProps = {
    data: []
};
exports.default = Select;
;
module.exports = exports['default'];

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(404);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _icon = __webpack_require__(881);

var _icon2 = _interopRequireDefault(_icon);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = __webpack_require__(910);

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui style uploader
 *
 */
var Uploader = function (_Component) {
    (0, _inherits3.default)(Uploader, _Component);

    function Uploader() {
        (0, _classCallCheck3.default)(this, Uploader);
        return (0, _possibleConstructorReturn3.default)(this, (Uploader.__proto__ || (0, _getPrototypeOf2.default)(Uploader)).apply(this, arguments));
    }

    (0, _createClass3.default)(Uploader, [{
        key: 'detectVerticalSquash',


        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
         * With react fix by n7best
         */
        value: function detectVerticalSquash(img) {
            var data = void 0;
            var ih = img.naturalHeight;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            try {
                // Prevent cross origin error
                data = ctx.getImageData(0, 0, 1, ih).data;
            } catch (err) {
                // hopeless, assume the image is well and good.
                console.log('Cannot check verticalSquash: CORS?');
                return 1;
            }
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = ey + sy >> 1;
            }
            var ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        }
    }, {
        key: 'handleFile',
        value: function handleFile(file, cb) {
            var _this2 = this,
                _arguments = arguments;

            var reader = void 0;
            if (typeof FileReader !== 'undefined') {
                reader = new FileReader();
            } else {
                if (window.FileReader) reader = new window.FileReader();
            }

            reader.onload = function (e) {
                var img = void 0;
                if (typeof Image !== 'undefined') {
                    img = new Image();
                } else {
                    if (window.Image) img = new window.Image();
                }
                img.onload = function () {
                    var w = Math.min(_this2.props.maxWidth, img.width);
                    var h = img.height * (w / img.width);
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');

                    //check canvas support, for test
                    if (ctx) {
                        //patch subsampling bug
                        //http://jsfiddle.net/gWY2a/24/
                        var drawImage = ctx.drawImage;
                        ctx.drawImage = function (_img, sx, sy, sw, sh, dx, dy, dw, dh) {
                            var vertSquashRatio = 1;
                            // Detect if img param is indeed image
                            if (!!_img && _img.nodeName === 'IMG') {
                                vertSquashRatio = _this2.detectVerticalSquash(_img);
                                if (typeof sw === 'undefined') sw = _img.naturalWidth;
                                if (typeof sh === 'undefined') sh = _img.naturalHeight;
                            }

                            // Execute several cases (Firefox does not handle undefined as no param)
                            // by call (apply is bad performance)
                            if (_arguments.length === 9) drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);else if (typeof sw !== 'undefined') drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);else drawImage.call(ctx, _img, sx, sy);
                        };

                        canvas.width = w;
                        canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);

                        var base64 = canvas.toDataURL('image/png');

                        cb({
                            nativeFile: file,
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            data: base64
                        }, e);
                    } else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var _this3 = this;

            var langs = this.props.lang;
            var _files = e.target.files;

            if (_files.length === 0) return;

            if (this.props.files.length >= this.props.maxCount) {
                this.props.onError(langs.maxError(this.props.maxCount));
                return;
            }

            for (var key in _files) {
                if (!_files.hasOwnProperty(key)) continue;
                var file = _files[key];

                this.handleFile(file, function (_file, _e) {
                    if (_this3.props.onChange) _this3.props.onChange(_file, _e);
                    _reactDom2.default.findDOMNode(_this3.refs.uploader).value = '';
                }, e);
            }
        }
    }, {
        key: 'renderFiles',
        value: function renderFiles() {
            var _this4 = this;

            return this.props.files.map(function (file, idx) {
                var url = file.url,
                    error = file.error,
                    status = file.status,
                    onClick = file.onClick,
                    others = (0, _objectWithoutProperties3.default)(file, ['url', 'error', 'status', 'onClick']);

                var fileStyle = {
                    backgroundImage: 'url(' + url + ')'
                };
                var cls = (0, _classnames2.default)({
                    'weui-uploader__file': true,
                    'weui-uploader__file_status': error || status
                });

                if (onClick) {
                    (0, _deprecationWarning2.default)('File onClick', 'Uploader onFileClick');
                }

                var handleFileClick = onClick ? onClick : function (e) {
                    if (_this4.props.onFileClick) _this4.props.onFileClick(e, file, idx);
                };

                return _react2.default.createElement(
                    'li',
                    (0, _extends3.default)({ className: cls, key: idx, style: fileStyle, onClick: handleFileClick }, others),
                    error || status ? _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__file-content' },
                        error ? _react2.default.createElement(_icon2.default, { value: 'warn' }) : status
                    ) : false
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                title = _props.title,
                maxCount = _props.maxCount,
                files = _props.files,
                onChange = _props.onChange,
                onFileClick = _props.onFileClick,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'title', 'maxCount', 'files', 'onChange', 'onFileClick']);

            var inputProps = (0, _assign2.default)({}, others);
            delete inputProps.lang;
            delete inputProps.onError;
            delete inputProps.maxWidth;

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-uploader': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'div',
                    { className: 'weui-uploader__hd' },
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-uploader__title' },
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__info' },
                        files.length,
                        '/',
                        maxCount
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-uploader__bd' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'weui-uploader__files' },
                        this.renderFiles()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__input-box' },
                        _react2.default.createElement('input', (0, _extends3.default)({
                            ref: 'uploader' //let react to reset after onchange
                            , className: 'weui-uploader__input',
                            type: 'file',
                            accept: 'image/*',
                            capture: 'camera',
                            onChange: this.handleChange.bind(this)
                        }, inputProps))
                    )
                )
            );
        }
    }]);
    return Uploader;
}(_react.Component);

Uploader.propTypes = {
    /**
     * title of uploader
     *
     */
    title: _propTypes2.default.string,
    /**
     * max amount of allow file
     *
     */
    maxCount: _propTypes2.default.number,
    /**
     * maxWidth of image for uploader to compress
     *
     */
    maxWidth: _propTypes2.default.number,
    /**
     * when file change, pass property `(event, file)`
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * when there is error, pass property `msg`
     *
     */
    onError: _propTypes2.default.func,
    /**
     * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
     *
     */
    files: _propTypes2.default.array,
    /**
     * languages object, with property `maxError`
     *
     */
    lang: _propTypes2.default.object
};
Uploader.defaultProps = {
    title: '图片上传',
    maxCount: 4,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    lang: { maxError: function maxError(maxCount) {
            return '\u6700\u591A\u53EA\u80FD\u4E0A\u4F20' + maxCount + '\u5F20\u56FE\u7247';
        } }
};
exports.default = Uploader;
;
module.exports = exports['default'];

/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__(1103);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = __webpack_require__(910);

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deprecateValue = {
    'safe_success': 'safe-success',
    'safe_warn': 'safe-warn',
    'success_circle': 'success-circle',
    'success_no_circle': 'success-no-circle',
    'waiting_circle': 'waiting-circle',
    'info_circle': 'info-circle'
};

/**
 * WeUI Icons
 *
 */

var Icon = function (_React$Component) {
    (0, _inherits3.default)(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
    }

    (0, _createClass3.default)(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                value = _props.value,
                size = _props.size,
                className = _props.className,
                primary = _props.primary,
                others = (0, _objectWithoutProperties3.default)(_props, ['value', 'size', 'className', 'primary']);


            if ((0, _keys2.default)(deprecateValue).indexOf(value) !== -1) {
                (0, _deprecationWarning2.default)('Icon ' + value, 'Icon ' + deprecateValue[value]);
            }

            var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, 'weui-icon-' + value, value !== 'loading'), (0, _defineProperty3.default)(_classNames, 'weui-icon_msg', size === 'large' && !primary), (0, _defineProperty3.default)(_classNames, 'weui-icon_msg-primary', size === 'large' && primary), (0, _defineProperty3.default)(_classNames, 'weui-loading', value === 'loading'), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

            return _react2.default.createElement('i', (0, _extends3.default)({}, others, { className: cls }));
        }
    }]);
    return Icon;
}(_react2.default.Component);

Icon.propTypes = {
    /**
     * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
     *
     */
    value: _propTypes2.default.string,
    /**
     * size of icon, options: small/large
     *
     */
    size: _propTypes2.default.string
};
Icon.defaultProps = {
    value: 'success',
    size: 'small'
};
exports.default = Icon;
module.exports = exports['default'];

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1104), __esModule: true };

/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1105);
module.exports = __webpack_require__(74).Object.keys;


/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(184);
var $keys = __webpack_require__(148);

__webpack_require__(901)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * image wrapper for vcode
 *
 */
var VCode = function VCode(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-vcode-img': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', (0, _extends3.default)({ className: cls }, others))
    );
};

exports.default = VCode;
module.exports = exports['default'];

/***/ }),

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Agreement style checkbox
 *
 */
var Agreement = function Agreement(props) {
    var className = props.className,
        children = props.children,
        id = props.id,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'id']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-agree': true
    }, className, className));

    return _react2.default.createElement(
        'label',
        { className: cls, htmlFor: id },
        _react2.default.createElement('input', (0, _extends3.default)({ id: id, type: 'checkbox', className: 'weui-agree__checkbox' }, others)),
        _react2.default.createElement(
            'span',
            { className: 'weui-agree__text' },
            children
        )
    );
};

exports.default = Agreement;
module.exports = exports['default'];

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Preview Wrapper consists of `PreviewHeader`, `PreviewBody`, `PreviewFooter`, `PreviewItem`
 *
 */
//1.0.0 components

var Preview = function Preview(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = Preview;
module.exports = exports['default'];

/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.0.0 components

var PreviewHeader = function PreviewHeader(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__hd': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = PreviewHeader;
module.exports = exports['default'];

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of Preview
 *
 */
//1.0.0 components

var PreviewBody = function PreviewBody(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__bd': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = PreviewBody;
module.exports = exports['default'];

/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer of Preview, consists of actions
 *
 */
//1.0.0 components

var PreviewFooter = function PreviewFooter(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__ft': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = PreviewFooter;
module.exports = exports['default'];

/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Preview Item for all purpose usage
 *
 */
var PreviewItem = function PreviewItem(props) {
    var className = props.className,
        label = props.label,
        value = props.value,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'label', 'value']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__item': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        _react2.default.createElement(
            'label',
            { className: 'weui-form-preview__label' },
            label
        ),
        _react2.default.createElement(
            'em',
            { className: 'weui-form-preview__value' },
            value
        )
    );
}; //1.0.0 components

PreviewItem.propTypes = {
    /**
     * The label of item
     *
     */
    label: _propTypes2.default.string,
    /**
     * Value of the label
     *
     */
    value: _propTypes2.default.string

};

PreviewItem.defaultProps = {
    label: false,
    value: false
};

exports.default = PreviewItem;
module.exports = exports['default'];

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  A Slider is an element used to set a value, good choice when users think it as relative quantity rather than value
 *
 */
var Slider = function (_Component) {
    (0, _inherits3.default)(Slider, _Component);

    function Slider(props) {
        (0, _classCallCheck3.default)(this, Slider);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

        _this.state = {
            value: _this.props.value ? _this.props.value : _this.props.defaultValue ? _this.props.defaultValue : 0,
            controlled: typeof _this.props.value !== 'undefined',
            totalWidth: 0,

            touching: false,
            ogX: 0,
            touchID: undefined,
            percent: _this.props.value ? parseInt(_this.props.value / (_this.props.max - _this.props.min) * 100) : _this.props.defaultValue ? parseInt(_this.props.defaultValue / (_this.props.max - _this.props.min) * 100) : 0,
            animating: false
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.updateValue = _this.updateValue.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Slider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.state.value === 0) this.updateValue();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.state.controlled) {
                if (nextProps.value <= this.props.max && nextProps.value >= this.props.min) {
                    var percent = parseInt(nextProps.value / (this.props.max - this.props.min) * 100);
                    this.setState({ value: nextProps.value, percent: percent });
                }
            }
        }
    }, {
        key: 'updateValue',
        value: function updateValue() {
            var _this2 = this;

            var snap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var value = 0;
            var percent = this.state.percent,
                _props = this.props,
                min = _props.min,
                max = _props.max,
                step = _props.step,
                onChange = _props.onChange,
                steps = parseInt((max - min) / step),
                perPercent = parseInt(100 / steps);


            if (percent === 100) {
                value = max;
            } else if (percent === 0) {
                value = min;
            } else {
                for (var i = 0; i < steps; i++) {
                    //over 50 margin than next
                    if (percent > i * perPercent && percent <= (i + 1) * perPercent) {
                        value = percent - i * perPercent > perPercent / 2 ? (i + 1) * step + min : i * step + min;
                    }
                }
            }

            if (value !== this.state.value) {
                this.setState({ value: value });
                if (onChange) onChange(value);
            }

            if (snap) {
                this.setState({
                    percent: value === min ? 0 : value === max ? 100 : (value - min) / step * perPercent,
                    animating: true
                }, function () {
                    return _this2.setState({ animating: false });
                });
            }
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.disabled) return;
            var barDOM = _reactDom2.default.findDOMNode(this.refs.bar);
            this.setState({
                touching: true,
                touchId: e.targetTouches[0].identifier,
                totalWidth: barDOM.clientWidth,
                ogX: e.targetTouches[0].pageX,
                ogPercent: this.state.percent
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            var _this3 = this;

            if (!this.state.touching || this.props.disabled) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var pageX = e.targetTouches[0].pageX;
            var diffX = pageX - this.state.ogX;

            var percent = parseInt(diffX / this.state.totalWidth * 100) + this.state.ogPercent;
            percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;

            this.setState({
                percent: percent
            }, function () {
                return _this3.updateValue();
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            if (!this.state.touching || this.props.disabled) return;

            if (this.props.snapToValue) {
                this.updateValue(true);
            }

            this.setState({
                touching: false,
                ogX: 0,
                touchId: undefined,
                ogPercent: 0
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                max = _props2.max,
                min = _props2.min,
                step = _props2.step,
                showValue = _props2.showValue,
                value = _props2.value,
                disabled = _props2.disabled,
                defaultValue = _props2.defaultValue,
                onChange = _props2.onChange,
                snapToValue = _props2.snapToValue,
                domProps = (0, _objectWithoutProperties3.default)(_props2, ['className', 'max', 'min', 'step', 'showValue', 'value', 'disabled', 'defaultValue', 'onChange', 'snapToValue']);


            var cls = (0, _classnames2.default)('weui-slider-box', className);

            var trackStyles = {
                width: this.state.percent + '%'
            };

            var handlerStyles = {
                left: this.state.percent + '%',
                transition: this.state.animating ? 'transform .3s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: 'weui-slider' }, domProps),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-slider__inner', ref: 'bar' },
                        _react2.default.createElement('div', {
                            style: trackStyles,
                            className: 'weui-slider__track' }),
                        _react2.default.createElement('div', {
                            style: handlerStyles,
                            onTouchStart: this.handleTouchStart,
                            onTouchMove: this.handleTouchMove,
                            onTouchEnd: this.handleTouchEnd,
                            className: 'weui-slider__handler' })
                    )
                ),
                showValue ? _react2.default.createElement(
                    'div',
                    { className: 'weui-slider-box__value' },
                    this.state.value
                ) : false
            );
        }
    }]);
    return Slider;
}(_react.Component);

Slider.propTypes = {
    /**
     * max value of the slider
     *
     */
    max: _propTypes2.default.number,
    /**
     * min value of the slider
     *
     */
    min: _propTypes2.default.number,
    /**
     * the offset between two number in the slider
     *
     */
    step: _propTypes2.default.number,
    /**
     * display the value indicator
     *
     */
    showValue: _propTypes2.default.bool,
    /**
     * whether input is disabled
     *
     */
    disabled: _propTypes2.default.bool,
    /**
     * slider value when use as controll element
     *
     */
    value: _propTypes2.default.number,
    /**
     * slider value when use as non-controll element, use with onChange
     *
     */
    defaultValue: _propTypes2.default.number,
    /**
     * callback when slider value change, pass value and event instance
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * callback when slider value change, pass value and event instance
     *
     */
    snapToValue: _propTypes2.default.bool
};
Slider.defaultProps = {
    max: 100,
    min: 0,
    step: 1,
    showValue: true,
    disabled: false,
    defaultValue: 0,
    snapToValue: true
};
exports.default = Slider;
module.exports = exports['default'];

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _label = __webpack_require__(1115);

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _label2.default; /**
                                    * Created by yjcxy12 on 16/1/22.
                                    */

module.exports = exports['default'];

/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Label Wrapper
 *
 */
var Label = function Label(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-label': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('label', (0, _extends3.default)({ className: cls }, others))
    );
};

exports.default = Label;
module.exports = exports['default'];

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toast = __webpack_require__(1117);

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _toast2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(898);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(881);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  pop out indicator to inform users
 *
 */
var Toast = function (_Component) {
    (0, _inherits3.default)(Toast, _Component);

    function Toast() {
        (0, _classCallCheck3.default)(this, Toast);
        return (0, _possibleConstructorReturn3.default)(this, (Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).apply(this, arguments));
    }

    (0, _createClass3.default)(Toast, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                icon = _props.icon,
                show = _props.show,
                children = _props.children,
                iconSize = _props.iconSize,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'icon', 'show', 'children', 'iconSize']);

            var cls = (0, _classnames2.default)('weui-toast', (0, _defineProperty3.default)({}, className, className));
            return _react2.default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement(_index2.default, { transparent: true }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    _react2.default.createElement(_index4.default, { value: icon, size: iconSize, className: 'weui-icon_toast' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-toast_content' },
                        children
                    )
                )
            );
        }
    }]);
    return Toast;
}(_react.Component);

Toast.propTypes = {
    /**
     * Icon Value
     *
     */
    icon: _propTypes2.default.string,
    /**
     * Icon Size
     *
     */
    iconSize: _propTypes2.default.string,
    /**
     * display toast
     *
     */
    show: _propTypes2.default.bool
};
Toast.defaultProps = {
    icon: 'toast',
    show: false
};
exports.default = Toast;
module.exports = exports['default'];

/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__(1119);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _progress2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(881);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  progress bar
 *
 */
var Progress = function Progress(props) {
    var className = props.className,
        showCancel = props.showCancel,
        value = props.value,
        _onClick = props.onClick,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'showCancel', 'value', 'onClick']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-progress': true
    }, className, className));

    var pgWdith = value > 100 ? 100 : value < 0 ? 0 : value;

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        _react2.default.createElement(
            'div',
            { className: 'weui-progress__bar' },
            _react2.default.createElement('div', { className: 'weui-progress__inner-bar', style: { width: pgWdith + '%' } })
        ),
        showCancel ? _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: 'weui-progress__opr', onClick: function onClick(e) {
                    if (_onClick) _onClick(e);
                } },
            _react2.default.createElement(_icon2.default, { value: 'cancel' })
        ) : false
    );
};

Progress.propTypes = {
    /**
     * value of the bar
     *
     */
    value: _propTypes2.default.number,
    /**
     * enable cancel button
     *
     */
    showCancel: _propTypes2.default.bool
};

Progress.defaultProps = {
    value: 0,
    showCancel: true
};

exports.default = Progress;
module.exports = exports['default'];

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionsheet = __webpack_require__(1121);

var _actionsheet2 = _interopRequireDefault(_actionsheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _actionsheet2.default; /**
                                          * Created by jf on 15/11/26.
                                          */

module.exports = exports['default'];

/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(898);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
 */
var ActionSheet = function (_Component) {
    (0, _inherits3.default)(ActionSheet, _Component);

    function ActionSheet(props) {
        (0, _classCallCheck3.default)(this, ActionSheet);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ActionSheet.__proto__ || (0, _getPrototypeOf2.default)(ActionSheet)).call(this, props));

        _this.handleMaskClick = _this.handleMaskClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ActionSheet, [{
        key: 'renderMenuItem',
        value: function renderMenuItem() {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label,
                    className = menu.className,
                    others = (0, _objectWithoutProperties3.default)(menu, ['label', 'className']);

                var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                    'weui-actionsheet__cell': true
                }, className, className));

                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            return this.props.actions.map(function (action, idx) {
                var label = action.label,
                    className = action.className,
                    others = (0, _objectWithoutProperties3.default)(action, ['label', 'className']);

                var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                    'weui-actionsheet__cell': true
                }, className, className));

                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'handleMaskClick',
        value: function handleMaskClick(e) {
            if (this.props.onRequestClose) this.props.onRequestClose(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                type = _props.type,
                onRequestClose = _props.onRequestClose,
                menus = _props.menus,
                actions = _props.actions,
                others = (0, _objectWithoutProperties3.default)(_props, ['show', 'type', 'onRequestClose', 'menus', 'actions']);

            var cls = (0, _classnames2.default)({
                'weui-actionsheet': true,
                'weui-actionsheet_toggle': show
            });

            var styleType = type ? type : 'ios';

            return _react2.default.createElement(
                'div',
                {
                    className: styleType === 'android' ? 'weui-skin_android' : ''
                },
                _react2.default.createElement(_index2.default, { style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-actionsheet__menu' },
                        this.renderMenuItem()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-actionsheet__action' },
                        this.renderActions()
                    )
                )
            );
        }
    }]);
    return ActionSheet;
}(_react.Component);

ActionSheet.propTypes = {
    /**
     * Array of Objects for menus, `label` property is Required
     *
     */
    menus: _propTypes2.default.array,
    /**
     * Array of Objects for actions, `label` property is Required
     *
     */
    actions: _propTypes2.default.array,
    /**
     * To display ActionSheet
     *
     */
    show: _propTypes2.default.bool,
    /**
     * Function triggers when user click on the mask
     *
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * style: ios/android
     */
    type: _propTypes2.default.string
};
ActionSheet.defaultProps = {
    type: '',
    menus: [],
    actions: [],
    show: false
};
;

exports.default = ActionSheet;
module.exports = exports['default'];

/***/ }),

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog = __webpack_require__(1123);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dialog2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(898);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modals provide feedback to user
 *
 */
var Dialog = function (_Component) {
    (0, _inherits3.default)(Dialog, _Component);

    function Dialog(props) {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this, props));

        _this.state = {
            isAndroid: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Dialog, [{
        key: 'renderButtons',
        value: function renderButtons() {
            return this.props.buttons.map(function (action, idx) {
                var type = action.type,
                    label = action.label,
                    _onClick = action.onClick,
                    others = (0, _objectWithoutProperties3.default)(action, ['type', 'label', 'onClick']);

                var className = (0, _classnames2.default)({
                    'weui-dialog__btn': true,
                    'weui-dialog__btn_default': type === 'default',
                    'weui-dialog__btn_primary': type === 'primary'
                });

                return _react2.default.createElement(
                    'a',
                    (0, _extends3.default)({
                        key: idx,
                        href: '#',
                        onClick: function onClick(e) {
                            if (e) {
                                e.preventDefault();
                            }
                            if (_onClick && typeof _onClick === 'function') {
                                _onClick(e);
                            }
                            return false;
                        }
                    }, others, {
                        className: className
                    }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                show = _props.show,
                className = _props.className,
                children = _props.children,
                buttons = _props.buttons,
                type = _props.type,
                autoDectect = _props.autoDectect,
                others = (0, _objectWithoutProperties3.default)(_props, ['title', 'show', 'className', 'children', 'buttons', 'type', 'autoDectect']);

            var styleType = type ? type : 'ios';
            var cls = (0, _classnames2.default)('weui-dialog', (0, _defineProperty3.default)({
                'weui-skin_android': styleType === 'android'
            }, className, className));

            return _react2.default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement(_index2.default, null),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    title ? _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__hd' },
                        _react2.default.createElement(
                            'strong',
                            { className: 'weui-dialog__title' },
                            title
                        )
                    ) : false,
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__bd' },
                        children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__ft' },
                        this.renderButtons()
                    )
                )
            );
        }
    }]);
    return Dialog;
}(_react.Component);

Dialog.propTypes = {
    /**
     * Object Arrays of buttons, `label` property is require
     *
     */
    buttons: _propTypes2.default.array,
    /**
     * to display the dialog
     *
     */
    show: _propTypes2.default.bool,
    /**
     * Title of dialog
     *
     */
    title: _propTypes2.default.string,
    /**
     * Specify display style: ios/android, default is ios when autoDetect not on
     *
     */
    type: _propTypes2.default.string
};
Dialog.defaultProps = {
    buttons: [],
    show: false,
    title: '',
    type: ''
};
exports.default = Dialog;
module.exports = exports['default'];

/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _msg = __webpack_require__(1125);

var _msg2 = _interopRequireDefault(_msg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _msg2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(978);

var _footer = __webpack_require__(979);

var _index2 = __webpack_require__(881);

var _index3 = _interopRequireDefault(_index2);

var _deprecationWarning = __webpack_require__(910);

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A full notification page to indicate results
 *
 */
var Msg = function (_Component) {
    (0, _inherits3.default)(Msg, _Component);

    function Msg() {
        (0, _classCallCheck3.default)(this, Msg);
        return (0, _possibleConstructorReturn3.default)(this, (Msg.__proto__ || (0, _getPrototypeOf2.default)(Msg)).apply(this, arguments));
    }

    (0, _createClass3.default)(Msg, [{
        key: '_renderButtons',
        value: function _renderButtons() {

            return this.props.buttons.map(function (button, idx) {
                var type = button.type,
                    label = button.label,
                    others = (0, _objectWithoutProperties3.default)(button, ['type', 'label']);

                return _react2.default.createElement(
                    _index.Button,
                    (0, _extends3.default)({ key: idx }, others, { type: type }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                title = _props.title,
                description = _props.description,
                extraHref = _props.extraHref,
                extraText = _props.extraText,
                footer = _props.footer,
                buttons = _props.buttons,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'type', 'title', 'description', 'extraHref', 'extraText', 'footer', 'buttons']);

            var cls = (0, _classnames2.default)('weui-msg', (0, _defineProperty3.default)({}, className, className));

            var elFooter = footer ? footer : function () {
                return false;
            };

            if (!elFooter() && (extraHref || extraText)) {
                (0, _deprecationWarning2.default)('Msg extraHref/extraText', 'Msg footer');

                elFooter = function elFooter() {
                    return _react2.default.createElement(
                        _footer.Footer,
                        null,
                        _react2.default.createElement(
                            _footer.FooterLinks,
                            null,
                            _react2.default.createElement(
                                _footer.FooterLink,
                                { href: extraHref },
                                extraText
                            )
                        )
                    );
                };
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__icon-area' },
                    _react2.default.createElement(_index3.default, { value: type, size: 'large' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__text-area' },
                    title ? _react2.default.createElement(
                        'h2',
                        { className: 'weui-msg__title' },
                        title
                    ) : false,
                    description ? _react2.default.createElement(
                        'p',
                        { className: 'weui-msg__desc' },
                        description
                    ) : false,
                    children
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__opr-area' },
                    _react2.default.createElement(
                        _index.ButtonArea,
                        null,
                        this._renderButtons()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__extra-area' },
                    elFooter()
                )
            );
        }
    }]);
    return Msg;
}(_react.Component);

Msg.propTypes = {
    /**
     * Icon type
     *
     */
    type: _propTypes2.default.string,
    /**
     * Object array of Buttons, require at least `label` property
     *
     */
    buttons: _propTypes2.default.array,
    /**
     * Page Title
     *
     */
    title: _propTypes2.default.string,
    /**
     * Page Description
     *
     */
    description: _propTypes2.default.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraHref: _propTypes2.default.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraText: _propTypes2.default.string,
    /**
     * Footer Element of Page
     *
     */
    footer: _propTypes2.default.any
};
Msg.defaultProps = {
    type: 'success',
    buttons: []
};
exports.default = Msg;
module.exports = exports['default'];

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * consists of `footer_links`, `footer_link` and `footer_text`
 *
 */
var Footer = function Footer(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-footer': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = Footer;
module.exports = exports['default'];

/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * paragraph wrapper for footer
 *
 */
var FooterText = function FooterText(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-footer__text': true
    }, className, className));

    return _react2.default.createElement(
        'p',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = FooterText;
module.exports = exports['default'];

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * consists of `footer_link`
 *
 */
var FooterLinks = function FooterLinks(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-footer__links': true
    }, className, className));

    return _react2.default.createElement(
        'p',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = FooterLinks;
module.exports = exports['default'];

/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * foot link wrapper for link
 *
 */
var FooterLink = function FooterLink(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-footer__link': true
    }, className, className));

    return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = FooterLink;
module.exports = exports['default'];

/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = __webpack_require__(1131);

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _article2.default; /**
                                      * Created by jf on 15/12/11.
                                      */

module.exports = exports['default'];

/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Use to format WeUI style contents
 *
 */
var Article = function (_React$Component) {
    (0, _inherits3.default)(Article, _React$Component);

    function Article() {
        (0, _classCallCheck3.default)(this, Article);
        return (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).apply(this, arguments));
    }

    (0, _createClass3.default)(Article, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-article': true
            }, className, className));
            return _react2.default.createElement(
                'article',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return Article;
}(_react2.default.Component);

Article.propTypes = {};
Article.defaultProps = {};
exports.default = Article;
;
module.exports = exports['default'];

/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.GridLabel = exports.GridIcon = exports.Grid = exports.Grids = undefined;

var _grids = __webpack_require__(1133);

var _grids2 = _interopRequireDefault(_grids);

var _grid = __webpack_require__(980);

var _grid2 = _interopRequireDefault(_grid);

var _grid_icon = __webpack_require__(981);

var _grid_icon2 = _interopRequireDefault(_grid_icon);

var _grid_label = __webpack_require__(982);

var _grid_label2 = _interopRequireDefault(_grid_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Grids = _grids2.default;
exports.Grid = _grid2.default;
exports.GridIcon = _grid_icon2.default;
exports.GridLabel = _grid_label2.default;

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _grid = __webpack_require__(980);

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
 *
 */
var Grids = function (_Component) {
    (0, _inherits3.default)(Grids, _Component);

    function Grids() {
        (0, _classCallCheck3.default)(this, Grids);
        return (0, _possibleConstructorReturn3.default)(this, (Grids.__proto__ || (0, _getPrototypeOf2.default)(Grids)).apply(this, arguments));
    }

    (0, _createClass3.default)(Grids, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return _react2.default.createElement(_grid2.default, (0, _extends3.default)({
                    key: i,
                    icon: item.icon,
                    label: item.label
                }, item));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'data', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-grids': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return Grids;
}(_react.Component);

Grids.propTypes = {
    /**
     * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
     *
     */
    data: _propTypes2.default.array
};
Grids.defaultProps = {
    data: []
};
exports.default = Grids;
;
module.exports = exports['default'];

/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PanelFooter = exports.PanelBody = exports.PanelHeader = exports.Panel = undefined;

var _panel = __webpack_require__(1135);

var _panel2 = _interopRequireDefault(_panel);

var _panel_header = __webpack_require__(1136);

var _panel_header2 = _interopRequireDefault(_panel_header);

var _panel_body = __webpack_require__(1137);

var _panel_body2 = _interopRequireDefault(_panel_body);

var _panel_footer = __webpack_require__(1138);

var _panel_footer2 = _interopRequireDefault(_panel_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Panel = _panel2.default;
exports.PanelHeader = _panel_header2.default;
exports.PanelBody = _panel_body2.default;
exports.PanelFooter = _panel_footer2.default;

/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = __webpack_require__(910);

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel Object, consists of `PanelHeader`, `PanelBody` and `PanelFooter`
 *
 */
var Panel = function (_React$Component) {
    (0, _inherits3.default)(Panel, _React$Component);

    function Panel() {
        (0, _classCallCheck3.default)(this, Panel);
        return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).apply(this, arguments));
    }

    (0, _createClass3.default)(Panel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                access = _props.access,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'access']);


            if (access) {
                (0, _deprecationWarning2.default)('panel access', 'cell access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#panel');
            }

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return Panel;
}(_react2.default.Component);

Panel.propTypes = {
    /**
     * deprecated property from 0.4.x
     *
     */
    access: _propTypes2.default.bool
};
Panel.defaultProps = {
    access: false
};
exports.default = Panel;
;
module.exports = exports['default'];

/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header of Panel
 *
 */
var PanelHeader = function (_React$Component) {
    (0, _inherits3.default)(PanelHeader, _React$Component);

    function PanelHeader() {
        (0, _classCallCheck3.default)(this, PanelHeader);
        return (0, _possibleConstructorReturn3.default)(this, (PanelHeader.__proto__ || (0, _getPrototypeOf2.default)(PanelHeader)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel__hd': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelHeader;
}(_react2.default.Component);

exports.default = PanelHeader;
;
module.exports = exports['default'];

/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of Panel
 *
 */
var PanelBody = function (_React$Component) {
    (0, _inherits3.default)(PanelBody, _React$Component);

    function PanelBody() {
        (0, _classCallCheck3.default)(this, PanelBody);
        return (0, _possibleConstructorReturn3.default)(this, (PanelBody.__proto__ || (0, _getPrototypeOf2.default)(PanelBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel__bd': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelBody;
}(_react2.default.Component);

exports.default = PanelBody;
;
module.exports = exports['default'];

/***/ }),

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer of Panel
 *
 */
var PanelFooter = function (_React$Component) {
    (0, _inherits3.default)(PanelFooter, _React$Component);

    function PanelFooter() {
        (0, _classCallCheck3.default)(this, PanelFooter);
        return (0, _possibleConstructorReturn3.default)(this, (PanelFooter.__proto__ || (0, _getPrototypeOf2.default)(PanelFooter)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelFooter, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var Component = this.props.href ? 'a' : 'div';
            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel__ft': true
            }, className, className));

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelFooter;
}(_react2.default.Component);

exports.default = PanelFooter;
;
module.exports = exports['default'];

/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MediaBoxInfoMeta = exports.MediaBoxInfo = exports.MediaBoxDescription = exports.MediaBoxTitle = exports.MediaBoxBody = exports.MediaBoxHeader = exports.MediaBox = undefined;

var _mediabox = __webpack_require__(1140);

var _mediabox2 = _interopRequireDefault(_mediabox);

var _mediabox_header = __webpack_require__(1141);

var _mediabox_header2 = _interopRequireDefault(_mediabox_header);

var _mediabox_body = __webpack_require__(1142);

var _mediabox_body2 = _interopRequireDefault(_mediabox_body);

var _mediabox_title = __webpack_require__(1143);

var _mediabox_title2 = _interopRequireDefault(_mediabox_title);

var _mediabox_desc = __webpack_require__(1144);

var _mediabox_desc2 = _interopRequireDefault(_mediabox_desc);

var _mediabox_info = __webpack_require__(1145);

var _mediabox_info2 = _interopRequireDefault(_mediabox_info);

var _mediabox_info_meta = __webpack_require__(983);

var _mediabox_info_meta2 = _interopRequireDefault(_mediabox_info_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MediaBox = _mediabox2.default;
exports.MediaBoxHeader = _mediabox_header2.default;
exports.MediaBoxBody = _mediabox_body2.default;
exports.MediaBoxTitle = _mediabox_title2.default;
exports.MediaBoxDescription = _mediabox_desc2.default;
exports.MediaBoxInfo = _mediabox_info2.default;
exports.MediaBoxInfoMeta = _mediabox_info_meta2.default;

/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
 *
 */
var MediaBox = function (_React$Component) {
    (0, _inherits3.default)(MediaBox, _React$Component);

    function MediaBox() {
        (0, _classCallCheck3.default)(this, MediaBox);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBox.__proto__ || (0, _getPrototypeOf2.default)(MediaBox)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                type = _props.type,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'type', 'className']);

            var Component = this.props.href ? 'a' : 'div';
            var cls = (0, _classnames2.default)({
                'weui-media-box': true,
                'weui-media-box_appmsg': type === 'appmsg',
                'weui-media-box_text': type === 'text',
                'weui-media-box_small-appmsg': type === 'small_appmsg'
            }, className);

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBox;
}(_react2.default.Component);

MediaBox.propTypes = {
    /**
     * The layout of media box, Options: appmsg/text/small_appmsg
     *
     */
    type: _propTypes2.default.string
};
MediaBox.defaultProps = {
    type: 'text'
};
exports.default = MediaBox;
;
module.exports = exports['default'];

/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header of MediaBox, if detects Img tag inside content will automatically adds corresponding class
 *
 */
var MediaBoxHeader = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxHeader, _React$Component);

    function MediaBoxHeader() {
        (0, _classCallCheck3.default)(this, MediaBoxHeader);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxHeader.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxHeader)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var clz = (0, _classnames2.default)({
                'weui-media-box__hd': true
            }, className);

            var childrenWithProps = _react2.default.Children.map(children, function (child) {
                if (child.type === 'img' && !child.props.className) {
                    return _react2.default.cloneElement(child, { className: 'weui-media-box__thumb' });
                } else {
                    return child;
                }
            });

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: clz }, others),
                childrenWithProps
            );
        }
    }]);
    return MediaBoxHeader;
}(_react2.default.Component);

exports.default = MediaBoxHeader;
;
module.exports = exports['default'];

/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of Mediabox
 *
 */
var PanelBody = function (_React$Component) {
    (0, _inherits3.default)(PanelBody, _React$Component);

    function PanelBody() {
        (0, _classCallCheck3.default)(this, PanelBody);
        return (0, _possibleConstructorReturn3.default)(this, (PanelBody.__proto__ || (0, _getPrototypeOf2.default)(PanelBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__bd': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelBody;
}(_react2.default.Component);

exports.default = PanelBody;
;
module.exports = exports['default'];

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Title for MediaBox
 *
 */
var MediaBoxTitle = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxTitle, _React$Component);

    function MediaBoxTitle() {
        (0, _classCallCheck3.default)(this, MediaBoxTitle);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxTitle.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxTitle)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxTitle, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__title': true
            }, className);

            return _react2.default.createElement(
                'h4',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxTitle;
}(_react2.default.Component);

exports.default = MediaBoxTitle;
;
module.exports = exports['default'];

/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Description of MediaBox
 *
 */
var MediaBoxDescription = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxDescription, _React$Component);

    function MediaBoxDescription() {
        (0, _classCallCheck3.default)(this, MediaBoxDescription);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxDescription.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxDescription)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxDescription, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__desc': true
            }, className);

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxDescription;
}(_react2.default.Component);

exports.default = MediaBoxDescription;
;
module.exports = exports['default'];

/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _mediabox_info_meta = __webpack_require__(983);

var _mediabox_info_meta2 = _interopRequireDefault(_mediabox_info_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Info Items for MediaBox
 *
 */
var MediaBoxInfo = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxInfo, _React$Component);

    function MediaBoxInfo() {
        (0, _classCallCheck3.default)(this, MediaBoxInfo);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxInfo.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxInfo)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxInfo, [{
        key: 'renderData',
        value: function renderData(metas) {
            return metas.map(function (meta, i) {
                return _react2.default.createElement(
                    _mediabox_info_meta2.default,
                    { key: i, extra: meta.extra },
                    meta.label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'data', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__info': true
            }, className);

            return _react2.default.createElement(
                'ul',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return MediaBoxInfo;
}(_react2.default.Component);

MediaBoxInfo.propTypes = {
    /**
     * automatically include Metas, object array of metas, property required: `extra`, `label`
     *
     */
    data: _propTypes2.default.array
};
MediaBoxInfo.defaultProps = {
    data: []
};
exports.default = MediaBoxInfo;
;
module.exports = exports['default'];

/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.TabBarLabel = exports.TabBarIcon = exports.TabBarItem = exports.TabBar = exports.TabBodyItem = exports.TabBody = exports.Tab = exports.NavBarItem = exports.NavBar = undefined;

var _tab = __webpack_require__(1147);

var _tab2 = _interopRequireDefault(_tab);

var _tab_body = __webpack_require__(984);

var _tab_body2 = _interopRequireDefault(_tab_body);

var _navbar = __webpack_require__(986);

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar_item = __webpack_require__(987);

var _navbar_item2 = _interopRequireDefault(_navbar_item);

var _tabbar = __webpack_require__(988);

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbar_item = __webpack_require__(989);

var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

var _tabbar_icon = __webpack_require__(942);

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = __webpack_require__(943);

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

var _tab_body_item = __webpack_require__(985);

var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NavBar = _navbar2.default;
exports.NavBarItem = _navbar_item2.default;
exports.Tab = _tab2.default;
exports.TabBody = _tab_body2.default;
exports.TabBodyItem = _tab_body_item2.default;
exports.TabBar = _tabbar2.default;
exports.TabBarItem = _tabbar_item2.default;
exports.TabBarIcon = _tabbar_icon2.default;
exports.TabBarLabel = _tabbar_label2.default;

/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(404);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _tab_body = __webpack_require__(984);

var _tab_body2 = _interopRequireDefault(_tab_body);

var _tab_body_item = __webpack_require__(985);

var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

var _navbar = __webpack_require__(986);

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar_item = __webpack_require__(987);

var _navbar_item2 = _interopRequireDefault(_navbar_item);

var _tabbar = __webpack_require__(988);

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbar_item = __webpack_require__(989);

var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

var _tabbar_icon = __webpack_require__(942);

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = __webpack_require__(943);

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */
var Tab = function (_React$Component) {
    (0, _inherits3.default)(Tab, _React$Component);

    function Tab() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            index: _this.props.defaultIndex
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Tab, [{
        key: 'handleHeaderClick',
        value: function handleHeaderClick(idx) {
            this.setState({ index: idx });
            if (this.props.onChange) this.props.onChange(idx);
        }
    }, {
        key: 'parseChild',
        value: function parseChild(childrenInput) {
            var ChildHeaders = [];
            var ChildContents = [];

            _react2.default.Children.map(childrenInput, function (child) {
                if (!child) return;
                var _child$props = child.props,
                    children = _child$props.children,
                    type = _child$props.type,
                    others = (0, _objectWithoutProperties3.default)(_child$props, ['children', 'type']);

                if (child.type === _tabbar_item2.default || child.type === _navbar_item2.default) {
                    ChildHeaders.push(child);
                    if (children) ChildContents.push(_react2.default.createElement(_tab_body_item2.default, { children: children }));
                } else if (child.type === _tab_body_item2.default) {
                    ChildContents.push(child);
                }
            });

            return { ChildHeaders: ChildHeaders, ChildContents: ChildContents };
        }
    }, {
        key: 'renderBar',
        value: function renderBar(type, children, cls) {
            var _this2 = this;

            var _parseChild = this.parseChild(children),
                ChildHeaders = _parseChild.ChildHeaders,
                ChildContents = _parseChild.ChildContents;

            var _headers = ChildHeaders.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    onClick: _this2.handleHeaderClick.bind(_this2, idx, item)
                });
            });

            var _contents = ChildContents.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    tabIndex: idx
                });
            });

            if (type === 'tabbar') {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    _react2.default.createElement(
                        _tab_body2.default,
                        null,
                        _contents
                    ),
                    _react2.default.createElement(
                        _tabbar2.default,
                        null,
                        _headers
                    )
                );
            } else if (type === 'navbar') {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    _react2.default.createElement(
                        _navbar2.default,
                        null,
                        _headers
                    ),
                    _react2.default.createElement(
                        _tab_body2.default,
                        null,
                        _contents
                    )
                );
            } else {
                return false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'type']);

            var divProps = (0, _assign2.default)({}, others);
            delete divProps.defaultIndex;

            var cls = (0, _classnames2.default)({
                'weui-tab': true
            }, className);

            if (type === 'normal') {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, divProps),
                    children
                );
            } else {
                return this.renderBar(type, children, cls);
            }
        }
    }]);
    return Tab;
}(_react2.default.Component);

Tab.propTypes = {
    /**
     * layout of the tab, auto mount components when set to `navbar` or `tabbar`
     *
     */
    type: _propTypes2.default.string,
    /**
     * default select index
     *
     */
    defaultIndex: _propTypes2.default.number,
    onChange: _propTypes2.default.func
};
Tab.defaultProps = {
    type: 'normal',
    defaultIndex: 0
};
exports.default = Tab;
module.exports = exports['default'];

/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchbar = __webpack_require__(1149);

var _searchbar2 = _interopRequireDefault(_searchbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _searchbar2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(881);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  weui search component
 *
 */
var SearchBar = function (_React$Component) {
    (0, _inherits3.default)(SearchBar, _React$Component);

    function SearchBar(props) {
        (0, _classCallCheck3.default)(this, SearchBar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBar.__proto__ || (0, _getPrototypeOf2.default)(SearchBar)).call(this, props));

        _this.state = {
            focus: _this.props.defaultValue ? true : false,
            clearing: false,
            text: _this.props.defaultValue ? _this.props.defaultValue : ''
        };

        if (_this.props.defaultValue !== '') {
            if (_this.props.onChange) _this.props.onChange(_this.state.text);
        }
        return _this;
    }

    (0, _createClass3.default)(SearchBar, [{
        key: 'changeHandle',
        value: function changeHandle(e) {
            var text = e.target.value;
            if (this.props.onChange) this.props.onChange(text, e);
            this.setState({ text: text });
        }
    }, {
        key: 'cancelHandle',
        value: function cancelHandle(e) {
            this.setState({
                focus: false,
                text: ''
            });
            if (this.props.onCancel) this.props.onCancel(e);
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'clearHandle',
        value: function clearHandle(e) {
            e.preventDefault();
            e.stopPropagation();

            this.setState({ text: '', clearing: true });
            if (this.props.onClear) this.props.onClear(e);
            // In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.
            // When render returns null or false, findDOMNode returns null.
            // 这里是截取官网的说明，在ref回调函数内确实会返回null，尤其是配合redux使用的时候，这个时候需要对其进行null判断
            this.refs.searchInput.focus();
            // ReactDOM.findDOMNode(this.refs.searchInput).focus()
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'blurHandle',
        value: function blurHandle(e) {
            if (this.state.text === '') {
                this.setState({ focus: false });
            }
        }
    }, {
        key: 'submitHandle',
        value: function submitHandle(e) {
            if (this.props.onSubmit) {
                e.preventDefault();
                e.stopPropagation();
                this.props.onSubmit(this.state.text, e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                defaultValue = _props.defaultValue,
                autocomplete = _props.autocomplete,
                placeholder = _props.placeholder,
                className = _props.className,
                searchName = _props.searchName;

            var clz = (0, _classnames2.default)({
                'weui-search-bar': true,
                'weui-search-bar_focusing': this.state.focus
            }, className);

            return _react2.default.createElement(
                'div',
                { className: clz },
                _react2.default.createElement(
                    'form',
                    { className: 'weui-search-bar__form', onSubmit: this.submitHandle.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-search-bar__box' },
                        _react2.default.createElement(_icon2.default, { value: 'search' }),
                        _react2.default.createElement('input', {
                            ref: 'searchInput',
                            type: 'search',
                            name: searchName,
                            className: 'weui-search-bar__input',
                            placeholder: placeholder,
                            onFocus: function onFocus(e) {
                                return _this2.setState({ focus: true });
                            },
                            onBlur: this.blurHandle.bind(this),
                            onChange: this.changeHandle.bind(this),
                            value: this.state.text,
                            autoComplete: autocomplete
                        }),
                        _react2.default.createElement('a', {
                            className: 'weui-icon-clear',
                            onClick: this.clearHandle.bind(this)
                        })
                    ),
                    _react2.default.createElement(
                        'label',
                        {
                            className: 'weui-search-bar__label',
                            onClick: function onClick() {
                                var searchInput = _this2.refs.searchInput;
                                if (searchInput) {
                                    searchInput.focus();
                                }
                            },
                            style: { display: this.state.text ? 'none' : null }
                        },
                        _react2.default.createElement(_icon2.default, { value: 'search' }),
                        _react2.default.createElement(
                            'span',
                            null,
                            placeholder
                        )
                    )
                ),
                _react2.default.createElement(
                    'a',
                    { className: 'weui-search-bar__cancel-btn', onClick: this.cancelHandle.bind(this) },
                    this.props.lang.cancel
                )
            );
        }
    }]);
    return SearchBar;
}(_react2.default.Component);

SearchBar.propTypes = {
    /**
     * default value for the searchbar if any
     *
     */
    defaultValue: _propTypes2.default.string,
    /**
     * default place holder text
     *
     */
    placeholder: _propTypes2.default.string,
    /**
     * name of the input component
     *
     */
    searchName: _propTypes2.default.string,
    /**
     * trigger when text change on input pass `text` property
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * trigger when user click clear icon
     *
     */
    onClear: _propTypes2.default.func,
    /**
     * trigger when user click cancel button
     *
     */
    onCancel: _propTypes2.default.func,
    /**
     * trigger when user submit (enter action)
     *
     */
    onSubmit: _propTypes2.default.func,
    /**
     * language object consists of `cancel` property
     *
     */
    lang: _propTypes2.default.object
};
SearchBar.defaultProps = {
    placeholder: '搜索',
    searchName: 'q',
    onChange: undefined,
    onClear: undefined,
    onCancel: undefined,
    onSubmit: undefined,
    lang: { cancel: '取消' },
    autocomplete: 'off'
};
exports.default = SearchBar;
module.exports = exports['default'];

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlexItem = exports.Flex = undefined;

var _flex = __webpack_require__(1151);

var _flex2 = _interopRequireDefault(_flex);

var _flex_item = __webpack_require__(1152);

var _flex_item2 = _interopRequireDefault(_flex_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.0.0 components

exports.Flex = _flex2.default;
exports.FlexItem = _flex_item2.default;

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FlexItem Container
 *
 */
var Flex = function Flex(props) {
    return _react2.default.createElement(
        "div",
        (0, _extends3.default)({ className: "weui-flex" }, props),
        props.children
    );
}; //1.0.0 components

exports.default = Flex;
module.exports = exports["default"];

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Evenly distribute flex items
 *
 */
//1.0.0 components

var FlexItem = function FlexItem(props) {
    var Component = props.Component,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['Component', 'children']);

    return _react2.default.createElement(
        Component,
        (0, _extends3.default)({ className: 'weui-flex__item' }, others),
        children
    );
};

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    Component: _propTypes2.default.node
};

FlexItem.defaultProps = {
    Component: 'div'
};

exports.default = FlexItem;
module.exports = exports['default'];

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toptips = __webpack_require__(1154);

var _toptips2 = _interopRequireDefault(_toptips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _toptips2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Drop down message from top
 *
 */
var Toptips = function Toptips(props) {
    var _classNames;

    var className = props.className,
        type = props.type,
        children = props.children,
        show = props.show,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'type', 'children', 'show']);

    var cls = (0, _classnames2.default)((_classNames = {
        'weui-toptips': true
    }, (0, _defineProperty3.default)(_classNames, 'weui-toptips_' + type, true), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others, { style: { display: show ? 'block' : 'none' } }),
        children
    );
};

Toptips.propTypes = {
    /**
     * display tips
     *
     */
    show: _propTypes2.default.bool,
    /**
     * type: `default`, `warn`, `info`, `primary`
     */
    type: _propTypes2.default.string
};

Toptips.defaultProps = {
    show: false,
    type: 'default'
};

exports.default = Toptips;
module.exports = exports['default'];

/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Gallery = exports.GalleryDelete = undefined;

var _gallery = __webpack_require__(1156);

var _gallery2 = _interopRequireDefault(_gallery);

var _gallery_delete = __webpack_require__(1158);

var _gallery_delete2 = _interopRequireDefault(_gallery_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GalleryDelete = _gallery_delete2.default;
exports.Gallery = _gallery2.default;

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _swiper = __webpack_require__(990);

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Full screen photo display
 *
 */
var Gallery = function (_Component) {
    (0, _inherits3.default)(Gallery, _Component);

    function Gallery(props) {
        (0, _classCallCheck3.default)(this, Gallery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Gallery.__proto__ || (0, _getPrototypeOf2.default)(Gallery)).call(this, props));

        _this.state = {
            currentIndex: _this.props.defaultIndex
        };
        return _this;
    }

    (0, _createClass3.default)(Gallery, [{
        key: 'handleClick',
        value: function handleClick(func) {
            var _this2 = this;

            return function (e) {
                if (func) func(e, _this2.state.currentIndex);
            };
        }
    }, {
        key: 'renderImages',
        value: function renderImages(imgs) {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'weui-gallery__img' },
                _react2.default.createElement(
                    _swiper2.default,
                    {
                        indicators: false,
                        defaultIndex: this.props.defaultIndex,
                        onChange: function onChange(prev, next) {
                            return _this3.setState({ currentIndex: next });
                        }
                    },
                    imgs.map(function (img, i) {
                        var imgStyle = {
                            backgroundImage: 'url(' + img + ')',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center'
                        };
                        return _react2.default.createElement('span', { key: i, style: imgStyle });
                    })
                )
            );
        }
    }, {
        key: 'renderOprs',
        value: function renderOprs() {
            var _this4 = this;

            if (Array.isArray(this.props.children)) {
                return this.props.children.map(function (child, i) {
                    return _react2.default.cloneElement(child, {
                        key: i,
                        onClick: _this4.handleClick(child.props.onClick)
                    });
                });
            } else {
                if (this.props.children) {
                    return _react2.default.cloneElement(this.props.children, {
                        onClick: this.handleClick(this.props.children.props.onClick)
                    });
                } else {
                    return false;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                show = _props.show,
                src = _props.src,
                defaultIndex = _props.defaultIndex,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'show', 'src', 'defaultIndex']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-gallery': true
            }, className, className));

            if (!show) return false;

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: { display: show ? 'block' : 'none' } }, others),
                Array.isArray(src) ? this.renderImages(src) : _react2.default.createElement('span', { className: 'weui-gallery__img', style: { backgroundImage: 'url(' + src + ')' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-gallery__opr' },
                    this.renderOprs()
                )
            );
        }
    }]);
    return Gallery;
}(_react.Component);

Gallery.propTypes = {
    /**
     * indicate whather the component is display
     *
     */
    show: _propTypes2.default.bool,
    /**
     * image source, string for single element, array for multiple element
     *
     */
    src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * indicate whather the component is display
     *
     */
    defaultIndex: _propTypes2.default.number
};
Gallery.defaultProps = {
    show: undefined,
    src: '',
    defaultIndex: 0
};
exports.default = Gallery;
module.exports = exports['default'];

/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(404);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *   The ultimate mobile swipe component
 *
 */
var Swiper = function (_Component) {
    (0, _inherits3.default)(Swiper, _Component);

    function Swiper(props) {
        (0, _classCallCheck3.default)(this, Swiper);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Swiper.__proto__ || (0, _getPrototypeOf2.default)(Swiper)).call(this, props));

        _this.state = {
            containerWidth: 0,
            containerHeight: 0,
            currentIndex: _this.props.defaultIndex,

            //touch
            touching: false,
            og: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            animating: false
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Swiper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var $container = _reactDom2.default.findDOMNode(this.refs.container);

            this.setState({
                wrapperWidth: this.props.direction === 'horizontal' ? $container.offsetWidth * this.props.children.length : $container.offsetWidth,
                wrapperHeight: this.props.direction === 'vertical' ? $container.offsetHeight * this.props.children.length : $container.offsetHeight,
                containerWidth: $container.offsetWidth,
                containerHeight: $container.offsetHeight,
                translate: this.props.defaultIndex <= this.props.children.length ? this.props.direction === 'horizontal' ? $container.offsetWidth * -this.props.defaultIndex : $container.offsetHeight * -this.props.defaultIndex : 0
            });
            //console.log($container.offsetWidth, $container.offsetHeight)
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.children.length <= 1) return;

            var og = 0;

            if (this.props.direction === 'horizontal') {
                og = e.targetTouches[0].pageX - this.state.translate;
            } else {
                og = e.targetTouches[0].pageY - this.state.translate;
            }

            this.setState({
                touching: true,
                ogTranslate: this.state.translate,
                touchId: e.targetTouches[0].identifier,
                og: og,
                animating: false
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.props.children.length <= 1) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var diff = this.state.translate;

            if (this.props.direction === 'horizontal') {
                var pageX = e.targetTouches[0].pageX;
                diff = pageX - this.state.og;
            } else {
                //vertical
                var pageY = e.targetTouches[0].pageY;
                diff = pageY - this.state.og;
            }

            this.setState({
                translate: diff
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this2 = this;

            if (!this.state.touching || this.props.children.length <= 1) return;

            var translate = this.state.translate;
            var max = this.props.direction === 'horizontal' ? this.state.wrapperWidth - this.state.containerWidth : this.state.wrapperHeight - this.state.containerHeight;
            var currentIndex = this.state.currentIndex;
            var ogIndex = currentIndex;

            if (translate > 0) {
                //start
                translate = 0;
            } else if (translate < -max) {
                //end
                translate = -max;
            } else {
                //default case
                var diff = Math.abs(translate - this.state.ogTranslate);
                var isNext = translate - this.state.ogTranslate < 0 ? true : false;
                //console.log(translate - this.state.ogTranslate, diff, isNext)

                if (diff >= this.props.threshold) {

                    if (isNext) {
                        //next slide
                        translate = this.state.ogTranslate - (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
                        currentIndex += 1;
                    } else {
                        //prev slide
                        translate = this.state.ogTranslate + (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
                        currentIndex -= 1;
                    }
                } else {
                    //revert back
                    translate = this.state.ogTranslate;
                }
            }

            this.setState({
                touching: false,
                og: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate: translate,
                currentIndex: currentIndex
            }, function () {
                return setTimeout(function () {
                    return _this2.setState({ animating: false });
                }, _this2.props.speed);
            });

            if (this.props.onChange) this.props.onChange(ogIndex, currentIndex);
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var _this3 = this;

            return this.props.children.map(function (child, i) {
                var clx = (0, _classnames2.default)('react-weui-swiper__pagination-bullet', {
                    active: i === _this3.state.currentIndex
                });
                return _react2.default.createElement('span', { className: clx, key: i });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                className = _props.className,
                children = _props.children,
                height = _props.height,
                width = _props.width,
                defaultIndex = _props.defaultIndex,
                direction = _props.direction,
                speed = _props.speed,
                indicators = _props.indicators,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'height', 'width', 'defaultIndex', 'direction', 'speed', 'indicators']);

            var clx = (0, _classnames2.default)('react-weui-swiper__container', className, {
                'react-weui-swiper__container-horizontal': direction === 'horizontal',
                'react-weui-swiper__container-vertical': direction === 'vertical'
            });

            var containerStyle = {
                height: height ? height + 'px' : '100%',
                width: width ? width + 'px' : '100%'
            };

            var wrapperStyle = {
                width: this.state.wrapperWidth,
                height: this.state.wrapperHeight,
                transition: this.state.animating ? 'transform .' + speed / 100 + 's' : 'none',
                transform: 'translate(' + (direction === 'horizontal' ? this.state.translate : 0) + 'px, ' + (direction === 'vertical' ? this.state.translate : 0) + 'px)'
            };

            return _react2.default.createElement(
                'div',
                {
                    className: clx,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd,
                    style: containerStyle,
                    ref: 'container'
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-swiper__wrapper',
                        style: wrapperStyle
                    },
                    children.map(function (child, i) {
                        return _react2.default.cloneElement(child, {
                            className: (0, _classnames2.default)('react-weui-swiper__item', child.className),
                            key: i,
                            style: (0, _assign2.default)({}, child.props.style, {
                                display: direction === 'horizontal' ? 'inline-block' : 'block',
                                verticalAlign: direction === 'horizontal' ? 'top' : 'bottom',
                                width: _this4.state.containerWidth,
                                height: _this4.state.containerHeight
                            })
                        });
                    })
                ),
                indicators ? _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-swiper__pagination'
                    },
                    this.renderPagination()
                ) : false
            );
        }
    }]);
    return Swiper;
}(_react.Component);

Swiper.propTypes = {
    /**
     * height for the container, number in px
     *
     */
    height: _propTypes2.default.number,
    /**
     * width for the container, number in px
     *
     */
    width: _propTypes2.default.number,
    /**
     * threshold for the swiper, number in px
     *
     */
    threshold: _propTypes2.default.number,
    /**
     * speed for the slide transition, number in ms
     *
     */
    speed: _propTypes2.default.number,
    /**
     * default slider index
     *
     */
    defaultIndex: _propTypes2.default.number,
    /**
     * direction of swiper
     *
     */
    direction: _propTypes2.default.oneOf(['vertical', 'horizontal']),
    /**
     * show indicators
     *
     */
    indicators: _propTypes2.default.bool,
    /**
     * callback when slide change is trigger, pass indexs of (prev, next)
     *
     */
    onChange: _propTypes2.default.func
};
Swiper.defaultProps = {
    height: null,
    width: null,
    defaultIndex: 0,
    direction: 'horizontal',
    threshold: 50,
    speed: 300,
    indicators: true
};
exports.default = Swiper;
module.exports = exports['default'];

/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(881);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper for Gallery Delete Button
 *
 */
var GalleryDelete = function GalleryDelete(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-gallery__del': true
    }, className, className));

    return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ className: cls }, others),
        _react2.default.createElement(_icon2.default, { value: 'delete', className: 'weui-icon_gallery-delete' })
    );
};

exports.default = GalleryDelete;
module.exports = exports['default'];

/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(881);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loadmore Indicators.
 *
 */
var LoadMore = function LoadMore(props) {
    var className = props.className,
        children = props.children,
        loading = props.loading,
        showLine = props.showLine,
        showDot = props.showDot,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'loading', 'showLine', 'showDot']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        loading ? _react2.default.createElement(_icon2.default, { value: 'loading' }) : false,
        _react2.default.createElement(
            'span',
            { className: 'weui-loadmore__tips' },
            children
        )
    );
};

LoadMore.propTypes = {
    /**
     * display laoding spinner
     *
     */
    loading: _propTypes2.default.bool,
    /**
     * display side lines
     *
     */
    showLine: _propTypes2.default.bool,
    /**
     * display dot in the center
     *
     */
    showDot: _propTypes2.default.bool
};

LoadMore.defaultProps = {
    loading: false,
    showLine: false,
    showDot: false
};

exports.default = LoadMore;
module.exports = exports['default'];

/***/ }),

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CityPicker = exports.PickerGroup = exports.Picker = undefined;

var _picker = __webpack_require__(991);

var _picker2 = _interopRequireDefault(_picker);

var _picker_group = __webpack_require__(992);

var _picker_group2 = _interopRequireDefault(_picker_group);

var _city_picker = __webpack_require__(1161);

var _city_picker2 = _interopRequireDefault(_city_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Picker = _picker2.default;
exports.PickerGroup = _picker_group2.default;
exports.CityPicker = _city_picker2.default;

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(1162);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _picker = __webpack_require__(991);

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  An city pick component build on top of picker
 *
 */
var CityPicker = function (_React$Component) {
    (0, _inherits3.default)(CityPicker, _React$Component);

    function CityPicker(props) {
        (0, _classCallCheck3.default)(this, CityPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CityPicker.__proto__ || (0, _getPrototypeOf2.default)(CityPicker)).call(this, props));

        var _this$props = _this.props,
            data = _this$props.data,
            selected = _this$props.selected,
            dataMap = _this$props.dataMap;

        var _this$parseData = _this.parseData(data, dataMap.items, selected),
            groups = _this$parseData.groups,
            newselected = _this$parseData.newselected;

        _this.state = {
            groups: groups,
            selected: newselected,
            picker_show: false,
            text: ''
        };
        //console.log(this.state.groups)
        _this.updateGroup = _this.updateGroup.bind(_this);
        _this.parseData = _this.parseData.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    //@return array of group with options


    (0, _createClass3.default)(CityPicker, [{
        key: 'parseData',
        value: function parseData(data, subKey) {
            var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var newselected = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

            var _selected = 0;

            if (Array.isArray(selected) && selected.length > 0) {
                var _selectedClone = selected.slice(0);
                _selected = _selectedClone.shift();
                selected = _selectedClone;
            }

            if (typeof data[_selected] === 'undefined') {
                _selected = 0;
            }

            newselected.push(_selected);

            var item = data[_selected];

            var _group = JSON.parse((0, _stringify2.default)(data));
            _group.forEach(function (g) {
                return delete g[subKey];
            });
            group.push({ items: _group, mapKeys: { 'label': this.props.dataMap.id } });

            if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
                return this.parseData(item[subKey], subKey, selected, group, newselected);
            } else {
                return { groups: group, newselected: newselected };
            }
        }
    }, {
        key: 'updateDataBySelected',
        value: function updateDataBySelected(selected, cb) {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                dataMap = _props.dataMap;
            //validate if item exists

            var _parseData = this.parseData(data, dataMap.items, selected),
                groups = _parseData.groups,
                newselected = _parseData.newselected;

            var text = '';
            try {
                groups.forEach(function (group, _i) {
                    text += group['items'][selected[_i]][_this2.props.dataMap.id] + ' ';
                });
            } catch (err) {
                //wait
                text = this.state.text;
            }

            this.setState({
                groups: groups,
                text: text,
                selected: newselected
            }, function () {
                return cb();
            });
        }
    }, {
        key: 'updateGroup',
        value: function updateGroup(item, i, groupIndex, selected, picker) {
            var _this3 = this;

            this.updateDataBySelected(selected, function () {
                //update picker
                picker.setState({
                    selected: _this3.state.selected
                });
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(selected) {
            var _this4 = this;

            //handle unchange
            if (selected === this.state.selected) {
                this.updateDataBySelected(selected, function () {
                    if (_this4.props.onChange) _this4.props.onChange(_this4.state.text);
                });
            }

            if (this.props.onChange) this.props.onChange(this.state.text);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_picker2.default, {
                show: this.props.show,
                onGroupChange: this.updateGroup,
                onChange: this.handleChange,
                defaultSelect: this.state.selected,
                groups: this.state.groups,
                onCancel: this.props.onCancel,
                lang: this.props.lang
            });
        }
    }]);
    return CityPicker;
}(_react2.default.Component);

CityPicker.propTypes = {
    /**
     * Array of item trees, consists property for label and subitems
     *
     */
    data: _propTypes2.default.array.isRequired,
    /**
     * keys for data provide, `id` to indicate property name for label, `items` to indicate property name for subitems
     *
     */
    dataMap: _propTypes2.default.object,
    /**
     * currently selected item
     *
     */
    selected: _propTypes2.default.array,
    /**
     * display the component
     *
     */
    show: _propTypes2.default.bool,
    /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
    lang: _propTypes2.default.object
};
CityPicker.defaultProps = {
    data: [],
    dataMap: { id: 'name', items: 'sub' },
    selected: [],
    show: false,
    lang: { leftBtn: '取消', rightBtn: '确定' }
};
exports.default = CityPicker;
module.exports = exports['default'];

/***/ }),

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1163), __esModule: true };

/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(74);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = __webpack_require__(1165);

var _badge2 = _interopRequireDefault(_badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _badge2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(404);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var presetStyles = {
    'default': {},
    'header': {
        position: 'absolute',
        top: '-.4em',
        right: '-.4em'
    },
    'body': {
        marginLeft: '5px'
    },
    'footer': {
        marginLeft: '5px',
        marginRight: '5px'
    }
};
/**
 * Small status descriptors for UI elements.
 *
 */

var Badge = function (_Component) {
    (0, _inherits3.default)(Badge, _Component);

    function Badge() {
        (0, _classCallCheck3.default)(this, Badge);
        return (0, _possibleConstructorReturn3.default)(this, (Badge.__proto__ || (0, _getPrototypeOf2.default)(Badge)).apply(this, arguments));
    }

    (0, _createClass3.default)(Badge, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                dot = _props.dot,
                style = _props.style,
                preset = _props.preset,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'dot', 'style', 'preset']);

            var clz = (0, _classnames2.default)('weui-badge', {
                'weui-badge_dot': dot
            }, className);

            var stylez = (0, _assign2.default)({}, presetStyles[preset], style);
            return _react2.default.createElement(
                'span',
                (0, _extends3.default)({ className: clz, style: stylez }, domProps),
                children
            );
        }
    }]);
    return Badge;
}(_react.Component);

Badge.propTypes = {
    /**
     * display dot style without content
     *
     */
    dot: _propTypes2.default.bool,
    /**
     * some preset layout for other UI elements, include 'header', 'body', 'footer'
     *
     */
    preset: _propTypes2.default.string
};
Badge.defaultProps = {
    dot: false,
    preset: 'default'
};
exports.default = Badge;
module.exports = exports['default'];

/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupHeader = exports.Popup = undefined;

var _popup = __webpack_require__(1167);

var _popup2 = _interopRequireDefault(_popup);

var _popup_header = __webpack_require__(1168);

var _popup_header2 = _interopRequireDefault(_popup_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Popup = _popup2.default;
exports.PopupHeader = _popup_header2.default;

/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(898);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  An Popup modal from bottom
 *
 */
var Popup = function (_Component) {
    (0, _inherits3.default)(Popup, _Component);

    function Popup() {
        (0, _classCallCheck3.default)(this, Popup);
        return (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).apply(this, arguments));
    }

    (0, _createClass3.default)(Popup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                show = _props.show,
                onRequestClose = _props.onRequestClose,
                enableMask = _props.enableMask,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'show', 'onRequestClose', 'enableMask']);

            var cls = (0, _classnames2.default)('weui-popup', {
                'weui-popup_toggle': show
            }, className);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_index2.default, { transparent: enableMask, style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    children
                )
            );
        }
    }]);
    return Popup;
}(_react.Component);

Popup.propTypes = {
    /**
     * display the component
     *
     */
    show: _propTypes2.default.bool,
    /**
     * show mask
     *
     */
    enableMask: _propTypes2.default.bool
};
Popup.defaultProps = {
    show: false,
    enableMask: false
};
exports.default = Popup;
module.exports = exports['default'];

/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Sample Popup header for Popup
 *
 */
var PopupHeader = function PopupHeader(props) {
  var left = props.left,
      right = props.right,
      leftOnClick = props.leftOnClick,
      rightOnClick = props.rightOnClick,
      className = props.className;

  var cls = (0, _classnames2.default)('weui-popup__hd', className);
  return _react2.default.createElement(
    'div',
    { className: cls },
    _react2.default.createElement(
      'a',
      { className: 'weui-popup__action', onClick: leftOnClick },
      left
    ),
    _react2.default.createElement(
      'a',
      { className: 'weui-popup__action', onClick: rightOnClick },
      right
    )
  );
};

PopupHeader.propTypes = {
  /**
   * left button label
   *
   */
  left: _propTypes2.default.string,
  /**
   * right button label
   *
   */
  right: _propTypes2.default.string,
  /**
   * left button onclick
   *
   */
  leftOnClick: _propTypes2.default.func,
  /**
   * right button onclick
   *
   */
  rightOnClick: _propTypes2.default.func
};

PopupHeader.defaultProps = {
  left: '',
  right: ''
};

exports.default = PopupHeader;
module.exports = exports['default'];

/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(881);

var _icon2 = _interopRequireDefault(_icon);

var _loadmore = __webpack_require__(944);

var _loadmore2 = _interopRequireDefault(_loadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  A Pull to refresh container enable user to pull the container and refresh it's content
 *
 */
var PullToRefresh = function (_Component) {
    (0, _inherits3.default)(PullToRefresh, _Component);

    function PullToRefresh(props) {
        (0, _classCallCheck3.default)(this, PullToRefresh);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PullToRefresh.__proto__ || (0, _getPrototypeOf2.default)(PullToRefresh)).call(this, props));

        _this.state = {
            pullPercent: 0,
            touching: false,
            ogY: 0,
            touchId: undefined,
            animating: false,
            loading: false,
            initScrollTop: 0
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.resolveRefresh = _this.resolveRefresh.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PullToRefresh, [{
        key: 'resolveRefresh',
        value: function resolveRefresh() {
            var _this2 = this;

            this.setState({
                loading: false,
                animating: true,
                pullPercent: 0
            }, function () {
                setTimeout(function () {
                    return _this2.setState({ animating: false });
                }, 500);
            });
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.state.loading || this.props.disable) return;

            var $content = _reactDom2.default.findDOMNode(this.refs.content);

            this.setState({
                touching: true,
                touchId: e.targetTouches[0].identifier,
                ogY: this.state.pullPercent === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.pullPercent,
                animating: false,
                initScrollTop: $content.scrollTop
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.state.loading || this.props.disable) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            var pageY = e.targetTouches[0].pageY;
            var diffY = pageY - this.state.ogY;

            //if it's scroll
            if (diffY < 0) return;

            //if it's not at top
            var $content = _reactDom2.default.findDOMNode(this.refs.content);
            if ($content.scrollTop > 0) return;

            //prevent move background
            e.preventDefault();

            diffY = diffY - this.state.initScrollTop > 100 ? 100 : diffY - this.state.initScrollTop;

            this.setState({
                pullPercent: diffY
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this3 = this;

            if (!this.state.touching || this.state.loading || this.props.disable) return;

            var pullPercent = this.state.pullPercent;
            var loading = false;

            if (pullPercent === 100) {
                loading = true;
            } else {
                pullPercent = 0;
            }

            this.setState({
                touching: false,
                ogY: 0,
                touchId: undefined,
                initScrollTop: 0,
                animating: loading,
                pullPercent: pullPercent,
                loading: loading
            }, function () {
                //triger after ui change
                if (loading) _this3.props.onRefresh(_this3.resolveRefresh);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                height = _props.height,
                loaderHeight = _props.loaderHeight,
                loaderDefaultIcon = _props.loaderDefaultIcon,
                loaderLoadingIcon = _props.loaderLoadingIcon,
                onRefresh = _props.onRefresh,
                disable = _props.disable,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'height', 'loaderHeight', 'loaderDefaultIcon', 'loaderLoadingIcon', 'onRefresh', 'disable']);

            var cls = (0, _classnames2.default)('react-weui-ptr', className);

            var containerStyle = {
                height: height
            };

            var loaderStyle = {
                //transform: `translate(0, ${this.state.pullPercent / 2}px)`,
                height: loaderHeight,
                marginTop: -loaderHeight + this.state.pullPercent / (100 / loaderHeight) + 'px',
                transition: this.state.animating ? 'all .5s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: containerStyle }, domProps),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-ptr__loader',
                        style: loaderStyle
                    },
                    this.state.loading ? loaderLoadingIcon : loaderDefaultIcon(this.state.pullPercent)
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-ptr__content',
                        ref: 'content',
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        onTouchEnd: this.handleTouchEnd
                    },
                    children
                )
            );
        }
    }]);
    return PullToRefresh;
}(_react.Component);

PullToRefresh.propTypes = {
    /**
     * height for the container, use string like '10px', default for '100%'
     *
     */
    height: _propTypes2.default.string,
    /**
     * height for the loader
     *
     */
    loaderHeight: _propTypes2.default.number,
    /**
     * element(icon) for default loader, function require, pass in pulldown progress
     *
     */
    loaderDefaultIcon: _propTypes2.default.func,
    /**
     * element(icon) for loading loader
     *
     */
    loaderLoadingIcon: _propTypes2.default.any,
    /**
     * callback when refresh is request, pass resolve function
     *
     */
    onRefresh: _propTypes2.default.func,
    /**
     * disable the loader
     *
     */
    disable: _propTypes2.default.bool
};
PullToRefresh.defaultProps = {
    height: '100%',
    loaderHeight: 100,
    loaderDefaultIcon: function loaderDefaultIcon(progress) {
        var style = {
            transform: 'rotate(-' + (progress !== 100 ? progress * 1.8 : 0) + 'deg)',
            color: progress !== 100 ? '#5f5f5f' : '#1AAD19'
        };
        return _react2.default.createElement(
            'div',
            { style: { flex: 1, padding: '5px' } },
            _react2.default.createElement(_icon2.default, { value: progress !== 100 ? 'download' : 'success', style: style })
        );
    },
    loaderLoadingIcon: _react2.default.createElement(_loadmore2.default, { loading: true }),
    onRefresh: function onRefresh(resolve, reject) {
        return setTimeout(function () {
            return resolve();
        }, 1000);
    },
    disable: false
};
exports.default = PullToRefresh;
module.exports = exports['default'];

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _loadmore = __webpack_require__(944);

var _loadmore2 = _interopRequireDefault(_loadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  A Container trigger loading once it reach certain scrolltop
 *
 */
var InfiniteLoader = function (_Component) {
    (0, _inherits3.default)(InfiniteLoader, _Component);

    function InfiniteLoader(props) {
        (0, _classCallCheck3.default)(this, InfiniteLoader);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InfiniteLoader.__proto__ || (0, _getPrototypeOf2.default)(InfiniteLoader)).call(this, props));

        _this.state = {
            loading: false,
            finish: false,
            scrollTimer: null
        };

        _this.scrollHandle = _this.scrollHandle.bind(_this);
        _this.resolveLoading = _this.resolveLoading.bind(_this);
        _this.finish = _this.finish.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(InfiniteLoader, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.resetStatus) {
                this.reset();
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState({
                loading: false,
                finish: false
            });
        }
    }, {
        key: 'finish',
        value: function finish() {
            this.setState({
                loading: false,
                finish: true
            });
        }
    }, {
        key: 'resolveLoading',
        value: function resolveLoading() {
            this.setState({
                loading: false,
                finish: false
            });
        }
    }, {
        key: 'scrollHandle',
        value: function scrollHandle(e) {
            var _this2 = this;

            if (this.props.onScroll) this.props.onScroll(e);
            if (this.state.loading || this.state.finish || this.props.disable || e.target.scrollTop === 0) return;

            //setup for scrollend event
            clearTimeout(this.state.scrollTimer);
            this.setState({ scrollTimer: setTimeout(function () {
                    if (_this2.props.onScrollEnd) _this2.props.onScrollEnd();
                }, 150) });

            var target = e.target;
            var scrollPercent = Math.floor((target.scrollTop + target.clientHeight) / target.scrollHeight * 100);

            if (scrollPercent > this.props.triggerPercent) {
                this.setState({
                    loading: true
                });

                this.props.onLoadMore(this.resolveLoading, this.finish);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                height = _props.height,
                triggerPercent = _props.triggerPercent,
                disable = _props.disable,
                loaderLoadingIcon = _props.loaderLoadingIcon,
                loaderDefaultIcon = _props.loaderDefaultIcon,
                onScrollEnd = _props.onScrollEnd,
                onScroll = _props.onScroll,
                onLoadMore = _props.onLoadMore,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'height', 'triggerPercent', 'disable', 'loaderLoadingIcon', 'loaderDefaultIcon', 'onScrollEnd', 'onScroll', 'onLoadMore']);

            var clx = (0, _classnames2.default)('react-weui-infiniteloader', className);

            var containerStyle = {
                height: height
            };

            var contentStyle = {
                overflow: disable ? 'hidden' : 'scroll'
            };

            var loaderStyle = {
                display: this.state.loading || this.state.finish ? 'block' : 'none'
            };

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({
                    className: clx,
                    style: containerStyle,
                    onScroll: this.scrollHandle
                }, domProps),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-infiniteloader__content',
                        style: contentStyle,
                        ref: 'container'
                    },
                    children,
                    _react2.default.createElement(
                        'div',
                        { style: loaderStyle },
                        this.state.finish ? loaderDefaultIcon : this.state.loading ? loaderLoadingIcon : false
                    )
                )
            );
        }
    }]);
    return InfiniteLoader;
}(_react.Component);

InfiniteLoader.propTypes = {
    /**
     * height for the container, use string like '10px', default for '100vh'
     *
     */
    height: _propTypes2.default.string,
    /**
     * element(icon) for default loader when there is no more content
     *
     */
    loaderDefaultIcon: _propTypes2.default.object,
    /**
     * element(icon) for loading loader
     *
     */
    loaderLoadingIcon: _propTypes2.default.object,
    /**
     * percentage of scrollTop to trigger loading
     *
     */
    triggerPercent: _propTypes2.default.number,
    /**
     * callback when user scroll the content, pass event
     *
     */
    onScroll: _propTypes2.default.func,
    /**
     * callback when user did not scroll for 150ms
     *
     */
    onScrollEnd: _propTypes2.default.func,
    /**
     * callback when it's requesting for more content, pass resolve function and finish function
     *
     */
    onLoadMore: _propTypes2.default.func,
    /**
     * disable the loader
     *
     */
    disable: _propTypes2.default.bool,
    /**
     * reset the finish status
     */
    resetStatus: _propTypes2.default.bool
};
InfiniteLoader.defaultProps = {
    height: '100vh',
    triggerPercent: 75,
    loaderLoadingIcon: _react2.default.createElement(
        _loadmore2.default,
        { loading: true },
        ' Loading... '
    ),
    loaderDefaultIcon: _react2.default.createElement(
        _loadmore2.default,
        { showLine: true },
        ' No Data'
    ),
    disable: false
};
exports.default = InfiniteLoader;
module.exports = exports['default'];

/***/ }),

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _page = __webpack_require__(1172);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _page2.default;
module.exports = exports['default'];

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(404);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(993);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(994);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Component for a standard page
 *
 */
var Page = function (_Component) {
    (0, _inherits3.default)(Page, _Component);

    function Page(props) {
        (0, _classCallCheck3.default)(this, Page);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, props));

        _this.state = {
            ptrRefreshing: false,
            contentScrollOnTop: true
        };

        _this.handleRefresh = _this.handleRefresh.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Page, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.infiniteLoader) {
                this.setState({ contentScrollOnTop: true });
            } else {
                this.setState({ contentScrollOnTop: false });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //console.log('unmounting page');
        }
    }, {
        key: 'handleRefresh',
        value: function handleRefresh(resolve) {
            var _this2 = this;

            this.setState({
                ptrRefreshing: true
            }, function () {
                _this2.props.ptrOnRefresh(function () {
                    _this2.setState({
                        ptrRefreshing: false
                    });
                    resolve();
                });
            });
        }
    }, {
        key: 'handleContentScroll',
        value: function handleContentScroll(e) {
            if (e.target.scrollTop <= 0) {
                this.setState({ contentScrollOnTop: true });
            } else {
                this.setState({ contentScrollOnTop: false });
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent(children, ptr, infiniteLoader) {
            var _this3 = this;

            if (!infiniteLoader && !ptr) return children;

            var ContentWithInfiniteLoader = _react2.default.createElement(
                _index4.default,
                {
                    height: '100%',
                    disable: this.state.ptrRefreshing,
                    onScroll: function onScroll(e) {
                        return _this3.handleContentScroll(e);
                    },
                    onLoadMore: this.props.onLoadMore
                },
                children
            );
            if (!ptr && infiniteLoader) return ContentWithInfiniteLoader;
            if (ptr && !infiniteLoader) return _react2.default.createElement(
                _index2.default,
                {
                    onRefresh: this.handleRefresh,
                    disable: !this.state.contentScrollOnTop
                },
                children
            );

            return _react2.default.createElement(
                _index2.default,
                {
                    onRefresh: this.handleRefresh,
                    disable: !this.state.contentScrollOnTop
                },
                ContentWithInfiniteLoader
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                style = _props.style,
                className = _props.className,
                infiniteLoader = _props.infiniteLoader,
                transition = _props.transition,
                ptr = _props.ptr;

            var cls = (0, _classnames2.default)('weui-page', className);

            return _react2.default.createElement(
                'div',
                {
                    className: cls,
                    style: (0, _assign2.default)({}, { animationName: transition ? 'pageInRight' : '' }, style) },
                this.renderContent(children, ptr, infiniteLoader)
            );
        }
    }]);
    return Page;
}(_react.Component);

Page.propTypes = {
    /**
     * indicate to use ptr
     *
     */
    ptr: _propTypes2.default.bool,
    /**
     * function to call when ptr refresh, pass function resolve to finish loading
     *
     */
    ptrOnRefresh: _propTypes2.default.func,
    /**
     * indicate to use infiniteloader
     *
     */
    infiniteLoader: _propTypes2.default.bool,
    /**
     * callback when it's requesting for more content, pass resolve function and finish function
     *
     */
    onLoadMore: _propTypes2.default.func,
    /**
     * enable page transition
     *
     */
    transition: _propTypes2.default.bool
};
Page.defaultProps = {
    ptr: true,
    ptrOnRefresh: function ptrOnRefresh(resolve) {
        setTimeout(function () {
            resolve();
        }, 1000);
    },
    infiniteLoader: true,
    onLoadMore: function onLoadMore(resolve, finish) {
        //mock request
        setTimeout(function () {
            finish();
        }, 1000);
    },
    transition: true
};
exports.default = Page;
module.exports = exports['default'];

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__(146);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames

  with fix with es6 export default
*/

var hasOwn = {}.hasOwnProperty;

function classNames() {
	var classes = [];

	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		if (!arg) continue;

		var argType = typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg);

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			classes.push(classNames.apply(null, arg));
		} else if (argType === 'object') {
			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes.push(key);
				}
			}
		}
	}

	return classes.join(' ');
}

exports.default = classNames;
module.exports = exports['default'];

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(933), __esModule: true };

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

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(257);

__webpack_require__(863);

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(64);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(66);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames2 = __webpack_require__(97);

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(852);

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _icon = __webpack_require__(182);

var _icon2 = _interopRequireDefault(_icon);

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

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return React.createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3['default'])(this, Button);
        return (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Button, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                type = _a.type,
                size = _a.size,
                inline = _a.inline,
                disabled = _a.disabled,
                icon = _a.icon,
                loading = _a.loading,
                activeStyle = _a.activeStyle,
                activeClassName = _a.activeClassName,
                onClick = _a.onClick,
                restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);
            var iconType = loading ? 'loading' : icon;
            var wrapCls = (0, _classnames3['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-primary', type === 'primary'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-ghost', type === 'ghost'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-warning', type === 'warning'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-small', size === 'small'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-inline', inline), (0, _defineProperty3['default'])(_classnames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classnames, prefixCls + '-icon', !!iconType), _classnames));
            var kids = React.Children.map(children, insertSpace);
            var iconEl = void 0;
            if (typeof iconType === 'string') {
                iconEl = React.createElement(_icon2['default'], { 'aria-hidden': 'true', type: iconType, size: size === 'small' ? 'xxs' : 'md', className: prefixCls + '-icon' });
            } else if (iconType) {
                var rawCls = iconType.props && iconType.props.className;
                var cls = (0, _classnames3['default'])('am-icon', prefixCls + '-icon', size === 'small' ? 'am-icon-xxs' : 'am-icon-md');
                iconEl = React.cloneElement(iconType, {
                    className: rawCls ? rawCls + ' ' + cls : cls
                });
            }
            // use div, button native is buggy @yiminghe
            return React.createElement(
                _rmcFeedback2['default']
                // tslint:disable-next-line:jsx-no-multiline-js
                ,
                { activeClassName: activeClassName || (activeStyle ? prefixCls + '-active' : undefined), disabled: disabled, activeStyle: activeStyle },
                React.createElement(
                    'a',
                    (0, _extends3['default'])({ role: 'button', className: wrapCls }, restProps, { onClick: disabled ? undefined : onClick, 'aria-disabled': disabled }),
                    iconEl,
                    kids
                )
            );
        }
    }]);
    return Button;
}(React.Component);

Button.defaultProps = {
    prefixCls: 'am-button',
    size: 'large',
    inline: false,
    disabled: false,
    loading: false,
    activeStyle: {}
};
exports['default'] = Button;
module.exports = exports['default'];

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(1102);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default; /**
                                   * Created by jf on 15/11/3.
                                   */

module.exports = exports['default'];

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mask = __webpack_require__(1091);

var _mask2 = _interopRequireDefault(_mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _mask2.default; /**
                                   * Created by jf on 15/10/27.
                                   */

module.exports = exports['default'];

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(99);
var core = __webpack_require__(74);
var fails = __webpack_require__(118);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(903);

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Flex = __webpack_require__(905);

var _Flex2 = _interopRequireDefault(_Flex);

var _FlexItem = __webpack_require__(906);

var _FlexItem2 = _interopRequireDefault(_FlexItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Flex2['default'].Item = _FlexItem2['default'];
exports['default'] = _Flex2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(64);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(66);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(57);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames2 = __webpack_require__(97);

var _classnames3 = _interopRequireDefault(_classnames2);

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

var Flex = function (_React$Component) {
    (0, _inherits3['default'])(Flex, _React$Component);

    function Flex() {
        (0, _classCallCheck3['default'])(this, Flex);
        return (0, _possibleConstructorReturn3['default'])(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Flex, [{
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                direction = _a.direction,
                wrap = _a.wrap,
                justify = _a.justify,
                align = _a.align,
                alignContent = _a.alignContent,
                className = _a.className,
                children = _a.children,
                prefixCls = _a.prefixCls,
                style = _a.style,
                restProps = __rest(_a, ["direction", "wrap", "justify", "align", "alignContent", "className", "children", "prefixCls", "style"]);
            var wrapCls = (0, _classnames3['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-dir-row', direction === 'row'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-dir-row-reverse', direction === 'row-reverse'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-dir-column', direction === 'column'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-dir-column-reverse', direction === 'column-reverse'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-nowrap', wrap === 'nowrap'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-wrap', wrap === 'wrap'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-wrap-reverse', wrap === 'wrap-reverse'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-start', justify === 'start'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-end', justify === 'end'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-center', justify === 'center'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-between', justify === 'between'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-justify-around', justify === 'around'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-start', align === 'start'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-center', align === 'center'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-end', align === 'end'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-baseline', align === 'baseline'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-stretch', align === 'stretch'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-start', alignContent === 'start'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-end', alignContent === 'end'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-center', alignContent === 'center'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-between', alignContent === 'between'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-around', alignContent === 'around'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-align-content-stretch', alignContent === 'stretch'), _classnames));
            return React.createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                children
            );
        }
    }]);
    return Flex;
}(React.Component);

exports['default'] = Flex;

Flex.defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center'
};
module.exports = exports['default'];

/***/ }),

/***/ 906:
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

var FlexItem = function (_React$Component) {
    (0, _inherits3['default'])(FlexItem, _React$Component);

    function FlexItem() {
        (0, _classCallCheck3['default'])(this, FlexItem);
        return (0, _possibleConstructorReturn3['default'])(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(FlexItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                children = _a.children,
                className = _a.className,
                prefixCls = _a.prefixCls,
                style = _a.style,
                restProps = __rest(_a, ["children", "className", "prefixCls", "style"]);
            var wrapCls = (0, _classnames2['default'])(prefixCls + '-item', className);
            return React.createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                children
            );
        }
    }]);
    return FlexItem;
}(React.Component);

exports['default'] = FlexItem;

FlexItem.defaultProps = {
    prefixCls: 'am-flexbox'
};
module.exports = exports['default'];

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecationWarning;
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

var warned = {};

function deprecationWarning(oldname, newname, link) {
  //avoid test warnings
  if (typeof global.it === 'function') {
    return;
  }

  var warnKey = oldname + '\n' + newname;
  if (warned[warnKey]) {
    return;
  }

  var message = '[React-WeUI] ' + oldname + ' is deprecated. Use ' + newname + ' instead. ' + oldname + ' will be remove in the next major version.';

  if (link) {
    message += '\nYou can read more about it at \n' + link;
  }

  warning(false, message);
  warned[warnKey] = true;
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(934);
module.exports = __webpack_require__(74).Object.getPrototypeOf;


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(184);
var $getPrototypeOf = __webpack_require__(405);

__webpack_require__(901)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Icon wrapper for icon use in TabBar
 *
 */
var TabBarIcon = function (_React$Component) {
    (0, _inherits3.default)(TabBarIcon, _React$Component);

    function TabBarIcon() {
        (0, _classCallCheck3.default)(this, TabBarIcon);
        return (0, _possibleConstructorReturn3.default)(this, (TabBarIcon.__proto__ || (0, _getPrototypeOf2.default)(TabBarIcon)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBarIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar__icon': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBarIcon;
}(_react2.default.Component);

exports.default = TabBarIcon;
module.exports = exports['default'];

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  label wrapper for text inside TabBarItem
 *
 */
var TabBarLabel = function (_React$Component) {
    (0, _inherits3.default)(TabBarLabel, _React$Component);

    function TabBarLabel() {
        (0, _classCallCheck3.default)(this, TabBarLabel);
        return (0, _possibleConstructorReturn3.default)(this, (TabBarLabel.__proto__ || (0, _getPrototypeOf2.default)(TabBarLabel)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBarLabel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar__label': true
            }, className);

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBarLabel;
}(_react2.default.Component);

exports.default = TabBarLabel;
module.exports = exports['default'];

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadmore = __webpack_require__(1159);

var _loadmore2 = _interopRequireDefault(_loadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loadmore2.default;
module.exports = exports['default'];

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PreviewButton = exports.ButtonArea = exports.Button = undefined;

var _button = __webpack_require__(1080);

var _button2 = _interopRequireDefault(_button);

var _button_area = __webpack_require__(1081);

var _button_area2 = _interopRequireDefault(_button_area);

var _button_preview = __webpack_require__(1082);

var _button_preview2 = _interopRequireDefault(_button_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _button2.default;
exports.ButtonArea = _button_area2.default;
exports.PreviewButton = _button_preview2.default; /**
                                                   * Created by jf on 15/10/27.
                                                   */

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FooterLink = exports.FooterLinks = exports.FooterText = exports.Footer = undefined;

var _footer = __webpack_require__(1126);

var _footer2 = _interopRequireDefault(_footer);

var _footer_text = __webpack_require__(1127);

var _footer_text2 = _interopRequireDefault(_footer_text);

var _footer_links = __webpack_require__(1128);

var _footer_links2 = _interopRequireDefault(_footer_links);

var _footer_link = __webpack_require__(1129);

var _footer_link2 = _interopRequireDefault(_footer_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Footer = _footer2.default;
exports.FooterText = _footer_text2.default;
exports.FooterLinks = _footer_links2.default;
exports.FooterLink = _footer_link2.default;

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _grid_icon = __webpack_require__(981);

var _grid_icon2 = _interopRequireDefault(_grid_icon);

var _grid_label = __webpack_require__(982);

var _grid_label2 = _interopRequireDefault(_grid_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
 *
 */
var Grid = function (_React$Component) {
  (0, _inherits3.default)(Grid, _React$Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          icon = _props.icon,
          label = _props.label,
          className = _props.className,
          component = _props.component,
          others = (0, _objectWithoutProperties3.default)(_props, ['children', 'icon', 'label', 'className', 'component']);

      var cls = (0, _classnames2.default)({
        'weui-grid': true
      }, className);
      var DefaultComponent = 'a';
      var GridComponent = component ? component : DefaultComponent;

      return _react2.default.createElement(
        GridComponent,
        (0, _extends3.default)({ className: cls }, others),
        icon ? _react2.default.createElement(
          _grid_icon2.default,
          null,
          icon
        ) : false,
        children,
        label ? _react2.default.createElement(
          _grid_label2.default,
          null,
          label
        ) : false
      );
    }
  }]);
  return Grid;
}(_react2.default.Component);

Grid.propTypes = {
  /**
   * Label string for grid
   *
   */
  label: _propTypes2.default.string,
  /**
   * Icon placeholder
   *
   */
  icon: _propTypes2.default.any,
  /**
   * pass in an component to replace Grid but apply same style
   */
  component: _propTypes2.default.func
};
Grid.defaultProps = {
  label: '',
  icon: false
};
exports.default = Grid;
;
module.exports = exports['default'];

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Grid Icon Wrapper
 *
 */
var GridIcon = function (_React$Component) {
    (0, _inherits3.default)(GridIcon, _React$Component);

    function GridIcon() {
        (0, _classCallCheck3.default)(this, GridIcon);
        return (0, _possibleConstructorReturn3.default)(this, (GridIcon.__proto__ || (0, _getPrototypeOf2.default)(GridIcon)).apply(this, arguments));
    }

    (0, _createClass3.default)(GridIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-grid__icon': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return GridIcon;
}(_react2.default.Component);

exports.default = GridIcon;
;
module.exports = exports['default'];

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Grid Label Wrapper
 *
 */
var GridLabel = function (_React$Component) {
    (0, _inherits3.default)(GridLabel, _React$Component);

    function GridLabel() {
        (0, _classCallCheck3.default)(this, GridLabel);
        return (0, _possibleConstructorReturn3.default)(this, (GridLabel.__proto__ || (0, _getPrototypeOf2.default)(GridLabel)).apply(this, arguments));
    }

    (0, _createClass3.default)(GridLabel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-grid__label': true
            }, className);

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return GridLabel;
}(_react2.default.Component);

exports.default = GridLabel;
;
module.exports = exports['default'];

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Meta Item for `MeidaBoxInfo`
 *
 */
var MediaBoxInfoMeta = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxInfoMeta, _React$Component);

    function MediaBoxInfoMeta() {
        (0, _classCallCheck3.default)(this, MediaBoxInfoMeta);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxInfoMeta.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxInfoMeta)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxInfoMeta, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                extra = _props.extra,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'extra', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__info__meta': true,
                'weui-media-box__info__meta_extra': extra
            }, className);

            return _react2.default.createElement(
                'li',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxInfoMeta;
}(_react2.default.Component);

MediaBoxInfoMeta.propTypes = {
    /**
     * add left margin to indicate extra
     *
     */
    extra: _propTypes2.default.bool
};
MediaBoxInfoMeta.defaultProps = {
    extra: false
};
exports.default = MediaBoxInfoMeta;
;
module.exports = exports['default'];

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content Wrapper for Tab
 */
var TabBody = function (_React$Component) {
    (0, _inherits3.default)(TabBody, _React$Component);

    function TabBody() {
        (0, _classCallCheck3.default)(this, TabBody);
        return (0, _possibleConstructorReturn3.default)(this, (TabBody.__proto__ || (0, _getPrototypeOf2.default)(TabBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-tab__panel': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBody;
}(_react2.default.Component);

exports.default = TabBody;
module.exports = exports['default'];

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content wrapper for each Tab Item
 */
var TabBodyItem = function (_React$Component) {
    (0, _inherits3.default)(TabBodyItem, _React$Component);

    function TabBodyItem() {
        (0, _classCallCheck3.default)(this, TabBodyItem);
        return (0, _possibleConstructorReturn3.default)(this, (TabBodyItem.__proto__ || (0, _getPrototypeOf2.default)(TabBodyItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBodyItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'active']);

            var cls = (0, _classnames2.default)({
                'weui-tab__bd-item': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: { display: active ? 'block' : 'none' } }, others),
                children
            );
        }
    }]);
    return TabBodyItem;
}(_react2.default.Component);

TabBodyItem.propTypes = {
    /**
     * display this component
     *
     */
    active: _propTypes2.default.bool
};
TabBodyItem.defaultProps = {
    active: false
};
exports.default = TabBodyItem;
module.exports = exports['default'];

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  wrapper for navbar
 *
 */
var NavBar = function (_React$Component) {
    (0, _inherits3.default)(NavBar, _React$Component);

    function NavBar() {
        (0, _classCallCheck3.default)(this, NavBar);
        return (0, _possibleConstructorReturn3.default)(this, (NavBar.__proto__ || (0, _getPrototypeOf2.default)(NavBar)).apply(this, arguments));
    }

    (0, _createClass3.default)(NavBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-navbar': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return NavBar;
}(_react2.default.Component);

exports.default = NavBar;
module.exports = exports['default'];

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Navbar item to display info
 *
 */
var NavBarItem = function (_React$Component) {
    (0, _inherits3.default)(NavBarItem, _React$Component);

    function NavBarItem() {
        (0, _classCallCheck3.default)(this, NavBarItem);
        return (0, _possibleConstructorReturn3.default)(this, (NavBarItem.__proto__ || (0, _getPrototypeOf2.default)(NavBarItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(NavBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                label = _props.label,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'active', 'label']);

            var cls = (0, _classnames2.default)({
                'weui-navbar__item': true,
                'weui-bar__item_on': active
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                label ? label : children
            );
        }
    }]);
    return NavBarItem;
}(_react2.default.Component);

NavBarItem.propTypes = {
    /**
     * indicate tab is active
     *
     */
    active: _propTypes2.default.bool,
    /**
     * label of the item
     *
     */
    label: _propTypes2.default.string
};
NavBarItem.defaultProps = {
    active: false
};
exports.default = NavBarItem;
module.exports = exports['default'];

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Bottom bar for tabs
 *
 */
var TabBar = function (_React$Component) {
    (0, _inherits3.default)(TabBar, _React$Component);

    function TabBar() {
        (0, _classCallCheck3.default)(this, TabBar);
        return (0, _possibleConstructorReturn3.default)(this, (TabBar.__proto__ || (0, _getPrototypeOf2.default)(TabBar)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBar;
}(_react2.default.Component);

exports.default = TabBar;
module.exports = exports['default'];

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _tabbar_icon = __webpack_require__(942);

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = __webpack_require__(943);

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Tabbar item
 *
 */
var TabBarItem = function (_React$Component) {
    (0, _inherits3.default)(TabBarItem, _React$Component);

    function TabBarItem() {
        (0, _classCallCheck3.default)(this, TabBarItem);
        return (0, _possibleConstructorReturn3.default)(this, (TabBarItem.__proto__ || (0, _getPrototypeOf2.default)(TabBarItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                icon = _props.icon,
                label = _props.label,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'active', 'icon', 'label']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar__item': true,
                'weui-bar__item_on': active
            }, className);

            if (icon || label) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    icon ? _react2.default.createElement(
                        _tabbar_icon2.default,
                        null,
                        icon
                    ) : false,
                    label ? _react2.default.createElement(
                        _tabbar_label2.default,
                        null,
                        label
                    ) : false
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    children
                );
            }
        }
    }]);
    return TabBarItem;
}(_react2.default.Component);

TabBarItem.propTypes = {
    /**
     * indicate currently active
     *
     */
    active: _propTypes2.default.bool,
    /**
     * icon of item
     *
     */
    icon: _propTypes2.default.any,
    /**
     * label of item
     *
     */
    label: _propTypes2.default.string
};
TabBarItem.defaultProps = {
    active: false,
    icon: false,
    label: ''
};
exports.default = TabBarItem;
module.exports = exports['default'];

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swiper = __webpack_require__(1157);

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _swiper2.default;
module.exports = exports['default'];

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _picker_group = __webpack_require__(992);

var _picker_group2 = _interopRequireDefault(_picker_group);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

var _mask = __webpack_require__(898);

var _mask2 = _interopRequireDefault(_mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
var Picker = function (_Component) {
    (0, _inherits3.default)(Picker, _Component);

    function Picker(props) {
        (0, _classCallCheck3.default)(this, Picker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call(this, props));

        _this.state = {
            selected: _this.props.defaultSelect ? _this.props.defaultSelect : Array(_this.props.groups.length).fill(-1),
            actions: _this.props.actions.length > 0 ? _this.props.actions : [{
                label: _this.props.lang.leftBtn,
                onClick: function onClick(e) {
                    return _this.handleClose(function () {
                        if (_this.props.onCancel) _this.props.onCancel(e);
                    });
                }
            }, {
                label: _this.props.lang.rightBtn,
                onClick: function onClick(e) {
                    return _this.handleChanges();
                }
            }],
            closing: false
        };

        _this.handleChanges = _this.handleChanges.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Picker, [{
        key: 'handleChanges',
        value: function handleChanges() {
            var _this2 = this;

            this.handleClose(function () {
                if (_this2.props.onChange) _this2.props.onChange(_this2.state.selected, _this2);
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(item, i, groupIndex) {
            var _this3 = this;

            var selected = this.state.selected;

            selected[groupIndex] = i;
            this.setState({ selected: selected }, function () {
                if (_this3.props.onGroupChange) _this3.props.onGroupChange(item, i, groupIndex, _this3.state.selected, _this3);
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose(cb) {
            var _this4 = this;

            this.setState({
                closing: true
            }, function () {
                return setTimeout(function () {
                    _this4.setState({ closing: false });
                    cb();
                }, 300);
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            var elActions = this.state.actions.map(function (action, i) {
                var label = action.label,
                    others = (0, _objectWithoutProperties3.default)(action, ['label']);

                return _react2.default.createElement(
                    'a',
                    (0, _extends3.default)({}, others, { key: i, className: 'weui-picker__action' }),
                    ' ',
                    label
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'weui-picker__hd' },
                elActions
            );
        }
    }, {
        key: 'renderGroups',
        value: function renderGroups() {
            var _this5 = this;

            return this.props.groups.map(function (group, i) {
                return _react2.default.createElement(_picker_group2.default, (0, _extends3.default)({ key: i }, group, { onChange: _this5.handleChange, groupIndex: i, defaultIndex: _this5.state.selected[i] }));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props = this.props,
                className = _props.className,
                show = _props.show,
                actions = _props.actions,
                groups = _props.groups,
                defaultSelect = _props.defaultSelect,
                onGroupChange = _props.onGroupChange,
                onChange = _props.onChange,
                onCancel = _props.onCancel,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'show', 'actions', 'groups', 'defaultSelect', 'onGroupChange', 'onChange', 'onCancel']);

            var cls = (0, _classnames2.default)('weui-picker', {
                'weui-animate-slide-up': show && !this.state.closing,
                'weui-animate-slide-down': this.state.closing
            }, className);

            var maskCls = (0, _classnames2.default)({
                'weui-animate-fade-in': show && !this.state.closing,
                'weui-animate-fade-out': this.state.closing
            });

            return this.props.show ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_mask2.default, { className: maskCls, onClick: function onClick(e) {
                        return _this6.handleClose(function () {
                            if (_this6.props.onCancel) _this6.props.onCancel(e);
                        });
                    } }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    this.renderActions(),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-picker__bd' },
                        this.renderGroups()
                    )
                )
            ) : false;
        }
    }]);
    return Picker;
}(_react.Component);

Picker.propTypes = {
    /**
     * consists of array of object(max 2) with property `label` and others pass into element
     *
     */
    actions: _propTypes2.default.array,
    /**
     * array objects consists of groups for each scroll group
     *
     */
    groups: _propTypes2.default.array,
    /**
     * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
     *
     */
    defaultSelect: _propTypes2.default.array,
    /**
     * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
     *
     */
    onGroupChange: _propTypes2.default.func,
    /**
     * on selected change, pass property `selected` for array of slected index to `groups`
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * excute when the popup about to close
     *
     */
    onCancel: _propTypes2.default.func,
    /**
     * display the component
     *
     */
    show: _propTypes2.default.bool,
    /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
    lang: _propTypes2.default.object
};
Picker.defaultProps = {
    actions: [],
    groups: [],
    show: false,
    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
};
exports.default = Picker;
module.exports = exports['default'];

/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(849);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(848);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerGroup = function (_Component) {
    (0, _inherits3.default)(PickerGroup, _Component);

    function PickerGroup(props) {
        (0, _classCallCheck3.default)(this, PickerGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PickerGroup.__proto__ || (0, _getPrototypeOf2.default)(PickerGroup)).call(this, props));

        _this.state = {
            touching: false,
            ogY: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            totalHeight: 0,
            selected: 0,
            animating: _this.props.animation
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.updateSelected = _this.updateSelected.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PickerGroup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.adjustPosition(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.adjustPosition(nextProps);
        }
    }, {
        key: 'adjustPosition',
        value: function adjustPosition(props) {
            var _this2 = this;

            var items = props.items,
                itemHeight = props.itemHeight,
                indicatorTop = props.indicatorTop,
                defaultIndex = props.defaultIndex;

            var totalHeight = items.length * itemHeight;
            var translate = totalHeight <= indicatorTop ? indicatorTop : 0;

            if (defaultIndex > -1) {
                if (translate === 0) {
                    var upperCount = Math.floor(indicatorTop / itemHeight);
                    if (defaultIndex > upperCount) {
                        //over
                        var overCount = defaultIndex - upperCount;
                        translate -= overCount * itemHeight;
                    } else if (defaultIndex === upperCount) {
                        translate = 0;
                    } else {
                        //less
                        translate += Math.abs(upperCount - defaultIndex) * itemHeight;
                    }
                    //if(props.groupIndex == 2) console.log(defaultIndex,translate, upperCount)
                } else {
                    //total item less than indicator height
                    translate -= itemHeight * defaultIndex;
                }
            }

            this.setState({ selected: defaultIndex, ogTranslate: translate, totalHeight: totalHeight, translate: translate
            }, function () {
                return defaultIndex > -1 ? _this2.updateSelected(false) : _this2.updateSelected();
            });
        }
    }, {
        key: 'updateSelected',
        value: function updateSelected() {
            var _this3 = this;

            var propagate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var _props = this.props,
                items = _props.items,
                itemHeight = _props.itemHeight,
                indicatorTop = _props.indicatorTop,
                indicatorHeight = _props.indicatorHeight,
                onChange = _props.onChange,
                groupIndex = _props.groupIndex;

            var selected = 0;
            items.forEach(function (item, i) {
                //console.log(i, this.state.translate, (this.state.translate + (itemHeight * i)), indicatorTop, this.state.translate + (itemHeight * i) + itemHeight , indicatorTop + indicatorHeight)
                if (!item.disabled && _this3.state.translate + itemHeight * i >= indicatorTop && _this3.state.translate + itemHeight * i + itemHeight <= indicatorTop + indicatorHeight) {
                    selected = i;
                }
            });

            if (onChange && propagate) onChange(items[selected], selected, groupIndex);
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.items.length <= 1) return;

            this.setState({
                touching: true,
                ogTranslate: this.state.translate,
                touchId: e.targetTouches[0].identifier,
                ogY: this.state.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.translate,
                animating: false
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.props.items.length <= 1) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var pageY = e.targetTouches[0].pageY;
            var diffY = pageY - this.state.ogY;

            this.setState({
                translate: diffY
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this4 = this;

            if (!this.state.touching || this.props.items.length <= 1) return;

            var _props2 = this.props,
                indicatorTop = _props2.indicatorTop,
                indicatorHeight = _props2.indicatorHeight,
                itemHeight = _props2.itemHeight;

            var translate = this.state.translate;

            if (Math.abs(translate - this.state.ogTranslate) < itemHeight * .51) {
                translate = this.state.ogTranslate;
            } else if (translate > indicatorTop) {
                //top boundry
                translate = indicatorTop;
            } else if (translate + this.state.totalHeight < indicatorTop + indicatorHeight) {
                //bottom
                translate = indicatorTop + indicatorHeight - this.state.totalHeight;
            } else {
                //pass single item range but not exceed boundry
                var step = 0,
                    adjust = 0;
                var diff = (translate - this.state.ogTranslate) / itemHeight;

                if (Math.abs(diff) < 1) {
                    step = diff > 0 ? 1 : -1;
                } else {
                    adjust = Math.abs(diff % 1 * 100) > 50 ? 1 : 0;
                    step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
                }

                translate = this.state.ogTranslate + step * itemHeight;
            }

            this.setState({
                touching: false,
                ogY: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate: translate
            }, function () {
                return _this4.updateSelected();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props3 = this.props,
                items = _props3.items,
                className = _props3.className,
                height = _props3.height,
                itemHeight = _props3.itemHeight,
                indicatorTop = _props3.indicatorTop,
                indicatorHeight = _props3.indicatorHeight,
                onChange = _props3.onChange,
                aniamtion = _props3.aniamtion,
                groupIndex = _props3.groupIndex,
                defaultIndex = _props3.defaultIndex,
                mapKeys = _props3.mapKeys,
                others = (0, _objectWithoutProperties3.default)(_props3, ['items', 'className', 'height', 'itemHeight', 'indicatorTop', 'indicatorHeight', 'onChange', 'aniamtion', 'groupIndex', 'defaultIndex', 'mapKeys']);

            var cls = (0, _classnames2.default)('weui-picker__group', className);
            var styles = {
                'transform': 'translate(0, ' + this.state.translate + 'px)',
                'transition': this.state.animating ? 'transform .3s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others, {
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd
                }),
                _react2.default.createElement('div', { className: 'weui-picker__mask' }),
                _react2.default.createElement('div', { className: 'weui-picker__indicator' }),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-picker__content',
                        style: styles,
                        ref: 'content' },
                    items.map(function (item, j) {
                        var label = item[_this5.props.mapKeys.label];
                        var itemCls = (0, _classnames2.default)('weui-picker__item', {
                            'weui-picker__item_disabled': item.disabled
                        });

                        return _react2.default.createElement(
                            'div',
                            { key: j, className: itemCls },
                            label
                        );
                    })
                )
            );
        }
    }]);
    return PickerGroup;
}(_react.Component);

PickerGroup.propTypes = {
    height: _propTypes2.default.number,
    itemHeight: _propTypes2.default.number,
    indicatorTop: _propTypes2.default.number,
    indicatorHeight: _propTypes2.default.number,
    onChange: _propTypes2.default.func,
    aniamtion: _propTypes2.default.bool,
    groupIndex: _propTypes2.default.number,
    defaultIndex: _propTypes2.default.number
};
PickerGroup.defaultProps = {
    height: 238,
    itemHeight: 25 + 9, //content + padding
    indicatorTop: 102,
    indicatorHeight: 34,
    aniamtion: true,
    groupIndex: -1,
    defaultIndex: -1,
    mapKeys: {
        label: 'label'
    }
};
exports.default = PickerGroup;
module.exports = exports['default'];

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ptr = __webpack_require__(1169);

var _ptr2 = _interopRequireDefault(_ptr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ptr2.default;
module.exports = exports['default'];

/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _infiniteloader = __webpack_require__(1170);

var _infiniteloader2 = _interopRequireDefault(_infiniteloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _infiniteloader2.default;
module.exports = exports['default'];

/***/ })

}]);
//# sourceMappingURL=../map/vendors~performanceManagementSelectImg.995cbce6.map