/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/demo/demo.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/demo/demo.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".slider {\n  height: 4px;\n  width: 600px;\n  display: inline-block;\n  margin-left: 100px; }\n\n.slider_vertical {\n  height: 400px;\n  width: 4px;\n  margin-left: 100px; }\n\n.sliderBody {\n  height: 100%;\n  width: 100%;\n  background: grey;\n  border-radius: 4px;\n  position: relative;\n  box-sizing: border-box; }\n\n.label {\n  padding: 2px;\n  background: red;\n  color: white;\n  font-size: 12px;\n  text-align: center;\n  position: absolute; }\n\n.handler {\n  border-radius: 50%;\n  background: red;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  cursor: pointer; }\n\n.slider_vertical .handler {\n  left: -6px !important; }\n\n.slider_horizontal .handler {\n  top: -6px !important; }\n\n.selectedRange, .range_between {\n  position: absolute;\n  background: red; }\n\n.slider_horizontal .range_between {\n  bottom: 0 !important;\n  height: 100% !important; }\n\n.slider_vertical .range_between {\n  left: 0 !important;\n  width: 100% !important; }\n\n.slider_horizontal .selectedRange {\n  top: 0 !important;\n  left: 0 !important;\n  height: 100% !important; }\n\n.slider_vertical .selectedRange {\n  left: 0 !important;\n  width: 100% !important;\n  bottom: 0 !important; }\n\n.controlPanel {\n  padding: 50px;\n  margin-left: 15px;\n  border: 2px solid grey;\n  display: inline-block; }\n\n.stepValue {\n  display: block; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/demo/ControlPanel/ControlPanel.ts":
/*!***********************************************!*\
  !*** ./src/demo/ControlPanel/ControlPanel.ts ***!
  \***********************************************/
