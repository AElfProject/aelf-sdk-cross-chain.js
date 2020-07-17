/*!
 * aelf-sdk-cross-chain.js v1.0.12 
 * (c) 2019-2020 AElf 
 * Released under MIT License
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(7);

var iterableToArray = __webpack_require__(8);

var nonIterableSpread = __webpack_require__(9);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(11);

var iterableToArrayLimit = __webpack_require__(12);

var nonIterableRest = __webpack_require__(13);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(4);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(5);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(6);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(1);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/crossChain/utils.js



/**
 * @author huangzongzhe
 * @file utils.js
 * @description utils for crossChain
 */
// module.exports = function decodeCrossChainTxFromBase64({
function decodeCrossChainTxFromBase64(_ref) {
  var AElfPbUtils = _ref.AElfPbUtils,
      txBase64 = _ref.txBase64,
      tokenContract = _ref.tokenContract;
  var decodeTx = AElfPbUtils.Transaction.decode(Buffer.from(txBase64, 'base64'));
  var result = AElfPbUtils.Transaction.toObject(decodeTx, {
    enums: String,
    // enums as string names
    longs: String,
    // longs as strings (requires long.js)
    bytes: String,
    // bytes as base64 encoded strings
    defaults: true,
    // includes default values
    arrays: true,
    // populates empty arrays (repeated fields) even if defaults=false
    objects: true,
    // populates empty objects (map fields) even if defaults=false
    oneofs: true // includes virtual oneof fields set to the present field's name

  });
  result.from = AElfPbUtils.getRepForAddress(result.from);
  result.to = AElfPbUtils.getRepForAddress(result.to); // The tokenContract of the chain which calls the crossTransfer is the best.

  result.params = tokenContract.CrossChainTransfer.unpackPackedInput(Buffer.from(result.params, 'base64').toString('hex'));
  return result;
} // Demo
// decodeCrossChainTxFromBase64({
//   txBase64: `CiIKIOC0Ddw1INC1NjvZd1AU135Lj+gylG0OOCVzHYkSe4E6EiIKIHeO
// MAahLMYJ14utgl9rwY/x41Tsf9qqAt5xwJg6u/cFGKOzfSIEL0SKSCoSQ3Jvc3NDaGFpblRyYW5zZmVyMlYKIgog
// 4LQN3DUg0LU2O9l3UBTXfkuP6DKUbQ44JXMdiRJ7gToSA0VMRhgCIh9IZWxsb0tpdHR5IGNyb3NzIGNoYWluIHRy
// YW5zZmVyKIL0pwEwm/ThBILxBEHcVPiIdDsRTrASLMNdS1VChGKVw1hVfchCpcynCNaA+U3nvo5AW84Lia+HQHUA
// J2RtmaULu8ySzVkDMiIbv69UAA==`, tokenContract});

function getChainIdsAndContractAddresses(_x) {
  return _getChainIdsAndContractAddresses.apply(this, arguments);
}

