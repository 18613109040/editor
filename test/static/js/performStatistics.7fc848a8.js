(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _shape = _interopRequireDefault(__webpack_require__(866));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SHAPE_MAP = {};
var INDEX = '_INDEX';

function getComparer(compare) {
  return function (left, right) {
    var result = compare(left, right);
    return result === 0 ? left[INDEX] - right[INDEX] : result;
  };
}

var _default = {
  getGroupClass: function getGroupClass() {},
  getChildren: function getChildren() {
    return this.get('children');
  },
  addShape: function addShape(type, cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var canvas = this.get('canvas');
    var shapeType = SHAPE_MAP[type];

    if (!shapeType) {
      shapeType = (0, _common.upperFirst)(type);
      SHAPE_MAP[type] = shapeType;
    }

    cfg.canvas = canvas;

    if (shapeType === 'Text' && canvas && canvas.get('fontFamily')) {
      cfg.attrs.fontFamily = cfg.attrs.fontFamily || canvas.get('fontFamily');
    }

    var shape = new _shape["default"][shapeType](cfg);
    this.add(shape);
    return shape;
  },
  addGroup: function addGroup(cfg) {
    var canvas = this.get('canvas');
    var groupClass = this.getGroupClass();
    cfg = (0, _common.mix)({}, cfg);
    cfg.canvas = canvas;
    cfg.parent = this;
    var rst = new groupClass(cfg);
    this.add(rst);
    return rst;
  },
  contain: function contain(item) {
    var children = this.get('children');
    return children.indexOf(item) > -1;
  },
  sort: function sort() {
    var children = this.get('children');

    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      child[INDEX] = i;
    }

    children.sort(getComparer(function (obj1, obj2) {
      return obj1.get('zIndex') - obj2.get('zIndex');
    }));
    return this;
  },
  clear: function clear() {
    var children = this.get('children');

    while (children.length !== 0) {
      children[children.length - 1].remove(true);
    }

    return this;
  },
  add: function add(items) {
    var self = this;
    var children = self.get('children');

    if (!(0, _common.isArray)(items)) {
      items = [items];
    }

    for (var i = 0, len = items.length; i < len; i++) {
      var item = items[i];
      var parent = item.get('parent');

      if (parent) {
        var descendants = parent.get('children');

        _common.Array.remove(descendants, item);
      }

      self._setEvn(item);

      children.push(item);
    }

    return self;
  },
  _setEvn: function _setEvn(item) {
    var self = this;
    item._attrs.parent = self;
    item._attrs.context = self._attrs.context;
    item._attrs.canvas = self._attrs.canvas;
    var clip = item._attrs.attrs.clip;

    if (clip) {
      clip.set('parent', self);
      clip.set('context', self.get('context'));
    }

    if (item._attrs.isGroup) {
      var children = item._attrs.children;

      for (var i = 0, len = children.length; i < len; i++) {
        item._setEvn(children[i]);
      }
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _matrix = _interopRequireDefault(__webpack_require__(1002));

var _vector = _interopRequireDefault(__webpack_require__(923));

var _styleParse = __webpack_require__(1221);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isUnchanged(m) {
  return m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1 && m[4] === 0 && m[5] === 0;
}

var ALIAS_ATTRS_MAP = {
  stroke: 'strokeStyle',
  fill: 'fillStyle',
  opacity: 'globalAlpha'
};
var SHAPE_ATTRS = ['fillStyle', 'font', 'globalAlpha', 'lineCap', 'lineWidth', 'lineJoin', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeStyle', 'textAlign', 'textBaseline', 'lineDash', 'shadow' // 兼容支付宝小程序
];
var CLIP_SHAPES = ['circle', 'sector', 'polygon', 'rect', 'polyline'];

var Element = /*#__PURE__*/function () {
  var _proto = Element.prototype;

  _proto._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false
    };
  };

  function Element(cfg) {
    this._initProperties();

    (0, _common.mix)(this._attrs, cfg);
    var attrs = this._attrs.attrs;

    if (attrs) {
      this.initAttrs(attrs);
    }

    this.initTransform();
  }

  _proto.get = function get(name) {
    return this._attrs[name];
  };

  _proto.set = function set(name, value) {
    this._attrs[name] = value;
  };

  _proto.isGroup = function isGroup() {
    return this.get('isGroup');
  };

  _proto.isShape = function isShape() {
    return this.get('isShape');
  };

  _proto.initAttrs = function initAttrs(attrs) {
    this.attr((0, _common.mix)(this.getDefaultAttrs(), attrs));
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {};
  };

  _proto._setAttr = function _setAttr(name, value) {
    var attrs = this._attrs.attrs;

    if (name === 'clip') {
      value = this._setAttrClip(value);
    } else {
      var alias = ALIAS_ATTRS_MAP[name];

      if (alias) {
        attrs[alias] = value;
      }
    }

    attrs[name] = value;
  };

  _proto._getAttr = function _getAttr(name) {
    return this._attrs.attrs[name];
  } // _afterAttrsSet() {}
  ;

  _proto._setAttrClip = function _setAttrClip(clip) {
    if (clip && CLIP_SHAPES.indexOf(clip._attrs.type) > -1) {
      if (clip.get('canvas') === null) {
        clip = Object.assign({}, clip);
      }

      clip.set('parent', this.get('parent'));
      clip.set('context', this.get('context'));
      return clip;
    }

    return null;
  };

  _proto.attr = function attr(name, value) {
    var self = this;
    if (self.get('destroyed')) return null;
    var argumentsLen = arguments.length;

    if (argumentsLen === 0) {
      return self._attrs.attrs;
    }

    if ((0, _common.isObject)(name)) {
      this._attrs.bbox = null;

      for (var k in name) {
        self._setAttr(k, name[k]);
      }

      if (self._afterAttrsSet) {
        self._afterAttrsSet();
      }

      return self;
    }

    if (argumentsLen === 2) {
      this._attrs.bbox = null;

      self._setAttr(name, value);

      if (self._afterAttrsSet) {
        self._afterAttrsSet();
      }

      return self;
    }

    return self._getAttr(name);
  };

  _proto.getParent = function getParent() {
    return this.get('parent');
  };

  _proto.draw = function draw(context) {
    if (this.get('destroyed')) {
      return;
    }

    if (this.get('visible')) {
      this.setContext(context);
      this.drawInner(context);
      this.restoreContext(context);
    }
  };

  _proto.setContext = function setContext(context) {
    var clip = this._attrs.attrs.clip;
    context.save();

    if (clip) {
      clip.resetTransform(context);
      clip.createPath(context);
      context.clip();
    }

    this.resetContext(context);
    this.resetTransform(context);
  };

  _proto.restoreContext = function restoreContext(context) {
    context.restore();
  };

  _proto.resetContext = function resetContext(context) {
    var elAttrs = this._attrs.attrs;

    if (!this._attrs.isGroup) {
      for (var k in elAttrs) {
        if (SHAPE_ATTRS.indexOf(k) > -1) {
          var v = elAttrs[k];

          if (k === 'fillStyle' || k === 'strokeStyle') {
            v = (0, _styleParse.parseStyle)(v, this, context);
          }

          if (k === 'lineDash' && context.setLineDash && (0, _common.isArray)(v)) {
            context.setLineDash(v);
          } else {
            context[k] = v;
          }
        }
      }
    }
  };

  _proto.hasFill = function hasFill() {
    return this.get('canFill') && this._attrs.attrs.fillStyle;
  };

  _proto.hasStroke = function hasStroke() {
    return this.get('canStroke') && this._attrs.attrs.strokeStyle;
  };

  _proto.drawInner = function drawInner()
  /* context */
  {};

  _proto.show = function show() {
    this.set('visible', true);
    return this;
  };

  _proto.hide = function hide() {
    this.set('visible', false);
    return this;
  };

  _proto.isVisible = function isVisible() {
    return this.get('visible');
  };

  _proto._removeFromParent = function _removeFromParent() {
    var parent = this.get('parent');

    if (parent) {
      var children = parent.get('children');

      _common.Array.remove(children, this);
    }

    return this;
  };

  _proto.remove = function remove(destroy) {
    if (destroy) {
      this.destroy();
    } else {
      this._removeFromParent();
    }
  };

  _proto.destroy = function destroy() {
    var destroyed = this.get('destroyed');

    if (destroyed) {
      return null;
    }

    this._removeFromParent();

    this._attrs = {};
    this.set('destroyed', true);
  };

  _proto.getBBox = function getBBox() {
    return {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
      width: 0,
      height: 0
    };
  };

  _proto.initTransform = function initTransform() {
    var attrs = this._attrs.attrs || {};

    if (!attrs.matrix) {
      attrs.matrix = [1, 0, 0, 1, 0, 0];
    }

    this._attrs.attrs = attrs;
  };

  _proto.getMatrix = function getMatrix() {
    return this._attrs.attrs.matrix;
  };

  _proto.setMatrix = function setMatrix(m) {
    this._attrs.attrs.matrix = [m[0], m[1], m[2], m[3], m[4], m[5]];
  };

  _proto.transform = function transform(actions) {
    var matrix = this._attrs.attrs.matrix;
    this._attrs.attrs.matrix = _matrix["default"].transform(matrix, actions);
    return this;
  };

  _proto.setTransform = function setTransform(actions) {
    this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0];
    return this.transform(actions);
  };

  _proto.translate = function translate(x, y) {
    var matrix = this._attrs.attrs.matrix;

    _matrix["default"].translate(matrix, matrix, [x, y]);
  };

  _proto.rotate = function rotate(rad) {
    var matrix = this._attrs.attrs.matrix;

    _matrix["default"].rotate(matrix, matrix, rad);
  };

  _proto.scale = function scale(sx, sy) {
    var matrix = this._attrs.attrs.matrix;

    _matrix["default"].scale(matrix, matrix, [sx, sy]);
  };

  _proto.moveTo = function moveTo(x, y) {
    var cx = this._attrs.x || 0;
    var cy = this._attrs.y || 0;
    this.translate(x - cx, y - cy);
    this.set('x', x);
    this.set('y', y);
  };

  _proto.apply = function apply(v) {
    var m = this._attrs.attrs.matrix;

    _vector["default"].transformMat2d(v, v, m);

    return this;
  };

  _proto.resetTransform = function resetTransform(context) {
    var mo = this._attrs.attrs.matrix;

    if (!isUnchanged(mo)) {
      context.transform(mo[0], mo[1], mo[2], mo[3], mo[4], mo[5]);
    }
  };

  _proto.isDestroyed = function isDestroyed() {
    return this.get('destroyed');
  };

  return Element;
}();

var _default = Element;
exports["default"] = _default;

/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var Matrix = {
  multiply: function multiply(m1, m2) {
    var m11 = m1[0] * m2[0] + m1[2] * m2[1];
    var m12 = m1[1] * m2[0] + m1[3] * m2[1];
    var m21 = m1[0] * m2[2] + m1[2] * m2[3];
    var m22 = m1[1] * m2[2] + m1[3] * m2[3];
    var dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
    var dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
    return [m11, m12, m21, m22, dx, dy];
  },
  scale: function scale(out, m, v) {
    out[0] = m[0] * v[0];
    out[1] = m[1] * v[0];
    out[2] = m[2] * v[1];
    out[3] = m[3] * v[1];
    out[4] = m[4];
    out[5] = m[5];
    return out;
  },
  rotate: function rotate(out, m, radian) {
    var c = Math.cos(radian);
    var s = Math.sin(radian);
    var m11 = m[0] * c + m[2] * s;
    var m12 = m[1] * c + m[3] * s;
    var m21 = m[0] * -s + m[2] * c;
    var m22 = m[1] * -s + m[3] * c;
    out[0] = m11;
    out[1] = m12;
    out[2] = m21;
    out[3] = m22;
    out[4] = m[4];
    out[5] = m[5];
    return out;
  },
  translate: function translate(out, m, v) {
    out[0] = m[0];
    out[1] = m[1];
    out[2] = m[2];
    out[3] = m[3];
    out[4] = m[4] + m[0] * v[0] + m[2] * v[1];
    out[5] = m[5] + m[1] * v[0] + m[3] * v[1];
    return out;
  },
  transform: function transform(m, actions) {
    var out = [].concat(m);

    for (var i = 0, len = actions.length; i < len; i++) {
      var action = actions[i];

      switch (action[0]) {
        case 't':
          Matrix.translate(out, out, [action[1], action[2]]);
          break;

        case 's':
          Matrix.scale(out, out, [action[1], action[2]]);
          break;

        case 'r':
          Matrix.rotate(out, out, action[1]);
          break;

        default:
          break;
      }
    }

    return out;
  }
};
var _default = Matrix;
exports["default"] = _default;

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _element = _interopRequireDefault(__webpack_require__(1001));

var _container = _interopRequireDefault(__webpack_require__(1000));

var _vector = _interopRequireDefault(__webpack_require__(923));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Group = /*#__PURE__*/function (_Element) {
  _inheritsLoose(Group, _Element);

  function Group() {
    return _Element.apply(this, arguments) || this;
  }

  var _proto = Group.prototype;

  _proto._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false,
      isGroup: true,
      children: []
    };
  };

  _proto.drawInner = function drawInner(context) {
    var children = this.get('children');

    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      child.draw(context);
    }

    return this;
  };

  _proto.getBBox = function getBBox() {
    var self = this;
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    var children = self.get('children');

    for (var i = 0, length = children.length; i < length; i++) {
      var child = children[i];

      if (child.get('visible')) {
        var box = child.getBBox();

        if (!box) {
          continue;
        }

        var leftTop = [box.minX, box.minY];
        var leftBottom = [box.minX, box.maxY];
        var rightTop = [box.maxX, box.minY];
        var rightBottom = [box.maxX, box.maxY];
        var matrix = child.attr('matrix');

        _vector["default"].transformMat2d(leftTop, leftTop, matrix);

        _vector["default"].transformMat2d(leftBottom, leftBottom, matrix);

        _vector["default"].transformMat2d(rightTop, rightTop, matrix);

        _vector["default"].transformMat2d(rightBottom, rightBottom, matrix);

        minX = Math.min(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], minX);
        maxX = Math.max(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], maxX);
        minY = Math.min(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], minY);
        maxY = Math.max(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], maxY);
      }
    }

    return {
      minX: minX,
      minY: minY,
      maxX: maxX,
      maxY: maxY,
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  };

  _proto.destroy = function destroy() {
    if (this.get('destroyed')) {
      return;
    }

    this.clear();

    _Element.prototype.destroy.call(this);
  };

  return Group;
}(_element["default"]);

(0, _common.mix)(Group.prototype, _container["default"], {
  getGroupClass: function getGroupClass() {
    return Group;
  }
});
var _default = Group;
exports["default"] = _default;

/***/ }),

/***/ 1004:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "contains", function() { return /* reexport */ esm_contains; });
__webpack_require__.d(__webpack_exports__, "includes", function() { return /* reexport */ esm_contains; });
__webpack_require__.d(__webpack_exports__, "difference", function() { return /* reexport */ esm_difference; });
__webpack_require__.d(__webpack_exports__, "find", function() { return /* reexport */ esm_find; });
__webpack_require__.d(__webpack_exports__, "findIndex", function() { return /* reexport */ find_index; });
__webpack_require__.d(__webpack_exports__, "firstValue", function() { return /* reexport */ first_value; });
__webpack_require__.d(__webpack_exports__, "flatten", function() { return /* reexport */ esm_flatten; });
__webpack_require__.d(__webpack_exports__, "flattenDeep", function() { return /* reexport */ flatten_deep; });
__webpack_require__.d(__webpack_exports__, "getRange", function() { return /* reexport */ get_range; });
__webpack_require__.d(__webpack_exports__, "pull", function() { return /* reexport */ esm_pull; });
__webpack_require__.d(__webpack_exports__, "pullAt", function() { return /* reexport */ pull_at; });
__webpack_require__.d(__webpack_exports__, "reduce", function() { return /* reexport */ esm_reduce; });
__webpack_require__.d(__webpack_exports__, "remove", function() { return /* reexport */ esm_remove; });
__webpack_require__.d(__webpack_exports__, "sortBy", function() { return /* reexport */ sort_by; });
__webpack_require__.d(__webpack_exports__, "union", function() { return /* reexport */ esm_union; });
__webpack_require__.d(__webpack_exports__, "uniq", function() { return /* reexport */ esm_uniq; });
__webpack_require__.d(__webpack_exports__, "valuesOfKey", function() { return /* reexport */ values_of_key; });
__webpack_require__.d(__webpack_exports__, "head", function() { return /* reexport */ head; });
__webpack_require__.d(__webpack_exports__, "last", function() { return /* reexport */ last_last; });
__webpack_require__.d(__webpack_exports__, "startsWith", function() { return /* reexport */ starts_with; });
__webpack_require__.d(__webpack_exports__, "endsWith", function() { return /* reexport */ ends_with; });
__webpack_require__.d(__webpack_exports__, "filter", function() { return /* reexport */ esm_filter; });
__webpack_require__.d(__webpack_exports__, "every", function() { return /* reexport */ esm_every; });
__webpack_require__.d(__webpack_exports__, "some", function() { return /* reexport */ esm_some; });
__webpack_require__.d(__webpack_exports__, "group", function() { return /* reexport */ group; });
__webpack_require__.d(__webpack_exports__, "groupBy", function() { return /* reexport */ group_by; });
__webpack_require__.d(__webpack_exports__, "groupToMap", function() { return /* reexport */ group_to_map; });
__webpack_require__.d(__webpack_exports__, "getWrapBehavior", function() { return /* reexport */ get_wrap_behavior; });
__webpack_require__.d(__webpack_exports__, "wrapBehavior", function() { return /* reexport */ wrap_behavior; });
__webpack_require__.d(__webpack_exports__, "number2color", function() { return /* reexport */ number2color; });
__webpack_require__.d(__webpack_exports__, "parseRadius", function() { return /* reexport */ parse_radius; });
__webpack_require__.d(__webpack_exports__, "clamp", function() { return /* reexport */ esm_clamp; });
__webpack_require__.d(__webpack_exports__, "fixedBase", function() { return /* reexport */ fixed_base; });
__webpack_require__.d(__webpack_exports__, "isDecimal", function() { return /* reexport */ is_decimal; });
__webpack_require__.d(__webpack_exports__, "isEven", function() { return /* reexport */ is_even; });
__webpack_require__.d(__webpack_exports__, "isInteger", function() { return /* reexport */ is_integer; });
__webpack_require__.d(__webpack_exports__, "isNegative", function() { return /* reexport */ is_negative; });
__webpack_require__.d(__webpack_exports__, "isNumberEqual", function() { return /* reexport */ isNumberEqual; });
__webpack_require__.d(__webpack_exports__, "isOdd", function() { return /* reexport */ is_odd; });
__webpack_require__.d(__webpack_exports__, "isPositive", function() { return /* reexport */ is_positive; });
__webpack_require__.d(__webpack_exports__, "maxBy", function() { return /* reexport */ max_by; });
__webpack_require__.d(__webpack_exports__, "minBy", function() { return /* reexport */ min_by; });
__webpack_require__.d(__webpack_exports__, "mod", function() { return /* reexport */ esm_mod; });
__webpack_require__.d(__webpack_exports__, "toDegree", function() { return /* reexport */ to_degree; });
__webpack_require__.d(__webpack_exports__, "toInteger", function() { return /* reexport */ to_integer; });
__webpack_require__.d(__webpack_exports__, "toRadian", function() { return /* reexport */ to_radian; });
__webpack_require__.d(__webpack_exports__, "forIn", function() { return /* reexport */ for_in; });
__webpack_require__.d(__webpack_exports__, "has", function() { return /* reexport */ has; });
__webpack_require__.d(__webpack_exports__, "hasKey", function() { return /* reexport */ has_key; });
__webpack_require__.d(__webpack_exports__, "hasValue", function() { return /* reexport */ has_value; });
__webpack_require__.d(__webpack_exports__, "keys", function() { return /* reexport */ esm_keys; });
__webpack_require__.d(__webpack_exports__, "isMatch", function() { return /* reexport */ is_match; });
__webpack_require__.d(__webpack_exports__, "values", function() { return /* reexport */ esm_values; });
__webpack_require__.d(__webpack_exports__, "lowerCase", function() { return /* reexport */ lower_case; });
__webpack_require__.d(__webpack_exports__, "lowerFirst", function() { return /* reexport */ lower_first; });
__webpack_require__.d(__webpack_exports__, "substitute", function() { return /* reexport */ esm_substitute; });
__webpack_require__.d(__webpack_exports__, "upperCase", function() { return /* reexport */ upper_case; });
__webpack_require__.d(__webpack_exports__, "upperFirst", function() { return /* reexport */ upper_first; });
__webpack_require__.d(__webpack_exports__, "getType", function() { return /* reexport */ get_type; });
__webpack_require__.d(__webpack_exports__, "isArguments", function() { return /* reexport */ is_arguments; });
__webpack_require__.d(__webpack_exports__, "isArray", function() { return /* reexport */ is_array; });
__webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return /* reexport */ is_array_like; });
__webpack_require__.d(__webpack_exports__, "isBoolean", function() { return /* reexport */ is_boolean; });
__webpack_require__.d(__webpack_exports__, "isDate", function() { return /* reexport */ is_date; });
__webpack_require__.d(__webpack_exports__, "isError", function() { return /* reexport */ is_error; });
__webpack_require__.d(__webpack_exports__, "isFunction", function() { return /* reexport */ is_function; });
__webpack_require__.d(__webpack_exports__, "isFinite", function() { return /* reexport */ is_finite; });
__webpack_require__.d(__webpack_exports__, "isNil", function() { return /* reexport */ is_nil; });
__webpack_require__.d(__webpack_exports__, "isNull", function() { return /* reexport */ is_null; });
__webpack_require__.d(__webpack_exports__, "isNumber", function() { return /* reexport */ is_number; });
__webpack_require__.d(__webpack_exports__, "isObject", function() { return /* reexport */ is_object; });
__webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return /* reexport */ is_object_like; });
__webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return /* reexport */ is_plain_object; });
__webpack_require__.d(__webpack_exports__, "isPrototype", function() { return /* reexport */ is_prototype; });
__webpack_require__.d(__webpack_exports__, "isRegExp", function() { return /* reexport */ is_reg_exp; });
__webpack_require__.d(__webpack_exports__, "isString", function() { return /* reexport */ is_string; });
__webpack_require__.d(__webpack_exports__, "isType", function() { return /* reexport */ is_type; });
__webpack_require__.d(__webpack_exports__, "isUndefined", function() { return /* reexport */ is_undefined; });
__webpack_require__.d(__webpack_exports__, "isElement", function() { return /* reexport */ is_element; });
__webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return /* reexport */ requestAnimationFrame; });
__webpack_require__.d(__webpack_exports__, "clearAnimationFrame", function() { return /* reexport */ cancelAnimationFrame; });
__webpack_require__.d(__webpack_exports__, "augment", function() { return /* reexport */ esm_augment; });
__webpack_require__.d(__webpack_exports__, "clone", function() { return /* reexport */ esm_clone; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ esm_debounce; });
__webpack_require__.d(__webpack_exports__, "memoize", function() { return /* reexport */ memoize; });
__webpack_require__.d(__webpack_exports__, "deepMix", function() { return /* reexport */ deep_mix; });
__webpack_require__.d(__webpack_exports__, "each", function() { return /* reexport */ esm_each; });
__webpack_require__.d(__webpack_exports__, "extend", function() { return /* reexport */ esm_extend; });
__webpack_require__.d(__webpack_exports__, "indexOf", function() { return /* reexport */ index_of; });
__webpack_require__.d(__webpack_exports__, "isEmpty", function() { return /* reexport */ is_empty; });
__webpack_require__.d(__webpack_exports__, "isEqual", function() { return /* reexport */ is_equal; });
__webpack_require__.d(__webpack_exports__, "isEqualWith", function() { return /* reexport */ is_equal_with; });
__webpack_require__.d(__webpack_exports__, "map", function() { return /* reexport */ esm_map; });
__webpack_require__.d(__webpack_exports__, "mapValues", function() { return /* reexport */ map_values; });
__webpack_require__.d(__webpack_exports__, "mix", function() { return /* reexport */ mix; });
__webpack_require__.d(__webpack_exports__, "assign", function() { return /* reexport */ mix; });
__webpack_require__.d(__webpack_exports__, "get", function() { return /* reexport */ get; });
__webpack_require__.d(__webpack_exports__, "set", function() { return /* reexport */ set; });
__webpack_require__.d(__webpack_exports__, "pick", function() { return /* reexport */ pick; });
__webpack_require__.d(__webpack_exports__, "throttle", function() { return /* reexport */ throttle; });
__webpack_require__.d(__webpack_exports__, "toArray", function() { return /* reexport */ to_array; });
__webpack_require__.d(__webpack_exports__, "toString", function() { return /* reexport */ to_string; });
__webpack_require__.d(__webpack_exports__, "uniqueId", function() { return /* reexport */ unique_id; });
__webpack_require__.d(__webpack_exports__, "noop", function() { return /* reexport */ noop; });
__webpack_require__.d(__webpack_exports__, "identity", function() { return /* reexport */ esm_identity; });
__webpack_require__.d(__webpack_exports__, "size", function() { return /* reexport */ size; });
__webpack_require__.d(__webpack_exports__, "Cache", function() { return /* reexport */ cache; });

// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-array-like.js
var isArrayLike = function (value) {
    /**
     * isArrayLike([1, 2, 3]) => true
     * isArrayLike(document.body.children) => true
     * isArrayLike('abc') => true
     * isArrayLike(Function) => false
     */
    return value !== null && typeof value !== 'function' && isFinite(value.length);
};
/* harmony default export */ var is_array_like = (isArrayLike);
//# sourceMappingURL=is-array-like.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/contains.js

var contains = function (arr, value) {
    if (!is_array_like(arr)) {
        return false;
    }
    return arr.indexOf(value) > -1;
};
/* harmony default export */ var esm_contains = (contains);
//# sourceMappingURL=contains.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/filter.js

var filter = function (arr, func) {
    if (!is_array_like(arr)) {
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        if (func(value, index)) {
            result.push(value);
        }
    }
    return result;
};
/* harmony default export */ var esm_filter = (filter);
//# sourceMappingURL=filter.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/difference.js


/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to inspect.
 * @param {Array} values The values to exclude.
 * @return {Array} Returns the new array of filtered values.
 * @example
 * difference([2, 1], [2, 3]);  // => [1]
 */
var difference = function (arr, values) {
    if (values === void 0) { values = []; }
    return esm_filter(arr, function (value) { return !esm_contains(values, value); });
};
/* harmony default export */ var esm_difference = (difference);
//# sourceMappingURL=difference.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-type.js
var is_type_toString = {}.toString;
var isType = function (value, type) { return is_type_toString.call(value) === '[object ' + type + ']'; };
/* harmony default export */ var is_type = (isType);
//# sourceMappingURL=is-type.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-function.js
/**
 * 是否为函数
 * @param  {*} fn 对象
 * @return {Boolean}  是否函数
 */

/* harmony default export */ var is_function = (function (value) {
    return is_type(value, 'Function');
});
//# sourceMappingURL=is-function.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-nil.js
// isFinite,
var isNil = function (value) {
    /**
     * isNil(null) => true
     * isNil() => true
     */
    return value === null || value === undefined;
};
/* harmony default export */ var is_nil = (isNil);
//# sourceMappingURL=is-nil.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-array.js

/* harmony default export */ var is_array = (function (value) {
    return Array.isArray ?
        Array.isArray(value) :
        is_type(value, 'Array');
});
//# sourceMappingURL=is-array.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-object.js
/* harmony default export */ var is_object = (function (value) {
    /**
     * isObject({}) => true
     * isObject([1, 2, 3]) => true
     * isObject(Function) => true
     * isObject(null) => false
     */
    var type = typeof value;
    return value !== null && type === 'object' || type === 'function';
});
//# sourceMappingURL=is-object.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/each.js


function each(elements, func) {
    if (!elements) {
        return;
    }
    var rst;
    if (is_array(elements)) {
        for (var i = 0, len = elements.length; i < len; i++) {
            rst = func(elements[i], i);
            if (rst === false) {
                break;
            }
        }
    }
    else if (is_object(elements)) {
        for (var k in elements) {
            if (elements.hasOwnProperty(k)) {
                rst = func(elements[k], k);
                if (rst === false) {
                    break;
                }
            }
        }
    }
}
/* harmony default export */ var esm_each = (each);
//# sourceMappingURL=each.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/keys.js


var keys_keys = Object.keys ? function (obj) { return Object.keys(obj); } : function (obj) {
    var result = [];
    esm_each(obj, function (value, key) {
        if (!(is_function(obj) && key === 'prototype')) {
            result.push(key);
        }
    });
    return result;
};
/* harmony default export */ var esm_keys = (keys_keys);
//# sourceMappingURL=keys.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-match.js


function isMatch(obj, attrs) {
    var _keys = esm_keys(attrs);
    var length = _keys.length;
    if (is_nil(obj))
        return !length;
    for (var i = 0; i < length; i += 1) {
        var key = _keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) {
            return false;
        }
    }
    return true;
}
/* harmony default export */ var is_match = (isMatch);
//# sourceMappingURL=is-match.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-object-like.js
var isObjectLike = function (value) {
    /**
     * isObjectLike({}) => true
     * isObjectLike([1, 2, 3]) => true
     * isObjectLike(Function) => false
     * isObjectLike(null) => false
     */
    return typeof value === 'object' && value !== null;
};
/* harmony default export */ var is_object_like = (isObjectLike);
//# sourceMappingURL=is-object-like.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-plain-object.js


var isPlainObject = function (value) {
    /**
     * isObjectLike(new Foo) => false
     * isObjectLike([1, 2, 3]) => false
     * isObjectLike({ x: 0, y: 0 }) => true
     * isObjectLike(Object.create(null)) => true
     */
    if (!is_object_like(value) || !is_type(value, 'Object')) {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    var proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};
/* harmony default export */ var is_plain_object = (isPlainObject);
//# sourceMappingURL=is-plain-object.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/find.js




function find(arr, predicate) {
    if (!is_array(arr))
        return null;
    var _predicate;
    if (is_function(predicate)) {
        _predicate = predicate;
    }
    if (is_plain_object(predicate)) {
        _predicate = function (a) { return is_match(a, predicate); };
    }
    if (_predicate) {
        for (var i = 0; i < arr.length; i += 1) {
            if (_predicate(arr[i])) {
                return arr[i];
            }
        }
    }
    return null;
}
/* harmony default export */ var esm_find = (find);
//# sourceMappingURL=find.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/find-index.js
function findIndex(arr, predicate, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = fromIndex; i < arr.length; i++) {
        if (predicate(arr[i], i)) {
            // 找到终止循环
            return i;
        }
    }
    return -1;
}
/* harmony default export */ var find_index = (findIndex);
//# sourceMappingURL=find-index.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/first-value.js


var firstValue = function (data, name) {
    var rst = null;
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!is_nil(value)) {
            if (is_array(value)) {
                rst = value[0]; // todo 这里是否应该使用递归，调用 firstValue @绝云
            }
            else {
                rst = value;
            }
            break;
        }
    }
    return rst;
};
/* harmony default export */ var first_value = (firstValue);
//# sourceMappingURL=first-value.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/flatten.js

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flatten([1, [2, [3, [4]], 5]]);  // => [1, 2, [3, [4]], 5]
 */
var flatten = function (arr) {
    if (!is_array(arr)) {
        return [];
    }
    var rst = [];
    for (var i = 0; i < arr.length; i++) {
        rst = rst.concat(arr[i]);
    }
    return rst;
};
/* harmony default export */ var esm_flatten = (flatten);
//# sourceMappingURL=flatten.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/flatten-deep.js

/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to flatten.
 * @param {Array} result The array to return.
 * @return {Array} Returns the new flattened array.
 * @example
 *
 * flattenDeep([1, [2, [3, [4]], 5]]);  // => [1, 2, 3, 4, 5]
 */
var flattenDeep = function (arr, result) {
    if (result === void 0) { result = []; }
    if (!is_array(arr)) {
        result.push(arr);
    }
    else {
        for (var i = 0; i < arr.length; i += 1) {
            flattenDeep(arr[i], result);
        }
    }
    return result;
};
/* harmony default export */ var flatten_deep = (flattenDeep);
//# sourceMappingURL=flatten-deep.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/get-range.js

var getRange = function (values) {
    // 存在 NaN 时，min,max 判定会出问题
    var filterValues = values.filter(function (v) { return !isNaN(v); });
    if (!filterValues.length) { // 如果没有数值则直接返回0
        return {
            min: 0,
            max: 0,
        };
    }
    if (is_array(values[0])) {
        var tmp = [];
        for (var i = 0; i < values.length; i++) {
            tmp = tmp.concat(values[i]);
        }
        filterValues = tmp;
    }
    var max = Math.max.apply(null, filterValues);
    var min = Math.min.apply(null, filterValues);
    return {
        min: min,
        max: max,
    };
};
/* harmony default export */ var get_range = (getRange);
//# sourceMappingURL=get-range.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/pull.js
var arrPrototype = Array.prototype;
var splice = arrPrototype.splice;
var indexOf = arrPrototype.indexOf;
var pull = function (arr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        var fromIndex = -1;
        while ((fromIndex = indexOf.call(arr, value)) > -1) {
            splice.call(arr, fromIndex, 1);
        }
    }
    return arr;
};
/* harmony default export */ var esm_pull = (pull);
//# sourceMappingURL=pull.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/pull-at.js

var pull_at_splice = Array.prototype.splice;
var pull_at_pullAt = function pullAt(arr, indexes) {
    if (!is_array_like(arr)) {
        return [];
    }
    var length = arr ? indexes.length : 0;
    var last = length - 1;
    while (length--) {
        var previous = void 0;
        var index = indexes[length];
        if (length === last || index !== previous) {
            previous = index;
            pull_at_splice.call(arr, index, 1);
        }
    }
    return arr;
};
/* harmony default export */ var pull_at = (pull_at_pullAt);
//# sourceMappingURL=pull-at.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/reduce.js



var reduce = function (arr, fn, init) {
    if (!is_array(arr) && !is_plain_object(arr)) {
        return arr;
    }
    var result = init;
    esm_each(arr, function (data, i) {
        result = fn(result, data, i);
    });
    return result;
};
/* harmony default export */ var esm_reduce = (reduce);
//# sourceMappingURL=reduce.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/remove.js


var remove = function (arr, predicate) {
    /**
     * const arr = [1, 2, 3, 4]
     * const evens = remove(arr, n => n % 2 == 0)
     * console.log(arr) // => [1, 3]
     * console.log(evens) // => [2, 4]
     */
    var result = [];
    if (!is_array_like(arr)) {
        return result;
    }
    var i = -1;
    var indexes = [];
    var length = arr.length;
    while (++i < length) {
        var value = arr[i];
        if (predicate(value, i, arr)) {
            result.push(value);
            indexes.push(i);
        }
    }
    pull_at(arr, indexes);
    return result;
};
/* harmony default export */ var esm_remove = (remove);
//# sourceMappingURL=remove.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-string.js

/* harmony default export */ var is_string = (function (str) {
    return is_type(str, 'String');
});
//# sourceMappingURL=is-string.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/sort-by.js



function sortBy(arr, key) {
    var comparer;
    if (is_function(key)) {
        comparer = function (a, b) { return key(a) - key(b); };
    }
    else {
        var keys_1 = [];
        if (is_string(key)) {
            keys_1.push(key);
        }
        else if (is_array(key)) {
            keys_1 = key;
        }
        comparer = function (a, b) {
            for (var i = 0; i < keys_1.length; i += 1) {
                var prop = keys_1[i];
                if (a[prop] > b[prop]) {
                    return 1;
                }
                if (a[prop] < b[prop]) {
                    return -1;
                }
            }
            return 0;
        };
    }
    arr.sort(comparer);
    return arr;
}
/* harmony default export */ var sort_by = (sortBy);
//# sourceMappingURL=sort-by.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/uniq.js


var uniq = function (arr) {
    var resultArr = [];
    esm_each(arr, function (item) {
        if (!esm_contains(resultArr, item)) {
            resultArr.push(item);
        }
    });
    return resultArr;
};
/* harmony default export */ var esm_uniq = (uniq);
//# sourceMappingURL=uniq.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/union.js

var union = function () {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return esm_uniq([].concat.apply([], sources));
};
/* harmony default export */ var esm_union = (union);
//# sourceMappingURL=union.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/values-of-key.js


/* harmony default export */ var values_of_key = (function (data, name) {
    var rst = [];
    var tmpMap = {};
    for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        var value = obj[name];
        if (!is_nil(value)) {
            // flatten
            if (!is_array(value)) {
                value = [value];
            }
            for (var j = 0; j < value.length; j++) {
                var val = value[j];
                // unique
                if (!tmpMap[val]) {
                    rst.push(val);
                    tmpMap[val] = true;
                }
            }
        }
    }
    return rst;
});
//# sourceMappingURL=values-of-key.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/head.js

function head(o) {
    if (is_array_like(o)) {
        return o[0];
    }
    return undefined;
}
//# sourceMappingURL=head.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/last.js

function last_last(o) {
    if (is_array_like(o)) {
        var arr = o;
        return arr[arr.length - 1];
    }
    return undefined;
}
//# sourceMappingURL=last.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/starts-with.js


function startsWith(arr, e) {
    return (is_array(arr) || is_string(arr)) ? arr[0] === e : false;
}
/* harmony default export */ var starts_with = (startsWith);
//# sourceMappingURL=starts-with.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/ends-with.js


function endsWith(arr, e) {
    return (is_array(arr) || is_string(arr)) ? arr[arr.length - 1] === e : false;
}
/* harmony default export */ var ends_with = (endsWith);
//# sourceMappingURL=ends-with.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/every.js
/**
 * 只要有一个不满足条件就返回 false
 * @param arr
 * @param func
 */
var every = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i], i))
            return false;
    }
    return true;
};
/* harmony default export */ var esm_every = (every);
//# sourceMappingURL=every.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/some.js
/**
 * 只要有一个满足条件就返回 true
 * @param arr
 * @param func
 */
var some = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i))
            return true;
    }
    return false;
};
/* harmony default export */ var esm_some = (some);
//# sourceMappingURL=some.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/group-by.js


var group_by_hasOwnProperty = Object.prototype.hasOwnProperty;
function groupBy(data, condition) {
    if (!condition || !is_array(data)) {
        return {};
    }
    var result = {};
    // 兼容方法和 字符串的写法
    var predicate = is_function(condition) ? condition : function (item) { return item[condition]; };
    var key;
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        key = predicate(item);
        if (group_by_hasOwnProperty.call(result, key)) {
            result[key].push(item);
        }
        else {
            result[key] = [item];
        }
    }
    return result;
}
/* harmony default export */ var group_by = (groupBy);
//# sourceMappingURL=group-by.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/group-to-map.js



var groupToMap = function (data, condition) {
    if (!condition) {
        return {
            0: data,
        };
    }
    if (!is_function(condition)) {
        var paramsCondition_1 = is_array(condition) ? condition : condition.replace(/\s+/g, '').split('*');
        condition = function (row) {
            var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序
            for (var i = 0, l = paramsCondition_1.length; i < l; i++) {
                unique += row[paramsCondition_1[i]] && row[paramsCondition_1[i]].toString();
            }
            return unique;
        };
    }
    var groups = group_by(data, condition);
    return groups;
};
/* harmony default export */ var group_to_map = (groupToMap);
//# sourceMappingURL=group-to-map.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/group.js

/* harmony default export */ var group = (function (data, condition) {
    if (!condition) {
        // 没有条件，则自身改成数组
        return [data];
    }
    var groups = group_to_map(data, condition);
    var array = [];
    for (var i in groups) {
        array.push(groups[i]);
    }
    return array;
});
//# sourceMappingURL=group.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/get-wrap-behavior.js
/**
 * 获取封装的事件
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function getWrapBehavior(obj, action) {
    return obj['_wrap_' + action];
}
/* harmony default export */ var get_wrap_behavior = (getWrapBehavior);
//# sourceMappingURL=get-wrap-behavior.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/wrap-behavior.js
/**
 * 封装事件，便于使用上下文this,和便于解除事件时使用
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function wrapBehavior(obj, action) {
    if (obj['_wrap_' + action]) {
        return obj['_wrap_' + action];
    }
    var method = function (e) {
        obj[action](e);
    };
    obj['_wrap_' + action] = method;
    return method;
}
/* harmony default export */ var wrap_behavior = (wrapBehavior);
//# sourceMappingURL=wrap-behavior.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/number2color.js
var numColorCache = {};
function numberToColor(num) {
    // 增加缓存
    var color = numColorCache[num];
    if (!color) {
        var str = num.toString(16);
        for (var i = str.length; i < 6; i++) {
            str = '0' + str;
        }
        color = '#' + str;
        numColorCache[num] = color;
    }
    return color;
}
/* harmony default export */ var number2color = (numberToColor);
//# sourceMappingURL=number2color.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/parse-radius.js

function parseRadius(radius) {
    var r1 = 0, r2 = 0, r3 = 0, r4 = 0;
    if (is_array(radius)) {
        if (radius.length === 1) {
            r1 = r2 = r3 = r4 = radius[0];
        }
        else if (radius.length === 2) {
            r1 = r3 = radius[0];
            r2 = r4 = radius[1];
        }
        else if (radius.length === 3) {
            r1 = radius[0];
            r2 = r4 = radius[1];
            r3 = radius[2];
        }
        else {
            r1 = radius[0];
            r2 = radius[1];
            r3 = radius[2];
            r4 = radius[3];
        }
    }
    else {
        r1 = r2 = r3 = r4 = radius;
    }
    return {
        r1: r1,
        r2: r2,
        r3: r3,
        r4: r4
    };
}
/* harmony default export */ var parse_radius = (parseRadius);
//# sourceMappingURL=parse-radius.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/clamp.js
var clamp = function (a, min, max) {
    if (a < min) {
        return min;
    }
    else if (a > max) {
        return max;
    }
    return a;
};
/* harmony default export */ var esm_clamp = (clamp);
//# sourceMappingURL=clamp.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/fixed-base.js
var fixedBase = function (v, base) {
    var str = base.toString();
    var index = str.indexOf('.');
    if (index === -1) {
        return Math.round(v);
    }
    var length = str.substr(index + 1).length;
    if (length > 20) {
        length = 20;
    }
    return parseFloat(v.toFixed(length));
};
/* harmony default export */ var fixed_base = (fixedBase);
//# sourceMappingURL=fixed-base.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-number.js
/**
 * 判断是否数字
 * @return {Boolean} 是否数字
 */

var isNumber = function (value) {
    return is_type(value, 'Number');
};
/* harmony default export */ var is_number = (isNumber);
//# sourceMappingURL=is-number.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-decimal.js

var isDecimal = function (num) {
    return is_number(num) && num % 1 !== 0;
};
/* harmony default export */ var is_decimal = (isDecimal);
//# sourceMappingURL=is-decimal.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-even.js

var isEven = function (num) {
    return is_number(num) && num % 2 === 0;
};
/* harmony default export */ var is_even = (isEven);
//# sourceMappingURL=is-even.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-integer.js

var isInteger = Number.isInteger ? Number.isInteger : function (num) {
    return is_number(num) && num % 1 === 0;
};
/* harmony default export */ var is_integer = (isInteger);
//# sourceMappingURL=is-integer.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-negative.js

var isNegative = function (num) {
    return is_number(num) && num < 0;
};
/* harmony default export */ var is_negative = (isNegative);
//# sourceMappingURL=is-negative.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-number-equal.js
var PRECISION = 0.00001; // numbers less than this is considered as 0
function isNumberEqual(a, b, precision) {
    if (precision === void 0) { precision = PRECISION; }
    return Math.abs((a - b)) < precision;
}
;
//# sourceMappingURL=is-number-equal.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-odd.js

var isOdd = function (num) {
    return is_number(num) && num % 2 !== 0;
};
/* harmony default export */ var is_odd = (isOdd);
//# sourceMappingURL=is-odd.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-positive.js

var isPositive = function (num) {
    return is_number(num) && num > 0;
};
/* harmony default export */ var is_positive = (isPositive);
//# sourceMappingURL=is-positive.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/max-by.js



/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
/* harmony default export */ var max_by = (function (arr, fn) {
    if (!is_array(arr)) {
        return undefined;
    }
    var max = arr[0];
    var maxData;
    if (is_function(fn)) {
        maxData = fn(arr[0]);
    }
    else {
        maxData = arr[0][fn];
    }
    var data;
    esm_each(arr, function (val) {
        if (is_function(fn)) {
            data = fn(val);
        }
        else {
            data = val[fn];
        }
        if (data > maxData) {
            max = val;
            maxData = data;
        }
    });
    return max;
});
//# sourceMappingURL=max-by.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/min-by.js



/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * minBy(objects, 'n');
 * // => { 'n': 1 }
 */
/* harmony default export */ var min_by = (function (arr, fn) {
    if (!is_array(arr)) {
        return undefined;
    }
    var min = arr[0];
    var minData;
    if (is_function(fn)) {
        minData = fn(arr[0]);
    }
    else {
        minData = arr[0][fn];
    }
    var data;
    esm_each(arr, function (val) {
        if (is_function(fn)) {
            data = fn(val);
        }
        else {
            data = val[fn];
        }
        if (data < minData) {
            min = val;
            minData = data;
        }
    });
    return min;
});
//# sourceMappingURL=min-by.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/mod.js
var mod = function (n, m) {
    return ((n % m) + m) % m;
};
/* harmony default export */ var esm_mod = (mod);
//# sourceMappingURL=mod.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/to-degree.js
var DEGREE = 180 / Math.PI;
var toDegree = function (radian) {
    return DEGREE * radian;
};
/* harmony default export */ var to_degree = (toDegree);
//# sourceMappingURL=to-degree.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/to-integer.js
/* harmony default export */ var to_integer = (parseInt);
//# sourceMappingURL=to-integer.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/to-radian.js
var RADIAN = Math.PI / 180;
var toRadian = function (degree) {
    return RADIAN * degree;
};
/* harmony default export */ var to_radian = (toRadian);
//# sourceMappingURL=to-radian.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/for-in.js

/* harmony default export */ var for_in = (esm_each);
//# sourceMappingURL=for-in.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/has.js
/* harmony default export */ var has = (function (obj, key) { return obj.hasOwnProperty(key); });
//# sourceMappingURL=has.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/has-key.js

/* harmony default export */ var has_key = (has);
//# sourceMappingURL=has-key.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/values.js


// @ts-ignore
var values_values = Object.values ? function (obj) { return Object.values(obj); } : function (obj) {
    var result = [];
    esm_each(obj, function (value, key) {
        if (!(is_function(obj) && key === 'prototype')) {
            result.push(value);
        }
    });
    return result;
};
/* harmony default export */ var esm_values = (values_values);
//# sourceMappingURL=values.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/has-value.js


/* harmony default export */ var has_value = (function (obj, value) { return esm_contains(esm_values(obj), value); });
//# sourceMappingURL=has-value.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/to-string.js

/* harmony default export */ var to_string = (function (value) {
    if (is_nil(value))
        return '';
    return value.toString();
});
//# sourceMappingURL=to-string.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/lower-case.js

var lowerCase = function (str) {
    return to_string(str).toLowerCase();
};
/* harmony default export */ var lower_case = (lowerCase);
//# sourceMappingURL=lower-case.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/lower-first.js

var lowerFirst = function (value) {
    var str = to_string(value);
    return str.charAt(0).toLowerCase() + str.substring(1);
};
/* harmony default export */ var lower_first = (lowerFirst);
//# sourceMappingURL=lower-first.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/substitute.js
function substitute(str, o) {
    if (!str || !o) {
        return str;
    }
    return str.replace(/\\?\{([^{}]+)\}/g, function (match, name) {
        if (match.charAt(0) === '\\') {
            return match.slice(1);
        }
        return (o[name] === undefined) ? '' : o[name];
    });
}
/* harmony default export */ var esm_substitute = (substitute);
//# sourceMappingURL=substitute.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/upper-case.js

var upperCase = function (str) {
    return to_string(str).toUpperCase();
};
/* harmony default export */ var upper_case = (upperCase);
//# sourceMappingURL=upper-case.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/upper-first.js

var upperFirst = function (value) {
    var str = to_string(value);
    return str.charAt(0).toUpperCase() + str.substring(1);
};
/* harmony default export */ var upper_first = (upperFirst);
//# sourceMappingURL=upper-first.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/get-type.js
var get_type_toString = {}.toString;
var getType = function (value) {
    return get_type_toString.call(value).replace(/^\[object /, '').replace(/]$/, '');
};
/* harmony default export */ var get_type = (getType);
//# sourceMappingURL=get-type.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-arguments.js
/**
 * 是否是参数类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */

var isArguments = function (value) {
    return is_type(value, 'Arguments');
};
/* harmony default export */ var is_arguments = (isArguments);
//# sourceMappingURL=is-arguments.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-boolean.js
/**
 * 是否是布尔类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */

var isBoolean = function (value) {
    return is_type(value, 'Boolean');
};
/* harmony default export */ var is_boolean = (isBoolean);
//# sourceMappingURL=is-boolean.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-date.js