/*! exports provided: ControlPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPanel", function() { return ControlPanel; });
var cov_30164ndhk=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/ControlPanel/ControlPanel.ts',hash='ce4973659f8085f37f6ad0590702cfcc73e34a81',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/ControlPanel/ControlPanel.ts',statementMap:{'0':{start:{line:3,column:8},end:{line:3,column:30}},'1':{start:{line:4,column:8},end:{line:4,column:43}},'2':{start:{line:5,column:8},end:{line:5,column:59}},'3':{start:{line:6,column:8},end:{line:6,column:31}},'4':{start:{line:7,column:8},end:{line:7,column:32}},'5':{start:{line:8,column:8},end:{line:8,column:58}},'6':{start:{line:9,column:8},end:{line:9,column:37}},'7':{start:{line:10,column:8},end:{line:10,column:31}},'8':{start:{line:11,column:8},end:{line:11,column:35}},'9':{start:{line:12,column:8},end:{line:12,column:41}},'10':{start:{line:13,column:8},end:{line:13,column:25}},'11':{start:{line:14,column:8},end:{line:14,column:33}},'12':{start:{line:15,column:8},end:{line:15,column:32}},'13':{start:{line:16,column:8},end:{line:16,column:28}},'14':{start:{line:19,column:8},end:{line:19,column:57}},'15':{start:{line:20,column:8},end:{line:20,column:48}},'16':{start:{line:21,column:8},end:{line:21,column:34}},'17':{start:{line:22,column:8},end:{line:22,column:33}},'18':{start:{line:23,column:8},end:{line:23,column:31}},'19':{start:{line:24,column:8},end:{line:24,column:39}},'20':{start:{line:25,column:8},end:{line:25,column:33}},'21':{start:{line:26,column:8},end:{line:26,column:37}},'22':{start:{line:29,column:8},end:{line:29,column:107}},'23':{start:{line:29,column:43},end:{line:29,column:105}},'24':{start:{line:30,column:8},end:{line:30,column:106}},'25':{start:{line:30,column:42},end:{line:30,column:104}},'26':{start:{line:31,column:8},end:{line:31,column:78}},'27':{start:{line:32,column:8},end:{line:32,column:117}},'28':{start:{line:32,column:48},end:{line:32,column:115}},'29':{start:{line:33,column:8},end:{line:33,column:105}},'30':{start:{line:33,column:42},end:{line:33,column:103}},'31':{start:{line:34,column:8},end:{line:34,column:119}},'32':{start:{line:34,column:46},end:{line:34,column:117}},'33':{start:{line:37,column:8},end:{line:37,column:107}},'34':{start:{line:37,column:53},end:{line:37,column:104}},'35':{start:{line:38,column:8},end:{line:38,column:74}},'36':{start:{line:39,column:8},end:{line:41,column:9}},'37':{start:{line:40,column:12},end:{line:40,column:78}},'38':{start:{line:42,column:8},end:{line:42,column:60}},'39':{start:{line:43,column:8},end:{line:45,column:57}},'40':{start:{line:46,column:8},end:{line:51,column:9}},'41':{start:{line:47,column:12},end:{line:47,column:47}},'42':{start:{line:50,column:12},end:{line:50,column:47}},'43':{start:{line:52,column:8},end:{line:57,column:9}},'44':{start:{line:53,column:12},end:{line:53,column:51}},'45':{start:{line:56,column:12},end:{line:56,column:51}},'46':{start:{line:60,column:26},end:{line:60,column:79}},'47':{start:{line:60,column:57},end:{line:60,column:78}},'48':{start:{line:61,column:8},end:{line:61,column:40}},'49':{start:{line:64,column:26},end:{line:64,column:78}},'50':{start:{line:64,column:56},end:{line:64,column:77}},'51':{start:{line:65,column:8},end:{line:65,column:44}},'52':{start:{line:68,column:24},end:{line:68,column:54}},'53':{start:{line:69,column:8},end:{line:69,column:36}},'54':{start:{line:72,column:31},end:{line:72,column:79}},'55':{start:{line:73,column:8},end:{line:73,column:49}},'56':{start:{line:76,column:25},end:{line:76,column:67}},'57':{start:{line:77,column:8},end:{line:82,column:9}},'58':{start:{line:78,column:12},end:{line:78,column:41}},'59':{start:{line:81,column:12},end:{line:81,column:59}},'60':{start:{line:83,column:8},end:{line:83,column:41}},'61':{start:{line:86,column:27},end:{line:86,column:73}},'62':{start:{line:87,column:8},end:{line:87,column:44}},'63':{start:{line:90,column:8},end:{line:92,column:11}},'64':{start:{line:91,column:12},end:{line:91,column:97}},'65':{start:{line:91,column:56},end:{line:91,column:94}},'66':{start:{line:95,column:22},end:{line:95,column:49}},'67':{start:{line:96,column:8},end:{line:96,column:41}},'68':{start:{line:97,column:8},end:{line:97,column:57}},'69':{start:{line:98,column:25},end:{line:98,column:56}},'70':{start:{line:99,column:25},end:{line:99,column:56}},'71':{start:{line:100,column:8},end:{line:100,column:45}},'72':{start:{line:101,column:8},end:{line:101,column:45}},'73':{start:{line:102,column:8},end:{line:102,column:33}},'74':{start:{line:103,column:8},end:{line:103,column:33}},'75':{start:{line:104,column:8},end:{line:104,column:44}},'76':{start:{line:105,column:8},end:{line:105,column:44}},'77':{start:{line:106,column:8},end:{line:106,column:50}},'78':{start:{line:109,column:8},end:{line:109,column:34}},'79':{start:{line:112,column:22},end:{line:112,column:49}},'80':{start:{line:113,column:8},end:{line:113,column:41}},'81':{start:{line:114,column:8},end:{line:114,column:46}},'82':{start:{line:115,column:28},end:{line:115,column:59}},'83':{start:{line:116,column:8},end:{line:116,column:50}},'84':{start:{line:117,column:8},end:{line:117,column:36}},'85':{start:{line:118,column:8},end:{line:118,column:47}},'86':{start:{line:119,column:8},end:{line:119,column:44}},'87':{start:{line:120,column:8},end:{line:129,column:9}},'88':{start:{line:121,column:29},end:{line:121,column:68}},'89':{start:{line:122,column:12},end:{line:123,column:52}},'90':{start:{line:123,column:16},end:{line:123,column:52}},'91':{start:{line:124,column:29},end:{line:124,column:60}},'92':{start:{line:125,column:12},end:{line:125,column:64}},'93':{start:{line:126,column:12},end:{line:126,column:37}},'94':{start:{line:127,column:12},end:{line:127,column:48}},'95':{start:{line:128,column:12},end:{line:128,column:45}},'96':{start:{line:132,column:8},end:{line:132,column:33}},'97':{start:{line:135,column:22},end:{line:135,column:49}},'98':{start:{line:136,column:8},end:{line:136,column:41}},'99':{start:{line:137,column:8},end:{line:137,column:42}},'100':{start:{line:138,column:8},end:{line:138,column:51}},'101':{start:{line:139,column:8},end:{line:139,column:40}},'102':{start:{line:140,column:8},end:{line:140,column:51}},'103':{start:{line:143,column:8},end:{line:143,column:31}},'104':{start:{line:146,column:22},end:{line:146,column:49}},'105':{start:{line:147,column:8},end:{line:147,column:41}},'106':{start:{line:148,column:8},end:{line:148,column:56}},'107':{start:{line:149,column:30},end:{line:149,column:61}},'108':{start:{line:150,column:8},end:{line:150,column:44}},'109':{start:{line:151,column:32},end:{line:151,column:63}},'110':{start:{line:152,column:8},end:{line:152,column:48}},'111':{start:{line:153,column:8},end:{line:153,column:67}},'112':{start:{line:154,column:8},end:{line:158,column:11}},'113':{start:{line:155,column:12},end:{line:155,column:33}},'114':{start:{line:156,column:12},end:{line:156,column:39}},'115':{start:{line:157,column:12},end:{line:157,column:45}},'116':{start:{line:161,column:8},end:{line:161,column:39}},'117':{start:{line:164,column:22},end:{line:164,column:49}},'118':{start:{line:165,column:8},end:{line:165,column:41}},'119':{start:{line:166,column:8},end:{line:166,column:47}},'120':{start:{line:167,column:28},end:{line:167,column:59}},'121':{start:{line:168,column:8},end:{line:168,column:40}},'122':{start:{line:169,column:28},end:{line:169,column:59}},'123':{start:{line:170,column:8},end:{line:170,column:40}},'124':{start:{line:171,column:8},end:{line:171,column:55}},'125':{start:{line:172,column:8},end:{line:176,column:11}},'126':{start:{line:173,column:12},end:{line:173,column:33}},'127':{start:{line:174,column:12},end:{line:174,column:33}},'128':{start:{line:175,column:12},end:{line:175,column:45}},'129':{start:{line:179,column:8},end:{line:179,column:33}},'130':{start:{line:182,column:22},end:{line:182,column:49}},'131':{start:{line:183,column:8},end:{line:183,column:41}},'132':{start:{line:184,column:8},end:{line:184,column:62}},'133':{start:{line:185,column:31},end:{line:185,column:62}},'134':{start:{line:186,column:8},end:{line:186,column:46}},'135':{start:{line:187,column:31},end:{line:187,column:62}},'136':{start:{line:188,column:8},end:{line:188,column:46}},'137':{start:{line:189,column:8},end:{line:189,column:65}},'138':{start:{line:190,column:8},end:{line:194,column:11}},'139':{start:{line:191,column:12},end:{line:191,column:33}},'140':{start:{line:192,column:12},end:{line:192,column:33}},'141':{start:{line:193,column:12},end:{line:193,column:45}},'142':{start:{line:197,column:8},end:{line:197,column:37}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:2,column:4},end:{line:2,column:5}},loc:{start:{line:2,column:24},end:{line:17,column:5}},line:2},'1':{name:'(anonymous_1)',decl:{start:{line:18,column:4},end:{line:18,column:5}},loc:{start:{line:18,column:16},end:{line:27,column:5}},line:18},'2':{name:'(anonymous_2)',decl:{start:{line:28,column:4},end:{line:28,column:5}},loc:{start:{line:28,column:24},end:{line:35,column:5}},line:28},'3':{name:'(anonymous_3)',decl:{start:{line:29,column:34},end:{line:29,column:35}},loc:{start:{line:29,column:43},end:{line:29,column:105}},line:29},'4':{name:'(anonymous_4)',decl:{start:{line:30,column:33},end:{line:30,column:34}},loc:{start:{line:30,column:42},end:{line:30,column:104}},line:30},'5':{name:'(anonymous_5)',decl:{start:{line:32,column:39},end:{line:32,column:40}},loc:{start:{line:32,column:48},end:{line:32,column:115}},line:32},'6':{name:'(anonymous_6)',decl:{start:{line:33,column:33},end:{line:33,column:34}},loc:{start:{line:33,column:42},end:{line:33,column:103}},line:33},'7':{name:'(anonymous_7)',decl:{start:{line:34,column:37},end:{line:34,column:38}},loc:{start:{line:34,column:46},end:{line:34,column:117}},line:34},'8':{name:'(anonymous_8)',decl:{start:{line:36,column:4},end:{line:36,column:5}},loc:{start:{line:36,column:23},end:{line:58,column:5}},line:36},'9':{name:'(anonymous_9)',decl:{start:{line:37,column:34},end:{line:37,column:35}},loc:{start:{line:37,column:53},end:{line:37,column:104}},line:37},'10':{name:'(anonymous_10)',decl:{start:{line:59,column:4},end:{line:59,column:5}},loc:{start:{line:59,column:19},end:{line:62,column:5}},line:59},'11':{name:'(anonymous_11)',decl:{start:{line:60,column:48},end:{line:60,column:49}},loc:{start:{line:60,column:57},end:{line:60,column:78}},line:60},'12':{name:'(anonymous_12)',decl:{start:{line:63,column:4},end:{line:63,column:5}},loc:{start:{line:63,column:19},end:{line:66,column:5}},line:63},'13':{name:'(anonymous_13)',decl:{start:{line:64,column:47},end:{line:64,column:48}},loc:{start:{line:64,column:56},end:{line:64,column:77}},line:64},'14':{name:'(anonymous_14)',decl:{start:{line:67,column:4},end:{line:67,column:5}},loc:{start:{line:67,column:17},end:{line:70,column:5}},line:67},'15':{name:'(anonymous_15)',decl:{start:{line:71,column:4},end:{line:71,column:5}},loc:{start:{line:71,column:24},end:{line:74,column:5}},line:71},'16':{name:'(anonymous_16)',decl:{start:{line:75,column:4},end:{line:75,column:5}},loc:{start:{line:75,column:18},end:{line:84,column:5}},line:75},'17':{name:'(anonymous_17)',decl:{start:{line:85,column:4},end:{line:85,column:5}},loc:{start:{line:85,column:28},end:{line:88,column:5}},line:85},'18':{name:'(anonymous_18)',decl:{start:{line:89,column:4},end:{line:89,column:5}},loc:{start:{line:89,column:19},end:{line:93,column:5}},line:89},'19':{name:'(anonymous_19)',decl:{start:{line:90,column:40},end:{line:90,column:41}},loc:{start:{line:90,column:52},end:{line:92,column:9}},line:90},'20':{name:'(anonymous_20)',decl:{start:{line:91,column:37},end:{line:91,column:38}},loc:{start:{line:91,column:56},end:{line:91,column:94}},line:91},'21':{name:'(anonymous_21)',decl:{start:{line:94,column:4},end:{line:94,column:5}},loc:{start:{line:94,column:25},end:{line:107,column:5}},line:94},'22':{name:'(anonymous_22)',decl:{start:{line:108,column:4},end:{line:108,column:5}},loc:{start:{line:108,column:23},end:{line:110,column:5}},line:108},'23':{name:'(anonymous_23)',decl:{start:{line:111,column:4},end:{line:111,column:5}},loc:{start:{line:111,column:24},end:{line:130,column:5}},line:111},'24':{name:'(anonymous_24)',decl:{start:{line:131,column:4},end:{line:131,column:5}},loc:{start:{line:131,column:22},end:{line:133,column:5}},line:131},'25':{name:'(anonymous_25)',decl:{start:{line:134,column:4},end:{line:134,column:5}},loc:{start:{line:134,column:22},end:{line:141,column:5}},line:134},'26':{name:'(anonymous_26)',decl:{start:{line:142,column:4},end:{line:142,column:5}},loc:{start:{line:142,column:20},end:{line:144,column:5}},line:142},'27':{name:'(anonymous_27)',decl:{start:{line:145,column:4},end:{line:145,column:5}},loc:{start:{line:145,column:30},end:{line:159,column:5}},line:145},'28':{name:'(anonymous_28)',decl:{start:{line:154,column:40},end:{line:154,column:41}},loc:{start:{line:154,column:49},end:{line:158,column:9}},line:154},'29':{name:'(anonymous_29)',decl:{start:{line:160,column:4},end:{line:160,column:5}},loc:{start:{line:160,column:28},end:{line:162,column:5}},line:160},'30':{name:'(anonymous_30)',decl:{start:{line:163,column:4},end:{line:163,column:5}},loc:{start:{line:163,column:24},end:{line:177,column:5}},line:163},'31':{name:'(anonymous_31)',decl:{start:{line:172,column:34},end:{line:172,column:35}},loc:{start:{line:172,column:43},end:{line:176,column:9}},line:172},'32':{name:'(anonymous_32)',decl:{start:{line:178,column:4},end:{line:178,column:5}},loc:{start:{line:178,column:22},end:{line:180,column:5}},line:178},'33':{name:'(anonymous_33)',decl:{start:{line:181,column:4},end:{line:181,column:5}},loc:{start:{line:181,column:28},end:{line:195,column:5}},line:181},'34':{name:'(anonymous_34)',decl:{start:{line:190,column:38},end:{line:190,column:39}},loc:{start:{line:190,column:47},end:{line:194,column:9}},line:190},'35':{name:'(anonymous_35)',decl:{start:{line:196,column:4},end:{line:196,column:5}},loc:{start:{line:196,column:26},end:{line:198,column:5}},line:196}},branchMap:{'0':{loc:{start:{line:39,column:8},end:{line:41,column:9}},type:'if',locations:[{start:{line:39,column:8},end:{line:41,column:9}},{start:{line:39,column:8},end:{line:41,column:9}}],line:39},'1':{loc:{start:{line:43,column:8},end:{line:45,column:56}},type:'cond-expr',locations:[{start:{line:44,column:15},end:{line:44,column:55}},{start:{line:45,column:15},end:{line:45,column:55}}],line:43},'2':{loc:{start:{line:46,column:8},end:{line:51,column:9}},type:'if',locations:[{start:{line:46,column:8},end:{line:51,column:9}},{start:{line:46,column:8},end:{line:51,column:9}}],line:46},'3':{loc:{start:{line:52,column:8},end:{line:57,column:9}},type:'if',locations:[{start:{line:52,column:8},end:{line:57,column:9}},{start:{line:52,column:8},end:{line:57,column:9}}],line:52},'4':{loc:{start:{line:72,column:31},end:{line:72,column:79}},type:'cond-expr',locations:[{start:{line:72,column:67},end:{line:72,column:71}},{start:{line:72,column:74},end:{line:72,column:79}}],line:72},'5':{loc:{start:{line:76,column:25},end:{line:76,column:67}},type:'cond-expr',locations:[{start:{line:76,column:55},end:{line:76,column:59}},{start:{line:76,column:62},end:{line:76,column:67}}],line:76},'6':{loc:{start:{line:77,column:8},end:{line:82,column:9}},type:'if',locations:[{start:{line:77,column:8},end:{line:82,column:9}},{start:{line:77,column:8},end:{line:82,column:9}}],line:77},'7':{loc:{start:{line:86,column:27},end:{line:86,column:73}},type:'cond-expr',locations:[{start:{line:86,column:61},end:{line:86,column:65}},{start:{line:86,column:68},end:{line:86,column:73}}],line:86},'8':{loc:{start:{line:120,column:8},end:{line:129,column:9}},type:'if',locations:[{start:{line:120,column:8},end:{line:129,column:9}},{start:{line:120,column:8},end:{line:129,column:9}}],line:120},'9':{loc:{start:{line:122,column:12},end:{line:123,column:52}},type:'if',locations:[{start:{line:122,column:12},end:{line:123,column:52}},{start:{line:122,column:12},end:{line:123,column:52}}],line:122}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':0,'73':0,'74':0,'75':0,'76':0,'77':0,'78':0,'79':0,'80':0,'81':0,'82':0,'83':0,'84':0,'85':0,'86':0,'87':0,'88':0,'89':0,'90':0,'91':0,'92':0,'93':0,'94':0,'95':0,'96':0,'97':0,'98':0,'99':0,'100':0,'101':0,'102':0,'103':0,'104':0,'105':0,'106':0,'107':0,'108':0,'109':0,'110':0,'111':0,'112':0,'113':0,'114':0,'115':0,'116':0,'117':0,'118':0,'119':0,'120':0,'121':0,'122':0,'123':0,'124':0,'125':0,'126':0,'127':0,'128':0,'129':0,'130':0,'131':0,'132':0,'133':0,'134':0,'135':0,'136':0,'137':0,'138':0,'139':0,'140':0,'141':0,'142':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0]},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/ControlPanel/ControlPanel.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/ControlPanel/ControlPanel.ts'],names:[],mappings:'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',sourcesContent:['import { Facade } from \'../../presenter/Facade\';\n\nclass ControlPanel {\n  private _slider: Facade;\n  private _parent: HTMLElement;\n  private _controlPanel: HTMLElement;\n  private _minMaxInputs: HTMLInputElement[];\n  private _valueInputs: HTMLInputElement[];\n  private _stepInput: HTMLInputElement;\n  private _orientationRadios: HTMLInputElement[];\n  private _rangeRadios: HTMLInputElement[];\n  private _showLabelRadios: HTMLInputElement[];\n  private _hasRange: boolean;\n\n  constructor(slider: Facade) {\n    this._slider = slider;\n    this._parent = this._slider.parent;\n    this._controlPanel = document.createElement(\'div\');\n    this._valueInputs = [];\n    this._minMaxInputs = [];\n    this._stepInput = document.createElement(\'input\');\n    this._orientationRadios = [];\n    this._rangeRadios = [];\n    this._showLabelRadios = [];\n    this._hasRange = slider.hasRange;\n\n    this.panelInit();\n    this.setEventListeners();\n    this.getSliderOptions();\n    this.updateValues();\n  }\n\n  private panelInit() {\n    this._controlPanel.classList.add(\'controlPanel\');\n    this._parent.before(this._controlPanel);\n    this.createMaxMinInputs();\n    this.createValueInputs();\n    this.createStepInput();\n    this.createOrientationRadios();\n    this.createRangeRadios();\n    this.createShowLabelRadios();\n  }\n\n  private setEventListeners() {\n    this.minMaxInputs.forEach(input =>\n      input.addEventListener(\'change\', this.changeMinMax.bind(this)),\n    );\n    this.valueInputs.forEach(input =>\n      input.addEventListener(\'change\', this.changeValues.bind(this)),\n    );\n    this.stepInput.addEventListener(\'change\', this.changeStep.bind(this));\n    this.orientationRadios.forEach(radio =>\n      radio.addEventListener(\'change\', this.changeOrientation.bind(this)),\n    );\n    this.rangeRadios.forEach(radio =>\n      radio.addEventListener(\'change\', this.changeRange.bind(this)),\n    );\n    this.showLabelRadios.forEach(radio =>\n      radio.addEventListener(\'change\', this.changeLabelVisibility.bind(this)),\n    );\n  }\n\n  getSliderOptions() {\n    this.minMaxInputs.forEach(\n      (input, index) => (input.value = this._slider.minMax[index].toString()),\n    );\n    this.valueInputs[0].value = this._slider.rangeValue[0].toString();\n    if (this.valueInputs[1]) {\n      this.valueInputs[1].value = this._slider.rangeValue[1].toString();\n    }\n    this.stepInput.value = this._slider.step.toString();\n    this._slider.isVertical\n      ? (this.orientationRadios[0].checked = true)\n      : (this.orientationRadios[1].checked = true);\n\n    if (this._slider.hasRange) {\n      this.rangeRadios[1].checked = true;\n    } else {\n      this.rangeRadios[0].checked = true;\n    }\n    if (this._slider.hasLabels) {\n      this.showLabelRadios[0].checked = true;\n    } else {\n      this.showLabelRadios[1].checked = true;\n    }\n  }\n\n  private changeMinMax() {\n    const newMinMax = this.minMaxInputs.map(input => parseInt(input.value));\n    this._slider.minMax = newMinMax;\n  }\n\n  private changeValues() {\n    const newValues = this.valueInputs.map(input => parseInt(input.value));\n    this._slider.rangeValue = newValues;\n  }\n  private changeStep() {\n    const newStep = parseInt(this.stepInput.value);\n    this._slider.step = newStep;\n  }\n\n  private changeOrientation() {\n    const newOrientation = this.orientationRadios[0].checked ? true : false;\n    this._slider.isVertical = newOrientation;\n  }\n\n  private changeRange() {\n    const newRange = this.rangeRadios[1].checked ? true : false;\n    if (!newRange) {\n      this.valueInputs[1].remove();\n    } else {\n      this.valueInputs[0].after(this.valueInputs[1]);\n    }\n    this._slider.hasRange = newRange;\n  }\n\n  private changeLabelVisibility() {\n    const showLabels = this.showLabelRadios[0].checked ? true : false;\n    this._slider.hasLabels = showLabels;\n  }\n\n  private updateValues() {\n    this._slider.observer.subscribe((values: number[]) => {\n      this.valueInputs.forEach((input, index) => (input.value = values[index].toString()));\n    });\n  }\n\n  private createMaxMinInputs() {\n    const title = document.createElement(\'p\');\n    this._controlPanel.append(title);\n    title.innerText = \'\u041C\u0438\u043D. \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435/\u041C\u0430\u043A\u0441. \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\';\n    const inputMin = document.createElement(\'input\');\n    const inputMax = document.createElement(\'input\');\n    inputMin.classList.add(\'limitValue\');\n    inputMax.classList.add(\'limitValue\');\n    inputMin.type = \'number\';\n    inputMax.type = \'number\';\n    this._controlPanel.append(inputMin);\n    this._controlPanel.append(inputMax);\n    this._minMaxInputs = [inputMin, inputMax];\n  }\n\n  get minMaxInputs() {\n    return this._minMaxInputs;\n  }\n\n  private createValueInputs() {\n    const title = document.createElement(\'p\');\n    this._controlPanel.append(title);\n    title.innerText = \'\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0431\u0435\u0433\u0443\u043D\u043A\u043E\u0432\';\n    const inputSingle = document.createElement(\'input\');\n    inputSingle.classList.add(\'handlerValue\');\n    inputSingle.type = \'number\';\n    this._controlPanel.append(inputSingle);\n    this._valueInputs.push(inputSingle);\n    if (this._hasRange) {\n      const inputMin = document.querySelector(\'.handlerValue\');\n      if (inputMin) inputMin.classList.add(\'value_min\');\n      const inputMax = document.createElement(\'input\');\n      inputMax.classList.add(\'handlerValue\', \'value_max\');\n      inputMax.type = \'number\';\n      this._controlPanel.append(inputMax);\n      this._valueInputs.push(inputMax);\n    }\n  }\n  get valueInputs() {\n    return this._valueInputs;\n  }\n\n  private createStepInput() {\n    const title = document.createElement(\'p\');\n    this._controlPanel.append(title);\n    title.innerText = \'\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0448\u0430\u0433\u0430\';\n    this._stepInput.classList.add(\'stepValue\');\n    this._stepInput.type = \'number\';\n    this._controlPanel.append(this._stepInput);\n  }\n\n  get stepInput() {\n    return this._stepInput;\n  }\n\n  private createOrientationRadios() {\n    const title = document.createElement(\'p\');\n    this._controlPanel.append(title);\n    title.innerText = \'\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439/\u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0439\';\n    const radioVertical = document.createElement(\'input\');\n    radioVertical.id = \'radio_vertical\';\n    const radioHorizontal = document.createElement(\'input\');\n    radioHorizontal.id = \'radio_horizontal\';\n    this._orientationRadios = [radioVertical, radioHorizontal];\n    this._orientationRadios.forEach(radio => {\n      radio.type = \'radio\';\n      radio.name = \'orientation\';\n      this._controlPanel.append(radio);\n    });\n  }\n\n  get orientationRadios() {\n    return this._orientationRadios;\n  }\n\n  private createRangeRadios() {\n    const title = document.createElement(\'p\');\n    this._controlPanel.append(title);\n    title.innerText = \'\u041E\u0434\u0438\u043D\u043E\u0447\u043D\u043E\u0435/\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\';\n    const radioSingle = document.createElement(\'input\');\n    radioSingle.id = \'radio_single\';\n    const radioDouble = document.createElement(\'input\');\n    radioDouble.id = \'radio_double\';\n    this._rangeRadios = [radioSingle, radioDouble];\n    this._rangeRadios.forEach(radio => {\n      radio.type = \'radio\';\n      radio.name = \'range\';\n      this._controlPanel.append(radio);\n    });\n  }\n\n  get rangeRadios() {\n    return this._rangeRadios;\n  }\n\n  private createShowLabelRadios() {\n    const title = document.createElement(\'p\');\n    this._controlPanel.append(title);\n    title.innerText = \'\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F/\u0421\u043A\u0440\u044B\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\';\n    const radioShowLabel = document.createElement(\'input\');\n    radioShowLabel.id = \'radio_showLabel\';\n    const radioHideLabel = document.createElement(\'input\');\n    radioHideLabel.id = \'radio_hideLabel\';\n    this._showLabelRadios = [radioShowLabel, radioHideLabel];\n    this._showLabelRadios.forEach(radio => {\n      radio.type = \'radio\';\n      radio.name = \'label\';\n      this._controlPanel.append(radio);\n    });\n  }\n  get showLabelRadios() {\n    return this._showLabelRadios;\n  }\n}\n\nexport { ControlPanel };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class ControlPanel{constructor(slider){cov_30164ndhk.f[0]++;cov_30164ndhk.s[0]++;this._slider=slider;cov_30164ndhk.s[1]++;this._parent=this._slider.parent;cov_30164ndhk.s[2]++;this._controlPanel=document.createElement('div');cov_30164ndhk.s[3]++;this._valueInputs=[];cov_30164ndhk.s[4]++;this._minMaxInputs=[];cov_30164ndhk.s[5]++;this._stepInput=document.createElement('input');cov_30164ndhk.s[6]++;this._orientationRadios=[];cov_30164ndhk.s[7]++;this._rangeRadios=[];cov_30164ndhk.s[8]++;this._showLabelRadios=[];cov_30164ndhk.s[9]++;this._hasRange=slider.hasRange;cov_30164ndhk.s[10]++;this.panelInit();cov_30164ndhk.s[11]++;this.setEventListeners();cov_30164ndhk.s[12]++;this.getSliderOptions();cov_30164ndhk.s[13]++;this.updateValues();}panelInit(){cov_30164ndhk.f[1]++;cov_30164ndhk.s[14]++;this._controlPanel.classList.add('controlPanel');cov_30164ndhk.s[15]++;this._parent.before(this._controlPanel);cov_30164ndhk.s[16]++;this.createMaxMinInputs();cov_30164ndhk.s[17]++;this.createValueInputs();cov_30164ndhk.s[18]++;this.createStepInput();cov_30164ndhk.s[19]++;this.createOrientationRadios();cov_30164ndhk.s[20]++;this.createRangeRadios();cov_30164ndhk.s[21]++;this.createShowLabelRadios();}setEventListeners(){cov_30164ndhk.f[2]++;cov_30164ndhk.s[22]++;this.minMaxInputs.forEach(input=>{cov_30164ndhk.f[3]++;cov_30164ndhk.s[23]++;return input.addEventListener('change',this.changeMinMax.bind(this));});cov_30164ndhk.s[24]++;this.valueInputs.forEach(input=>{cov_30164ndhk.f[4]++;cov_30164ndhk.s[25]++;return input.addEventListener('change',this.changeValues.bind(this));});cov_30164ndhk.s[26]++;this.stepInput.addEventListener('change',this.changeStep.bind(this));cov_30164ndhk.s[27]++;this.orientationRadios.forEach(radio=>{cov_30164ndhk.f[5]++;cov_30164ndhk.s[28]++;return radio.addEventListener('change',this.changeOrientation.bind(this));});cov_30164ndhk.s[29]++;this.rangeRadios.forEach(radio=>{cov_30164ndhk.f[6]++;cov_30164ndhk.s[30]++;return radio.addEventListener('change',this.changeRange.bind(this));});cov_30164ndhk.s[31]++;this.showLabelRadios.forEach(radio=>{cov_30164ndhk.f[7]++;cov_30164ndhk.s[32]++;return radio.addEventListener('change',this.changeLabelVisibility.bind(this));});}getSliderOptions(){cov_30164ndhk.f[8]++;cov_30164ndhk.s[33]++;this.minMaxInputs.forEach((input,index)=>{cov_30164ndhk.f[9]++;cov_30164ndhk.s[34]++;return input.value=this._slider.minMax[index].toString();});cov_30164ndhk.s[35]++;this.valueInputs[0].value=this._slider.rangeValue[0].toString();cov_30164ndhk.s[36]++;if(this.valueInputs[1]){cov_30164ndhk.b[0][0]++;cov_30164ndhk.s[37]++;this.valueInputs[1].value=this._slider.rangeValue[1].toString();}else{cov_30164ndhk.b[0][1]++;}cov_30164ndhk.s[38]++;this.stepInput.value=this._slider.step.toString();cov_30164ndhk.s[39]++;this._slider.isVertical?(cov_30164ndhk.b[1][0]++,this.orientationRadios[0].checked=true):(cov_30164ndhk.b[1][1]++,this.orientationRadios[1].checked=true);cov_30164ndhk.s[40]++;if(this._slider.hasRange){cov_30164ndhk.b[2][0]++;cov_30164ndhk.s[41]++;this.rangeRadios[1].checked=true;}else{cov_30164ndhk.b[2][1]++;cov_30164ndhk.s[42]++;this.rangeRadios[0].checked=true;}cov_30164ndhk.s[43]++;if(this._slider.hasLabels){cov_30164ndhk.b[3][0]++;cov_30164ndhk.s[44]++;this.showLabelRadios[0].checked=true;}else{cov_30164ndhk.b[3][1]++;cov_30164ndhk.s[45]++;this.showLabelRadios[1].checked=true;}}changeMinMax(){cov_30164ndhk.f[10]++;const newMinMax=(cov_30164ndhk.s[46]++,this.minMaxInputs.map(input=>{cov_30164ndhk.f[11]++;cov_30164ndhk.s[47]++;return parseInt(input.value);}));cov_30164ndhk.s[48]++;this._slider.minMax=newMinMax;}changeValues(){cov_30164ndhk.f[12]++;const newValues=(cov_30164ndhk.s[49]++,this.valueInputs.map(input=>{cov_30164ndhk.f[13]++;cov_30164ndhk.s[50]++;return parseInt(input.value);}));cov_30164ndhk.s[51]++;this._slider.rangeValue=newValues;}changeStep(){cov_30164ndhk.f[14]++;const newStep=(cov_30164ndhk.s[52]++,parseInt(this.stepInput.value));cov_30164ndhk.s[53]++;this._slider.step=newStep;}changeOrientation(){cov_30164ndhk.f[15]++;const newOrientation=(cov_30164ndhk.s[54]++,this.orientationRadios[0].checked?(cov_30164ndhk.b[4][0]++,true):(cov_30164ndhk.b[4][1]++,false));cov_30164ndhk.s[55]++;this._slider.isVertical=newOrientation;}changeRange(){cov_30164ndhk.f[16]++;const newRange=(cov_30164ndhk.s[56]++,this.rangeRadios[1].checked?(cov_30164ndhk.b[5][0]++,true):(cov_30164ndhk.b[5][1]++,false));cov_30164ndhk.s[57]++;if(!newRange){cov_30164ndhk.b[6][0]++;cov_30164ndhk.s[58]++;this.valueInputs[1].remove();}else{cov_30164ndhk.b[6][1]++;cov_30164ndhk.s[59]++;this.valueInputs[0].after(this.valueInputs[1]);}cov_30164ndhk.s[60]++;this._slider.hasRange=newRange;}changeLabelVisibility(){cov_30164ndhk.f[17]++;const showLabels=(cov_30164ndhk.s[61]++,this.showLabelRadios[0].checked?(cov_30164ndhk.b[7][0]++,true):(cov_30164ndhk.b[7][1]++,false));cov_30164ndhk.s[62]++;this._slider.hasLabels=showLabels;}updateValues(){cov_30164ndhk.f[18]++;cov_30164ndhk.s[63]++;this._slider.observer.subscribe(values=>{cov_30164ndhk.f[19]++;cov_30164ndhk.s[64]++;this.valueInputs.forEach((input,index)=>{cov_30164ndhk.f[20]++;cov_30164ndhk.s[65]++;return input.value=values[index].toString();});});}createMaxMinInputs(){cov_30164ndhk.f[21]++;const title=(cov_30164ndhk.s[66]++,document.createElement('p'));cov_30164ndhk.s[67]++;this._controlPanel.append(title);cov_30164ndhk.s[68]++;title.innerText='Мин. значение/Макс. значение';const inputMin=(cov_30164ndhk.s[69]++,document.createElement('input'));const inputMax=(cov_30164ndhk.s[70]++,document.createElement('input'));cov_30164ndhk.s[71]++;inputMin.classList.add('limitValue');cov_30164ndhk.s[72]++;inputMax.classList.add('limitValue');cov_30164ndhk.s[73]++;inputMin.type='number';cov_30164ndhk.s[74]++;inputMax.type='number';cov_30164ndhk.s[75]++;this._controlPanel.append(inputMin);cov_30164ndhk.s[76]++;this._controlPanel.append(inputMax);cov_30164ndhk.s[77]++;this._minMaxInputs=[inputMin,inputMax];}get minMaxInputs(){cov_30164ndhk.f[22]++;cov_30164ndhk.s[78]++;return this._minMaxInputs;}createValueInputs(){cov_30164ndhk.f[23]++;const title=(cov_30164ndhk.s[79]++,document.createElement('p'));cov_30164ndhk.s[80]++;this._controlPanel.append(title);cov_30164ndhk.s[81]++;title.innerText='Значение бегунков';const inputSingle=(cov_30164ndhk.s[82]++,document.createElement('input'));cov_30164ndhk.s[83]++;inputSingle.classList.add('handlerValue');cov_30164ndhk.s[84]++;inputSingle.type='number';cov_30164ndhk.s[85]++;this._controlPanel.append(inputSingle);cov_30164ndhk.s[86]++;this._valueInputs.push(inputSingle);cov_30164ndhk.s[87]++;if(this._hasRange){cov_30164ndhk.b[8][0]++;const inputMin=(cov_30164ndhk.s[88]++,document.querySelector('.handlerValue'));cov_30164ndhk.s[89]++;if(inputMin){cov_30164ndhk.b[9][0]++;cov_30164ndhk.s[90]++;inputMin.classList.add('value_min');}else{cov_30164ndhk.b[9][1]++;}const inputMax=(cov_30164ndhk.s[91]++,document.createElement('input'));cov_30164ndhk.s[92]++;inputMax.classList.add('handlerValue','value_max');cov_30164ndhk.s[93]++;inputMax.type='number';cov_30164ndhk.s[94]++;this._controlPanel.append(inputMax);cov_30164ndhk.s[95]++;this._valueInputs.push(inputMax);}else{cov_30164ndhk.b[8][1]++;}}get valueInputs(){cov_30164ndhk.f[24]++;cov_30164ndhk.s[96]++;return this._valueInputs;}createStepInput(){cov_30164ndhk.f[25]++;const title=(cov_30164ndhk.s[97]++,document.createElement('p'));cov_30164ndhk.s[98]++;this._controlPanel.append(title);cov_30164ndhk.s[99]++;title.innerText='Значение шага';cov_30164ndhk.s[100]++;this._stepInput.classList.add('stepValue');cov_30164ndhk.s[101]++;this._stepInput.type='number';cov_30164ndhk.s[102]++;this._controlPanel.append(this._stepInput);}get stepInput(){cov_30164ndhk.f[26]++;cov_30164ndhk.s[103]++;return this._stepInput;}createOrientationRadios(){cov_30164ndhk.f[27]++;const title=(cov_30164ndhk.s[104]++,document.createElement('p'));cov_30164ndhk.s[105]++;this._controlPanel.append(title);cov_30164ndhk.s[106]++;title.innerText='Вертикальный/горизонтальный';const radioVertical=(cov_30164ndhk.s[107]++,document.createElement('input'));cov_30164ndhk.s[108]++;radioVertical.id='radio_vertical';const radioHorizontal=(cov_30164ndhk.s[109]++,document.createElement('input'));cov_30164ndhk.s[110]++;radioHorizontal.id='radio_horizontal';cov_30164ndhk.s[111]++;this._orientationRadios=[radioVertical,radioHorizontal];cov_30164ndhk.s[112]++;this._orientationRadios.forEach(radio=>{cov_30164ndhk.f[28]++;cov_30164ndhk.s[113]++;radio.type='radio';cov_30164ndhk.s[114]++;radio.name='orientation';cov_30164ndhk.s[115]++;this._controlPanel.append(radio);});}get orientationRadios(){cov_30164ndhk.f[29]++;cov_30164ndhk.s[116]++;return this._orientationRadios;}createRangeRadios(){cov_30164ndhk.f[30]++;const title=(cov_30164ndhk.s[117]++,document.createElement('p'));cov_30164ndhk.s[118]++;this._controlPanel.append(title);cov_30164ndhk.s[119]++;title.innerText='Одиночное/интервал';const radioSingle=(cov_30164ndhk.s[120]++,document.createElement('input'));cov_30164ndhk.s[121]++;radioSingle.id='radio_single';const radioDouble=(cov_30164ndhk.s[122]++,document.createElement('input'));cov_30164ndhk.s[123]++;radioDouble.id='radio_double';cov_30164ndhk.s[124]++;this._rangeRadios=[radioSingle,radioDouble];cov_30164ndhk.s[125]++;this._rangeRadios.forEach(radio=>{cov_30164ndhk.f[31]++;cov_30164ndhk.s[126]++;radio.type='radio';cov_30164ndhk.s[127]++;radio.name='range';cov_30164ndhk.s[128]++;this._controlPanel.append(radio);});}get rangeRadios(){cov_30164ndhk.f[32]++;cov_30164ndhk.s[129]++;return this._rangeRadios;}createShowLabelRadios(){cov_30164ndhk.f[33]++;const title=(cov_30164ndhk.s[130]++,document.createElement('p'));cov_30164ndhk.s[131]++;this._controlPanel.append(title);cov_30164ndhk.s[132]++;title.innerText='Показать значения/Скрыть значения';const radioShowLabel=(cov_30164ndhk.s[133]++,document.createElement('input'));cov_30164ndhk.s[134]++;radioShowLabel.id='radio_showLabel';const radioHideLabel=(cov_30164ndhk.s[135]++,document.createElement('input'));cov_30164ndhk.s[136]++;radioHideLabel.id='radio_hideLabel';cov_30164ndhk.s[137]++;this._showLabelRadios=[radioShowLabel,radioHideLabel];cov_30164ndhk.s[138]++;this._showLabelRadios.forEach(radio=>{cov_30164ndhk.f[34]++;cov_30164ndhk.s[139]++;radio.type='radio';cov_30164ndhk.s[140]++;radio.name='label';cov_30164ndhk.s[141]++;this._controlPanel.append(radio);});}get showLabelRadios(){cov_30164ndhk.f[35]++;cov_30164ndhk.s[142]++;return this._showLabelRadios;}}

/***/ }),

