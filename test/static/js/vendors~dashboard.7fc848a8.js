(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons-svg@4.1.0@@ant-design/icons-svg/es/asn/UserOutlined.js
// This icon file is generated automatically.
var UserOutlined_UserOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, "name": "user", "theme": "outlined" };
/* harmony default export */ var asn_UserOutlined = (UserOutlined_UserOutlined);

// EXTERNAL MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/components/AntdIcon.js + 14 modules
var AntdIcon = __webpack_require__(867);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/icons/UserOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_UserOutlined_UserOutlined = function UserOutlined(props, ref) {
  return _react_16_13_1_react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_UserOutlined
  }));
};

icons_UserOutlined_UserOutlined.displayName = 'UserOutlined';
/* harmony default export */ var icons_UserOutlined = __webpack_exports__["a"] = (_react_16_13_1_react["forwardRef"](icons_UserOutlined_UserOutlined));

/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(872);

__webpack_require__(1011);

__webpack_require__(1012);

/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(1013);

/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Item = undefined;

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

var _getDataAttr = __webpack_require__(887);

var _getDataAttr2 = _interopRequireDefault(_getDataAttr);

var _tabs = __webpack_require__(873);

var _tabs2 = _interopRequireDefault(_tabs);

var _Tab = __webpack_require__(1018);

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Item = exports.Item = function (_React$Component) {
    (0, _inherits3['default'])(Item, _React$Component);

    function Item() {
        (0, _classCallCheck3['default'])(this, Item);
        return (0, _possibleConstructorReturn3['default'])(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Item, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style;

            return React.createElement(
                'div',
                { className: prefixCls, style: style },
                this.props.children
            );
        }
    }]);
    return Item;
}(React.Component);

Item.defaultProps = {
    prefixCls: 'am-tab-bar-item',
    title: ''
};

var AntTabBar = function (_React$Component2) {
    (0, _inherits3['default'])(AntTabBar, _React$Component2);

    function AntTabBar() {
        (0, _classCallCheck3['default'])(this, AntTabBar);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (AntTabBar.__proto__ || Object.getPrototypeOf(AntTabBar)).apply(this, arguments));

        _this2.getTabs = function () {
            var tabs = [];
            React.Children.forEach(_this2.props.children, function (c) {
                if (c) {
                    tabs.push((0, _extends3['default'])({}, c.props));
                }
            });
            return tabs;
        };
        _this2.renderTabBar = function () {
            var _this2$props = _this2.props,
                barTintColor = _this2$props.barTintColor,
                prefixCls = _this2$props.prefixCls,
                tintColor = _this2$props.tintColor,
                unselectedTintColor = _this2$props.unselectedTintColor,
                hidden = _this2$props.hidden,
                tabBarPosition = _this2$props.tabBarPosition;

            var tabsData = _this2.getTabs();
            var content = Array.isArray(tabsData) ? tabsData.map(function (cProps, index) {
                return React.createElement(_Tab2['default'], { key: index, prefixCls: _this2.props.prefixCls + '-tab', badge: cProps.badge, dot: cProps.dot, selected: cProps.selected, icon: cProps.icon, selectedIcon: cProps.selectedIcon, title: cProps.title, tintColor: tintColor, unselectedTintColor: unselectedTintColor, dataAttrs: (0, _getDataAttr2['default'])(cProps), onClick: function onClick() {
                        return cProps.onPress && cProps.onPress();
                    } });
            }) : null;
            var cls = prefixCls + '-bar';
            if (hidden) {
                cls += ' ' + prefixCls + '-bar-hidden-' + tabBarPosition;
            }
            return React.createElement(
                'div',
                { className: cls, style: { backgroundColor: barTintColor } },
                content
            );
        };
        return _this2;
    }

    (0, _createClass3['default'])(AntTabBar, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                children = _props2.children,
                animated = _props2.animated,
                swipeable = _props2.swipeable,
                noRenderContent = _props2.noRenderContent,
                prerenderingSiblingsNumber = _props2.prerenderingSiblingsNumber,
                tabBarPosition = _props2.tabBarPosition;

            var tabs = this.getTabs();
            var activeIndex = 0;
            if (Array.isArray(tabs)) {
                tabs.forEach(function (tab, index) {
                    if (tab.selected) {
                        activeIndex = index;
                    }
                });
            }
            return React.createElement(
                'div',
                { className: prefixCls },
                React.createElement(
                    _tabs2['default'],
                    { tabs: tabs, renderTabBar: this.renderTabBar, tabBarPosition: tabBarPosition, page: activeIndex < 0 ? undefined : activeIndex, animated: animated, swipeable: swipeable, noRenderContent: noRenderContent, prerenderingSiblingsNumber: prerenderingSiblingsNumber },
                    children
                )
            );
        }
    }]);
    return AntTabBar;
}(React.Component);

AntTabBar.defaultProps = {
    prefixCls: 'am-tab-bar',
    barTintColor: 'white',
    tintColor: '#108ee9',
    hidden: false,
    unselectedTintColor: '#888',
    placeholder: '正在加载',
    animated: false,
    swipeable: false,
    prerenderingSiblingsNumber: 1,
    tabBarPosition: 'bottom'
};
AntTabBar.Item = Item;
exports['default'] = AntTabBar;

/***/ }),

/***/ 1018:
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

var _badge = __webpack_require__(1019);

var _badge2 = _interopRequireDefault(_badge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tab = function (_React$PureComponent) {
    (0, _inherits3['default'])(Tab, _React$PureComponent);

    function Tab() {
        (0, _classCallCheck3['default'])(this, Tab);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));

        _this.renderIcon = function () {
            var _this$props = _this.props,
                dot = _this$props.dot,
                badge = _this$props.badge,
                selected = _this$props.selected,
                selectedIcon = _this$props.selectedIcon,
                icon = _this$props.icon,
                title = _this$props.title,
                prefixCls = _this$props.prefixCls;

            var iconRes = selected ? selectedIcon : icon;
            var iconDom = React.isValidElement(iconRes) ? iconRes : React.createElement('img', { className: prefixCls + '-image', src: iconRes ? iconRes.uri : iconRes, alt: title });
            if (badge) {
                return React.createElement(
                    _badge2['default'],
                    { text: badge, className: prefixCls + '-badge tab-badge' },
                    ' ',
                    iconDom,
                    ' '
                );
            }
            if (dot) {
                return React.createElement(
                    _badge2['default'],
                    { dot: true, className: prefixCls + '-badge tab-dot' },
                    iconDom
                );
            }
            return iconDom;
        };
        _this.onClick = function () {
            var onClick = _this.props.onClick;
            if (onClick) {
                onClick();
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Tab, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                prefixCls = _props.prefixCls,
                selected = _props.selected,
                unselectedTintColor = _props.unselectedTintColor,
                tintColor = _props.tintColor;

            var iconColor = selected ? tintColor : unselectedTintColor;
            return React.createElement(
                'div',
                (0, _extends3['default'])({}, this.props.dataAttrs, { onClick: this.onClick, className: '' + prefixCls }),
                React.createElement(
                    'div',
                    { className: prefixCls + '-icon', style: { color: iconColor } },
                    this.renderIcon()
                ),
                React.createElement(
                    'p',
                    { className: prefixCls + '-title', style: { color: selected ? tintColor : unselectedTintColor } },
                    title
                )
            );
        }
    }]);
    return Tab;
}(React.PureComponent);

