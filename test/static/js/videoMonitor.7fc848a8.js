(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1178);

/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1179:
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

var _Slider = __webpack_require__(1180);

var _Slider2 = _interopRequireDefault(_Slider);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Slider = function (_React$Component) {
    (0, _inherits3['default'])(Slider, _React$Component);

    function Slider() {
        (0, _classCallCheck3['default'])(this, Slider);
        return (0, _possibleConstructorReturn3['default'])(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Slider, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: this.props.prefixCls + '-wrapper' },
                React.createElement(_Slider2['default'], this.props)
            );
        }
    }]);
    return Slider;
}(React.Component);

exports['default'] = Slider;

Slider.defaultProps = {
    prefixCls: 'am-slider'
};
module.exports = exports['default'];

/***/ }),

/***/ 1180:
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

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(925);

var _warning2 = _interopRequireDefault(_warning);

var _Track = __webpack_require__(1181);

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(1182);

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(995);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prop-types */
var Slider = function (_React$Component) {
  (0, _inherits3['default'])(Slider, _React$Component);

  function Slider(props) {
    (0, _classCallCheck3['default'])(this, Slider);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (false) {}
    return _this;
  }

  (0, _createClass3['default'])(Slider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

      var prevValue = this.state.value;
      var value = nextProps.value !== undefined ? nextProps.value : prevValue;
      var nextValue = this.trimAlignValue(value, nextProps);
      if (nextValue === prevValue) return;

      this.setState({ value: nextValue });
      if (utils.isValueOutOfRange(value, nextProps)) {
        this.props.onChange(nextValue);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      if (isNotControlled) {
        this.setState(state);
      }

      var changedValue = state.value;
      props.onChange(changedValue);
    }
  }, {
    key: 'onStart',
    value: function onStart(position) {
      this.setState({ dragging: true });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);

      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;

      if (value === prevValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'onMove',
    value: function onMove(e, position) {
      utils.pauseEvent(e);
      var state = this.state;
      var value = this.calcValueByPos(position);
      var oldValue = state.value;
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'getLowerBound',
    value: function getLowerBound() {
      return this.props.min;
    }
  }, {
    key: 'getUpperBound',
    value: function getUpperBound() {
      return this.state.value;
    }
  }, {
    key: 'trimAlignValue',
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var mergedProps = (0, _extends3['default'])({}, this.props, nextProps);
      var val = utils.ensureValueInRange(v, mergedProps);
      return utils.ensureValuePrecision(val, mergedProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          vertical = _props.vertical,
          included = _props.included,
          disabled = _props.disabled,
          minimumTrackStyle = _props.minimumTrackStyle,
          trackStyle = _props.trackStyle,
          handleStyle = _props.handleStyle,
          min = _props.min,
          max = _props.max,
          handleGenerator = _props.handle;
      var _state = this.state,
          value = _state.value,
          dragging = _state.dragging;

      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: prefixCls + '-handle',
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });

      var _trackStyle = trackStyle[0] || trackStyle;
      var track = _react2['default'].createElement(_Track2['default'], {
        className: prefixCls + '-track',
        vertical: vertical,
        included: included,
        offset: 0,
        length: offset,
        style: (0, _extends3['default'])({}, minimumTrackStyle, _trackStyle)
      });

      return { tracks: track, handles: handle };
    }
  }]);
  return Slider;
}(_react2['default'].Component);

Slider.propTypes = {
  defaultValue: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  disabled: _propTypes2['default'].bool
};
exports['default'] = (0, _createSlider2['default'])(Slider);
module.exports = exports['default'];

/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = (0, _extends3['default'])({
    visibility: included ? 'visible' : 'hidden'
  }, style, positonStyle);
  return _react2['default'].createElement('div', { className: className, style: elStyle });
}; /* eslint-disable react/prop-types */
exports['default'] = Track;
module.exports = exports['default'];

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _get2 = __webpack_require__(971);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createSlider;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(1183);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__(97);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(925);

var _warning2 = _interopRequireDefault(_warning);