var isDate = function (value) {
    return is_type(value, 'Date');
};
/* harmony default export */ var is_date = (isDate);
//# sourceMappingURL=is-date.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-error.js
/**
 * 是否是参数类型
 *
 * @param {Object} value 测试的值
 * @return {Boolean}
 */

var isError = function (value) {
    return is_type(value, 'Error');
};
/* harmony default export */ var is_error = (isError);
//# sourceMappingURL=is-error.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-finite.js
/**
 * 判断是否为有限数
 * @return {Boolean}
 */

/* harmony default export */ var is_finite = (function (value) {
    return is_number(value) && isFinite(value);
});
//# sourceMappingURL=is-finite.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-null.js
var isNull = function (value) {
    return value === null;
};
/* harmony default export */ var is_null = (isNull);
//# sourceMappingURL=is-null.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-prototype.js
var objectProto = Object.prototype;
var isPrototype = function (value) {
    var Ctor = value && value.constructor;
    var proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;
    return value === proto;
};
/* harmony default export */ var is_prototype = (isPrototype);
//# sourceMappingURL=is-prototype.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-reg-exp.js

var isRegExp = function (str) {
    return is_type(str, 'RegExp');
};
/* harmony default export */ var is_reg_exp = (isRegExp);
//# sourceMappingURL=is-reg-exp.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-undefined.js
var isUndefined = function (value) {
    return value === undefined;
};
/* harmony default export */ var is_undefined = (isUndefined);
//# sourceMappingURL=is-undefined.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-element.js
/**
 * 判断是否HTML元素
 * @return {Boolean} 是否HTML元素
 */
var isElement = function (o) {
    return o instanceof Element || o instanceof HTMLDocument;
};
/* harmony default export */ var is_element = (isElement);
//# sourceMappingURL=is-element.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/request-animation-frame.js
function requestAnimationFrame(fn) {
    var method = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        // @ts-ignore
        window.msRequestAnimationFrame ||
        function (f) {
            return setTimeout(f, 16);
        };
    return method(fn);
}
;
//# sourceMappingURL=request-animation-frame.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/clear-animation-frame.js
function cancelAnimationFrame(handler) {
    var method = window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        // @ts-ignore
        window.mozCancelAnimationFrame ||
        // @ts-ignore
        window.msCancelAnimationFrame ||
        clearTimeout;
    method(handler);
}
;
//# sourceMappingURL=clear-animation-frame.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/mix.js
// FIXME: Mutable param should be forbidden in static lang.
function _mix(dist, obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
            dist[key] = obj[key];
        }
    }
}
function mix(dist, src1, src2, src3) {
    if (src1)
        _mix(dist, src1);
    if (src2)
        _mix(dist, src2);
    if (src3)
        _mix(dist, src3);
    return dist;
}
//# sourceMappingURL=mix.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/augment.js


var augment = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var c = args[0];
    for (var i = 1; i < args.length; i++) {
        var obj = args[i];
        if (is_function(obj)) {
            obj = obj.prototype;
        }
        mix(c.prototype, obj);
    }
};
/* harmony default export */ var esm_augment = (augment);
//# sourceMappingURL=augment.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/clone.js

var clone = function (obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    var rst;
    if (is_array(obj)) {
        rst = [];
        for (var i = 0, l = obj.length; i < l; i++) {
            if (typeof obj[i] === 'object' && obj[i] != null) {
                rst[i] = clone(obj[i]);
            }
            else {
                rst[i] = obj[i];
            }
        }
    }
    else {
        rst = {};
        for (var k in obj) {
            if (typeof obj[k] === 'object' && obj[k] != null) {
                rst[k] = clone(obj[k]);
            }
            else {
                rst[k] = obj[k];
            }
        }
    }
    return rst;
};
/* harmony default export */ var esm_clone = (clone);
//# sourceMappingURL=clone.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/debounce.js
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
/* harmony default export */ var esm_debounce = (debounce);
//# sourceMappingURL=debounce.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/memoize.js

/**
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param f
 * @param resolver
 */
/* harmony default export */ var memoize = (function (f, resolver) {
    if (!is_function(f)) {
        throw new TypeError('Expected a function');
    }
    var memoized = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 使用方法构造 key，如果不存在 resolver，则直接取第一个参数作为 key
        var key = resolver ? resolver.apply(this, args) : args[0];
        var cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = f.apply(this, args);
        // 缓存起来
        cache.set(key, result);
        return result;
    };
    memoized.cache = new Map();
    return memoized;
});
//# sourceMappingURL=memoize.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/deep-mix.js


var MAX_MIX_LEVEL = 5;
function _deepMix(dist, src, level, maxLevel) {
    level = level || 0;
    maxLevel = maxLevel || MAX_MIX_LEVEL;
    for (var key in src) {
        if (src.hasOwnProperty(key)) {
            var value = src[key];
            if (value !== null && is_plain_object(value)) {
                if (!is_plain_object(dist[key])) {
                    dist[key] = {};
                }
                if (level < maxLevel) {
                    _deepMix(dist[key], value, level + 1, maxLevel);
                }
                else {
                    dist[key] = src[key];
                }
            }
            else if (is_array(value)) {
                dist[key] = [];
                dist[key] = dist[key].concat(value);
            }
            else if (value !== undefined) {
                dist[key] = value;
            }
        }
    }
}
// todo 重写
var deepMix = function (rst) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; i += 1) {
        _deepMix(rst, args[i]);
    }
    return rst;
};
/* harmony default export */ var deep_mix = (deepMix);
//# sourceMappingURL=deep-mix.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/extend.js


var extend = function (subclass, superclass, overrides, staticOverrides) {
    // 如果只提供父类构造函数，则自动生成子类构造函数
    if (!is_function(superclass)) {
        overrides = superclass;
        superclass = subclass;
        subclass = function () { };
    }
    var create = Object.create ?
        function (proto, c) {
            return Object.create(proto, {
                constructor: {
                    value: c
                }
            });
        } :
        function (proto, c) {
            function Tmp() { }
            Tmp.prototype = proto;
            var o = new Tmp();
            o.constructor = c;
            return o;
        };
    var superObj = create(superclass.prototype, subclass); // new superclass(),//实例化父类作为子类的prototype
    subclass.prototype = mix(superObj, subclass.prototype); // 指定子类的prototype
    subclass.superclass = create(superclass.prototype, superclass);
    mix(superObj, overrides);
    mix(subclass, staticOverrides);
    return subclass;
};
/* harmony default export */ var esm_extend = (extend);
//# sourceMappingURL=extend.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/index-of.js

var index_of_indexOf = function (arr, obj) {
    if (!is_array_like(arr)) {
        return -1;
    }
    var m = Array.prototype.indexOf;
    if (m) {
        return m.call(arr, obj);
    }
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            index = i;
            break;
        }
    }
    return index;
};
/* harmony default export */ var index_of = (index_of_indexOf);
//# sourceMappingURL=index-of.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-empty.js




var is_empty_hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(value) {
    /**
     * isEmpty(null) => true
     * isEmpty() => true
     * isEmpty(true) => true
     * isEmpty(1) => true
     * isEmpty([1, 2, 3]) => false
     * isEmpty('abc') => false
     * isEmpty({ a: 1 }) => false
     */
    if (is_nil(value)) {
        return true;
    }
    if (is_array_like(value)) {
        return !value.length;
    }
    var type = get_type(value);
    if (type === 'Map' || type === 'Set') {
        return !value.size;
    }
    if (is_prototype(value)) {
        return !Object.keys(value).length;
    }
    for (var key in value) {
        if (is_empty_hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
}
/* harmony default export */ var is_empty = (isEmpty);
//# sourceMappingURL=is-empty.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-equal.js



var isEqual = function (value, other) {
    if (value === other) {
        return true;
    }
    if (!value || !other) {
        return false;
    }
    if (is_string(value) || is_string(other)) {
        return false;
    }
    if (is_array_like(value) || is_array_like(other)) {
        if (value.length !== other.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < value.length; i++) {
            rst = isEqual(value[i], other[i]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    if (is_object_like(value) || is_object_like(other)) {
        var valueKeys = Object.keys(value);
        var otherKeys = Object.keys(other);
        if (valueKeys.length !== otherKeys.length) {
            return false;
        }
        var rst = true;
        for (var i = 0; i < valueKeys.length; i++) {
            rst = isEqual(value[valueKeys[i]], other[valueKeys[i]]);
            if (!rst) {
                break;
            }
        }
        return rst;
    }
    return false;
};
/* harmony default export */ var is_equal = (isEqual);
//# sourceMappingURL=is-equal.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/is-equal-with.js


/**
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [fn] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * isEqualWith(array, other, customizer);  // => true
 */
/* harmony default export */ var is_equal_with = (function (value, other, fn) {
    if (!is_function(fn)) {
        return is_equal(value, other);
    }
    return !!fn(value, other);
});
//# sourceMappingURL=is-equal-with.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/map.js

var map = function (arr, func) {
    if (!is_array_like(arr)) {
        // @ts-ignore
        return arr;
    }
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var value = arr[index];
        result.push(func(value, index));
    }
    return result;
};
/* harmony default export */ var esm_map = (map);
//# sourceMappingURL=map.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/map-values.js


var identity = function (v) { return v; };
/* harmony default export */ var map_values = (function (object, func) {
    if (func === void 0) { func = identity; }
    var r = {};
    if (is_object(object) && !is_nil(object)) {
        Object.keys(object).forEach(function (key) {
            // @ts-ignore
            r[key] = func(object[key], key);
        });
    }
    return r;
});
//# sourceMappingURL=map-values.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/get.js

/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param key
 * @param defaultValue
 */
/* harmony default export */ var get = (function (obj, key, defaultValue) {
    var p = 0;
    var keyArr = is_string(key) ? key.split('.') : key;
    while (obj && p < keyArr.length) {
        obj = obj[keyArr[p++]];
    }
    return (obj === undefined || p < keyArr.length) ? defaultValue : obj;
});
//# sourceMappingURL=get.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/set.js



/**
 * https://github.com/developit/dlv/blob/master/index.js
 * @param obj
 * @param path
 * @param value
 */
/* harmony default export */ var set = (function (obj, path, value) {
    var o = obj;
    var keyArr = is_string(path) ? path.split('.') : path;
    keyArr.forEach(function (key, idx) {
        // 不是最后一个
        if (idx < keyArr.length - 1) {
            if (!is_object(o[key])) {
                o[key] = is_number(keyArr[idx + 1]) ? [] : {};
            }
            o = o[key];
        }
        else {
            o[key] = value;
        }
    });
    return obj;
});
//# sourceMappingURL=set.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/pick.js


var pick_hasOwnProperty = Object.prototype.hasOwnProperty;
/* harmony default export */ var pick = (function (object, keys) {
    if (object === null || !is_plain_object(object)) {
        return {};
    }
    var result = {};
    esm_each(keys, function (key) {
        if (pick_hasOwnProperty.call(object, key)) {
            result[key] = object[key];
        }
    });
    return result;
});
//# sourceMappingURL=pick.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/throttle.js
/* harmony default export */ var throttle = (function (func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options)
        options = {};
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout)
            context = args = null;
    };
    var throttled = function () {
        var now = Date.now();
        if (!previous && options.leading === false)
            previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout)
                context = args = null;
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };
    return throttled;
});
//# sourceMappingURL=throttle.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/to-array.js

/* harmony default export */ var to_array = (function (value) {
    return is_array_like(value) ? Array.prototype.slice.call(value) : [];
});
//# sourceMappingURL=to-array.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/unique-id.js
var unique_id_map = {};
/* harmony default export */ var unique_id = (function (prefix) {
    prefix = prefix || 'g';
    if (!unique_id_map[prefix]) {
        unique_id_map[prefix] = 1;
    }
    else {
        unique_id_map[prefix] += 1;
    }
    return prefix + unique_id_map[prefix];
});
//# sourceMappingURL=unique-id.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/noop.js
/* harmony default export */ var noop = (function () { });
//# sourceMappingURL=noop.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/identity.js
/* harmony default export */ var esm_identity = (function (v) { return v; });
//# sourceMappingURL=identity.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/size.js


function size(o) {
    if (is_nil(o)) {
        return 0;
    }
    if (is_array_like(o)) {
        return o.length;
    }
    return Object.keys(o).length;
}
//# sourceMappingURL=size.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/cache.js
/**
 * k-v 存储
 */
var default_1 = /** @class */ (function () {
    function default_1() {
        this.map = {};
    }
    default_1.prototype.has = function (key) {
        return this.map[key] !== undefined;
    };
    default_1.prototype.get = function (key, def) {
        var v = this.map[key];
        return v === undefined ? def : v;
    };
    default_1.prototype.set = function (key, value) {
        this.map[key] = value;
    };
    default_1.prototype.clear = function () {
        this.map = {};
    };
    default_1.prototype.delete = function (key) {
        delete this.map[key];
    };
    default_1.prototype.size = function () {
        return Object.keys(this.map).length;
    };
    return default_1;
}());
/* harmony default export */ var cache = (default_1);
//# sourceMappingURL=cache.js.map
// CONCATENATED MODULE: ./node_modules/_@antv_util@2.0.9@@antv/util/esm/index.js
// array


























// event


// format


// math















// object







// string





// type























// other
























// 不知道为什么，需要把这个 export，不然 ts 会报类型错误

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.init = init;
exports.afterGeomDraw = afterGeomDraw;
exports.clearInner = clearInner;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _global = _interopRequireDefault(__webpack_require__(1215));

var _tooltip = _interopRequireDefault(__webpack_require__(1217));

var _helper = __webpack_require__(1237);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Register the default configuration for Tooltip
_global["default"].tooltip = (0, _common.deepMix)({
  triggerOn: 'press',
  triggerOff: 'pressend',
  alwaysShow: false,
  showTitle: false,
  showCrosshairs: false,
  crosshairsStyle: {
    stroke: 'rgba(0, 0, 0, 0.25)',
    lineWidth: 1
  },
  showTooltipMarker: true,
  background: {
    radius: 1,
    fill: 'rgba(0, 0, 0, 0.65)',
    padding: [3, 5]
  },
  titleStyle: {
    fontSize: 12,
    fill: '#fff',
    textAlign: 'start',
    textBaseline: 'top'
  },
  nameStyle: {
    fontSize: 12,
    fill: 'rgba(255, 255, 255, 0.65)',
    textAlign: 'start',
    textBaseline: 'middle'
  },
  valueStyle: {
    fontSize: 12,
    fill: '#fff',
    textAlign: 'start',
    textBaseline: 'middle'
  },
  showItemMarker: true,
  itemMarkerStyle: {
    radius: 3,
    symbol: 'circle',
    lineWidth: 1,
    stroke: '#fff'
  },
  layout: 'horizontal',
  snap: false
}, _global["default"].tooltip || {});

function _getTooltipValueScale(geom) {
  var colorAttr = geom.getAttr('color');

  if (colorAttr) {
    var colorScale = colorAttr.getScale(colorAttr.type);

    if (colorScale.isLinear) {
      return colorScale;
    }
  }

  var xScale = geom.getXScale();
  var yScale = geom.getYScale();

  if (yScale) {
    return yScale;
  }

  return xScale;
}

function getTooltipName(geom, origin) {
  var name;
  var nameScale;

  var groupScales = geom._getGroupScales();

  if (groupScales.length) {
    (0, _common.each)(groupScales, function (scale) {
      nameScale = scale;
      return false;
    });
  }

  if (nameScale) {
    var field = nameScale.field;
    name = nameScale.getText(origin[field]);
  } else {
    var valueScale = _getTooltipValueScale(geom);

    name = valueScale.alias || valueScale.field;
  }

  return name;
}

function getTooltipValue(geom, origin) {
  var scale = _getTooltipValueScale(geom);

  return scale.getText(origin[scale.field]);
}

function getTooltipTitle(geom, origin) {
  var position = geom.getAttr('position');
  var field = position.getFields()[0];
  var scale = geom.get('scales')[field];
  return scale.getText(origin[scale.field]);
}

function _indexOfArray(items, item) {
  var rst = -1;
  (0, _common.each)(items, function (sub, index) {
    if (sub.title === item.title && sub.name === item.name && sub.value === item.value && sub.color === item.color) {
      rst = index;
      return false;
    }
  });
  return rst;
}

function _uniqItems(items) {
  var tmp = [];
  (0, _common.each)(items, function (item) {
    var index = _indexOfArray(tmp, item);

    if (index === -1) {
      tmp.push(item);
    } else {
      tmp[index] = item;
    }
  });
  return tmp;
}

function isEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

