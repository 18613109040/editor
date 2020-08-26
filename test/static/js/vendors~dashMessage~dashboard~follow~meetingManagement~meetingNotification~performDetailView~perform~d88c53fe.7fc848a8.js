(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DataSource", function() { return /* binding */ DataSource; });
__webpack_require__.d(__webpack_exports__, "IndexedList", function() { return /* reexport */ Indexed; });

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(96);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(255);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

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

// EXTERNAL MODULE: ./node_modules/_prop-types@15.7.2@prop-types/index.js
var _prop_types_15_7_2_prop_types = __webpack_require__(10);
var _prop_types_15_7_2_prop_types_default = /*#__PURE__*/__webpack_require__.n(_prop_types_15_7_2_prop_types);

// EXTERNAL MODULE: ./node_modules/_react-dom@16.13.1@react-dom/index.js
var _react_dom_16_13_1_react_dom = __webpack_require__(84);
var _react_dom_16_13_1_react_dom_default = /*#__PURE__*/__webpack_require__.n(_react_dom_16_13_1_react_dom);

// EXTERNAL MODULE: ./node_modules/_fbjs@0.8.17@fbjs/lib/invariant.js
var invariant = __webpack_require__(974);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// EXTERNAL MODULE: ./node_modules/_fbjs@0.8.17@fbjs/lib/isEmpty.js
var isEmpty = __webpack_require__(1030);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ./node_modules/_warning@3.0.0@warning/browser.js
var browser = __webpack_require__(925);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/_rmc-list-view@0.11.5@rmc-list-view/es/ListViewDataSource.js






function defaultGetRowData(dataBlob, sectionID, rowID) {
  return dataBlob[sectionID][rowID];
}

function defaultGetSectionHeaderData(dataBlob, sectionID) {
  return dataBlob[sectionID];
}

// type differType = (data1, data2) => bool;
//
// type ParamType = {
//   rowHasChanged: differType;
//   getRowData: ?typeof defaultGetRowData;
//   sectionHeaderHasChanged: ?differType;
//   getSectionHeaderData: ?typeof defaultGetSectionHeaderData;
// }

/**
 * Provides efficient data processing and access to the
 * `ListView` component.  A `ListViewDataSource` is created with functions for
 * extracting data from the input blob, and comparing elements (with default
 * implementations for convenience).  The input blob can be as simple as an
 * array of strings, or an object with rows nested inside section objects.
 *
 * To update the data in the datasource, use `cloneWithRows` (or
 * `cloneWithRowsAndSections` if you care about sections).  The data in the
 * data source is immutable, so you can't modify it directly.  The clone methods
 * suck in the new data and compute a diff for each row so ListView knows
 * whether to re-render it or not.
 *
 * In this example, a component receives data in chunks, handled by
 * `_onDataArrived`, which concats the new data onto the old data and updates the
 * data source.  We use `concat` to create a new array - mutating `this._data`,
 * e.g. with `this._data.push(newRowData)`, would be an error. `_rowHasChanged`
 * understands the shape of the row data and knows how to efficiently compare
 * it.
 *
 * ```
 * getInitialState: function() {
 *   var ds = new ListViewDataSource({rowHasChanged: this._rowHasChanged});
 *   return {ds};
 * },
 * _onDataArrived(newData) {
 *   this._data = this._data.concat(newData);
 *   this.setState({
 *     ds: this.state.ds.cloneWithRows(this._data)
 *   });
 * }
 * ```
 */

var ListViewDataSource_ListViewDataSource = function () {

  /**
   * You can provide custom extraction and `hasChanged` functions for section
   * headers and rows.  If absent, data will be extracted with the
   * `defaultGetRowData` and `defaultGetSectionHeaderData` functions.
   *
   * The default extractor expects data of one of the following forms:
   *
   *      { sectionID_1: { rowID_1: <rowData1>, ... }, ... }
   *
   *    or
   *
   *      { sectionID_1: [ <rowData1>, <rowData2>, ... ], ... }
   *
   *    or
   *
   *      [ [ <rowData1>, <rowData2>, ... ], ... ]
   *
   * The constructor takes in a params argument that can contain any of the
   * following:
   *
   * - getRowData(dataBlob, sectionID, rowID);
   * - getSectionHeaderData(dataBlob, sectionID);
   * - rowHasChanged(prevRowData, nextRowData);
   * - sectionHeaderHasChanged(prevSectionData, nextSectionData);
   */
  function ListViewDataSource(params) {
    classCallCheck_default()(this, ListViewDataSource);

    invariant_default()(params && typeof params.rowHasChanged === 'function', 'Must provide a rowHasChanged function.');
    this._rowHasChanged = params.rowHasChanged;
    this._getRowData = params.getRowData || defaultGetRowData;
    this._sectionHeaderHasChanged = params.sectionHeaderHasChanged;
    this._getSectionHeaderData = params.getSectionHeaderData || defaultGetSectionHeaderData;

    this._dataBlob = null;
    this._dirtyRows = [];
    this._dirtySections = [];
    this._cachedRowCount = 0;

    // These two private variables are accessed by outsiders because ListView
    // uses them to iterate over the data in this class.
    this.rowIdentities = [];
    this.sectionIdentities = [];
  }

  /**
   * Clones this `ListViewDataSource` with the specified `dataBlob` and
   * `rowIdentities`. The `dataBlob` is just an arbitrary blob of data. At
   * construction an extractor to get the interesting information was defined
   * (or the default was used).
   *
   * The `rowIdentities` is is a 2D array of identifiers for rows.
   * ie. [['a1', 'a2'], ['b1', 'b2', 'b3'], ...].  If not provided, it's
   * assumed that the keys of the section data are the row identities.
   *
   * Note: This function does NOT clone the data in this data source. It simply
   * passes the functions defined at construction to a new data source with
   * the data specified. If you wish to maintain the existing data you must
   * handle merging of old and new data separately and then pass that into
   * this function as the `dataBlob`.
   */


  createClass_default()(ListViewDataSource, [{
    key: 'cloneWithRows',
    value: function cloneWithRows(dataBlob, rowIdentities) {
      var rowIds = rowIdentities ? [rowIdentities] : null;
      if (!this._sectionHeaderHasChanged) {
        this._sectionHeaderHasChanged = function () {
          return false;
        };
      }
      return this.cloneWithRowsAndSections({ s1: dataBlob }, ['s1'], rowIds);
    }

    /**
     * This performs the same function as the `cloneWithRows` function but here
     * you also specify what your `sectionIdentities` are. If you don't care
     * about sections you should safely be able to use `cloneWithRows`.
     *
     * `sectionIdentities` is an array of identifiers for  sections.
     * ie. ['s1', 's2', ...].  If not provided, it's assumed that the
     * keys of dataBlob are the section identities.
     *
     * Note: this returns a new object!
     */

  }, {
    key: 'cloneWithRowsAndSections',
    value: function cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) {
      invariant_default()(typeof this._sectionHeaderHasChanged === 'function', 'Must provide a sectionHeaderHasChanged function with section data.');
      invariant_default()(!sectionIdentities || !rowIdentities || sectionIdentities.length === rowIdentities.length, 'row and section ids lengths must be the same');

      var newSource = new ListViewDataSource({
        getRowData: this._getRowData,
        getSectionHeaderData: this._getSectionHeaderData,
        rowHasChanged: this._rowHasChanged,
        sectionHeaderHasChanged: this._sectionHeaderHasChanged
      });
      newSource._dataBlob = dataBlob;
      if (sectionIdentities) {
        newSource.sectionIdentities = sectionIdentities;
      } else {
        newSource.sectionIdentities = Object.keys(dataBlob);
      }
      if (rowIdentities) {
        newSource.rowIdentities = rowIdentities;
      } else {
        newSource.rowIdentities = [];
        newSource.sectionIdentities.forEach(function (sectionID) {
          newSource.rowIdentities.push(Object.keys(dataBlob[sectionID]));
        });
      }
      newSource._cachedRowCount = countRows(newSource.rowIdentities);

      newSource._calculateDirtyArrays(this._dataBlob, this.sectionIdentities, this.rowIdentities);

      return newSource;
    }
  }, {
    key: 'getRowCount',
    value: function getRowCount() {
      return this._cachedRowCount;
    }
  }, {
    key: 'getRowAndSectionCount',
    value: function getRowAndSectionCount() {
      return this._cachedRowCount + this.sectionIdentities.length;
    }

    /**
     * Returns if the row is dirtied and needs to be rerendered
     */

  }, {
    key: 'rowShouldUpdate',
    value: function rowShouldUpdate(sectionIndex, rowIndex) {
      var needsUpdate = this._dirtyRows[sectionIndex][rowIndex];
      browser_default()(needsUpdate !== undefined, 'missing dirtyBit for section, row: ' + sectionIndex + ', ' + rowIndex);
      return needsUpdate;
    }

    /**
     * Gets the data required to render the row.
     */

  }, {
    key: 'getRowData',
    value: function getRowData(sectionIndex, rowIndex) {
      var sectionID = this.sectionIdentities[sectionIndex];
      var rowID = this.rowIdentities[sectionIndex][rowIndex];
      browser_default()(sectionID !== undefined && rowID !== undefined, 'rendering invalid section, row: ' + sectionIndex + ', ' + rowIndex);
      return this._getRowData(this._dataBlob, sectionID, rowID);
    }

    /**
     * Gets the rowID at index provided if the dataSource arrays were flattened,
     * or null of out of range indexes.
     */

  }, {
    key: 'getRowIDForFlatIndex',
    value: function getRowIDForFlatIndex(index) {
      var accessIndex = index;
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        if (accessIndex >= this.rowIdentities[ii].length) {
          accessIndex -= this.rowIdentities[ii].length;
        } else {
          return this.rowIdentities[ii][accessIndex];
        }
      }
      return null;
    }

    /**
     * Gets the sectionID at index provided if the dataSource arrays were flattened,
     * or null for out of range indexes.
     */

  }, {
    key: 'getSectionIDForFlatIndex',
    value: function getSectionIDForFlatIndex(index) {
      var accessIndex = index;
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        if (accessIndex >= this.rowIdentities[ii].length) {
          accessIndex -= this.rowIdentities[ii].length;
        } else {
          return this.sectionIdentities[ii];
        }
      }
      return null;
    }

    /**
     * Returns an array containing the number of rows in each section
     */

  }, {
    key: 'getSectionLengths',
    value: function getSectionLengths() {
      var results = [];
      for (var ii = 0; ii < this.sectionIdentities.length; ii++) {
        results.push(this.rowIdentities[ii].length);
      }
      return results;
    }

    /**
     * Returns if the section header is dirtied and needs to be rerendered
     */

  }, {
    key: 'sectionHeaderShouldUpdate',
    value: function sectionHeaderShouldUpdate(sectionIndex) {
      var needsUpdate = this._dirtySections[sectionIndex];
      browser_default()(needsUpdate !== undefined, 'missing dirtyBit for section: ' + sectionIndex);
      return needsUpdate;
    }

    /**
     * Gets the data required to render the section header
     */

  }, {
    key: 'getSectionHeaderData',
    value: function getSectionHeaderData(sectionIndex) {
      if (!this._getSectionHeaderData) {
        return null;
      }
      var sectionID = this.sectionIdentities[sectionIndex];
      browser_default()(sectionID !== undefined, 'renderSection called on invalid section: ' + sectionIndex);
      return this._getSectionHeaderData(this._dataBlob, sectionID);
    }

    /**
     * Private members and methods.
     */

    // These two 'protected' variables are accessed by ListView to iterate over
    // the data in this class.

  }, {
    key: '_calculateDirtyArrays',
    value: function _calculateDirtyArrays(prevDataBlob, prevSectionIDs, prevRowIDs) {
      // construct a hashmap of the existing (old) id arrays
      var prevSectionsHash = keyedDictionaryFromArray(prevSectionIDs);
      var prevRowsHash = {};
      for (var ii = 0; ii < prevRowIDs.length; ii++) {
        var sectionID = prevSectionIDs[ii];
        browser_default()(!prevRowsHash[sectionID], 'SectionID appears more than once: ' + sectionID);
        prevRowsHash[sectionID] = keyedDictionaryFromArray(prevRowIDs[ii]);
      }

      // compare the 2 identity array and get the dirtied rows
      this._dirtySections = [];
      this._dirtyRows = [];

      var dirty;
      for (var sIndex = 0; sIndex < this.sectionIdentities.length; sIndex++) {
        var sectionID = this.sectionIdentities[sIndex];
        // dirty if the sectionHeader is new or _sectionHasChanged is true
        dirty = !prevSectionsHash[sectionID];
        var sectionHeaderHasChanged = this._sectionHeaderHasChanged;
        if (!dirty && sectionHeaderHasChanged) {
          dirty = sectionHeaderHasChanged(this._getSectionHeaderData(prevDataBlob, sectionID), this._getSectionHeaderData(this._dataBlob, sectionID));
        }
        this._dirtySections.push(!!dirty);

        this._dirtyRows[sIndex] = [];
        for (var rIndex = 0; rIndex < this.rowIdentities[sIndex].length; rIndex++) {
          var rowID = this.rowIdentities[sIndex][rIndex];
          // dirty if the section is new, row is new or _rowHasChanged is true
          dirty = !prevSectionsHash[sectionID] || !prevRowsHash[sectionID][rowID] || this._rowHasChanged(this._getRowData(prevDataBlob, sectionID, rowID), this._getRowData(this._dataBlob, sectionID, rowID));
          this._dirtyRows[sIndex].push(!!dirty);
        }
      }
    }
  }]);

  return ListViewDataSource;
}();