var _Steps = __webpack_require__(1187);

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = __webpack_require__(1188);

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = __webpack_require__(1189);

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = __webpack_require__(995);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      (0, _classCallCheck3['default'])(this, ComponentEnhancer);

      var _this = (0, _possibleConstructorReturn3['default'])(this, (ComponentEnhancer.__proto__ || Object.getPrototypeOf(ComponentEnhancer)).call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        utils.pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (false) { var step, max, min; }
      _this.handlesRefs = {};
      return _this;
    }

    (0, _createClass3['default'])(ComponentEnhancer, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if ((0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this)) (0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'componentWillUnmount', this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: 'addDocumentTouchEvents',
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = (0, _addEventListener2['default'])(document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = (0, _addEventListener2['default'])(document, 'touchend', this.onEnd);
      }
    }, {
      key: 'addDocumentMouseEvents',
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = (0, _addEventListener2['default'])(document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = (0, _addEventListener2['default'])(document, 'mouseup', this.onEnd);
      }
    }, {
      key: 'removeDocumentEvents',
      value: function removeDocumentEvents() {
        /* eslint-disable no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();

        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: 'getSliderStart',
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var rect = slider.getBoundingClientRect();

        return this.props.vertical ? rect.top : rect.left;
      }
    }, {
      key: 'getSliderLength',
      value: function getSliderLength() {
        var slider = this.sliderRef;
        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: 'calcValue',
      value: function calcValue(offset) {
        var _props = this.props,
            vertical = _props.vertical,
            min = _props.min,
            max = _props.max;

        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: 'calcValueByPos',
      value: function calcValueByPos(position) {
        var pixelOffset = position - this.getSliderStart();
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: 'calcOffset',
      value: function calcOffset(value) {
        var _props2 = this.props,
            min = _props2.min,
            max = _props2.max;

        var ratio = (value - min) / (max - min);
        return ratio * 100;
      }
    }, {
      key: 'saveHandle',
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _props3 = this.props,
            prefixCls = _props3.prefixCls,
            className = _props3.className,
            marks = _props3.marks,
            dots = _props3.dots,
            step = _props3.step,
            included = _props3.included,
            disabled = _props3.disabled,
            vertical = _props3.vertical,
            min = _props3.min,
            max = _props3.max,
            children = _props3.children,
            maximumTrackStyle = _props3.maximumTrackStyle,
            style = _props3.style,
            railStyle = _props3.railStyle,
            dotStyle = _props3.dotStyle,
            activeDotStyle = _props3.activeDotStyle;

        var _get$call = (0, _get3['default'])(ComponentEnhancer.prototype.__proto__ || Object.getPrototypeOf(ComponentEnhancer.prototype), 'render', this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', vertical), (0, _defineProperty3['default'])(_classNames, className, className), _classNames));
        return _react2['default'].createElement(
          'div',
          {
            ref: this.saveSlider,
            className: sliderClassName,
            onTouchStart: disabled ? noop : this.onTouchStart,
            onMouseDown: disabled ? noop : this.onMouseDown,
            style: style
          },
          _react2['default'].createElement('div', {
            className: prefixCls + '-rail',
            style: (0, _extends3['default'])({}, maximumTrackStyle, railStyle)
          }),
          tracks,
          _react2['default'].createElement(_Steps2['default'], {
            prefixCls: prefixCls,
            vertical: vertical,
            marks: marks,
            dots: dots,
            step: step,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min,
            dotStyle: dotStyle,
            activeDotStyle: activeDotStyle
          }),
          handles,
          _react2['default'].createElement(_Marks2['default'], {
            className: prefixCls + '-mark',
            vertical: vertical,
            marks: marks,
            included: included,
            lowerBound: this.getLowerBound(),
            upperBound: this.getUpperBound(),
            max: max,
            min: min
          }),
          children
        );
      }
    }]);
    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = (0, _extends3['default'])({}, Component.propTypes, {
    min: _propTypes2['default'].number,
    max: _propTypes2['default'].number,
    step: _propTypes2['default'].number,
    marks: _propTypes2['default'].object,
    included: _propTypes2['default'].bool,
    className: _propTypes2['default'].string,
    prefixCls: _propTypes2['default'].string,
    disabled: _propTypes2['default'].bool,
    children: _propTypes2['default'].any,
    onBeforeChange: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onAfterChange: _propTypes2['default'].func,
    handle: _propTypes2['default'].func,
    dots: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    minimumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    maximumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    trackStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    railStyle: _propTypes2['default'].object,
    dotStyle: _propTypes2['default'].object,
    activeDotStyle: _propTypes2['default'].object
  }), _class.defaultProps = (0, _extends3['default'])({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = (0, _objectWithoutProperties3['default'])(_ref, ['index']);

      delete restProps.dragging;
      return _react2['default'].createElement(_Handle2['default'], (0, _extends3['default'])({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListenerWrap;

var _addDomEventListener = _interopRequireDefault(__webpack_require__(1184));

var _reactDom = _interopRequireDefault(__webpack_require__(84));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom.default.unstable_batchedUpdates ? function run(e) {
    _reactDom.default.unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener.default)(target, eventType, callback, option);
}

/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventObject = __webpack_require__(1185);

var _EventObject2 = _interopRequireDefault(_EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = (function () {
      var useCapture = false;
      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);

      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _EventBaseObject = __webpack_require__(1186);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(259);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },

  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports['default'] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },

  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },

  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },

  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports["default"];

/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(97);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(925);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning2['default'])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _extends3['default'])({ bottom: offset }, dotStyle) : (0, _extends3['default'])({ left: offset }, dotStyle);
    if (isActived) {
      style = (0, _extends3['default'])({}, style, activeDotStyle);
    }

    var pointClassName = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-dot', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-dot-active', isActived), _classNames));

    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
  });

  return _react2['default'].createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

exports['default'] = Steps;
module.exports = exports['default'];

/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__(146);

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = __webpack_require__(61);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(97);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, className + '-text', true), (0, _defineProperty3['default'])(_classNames, className + '-text-active', isActive), _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;

    var markPoint = marks[point];
    var markPointIsObject = (typeof markPoint === 'undefined' ? 'undefined' : (0, _typeof3['default'])(markPoint)) === 'object' && !_react2['default'].isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    var markStyle = markPointIsObject ? (0, _extends3['default'])({}, style, markPoint.style) : style;
    return _react2['default'].createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return _react2['default'].createElement(
    'div',
    { className: className },
    elements
  );
};

exports['default'] = Marks;
module.exports = exports['default'];

/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(255);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3['default'])(Handle, _React$Component);

  function Handle() {
    (0, _classCallCheck3['default'])(this, Handle);
    return (0, _possibleConstructorReturn3['default'])(this, (Handle.__proto__ || Object.getPrototypeOf(Handle)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Handle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          vertical = _props.vertical,
          offset = _props.offset,
          style = _props.style,
          disabled = _props.disabled,
          min = _props.min,
          max = _props.max,
          value = _props.value,
          restProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value']);


      var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
      var elStyle = (0, _extends3['default'])({}, style, postionStyle);
      var ariaProps = {};
      if (value !== undefined) {
        ariaProps = (0, _extends3['default'])({}, ariaProps, {
          'aria-valuemin': min,
          'aria-valuemax': max,
          'aria-valuenow': value,
          'aria-disabled': !!disabled
        });
      }
      return _react2['default'].createElement('div', (0, _extends3['default'])({
        role: 'slider'
      }, ariaProps, restProps, {
        className: className,
        style: elStyle
      }));
    }
  }]);
  return Handle;
}(_react2['default'].Component);

exports['default'] = Handle;


Handle.propTypes = {
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  offset: _propTypes2['default'].number,
  style: _propTypes2['default'].object,
  disabled: _propTypes2['default'].bool,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  value: _propTypes2['default'].number
};
module.exports = exports['default'];

/***/ }),

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(1191);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(1192), __esModule: true };

/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(407);
__webpack_require__(1193);
module.exports = __webpack_require__(74).Array.from;


/***/ }),

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(260);
var $export = __webpack_require__(99);
var toObject = __webpack_require__(184);
var call = __webpack_require__(1194);
var isArrayIter = __webpack_require__(1195);
var toLength = __webpack_require__(406);
var createProperty = __webpack_require__(1196);
var getIterFn = __webpack_require__(1197);

$export($export.S + $export.F * !__webpack_require__(1199)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 1194:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(119);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(186);
var ITERATOR = __webpack_require__(98)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(85);
var createDesc = __webpack_require__(147);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(1198);
var ITERATOR = __webpack_require__(98)('iterator');
var Iterators = __webpack_require__(186);
module.exports = __webpack_require__(74).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(261);
var TAG = __webpack_require__(98)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(98)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/tabs/style/css.js
var css = __webpack_require__(872);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/tabs/index.js
var lib_tabs = __webpack_require__(873);
var tabs_default = /*#__PURE__*/__webpack_require__.n(lib_tabs);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/date-picker/style/css.js
var style_css = __webpack_require__(879);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/date-picker/index.js
var date_picker = __webpack_require__(880);
var date_picker_default = /*#__PURE__*/__webpack_require__.n(date_picker);

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

// EXTERNAL MODULE: ./node_modules/_classnames@2.2.6@classnames/index.js
var _classnames_2_2_6_classnames = __webpack_require__(97);
var _classnames_2_2_6_classnames_default = /*#__PURE__*/__webpack_require__.n(_classnames_2_2_6_classnames);

// EXTERNAL MODULE: ./node_modules/_dayjs@1.8.34@dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(3);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// EXTERNAL MODULE: ./src/components/SubPage/index.tsx
var SubPage = __webpack_require__(864);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/search-bar/style/css.js
var search_bar_style_css = __webpack_require__(911);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/search-bar/index.js
var search_bar = __webpack_require__(913);
var search_bar_default = /*#__PURE__*/__webpack_require__.n(search_bar);

// EXTERNAL MODULE: ./src/components/AreaSelect2/index.tsx + 4 modules
var AreaSelect2 = __webpack_require__(965);

// EXTERNAL MODULE: ./src/components/CommonListView/index.tsx
var CommonListView = __webpack_require__(948);

// EXTERNAL MODULE: ./src/components/DefenseStatus/index.tsx
var DefenseStatus = __webpack_require__(916);

// CONCATENATED MODULE: ./src/pages/videoMonitor/components/list/index.tsx




__webpack_require__(1175);

var List = /*#__PURE__*/_react_16_13_1_react_default.a.memo( /*#__PURE__*/_react_16_13_1_react_default.a.forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: _classnames_2_2_6_classnames_default()('video-monitor-list-wrap', className)
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-head"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-head-no"
  }, "\u5E8F\u53F7"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-head-name"
  }, "\u8BBE\u5907\u540D\u79F0"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-head-state"
  }, "\u72B6\u6001"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-head-handle"
  }, "\u64CD\u4F5C")), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-wrap",
    ref: ref
  }, children));
}));
var Item = /*#__PURE__*/_react_16_13_1_react_default.a.memo(function (props) {
  var number = props.number,
      name = props.name,
      status = props.status,
      onSelect = props.onSelect;
  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-item"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-no"
  }, number), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-name"
  }, name), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-state"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(DefenseStatus["a" /* default */], {
    status: status
  })), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "video-monitor-list-handle"
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("button", {
    type: "button",
    onClick: onSelect
  }, "\u9009\u62E9")));
});
List.item = Item;