var TooltipController = /*#__PURE__*/function () {
  function TooltipController(cfg) {
    var _this = this;

    _defineProperty(this, "handleShowEvent", function (ev) {
      var chart = _this.chart;
      if (!_this.enable) return;
      var plot = chart.get('plotRange');
      var point = (0, _common.createEvent)(ev, chart);

      if (!(0, _helper.isPointInPlot)(point, plot) && !_this._tooltipCfg.alwaysShow) {
        // not in chart plot
        _this.hideTooltip();

        return;
      }

      var lastTimeStamp = _this.timeStamp;
      var timeStamp = +new Date();

      if (timeStamp - lastTimeStamp > 16) {
        _this.showTooltip(point);

        _this.timeStamp = timeStamp;
      }
    });

    _defineProperty(this, "handleHideEvent", function () {
      if (!_this.enable) return;

      _this.hideTooltip();
    });

    this.enable = true;
    this.cfg = {};
    this.tooltip = null;
    this.chart = null;
    this.timeStamp = 0;
    (0, _common.mix)(this, cfg);
    var _chart = this.chart;

    var canvas = _chart.get('canvas');

    this.canvas = canvas;
    this.canvasDom = canvas.get('el');
  }

  var _proto = TooltipController.prototype;

  _proto._setCrosshairsCfg = function _setCrosshairsCfg() {
    var self = this;
    var chart = self.chart;
    var defaultCfg = (0, _common.mix)({}, _global["default"].tooltip);
    var geoms = chart.get('geoms');
    var shapes = [];
    (0, _common.each)(geoms, function (geom) {
      var type = geom.get('type');

      if (shapes.indexOf(type) === -1) {
        shapes.push(type);
      }
    });
    var coordType = chart.get('coord').type;

    if (geoms.length && (coordType === 'cartesian' || coordType === 'rect')) {
      if (shapes.length === 1 && ['line', 'area', 'path', 'point'].indexOf(shapes[0]) !== -1) {
        (0, _common.mix)(defaultCfg, {
          showCrosshairs: true
        });
      }
    }

    return defaultCfg;
  };

  _proto._getMaxLength = function _getMaxLength(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var _cfg = cfg,
        layout = _cfg.layout,
        plotRange = _cfg.plotRange;
    return layout === 'horizontal' ? plotRange.br.x - plotRange.bl.x : plotRange.bl.y - plotRange.tr.y;
  };

  _proto.render = function render() {
    var self = this;

    if (self.tooltip) {
      return;
    }

    var chart = self.chart;
    var canvas = chart.get('canvas');
    var frontPlot = chart.get('frontPlot').addGroup({
      className: 'tooltipContainer',
      zIndex: 10
    });
    var backPlot = chart.get('backPlot').addGroup({
      className: 'tooltipContainer'
    });
    var plotRange = chart.get('plotRange');
    var coord = chart.get('coord');

    var defaultCfg = self._setCrosshairsCfg();

    var cfg = self.cfg; // 通过 chart.tooltip() 接口传入的 tooltip 配置项

    var tooltipCfg = (0, _common.deepMix)({
      plotRange: plotRange,
      frontPlot: frontPlot,
      backPlot: backPlot,
      canvas: canvas,
      fixed: coord.transposed || coord.isPolar
    }, defaultCfg, cfg); // 创建 tooltip 实例需要的配置，不应该修改 this.cfg，即用户传入的配置

    tooltipCfg.maxLength = self._getMaxLength(tooltipCfg);
    this._tooltipCfg = tooltipCfg;
    var tooltip = new _tooltip["default"](tooltipCfg);
    self.tooltip = tooltip;
    self.bindEvents();
  };

  _proto.clear = function clear() {
    var tooltip = this.tooltip;

    if (tooltip) {
      tooltip.destroy();
      this.unBindEvents();
    }

    this.tooltip = null;
    this.prePoint = null;
    this._lastActive = null;
  };

  _proto._getTooltipMarkerStyle = function _getTooltipMarkerStyle(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var _cfg2 = cfg,
        type = _cfg2.type,
        items = _cfg2.items;
    var tooltipCfg = this._tooltipCfg;

    if (type === 'rect') {
      var x;
      var y;
      var width;
      var height;
      var chart = this.chart;

      var _chart$get = chart.get('plotRange'),
          tl = _chart$get.tl,
          br = _chart$get.br;

      var coord = chart.get('coord');
      var firstItem = items[0];
      var lastItem = items[items.length - 1];
      var intervalWidth = firstItem.width;

      if (coord.transposed) {
        x = tl.x;
        y = lastItem.y - intervalWidth * 0.75;
        width = br.x - tl.x;
        height = firstItem.y - lastItem.y + 1.5 * intervalWidth;
      } else {
        x = firstItem.x - intervalWidth * 0.75;
        y = tl.y;
        width = lastItem.x - firstItem.x + 1.5 * intervalWidth;
        height = br.y - tl.y;
      }

      cfg.style = (0, _common.mix)({
        x: x,
        y: y,
        width: width,
        height: height,
        fill: '#CCD6EC',
        opacity: 0.3
      }, tooltipCfg.tooltipMarkerStyle);
    } else {
      cfg.style = (0, _common.mix)({
        radius: 4,
        fill: '#fff',
        lineWidth: 2
      }, tooltipCfg.tooltipMarkerStyle);
    }

    return cfg;
  };

  _proto._setTooltip = function _setTooltip(point, items, tooltipMarkerCfg) {
    if (tooltipMarkerCfg === void 0) {
      tooltipMarkerCfg = {};
    }

    var lastActive = this._lastActive;
    var tooltip = this.tooltip;
    var cfg = this._tooltipCfg;
    items = _uniqItems(items);
    var chart = this.chart;
    var coord = chart.get('coord');
    var yScale = chart.getYScales()[0];
    var snap = cfg.snap;

    if (snap === false && yScale.isLinear) {
      var invertPoint = coord.invertPoint(point);
      var plot = chart.get('plotRange');
      var tip;
      var pos;

      if ((0, _helper.isPointInPlot)(point, plot)) {
        if (coord.transposed) {
          tip = yScale.invert(invertPoint.x);
          pos = point.x;
          tooltip.setXTipContent(tip);
          tooltip.setXTipPosition(pos);
          tooltip.setYCrosshairPosition(pos);
        } else {
          tip = yScale.invert(invertPoint.y);
          pos = point.y;
          tooltip.setYTipContent(tip);
          tooltip.setYTipPosition(pos);
          tooltip.setXCrosshairPosition(pos);
        }
      }
    }

    if (cfg.onShow) {
      cfg.onShow({
        x: point.x,
        y: point.y,
        tooltip: tooltip,
        items: items,
        tooltipMarkerCfg: tooltipMarkerCfg
      });
    }

    if (isEqual(lastActive, items)) {
      if (snap === false && ((0, _common.directionEnabled)(cfg.crosshairsType, 'y') || cfg.showYTip)) {
        var canvas = this.chart.get('canvas');
        canvas.draw();
      }

      return;
    }

    this._lastActive = items;
    var onChange = cfg.onChange;

    if (onChange) {
      onChange({
        x: point.x,
        y: point.y,
        tooltip: tooltip,
        items: items,
        tooltipMarkerCfg: tooltipMarkerCfg
      });
    }

    var first = items[0];
    var title = first.title || first.name;
    var xTipPosX = first.x;

    if (items.length > 1) {
      xTipPosX = (items[0].x + items[items.length - 1].x) / 2;
    }

    tooltip.setContent(title, items, coord.transposed);
    tooltip.setPosition(items, point);

    if (coord.transposed) {
      var yTipPosY = first.y;

      if (items.length > 1) {
        yTipPosY = (items[0].y + items[items.length - 1].y) / 2;
      }

      tooltip.setYTipContent(title);
      tooltip.setYTipPosition(yTipPosY);
      tooltip.setXCrosshairPosition(yTipPosY);

      if (snap) {
        tooltip.setXTipContent(first.value);
        tooltip.setXTipPosition(xTipPosX);
        tooltip.setYCrosshairPosition(xTipPosX);
      }
    } else {
      tooltip.setXTipContent(title);
      tooltip.setXTipPosition(xTipPosX);
      tooltip.setYCrosshairPosition(xTipPosX);

      if (snap) {
        tooltip.setYTipContent(first.value);
        tooltip.setYTipPosition(first.y);
        tooltip.setXCrosshairPosition(first.y);
      }
    }

    var markerItems = tooltipMarkerCfg.items;

    if (cfg.showTooltipMarker && markerItems.length) {
      tooltipMarkerCfg = this._getTooltipMarkerStyle(tooltipMarkerCfg);
      tooltip.setMarkers(tooltipMarkerCfg);
    } else {
      tooltip.clearMarkers();
    }

    tooltip.show();
  };

  _proto.showTooltip = function showTooltip(point) {
    var self = this;
    var chart = self.chart;
    var tooltipMarkerType;
    var tooltipMarkerItems = [];
    var items = [];
    var cfg = self._tooltipCfg;
    var marker;

    if (cfg.showItemMarker) {
      marker = cfg.itemMarkerStyle;
    }

    var geoms = chart.get('geoms');
    var coord = chart.get('coord');
    (0, _common.each)(geoms, function (geom) {
      if (geom.get('visible')) {
        var type = geom.get('type');
        var records = geom.getSnapRecords(point);
        var adjust = geom.get('adjust'); // 漏斗图和金子塔图tooltip位置有问题，暂时不开放显示

        if (type === 'interval' && adjust && adjust.type === 'symmetric') {
          return;
        }

        (0, _common.each)(records, function (record) {
          if (record.x && record.y) {
            var x = record.x,
                y = record.y,
                _origin = record._origin,
                color = record.color;
            var tooltipItem = {
              x: x,
              y: (0, _common.isArray)(y) ? y[1] : y,
              color: color || _global["default"].defaultColor,
              origin: _origin,
              name: getTooltipName(geom, _origin),
              value: getTooltipValue(geom, _origin),
              title: getTooltipTitle(geom, _origin)
            };

            if (marker) {
              tooltipItem.marker = (0, _common.mix)({
                fill: color || _global["default"].defaultColor
              }, marker);
            }

            items.push(tooltipItem);

            if (['line', 'area', 'path'].indexOf(type) !== -1) {
              tooltipMarkerType = 'circle';
              tooltipMarkerItems.push(tooltipItem);
            } else if (type === 'interval' && (coord.type === 'cartesian' || coord.type === 'rect')) {
              tooltipMarkerType = 'rect';
              tooltipItem.width = geom.getSize(record._origin);
              tooltipMarkerItems.push(tooltipItem);
            }
          }
        });
      }
    });

    if (items.length) {
      var tooltipMarkerCfg = {
        items: tooltipMarkerItems,
        type: tooltipMarkerType
      };

      self._setTooltip(point, items, tooltipMarkerCfg);
    } else {
      self.hideTooltip();
    }
  };

  _proto.hideTooltip = function hideTooltip() {
    var cfg = this._tooltipCfg;
    this._lastActive = null;
    var tooltip = this.tooltip;

    if (tooltip) {
      tooltip.hide();

      if (cfg.onHide) {
        cfg.onHide({
          tooltip: tooltip
        });
      }

      var canvas = this.chart.get('canvas');
      canvas.draw();
    }
  };

  _proto._handleEvent = function _handleEvent(methodName, method, action) {
    var canvas = this.canvas;
    (0, _common.each)([].concat(methodName), function (aMethod) {
      if (action === 'bind') {
        canvas.on(aMethod, method);
      } else {
        canvas.off(aMethod, method);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    var cfg = this._tooltipCfg;
    var triggerOn = cfg.triggerOn,
        triggerOff = cfg.triggerOff,
        alwaysShow = cfg.alwaysShow;
    triggerOn && this._handleEvent(triggerOn, this.handleShowEvent, 'bind'); // 如果 !alwaysShow, 则在手势离开后就隐藏

    if (!alwaysShow) {
      this._handleEvent(triggerOff, this.handleHideEvent, 'bind');
    }
  };

  _proto.unBindEvents = function unBindEvents() {
    var cfg = this._tooltipCfg;
    var triggerOn = cfg.triggerOn,
        triggerOff = cfg.triggerOff,
        alwaysShow = cfg.alwaysShow;
    triggerOn && this._handleEvent(triggerOn, this.handleShowEvent, 'unBind');

    if (!alwaysShow) {
      this._handleEvent(triggerOff, this.handleHideEvent, 'unBind');
    }
  };

  return TooltipController;
}();

function init(chart) {
  var tooltipController = new TooltipController({
    chart: chart
  });
  chart.set('tooltipController', tooltipController);

  chart.tooltip = function (enable, cfg) {
    if ((0, _common.isObject)(enable)) {
      cfg = enable;
      enable = true;
    }

    tooltipController.enable = enable;

    if (cfg) {
      tooltipController.cfg = cfg;
    }

    return this;
  };
}

function afterGeomDraw(chart) {
  var tooltipController = chart.get('tooltipController');
  tooltipController.render();

  chart.showTooltip = function (point) {
    tooltipController.showTooltip(point);
    return this;
  };

  chart.hideTooltip = function () {
    tooltipController.hideTooltip();
    return this;
  };
}

function clearInner(chart) {
  var tooltipController = chart.get('tooltipController');
  tooltipController.clear();
}

var _default = {
  init: init,
  afterGeomDraw: afterGeomDraw,
  clearInner: clearInner
};
exports["default"] = _default;

/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.merge = merge;
exports.values = values;
exports.firstValue = firstValue;
exports.group = group;
exports.groupToMap = groupToMap;
exports.remove = remove;
exports.getRange = getRange;

var _util = __webpack_require__(1004);

function merge(dataArray) {
  var rst = [];

  for (var i = 0, len = dataArray.length; i < len; i++) {
    rst = rst.concat(dataArray[i]);
  }

  return rst;
}

function values(data, name) {
  var rst = [];
  var tmpMap = {};

  for (var i = 0, len = data.length; i < len; i++) {
    var obj = data[i];
    var value = obj[name];

    if (!(0, _util.isNil)(value)) {
      if (!(0, _util.isArray)(value)) {
        if (!tmpMap[value]) {
          rst.push(value);
          tmpMap[value] = true;
        }
      } else {
        (0, _util.each)(value, function (val) {
          if (!tmpMap[val]) {
            rst.push(val);
            tmpMap[val] = true;
          }
        });
      }
    }
  }

  return rst;
}

function firstValue(data, name) {
  var rst = null;

  for (var i = 0, len = data.length; i < len; i++) {
    var obj = data[i];
    var value = obj[name];

    if (!(0, _util.isNil)(value)) {
      if ((0, _util.isArray)(value)) {
        rst = value[0];
      } else {
        rst = value;
      }

      break;
    }
  }

  return rst;
}

function groupToMap(data, fields) {
  if (!fields) {
    return {
      0: data
    };
  }

  var callback = function callback(row) {
    var unique = '_';

    for (var i = 0, l = fields.length; i < l; i++) {
      unique += row[fields[i]] && row[fields[i]].toString();
    }

    return unique;
  };

  var groups = {};

  for (var i = 0, len = data.length; i < len; i++) {
    var row = data[i];
    var key = callback(row);

    if (groups[key]) {
      groups[key].push(row);
    } else {
      groups[key] = [row];
    }
  }

  return groups;
}

function group(data, fields, appendConditions) {
  if (appendConditions === void 0) {
    appendConditions = {};
  }

  if (!fields) {
    return [data];
  }

  var groups = groupToMap(data, fields);
  var array = [];

  if (fields.length === 1 && appendConditions[fields[0]]) {
    var _values = appendConditions[fields[0]];
    (0, _util.each)(_values, function (value) {
      value = '_' + value;
      array.push(groups[value]);
    });
  } else {
    for (var i in groups) {
      array.push(groups[i]);
    }
  }

  return array;
}

function remove(arr, obj) {
  if (!arr) {
    return;
  }

  var index = arr.indexOf(obj);

  if (index !== -1) {
    arr.splice(index, 1);
  }
}

function getRange(values) {
  if (!values.length) {
    return {
      min: 0,
      max: 0
    };
  }

  var max = Math.max.apply(null, values);
  var min = Math.min.apply(null, values);
  return {
    min: min,
    max: max
  };
}

/***/ }),

/***/ 1215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _theme = _interopRequireDefault(__webpack_require__(1216));

var _common = __webpack_require__(861);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Global = {
  version: '3.7.6',
  scales: {},
  widthRatio: {
    column: 1 / 2,
    rose: 0.999999,
    multiplePie: 3 / 4
  },
  lineDash: [4, 4]
};

Global.setTheme = function (theme) {
  (0, _common.deepMix)(this, theme);
};

Global.setTheme(_theme["default"]);
var _default = Global;
exports["default"] = _default;

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

/**
 * @fileOverview default theme
 * @author dxq613@gail.com
 */
var color1 = '#E8E8E8'; // color of axis-line and axis-grid

var color2 = '#808080'; // color of axis label

var defaultAxis = {
  label: {
    fill: color2,
    fontSize: 10
  },
  line: {
    stroke: color1,
    lineWidth: 1
  },
  grid: {
    type: 'line',
    stroke: color1,
    lineWidth: 1,
    lineDash: [2]
  },
  tickLine: null,
  labelOffset: 7.5
};
var Theme = {
  fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
  defaultColor: '#1890FF',
  pixelRatio: 1,
  padding: 'auto',
  appendPadding: 15,
  colors: ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864'],
  shapes: {
    line: ['line', 'dash'],
    point: ['circle', 'hollowCircle']
  },
  sizes: [4, 10],
  axis: {
    common: defaultAxis,
    // common axis configuration
    bottom: (0, _common.mix)({}, defaultAxis, {
      grid: null
    }),
    left: (0, _common.mix)({}, defaultAxis, {
      line: null
    }),
    right: (0, _common.mix)({}, defaultAxis, {
      line: null
    }),
    circle: (0, _common.mix)({}, defaultAxis, {
      line: null
    }),
    radius: (0, _common.mix)({}, defaultAxis, {
      labelOffset: 4
    })
  },
  shape: {
    line: {
      lineWidth: 2,
      lineJoin: 'round',
      lineCap: 'round'
    },
    point: {
      lineWidth: 0,
      size: 3
    },
    area: {
      fillOpacity: 0.1
    }
  },
  _defaultAxis: defaultAxis
};
var _default = Theme;
exports["default"] = _default;

/***/ }),

/***/ 1217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _marker = _interopRequireDefault(__webpack_require__(998));

var _list = _interopRequireDefault(__webpack_require__(1235));

var _textBox = _interopRequireDefault(__webpack_require__(1236));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GAP = 4;
/**
 * TODOList：
 * 1. 移除 fixed 参数
 */

var Tooltip = /*#__PURE__*/function () {
  var _proto = Tooltip.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * wether show the crosshairs
       * @type {Object}
       */
      showCrosshairs: false,

      /**
       * the style for crosshairs
       * @type {Object}
       */
      crosshairsStyle: {
        stroke: 'rgba(0, 0, 0, 0.25)',
        lineWidth: 1
      },

      /**
       * the type of crosshairs, optional value is 'x', 'y' or 'xy', default is 'y'
       */
      crosshairsType: 'y',

      /**
       * show or hide the x axis tip
       */
      showXTip: false,

      /**
       * show or hide the y axis tip
       */
      showYTip: false,
      xTip: null,
      xTipBackground: {
        radius: 1,
        fill: 'rgba(0, 0, 0, 0.65)',
        padding: [3, 5]
      },
      xTipTextStyle: {
        fontSize: 12,
        fill: '#fff',
        textAlign: 'center',
        textBaseline: 'middle'
      },
      yTip: null,
      yTipBackground: {
        radius: 1,
        fill: 'rgba(0, 0, 0, 0.65)',
        padding: [3, 5]
      },
      yTipTextStyle: {
        fontSize: 12,
        fill: '#fff',
        textAlign: 'center',
        textBaseline: 'middle'
      },

      /**
       * the style for tooltip container's background
       * @type {Object}
       */
      background: null,

      /**
       * layout, can be horizontal or vertical
       * @type {String}
       */
      layout: 'horizontal',
      offsetX: 0,
      offsetY: 0
    };
  };

  function Tooltip(cfg) {
    (0, _common.deepMix)(this, this.getDefaultCfg(), cfg);
    var frontPlot = this.frontPlot,
        custom = this.custom;

    if (!custom) {
      // custom means user do customize
      var container = new _list["default"]((0, _common.mix)({
        parent: frontPlot,
        zIndex: 3
      }, cfg));
      this.container = container;
      var fixed = this.fixed,
          background = this.background;

      if (!fixed) {
        this.tooltipArrow = frontPlot.addShape('Polygon', {
          className: 'tooltip-arrow',
          visible: false,
          zIndex: 2,
          attrs: (0, _common.mix)({
            points: []
          }, background)
        });
      }
    }

    if (this.showXTip) {
      var xTipBackground = this.xTipBackground,
          xTipTextStyle = this.xTipTextStyle;
      var xTipBox = new _textBox["default"]({
        className: 'xTip',
        background: xTipBackground,
        textStyle: xTipTextStyle,
        visible: false
      });
      frontPlot.add(xTipBox.container);
      this.xTipBox = xTipBox;
    }

    if (this.showYTip) {
      var yTipBackground = this.yTipBackground,
          yTipTextStyle = this.yTipTextStyle;
      var yTipBox = new _textBox["default"]({
        className: 'yTip',
        background: yTipBackground,
        textStyle: yTipTextStyle,
        visible: false
      });
      frontPlot.add(yTipBox.container);
      this.yTipBox = yTipBox;
    }

    if (this.showCrosshairs) {
      this._renderCrosshairs();
    }

    frontPlot.sort();
  }

  _proto.setContent = function setContent(title, items) {
    this.title = title;
    this.items = items;

    if (!this.custom) {
      var container = this.container;
      container.setTitle(title);
      container.setItems(items);
    }
  };

  _proto.setYTipContent = function setYTipContent(val) {
    var yTip = this.yTip;

    if ((0, _common.isFunction)(yTip)) {
      val = yTip(val);
    } else {
      val = (0, _common.mix)({
        text: val
      }, yTip);
    }

    this.yTipBox && this.yTipBox.updateContent(val);
  };

  _proto.setYTipPosition = function setYTipPosition(pos) {
    var plotRange = this.plotRange;
    var crosshairsShapeX = this.crosshairsShapeX;

    if (this.showYTip) {
      var yTipBox = this.yTipBox;
      var yTipHeight = yTipBox.getHeight();
      var yTipWidth = yTipBox.getWidth();
      var posX = plotRange.tl.x - yTipWidth;
      var posY = pos - yTipHeight / 2;

      if (posY <= plotRange.tl.y) {
        posY = plotRange.tl.y;
      }

      if (posY + yTipHeight >= plotRange.br.y) {
        posY = plotRange.br.y - yTipHeight;
      }

      if (posX < 0) {
        posX = plotRange.tl.x;
        crosshairsShapeX && crosshairsShapeX.attr('x1', plotRange.tl.x + yTipWidth);
      }

      yTipBox.updatePosition(posX, posY);
    }
  };

  _proto.setXTipContent = function setXTipContent(val) {
    var xTip = this.xTip;

    if ((0, _common.isFunction)(xTip)) {
      val = xTip(val);
    } else {
      val = (0, _common.mix)({
        text: val
      }, xTip);
    }

    this.xTipBox && this.xTipBox.updateContent(val);
  };

  _proto.setXTipPosition = function setXTipPosition(pos) {
    var showXTip = this.showXTip,
        canvas = this.canvas,
        plotRange = this.plotRange,
        xTipBox = this.xTipBox,
        crosshairsShapeY = this.crosshairsShapeY;

    if (showXTip) {
      // const el = canvas.get('el');
      // const canvasHeight = Util.getHeight(el);
      var canvasHeight = canvas.get('height');
      var xTipWidth = xTipBox.getWidth();
      var xTipHeight = xTipBox.getHeight();
      var posX = pos - xTipWidth / 2;
      var posY = plotRange.br.y;

      if (posX <= plotRange.tl.x) {
        posX = plotRange.tl.x;
      }

      if (posX + xTipWidth >= plotRange.tr.x) {
        posX = plotRange.tr.x - xTipWidth;
      }

      if (canvasHeight - posY < xTipHeight) {
        posY -= xTipHeight;
      }

      xTipBox.updatePosition(posX, posY);
      crosshairsShapeY && crosshairsShapeY.attr('y1', posY);
    }
  };

  _proto.setXCrosshairPosition = function setXCrosshairPosition(pos) {
    this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, pos);
  };

  _proto.setYCrosshairPosition = function setYCrosshairPosition(pos) {
    this.crosshairsShapeY && this.crosshairsShapeY.moveTo(pos, 0);
  };

  _proto.setPosition = function setPosition(items) {
    var container = this.container,
        plotRange = this.plotRange,
        offsetX = this.offsetX,
        offsetY = this.offsetY,
        fixed = this.fixed,
        tooltipArrow = this.tooltipArrow;

    if (!container) {
      return;
    }

    var containerBBox = container.container.getBBox();
    var minX = containerBBox.minX,
        minY = containerBBox.minY,
        width = containerBBox.width,
        height = containerBBox.height;
    var tl = plotRange.tl,
        tr = plotRange.tr;
    var posX = 0;
    var posY = tl.y - height - GAP + offsetY;

    if (fixed) {
      var x = (tl.x + tr.x) / 2;
      posX = x - width / 2 + offsetX;
    } else {
      var _x;

      if (items.length > 1) {
        _x = (items[0].x + items[items.length - 1].x) / 2;
      } else {
        _x = items[0].x;
      }

      posX = _x - width / 2 + offsetX;

      if (posX < tl.x) {
        posX = tl.x;
      }

      if (posX + width > tr.x) {
        posX = tr.x - width;
      }

      if (tooltipArrow) {
        tooltipArrow.attr('points', [{
          x: _x - 3,
          y: tl.y - GAP + offsetY
        }, {
          x: _x + 3,
          y: tl.y - GAP + offsetY
        }, {
          x: _x,
          y: tl.y + offsetY
        }]);
        var backShape = container.backShape;
        var radius = (0, _common.parsePadding)(backShape.attr('radius'));

        if (_x === tl.x) {
          radius[3] = 0;
          tooltipArrow.attr('points', [{
            x: tl.x,
            y: tl.y + offsetY
          }, {
            x: tl.x,
            y: tl.y - GAP + offsetY
          }, {
            x: tl.x + GAP,
            y: tl.y - GAP + offsetY
          }]);
        } else if (_x === tr.x) {
          radius[2] = 0;
          tooltipArrow.attr('points', [{
            x: tr.x,
            y: tl.y + offsetY
          }, {
            x: tr.x - GAP,
            y: tl.y - GAP + offsetY
          }, {
            x: tr.x,
            y: tl.y - GAP + offsetY
          }]);
        }

        backShape.attr('radius', radius);
      }
    }

    container.moveTo(posX - minX, posY - minY);
  };

  _proto.setMarkers = function setMarkers(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }

    var self = this;
    var _cfg = cfg,
        items = _cfg.items,
        style = _cfg.style,
        type = _cfg.type;

    var markerGroup = self._getMarkerGroup(type);

    if (type === 'circle') {
      for (var i = 0, length = items.length; i < length; i++) {
        var item = items[i];
        var marker = new _marker["default"]({
          className: 'tooltip-circle-marker',
          attrs: (0, _common.mix)({
            x: item.x,
            y: item.y,
            stroke: item.color
          }, style)
        });
        markerGroup.add(marker);
      }
    } else {
      markerGroup.addShape('rect', {
        className: 'tooltip-rect-marker',
        attrs: style
      });
    }
  };

  _proto.clearMarkers = function clearMarkers() {
    var markerGroup = this.markerGroup;
    markerGroup && markerGroup.clear();
  };

  _proto.show = function show() {
    var crosshairsShapeX = this.crosshairsShapeX;
    var crosshairsShapeY = this.crosshairsShapeY;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;
    var xTipBox = this.xTipBox;
    var yTipBox = this.yTipBox;
    var canvas = this.canvas;
    crosshairsShapeX && crosshairsShapeX.show();
    crosshairsShapeY && crosshairsShapeY.show();
    markerGroup && markerGroup.show();
    container && container.show();
    tooltipArrow && tooltipArrow.show();
    xTipBox && xTipBox.show();
    yTipBox && yTipBox.show();
    canvas.draw();
  };

  _proto.hide = function hide() {
    var crosshairsShapeX = this.crosshairsShapeX;
    var crosshairsShapeY = this.crosshairsShapeY;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;
    var xTipBox = this.xTipBox;
    var yTipBox = this.yTipBox;
    crosshairsShapeX && crosshairsShapeX.hide();
    crosshairsShapeY && crosshairsShapeY.hide();
    markerGroup && markerGroup.hide();
    container && container.hide();
    tooltipArrow && tooltipArrow.hide();
    xTipBox && xTipBox.hide();
    yTipBox && yTipBox.hide();
  };

  _proto.destroy = function destroy() {
    var crosshairsShapeX = this.crosshairsShapeX;
    var crosshairsShapeY = this.crosshairsShapeY;
    var markerGroup = this.markerGroup;
    var container = this.container;
    var tooltipArrow = this.tooltipArrow;
    var xTipBox = this.xTipBox;
    var yTipBox = this.yTipBox;
    crosshairsShapeX && crosshairsShapeX.remove(true);
    crosshairsShapeY && crosshairsShapeY.remove(true);
    markerGroup && markerGroup.remove(true);
    tooltipArrow && tooltipArrow.remove(true);
    container && container.clear();
    xTipBox && xTipBox.clear();
    yTipBox && yTipBox.clear();
    this.destroyed = true;
  };

  _proto._getMarkerGroup = function _getMarkerGroup(type) {
    var markerGroup = this.markerGroup;

    if (!markerGroup) {
      if (type === 'circle') {
        markerGroup = this.frontPlot.addGroup({
          zIndex: 1
        });
        this.frontPlot.sort();
      } else {
        markerGroup = this.backPlot.addGroup();
      }

      this.markerGroup = markerGroup;
    } else {
      markerGroup.clear();
    }

    return markerGroup;
  };

  _proto._renderCrosshairs = function _renderCrosshairs() {
    var crosshairsType = this.crosshairsType,
        crosshairsStyle = this.crosshairsStyle,
        frontPlot = this.frontPlot,
        plotRange = this.plotRange;
    var tl = plotRange.tl,
        br = plotRange.br;

    if ((0, _common.directionEnabled)(crosshairsType, 'x')) {
      this.crosshairsShapeX = frontPlot.addShape('Line', {
        className: 'tooltip-crosshairs-x',
        zIndex: 0,
        visible: false,
        attrs: (0, _common.mix)({
          x1: tl.x,
          y1: 0,
          x2: br.x,
          y2: 0
        }, crosshairsStyle)
      });
    }

    if ((0, _common.directionEnabled)(crosshairsType, 'y')) {
      this.crosshairsShapeY = frontPlot.addShape('Line', {
        className: 'tooltip-crosshairs-y',
        zIndex: 0,
        visible: false,
        attrs: (0, _common.mix)({
          x1: 0,
          y1: br.y,
          x2: 0,
          y2: tl.y
        }, crosshairsStyle)
      });
    }
  };

  return Tooltip;
}();

var _default = Tooltip;
exports["default"] = _default;

/***/ }),

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _emit = _interopRequireDefault(__webpack_require__(999));

var _controller = _interopRequireDefault(__webpack_require__(1219));

var _canvasElement = _interopRequireDefault(__webpack_require__(1220));

var _common = __webpack_require__(861);

var _container = _interopRequireDefault(__webpack_require__(1000));

var _group = _interopRequireDefault(__webpack_require__(1003));