exports['default'] = Tab;
module.exports = exports['default'];

/***/ }),

/***/ 1019:
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

var _classnames3 = __webpack_require__(97);

var _classnames4 = _interopRequireDefault(_classnames3);

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

var Badge = function (_React$Component) {
    (0, _inherits3['default'])(Badge, _React$Component);

    function Badge() {
        (0, _classCallCheck3['default'])(this, Badge);
        return (0, _possibleConstructorReturn3['default'])(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Badge, [{
        key: 'render',
        value: function render() {
            var _classnames, _classnames2;

            // tslint:disable:prefer-const
            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                children = _a.children,
                text = _a.text,
                size = _a.size,
                overflowCount = _a.overflowCount,
                dot = _a.dot,
                corner = _a.corner,
                hot = _a.hot,
                restProps = __rest(_a, ["className", "prefixCls", "children", "text", "size", "overflowCount", "dot", "corner", "hot"]);
            overflowCount = overflowCount;
            text = typeof text === 'number' && text > overflowCount ? overflowCount + '+' : text;
            // dot mode don't need text
            if (dot) {
                text = '';
            }
            var scrollNumberCls = (0, _classnames4['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-dot', dot), (0, _defineProperty3['default'])(_classnames, prefixCls + '-dot-large', dot && size === 'large'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-text', !dot && !corner), (0, _defineProperty3['default'])(_classnames, prefixCls + '-corner', corner), (0, _defineProperty3['default'])(_classnames, prefixCls + '-corner-large', corner && size === 'large'), _classnames));
            var badgeCls = (0, _classnames4['default'])(prefixCls, className, (_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-not-a-wrapper', !children), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-corner-wrapper', corner), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-hot', !!hot), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-corner-wrapper-large', corner && size === 'large'), _classnames2));
            return React.createElement(
                'span',
                { className: badgeCls },
                children,
                (text || dot) &&
                // tslint:disable-next-line:jsx-no-multiline-js
                React.createElement(
                    'sup',
                    (0, _extends3['default'])({ className: scrollNumberCls }, restProps),
                    text
                )
            );
        }
    }]);
    return Badge;
}(React.Component);

exports['default'] = Badge;

Badge.defaultProps = {
    prefixCls: 'am-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false
};
module.exports = exports['default'];

/***/ }),

/***/ 1020:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(902);

__webpack_require__(972);

__webpack_require__(1022);

/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = __webpack_require__(97);

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(852);

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _carousel = __webpack_require__(973);

var _carousel2 = _interopRequireDefault(_carousel);

var _flex = __webpack_require__(904);

var _flex2 = _interopRequireDefault(_flex);

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

var Grid = function (_React$Component) {
    (0, _inherits3['default'])(Grid, _React$Component);

    function Grid() {
        (0, _classCallCheck3['default'])(this, Grid);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));

        _this.state = {
            initialSlideWidth: 0
        };
        _this.renderCarousel = function (rowsArr, pageCount, rowCount) {
            var prefixCls = _this.props.prefixCls;

            var carouselMaxRow = _this.props.carouselMaxRow;
            var pagesArr = [];
            for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
                var pageRows = [];
                for (var ii = 0; ii < carouselMaxRow; ii++) {
                    var rowIndex = pageIndex * carouselMaxRow + ii;
                    if (rowIndex < rowCount) {
                        pageRows.push(rowsArr[rowIndex]);
                    } else {
                        // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
                        pageRows.push(React.createElement('div', { key: 'gridline-' + rowIndex }));
                    }
                }
                pagesArr.push(React.createElement(
                    'div',
                    { key: 'pageitem-' + pageIndex, className: prefixCls + '-carousel-page' },
                    pageRows
                ));
            }
            return pagesArr;
        };
        _this.renderItem = function (dataItem, index, columnNum, renderItem) {
            var prefixCls = _this.props.prefixCls;

            var itemEl = null;
            if (renderItem) {
                itemEl = renderItem(dataItem, index);
            } else {
                if (dataItem) {
                    var icon = dataItem.icon,
                        text = dataItem.text;

                    itemEl = React.createElement(
                        'div',
                        { className: prefixCls + '-item-inner-content column-num-' + columnNum },
                        React.isValidElement(icon) ? icon : React.createElement('img', { className: prefixCls + '-icon', src: icon }),
                        React.createElement(
                            'div',
                            { className: prefixCls + '-text' },
                            text
                        )
                    );
                }
            }
            return React.createElement(
                'div',
                { className: prefixCls + '-item-content' },
                itemEl
            );
        };
        _this.getRows = function (rowCount, dataLength) {
            // tslint:disable:prefer-const
            var _this$props = _this.props,
                columnNum = _this$props.columnNum,
                data = _this$props.data,
                renderItem = _this$props.renderItem,
                prefixCls = _this$props.prefixCls,
                _onClick = _this$props.onClick,
                activeStyle = _this$props.activeStyle,
                activeClassName = _this$props.activeClassName,
                itemStyle = _this$props.itemStyle;

            var rowsArr = [];
            columnNum = columnNum;
            var rowWidth = 100 / columnNum + '%';
            var colStyle = (0, _extends3['default'])({ width: rowWidth }, itemStyle);
            for (var i = 0; i < rowCount; i++) {
                var rowArr = [];

                var _loop = function _loop(j) {
                    var dataIndex = i * columnNum + j;
                    var itemEl = void 0;
                    if (dataIndex < dataLength) {
                        var el = data && data[dataIndex];
                        itemEl = React.createElement(
                            _rmcFeedback2['default'],
                            { key: 'griditem-' + dataIndex, activeClassName: activeClassName ? activeClassName : prefixCls + '-item-active', activeStyle: activeStyle },
                            React.createElement(
                                _flex2['default'].Item,
                                { className: prefixCls + '-item', onClick: function onClick() {
                                        return _onClick && _onClick(el, dataIndex);
                                    }, style: colStyle },
                                _this.renderItem(el, dataIndex, columnNum, renderItem)
                            )
                        );
                    } else {
                        itemEl = React.createElement(_flex2['default'].Item, { key: 'griditem-' + dataIndex, className: prefixCls + '-item ' + prefixCls + '-null-item', style: colStyle });
                    }
                    rowArr.push(itemEl);
                };

                for (var j = 0; j < columnNum; j++) {
                    _loop(j);
                }
                rowsArr.push(React.createElement(
                    _flex2['default'],
                    { justify: 'center', align: 'stretch', key: 'gridline-' + i },
                    rowArr
                ));
            }
            return rowsArr;
        };
        return _this;
    }

    (0, _createClass3['default'])(Grid, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                initialSlideWidth: document.documentElement.clientWidth
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                data = _a.data,
                hasLine = _a.hasLine,
                isCarousel = _a.isCarousel,
                square = _a.square,
                activeStyle = _a.activeStyle,
                activeClassName = _a.activeClassName,
                restProps = __rest(_a, ["prefixCls", "className", "data", "hasLine", "isCarousel", "square", "activeStyle", "activeClassName"]);
            var columnNum = restProps.columnNum,
                carouselMaxRow = restProps.carouselMaxRow,
                onClick = restProps.onClick,
                renderItem = restProps.renderItem,
                restPropsForCarousel = __rest(restProps, ["columnNum", "carouselMaxRow", "onClick", "renderItem"]);

            var initialSlideWidth = this.state.initialSlideWidth;

            columnNum = columnNum;
            carouselMaxRow = carouselMaxRow;
            var dataLength = data && data.length || 0;
            var rowCount = Math.ceil(dataLength / columnNum);
            var rowsArr = void 0;
            var renderEl = void 0;
            if (isCarousel) {
                if (initialSlideWidth < 0) {
                    // carousel  server render. because carousel dependes on document
                    return null;
                }
                if (rowCount % carouselMaxRow !== 0) {
                    rowCount = rowCount + carouselMaxRow - rowCount % carouselMaxRow;
                }
                var pageCount = Math.ceil(rowCount / carouselMaxRow);
                rowsArr = this.getRows(rowCount, dataLength);
                var carouselProps = {};
                if (pageCount <= 1) {
                    carouselProps = {
                        dots: false,
                        dragging: false,
                        swiping: false
                    };
                }
                renderEl = React.createElement(
                    _carousel2['default'],
                    (0, _extends3['default'])({ initialSlideWidth: initialSlideWidth }, restPropsForCarousel, carouselProps),
                    this.renderCarousel(rowsArr, pageCount, rowCount)
                );
            } else {
                rowsArr = this.getRows(rowCount, dataLength);
                renderEl = rowsArr;
            }
            var cls = (0, _classnames3['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-square', square), (0, _defineProperty3['default'])(_classnames, prefixCls + '-line', hasLine), (0, _defineProperty3['default'])(_classnames, prefixCls + '-carousel', isCarousel), _classnames));
            return React.createElement(
                'div',
                { className: cls },
                renderEl
            );
        }
    }]);
    return Grid;
}(React.Component);