/* harmony default export */ var list = (List);
// CONCATENATED MODULE: ./src/pages/videoMonitor/subPage/selectArea/index.tsx



var _dec, _class, _temp;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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








__webpack_require__(1176);

var selectArea_SelectArea = (_dec = Object(mobxreact_esm["b" /* inject */])("selectAreaStore"), _dec(_class = Object(mobxreact_esm["c" /* observer */])(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectArea, _React$Component);

  var _super = _createSuper(SelectArea);

  function SelectArea(props) {
    var _this;

    _classCallCheck(this, SelectArea);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "ListRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "equipmentsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "renderRow", function (video) {
      var onSelectChange = _this.props.onSelectChange;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Item, {
        key: video.realId,
        number: video.number,
        name: "".concat(video.name || "无", "/").concat(video.channelName || "无"),
        status: video.status,
        onSelect: function onSelect() {
          onSelectChange && onSelectChange(video);
        }
      });
    });

    _this.ListRef = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    _this.equipmentsRef = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    return _this;
  }

  _createClass(SelectArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var updateHeight = this.props.selectAreaStore.updateHeight;
      updateHeight(document.documentElement.clientHeight - this.ListRef.current.offsetTop - document.querySelector(".am-navbar").offsetHeight - 5);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var reset = this.props.selectAreaStore.reset;
      reset(); // this.equipmentsRef.current.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          show = _this$props.show,
          onClose = _this$props.onClose,
          _this$props$selectAre = _this$props.selectAreaStore,
          height = _this$props$selectAre.height,
          curArea = _this$props$selectAre.curArea,
          searchValue = _this$props$selectAre.searchValue,
          onSearchValueChange = _this$props$selectAre.onSearchValueChange,
          searchText = _this$props$selectAre.searchText,
          updateCurArea = _this$props$selectAre.updateCurArea,
          updateSearchText = _this$props$selectAre.updateSearchText,
          fetchVideos = _this$props$selectAre.fetchVideos;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: _classnames_2_2_6_classnames_default()("video-monitor-search", {
          "video-monitor-search_open": show
        })
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(search_bar_default.a, {
        className: "video-monitor-search-bar",
        placeholder: "\u5728\u7ED3\u679C\u4E2D\u641C\u7D22",
        value: searchValue,
        onChange: onSearchValueChange,
        showCancelButton: false,
        onSubmit: function onSubmit(value) {
          updateSearchText(value);

          _this2.equipmentsRef.current.reset();
        },
        onClear: function onClear() {
          // 清除搜索
          updateSearchText("");

          _this2.equipmentsRef.current.reset();
        },
        onCancel: function onCancel() {
          // 关闭搜索
          onClose();
        }
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-monitor-search-content"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(AreaSelect2["a" /* default */], {
        onChange: function onChange(idKey, id) {
          // 接受区域树改变
          updateCurArea({
            idKey: idKey,
            id: id
          });

          _this2.equipmentsRef.current.reset();
        },
        hasVideo: true
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(List, {
        className: "video-monitor-search-list",
        ref: this.ListRef
      }, height && /*#__PURE__*/_react_16_13_1_react_default.a.createElement(CommonListView["a" /* default */], {
        ref: this.equipmentsRef,
        height: height,
        fetchList: fetchVideos,
        limit: 20,
        renderRow: this.renderRow,
        params: _objectSpread(_objectSpread({}, curArea), {}, {
          searchText: searchText
        })
      }))));
    }
  }]);

  return SelectArea;
}(_react_16_13_1_react_default.a.Component), _temp)) || _class) || _class);
/* harmony default export */ var selectArea = (selectArea_SelectArea);
// CONCATENATED MODULE: ./src/pages/videoMonitor/components/RealTimeHandle/index.tsx
function RealTimeHandle_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RealTimeHandle_typeof = function _typeof(obj) { return typeof obj; }; } else { RealTimeHandle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RealTimeHandle_typeof(obj); }

function RealTimeHandle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RealTimeHandle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RealTimeHandle_createClass(Constructor, protoProps, staticProps) { if (protoProps) RealTimeHandle_defineProperties(Constructor.prototype, protoProps); if (staticProps) RealTimeHandle_defineProperties(Constructor, staticProps); return Constructor; }

function RealTimeHandle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RealTimeHandle_setPrototypeOf(subClass, superClass); }

function RealTimeHandle_setPrototypeOf(o, p) { RealTimeHandle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RealTimeHandle_setPrototypeOf(o, p); }

function RealTimeHandle_createSuper(Derived) { var hasNativeReflectConstruct = RealTimeHandle_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = RealTimeHandle_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = RealTimeHandle_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return RealTimeHandle_possibleConstructorReturn(this, result); }; }

function RealTimeHandle_possibleConstructorReturn(self, call) { if (call && (RealTimeHandle_typeof(call) === "object" || typeof call === "function")) { return call; } return RealTimeHandle_assertThisInitialized(self); }

function RealTimeHandle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RealTimeHandle_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function RealTimeHandle_getPrototypeOf(o) { RealTimeHandle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RealTimeHandle_getPrototypeOf(o); }



var RealTimeHandle_RealTimeHandle = /*#__PURE__*/function (_React$PureComponent) {
  RealTimeHandle_inherits(RealTimeHandle, _React$PureComponent);

  var _super = RealTimeHandle_createSuper(RealTimeHandle);

  function RealTimeHandle() {
    RealTimeHandle_classCallCheck(this, RealTimeHandle);

    return _super.apply(this, arguments);
  }

  RealTimeHandle_createClass(RealTimeHandle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          max = _this$props.max,
          four = _this$props.four,
          removeSelect = _this$props.removeSelect,
          removeAll = _this$props.removeAll;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle-item",
        onClick: max
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle-icon video-realTime-handle-icon_one"
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
        className: "video-realTime-handle-text"
      }, "\u6700\u5927\u5316")), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle-item",
        onClick: four
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle-icon video-realTime-handle-icon_four"
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
        className: "video-realTime-handle-text"
      }, "\u56DB\u901A\u9053")), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle-item",
        onClick: removeSelect
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle-icon video-realTime-handle-icon_remove"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null)), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
        className: "video-realTime-handle-text"
      }, "\u79FB\u9664\u9009\u4E2D")), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle-item",
        onClick: removeAll
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime-handle-icon video-realTime-handle-icon_removeAll"
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
        className: "video-realTime-handle-text"
      }, "\u5168\u90E8\u79FB\u9664")));
    }
  }]);

  return RealTimeHandle;
}(_react_16_13_1_react_default.a.PureComponent);

/* harmony default export */ var components_RealTimeHandle = (RealTimeHandle_RealTimeHandle);
// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/slider/style/css.js
var slider_style_css = __webpack_require__(1177);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/slider/index.js
var slider = __webpack_require__(1179);
var slider_default = /*#__PURE__*/__webpack_require__.n(slider);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/wing-blank/style/css.js
var wing_blank_style_css = __webpack_require__(876);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/wing-blank/index.js
var wing_blank = __webpack_require__(877);
var wing_blank_default = /*#__PURE__*/__webpack_require__.n(wing_blank);