/***/ "./src/demo/SliderInit.ts":
/*!********************************!*\
  !*** ./src/demo/SliderInit.ts ***!
  \********************************/
/*! exports provided: SliderInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderInit", function() { return SliderInit; });
/* harmony import */ var _presenter_Facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../presenter/Facade */ "./src/presenter/Facade.ts");
/* harmony import */ var _ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControlPanel/ControlPanel */ "./src/demo/ControlPanel/ControlPanel.ts");
var cov_15ef0nlq19=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/SliderInit.ts',hash='2fc2a18843ab72da148e117a9d39daf53f11d6b0',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/SliderInit.ts',statementMap:{'0':{start:{line:5,column:8},end:{line:5,column:32}},'1':{start:{line:6,column:8},end:{line:6,column:53}},'2':{start:{line:7,column:8},end:{line:7,column:45}},'3':{start:{line:8,column:8},end:{line:8,column:43}},'4':{start:{line:9,column:8},end:{line:9,column:20}},'5':{start:{line:12,column:23},end:{line:12,column:62}},'6':{start:{line:13,column:22},end:{line:13,column:46}},'7':{start:{line:14,column:8},end:{line:14,column:33}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:4,column:4},end:{line:4,column:5}},loc:{start:{line:4,column:25},end:{line:10,column:5}},line:4},'1':{name:'(anonymous_1)',decl:{start:{line:11,column:4},end:{line:11,column:5}},loc:{start:{line:11,column:11},end:{line:15,column:5}},line:11}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0,'1':0},b:{},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/SliderInit.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/SliderInit.ts'],names:[],mappings:'AACA,OAAO,EAAE,MAAM,EAAE,MAAM,qBAAqB,CAAC;AAC7C,OAAO,EAAE,YAAY,EAAE,MAAM,6BAA6B,CAAC;AAE3D,MAAM,UAAU;IAId,YAAY,OAAsB;QAChC,IAAI,CAAC,QAAQ,GAAG,OAAO,CAAC;QACxB,IAAI,CAAC,OAAO,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QAC7C,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,GAAG,CAAC,QAAQ,CAAC,CAAC;QACrC,QAAQ,CAAC,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC;QACnC,IAAI,CAAC,IAAI,EAAE,CAAC;IACd,CAAC;IACD,IAAI;QACF,MAAM,MAAM,GAAW,IAAI,MAAM,CAAC,IAAI,CAAC,OAAO,EAAE,IAAI,CAAC,QAAQ,CAAC,CAAC;QAC/D,MAAM,KAAK,GAAiB,IAAI,YAAY,CAAC,MAAM,CAAC,CAAC;QACrD,OAAO,EAAE,MAAM,EAAE,KAAK,EAAE,CAAC;IAC3B,CAAC;CACF;AAED,OAAO,EAAE,UAAU,EAAE,CAAC',sourcesContent:['import { sliderOptions } from \'../model/sliderOptions\';\nimport { Facade } from \'../presenter/Facade\';\nimport { ControlPanel } from \'./ControlPanel/ControlPanel\';\n\nclass SliderInit {\n  private _options: sliderOptions;\n  private _slider: HTMLElement;\n\n  constructor(options: sliderOptions) {\n    this._options = options;\n    this._slider = document.createElement(\'div\');\n    this._slider.classList.add(\'slider\');\n    document.body.append(this._slider);\n    this.init();\n  }\n  init() {\n    const facade: Facade = new Facade(this._slider, this._options);\n    const panel: ControlPanel = new ControlPanel(facade);\n    return { facade, panel };\n  }\n}\n\nexport { SliderInit };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class SliderInit{constructor(options){cov_15ef0nlq19.f[0]++;cov_15ef0nlq19.s[0]++;this._options=options;cov_15ef0nlq19.s[1]++;this._slider=document.createElement('div');cov_15ef0nlq19.s[2]++;this._slider.classList.add('slider');cov_15ef0nlq19.s[3]++;document.body.append(this._slider);cov_15ef0nlq19.s[4]++;this.init();}init(){cov_15ef0nlq19.f[1]++;const facade=(cov_15ef0nlq19.s[5]++,new _presenter_Facade__WEBPACK_IMPORTED_MODULE_0__["Facade"](this._slider,this._options));const panel=(cov_15ef0nlq19.s[6]++,new _ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_1__["ControlPanel"](facade));cov_15ef0nlq19.s[7]++;return{facade,panel};}}

/***/ }),

/***/ "./src/demo/demo.scss":
/*!****************************!*\
  !*** ./src/demo/demo.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./demo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/demo/demo.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/demo/demo.ts":
/*!**************************!*\
  !*** ./src/demo/demo.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _demo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.scss */ "./src/demo/demo.scss");
/* harmony import */ var _demo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_demo_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SliderInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderInit */ "./src/demo/SliderInit.ts");
var cov_nftyhz1yu=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/demo.ts',hash='11be74e82b5a75de11949504c8b62f735fc0886a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/demo.ts',statementMap:{'0':{start:{line:3,column:0},end:{line:3,column:45}},'1':{start:{line:4,column:0},end:{line:4,column:29}},'2':{start:{line:5,column:0},end:{line:5,column:47}}},fnMap:{},branchMap:{},s:{'0':0,'1':0,'2':0},f:{},b:{},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/demo.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/demo/demo.ts'],names:[],mappings:'AAAA,OAAO,aAAa,CAAC;AACrB,OAAO,EAAE,UAAU,EAAE,MAAM,cAAc,CAAC;AAE1C,IAAI,UAAU,CAAC,EAAE,GAAG,EAAE,GAAG,EAAE,QAAQ,EAAE,IAAI,EAAE,CAAC,CAAC;AAC7C,IAAI,UAAU,CAAC,EAAE,GAAG,EAAE,GAAG,EAAE,CAAC,CAAC;AAC7B,IAAI,UAAU,CAAC,EAAE,GAAG,EAAE,GAAG,EAAE,UAAU,EAAE,IAAI,EAAE,CAAC,CAAC',sourcesContent:['import \'./demo.scss\';\nimport { SliderInit } from \'./SliderInit\';\n\nnew SliderInit({ max: 100, hasRange: true });\nnew SliderInit({ max: 200 });\nnew SliderInit({ max: 200, isVertical: true });\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_nftyhz1yu.s[0]++;new _SliderInit__WEBPACK_IMPORTED_MODULE_1__["SliderInit"]({max:100,hasRange:true});cov_nftyhz1yu.s[1]++;new _SliderInit__WEBPACK_IMPORTED_MODULE_1__["SliderInit"]({max:200});cov_nftyhz1yu.s[2]++;new _SliderInit__WEBPACK_IMPORTED_MODULE_1__["SliderInit"]({max:200,isVertical:true});

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presenter_Facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/Facade */ "./src/presenter/Facade.ts");
var cov_1w9o9lr4r=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/index.ts',hash='02358abd3b943d8d3a718c7410cb0fa031c1ce8d',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/index.ts',statementMap:{'0':{start:{line:3,column:0},end:{line:8,column:3}},'1':{start:{line:4,column:4},end:{line:7,column:6}},'2':{start:{line:5,column:23},end:{line:5,column:55}},'3':{start:{line:6,column:8},end:{line:6,column:22}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:3,column:2},end:{line:3,column:3}},loc:{start:{line:3,column:14},end:{line:8,column:1}},line:3},'1':{name:'(anonymous_1)',decl:{start:{line:4,column:18},end:{line:4,column:19}},loc:{start:{line:4,column:37},end:{line:7,column:5}},line:4}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0,'1':0},b:{},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/index.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/index.ts'],names:[],mappings:'AAAA,OAAO,kBAAkB,CAAC;AAC1B,OAAO,EAAE,MAAM,EAAE,MAAM,oBAAoB,CAAC;AAE5C,CAAC,CAAC;IACA,CAAC,CAAC,EAAE,CAAC,MAAM,GAAG,UAAS,OAAO;QAC5B,MAAM,MAAM,GAAW,IAAI,MAAM,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,CAAC,EAAE,OAAO,CAAC,CAAC;QACxD,OAAO,MAAM,CAAC;IAChB,CAAC,CAAC;AACJ,CAAC,CAAC,CAAC',sourcesContent:['import \'./scss/main.scss\';\nimport { Facade } from \'./presenter/Facade\';\n\n$(function() {\n  $.fn.slider = function(options): Facade {\n    const facade: Facade = new Facade(this.get(0), options);\n    return facade;\n  };\n});\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_1w9o9lr4r.s[0]++;$(function(){cov_1w9o9lr4r.f[0]++;cov_1w9o9lr4r.s[1]++;$.fn.slider=function(options){cov_1w9o9lr4r.f[1]++;const facade=(cov_1w9o9lr4r.s[2]++,new _presenter_Facade__WEBPACK_IMPORTED_MODULE_1__["Facade"](this.get(0),options));cov_1w9o9lr4r.s[3]++;return facade;};});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/model/MainModel.ts":
/*!********************************!*\
  !*** ./src/model/MainModel.ts ***!
  \********************************/
/*! exports provided: MainModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModel", function() { return MainModel; });
/* harmony import */ var _observer_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer/observer */ "./src/observer/observer.ts");
var cov_211fk8ll9x=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/model/MainModel.ts',hash='a8d77c7fe45f8a86a17e6ccf6a40a32c61c3724a',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/model/MainModel.ts',statementMap:{'0':{start:{line:4,column:8},end:{line:4,column:22}},'1':{start:{line:5,column:8},end:{line:5,column:24}},'2':{start:{line:6,column:8},end:{line:6,column:23}},'3':{start:{line:7,column:8},end:{line:7,column:32}},'4':{start:{line:8,column:8},end:{line:8,column:33}},'5':{start:{line:9,column:8},end:{line:9,column:30}},'6':{start:{line:10,column:8},end:{line:10,column:31}},'7':{start:{line:11,column:8},end:{line:11,column:44}},'8':{start:{line:12,column:8},end:{line:12,column:62}},'9':{start:{line:13,column:8},end:{line:13,column:70}},'10':{start:{line:14,column:8},end:{line:14,column:74}},'11':{start:{line:15,column:8},end:{line:15,column:82}},'12':{start:{line:16,column:8},end:{line:16,column:90}},'13':{start:{line:17,column:8},end:{line:17,column:98}},'14':{start:{line:18,column:8},end:{line:18,column:94}},'15':{start:{line:21,column:8},end:{line:21,column:43}},'16':{start:{line:24,column:8},end:{line:29,column:9}},'17':{start:{line:25,column:12},end:{line:25,column:67}},'18':{start:{line:28,column:12},end:{line:28,column:67}},'19':{start:{line:32,column:8},end:{line:32,column:24}},'20':{start:{line:33,column:8},end:{line:37,column:11}},'21':{start:{line:40,column:8},end:{line:45,column:9}},'22':{start:{line:41,column:12},end:{line:41,column:67}},'23':{start:{line:44,column:12},end:{line:44,column:67}},'24':{start:{line:48,column:8},end:{line:48,column:24}},'25':{start:{line:49,column:8},end:{line:53,column:11}},'26':{start:{line:56,column:8},end:{line:56,column:26}},'27':{start:{line:59,column:8},end:{line:59,column:26}},'28':{start:{line:60,column:8},end:{line:63,column:11}},'29':{start:{line:67,column:8},end:{line:67,column:48}},'30':{start:{line:71,column:8},end:{line:71,column:32}},'31':{start:{line:74,column:8},end:{line:74,column:45}},'32':{start:{line:77,column:8},end:{line:77,column:30}},'33':{start:{line:78,column:8},end:{line:80,column:11}},'34':{start:{line:83,column:8},end:{line:83,column:32}},'35':{start:{line:86,column:8},end:{line:86,column:36}},'36':{start:{line:87,column:8},end:{line:90,column:11}},'37':{start:{line:93,column:8},end:{line:93,column:30}},'38':{start:{line:96,column:8},end:{line:96,column:31}},'39':{start:{line:97,column:8},end:{line:100,column:11}},'40':{start:{line:103,column:8},end:{line:103,column:31}},'41':{start:{line:106,column:8},end:{line:106,column:32}},'42':{start:{line:107,column:8},end:{line:110,column:11}},'43':{start:{line:115,column:8},end:{line:115,column:80}},'44':{start:{line:115,column:37},end:{line:115,column:78}},'45':{start:{line:116,column:8},end:{line:117,column:60}},'46':{start:{line:117,column:12},end:{line:117,column:60}},'47':{start:{line:118,column:8},end:{line:118,column:104}},'48':{start:{line:118,column:37},end:{line:118,column:102}},'49':{start:{line:119,column:8},end:{line:119,column:22}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:3,column:4},end:{line:3,column:5}},loc:{start:{line:3,column:31},end:{line:19,column:5}},line:3},'1':{name:'(anonymous_1)',decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:31},end:{line:22,column:5}},line:20},'2':{name:'(anonymous_2)',decl:{start:{line:23,column:4},end:{line:23,column:5}},loc:{start:{line:23,column:14},end:{line:30,column:5}},line:23},'3':{name:'(anonymous_3)',decl:{start:{line:31,column:4},end:{line:31,column:5}},loc:{start:{line:31,column:17},end:{line:38,column:5}},line:31},'4':{name:'(anonymous_4)',decl:{start:{line:39,column:4},end:{line:39,column:5}},loc:{start:{line:39,column:14},end:{line:46,column:5}},line:39},'5':{name:'(anonymous_5)',decl:{start:{line:47,column:4},end:{line:47,column:5}},loc:{start:{line:47,column:17},end:{line:54,column:5}},line:47},'6':{name:'(anonymous_6)',decl:{start:{line:55,column:4},end:{line:55,column:5}},loc:{start:{line:55,column:15},end:{line:57,column:5}},line:55},'7':{name:'(anonymous_7)',decl:{start:{line:58,column:4},end:{line:58,column:5}},loc:{start:{line:58,column:19},end:{line:64,column:5}},line:58},'8':{name:'(anonymous_8)',decl:{start:{line:66,column:4},end:{line:66,column:5}},loc:{start:{line:66,column:22},end:{line:68,column:5}},line:66},'9':{name:'(anonymous_9)',decl:{start:{line:70,column:4},end:{line:70,column:5}},loc:{start:{line:70,column:27},end:{line:72,column:5}},line:70},'10':{name:'(anonymous_10)',decl:{start:{line:73,column:4},end:{line:73,column:5}},loc:{start:{line:73,column:21},end:{line:75,column:5}},line:73},'11':{name:'(anonymous_11)',decl:{start:{line:76,column:4},end:{line:76,column:5}},loc:{start:{line:76,column:27},end:{line:81,column:5}},line:76},'12':{name:'(anonymous_12)',decl:{start:{line:82,column:4},end:{line:82,column:5}},loc:{start:{line:82,column:21},end:{line:84,column:5}},line:82},'13':{name:'(anonymous_13)',decl:{start:{line:85,column:4},end:{line:85,column:5}},loc:{start:{line:85,column:29},end:{line:91,column:5}},line:85},'14':{name:'(anonymous_14)',decl:{start:{line:92,column:4},end:{line:92,column:5}},loc:{start:{line:92,column:19},end:{line:94,column:5}},line:92},'15':{name:'(anonymous_15)',decl:{start:{line:95,column:4},end:{line:95,column:5}},loc:{start:{line:95,column:24},end:{line:101,column:5}},line:95},'16':{name:'(anonymous_16)',decl:{start:{line:102,column:4},end:{line:102,column:5}},loc:{start:{line:102,column:20},end:{line:104,column:5}},line:102},'17':{name:'(anonymous_17)',decl:{start:{line:105,column:4},end:{line:105,column:5}},loc:{start:{line:105,column:25},end:{line:111,column:5}},line:105},'18':{name:'(anonymous_18)',decl:{start:{line:114,column:4},end:{line:114,column:5}},loc:{start:{line:114,column:23},end:{line:120,column:5}},line:114},'19':{name:'(anonymous_19)',decl:{start:{line:115,column:28},end:{line:115,column:29}},loc:{start:{line:115,column:37},end:{line:115,column:78}},line:115},'20':{name:'(anonymous_20)',decl:{start:{line:118,column:28},end:{line:118,column:29}},loc:{start:{line:118,column:37},end:{line:118,column:102}},line:118}},branchMap:{'0':{loc:{start:{line:12,column:20},end:{line:12,column:61}},type:'cond-expr',locations:[{start:{line:12,column:40},end:{line:12,column:57}},{start:{line:12,column:60},end:{line:12,column:61}}],line:12},'1':{loc:{start:{line:13,column:20},end:{line:13,column:69}},type:'cond-expr',locations:[{start:{line:13,column:40},end:{line:13,column:57}},{start:{line:13,column:60},end:{line:13,column:69}}],line:13},'2':{loc:{start:{line:14,column:21},end:{line:14,column:73}},type:'cond-expr',locations:[{start:{line:14,column:42},end:{line:14,column:60}},{start:{line:14,column:63},end:{line:14,column:73}}],line:14},'3':{loc:{start:{line:15,column:23},end:{line:15,column:81}},type:'cond-expr',locations:[{start:{line:15,column:46},end:{line:15,column:66}},{start:{line:15,column:69},end:{line:15,column:81}}],line:15},'4':{loc:{start:{line:16,column:25},end:{line:16,column:89}},type:'cond-expr',locations:[{start:{line:16,column:50},end:{line:16,column:72}},{start:{line:16,column:75},end:{line:16,column:89}}],line:16},'5':{loc:{start:{line:17,column:27},end:{line:17,column:97}},type:'cond-expr',locations:[{start:{line:17,column:54},end:{line:17,column:78}},{start:{line:17,column:81},end:{line:17,column:97}}],line:17},'6':{loc:{start:{line:18,column:26},end:{line:18,column:93}},type:'cond-expr',locations:[{start:{line:18,column:52},end:{line:18,column:75}},{start:{line:18,column:78},end:{line:18,column:93}}],line:18},'7':{loc:{start:{line:24,column:8},end:{line:29,column:9}},type:'if',locations:[{start:{line:24,column:8},end:{line:29,column:9}},{start:{line:24,column:8},end:{line:29,column:9}}],line:24},'8':{loc:{start:{line:40,column:8},end:{line:45,column:9}},type:'if',locations:[{start:{line:40,column:8},end:{line:45,column:9}},{start:{line:40,column:8},end:{line:45,column:9}}],line:40},'9':{loc:{start:{line:116,column:8},end:{line:117,column:60}},type:'if',locations:[{start:{line:116,column:8},end:{line:117,column:60}},{start:{line:116,column:8},end:{line:117,column:60}}],line:116},'10':{loc:{start:{line:118,column:37},end:{line:118,column:102}},type:'cond-expr',locations:[{start:{line:118,column:56},end:{line:118,column:64}},{start:{line:118,column:67},end:{line:118,column:102}}],line:118},'11':{loc:{start:{line:118,column:67},end:{line:118,column:102}},type:'cond-expr',locations:[{start:{line:118,column:86},end:{line:118,column:94}},{start:{line:118,column:97},end:{line:118,column:102}}],line:118}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0]},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/model/MainModel.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/model/MainModel.ts'],names:[],mappings:'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',sourcesContent:['import { EventObserver } from \'../observer/observer\';\nimport { sliderOptions } from \'./sliderOptions\';\n\nclass MainModel {\n  public observer: EventObserver;\n  private _min = 0;\n  private _max = 100;\n  private _step = 1;\n  private _values = [10, 20];\n  private _isVertical = false;\n  private _hasRange = true;\n  private _hasLabels = true;\n  constructor(sliderOptions: sliderOptions) {\n    this.observer = new EventObserver();\n    this._min = sliderOptions.min ? sliderOptions.min : 0;\n    this._max = sliderOptions.max ? sliderOptions.max : this._max;\n    this._step = sliderOptions.step ? sliderOptions.step : this._step;\n    this._values = sliderOptions.values ? sliderOptions.values : this._values;\n    this._hasRange = sliderOptions.hasRange ? sliderOptions.hasRange : this._hasRange;\n    this._isVertical = sliderOptions.isVertical ? sliderOptions.isVertical : this._isVertical;\n    this._hasLabels = sliderOptions.hasLabels ? sliderOptions.hasLabels : this._hasLabels;\n  }\n\n  notifyPresenter(valueData: sliderOptions) {\n    this.observer.broadcast(valueData);\n  }\n\n  get min(): number {\n    if (this._min < this._max) {\n      return Math.round(this._min / this._step) * this._step;\n    } else {\n      return Math.round(this._max / this._step) * this._step;\n    }\n  }\n\n  set min(min: number) {\n    this._min = min;\n    this.notifyPresenter({\n      min: this.min,\n      max: this.max,\n      values: this.rangeValue,\n    });\n  }\n\n  get max(): number {\n    if (this._max < this._min) {\n      return Math.round(this._min / this._step) * this._step;\n    } else {\n      return Math.round(this._max / this._step) * this._step;\n    }\n  }\n\n  set max(max: number) {\n    this._max = max;\n    this.notifyPresenter({\n      min: this.min,\n      max: this.max,\n      values: this.rangeValue,\n    });\n  }\n\n  get step(): number {\n    return this._step;\n  }\n\n  set step(step: number) {\n    this._step = step;\n    this.notifyPresenter({\n      step: this._step,\n      values: this.rangeValue,\n    });\n  }\n  //\u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F!\n  get singleValue(): number {\n    return this.calcValues(this._values)[0];\n  }\n  //\u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F!\n  set singleValue(value: number) {\n    this._values[0] = value;\n  }\n\n  get rangeValue(): number[] {\n    return this.calcValues(this._values);\n  }\n\n  set rangeValue(values: number[]) {\n    this._values = values;\n    this.notifyPresenter({\n      values: this.rangeValue,\n    });\n  }\n\n  get isVertical(): boolean {\n    return this._isVertical;\n  }\n\n  set isVertical(vertical: boolean) {\n    this._isVertical = vertical;\n    this.notifyPresenter({\n      values: this.rangeValue,\n      isVertical: this._isVertical,\n    });\n  }\n\n  get hasRange(): boolean {\n    return this._hasRange;\n  }\n\n  set hasRange(range: boolean) {\n    this._hasRange = range;\n    this.notifyPresenter({\n      values: this.rangeValue,\n      hasRange: this._hasRange,\n    });\n  }\n\n  get hasLabels(): boolean {\n    return this._hasLabels;\n  }\n\n  set hasLabels(label: boolean) {\n    this._hasLabels = label;\n    this.notifyPresenter({\n      values: this.rangeValue,\n      hasLabels: this._hasLabels,\n    });\n  }\n\n  //check that values of handlers are within min and max\n  //check that value 0 is less than value 1 for range\n  calcValues(values: number[]): number[] {\n    values = values.map(value => Math.round(value / this.step) * this.step);\n    if (values[0] > values[1]) [values[0], values[1]] = [values[1], values[0]];\n    values = values.map(value =>\n      value < this.min ? this.min : value > this.max ? this.max : value,\n    );\n\n    return values;\n  }\n}\n\nexport { MainModel };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class MainModel{constructor(sliderOptions){cov_211fk8ll9x.f[0]++;cov_211fk8ll9x.s[0]++;this._min=0;cov_211fk8ll9x.s[1]++;this._max=100;cov_211fk8ll9x.s[2]++;this._step=1;cov_211fk8ll9x.s[3]++;this._values=[10,20];cov_211fk8ll9x.s[4]++;this._isVertical=false;cov_211fk8ll9x.s[5]++;this._hasRange=true;cov_211fk8ll9x.s[6]++;this._hasLabels=true;cov_211fk8ll9x.s[7]++;this.observer=new _observer_observer__WEBPACK_IMPORTED_MODULE_0__["EventObserver"]();cov_211fk8ll9x.s[8]++;this._min=sliderOptions.min?(cov_211fk8ll9x.b[0][0]++,sliderOptions.min):(cov_211fk8ll9x.b[0][1]++,0);cov_211fk8ll9x.s[9]++;this._max=sliderOptions.max?(cov_211fk8ll9x.b[1][0]++,sliderOptions.max):(cov_211fk8ll9x.b[1][1]++,this._max);cov_211fk8ll9x.s[10]++;this._step=sliderOptions.step?(cov_211fk8ll9x.b[2][0]++,sliderOptions.step):(cov_211fk8ll9x.b[2][1]++,this._step);cov_211fk8ll9x.s[11]++;this._values=sliderOptions.values?(cov_211fk8ll9x.b[3][0]++,sliderOptions.values):(cov_211fk8ll9x.b[3][1]++,this._values);cov_211fk8ll9x.s[12]++;this._hasRange=sliderOptions.hasRange?(cov_211fk8ll9x.b[4][0]++,sliderOptions.hasRange):(cov_211fk8ll9x.b[4][1]++,this._hasRange);cov_211fk8ll9x.s[13]++;this._isVertical=sliderOptions.isVertical?(cov_211fk8ll9x.b[5][0]++,sliderOptions.isVertical):(cov_211fk8ll9x.b[5][1]++,this._isVertical);cov_211fk8ll9x.s[14]++;this._hasLabels=sliderOptions.hasLabels?(cov_211fk8ll9x.b[6][0]++,sliderOptions.hasLabels):(cov_211fk8ll9x.b[6][1]++,this._hasLabels);}notifyPresenter(valueData){cov_211fk8ll9x.f[1]++;cov_211fk8ll9x.s[15]++;this.observer.broadcast(valueData);}get min(){cov_211fk8ll9x.f[2]++;cov_211fk8ll9x.s[16]++;if(this._min<this._max){cov_211fk8ll9x.b[7][0]++;cov_211fk8ll9x.s[17]++;return Math.round(this._min/this._step)*this._step;}else{cov_211fk8ll9x.b[7][1]++;cov_211fk8ll9x.s[18]++;return Math.round(this._max/this._step)*this._step;}}set min(min){cov_211fk8ll9x.f[3]++;cov_211fk8ll9x.s[19]++;this._min=min;cov_211fk8ll9x.s[20]++;this.notifyPresenter({min:this.min,max:this.max,values:this.rangeValue});}get max(){cov_211fk8ll9x.f[4]++;cov_211fk8ll9x.s[21]++;if(this._max<this._min){cov_211fk8ll9x.b[8][0]++;cov_211fk8ll9x.s[22]++;return Math.round(this._min/this._step)*this._step;}else{cov_211fk8ll9x.b[8][1]++;cov_211fk8ll9x.s[23]++;return Math.round(this._max/this._step)*this._step;}}set max(max){cov_211fk8ll9x.f[5]++;cov_211fk8ll9x.s[24]++;this._max=max;cov_211fk8ll9x.s[25]++;this.notifyPresenter({min:this.min,max:this.max,values:this.rangeValue});}get step(){cov_211fk8ll9x.f[6]++;cov_211fk8ll9x.s[26]++;return this._step;}set step(step){cov_211fk8ll9x.f[7]++;cov_211fk8ll9x.s[27]++;this._step=step;cov_211fk8ll9x.s[28]++;this.notifyPresenter({step:this._step,values:this.rangeValue});}get singleValue(){cov_211fk8ll9x.f[8]++;cov_211fk8ll9x.s[29]++;return this.calcValues(this._values)[0];}set singleValue(value){cov_211fk8ll9x.f[9]++;cov_211fk8ll9x.s[30]++;this._values[0]=value;}get rangeValue(){cov_211fk8ll9x.f[10]++;cov_211fk8ll9x.s[31]++;return this.calcValues(this._values);}set rangeValue(values){cov_211fk8ll9x.f[11]++;cov_211fk8ll9x.s[32]++;this._values=values;cov_211fk8ll9x.s[33]++;this.notifyPresenter({values:this.rangeValue});}get isVertical(){cov_211fk8ll9x.f[12]++;cov_211fk8ll9x.s[34]++;return this._isVertical;}set isVertical(vertical){cov_211fk8ll9x.f[13]++;cov_211fk8ll9x.s[35]++;this._isVertical=vertical;cov_211fk8ll9x.s[36]++;this.notifyPresenter({values:this.rangeValue,isVertical:this._isVertical});}get hasRange(){cov_211fk8ll9x.f[14]++;cov_211fk8ll9x.s[37]++;return this._hasRange;}set hasRange(range){cov_211fk8ll9x.f[15]++;cov_211fk8ll9x.s[38]++;this._hasRange=range;cov_211fk8ll9x.s[39]++;this.notifyPresenter({values:this.rangeValue,hasRange:this._hasRange});}get hasLabels(){cov_211fk8ll9x.f[16]++;cov_211fk8ll9x.s[40]++;return this._hasLabels;}set hasLabels(label){cov_211fk8ll9x.f[17]++;cov_211fk8ll9x.s[41]++;this._hasLabels=label;cov_211fk8ll9x.s[42]++;this.notifyPresenter({values:this.rangeValue,hasLabels:this._hasLabels});}calcValues(values){cov_211fk8ll9x.f[18]++;cov_211fk8ll9x.s[43]++;values=values.map(value=>{cov_211fk8ll9x.f[19]++;cov_211fk8ll9x.s[44]++;return Math.round(value/this.step)*this.step;});cov_211fk8ll9x.s[45]++;if(values[0]>values[1]){cov_211fk8ll9x.b[9][0]++;cov_211fk8ll9x.s[46]++;[values[0],values[1]]=[values[1],values[0]];}else{cov_211fk8ll9x.b[9][1]++;}cov_211fk8ll9x.s[47]++;values=values.map(value=>{cov_211fk8ll9x.f[20]++;cov_211fk8ll9x.s[48]++;return value<this.min?(cov_211fk8ll9x.b[10][0]++,this.min):(cov_211fk8ll9x.b[10][1]++,value>this.max?(cov_211fk8ll9x.b[11][0]++,this.max):(cov_211fk8ll9x.b[11][1]++,value));});cov_211fk8ll9x.s[49]++;return values;}}