function countRows(allRowIDs) {
  var totalRows = 0;
  for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
    var rowIDs = allRowIDs[sectionIdx];
    totalRows += rowIDs.length;
  }
  return totalRows;
}

function keyedDictionaryFromArray(arr) {
  if (isEmpty_default()(arr)) {
    return {};
  }
  var result = {};
  for (var ii = 0; ii < arr.length; ii++) {
    var key = arr[ii];
    browser_default()(!result[key], 'Value appears more than once in array: ' + key);
    result[key] = true;
  }
  return result;
}

// module.exports = ListViewDataSource;
/* harmony default export */ var es_ListViewDataSource = (ListViewDataSource_ListViewDataSource);
// EXTERNAL MODULE: ./node_modules/_classnames@2.2.6@classnames/index.js
var _classnames_2_2_6_classnames = __webpack_require__(97);
var _classnames_2_2_6_classnames_default = /*#__PURE__*/__webpack_require__.n(_classnames_2_2_6_classnames);

// CONCATENATED MODULE: ./node_modules/_rmc-list-view@0.11.5@rmc-list-view/es/util.js
function getOffsetTop(elem) {
  var offsetTop = 0;
  /* eslint no-cond-assign: 0 */
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while (elem = elem.offsetParent);
  return offsetTop;
}