function _getChainIdsAndContractAddresses() {
  _getChainIdsAndContractAddresses = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(options) {
    var contractAddresses, chainIds, sendInstance, receiveInstance, wallet, sha256, tokenContractName, crossChainContractName, _tokenContractAddressSend, _crossChainContractAddressSend, _tokenContractAddressReceive, _crossChainContractAddressReceive, _chainIdSend, _chainIdReceive, output, returnOutput, _ref2, genesisContractAddressSend, chainIdSend, _ref3, genesisContractAddressReceive, chainIdReceive, genesisContractInstanceSend, genesisContractInstanceReceive, tokenContractAddressSend, crossChainContractAddressSend, tokenContractAddressReceive, crossChainContractAddressReceive;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            contractAddresses = options.contractAddresses, chainIds = options.chainIds, sendInstance = options.sendInstance, receiveInstance = options.receiveInstance, wallet = options.wallet, sha256 = options.sha256, tokenContractName = options.tokenContractName, crossChainContractName = options.crossChainContractName;

            if (!(contractAddresses && chainIds)) {
              _context.next = 9;
              break;
            }

            _tokenContractAddressSend = contractAddresses.tokenContractAddressSend, _crossChainContractAddressSend = contractAddresses.crossChainContractAddressSend, _tokenContractAddressReceive = contractAddresses.tokenContractAddressReceive, _crossChainContractAddressReceive = contractAddresses.crossChainContractAddressReceive;
            _chainIdSend = chainIds.chainIdSend, _chainIdReceive = chainIds.chainIdReceive;
            output = {
              tokenContractAddressSend: _tokenContractAddressSend,
              crossChainContractAddressSend: _crossChainContractAddressSend,
              tokenContractAddressReceive: _tokenContractAddressReceive,
              crossChainContractAddressReceive: _crossChainContractAddressReceive,
              chainIdSend: _chainIdSend,
              chainIdReceive: _chainIdReceive
            };
            returnOutput = true;
            Object.keys(output).forEach(function (key) {
              if (!output[key]) {
                returnOutput = false;
              }
            });

            if (!returnOutput) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", output);

          case 9:
            _context.next = 11;
            return sendInstance.chain.getChainStatus();

          case 11:
            _ref2 = _context.sent;
            genesisContractAddressSend = _ref2.GenesisContractAddress;
            chainIdSend = _ref2.ChainId;
            _context.next = 16;
            return receiveInstance.chain.getChainStatus();

          case 16:
            _ref3 = _context.sent;
            genesisContractAddressReceive = _ref3.GenesisContractAddress;
            chainIdReceive = _ref3.ChainId;
            _context.next = 21;
            return sendInstance.chain.contractAt(genesisContractAddressSend, wallet);

          case 21:
            genesisContractInstanceSend = _context.sent;
            _context.next = 24;
            return receiveInstance.chain.contractAt(genesisContractAddressReceive, wallet);

          case 24:
            genesisContractInstanceReceive = _context.sent;
            _context.next = 27;
            return genesisContractInstanceSend.GetContractAddressByName.call(sha256(tokenContractName));

          case 27:
            tokenContractAddressSend = _context.sent;
            _context.next = 30;
            return genesisContractInstanceSend.GetContractAddressByName.call(sha256(crossChainContractName));

          case 30:
            crossChainContractAddressSend = _context.sent;
            _context.next = 33;
            return genesisContractInstanceReceive.GetContractAddressByName.call(sha256(tokenContractName));

          case 33:
            tokenContractAddressReceive = _context.sent;
            _context.next = 36;
            return genesisContractInstanceReceive.GetContractAddressByName.call(sha256(crossChainContractName));

          case 36:
            crossChainContractAddressReceive = _context.sent;
            return _context.abrupt("return", {
              tokenContractAddressSend: tokenContractAddressSend,
              crossChainContractAddressSend: crossChainContractAddressSend,
              tokenContractAddressReceive: tokenContractAddressReceive,
              crossChainContractAddressReceive: crossChainContractAddressReceive,
              chainIdSend: chainIdSend,
              chainIdReceive: chainIdReceive
            });

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getChainIdsAndContractAddresses.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/crossChain/tokenCrossChainBasic.js








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @author huangzongzhe
 * @file crossChain.js
 * @description
 */
// module.exports = class TokenCrossChainBasic {


var tokenCrossChainBasic_TokenCrossChainBasic =
/*#__PURE__*/
function () {
  function TokenCrossChainBasic(_ref) {
    var AElfUtils = _ref.AElfUtils,
        sendInstance = _ref.sendInstance,
        receiveInstance = _ref.receiveInstance,
        _ref$mainChainId = _ref.mainChainId,
        mainChainId = _ref$mainChainId === void 0 ? 9992731 : _ref$mainChainId,
        _ref$issueChainId = _ref.issueChainId,
        issueChainId = _ref$issueChainId === void 0 ? 9992731 : _ref$issueChainId,
        _ref$tokenContractNam = _ref.tokenContractName,
        tokenContractName = _ref$tokenContractNam === void 0 ? 'AElf.ContractNames.Token' : _ref$tokenContractNam,
        _ref$crossChainContra = _ref.crossChainContractName,
        crossChainContractName = _ref$crossChainContra === void 0 ? 'AElf.ContractNames.CrossChain' : _ref$crossChainContra,
        _ref$reQueryInterval = _ref.reQueryInterval,
        reQueryInterval = _ref$reQueryInterval === void 0 ? 5000 : _ref$reQueryInterval,
        _ref$queryLimit = _ref.queryLimit,
        queryLimit = _ref$queryLimit === void 0 ? 100 : _ref$queryLimit;

    classCallCheck_default()(this, TokenCrossChainBasic);

    this.aelfInstance = {
      sendInstance: sendInstance,
      receiveInstance: receiveInstance
    };
    var sha256 = AElfUtils.sha256,
        chainIdConvertor = AElfUtils.chainIdConvertor;
    this.tokenContractName = tokenContractName;
    this.crossChainContractName = crossChainContractName; // this.crossQueen = {}; // TODO: 跨链发送等待队列

    this.mainChainId = typeof mainChainId === 'string' ? chainIdConvertor.base58ToChainId(mainChainId) : mainChainId; // ex: AELF -> 9992731

    this.issueChainId = typeof issueChainId === 'string' ? chainIdConvertor.base58ToChainId(issueChainId) : issueChainId;
    this.reQueryInterval = reQueryInterval;
    this.getBoundParentChainHeightAndMerklePathByHeightLimit = queryLimit;
    this.getBoundParentChainHeightAndMerklePathByHeightCount = 0;
    this.getBoundParentChainHeightAndMerklePathByHeightError = null;
    this.sha256 = sha256;
    this.chainIdConvertor = chainIdConvertor;
  }

  createClass_default()(TokenCrossChainBasic, [{
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref2) {
        var wallet, _ref2$contractAddress, contractAddresses, _ref2$chainIds, chainIds, _this$aelfInstance, sendInstance, receiveInstance, tokenContractName, crossChainContractName, sha256, _ref3, tokenContractAddressSend, crossChainContractAddressSend, tokenContractAddressReceive, crossChainContractAddressReceive, chainIdSend, chainIdReceive, _ref4, _ref5, tokenContractSend, crossChainContractSend, tokenContractReceive, crossChainContractReceive;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wallet = _ref2.wallet, _ref2$contractAddress = _ref2.contractAddresses, contractAddresses = _ref2$contractAddress === void 0 ? null : _ref2$contractAddress, _ref2$chainIds = _ref2.chainIds, chainIds = _ref2$chainIds === void 0 ? null : _ref2$chainIds;
                _this$aelfInstance = this.aelfInstance, sendInstance = _this$aelfInstance.sendInstance, receiveInstance = _this$aelfInstance.receiveInstance;
                tokenContractName = this.tokenContractName, crossChainContractName = this.crossChainContractName, sha256 = this.sha256;
                _context.next = 5;
                return getChainIdsAndContractAddresses({
                  contractAddresses: contractAddresses,
                  chainIds: chainIds,
                  sendInstance: sendInstance,
                  receiveInstance: receiveInstance,
                  wallet: wallet,
                  sha256: sha256,
                  tokenContractName: tokenContractName,
                  crossChainContractName: crossChainContractName
                });

              case 5:
                _ref3 = _context.sent;
                tokenContractAddressSend = _ref3.tokenContractAddressSend;
                crossChainContractAddressSend = _ref3.crossChainContractAddressSend;
                tokenContractAddressReceive = _ref3.tokenContractAddressReceive;
                crossChainContractAddressReceive = _ref3.crossChainContractAddressReceive;
                chainIdSend = _ref3.chainIdSend;
                chainIdReceive = _ref3.chainIdReceive;
                _context.next = 14;
                return Promise.all([sendInstance.chain.contractAt(tokenContractAddressSend, wallet), sendInstance.chain.contractAt(crossChainContractAddressSend, wallet), receiveInstance.chain.contractAt(tokenContractAddressReceive, wallet), receiveInstance.chain.contractAt(crossChainContractAddressReceive, wallet)]);

              case 14:
                _ref4 = _context.sent;
                _ref5 = slicedToArray_default()(_ref4, 4);
                tokenContractSend = _ref5[0];
                crossChainContractSend = _ref5[1];
                tokenContractReceive = _ref5[2];
                crossChainContractReceive = _ref5[3];
                this.aelfInstance.tokenContractSend = tokenContractSend;
                this.aelfInstance.tokenContractReceive = tokenContractReceive;
                this.aelfInstance.crossChainContractSend = crossChainContractSend;
                this.aelfInstance.crossChainContractReceive = crossChainContractReceive;
                this.chainIdSendBase58 = chainIdSend;
                this.chainIdReceiveBase58 = chainIdReceive;
                return _context.abrupt("return", {
                  tokenContractSend: tokenContractSend,
                  tokenContractReceive: tokenContractReceive,
                  crossChainContractSend: crossChainContractSend,
                  crossChainContractReceive: crossChainContractReceive,
                  chainIdSend: chainIdSend,
                  chainIdReceive: chainIdReceive
                });

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(contractsAndChainIds, paramsSendInput) {
        var chainIdConvertor, tokenContractSend, chainIdReceive, paramsSend, crossTransferTxId, transactionId;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                chainIdConvertor = this.chainIdConvertor; // {
                //   to: receiveAddress,
                //   symbol: tokenInfo.symbol,
                //   amount: 1,
                //   memo: 'HelloKitty cross chain transfer',
                //   // toChainId: parseInt(ChainIdB, 10),
                //   // toChainId: chainIdConvertor.base58ToChainId(ChainIdReceive),
                //   // issueChainId: chainIdConvertor.base58ToChainId(tokenInfoA.issueChainId)
                //   // issueChainId: chainIdConvertor.base58ToChainId(ChainIdSend)
                // }

                tokenContractSend = contractsAndChainIds.tokenContractSend, chainIdReceive = contractsAndChainIds.chainIdReceive;
                paramsSend = _objectSpread({}, paramsSendInput, {
                  toChainId: chainIdConvertor.base58ToChainId(chainIdReceive),
                  issueChainId: this.issueChainId
                });
                // if memo === '', set memo = null
                paramsSend.memo = paramsSend.memo || null;
                _context2.next = 6;
                return tokenContractSend.CrossChainTransfer(paramsSend);

              case 6:
                crossTransferTxId = _context2.sent;
                transactionId = crossTransferTxId.TransactionId;
                return _context2.abrupt("return", {
                  toChainId: paramsSend.toChainId,
                  issueChainId: paramsSend.issueChainId,
                  crossTransferTxId: transactionId
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function send(_x2, _x3) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "getCrossTransferRawTx",
    value: function () {
      var _getCrossTransferRawTx = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4(_ref6) {
        var _this = this;

        var aelfInstance, aelfInstanceTokenContract, transactionId, crossTransferTxInfo, Status, blockInfo, crossTransferRawTx;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                aelfInstance = _ref6.aelfInstance, aelfInstanceTokenContract = _ref6.aelfInstanceTokenContract, transactionId = _ref6.transactionId;
                _context4.next = 3;
                return aelfInstance.chain.getTxResult(transactionId);

              case 3:
                crossTransferTxInfo = _context4.sent;
                Status = crossTransferTxInfo.Status;

                if (!(Status && Status !== 'MINED')) {
                  _context4.next = 9;
                  break;
                }

                if (!(Status.toLowerCase() === 'pending')) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", new Promise(function (resolve) {
                  setTimeout(
                  /*#__PURE__*/
                  asyncToGenerator_default()(
                  /*#__PURE__*/
                  regenerator_default.a.mark(function _callee3() {
                    return regenerator_default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.t0 = resolve;
                            _context3.next = 3;
                            return _this.getCrossTransferRawTx({
                              aelfInstance: aelfInstance,
                              aelfInstanceTokenContract: aelfInstanceTokenContract,
                              transactionId: transactionId
                            });

                          case 3:
                            _context3.t1 = _context3.sent;
                            (0, _context3.t0)(_context3.t1);

                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  })), _this.reQueryInterval);
                }));

              case 8:
                throw Error(JSON.stringify({
                  error: 1,
                  message: "".concat(transactionId, " is not MINED.[").concat(Status, "]"),
                  canReceive: false
                }));

              case 9:
                _context4.next = 11;
                return aelfInstance.chain.getBlockByHeight(crossTransferTxInfo.Transaction.RefBlockNumber, false);

              case 11:
                blockInfo = _context4.sent;
                // console.log('blockInfo: ', blockInfo);
                // console.log('crossTransferTxInfo.Transaction.Params: ', crossTransferTxInfo.Transaction.Params);
                crossTransferRawTx = aelfInstanceTokenContract.CrossChainTransfer.getSignedTx(JSON.parse(crossTransferTxInfo.Transaction.Params), {
                  height: blockInfo.Header.Height,
                  hash: blockInfo.BlockHash
                });
                return _context4.abrupt("return", {
                  crossTransferTxInfo: crossTransferTxInfo,
                  crossTransferRawTx: crossTransferRawTx
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getCrossTransferRawTx(_x4) {
        return _getCrossTransferRawTx.apply(this, arguments);
      }

      return getCrossTransferRawTx;
    }() // TODO: 可做可不做，调用GetBoundParentChainHeightAndMerklePathByHeight前
    // 需要先判断当前侧链是否索引了 主链索引侧链跨链交易的区块
    // 不然会403，报 'Invalid transaction information'

  }, {
    key: "getBoundParentChainHeightAndMerklePathByHeight",
    value: function () {
      var _getBoundParentChainHeightAndMerklePathByHeight = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(_ref8) {
        var _this2 = this;

        var crossChainContractSend, crossTransferTxBlockHeight, _ref9, merklePathFromParentChain, boundParentChainHeight;

        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                crossChainContractSend = _ref8.crossChainContractSend, crossTransferTxBlockHeight = _ref8.crossTransferTxBlockHeight;

                if (!(this.getBoundParentChainHeightAndMerklePathByHeightCount >= this.getBoundParentChainHeightAndMerklePathByHeightLimit)) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", Promise.reject(this.getBoundParentChainHeightAndMerklePathByHeightError));

              case 3:
                _context5.prev = 3;
                _context5.next = 6;
                return crossChainContractSend.GetBoundParentChainHeightAndMerklePathByHeight.call({
                  value: crossTransferTxBlockHeight
                });

              case 6:
                _ref9 = _context5.sent;
                merklePathFromParentChain = _ref9.merklePathFromParentChain;
                boundParentChainHeight = _ref9.boundParentChainHeight;
                this.getBoundParentChainHeightAndMerklePathByHeightCount = 0; // console.log('merklePathFromParentChain 2333,', merklePathFromParentChain, testData, boundParentChainHeight);

                return _context5.abrupt("return", {
                  merklePathFromParentChain: merklePathFromParentChain,
                  boundParentChainHeight: boundParentChainHeight
                });

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5["catch"](3);
                this.getBoundParentChainHeightAndMerklePathByHeightError = _context5.t0;
                this.getBoundParentChainHeightAndMerklePathByHeightCount++;
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    _this2.getBoundParentChainHeightAndMerklePathByHeight({
                      crossChainContractSend: crossChainContractSend,
                      crossTransferTxBlockHeight: crossTransferTxBlockHeight
                    }).then(resolve).catch(reject); // resolve(await this.getBoundParentChainHeightAndMerklePathByHeight({
                    //   crossChainContractSend,
                    //   crossTransferTxBlockHeight
                    // }));

                  }, _this2.reQueryInterval);
                }));

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 13]]);
      }));

      function getBoundParentChainHeightAndMerklePathByHeight(_x5) {
        return _getBoundParentChainHeightAndMerklePathByHeight.apply(this, arguments);
      }

      return getBoundParentChainHeightAndMerklePathByHeight;
    }()
    /* eslint-disable max-len */
    // merklePath demo:
    // {
    //   merklePathNodes: [
    //     {
    //       hash: {
    //         value: Buffer.from('93125e44277a02497e1a26bcda2bad188848c821ca8b12aa970a98bc00e9c3d6', 'hex').toString('base64')
    //       }
    //     },
    //     {
    //       hash: {
    //         value: Buffer.from('b93d8d3f6e3f1fc90921a0008e572d348aed13613fd8ccfa775f0189d0a18ecb', 'hex').toString('base64')
    //       },
    //       isLeftChildNode: true
    //     }
    //   ]
    // }

    /* eslint-enable max-len */

  }, {
    key: "getMerklePath",
    value: function () {
      var _getMerklePath = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee6(_ref10) {
        var sendInstance, crossChainContractSend, crossTransferTxId, crossTransferTxBlockHeight, _ref10$isFromMainChai, isFromMainChain, merklePathByTxId, merklePath, boundParentChainHeight, _ref11, merklePathFromParentChain, boundParentChainHeightTemp;

        return regenerator_default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                sendInstance = _ref10.sendInstance, crossChainContractSend = _ref10.crossChainContractSend, crossTransferTxId = _ref10.crossTransferTxId, crossTransferTxBlockHeight = _ref10.crossTransferTxBlockHeight, _ref10$isFromMainChai = _ref10.isFromMainChain, isFromMainChain = _ref10$isFromMainChai === void 0 ? false : _ref10$isFromMainChai;
                _context6.next = 3;
                return sendInstance.chain.getMerklePathByTxId(crossTransferTxId);

              case 3:
                merklePathByTxId = _context6.sent;
                merklePath = {
                  merklePathNodes: toConsumableArray_default()(merklePathByTxId.MerklePathNodes)
                };
                merklePath.merklePathNodes = merklePath.merklePathNodes.map(function (item) {
                  return {
                    hash: {
                      value: Buffer.from(item.Hash, 'hex').toString('base64')
                    },
                    isLeftChildNode: item.IsLeftChildNode
                  };
                });
                boundParentChainHeight = -1; // [chain]side to side, side to main.

                if (isFromMainChain) {
                  _context6.next = 15;
                  break;
                }

                _context6.next = 10;
                return this.getBoundParentChainHeightAndMerklePathByHeight({
                  crossChainContractSend: crossChainContractSend,
                  crossTransferTxBlockHeight: crossTransferTxBlockHeight
                });

              case 10:
                _ref11 = _context6.sent;
                merklePathFromParentChain = _ref11.merklePathFromParentChain;
                boundParentChainHeightTemp = _ref11.boundParentChainHeight;
                // console.log('merklePathFromParentChain: ', merklePath, merklePathFromParentChain);
                boundParentChainHeight = boundParentChainHeightTemp;
                merklePath.merklePathNodes = [].concat(toConsumableArray_default()(merklePath.merklePathNodes), toConsumableArray_default()(merklePathFromParentChain.merklePathNodes)); // console.log('boundParentChainHeight: ', boundParentChainHeightTemp, crossTransferTxBlockHeight);

              case 15:
                return _context6.abrupt("return", {
                  boundParentChainHeight: boundParentChainHeight,
                  merklePath: merklePath
                });

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getMerklePath(_x6) {
        return _getMerklePath.apply(this, arguments);
      }

      return getMerklePath;
    }()
  }, {
    key: "recevieInit",
    value: function () {
      var _recevieInit = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee7(_ref12) {
        var crossTransferTxId, chainIdConvertor, _this$aelfInstance2, sendInstance, tokenContractSend, tokenContractReceive, _ref13, lastIrreversibleBlockHeight, _ref14, crossTransferTxInfo, crossTransferRawTx, crossTransferTxBlockHeight, chainIdSend, chainIdReceive, isFromMainChain, isToMainChain;

        return regenerator_default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                crossTransferTxId = _ref12.crossTransferTxId;
                chainIdConvertor = this.chainIdConvertor;
                _this$aelfInstance2 = this.aelfInstance, sendInstance = _this$aelfInstance2.sendInstance, tokenContractSend = _this$aelfInstance2.tokenContractSend, tokenContractReceive = _this$aelfInstance2.tokenContractReceive;

                if (!(!tokenContractReceive || !tokenContractSend)) {
                  _context7.next = 5;
                  break;
                }

                throw Error(JSON.stringify({
                  error: 1,
                  message: 'Please call tokenCrossChain.init to get tokenContractReceive & tokenContractSend at first.',
                  canReceive: false
                }));

              case 5:
                _context7.next = 7;
                return sendInstance.chain.getChainStatus();

              case 7:
                _ref13 = _context7.sent;
                lastIrreversibleBlockHeight = _ref13.LastIrreversibleBlockHeight;
                _context7.next = 11;
                return this.getCrossTransferRawTx({
                  aelfInstance: sendInstance,
                  aelfInstanceTokenContract: tokenContractSend,
                  transactionId: crossTransferTxId
                });

              case 11:
                _ref14 = _context7.sent;
                crossTransferTxInfo = _ref14.crossTransferTxInfo;
                crossTransferRawTx = _ref14.crossTransferRawTx;
                crossTransferTxBlockHeight = crossTransferTxInfo.BlockNumber;
                chainIdSend = chainIdConvertor.base58ToChainId(this.chainIdSendBase58);
                chainIdReceive = chainIdConvertor.base58ToChainId(this.chainIdReceiveBase58);
                isFromMainChain = chainIdSend === this.mainChainId;
                isToMainChain = chainIdReceive === this.mainChainId;
                return _context7.abrupt("return", {
                  lastIrreversibleBlockHeight: lastIrreversibleBlockHeight,
                  crossTransferTxInfo: crossTransferTxInfo,
                  crossTransferRawTx: crossTransferRawTx,
                  crossTransferTxBlockHeight: crossTransferTxBlockHeight,
                  chainIdSend: chainIdSend,
                  chainIdReceive: chainIdReceive,
                  isFromMainChain: isFromMainChain,
                  isToMainChain: isToMainChain
                });

              case 20:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function recevieInit(_x7) {
        return _recevieInit.apply(this, arguments);
      }

      return recevieInit;
    }()
  }, {
    key: "isChainReadyToReceive",
    value: function () {
      var _isChainReadyToReceive = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee8(_ref15) {
        var crossTransferTxId, _this$aelfInstance3, sendInstance, crossChainContractSend, crossChainContractReceive, _ref16, lastIrreversibleBlockHeight, crossTransferTxInfo, crossTransferRawTx, crossTransferTxBlockHeight, chainIdSend, isFromMainChain, isToMainChain, _ref17, boundParentChainHeight, merklePath, crossTransferTxParentBlockHeight, _ref18, parentChainHeight, _ref19, sideChainHeightInMainChain, _ref20, receiveChainParentChainHeight;

        return regenerator_default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                crossTransferTxId = _ref15.crossTransferTxId;
                _this$aelfInstance3 = this.aelfInstance, sendInstance = _this$aelfInstance3.sendInstance, crossChainContractSend = _this$aelfInstance3.crossChainContractSend, crossChainContractReceive = _this$aelfInstance3.crossChainContractReceive;
                _context8.next = 4;
                return this.recevieInit({
                  crossTransferTxId: crossTransferTxId
                });

              case 4:
                _ref16 = _context8.sent;
                lastIrreversibleBlockHeight = _ref16.lastIrreversibleBlockHeight;
                crossTransferTxInfo = _ref16.crossTransferTxInfo;
                crossTransferRawTx = _ref16.crossTransferRawTx;
                crossTransferTxBlockHeight = _ref16.crossTransferTxBlockHeight;
                chainIdSend = _ref16.chainIdSend;
                isFromMainChain = _ref16.isFromMainChain;
                isToMainChain = _ref16.isToMainChain;

                if (!(lastIrreversibleBlockHeight >= crossTransferTxBlockHeight)) {
                  _context8.next = 52;
                  break;
                }

                if (!(crossTransferTxInfo.Status && crossTransferTxInfo.Status === 'MINED')) {
                  _context8.next = 49;
                  break;
                }

                _context8.next = 16;
                return this.getMerklePath({
                  sendInstance: sendInstance,
                  crossChainContractSend: crossChainContractSend,
                  crossTransferTxId: crossTransferTxId,
                  crossTransferTxBlockHeight: crossTransferTxBlockHeight,
                  isFromMainChain: isFromMainChain
                });

              case 16:
                _ref17 = _context8.sent;
                boundParentChainHeight = _ref17.boundParentChainHeight;
                merklePath = _ref17.merklePath;
                crossTransferTxParentBlockHeight = crossTransferTxBlockHeight;

                if (!isFromMainChain) {
                  _context8.next = 30;
                  break;
                }

                _context8.next = 23;
                return crossChainContractReceive.GetParentChainHeight.call();

              case 23:
                _ref18 = _context8.sent;
                parentChainHeight = _ref18.value;
                parentChainHeight = parseInt(parentChainHeight, 10); // console.log('parentChainHeight: ', parentChainHeight);
                // If the crossChainContractReceive belongs to mainChain, we will get {value: '-1'};
                // If the crossChainContractReceive belongs to sideChain.

                if (!(parentChainHeight >= 0 && parentChainHeight < crossTransferTxBlockHeight)) {
                  _context8.next = 28;
                  break;
                }

                throw Error(JSON.stringify({
                  error: 1,
                  message: "the parent chain block at height of ".concat(crossTransferTxBlockHeight) + 'is not recorded, please waiting.',
                  canReceive: true
                }));

              case 28:
                _context8.next = 48;
                break;

              case 30:
                if (!isToMainChain) {
                  _context8.next = 40;
                  break;
                }

                // side chain to main chain
                crossTransferTxParentBlockHeight = boundParentChainHeight;
                _context8.next = 34;
                return crossChainContractReceive.GetSideChainHeight.call({
                  value: chainIdSend
                });

              case 34:
                _ref19 = _context8.sent;
                sideChainHeightInMainChain = _ref19.value;

                if (!(sideChainHeightInMainChain < crossTransferTxBlockHeight)) {
                  _context8.next = 38;
                  break;
                }

                throw Error(JSON.stringify({
                  error: 1,
                  message: "The side chains are not ready to receive tx.\n                The height of the side chain recorded in main chain is ".concat(sideChainHeightInMainChain, ".\n                sideChainHeightInMainChain need >= ").concat(crossTransferTxBlockHeight, "."),
                  canReceive: true
                }));

              case 38:
                _context8.next = 48;
                break;

              case 40:
                _context8.next = 42;
                return crossChainContractReceive.GetParentChainHeight.call();

              case 42:
                _ref20 = _context8.sent;
                receiveChainParentChainHeight = _ref20.value;
                receiveChainParentChainHeight = parseInt(receiveChainParentChainHeight, 10); // When we call this.getMerklePath

                if (!(boundParentChainHeight > receiveChainParentChainHeight)) {
                  _context8.next = 47;
                  break;
                }

                throw Error(JSON.stringify({
                  error: 1,
                  message: "The side chains are not ready to receive tx.\n                The boundParentChainHeight of crossChainTransfer is ".concat(boundParentChainHeight, "\n                The parentChainHeight of the chain which receives the tx is ").concat(receiveChainParentChainHeight, "."),
                  canReceive: true
                }));

              case 47:
                crossTransferTxParentBlockHeight = boundParentChainHeight;

              case 48:
                return _context8.abrupt("return", {
                  isReady: true,
                  crossTransferRawTx: crossTransferRawTx,
                  chainIdSend: chainIdSend,
                  merklePath: merklePath,
                  crossTransferTxParentBlockHeight: crossTransferTxParentBlockHeight
                });

              case 49:
                throw Error(JSON.stringify({
                  error: 3,
                  message: "The transaction ".concat(crossTransferTxId, " of CrossChainTransfer\n          is ").concat(crossTransferTxInfo.Status, "."),
                  canReceive: true
                }));

              case 52:
                throw Error(JSON.stringify({
                  error: 2,
                  message: "Please waiting until the lastIrreversibleBlockHeight[".concat(lastIrreversibleBlockHeight, "]\n          >= 'the height[").concat(crossTransferTxBlockHeight, "] of transaction of tokenCrossChainInstance.send()'\n          "),
                  canReceive: true
                }));

              case 53:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function isChainReadyToReceive(_x8) {
        return _isChainReadyToReceive.apply(this, arguments);
      }

      return isChainReadyToReceive;
    }()
  }, {
    key: "receive",
    value: function () {
      var _receive = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee9(_ref21) {
        var crossTransferTxId, _ref22, crossTransferRawTx, chainIdSend, merklePath, crossTransferTxParentBlockHeight, tokenContractReceive, crossReceiveTxId;

        return regenerator_default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                crossTransferTxId = _ref21.crossTransferTxId;
                _context9.next = 3;
                return this.isChainReadyToReceive({
                  crossTransferTxId: crossTransferTxId
                });

              case 3:
                _ref22 = _context9.sent;
                crossTransferRawTx = _ref22.crossTransferRawTx;
                chainIdSend = _ref22.chainIdSend;
                merklePath = _ref22.merklePath;
                crossTransferTxParentBlockHeight = _ref22.crossTransferTxParentBlockHeight;
                tokenContractReceive = this.aelfInstance.tokenContractReceive; // message CrossChainReceiveTokenInput {
                //   int32 from_chain_id = 1;
                //   int64 parent_chain_height = 2;
                //   bytes transfer_transaction_bytes = 3;
                //   aelf.MerklePath merkle_path = 4; // 发起交易的块的 merkle_path + 主链的merkle_path
                // }
                // 交易确认时
                // parent_chain_height 永远是发起这笔转账交易时，主链的高度；
                // 从侧链往主链，则是主链索引侧链包含这个交易的区块的区块高度。
                // 侧链可以通过 crossChain 合约，获取发跨链交易时，主链索引的高度
                // 这个合约是系统合约: 'AElf.ContractNames.CrossChain';

                _context9.next = 11;
                return tokenContractReceive.CrossChainReceiveToken({
                  fromChainId: chainIdSend,
                  // issueChainId,
                  // parentChainHeight: crossTransferTxBlockHeight, // main chain
                  parentChainHeight: crossTransferTxParentBlockHeight,
                  // main chain
                  transferTransactionBytes: Buffer.from(crossTransferRawTx, 'hex'),
                  merklePath: merklePath
                });

              case 11:
                crossReceiveTxId = _context9.sent;
                return _context9.abrupt("return", crossReceiveTxId);

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function receive(_x9) {
        return _receive.apply(this, arguments);
      }

      return receive;
    }()
  }]);

  return TokenCrossChainBasic;
}();


// CONCATENATED MODULE: ./src/crossChain/crossChain.js





/**
 * @author hzz780
 * @file crossChain.js
 * @description
 */
// const TokenCrossChainBasic = require('./tokenCrossChainBasic');
 // module.exports = class CrossChain {

var crossChain_CrossChain =
/*#__PURE__*/
function () {
  function CrossChain(_ref) {
    var AElfUtils = _ref.AElfUtils,
        sendInstance = _ref.sendInstance,
        receiveInstance = _ref.receiveInstance,
        _ref$mainChainId = _ref.mainChainId,
        mainChainId = _ref$mainChainId === void 0 ? '' : _ref$mainChainId,
        _ref$issueChainId = _ref.issueChainId,
        issueChainId = _ref$issueChainId === void 0 ? '' : _ref$issueChainId,
        wallet = _ref.wallet,
        _ref$reQueryInterval = _ref.reQueryInterval,
        reQueryInterval = _ref$reQueryInterval === void 0 ? 5000 : _ref$reQueryInterval,
        queryLimit = _ref.queryLimit;

    classCallCheck_default()(this, CrossChain);

    this.sendInstance = sendInstance;
    this.receiveInstance = receiveInstance;
    this.mainChainId = mainChainId;
    this.issueChainId = issueChainId;
    this.wallet = wallet;
    this.reQueryInterval = reQueryInterval;
    this.queryLimit = queryLimit;
    this.AElfUtils = AElfUtils;
  }

  createClass_default()(CrossChain, [{
    key: "init",
    value: function () {
      var _init = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(initOptions) {
        var contractAddresses, chainIds;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.tokenCrossChainInstance = new tokenCrossChainBasic_TokenCrossChainBasic({
                  AElfUtils: this.AElfUtils,
                  sendInstance: this.sendInstance,
                  receiveInstance: this.receiveInstance,
                  mainChainId: this.mainChainId,
                  issueChainId: this.issueChainId,
                  queryLimit: this.queryLimit
                });
                contractAddresses = initOptions.contractAddresses, chainIds = initOptions.chainIds;
                _context.next = 4;
                return this.tokenCrossChainInstance.init({
                  wallet: this.wallet,
                  contractAddresses: contractAddresses,
                  chainIds: chainIds
                });

              case 4:
                this.contractsAndChainIds = _context.sent;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(_ref2) {
        var to, symbol, amount, memo, contractsAndChainIds, tokenCrossChainInstance, params, sendInfo;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                to = _ref2.to, symbol = _ref2.symbol, amount = _ref2.amount, memo = _ref2.memo;
                contractsAndChainIds = this.contractsAndChainIds, tokenCrossChainInstance = this.tokenCrossChainInstance; // console.log('contractsAndChainIds:', contractsAndChainIds.chainIdSend);
                // const params = {
                //   to: receiveAddress,
                //   symbol: 'ELF',
                //   amount: 1,
                //   memo: 'HelloKitty cross chain transfer'
                //   // toChainId: chainIdConvertor.base58ToChainId(ChainIdReceive),
                //   // issueChainId: chainIdConvertor.base58ToChainId(ChainIdSend)
                // };

                params = {
                  to: to,
                  symbol: symbol,
                  amount: amount,
                  memo: memo
                };
                _context2.next = 5;
                return tokenCrossChainInstance.send(contractsAndChainIds, params);

              case 5:
                sendInfo = _context2.sent;
                return _context2.abrupt("return", sendInfo);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function send(_x2) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "isChainReadyToReceive",
    value: function () {
      var _isChainReadyToReceive = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3(_ref3) {
        var crossTransferTxId, tokenCrossChainInstance;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                crossTransferTxId = _ref3.crossTransferTxId;
                tokenCrossChainInstance = this.tokenCrossChainInstance;
                return _context3.abrupt("return", tokenCrossChainInstance.isChainReadyToReceive({
                  crossTransferTxId: crossTransferTxId
                }).then(function () {
                  return {
                    error: 0
                  };
                }).catch(function (error) {
                  if (error.error) {
                    return error;
                  }

                  return {
                    error: 1,
                    message: error
                  };
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function isChainReadyToReceive(_x3) {
        return _isChainReadyToReceive.apply(this, arguments);
      }

      return isChainReadyToReceive;
    }()
  }, {
    key: "receive",
    value: function () {
      var _receive = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee5(_ref4) {
        var _this = this;

        var crossTransferTxId, tokenCrossChainInstance, receiveInfo, message;
        return regenerator_default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                crossTransferTxId = _ref4.crossTransferTxId;
                tokenCrossChainInstance = this.tokenCrossChainInstance;
                _context5.prev = 2;
                _context5.next = 5;
                return tokenCrossChainInstance.receive({
                  crossTransferTxId: crossTransferTxId
                });

              case 5:
                receiveInfo = _context5.sent;
                return _context5.abrupt("return", receiveInfo);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](2);

                if (!_context5.t0.message) {
                  _context5.next = 16;
                  break;
                }

                message = '';

                try {
                  message = JSON.parse(_context5.t0.message);
                } catch (e) {
                  message = _context5.t0.message;
                } // const message = JSON.parse(error.message);


                if (!message.canReceive) {
                  _context5.next = 16;
                  break;
                }

                return _context5.abrupt("return", new Promise(function (resolve) {
                  setTimeout(
                  /*#__PURE__*/
                  asyncToGenerator_default()(
                  /*#__PURE__*/
                  regenerator_default.a.mark(function _callee4() {
                    return regenerator_default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.t0 = resolve;
                            _context4.next = 3;
                            return _this.receive({
                              crossTransferTxId: crossTransferTxId
                            });

                          case 3:
                            _context4.t1 = _context4.sent;
                            return _context4.abrupt("return", (0, _context4.t0)(_context4.t1));

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  })), _this.reQueryInterval);
                }));

              case 16:
                return _context5.abrupt("return", {
                  error: 1,
                  message: _context5.t0
                });

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 9]]);
      }));

      function receive(_x4) {
        return _receive.apply(this, arguments);
      }

      return receive;
    }()
  }]);

  return CrossChain;
}();


// CONCATENATED MODULE: ./src/index.js
/**
 * @author hzz780
 * @file index.js
 * @description entry of crossChain
 */
// const TokenCrossChainBasic = require('./crossChain/tokenCrossChainBasic');
// const CrossChain = require('./crossChain/crossChain');
// const utils = require('./crossChain/utils');


 // module.exports = {

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  TokenCrossChainBasic: tokenCrossChainBasic_TokenCrossChainBasic,
  CrossChain: crossChain_CrossChain,
  utils: /* Cannot get final name for export "default" in "./src/crossChain/utils.js" (known exports: decodeCrossChainTxFromBase64 getChainIdsAndContractAddresses, known reexports: ) */ undefined
});

/***/ })
/******/ ])["default"];
//# sourceMappingURL=aelf-cross-chain.cjs.js.map