/***/ }),

/***/ "./src/observer/observer.ts":
/*!**********************************!*\
  !*** ./src/observer/observer.ts ***!
  \**********************************/
/*! exports provided: EventObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventObserver", function() { return EventObserver; });
var cov_2faps4wexq=function(){var path="/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/observer/observer.ts",hash="6578f04e3599350793329c8487faeea3110e6c62",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/observer/observer.ts",statementMap:{"0":{start:{line:3,column:8},end:{line:3,column:29}},"1":{start:{line:6,column:8},end:{line:6,column:33}},"2":{start:{line:9,column:8},end:{line:9,column:82}},"3":{start:{line:9,column:63},end:{line:9,column:80}},"4":{start:{line:12,column:8},end:{line:12,column:64}},"5":{start:{line:12,column:46},end:{line:12,column:62}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:4},end:{line:2,column:5}},loc:{start:{line:2,column:18},end:{line:4,column:5}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:5,column:4},end:{line:5,column:5}},loc:{start:{line:5,column:18},end:{line:7,column:5}},line:5},"2":{name:"(anonymous_2)",decl:{start:{line:8,column:4},end:{line:8,column:5}},loc:{start:{line:8,column:20},end:{line:10,column:5}},line:8},"3":{name:"(anonymous_3)",decl:{start:{line:9,column:49},end:{line:9,column:50}},loc:{start:{line:9,column:63},end:{line:9,column:80}},line:9},"4":{name:"(anonymous_4)",decl:{start:{line:11,column:4},end:{line:11,column:5}},loc:{start:{line:11,column:20},end:{line:13,column:5}},line:11},"5":{name:"(anonymous_5)",decl:{start:{line:12,column:32},end:{line:12,column:33}},loc:{start:{line:12,column:46},end:{line:12,column:62}},line:12}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},b:{},inputSourceMap:{version:3,file:"/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/observer/observer.ts",sourceRoot:"",sources:["/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/observer/observer.ts"],names:[],mappings:"AAAA,MAAM,aAAa;IAEjB;QACE,IAAI,CAAC,UAAU,GAAG,EAAE,CAAC;IACvB,CAAC;IACD,SAAS,CAAC,EAAY;QACpB,IAAI,CAAC,UAAU,CAAC,IAAI,CAAC,EAAE,CAAC,CAAC;IAC3B,CAAC;IACD,WAAW,CAAC,EAAY;QACtB,IAAI,CAAC,UAAU,GAAG,IAAI,CAAC,UAAU,CAAC,MAAM,CAAC,UAAU,CAAC,EAAE,CAAC,UAAU,KAAK,EAAE,CAAC,CAAC;IAC5E,CAAC;IACD,SAAS,CAAC,IAAY;QACpB,IAAI,CAAC,UAAU,CAAC,OAAO,CAAC,UAAU,CAAC,EAAE,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC,CAAC;IAC1D,CAAC;CACF;AAED,OAAO,EAAE,aAAa,EAAE,CAAC",sourcesContent:["class EventObserver {\n  private _observers: Function[];\n  constructor() {\n    this._observers = [];\n  }\n  subscribe(fn: Function): void {\n    this._observers.push(fn);\n  }\n  unsubscribe(fn: Function): void {\n    this._observers = this._observers.filter(subscriber => subscriber !== fn);\n  }\n  broadcast(data: object): void {\n    this._observers.forEach(subscriber => subscriber(data));\n  }\n}\n\nexport { EventObserver };\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class EventObserver{constructor(){cov_2faps4wexq.f[0]++;cov_2faps4wexq.s[0]++;this._observers=[];}subscribe(fn){cov_2faps4wexq.f[1]++;cov_2faps4wexq.s[1]++;this._observers.push(fn);}unsubscribe(fn){cov_2faps4wexq.f[2]++;cov_2faps4wexq.s[2]++;this._observers=this._observers.filter(subscriber=>{cov_2faps4wexq.f[3]++;cov_2faps4wexq.s[3]++;return subscriber!==fn;});}broadcast(data){cov_2faps4wexq.f[4]++;cov_2faps4wexq.s[4]++;this._observers.forEach(subscriber=>{cov_2faps4wexq.f[5]++;cov_2faps4wexq.s[5]++;return subscriber(data);});}}

/***/ }),

/***/ "./src/presenter/Facade.ts":
/*!*********************************!*\
  !*** ./src/presenter/Facade.ts ***!
  \*********************************/