exports['default'] = Grid;

Grid.defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    prefixCls: 'am-grid',
    square: true,
    itemStyle: {}
};
module.exports = exports['default'];

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ 1257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ carousel; });

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

// CONCATENATED MODULE: ./node_modules/_rmc-nuka-carousel@3.0.1@rmc-nuka-carousel/es/decorators.js







var DefaultDecorators = [{
    component: function (_React$Component) {
        inherits_default()(component, _React$Component);

        function component() {
            classCallCheck_default()(this, component);

            var _this = possibleConstructorReturn_default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));

            _this.handleClick = function (e) {
                e.preventDefault();
                _this.props.previousSlide();
            };
            return _this;
        }

        createClass_default()(component, [{
            key: 'render',
            value: function render() {
                return _react_16_13_1_react_default.a.createElement(
                    'button',
                    { style: this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround), onClick: this.handleClick },
                    'PREV'
                );
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(disabled) {
                return {
                    border: 0,
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    padding: 10,
                    outline: 0,
                    opacity: disabled ? 0.3 : 1,
                    cursor: 'pointer'
                };
            }
        }]);

        return component;
    }(_react_16_13_1_react_default.a.Component),
    position: 'CenterLeft'
}, {
    component: function (_React$Component2) {
        inherits_default()(component, _React$Component2);

        function component() {
            classCallCheck_default()(this, component);

            var _this2 = possibleConstructorReturn_default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));

            _this2.handleClick = function (e) {
                e.preventDefault();
                if (_this2.props.nextSlide) {
                    _this2.props.nextSlide();
                }
            };
            return _this2;
        }

        createClass_default()(component, [{
            key: 'render',
            value: function render() {
                return _react_16_13_1_react_default.a.createElement(
                    'button',
                    { style: this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround), onClick: this.handleClick },
                    'NEXT'
                );
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(disabled) {
                return {
                    border: 0,
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    padding: 10,
                    outline: 0,
                    opacity: disabled ? 0.3 : 1,
                    cursor: 'pointer'
                };
            }
        }]);

        return component;
    }(_react_16_13_1_react_default.a.Component),
    position: 'CenterRight'
}, {
    component: function (_React$Component3) {
        inherits_default()(component, _React$Component3);

        function component() {
            classCallCheck_default()(this, component);

            return possibleConstructorReturn_default()(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));
        }

        createClass_default()(component, [{
            key: 'render',
            value: function render() {
                var _this4 = this;

                var indexes = this.getIndexes(this.props.slideCount, this.props.slidesToScroll);
                return _react_16_13_1_react_default.a.createElement(
                    'ul',
                    { style: this.getListStyles() },
                    indexes.map(function (index) {
                        return _react_16_13_1_react_default.a.createElement(
                            'li',
                            { style: _this4.getListItemStyles(), key: index },
                            _react_16_13_1_react_default.a.createElement(
                                'button',
                                { style: _this4.getButtonStyles(_this4.props.currentSlide === index), onClick: _this4.props.goToSlide && _this4.props.goToSlide.bind(null, index) },
                                '\u2022'
                            )
                        );
                    })
                );
            }
        }, {
            key: 'getIndexes',
            value: function getIndexes(count, inc) {
                var arr = [];
                for (var i = 0; i < count; i += inc) {
                    arr.push(i);
                }
                return arr;
            }
        }, {
            key: 'getListStyles',
            value: function getListStyles() {
                return {
                    position: 'relative',
                    margin: 0,
                    top: -10,
                    padding: 0
                };
            }
        }, {
            key: 'getListItemStyles',
            value: function getListItemStyles() {
                return {
                    listStyleType: 'none',
                    display: 'inline-block'
                };
            }
        }, {
            key: 'getButtonStyles',
            value: function getButtonStyles(active) {
                return {
                    border: 0,
                    background: 'transparent',
                    color: 'black',
                    cursor: 'pointer',
                    padding: 10,
                    outline: 0,
                    fontSize: 24,
                    opacity: active ? 1 : 0.5
                };
            }
        }]);

        return component;
    }(_react_16_13_1_react_default.a.Component),
    position: 'BottomCenter'
}];
/* harmony default export */ var decorators = (DefaultDecorators);
// EXTERNAL MODULE: ./node_modules/_exenv@1.2.2@exenv/index.js
var _exenv_1_2_2_exenv = __webpack_require__(1024);
var _exenv_1_2_2_exenv_default = /*#__PURE__*/__webpack_require__.n(_exenv_1_2_2_exenv);

// EXTERNAL MODULE: ./node_modules/_raf@3.4.1@raf/index.js
var _raf_3_4_1_raf = __webpack_require__(935);
var _raf_3_4_1_raf_default = /*#__PURE__*/__webpack_require__.n(_raf_3_4_1_raf);

// CONCATENATED MODULE: ./node_modules/_rmc-nuka-carousel@3.0.1@rmc-nuka-carousel/es/carousel.js











