(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ymcImageWater"] = factory();
	else
		root["ymcImageWater"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(11);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.randomNum = randomNum;
exports.randomColor = randomColor;
exports.drawBg = drawBg;
exports.drawLine = drawLine;
exports.drawPoint = drawPoint;
exports.drawText = drawText;

var _Text = __webpack_require__(24);

var _Line = __webpack_require__(25);

var _Point = __webpack_require__(26);

var _Sence = __webpack_require__(27);

/**生成一个随机数**/
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
/**生成一个随机色**/
function randomColor(min, max) {
	var r = randomNum(min, max);
	var g = randomNum(min, max);
	var b = randomNum(min, max);
	return "rgb(" + r + "," + g + "," + b + ")";
}
/**绘制一个背景图**/
function drawBg(ctx, w, h) {
	/*
 ctx.fillStyle = randomColor(180, 240);
 ctx.fillRect(0, 0, w, h);
 */
	new _Sence.Sence().draw(ctx, w, h);
}
/**绘制一批干扰线**/
function drawLine(ctx, w, h) {
	/*
 for(let i = 0; i < 6; i++) {
 	ctx.strokeStyle = randomColor(40, 180);
 	ctx.beginPath();
 	ctx.moveTo(randomNum(0, w), randomNum(0, h));
 	ctx.lineTo(randomNum(0, w), randomNum(0, h));
 	ctx.stroke();
 }
 */
	new _Line.Line().draw(ctx, w, h);
}
/**绘制一批干扰点**/
function drawPoint(ctx, w, h) {
	/*
 for(let i = 0; i < 50; i++) {
 	ctx.fillStyle = randomColor(0, 255);
 	ctx.beginPath();
 	ctx.arc(randomNum(0, w), randomNum(0, h), 1, 0, 2 * Math.PI);
 	ctx.fill();
 }
 */
	new _Point.Point().draw(ctx, w, h);
}
/**绘制一批文字**/
function drawText(ctx) {
	/*
 let str = 'ABCEFGHJKLMNPQRSTWXY123456789';
 ctx.textBaseline = 'bottom';
 for(let i = 0; i < 4; i++) {
 	let txt = str[randomNum(0, str.length)];
 	ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
 	ctx.font = randomNum(15, 40) + 'px SimHei'; //随机生成字体大小
 	let x = 10 + i * 25;
 	let y = randomNum(25, 45);
 	let deg = randomNum(-45, 45);
 	//修改坐标原点和旋转角度
 	ctx.translate(x, y);
 	ctx.rotate(deg * Math.PI / 180);
 	ctx.fillText(txt, 0, 0);
 	//恢复坐标原点和旋转角度
 	ctx.rotate(-deg * Math.PI / 180);
 	ctx.translate(-x, -y);
 }
 */
	return new _Text.Text().draw(ctx);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(19);
var toPrimitive = __webpack_require__(21);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var config = {
	//背景
	bg: {
		color: [180, 240]
	},
	//文字
	text: {
		content: 'ABCEFGHJKLMNPQRSTWXY123456789',
		num: 4,
		color: [50, 160],
		size: [25, 30],
		position: {
			x: 10,
			y: [30, 40]
		},
		wordWidth: 25,
		deg: [-45, 45]
	},
	//线段
	line: {
		useLine: false,
		color: [40, 180],
		num: 8
	},
	//散点
	point: {
		color: [0, 255],
		num: 100
	},
	//画布
	paper: {
		id: 'canvas',
		useWH: true,
		w: 120,
		h: 40
	}
};

exports.config = config;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helper = __webpack_require__(2);

var _config = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = {};
settings.modules = {
	bg: { draw: _helper.drawBg },
	Text: { draw: _helper.drawText },
	Line: { draw: _helper.drawLine },
	Point: { draw: _helper.drawPoint }
};
var options = {};
options.useBg = true;
options.useText = true;
options.useLine = false;
options.usePoint = true;
settings.options = options;

var ValicationCodeImage = function () {
	function ValicationCodeImage() {
		(0, _classCallCheck3.default)(this, ValicationCodeImage);
	}

	(0, _createClass3.default)(ValicationCodeImage, [{
		key: 'make',
		value: function make(setting) {
			options.Line = setting;
		}
	}, {
		key: 'draw',
		value: function draw() {
			var paper = _config.config.paper;

			var canvas = document.getElementById(paper.id);
			var width = canvas.width;
			var height = canvas.height;
			var options = settings.options,
			    modules = settings.modules;

			if (paper.useWH) {
				width = canvas.width = paper.w;
				height = canvas.height = paper.h;
			}

			var ctx = canvas.getContext('2d');
			/**绘制背景**/
			if (options.useBg) {
				modules.bg.draw(ctx, width, height);
			}
			/**绘制文字**/
			if (options.useText) {
				this.text = modules.Text.draw(ctx).text();
				//console.log(modules.Text.draw(ctx).text());
			}
			/**绘干扰线**/
			if (options.useLine) {
				modules.Line.draw(ctx, width, height);
			}
			/**绘干扰点**/
			if (options.usePoint) {
				modules.Point.draw(ctx, width, height);
			}
		}
	}]);
	return ValicationCodeImage;
}();

exports.default = ValicationCodeImage;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(6);
var ctx = __webpack_require__(15);
var hide = __webpack_require__(17);
var has = __webpack_require__(23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Text = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helper = __webpack_require__(2);

var _config = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paper = _config.config.paper,
    text = _config.config.text;

var result = [];

var Text = exports.Text = function () {
	function Text() {
		(0, _classCallCheck3.default)(this, Text);
	}

	(0, _createClass3.default)(Text, [{
		key: 'constrctor',
		value: function constrctor() {}
	}, {
		key: 'draw',
		value: function draw(ctx) {
			var str = text.content;
			ctx.textBaseline = 'bottom';
			result = [];
			for (var i = 0; i < text.num; i++) {
				var txt = str[(0, _helper.randomNum)(0, str.length)];
				result.push(txt);
				ctx.fillStyle = (0, _helper.randomColor)(text.color[0], text.color[1]); //随机生成字体颜色
				ctx.font = (0, _helper.randomNum)(text.size[0], text.size[0]) + 'px SimHei'; //随机生成字体大小
				var x = text.position.x + i * text.wordWidth;
				var y = (0, _helper.randomNum)(text.position.y[0], text.position.y[1]);
				var deg = (0, _helper.randomNum)(text.deg[0], text.deg[1]);
				//修改坐标原点和旋转角度
				ctx.translate(x, y);
				ctx.rotate(deg * Math.PI / 180);
				ctx.fillText(txt, 0, 0);
				//恢复坐标原点和旋转角度
				ctx.rotate(-deg * Math.PI / 180);
				ctx.translate(-x, -y);
			}
			return this;
		}
	}, {
		key: 'text',
		value: function text() {
			return result.join('');
		}
	}]);
	return Text;
}();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Line = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helper = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var w = void 0,
    h = void 0;

var Line = function () {
	function Line() {
		(0, _classCallCheck3.default)(this, Line);
	}

	(0, _createClass3.default)(Line, [{
		key: 'draw',
		value: function draw(ctx, width, height) {
			for (var i = 0; i < 8; i++) {
				ctx.strokeStyle = (0, _helper.randomColor)(40, 180);
				ctx.beginPath();
				ctx.moveTo((0, _helper.randomNum)(0, width), (0, _helper.randomNum)(0, height));
				ctx.lineTo((0, _helper.randomNum)(0, width), (0, _helper.randomNum)(0, height));
				ctx.stroke();
			}
		}
	}]);
	return Line;
}();

exports.Line = Line;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Point = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helper = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Point = function () {
	function Point() {
		(0, _classCallCheck3.default)(this, Point);
	}

	(0, _createClass3.default)(Point, [{
		key: 'draw',
		value: function draw(ctx, width, height) {
			for (var i = 0; i < 100; i++) {
				ctx.fillStyle = (0, _helper.randomColor)(0, 255);
				ctx.beginPath();
				ctx.arc((0, _helper.randomNum)(0, width), (0, _helper.randomNum)(0, height), 1, 0, 2 * Math.PI);
				ctx.fill();
			}
		}
	}]);
	return Point;
}();

exports.Point = Point;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Sence = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _helper = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sence = function () {
	function Sence() {
		(0, _classCallCheck3.default)(this, Sence);
	}

	(0, _createClass3.default)(Sence, [{
		key: 'draw',
		value: function draw(ctx, width, height) {
			ctx.fillStyle = (0, _helper.randomColor)(180, 240);
			ctx.fillRect(0, 0, width, height);
		}
	}]);
	return Sence;
}();

exports.Sence = Sence;

/***/ })
/******/ ]);
});