var _requestAnimationFrame = __webpack_require__(1222);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Canvas = /*#__PURE__*/function (_EventEmit) {
  _inheritsLoose(Canvas, _EventEmit);

  var _proto = Canvas.prototype;

  _proto.get = function get(name) {
    return this._attrs[name];
  };

  _proto.set = function set(name, value) {
    this._attrs[name] = value;
  };

  function Canvas(cfg) {
    var _this;

    _this = _EventEmit.call(this) || this;
    _this._attrs = (0, _common.mix)({
      type: 'canvas',
      children: []
    }, cfg);

    _this._initPixelRatio();

    _this._initCanvas();

    return _this;
  }

  _proto._initPixelRatio = function _initPixelRatio() {
    var pixelRatio = this.get('pixelRatio');

    if (!pixelRatio) {
      this.set('pixelRatio', (0, _common.getPixelRatio)());
    }
  };

  _proto.beforeDraw = function beforeDraw() {
    var context = this._attrs.context;
    var el = this._attrs.el;
    context && context.clearRect && context.clearRect(0, 0, el.width, el.height);
  };

  _proto._initCanvas = function _initCanvas() {
    var self = this;
    var el = self.get('el');
    var context = self.get('context');

    if (!el && !context) {
      throw new Error('Please specify the id, el or context of the chart!');
    }

    var canvas;

    if (el) {
      // DOMElement or String
      canvas = (0, _common.isString)(el) ? (0, _common.getDomById)(el) : el;
    } else {
      // 说明没有指定el
      canvas = _canvasElement["default"].create(context);
    }

    if (context && canvas && !canvas.getContext) {
      canvas.getContext = function () {
        return context;
      };
    }

    var width = self.get('width');

    if (!width) {
      width = (0, _common.getWidth)(canvas);
    }

    var height = self.get('height');

    if (!height) {
      height = (0, _common.getHeight)(canvas);
    }

    self.set('canvas', this);
    self.set('el', canvas);
    self.set('context', context || canvas.getContext('2d'));
    self.changeSize(width, height); // 初始化事件控制器

    var eventController = new _controller["default"]({
      canvas: this,
      el: canvas
    });
    self.set('eventController', eventController);
  };

  _proto.changeSize = function changeSize(width, height) {
    var pixelRatio = this.get('pixelRatio');
    var canvasDOM = this.get('el'); // HTMLCanvasElement or canvasElement
    // 浏览器环境设置style样式

    if (canvasDOM.style) {
      canvasDOM.style.width = width + 'px';
      canvasDOM.style.height = height + 'px';
    }

    if ((0, _common.isCanvasElement)(canvasDOM)) {
      canvasDOM.width = width * pixelRatio;
      canvasDOM.height = height * pixelRatio;

      if (pixelRatio !== 1) {
        var ctx = this.get('context');
        ctx.scale(pixelRatio, pixelRatio);
      }
    }

    this.set('width', width);
    this.set('height', height);
  };

  _proto.getWidth = function getWidth() {
    var pixelRatio = this.get('pixelRatio');
    var width = this.get('width');
    return width * pixelRatio;
  };

  _proto.getHeight = function getHeight() {
    var pixelRatio = this.get('pixelRatio');
    var height = this.get('height');
    return height * pixelRatio;
  };

  _proto.getPointByClient = function getPointByClient(clientX, clientY) {
    var el = this.get('el');
    var bbox = el.getBoundingClientRect();
    var width = bbox.right - bbox.left;
    var height = bbox.bottom - bbox.top;
    return {
      x: (clientX - bbox.left) * (el.width / width),
      y: (clientY - bbox.top) * (el.height / height)
    };
  };

  _proto._beginDraw = function _beginDraw() {
    this._attrs.toDraw = true;
  };

  _proto._endDraw = function _endDraw() {
    this._attrs.toDraw = false;
  };

  _proto.draw = function draw() {
    var self = this;

    function drawInner() {
      self.set('animateHandler', (0, _requestAnimationFrame.requestAnimationFrame)(function () {
        self.set('animateHandler', undefined);

        if (self.get('toDraw')) {
          drawInner();
        }
      }));
      self.beforeDraw();

      try {
        var context = self._attrs.context;
        var children = self._attrs.children;

        for (var i = 0, len = children.length; i < len; i++) {
          var child = children[i];
          child.draw(context);
        } // 支付宝，微信小程序，需要调context.draw才能完成绘制， 所以这里直接判断是否有.draw方法


        if (context.draw) {
          context.draw();
        }
      } catch (ev) {
        console.warn('error in draw canvas, detail as:');
        console.warn(ev);

        self._endDraw();
      }

      self._endDraw();
    }

    if (self.get('destroyed')) {
      return;
    }

    if (self.get('animateHandler')) {
      this._beginDraw();
    } else {
      drawInner();
    }
  };

  _proto.destroy = function destroy() {
    if (this.get('destroyed')) {
      return;
    } // 需要清理 canvas 画布内容，否则会导致 spa 应用 ios 下 canvas 白屏
    // https://stackoverflow.com/questions/52532614/total-canvas-memory-use-exceeds-the-maximum-limit-safari-12
    // https://github.com/antvis/F2/issues/630


    var el = this.get('el');
    el.width = 0;
    el.height = 0;
    this.clear();
    this._attrs = {};
    this.set('destroyed', true);
  };

  _proto.isDestroyed = function isDestroyed() {
    return this.get('destroyed');
  };

  return Canvas;
}(_emit["default"]);

(0, _common.mix)(Canvas.prototype, _container["default"], {
  getGroupClass: function getGroupClass() {
    return _group["default"];
  }
});
var _default = Canvas;
exports["default"] = _default;

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _dom = __webpack_require__(997);

var _common = __webpack_require__(861);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 计算滑动的方向
var calcDirection = function calcDirection(start, end) {
  var xDistance = end.x - start.x;
  var yDistance = end.y - start.y; // x 的距离大于y 说明是横向，否则就是纵向

  if (Math.abs(xDistance) > Math.abs(yDistance)) {
    return xDistance > 0 ? 'right' : 'left';
  }

  return yDistance > 0 ? 'down' : 'up';
}; // 计算2点之间的距离


var calcDistance = function calcDistance(point1, point2) {
  var xDistance = Math.abs(point2.x - point1.x);
  var yDistance = Math.abs(point2.y - point1.y);
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
};

var getCenter = function getCenter(point1, point2) {
  var x = point1.x + (point2.x - point1.x) / 2;
  var y = point1.y + (point2.y - point1.y) / 2;
  return {
    x: x,
    y: y
  };
};

var convertPoints = function convertPoints(ev, canvas) {
  var touches = ev.touches; // 认为是mouse事件

  if (!touches) {
    var point = (0, _dom.getRelativePosition)({
      x: ev.clientX,
      y: ev.clientY
    }, canvas);
    return [point];
  }

  var points = [];
  var len = touches.length;

  for (var i = 0; i < len; i++) {
    var touch = touches[i]; // x, y: 相对canvas原点的位置，clientX, clientY 相对于可视窗口的位置

    var x = touch.x,
        y = touch.y,
        clientX = touch.clientX,
        clientY = touch.clientY;

    var _point = void 0; // 小程序环境会有x,y


    if ((0, _common.isNumber)(x) || (0, _common.isNumber)(y)) {
      _point = {
        x: x,
        y: y
      };
    } else {
      // 浏览器环境再计算下canvas的相对位置
      _point = (0, _dom.getRelativePosition)({
        x: clientX,
        y: clientY
      }, canvas);
    }

    points.push(_point);
  }

  return points;
};

var PRESS_DELAY = 250;

var EventController = /*#__PURE__*/function () {
  function EventController(_ref) {
    var _this = this;

    var canvas = _ref.canvas,
        el = _ref.el;

    _defineProperty(this, "_click", function (ev) {
      var points = convertPoints(ev, _this.canvas);
      ev.points = points;

      _this.emitEvent('click', ev);
    });

    _defineProperty(this, "_start", function (ev) {
      var points = convertPoints(ev, _this.canvas);

      if (!points) {
        return;
      }

      ev.points = points;

      _this.emitEvent('touchstart', ev); // 防止上次的内容没有清理掉，重新reset下


      _this.reset(); // 记录touch start 的时间


      _this.startTime = Date.now(); // 记录touch start 的点

      _this.startPoints = points;

      if (points.length > 1) {
        _this.startDistance = calcDistance(points[0], points[1]);
        _this.center = getCenter(points[0], points[1]);
      } else {
        // 如果touchstart后停顿250ms, 则也触发press事件
        _this.pressTimeout = setTimeout(function () {
          // 这里固定触发press事件
          var eventType = 'press';
          var direction = 'none';
          ev.direction = direction;

          _this.emitStart(eventType, ev);

          _this.emitEvent(eventType, ev);

          _this.eventType = eventType;
          _this.direction = direction;
        }, PRESS_DELAY);
      }
    });

    _defineProperty(this, "_move", function (ev) {
      var points = convertPoints(ev, _this.canvas);
      if (!points) return;

      _this.clearPressTimeout();

      ev.points = points;

      _this.emitEvent('touchmove', ev);

      var startPoints = _this.startPoints;
      if (!startPoints) return; // 多指触控

      if (points.length > 1) {
        // touchstart的距离
        var startDistance = _this.startDistance;
        var currentDistance = calcDistance(points[0], points[1]);
        ev.zoom = currentDistance / startDistance;
        ev.center = _this.center; // 触发缩放事件

        _this.emitStart('pinch', ev);

        _this.emitEvent('pinch', ev);
      } else {
        var deltaX = points[0].x - startPoints[0].x;
        var deltaY = points[0].y - startPoints[0].y;
        var direction = _this.direction || calcDirection(startPoints[0], points[0]);
        _this.direction = direction; // 获取press或者pan的事件类型
        // press 按住滑动, pan表示平移
        // 如果start后立刻move，则触发pan, 如果有停顿，则触发press

        var eventType = _this.getEventType(points);

        ev.direction = direction;
        ev.deltaX = deltaX;
        ev.deltaY = deltaY;

        _this.emitStart(eventType, ev);

        _this.emitEvent(eventType, ev); // 记录最后2次move的时间和坐标，为了给swipe事件用


        var prevMoveTime = _this.lastMoveTime;
        var now = Date.now(); // 最后2次的时间间隔一定要大于0，否则swipe没发计算

        if (now - prevMoveTime > 0) {
          _this.prevMoveTime = prevMoveTime;
          _this.prevMovePoints = _this.lastMovePoints;
          _this.lastMoveTime = now;
          _this.lastMovePoints = points;
        }
      }
    });

    _defineProperty(this, "_end", function (ev) {
      _this.emitEnd(ev);

      _this.emitEvent('touchend', ev); // swipe事件处理, 在touchend之后触发


      var lastMoveTime = _this.lastMoveTime;
      var now = Date.now(); // 做这个判断是为了最后一次touchmove后到end前，还有一个停顿的过程
      // 100 是拍的一个值，理论这个值会很短，一般不卡顿的话在10ms以内

      if (now - lastMoveTime < 100) {
        var prevMoveTime = _this.prevMoveTime || _this.startTime;
        var intervalTime = lastMoveTime - prevMoveTime; // 时间间隔一定要大于0, 否则计算没意义

        if (intervalTime > 0) {
          var prevMovePoints = _this.prevMovePoints || _this.startPoints;
          var lastMovePoints = _this.lastMovePoints; // move速率

          var velocity = calcDistance(prevMovePoints[0], lastMovePoints[0]) / intervalTime; // 0.3 是参考hammerjs的设置

          if (velocity > 0.3) {
            ev.velocity = velocity;
            ev.direction = calcDirection(prevMovePoints[0], lastMovePoints[0]);

            _this.emitEvent('swipe', ev);
          }
        }
      }

      _this.reset();

      var touches = ev.touches; // 当多指只释放了1指时也会触发end, 这时重新触发一次start

      if (touches && touches.length > 0) {
        _this._start(ev);
      }
    });

    _defineProperty(this, "_cancel", function (ev) {
      _this.emitEvent('touchcancel', ev);

      _this.reset();
    });

    // canvasEl
    this.canvas = canvas;
    this.delegateEvent(el); // 用来记录当前触发的事件

    this.processEvent = {};
  }

  var _proto = EventController.prototype;

  _proto.delegateEvent = function delegateEvent(canvasEl) {
    // 代理这几个事件
    canvasEl.addEventListener('click', this._click);
    canvasEl.addEventListener('touchstart', this._start);
    canvasEl.addEventListener('touchmove', this._move);
    canvasEl.addEventListener('touchend', this._end);
    canvasEl.addEventListener('touchcancel', this._cancel);
  };

  _proto.emitEvent = function emitEvent(type, ev) {
    var canvas = this.canvas;
    canvas.emit(type, ev);
  };

  _proto.getEventType = function getEventType(points) {
    var eventType = this.eventType,
        canvas = this.canvas,
        startTime = this.startTime,
        startPoints = this.startPoints;

    if (eventType) {
      return eventType;
    }

    var type;
    var panEventListeners = canvas.__events.pan; // 如果没有pan事件的监听，默认都是press

    if (!panEventListeners || !panEventListeners.length) {
      type = 'press';
    } else {
      // 如果有pan事件的处理，press则需要停顿250ms, 且移动距离小于10
      var now = Date.now();

      if (now - startTime > PRESS_DELAY && calcDistance(startPoints[0], points[0]) < 10) {
        type = 'press';
      } else {
        type = 'pan';
      }
    }

    this.eventType = type;
    return type;
  };

  _proto.enable = function enable(eventType) {
    this.processEvent[eventType] = true;
  } // 是否进行中的事件
  ;

  _proto.isProcess = function isProcess(eventType) {
    return this.processEvent[eventType];
  } // 触发start事件
  ;

  _proto.emitStart = function emitStart(type, ev) {
    if (this.isProcess(type)) {
      return;
    }

    this.enable(type);
    this.emitEvent(type + "start", ev);
  } // 触发end事件
  ;

  _proto.emitEnd = function emitEnd(ev) {
    var _this2 = this;

    var processEvent = this.processEvent;
    Object.keys(processEvent).forEach(function (type) {
      _this2.emitEvent(type + "end", ev);

      delete processEvent[type];
    });
  };

  _proto.clearPressTimeout = function clearPressTimeout() {
    if (this.pressTimeout) {
      clearTimeout(this.pressTimeout);
      this.pressTimeout = 0;
    }
  };

  _proto.reset = function reset() {
    this.clearPressTimeout();
    this.startTime = 0;
    this.startPoints = null;
    this.startDistance = 0;
    this.direction = null;
    this.eventType = null;
    this.pinch = false;
    this.prevMoveTime = 0;
    this.prevMovePoints = null;
    this.lastMoveTime = 0;
    this.lastMovePoints = null;
  };

  return EventController;
}();

var _default = EventController;
exports["default"] = _default;

/***/ }),

/***/ 1220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _emit = _interopRequireDefault(__webpack_require__(999));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var CanvasElement = /*#__PURE__*/function (_EventEmit) {
  _inheritsLoose(CanvasElement, _EventEmit);

  function CanvasElement(ctx) {
    var _this;

    _this = _EventEmit.call(this) || this;
    _this.context = ctx; // canvas实际的宽高 (width/height) * pixelRatio

    _this.width = 0;
    _this.height = 0;
    _this.style = {};
    _this.currentStyle = {}; // 用来标识是CanvasElement实例

    _this.isCanvasElement = true;
    return _this;
  }

  var _proto = CanvasElement.prototype;

  _proto.getContext = function getContext()
  /* type */
  {
    return this.context;
  };

  _proto.getBoundingClientRect = function getBoundingClientRect() {
    var width = this.width;
    var height = this.height; // 默认都处理成可视窗口的顶部位置

    return {
      top: 0,
      right: width,
      bottom: height,
      left: 0
    };
  };

  _proto.addEventListener = function addEventListener(type, listener) {
    this.on(type, listener);
  };

  _proto.removeEventListener = function removeEventListener(type, listener) {
    this.off(type, listener);
  };

  _proto.dispatchEvent = function dispatchEvent(type, e) {
    this.emit(type, e);
  };

  return CanvasElement;
}(_emit["default"]);

function supportEventListener(canvas) {
  if (!canvas) {
    return false;
  } // 非 HTMLCanvasElement


  if (canvas.nodeType !== 1 || !canvas.nodeName || canvas.nodeName.toLowerCase() !== 'canvas') {
    return false;
  } // 微信小程序canvas.getContext('2d')时也是CanvasRenderingContext2D
  // 也会有ctx.canvas, 而且nodeType也是1，所以还要在看下是否支持addEventListener


  var support = false;

  try {
    canvas.addEventListener('eventTest', function () {
      support = true;
    });
    canvas.dispatchEvent(new Event('eventTest'));
  } catch (error) {
    support = false;
  }

  return support;
}

var _default = {
  create: function create(ctx) {
    if (!ctx) {
      return null;
    }

    if (supportEventListener(ctx.canvas)) {
      return ctx.canvas;
    }

    return new CanvasElement(ctx);
  }
};
exports["default"] = _default;

/***/ }),

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseStyle = parseStyle;
exports["default"] = void 0;

var _common = __webpack_require__(861);

function _mod(n, m) {
  return (n % m + m) % m;
}

function _addStop(steps, gradient) {
  (0, _common.each)(steps, function (item) {
    item = item.split(':');
    gradient.addColorStop(Number(item[0]), item[1]);
  });
} // the string format: 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'


function _parseLineGradient(color, shape, context) {
  var arr = color.split(' ');
  var angle = arr[0].slice(2, arr[0].length - 1);
  angle = _mod(parseFloat(angle) * Math.PI / 180, Math.PI * 2);
  var steps = arr.slice(1);

  var _shape$getBBox = shape.getBBox(),
      minX = _shape$getBBox.minX,
      minY = _shape$getBBox.minY,
      maxX = _shape$getBBox.maxX,
      maxY = _shape$getBBox.maxY;

  var start;
  var end;

  if (angle >= 0 && angle < 0.5 * Math.PI) {
    start = {
      x: minX,
      y: minY
    };
    end = {
      x: maxX,
      y: maxY
    };
  } else if (0.5 * Math.PI <= angle && angle < Math.PI) {
    start = {
      x: maxX,
      y: minY
    };
    end = {
      x: minX,
      y: maxY
    };
  } else if (Math.PI <= angle && angle < 1.5 * Math.PI) {
    start = {
      x: maxX,
      y: maxY
    };
    end = {
      x: minX,
      y: minY
    };
  } else {
    start = {
      x: minX,
      y: maxY
    };
    end = {
      x: maxX,
      y: minY
    };
  }

  var tanTheta = Math.tan(angle);
  var tanTheta2 = tanTheta * tanTheta;
  var x = (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.x;
  var y = tanTheta * (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.y;
  var gradient = context.createLinearGradient(start.x, start.y, x, y);

  _addStop(steps, gradient);

  return gradient;
} // the string format: 'r(0.5, 0.5, 0.1) 0:#ffffff 1:#1890ff'


function _parseRadialGradient(color, shape, context) {
  var arr = color.split(' ');
  var circleCfg = arr[0].slice(2, arr[0].length - 1);
  circleCfg = circleCfg.split(',');
  var fx = parseFloat(circleCfg[0]);
  var fy = parseFloat(circleCfg[1]);
  var fr = parseFloat(circleCfg[2]);
  var steps = arr.slice(1); // if radius is 0, no gradient, stroke with the last color

  if (fr === 0) {
    var _color = steps[steps.length - 1];
    return _color.split(':')[1];
  }

  var _shape$getBBox2 = shape.getBBox(),
      width = _shape$getBBox2.width,
      height = _shape$getBBox2.height,
      minX = _shape$getBBox2.minX,
      minY = _shape$getBBox2.minY;

  var r = Math.sqrt(width * width + height * height) / 2;
  var gradient = context.createRadialGradient(minX + width * fx, minY + height * fy, fr * r, minX + width / 2, minY + height / 2, r);

  _addStop(steps, gradient);

  return gradient;
}

function parseStyle(color, shape, context) {
  if (color[1] === '(') {
    try {
      var firstCode = color[0];

      if (firstCode === 'l') {
        return _parseLineGradient(color, shape, context);
      } else if (firstCode === 'r') {
        return _parseRadialGradient(color, shape, context);
      }
    } catch (ev) {
      console.error('error in parsing gradient string, please check if there are any extra whitespaces.');
      console.error(ev);
    }
  }

  return color;
}

var _default = {
  parseStyle: parseStyle
};
exports["default"] = _default;

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.requestAnimationFrame = void 0;
var requestAnimationFrame = typeof window === 'object' && window.requestAnimationFrame ? window.requestAnimationFrame : function (fn) {
  return setTimeout(fn, 16);
};
exports.requestAnimationFrame = requestAnimationFrame;

/***/ }),

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _shape = _interopRequireDefault(__webpack_require__(866));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// 为了处理radius 大于 width 或 height 的场景
function parseRadius(radius, width, height) {
  radius = (0, _common.parsePadding)(radius); // 都为0

  if (!radius[0] && !radius[1] && !radius[2] && !radius[3]) {
    return radius;
  }

  var minWidth = Math.max(radius[0] + radius[1], radius[2] + radius[3]);
  var minHeight = Math.max(radius[0] + radius[3], radius[1] + radius[2]);
  var scale = Math.min(width / minWidth, height / minHeight);

  if (scale < 1) {
    return radius.map(function (r) {
      return r * scale;
    });
  }

  return radius;
}

var Rect = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Rect, _Shape);

  function Rect() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Rect.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'rect';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      radius: 0,
      lineWidth: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        width = attrs.width,
        height = attrs.height,
        radius = attrs.radius;
    context.beginPath();

    if (!radius || !(width * height)) {
      context.rect(x, y, width, height);
    } else {
      radius = parseRadius(radius, width, height);
      context.moveTo(x + radius[0], y);
      context.lineTo(x + width - radius[1], y);
      context.arc(x + width - radius[1], y + radius[1], radius[1], -Math.PI / 2, 0, false);
      context.lineTo(x + width, y + height - radius[2]);
      context.arc(x + width - radius[2], y + height - radius[2], radius[2], 0, Math.PI / 2, false);
      context.lineTo(x + radius[3], y + height);
      context.arc(x + radius[3], y + height - radius[3], radius[3], Math.PI / 2, Math.PI, false);
      context.lineTo(x, y + radius[0]);
      context.arc(x + radius[0], y + radius[0], radius[0], Math.PI, Math.PI * 3 / 2, false);
      context.closePath();
    }
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        width = attrs.width,
        height = attrs.height;
    return {
      minX: x,
      minY: y,
      maxX: x + width,
      maxY: y + height
    };
  };

  return Rect;
}(_shape["default"]);

_shape["default"].Rect = Rect;
var _default = Rect;
exports["default"] = _default;

/***/ }),

/***/ 1224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _shape = _interopRequireDefault(__webpack_require__(866));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var ImageShape = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(ImageShape, _Shape);

  function ImageShape() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = ImageShape.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = false;
    this._attrs.canStroke = false;
    this._attrs.loading = false;
    this._attrs.image = null;
    this._attrs.type = 'image';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var _this = this;

    var attrs = this.get('attrs');
    var src = attrs.src;

    if (this.get('loading')) {
      return;
    }

    var image = this.get('image');

    if (image) {
      this.drawImage(context, image);
    } else {
      if (src && Image) {
        this.set('loading', true);

        var _image = new Image();

        _image.src = src; // 设置跨域

        _image.crossOrigin = 'Anonymous';

        _image.onload = function () {
          _this.set('loading', false);

          _this.set('image', _image);

          _this.drawImage(context, _image);
        };
      }
    }
  };

  _proto.drawImage = function drawImage(context, image) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        width = attrs.width,
        height = attrs.height,
        sx = attrs.sx,
        sy = attrs.sy,
        swidth = attrs.swidth,
        sheight = attrs.sheight;

    if (!(0, _common.isNil)(sx) && !(0, _common.isNil)(sy) && !(0, _common.isNil)(swidth) && !(0, _common.isNil)(sheight)) {
      context.drawImage(image, sx, sy, swidth, sheight, x, y, width, height);
    } else {
      context.drawImage(image, x, y, width, height);
    }
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        width = attrs.width,
        height = attrs.height; // 和rect一样

    return {
      minX: x,
      minY: y,
      maxX: x + width,
      maxY: y + height
    };
  };

  return ImageShape;
}(_shape["default"]);

_shape["default"].Image = ImageShape;
var _default = ImageShape;
exports["default"] = _default;

/***/ }),

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _shape = _interopRequireDefault(__webpack_require__(866));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Circle = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Circle, _Shape);

  function Circle() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Circle.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'circle';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      r: 0,
      lineWidth: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r;
    return {
      minX: x - r,
      maxX: x + r,
      minY: y - r,
      maxY: y + r
    };
  };

  return Circle;
}(_shape["default"]);

_shape["default"].Circle = Circle;
var _default = Circle;
exports["default"] = _default;

/***/ }),

/***/ 1226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _shape = _interopRequireDefault(__webpack_require__(866));

var _bbox = __webpack_require__(924);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Line = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Line, _Shape);

  function Line() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Line.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canStroke = true;
    this._attrs.type = 'line';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      lineWidth: 1
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x1 = attrs.x1,
        y1 = attrs.y1,
        x2 = attrs.x2,
        y2 = attrs.y2;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x1 = attrs.x1,
        y1 = attrs.y1,
        x2 = attrs.x2,
        y2 = attrs.y2,
        lineWidth = attrs.lineWidth;
    return (0, _bbox.getBBoxFromLine)(x1, y1, x2, y2, lineWidth);
  };

  return Line;
}(_shape["default"]);

_shape["default"].Line = Line;
var _default = Line;
exports["default"] = _default;

/***/ }),

/***/ 1227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _shape = _interopRequireDefault(__webpack_require__(866));

var _bbox = __webpack_require__(924);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Polygon = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Polygon, _Shape);

  function Polygon() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Polygon.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'polygon';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      points: null,
      lineWidth: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var points = attrs.points;
    context.beginPath();

    for (var i = 0, len = points.length; i < len; i++) {
      var point = points[i];

      if (i === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    }

    context.closePath();
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var points = attrs.points;
    return (0, _bbox.getBBoxFromPoints)(points);
  };

  return Polygon;
}(_shape["default"]);