// EXTERNAL MODULE: ./src/service/http/index.ts + 16 modules
var http = __webpack_require__(13);

// CONCATENATED MODULE: ./src/pages/videoMonitor/components/Player/index.tsx





function Player_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Player_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Player_ownKeys(Object(source), true).forEach(function (key) { Player_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Player_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function Player_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Player_typeof = function _typeof(obj) { return typeof obj; }; } else { Player_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Player_typeof(obj); }

function Player_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Player_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Player_createClass(Constructor, protoProps, staticProps) { if (protoProps) Player_defineProperties(Constructor.prototype, protoProps); if (staticProps) Player_defineProperties(Constructor, staticProps); return Constructor; }

function Player_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Player_setPrototypeOf(subClass, superClass); }

function Player_setPrototypeOf(o, p) { Player_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Player_setPrototypeOf(o, p); }

function Player_createSuper(Derived) { var hasNativeReflectConstruct = Player_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Player_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Player_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Player_possibleConstructorReturn(this, result); }; }

function Player_possibleConstructorReturn(self, call) { if (call && (Player_typeof(call) === "object" || typeof call === "function")) { return call; } return Player_assertThisInitialized(self); }

function Player_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Player_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Player_getPrototypeOf(o) { Player_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Player_getPrototypeOf(o); }

function Player_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






__webpack_require__(1200);

var Player_Container = /*#__PURE__*/function (_React$Component) {
  Player_inherits(Container, _React$Component);

  var _super = Player_createSuper(Container);

  function Container(props) {
    var _this;

    Player_classCallCheck(this, Container);

    _this = _super.call(this, props);

    Player_defineProperty(Player_assertThisInitialized(_this), "containerRef", void 0);

    _this.state = {
      size: {
        width: 0
      }
    };
    _this.containerRef = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    return _this;
  }

  Player_createClass(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        size: {
          width: this.containerRef.current.clientWidth
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          name = _this$props.name,
          isEmpty = _this$props.isEmpty,
          children = _this$props.children,
          selected = _this$props.selected,
          onSelectChange = _this$props.onSelectChange;
      var size = this.state.size;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: _classnames_2_2_6_classnames_default()(className)
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: _classnames_2_2_6_classnames_default()({
          "video-container-wrap_selected": selected
        })
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: _classnames_2_2_6_classnames_default()("video-container", {
          "video-container_selected": selected
        }),
        ref: this.containerRef
      }, size.width && children(size.width)), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-container-title",
        onClick: function onClick() {
          if (!isEmpty && onSelectChange) {
            onSelectChange(!selected);
          }
        }
      }, name)));
    }
  }]);

  return Container;
}(_react_16_13_1_react_default.a.Component);

var Player_RealTime = /*#__PURE__*/function (_React$Component2) {
  Player_inherits(RealTime, _React$Component2);

  var _super2 = Player_createSuper(RealTime);

  function RealTime() {
    var _this2;

    Player_classCallCheck(this, RealTime);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    Player_defineProperty(Player_assertThisInitialized(_this2), "player", void 0);

    Player_defineProperty(Player_assertThisInitialized(_this2), "destroyPlayer", function () {
      if (_this2.player) {
        _this2.player.destroy();

        _this2.player = null;
      }
    });

    return _this2;
  }

  Player_createClass(RealTime, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("预览播放器重新创建", this.props);
      var _this$props2 = this.props,
          id = _this$props2.id,
          realId = _this$props2.realId,
          channelId = _this$props2.channelId;

      if (id && realId && channelId) {
        this.initPlayer();
      }
    }
  }, {
    key: "initPlayer",
    value: function initPlayer() {
      var _this3 = this;

      console.log("预览播放器初始化", this.props);
      var _this$props3 = this.props,
          id = _this$props3.id,
          realId = _this$props3.realId,
          channelId = _this$props3.channelId,
          streamId = _this$props3.streamId,
          width = _this$props3.width,
          index = _this$props3.index;
      var url = "";
      if (!id || !realId) return;
      this.destroyPlayer();
      http["default"].getReplayServerInfo({
        channelId: realId,
        streamType: streamId,
        protocolType: 2,
        addrType: 2
      }).then(function (res) {
        var urls = res.result.intraUrl.split("play_real");
        url = "ws://".concat(location.host, "/previewPlayer/play_real").concat(urls[1]);
        console.log("预览路径", url);
        var HYPlayerParams = {
          url: url,
          container: "#realTimePlayer-".concat(realId, "-").concat(index),
          live: true,
          loop: false,
          autoPlay: false,
          hasAudio: true,
          control: true,
          muted: false,
          cors: true,
          volume: 0,
          width: width,
          height: Math.ceil(width * PLAYER_HEIGHT / PLAYER_WIDTH),
          duration: 0,
          decoderURL: "./lib/core/decoder.js"
        };
        _this3.player = new HYPlayer(HYPlayerParams);
      }); //url = `ws://${location.host}/previewPlayer/play_real/${id}/${Number(channelId) - 1}/${streamId}`;
      // url = `ws://192.168.8.236:32200/47ca3004-5180-489e-b251-d326b49603f5/36/1`;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("预览播放器卸载", this.props);
      this.destroyPlayer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          id = _this$props4.id,
          realId = _this$props4.realId,
          index = _this$props4.index,
          width = _this$props4.width,
          onAdd = _this$props4.onAdd;

      if (!id || !realId) {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Player_Add, {
          width: width,
          onAdd: onAdd
        });
      }

      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        id: "realTimePlayer-".concat(realId, "-").concat(index),
        style: {
          width: width,
          height: Math.ceil(width * PLAYER_HEIGHT / PLAYER_WIDTH)
        }
      });
    }
  }]);

  return RealTime;
}(_react_16_13_1_react_default.a.Component);