// from https://github.com/chenglou/tween-functions
function easeOutCirc(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}
function linear(t, b, _c, d) {
    var c = _c - b;
    return c * t / d + b;
}
var DEFAULT_STACK_BEHAVIOR = 'ADDITIVE';
var DEFAULT_DURATION = 300;
var DEFAULT_DELAY = 0;
var stackBehavior = {
    ADDITIVE: 'ADDITIVE',
    DESTRUCTIVE: 'DESTRUCTIVE'
};
var addEvent = function addEvent(elem, type, eventHandle) {
    if (elem === null || typeof elem === 'undefined') {
        return;
    }
    if (elem.addEventListener) {
        elem.addEventListener(type, eventHandle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, eventHandle);
    } else {
        elem['on' + type] = eventHandle;
    }
};
var removeEvent = function removeEvent(elem, type, eventHandle) {
    if (elem === null || typeof elem === 'undefined') {
        return;
    }
    if (elem.removeEventListener) {
        elem.removeEventListener(type, eventHandle, false);
    } else if (elem.detachEvent) {
        elem.detachEvent('on' + type, eventHandle);
    } else {
        elem['on' + type] = null;
    }
};

var carousel_Carousel = function (_React$Component) {
    inherits_default()(Carousel, _React$Component);

    function Carousel(props) {
        classCallCheck_default()(this, Carousel);

        var _this = possibleConstructorReturn_default()(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this._rafCb = function () {
            var state = _this.state;
            if (state.tweenQueue.length === 0) {
                return;
            }
            var now = Date.now();
            var newTweenQueue = [];
            for (var i = 0; i < state.tweenQueue.length; i++) {
                var item = state.tweenQueue[i];
                var initTime = item.initTime,
                    config = item.config;

                if (now - initTime < config.duration) {
                    newTweenQueue.push(item);
                } else {
                    if (config.onEnd) {
                        config.onEnd();
                    }
                }
            }
            // onEnd might trigger a parent callback that removes this component
            // -1 means we've canceled it in componentWillUnmount
            if (_this._rafID === -1) {
                return;
            }
            _this.setState({
                tweenQueue: newTweenQueue
            });
            _this._rafID = _raf_3_4_1_raf_default()(_this._rafCb);
        };
        _this.handleClick = function (e) {
            if (_this.clickSafe === true) {
                e.preventDefault();
                e.stopPropagation();
                if (e.nativeEvent) {
                    e.nativeEvent.stopPropagation();
                }
            }
        };
        _this.autoplayIterator = function () {
            if (_this.props.wrapAround) {
                return _this.nextSlide();
            }
            if (_this.state.currentSlide !== _this.state.slideCount - _this.state.slidesToShow) {
                _this.nextSlide();
            } else {
                _this.stopAutoplay();
            }
        };
        // Action Methods
        _this.goToSlide = function (index) {
            var _this$props = _this.props,
                beforeSlide = _this$props.beforeSlide,
                afterSlide = _this$props.afterSlide;

            if (index >= _react_16_13_1_react_default.a.Children.count(_this.props.children) || index < 0) {
                if (!_this.props.wrapAround) {
                    return;
                }
                ;
                if (index >= _react_16_13_1_react_default.a.Children.count(_this.props.children)) {
                    beforeSlide(_this.state.currentSlide, 0);
                    return _this.setState({
                        currentSlide: 0
                    }, function () {
                        _this.animateSlide(null, null, _this.getTargetLeft(null, index), function () {
                            _this.animateSlide(null, 0.01);
                            afterSlide(0);
                            _this.resetAutoplay();
                            _this.setExternalData();
                        });
                    });
                } else {
                    var endSlide = _react_16_13_1_react_default.a.Children.count(_this.props.children) - _this.state.slidesToScroll;
                    beforeSlide(_this.state.currentSlide, endSlide);
                    return _this.setState({
                        currentSlide: endSlide
                    }, function () {
                        _this.animateSlide(null, null, _this.getTargetLeft(null, index), function () {
                            _this.animateSlide(null, 0.01);
                            afterSlide(endSlide);
                            _this.resetAutoplay();
                            _this.setExternalData();
                        });
                    });
                }
            }
            beforeSlide(_this.state.currentSlide, index);
            _this.setState({
                currentSlide: index
            }, function () {
                _this.animateSlide();
                _this.props.afterSlide(index);
                _this.resetAutoplay();
                _this.setExternalData();
            });
        };
        _this.nextSlide = function () {
            var childrenCount = _react_16_13_1_react_default.a.Children.count(_this.props.children);
            var slidesToShow = _this.props.slidesToShow;
            if (_this.props.slidesToScroll === 'auto') {
                slidesToShow = _this.state.slidesToScroll;
            }
            if (_this.state.currentSlide >= childrenCount - slidesToShow && !_this.props.wrapAround) {
                return;
            }
            if (_this.props.wrapAround) {
                _this.goToSlide(_this.state.currentSlide + _this.state.slidesToScroll);
            } else {
                if (_this.props.slideWidth !== 1) {
                    return _this.goToSlide(_this.state.currentSlide + _this.state.slidesToScroll);
                }
                _this.goToSlide(Math.min(_this.state.currentSlide + _this.state.slidesToScroll, childrenCount - slidesToShow));
            }
        };
        _this.previousSlide = function () {
            if (_this.state.currentSlide <= 0 && !_this.props.wrapAround) {
                return;
            }
            if (_this.props.wrapAround) {
                _this.goToSlide(_this.state.currentSlide - _this.state.slidesToScroll);
            } else {
                _this.goToSlide(Math.max(0, _this.state.currentSlide - _this.state.slidesToScroll));
            }
        };
        _this.onResize = function () {
            _this.setDimensions();
        };
        _this.onReadyStateChange = function () {
            _this.setDimensions();
        };
        _this.state = {
            currentSlide: _this.props.slideIndex,
            dragging: false,
            frameWidth: 0,
            left: 0,
            slideCount: 0,
            slidesToScroll: _this.props.slidesToScroll,
            slideWidth: 0,
            top: 0,
            tweenQueue: []
        };
        _this.touchObject = {};
        _this.clickSafe = true;
        return _this;
    }

    createClass_default()(Carousel, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setInitialDimensions();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setDimensions();
            this.bindEvents();
            this.setExternalData();
            if (this.props.autoplay) {
                this.startAutoplay();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                slideCount: nextProps.children.length
            });
            this.setDimensions(nextProps);
            if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide) {
                this.goToSlide(nextProps.slideIndex);
            }
            if (this.props.autoplay !== nextProps.autoplay) {
                if (nextProps.autoplay) {
                    this.startAutoplay();
                } else {
                    this.stopAutoplay();
                }
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unbindEvents();
            this.stopAutoplay();
            _raf_3_4_1_raf_default.a.cancel(this._rafID);
            this._rafID = -1;
        }
        // react-tween-state

    }, {
        key: 'tweenState',
        value: function tweenState(path, _ref) {
            var _this2 = this;

            var easing = _ref.easing,
                duration = _ref.duration,
                delay = _ref.delay,
                beginValue = _ref.beginValue,
                endValue = _ref.endValue,
                onEnd = _ref.onEnd,
                configSB = _ref.stackBehavior;

            this.setState(function (state) {
                var cursor = state;
                var stateName = void 0;
                // see comment below on pash hash
                var pathHash = void 0;
                if (typeof path === 'string') {
                    stateName = path;
                    pathHash = path;
                } else {
                    for (var i = 0; i < path.length - 1; i++) {
                        cursor = cursor[path[i]];
                    }
                    stateName = path[path.length - 1];
                    pathHash = path.join('|');
                }
                // see the reasoning for these defaults at the top of file
                var newConfig = {
                    easing: easing,
                    duration: duration == null ? DEFAULT_DURATION : duration,
                    delay: delay == null ? DEFAULT_DELAY : delay,
                    beginValue: beginValue == null ? cursor[stateName] : beginValue,
                    endValue: endValue,
                    onEnd: onEnd,
                    stackBehavior: configSB || DEFAULT_STACK_BEHAVIOR
                };
                var newTweenQueue = state.tweenQueue;
                if (newConfig.stackBehavior === stackBehavior.DESTRUCTIVE) {
                    newTweenQueue = state.tweenQueue.filter(function (item) {
                        return item.pathHash !== pathHash;
                    });
                }
                // we store path hash, so that during value retrieval we can use hash
                // comparison to find the path. See the kind of shitty thing you have to
                // do when you don't have value comparison for collections?
                newTweenQueue.push({
                    pathHash: pathHash,
                    config: newConfig,
                    initTime: Date.now() + newConfig.delay
                });
                // sorry for mutating. For perf reasons we don't want to deep clone.
                // guys, can we please all start using persistent collections so that
                // we can stop worrying about nonesense like this
                cursor[stateName] = newConfig.endValue;
                if (newTweenQueue.length === 1) {
                    _this2._rafID = _raf_3_4_1_raf_default()(_this2._rafCb);
                }
                // this will also include the above mutated update
                return { tweenQueue: newTweenQueue };
            });
        }
    }, {
        key: 'getTweeningValue',
        value: function getTweeningValue(path) {
            var state = this.state;
            var tweeningValue = void 0;
            var pathHash = void 0;
            if (typeof path === 'string') {
                tweeningValue = state[path];
                pathHash = path;
            } else {
                tweeningValue = state;
                for (var i = 0; i < path.length; i++) {
                    tweeningValue = tweeningValue[path[i]];
                }
                pathHash = path.join('|');
            }
            var now = Date.now();
            for (var _i = 0; _i < state.tweenQueue.length; _i++) {
                var _state$tweenQueue$_i = state.tweenQueue[_i],
                    itemPathHash = _state$tweenQueue$_i.pathHash,
                    initTime = _state$tweenQueue$_i.initTime,
                    config = _state$tweenQueue$_i.config;

                if (itemPathHash !== pathHash) {
                    continue;
                }
                var progressTime = now - initTime > config.duration ? config.duration : Math.max(0, now - initTime);
                // `now - initTime` can be negative if initTime is scheduled in the
                // future by a delay. In this case we take 0
                // if duration is 0, consider that as jumping to endValue directly. This
                // is needed because the easing functino might have undefined behavior for
                // duration = 0
                var easeValue = config.duration === 0 ? config.endValue : config.easing(progressTime, config.beginValue, config.endValue, config.duration);
                var contrib = easeValue - config.endValue;
                tweeningValue += contrib;
            }
            return tweeningValue;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var children = _react_16_13_1_react_default.a.Children.count(this.props.children) > 1 ? this.formatChildren(this.props.children) : this.props.children;
            return _react_16_13_1_react_default.a.createElement(
                'div',
                { className: ['slider', this.props.className || ''].join(' '), ref: 'slider', style: extends_default()({}, this.getSliderStyles(), this.props.style) },
                _react_16_13_1_react_default.a.createElement(
                    'div',
                    extends_default()({ className: 'slider-frame', ref: 'frame', style: this.getFrameStyles() }, this.getTouchEvents(), this.getMouseEvents(), { onClick: this.handleClick }),
                    _react_16_13_1_react_default.a.createElement(
                        'ul',
                        { className: 'slider-list', ref: 'list', style: this.getListStyles() },
                        children
                    )
                ),
                this.props.decorators ? this.props.decorators.map(function (Decorator, index) {
                    return _react_16_13_1_react_default.a.createElement(
                        'div',
                        { style: extends_default()({}, _this3.getDecoratorStyles(Decorator.position), Decorator.style || {}), className: 'slider-decorator-' + index, key: index },
                        _react_16_13_1_react_default.a.createElement(Decorator.component, { currentSlide: _this3.state.currentSlide, slideCount: _this3.state.slideCount, frameWidth: _this3.state.frameWidth, slideWidth: _this3.state.slideWidth, slidesToScroll: _this3.state.slidesToScroll, cellSpacing: _this3.props.cellSpacing, slidesToShow: _this3.props.slidesToShow, wrapAround: _this3.props.wrapAround, nextSlide: _this3.nextSlide, previousSlide: _this3.previousSlide, goToSlide: _this3.goToSlide })
                    );
                }) : null,
                _react_16_13_1_react_default.a.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: this.getStyleTagStyles() } })
            );
        }
        // Touch Events

    }, {
        key: 'getTouchEvents',
        value: function getTouchEvents() {
            var self = this;
            if (this.props.swiping === false) {
                return null;
            }
            return {
                onTouchStart: function onTouchStart(e) {
                    self.touchObject = {
                        startX: e.touches[0].pageX,
                        startY: e.touches[0].pageY
                    };
                    self.handleMouseOver();
                },
                onTouchMove: function onTouchMove(e) {
                    var direction = self.swipeDirection(self.touchObject.startX, e.touches[0].pageX, self.touchObject.startY, e.touches[0].pageY);
                    if (direction !== 0) {
                        e.preventDefault();
                    }
                    var length = self.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - self.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2)));
                    self.touchObject = {
                        startX: self.touchObject.startX,
                        startY: self.touchObject.startY,
                        endX: e.touches[0].pageX,
                        endY: e.touches[0].pageY,
                        length: length,
                        direction: direction
                    };
                    self.setState({
                        left: self.props.vertical ? 0 : self.getTargetLeft(self.touchObject.length * self.touchObject.direction),
                        top: self.props.vertical ? self.getTargetLeft(self.touchObject.length * self.touchObject.direction) : 0
                    });
                },
                onTouchEnd: function onTouchEnd(e) {
                    self.handleSwipe(e);
                    self.handleMouseOut();
                },
                onTouchCancel: function onTouchCancel(e) {
                    self.handleSwipe(e);
                }
            };
        }
    }, {
        key: 'getMouseEvents',
        value: function getMouseEvents() {
            var self = this;
            if (this.props.dragging === false) {
                return null;
            }
            return {
                onMouseOver: function onMouseOver() {
                    self.handleMouseOver();
                },
                onMouseOut: function onMouseOut() {
                    self.handleMouseOut();
                },
                onMouseDown: function onMouseDown(e) {
                    self.touchObject = {
                        startX: e.clientX,
                        startY: e.clientY
                    };
                    self.setState({
                        dragging: true
                    });
                },
                onMouseMove: function onMouseMove(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    var direction = self.swipeDirection(self.touchObject.startX, e.clientX, self.touchObject.startY, e.clientY);
                    if (direction !== 0) {
                        e.preventDefault();
                    }
                    var length = self.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - self.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.clientX - self.touchObject.startX, 2)));
                    self.touchObject = {
                        startX: self.touchObject.startX,
                        startY: self.touchObject.startY,
                        endX: e.clientX,
                        endY: e.clientY,
                        length: length,
                        direction: direction
                    };
                    self.setState({
                        left: self.props.vertical ? 0 : self.getTargetLeft(self.touchObject.length * self.touchObject.direction),
                        top: self.props.vertical ? self.getTargetLeft(self.touchObject.length * self.touchObject.direction) : 0
                    });
                },
                onMouseUp: function onMouseUp(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    self.handleSwipe(e);
                },
                onMouseLeave: function onMouseLeave(e) {
                    if (!self.state.dragging) {
                        return;
                    }
                    self.handleSwipe(e);
                }
            };
        }
    }, {
        key: 'handleMouseOver',
        value: function handleMouseOver() {
            if (this.props.autoplay) {
                this.autoplayPaused = true;
                this.stopAutoplay();
            }
        }
    }, {
        key: 'handleMouseOut',
        value: function handleMouseOut() {
            if (this.props.autoplay && this.autoplayPaused) {
                this.startAutoplay();
                this.autoplayPaused = null;
            }
        }
    }, {
        key: 'handleSwipe',
        value: function handleSwipe(_) {
            if (typeof this.touchObject.length !== 'undefined' && this.touchObject.length > 44) {
                this.clickSafe = true;
            } else {
                this.clickSafe = false;
            }
            var _props = this.props,
                slidesToShow = _props.slidesToShow,
                slidesToScroll = _props.slidesToScroll,
                swipeSpeed = _props.swipeSpeed;
            // var slidesToShow = this.props.slidesToShow;

            if (slidesToScroll === 'auto') {
                slidesToShow = this.state.slidesToScroll;
            }
            if (_react_16_13_1_react_default.a.Children.count(this.props.children) > 1 && this.touchObject.length > this.state.slideWidth / slidesToShow / swipeSpeed) {
                if (this.touchObject.direction === 1) {
                    if (this.state.currentSlide >= _react_16_13_1_react_default.a.Children.count(this.props.children) - slidesToShow && !this.props.wrapAround) {
                        this.animateSlide(this.props.edgeEasing);
                    } else {
                        this.nextSlide();
                    }
                } else if (this.touchObject.direction === -1) {
                    if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
                        this.animateSlide(this.props.edgeEasing);
                    } else {
                        this.previousSlide();
                    }
                }
            } else {
                this.goToSlide(this.state.currentSlide);
            }
            this.touchObject = {};
            this.setState({
                dragging: false
            });
        }
    }, {
        key: 'swipeDirection',
        value: function swipeDirection(x1, x2, y1, y2) {
            var xDist = x1 - x2;
            var yDist = y1 - y2;
            var r = Math.atan2(yDist, xDist);
            var swipeAngle = Math.round(r * 180 / Math.PI);
            if (swipeAngle < 0) {
                swipeAngle = 360 - Math.abs(swipeAngle);
            }
            if (swipeAngle <= 45 && swipeAngle >= 0) {
                return 1;
            }
            if (swipeAngle <= 360 && swipeAngle >= 315) {
                return 1;
            }
            if (swipeAngle >= 135 && swipeAngle <= 225) {
                return -1;
            }
            if (this.props.vertical === true) {
                if (swipeAngle >= 35 && swipeAngle <= 135) {
                    return 1;
                } else {
                    return -1;
                }
            }
            return 0;
        }
    }, {
        key: 'startAutoplay',
        value: function startAutoplay() {
            if (_react_16_13_1_react_default.a.Children.count(this.props.children) <= 1) {
                return;
            }
            this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
        }
    }, {
        key: 'resetAutoplay',
        value: function resetAutoplay() {
            if (this.props.resetAutoplay && this.props.autoplay && !this.autoplayPaused) {
                this.stopAutoplay();
                this.startAutoplay();
            }
        }
    }, {
        key: 'stopAutoplay',
        value: function stopAutoplay() {
            if (this.autoplayID) {
                clearInterval(this.autoplayID);
            }
        }
        // Animation

    }, {
        key: 'animateSlide',
        value: function animateSlide(easing, duration, endValue, callback) {
            this.tweenState(this.props.vertical ? 'top' : 'left', {
                easing: easing || this.props.easing,
                duration: duration || this.props.speed,
                endValue: endValue || this.getTargetLeft(),
                delay: null,
                beginValue: null,
                onEnd: callback || null,
                stackBehavior: stackBehavior
            });
        }
    }, {
        key: 'getTargetLeft',
        value: function getTargetLeft(touchOffset, slide) {
            var offset = void 0;
            var target = slide || this.state.currentSlide;
            var cellSpacing = this.props.cellSpacing;
            switch (this.props.cellAlign) {
                case 'left':
                    {
                        offset = 0;
                        offset -= cellSpacing * target;
                        break;
                    }
                case 'center':
                    {
                        offset = (this.state.frameWidth - this.state.slideWidth) / 2;
                        offset -= cellSpacing * target;
                        break;
                    }
                case 'right':
                    {
                        offset = this.state.frameWidth - this.state.slideWidth;
                        offset -= cellSpacing * target;
                        break;
                    }
                default:
                    break;
            }
            var left = this.state.slideWidth * target;
            var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount;
            if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
                left = this.state.slideWidth * this.state.slideCount - this.state.frameWidth;
                offset = 0;
                offset -= cellSpacing * (this.state.slideCount - 1);
            }
            offset -= touchOffset || 0;
            return (left - offset) * -1;
        }
        // Bootstrapping

    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            if (_exenv_1_2_2_exenv_default.a.canUseDOM) {
                addEvent(window, 'resize', this.onResize);
                addEvent(document, 'readystatechange', this.onReadyStateChange);
            }
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            if (_exenv_1_2_2_exenv_default.a.canUseDOM) {
                removeEvent(window, 'resize', this.onResize);
                removeEvent(document, 'readystatechange', this.onReadyStateChange);
            }
        }
    }, {
        key: 'formatChildren',
        value: function formatChildren(children) {
            var _this4 = this;

            var positionValue = this.props.vertical ? this.getTweeningValue('top') : this.getTweeningValue('left');
            return _react_16_13_1_react_default.a.Children.map(children, function (child, index) {
                return _react_16_13_1_react_default.a.createElement(
                    'li',
                    { className: 'slider-slide', style: _this4.getSlideStyles(index, positionValue), key: index },
                    child
                );
            });
        }
    }, {
        key: 'setInitialDimensions',
        value: function setInitialDimensions() {
            var _this5 = this;

            var _props2 = this.props,
                vertical = _props2.vertical,
                initialSlideHeight = _props2.initialSlideHeight,
                initialSlideWidth = _props2.initialSlideWidth,
                slidesToShow = _props2.slidesToShow,
                cellSpacing = _props2.cellSpacing,
                children = _props2.children;

            var slideWidth = vertical ? initialSlideHeight || 0 : initialSlideWidth || 0;
            var slideHeight = initialSlideHeight ? initialSlideHeight * slidesToShow : 0;
            var frameHeight = slideHeight + cellSpacing * (slidesToShow - 1);
            this.setState({
                slideHeight: slideHeight,
                frameWidth: vertical ? frameHeight : '100%',
                slideCount: _react_16_13_1_react_default.a.Children.count(children),
                slideWidth: slideWidth
            }, function () {
                _this5.setLeft();
                _this5.setExternalData();
            });
        }
    }, {
        key: 'setDimensions',
        value: function setDimensions(props) {
            var _this6 = this;

            props = props || this.props;
            var frameWidth = void 0;
            var frameHeight = void 0;
            var slideHeight = void 0;
            var slideWidth = void 0;
            var slidesToScroll = props.slidesToScroll;
            var frame = this.refs.frame;
            var firstSlide = frame.childNodes[0].childNodes[0];
            if (firstSlide) {
                firstSlide.style.height = 'auto';
                slideHeight = this.props.vertical ? firstSlide.offsetHeight * props.slidesToShow : firstSlide.offsetHeight;
            } else {
                slideHeight = 100;
            }
            if (typeof props.slideWidth !== 'number') {
                slideWidth = parseInt(props.slideWidth, 10);
            } else {
                if (props.vertical) {
                    slideWidth = slideHeight / props.slidesToShow * props.slideWidth;
                } else {
                    slideWidth = frame.offsetWidth / props.slidesToShow * props.slideWidth;
                }
            }
            if (!props.vertical) {
                slideWidth -= props.cellSpacing * ((100 - 100 / props.slidesToShow) / 100);
            }
            frameHeight = slideHeight + props.cellSpacing * (props.slidesToShow - 1);
            frameWidth = props.vertical ? frameHeight : frame.offsetWidth;
            if (props.slidesToScroll === 'auto') {
                slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing));
            }
            this.setState({
                slideHeight: slideHeight,
                frameWidth: frameWidth,
                slideWidth: slideWidth,
                slidesToScroll: slidesToScroll,
                left: props.vertical ? 0 : this.getTargetLeft(),
                top: props.vertical ? this.getTargetLeft() : 0
            }, function () {
                _this6.setLeft();
            });
        }
    }, {
        key: 'setLeft',
        value: function setLeft() {
            this.setState({
                left: this.props.vertical ? 0 : this.getTargetLeft(),
                top: this.props.vertical ? this.getTargetLeft() : 0
            });
        }
        // Data

    }, {
        key: 'setExternalData',
        value: function setExternalData() {
            if (this.props.data) {
                this.props.data();
            }
        }
        // Styles

    }, {
        key: 'getListStyles',
        value: function getListStyles() {
            var listWidth = this.state.slideWidth * _react_16_13_1_react_default.a.Children.count(this.props.children);
            var cellSpacing = this.props.cellSpacing;
            var spacingOffset = cellSpacing * _react_16_13_1_react_default.a.Children.count(this.props.children);
            var transform = 'translate3d(' + this.getTweeningValue('left') + 'px, ' + this.getTweeningValue('top') + 'px, 0)';
            return {
                transform: transform,
                WebkitTransform: transform,
                msTransform: 'translate(' + this.getTweeningValue('left') + 'px, ' + this.getTweeningValue('top') + 'px)',
                position: 'relative',
                display: 'block',
                margin: this.props.vertical ? cellSpacing / 2 * -1 + 'px 0px' : '0px ' + cellSpacing / 2 * -1 + 'px',
                padding: 0,
                height: this.props.vertical ? listWidth + spacingOffset : this.state.slideHeight,
                width: this.props.vertical ? 'auto' : listWidth + spacingOffset,
                cursor: this.state.dragging === true ? 'pointer' : 'inherit',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box'
            };
        }
    }, {
        key: 'getFrameStyles',
        value: function getFrameStyles() {
            return {
                position: 'relative',
                display: 'block',
                overflow: this.props.frameOverflow,
                height: this.props.vertical ? this.state.frameWidth || 'initial' : 'auto',
                margin: this.props.framePadding,
                padding: 0,
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                msTransform: 'translate(0, 0)',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box'
            };
        }
    }, {
        key: 'getSlideStyles',
        value: function getSlideStyles(index, positionValue) {
            var targetPosition = this.getSlideTargetPosition(index, positionValue);
            var cellSpacing = this.props.cellSpacing;
            return {
                position: 'absolute',
                left: this.props.vertical ? 0 : targetPosition,
                top: this.props.vertical ? targetPosition : 0,
                display: this.props.vertical ? 'block' : 'inline-block',
                listStyleType: 'none',
                verticalAlign: 'top',
                width: this.props.vertical ? '100%' : this.state.slideWidth,
                height: 'auto',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                marginLeft: this.props.vertical ? 'auto' : cellSpacing / 2,
                marginRight: this.props.vertical ? 'auto' : cellSpacing / 2,
                marginTop: this.props.vertical ? cellSpacing / 2 : 'auto',
                marginBottom: this.props.vertical ? cellSpacing / 2 : 'auto'
            };
        }
    }, {
        key: 'getSlideTargetPosition',
        value: function getSlideTargetPosition(index, positionValue) {
            var slidesToShow = this.state.frameWidth / this.state.slideWidth;
            var targetPosition = (this.state.slideWidth + this.props.cellSpacing) * index;
            var end = (this.state.slideWidth + this.props.cellSpacing) * slidesToShow * -1;
            if (this.props.wrapAround) {
                var slidesBefore = Math.ceil(positionValue / this.state.slideWidth);
                if (this.state.slideCount - slidesBefore <= index) {
                    return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount - index) * -1;
                }
                var slidesAfter = Math.ceil((Math.abs(positionValue) - Math.abs(end)) / this.state.slideWidth);
                if (this.state.slideWidth !== 1) {
                    slidesAfter = Math.ceil((Math.abs(positionValue) - this.state.slideWidth) / this.state.slideWidth);
                }
                if (index <= slidesAfter - 1) {
                    return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount + index);
                }
            }
            return targetPosition;
        }
    }, {
        key: 'getSliderStyles',
        value: function getSliderStyles() {
            return {
                position: 'relative',
                display: 'block',
                width: this.props.width,
                height: 'auto',
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                visibility: this.state.slideWidth ? 'visible' : 'hidden'
            };
        }
    }, {
        key: 'getStyleTagStyles',
        value: function getStyleTagStyles() {
            return '.slider-slide > img {width: 100%; display: block;}';
        }
    }, {
        key: 'getDecoratorStyles',
        value: function getDecoratorStyles(position) {
            switch (position) {
                case 'TopLeft':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: 0
                        };
                    }
                case 'TopCenter':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            WebkitTransform: 'translateX(-50%)',
                            msTransform: 'translateX(-50%)'
                        };
                    }
                case 'TopRight':
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            right: 0
                        };
                    }
                case 'CenterLeft':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            WebkitTransform: 'translateY(-50%)',
                            msTransform: 'translateY(-50%)'
                        };
                    }
                case 'CenterCenter':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                            WebkitTransform: 'translate(-50%, -50%)',
                            msTransform: 'translate(-50%, -50%)'
                        };
                    }
                case 'CenterRight':
                    {
                        return {
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            transform: 'translateY(-50%)',
                            WebkitTransform: 'translateY(-50%)',
                            msTransform: 'translateY(-50%)'
                        };
                    }
                case 'BottomLeft':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            left: 0
                        };
                    }
                case 'BottomCenter':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            textAlign: 'center'
                        };
                    }
                case 'BottomRight':
                    {
                        return {
                            position: 'absolute',
                            bottom: 0,
                            right: 0
                        };
                    }
                default:
                    {
                        return {
                            position: 'absolute',
                            top: 0,
                            left: 0
                        };
                    }
            }
        }
    }]);

    return Carousel;
}(_react_16_13_1_react_default.a.Component);