/*! exports provided: Facade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facade", function() { return Facade; });
/* harmony import */ var _model_MainModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/MainModel */ "./src/model/MainModel.ts");
/* harmony import */ var _Presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Presenter */ "./src/presenter/Presenter.ts");
/* harmony import */ var _observer_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer/observer */ "./src/observer/observer.ts");
var cov_k71z8qbba=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/presenter/Facade.ts',hash='9378dab4e77f3607c820f656e361f18f6bee92aa',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/presenter/Facade.ts',statementMap:{'0':{start:{line:6,column:8},end:{line:6,column:44}},'1':{start:{line:7,column:8},end:{line:7,column:51}},'2':{start:{line:8,column:8},end:{line:8,column:61}},'3':{start:{line:9,column:8},end:{line:9,column:28}},'4':{start:{line:12,column:8},end:{line:15,column:11}},'5':{start:{line:13,column:12},end:{line:14,column:58}},'6':{start:{line:14,column:16},end:{line:14,column:58}},'7':{start:{line:18,column:8},end:{line:18,column:38}},'8':{start:{line:21,column:8},end:{line:21,column:50}},'9':{start:{line:24,column:8},end:{line:24,column:51}},'10':{start:{line:28,column:8},end:{line:28,column:39}},'11':{start:{line:32,column:8},end:{line:32,column:40}},'12':{start:{line:35,column:8},end:{line:35,column:38}},'13':{start:{line:38,column:8},end:{line:38,column:39}},'14':{start:{line:41,column:8},end:{line:41,column:32}},'15':{start:{line:44,column:8},end:{line:44,column:33}},'16':{start:{line:47,column:8},end:{line:47,column:38}},'17':{start:{line:50,column:8},end:{line:50,column:42}},'18':{start:{line:53,column:8},end:{line:53,column:36}},'19':{start:{line:56,column:8},end:{line:56,column:37}},'20':{start:{line:59,column:8},end:{line:59,column:37}},'21':{start:{line:62,column:8},end:{line:62,column:38}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:5,column:4},end:{line:5,column:5}},loc:{start:{line:5,column:39},end:{line:10,column:5}},line:5},'1':{name:'(anonymous_1)',decl:{start:{line:11,column:4},end:{line:11,column:5}},loc:{start:{line:11,column:19},end:{line:16,column:5}},line:11},'2':{name:'(anonymous_2)',decl:{start:{line:12,column:39},end:{line:12,column:40}},loc:{start:{line:12,column:54},end:{line:15,column:9}},line:12},'3':{name:'(anonymous_3)',decl:{start:{line:17,column:4},end:{line:17,column:5}},loc:{start:{line:17,column:17},end:{line:19,column:5}},line:17},'4':{name:'(anonymous_4)',decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:17},end:{line:22,column:5}},line:20},'5':{name:'(anonymous_5)',decl:{start:{line:23,column:4},end:{line:23,column:5}},loc:{start:{line:23,column:22},end:{line:25,column:5}},line:23},'6':{name:'(anonymous_6)',decl:{start:{line:27,column:4},end:{line:27,column:5}},loc:{start:{line:27,column:22},end:{line:29,column:5}},line:27},'7':{name:'(anonymous_7)',decl:{start:{line:31,column:4},end:{line:31,column:5}},loc:{start:{line:31,column:27},end:{line:33,column:5}},line:31},'8':{name:'(anonymous_8)',decl:{start:{line:34,column:4},end:{line:34,column:5}},loc:{start:{line:34,column:21},end:{line:36,column:5}},line:34},'9':{name:'(anonymous_9)',decl:{start:{line:37,column:4},end:{line:37,column:5}},loc:{start:{line:37,column:26},end:{line:39,column:5}},line:37},'10':{name:'(anonymous_10)',decl:{start:{line:40,column:4},end:{line:40,column:5}},loc:{start:{line:40,column:15},end:{line:42,column:5}},line:40},'11':{name:'(anonymous_11)',decl:{start:{line:43,column:4},end:{line:43,column:5}},loc:{start:{line:43,column:20},end:{line:45,column:5}},line:43},'12':{name:'(anonymous_12)',decl:{start:{line:46,column:4},end:{line:46,column:5}},loc:{start:{line:46,column:21},end:{line:48,column:5}},line:46},'13':{name:'(anonymous_13)',decl:{start:{line:49,column:4},end:{line:49,column:5}},loc:{start:{line:49,column:29},end:{line:51,column:5}},line:49},'14':{name:'(anonymous_14)',decl:{start:{line:52,column:4},end:{line:52,column:5}},loc:{start:{line:52,column:19},end:{line:54,column:5}},line:52},'15':{name:'(anonymous_15)',decl:{start:{line:55,column:4},end:{line:55,column:5}},loc:{start:{line:55,column:24},end:{line:57,column:5}},line:55},'16':{name:'(anonymous_16)',decl:{start:{line:58,column:4},end:{line:58,column:5}},loc:{start:{line:58,column:20},end:{line:60,column:5}},line:58},'17':{name:'(anonymous_17)',decl:{start:{line:61,column:4},end:{line:61,column:5}},loc:{start:{line:61,column:25},end:{line:63,column:5}},line:61}},branchMap:{'0':{loc:{start:{line:13,column:12},end:{line:14,column:58}},type:'if',locations:[{start:{line:13,column:12},end:{line:14,column:58}},{start:{line:13,column:12},end:{line:14,column:58}}],line:13}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0},b:{'0':[0,0]},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/presenter/Facade.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/presenter/Facade.ts'],names:[],mappings:'AAAA,OAAO,EAAE,SAAS,EAAE,MAAM,oBAAoB,CAAC;AAC/C,OAAO,EAAE,SAAS,EAAE,MAAM,aAAa,CAAC;AAExC,OAAO,EAAE,aAAa,EAAE,MAAM,sBAAsB,CAAC;AAErD,MAAM,MAAM;IAKV,YAAY,MAAmB,EAAE,aAA4B;QAC3D,IAAI,CAAC,QAAQ,GAAG,IAAI,aAAa,EAAE,CAAC;QACpC,IAAI,CAAC,MAAM,GAAG,IAAI,SAAS,CAAC,aAAa,CAAC,CAAC;QAC3C,IAAI,CAAC,UAAU,GAAG,IAAI,SAAS,CAAC,MAAM,EAAE,IAAI,CAAC,MAAM,CAAC,CAAC;QACrD,IAAI,CAAC,YAAY,EAAE,CAAC;IACtB,CAAC;IAED,YAAY;QACV,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,SAAS,CAAC,CAAC,SAAwB,EAAE,EAAE;YAC1D,IAAI,SAAS,CAAC,MAAM;gBAAE,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,SAAS,CAAC,MAAM,CAAC,CAAC;QAClE,CAAC,CAAC,CAAC;IACL,CAAC;IAED,IAAI,MAAM;QACR,OAAO,IAAI,CAAC,UAAU,CAAC,MAAM,CAAC;IAChC,CAAC;IAED,IAAI,MAAM;QACR,OAAO,CAAC,IAAI,CAAC,MAAM,CAAC,GAAG,EAAE,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,CAAC;IAC5C,CAAC;IAED,IAAI,MAAM,CAAC,KAAe;QACxB,CAAC,IAAI,CAAC,MAAM,CAAC,GAAG,EAAE,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,GAAG,KAAK,CAAC;IAC7C,CAAC;IACD,UAAU;IACV,IAAI,WAAW;QACb,OAAO,IAAI,CAAC,MAAM,CAAC,WAAW,CAAC;IACjC,CAAC;IACD,UAAU;IACV,IAAI,WAAW,CAAC,KAAa;QAC3B,IAAI,CAAC,MAAM,CAAC,WAAW,GAAG,KAAK,CAAC;IAClC,CAAC;IAED,IAAI,UAAU;QACZ,OAAO,IAAI,CAAC,MAAM,CAAC,UAAU,CAAC;IAChC,CAAC;IAED,IAAI,UAAU,CAAC,KAAe;QAC5B,IAAI,CAAC,MAAM,CAAC,UAAU,GAAG,KAAK,CAAC;IACjC,CAAC;IAED,IAAI,IAAI;QACN,OAAO,IAAI,CAAC,MAAM,CAAC,IAAI,CAAC;IAC1B,CAAC;IAED,IAAI,IAAI,CAAC,KAAa;QACpB,IAAI,CAAC,MAAM,CAAC,IAAI,GAAG,KAAK,CAAC;IAC3B,CAAC;IAED,IAAI,UAAU;QACZ,OAAO,IAAI,CAAC,MAAM,CAAC,UAAU,CAAC;IAChC,CAAC;IAED,IAAI,UAAU,CAAC,QAAiB;QAC9B,IAAI,CAAC,MAAM,CAAC,UAAU,GAAG,QAAQ,CAAC;IACpC,CAAC;IAED,IAAI,QAAQ;QACV,OAAO,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC;IAC9B,CAAC;IAED,IAAI,QAAQ,CAAC,KAAc;QACzB,IAAI,CAAC,MAAM,CAAC,QAAQ,GAAG,KAAK,CAAC;IAC/B,CAAC;IACD,IAAI,SAAS;QACX,OAAO,IAAI,CAAC,MAAM,CAAC,SAAS,CAAC;IAC/B,CAAC;IAED,IAAI,SAAS,CAAC,KAAc;QAC1B,IAAI,CAAC,MAAM,CAAC,SAAS,GAAG,KAAK,CAAC;IAChC,CAAC;CACF;AAED,OAAO,EAAE,MAAM,EAAE,CAAC',sourcesContent:['import { MainModel } from \'../model/MainModel\';\nimport { Presenter } from \'./Presenter\';\nimport { sliderOptions } from \'../model/sliderOptions\';\nimport { EventObserver } from \'../observer/observer\';\n\nclass Facade {\n  private _model: MainModel;\n  private _presenter: Presenter;\n  public observer: EventObserver;\n\n  constructor(parent: HTMLElement, sliderOptions: sliderOptions) {\n    this.observer = new EventObserver();\n    this._model = new MainModel(sliderOptions);\n    this._presenter = new Presenter(parent, this._model);\n    this.updateValues();\n  }\n\n  updateValues() {\n    this._model.observer.subscribe((valueData: sliderOptions) => {\n      if (valueData.values) this.observer.broadcast(valueData.values);\n    });\n  }\n\n  get parent() {\n    return this._presenter.parent;\n  }\n\n  get minMax(): number[] {\n    return [this._model.min, this._model.max];\n  }\n\n  set minMax(value: number[]) {\n    [this._model.min, this._model.max] = value;\n  }\n  //not used\n  get singleValue(): number {\n    return this._model.singleValue;\n  }\n  //not used\n  set singleValue(value: number) {\n    this._model.singleValue = value;\n  }\n\n  get rangeValue(): number[] {\n    return this._model.rangeValue;\n  }\n\n  set rangeValue(value: number[]) {\n    this._model.rangeValue = value;\n  }\n\n  get step(): number {\n    return this._model.step;\n  }\n\n  set step(value: number) {\n    this._model.step = value;\n  }\n\n  get isVertical(): boolean {\n    return this._model.isVertical;\n  }\n\n  set isVertical(vertical: boolean) {\n    this._model.isVertical = vertical;\n  }\n\n  get hasRange(): boolean {\n    return this._model.hasRange;\n  }\n\n  set hasRange(range: boolean) {\n    this._model.hasRange = range;\n  }\n  get hasLabels(): boolean {\n    return this._model.hasLabels;\n  }\n\n  set hasLabels(label: boolean) {\n    this._model.hasLabels = label;\n  }\n}\n\nexport { Facade };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class Facade{constructor(parent,sliderOptions){cov_k71z8qbba.f[0]++;cov_k71z8qbba.s[0]++;this.observer=new _observer_observer__WEBPACK_IMPORTED_MODULE_2__["EventObserver"]();cov_k71z8qbba.s[1]++;this._model=new _model_MainModel__WEBPACK_IMPORTED_MODULE_0__["MainModel"](sliderOptions);cov_k71z8qbba.s[2]++;this._presenter=new _Presenter__WEBPACK_IMPORTED_MODULE_1__["Presenter"](parent,this._model);cov_k71z8qbba.s[3]++;this.updateValues();}updateValues(){cov_k71z8qbba.f[1]++;cov_k71z8qbba.s[4]++;this._model.observer.subscribe(valueData=>{cov_k71z8qbba.f[2]++;cov_k71z8qbba.s[5]++;if(valueData.values){cov_k71z8qbba.b[0][0]++;cov_k71z8qbba.s[6]++;this.observer.broadcast(valueData.values);}else{cov_k71z8qbba.b[0][1]++;}});}get parent(){cov_k71z8qbba.f[3]++;cov_k71z8qbba.s[7]++;return this._presenter.parent;}get minMax(){cov_k71z8qbba.f[4]++;cov_k71z8qbba.s[8]++;return[this._model.min,this._model.max];}set minMax(value){cov_k71z8qbba.f[5]++;cov_k71z8qbba.s[9]++;[this._model.min,this._model.max]=value;}get singleValue(){cov_k71z8qbba.f[6]++;cov_k71z8qbba.s[10]++;return this._model.singleValue;}set singleValue(value){cov_k71z8qbba.f[7]++;cov_k71z8qbba.s[11]++;this._model.singleValue=value;}get rangeValue(){cov_k71z8qbba.f[8]++;cov_k71z8qbba.s[12]++;return this._model.rangeValue;}set rangeValue(value){cov_k71z8qbba.f[9]++;cov_k71z8qbba.s[13]++;this._model.rangeValue=value;}get step(){cov_k71z8qbba.f[10]++;cov_k71z8qbba.s[14]++;return this._model.step;}set step(value){cov_k71z8qbba.f[11]++;cov_k71z8qbba.s[15]++;this._model.step=value;}get isVertical(){cov_k71z8qbba.f[12]++;cov_k71z8qbba.s[16]++;return this._model.isVertical;}set isVertical(vertical){cov_k71z8qbba.f[13]++;cov_k71z8qbba.s[17]++;this._model.isVertical=vertical;}get hasRange(){cov_k71z8qbba.f[14]++;cov_k71z8qbba.s[18]++;return this._model.hasRange;}set hasRange(range){cov_k71z8qbba.f[15]++;cov_k71z8qbba.s[19]++;this._model.hasRange=range;}get hasLabels(){cov_k71z8qbba.f[16]++;cov_k71z8qbba.s[20]++;return this._model.hasLabels;}set hasLabels(label){cov_k71z8qbba.f[17]++;cov_k71z8qbba.s[21]++;this._model.hasLabels=label;}}

/***/ }),

/***/ "./src/presenter/Presenter.ts":
/*!************************************!*\
  !*** ./src/presenter/Presenter.ts ***!
  \************************************/
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return Presenter; });
/* harmony import */ var _view_MainView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/MainView */ "./src/view/MainView.ts");
var cov_216c31ro76=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/presenter/Presenter.ts',hash='a0ca38f3e2c5a1da7fb25e2e136256038bb5a8fa',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/presenter/Presenter.ts',statementMap:{'0':{start:{line:4,column:8},end:{line:4,column:28}},'1':{start:{line:5,column:8},end:{line:5,column:46}},'2':{start:{line:6,column:8},end:{line:6,column:30}},'3':{start:{line:7,column:8},end:{line:7,column:165}},'4':{start:{line:8,column:8},end:{line:8,column:27}},'5':{start:{line:9,column:8},end:{line:9,column:26}},'6':{start:{line:12,column:8},end:{line:27,column:11}},'7':{start:{line:13,column:12},end:{line:14,column:48}},'8':{start:{line:14,column:16},end:{line:14,column:48}},'9':{start:{line:15,column:12},end:{line:16,column:48}},'10':{start:{line:16,column:16},end:{line:16,column:48}},'11':{start:{line:17,column:12},end:{line:18,column:58}},'12':{start:{line:18,column:16},end:{line:18,column:58}},'13':{start:{line:19,column:12},end:{line:20,column:62}},'14':{start:{line:20,column:16},end:{line:20,column:62}},'15':{start:{line:21,column:12},end:{line:22,column:50}},'16':{start:{line:22,column:16},end:{line:22,column:50}},'17':{start:{line:23,column:12},end:{line:24,column:58}},'18':{start:{line:24,column:16},end:{line:24,column:58}},'19':{start:{line:25,column:12},end:{line:26,column:60}},'20':{start:{line:26,column:16},end:{line:26,column:60}},'21':{start:{line:30,column:8},end:{line:32,column:11}},'22':{start:{line:31,column:12},end:{line:31,column:41}},'23':{start:{line:35,column:8},end:{line:35,column:28}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:3,column:4},end:{line:3,column:5}},loc:{start:{line:3,column:31},end:{line:10,column:5}},line:3},'1':{name:'(anonymous_1)',decl:{start:{line:11,column:4},end:{line:11,column:5}},loc:{start:{line:11,column:18},end:{line:28,column:5}},line:11},'2':{name:'(anonymous_2)',decl:{start:{line:12,column:38},end:{line:12,column:39}},loc:{start:{line:12,column:53},end:{line:27,column:9}},line:12},'3':{name:'(anonymous_3)',decl:{start:{line:29,column:4},end:{line:29,column:5}},loc:{start:{line:29,column:17},end:{line:33,column:5}},line:29},'4':{name:'(anonymous_4)',decl:{start:{line:30,column:39},end:{line:30,column:40}},loc:{start:{line:30,column:54},end:{line:32,column:9}},line:30},'5':{name:'(anonymous_5)',decl:{start:{line:34,column:4},end:{line:34,column:5}},loc:{start:{line:34,column:17},end:{line:36,column:5}},line:34}},branchMap:{'0':{loc:{start:{line:13,column:12},end:{line:14,column:48}},type:'if',locations:[{start:{line:13,column:12},end:{line:14,column:48}},{start:{line:13,column:12},end:{line:14,column:48}}],line:13},'1':{loc:{start:{line:15,column:12},end:{line:16,column:48}},type:'if',locations:[{start:{line:15,column:12},end:{line:16,column:48}},{start:{line:15,column:12},end:{line:16,column:48}}],line:15},'2':{loc:{start:{line:17,column:12},end:{line:18,column:58}},type:'if',locations:[{start:{line:17,column:12},end:{line:18,column:58}},{start:{line:17,column:12},end:{line:18,column:58}}],line:17},'3':{loc:{start:{line:19,column:12},end:{line:20,column:62}},type:'if',locations:[{start:{line:19,column:12},end:{line:20,column:62}},{start:{line:19,column:12},end:{line:20,column:62}}],line:19},'4':{loc:{start:{line:21,column:12},end:{line:22,column:50}},type:'if',locations:[{start:{line:21,column:12},end:{line:22,column:50}},{start:{line:21,column:12},end:{line:22,column:50}}],line:21},'5':{loc:{start:{line:23,column:12},end:{line:24,column:58}},type:'if',locations:[{start:{line:23,column:12},end:{line:24,column:58}},{start:{line:23,column:12},end:{line:24,column:58}}],line:23},'6':{loc:{start:{line:25,column:12},end:{line:26,column:60}},type:'if',locations:[{start:{line:25,column:12},end:{line:26,column:60}},{start:{line:25,column:12},end:{line:26,column:60}}],line:25}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0]},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/presenter/Presenter.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/presenter/Presenter.ts'],names:[],mappings:'AACA,OAAO,EAAE,QAAQ,EAAE,MAAM,kBAAkB,CAAC;AAG5C,MAAM,SAAS;IAMb,YAAY,MAAmB,EAAE,KAAgB;QAC/C,IAAI,CAAC,MAAM,GAAG,KAAK,CAAC;QACpB,IAAI,CAAC,OAAO,GAAG,IAAI,CAAC,MAAM,CAAC,UAAU,CAAC;QACtC,IAAI,CAAC,OAAO,GAAG,MAAM,CAAC;QACtB,IAAI,CAAC,KAAK,GAAG,IAAI,QAAQ,CACvB,IAAI,CAAC,OAAO,EACZ,IAAI,CAAC,MAAM,CAAC,QAAQ,EACpB,IAAI,CAAC,MAAM,CAAC,UAAU,EACtB,IAAI,CAAC,MAAM,CAAC,GAAG,EACf,IAAI,CAAC,MAAM,CAAC,GAAG,EACf,IAAI,CAAC,OAAO,EACZ,IAAI,CAAC,MAAM,CAAC,SAAS,CACtB,CAAC;QACF,IAAI,CAAC,WAAW,EAAE,CAAC;QACnB,IAAI,CAAC,UAAU,EAAE,CAAC;IACpB,CAAC;IAED,WAAW;QACT,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,SAAS,CAAC,CAAC,SAAwB,EAAE,EAAE;YACzD,IAAI,SAAS,CAAC,GAAG;gBAAE,IAAI,CAAC,MAAM,CAAC,GAAG,GAAG,SAAS,CAAC,GAAG,CAAC;YACnD,IAAI,SAAS,CAAC,GAAG;gBAAE,IAAI,CAAC,MAAM,CAAC,GAAG,GAAG,SAAS,CAAC,GAAG,CAAC;YACnD,IAAI,SAAS,CAAC,MAAM;gBAAE,IAAI,CAAC,MAAM,CAAC,UAAU,GAAG,SAAS,CAAC,MAAM,CAAC;YAChE,IAAI,SAAS,CAAC,UAAU,KAAK,SAAS;gBAAE,IAAI,CAAC,MAAM,CAAC,UAAU,GAAG,SAAS,CAAC,UAAU,CAAC;YACtF,IAAI,SAAS,CAAC,IAAI;gBAAE,IAAI,CAAC,MAAM,CAAC,IAAI,GAAG,SAAS,CAAC,IAAI,CAAC;YACtD,IAAI,SAAS,CAAC,QAAQ,KAAK,SAAS;gBAAE,IAAI,CAAC,MAAM,CAAC,QAAQ,GAAG,SAAS,CAAC,QAAQ,CAAC;YAChF,IAAI,SAAS,CAAC,SAAS,KAAK,SAAS;gBAAE,IAAI,CAAC,MAAM,CAAC,SAAS,GAAG,SAAS,CAAC,SAAS,CAAC;QACrF,CAAC,CAAC,CAAC;IACL,CAAC;IAED,UAAU;QACR,IAAI,CAAC,MAAM,CAAC,QAAQ,CAAC,SAAS,CAAC,CAAC,SAAwB,EAAE,EAAE;YAC1D,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,SAAS,CAAC,CAAC;QAC/B,CAAC,CAAC,CAAC;IACL,CAAC;IAED,IAAI,MAAM;QACR,OAAO,IAAI,CAAC,OAAO,CAAC;IACtB,CAAC;CACF;AAED,OAAO,EAAE,SAAS,EAAE,CAAC',sourcesContent:['import { MainModel } from \'../model/MainModel\';\nimport { MainView } from \'../view/MainView\';\nimport { sliderOptions } from \'../model/sliderOptions\';\n\nclass Presenter {\n  private _model: MainModel;\n  private _view: MainView;\n  private _values: number[];\n  private _parent: HTMLElement;\n\n  constructor(parent: HTMLElement, model: MainModel) {\n    this._model = model;\n    this._values = this._model.rangeValue;\n    this._parent = parent;\n    this._view = new MainView(\n      this._parent,\n      this._model.hasRange,\n      this._model.isVertical,\n      this._model.min,\n      this._model.max,\n      this._values,\n      this._model.hasLabels,\n    );\n    this.updateModel();\n    this.updateView();\n  }\n\n  updateModel() {\n    this._view.observer.subscribe((valueData: sliderOptions) => {\n      if (valueData.min) this._model.min = valueData.min;\n      if (valueData.max) this._model.max = valueData.max;\n      if (valueData.values) this._model.rangeValue = valueData.values;\n      if (valueData.isVertical !== undefined) this._model.isVertical = valueData.isVertical;\n      if (valueData.step) this._model.step = valueData.step;\n      if (valueData.hasRange !== undefined) this._model.hasRange = valueData.hasRange;\n      if (valueData.hasLabels !== undefined) this._model.hasLabels = valueData.hasLabels;\n    });\n  }\n\n  updateView() {\n    this._model.observer.subscribe((valueData: sliderOptions) => {\n      this._view.update(valueData);\n    });\n  }\n\n  get parent() {\n    return this._parent;\n  }\n}\n\nexport { Presenter };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class Presenter{constructor(parent,model){cov_216c31ro76.f[0]++;cov_216c31ro76.s[0]++;this._model=model;cov_216c31ro76.s[1]++;this._values=this._model.rangeValue;cov_216c31ro76.s[2]++;this._parent=parent;cov_216c31ro76.s[3]++;this._view=new _view_MainView__WEBPACK_IMPORTED_MODULE_0__["MainView"](this._parent,this._model.hasRange,this._model.isVertical,this._model.min,this._model.max,this._values,this._model.hasLabels);cov_216c31ro76.s[4]++;this.updateModel();cov_216c31ro76.s[5]++;this.updateView();}updateModel(){cov_216c31ro76.f[1]++;cov_216c31ro76.s[6]++;this._view.observer.subscribe(valueData=>{cov_216c31ro76.f[2]++;cov_216c31ro76.s[7]++;if(valueData.min){cov_216c31ro76.b[0][0]++;cov_216c31ro76.s[8]++;this._model.min=valueData.min;}else{cov_216c31ro76.b[0][1]++;}cov_216c31ro76.s[9]++;if(valueData.max){cov_216c31ro76.b[1][0]++;cov_216c31ro76.s[10]++;this._model.max=valueData.max;}else{cov_216c31ro76.b[1][1]++;}cov_216c31ro76.s[11]++;if(valueData.values){cov_216c31ro76.b[2][0]++;cov_216c31ro76.s[12]++;this._model.rangeValue=valueData.values;}else{cov_216c31ro76.b[2][1]++;}cov_216c31ro76.s[13]++;if(valueData.isVertical!==undefined){cov_216c31ro76.b[3][0]++;cov_216c31ro76.s[14]++;this._model.isVertical=valueData.isVertical;}else{cov_216c31ro76.b[3][1]++;}cov_216c31ro76.s[15]++;if(valueData.step){cov_216c31ro76.b[4][0]++;cov_216c31ro76.s[16]++;this._model.step=valueData.step;}else{cov_216c31ro76.b[4][1]++;}cov_216c31ro76.s[17]++;if(valueData.hasRange!==undefined){cov_216c31ro76.b[5][0]++;cov_216c31ro76.s[18]++;this._model.hasRange=valueData.hasRange;}else{cov_216c31ro76.b[5][1]++;}cov_216c31ro76.s[19]++;if(valueData.hasLabels!==undefined){cov_216c31ro76.b[6][0]++;cov_216c31ro76.s[20]++;this._model.hasLabels=valueData.hasLabels;}else{cov_216c31ro76.b[6][1]++;}});}updateView(){cov_216c31ro76.f[3]++;cov_216c31ro76.s[21]++;this._model.observer.subscribe(valueData=>{cov_216c31ro76.f[4]++;cov_216c31ro76.s[22]++;this._view.update(valueData);});}get parent(){cov_216c31ro76.f[5]++;cov_216c31ro76.s[23]++;return this._parent;}}

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/view/HandlerView.ts":
/*!*********************************!*\
  !*** ./src/view/HandlerView.ts ***!
  \*********************************/