function _event(e) {
  if (e.touches && e.touches.length) {
    return e.touches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function throttle(fn, delay) {
  var delayFlag = true;
  var firstInvoke = true;
  // console.log('exec once');
  return function _throttle(e) {
    if (delayFlag) {
      delayFlag = false;
      setTimeout(function () {
        delayFlag = true;
        // console.log('exec delay time');
        fn(e);
      }, delay);
      if (firstInvoke) {
        // console.log('first invoke');
        fn(e);
        firstInvoke = false;
      }
    }
  };
}

function setTransform(nodeStyle, value) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
  nodeStyle.MozTransform = value;
}

function setTransformOrigin(nodeStyle, value) {
  nodeStyle.transformOrigin = value;
  nodeStyle.webkitTransformOrigin = value;
  nodeStyle.MozTransformOrigin = value;
}
// CONCATENATED MODULE: ./node_modules/_rmc-list-view@0.11.5@rmc-list-view/es/ScrollView.js










// const SCROLLVIEW = 'ScrollViewRef';
// const INNERVIEW = 'InnerScrollViewRef';

// https://github.com/facebook/react-native/blob/0.26-stable/Libraries/Components/ScrollView/ScrollView.js

/* eslint react/prop-types: 0, react/sort-comp: 0, no-unused-expressions: 0 */

var propTypes = {
  className: _prop_types_15_7_2_prop_types_default.a.string,
  prefixCls: _prop_types_15_7_2_prop_types_default.a.string,
  listPrefixCls: _prop_types_15_7_2_prop_types_default.a.string,
  listViewPrefixCls: _prop_types_15_7_2_prop_types_default.a.string,
  style: _prop_types_15_7_2_prop_types_default.a.object,
  contentContainerStyle: _prop_types_15_7_2_prop_types_default.a.object,
  onScroll: _prop_types_15_7_2_prop_types_default.a.func
};

var ScrollView_ScrollView = function (_React$Component) {
  inherits_default()(ScrollView, _React$Component);

  function ScrollView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck_default()(this, ScrollView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, (_ref = ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call.apply(_ref, [this].concat(args))), _this), ScrollView_initialiseProps.call(_this), _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  createClass_default()(ScrollView, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      // https://github.com/ant-design/ant-design-mobile/issues/1480
      // https://stackoverflow.com/questions/1386696/make-scrollleft-scrolltop-changes-not-trigger-scroll-event
      // 问题情景：用户滚动内容后，改变 dataSource 触发 ListView componentWillReceiveProps
      // 内容变化后 scrollTop 如果改变、会自动触发 scroll 事件，而此事件应该避免被执行
      if ((this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) && this.handleScroll) {
        // console.log('componentWillUpdate');
        if (this.props.useBodyScroll) {
          window.removeEventListener('scroll', this.handleScroll);
        } else {
          this.ScrollViewRef.removeEventListener('scroll', this.handleScroll);
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // handle componentWillUpdate accordingly
      if ((this.props.dataSource !== prevProps.dataSource || this.props.initialListSize !== prevProps.initialListSize) && this.handleScroll) {
        setTimeout(function () {
          if (_this2.props.useBodyScroll) {
            window.addEventListener('scroll', _this2.handleScroll);
          } else {
            _this2.ScrollViewRef.addEventListener('scroll', _this2.handleScroll);
          }
        }, 0);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var handleScroll = function handleScroll(e) {
        return _this3.props.onScroll && _this3.props.onScroll(e, _this3.getMetrics());
      };
      if (this.props.scrollEventThrottle) {
        handleScroll = throttle(handleScroll, this.props.scrollEventThrottle);
      }
      this.handleScroll = handleScroll;

      // IE supports onresize on all HTML elements.
      // In all other Browsers the onresize is only available at the window object
      this.onLayout = function () {
        return _this3.props.onLayout({
          nativeEvent: { layout: { width: window.innerWidth, height: window.innerHeight } }
        });
      };

      if (this.props.useBodyScroll) {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.onLayout);
      } else {
        this.ScrollViewRef.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.useBodyScroll) {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.onLayout);
      } else {
        this.ScrollViewRef.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          prefixCls = _props.prefixCls,
          listPrefixCls = _props.listPrefixCls,
          listViewPrefixCls = _props.listViewPrefixCls,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          _props$contentContain = _props.contentContainerStyle,
          contentContainerStyle = _props$contentContain === undefined ? {} : _props$contentContain,
          useBodyScroll = _props.useBodyScroll,
          pullToRefresh = _props.pullToRefresh;


      var styleBase = {
        position: 'relative',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch'
      };
      var preCls = prefixCls || listViewPrefixCls || '';

      var containerProps = {
        ref: function ref(el) {
          return _this4.ScrollViewRef = el || _this4.ScrollViewRef;
        },
        style: extends_default()({}, useBodyScroll ? {} : styleBase, style),
        className: _classnames_2_2_6_classnames_default()(className, preCls + '-scrollview')
      };
      var contentContainerProps = {
        ref: function ref(el) {
          return _this4.InnerScrollViewRef = el;
        },
        style: extends_default()({ position: 'absolute', minWidth: '100%' }, contentContainerStyle),
        className: _classnames_2_2_6_classnames_default()(preCls + '-scrollview-content', listPrefixCls)
      };

      var clonePullToRefresh = function clonePullToRefresh(isBody) {
        return _react_16_13_1_react_default.a.cloneElement(pullToRefresh, {
          getScrollContainer: isBody ? function () {
            return document.body;
          } : function () {
            return _this4.ScrollViewRef;
          }
        }, children);
      };

      if (useBodyScroll) {
        if (pullToRefresh) {
          return _react_16_13_1_react_default.a.createElement(
            'div',
            containerProps,
            clonePullToRefresh(true)
          );
        }
        return _react_16_13_1_react_default.a.createElement(
          'div',
          containerProps,
          children
        );
      }

      if (pullToRefresh) {
        return _react_16_13_1_react_default.a.createElement(
          'div',
          containerProps,
          _react_16_13_1_react_default.a.createElement(
            'div',
            contentContainerProps,
            clonePullToRefresh()
          )
        );
      }

      return _react_16_13_1_react_default.a.createElement(
        'div',
        containerProps,
        _react_16_13_1_react_default.a.createElement(
          'div',
          contentContainerProps,
          children
        )
      );
    }
  }]);

  return ScrollView;
}(_react_16_13_1_react_default.a.Component);

ScrollView_ScrollView.propTypes = propTypes;

var ScrollView_initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.getMetrics = function () {
    var isVertical = !_this5.props.horizontal;
    if (_this5.props.useBodyScroll) {
      // In chrome61 `document.body.scrollTop` is invalid,
      // and add new `document.scrollingElement`(chrome61, iOS support).
      // In old-android-browser and iOS `document.documentElement.scrollTop` is invalid.
      var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
      // todos: Why sometimes do not have `this.ScrollViewRef` ?
      return {
        visibleLength: window[isVertical ? 'innerHeight' : 'innerWidth'],
        contentLength: _this5.ScrollViewRef ? _this5.ScrollViewRef[isVertical ? 'scrollHeight' : 'scrollWidth'] : 0,
        offset: scrollNode[isVertical ? 'scrollTop' : 'scrollLeft']
      };
    }
    return {
      visibleLength: _this5.ScrollViewRef[isVertical ? 'offsetHeight' : 'offsetWidth'],
      contentLength: _this5.ScrollViewRef[isVertical ? 'scrollHeight' : 'scrollWidth'],
      offset: _this5.ScrollViewRef[isVertical ? 'scrollTop' : 'scrollLeft']
    };
  };

  this.getInnerViewNode = function () {
    return _this5.InnerScrollViewRef;
  };

  this.scrollTo = function () {
    if (_this5.props.useBodyScroll) {
      var _window;

      (_window = window).scrollTo.apply(_window, arguments);
    } else {
      _this5.ScrollViewRef.scrollLeft = arguments.length <= 0 ? undefined : arguments[0];
      _this5.ScrollViewRef.scrollTop = arguments.length <= 1 ? undefined : arguments[1];
    }
  };
};

