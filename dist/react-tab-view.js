(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactTabView"] = factory(require("react"));
	else
		root["ReactTabView"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$assign = __webpack_require__(2)['default'];

	var _interopRequireDefault = __webpack_require__(17)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(19);

	exports['default'] = _react2['default'].createClass({
	  displayName: 'react-tab-view',

	  propTypes: {
	    isDraggable: _react2['default'].PropTypes.bool
	  },

	  touchState: {},

	  getInitialState: function getInitialState() {
	    return { currentIndex: 0, baseWidth: 0 };
	  },

	  getTitleItemCssClasses: function getTitleItemCssClasses(index) {
	    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
	  },

	  getWidth: function getWidth(elem) {
	    return elem.getBoundingClientRect().width || elem.offsetWidth;
	  },

	  componentDidMount: function componentDidMount() {
	    var baseWidth = this.getWidth(this.refs.tabView);
	    this.setState({ baseWidth: baseWidth });
	    this.adaptHeight();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    if (prevState.currentIndex !== this.state.currentIndex) {
	      this.adaptHeight();
	    }
	  },

	  adaptHeight: function adaptHeight() {
	    var currentIndex = this.state.currentIndex;

	    this.refs.tabItems.style.height = this.refs['tab-item-' + currentIndex].offsetHeight + 'px';
	  },

	  swipeStart: function swipeStart(e) {
	    var posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
	    var posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
	    this.touchState = {
	      isDragging: true,
	      startX: posX,
	      startY: posY,
	      curX: posX,
	      curY: posY
	    };
	  },

	  swipeMove: function swipeMove(e) {
	    if (!this.touchState.isDragging) return;

	    var isDraggable = this.props.isDraggable;
	    var _state = this.state;
	    var currentIndex = _state.currentIndex;
	    var baseWidth = _state.baseWidth;
	    var _touchState = this.touchState;
	    var startX = _touchState.startX;
	    var startY = _touchState.startY;
	    var isSwiping = _touchState.isSwiping;
	    var isScrolling = _touchState.isScrolling;

	    var posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
	    var posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
	    var yAxisMoved = Math.abs(startY - posY);
	    var xAxisMoved = Math.abs(startX - posX);

	    if (!isSwiping && !isScrolling) {
	      if (xAxisMoved > 7) {
	        isSwiping = true;
	      } else if (yAxisMoved > 10) {
	        isScrolling = true;
	      }
	    }

	    if (isSwiping) {
	      e.preventDefault();
	      isDraggable && this.setState({
	        isDragging: true,
	        currentBaseTranslate: currentIndex * baseWidth + this.touchState.startX - posX
	      });
	    }

	    this.touchState = _Object$assign(this.touchState, {
	      isScrolling: isScrolling,
	      isSwiping: isSwiping,
	      isDragging: true,
	      curX: posX,
	      curY: posY
	    });
	  },

	  swipeEnd: function swipeEnd(e) {
	    var currentIndex = this.state.currentIndex;
	    var _touchState2 = this.touchState;
	    var startX = _touchState2.startX;
	    var curX = _touchState2.curX;
	    var isSwiping = _touchState2.isSwiping;

	    var threshold = 20,
	        xAxisMoved = Math.abs(startX - curX),
	        direction = this.getSwipeDirection(startX, curX),
	        nextIndex = currentIndex,
	        maxIndex = _react2['default'].Children.count(this.props.children) - 1;

	    if (isSwiping) {
	      if (xAxisMoved > threshold) {
	        if (direction === 'left' && currentIndex < maxIndex) {
	          nextIndex = currentIndex + 1;
	        } else if (direction == 'right' && currentIndex > 0) {
	          nextIndex = currentIndex - 1;
	        }
	      }
	    }

	    this.setState({ isDragging: false, currentIndex: nextIndex });
	    this.touchState = _Object$assign(this.touchState, { isDragging: false, isSwiping: false, isScrolling: false });
	  },

	  getSwipeDirection: function getSwipeDirection(start, end) {
	    if (start < end) return 'right';else return 'left';
	  },

	  render: function render() {
	    var _this = this;

	    var that = this;
	    var _state2 = this.state;
	    var baseWidth = _state2.baseWidth;
	    var currentIndex = _state2.currentIndex;
	    var isDragging = _state2.isDragging;
	    var currentBaseTranslate = _state2.currentBaseTranslate;

	    var childrenLength = _react2['default'].Children.count(this.props.children);

	    var itemsStyle = !!baseWidth ? {
	      width: baseWidth * childrenLength,
	      transitionProperty: isDragging ? 'none' : 'all',
	      WebkitTransitionProperty: isDragging ? 'none' : 'all',
	      transform: 'translate3d(-' + (isDragging ? currentBaseTranslate : baseWidth * currentIndex) + 'px, 0, 0)',
	      WebkitTransform: 'translate3d(-' + (isDragging ? currentBaseTranslate : baseWidth * currentIndex) + 'px, 0, 0)'
	    } : {};

	    var itemStyle = !!baseWidth ? { width: baseWidth } : {};
	    var indicatorStyle = !!baseWidth ? {
	      width: baseWidth / childrenLength,
	      transitionProperty: isDragging ? 'none' : 'all',
	      WebkitTransitionProperty: isDragging ? 'none' : 'all',
	      transform: 'translate3d(' + (isDragging ? currentBaseTranslate / childrenLength : baseWidth * currentIndex / childrenLength) + 'px, 0, 0)',
	      WebkitTransform: 'translate3d(' + (isDragging ? currentBaseTranslate / childrenLength : baseWidth * currentIndex / childrenLength) + 'px, 0, 0)'
	    } : {};

	    return _react2['default'].createElement(
	      'div',
	      { ref: 'tabView', className: 'react-tab-view' },
	      _react2['default'].createElement(
	        'nav',
	        { className: 'tab-title-items' },
	        _react2['default'].Children.map(this.props.children, function (element, index) {
	          return _react2['default'].createElement(
	            'div',
	            { onClick: function () {
	                _this.setState({ currentIndex: index });
	              }, className: that.getTitleItemCssClasses(index) },
	            element.props.name
	          );
	        })
	      ),
	      _react2['default'].createElement('div', { className: 'indicator', style: indicatorStyle }),
	      _react2['default'].createElement(
	        'div',
	        { ref: 'tabItems', className: 'tab-content-items', style: itemsStyle,
	          onMouseDown: this.swipeStart,
	          onMouseMove: this.swipeMove,
	          onMouseUp: this.swipeEnd,
	          onMouseLeave: this.swipeEnd,
	          onTouchStart: this.swipeStart,
	          onTouchMove: this.swipeMove,
	          onTouchEnd: this.swipeEnd,
	          onTouchCancel: this.swipeEnd },
	        _react2['default'].Children.map(this.props.children, function (element, index) {
	          return _react2['default'].createElement(
	            'div',
	            { ref: 'tab-item-' + index, style: itemStyle, className: 'tab-content-item' },
	            element
	          );
	        })
	      )
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(7).Object.assign;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(10)});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , ctx       = __webpack_require__(8)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(11)
	  , toObject = __webpack_require__(12)
	  , IObject  = __webpack_require__(14);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(16)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(13);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(15);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./react-tab-view.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./react-tab-view.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports


	// module
	exports.push([module.id, ".react-tab-view,\n.react-tab-view * {\n  box-sizing: border-box;\n}\n\n.react-tab-view {\n  height: 100%;\n  padding-top: 50px;\n  position: relative;\n  overflow: hidden;\n}\n\n.tab-title-items {\n  position: absolute;\n  top: 0;\n  display: table;\n  width: 100%;\n  height: 50px;\n  padding: 0;\n  table-layout: fixed;\n  background: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><line x1='0' y1='100%' x2='100%' y2='100%' style='stroke:#e5e5e5;stroke-width:1'/></svg>\") no-repeat 0 0;\n}\n\n.indicator {\n  position: absolute;\n  height: 3px;\n  background-color: #c0392b;\n  top: 47px;\n  transition: all .2s ease;\n  -webkit-transition: all .2s ease;\n}\n\n.tab-title-item {\n  display: table-cell;\n  width: 1%;\n  height: 100%;\n  color: #999;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.tab-title-item.active{\n  color: #c0392b;\n}\n\n.tab-content-items {\n  height: 100%;\n  transition: all .2s ease;\n  -webkit-transition: all .2s ease;\n}\n\n.tab-content-item{\n  height: 100%;\n  display: block;\n  float: left;\n}\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;