/*! exports provided: HandlerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlerView", function() { return HandlerView; });
/* harmony import */ var _LabelView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabelView */ "./src/view/LabelView.ts");
var cov_2k66c5p9bm=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/HandlerView.ts',hash='ac922cab6b10292725a2e5b4942bc256dd0968ef',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/HandlerView.ts',statementMap:{'0':{start:{line:4,column:8},end:{line:4,column:54}},'1':{start:{line:5,column:8},end:{line:5,column:30}},'2':{start:{line:6,column:8},end:{line:6,column:36}},'3':{start:{line:7,column:8},end:{line:7,column:57}},'4':{start:{line:8,column:8},end:{line:8,column:27}},'5':{start:{line:11,column:8},end:{line:11,column:43}},'6':{start:{line:12,column:8},end:{line:12,column:47}},'7':{start:{line:13,column:8},end:{line:14,column:51}},'8':{start:{line:14,column:12},end:{line:14,column:51}},'9':{start:{line:17,column:28},end:{line:19,column:74}},'10':{start:{line:20,column:8},end:{line:20,column:27}},'11':{start:{line:23,column:28},end:{line:23,column:37}},'12':{start:{line:24,column:33},end:{line:24,column:63}},'13':{start:{line:25,column:28},end:{line:25,column:59}},'14':{start:{line:26,column:25},end:{line:26,column:78}},'15':{start:{line:27,column:8},end:{line:27,column:63}},'16':{start:{line:28,column:8},end:{line:28,column:67}},'17':{start:{line:31,column:8},end:{line:39,column:9}},'18':{start:{line:32,column:30},end:{line:32,column:80}},'19':{start:{line:33,column:42},end:{line:33,column:90}},'20':{start:{line:34,column:37},end:{line:34,column:67}},'21':{start:{line:35,column:34},end:{line:35,column:85}},'22':{start:{line:36,column:12},end:{line:36,column:75}},'23':{start:{line:37,column:12},end:{line:37,column:67}},'24':{start:{line:38,column:12},end:{line:38,column:38}},'25':{start:{line:42,column:8},end:{line:42,column:29}},'26':{start:{line:46,column:8},end:{line:46,column:79}},'27':{start:{line:49,column:8},end:{line:50,column:45}},'28':{start:{line:50,column:12},end:{line:50,column:45}},'29':{start:{line:54,column:8},end:{line:61,column:9}},'30':{start:{line:55,column:12},end:{line:55,column:70}},'31':{start:{line:56,column:12},end:{line:56,column:51}},'32':{start:{line:57,column:12},end:{line:57,column:38}},'33':{start:{line:60,column:12},end:{line:60,column:85}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:3,column:4},end:{line:3,column:5}},loc:{start:{line:3,column:35},end:{line:9,column:5}},line:3},'1':{name:'(anonymous_1)',decl:{start:{line:10,column:4},end:{line:10,column:5}},loc:{start:{line:10,column:18},end:{line:15,column:5}},line:10},'2':{name:'(anonymous_2)',decl:{start:{line:16,column:4},end:{line:16,column:5}},loc:{start:{line:16,column:31},end:{line:21,column:5}},line:16},'3':{name:'(anonymous_3)',decl:{start:{line:22,column:4},end:{line:22,column:5}},loc:{start:{line:22,column:45},end:{line:29,column:5}},line:22},'4':{name:'(anonymous_4)',decl:{start:{line:30,column:4},end:{line:30,column:5}},loc:{start:{line:30,column:58},end:{line:40,column:5}},line:30},'5':{name:'(anonymous_5)',decl:{start:{line:41,column:4},end:{line:41,column:5}},loc:{start:{line:41,column:15},end:{line:43,column:5}},line:41},'6':{name:'(anonymous_6)',decl:{start:{line:44,column:4},end:{line:44,column:5}},loc:{start:{line:44,column:20},end:{line:47,column:5}},line:44},'7':{name:'(anonymous_7)',decl:{start:{line:48,column:4},end:{line:48,column:5}},loc:{start:{line:48,column:25},end:{line:51,column:5}},line:48},'8':{name:'(anonymous_8)',decl:{start:{line:52,column:4},end:{line:52,column:5}},loc:{start:{line:52,column:34},end:{line:62,column:5}},line:52}},branchMap:{'0':{loc:{start:{line:7,column:22},end:{line:7,column:56}},type:'cond-expr',locations:[{start:{line:7,column:34},end:{line:7,column:49}},{start:{line:7,column:52},end:{line:7,column:56}}],line:7},'1':{loc:{start:{line:13,column:8},end:{line:14,column:51}},type:'if',locations:[{start:{line:13,column:8},end:{line:14,column:51}},{start:{line:13,column:8},end:{line:14,column:51}}],line:13},'2':{loc:{start:{line:17,column:28},end:{line:19,column:74}},type:'cond-expr',locations:[{start:{line:18,column:14},end:{line:18,column:76}},{start:{line:19,column:14},end:{line:19,column:74}}],line:17},'3':{loc:{start:{line:24,column:33},end:{line:24,column:63}},type:'cond-expr',locations:[{start:{line:24,column:46},end:{line:24,column:54}},{start:{line:24,column:57},end:{line:24,column:63}}],line:24},'4':{loc:{start:{line:31,column:8},end:{line:39,column:9}},type:'if',locations:[{start:{line:31,column:8},end:{line:39,column:9}},{start:{line:31,column:8},end:{line:39,column:9}}],line:31},'5':{loc:{start:{line:34,column:37},end:{line:34,column:67}},type:'cond-expr',locations:[{start:{line:34,column:50},end:{line:34,column:58}},{start:{line:34,column:61},end:{line:34,column:67}}],line:34},'6':{loc:{start:{line:46,column:15},end:{line:46,column:78}},type:'cond-expr',locations:[{start:{line:46,column:62},end:{line:46,column:68}},{start:{line:46,column:71},end:{line:46,column:78}}],line:46},'7':{loc:{start:{line:46,column:15},end:{line:46,column:59}},type:'binary-expr',locations:[{start:{line:46,column:15},end:{line:46,column:42}},{start:{line:46,column:46},end:{line:46,column:59}}],line:46},'8':{loc:{start:{line:49,column:8},end:{line:50,column:45}},type:'if',locations:[{start:{line:49,column:8},end:{line:50,column:45}},{start:{line:49,column:8},end:{line:50,column:45}}],line:49},'9':{loc:{start:{line:54,column:8},end:{line:61,column:9}},type:'if',locations:[{start:{line:54,column:8},end:{line:61,column:9}},{start:{line:54,column:8},end:{line:61,column:9}}],line:54},'10':{loc:{start:{line:55,column:26},end:{line:55,column:69}},type:'cond-expr',locations:[{start:{line:55,column:40},end:{line:55,column:51}},{start:{line:55,column:54},end:{line:55,column:69}}],line:55},'11':{loc:{start:{line:60,column:12},end:{line:60,column:84}},type:'cond-expr',locations:[{start:{line:60,column:59},end:{line:60,column:65}},{start:{line:60,column:68},end:{line:60,column:84}}],line:60},'12':{loc:{start:{line:60,column:12},end:{line:60,column:56}},type:'binary-expr',locations:[{start:{line:60,column:12},end:{line:60,column:39}},{start:{line:60,column:43},end:{line:60,column:56}}],line:60}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0],'12':[0,0]},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/HandlerView.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/HandlerView.ts'],names:[],mappings:'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',sourcesContent:['import { LabelView } from \'./LabelView\';\n\nclass HandlerView {\n  private _parent: HTMLElement;\n  private _handler: HTMLElement;\n  private _label: LabelView | null;\n  private _showLabel: boolean;\n\n  constructor(parent: HTMLElement, showLabel: boolean) {\n    this._handler = document.createElement(\'div\');\n    this._parent = parent;\n    this._showLabel = showLabel;\n    this._label = showLabel ? new LabelView() : null;\n    this.handlerInit();\n  }\n  private handlerInit() {\n    this._parent.append(this._handler);\n    this._handler.classList.add(\'handler\');\n    if (this._label) this._handler.before(this._label.elem);\n  }\n\n  private getHandlerSize(isVertical: boolean) {\n    const handlerSize = isVertical\n      ? (this._handler.offsetHeight / this._parent.offsetHeight) * 100\n      : (this._handler.offsetWidth / this._parent.offsetWidth) * 100;\n    return handlerSize;\n  }\n\n  setPosition(value: number, min: number, max: number, isVertical: boolean) {\n    const valuesCount = max - min;\n    const positionProperty = isVertical ? \'bottom\' : \'left\';\n    const handlerSize = this.getHandlerSize(isVertical);\n    const position = ((value - min) / valuesCount) * 100 - handlerSize / 2;\n    this._handler.style[positionProperty] = `${position}%`;\n    this.setLabelPosition(value, valuesCount, min, isVertical);\n  }\n\n  private setLabelPosition(value: number, valuesCount: number, min: number, isVertical: boolean) {\n    if (this._label) {\n      const labelSize = this._label.getLabelSize(isVertical, this._parent);\n      const fixedPositionProperty = this._label.getFixedPositionProperty(isVertical);\n      const positionProperty = isVertical ? \'bottom\' : \'left\';\n      const labelPosition = ((value - min) / valuesCount) * 100 - labelSize / 2;\n      this._label.elem.style[positionProperty] = `${labelPosition}%`;\n      this._label.elem.style[fixedPositionProperty] = \'330%\';\n      this.setLabelValue(value);\n    }\n  }\n\n  get elem() {\n    return this._handler;\n  }\n  get labelElem() {\n    return this._label?.elem;\n  }\n  private setLabelValue(value: number) {\n    if (this._label) this._label.setLabelValue(value);\n  }\n\n  updateLabel(showLabel: boolean | undefined, value: number) {\n    if (showLabel) {\n      this._label = this._label ? this._label : new LabelView();\n      this._handler.before(this._label.elem);\n      this.setLabelValue(value);\n    } else {\n      this._label?.elem.remove();\n    }\n  }\n}\n\nexport { HandlerView };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class HandlerView{constructor(parent,showLabel){cov_2k66c5p9bm.f[0]++;cov_2k66c5p9bm.s[0]++;this._handler=document.createElement('div');cov_2k66c5p9bm.s[1]++;this._parent=parent;cov_2k66c5p9bm.s[2]++;this._showLabel=showLabel;cov_2k66c5p9bm.s[3]++;this._label=showLabel?(cov_2k66c5p9bm.b[0][0]++,new _LabelView__WEBPACK_IMPORTED_MODULE_0__["LabelView"]()):(cov_2k66c5p9bm.b[0][1]++,null);cov_2k66c5p9bm.s[4]++;this.handlerInit();}handlerInit(){cov_2k66c5p9bm.f[1]++;cov_2k66c5p9bm.s[5]++;this._parent.append(this._handler);cov_2k66c5p9bm.s[6]++;this._handler.classList.add('handler');cov_2k66c5p9bm.s[7]++;if(this._label){cov_2k66c5p9bm.b[1][0]++;cov_2k66c5p9bm.s[8]++;this._handler.before(this._label.elem);}else{cov_2k66c5p9bm.b[1][1]++;}}getHandlerSize(isVertical){cov_2k66c5p9bm.f[2]++;const handlerSize=(cov_2k66c5p9bm.s[9]++,isVertical?(cov_2k66c5p9bm.b[2][0]++,this._handler.offsetHeight/this._parent.offsetHeight*100):(cov_2k66c5p9bm.b[2][1]++,this._handler.offsetWidth/this._parent.offsetWidth*100));cov_2k66c5p9bm.s[10]++;return handlerSize;}setPosition(value,min,max,isVertical){cov_2k66c5p9bm.f[3]++;const valuesCount=(cov_2k66c5p9bm.s[11]++,max-min);const positionProperty=(cov_2k66c5p9bm.s[12]++,isVertical?(cov_2k66c5p9bm.b[3][0]++,'bottom'):(cov_2k66c5p9bm.b[3][1]++,'left'));const handlerSize=(cov_2k66c5p9bm.s[13]++,this.getHandlerSize(isVertical));const position=(cov_2k66c5p9bm.s[14]++,(value-min)/valuesCount*100-handlerSize/2);cov_2k66c5p9bm.s[15]++;this._handler.style[positionProperty]=`${position}%`;cov_2k66c5p9bm.s[16]++;this.setLabelPosition(value,valuesCount,min,isVertical);}setLabelPosition(value,valuesCount,min,isVertical){cov_2k66c5p9bm.f[4]++;cov_2k66c5p9bm.s[17]++;if(this._label){cov_2k66c5p9bm.b[4][0]++;const labelSize=(cov_2k66c5p9bm.s[18]++,this._label.getLabelSize(isVertical,this._parent));const fixedPositionProperty=(cov_2k66c5p9bm.s[19]++,this._label.getFixedPositionProperty(isVertical));const positionProperty=(cov_2k66c5p9bm.s[20]++,isVertical?(cov_2k66c5p9bm.b[5][0]++,'bottom'):(cov_2k66c5p9bm.b[5][1]++,'left'));const labelPosition=(cov_2k66c5p9bm.s[21]++,(value-min)/valuesCount*100-labelSize/2);cov_2k66c5p9bm.s[22]++;this._label.elem.style[positionProperty]=`${labelPosition}%`;cov_2k66c5p9bm.s[23]++;this._label.elem.style[fixedPositionProperty]='330%';cov_2k66c5p9bm.s[24]++;this.setLabelValue(value);}else{cov_2k66c5p9bm.b[4][1]++;}}get elem(){cov_2k66c5p9bm.f[5]++;cov_2k66c5p9bm.s[25]++;return this._handler;}get labelElem(){cov_2k66c5p9bm.f[6]++;var _a;cov_2k66c5p9bm.s[26]++;return(cov_2k66c5p9bm.b[7][0]++,(_a=this._label)===null)||(cov_2k66c5p9bm.b[7][1]++,_a===void 0)?(cov_2k66c5p9bm.b[6][0]++,void 0):(cov_2k66c5p9bm.b[6][1]++,_a.elem);}setLabelValue(value){cov_2k66c5p9bm.f[7]++;cov_2k66c5p9bm.s[27]++;if(this._label){cov_2k66c5p9bm.b[8][0]++;cov_2k66c5p9bm.s[28]++;this._label.setLabelValue(value);}else{cov_2k66c5p9bm.b[8][1]++;}}updateLabel(showLabel,value){cov_2k66c5p9bm.f[8]++;var _a;cov_2k66c5p9bm.s[29]++;if(showLabel){cov_2k66c5p9bm.b[9][0]++;cov_2k66c5p9bm.s[30]++;this._label=this._label?(cov_2k66c5p9bm.b[10][0]++,this._label):(cov_2k66c5p9bm.b[10][1]++,new _LabelView__WEBPACK_IMPORTED_MODULE_0__["LabelView"]());cov_2k66c5p9bm.s[31]++;this._handler.before(this._label.elem);cov_2k66c5p9bm.s[32]++;this.setLabelValue(value);}else{cov_2k66c5p9bm.b[9][1]++;cov_2k66c5p9bm.s[33]++;(cov_2k66c5p9bm.b[12][0]++,(_a=this._label)===null)||(cov_2k66c5p9bm.b[12][1]++,_a===void 0)?(cov_2k66c5p9bm.b[11][0]++,void 0):(cov_2k66c5p9bm.b[11][1]++,_a.elem.remove());}}}

/***/ }),

/***/ "./src/view/LabelView.ts":
/*!*******************************!*\
  !*** ./src/view/LabelView.ts ***!
  \*******************************/
/*! exports provided: LabelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelView", function() { return LabelView; });
var cov_1b5he3xc1i=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/LabelView.ts',hash='2329b3ac518d71620c1bfd48d5ad0926b6d22d80',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/LabelView.ts',statementMap:{'0':{start:{line:3,column:8},end:{line:3,column:52}},'1':{start:{line:4,column:8},end:{line:4,column:43}},'2':{start:{line:7,column:8},end:{line:7,column:27}},'3':{start:{line:10,column:8},end:{line:10,column:49}},'4':{start:{line:13,column:26},end:{line:15,column:64}},'5':{start:{line:16,column:8},end:{line:16,column:25}},'6':{start:{line:19,column:38},end:{line:19,column:68}},'7':{start:{line:20,column:8},end:{line:20,column:37}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:2,column:4},end:{line:2,column:5}},loc:{start:{line:2,column:18},end:{line:5,column:5}},line:2},'1':{name:'(anonymous_1)',decl:{start:{line:6,column:4},end:{line:6,column:5}},loc:{start:{line:6,column:15},end:{line:8,column:5}},line:6},'2':{name:'(anonymous_2)',decl:{start:{line:9,column:4},end:{line:9,column:5}},loc:{start:{line:9,column:25},end:{line:11,column:5}},line:9},'3':{name:'(anonymous_3)',decl:{start:{line:12,column:4},end:{line:12,column:5}},loc:{start:{line:12,column:37},end:{line:17,column:5}},line:12},'4':{name:'(anonymous_4)',decl:{start:{line:18,column:4},end:{line:18,column:5}},loc:{start:{line:18,column:41},end:{line:21,column:5}},line:18}},branchMap:{'0':{loc:{start:{line:13,column:26},end:{line:15,column:64}},type:'cond-expr',locations:[{start:{line:14,column:14},end:{line:14,column:66}},{start:{line:15,column:14},end:{line:15,column:64}}],line:13},'1':{loc:{start:{line:19,column:38},end:{line:19,column:68}},type:'cond-expr',locations:[{start:{line:19,column:51},end:{line:19,column:57}},{start:{line:19,column:60},end:{line:19,column:68}}],line:19}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0},b:{'0':[0,0],'1':[0,0]},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/LabelView.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/LabelView.ts'],names:[],mappings:'AAAA,MAAM,SAAS;IAGb;QACE,IAAI,CAAC,MAAM,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QAC5C,IAAI,CAAC,MAAM,CAAC,SAAS,CAAC,GAAG,CAAC,OAAO,CAAC,CAAC;IACrC,CAAC;IAED,IAAI,IAAI;QACN,OAAO,IAAI,CAAC,MAAM,CAAC;IACrB,CAAC;IAED,aAAa,CAAC,KAAa;QACzB,IAAI,CAAC,MAAM,CAAC,SAAS,GAAG,KAAK,CAAC,QAAQ,EAAE,CAAC;IAC3C,CAAC;IAED,YAAY,CAAC,UAAmB,EAAE,MAAmB;QACnD,MAAM,SAAS,GAAG,UAAU;YAC1B,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,YAAY,GAAG,MAAM,CAAC,YAAY,CAAC,GAAG,GAAG;YACtD,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,WAAW,GAAG,MAAM,CAAC,WAAW,CAAC,GAAG,GAAG,CAAC;QAEvD,OAAO,SAAS,CAAC;IACnB,CAAC;IAED,wBAAwB,CAAC,UAAmB;QAC1C,MAAM,qBAAqB,GAAG,UAAU,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,QAAQ,CAAC;QAC7D,OAAO,qBAAqB,CAAC;IAC/B,CAAC;CACF;AAED,OAAO,EAAE,SAAS,EAAE,CAAC',sourcesContent:['class LabelView {\n  private _label: HTMLElement;\n\n  constructor() {\n    this._label = document.createElement(\'div\');\n    this._label.classList.add(\'label\');\n  }\n\n  get elem() {\n    return this._label;\n  }\n\n  setLabelValue(value: number) {\n    this._label.innerText = value.toString();\n  }\n\n  getLabelSize(isVertical: boolean, parent: HTMLElement) {\n    const labelSize = isVertical\n      ? (this.elem.offsetHeight / parent.offsetHeight) * 100\n      : (this.elem.offsetWidth / parent.offsetWidth) * 100;\n\n    return labelSize;\n  }\n\n  getFixedPositionProperty(isVertical: boolean) {\n    const fixedPositionProperty = isVertical ? \'left\' : \'bottom\';\n    return fixedPositionProperty;\n  }\n}\n\nexport { LabelView };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class LabelView{constructor(){cov_1b5he3xc1i.f[0]++;cov_1b5he3xc1i.s[0]++;this._label=document.createElement('div');cov_1b5he3xc1i.s[1]++;this._label.classList.add('label');}get elem(){cov_1b5he3xc1i.f[1]++;cov_1b5he3xc1i.s[2]++;return this._label;}setLabelValue(value){cov_1b5he3xc1i.f[2]++;cov_1b5he3xc1i.s[3]++;this._label.innerText=value.toString();}getLabelSize(isVertical,parent){cov_1b5he3xc1i.f[3]++;const labelSize=(cov_1b5he3xc1i.s[4]++,isVertical?(cov_1b5he3xc1i.b[0][0]++,this.elem.offsetHeight/parent.offsetHeight*100):(cov_1b5he3xc1i.b[0][1]++,this.elem.offsetWidth/parent.offsetWidth*100));cov_1b5he3xc1i.s[5]++;return labelSize;}getFixedPositionProperty(isVertical){cov_1b5he3xc1i.f[4]++;const fixedPositionProperty=(cov_1b5he3xc1i.s[6]++,isVertical?(cov_1b5he3xc1i.b[1][0]++,'left'):(cov_1b5he3xc1i.b[1][1]++,'bottom'));cov_1b5he3xc1i.s[7]++;return fixedPositionProperty;}}

/***/ }),