/* harmony default export */ var es_ScrollView = (ScrollView_ScrollView);
// CONCATENATED MODULE: ./node_modules/_rmc-list-view@0.11.5@rmc-list-view/es/ListView.js






/* eslint no-unused-vars: 0, react/no-multi-comp: 0
react/prop-types: 0, react/sort-comp: 0, no-unused-expressions: 0 */






var DEFAULT_PAGE_SIZE = 1;
var DEFAULT_INITIAL_ROWS = 10;
var DEFAULT_SCROLL_RENDER_AHEAD = 1000;
var DEFAULT_END_REACHED_THRESHOLD = 1000;
var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
// const SCROLLVIEW_REF = 'ListViewRef';

var ListView_StaticRenderer = function (_React$Component) {
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
      return this.props.render();
    }
  }]);

  return StaticRenderer;
}(_react_16_13_1_react_default.a.Component);
// https://github.com/facebook/react-native/blob/0.26-stable/Libraries/CustomComponents/ListView/ListView.js


var ListView_ListView = function (_React$Component2) {
  inherits_default()(ListView, _React$Component2);

  function ListView() {
    var _ref;

    var _temp, _this2, _ret;

    classCallCheck_default()(this, ListView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = possibleConstructorReturn_default()(this, (_ref = ListView.__proto__ || Object.getPrototypeOf(ListView)).call.apply(_ref, [this].concat(args))), _this2), ListView_initialiseProps.call(_this2), _temp), possibleConstructorReturn_default()(_this2, _ret);
  }

  /**
   * Exports some data, e.g. for perf investigations or analytics.
   */


  createClass_default()(ListView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this data should never trigger a render pass, so don't put in state
      this.scrollProperties = {
        visibleLength: null,
        contentLength: null,
        offset: 0
      };
      this._childFrames = [];
      this._visibleRows = {};
      this._prevRenderedRowsCount = 0;
      this._sentEndForContentLength = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (this.props.dataSource !== nextProps.dataSource || this.props.initialListSize !== nextProps.initialListSize) {
        this.setState(function (state, props) {
          _this3._prevRenderedRowsCount = 0;
          return {
            curRenderedRowsCount: Math.min(Math.max(state.curRenderedRowsCount, nextProps.initialListSize // for preact
            ), nextProps.dataSource.getRowCount() // for preact
            )
          };
        }, function () {
          return _this3._renderMoreRowsIfNeeded();
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var dataSource = this.props.dataSource;
      var allRowIDs = dataSource.rowIdentities;
      var bodyComponents = [];
      var rowCount = 0;

      for (var sectionIdx = 0; sectionIdx < allRowIDs.length; sectionIdx++) {
        var sectionID = dataSource.sectionIdentities[sectionIdx];
        var rowIDs = allRowIDs[sectionIdx];
        if (rowIDs.length === 0) {
          continue;
        }

        var renderSectionHeader = void 0;
        if (this.props.renderSectionHeader) {
          var shouldUpdateHeader = rowCount >= this._prevRenderedRowsCount && dataSource.sectionHeaderShouldUpdate(sectionIdx);

          renderSectionHeader = _react_16_13_1_react_default.a.createElement(ListView_StaticRenderer, {
            key: 's_' + sectionID,
            shouldUpdate: !!shouldUpdateHeader,
            render: this.props.renderSectionHeader.bind(null, dataSource.getSectionHeaderData(sectionIdx), sectionID)
          });
        }

        var sectionBody = [];
        for (var rowIdx = 0; rowIdx < rowIDs.length; rowIdx++) {
          var rowID = rowIDs[rowIdx];
          var comboID = sectionID + '_' + rowID;
          var shouldUpdateRow = rowCount >= this._prevRenderedRowsCount && dataSource.rowShouldUpdate(sectionIdx, rowIdx);
          var row = _react_16_13_1_react_default.a.createElement(ListView_StaticRenderer, {
            key: 'r_' + comboID,
            shouldUpdate: !!shouldUpdateRow,
            render: this.props.renderRow.bind(null, dataSource.getRowData(sectionIdx, rowIdx), sectionID, rowID, this.onRowHighlighted)
          });
          sectionBody.push(row);

          if (this.props.renderSeparator && (rowIdx !== rowIDs.length - 1 || sectionIdx === allRowIDs.length - 1)) {
            var adjacentRowHighlighted = this.state.highlightedRow.sectionID === sectionID && (this.state.highlightedRow.rowID === rowID || this.state.highlightedRow.rowID === rowIDs[rowIdx + 1]);
            var separator = this.props.renderSeparator(sectionID, rowID, adjacentRowHighlighted);
            if (separator) {
              sectionBody.push(separator);
            }
          }
          if (++rowCount === this.state.curRenderedRowsCount) {
            break;
          }
        }

        var rowsAndSeparators = _react_16_13_1_react_default.a.cloneElement(this.props.renderSectionBodyWrapper(sectionID), {
          className: this.props.sectionBodyClassName
        }, sectionBody);

        if (this.props.renderSectionWrapper) {
          bodyComponents.push(_react_16_13_1_react_default.a.cloneElement(this.props.renderSectionWrapper(sectionID), {}, renderSectionHeader, rowsAndSeparators));
        } else {
          bodyComponents.push(renderSectionHeader);
          bodyComponents.push(rowsAndSeparators);
        }
        if (rowCount >= this.state.curRenderedRowsCount) {
          break;
        }
      }

      var _props = this.props,
          renderScrollComponent = _props.renderScrollComponent,
          props = objectWithoutProperties_default()(_props, ['renderScrollComponent']);

      return _react_16_13_1_react_default.a.cloneElement(renderScrollComponent(extends_default()({}, props, { onScroll: this._onScroll })), {
        ref: function ref(el) {
          return _this4.ListViewRef = el;
        },
        onContentSizeChange: this._onContentSizeChange,
        onLayout: this._onLayout
      }, this.props.renderHeader ? this.props.renderHeader() : null, _react_16_13_1_react_default.a.cloneElement(props.renderBodyComponent(), {}, bodyComponents), this.props.renderFooter ? this.props.renderFooter() : null, props.children);
    }
  }]);

  return ListView;
}(_react_16_13_1_react_default.a.Component);