carousel_Carousel.defaultProps = {
    afterSlide: function afterSlide() {},
    autoplay: false,
    resetAutoplay: true,
    swipeSpeed: 12,
    autoplayInterval: 3000,
    beforeSlide: function beforeSlide() {},
    cellAlign: 'left',
    cellSpacing: 0,
    data: function data() {},
    decorators: decorators,
    dragging: true,
    easing: easeOutCirc,
    edgeEasing: linear,
    framePadding: '0px',
    frameOverflow: 'hidden',
    slideIndex: 0,
    slidesToScroll: 1,
    slidesToShow: 1,
    slideWidth: 1,
    speed: 500,
    swiping: true,
    vertical: false,
    width: '100%',
    wrapAround: false,
    style: {}
};
/* harmony default export */ var carousel = (carousel_Carousel);
// CONCATENATED MODULE: ./node_modules/_rmc-nuka-carousel@3.0.1@rmc-nuka-carousel/es/index.js


/***/ }),

/***/ 1258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons-svg@4.1.0@@ant-design/icons-svg/es/asn/IdcardOutlined.js
// This icon file is generated automatically.
var IdcardOutlined_IdcardOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z" } }] }, "name": "idcard", "theme": "outlined" };
/* harmony default export */ var asn_IdcardOutlined = (IdcardOutlined_IdcardOutlined);