_shape["default"].Polygon = Polygon;
var _default = Polygon;
exports["default"] = _default;

/***/ }),

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _shape = _interopRequireDefault(__webpack_require__(866));

var _bbox = __webpack_require__(924);

var Smooth = _interopRequireWildcard(__webpack_require__(1229));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// filter the point which x or y is NaN
function _filterPoints(points) {
  var filteredPoints = [];

  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];

    if (!isNaN(point.x) && !isNaN(point.y)) {
      filteredPoints.push(point);
    }
  }

  return filteredPoints;
}

var Polyline = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Polyline, _Shape);

  function Polyline() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Polyline.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'polyline';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      points: null,
      lineWidth: 1,
      smooth: false
    };
  };

  _proto.createPath = function createPath(context) {
    var self = this;
    var attrs = self.get('attrs');
    var points = attrs.points,
        smooth = attrs.smooth;

    var filteredPoints = _filterPoints(points);

    context.beginPath();

    if (filteredPoints.length) {
      context.moveTo(filteredPoints[0].x, filteredPoints[0].y);

      if (smooth) {
        var constaint = [[0, 0], [1, 1]];
        var sps = Smooth.smooth(filteredPoints, false, constaint);

        for (var i = 0, n = sps.length; i < n; i++) {
          var sp = sps[i];
          context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
        }
      } else {
        var _i;

        var l;

        for (_i = 1, l = filteredPoints.length - 1; _i < l; _i++) {
          context.lineTo(filteredPoints[_i].x, filteredPoints[_i].y);
        }

        context.lineTo(filteredPoints[l].x, filteredPoints[l].y);
      }
    }
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var points = attrs.points,
        smooth = attrs.smooth,
        lineWidth = attrs.lineWidth;

    var filteredPoints = _filterPoints(points);

    if (smooth) {
      var newPoints = [];
      var constaint = [[0, 0], [1, 1]];
      var sps = Smooth.smooth(filteredPoints, false, constaint);

      for (var i = 0, n = sps.length; i < n; i++) {
        var sp = sps[i];

        if (i === 0) {
          newPoints.push([filteredPoints[0].x, filteredPoints[0].y, sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
        } else {
          var lastPoint = sps[i - 1];
          newPoints.push([lastPoint[5], lastPoint[6], sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
        }
      }

      return (0, _bbox.getBBoxFromBezierGroup)(newPoints, lineWidth);
    }

    return (0, _bbox.getBBoxFromPoints)(filteredPoints, lineWidth);
  };

  return Polyline;
}(_shape["default"]);

_shape["default"].Polyline = Polyline;
var _default = Polyline;
exports["default"] = _default;

/***/ }),

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.smooth = catmullRom2bezier;

var _vector = _interopRequireDefault(__webpack_require__(923));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @fileOverview convert the line to curve
 * @author dxq613@gmail.com
 */
function getPoint(v) {
  return [v.x, v.y];
}

function smoothBezier(points, smooth, isLoop, constraint) {
  var cps = [];
  var prevPoint;
  var nextPoint;
  var hasConstraint = !!constraint;
  var min;
  var max;
  var point;
  var len;
  var l;
  var i;

  if (hasConstraint) {
    min = [Infinity, Infinity];
    max = [-Infinity, -Infinity];

    for (i = 0, l = points.length; i < l; i++) {
      point = getPoint(points[i]);

      _vector["default"].min(min, min, point);

      _vector["default"].max(max, max, point);
    }

    _vector["default"].min(min, min, constraint[0]);

    _vector["default"].max(max, max, constraint[1]);
  }

  for (i = 0, len = points.length; i < len; i++) {
    point = getPoint(points[i]);

    if (isLoop) {
      prevPoint = getPoint(points[i ? i - 1 : len - 1]);
      nextPoint = getPoint(points[(i + 1) % len]);
    } else {
      if (i === 0 || i === len - 1) {
        cps.push([point[0], point[1]]);
        continue;
      } else {
        prevPoint = getPoint(points[i - 1]);
        nextPoint = getPoint(points[i + 1]);
      }
    }

    var v = _vector["default"].sub([], nextPoint, prevPoint);

    _vector["default"].scale(v, v, smooth);

    var d0 = _vector["default"].distance(point, prevPoint);

    var d1 = _vector["default"].distance(point, nextPoint);

    var sum = d0 + d1;

    if (sum !== 0) {
      d0 /= sum;
      d1 /= sum;
    }

    var v1 = _vector["default"].scale([], v, -d0);

    var v2 = _vector["default"].scale([], v, d1);

    var cp0 = _vector["default"].add([], point, v1);

    var cp1 = _vector["default"].add([], point, v2);

    if (hasConstraint) {
      _vector["default"].max(cp0, cp0, min);

      _vector["default"].min(cp0, cp0, max);

      _vector["default"].max(cp1, cp1, min);

      _vector["default"].min(cp1, cp1, max);
    }

    cps.push([cp0[0], cp0[1]]);
    cps.push([cp1[0], cp1[1]]);
  }

  if (isLoop) {
    cps.push(cps.shift());
  }

  return cps;
}

function catmullRom2bezier(pointList, z, constraint) {
  var isLoop = !!z;
  var controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
  var len = pointList.length;
  var d1 = [];
  var cp1;
  var cp2;
  var p;

  for (var i = 0; i < len - 1; i++) {
    cp1 = controlPointList[i * 2];
    cp2 = controlPointList[i * 2 + 1];
    p = pointList[i + 1];
    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
  }

  if (isLoop) {
    cp1 = controlPointList[len];
    cp2 = controlPointList[len + 1];
    p = pointList[0];
    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
  }

  return d1;
}

/***/ }),

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _shape = _interopRequireDefault(__webpack_require__(866));

var _bbox = __webpack_require__(924);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Arc = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Arc, _Shape);

  function Arc() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Arc.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canStroke = true;
    this._attrs.canFill = true;
    this._attrs.type = 'arc';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      r: 0,
      startAngle: 0,
      endAngle: Math.PI * 2,
      anticlockwise: false,
      lineWidth: 1
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        anticlockwise = attrs.anticlockwise;
    context.beginPath();

    if (startAngle !== endAngle) {
      context.arc(x, y, r, startAngle, endAngle, anticlockwise);
    }
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        anticlockwise = attrs.anticlockwise;
    return (0, _bbox.getBBoxFromArc)(x, y, r, startAngle, endAngle, anticlockwise);
  };

  return Arc;
}(_shape["default"]);

_shape["default"].Arc = Arc;
var _default = Arc;
exports["default"] = _default;

/***/ }),

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _shape = _interopRequireDefault(__webpack_require__(866));

var _bbox = __webpack_require__(924);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Sector = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Sector, _Shape);

  function Sector() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Sector.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'sector';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 0,
      r: 0,
      r0: 0,
      startAngle: 0,
      endAngle: Math.PI * 2,
      anticlockwise: false
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        r = attrs.r,
        r0 = attrs.r0,
        anticlockwise = attrs.anticlockwise;
    context.beginPath();
    var unitX = Math.cos(startAngle);
    var unitY = Math.sin(startAngle);
    context.moveTo(unitX * r0 + x, unitY * r0 + y);
    context.lineTo(unitX * r + x, unitY * r + y); // 当扇形的角度非常小的时候，就不进行弧线的绘制；或者整个只有1个扇形时，会出现end<0的情况不绘制

    if (Math.abs(endAngle - startAngle) > 0.0001 || startAngle === 0 && endAngle < 0) {
      context.arc(x, y, r, startAngle, endAngle, anticlockwise);
      context.lineTo(Math.cos(endAngle) * r0 + x, Math.sin(endAngle) * r0 + y);

      if (r0 !== 0) {
        context.arc(x, y, r0, endAngle, startAngle, !anticlockwise);
      }
    }

    context.closePath();
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        r = attrs.r,
        r0 = attrs.r0,
        startAngle = attrs.startAngle,
        endAngle = attrs.endAngle,
        anticlockwise = attrs.anticlockwise;
    var outerBBox = (0, _bbox.getBBoxFromArc)(x, y, r, startAngle, endAngle, anticlockwise);
    var innerBBox = (0, _bbox.getBBoxFromArc)(x, y, r0, startAngle, endAngle, anticlockwise);
    return {
      minX: Math.min(outerBBox.minX, innerBBox.minX),
      minY: Math.min(outerBBox.minY, innerBBox.minY),
      maxX: Math.max(outerBBox.maxX, innerBBox.maxX),
      maxY: Math.max(outerBBox.maxY, innerBBox.maxY)
    };
  };

  return Sector;
}(_shape["default"]);

_shape["default"].Sector = Sector;
var _default = Sector;
exports["default"] = _default;

/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _shape = _interopRequireDefault(__webpack_require__(866));

var _rect = _interopRequireDefault(__webpack_require__(1233));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var textWidthCacheCounter = 0;
var textWidthCache = {};
var TEXT_CACHE_MAX = 5000;

var Text = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Text, _Shape);

  function Text() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Text.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'text';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      lineWidth: 0,
      lineCount: 1,
      fontSize: 12,
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textAlign: 'start',
      textBaseline: 'bottom',
      lineHeight: null,
      textArr: null
    };
  };

  _proto._getFontStyle = function _getFontStyle() {
    var attrs = this._attrs.attrs;
    var fontSize = attrs.fontSize,
        fontFamily = attrs.fontFamily,
        fontWeight = attrs.fontWeight,
        fontStyle = attrs.fontStyle,
        fontVariant = attrs.fontVariant;
    return fontStyle + " " + fontVariant + " " + fontWeight + " " + fontSize + "px " + fontFamily;
  };

  _proto._afterAttrsSet = function _afterAttrsSet() {
    var attrs = this._attrs.attrs;
    attrs.font = this._getFontStyle();

    if (attrs.text) {
      var text = attrs.text;
      var textArr = null;
      var lineCount = 1;

      if ((0, _common.isString)(text) && text.indexOf('\n') !== -1) {
        textArr = text.split('\n');
        lineCount = textArr.length;
      }

      attrs.lineCount = lineCount;
      attrs.textArr = textArr;
    }

    this.set('attrs', attrs);
  };

  _proto._getTextHeight = function _getTextHeight() {
    var attrs = this._attrs.attrs;

    if (attrs.height) {
      return attrs.height;
    }

    var lineCount = attrs.lineCount;
    var fontSize = attrs.fontSize * 1;

    if (lineCount > 1) {
      var spaceingY = this._getSpaceingY();

      return fontSize * lineCount + spaceingY * (lineCount - 1);
    }

    return fontSize;
  };

  _proto._getSpaceingY = function _getSpaceingY() {
    var attrs = this._attrs.attrs;
    var lineHeight = attrs.lineHeight;
    var fontSize = attrs.fontSize * 1;
    return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
  };

  _proto.drawInner = function drawInner(context) {
    var self = this;
    var attrs = self._attrs.attrs;
    var text = attrs.text;
    var x = attrs.x;
    var y = attrs.y;

    if ((0, _common.isNil)(text) || isNaN(x) || isNaN(y)) {
      // text will be 0
      return;
    }

    var textArr = attrs.textArr;
    var fontSize = attrs.fontSize * 1;

    var spaceingY = self._getSpaceingY();

    if (attrs.rotate) {
      // do rotation
      context.translate(x, y);
      context.rotate(attrs.rotate);
      x = 0;
      y = 0;
    }

    var textBaseline = attrs.textBaseline;
    var height;

    if (textArr) {
      height = self._getTextHeight();
    }

    var subY; // context.beginPath();

    if (self.hasFill()) {
      var fillOpacity = attrs.fillOpacity;

      if (!(0, _common.isNil)(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
      }

      if (textArr) {
        for (var i = 0, len = textArr.length; i < len; i++) {
          var subText = textArr[i];
          subY = y + i * (spaceingY + fontSize) - height + fontSize; // bottom;

          if (textBaseline === 'middle') {
            subY += height - fontSize - (height - fontSize) / 2;
          }

          if (textBaseline === 'top') {
            subY += height - fontSize;
          }

          context.fillText(subText, x, subY);
        }
      } else {
        context.fillText(text, x, y);
      }
    }

    if (self.hasStroke()) {
      if (textArr) {
        for (var _i = 0, _len = textArr.length; _i < _len; _i++) {
          var _subText = textArr[_i];
          subY = y + _i * (spaceingY + fontSize) - height + fontSize; // bottom;

          if (textBaseline === 'middle') {
            subY += height - fontSize - (height - fontSize) / 2;
          }

          if (textBaseline === 'top') {
            subY += height - fontSize;
          }

          context.strokeText(_subText, x, subY);
        }
      } else {
        context.strokeText(text, x, y);
      }
    }
  };

  _proto.calculateBox = function calculateBox() {
    var self = this;
    var attrs = self._attrs.attrs;
    var x = attrs.x,
        y = attrs.y,
        textAlign = attrs.textAlign,
        textBaseline = attrs.textBaseline;

    var width = self._getTextWidth(); // attrs.width


    if (!width) {
      return {
        minX: x,
        minY: y,
        maxX: x,
        maxY: y
      };
    }

    var height = self._getTextHeight(); // attrs.height


    if (attrs.rotate) {
      var rotatedBox = _rect["default"].calcRotatedBox({
        width: width,
        height: height,
        rotate: attrs.rotate
      });

      width = rotatedBox.width;
      height = rotatedBox.height;
    }

    var point = {
      x: x,
      y: y - height
    }; // default textAlign: start, textBaseline: bottom

    if (textAlign) {
      if (textAlign === 'end' || textAlign === 'right') {
        point.x -= width;
      } else if (textAlign === 'center') {
        point.x -= width / 2;
      }
    }

    if (textBaseline) {
      if (textBaseline === 'top') {
        point.y += height;
      } else if (textBaseline === 'middle') {
        point.y += height / 2;
      }
    }

    return {
      minX: point.x,
      minY: point.y,
      maxX: point.x + width,
      maxY: point.y + height
    };
  };

  _proto._getTextWidth = function _getTextWidth() {
    var attrs = this._attrs.attrs;

    if (attrs.width) {
      return attrs.width;
    }

    var text = attrs.text;
    var context = this.get('context');
    if ((0, _common.isNil)(text)) return undefined;
    var font = attrs.font;
    var textArr = attrs.textArr;
    var key = text + '' + font;

    if (textWidthCache[key]) {
      return textWidthCache[key];
    }

    var width = 0;

    if (textArr) {
      for (var i = 0, length = textArr.length; i < length; i++) {
        var subText = textArr[i];
        width = Math.max(width, (0, _common.measureText)(subText, font, context).width);
      }
    } else {
      width = (0, _common.measureText)(text, font, context).width;
    }

    if (textWidthCacheCounter > TEXT_CACHE_MAX) {
      textWidthCacheCounter = 0;
      textWidthCache = {};
    }

    textWidthCacheCounter++;
    textWidthCache[key] = width;
    return width;
  };

  return Text;
}(_shape["default"]);

_shape["default"].Text = Text;
var _default = Text;
exports["default"] = _default;

/***/ }),

/***/ 1233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var Rect = {
  calcRotatedBox: function calcRotatedBox(_ref) {
    var width = _ref.width,
        height = _ref.height,
        rotate = _ref.rotate;
    var absRotate = Math.abs(rotate);
    return {
      width: Math.abs(width * Math.cos(absRotate) + height * Math.sin(absRotate)),
      height: Math.abs(height * Math.cos(absRotate) + width * Math.sin(absRotate))
    };
  }
};
var _default = Rect;
exports["default"] = _default;

/***/ }),

/***/ 1234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _shape = _interopRequireDefault(__webpack_require__(866));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Custom = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Custom, _Shape);

  function Custom() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Custom.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.createPath = null;
    this._attrs.type = 'custom';
  };

  _proto.createPath = function createPath(context) {
    var createPath = this.get('createPath');
    createPath && createPath.call(this, context);
  };

  _proto.calculateBox = function calculateBox() {
    var calculateBox = this.get('calculateBox');
    return calculateBox && calculateBox.call(this);
  };

  return Custom;
}(_shape["default"]);

_shape["default"].Custom = Custom;
var _default = Custom;
exports["default"] = _default;

/***/ }),

/***/ 1235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _index = __webpack_require__(929);

var _marker = _interopRequireDefault(__webpack_require__(998));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MARKER_RADIUS = 3;

var List = /*#__PURE__*/function () {
  var _proto = List.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      showTitle: false,

      /**
       * title string
       * @type {?String}
       */
      title: null,

      /**
       * items array
       * @type {?Array}
       */
      items: null,

      /**
       * offset between title and items
       * @type {Number}
       */
      titleGap: 12,

      /**
       * offset between each item
       * @type {Number}
       */
      itemGap: 10,

      /**
       * the offset between each item in vertical direaction
       * @type {Number}
       */
      itemMarginBottom: 12,

      /**
       * the formatter for item text
       * @type {[type]}
       */
      itemFormatter: null,
      itemWidth: null,

      /**
       * offset between marker and text
       * @type {Number}
       */
      wordSpace: 6,
      x: 0,
      y: 0,
      layout: 'horizontal',

      /**
       * the join string of `name` and `value`
       * @type {String}
       */
      joinString: ': '
    };
  };

  function List(cfg) {
    (0, _common.deepMix)(this, this.getDefaultCfg(), cfg);

    this._init();

    this._renderTitle();

    this._renderItems();
  }

  _proto._init = function _init() {
    var container = new _index.Group({
      zIndex: this.zIndex || 0
    });
    this.container = container;
    var wrapper = container.addGroup();
    this.wrapper = wrapper;
    var itemsGroup = wrapper.addGroup({
      className: 'itemsGroup'
    });
    this.itemsGroup = itemsGroup;

    if (this.parent) {
      this.parent.add(container);
    }
  };

  _proto._renderTitle = function _renderTitle(title) {
    title = title || this.title;
    var titleShape = this.titleShape;
    var titleHeight = 0;

    if (this.showTitle && title) {
      if (titleShape && !titleShape.get('destroyed')) {
        titleShape.attr('text', title);
      } else {
        var wrapper = this.wrapper,
            titleStyle = this.titleStyle;
        titleShape = wrapper.addShape('text', {
          className: 'title',
          attrs: (0, _common.mix)({
            x: 0,
            y: 0,
            text: title
          }, titleStyle)
        });
        this.titleShape = titleShape;
      }

      titleHeight = titleShape.getBBox().height + this.titleGap;
    }

    this._titleHeight = titleHeight;
  };

  _proto._renderItems = function _renderItems(items) {
    var self = this;
    items = items || self.items;

    if (!items) {
      return;
    }

    if (self.reversed) {
      items.reverse();
    }

    (0, _common.each)(items, function (item, index) {
      self._addItem(item, index);
    });

    if (items.length > 1) {
      this._adjustItems();
    }

    this._renderBackground();
  };

  _proto._renderBackground = function _renderBackground() {
    var background = this.background;

    if (background) {
      var container = this.container;
      var wrapper = this.wrapper;

      var _wrapper$getBBox = wrapper.getBBox(),
          minX = _wrapper$getBBox.minX,
          minY = _wrapper$getBBox.minY,
          width = _wrapper$getBBox.width,
          height = _wrapper$getBBox.height;

      var padding = background.padding || [0, 0, 0, 0];
      padding = (0, _common.parsePadding)(padding);
      var attrs = (0, _common.mix)({
        x: minX - padding[3],
        y: minY - padding[0],
        width: width + padding[1] + padding[3],
        height: height + padding[0] + padding[2]
      }, background);
      var backShape = this.backShape;

      if (backShape) {
        backShape.attr(attrs);
      } else {
        backShape = container.addShape('Rect', {
          zIndex: -1,
          attrs: attrs
        });
      }

      this.backShape = backShape;
      container.sort();
    }
  };

  _proto._addItem = function _addItem(item) {
    var itemsGroup = this.itemsGroup;
    var itemGroup = itemsGroup.addGroup({
      name: item.name,
      value: item.value,
      dataValue: item.dataValue,
      checked: item.checked
    });
    var unCheckStyle = this.unCheckStyle,
        unCheckColor = this.unCheckColor,
        nameStyle = this.nameStyle,
        valueStyle = this.valueStyle,
        wordSpace = this.wordSpace;
    var marker = item.marker,
        value = item.value;
    var startX = 0;

    if (unCheckColor) {
      unCheckStyle.fill = unCheckColor;
    }

    if (marker) {
      var radius = marker.radius || MARKER_RADIUS;
      var markerAttrs = (0, _common.mix)({
        x: radius,
        y: this._titleHeight
      }, marker);

      if (item.checked === false) {
        (0, _common.mix)(markerAttrs, unCheckStyle);
      }

      var markerShape = new _marker["default"]({
        className: 'item-marker',
        attrs: markerAttrs
      });
      itemGroup.add(markerShape);
      startX += markerShape.getBBox().width + wordSpace;
    }

    var nameText;
    var name = item.name;

    if (name) {
      var joinString = this.joinString || '';
      name = value ? name + joinString : name;
      nameText = itemGroup.addShape('text', {
        className: 'name',
        attrs: (0, _common.mix)({
          x: startX,
          y: this._titleHeight,
          text: this._formatItemValue(name)
        }, nameStyle, item.checked === false ? unCheckStyle : null)
      });
    }

    if (value) {
      var valueX = startX;

      if (nameText) {
        valueX += nameText.getBBox().width;
      }

      itemGroup.addShape('text', {
        className: 'value',
        attrs: (0, _common.mix)({
          x: valueX,
          y: this._titleHeight,
          text: value
        }, valueStyle, item.checked === false ? unCheckStyle : null)
      });
    }

    return itemGroup;
  };

  _proto._formatItemValue = function _formatItemValue(value) {
    var formatter = this.itemFormatter;

    if (formatter) {
      value = formatter.call(this, value);
    }

    return value;
  };

  _proto._getMaxItemWidth = function _getMaxItemWidth() {
    var width;
    var itemWidth = this.itemWidth;

    if ((0, _common.isNumber)(itemWidth) || (0, _common.isNil)(itemWidth)) {
      return itemWidth;
    }

    if (itemWidth === 'auto') {
      var itemsGroup = this.itemsGroup;
      var children = itemsGroup.get('children');
      var count = children.length;
      var maxItemWidth = 0;

      for (var i = 0; i < count; i++) {
        var _children$i$getBBox = children[i].getBBox(),
            _width = _children$i$getBBox.width;

        maxItemWidth = Math.max(maxItemWidth, _width);
      }

      var maxLength = this.maxLength;
      var itemGap = this.itemGap;
      var twoAvgWidth = (maxLength - itemGap) / 2;
      var threeAvgWidth = (maxLength - itemGap * 2) / 3;

      if (count === 2) {
        width = Math.max(maxItemWidth, twoAvgWidth);
      } else {
        // 1. max <= 3Avg, 3Avg
        // 2. 3Avg < max && max < 2avg, 2avg
        // 3. max > 2avg, max, one column
        if (maxItemWidth <= threeAvgWidth) {
          width = threeAvgWidth;
        } else if (maxItemWidth <= twoAvgWidth) {
          width = twoAvgWidth;
        } else {
          width = maxItemWidth;
        }
      }

      return width;
    }
  };

  _proto._adjustHorizontal = function _adjustHorizontal() {
    var maxLength = this.maxLength,
        itemsGroup = this.itemsGroup;
    var children = itemsGroup.get('children');
    var itemGap = this.itemGap,
        itemMarginBottom = this.itemMarginBottom;
    var titleHeight = this._titleHeight;
    var row = 0;
    var rowWidth = 0;
    var width;
    var height;

    var itemWidth = this._getMaxItemWidth();

    var legendHitBoxes = [];

    for (var i = 0, len = children.length; i < len; i++) {
      var child = children[i];
      var box = child.getBBox();
      var childHeight = box.height;
      var childWidth = box.width;
      width = itemWidth || childWidth;
      height = childHeight + itemMarginBottom;

      if (width - (maxLength - rowWidth) > 0.0001) {
        row++;
        rowWidth = 0;
      }

      child.moveTo(rowWidth, row * height);
      legendHitBoxes.push({
        x: rowWidth,
        y: row * height + titleHeight - childHeight / 2,
        width: childWidth * 1.375,
        height: childHeight * 1.375
      });
      rowWidth += width + itemGap;
    }

    this.legendHitBoxes = legendHitBoxes;
    return;
  };

  _proto._adjustVertical = function _adjustVertical() {
    var maxLength = this.maxLength,
        itemsGroup = this.itemsGroup;
    var itemGap = this.itemGap,
        itemMarginBottom = this.itemMarginBottom,
        itemWidth = this.itemWidth;
    var titleHeight = this._titleHeight;
    var children = itemsGroup.get('children');
    var colHeight = 0;
    var width;
    var height;
    var maxItemWidth = 0;
    var totalWidth = 0;
    var legendHitBoxes = [];

    for (var i = 0, length = children.length; i < length; i++) {
      var child = children[i];
      var bbox = child.getBBox();
      width = bbox.width;
      height = bbox.height;

      if ((0, _common.isNumber)(itemWidth)) {
        maxItemWidth = itemWidth + itemGap;
      } else if (width > maxItemWidth) {
        maxItemWidth = width + itemGap;
      }

      if (maxLength - colHeight < height) {
        colHeight = 0;
        totalWidth += maxItemWidth;
        child.moveTo(totalWidth, 0);
        legendHitBoxes.push({
          x: totalWidth,
          y: titleHeight - height / 2,
          width: width * 1.375,
          height: height * 1.375
        });
      } else {
        child.moveTo(totalWidth, colHeight);
        legendHitBoxes.push({
          x: totalWidth,
          y: colHeight - height / 2 + titleHeight,
          width: width * 1.375,
          height: height * 1.375
        });
      }

      colHeight += height + itemMarginBottom;
    }

    this.legendHitBoxes = legendHitBoxes;
    return;
  };

  _proto._adjustItems = function _adjustItems() {
    var layout = this.layout;

    if (layout === 'horizontal') {
      this._adjustHorizontal();
    } else {
      this._adjustVertical();
    }
  };

  _proto.moveTo = function moveTo(x, y) {
    this.x = x;
    this.y = y;
    var container = this.container;
    container && container.moveTo(x, y);
    return this;
  };

  _proto.setItems = function setItems(items) {
    this.clearItems();

    this._renderItems(items);
  };

  _proto.setTitle = function setTitle(title) {
    this._renderTitle(title);
  };

  _proto.clearItems = function clearItems() {
    var itemsGroup = this.itemsGroup;
    itemsGroup.clear();
  };

  _proto.getWidth = function getWidth() {
    var container = this.container;
    var bbox = container.getBBox();
    return bbox.width;
  };

  _proto.getHeight = function getHeight() {
    var container = this.container;
    var bbox = container.getBBox();
    return bbox.height;
  };

  _proto.show = function show() {
    var container = this.container;
    container.show();
  };

  _proto.hide = function hide() {
    var container = this.container;
    container.hide();
  };

  _proto.clear = function clear() {
    var container = this.container;
    container.clear();
    container.remove(true);
  };

  return List;
}();