ListView_ListView.DataSource = es_ListViewDataSource;
ListView_ListView.propTypes = extends_default()({}, es_ScrollView.propTypes, {
  dataSource: _prop_types_15_7_2_prop_types_default.a.instanceOf(es_ListViewDataSource).isRequired,
  renderSeparator: _prop_types_15_7_2_prop_types_default.a.func,
  renderRow: _prop_types_15_7_2_prop_types_default.a.func.isRequired,
  initialListSize: _prop_types_15_7_2_prop_types_default.a.number,
  onEndReached: _prop_types_15_7_2_prop_types_default.a.func,
  onEndReachedThreshold: _prop_types_15_7_2_prop_types_default.a.number,
  pageSize: _prop_types_15_7_2_prop_types_default.a.number,
  renderFooter: _prop_types_15_7_2_prop_types_default.a.func,
  renderHeader: _prop_types_15_7_2_prop_types_default.a.func,
  renderSectionHeader: _prop_types_15_7_2_prop_types_default.a.func,
  renderScrollComponent: _prop_types_15_7_2_prop_types_default.a.func,
  scrollRenderAheadDistance: _prop_types_15_7_2_prop_types_default.a.number,
  onChangeVisibleRows: _prop_types_15_7_2_prop_types_default.a.func,
  scrollEventThrottle: _prop_types_15_7_2_prop_types_default.a.number,
  // another added
  renderBodyComponent: _prop_types_15_7_2_prop_types_default.a.func,
  renderSectionWrapper: _prop_types_15_7_2_prop_types_default.a.func,
  renderSectionBodyWrapper: _prop_types_15_7_2_prop_types_default.a.func,
  sectionBodyClassName: _prop_types_15_7_2_prop_types_default.a.string,
  listViewPrefixCls: _prop_types_15_7_2_prop_types_default.a.string,
  useBodyScroll: _prop_types_15_7_2_prop_types_default.a.bool
});
ListView_ListView.defaultProps = {
  initialListSize: DEFAULT_INITIAL_ROWS,
  pageSize: DEFAULT_PAGE_SIZE,
  renderScrollComponent: function renderScrollComponent(props) {
    return _react_16_13_1_react_default.a.createElement(es_ScrollView, props);
  },
  renderBodyComponent: function renderBodyComponent() {
    return _react_16_13_1_react_default.a.createElement('div', null);
  },
  renderSectionBodyWrapper: function renderSectionBodyWrapper(sectionID) {
    return _react_16_13_1_react_default.a.createElement('div', { key: sectionID });
  },
  sectionBodyClassName: 'list-view-section-body',
  listViewPrefixCls: 'rmc-list-view',
  scrollRenderAheadDistance: DEFAULT_SCROLL_RENDER_AHEAD,
  onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
  scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
  scrollerOptions: {}
};

var ListView_initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.state = {
    curRenderedRowsCount: this.props.initialListSize,
    highlightedRow: {} };

  this.getMetrics = function () {
    return {
      contentLength: _this5.scrollProperties.contentLength,
      totalRows: _this5.props.dataSource.getRowCount(),
      renderedRows: _this5.state.curRenderedRowsCount,
      visibleRows: Object.keys(_this5._visibleRows).length
    };
  };

  this.getInnerViewNode = function () {
    return _this5.ListViewRef.getInnerViewNode();
  };

  this.scrollTo = function () {
    var _ListViewRef;

    _this5.ListViewRef && _this5.ListViewRef.scrollTo && (_ListViewRef = _this5.ListViewRef).scrollTo.apply(_ListViewRef, arguments);
  };

  this.onRowHighlighted = function (sectionID, rowID) {
    _this5.setState({ highlightedRow: { sectionID: sectionID, rowID: rowID } });
  };

  this._onContentSizeChange = function (width, height) {
    var contentLength = !_this5.props.horizontal ? height : width;
    if (contentLength !== _this5.scrollProperties.contentLength) {
      _this5.scrollProperties.contentLength = contentLength;
      _this5._renderMoreRowsIfNeeded();
    }
    _this5.props.onContentSizeChange && _this5.props.onContentSizeChange(width, height);
  };

  this._onLayout = function (event) {
    var _event$nativeEvent$la = event.nativeEvent.layout,
        width = _event$nativeEvent$la.width,
        height = _event$nativeEvent$la.height;

    var visibleLength = !_this5.props.horizontal ? height : width;
    if (visibleLength !== _this5.scrollProperties.visibleLength) {
      _this5.scrollProperties.visibleLength = visibleLength;
      _this5._renderMoreRowsIfNeeded();
    }
    _this5.props.onLayout && _this5.props.onLayout(event);
  };

  this._maybeCallOnEndReached = function (event) {
    // console.log(this.scrollProperties, this._getDistanceFromEnd(this.scrollProperties));
    if (_this5.props.onEndReached && _this5.scrollProperties.contentLength !== _this5._sentEndForContentLength && _this5._getDistanceFromEnd(_this5.scrollProperties) < _this5.props.onEndReachedThreshold && _this5.state.curRenderedRowsCount === _this5.props.dataSource.getRowCount()) {
      _this5._sentEndForContentLength = _this5.scrollProperties.contentLength;
      _this5.props.onEndReached(event);
      return true;
    }
    return false;
  };

  this._renderMoreRowsIfNeeded = function () {
    if (_this5.scrollProperties.contentLength === null || _this5.scrollProperties.visibleLength === null || _this5.state.curRenderedRowsCount === _this5.props.dataSource.getRowCount()) {
      _this5._maybeCallOnEndReached();
      return;
    }

    var distanceFromEnd = _this5._getDistanceFromEnd(_this5.scrollProperties);
    // console.log(distanceFromEnd, this.props.scrollRenderAheadDistance);
    if (distanceFromEnd < _this5.props.scrollRenderAheadDistance) {
      _this5._pageInNewRows();
    }
  };

  this._pageInNewRows = function () {
    _this5.setState(function (state, props) {
      var rowsToRender = Math.min(state.curRenderedRowsCount + props.pageSize, props.dataSource.getRowCount());
      _this5._prevRenderedRowsCount = state.curRenderedRowsCount;
      return {
        curRenderedRowsCount: rowsToRender
      };
    }, function () {
      _this5._prevRenderedRowsCount = _this5.state.curRenderedRowsCount;
    });
  };

  this._getDistanceFromEnd = function (scrollProperties) {
    return scrollProperties.contentLength - scrollProperties.visibleLength - scrollProperties.offset;
  };

  this._onScroll = function (e, metrics) {
    // when the ListView is destroyed,
    // but also will trigger scroll event after `scrollEventThrottle`
    if (!_this5.ListViewRef) {
      return;
    }

    _this5.scrollProperties = metrics;

    if (!_this5._maybeCallOnEndReached(e)) {
      _this5._renderMoreRowsIfNeeded();
    }

    if (_this5.props.onEndReached && _this5._getDistanceFromEnd(_this5.scrollProperties) > _this5.props.onEndReachedThreshold) {
      // Scrolled out of the end zone, so it should be able to trigger again.
      _this5._sentEndForContentLength = null;
    }

    _this5.props.onScroll && _this5.props.onScroll(e);
  };
};

/* harmony default export */ var es_ListView = (ListView_ListView);
// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(61);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/_rmc-list-view@0.11.5@rmc-list-view/es/Indexed.js














function setDocumentScrollTop(val) {
  window.document.body.scrollTop = val; // chrome61 is invalid
  window.document.documentElement.scrollTop = val;
}

/* eslint react/prop-types: 0 */