var PlayBack = /*#__PURE__*/_react_16_13_1_react_default.a.forwardRef(function (props, ref) {
  var player;
  var id = props.id,
      realId = props.realId,
      channelId = props.channelId,
      date = props.date,
      width = props.width,
      index = props.index,
      onAdd = props.onAdd;

  var _useState = Object(_react_16_13_1_react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      load = _useState2[0],
      setload = _useState2[1];

  var formatTime = function formatTime(time) {
    return time.format("YYYY-MM-DDTHH:mm:ss");
  };

  var destroyPlayer = function destroyPlayer() {
    if (player) {
      player.destroy();
      player = null;
    }
  };

  var initPlayer = function initPlayer(time) {
    var url = "";
    if (!id || !realId || !date) return;
    destroyPlayer();
    http["default"].getReplayServerInfo({
      channelId: realId,
      protocolType: 2,
      addrType: 1,
      recordType: 2,
      startTime: formatTime(dayjs_min_default()(date).startOf("day")),
      stopTime: formatTime(dayjs_min_default()(date).endOf("day"))
    }).then(function (res) {
      console.log("请求回放后端接口", res.result.intraUrl);
      var urls = res.result.intraUrl.split("play_back");
      url = "ws://".concat(location.host, "/replayPlayer/play_back").concat(urls[1]); //url = res.result.intraUrl;

      console.log("回放路径", url);
      setload(true);
      var HYPlayerParams = {
        url: url,
        poster: "",
        //封面
        debug: true,
        live: false,
        loop: false,
        autoPlay: false,
        hasAudio: true,
        control: true,
        muted: false,
        cors: true,
        volume: 0.7,
        duration: time / 1000,
        container: "#playBackPlayer-".concat(realId, "-").concat(index),
        width: width,
        height: Math.ceil(width * PLAYER_HEIGHT / PLAYER_WIDTH),
        decoderURL: "./lib/core/decoder.js"
      };
      player = new HYPlayer(HYPlayerParams);
      player.on("ready", function () {
        setload(false);
      });
    });
  };

  var getTimeCount = function getTimeCount(videoTypes) {
    if (Array.isArray(videoTypes)) {
      var vMap = new Map(); // 过滤重复时间

      videoTypes.forEach(function (item) {
        var id = "".concat(dayjs_min_default()(item.startTime).valueOf(), " -").concat(dayjs_min_default()(item.endTime).valueOf());

        if (!vMap.has(id)) {
          vMap.set(id, item);
        }
      }); // 根据开始时间排序

      var videos = _toConsumableArray(vMap.values()).map(function (item) {
        return Player_objectSpread(Player_objectSpread({}, item), {}, {
          sort: dayjs_min_default()(item.startTime).valueOf()
        });
      }).sort(function (a, b) {
        return a.sort - b.sort;
      }); // 计算总时长毫秒（考虑交叉的情况）


      var count = videos.reduce(function (count, video, index, videos) {
        var len = 0;

        if (dayjs_min_default()(video.startTime).isBefore(dayjs_min_default()(video.endTime))) {
          if (videos[index - 1] && dayjs_min_default()(videos[index - 1].endTime).valueOf() > dayjs_min_default()(video.startTime).valueOf()) {
            len = dayjs_min_default()(video.endTime).valueOf() - dayjs_min_default()(videos[index - 1].endTime).valueOf();
          } else {
            len = dayjs_min_default()(video.endTime).valueOf() - dayjs_min_default()(video.startTime).valueOf();
          }
        }

        return count + len;
      }, 0);
      console.log("总时长", count);
      return count;
    }

    return 0;
  };

  Object(_react_16_13_1_react["useEffect"])(function () {
    if (id && realId && channelId && date) {
      setload(true);
      http["default"].replayVideoQuery({
        devIds: [realId],
        startTime: dayjs_min_default()(date).startOf("day").format("YYYY-MM-DD HH:mm:ss"),
        endTime: dayjs_min_default()(date).endOf("day").format("YYYY-MM-DD HH:mm:ss")
      }).then(function (res) {
        var result = res.result;

        if (result && result[0] && Array.isArray(result[0].videoTypes)) {
          var time = getTimeCount(result[0].videoTypes);
          initPlayer(time);
        }
      }); // initPlayer();
    }

    return function () {
      destroyPlayer();
    };
  }, [id, realId, channelId, date]);

  if (!id || !realId) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Player_Add, {
      width: width,
      onAdd: onAdd
    });
  }

  if (!date) {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "playBackPlayer-tips",
      style: {
        width: width,
        height: Math.ceil(width * PLAYER_HEIGHT / PLAYER_WIDTH)
      }
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, "\u8BF7\u9009\u62E9\u65E5\u671F"));
  }

  return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    style: {
      position: "relative",
      width: width,
      height: Math.ceil(width * PLAYER_HEIGHT / PLAYER_WIDTH)
    }
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    className: "playBackPlayer-loading",
    style: {
      display: load ? "flex" : "none"
    }
  }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, "\u52A0\u8F7D\u4E2D...")), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
    id: "playBackPlayer-".concat(realId, "-").concat(index),
    style: {
      width: width,
      height: Math.ceil(width * PLAYER_HEIGHT / PLAYER_WIDTH)
    }
  }));
});
var PLAYER_WIDTH = 800;
var PLAYER_HEIGHT = 450;

var Player_Add = /*#__PURE__*/function (_React$Component3) {
  Player_inherits(Add, _React$Component3);

  var _super3 = Player_createSuper(Add);

  function Add() {
    Player_classCallCheck(this, Add);

    return _super3.apply(this, arguments);
  }

  Player_createClass(Add, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          width = _this$props5.width,
          onAdd = _this$props5.onAdd;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-container-empty",
        style: {
          height: Math.ceil(width * PLAYER_HEIGHT / PLAYER_WIDTH)
        }
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", {
        className: "video-container-icon video-container-icon_add",
        onClick: function onClick(e) {
          e.stopPropagation();
          onAdd && onAdd();
        }
      }));
    }
  }]);

  return Add;
}(_react_16_13_1_react_default.a.Component);