/***/ "./src/view/MainView.ts":
/*!******************************!*\
  !*** ./src/view/MainView.ts ***!
  \******************************/
/*! exports provided: MainView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainView", function() { return MainView; });
/* harmony import */ var _HandlerView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandlerView */ "./src/view/HandlerView.ts");
/* harmony import */ var _SelectedAreaView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectedAreaView */ "./src/view/SelectedAreaView.ts");
/* harmony import */ var _observer_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer/observer */ "./src/observer/observer.ts");
var cov_ogbgaduli=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/MainView.ts',hash='b84b3e5c2f6d55a6c0f77f6295a397e25c472e3b',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/MainView.ts',statementMap:{'0':{start:{line:6,column:8},end:{line:6,column:44}},'1':{start:{line:7,column:8},end:{line:7,column:28}},'2':{start:{line:8,column:8},end:{line:8,column:24}},'3':{start:{line:9,column:8},end:{line:9,column:24}},'4':{start:{line:10,column:8},end:{line:10,column:30}},'5':{start:{line:11,column:8},end:{line:11,column:38}},'6':{start:{line:12,column:8},end:{line:12,column:34}},'7':{start:{line:13,column:8},end:{line:13,column:36}},'8':{start:{line:14,column:8},end:{line:14,column:30}},'9':{start:{line:15,column:8},end:{line:15,column:57}},'10':{start:{line:16,column:8},end:{line:16,column:24}},'11':{start:{line:17,column:8},end:{line:17,column:22}},'12':{start:{line:18,column:8},end:{line:18,column:35}},'13':{start:{line:19,column:8},end:{line:19,column:26}},'14':{start:{line:20,column:8},end:{line:20,column:146}},'15':{start:{line:21,column:8},end:{line:26,column:11}},'16':{start:{line:22,column:12},end:{line:24,column:14}},'17':{start:{line:23,column:16},end:{line:23,column:29}},'18':{start:{line:25,column:12},end:{line:25,column:84}},'19':{start:{line:29,column:8},end:{line:29,column:53}},'20':{start:{line:30,column:8},end:{line:30,column:51}},'21':{start:{line:31,column:8},end:{line:31,column:30}},'22':{start:{line:32,column:8},end:{line:32,column:27}},'23':{start:{line:33,column:8},end:{line:33,column:34}},'24':{start:{line:36,column:8},end:{line:36,column:62}},'25':{start:{line:37,column:8},end:{line:37,column:62}},'26':{start:{line:38,column:8},end:{line:38,column:74}},'27':{start:{line:39,column:8},end:{line:39,column:104}},'28':{start:{line:40,column:8},end:{line:40,column:96}},'29':{start:{line:41,column:8},end:{line:41,column:100}},'30':{start:{line:42,column:8},end:{line:42,column:30}},'31':{start:{line:43,column:8},end:{line:43,column:34}},'32':{start:{line:44,column:8},end:{line:44,column:110}},'33':{start:{line:44,column:51},end:{line:44,column:108}},'34':{start:{line:45,column:8},end:{line:45,column:36}},'35':{start:{line:46,column:8},end:{line:46,column:129}},'36':{start:{line:49,column:8},end:{line:56,column:9}},'37':{start:{line:50,column:12},end:{line:50,column:63}},'38':{start:{line:51,column:12},end:{line:51,column:58}},'39':{start:{line:54,column:12},end:{line:54,column:61}},'40':{start:{line:55,column:12},end:{line:55,column:60}},'41':{start:{line:59,column:8},end:{line:59,column:80}},'42':{start:{line:60,column:8},end:{line:64,column:9}},'43':{start:{line:61,column:12},end:{line:61,column:84}},'44':{start:{line:62,column:12},end:{line:62,column:54}},'45':{start:{line:63,column:12},end:{line:63,column:54}},'46':{start:{line:67,column:8},end:{line:67,column:30}},'47':{start:{line:70,column:8},end:{line:70,column:133}},'48':{start:{line:70,column:51},end:{line:70,column:131}},'49':{start:{line:74,column:8},end:{line:82,column:9}},'50':{start:{line:75,column:12},end:{line:75,column:44}},'51':{start:{line:76,column:12},end:{line:76,column:96}},'52':{start:{line:79,column:12},end:{line:79,column:65}},'53':{start:{line:80,column:12},end:{line:81,column:75}},'54':{start:{line:81,column:16},end:{line:81,column:75}},'55':{start:{line:85,column:20},end:{line:85,column:48}},'56':{start:{line:86,column:8},end:{line:91,column:9}},'57':{start:{line:87,column:12},end:{line:87,column:44}},'58':{start:{line:90,column:12},end:{line:90,column:42}},'59':{start:{line:94,column:8},end:{line:94,column:27}},'60':{start:{line:95,column:23},end:{line:95,column:31}},'61':{start:{line:96,column:8},end:{line:96,column:42}},'62':{start:{line:97,column:8},end:{line:97,column:54}},'63':{start:{line:98,column:8},end:{line:98,column:50}},'64':{start:{line:99,column:8},end:{line:99,column:64}},'65':{start:{line:100,column:8},end:{line:100,column:60}},'66':{start:{line:103,column:8},end:{line:108,column:9}},'67':{start:{line:104,column:12},end:{line:104,column:56}},'68':{start:{line:107,column:12},end:{line:107,column:56}},'69':{start:{line:111,column:28},end:{line:111,column:60}},'70':{start:{line:112,column:22},end:{line:116,column:25}},'71':{start:{line:117,column:8},end:{line:126,column:9}},'72':{start:{line:118,column:12},end:{line:120,column:15}},'73':{start:{line:123,column:12},end:{line:125,column:15}},'74':{start:{line:129,column:8},end:{line:129,column:67}},'75':{start:{line:130,column:8},end:{line:130,column:64}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:5,column:4},end:{line:5,column:5}},loc:{start:{line:5,column:75},end:{line:27,column:5}},line:5},'1':{name:'(anonymous_1)',decl:{start:{line:21,column:31},end:{line:21,column:32}},loc:{start:{line:21,column:42},end:{line:26,column:9}},line:21},'2':{name:'(anonymous_2)',decl:{start:{line:22,column:39},end:{line:22,column:40}},loc:{start:{line:22,column:51},end:{line:24,column:13}},line:22},'3':{name:'(anonymous_3)',decl:{start:{line:28,column:4},end:{line:28,column:5}},loc:{start:{line:28,column:17},end:{line:34,column:5}},line:28},'4':{name:'(anonymous_4)',decl:{start:{line:35,column:4},end:{line:35,column:5}},loc:{start:{line:35,column:22},end:{line:47,column:5}},line:35},'5':{name:'(anonymous_5)',decl:{start:{line:44,column:31},end:{line:44,column:32}},loc:{start:{line:44,column:51},end:{line:44,column:108}},line:44},'6':{name:'(anonymous_6)',decl:{start:{line:48,column:4},end:{line:48,column:5}},loc:{start:{line:48,column:21},end:{line:57,column:5}},line:48},'7':{name:'(anonymous_7)',decl:{start:{line:58,column:4},end:{line:58,column:5}},loc:{start:{line:58,column:18},end:{line:65,column:5}},line:58},'8':{name:'(anonymous_8)',decl:{start:{line:66,column:4},end:{line:66,column:5}},loc:{start:{line:66,column:18},end:{line:68,column:5}},line:66},'9':{name:'(anonymous_9)',decl:{start:{line:69,column:4},end:{line:69,column:5}},loc:{start:{line:69,column:25},end:{line:71,column:5}},line:69},'10':{name:'(anonymous_10)',decl:{start:{line:70,column:31},end:{line:70,column:32}},loc:{start:{line:70,column:51},end:{line:70,column:131}},line:70},'11':{name:'(anonymous_11)',decl:{start:{line:72,column:4},end:{line:72,column:5}},loc:{start:{line:72,column:27},end:{line:83,column:5}},line:72},'12':{name:'(anonymous_12)',decl:{start:{line:84,column:4},end:{line:84,column:5}},loc:{start:{line:84,column:20},end:{line:92,column:5}},line:84},'13':{name:'(anonymous_13)',decl:{start:{line:93,column:4},end:{line:93,column:5}},loc:{start:{line:93,column:19},end:{line:101,column:5}},line:93},'14':{name:'(anonymous_14)',decl:{start:{line:102,column:4},end:{line:102,column:5}},loc:{start:{line:102,column:19},end:{line:109,column:5}},line:102},'15':{name:'(anonymous_15)',decl:{start:{line:110,column:4},end:{line:110,column:5}},loc:{start:{line:110,column:33},end:{line:127,column:5}},line:110},'16':{name:'(anonymous_16)',decl:{start:{line:128,column:4},end:{line:128,column:5}},loc:{start:{line:128,column:16},end:{line:131,column:5}},line:128}},branchMap:{'0':{loc:{start:{line:36,column:20},end:{line:36,column:61}},type:'cond-expr',locations:[{start:{line:36,column:36},end:{line:36,column:49}},{start:{line:36,column:52},end:{line:36,column:61}}],line:36},'1':{loc:{start:{line:37,column:20},end:{line:37,column:61}},type:'cond-expr',locations:[{start:{line:37,column:36},end:{line:37,column:49}},{start:{line:37,column:52},end:{line:37,column:61}}],line:37},'2':{loc:{start:{line:38,column:23},end:{line:38,column:73}},type:'cond-expr',locations:[{start:{line:38,column:42},end:{line:38,column:58}},{start:{line:38,column:61},end:{line:38,column:73}}],line:38},'3':{loc:{start:{line:39,column:27},end:{line:39,column:103}},type:'cond-expr',locations:[{start:{line:39,column:64},end:{line:39,column:84}},{start:{line:39,column:87},end:{line:39,column:103}}],line:39},'4':{loc:{start:{line:40,column:25},end:{line:40,column:95}},type:'cond-expr',locations:[{start:{line:40,column:60},end:{line:40,column:78}},{start:{line:40,column:81},end:{line:40,column:95}}],line:40},'5':{loc:{start:{line:41,column:26},end:{line:41,column:99}},type:'cond-expr',locations:[{start:{line:41,column:62},end:{line:41,column:81}},{start:{line:41,column:84},end:{line:41,column:99}}],line:41},'6':{loc:{start:{line:49,column:8},end:{line:56,column:9}},type:'if',locations:[{start:{line:49,column:8},end:{line:56,column:9}},{start:{line:49,column:8},end:{line:56,column:9}}],line:49},'7':{loc:{start:{line:60,column:8},end:{line:64,column:9}},type:'if',locations:[{start:{line:60,column:8},end:{line:64,column:9}},{start:{line:60,column:8},end:{line:64,column:9}}],line:60},'8':{loc:{start:{line:74,column:8},end:{line:82,column:9}},type:'if',locations:[{start:{line:74,column:8},end:{line:82,column:9}},{start:{line:74,column:8},end:{line:82,column:9}}],line:74},'9':{loc:{start:{line:76,column:12},end:{line:76,column:95}},type:'cond-expr',locations:[{start:{line:76,column:75},end:{line:76,column:81}},{start:{line:76,column:84},end:{line:76,column:95}}],line:76},'10':{loc:{start:{line:76,column:12},end:{line:76,column:72}},type:'binary-expr',locations:[{start:{line:76,column:12},end:{line:76,column:55}},{start:{line:76,column:59},end:{line:76,column:72}}],line:76},'11':{loc:{start:{line:80,column:12},end:{line:81,column:75}},type:'if',locations:[{start:{line:80,column:12},end:{line:81,column:75}},{start:{line:80,column:12},end:{line:81,column:75}}],line:80},'12':{loc:{start:{line:80,column:16},end:{line:80,column:62}},type:'binary-expr',locations:[{start:{line:80,column:16},end:{line:80,column:43}},{start:{line:80,column:47},end:{line:80,column:62}}],line:80},'13':{loc:{start:{line:86,column:8},end:{line:91,column:9}},type:'if',locations:[{start:{line:86,column:8},end:{line:91,column:9}},{start:{line:86,column:8},end:{line:91,column:9}}],line:86},'14':{loc:{start:{line:103,column:8},end:{line:108,column:9}},type:'if',locations:[{start:{line:103,column:8},end:{line:108,column:9}},{start:{line:103,column:8},end:{line:108,column:9}}],line:103},'15':{loc:{start:{line:112,column:22},end:{line:116,column:25}},type:'cond-expr',locations:[{start:{line:113,column:14},end:{line:114,column:25}},{start:{line:115,column:14},end:{line:116,column:25}}],line:112},'16':{loc:{start:{line:117,column:8},end:{line:126,column:9}},type:'if',locations:[{start:{line:117,column:8},end:{line:126,column:9}},{start:{line:117,column:8},end:{line:126,column:9}}],line:117},'17':{loc:{start:{line:117,column:12},end:{line:117,column:51}},type:'binary-expr',locations:[{start:{line:117,column:12},end:{line:117,column:21}},{start:{line:117,column:25},end:{line:117,column:51}}],line:117}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0,'30':0,'31':0,'32':0,'33':0,'34':0,'35':0,'36':0,'37':0,'38':0,'39':0,'40':0,'41':0,'42':0,'43':0,'44':0,'45':0,'46':0,'47':0,'48':0,'49':0,'50':0,'51':0,'52':0,'53':0,'54':0,'55':0,'56':0,'57':0,'58':0,'59':0,'60':0,'61':0,'62':0,'63':0,'64':0,'65':0,'66':0,'67':0,'68':0,'69':0,'70':0,'71':0,'72':0,'73':0,'74':0,'75':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0],'8':[0,0],'9':[0,0],'10':[0,0],'11':[0,0],'12':[0,0],'13':[0,0],'14':[0,0],'15':[0,0],'16':[0,0],'17':[0,0]},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/MainView.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/MainView.ts'],names:[],mappings:'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',sourcesContent:['import { HandlerView } from \'./HandlerView\';\nimport { SelectedArea } from \'./SelectedAreaView\';\nimport { EventObserver } from \'../observer/observer\';\nimport { sliderOptions } from \'../model/sliderOptions\';\n\nclass MainView {\n  public observer: EventObserver;\n  private _sliderBody: HTMLElement;\n  private _parent: HTMLElement;\n  private _selectedArea: SelectedArea;\n  private _handlers: HandlerView[];\n  private _min: number;\n  private _max: number;\n  private _values: number[];\n  private _isVertical: boolean;\n  private _hasRange: boolean;\n  private _hasLabels: boolean;\n  private _mouseMove: any;\n  private _mouseUp: any;\n  private _handlerTargetId: string;\n\n  constructor(\n    parent: HTMLElement,\n    hasRange: boolean,\n    isVertical: boolean,\n    min: number,\n    max: number,\n    values: number[],\n    hasLabels: boolean,\n  ) {\n    this.observer = new EventObserver();\n    this._handlers = [];\n    this._min = min;\n    this._max = max;\n    this._values = values;\n    this._isVertical = isVertical;\n    this._hasRange = hasRange;\n    this._hasLabels = hasLabels;\n    this._parent = parent;\n    this._sliderBody = document.createElement(\'div\');\n\n    this._mouseMove;\n    this._mouseUp;\n    this._handlerTargetId = \'\';\n\n    this.sliderInit();\n    this._selectedArea = new SelectedArea(\n      this._sliderBody,\n      this._hasRange,\n      this._isVertical,\n      this._handlers[0].elem,\n      this._handlers[1].elem,\n    );\n\n    this._handlers.forEach(handler => {\n      handler.elem.ondragstart = function() {\n        return false;\n      };\n      handler.elem.addEventListener(\'mousedown\', this.dragAndDrop.bind(this));\n    });\n  }\n\n  private sliderInit() {\n    this._sliderBody.classList.add(\'sliderBody\');\n    this._parent.appendChild(this._sliderBody);\n    this.setOrientation();\n    this.setHandlers();\n    this.setHandlerPosition();\n  }\n\n  update(valueData: sliderOptions) {\n    this._min = valueData.min ? valueData.min : this._min;\n    this._max = valueData.max ? valueData.max : this._max;\n    this._values = valueData.values ? valueData.values : this._values;\n    this._isVertical = valueData.isVertical !== undefined ? valueData.isVertical : this._isVertical;\n    this._hasRange = valueData.hasRange !== undefined ? valueData.hasRange : this._hasRange;\n    this._hasLabels = valueData.hasLabels !== undefined ? valueData.hasLabels : this._hasLabels;\n\n    this.setOrientation();\n    this.setHandlerPosition();\n    this._handlers.forEach((handler, index) =>\n      handler.updateLabel(this._hasLabels, this._values[index]),\n    );\n    this.updateHandlersAmount();\n    this._selectedArea.updateSelectedRange(\n      this._hasRange,\n      this._isVertical,\n      this._handlers[1].elem,\n      this._handlers[0].elem,\n    );\n  }\n\n  setOrientation() {\n    if (this._isVertical) {\n      this._parent.classList.remove(\'slider_horizontal\');\n      this._parent.classList.add(\'slider_vertical\');\n    } else {\n      this._parent.classList.remove(\'slider_vertical\');\n      this._parent.classList.add(\'slider_horizontal\');\n    }\n  }\n\n  setHandlers() {\n    this._handlers.push(new HandlerView(this._sliderBody, this._hasLabels));\n    if (this._hasRange) {\n      this._handlers.push(new HandlerView(this._sliderBody, this._hasLabels));\n      this._handlers[0].elem.id = \'handler_min\';\n      this._handlers[1].elem.id = \'handler_max\';\n    }\n  }\n\n  getHandlers() {\n    return this._handlers;\n  }\n\n  setHandlerPosition() {\n    this._handlers.forEach((handler, index) =>\n      handler.setPosition(this._values[index], this._min, this._max, this._isVertical),\n    );\n  }\n  updateHandlersAmount() {\n    if (!this._hasRange) {\n      this._handlers[1].elem.remove();\n      this._handlers[1].labelElem?.remove();\n    } else {\n      this._handlers[0].elem.after(this._handlers[1].elem);\n      if (this._handlers[1].labelElem && this._hasLabels)\n        this._handlers[1].elem.before(this._handlers[1].labelElem);\n    }\n  }\n\n  getCoords(elem: HTMLElement) {\n    const box = elem.getBoundingClientRect();\n    if (this._isVertical) {\n      return box.bottom + pageYOffset;\n    } else {\n      return box.left + pageXOffset;\n    }\n  }\n  dragAndDrop(e: MouseEvent) {\n    e.preventDefault();\n    const target = e.target as HTMLDivElement;\n    this._handlerTargetId = target.id;\n    this._mouseMove = this.onMouseMove.bind(this);\n    this._mouseUp = this.onMouseUp.bind(this);\n    document.addEventListener(\'mousemove\', this._mouseMove);\n    document.addEventListener(\'mouseup\', this._mouseUp);\n  }\n\n  onMouseMove(e: MouseEvent) {\n    if (this._isVertical) {\n      this.moveAt(e.pageY, this._handlerTargetId);\n    } else {\n      this.moveAt(e.pageX, this._handlerTargetId);\n    }\n  }\n\n  moveAt(coordinate: number, targetId: string) {\n    const sliderCoord = this.getCoords(this._sliderBody);\n    const value = this._isVertical\n      ? ((sliderCoord - coordinate) / this._sliderBody.offsetHeight) * (this._max - this._min) +\n        this._min\n      : ((coordinate - sliderCoord) / this._sliderBody.offsetWidth) * (this._max - this._min) +\n        this._min;\n    if (!targetId || targetId === \'handler_min\') {\n      this.observer.broadcast({\n        values: [value, this._values[1]],\n      });\n    } else {\n      this.observer.broadcast({\n        values: [this._values[0], value],\n      });\n    }\n  }\n\n  onMouseUp() {\n    document.removeEventListener(\'mousemove\', this._mouseMove);\n    document.removeEventListener(\'mouseup\', this.onMouseUp);\n  }\n}\n\nexport { MainView };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class MainView{constructor(parent,hasRange,isVertical,min,max,values,hasLabels){cov_ogbgaduli.f[0]++;cov_ogbgaduli.s[0]++;this.observer=new _observer_observer__WEBPACK_IMPORTED_MODULE_2__["EventObserver"]();cov_ogbgaduli.s[1]++;this._handlers=[];cov_ogbgaduli.s[2]++;this._min=min;cov_ogbgaduli.s[3]++;this._max=max;cov_ogbgaduli.s[4]++;this._values=values;cov_ogbgaduli.s[5]++;this._isVertical=isVertical;cov_ogbgaduli.s[6]++;this._hasRange=hasRange;cov_ogbgaduli.s[7]++;this._hasLabels=hasLabels;cov_ogbgaduli.s[8]++;this._parent=parent;cov_ogbgaduli.s[9]++;this._sliderBody=document.createElement('div');cov_ogbgaduli.s[10]++;this._mouseMove;cov_ogbgaduli.s[11]++;this._mouseUp;cov_ogbgaduli.s[12]++;this._handlerTargetId='';cov_ogbgaduli.s[13]++;this.sliderInit();cov_ogbgaduli.s[14]++;this._selectedArea=new _SelectedAreaView__WEBPACK_IMPORTED_MODULE_1__["SelectedArea"](this._sliderBody,this._hasRange,this._isVertical,this._handlers[0].elem,this._handlers[1].elem);cov_ogbgaduli.s[15]++;this._handlers.forEach(handler=>{cov_ogbgaduli.f[1]++;cov_ogbgaduli.s[16]++;handler.elem.ondragstart=function(){cov_ogbgaduli.f[2]++;cov_ogbgaduli.s[17]++;return false;};cov_ogbgaduli.s[18]++;handler.elem.addEventListener('mousedown',this.dragAndDrop.bind(this));});}sliderInit(){cov_ogbgaduli.f[3]++;cov_ogbgaduli.s[19]++;this._sliderBody.classList.add('sliderBody');cov_ogbgaduli.s[20]++;this._parent.appendChild(this._sliderBody);cov_ogbgaduli.s[21]++;this.setOrientation();cov_ogbgaduli.s[22]++;this.setHandlers();cov_ogbgaduli.s[23]++;this.setHandlerPosition();}update(valueData){cov_ogbgaduli.f[4]++;cov_ogbgaduli.s[24]++;this._min=valueData.min?(cov_ogbgaduli.b[0][0]++,valueData.min):(cov_ogbgaduli.b[0][1]++,this._min);cov_ogbgaduli.s[25]++;this._max=valueData.max?(cov_ogbgaduli.b[1][0]++,valueData.max):(cov_ogbgaduli.b[1][1]++,this._max);cov_ogbgaduli.s[26]++;this._values=valueData.values?(cov_ogbgaduli.b[2][0]++,valueData.values):(cov_ogbgaduli.b[2][1]++,this._values);cov_ogbgaduli.s[27]++;this._isVertical=valueData.isVertical!==undefined?(cov_ogbgaduli.b[3][0]++,valueData.isVertical):(cov_ogbgaduli.b[3][1]++,this._isVertical);cov_ogbgaduli.s[28]++;this._hasRange=valueData.hasRange!==undefined?(cov_ogbgaduli.b[4][0]++,valueData.hasRange):(cov_ogbgaduli.b[4][1]++,this._hasRange);cov_ogbgaduli.s[29]++;this._hasLabels=valueData.hasLabels!==undefined?(cov_ogbgaduli.b[5][0]++,valueData.hasLabels):(cov_ogbgaduli.b[5][1]++,this._hasLabels);cov_ogbgaduli.s[30]++;this.setOrientation();cov_ogbgaduli.s[31]++;this.setHandlerPosition();cov_ogbgaduli.s[32]++;this._handlers.forEach((handler,index)=>{cov_ogbgaduli.f[5]++;cov_ogbgaduli.s[33]++;return handler.updateLabel(this._hasLabels,this._values[index]);});cov_ogbgaduli.s[34]++;this.updateHandlersAmount();cov_ogbgaduli.s[35]++;this._selectedArea.updateSelectedRange(this._hasRange,this._isVertical,this._handlers[1].elem,this._handlers[0].elem);}setOrientation(){cov_ogbgaduli.f[6]++;cov_ogbgaduli.s[36]++;if(this._isVertical){cov_ogbgaduli.b[6][0]++;cov_ogbgaduli.s[37]++;this._parent.classList.remove('slider_horizontal');cov_ogbgaduli.s[38]++;this._parent.classList.add('slider_vertical');}else{cov_ogbgaduli.b[6][1]++;cov_ogbgaduli.s[39]++;this._parent.classList.remove('slider_vertical');cov_ogbgaduli.s[40]++;this._parent.classList.add('slider_horizontal');}}setHandlers(){cov_ogbgaduli.f[7]++;cov_ogbgaduli.s[41]++;this._handlers.push(new _HandlerView__WEBPACK_IMPORTED_MODULE_0__["HandlerView"](this._sliderBody,this._hasLabels));cov_ogbgaduli.s[42]++;if(this._hasRange){cov_ogbgaduli.b[7][0]++;cov_ogbgaduli.s[43]++;this._handlers.push(new _HandlerView__WEBPACK_IMPORTED_MODULE_0__["HandlerView"](this._sliderBody,this._hasLabels));cov_ogbgaduli.s[44]++;this._handlers[0].elem.id='handler_min';cov_ogbgaduli.s[45]++;this._handlers[1].elem.id='handler_max';}else{cov_ogbgaduli.b[7][1]++;}}getHandlers(){cov_ogbgaduli.f[8]++;cov_ogbgaduli.s[46]++;return this._handlers;}setHandlerPosition(){cov_ogbgaduli.f[9]++;cov_ogbgaduli.s[47]++;this._handlers.forEach((handler,index)=>{cov_ogbgaduli.f[10]++;cov_ogbgaduli.s[48]++;return handler.setPosition(this._values[index],this._min,this._max,this._isVertical);});}updateHandlersAmount(){cov_ogbgaduli.f[11]++;var _a;cov_ogbgaduli.s[49]++;if(!this._hasRange){cov_ogbgaduli.b[8][0]++;cov_ogbgaduli.s[50]++;this._handlers[1].elem.remove();cov_ogbgaduli.s[51]++;(cov_ogbgaduli.b[10][0]++,(_a=this._handlers[1].labelElem)===null)||(cov_ogbgaduli.b[10][1]++,_a===void 0)?(cov_ogbgaduli.b[9][0]++,void 0):(cov_ogbgaduli.b[9][1]++,_a.remove());}else{cov_ogbgaduli.b[8][1]++;cov_ogbgaduli.s[52]++;this._handlers[0].elem.after(this._handlers[1].elem);cov_ogbgaduli.s[53]++;if((cov_ogbgaduli.b[12][0]++,this._handlers[1].labelElem)&&(cov_ogbgaduli.b[12][1]++,this._hasLabels)){cov_ogbgaduli.b[11][0]++;cov_ogbgaduli.s[54]++;this._handlers[1].elem.before(this._handlers[1].labelElem);}else{cov_ogbgaduli.b[11][1]++;}}}getCoords(elem){cov_ogbgaduli.f[12]++;const box=(cov_ogbgaduli.s[55]++,elem.getBoundingClientRect());cov_ogbgaduli.s[56]++;if(this._isVertical){cov_ogbgaduli.b[13][0]++;cov_ogbgaduli.s[57]++;return box.bottom+pageYOffset;}else{cov_ogbgaduli.b[13][1]++;cov_ogbgaduli.s[58]++;return box.left+pageXOffset;}}dragAndDrop(e){cov_ogbgaduli.f[13]++;cov_ogbgaduli.s[59]++;e.preventDefault();const target=(cov_ogbgaduli.s[60]++,e.target);cov_ogbgaduli.s[61]++;this._handlerTargetId=target.id;cov_ogbgaduli.s[62]++;this._mouseMove=this.onMouseMove.bind(this);cov_ogbgaduli.s[63]++;this._mouseUp=this.onMouseUp.bind(this);cov_ogbgaduli.s[64]++;document.addEventListener('mousemove',this._mouseMove);cov_ogbgaduli.s[65]++;document.addEventListener('mouseup',this._mouseUp);}onMouseMove(e){cov_ogbgaduli.f[14]++;cov_ogbgaduli.s[66]++;if(this._isVertical){cov_ogbgaduli.b[14][0]++;cov_ogbgaduli.s[67]++;this.moveAt(e.pageY,this._handlerTargetId);}else{cov_ogbgaduli.b[14][1]++;cov_ogbgaduli.s[68]++;this.moveAt(e.pageX,this._handlerTargetId);}}moveAt(coordinate,targetId){cov_ogbgaduli.f[15]++;const sliderCoord=(cov_ogbgaduli.s[69]++,this.getCoords(this._sliderBody));const value=(cov_ogbgaduli.s[70]++,this._isVertical?(cov_ogbgaduli.b[15][0]++,(sliderCoord-coordinate)/this._sliderBody.offsetHeight*(this._max-this._min)+this._min):(cov_ogbgaduli.b[15][1]++,(coordinate-sliderCoord)/this._sliderBody.offsetWidth*(this._max-this._min)+this._min));cov_ogbgaduli.s[71]++;if((cov_ogbgaduli.b[17][0]++,!targetId)||(cov_ogbgaduli.b[17][1]++,targetId==='handler_min')){cov_ogbgaduli.b[16][0]++;cov_ogbgaduli.s[72]++;this.observer.broadcast({values:[value,this._values[1]]});}else{cov_ogbgaduli.b[16][1]++;cov_ogbgaduli.s[73]++;this.observer.broadcast({values:[this._values[0],value]});}}onMouseUp(){cov_ogbgaduli.f[16]++;cov_ogbgaduli.s[74]++;document.removeEventListener('mousemove',this._mouseMove);cov_ogbgaduli.s[75]++;document.removeEventListener('mouseup',this.onMouseUp);}}