var Indexed_IndexedList = function (_React$Component) {
  inherits_default()(IndexedList, _React$Component);

  function IndexedList(props) {
    classCallCheck_default()(this, IndexedList);

    var _this = possibleConstructorReturn_default()(this, (IndexedList.__proto__ || Object.getPrototypeOf(IndexedList)).call(this, props));

    Indexed_initialiseProps.call(_this);

    _this.state = {
      pageSize: props.pageSize,
      _delay: false
    };
    return _this;
  }

  createClass_default()(IndexedList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dataChange(this.props);
      // handle quickSearchBar
      this.getQsInfo();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.dataSource !== nextProps.dataSource) {
        this.dataChange(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.getQsInfo();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._timer) {
        clearTimeout(this._timer);
      }
      this._hCache = null;
    }
  }, {
    key: 'renderQuickSearchBar',
    value: function renderQuickSearchBar(quickSearchBarTop, quickSearchBarStyle) {
      var _this2 = this;

      var _props = this.props,
          dataSource = _props.dataSource,
          prefixCls = _props.prefixCls;

      var sectionKvs = dataSource.sectionIdentities.map(function (i) {
        return {
          value: i,
          label: dataSource._getSectionHeaderData(dataSource._dataBlob, i)
        };
      });
      return _react_16_13_1_react_default.a.createElement(
        'ul',
        {
          ref: function ref(el) {
            return _this2.quickSearchBarRef = el;
          },
          className: prefixCls + '-quick-search-bar', style: quickSearchBarStyle,
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd,
          onTouchCancel: this.onTouchEnd
        },
        _react_16_13_1_react_default.a.createElement(
          'li',
          { 'data-qf-target': quickSearchBarTop.value,
            onClick: function onClick() {
              return _this2.onQuickSearchTop(undefined, quickSearchBarTop.value);
            }
          },
          quickSearchBarTop.label
        ),
        sectionKvs.map(function (i) {
          return _react_16_13_1_react_default.a.createElement(
            'li',
            { key: i.value, 'data-qf-target': i.value,
              onClick: function onClick() {
                return _this2.onQuickSearch(i.value);
              }
            },
            i.label
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this,
          _classNames;

      var _state = this.state,
          _delay = _state._delay,
          pageSize = _state.pageSize;

      var _props2 = this.props,
          className = _props2.className,
          prefixCls = _props2.prefixCls,
          children = _props2.children,
          quickSearchBarTop = _props2.quickSearchBarTop,
          quickSearchBarStyle = _props2.quickSearchBarStyle,
          _props2$initialListSi = _props2.initialListSize,
          initialListSize = _props2$initialListSi === undefined ? Math.min(20, this.props.dataSource.getRowCount()) : _props2$initialListSi,
          showQuickSearchIndicator = _props2.showQuickSearchIndicator,
          _renderSectionHeader = _props2.renderSectionHeader,
          sectionHeaderClassName = _props2.sectionHeaderClassName,
          other = objectWithoutProperties_default()(_props2, ['className', 'prefixCls', 'children', 'quickSearchBarTop', 'quickSearchBarStyle', 'initialListSize', 'showQuickSearchIndicator', 'renderSectionHeader', 'sectionHeaderClassName']);

      // initialListSize={this.props.dataSource.getRowCount()}


      return _react_16_13_1_react_default.a.createElement(
        'div',
        { className: prefixCls + '-container' },
        _delay && this.props.delayActivityIndicator,
        _react_16_13_1_react_default.a.createElement(
          es_ListView,
          extends_default()({}, other, {
            ref: function ref(el) {
              return _this3.indexedListViewRef = el;
            },
            className: _classnames_2_2_6_classnames_default()(prefixCls, className),
            initialListSize: initialListSize,
            pageSize: pageSize,
            renderSectionHeader: function renderSectionHeader(sectionData, sectionID) {
              return _react_16_13_1_react_default.a.cloneElement(_renderSectionHeader(sectionData, sectionID), {
                ref: function ref(c) {
                  return _this3.sectionComponents[sectionID] = c;
                },
                className: sectionHeaderClassName || prefixCls + '-section-header'
              });
            }
          }),
          children
        ),
        this.renderQuickSearchBar(quickSearchBarTop, quickSearchBarStyle),
        showQuickSearchIndicator ? _react_16_13_1_react_default.a.createElement('div', { className: _classnames_2_2_6_classnames_default()((_classNames = {}, defineProperty_default()(_classNames, prefixCls + '-qsindicator', true), defineProperty_default()(_classNames, prefixCls + '-qsindicator-hide', !showQuickSearchIndicator || !this.state.showQuickSearchIndicator), _classNames)), ref: function ref(el) {
            return _this3.qsIndicatorRef = el;
          }
        }) : null
      );
    }
  }]);

  return IndexedList;
}(_react_16_13_1_react_default.a.Component);

Indexed_IndexedList.propTypes = extends_default()({}, es_ListView.propTypes, {
  children: _prop_types_15_7_2_prop_types_default.a.any,
  prefixCls: _prop_types_15_7_2_prop_types_default.a.string,
  className: _prop_types_15_7_2_prop_types_default.a.string,
  sectionHeaderClassName: _prop_types_15_7_2_prop_types_default.a.string,
  quickSearchBarTop: _prop_types_15_7_2_prop_types_default.a.object,
  quickSearchBarStyle: _prop_types_15_7_2_prop_types_default.a.object,
  onQuickSearch: _prop_types_15_7_2_prop_types_default.a.func,
  showQuickSearchIndicator: _prop_types_15_7_2_prop_types_default.a.bool
});
Indexed_IndexedList.defaultProps = {
  prefixCls: 'rmc-indexed-list',
  quickSearchBarTop: { value: '#', label: '#' },
  onQuickSearch: function onQuickSearch() {},
  showQuickSearchIndicator: false,
  delayTime: 100,
  // delayActivityIndicator: <div style={{padding: 5, textAlign: 'center'}}>rendering more</div>,
  delayActivityIndicator: ''
};

var Indexed_initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onQuickSearchTop = function (sectionID, topId) {
    if (_this4.props.useBodyScroll) {
      setDocumentScrollTop(0);
    } else {
      _react_dom_16_13_1_react_dom_default.a.findDOMNode(_this4.indexedListViewRef.ListViewRef).scrollTop = 0;
    }
    _this4.props.onQuickSearch(sectionID, topId);
  };

  this.onQuickSearch = function (sectionID) {
    var lv = _react_dom_16_13_1_react_dom_default.a.findDOMNode(_this4.indexedListViewRef.ListViewRef);
    var sec = _react_dom_16_13_1_react_dom_default.a.findDOMNode(_this4.sectionComponents[sectionID]);
    if (_this4.props.useBodyScroll) {
      setDocumentScrollTop(sec.getBoundingClientRect().top - lv.getBoundingClientRect().top + getOffsetTop(lv));
    } else {
      lv.scrollTop += sec.getBoundingClientRect().top - lv.getBoundingClientRect().top;
    }
    _this4.props.onQuickSearch(sectionID);
  };

  this.onTouchStart = function (e) {
    _this4._target = e.target;
    _this4._basePos = _this4.quickSearchBarRef.getBoundingClientRect();
    document.addEventListener('touchmove', _this4._disableParent, false);
    document.body.className = document.body.className + ' ' + _this4.props.prefixCls + '-qsb-moving';
    _this4.updateIndicator(_this4._target);
  };

  this.onTouchMove = function (e) {
    e.preventDefault();
    if (_this4._target) {
      var ex = _event(e);
      var basePos = _this4._basePos;
      var _pos = void 0;
      if (ex.clientY >= basePos.top && ex.clientY <= basePos.top + _this4._qsHeight) {
        _pos = Math.floor((ex.clientY - basePos.top) / _this4._avgH);
        var target = void 0;
        if (_pos in _this4._hCache) {
          target = _this4._hCache[_pos][0];
        }
        if (target) {
          var overValue = target.getAttribute('data-qf-target');
          if (_this4._target !== target) {
            if (_this4.props.quickSearchBarTop.value === overValue) {
              _this4.onQuickSearchTop(undefined, overValue);
            } else {
              _this4.onQuickSearch(overValue);
            }
            _this4.updateIndicator(target);
          }
          _this4._target = target;
        }
      }
    }
  };

  this.onTouchEnd = function () {
    if (!_this4._target) {
      return;
    }
    document.removeEventListener('touchmove', _this4._disableParent, false);
    document.body.className = document.body.className.replace(new RegExp('\\s*' + _this4.props.prefixCls + '-qsb-moving', 'g'), '');
    _this4.updateIndicator(_this4._target, true);
    _this4._target = null;
  };

  this.getQsInfo = function () {
    var quickSearchBar = _this4.quickSearchBarRef;
    var height = quickSearchBar.offsetHeight;
    var hCache = [];
    [].slice.call(quickSearchBar.querySelectorAll('[data-qf-target]')).forEach(function (d) {
      hCache.push([d]);
    });
    var _avgH = height / hCache.length;
    var _top = 0;
    for (var i = 0, len = hCache.length; i < len; i++) {
      _top = i * _avgH;
      hCache[i][1] = [_top, _top + _avgH];
    }
    _this4._qsHeight = height;
    _this4._avgH = _avgH;
    _this4._hCache = hCache;
  };

  this.sectionComponents = {};

  this.dataChange = function (props) {
    // delay render more
    var rowCount = props.dataSource.getRowCount();
    if (!rowCount) {
      return;
    }
    _this4.setState({
      _delay: true
    });
    if (_this4._timer) {
      clearTimeout(_this4._timer);
    }
    _this4._timer = setTimeout(function () {
      _this4.setState({
        pageSize: rowCount,
        _delay: false
      }, function () {
        return _this4.indexedListViewRef._pageInNewRows();
      });
    }, props.delayTime);
  };

  this.updateIndicator = function (ele, end) {
    var el = ele;
    if (!el.getAttribute('data-qf-target')) {
      el = el.parentNode;
    }
    if (_this4.props.showQuickSearchIndicator) {
      _this4.qsIndicatorRef.innerText = el.innerText.trim();
      _this4.setState({
        showQuickSearchIndicator: true
      });
      if (_this4._indicatorTimer) {
        clearTimeout(_this4._indicatorTimer);
      }
      _this4._indicatorTimer = setTimeout(function () {
        _this4.setState({
          showQuickSearchIndicator: false
        });
      }, 1000);
    }

    var cls = _this4.props.prefixCls + '-quick-search-bar-over';
    // can not use setState to change className, it has a big performance issue!
    _this4._hCache.forEach(function (d) {
      d[0].className = d[0].className.replace(cls, '');
    });
    if (!end) {
      el.className = el.className + ' ' + cls;
    }
  };

  this._disableParent = function (e) {
    e.preventDefault();
    e.stopPropagation();
  };
};