var Player_HySlider = function HySlider(props) {
  var _useState3 = Object(_react_16_13_1_react["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      silder = _useState4[0],
      setSlider = _useState4[1];

  var _useState5 = Object(_react_16_13_1_react["useState"])(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      player = _useState6[0],
      setPlayer = _useState6[1];

  Object(_react_16_13_1_react["useEffect"])(function () {
    if (props.player.current) {
      var _player = props.player.current.player;
      setPlayer(_player);
    }
  }, [props.player]);

  var onAfterChange = function onAfterChange(val) {
    var time = val / 100 * player.duration;
    player.seeked(parseInt(time));
  };

  var onChange = function onChange(val) {
    setSlider(val);
  };

  return Object(_react_16_13_1_react["useMemo"])(function () {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(wing_blank_default.a, {
      size: "lg"
    }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(slider_default.a, {
      value: silder,
      min: 0,
      max: 100,
      onAfterChange: onAfterChange,
      onChange: onChange
    }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(wing_blank_default.a, {
      size: "lg"
    }));
  }, [silder]);
};


// CONCATENATED MODULE: ./src/pages/videoMonitor/index.tsx









var videoMonitor_dec, videoMonitor_class, videoMonitor_temp;

function videoMonitor_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { videoMonitor_typeof = function _typeof(obj) { return typeof obj; }; } else { videoMonitor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return videoMonitor_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function videoMonitor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function videoMonitor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function videoMonitor_createClass(Constructor, protoProps, staticProps) { if (protoProps) videoMonitor_defineProperties(Constructor.prototype, protoProps); if (staticProps) videoMonitor_defineProperties(Constructor, staticProps); return Constructor; }

function videoMonitor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) videoMonitor_setPrototypeOf(subClass, superClass); }

function videoMonitor_setPrototypeOf(o, p) { videoMonitor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return videoMonitor_setPrototypeOf(o, p); }

function videoMonitor_createSuper(Derived) { var hasNativeReflectConstruct = videoMonitor_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = videoMonitor_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = videoMonitor_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return videoMonitor_possibleConstructorReturn(this, result); }; }

function videoMonitor_possibleConstructorReturn(self, call) { if (call && (videoMonitor_typeof(call) === "object" || typeof call === "function")) { return call; } return videoMonitor_assertThisInitialized(self); }

function videoMonitor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function videoMonitor_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function videoMonitor_getPrototypeOf(o) { videoMonitor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return videoMonitor_getPrototypeOf(o); }

function videoMonitor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










__webpack_require__(1201);

var videoMonitor_VideoMonitor = (videoMonitor_dec = Object(mobxreact_esm["b" /* inject */])("videoMonitorStore"), videoMonitor_dec(videoMonitor_class = Object(mobxreact_esm["c" /* observer */])(videoMonitor_class = (videoMonitor_temp = /*#__PURE__*/function (_React$Component) {
  videoMonitor_inherits(VideoMonitor, _React$Component);

  var _super = videoMonitor_createSuper(VideoMonitor);

  function VideoMonitor(props) {
    var _this;

    videoMonitor_classCallCheck(this, VideoMonitor);

    _this = _super.call(this, props);

    videoMonitor_defineProperty(videoMonitor_assertThisInitialized(_this), "realTimeRef_0", void 0);

    videoMonitor_defineProperty(videoMonitor_assertThisInitialized(_this), "realTimeRef_1", void 0);

    videoMonitor_defineProperty(videoMonitor_assertThisInitialized(_this), "realTimeRef_2", void 0);

    videoMonitor_defineProperty(videoMonitor_assertThisInitialized(_this), "realTimeRef_3", void 0);

    videoMonitor_defineProperty(videoMonitor_assertThisInitialized(_this), "playBackRef", void 0);

    videoMonitor_defineProperty(videoMonitor_assertThisInitialized(_this), "onTabChange", function (tab, index) {
      var _this$props$videoMoni = _this.props.videoMonitorStore,
          aisleNumber = _this$props$videoMoni.aisleNumber,
          tabChange = _this$props$videoMoni.tabChange;

      if (index === 0) {
        for (var i = 0; i < aisleNumber; i++) {
          if (_this["realTimeRef_".concat(i)] && _this["realTimeRef_".concat(i)].current) {
            _this["realTimeRef_".concat(i)].current.initPlayer();
          }
        }

        if (_this.playBackRef && _this.playBackRef.current) {
          _this.playBackRef.current.destroyPlayer();
        }
      } else if (index === 1 && _this.playBackRef && _this.playBackRef.current) {
        for (var _i = 0; _i < aisleNumber; _i++) {
          if (_this["realTimeRef_".concat(_i)] && _this["realTimeRef_".concat(_i)].current) {
            _this["realTimeRef_".concat(_i)].current.destroyPlayer();
          }
        }

        _this.playBackRef && _this.playBackRef.current.initPlayer();
      }

      tabChange(index);
    });

    _this.realTimeRef_0 = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    _this.realTimeRef_1 = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    _this.realTimeRef_2 = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    _this.realTimeRef_3 = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    _this.playBackRef = /*#__PURE__*/_react_16_13_1_react_default.a.createRef();
    return _this;
  }

  videoMonitor_createClass(VideoMonitor, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var reset = this.props.videoMonitorStore.reset;
      reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$videoMoni2 = this.props.videoMonitorStore,
          tabs = _this$props$videoMoni2.tabs,
          tab = _this$props$videoMoni2.tab,
          aisleNumber = _this$props$videoMoni2.aisleNumber,
          realTimesVideos_max = _this$props$videoMoni2.realTimesVideos_max,
          realTimesVideos_four = _this$props$videoMoni2.realTimesVideos_four,
          playBackVideo = _this$props$videoMoni2.playBackVideo,
          playBackTime = _this$props$videoMoni2.playBackTime,
          isSearchDevice = _this$props$videoMoni2.isSearchDevice,
          curSelctArea = _this$props$videoMoni2.curSelctArea,
          tabChange = _this$props$videoMoni2.tabChange,
          onSearchDeviceStateChange = _this$props$videoMoni2.onSearchDeviceStateChange,
          onDeviceSelectChange = _this$props$videoMoni2.onDeviceSelectChange,
          onAreaSelectChange = _this$props$videoMoni2.onAreaSelectChange,
          updatePlayBackTime = _this$props$videoMoni2.updatePlayBackTime,
          realTimeMax = _this$props$videoMoni2.realTimeMax,
          realTimeFour = _this$props$videoMoni2.realTimeFour,
          realTimeRemoveSelect = _this$props$videoMoni2.realTimeRemoveSelect,
          realTimeRemoveAll = _this$props$videoMoni2.realTimeRemoveAll;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(SubPage["a" /* default */], {
        history: this.props.history,
        title: "\u89C6\u9891\u5B50\u7CFB\u7EDF",
        bgColor: "#F0EDF1"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(selectArea, {
        show: isSearchDevice,
        onSelectChange: function onSelectChange(device) {
          if (!device.channelId) {
            toast_default.a.info("通道ID为空", 1);

            return;
          }

          onDeviceSelectChange(device);
          setTimeout(function () {
            if (curSelctArea) {
              if (curSelctArea.type === "realTime" && curSelctArea.i >= 0 && _this2["realTimeRef_".concat(curSelctArea.i)] && _this2["realTimeRef_".concat(curSelctArea.i)].current) {// this[
                //     `realTimeRef_${curSelctArea.i}`
                // ].current.initPlayer();
              } else if (curSelctArea.type === "playBaCK" && _this2.playBackRef && _this2.playBackRef.current) {// this.playBackRef.current.initPlayer();
              }
            }
          }, 100);
        },
        onClose: function onClose() {
          onSearchDeviceStateChange(false);
        }
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-monitor-content"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("button", {
        className: "video-monitor-select-btn",
        type: "button",
        onClick: function onClick() {
          if (tab === 0) {
            var i = -1;

            if (aisleNumber === 1) {
              i = realTimesVideos_max.findIndex(function (item) {
                return item.selected;
              });
            } else if (aisleNumber === 4) {
              i = realTimesVideos_four.findIndex(function (item) {
                return item.selected;
              });
            }

            if (i === -1) {
              toast_default.a.info("请先选择视频设备", 1);

              return;
            }

            onSearchDeviceStateChange(true, "realTime", i || 0);
          } else if (tab === 1) {
            onSearchDeviceStateChange(true, "playBack");
          }
        }
      }, "\u9009\u62E9\u89C6\u9891\u8BBE\u5907"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(tabs_default.a, {
        tabs: tabs,
        onChange: this.onTabChange,
        page: tab,
        animated: false,
        useOnPan: false,
        swipeable: false
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-realTime"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: _classnames_2_2_6_classnames_default()("video-realTime-container", {
          "video-realTime-container_max": aisleNumber === 1,
          "video-realTime-container_four": aisleNumber === 4
        })
      }, Array.from({
        length: aisleNumber
      }, function (v, k) {
        return k;
      }).map(function (v, i) {
        var realTimesVideo;

        if (aisleNumber === 1) {
          realTimesVideo = realTimesVideos_max[i];
        } else if (aisleNumber === 4) {
          realTimesVideo = realTimesVideos_four[i];
        }

        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Player_Container, {
          key: "".concat(aisleNumber, "-").concat(realTimesVideo.realId, "-").concat(i),
          className: "video-realTime-content",
          name: realTimesVideo.name,
          isEmpty: realTimesVideo.isEmpty,
          selected: realTimesVideo.selected,
          onSelectChange: function onSelectChange() {
            onAreaSelectChange(i);
          }
        }, function (width) {
          return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Player_RealTime, _extends({}, realTimesVideo, {
            index: i,
            width: width,
            ref: _this2["realTimeRef_".concat(i)],
            streamId: 1,
            onAdd: function onAdd() {
              onSearchDeviceStateChange(true, "realTime", i);
            }
          }));
        });
      })), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(components_RealTimeHandle, {
        max: realTimeMax,
        four: realTimeFour,
        removeSelect: realTimeRemoveSelect,
        removeAll: realTimeRemoveAll
      }))), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-playBack"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(Player_Container, {
        className: "video-playBack-content",
        name: playBackVideo.name,
        isEmpty: playBackVideo.isEmpty,
        selected: playBackVideo.selected
      }, function (width) {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(PlayBack, _extends({
          ref: _this2.playBackRef
        }, playBackVideo, {
          date: playBackTime,
          index: 0,
          width: width,
          streamId: 0,
          onAdd: function onAdd() {
            onSearchDeviceStateChange(true, "playBack");
          }
        }));
      }),  false && /*#__PURE__*/false, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-playBack-datePicker"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-playBack-datePicker-label"
      }, "\u56DE\u653E\u65E5\u671F"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "video-playBack-datePicker-value",
        onClick: function onClick() {
          if (!playBackVideo || !playBackVideo.id) {
            toast_default.a.info("请先选择视频设备", 1);
          }
        }
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(date_picker_default.a, {
        mode: "date",
        title: "\u8BF7\u9009\u62E9\u56DE\u653E\u65E5\u671F",
        value: playBackTime,
        maxDate: new Date(),
        disabled: !playBackVideo || !playBackVideo.id,
        onChange: function onChange(date) {
          console.log("date", date);
          updatePlayBackTime(date);
          setTimeout(function () {
            if (_this2.playBackRef && _this2.playBackRef.current) {
              _this2.playBackRef.current.initPlayer();
            }
          }, 100);
        }
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("span", null, playBackTime ? dayjs_min_default()(playBackTime).format("YYYY-MM-DD") : "请选择回放日期"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
        type: "down",
        size: "sm"
      }))))))))));
    }
  }]);

  return VideoMonitor;
}(_react_16_13_1_react_default.a.Component), videoMonitor_temp)) || videoMonitor_class) || videoMonitor_class);
/* harmony default export */ var videoMonitor = __webpack_exports__["default"] = (videoMonitor_VideoMonitor);

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

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(893);