// EXTERNAL MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/components/AntdIcon.js + 14 modules
var AntdIcon = __webpack_require__(867);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/icons/IdcardOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_IdcardOutlined_IdcardOutlined = function IdcardOutlined(props, ref) {
  return _react_16_13_1_react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_IdcardOutlined
  }));
};

icons_IdcardOutlined_IdcardOutlined.displayName = 'IdcardOutlined';
/* harmony default export */ var icons_IdcardOutlined = __webpack_exports__["a"] = (_react_16_13_1_react["forwardRef"](icons_IdcardOutlined_IdcardOutlined));

/***/ }),

/***/ 1259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons-svg@4.1.0@@ant-design/icons-svg/es/asn/UnlockOutlined.js
// This icon file is generated automatically.
var UnlockOutlined_UnlockOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" } }] }, "name": "unlock", "theme": "outlined" };
/* harmony default export */ var asn_UnlockOutlined = (UnlockOutlined_UnlockOutlined);

// EXTERNAL MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/components/AntdIcon.js + 14 modules
var AntdIcon = __webpack_require__(867);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/icons/UnlockOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_UnlockOutlined_UnlockOutlined = function UnlockOutlined(props, ref) {
  return _react_16_13_1_react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_UnlockOutlined
  }));
};

icons_UnlockOutlined_UnlockOutlined.displayName = 'UnlockOutlined';
/* harmony default export */ var icons_UnlockOutlined = __webpack_exports__["a"] = (_react_16_13_1_react["forwardRef"](icons_UnlockOutlined_UnlockOutlined));