/* harmony default export */ var Indexed = (Indexed_IndexedList);
// CONCATENATED MODULE: ./node_modules/_rmc-list-view@0.11.5@rmc-list-view/es/index.js
// export this package's api



es_ListView.IndexedList = Indexed;
var DataSource = es_ListView.DataSource;


/* harmony default export */ var es = __webpack_exports__["default"] = (es_ListView);

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/* eslint-disable fb-www/typeof-undefined */
/* eslint-disable no-unused-vars */

var invariant = __webpack_require__(974);

/**
 * Checks if a value is empty.
 */
function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === 'object') {
    if (value) {
      !(!isIterable(value) || value.size === undefined) ?  false ? undefined : invariant(false) : void 0;
      for (var _ in value) {
        return false;
      }
    }
    return true;
  } else {
    return !value;
  }
}

function isIterable(value) {
  if (typeof Symbol === 'undefined') {
    return false;
  }
  return value[Symbol.iterator];
}

module.exports = isEmpty;

/***/ }),

/***/ 1031:
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

var _rmcListView = __webpack_require__(1005);

var _rmcListView2 = _interopRequireDefault(_rmcListView);

var _handleProps2 = __webpack_require__(975);

var _handleProps3 = _interopRequireDefault(_handleProps2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var IndexedList = _rmcListView2['default'].IndexedList;

var MIndexedList = function (_React$Component) {
    (0, _inherits3['default'])(MIndexedList, _React$Component);

    function MIndexedList() {
        (0, _classCallCheck3['default'])(this, MIndexedList);
        return (0, _possibleConstructorReturn3['default'])(this, (MIndexedList.__proto__ || Object.getPrototypeOf(MIndexedList)).apply(this, arguments));
    }

    (0, _createClass3['default'])(MIndexedList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                listPrefixCls = _props.listPrefixCls;

            var _handleProps = (0, _handleProps3['default'])(this.props, true),
                restProps = _handleProps.restProps,
                extraProps = _handleProps.extraProps;

            return React.createElement(
                IndexedList,
                (0, _extends3['default'])({ ref: function ref(el) {
                        return _this2.indexedListRef = el;
                    }, sectionHeaderClassName: prefixCls + '-section-header ' + listPrefixCls + '-body', sectionBodyClassName: prefixCls + '-section-body ' + listPrefixCls + '-body' }, restProps, extraProps),
                this.props.children
            );
        }
    }]);
    return MIndexedList;
}(React.Component);

exports['default'] = MIndexedList;

MIndexedList.defaultProps = {
    prefixCls: 'am-indexed-list',
    listPrefixCls: 'am-list',
    listViewPrefixCls: 'am-list-view'
};
module.exports = exports['default'];

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(874);

/***/ }),

/***/ 856:
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

var _ListItem = __webpack_require__(875);

var _ListItem2 = _interopRequireDefault(_ListItem);

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

var List = function (_React$Component) {
    (0, _inherits3['default'])(List, _React$Component);

    function List() {
        (0, _classCallCheck3['default'])(this, List);
        return (0, _possibleConstructorReturn3['default'])(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    (0, _createClass3['default'])(List, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                children = _a.children,
                className = _a.className,
                style = _a.style,
                renderHeader = _a.renderHeader,
                renderFooter = _a.renderFooter,
                restProps = __rest(_a, ["prefixCls", "children", "className", "style", "renderHeader", "renderFooter"]);
            var wrapCls = (0, _classnames2['default'])(prefixCls, className);
            return React.createElement(
                'div',
                (0, _extends3['default'])({ className: wrapCls, style: style }, restProps),
                renderHeader ? React.createElement(
                    'div',
                    { className: prefixCls + '-header' },
                    typeof renderHeader === 'function' ? renderHeader() : renderHeader
                ) : null,
                children ? React.createElement(
                    'div',
                    { className: prefixCls + '-body' },
                    children
                ) : null,
                renderFooter ? React.createElement(
                    'div',
                    { className: prefixCls + '-footer' },
                    typeof renderFooter === 'function' ? renderFooter() : renderFooter
                ) : null
            );
        }
    }]);
    return List;
}(React.Component);

exports['default'] = List;

List.Item = _ListItem2['default'];
List.defaultProps = {
    prefixCls: 'am-list'
};
module.exports = exports['default'];

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(853);

__webpack_require__(1029);

/***/ }),

/***/ 869:
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

var _rmcListView = __webpack_require__(1005);

var _rmcListView2 = _interopRequireDefault(_rmcListView);

var _handleProps2 = __webpack_require__(975);

var _handleProps3 = _interopRequireDefault(_handleProps2);

var _Indexed = __webpack_require__(1031);

var _Indexed2 = _interopRequireDefault(_Indexed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ListView = function (_React$Component) {
    (0, _inherits3['default'])(ListView, _React$Component);

    function ListView() {
        (0, _classCallCheck3['default'])(this, ListView);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));

        _this.scrollTo = function () {
            var _this$listviewRef;

            return (_this$listviewRef = _this.listviewRef).scrollTo.apply(_this$listviewRef, arguments);
        };
        _this.getInnerViewNode = function () {
            return _this.listviewRef.getInnerViewNode();
        };
        return _this;
    }

    (0, _createClass3['default'])(ListView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _handleProps = (0, _handleProps3['default'])(this.props, false),
                restProps = _handleProps.restProps,
                extraProps = _handleProps.extraProps;

            return React.createElement(_rmcListView2['default'], (0, _extends3['default'])({ ref: function ref(el) {
                    return _this2.listviewRef = el;
                } }, restProps, extraProps));
        }
    }]);
    return ListView;
}(React.Component);

exports['default'] = ListView;

ListView.defaultProps = {
    prefixCls: 'am-list-view',
    listPrefixCls: 'am-list'
};
ListView.DataSource = _rmcListView2['default'].DataSource;
ListView.IndexedList = _Indexed2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brief = undefined;

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