/***/ }),

/***/ 877:
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

var WingBlank = function (_React$Component) {
    (0, _inherits3['default'])(WingBlank, _React$Component);

    function WingBlank() {
        (0, _classCallCheck3['default'])(this, WingBlank);
        return (0, _possibleConstructorReturn3['default'])(this, (WingBlank.__proto__ || Object.getPrototypeOf(WingBlank)).apply(this, arguments));
    }

    (0, _createClass3['default'])(WingBlank, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                className = _props.className,
                children = _props.children,
                style = _props.style;

            var wrapCls = (0, _classnames2['default'])(prefixCls, prefixCls + '-' + size, className);
            return React.createElement(
                'div',
                { className: wrapCls, style: style },
                children
            );
        }
    }]);
    return WingBlank;
}(React.Component);

exports['default'] = WingBlank;

WingBlank.defaultProps = {
    prefixCls: 'am-wingblank',
    size: 'lg'
};
module.exports = exports['default'];

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

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(912);

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 913:
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

var _classnames4 = __webpack_require__(97);

var _classnames5 = _interopRequireDefault(_classnames4);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(10);

var PropTypes = _interopRequireWildcard(_propTypes);

var _rmcFeedback = __webpack_require__(852);

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _getDataAttr = __webpack_require__(887);

var _getDataAttr2 = _interopRequireDefault(_getDataAttr);

var _getLocale = __webpack_require__(862);

var _PropsType = __webpack_require__(914);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

var SearchBar = function (_React$Component) {
    (0, _inherits3['default'])(SearchBar, _React$Component);

    function SearchBar(props) {
        (0, _classCallCheck3['default'])(this, SearchBar);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.value || '');
            }
            if (_this.inputRef) {
                _this.inputRef.blur();
            }
        };
        _this.onChange = function (e) {
            if (!_this.state.focus) {
                _this.setState({
                    focus: true
                });
            }
            var value = e.target.value;
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onFocus = function () {
            _this.setState({
                focus: true
            });
            _this.firstFocus = true;
            if (_this.props.onFocus) {
                _this.props.onFocus();
            }
        };
        _this.onBlur = function () {
            _this.onBlurTimeout = onNextFrame(function () {
                if (!_this.blurFromOnClear) {
                    if (document.activeElement !== _this.inputRef) {
                        _this.setState({
                            focus: false
                        });
                    }
                }
                _this.blurFromOnClear = false;
            });
            if (_this.props.onBlur) {
                // fix autoFocus item blur with flash
                setTimeout(function () {
                    // fix ios12 wechat browser click failure after input
                    if (document.body) {
                        document.body.scrollTop = document.body.scrollTop;
                    }
                }, 100);
                _this.props.onBlur();
            }
        };
        _this.onClear = function () {
            _this.doClear();
        };
        _this.doClear = function () {
            var blurFromOnClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            _this.blurFromOnClear = blurFromOnClear;
            if (!('value' in _this.props)) {
                _this.setState({ value: '' });
            }
            if (_this.props.onClear) {
                _this.props.onClear('');
            }
            if (_this.props.onChange) {
                _this.props.onChange('');
            }
            if (blurFromOnClear) {
                _this.focus();
            }
        };
        _this.onCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel(_this.state.value || '');
            } else {
                _this.doClear(false);
            }
        };
        _this.focus = function () {
            if (_this.inputRef) {
                _this.inputRef.focus();
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value || '';
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = '';
        }
        _this.state = {
            value: value,
            focus: false
        };
        return _this;
    }

    (0, _createClass3['default'])(SearchBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.rightBtnRef) {
                var initBtn = window.getComputedStyle(this.rightBtnRef);
                this.rightBtnInitMarginleft = initBtn.marginLeft;
            }
            this.componentDidUpdate();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.syntheticPhRef) {
                if (this.inputContainerRef && this.inputContainerRef.className.indexOf(this.props.prefixCls + '-start') > -1) {
                    // 检测是否包含名为 ${this.props.prefixCls}-start 样式，生成动画
                    // offsetWidth 某些时候是向上取整，某些时候是向下取整，不能用
                    if (this.syntheticPhContainerRef) {
                        var realWidth = this.syntheticPhContainerRef.getBoundingClientRect().width; // 包含小数
                        this.syntheticPhRef.style.width = Math.ceil(realWidth) + 'px';
                    }
                    if (!this.props.showCancelButton && this.rightBtnRef) {
                        this.rightBtnRef.style.marginRight = '0';
                    }
                } else {
                    this.syntheticPhRef.style.width = '100%';
                    if (!this.props.showCancelButton && this.rightBtnRef) {
                        this.rightBtnRef.style.marginRight = '-' + (this.rightBtnRef.offsetWidth + (this.rightBtnInitMarginleft != null ? parseInt(this.rightBtnInitMarginleft, 10) : 0)) + 'px';
                    }
                }
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps && nextProps.value !== this.state.value) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.onBlurTimeout) {
                clearNextFrameAction(this.onBlurTimeout);
                this.onBlurTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames3,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                showCancelButton = _props.showCancelButton,
                disabled = _props.disabled,
                placeholder = _props.placeholder,
                className = _props.className,
                style = _props.style,
                maxLength = _props.maxLength;
            // tslint:disable-next-line:variable-name

            var _locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'SearchBar', function () {
                return __webpack_require__(915);
            });
            var cancelText = _locale.cancelText;
            var _state = this.state,
                value = _state.value,
                focus = _state.focus;

            var wrapCls = (0, _classnames5['default'])(prefixCls, className, (0, _defineProperty3['default'])({}, prefixCls + '-start', !!(focus || value && value.length > 0)));
            var clearCls = (0, _classnames5['default'])(prefixCls + '-clear', (0, _defineProperty3['default'])({}, prefixCls + '-clear-show', !!(focus && value && value.length > 0)));
            var cancelCls = (0, _classnames5['default'])(prefixCls + '-cancel', (_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, prefixCls + '-cancel-show', !!(showCancelButton || focus || value && value.length > 0)), (0, _defineProperty3['default'])(_classnames3, prefixCls + '-cancel-anim', this.firstFocus), _classnames3));
            return React.createElement(
                'form',
                { onSubmit: this.onSubmit, className: wrapCls, style: style, ref: function ref(el) {
                        return _this2.inputContainerRef = el;
                    }, action: '#' },
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement(
                        'div',
                        { className: prefixCls + '-synthetic-ph', ref: function ref(el) {
                                return _this2.syntheticPhRef = el;
                            } },
                        React.createElement(
                            'span',
                            { className: prefixCls + '-synthetic-ph-container', ref: function ref(el) {
                                    return _this2.syntheticPhContainerRef = el;
                                } },
                            React.createElement('i', { className: prefixCls + '-synthetic-ph-icon' }),
                            React.createElement(
                                'span',
                                { className: prefixCls + '-synthetic-ph-placeholder'
                                    // tslint:disable-next-line:jsx-no-multiline-js
                                    , style: {
                                        visibility: placeholder && !value ? 'visible' : 'hidden'
                                    } },
                                placeholder
                            )
                        )
                    ),
                    React.createElement('input', (0, _extends3['default'])({ type: 'search', className: prefixCls + '-value', value: value, disabled: disabled, placeholder: placeholder, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, ref: function ref(el) {
                            return _this2.inputRef = el;
                        }, maxLength: maxLength }, (0, _getDataAttr2['default'])(this.props))),
                    React.createElement(
                        _rmcFeedback2['default'],
                        { activeClassName: prefixCls + '-clear-active' },
                        React.createElement('a', { onClick: this.onClear, className: clearCls })
                    )
                ),
                React.createElement(
                    'div',
                    { className: cancelCls, onClick: this.onCancel, ref: function ref(el) {
                            return _this2.rightBtnRef = el;
                        } },
                    this.props.cancelText || cancelText
                )
            );
        }
    }]);
    return SearchBar;
}(React.Component);