var _default = List;
exports["default"] = _default;

/***/ }),

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _index = __webpack_require__(929);

var TextBox = /*#__PURE__*/function () {
  var _proto = TextBox.prototype;

  _proto.getDefaultCfg = function getDefaultCfg() {
    return {
      x: 0,
      y: 0,
      content: '',
      textStyle: {
        fontSize: 12,
        fill: '#fff',
        textAlign: 'center',
        textBaseline: 'middle',
        fontFamily: 'Arial'
      },
      background: {
        radius: 1,
        fill: 'rgba(0, 0, 0, 0.65)',
        padding: [3, 5]
      },
      width: 0,
      height: 0,
      className: ''
    };
  };

  function TextBox(cfg) {
    (0, _common.deepMix)(this, this.getDefaultCfg(), cfg);

    this._init();

    var content = this.content,
        x = this.x,
        y = this.y;

    if (!(0, _common.isNil)(content)) {
      this.updateContent(content);
    }

    this.updatePosition(x, y);
  }

  _proto._init = function _init() {
    var content = this.content,
        textStyle = this.textStyle,
        background = this.background,
        className = this.className,
        visible = this.visible;
    var container = new _index.Group({
      className: className,
      zIndex: 0,
      visible: visible
    });
    var text = container.addShape('Text', {
      className: className + '-text',
      zIndex: 1,
      attrs: (0, _common.mix)({
        text: content,
        x: 0,
        y: 0
      }, textStyle)
    });
    var backgroundShape = container.addShape('Rect', {
      className: className + '-bg',
      zIndex: -1,
      attrs: (0, _common.mix)({
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }, background)
    });
    container.sort();
    this.container = container;
    this.textShape = text;
    this.backgroundShape = backgroundShape;
  };

  _proto._getBBox = function _getBBox() {
    var textShape = this.textShape;
    var background = this.background;
    var textBBox = textShape.getBBox();
    var padding = (0, _common.parsePadding)(background.padding);
    var width = textBBox.width + padding[1] + padding[3];
    var height = textBBox.height + padding[0] + padding[2];
    var x = textBBox.minX - padding[3];
    var y = textBBox.minY - padding[0];
    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  };

  _proto.updateContent = function updateContent(text) {
    var textShape = this.textShape,
        backgroundShape = this.backgroundShape;

    if (!(0, _common.isNil)(text)) {
      if (!(0, _common.isObject)(text)) {
        text = {
          text: text
        };
      }

      textShape.attr(text); // update box shape

      var _this$_getBBox = this._getBBox(),
          x = _this$_getBBox.x,
          y = _this$_getBBox.y,
          tipWidth = _this$_getBBox.width,
          tipHeight = _this$_getBBox.height;

      var width = this.width || tipWidth;
      var height = this.height || tipHeight;
      backgroundShape.attr({
        x: x,
        y: y,
        width: width,
        height: height
      });
      this._width = width;
      this._height = height;
      this.content = text.text;
    }
  };

  _proto.updatePosition = function updatePosition(x, y) {
    var container = this.container;

    var _this$_getBBox2 = this._getBBox(),
        xMin = _this$_getBBox2.x,
        yMin = _this$_getBBox2.y;

    container.moveTo(x - xMin, y - yMin);
    this.x = x - xMin;
    this.y = y - yMin;
  };

  _proto.getWidth = function getWidth() {
    return this._width;
  };

  _proto.getHeight = function getHeight() {
    return this._height;
  };

  _proto.show = function show() {
    this.container.show();
  };

  _proto.hide = function hide() {
    this.container.hide();
  };

  _proto.clear = function clear() {
    var container = this.container;
    container.clear();
    container.remove(true);
    this.container = null;
    this.textShape = null;
    this.backgroundShape = null;
  };

  return TextBox;
}();

var _default = TextBox;
exports["default"] = _default;

/***/ }),

/***/ 1237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getClip = getClip;
exports.isPointInPlot = isPointInPlot;

var _index = __webpack_require__(929);

function getClip(coord) {
  var start = coord.start;
  var end = coord.end;
  var width = end.x - start.x;
  var height = Math.abs(end.y - start.y);
  var margin = 10;
  var clip;

  if (coord.isPolar) {
    var circleRadius = coord.circleRadius,
        center = coord.center,
        startAngle = coord.startAngle,
        endAngle = coord.endAngle;
    clip = new _index.Shape.Sector({
      attrs: {
        x: center.x,
        y: center.y,
        r: circleRadius,
        r0: 0,
        startAngle: startAngle,
        endAngle: endAngle
      }
    });
  } else {
    clip = new _index.Shape.Rect({
      attrs: {
        x: start.x,
        y: end.y - margin,
        width: width,
        height: height + 2 * margin
      }
    });
  }

  clip.isClip = true;
  return clip;
}

function isPointInPlot(point, plot) {
  var x = point.x,
      y = point.y;
  var tl = plot.tl,
      tr = plot.tr,
      br = plot.br;
  return x >= tl.x && x <= tr.x && y >= tl.y && y <= br.y;
}

/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/style/css.js
var css = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/icon/index.js
var icon = __webpack_require__(182);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// EXTERNAL MODULE: ./node_modules/_mobx-react@6.2.5@mobx-react/dist/mobxreact.esm.js
var mobxreact_esm = __webpack_require__(256);

// EXTERNAL MODULE: ./node_modules/_@antv_f2@3.7.6@@antv/f2/dist/f2.js
var f2 = __webpack_require__(996);
var f2_default = /*#__PURE__*/__webpack_require__.n(f2);

// EXTERNAL MODULE: ./node_modules/_@antv_f2@3.7.6@@antv/f2/lib/plugin/Tooltip.js
var Tooltip = __webpack_require__(1213);

// EXTERNAL MODULE: ./src/components/HeaderDate/index.tsx + 2 modules
var HeaderDate = __webpack_require__(966);

// EXTERNAL MODULE: ./node_modules/_classnames@2.2.6@classnames/index.js
var _classnames_2_2_6_classnames = __webpack_require__(97);
var _classnames_2_2_6_classnames_default = /*#__PURE__*/__webpack_require__.n(_classnames_2_2_6_classnames);

// EXTERNAL MODULE: ./src/components/EasyNarBar/index.tsx
var EasyNarBar = __webpack_require__(857);

// EXTERNAL MODULE: ./node_modules/_dayjs@1.8.34@dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(3);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./src/assets/imgs/nomessage.png
/* harmony default export */ var nomessage = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAACrFBMVEUAAAD///////+qqqq/v7/MzMzV1dXb29u/v7/GxsbMzMzR0dHV1dXExMTMzMzS0tLJycnMzMzOzs7IyMjKysrMzMzOzs7Q0NDOzs7Pz8/JycnLy8vMzMzPz8/JycnLy8vNzc3KysrLy8vMzMzKysrLy8vMzMzNzc3KysrMzMzKysrLy8vMzMzNzc3KysrLy8vMzMzNzc3Ozs7Ly8vMzMzNzc3Nzc3Ly8vMzMzNzc3Nzc3Ly8vLy8vNzc3Nzc3Ly8vLy8vNzc3Ly8vLy8vNzc3Nzc3Ly8vLy8vNzc3Ly8vLy8vNzc3Nzc3Ly8vMzMzNzc3Ly8vMzMzMzMzMzMzLy8vMzMzMzMzNzc3Ly8vMzMzNzc3Ly8vMzMzMzMzNzc3Ly8vMzMzNzc3Ly8vMzMzMzMzNzc3Ly8vNzc3Ly8vMzMzMzMzMzMzLy8vMzMzMzMzMzMzNzc3MzMzMzMzMzMzLy8vMzMzMzMzMzMzNzc3MzMzMzMzMzMzLy8vMzMzMzMzNzc3Ly8vMzMzNzc3MzMzLy8vMzMzMzMzNzc3MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///+YAco3AAAAsHRSTlMAAQIDBAUGBwgJCgsMDQ8RExQVFxgZGhsfICEiIyUmJykrLC0wMTIzNTc6Ozw9P0BBQkNERkdISUtMTU5PUVJTVFZYWVtcXV5hYmNlZmdqa2xtbnJ2d3l6e31/gIKDhIWIiYqLjI6Pk5SWmpyen6ChoqSlpqipqqusr7C1t7i6u7y/wMPGyMnKzM7P0NHS09TX2drb3N3f4eLj5ebo6err7O7v8PLz9PX29/n6+/z9/tbSzywAAAABYktHROOxBq6KAAAI1UlEQVR42u2d+39bZR3HU1cs4G2iOFEnigpuyhBv6LzgBcQLTgSneMFN0KmogBcmoqAwnYLABAQFYW4ymcDavs9Jc23TpresadqmaXrSa9pc/hF/OOnJpUlzTnJO+uz1ej4/Jc15Tp93nuf5Pt/n+33OE5dLSkpKSkpKSkpKSkpKSkpKSkpKSkpKSqpVevfth//ivH73hS0Oc3z6FK3R3e2Ocrz+OK3S9Y6CXA94g44rAPzZUZCbgXTeeYXgX46C3AKstACkH56RIBJEgkgQCSJBJEgtkLdc+gHLuuxtWwQDOffrTzbmgB49cN7GIJlVO5WtA/LWRxv3pY9dtiHIfMpOLW8Mcv5TzawKXtghDMg9AL7wkGWFgwBPdAgCshNQTzd25wk38GVBQH4ARBq9dQz4vSAg94KiNXxvX8UNNxHkQfA1fu8QdAkC8temQPoBCSJBzIHMVhSvtASadiaAaMMqvnjpVOHFXWqdkyFFCSXFBxkBcM8Y76cVgLHiBUGAoPggHiibIIcBCBjvE7qHlRAexA3AiPE+DIDXeB/XQeLCg4QAmCrzQSBctAQ9AD2a8CAzXmC4pHAY8JcYsgkV1JjZMbKStlMZK+Z3NnZ6uuxriEcmygzwTDSaNG1+W7nUdXRClCANgBwqNUqNeL8nBAH5OSgzjXJoHnhIEJCrgFCjIMPAfkFAzv4HEGqoTbRBBV54oygBut1dgOL1FWXMhxHfhlIB9ooTadzTWRGrKjggiaCJuNYP2wQKmb7v4fLK6f0sqtbHeOoqsYLYL3vPN289qOtZQEulUskQwMm7DtbWbTd9uKNOEDs9GWtYs82lFQ6DmkqlYj0Af7qwubRC1tNMNDbeFMjj4EnNDgCc2n9Wk/mR5aY2m4xWRUhrk9HTIx448dHtG+2rOQb+SQ/AkYubT/SEmuBQ59ZBLE2G3aWX/O8PN+5oq16RtlOgAHR+r8OOjNXSQsPKVFCsTla1on//1puqVeTVhY+f3CVY6i0dKRpRt9fv9xabpvOX71hfkQv0z+54pVg5xExE0SsWiCQWComrzHx82Kv/tftX2yorcjHAM7sFS4YmdOsXmFh366WoznLihop85vuBg1vFyupmhwAYmKv+cVIfOvedX1aRT/GfqwVLTy/5AXoXal+R9AE8e3lpRa69Z5tgefY5N+COb9xmUQV48bMlFXmdaBsGZlUguFwX1wN0fVXcnQ8pFRjO1b9wtRfo/qKoIItuIGLOJAwAnZ8UE2TVC4yZvDg3ADz/dmdAxr1uK/Jr5XULA8PmzXQfcORcJ0DSVh3FQFnNJoFQzmID3uoEyKpiEaS3zL1SocdSP51XoHuXE10rGe63oqGl0moNAmvLxMToghmSceChdsEG+xwQLnYyd9bMgPcDXxIMZADUwjb7JGZvqwFPtAsFslCcQdLmZ5N8H/A5oUBGQEkbkQYGTFovDfijSCBZNwwVO5Y3Y7agH9guEEgC0IpVS5kuGAO+IxDIEHj03jQLDFpY3AMPCATiMZyTAWDRQskAdL1WGJAlYFqPMSjQb6VoBLhSGJAEoK+mZuoET9cvfIF9doOsJmfqKLlatTZRUPVXp4FVq415l80gOV99P9FXdYIYhKARdfVZasycAkdsBjEVxF6uMUEX/Cxv0eMyKR88Z3eLmMh5BXM1TE/BaCmmvZOSsp1tNo+R7JxWR3O5Wt+qXv0cELUG0ge8QhSr5VkDyVoHCQFbRQHxwUijXSsIdIgCEjTcEo8lB6Xgm70kzIQYgpDR4wPWyrrhqDAgI+DRX42CkrFSdMWWFYldIDEgYzgrSUtRVuA2YUCSxnJkBYuDJLZuX8lmgqwWY6UhUKzcsh/YKc56JGA4W9MW4r/5fD6rwn/PEgckAujhupwX1GXTBWeA39q+QpzqNX0eRW9sXXiuMKNPYWVpNQBcYzfIiqXA72Ll3F5YtOeCwITZJbsCJ18lEki0uDJcUEAxaYJHgdvtj2vFLXStiu98RS0uuiYBddFsg3RfJFbsNwLEihM942YKDQK/ESyInVaLUez8EMq8yYBp5ztFyyGOlyasNDP5kYwP+JFwydCsz+qiKgwcfY14Wd2UBWu11oTdu13igeTHq2+kq6E4wAExNwz0A26TJNMKcKhDTJBMEFBmzFw6CfD4eaLuRVnxAUr9KSSrP573XmE31eTTfoD+Ovdc9OtezqNvEBYkn+kDUGMb5BD17VoAPLZNWJB8dgQAf6IGSnZC3/F4+BPHbWwTRzZnJvStsb5YlTsvjvUA0HXg5a5LbCRxZpdpelDvOEooNl/SLtnU2FqU/JGdLpfLThKnNjBrRlxf8YdHx2KxsdEBnzEynv5KYZFuH4lzz4/M9tVakP3tunOM/28biZMPwqxtVi4/vugnl5flQnSSz1y9TWCQfD6/NDXoNzpU9z/v3rtz3YFSl+iHkL50g9Ag+Xw+n1ue02YCcOzs6lUokPBt0UHWvMmaT/R8HBtIRAD5CDaQiAByQZcNJEIcpvdjmicRAmTLLwyS/Wc0iB0kgpzT2DzJOpCc5oiCcLzkpMXttpOsA1mhFbrF9jbZJJCbbe9dmwTyDdvHSVWQ3iEnFQCutX3EVwUZSzmpELDLdtu1CSA90L3VdivcepAE8KD980nrQQaB79o/M7YcZNYNXGj/HN9ykCHgXpf93sq+yh+JSANR5zimFODSDavUftAg2WMe5DpgvnIHQ8wxjqQXuLNOnYokJ81nHa6ozCOPlx69Z7c0P/DvulGsIsnHTIOc8zx4Sh7rynrA45jlDQBdV9SvlTFOPmS+b91R/jjUaMWRdnYq5gYw9cR0oU2es5DxffOLpdurxgB11plhHgTo/pq5arX/FDhl6cG+vQDBZDafz+qHGIw7MHnEh/UU1UnzxyF88Ps3vcva5P4zPWjuKwTLFZ/d8hoHizxgx/aZmmrb292a3396eo/TP8q1437nKbru/3yHy3lddOOdh5z7fbT7fr3vyq0uKSkpKSkpKSkpKSkpKSkpKSkpKSkpKakzU/8HwKKZ+3MIE8YAAAAASUVORK5CYII=");
// CONCATENATED MODULE: ./src/pages/Perform/Statistics/index.tsx



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











__webpack_require__(1238);

var Statistics_PerformStatistics = (_dec = Object(mobxreact_esm["b" /* inject */])("performStatisticsStore"), _dec(_class = Object(mobxreact_esm["c" /* observer */])(_class = (_temp = /*#__PURE__*/function (_React$Component) {
  _inherits(PerformStatistics, _React$Component);

  var _super = _createSuper(PerformStatistics);

  function PerformStatistics() {
    var _this;

    _classCallCheck(this, PerformStatistics);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "chart", void 0);

    _defineProperty(_assertThisInitialized(_this), "initChart", function () {
      var chartData = _this.props.performStatisticsStore.chartData;
      _this.chart = new f2_default.a.Chart({
        id: "mountNode",
        pixelRatio: window.devicePixelRatio,
        plugins: Tooltip["Tooltip"]
      });
      var data = chartData;

      _this.chart.source(data.reverse(), {
        value: {
          type: "linear",
          min: 0
        }
      });

      _this.chart.coord({
        transposed: true
      });

      _this.chart.axis("label", {
        line: f2_default.a.Global._defaultAxis.line,
        grid: null
      });

      _this.chart.axis("value", {
        line: null,
        grid: f2_default.a.Global._defaultAxis.grid,
        label: {
          rotate: -Math.PI / 2,
          textAlign: "end",
          textBaseline: "middle"
        }
      });

      _this.chart.interval().position("label*value").color("type").adjust({
        type: "dodge",
        marginRatio: 1 / 32
      });

      _this.chart.render();
    });

    _defineProperty(_assertThisInitialized(_this), "onOK", function (date) {
      var _this$props$performSt = _this.props.performStatisticsStore,
          onOK = _this$props$performSt.onOK,
          getCharData = _this$props$performSt.getCharData;
      onOK(date);
      getCharData().then(function (res) {
        _this.initChart();
      });
    });

    return _this;
  }

  _createClass(PerformStatistics, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props$performSt2 = this.props.performStatisticsStore,
          getTableData = _this$props$performSt2.getTableData,
          getCharData = _this$props$performSt2.getCharData; // this.initChart();

      getTableData();
      getCharData().then(function () {
        _this2.initChart();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var reset = this.props.performStatisticsStore.reset;
      reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          history = _this$props.history,
          _this$props$performSt3 = _this$props.performStatisticsStore,
          _this$props$performSt4 = _this$props$performSt3.table,
          table = _this$props$performSt4 === void 0 ? [] : _this$props$performSt4,
          chartData = _this$props$performSt3.chartData,
          month = _this$props$performSt3.month;
      return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(_react_16_13_1_react_default.a.Fragment, null, /*#__PURE__*/_react_16_13_1_react_default.a.createElement(EasyNarBar["a" /* default */], {
        mainContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(HeaderDate["a" /* default */], {
          defaultValue: dayjs_min_default()(month).toDate(),
          onOk: this.onOK
        }),
        leftContent: /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icon_default.a, {
          type: "left"
        }),
        onLeftClick: function onLeftClick() {
          history.goBack();
        }
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "perform-statistics-title"
      }, "\u5C65\u804C\u5B8C\u6210\u60C5\u51B5"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "perform-statistics-thead"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "perform-statistics-th_1"
      }, "\u6392\u540D"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "perform-statistics-th_2"
      }, "\u6240\u5C5E\u673A\u6784"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "perform-statistics-th_3"
      }, "\u5C65\u804C\u5B8C\u6210\u7387"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "perform-statistics-th_4"
      }, "\u672A\u5B8C\u6210\u6570")), table.length == 0 ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "dataEmpty"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("img", {
        src: nomessage,
        style: {
          width: "100px",
          height: "100px"
        }
      })) : "", table.map(function (item, i) {
        return /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          key: item.id,
          className: "perform-statistics-tbody"
        }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: "perform-statistics-tb_1"
        }, i + 1), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: "perform-statistics-tb_2"
        }, item.id_JSON.name), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: "perform-statistics-tb_3"
        }, item.completionRate1 ? item.completionRate1 : "0%"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
          className: "perform-statistics-tb_4"
        }, item.incomplete ? item.incomplete : "0%"));
      }), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: _classnames_2_2_6_classnames_default()("perform-statistics-title", "lyn", {
          messagenull: table.length == 0
        })
      }, "\u5C65\u804C\u8D28\u91CF"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "chart-line-wrap"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("canvas", {
        className: _classnames_2_2_6_classnames_default()("chart-line", {
          StatisticsNothing: chartData.length <= 0
        }),
        id: "mountNode"
      }), chartData.length == 0 ? /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
        className: "dataEmpty"
      }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("img", {
        src: nomessage,
        style: {
          height: "100px"
        }
      })) : ""));
    }
  }]);

  return PerformStatistics;
}(_react_16_13_1_react_default.a.Component), _temp)) || _class) || _class);
/* harmony default export */ var Statistics = __webpack_exports__["default"] = (Statistics_PerformStatistics);

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

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  isObjectValueEqual: true,
  parsePadding: true,
  directionEnabled: true,
  toTimeStamp: true,
  upperFirst: true,
  lowerFirst: true,
  isString: true,
  isNumber: true,
  isBoolean: true,
  isFunction: true,
  isDate: true,
  isArray: true,
  isNil: true,
  isObject: true,
  isPlainObject: true,
  isEqual: true,
  deepMix: true,
  mix: true,
  each: true,
  uniq: true,
  find: true,
  Array: true
};
exports.isObjectValueEqual = isObjectValueEqual;
exports.parsePadding = parsePadding;
exports.directionEnabled = directionEnabled;
exports.toTimeStamp = toTimeStamp;
exports.Array = void 0;

var _util = __webpack_require__(1004);

exports.upperFirst = _util.upperFirst;
exports.lowerFirst = _util.lowerFirst;
exports.isString = _util.isString;
exports.isNumber = _util.isNumber;
exports.isBoolean = _util.isBoolean;
exports.isFunction = _util.isFunction;
exports.isDate = _util.isDate;
exports.isArray = _util.isArray;
exports.isNil = _util.isNil;
exports.isObject = _util.isObject;
exports.isPlainObject = _util.isPlainObject;
exports.isEqual = _util.isEqual;
exports.deepMix = _util.deepMix;
exports.mix = _util.mix;
exports.each = _util.each;
exports.uniq = _util.uniq;
exports.find = _util.find;

var ArrayUtil = _interopRequireWildcard(__webpack_require__(1214));

exports.Array = ArrayUtil;

var _dom = __webpack_require__(997);

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _dom[key];
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @fileOverview Utility for F2
 * @author dxq613 @gmail.com
 * @author sima.zhang1990@gmail.com
 */