var _classnames5 = __webpack_require__(97);

var _classnames6 = _interopRequireDefault(_classnames5);

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(852);

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

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

var Brief = exports.Brief = function (_React$Component) {
    (0, _inherits3['default'])(Brief, _React$Component);

    function Brief() {
        (0, _classCallCheck3['default'])(this, Brief);
        return (0, _possibleConstructorReturn3['default'])(this, (Brief.__proto__ || Object.getPrototypeOf(Brief)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Brief, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'am-list-brief', style: this.props.style },
                this.props.children
            );
        }
    }]);
    return Brief;
}(React.Component);

var ListItem = function (_React$Component2) {
    (0, _inherits3['default'])(ListItem, _React$Component2);

    function ListItem(props) {
        (0, _classCallCheck3['default'])(this, ListItem);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

        _this2.onClick = function (ev) {
            var _this2$props = _this2.props,
                onClick = _this2$props.onClick,
                platform = _this2$props.platform;

            var isAndroid = platform === 'android';
            if (!!onClick && isAndroid) {
                if (_this2.debounceTimeout) {
                    clearTimeout(_this2.debounceTimeout);
                    _this2.debounceTimeout = null;
                }
                var Item = ev.currentTarget;
                var RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
                var ClientRect = ev.currentTarget.getBoundingClientRect();
                var pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
                var pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
                var coverRippleStyle = {
                    width: RippleWidth + 'px',
                    height: RippleWidth + 'px',
                    left: pointX + 'px',
                    top: pointY + 'px'
                };
                _this2.setState({
                    coverRippleStyle: coverRippleStyle,
                    RippleClicked: true
                }, function () {
                    _this2.debounceTimeout = setTimeout(function () {
                        _this2.setState({
                            coverRippleStyle: { display: 'none' },
                            RippleClicked: false
                        });
                    }, 1000);
                });
            }
            if (onClick) {
                onClick(ev);
            }
        };
        _this2.state = {
            coverRippleStyle: { display: 'none' },
            RippleClicked: false
        };
        return _this2;
    }

    (0, _createClass3['default'])(ListItem, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
                this.debounceTimeout = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _classnames3,
                _classnames4,
                _this3 = this;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                activeStyle = _a.activeStyle,
                error = _a.error,
                align = _a.align,
                wrap = _a.wrap,
                disabled = _a.disabled,
                children = _a.children,
                multipleLine = _a.multipleLine,
                thumb = _a.thumb,
                extra = _a.extra,
                arrow = _a.arrow,
                onClick = _a.onClick,
                restProps = __rest(_a, ["prefixCls", "className", "activeStyle", "error", "align", "wrap", "disabled", "children", "multipleLine", "thumb", "extra", "arrow", "onClick"]);var platform = restProps.platform,
                otherProps = __rest(restProps, ["platform"]);var _state = this.state,
                coverRippleStyle = _state.coverRippleStyle,
                RippleClicked = _state.RippleClicked;

            var wrapCls = (0, _classnames6['default'])(prefixCls + '-item', className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-error', error), (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-top', align === 'top'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-middle', align === 'middle'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-item-bottom', align === 'bottom'), _classnames));
            var rippleCls = (0, _classnames6['default'])(prefixCls + '-ripple', (0, _defineProperty3['default'])({}, prefixCls + '-ripple-animate', RippleClicked));
            var lineCls = (0, _classnames6['default'])(prefixCls + '-line', (_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, prefixCls + '-line-multiple', multipleLine), (0, _defineProperty3['default'])(_classnames3, prefixCls + '-line-wrap', wrap), _classnames3));
            var arrowCls = (0, _classnames6['default'])(prefixCls + '-arrow', (_classnames4 = {}, (0, _defineProperty3['default'])(_classnames4, prefixCls + '-arrow-horizontal', arrow === 'horizontal'), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-arrow-vertical', arrow === 'down' || arrow === 'up'), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-arrow-vertical-up', arrow === 'up'), _classnames4));
            var content = React.createElement(
                'div',
                (0, _extends3['default'])({}, otherProps, { onClick: function onClick(ev) {
                        _this3.onClick(ev);
                    }, className: wrapCls }),
                thumb ? React.createElement(
                    'div',
                    { className: prefixCls + '-thumb' },
                    typeof thumb === 'string' ? React.createElement('img', { src: thumb }) : thumb
                ) : null,
                React.createElement(
                    'div',
                    { className: lineCls },
                    children !== undefined && React.createElement(
                        'div',
                        { className: prefixCls + '-content' },
                        children
                    ),
                    extra !== undefined && React.createElement(
                        'div',
                        { className: prefixCls + '-extra' },
                        extra
                    ),
                    arrow && React.createElement('div', { className: arrowCls, 'aria-hidden': 'true' })
                ),
                React.createElement('div', { style: coverRippleStyle, className: rippleCls })
            );
            var touchProps = {};
            Object.keys(otherProps).forEach(function (key) {
                if (/onTouch/i.test(key)) {
                    touchProps[key] = otherProps[key];
                    delete otherProps[key];
                }
            });
            return React.createElement(
                _rmcFeedback2['default'],
                (0, _extends3['default'])({}, touchProps, { disabled: disabled || !onClick, activeStyle: activeStyle, activeClassName: prefixCls + '-item-active' }),
                content
            );
        }
    }]);
    return ListItem;
}(React.Component);

ListItem.defaultProps = {
    prefixCls: 'am-list',
    align: 'middle',
    error: false,
    multipleLine: false,
    wrap: false,
    platform: 'ios'
};
ListItem.Brief = Brief;
exports['default'] = ListItem;

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = handleProps;

var _react = __webpack_require__(2);

var React = _interopRequireWildcard(_react);

var _list = __webpack_require__(856);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:no-unused-variable */

/* tslint:enable:no-unused-variable */
var Item = _list2['default'].Item;
function handleProps(props, isIndexed) {
    var renderHeader = props.renderHeader,
        renderFooter = props.renderFooter,
        renderSectionHeader = props.renderSectionHeader,
        renderBodyComponent = props.renderBodyComponent,
        restProps = __rest(props, ["renderHeader", "renderFooter", "renderSectionHeader", "renderBodyComponent"]);

    var listPrefixCls = props.listPrefixCls;
    var extraProps = {
        renderHeader: null,
        renderFooter: null,
        renderSectionHeader: null,
        renderBodyComponent: renderBodyComponent || function () {
            return React.createElement('div', { className: listPrefixCls + '-body' });
        }
    };
    if (renderHeader) {
        extraProps.renderHeader = function () {
            return React.createElement(
                'div',
                { className: listPrefixCls + '-header' },
                renderHeader()
            );
        };
    }
    if (renderFooter) {
        extraProps.renderFooter = function () {
            return React.createElement(
                'div',
                { className: listPrefixCls + '-footer' },
                renderFooter()
            );
        };
    }
    if (renderSectionHeader) {
        extraProps.renderSectionHeader = isIndexed ? function (sectionData, sectionID) {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    Item,
                    { prefixCls: listPrefixCls },
                    renderSectionHeader(sectionData, sectionID)
                )
            );
        } : function (sectionData, sectionID) {
            return React.createElement(
                Item,
                { prefixCls: listPrefixCls },
                renderSectionHeader(sectionData, sectionID)
            );
        };
    }
    return { restProps: restProps, extraProps: extraProps };
}
module.exports = exports['default'];

/***/ })

}]);
//# sourceMappingURL=../map/vendors~dashMessage~dashboard~follow~meetingManagement~meetingNotification~performDetailView~perform~d88c53fe.598af35d.map