exports['default'] = SearchBar;

SearchBar.defaultProps = _PropsType.defaultProps;
SearchBar.contextTypes = {
    antLocale: PropTypes.object
};
module.exports = exports['default'];

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function noop() {}
var defaultProps = exports.defaultProps = {
    prefixCls: 'am-search',
    placeholder: '',
    onSubmit: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onClear: noop,
    showCancelButton: false,
    disabled: false
};

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = {
    cancelText: '取消'
};
module.exports = exports['default'];

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

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(868);
/* harmony import */ var antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_view_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(869);
/* harmony import */ var antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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



__webpack_require__(949);

var Transition = function Transition(_ref) {
  var isLoading = _ref.isLoading,
      hasMore = _ref.hasMore,
      hasData = _ref.hasData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "commonListView-transition"
  }, function () {
    if (isLoading) {
      return "加载中...";
    } else if (!hasData) {
      return "暂无数据";
    } else if (hasMore) {
      return "加载完成";
    }
  }());
};

var CommonListView = /*#__PURE__*/function (_React$Component) {
  _inherits(CommonListView, _React$Component);

  var _super = _createSuper(CommonListView);

  function CommonListView(props) {
    var _this;

    _classCallCheck(this, CommonListView);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "listViewRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "onEndReached", function () {
      var _this$state = _this.state,
          isLoading = _this$state.isLoading,
          hasMore = _this$state.hasMore;

      if (!isLoading && hasMore) {
        _this.getList();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onResultSearch", function (value) {
      _this.setState({
        skip: 0,
        isLoading: false,
        hasMore: true,
        dataSource: new antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default.a.DataSource({
          rowHasChanged: function rowHasChanged(row1, row2) {
            return row1 !== row2;
          }
        })
      }, function () {
        if (value) {
          var curData = _this.state.filterData || _this.state.data;
          var filterData = curData.filter(function (item) {
            return item.name.indexOf(value) !== -1;
          });

          _this.setState({
            filterData: filterData,
            dataSource: _this.state.dataSource.cloneWithRows(filterData),
            pageSize: filterData.length,
            hasMore: false
          }, function () {
            _this.listViewRef.current.scrollTo(0, 0);
          });
        } else {
          _this.setState({
            filterData: null,
            pageSize: 0
          }, function () {
            _this.getList();
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.setState({
        skip: 0,
        isLoading: false,
        hasMore: true,
        data: [],
        dataSource: new antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default.a.DataSource({
          rowHasChanged: function rowHasChanged(row1, row2) {
            return row1 !== row2;
          }
        })
      }, function () {
        _this.listViewRef.current.scrollTo(0, 0);

        _this.getList();
      });
    });

    _this.state = {
      skip: 0,
      pageSize: 0,
      isLoading: false,
      hasMore: true,
      data: [],
      filterData: null,
      dataSource: new antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default.a.DataSource({
        rowHasChanged: function rowHasChanged(row1, row2) {
          return row1 !== row2;
        }
      })
    };
    _this.listViewRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    return _this;
  }

  _createClass(CommonListView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getList();
    }
  }, {
    key: "getList",
    value: function getList() {
      var _this2 = this;

      var _this$props = this.props,
          fetchList = _this$props.fetchList,
          limit = _this$props.limit,
          params = _this$props.params;
      var _this$state2 = this.state,
          isLoading = _this$state2.isLoading,
          skip = _this$state2.skip;
      if (isLoading) return;
      this.setState({
        isLoading: true
      });
      fetchList(skip, limit, params).then(function (pageInfo) {
        var total = pageInfo.total,
            data = pageInfo.data;

        if (data && data.length > 0) {
          var newData = [].concat(_toConsumableArray(_this2.state.data), _toConsumableArray(data));

          _this2.setState({
            data: newData,
            dataSource: _this2.state.dataSource.cloneWithRows(newData),
            hasMore: newData.length < total,
            skip: skip + limit
          });
        }
      })["finally"](function () {
        _this2.setState({
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          height = _this$props2.height,
          limit = _this$props2.limit,
          renderRow = _this$props2.renderRow;
      var _this$state3 = this.state,
          isLoading = _this$state3.isLoading,
          hasMore = _this$state3.hasMore,
          data = _this$state3.data,
          dataSource = _this$state3.dataSource,
          pageSize = _this$state3.pageSize;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_mobile_lib_list_view__WEBPACK_IMPORTED_MODULE_1___default.a, {
        ref: this.listViewRef,
        dataSource: dataSource,
        renderFooter: function renderFooter() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Transition, {
            isLoading: isLoading,
            hasMore: hasMore,
            hasData: data.length > 0
          });
        },
        renderRow: renderRow,
        pageSize: pageSize || limit,
        style: {
          height: height
        },
        scrollRenderAheadDistance: 500,
        onEndReached: this.onEndReached,
        onEndReachedThreshold: 10
      });
    }
  }]);

  return CommonListView;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CommonListView);

/***/ }),

/***/ 949:
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

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(1190);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.isEventFromHandle = isEventFromHandle;
exports.isValueOutOfRange = isValueOutOfRange;
exports.isNotTouchEvent = isNotTouchEvent;
exports.getClosestPoint = getClosestPoint;
exports.getPrecision = getPrecision;
exports.getMousePosition = getMousePosition;
exports.getTouchPosition = getTouchPosition;
exports.getHandleCenterPosition = getHandleCenterPosition;
exports.ensureValueInRange = ensureValueInRange;
exports.ensureValuePrecision = ensureValuePrecision;
exports.pauseEvent = pauseEvent;

var _reactDom = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === (0, _reactDom.findDOMNode)(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, (0, _toConsumableArray3['default'])(diffs)))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

/***/ })

}]);
//# sourceMappingURL=../map/videoMonitor.2a6428fc.map