/***/ }),

/***/ 1260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons-svg@4.1.0@@ant-design/icons-svg/es/asn/LogoutOutlined.js
// This icon file is generated automatically.
var LogoutOutlined_LogoutOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "logout", "theme": "outlined" };
/* harmony default export */ var asn_LogoutOutlined = (LogoutOutlined_LogoutOutlined);

// EXTERNAL MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/components/AntdIcon.js + 14 modules
var AntdIcon = __webpack_require__(867);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/icons/LogoutOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_LogoutOutlined_LogoutOutlined = function LogoutOutlined(props, ref) {
  return _react_16_13_1_react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_LogoutOutlined
  }));
};

icons_LogoutOutlined_LogoutOutlined.displayName = 'LogoutOutlined';
/* harmony default export */ var icons_LogoutOutlined = __webpack_exports__["a"] = (_react_16_13_1_react["forwardRef"](icons_LogoutOutlined_LogoutOutlined));

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

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports['default'] = function (props) {
    return Object.keys(props).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
            prev[key] = props[key];
        }
        return prev;
    }, {});
};

module.exports = exports['default'];

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

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(936)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)))

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(1021);

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames3 = __webpack_require__(97);

var _classnames4 = _interopRequireDefault(_classnames3);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _rmcNukaCarousel = __webpack_require__(1257);