/***/ }),

/***/ "./src/view/SelectedAreaView.ts":
/*!**************************************!*\
  !*** ./src/view/SelectedAreaView.ts ***!
  \**************************************/
/*! exports provided: SelectedArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedArea", function() { return SelectedArea; });
var cov_m4jmfdipa=function(){var path='/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/SelectedAreaView.ts',hash='b4cdb685c8ec772e010697abf34e9bc2c177edbc',Function=function(){}.constructor,global=new Function('return this')(),gcv='__coverage__',coverageData={path:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/SelectedAreaView.ts',statementMap:{'0':{start:{line:3,column:8},end:{line:3,column:30}},'1':{start:{line:4,column:8},end:{line:4,column:60}},'2':{start:{line:5,column:8},end:{line:5,column:49}},'3':{start:{line:6,column:8},end:{line:13,column:9}},'4':{start:{line:7,column:12},end:{line:7,column:63}},'5':{start:{line:8,column:12},end:{line:8,column:57}},'6':{start:{line:11,column:12},end:{line:11,column:63}},'7':{start:{line:12,column:12},end:{line:12,column:68}},'8':{start:{line:16,column:8},end:{line:25,column:9}},'9':{start:{line:17,column:12},end:{line:17,column:63}},'10':{start:{line:18,column:12},end:{line:18,column:66}},'11':{start:{line:19,column:12},end:{line:19,column:57}},'12':{start:{line:22,column:12},end:{line:22,column:66}},'13':{start:{line:23,column:12},end:{line:23,column:63}},'14':{start:{line:24,column:12},end:{line:24,column:68}},'15':{start:{line:28,column:8},end:{line:35,column:99}},'16':{start:{line:38,column:23},end:{line:38,column:51}},'17':{start:{line:39,column:23},end:{line:39,column:52}},'18':{start:{line:40,column:8},end:{line:42,column:99}},'19':{start:{line:43,column:8},end:{line:45,column:97}},'20':{start:{line:48,column:20},end:{line:48,column:48}},'21':{start:{line:49,column:8},end:{line:54,column:9}},'22':{start:{line:50,column:12},end:{line:50,column:44}},'23':{start:{line:53,column:12},end:{line:53,column:42}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:2,column:4},end:{line:2,column:5}},loc:{start:{line:2,column:65},end:{line:14,column:5}},line:2},'1':{name:'(anonymous_1)',decl:{start:{line:15,column:4},end:{line:15,column:5}},loc:{start:{line:15,column:65},end:{line:26,column:5}},line:15},'2':{name:'(anonymous_2)',decl:{start:{line:27,column:4},end:{line:27,column:5}},loc:{start:{line:27,column:41},end:{line:36,column:5}},line:27},'3':{name:'(anonymous_3)',decl:{start:{line:37,column:4},end:{line:37,column:5}},loc:{start:{line:37,column:55},end:{line:46,column:5}},line:37},'4':{name:'(anonymous_4)',decl:{start:{line:47,column:4},end:{line:47,column:5}},loc:{start:{line:47,column:30},end:{line:55,column:5}},line:47}},branchMap:{'0':{loc:{start:{line:6,column:8},end:{line:13,column:9}},type:'if',locations:[{start:{line:6,column:8},end:{line:13,column:9}},{start:{line:6,column:8},end:{line:13,column:9}}],line:6},'1':{loc:{start:{line:16,column:8},end:{line:25,column:9}},type:'if',locations:[{start:{line:16,column:8},end:{line:25,column:9}},{start:{line:16,column:8},end:{line:25,column:9}}],line:16},'2':{loc:{start:{line:28,column:8},end:{line:35,column:98}},type:'cond-expr',locations:[{start:{line:29,column:15},end:{line:33,column:24}},{start:{line:34,column:15},end:{line:35,column:97}}],line:28},'3':{loc:{start:{line:38,column:23},end:{line:38,column:51}},type:'cond-expr',locations:[{start:{line:38,column:34},end:{line:38,column:42}},{start:{line:38,column:45},end:{line:38,column:51}}],line:38},'4':{loc:{start:{line:39,column:23},end:{line:39,column:52}},type:'cond-expr',locations:[{start:{line:39,column:34},end:{line:39,column:42}},{start:{line:39,column:45},end:{line:39,column:52}}],line:39},'5':{loc:{start:{line:40,column:44},end:{line:42,column:98}},type:'cond-expr',locations:[{start:{line:41,column:14},end:{line:41,column:98}},{start:{line:42,column:14},end:{line:42,column:98}}],line:40},'6':{loc:{start:{line:43,column:44},end:{line:45,column:96}},type:'cond-expr',locations:[{start:{line:44,column:14},end:{line:44,column:96}},{start:{line:45,column:14},end:{line:45,column:96}}],line:43},'7':{loc:{start:{line:49,column:8},end:{line:54,column:9}},type:'if',locations:[{start:{line:49,column:8},end:{line:54,column:9}},{start:{line:49,column:8},end:{line:54,column:9}}],line:49}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0},b:{'0':[0,0],'1':[0,0],'2':[0,0],'3':[0,0],'4':[0,0],'5':[0,0],'6':[0,0],'7':[0,0]},inputSourceMap:{version:3,file:'/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/SelectedAreaView.ts',sourceRoot:'',sources:['/Users/kseniatrofimova/Desktop/FSD/sliderPlugin/src/view/SelectedAreaView.ts'],names:[],mappings:'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',sourcesContent:['class SelectedArea {\n  private _selectedRange: HTMLElement;\n  private _parent: HTMLElement;\n\n  constructor(\n    parent: HTMLElement,\n    range: boolean,\n    vertical: boolean,\n    handlerMin: HTMLElement,\n    handlerMax: HTMLElement,\n  ) {\n    this._parent = parent;\n    this._selectedRange = document.createElement(\'div\');\n    this._parent.append(this._selectedRange);\n    if (!range) {\n      this._selectedRange.classList.add(\'selectedRange\');\n      this.setPositionSingle(vertical, handlerMin);\n    } else {\n      this._selectedRange.classList.add(\'range_between\');\n      this.setPositionRange(vertical, handlerMax, handlerMin);\n    }\n  }\n\n  updateSelectedRange(\n    range: boolean,\n    vertical: boolean,\n    handlerMax: HTMLElement,\n    handlerMin: HTMLElement,\n  ): void {\n    if (!range) {\n      this._selectedRange.classList.add(\'selectedRange\');\n      this._selectedRange.classList.remove(\'range_between\');\n      this.setPositionSingle(vertical, handlerMin);\n    } else {\n      this._selectedRange.classList.remove(\'selectedRange\');\n      this._selectedRange.classList.add(\'range_between\');\n      this.setPositionRange(vertical, handlerMax, handlerMin);\n    }\n  }\n\n  private setPositionSingle(vertical: boolean, handler: HTMLElement): void {\n    vertical\n      ? (this._selectedRange.style.height =\n          this.getCoords(this._parent, vertical) -\n          this.getCoords(handler, vertical) +\n          handler.offsetHeight +\n          \'px\')\n      : (this._selectedRange.style.width =\n          this.getCoords(handler, vertical) - this.getCoords(this._parent, vertical) + \'px\');\n  }\n\n  private setPositionRange(\n    vertical: boolean,\n    handlerMax: HTMLElement,\n    handlerMin: HTMLElement,\n  ): void {\n    const posMin = vertical ? \'bottom\' : \'left\';\n    const length = vertical ? \'height\' : \'width\';\n    this._selectedRange.style[posMin] = vertical\n      ? this.getCoords(this._parent, vertical) - this.getCoords(handlerMin, vertical) + \'px\'\n      : this.getCoords(handlerMin, vertical) - this.getCoords(this._parent, vertical) + \'px\';\n    this._selectedRange.style[length] = vertical\n      ? this.getCoords(handlerMin, vertical) - this.getCoords(handlerMax, vertical) + \'px\'\n      : this.getCoords(handlerMax, vertical) - this.getCoords(handlerMin, vertical) + \'px\';\n  }\n\n  private getCoords(elem: HTMLElement, vertical: boolean): number {\n    const box = elem.getBoundingClientRect();\n    if (vertical) {\n      return box.bottom + pageYOffset;\n    } else {\n      return box.left + pageXOffset;\n    }\n  }\n}\n\nexport { SelectedArea };\n']},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class SelectedArea{constructor(parent,range,vertical,handlerMin,handlerMax){cov_m4jmfdipa.f[0]++;cov_m4jmfdipa.s[0]++;this._parent=parent;cov_m4jmfdipa.s[1]++;this._selectedRange=document.createElement('div');cov_m4jmfdipa.s[2]++;this._parent.append(this._selectedRange);cov_m4jmfdipa.s[3]++;if(!range){cov_m4jmfdipa.b[0][0]++;cov_m4jmfdipa.s[4]++;this._selectedRange.classList.add('selectedRange');cov_m4jmfdipa.s[5]++;this.setPositionSingle(vertical,handlerMin);}else{cov_m4jmfdipa.b[0][1]++;cov_m4jmfdipa.s[6]++;this._selectedRange.classList.add('range_between');cov_m4jmfdipa.s[7]++;this.setPositionRange(vertical,handlerMax,handlerMin);}}updateSelectedRange(range,vertical,handlerMax,handlerMin){cov_m4jmfdipa.f[1]++;cov_m4jmfdipa.s[8]++;if(!range){cov_m4jmfdipa.b[1][0]++;cov_m4jmfdipa.s[9]++;this._selectedRange.classList.add('selectedRange');cov_m4jmfdipa.s[10]++;this._selectedRange.classList.remove('range_between');cov_m4jmfdipa.s[11]++;this.setPositionSingle(vertical,handlerMin);}else{cov_m4jmfdipa.b[1][1]++;cov_m4jmfdipa.s[12]++;this._selectedRange.classList.remove('selectedRange');cov_m4jmfdipa.s[13]++;this._selectedRange.classList.add('range_between');cov_m4jmfdipa.s[14]++;this.setPositionRange(vertical,handlerMax,handlerMin);}}setPositionSingle(vertical,handler){cov_m4jmfdipa.f[2]++;cov_m4jmfdipa.s[15]++;vertical?(cov_m4jmfdipa.b[2][0]++,this._selectedRange.style.height=this.getCoords(this._parent,vertical)-this.getCoords(handler,vertical)+handler.offsetHeight+'px'):(cov_m4jmfdipa.b[2][1]++,this._selectedRange.style.width=this.getCoords(handler,vertical)-this.getCoords(this._parent,vertical)+'px');}setPositionRange(vertical,handlerMax,handlerMin){cov_m4jmfdipa.f[3]++;const posMin=(cov_m4jmfdipa.s[16]++,vertical?(cov_m4jmfdipa.b[3][0]++,'bottom'):(cov_m4jmfdipa.b[3][1]++,'left'));const length=(cov_m4jmfdipa.s[17]++,vertical?(cov_m4jmfdipa.b[4][0]++,'height'):(cov_m4jmfdipa.b[4][1]++,'width'));cov_m4jmfdipa.s[18]++;this._selectedRange.style[posMin]=vertical?(cov_m4jmfdipa.b[5][0]++,this.getCoords(this._parent,vertical)-this.getCoords(handlerMin,vertical)+'px'):(cov_m4jmfdipa.b[5][1]++,this.getCoords(handlerMin,vertical)-this.getCoords(this._parent,vertical)+'px');cov_m4jmfdipa.s[19]++;this._selectedRange.style[length]=vertical?(cov_m4jmfdipa.b[6][0]++,this.getCoords(handlerMin,vertical)-this.getCoords(handlerMax,vertical)+'px'):(cov_m4jmfdipa.b[6][1]++,this.getCoords(handlerMax,vertical)-this.getCoords(handlerMin,vertical)+'px');}getCoords(elem,vertical){cov_m4jmfdipa.f[4]++;const box=(cov_m4jmfdipa.s[20]++,elem.getBoundingClientRect());cov_m4jmfdipa.s[21]++;if(vertical){cov_m4jmfdipa.b[7][0]++;cov_m4jmfdipa.s[22]++;return box.bottom+pageYOffset;}else{cov_m4jmfdipa.b[7][1]++;cov_m4jmfdipa.s[23]++;return box.left+pageXOffset;}}}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/index ./src/demo/demo ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index */"./src/index.ts");
module.exports = __webpack_require__(/*! ./src/demo/demo */"./src/demo/demo.ts");


/***/ })

/******/ });