function isObjectValueEqual(a, b) {
  // for vue.js
  a = Object.assign({}, a);
  b = Object.assign({}, b);
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0, len = aProps.length; i < len; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

function parsePadding(padding) {
  var top;
  var right;
  var bottom;
  var left;

  if ((0, _util.isNumber)(padding) || (0, _util.isString)(padding)) {
    top = bottom = left = right = padding;
  } else if ((0, _util.isArray)(padding)) {
    top = padding[0];
    right = !(0, _util.isNil)(padding[1]) ? padding[1] : padding[0];
    bottom = !(0, _util.isNil)(padding[2]) ? padding[2] : padding[0];
    left = !(0, _util.isNil)(padding[3]) ? padding[3] : right;
  }

  return [top, right, bottom, left];
}

function directionEnabled(mode, dir) {
  if (mode === undefined) {
    return true;
  } else if (typeof mode === 'string') {
    return mode.indexOf(dir) !== -1;
  }

  return false;
}

function toTimeStamp(value) {
  if ((0, _util.isString)(value)) {
    if (value.indexOf('T') > 0) {
      value = new Date(value).getTime();
    } else {
      // new Date('2010/01/10') 和 new Date('2010-01-10') 的差别在于:
      // 如果仅有年月日时，前者是带有时区的: Fri Jan 10 2020 02:40:13 GMT+0800 (中国标准时间)
      // 后者会格式化成 Sun Jan 10 2010 08:00:00 GMT+0800 (中国标准时间)
      value = new Date(value.replace(/-/gi, '/')).getTime();
    }
  }

  if ((0, _util.isDate)(value)) {
    value = value.getTime();
  }

  return value;
}

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _element = _interopRequireDefault(__webpack_require__(1001));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Shape = /*#__PURE__*/function (_Element) {
  _inheritsLoose(Shape, _Element);

  function Shape() {
    return _Element.apply(this, arguments) || this;
  }

  var _proto = Shape.prototype;

  _proto._initProperties = function _initProperties() {
    this._attrs = {
      zIndex: 0,
      visible: true,
      destroyed: false,
      isShape: true,
      attrs: {}
    };
  };

  _proto.getType = function getType() {
    return this._attrs.type;
  };

  _proto.drawInner = function drawInner(context) {
    var self = this;
    var attrs = self.get('attrs');
    self.createPath(context);
    var originOpacity = context.globalAlpha;

    if (self.hasFill()) {
      var fillOpacity = attrs.fillOpacity;

      if (!(0, _common.isNil)(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
        context.fill();
        context.globalAlpha = originOpacity;
      } else {
        context.fill();
      }
    }

    if (self.hasStroke()) {
      var lineWidth = attrs.lineWidth;

      if (lineWidth > 0) {
        var strokeOpacity = attrs.strokeOpacity;

        if (!(0, _common.isNil)(strokeOpacity) && strokeOpacity !== 1) {
          context.globalAlpha = strokeOpacity;
        }

        context.stroke();
      }
    }
  };

  _proto.getBBox = function getBBox() {
    var bbox = this._attrs.bbox;

    if (!bbox) {
      bbox = this.calculateBox();

      if (bbox) {
        bbox.x = bbox.minX;
        bbox.y = bbox.minY;
        bbox.width = bbox.maxX - bbox.minX;
        bbox.height = bbox.maxY - bbox.minY;
      }

      this._attrs.bbox = bbox;
    }

    return bbox;
  };

  _proto.calculateBox = function calculateBox() {
    return null;
  };

  _proto.createPath = function createPath() {};

  return Shape;
}(_element["default"]);

var _default = Shape;
exports["default"] = _default;

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

/**
 * 2 Dimensional Vector
 * @module vector2
 */
var _default = {
  /**
   * Creates a new, empty vector2
   *
   * @return {vector2} a new 2D vector
   */
  create: function create() {
    return [0, 0];
  },

  /**
   * Calculates the length of a vector2
   *
   * @param {vector2} v vector to calculate length of
   * @return {Number} length of v
   */
  length: function length(v) {
    var x = v[0];
    var y = v[1];
    return Math.sqrt(x * x + y * y);
  },

  /**
   * Normalize a vector2
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v vector to normalize
   * @return {vector2} out
   */
  normalize: function normalize(out, v) {
    var len = this.length(v);

    if (len === 0) {
      out[0] = 0;
      out[1] = 0;
    } else {
      out[0] = v[0] / len;
      out[1] = v[1] / len;
    }

    return out;
  },

  /**
   * Adds two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  add: function add(out, v1, v2) {
    out[0] = v1[0] + v2[0];
    out[1] = v1[1] + v2[1];
    return out;
  },

  /**
   * Subtracts vector v2 from vector v1
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  sub: function sub(out, v1, v2) {
    out[0] = v1[0] - v2[0];
    out[1] = v1[1] - v2[1];
    return out;
  },

  /**
   * Scales a vector2 by a scalar number
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to scale
   * @param {Number} s amount to scale the vector by
   * @return {vector2} out
   */
  scale: function scale(out, v, s) {
    out[0] = v[0] * s;
    out[1] = v[1] * s;
    return out;
  },

  /**
   * Calculates the dot product of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} dot product of v1 and v2
   */
  dot: function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1];
  },

  /**
   * Calculates the direction of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Boolean} the direction of v1 and v2
   */
  direction: function direction(v1, v2) {
    return v1[0] * v2[1] - v2[0] * v1[1];
  },

  /**
   * Calculates the angle of two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} angle of v1 and v2
   */
  angle: function angle(v1, v2) {
    var theta = this.dot(v1, v2) / (this.length(v1) * this.length(v2));
    return Math.acos(theta);
  },

  /**
   * Calculates the angle of two vector2's with direction
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @param {Boolean} direction the direction of two vector2's
   * @return {Number} angle of v1 and v2
   */
  angleTo: function angleTo(v1, v2, direction) {
    var angle = this.angle(v1, v2);
    var angleLargeThanPI = this.direction(v1, v2) >= 0;

    if (direction) {
      if (angleLargeThanPI) {
        return Math.PI * 2 - angle;
      }

      return angle;
    }

    if (angleLargeThanPI) {
      return angle;
    }

    return Math.PI * 2 - angle;
  },

  /**
   * whether a vector2 is zero vector
   *
   * @param  {vector2} v vector to calculate
   * @return {Boolean}   is or not a zero vector
   */
  zero: function zero(v) {
    return v[0] === 0 && v[1] === 0;
  },

  /**
   * Calculates the euclidian distance between two vector2's
   *
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {Number} distance between a and b
   */
  distance: function distance(v1, v2) {
    var x = v2[0] - v1[0];
    var y = v2[1] - v1[1];
    return Math.sqrt(x * x + y * y);
  },

  /**
   * Creates a new vector2 initialized with values from an existing vector
   *
   * @param {vector2} v vector to clone
   * @return {Array} a new 2D vector
   */
  clone: function clone(v) {
    return [v[0], v[1]];
  },

  /**
   * Return the minimum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  min: function min(out, v1, v2) {
    out[0] = Math.min(v1[0], v2[0]);
    out[1] = Math.min(v1[1], v2[1]);
    return out;
  },

  /**
   * Return the maximum of two vector2's
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v1 the first operand
   * @param {vector2} v2 the second operand
   * @return {vector2} out
   */
  max: function max(out, v1, v2) {
    out[0] = Math.max(v1[0], v2[0]);
    out[1] = Math.max(v1[1], v2[1]);
    return out;
  },

  /**
   * Transforms the vector2 with a mat2d
   *
   * @param {vector2} out the receiving vector
   * @param {vector2} v the vector to transform
   * @param {mat2d} m matrix to transform with
   * @return {vector2} out
   */
  transformMat2d: function transformMat2d(out, v, m) {
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
  }
};
exports["default"] = _default;

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getBBoxFromPoints = getBBoxFromPoints;
exports.getBBoxFromLine = getBBoxFromLine;
exports.getBBoxFromArc = getBBoxFromArc;
exports.getBBoxFromBezierGroup = getBBoxFromBezierGroup;

var _vector = _interopRequireDefault(__webpack_require__(923));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var start = _vector["default"].create();

var end = _vector["default"].create();

var extremity = _vector["default"].create();

function getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, T) {
  var x = CubicN(T, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
  var y = CubicN(T, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
  return {
    x: x,
    y: y
  };
} // cubic helper formula at T distance


function CubicN(T, a, b, c, d) {
  var t2 = T * T;
  var t3 = t2 * T;
  return a + (-a * 3 + T * (3 * a - a * T)) * T + (3 * b + T * (-6 * b + b * 3 * T)) * T + (c * 3 - c * 3 * T) * t2 + d * t3;
}

function cubicBezierBounds(c) {
  var minX = Infinity;
  var maxX = -Infinity;
  var minY = Infinity;
  var maxY = -Infinity;
  var s = {
    x: c[0],
    y: c[1]
  };
  var c1 = {
    x: c[2],
    y: c[3]
  };
  var c2 = {
    x: c[4],
    y: c[5]
  };
  var e = {
    x: c[6],
    y: c[7]
  };

  for (var t = 0; t < 100; t++) {
    var pt = getCubicBezierXYatT(s, c1, c2, e, t / 100);

    if (pt.x < minX) {
      minX = pt.x;
    }

    if (pt.x > maxX) {
      maxX = pt.x;
    }

    if (pt.y < minY) {
      minY = pt.y;
    }

    if (pt.y > maxY) {
      maxY = pt.y;
    }
  }

  return {
    minX: minX,
    minY: minY,
    maxX: maxX,
    maxY: maxY
  };
}

function getBBoxFromPoints(points, lineWidth) {
  if (points.length === 0) {
    return;
  }

  var p = points[0];
  var left = p.x;
  var right = p.x;
  var top = p.y;
  var bottom = p.y;
  var len = points.length;

  for (var i = 1; i < len; i++) {
    p = points[i];
    left = Math.min(left, p.x);
    right = Math.max(right, p.x);
    top = Math.min(top, p.y);
    bottom = Math.max(bottom, p.y);
  }

  lineWidth = lineWidth / 2 || 0;
  return {
    minX: left - lineWidth,
    minY: top - lineWidth,
    maxX: right + lineWidth,
    maxY: bottom + lineWidth
  };
}

function getBBoxFromLine(x0, y0, x1, y1, lineWidth) {
  lineWidth = lineWidth / 2 || 0;
  return {
    minX: Math.min(x0, x1) - lineWidth,
    minY: Math.min(y0, y1) - lineWidth,
    maxX: Math.max(x0, x1) + lineWidth,
    maxY: Math.max(y0, y1) + lineWidth
  };
}

function getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise) {
  var diff = Math.abs(startAngle - endAngle);

  if (diff % (Math.PI * 2) < 1e-4 && diff > 1e-4) {
    // Is a circle
    return {
      minX: x - r,
      minY: y - r,
      maxX: x + r,
      maxY: y + r
    };
  }

  start[0] = Math.cos(startAngle) * r + x;
  start[1] = Math.sin(startAngle) * r + y;
  end[0] = Math.cos(endAngle) * r + x;
  end[1] = Math.sin(endAngle) * r + y;
  var min = [0, 0];
  var max = [0, 0];

  _vector["default"].min(min, start, end);

  _vector["default"].max(max, start, end); // Thresh to [0, Math.PI * 2]


  startAngle = startAngle % (Math.PI * 2);

  if (startAngle < 0) {
    startAngle = startAngle + Math.PI * 2;
  }

  endAngle = endAngle % (Math.PI * 2);

  if (endAngle < 0) {
    endAngle = endAngle + Math.PI * 2;
  }

  if (startAngle > endAngle && !anticlockwise) {
    endAngle += Math.PI * 2;
  } else if (startAngle < endAngle && anticlockwise) {
    startAngle += Math.PI * 2;
  }

  if (anticlockwise) {
    var tmp = endAngle;
    endAngle = startAngle;
    startAngle = tmp;
  }

  for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
    if (angle > startAngle) {
      extremity[0] = Math.cos(angle) * r + x;
      extremity[1] = Math.sin(angle) * r + y;

      _vector["default"].min(min, extremity, min);

      _vector["default"].max(max, extremity, max);
    }
  }

  return {
    minX: min[0],
    minY: min[1],
    maxX: max[0],
    maxY: max[1]
  };
}

function getBBoxFromBezierGroup(points, lineWidth) {
  var minX = Infinity;
  var maxX = -Infinity;
  var minY = Infinity;
  var maxY = -Infinity;

  for (var i = 0, len = points.length; i < len; i++) {
    var bbox = cubicBezierBounds(points[i]);

    if (bbox.minX < minX) {
      minX = bbox.minX;
    }

    if (bbox.maxX > maxX) {
      maxX = bbox.maxX;
    }

    if (bbox.minY < minY) {
      minY = bbox.minY;
    }

    if (bbox.maxY > maxY) {
      maxY = bbox.maxY;
    }
  }

  lineWidth = lineWidth / 2 || 0;
  return {
    minX: minX - lineWidth,
    minY: minY - lineWidth,
    maxX: maxX + lineWidth,
    maxY: maxY + lineWidth
  };
}

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _canvas = _interopRequireDefault(__webpack_require__(1218));

exports.Canvas = _canvas["default"];

var _group = _interopRequireDefault(__webpack_require__(1003));

exports.Group = _group["default"];

var _shape = _interopRequireDefault(__webpack_require__(866));

exports.Shape = _shape["default"];

var _matrix = _interopRequireDefault(__webpack_require__(1002));

exports.Matrix = _matrix["default"];

var _vector = _interopRequireDefault(__webpack_require__(923));

exports.Vector2 = _vector["default"];

__webpack_require__(1223);

__webpack_require__(1224);

__webpack_require__(1225);

__webpack_require__(1226);

__webpack_require__(1227);

__webpack_require__(1228);

__webpack_require__(1230);

__webpack_require__(1231);

__webpack_require__(1232);

__webpack_require__(1234);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/date-picker/style/css.js
var css = __webpack_require__(879);

// EXTERNAL MODULE: ./node_modules/_antd-mobile@2.3.3@antd-mobile/lib/date-picker/index.js
var date_picker = __webpack_require__(880);
var date_picker_default = /*#__PURE__*/__webpack_require__.n(date_picker);

// EXTERNAL MODULE: ./node_modules/_react@16.13.1@react/index.js
var _react_16_13_1_react = __webpack_require__(2);
var _react_16_13_1_react_default = /*#__PURE__*/__webpack_require__.n(_react_16_13_1_react);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons-svg@4.1.0@@ant-design/icons-svg/es/asn/CaretDownOutlined.js
// This icon file is generated automatically.
var CaretDownOutlined_CaretDownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, "name": "caret-down", "theme": "outlined" };
/* harmony default export */ var asn_CaretDownOutlined = (CaretDownOutlined_CaretDownOutlined);

// EXTERNAL MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/components/AntdIcon.js + 14 modules
var AntdIcon = __webpack_require__(867);

// CONCATENATED MODULE: ./node_modules/_@ant-design_icons@4.2.2@@ant-design/icons/es/icons/CaretDownOutlined.js
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var icons_CaretDownOutlined_CaretDownOutlined = function CaretDownOutlined(props, ref) {
  return _react_16_13_1_react["createElement"](AntdIcon["a" /* default */], Object.assign({}, props, {
    ref: ref,
    icon: asn_CaretDownOutlined
  }));
};

icons_CaretDownOutlined_CaretDownOutlined.displayName = 'CaretDownOutlined';
/* harmony default export */ var icons_CaretDownOutlined = (_react_16_13_1_react["forwardRef"](icons_CaretDownOutlined_CaretDownOutlined));
// EXTERNAL MODULE: ./node_modules/_dayjs@1.8.34@dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(3);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./src/components/HeaderDate/index.tsx



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var HeaderDate_HeaderDate = function HeaderDate(props) {
  var _useState = Object(_react_16_13_1_react["useState"])(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      timeValue = _useState2[0],
      setTimeValue = _useState2[1];

  var _useState3 = Object(_react_16_13_1_react["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var updateTimeValue = function updateTimeValue() {
    if (props.defaultValue) {
      setTimeValue(props.defaultValue);
    } else {
      setTimeValue(dayjs_min_default()().toDate());
    }
  };

  Object(_react_16_13_1_react["useEffect"])(function () {
    updateTimeValue();
  }, [props.defaultValue]);

  var onChange = function onChange(date) {
    setTimeValue(date);
  };

  var onOk = function onOk(date) {
    setTimeValue(date);
    props.onOk(dayjs_min_default()(date).format("YYYY-MM"));
    setVisible(false);
  };

  return Object(_react_16_13_1_react["useMemo"])(function () {
    return /*#__PURE__*/_react_16_13_1_react_default.a.createElement(date_picker_default.a, {
      mode: "month",
      format: "YYYY-MM",
      title: "\u8BF7\u9009\u62E9\u65E5\u671F",
      value: timeValue,
      onChange: onChange,
      onOk: onOk,
      onDismiss: function onDismiss() {
        return setVisible(false);
      },
      visible: visible
    }, /*#__PURE__*/_react_16_13_1_react_default.a.createElement("div", {
      className: "heaher_datepicker",
      onClick: function onClick() {
        return setVisible(true);
      }
    }, dayjs_min_default()(timeValue).format("YYYY-MM"), /*#__PURE__*/_react_16_13_1_react_default.a.createElement(icons_CaretDownOutlined, null)));
  }, [timeValue, visible]);
};

/* harmony default export */ var components_HeaderDate = __webpack_exports__["a"] = (HeaderDate_HeaderDate);

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.isCanvasElement = isCanvasElement;
exports.getPixelRatio = getPixelRatio;
exports.getStyle = getStyle;
exports.getWidth = getWidth;
exports.getHeight = getHeight;
exports.getDomById = getDomById;
exports.getRelativePosition = getRelativePosition;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.createEvent = createEvent;
exports.measureText = measureText;
exports.isBrowser = exports.isNode = exports.isMy = exports.isWx = void 0;

/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = function () {
  var supports = false;

  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
        supports = true;
      }
    });
    window.addEventListener('e', null, options);
  } catch (e) {// continue regardless of error
  }

  return supports;
}(); // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287


var eventListenerOptions = supportsEventListenerOptions ? {
  passive: true
} : false;
/* global wx, my */
// weixin miniprogram

var isWx = typeof wx === 'object' && typeof wx.getSystemInfoSync === 'function'; // ant miniprogram

exports.isWx = isWx;
var isMy = typeof my === 'object' && typeof my.getSystemInfoSync === 'function'; // in node

exports.isMy = isMy;
var isNode = typeof global && !typeof window; // in browser

exports.isNode = isNode;
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.sessionStorage !== 'undefined';
exports.isBrowser = isBrowser;

function isCanvasElement(el) {
  if (!el || typeof el !== 'object') return false;

  if (el.nodeType === 1 && el.nodeName) {
    // HTMLCanvasElement
    return true;
  } // CanvasElement


  return !!el.isCanvasElement;
}

function getPixelRatio() {
  return window && window.devicePixelRatio || 1;
}

function getStyle(el, property) {
  return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
}

function getWidth(el) {
  var width = getStyle(el, 'width');

  if (width === 'auto') {
    width = el.offsetWidth;
  }

  return parseFloat(width);
}

function getHeight(el) {
  var height = getStyle(el, 'height');

  if (height === 'auto') {
    height = el.offsetHeight;
  }

  return parseFloat(height);
}

function getDomById(id) {
  if (!id) {
    return null;
  }

  return document.getElementById(id);
}

function getRelativePosition(point, canvas) {
  var canvasDom = canvas.get('el');
  if (!canvasDom) return point;

  var _canvasDom$getBoundin = canvasDom.getBoundingClientRect(),
      top = _canvasDom$getBoundin.top,
      right = _canvasDom$getBoundin.right,
      bottom = _canvasDom$getBoundin.bottom,
      left = _canvasDom$getBoundin.left;

  var paddingLeft = parseFloat(getStyle(canvasDom, 'padding-left'));
  var paddingTop = parseFloat(getStyle(canvasDom, 'padding-top'));
  var paddingRight = parseFloat(getStyle(canvasDom, 'padding-right'));
  var paddingBottom = parseFloat(getStyle(canvasDom, 'padding-bottom'));
  var width = right - left - paddingLeft - paddingRight;
  var height = bottom - top - paddingTop - paddingBottom;
  var pixelRatio = canvas.get('pixelRatio');
  var mouseX = (point.x - left - paddingLeft) / width * canvasDom.width / pixelRatio;
  var mouseY = (point.y - top - paddingTop) / height * canvasDom.height / pixelRatio;
  return {
    x: mouseX,
    y: mouseY
  };
}

function addEventListener(source, type, listener) {
  source.addEventListener(type, listener, eventListenerOptions);
}

function removeEventListener(source, type, listener) {
  source.removeEventListener(type, listener, eventListenerOptions);
}

function createEventObj(type, chart, x, y, nativeEvent) {
  return {
    type: type,
    chart: chart,
    "native": nativeEvent || null,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}

function createEvent(event, chart) {
  var type = event.type;
  var clientPoint; // 说明是touch相关事件

  if (event.touches) {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/changedTouches
    // 这里直接拿changedTouches就可以了，不管是touchstart, touchmove, touchend changedTouches 都是有的
    // 为了以防万一，做个空判断
    var touch = event.changedTouches[0] || {}; // x, y: 相对canvas原点的位置，clientX, clientY 相对于可视窗口的位置

    var x = touch.x,
        y = touch.y,
        clientX = touch.clientX,
        clientY = touch.clientY; // 小程序环境会有x,y，这里就直接返回

    if (x && y) {
      return createEventObj(type, chart, x, y, event);
    }

    clientPoint = {
      x: clientX,
      y: clientY
    };
  } else {
    // mouse相关事件
    clientPoint = {
      x: event.clientX,
      y: event.clientY
    };
  } // 理论上应该是只有有在浏览器环境才会走到这里


  var canvas = chart.get('canvas'); // 通过clientX, clientY 计算x, y

  var point = getRelativePosition(clientPoint, canvas);
  return createEventObj(type, chart, point.x, point.y, event);
}

function measureText(text, font, ctx) {
  if (!ctx) {
    ctx = document.createElement('canvas').getContext('2d');
  }

  ctx.font = font || '12px sans-serif';
  return ctx.measureText(text);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

var _index = __webpack_require__(929);

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SYMBOLS = {
  circle: function circle(x, y, r, ctx) {
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
  },
  square: function square(x, y, r, ctx) {
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.closePath();
  }
};

var Marker = /*#__PURE__*/function (_Shape) {
  _inheritsLoose(Marker, _Shape);

  function Marker() {
    return _Shape.apply(this, arguments) || this;
  }

  var _proto = Marker.prototype;

  _proto._initProperties = function _initProperties() {
    _Shape.prototype._initProperties.call(this);

    this._attrs.canFill = true;
    this._attrs.canStroke = true;
    this._attrs.type = 'marker';
  };

  _proto.getDefaultAttrs = function getDefaultAttrs() {
    return {
      x: 0,
      y: 0,
      lineWidth: 0
    };
  };

  _proto.createPath = function createPath(context) {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        radius = attrs.radius;
    var symbol = attrs.symbol || 'circle';
    var method;

    if ((0, _common.isFunction)(symbol)) {
      method = symbol;
    } else {
      method = SYMBOLS[symbol];
    }

    context.beginPath();
    method(x, y, radius, context, this);
  };

  _proto.calculateBox = function calculateBox() {
    var attrs = this.get('attrs');
    var x = attrs.x,
        y = attrs.y,
        radius = attrs.radius;
    return {
      minX: x - radius,
      minY: y - radius,
      maxX: x + radius,
      maxY: y + radius
    };
  };

  return Marker;
}(_index.Shape);

var _default = Marker;
exports["default"] = _default;

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _common = __webpack_require__(861);

// 实现简单的事件机制
var EventEmit = /*#__PURE__*/function () {
  function EventEmit() {
    this.__events = {};
  }

  var _proto = EventEmit.prototype;

  _proto.on = function on(type, listener) {
    if (!type || !listener) {
      return;
    }

    var events = this.__events[type] || [];
    events.push(listener);
    this.__events[type] = events;
  };

  _proto.emit = function emit(type, e) {
    var _this = this;

    if ((0, _common.isObject)(type)) {
      e = type;
      type = e && e.type;
    }

    if (!type) {
      return;
    }

    var events = this.__events[type];

    if (!events || !events.length) {
      return;
    }

    events.forEach(function (listener) {
      listener.call(_this, e);
    });
  };

  _proto.off = function off(type, listener) {
    var __events = this.__events;
    var events = __events[type];

    if (!events || !events.length) {
      return;
    } // 如果没有指定方法，则删除所有项


    if (!listener) {
      delete __events[type];
      return;
    } // 删除指定的 listener


    for (var i = 0, len = events.length; i < len; i++) {
      if (events[i] === listener) {
        events.splice(i, 1);
        i--;
      }
    }
  };

  return EventEmit;
}();

var _default = EventEmit;
exports["default"] = _default;

/***/ })

}]);
//# sourceMappingURL=../map/performStatistics.27755274.map