var _rmcNukaCarousel2 = _interopRequireDefault(_rmcNukaCarousel);

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

var Carousel = function (_React$Component) {
    (0, _inherits3['default'])(Carousel, _React$Component);

    function Carousel(props) {
        (0, _classCallCheck3['default'])(this, Carousel);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.onChange = function (index) {
            _this.setState({
                selectedIndex: index
            }, function () {
                if (_this.props.afterChange) {
                    _this.props.afterChange(index);
                }
            });
        };
        _this.state = {
            selectedIndex: _this.props.selectedIndex
        };
        return _this;
    }

    (0, _createClass3['default'])(Carousel, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                infinite = _a.infinite,
                selectedIndex = _a.selectedIndex,
                beforeChange = _a.beforeChange,
                afterChange = _a.afterChange,
                dots = _a.dots,
                restProps = __rest(_a, ["infinite", "selectedIndex", "beforeChange", "afterChange", "dots"]);var prefixCls = restProps.prefixCls,
                dotActiveStyle = restProps.dotActiveStyle,
                dotStyle = restProps.dotStyle,
                className = restProps.className,
                vertical = restProps.vertical;

            var newProps = (0, _extends3['default'])({}, restProps, { wrapAround: infinite, slideIndex: selectedIndex, beforeSlide: beforeChange });
            var Decorators = [];
            if (dots) {
                Decorators = [{
                    component: function component(_ref) {
                        var slideCount = _ref.slideCount,
                            slidesToScroll = _ref.slidesToScroll,
                            currentSlide = _ref.currentSlide;

                        var arr = [];
                        for (var i = 0; i < slideCount; i += slidesToScroll) {
                            arr.push(i);
                        }
                        var dotDom = arr.map(function (index) {
                            var dotCls = (0, _classnames4['default'])(prefixCls + '-wrap-dot', (0, _defineProperty3['default'])({}, prefixCls + '-wrap-dot-active', index === currentSlide));
                            var currentDotStyle = index === currentSlide ? dotActiveStyle : dotStyle;
                            return React.createElement(
                                'div',
                                { className: dotCls, key: index },
                                React.createElement('span', { style: currentDotStyle })
                            );
                        });
                        return React.createElement(
                            'div',
                            { className: prefixCls + '-wrap' },
                            dotDom
                        );
                    },
                    position: 'BottomCenter'
                }];
            }
            var wrapCls = (0, _classnames4['default'])(prefixCls, className, (0, _defineProperty3['default'])({}, prefixCls + '-vertical', vertical));
            return React.createElement(_rmcNukaCarousel2['default'], (0, _extends3['default'])({}, newProps, { className: wrapCls, decorators: Decorators, afterSlide: this.onChange }));
        }
    }]);
    return Carousel;
}(React.Component);

exports['default'] = Carousel;

Carousel.defaultProps = {
    prefixCls: 'am-carousel',
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    cellAlign: 'center',
    selectedIndex: 0,
    dotStyle: {},
    dotActiveStyle: {}
};
module.exports = exports['default'];

/***/ })

}]);
//# sourceMappingURL=../map/vendors~dashboard.446a9b5b.map