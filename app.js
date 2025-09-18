(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = Symbol.for("react.element");
      var n = Symbol.for("react.portal");
      var p = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r = Symbol.for("react.profiler");
      var t = Symbol.for("react.provider");
      var u = Symbol.for("react.context");
      var v = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a) {
        if (null === a || "object" !== typeof a) return null;
        a = z && a[z] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState");
      };
      E.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a, b, e) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a, b, e) {
        var d, c = {}, k = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
          c.children = f;
        }
        if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
        return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
      }
      function N(a, b) {
        return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
      }
      function O(a) {
        return "object" === typeof a && null !== a && a.$$typeof === l;
      }
      function escape(a) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a.replace(/[=:]/g, function(a2) {
          return b[a2];
        });
      }
      var P = /\/+/g;
      function Q(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
      }
      function R(a, b, e, d, c) {
        var k = typeof a;
        if ("undefined" === k || "boolean" === k) a = null;
        var h = false;
        if (null === a) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
        if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a)) for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
        else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
        else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a, b, e) {
        if (null == a) return a;
        var d = [], c = 0;
        R(a, d, "", "", function(a2) {
          return b.call(e, a2, c++);
        });
        return d;
      }
      function T(a) {
        if (-1 === a._status) {
          var b = a._result;
          b = b();
          b.then(function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
          }, function(b2) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
          });
          -1 === a._status && (a._status = 0, a._result = b);
        }
        if (1 === a._status) return a._result.default;
        throw a._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a, b, e) {
        S(a, function() {
          b.apply(this, arguments);
        }, e);
      }, count: function(a) {
        var b = 0;
        S(a, function() {
          b++;
        });
        return b;
      }, toArray: function(a) {
        return S(a, function(a2) {
          return a2;
        }) || [];
      }, only: function(a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X;
      exports.cloneElement = function(a, b, e) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c = "" + b.key);
          if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
          for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a) {
        a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a.Provider = { $$typeof: t, _context: a };
        return a.Consumer = a;
      };
      exports.createElement = M;
      exports.createFactory = function(a) {
        var b = M.bind(null, a);
        b.type = a;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a) {
        return { $$typeof: v, render: a };
      };
      exports.isValidElement = O;
      exports.lazy = function(a) {
        return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
      };
      exports.memo = function(a, b) {
        return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a) {
        var b = V.transition;
        V.transition = {};
        try {
          a();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a, b) {
        return U.current.useCallback(a, b);
      };
      exports.useContext = function(a) {
        return U.current.useContext(a);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a) {
        return U.current.useDeferredValue(a);
      };
      exports.useEffect = function(a, b) {
        return U.current.useEffect(a, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a, b, e) {
        return U.current.useImperativeHandle(a, b, e);
      };
      exports.useInsertionEffect = function(a, b) {
        return U.current.useInsertionEffect(a, b);
      };
      exports.useLayoutEffect = function(a, b) {
        return U.current.useLayoutEffect(a, b);
      };
      exports.useMemo = function(a, b) {
        return U.current.useMemo(a, b);
      };
      exports.useReducer = function(a, b, e) {
        return U.current.useReducer(a, b, e);
      };
      exports.useRef = function(a) {
        return U.current.useRef(a);
      };
      exports.useState = function(a) {
        return U.current.useState(a);
      };
      exports.useSyncExternalStore = function(a, b, e) {
        return U.current.useSyncExternalStore(a, b, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a) {
        for (var b = h(t); null !== b; ) {
          if (null === b.callback) k(t);
          else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
          else break;
          b = h(t);
        }
      }
      function H(a) {
        B = false;
        G(a);
        if (!A) if (null !== h(r)) A = true, I(J);
        else {
          var b = h(t);
          null !== b && K(H, b.startTime - a);
        }
      }
      function J(a, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c = y;
        try {
          G(b);
          for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b);
            } else k(r);
            v = h(r);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a = exports.unstable_now();
          Q = a;
          var b = true;
          try {
            b = O(true, a);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a) {
        O = a;
        N || (N = true, S());
      }
      function K(a, b) {
        L = D(function() {
          a(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a) {
        a.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c = y;
        y = b;
        try {
          return a();
        } finally {
          y = c;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y;
        y = a;
        try {
          return b();
        } finally {
          y = c;
        }
      };
      exports.unstable_scheduleCallback = function(a, b, c) {
        var d = exports.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
        return a;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a) {
        var b = y;
        return function() {
          var c = y;
          y = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y = c;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a, b) {
        ha(a, b);
        ha(a + "Capture", b);
      }
      function ha(a, b) {
        ea[a] = b;
        for (a = 0; a < b.length; a++) da.add(b[a]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a) {
        if (ja.call(ma, a)) return true;
        if (ja.call(la, a)) return false;
        if (ka.test(a)) return ma[a] = true;
        la[a] = true;
        return false;
      }
      function pa(a, b, c, d) {
        if (null !== c && 0 === c.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
          default:
            return false;
        }
      }
      function qa(a, b, c, d) {
        if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
        if (d) return false;
        if (null !== c) switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a, b, c, d, e, f, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c;
        this.propertyName = a;
        this.type = b;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
        z[a] = new v(a, 0, false, a, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
        var b = a[0];
        z[b] = new v(b, 1, false, a[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
        z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
        z[a] = new v(a, 2, false, a, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
        z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a) {
        z[a] = new v(a, 3, true, a, null, false, false);
      });
      ["capture", "download"].forEach(function(a) {
        z[a] = new v(a, 4, false, a, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a) {
        z[a] = new v(a, 6, false, a, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a) {
        z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a) {
        return a[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
        var b = a.replace(
          ra,
          sa
        );
        z[b] = new v(b, 1, false, a, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
        var b = a.replace(ra, sa);
        z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a) {
        z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
      });
      function ta(a, b, c, d) {
        var e = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a) {
        if (null === a || "object" !== typeof a) return null;
        a = Ja && a[Ja] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a) {
        if (void 0 === La) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La = b && b[1] || "";
        }
        return "\n" + La + a;
      }
      var Na = false;
      function Oa(a, b) {
        if (!a || Na) return "";
        Na = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l) {
              d = l;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h]) {
                    var k = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
      }
      function Pa(a) {
        switch (a.tag) {
          case 5:
            return Ma(a.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = Oa(a.type, false), a;
          case 11:
            return a = Oa(a.type.render, false), a;
          case 1:
            return a = Oa(a.type, true), a;
          default:
            return "";
        }
      }
      function Qa(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
          case Ha:
            b = a._payload;
            a = a._init;
            try {
              return Qa(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function Ra(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa(a) {
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a;
          case "object":
            return a;
          default:
            return "";
        }
      }
      function Ta(a) {
        var b = a.type;
        return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a) {
        var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
        if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
          var e = c.get, f = c.set;
          Object.defineProperty(a, b, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a2) {
            d = "" + a2;
            f.call(this, a2);
          } });
          Object.defineProperty(a, b, { enumerable: c.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a2) {
            d = "" + a2;
          }, stopTracking: function() {
            a._valueTracker = null;
            delete a[b];
          } };
        }
      }
      function Va(a) {
        a._valueTracker || (a._valueTracker = Ua(a));
      }
      function Wa(a) {
        if (!a) return false;
        var b = a._valueTracker;
        if (!b) return true;
        var c = b.getValue();
        var d = "";
        a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
        a = d;
        return a !== c ? (b.setValue(a), true) : false;
      }
      function Xa(a) {
        a = a || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a) return null;
        try {
          return a.activeElement || a.body;
        } catch (b) {
          return a.body;
        }
      }
      function Ya(a, b) {
        var c = b.checked;
        return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
      }
      function Za(a, b) {
        var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c = Sa(null != b.value ? b.value : c);
        a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a, b) {
        b = b.checked;
        null != b && ta(a, "checked", b, false);
      }
      function bb(a, b) {
        ab(a, b);
        var c = Sa(b.value), d = b.type;
        if (null != c) if ("number" === d) {
          if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
        else if ("submit" === d || "reset" === d) {
          a.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
      }
      function db(a, b, c) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a._wrapperState.initialValue;
          c || b === a.value || (a.value = b);
          a.defaultValue = b;
        }
        c = a.name;
        "" !== c && (a.name = "");
        a.defaultChecked = !!a._wrapperState.initialChecked;
        "" !== c && (a.name = c);
      }
      function cb(a, b, c) {
        if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
      }
      var eb = Array.isArray;
      function fb(a, b, c, d) {
        a = a.options;
        if (b) {
          b = {};
          for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
          for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
        } else {
          c = "" + Sa(c);
          b = null;
          for (e = 0; e < a.length; e++) {
            if (a[e].value === c) {
              a[e].selected = true;
              d && (a[e].defaultSelected = true);
              return;
            }
            null !== b || a[e].disabled || (b = a[e]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
        return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
      }
      function hb(a, b) {
        var c = b.value;
        if (null == c) {
          c = b.children;
          b = b.defaultValue;
          if (null != c) {
            if (null != b) throw Error(p(92));
            if (eb(c)) {
              if (1 < c.length) throw Error(p(93));
              c = c[0];
            }
            b = c;
          }
          null == b && (b = "");
          c = b;
        }
        a._wrapperState = { initialValue: Sa(c) };
      }
      function ib(a, b) {
        var c = Sa(b.value), d = Sa(b.defaultValue);
        null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
        null != d && (a.defaultValue = "" + d);
      }
      function jb(a) {
        var b = a.textContent;
        b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
      }
      function kb(a) {
        switch (a) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a, b) {
        return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
      }
      var mb;
      var nb = function(a) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
          });
        } : a;
      }(function(a, b) {
        if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
          for (; b.firstChild; ) a.appendChild(b.firstChild);
        }
      });
      function ob(a, b) {
        if (b) {
          var c = a.firstChild;
          if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
          }
        }
        a.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a) {
        qb.forEach(function(b) {
          b = b + a.charAt(0).toUpperCase() + a.substring(1);
          pb[b] = pb[a];
        });
      });
      function rb(a, b, c) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
      }
      function sb(a, b) {
        a = a.style;
        for (var c in b) if (b.hasOwnProperty(c)) {
          var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
          "float" === c && (c = "cssFloat");
          d ? a.setProperty(c, e) : a[c] = e;
        }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a, b) {
        if (b) {
          if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
        }
      }
      function vb(a, b) {
        if (-1 === a.indexOf("-")) return "string" === typeof b.is;
        switch (a) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a) {
        a = a.target || a.srcElement || window;
        a.correspondingUseElement && (a = a.correspondingUseElement);
        return 3 === a.nodeType ? a.parentNode : a;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a) {
        if (a = Cb(a)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b = a.stateNode;
          b && (b = Db(b), yb(a.stateNode, a.type, b));
        }
      }
      function Eb(a) {
        zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
      }
      function Fb() {
        if (zb) {
          var a = zb, b = Ab;
          Ab = zb = null;
          Bb(a);
          if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
        }
      }
      function Gb(a, b) {
        return a(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a, b, c) {
        if (Ib) return a(b, c);
        Ib = true;
        try {
          return Gb(a, b, c);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a, b) {
        var c = a.stateNode;
        if (null === c) return null;
        var d = Db(c);
        if (null === d) return null;
        c = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
          default:
            a = false;
        }
        if (a) return null;
        if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
        return c;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
      var Mb;
      function Nb(a, b, c, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a) {
        Ob = true;
        Pb = a;
      } };
      function Tb(a, b, c, d, e, f, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a, b, c, d, e, f, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function Wb(a) {
        if (13 === a.tag) {
          var b = a.memoizedState;
          null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a) {
        if (Vb(a) !== a) throw Error(p(188));
      }
      function Yb(a) {
        var b = a.alternate;
        if (!b) {
          b = Vb(a);
          if (null === b) throw Error(p(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e) break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c) return Xb(e), a;
              if (f === d) return Xb(e), b;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c.return !== d.return) c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c.alternate !== d) throw Error(p(190));
        }
        if (3 !== c.tag) throw Error(p(188));
        return c.stateNode.current === c ? a : b;
      }
      function Zb(a) {
        a = Yb(a);
        return null !== a ? $b(a) : null;
      }
      function $b(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = $b(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function uc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
        } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function vc(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - oc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
          } else k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function xc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a;
      }
      function zc(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Ac(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - oc(b);
        a[b] = c;
      }
      function Bc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - oc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Cc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - oc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Dc(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a, b) {
        switch (a) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a, b, c, d, e, f) {
        if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
        a.eventSystemFlags |= d;
        b = a.targetContainers;
        null !== e && -1 === b.indexOf(e) && b.push(e);
        return a;
      }
      function Uc(a, b, c, d, e) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a, b, c, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a, b, c, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a, b, c, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
        }
        return false;
      }
      function Vc(a) {
        var b = Wc(a.target);
        if (null !== b) {
          var c = Vb(b);
          if (null !== c) {
            if (b = c.tag, 13 === b) {
              if (b = Wb(c), null !== b) {
                a.blockedOn = b;
                Ic(a.priority, function() {
                  Gc(c);
                });
                return;
              }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
              a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a.blockedOn = null;
      }
      function Xc(a) {
        if (null !== a.blockedOn) return false;
        for (var b = a.targetContainers; 0 < b.length; ) {
          var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
          if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            wb = d;
            c.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
          b.shift();
        }
        return true;
      }
      function Zc(a, b, c) {
        Xc(a) && c.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a, b) {
        a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a) {
        function b(b2) {
          return ad(b2, a);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a);
          for (var c = 1; c < Kc.length; c++) {
            var d = Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a);
        null !== Mc && ad(Mc, a);
        null !== Nc && ad(Nc, a);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
        for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function gd(a, b, c, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a, b, c, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function fd(a, b, c, d) {
        if (dd) {
          var e = Yc(a, b, c, d);
          if (null === e) hd(a, b, d, id, c), Sc(a, d);
          else if (Uc(e, a, b, c, d)) d.stopPropagation();
          else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
            for (; null !== e; ) {
              var f = Cb(e);
              null !== f && Ec(f);
              f = Yc(a, b, c, d);
              null === f && hd(a, b, d, id, c);
              if (f === e) break;
              e = f;
            }
            null !== e && d.stopPropagation();
          } else hd(a, b, d, null, c);
        }
      }
      var id = null;
      function Yc(a, b, c, d) {
        id = null;
        a = xb(d);
        a = Wc(a);
        if (null !== a) if (b = Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a) return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else b !== a && (a = null);
        id = a;
        return null;
      }
      function jd(a) {
        switch (a) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a = 0; a < c && b[a] === e[a]; a++) ;
        var g = c - a;
        for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
        return md = e.slice(a, 1 < d ? 1 - d : void 0);
      }
      function od(a) {
        var b = a.keyCode;
        "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
        10 === a && (a = 13);
        return 32 <= a || 13 === a ? a : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a) {
        function b(b2, d, e, f, g) {
          this._reactName = b2;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function(a) {
        return "movementY" in a ? a.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function(a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a) {
          return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
        },
        deltaY: function(a) {
          return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a, b) {
        switch (a) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a) {
        a = a.detail;
        return "object" === typeof a && "data" in a ? a.data : null;
      }
      var ie = false;
      function je(a, b) {
        switch (a) {
          case "compositionend":
            return he(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a = b.data, a === ee && fe ? null : a;
          default:
            return null;
        }
      }
      function ke(a, b) {
        if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
        switch (a) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
      }
      function ne(a, b, c, d) {
        Eb(d);
        b = oe(b, "onChange");
        0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
      }
      var pe = null;
      var qe = null;
      function re(a) {
        se(a, 0);
      }
      function te(a) {
        var b = ue(a);
        if (Wa(b)) return a;
      }
      function ve(a, b) {
        if ("change" === a) return b;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a) {
        if ("value" === a.propertyName && te(qe)) {
          var b = [];
          ne(b, qe, a, xb(a));
          Jb(re, b);
        }
      }
      function Ce(a, b, c) {
        "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
      }
      function De(a) {
        if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
      }
      function Ee(a, b) {
        if ("click" === a) return te(b);
      }
      function Fe(a, b) {
        if ("input" === a || "change" === a) return te(b);
      }
      function Ge(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a, b) {
        if (He(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!ja.call(b, e) || !He(a[e], b[e])) return false;
        }
        return true;
      }
      function Je(a) {
        for (; a && a.firstChild; ) a = a.firstChild;
        return a;
      }
      function Ke(a, b) {
        var c = Je(a);
        a = 0;
        for (var d; c; ) {
          if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return { node: c, offset: b - a };
            a = d;
          }
          a: {
            for (; c; ) {
              if (c.nextSibling) {
                c = c.nextSibling;
                break a;
              }
              c = c.parentNode;
            }
            c = void 0;
          }
          c = Je(c);
        }
      }
      function Le(a, b) {
        return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me() {
        for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
          try {
            var c = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c = false;
          }
          if (c) a = b.contentWindow;
          else break;
          b = Xa(a.document);
        }
        return b;
      }
      function Ne(a) {
        var b = a && a.nodeName && a.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
      }
      function Oe(a) {
        var b = Me(), c = a.focusedElem, d = a.selectionRange;
        if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
          if (null !== d && Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
              a = a.getSelection();
              var e = c.textContent.length, f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c, f);
              var g = Ke(
                c,
                d
              );
              e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
          }
          b = [];
          for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
          "function" === typeof c.focus && c.focus();
          for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a, b, c) {
        var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
      }
      function Ve(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        return c;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a) {
        if (Xe[a]) return Xe[a];
        if (!We[a]) return a;
        var b = We[a], c;
        for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
        return a;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a, b) {
        df.set(a, b);
        fa(b, [a]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a, b, c) {
        var d = a.type || "unknown-event";
        a.currentTarget = c;
        Ub(d, b, void 0, a);
        a.currentTarget = null;
      }
      function se(a, b) {
        b = 0 !== (b & 4);
        for (var c = 0; c < a.length; c++) {
          var d = a[c], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
          }
        }
        if (Qb) throw a = Rb, Qb = false, Rb = null, a;
      }
      function D(a, b) {
        var c = b[of];
        void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
        var d = a + "__bubble";
        c.has(d) || (pf(b, a, 2, false), c.add(d));
      }
      function qf(a, b, c) {
        var d = 0;
        b && (d |= 4);
        pf(c, a, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a) {
        if (!a[rf]) {
          a[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
          });
          var b = 9 === a.nodeType ? a : a.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a, b, c, d) {
        switch (jd(b)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c = e.bind(null, b, c, a);
        e = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
        d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
      }
      function hd(a, b, c, d, e) {
        var f = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k = g.tag;
              if (5 === k || 6 === k) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f, e2 = xb(c), g2 = [];
          a: {
            var h2 = df.get(a);
            if (void 0 !== h2) {
              var k2 = td, n = a;
              switch (a) {
                case "keypress":
                  if (0 === od(c)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u; null !== w; ) {
                u = w;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                if (J) break;
                w = w.return;
              }
              0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a || "pointerover" === a;
              k2 = "mouseout" === a || "pointerout" === a;
              if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k2 = null, n = d2;
                if (k2 !== n) {
                  t = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u = null == n ? h2 : ue(n);
                  h2 = new t(F, w + "leave", k2, c, e2);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F = null;
                  Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
                  J = F;
                  if (k2 && n) b: {
                    t = k2;
                    x = n;
                    w = 0;
                    for (u = t; u; u = vf(u)) w++;
                    u = 0;
                    for (F = x; F; F = vf(F)) u++;
                    for (; 0 < w - u; ) t = vf(t), w--;
                    for (; 0 < u - w; ) x = vf(x), u--;
                    for (; w--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k2 && wf(g2, h2, k2, t, false);
                  null !== n && null !== J && wf(g2, J, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
              else if (me(h2)) if (we) na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
              else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a, d2))) {
                ne(g2, na, c, e2);
                break a;
              }
              xa && xa(a, h2, d2);
              "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c, e2);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue(g2, c, e2);
            }
            var $a;
            if (ae) b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se(g2, b);
        });
      }
      function tf(a, b, c) {
        return { instance: a, listener: b, currentTarget: c };
      }
      function oe(a, b) {
        for (var c = b + "Capture", d = []; null !== a; ) {
          var e = a, f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
          a = a.return;
        }
        return d;
      }
      function vf(a) {
        if (null === a) return null;
        do
          a = a.return;
        while (a && 5 !== a.tag);
        return a ? a : null;
      }
      function wf(a, b, c, d, e) {
        for (var f = b._reactName, g = []; null !== c && c !== d; ) {
          var h = c, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d) break;
          5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
          c = c.return;
        }
        0 !== g.length && a.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a) {
        return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
      }
      function Af(a, b, c) {
        b = zf(b);
        if (zf(a) !== b && c) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a, b) {
        return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
        return Hf.resolve(null).then(a).catch(If);
      } : Ff;
      function If(a) {
        setTimeout(function() {
          throw a;
        });
      }
      function Kf(a, b) {
        var c = b, d = 0;
        do {
          var e = c.nextSibling;
          a.removeChild(c);
          if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
            if (0 === d) {
              a.removeChild(e);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c && "$?" !== c && "$!" !== c || d++;
          c = e;
        } while (c);
        bd(b);
      }
      function Lf(a) {
        for (; null != a; a = a.nextSibling) {
          var b = a.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a;
      }
      function Mf(a) {
        a = a.previousSibling;
        for (var b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
              if (0 === b) return a;
              b--;
            } else "/$" === c && b++;
          }
          a = a.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a) {
        var b = a[Of];
        if (b) return b;
        for (var c = a.parentNode; c; ) {
          if (b = c[uf] || c[Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
              if (c = a[Of]) return c;
              a = Mf(a);
            }
            return b;
          }
          a = c;
          c = a.parentNode;
        }
        return null;
      }
      function Cb(a) {
        a = a[Of] || a[uf];
        return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
      }
      function ue(a) {
        if (5 === a.tag || 6 === a.tag) return a.stateNode;
        throw Error(p(33));
      }
      function Db(a) {
        return a[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a) {
        return { current: a };
      }
      function E(a) {
        0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a, b) {
        Tf++;
        Sf[Tf] = a.current;
        a.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a, b) {
        var c = a.type.contextTypes;
        if (!c) return Vf;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c) e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a, b, c) {
        if (H.current !== Vf) throw Error(p(168));
        G(H, b);
        G(Wf, c);
      }
      function bg(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
        return A({}, c, d);
      }
      function cg(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(p(169));
        c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
        G(Wf, c);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a) {
        null === eg ? eg = [a] : eg.push(a);
      }
      function ig(a) {
        fg = true;
        hg(a);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a = 0, b = C;
          try {
            var c = eg;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a;
        ng = b;
      }
      function ug(a, b, c) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a;
        var d = rg;
        a = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - oc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b) + e | c << e | d;
          sg = f + a;
        } else rg = 1 << f | c << e | d, sg = a;
      }
      function vg(a) {
        null !== a.return && (tg(a, 1), ug(a, 1, 0));
      }
      function wg(a) {
        for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a, b) {
        var c = Bg(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function Cg(a, b) {
        switch (a.tag) {
          case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function Eg(a) {
        if (I) {
          var b = yg;
          if (b) {
            var c = b;
            if (!Cg(a, b)) {
              if (Dg(a)) throw Error(p(418));
              b = Lf(c.nextSibling);
              var d = xg;
              b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
            }
          } else {
            if (Dg(a)) throw Error(p(418));
            a.flags = a.flags & -4097 | 2;
            I = false;
            xg = a;
          }
        }
      }
      function Fg(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        xg = a;
      }
      function Gg(a) {
        if (a !== xg) return false;
        if (!I) return Fg(a), I = true, false;
        var b;
        (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a)) throw Hg(), Error(p(418));
          for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
        }
        Fg(a);
        if (13 === a.tag) {
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(p(317));
          a: {
            a = a.nextSibling;
            for (b = 0; a; ) {
              if (8 === a.nodeType) {
                var c = a.data;
                if ("/$" === c) {
                  if (0 === b) {
                    yg = Lf(a.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
              }
              a = a.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a = yg; a; ) a = Lf(a.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a) {
        null === zg ? zg = [a] : zg.push(a);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(p(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              null === a2 ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a) throw Error(p(284));
          if (!c._owner) throw Error(p(290, a));
        }
        return a;
      }
      function Mg(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Ng(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Og(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = Pg(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
          d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Lg(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function q(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
              case wa:
                return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
              case Ha:
                var d2 = b2._init;
                return q(a2, d2(b2._payload), c2);
            }
            if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
            Mg(a2, b2);
          }
          return null;
        }
        function r(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case va:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case wa:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case Ha:
                return e2 = c2._init, r(
                  a2,
                  b2,
                  e2(c2._payload),
                  d2
                );
            }
            if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
            Mg(a2, c2);
          }
          return null;
        }
        function y(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case wa:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case Ha:
                var f2 = d2._init;
                return y(a2, b2, c2, f2(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n2 = r(e2, u, h2[w], k2);
            if (null === n2) {
              null === u && (u = x);
              break;
            }
            a && u && null === n2.alternate && b(e2, u);
            g2 = f(n2, g2, w);
            null === m2 ? l2 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x;
          }
          if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
          if (null === u) {
            for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            I && tg(e2, w);
            return l2;
          }
          for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function t(e2, g2, h2, k2) {
          var l2 = Ka(h2);
          if ("function" !== typeof l2) throw Error(p(150));
          h2 = l2.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
            var t2 = r(e2, m2, n2.value, k2);
            if (null === t2) {
              null === m2 && (m2 = x);
              break;
            }
            a && m2 && null === t2.alternate && b(e2, m2);
            g2 = f(t2, g2, w);
            null === u ? l2 = t2 : u.sibling = t2;
            u = t2;
            m2 = x;
          }
          if (n2.done) return c(
            e2,
            m2
          ), I && tg(e2, w), l2;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
            I && tg(e2, w);
            return l2;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          I && tg(e2, w);
          return l2;
        }
        function J(a2, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case va:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = Lg(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case wa:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case Ha:
                return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
            }
            if (eb(f2)) return n(a2, d2, f2, h2);
            if (Ka(f2)) return t(a2, d2, f2, h2);
            Mg(a2, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a) {
        var b = Wg.current;
        E(Wg);
        a._currentValue = b;
      }
      function bh(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function ch(a, b) {
        Xg = a;
        Zg = Yg = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
      }
      function eh(a) {
        var b = a._currentValue;
        if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else Yg = Yg.next = a;
        return b;
      }
      var fh = null;
      function gh(a) {
        null === fh ? fh = [a] : fh.push(a);
      }
      function hh(a, b, c, d) {
        var e = b.interleaved;
        null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
        b.interleaved = c;
        return ih(a, d);
      }
      function ih(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var jh = false;
      function kh(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function mh(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return ih(a, c);
        }
        e = d.interleaved;
        null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return ih(a, c);
      }
      function oh(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      function ph(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function qh(a, b, c, d) {
        var e = a.updateQueue;
        jh = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var q = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a, t = h;
                r = b;
                y = c;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q = n.call(y, q, r);
                      break a;
                    }
                    q = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q, r) : n;
                    if (null === r || void 0 === r) break a;
                    q = A({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
            } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m && (k = q);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else null === f && (e.shared.lanes = 0);
          rh |= g;
          a.lanes = g;
          a.memoizedState = q;
        }
      }
      function sh(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a) {
        if (a === th) throw Error(p(174));
        return a;
      }
      function yh(a, b) {
        G(wh, b);
        G(vh, a);
        G(uh, th);
        a = b.nodeType;
        switch (a) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
        }
        E(uh);
        G(uh, b);
      }
      function zh() {
        E(uh);
        E(vh);
        E(wh);
      }
      function Ah(a) {
        xh(wh.current);
        var b = xh(uh.current);
        var c = lb(b, a.type);
        b !== c && (G(vh, a), G(uh, c));
      }
      function Bh(a) {
        vh.current === a && (E(uh), E(vh));
      }
      var L = Uf(0);
      function Ch(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
        return true;
      }
      function Nh(a, b, c, d, e, f) {
        Hh = f;
        M = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
        a = c(d, e);
        if (Jh) {
          f = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            O = N = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a = c(d, e);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N && null !== N.next;
        Hh = 0;
        O = N = M = null;
        Ih = false;
        if (b) throw Error(p(300));
        return a;
      }
      function Sh() {
        var a = 0 !== Kh;
        Kh = 0;
        return a;
      }
      function Th() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
        return O;
      }
      function Uh() {
        if (null === N) {
          var a = M.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = N.next;
        var b = null === O ? M.memoizedState : O.next;
        if (null !== b) O = b, N = a;
        else {
          if (null === a) throw Error(p(310));
          N = a;
          a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
          null === O ? M.memoizedState = O = a : O = O.next = a;
        }
        return O;
      }
      function Vh(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Wh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = N, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var q = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q, g = d) : k = k.next = q;
              M.lanes |= m;
              rh |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          He(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do
            f = e.lane, M.lanes |= f, rh |= f, e = e.next;
          while (e !== a);
        } else null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Xh(a) {
        var b = Uh(), c = b.queue;
        if (null === c) throw Error(p(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          He(f, b.memoizedState) || (dh = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function Yh() {
      }
      function Zh(a, b) {
        var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
        f && (d.memoizedState = e, dh = true);
        d = d.queue;
        $h(ai.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
          c.flags |= 2048;
          bi(9, ci.bind(null, c, d, e, b), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c, b, e);
        }
        return e;
      }
      function di(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function ci(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        ei(b) && fi(a);
      }
      function ai(a, b, c) {
        return c(function() {
          ei(b) && fi(a);
        });
      }
      function ei(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !He(a, c);
        } catch (d) {
          return true;
        }
      }
      function fi(a) {
        var b = ih(a, 1);
        null !== b && gi(b, a, 1, -1);
      }
      function hi(a) {
        var b = Th();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = ii.bind(null, M, a);
        return [b.memoizedState, a];
      }
      function bi(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a, b, c, d) {
        var e = Th();
        M.flags |= a;
        e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function li(a, b, c, d) {
        var e = Uh();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== N) {
          var g = N.memoizedState;
          f = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e.memoizedState = bi(b, c, f, d);
            return;
          }
        }
        M.flags |= a;
        e.memoizedState = bi(1 | b, c, f, d);
      }
      function mi(a, b) {
        return ki(8390656, 8, a, b);
      }
      function $h(a, b) {
        return li(2048, 8, a, b);
      }
      function ni(a, b) {
        return li(4, 2, a, b);
      }
      function oi(a, b) {
        return li(4, 4, a, b);
      }
      function pi(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function qi(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return li(4, 4, pi.bind(null, b, a), c);
      }
      function ri() {
      }
      function si(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function ti(a, b) {
        var c = Uh();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function ui(a, b, c) {
        if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
        He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
        return b;
      }
      function vi(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a, b, c) {
        var d = yi(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, c);
        else if (c = hh(a, b, c, d), null !== c) {
          var e = R();
          gi(c, a, d, e);
          Bi(c, b, d);
        }
      }
      function ii(a, b, c) {
        var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (zi(a)) Ai(b, e);
        else {
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = true;
            e.eagerState = h;
            if (He(h, g)) {
              var k = b.interleaved;
              null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
              b.interleaved = e;
              return;
            }
          } catch (l) {
          } finally {
          }
          c = hh(a, b, e, d);
          null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
        }
      }
      function zi(a) {
        var b = a.alternate;
        return a === M || null !== b && b === M;
      }
      function Ai(a, b) {
        Jh = Ih = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function Bi(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Cc(a, c);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ki(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ki(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
        return Th().memoizedState = a;
      }, useTransition: function() {
        var a = hi(false), b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = M, e = Th();
        if (I) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        mi(ai.bind(
          null,
          d,
          f,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Th(), b = Q.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a) {
          var b = Uh();
          return ui(b, N.memoizedState, a);
        },
        useTransition: function() {
          var a = Wh(Vh)[0], b = Uh().memoizedState;
          return [a, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a) {
        var b = Uh();
        return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
      }, useTransition: function() {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a, b) {
        if (a && a.defaultProps) {
          b = A({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function Di(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : A({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var Ei = { isMounted: function(a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f = mh(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f = mh(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = nh(a, f, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = R(), d = yi(a), e = mh(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = nh(a, e, d);
        null !== b && (gi(b, a, d, c), oh(b, a, d));
      } };
      function Fi(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
      }
      function Gi(a, b, c) {
        var d = false, e = Vf;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Hi(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
      }
      function Ii(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = {};
        kh(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function Ji(a, b) {
        try {
          var c = "", d = b;
          do
            c += Pa(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e, digest: null };
      }
      function Ki(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Li(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a, b);
        };
        return c;
      }
      function Qi(a, b, c) {
        c = mh(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Li(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          Li(a, b);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Si(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Mi();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
      }
      function Ui(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Vi(a, b, c, d, e) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a, b, c, d) {
        b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
      }
      function Yi(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        ch(b, e);
        d = Nh(a, b, c, d, f, e);
        c = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        I && c && vg(b);
        b.flags |= 1;
        Xi(a, b, d, e);
        return b.child;
      }
      function $i(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
          a = Rg(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Ie;
          if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
        }
        b.flags |= 1;
        a = Pg(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function bj(a, b, c, d, e) {
        if (null !== a) {
          var f = a.memoizedProps;
          if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
          else return b.lanes = a.lanes, Zi(a, b, e);
        }
        return cj(a, b, c, d, e);
      }
      function dj(a, b, c) {
        var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f ? f.baseLanes : c;
          G(ej, fj);
          fj |= d;
        }
        else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
        Xi(a, b, e, c);
        return b.child;
      }
      function gj(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a, b, c, d, e) {
        var f = Zf(c) ? Xf : H.current;
        f = Yf(b, f);
        ch(b, e);
        c = Nh(a, b, c, d, f, e);
        d = Sh();
        if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
        I && d && vg(b);
        b.flags |= 1;
        Xi(a, b, c, e);
        return b.child;
      }
      function hj(a, b, c, d, e) {
        if (Zf(c)) {
          var f = true;
          cg(b);
        } else f = false;
        ch(b, e);
        if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
          var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
          jh = false;
          var r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          k = b.memoizedState;
          h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : Ci(b.type, h);
          g.props = l;
          q = b.pendingProps;
          r = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
          var y = c.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
          jh = false;
          r = b.memoizedState;
          g.state = r;
          qh(b, d, g, e);
          var n = b.memoizedState;
          h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a, b, c, d, f, e);
      }
      function jj(a, b, c, d, e, f) {
        gj(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
        d = b.stateNode;
        Wi.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
        b.memoizedState = d.state;
        e && dg(b, c, true);
        return b.child;
      }
      function kj(a) {
        var b = a.stateNode;
        b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
        yh(a, b.containerInfo);
      }
      function lj(a, b, c, d, e) {
        Ig();
        Jg(e);
        b.flags |= 256;
        Xi(a, b, c, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function oj(a, b, c) {
        var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h) f = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e |= 1;
        G(L, e & 1);
        if (null === a) {
          Eg(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
        }
        e = a.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
        if (f) {
          f = d.fallback;
          g = b.mode;
          e = a.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
          f.return = b;
          d.return = b;
          d.sibling = f;
          b.child = d;
          d = f;
          f = b.child;
          g = a.child.memoizedState;
          g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a.childLanes & ~c;
          b.memoizedState = mj;
          return d;
        }
        f = a.child;
        a = f.sibling;
        d = Pg(f, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a, b) {
        b = pj({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function sj(a, b, c, d) {
        null !== d && Jg(d);
        Ug(b, a.child, null, c);
        a = qj(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function rj(a, b, c, d, e, f, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = pj({ mode: "visible", children: d.children }, e, 0, null);
          f = Tg(f, e, g, null);
          f.flags |= 2;
          d.return = b;
          f.return = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f;
        }
        if (0 === (b.mode & 1)) return sj(a, b, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f = Error(p(419));
          d = Ki(f, d, void 0);
          return sj(a, b, g, d);
        }
        h = 0 !== (g & a.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a, b, g, d);
        }
        if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
        a = f.treeContext;
        yg = Lf(e.nextSibling);
        xg = b;
        I = true;
        zg = null;
        null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        bh(a.return, b, c);
      }
      function wj(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function xj(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        Xi(a, b, d.children, c);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag) vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        G(L, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            wj(b, false, e, c, f);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            wj(b, true, c, null, f);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        rh |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(p(153));
        if (null !== b.child) {
          a = b.child;
          c = Pg(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function yj(a, b, c) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            G(Wg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
              G(L, L.current & 1);
              a = Zi(a, b, c);
              return null !== a ? a.sibling : null;
            }
            G(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return xj(a, b, c);
              b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a, b, c);
        }
        return Zi(a, b, c);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a, b, c, d) {
        var e = a.memoizedProps;
        if (e !== d) {
          a = b.stateNode;
          xh(uh.current);
          var f = null;
          switch (c) {
            case "input":
              e = Ya(a, e);
              d = Ya(a, d);
              f = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a, e);
              d = gb(a, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
          }
          ub(c, d);
          var g;
          c = null;
          for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
            } else c || (f || (f = []), f.push(
              l,
              c
            )), c = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c && (f = f || []).push("style", c);
          var l = f;
          if (b.updateQueue = l) b.flags |= 4;
        }
      };
      Cj = function(a, b, c, d) {
        c !== d && (b.flags |= 4);
      };
      function Dj(a, b) {
        if (!I) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Ej(a, b, c) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E(Wf);
            E(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a, b);
            S(b);
            return null;
          case 5:
            Bh(b);
            var e = xh(wh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p(166));
                S(b);
                return null;
              }
              a = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.type;
                var f = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f;
                a = 0 !== (b.mode & 1);
                switch (c) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), D("invalid", d);
                }
                ub(c, f);
                e = null;
                for (var g in f) if (f.hasOwnProperty(g)) {
                  var h = f[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a
                  ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
                switch (c) {
                  case "input":
                    Va(d);
                    db(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = Bf);
                }
                d = e;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                a[Of] = b;
                a[Pf] = d;
                zj(a, b, false, false);
                b.stateNode = a;
                a: {
                  g = vb(c, d);
                  switch (c) {
                    case "dialog":
                      D("cancel", a);
                      D("close", a);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++) D(lf[e], a);
                      e = d;
                      break;
                    case "source":
                      D("error", a);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a
                      );
                      D("load", a);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a);
                      e = d;
                      break;
                    case "input":
                      Za(a, d);
                      e = Ya(a, d);
                      D("invalid", a);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a);
                      break;
                    case "textarea":
                      hb(a, d);
                      e = gb(a, d);
                      D("invalid", a);
                      break;
                    default:
                      e = d;
                  }
                  ub(c, e);
                  h = e;
                  for (f in h) if (h.hasOwnProperty(f)) {
                    var k = h[f];
                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                  }
                  switch (c) {
                    case "input":
                      Va(a);
                      db(a, d, false);
                      break;
                    case "textarea":
                      Va(a);
                      jb(a);
                      break;
                    case "option":
                      null != d.value && a.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                        a,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a.onclick = Bf);
                  }
                  switch (c) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
              c = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c = b.memoizedProps;
                d[Of] = b;
                if (f = d.nodeValue !== c) {
                  if (a = xg, null !== a) switch (a.tag) {
                    case 3:
                      Af(d.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  }
                }
                f && (b.flags |= 4);
              } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E(L);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
              else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!f) throw Error(p(318));
                  f = b.memoizedState;
                  f = null !== f ? f.dehydrated : null;
                  if (!f) throw Error(p(317));
                  f[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f = false;
              } else null !== zg && (Fj(zg), zg = null), f = true;
              if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return ah(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E(L);
            f = b.memoizedState;
            if (null === f) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) if (d) Dj(f, false);
            else {
              if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G(L, L.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = Ch(g), null !== a) {
                if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
              } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
              f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b.tag));
      }
      function Ij(a, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E(L);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(p(340));
              Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return E(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          W(a, b, d);
        }
        else c.current = null;
      }
      function Mj(a, b, c) {
        try {
          c();
        } catch (d) {
          W(a, b, d);
        }
      }
      var Nj = false;
      function Oj(a, b) {
        Cf = dd;
        a = Me();
        if (Ne(a)) {
          if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
          else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
              c = d.anchorNode;
              var e = d.anchorOffset, f = d.focusNode;
              d = d.focusOffset;
              try {
                c.nodeType, f.nodeType;
              } catch (F) {
                c = null;
                break a;
              }
              var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                  q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                  3 === q.nodeType && (g += q.nodeValue.length);
                  if (null === (y = q.firstChild)) break;
                  r = q;
                  q = y;
                }
                for (; ; ) {
                  if (q === a) break b;
                  r === c && ++l === e && (h = g);
                  r === f && ++m === d && (k = g);
                  if (null !== (y = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y;
              }
              c = -1 === h || -1 === k ? null : { start: h, end: k };
            } else c = null;
          }
          c = c || { start: 0, end: 0 };
        } else c = null;
        Df = { focusedElem: a, selectionRange: c };
        dd = false;
        for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
        else for (; null !== V; ) {
          b = V;
          try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                  x.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F) {
            W(b, b.return, F);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V = a;
            break;
          }
          V = b.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Mj(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Qj(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Rj(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = c;
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Sj(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Sj(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Tj(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Uj(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Vj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
      }
      function Wj(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
        else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a, b, c) {
        for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
      }
      function Zj(a, b, c) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            U || Lj(c, b);
          case 6:
            var d = X, e = Xj;
            X = null;
            Yj(a, b, c);
            X = d;
            Xj = e;
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
            break;
          case 4:
            d = X;
            e = Xj;
            X = c.stateNode.containerInfo;
            Xj = true;
            Yj(a, b, c);
            X = d;
            Xj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Yj(a, b, c);
            break;
          case 1:
            if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W(c, b, h);
            }
            Yj(a, b, c);
            break;
          case 21:
            Yj(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
            break;
          default:
            Yj(a, b, c);
        }
      }
      function ak(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e = c[d];
          try {
            var f = a, g = b, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X) throw Error(p(160));
            Zj(f, g, e);
            X = null;
            Xj = false;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l) {
            W(e, b, l);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
      }
      function dk(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a);
            ek(a);
            if (d & 4) {
              try {
                Pj(3, a, a.return), Qj(3, a);
              } catch (t) {
                W(a, a.return, t);
              }
              try {
                Pj(5, a, a.return);
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 1:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            break;
          case 5:
            ck(b, a);
            ek(a);
            d & 512 && null !== c && Lj(c, c.return);
            if (a.flags & 32) {
              var e = a.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W(a, a.return, t);
              }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
              var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
              a.updateQueue = null;
              if (null !== k) try {
                "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                vb(h, g);
                var l = vb(h, f);
                for (g = 0; g < k.length; g += 2) {
                  var m = k[g], q = k[g + 1];
                  "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                }
                switch (h) {
                  case "input":
                    bb(e, f);
                    break;
                  case "textarea":
                    ib(e, f);
                    break;
                  case "select":
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f.multiple;
                    var y = f.value;
                    null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                      e,
                      !!f.multiple,
                      f.defaultValue,
                      true
                    ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                }
                e[Pf] = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 6:
            ck(b, a);
            ek(a);
            if (d & 4) {
              if (null === a.stateNode) throw Error(p(162));
              e = a.stateNode;
              f = a.memoizedProps;
              try {
                e.nodeValue = f;
              } catch (t) {
                W(a, a.return, t);
              }
            }
            break;
          case 3:
            ck(b, a);
            ek(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t) {
              W(a, a.return, t);
            }
            break;
          case 4:
            ck(b, a);
            ek(a);
            break;
          case 13:
            ck(b, a);
            ek(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
            d & 4 && ak(a);
            break;
          case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
            ek(a);
            if (d & 8192) {
              l = null !== a.memoizedState;
              if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                for (q = V = m; null !== V; ) {
                  r = V;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c = r.return;
                        try {
                          b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W(d, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V = y) : gk(q);
                }
                m = m.sibling;
              }
              a: for (m = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m) {
                    m = q;
                    try {
                      e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                    } catch (t) {
                      W(a, a.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m) try {
                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                  } catch (t) {
                    W(a, a.return, t);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a) break a;
                  m === q && (m = null);
                  q = q.return;
                }
                m === q && (m = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b, a);
            ek(a);
            d & 4 && ak(a);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a
            ), ek(a);
        }
      }
      function ek(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            a: {
              for (var c = a.return; null !== c; ) {
                if (Tj(c)) {
                  var d = c;
                  break a;
                }
                c = c.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f = Uj(a);
                Wj(a, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a);
                Vj(a, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k) {
            W(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function hk(a, b, c) {
        V = a;
        ik(a, b, c);
      }
      function ik(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== V; ) {
          var e = V, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Jj;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Jj;
              var l = U;
              Jj = g;
              if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
              for (; null !== f; ) V = f, ik(f, b, c), f = f.sibling;
              V = e;
              Jj = h;
              U = l;
            }
            kk(a, b, c);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
        }
      }
      function kk(a) {
        for (; null !== V; ) {
          var b = V;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f = b.updateQueue;
                  null !== f && sh(b, f, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    sh(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h;
                    var k = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c.focus();
                        break;
                      case "img":
                        k.src && (c.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l = b.alternate;
                    if (null !== l) {
                      var m = l.memoizedState;
                      if (null !== m) {
                        var q = m.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p(163));
              }
              U || b.flags & 512 && Rj(b);
            } catch (r) {
              W(b, b.return, r);
            }
          }
          if (b === a) {
            V = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function gk(a) {
        for (; null !== V; ) {
          var b = V;
          if (b === a) {
            V = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            V = c;
            break;
          }
          V = b.return;
        }
      }
      function jk(a) {
        for (; null !== V; ) {
          var b = V;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Qj(4, b);
                } catch (k) {
                  W(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, g, k);
                }
            }
          } catch (k) {
            W(b, b.return, k);
          }
          if (b === a) {
            V = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V = h;
            break;
          }
          V = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K = 0;
      var Q = null;
      var Y = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R() {
        return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
      }
      function yi(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a = C;
        if (0 !== a) return a;
        a = window.event;
        a = void 0 === a ? 16 : jd(a.type);
        return a;
      }
      function gi(a, b, c, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a, c, d);
        if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
      }
      function Dk(a, b) {
        var c = a.callbackNode;
        wc(a, b);
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && bc(c);
          if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c = null;
          else {
            switch (Dc(d)) {
              case 1:
                c = fc;
                break;
              case 4:
                c = gc;
                break;
              case 16:
                c = hc;
                break;
              case 536870912:
                c = jc;
                break;
              default:
                c = hc;
            }
            c = Fk(c, Gk.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Gk(a, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p(327));
        var c = a.callbackNode;
        if (Hk() && a.callbackNode !== c) return null;
        var d = uc(a, a === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
        else {
          b = d;
          var e = K;
          K |= 2;
          var f = Jk();
          if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a, h);
            }
          while (1);
          $g();
          mk.current = f;
          K = e;
          null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
          if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          if (6 === b) Ck(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a, tk, uk);
                break;
              case 3:
                Ck(a, d);
                if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                  if (0 !== uc(a, 0)) break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    R();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 4:
                Ck(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                  break;
                }
                Pk(a, tk, uk);
                break;
              case 5:
                Pk(a, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a, B());
        return a.callbackNode === c ? Gk.bind(null, a) : null;
      }
      function Nk(a, b) {
        var c = sk;
        a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
        a = Ik(a, b);
        2 !== a && (b = tk, tk = c, null !== b && Fj(b));
        return a;
      }
      function Fj(a) {
        null === tk ? tk = a : tk.push.apply(tk, a);
      }
      function Ok(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e = c[d], f = e.getSnapshot;
              e = e.value;
              try {
                if (!He(f(), e)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a, b) {
        b &= ~rk;
        b &= ~qk;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - oc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Ek(a) {
        if (0 !== (K & 6)) throw Error(p(327));
        Hk();
        var b = uc(a, 0);
        if (0 === (b & 1)) return Dk(a, B()), null;
        var c = Ik(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = xc(a);
          0 !== d && (b = d, c = Nk(a, d));
        }
        if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
        if (6 === c) throw Error(p(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Pk(a, tk, uk);
        Dk(a, B());
        return null;
      }
      function Qk(a, b) {
        var c = K;
        K |= 1;
        try {
          return a(b);
        } finally {
          K = c, 0 === K && (Gj = B() + 500, fg && jg());
        }
      }
      function Rk(a) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b = K;
        K |= 1;
        var c = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a) return a();
        } finally {
          C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E(ej);
      }
      function Kk(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        -1 !== c && (a.timeoutHandle = -1, Gf(c));
        if (null !== Y) for (c = Y.return; null !== c; ) {
          var d = c;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E(Wf);
              E(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E(L);
              break;
            case 19:
              E(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
        Q = a;
        Y = a = Pg(a.current, null);
        Z = fj = b;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
              var g = f.next;
              f.next = e;
              d.next = g;
            }
            c.pending = d;
          }
          fh = null;
        }
        return a;
      }
      function Mk(a, b) {
        do {
          var c = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c || null === c.return) {
              T = 1;
              pk = b;
              Y = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi(y, g, h, f, b);
                  y.mode & 1 && Si(f, l, b);
                  b = y;
                  k = l;
                  var n = b.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k);
                    b.updateQueue = t;
                  } else n.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si(f, l, b);
                    tj();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (I && h.mode & 1) {
                var J = Ui(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g, h, f, b);
                  Jg(Ji(k, h));
                  break a;
                }
              }
              f = k = Ji(k, h);
              4 !== T && (T = 2);
              null === sk ? sk = [f] : sk.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var x = Ni(f, k, b);
                    ph(f, x);
                    break a;
                  case 1:
                    h = k;
                    var w = f.type, u = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var F = Qi(f, h, b);
                      ph(f, F);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Sk(c);
          } catch (na) {
            b = na;
            Y === c && null !== c && (Y = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a = mk.current;
        mk.current = Rh;
        return null === a ? Rh : a;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a, b) {
        var c = K;
        K |= 2;
        var d = Jk();
        if (Q !== a || Z !== b) uk = null, Kk(a, b);
        do
          try {
            Tk();
            break;
          } catch (e) {
            Mk(a, e);
          }
        while (1);
        $g();
        K = c;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q = null;
        Z = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a) {
        var b = Vk(a.alternate, a, fj);
        a.memoizedProps = a.pendingProps;
        null === b ? Sk(a) : Y = b;
        nk.current = null;
      }
      function Sk(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Ej(c, b, fj), null !== c) {
              Y = c;
              return;
            }
          } else {
            c = Ij(c, b);
            if (null !== c) {
              c.flags &= 32767;
              Y = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Pk(a, b, c) {
        var d = C, e = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a, b, c, d);
        } finally {
          ok.transition = e, C = d;
        }
        return null;
      }
      function Wk(a, b, c, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(p(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Bc(a, f);
        a === Q && (Y = Q = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f) {
          f = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a, c);
          dk(c, a);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a.current = c;
          hk(c, a, e);
          dc();
          K = h;
          C = g;
          ok.transition = f;
        } else a.current = c;
        vk && (vk = false, wk = a, xk = e);
        f = a.pendingLanes;
        0 === f && (Ri = null);
        mc(c.stateNode, d);
        Dk(a, B());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Oi) throw Oi = false, a = Pi, Pi = null, a;
        0 !== (xk & 1) && 0 !== a.tag && Hk();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a = Dc(xk), b = ok.transition, c = C;
          try {
            ok.transition = null;
            C = 16 > a ? 16 : a;
            if (null === wk) var d = false;
            else {
              a = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p(331));
              var e = K;
              K |= 4;
              for (V = a.current; null !== V; ) {
                var f = V, g = f.child;
                if (0 !== (V.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f);
                        }
                        var q = m.child;
                        if (null !== q) q.return = m, V = q;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V = r;
                            break;
                          }
                          V = y;
                        }
                      }
                    }
                    var n = f.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
                else b: for (; null !== V; ) {
                  f = V;
                  if (0 !== (f.flags & 2048)) switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f, f.return);
                  }
                  var x = f.sibling;
                  if (null !== x) {
                    x.return = f.return;
                    V = x;
                    break b;
                  }
                  V = f.return;
                }
              }
              var w = a.current;
              for (V = w; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F = h.sibling;
                  if (null !== F) {
                    F.return = h.return;
                    V = F;
                    break b;
                  }
                  V = h.return;
                }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a, b, c) {
        b = Ji(c, b);
        b = Ni(a, b, 1);
        a = nh(a, b, 1);
        b = R();
        null !== a && (Ac(a, 1, b), Dk(a, b));
      }
      function W(a, b, c) {
        if (3 === a.tag) Xk(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a = Ji(c, a);
              a = Qi(b, a, 1);
              b = nh(b, a, 1);
              a = R();
              null !== b && (Ac(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = R();
        a.pingedLanes |= a.suspendedLanes & c;
        Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
        Dk(a, b);
      }
      function Yk(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c = R();
        a = ih(a, b);
        null !== a && (Ac(a, b, c), Dk(a, c));
      }
      function uj(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        Yk(a, c);
      }
      function bk(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b);
        Yk(a, c);
      }
      var Vk;
      Vk = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
        else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a, b);
            a = b.pendingProps;
            var e = Yf(b, H.current);
            ch(b, c);
            e = Nh(null, b, d, a, e, c);
            var f = Sh();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a, b);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = Zk(d);
              a = Ci(d, a);
              switch (e) {
                case 0:
                  b = cj(null, b, d, a, c);
                  break a;
                case 1:
                  b = hj(null, b, d, a, c);
                  break a;
                case 11:
                  b = Yi(null, b, d, a, c);
                  break a;
                case 14:
                  b = $i(null, b, d, Ci(d.type, a), c);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
          case 3:
            a: {
              kj(b);
              if (null === a) throw Error(p(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              lh(a, b);
              qh(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                e = Ji(Error(p(423)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else if (d !== e) {
                e = Ji(Error(p(424)), b);
                b = lj(a, b, d, c, e);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ig();
                if (d === e) {
                  b = Zi(a, b, c);
                  break a;
                }
                Xi(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
          case 6:
            return null === a && Eg(b), null;
          case 13:
            return oj(a, b, c);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
          case 7:
            return Xi(a, b, b.pendingProps, c), b.child;
          case 8:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return Xi(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              G(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f) if (He(f.value, g)) {
                if (f.children === e.children && !Wf.current) {
                  b = Zi(a, b, c);
                  break a;
                }
              } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = mh(-1, c & -c);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k.next = k : (k.next = m.next, m.next = k);
                          l.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      null !== k && (k.lanes |= c);
                      bh(
                        f.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;
                else for (g = f; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
                f = g;
              }
              Xi(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
          case 15:
            return bj(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
          case 19:
            return xj(a, b, c);
          case 22:
            return dj(a, b, c);
        }
        throw Error(p(156, b.tag));
      };
      function Fk(a, b) {
        return ac(a, b);
      }
      function $k(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a, b, c, d) {
        return new $k(a, b, c, d);
      }
      function aj(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function Zk(a) {
        if ("function" === typeof a) return aj(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === Da) return 11;
          if (a === Ga) return 14;
        }
        return 2;
      }
      function Pg(a, b) {
        var c = a.alternate;
        null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Rg(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a) aj(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ya:
            return Tg(c.children, e, f, b);
          case za:
            g = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
          case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
          case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
          case Ia:
            return pj(c, e, f, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
        b = Bg(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Tg(a, b, c, d) {
        a = Bg(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function pj(a, b, c, d) {
        a = Bg(22, a, d, b);
        a.elementType = Ia;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Qg(a, b, c) {
        a = Bg(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Sg(a, b, c) {
        b = Bg(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function al(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a, b, c, d, e, f, g, h, k) {
        a = new al(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = Bg(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f);
        return a;
      }
      function cl(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      }
      function dl(a) {
        if (!a) return Vf;
        a = a._reactInternals;
        a: {
          if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (Zf(c)) return bg(a, c, b);
        }
        return b;
      }
      function el(a, b, c, d, e, f, g, h, k) {
        a = bl(c, d, true, a, e, f, g, h, k);
        a.context = dl(null);
        c = a.current;
        d = R();
        e = yi(c);
        f = mh(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        nh(c, f, e);
        a.current.lanes = e;
        Ac(a, e, d);
        Dk(a, d);
        return a;
      }
      function fl(a, b, c, d) {
        var e = b.current, f = R(), g = yi(e);
        c = dl(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = mh(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = nh(e, b, g);
        null !== a && (gi(a, e, g, f), oh(a, e, g));
        return g;
      }
      function gl(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return a.child.stateNode;
          default:
            return a.child.stateNode;
        }
      }
      function hl(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function il(a, b) {
        hl(a, b);
        (a = a.alternate) && hl(a, b);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a) {
        console.error(a);
      };
      function ll(a) {
        this._internalRoot = a;
      }
      ml.prototype.render = ll.prototype.render = function(a) {
        var b = this._internalRoot;
        if (null === b) throw Error(p(409));
        fl(a, b, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a = this._internalRoot;
        if (null !== a) {
          this._internalRoot = null;
          var b = a.containerInfo;
          Rk(function() {
            fl(null, a, null, null);
          });
          b[uf] = null;
        }
      };
      function ml(a) {
        this._internalRoot = a;
      }
      ml.prototype.unstable_scheduleHydration = function(a) {
        if (a) {
          var b = Hc();
          a = { blockedOn: null, target: a, priority: b };
          for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
          Qc.splice(c, 0, a);
          0 === c && Vc(a);
        }
      };
      function nl(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
      }
      function ol(a) {
        return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
      }
      function pl() {
      }
      function ql(a, b, c, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function() {
              var a2 = gl(g);
              f.call(a2);
            };
          }
          var g = el(b, d, a, 0, null, false, false, "", pl);
          a._reactRootContainer = g;
          a[uf] = g.current;
          sf(8 === a.nodeType ? a.parentNode : a);
          Rk();
          return g;
        }
        for (; e = a.lastChild; ) a.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a2 = gl(k);
            h.call(a2);
          };
        }
        var k = bl(a, 0, false, null, null, false, false, "", pl);
        a._reactRootContainer = k;
        a[uf] = k.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk(function() {
          fl(b, k, c, d);
        });
        return k;
      }
      function rl(a, b, c, d, e) {
        var f = c._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a2 = gl(g);
              h.call(a2);
            };
          }
          fl(b, g, a, e);
        } else g = ql(c, b, a, e, d);
        return gl(g);
      }
      Ec = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = tc(b.pendingLanes);
              0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a, 1);
              if (null !== b2) {
                var c2 = R();
                gi(b2, a, 1, c2);
              }
            }), il(a, 1);
        }
      };
      Fc = function(a) {
        if (13 === a.tag) {
          var b = ih(a, 134217728);
          if (null !== b) {
            var c = R();
            gi(b, a, 134217728, c);
          }
          il(a, 134217728);
        }
      };
      Gc = function(a) {
        if (13 === a.tag) {
          var b = yi(a), c = ih(a, b);
          if (null !== c) {
            var d = R();
            gi(c, a, b, d);
          }
          il(a, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      yb = function(a, b, c) {
        switch (b) {
          case "input":
            bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
              for (c = a; c.parentNode; ) c = c.parentNode;
              c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c.length; b++) {
                var d = c[b];
                if (d !== a && d.form === a.form) {
                  var e = Db(d);
                  if (!e) throw Error(p(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a, c);
            break;
          case "select":
            b = c.value, null != b && fb(a, !!c.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a, b) {
        var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b)) throw Error(p(200));
        return cl(a, b, null, c);
      };
      exports.createRoot = function(a, b) {
        if (!nl(a)) throw Error(p(299));
        var c = false, d = "", e = kl;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
        b = bl(a, 1, false, null, null, c, false, d, e);
        a[uf] = b.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        return new ll(b);
      };
      exports.findDOMNode = function(a) {
        if (null == a) return null;
        if (1 === a.nodeType) return a;
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(p(188));
          a = Object.keys(a).join(",");
          throw Error(p(268, a));
        }
        a = Zb(b);
        a = null === a ? null : a.stateNode;
        return a;
      };
      exports.flushSync = function(a) {
        return Rk(a);
      };
      exports.hydrate = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, true, c);
      };
      exports.hydrateRoot = function(a, b, c) {
        if (!nl(a)) throw Error(p(405));
        var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
        null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
        b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
        a[uf] = b.current;
        sf(a);
        if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
          c,
          e
        );
        return new ml(b);
      };
      exports.render = function(a, b, c) {
        if (!ol(b)) throw Error(p(200));
        return rl(null, a, b, false, c);
      };
      exports.unmountComponentAtNode = function(a) {
        if (!ol(a)) throw Error(p(40));
        return a._reactRootContainer ? (Rk(function() {
          rl(null, null, a, false, function() {
            a._reactRootContainer = null;
            a[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
        if (!ol(c)) throw Error(p(200));
        if (null == a || void 0 === a._reactInternals) throw Error(p(38));
        return rl(a, b, c, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f = require_react();
      var k = Symbol.for("react.element");
      var l = Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q(c, a, g) {
        var b, d = {}, e = null, h = null;
        void 0 !== g && (e = "" + g);
        void 0 !== a.key && (e = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
      }
      exports.Fragment = l;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // main.jsx
  var import_react2 = __toESM(require_react(), 1);
  var import_client = __toESM(require_client(), 1);

  // IieDashboard.jsx
  var import_react = __toESM(require_react(), 1);

  // dashboard_data.json
  var dashboard_data_default = {
    respondents: {
      totalRespondents: 331,
      academicCount: 204,
      nonAcademicCount: 127,
      brandCounts: [
        {
          label: "IIE Varsity College",
          count: 171
        },
        {
          label: "IIE Rosebank College",
          count: 96
        },
        {
          label: "IIE Vega School",
          count: 45
        },
        {
          label: "IIE MSA",
          count: 16
        },
        {
          label: "IIE School of Hospitality & Service Management",
          count: 2
        },
        {
          label: "Central Academic Team",
          count: 1
        }
      ],
      groupCounts: [
        {
          label: "Academic",
          count: 204
        },
        {
          label: "Non-academic",
          count: 127
        }
      ],
      brandGroupCounts: [
        {
          brand: "IIE Varsity College",
          Academic: 99,
          "Non-academic": 72,
          Total: 171
        },
        {
          brand: "IIE Rosebank College",
          Academic: 61,
          "Non-academic": 35,
          Total: 96
        },
        {
          brand: "IIE Vega School",
          Academic: 35,
          "Non-academic": 10,
          Total: 45
        },
        {
          brand: "IIE MSA",
          Academic: 8,
          "Non-academic": 8,
          Total: 16
        },
        {
          brand: "IIE School of Hospitality & Service Management",
          Academic: 0,
          "Non-academic": 2,
          Total: 2
        },
        {
          brand: "Central Academic Team",
          Academic: 1,
          "Non-academic": 0,
          Total: 1
        }
      ],
      brandGroupPercentages: [
        {
          brand: "IIE Varsity College",
          Academic: 57.9,
          "Non-academic": 42.1
        },
        {
          brand: "IIE Rosebank College",
          Academic: 63.5,
          "Non-academic": 36.5
        },
        {
          brand: "IIE Vega School",
          Academic: 77.8,
          "Non-academic": 22.2
        },
        {
          brand: "IIE MSA",
          Academic: 50,
          "Non-academic": 50
        },
        {
          brand: "IIE School of Hospitality & Service Management",
          Academic: 0,
          "Non-academic": 100
        },
        {
          brand: "Central Academic Team",
          Academic: 100,
          "Non-academic": 0
        }
      ],
      facultyCounts: [
        {
          label: "Faculty of Commerce",
          count: 74
        },
        {
          label: "Faculty of Humanities and Social Science",
          count: 54
        },
        {
          label: "Faculty of Information and Communications Technology",
          count: 40
        },
        {
          label: "Faculty of Education",
          count: 39
        },
        {
          label: "IIE Vega School",
          count: 27
        },
        {
          label: "Faculty of Law",
          count: 19
        },
        {
          label: "Faculty of Finance & Accounting",
          count: 8
        }
      ],
      nqfCounts: [
        {
          label: "NQF Level 7.",
          count: 129
        },
        {
          label: "NQF Level 6.",
          count: 107
        },
        {
          label: "NQF Level 5.",
          count: 107
        },
        {
          label: "NQF Level 8.",
          count: 70
        },
        {
          label: "NQF Level 9.",
          count: 13
        },
        {
          label: "NQF Level 10.",
          count: 3
        }
      ],
      experience: {
        academic: {
          iie: [
            {
              bin: "0-5",
              count: 119
            },
            {
              bin: "6-10",
              count: 49
            },
            {
              bin: "11-15",
              count: 20
            },
            {
              bin: "16-20",
              count: 14
            },
            {
              bin: "21-25",
              count: 1
            },
            {
              bin: "46+",
              count: 1
            }
          ],
          elsewhere: [
            {
              bin: "0-5",
              count: 121
            },
            {
              bin: "6-10",
              count: 39
            },
            {
              bin: "11-15",
              count: 21
            },
            {
              bin: "16-20",
              count: 10
            },
            {
              bin: "21-25",
              count: 5
            },
            {
              bin: "26-30",
              count: 5
            },
            {
              bin: "31-35",
              count: 1
            },
            {
              bin: "36-40",
              count: 1
            },
            {
              bin: "46+",
              count: 1
            }
          ]
        },
        nonAcademic: {
          iie: [
            {
              bin: "0-5",
              count: 73
            },
            {
              bin: "6-10",
              count: 25
            },
            {
              bin: "11-15",
              count: 18
            },
            {
              bin: "16-20",
              count: 9
            },
            {
              bin: "21-25",
              count: 1
            },
            {
              bin: "26-30",
              count: 1
            }
          ],
          elsewhere: [
            {
              bin: "0-5",
              count: 58
            },
            {
              bin: "6-10",
              count: 34
            },
            {
              bin: "11-15",
              count: 18
            },
            {
              bin: "16-20",
              count: 10
            },
            {
              bin: "21-25",
              count: 5
            },
            {
              bin: "26-30",
              count: 1
            },
            {
              bin: "36-40",
              count: 1
            }
          ]
        }
      },
      itProficiency: {
        academic: {
          counts: {
            "Low, I don't use computers often.": 0,
            "Moderate, I use a PC for most of my work.": 74,
            "Advanced, I can assist others to solve their problems.": 102,
            "High, I could work in an IT department.": 28
          },
          percentages: {
            "Low, I don't use computers often.": 0,
            "Moderate, I use a PC for most of my work.": 36.3,
            "Advanced, I can assist others to solve their problems.": 50,
            "High, I could work in an IT department.": 13.7
          },
          total: 204
        },
        nonAcademic: {
          counts: {
            "Low, I don't use computers often.": 2,
            "Moderate, I use a PC for most of my work.": 44,
            "Advanced, I can assist others to solve their problems.": 66,
            "High, I could work in an IT department.": 15
          },
          percentages: {
            "Low, I don't use computers often.": 1.6,
            "Moderate, I use a PC for most of my work.": 34.6,
            "Advanced, I can assist others to solve their problems.": 52,
            "High, I could work in an IT department.": 11.8
          },
          total: 127
        }
      },
      sampleSummary: {
        overall: {
          respondents: 331,
          population: 2660,
          participationRate: 12.4
        },
        academic: {
          respondents: 204,
          population: 1390,
          participationRate: 14.7
        },
        nonAcademic: {
          respondents: 127,
          population: 1270,
          participationRate: 10
        }
      }
    },
    overallAdoption: {
      toolStats: [
        {
          used: 306,
          current: 295,
          currentFree: 261,
          currentPaid: 34,
          never: 5,
          notYet: 20,
          thinking: 0,
          tool: "ChatGPT",
          total: 331,
          raw: {
            "Yes, but free version": 261,
            "Yes, I pay for a subscription": 34,
            "No, not yet": 20,
            "Yes, but no longer": 11,
            "No & I will never (on principle)": 5
          }
        },
        {
          used: 192,
          current: 165,
          currentFree: 155,
          currentPaid: 10,
          never: 35,
          notYet: 104,
          thinking: 0,
          tool: "Meta AI (via Whatsapp, Facebook and/or Instagram)",
          total: 331,
          raw: {
            "No & I will never (on principle)": 35,
            "No, not yet": 104,
            "Yes, but free version": 155,
            "Yes, I pay for a subscription": 10,
            "Yes, but no longer": 27
          }
        },
        {
          used: 171,
          current: 156,
          currentFree: 146,
          currentPaid: 10,
          never: 25,
          notYet: 135,
          thinking: 0,
          tool: "Copilot",
          total: 331,
          raw: {
            "Yes, but free version": 146,
            "No, not yet": 135,
            "Yes, I pay for a subscription": 10,
            "Yes, but no longer": 15,
            "No & I will never (on principle)": 25
          }
        },
        {
          used: 132,
          current: 109,
          currentFree: 105,
          currentPaid: 4,
          never: 26,
          notYet: 173,
          thinking: 0,
          tool: "Gemini",
          total: 331,
          raw: {
            "No & I will never (on principle)": 26,
            "No, not yet": 173,
            "Yes, but free version": 105,
            "Yes, but no longer": 23,
            "Yes, I pay for a subscription": 4
          }
        },
        {
          used: 79,
          current: 61,
          currentFree: 57,
          currentPaid: 4,
          never: 35,
          notYet: 217,
          thinking: 0,
          tool: "DeepSeek",
          total: 331,
          raw: {
            "No & I will never (on principle)": 35,
            "No, not yet": 217,
            "Yes, but free version": 57,
            "Yes, I pay for a subscription": 4,
            "Yes, but no longer": 18
          }
        },
        {
          used: 62,
          current: 60,
          currentFree: 55,
          currentPaid: 5,
          never: 41,
          notYet: 228,
          thinking: 0,
          tool: "NotebookLM",
          total: 331,
          raw: {
            "No & I will never (on principle)": 41,
            "No, not yet": 228,
            "Yes, but free version": 55,
            "Yes, I pay for a subscription": 5,
            "Yes, but no longer": 2
          }
        },
        {
          used: 60,
          current: 48,
          currentFree: 47,
          currentPaid: 1,
          never: 37,
          notYet: 234,
          thinking: 0,
          tool: "Perplexity",
          total: 331,
          raw: {
            "No & I will never (on principle)": 37,
            "No, not yet": 234,
            "Yes, but free version": 47,
            "Yes, but no longer": 12,
            "Yes, I pay for a subscription": 1
          }
        },
        {
          used: 60,
          current: 48,
          currentFree: 46,
          currentPaid: 2,
          never: 46,
          notYet: 225,
          thinking: 0,
          tool: "Grok",
          total: 331,
          raw: {
            "No & I will never (on principle)": 46,
            "Yes, but no longer": 12,
            "No, not yet": 225,
            "Yes, but free version": 46,
            "Yes, I pay for a subscription": 2
          }
        },
        {
          used: 39,
          current: 34,
          currentFree: 32,
          currentPaid: 2,
          never: 38,
          notYet: 254,
          thinking: 0,
          tool: "Claude",
          total: 331,
          raw: {
            "No & I will never (on principle)": 38,
            "No, not yet": 254,
            "Yes, but free version": 32,
            "Yes, but no longer": 5,
            "Yes, I pay for a subscription": 2
          }
        },
        {
          used: 35,
          current: 34,
          currentFree: 24,
          currentPaid: 10,
          never: 55,
          notYet: 241,
          thinking: 0,
          tool: "Other",
          total: 331,
          raw: {
            "No & I will never (on principle)": 55,
            "No, not yet": 241,
            "Yes, but free version": 24,
            "Yes, I pay for a subscription": 10,
            "Yes, but no longer": 1
          }
        },
        {
          used: 29,
          current: 17,
          currentFree: 15,
          currentPaid: 2,
          never: 41,
          notYet: 261,
          thinking: 0,
          tool: "Midjourney",
          total: 331,
          raw: {
            "No & I will never (on principle)": 41,
            "No, not yet": 261,
            "Yes, but no longer": 12,
            "Yes, but free version": 15,
            "Yes, I pay for a subscription": 2
          }
        },
        {
          used: 25,
          current: 21,
          currentFree: 20,
          currentPaid: 1,
          never: 38,
          notYet: 268,
          thinking: 0,
          tool: "Github Copilot",
          total: 331,
          raw: {
            "No & I will never (on principle)": 38,
            "No, not yet": 268,
            "Yes, but free version": 20,
            "Yes, but no longer": 4,
            "Yes, I pay for a subscription": 1
          }
        },
        {
          used: 13,
          current: 8,
          currentFree: 7,
          currentPaid: 1,
          never: 44,
          notYet: 274,
          thinking: 0,
          tool: "Stable Diffusion",
          total: 331,
          raw: {
            "No & I will never (on principle)": 44,
            "No, not yet": 274,
            "Yes, but free version": 7,
            "Yes, but no longer": 5,
            "Yes, I pay for a subscription": 1
          }
        },
        {
          used: 13,
          current: 11,
          currentFree: 8,
          currentPaid: 3,
          never: 43,
          notYet: 275,
          thinking: 0,
          tool: "ElevenLabs",
          total: 331,
          raw: {
            "No & I will never (on principle)": 43,
            "No, not yet": 275,
            "Yes, I pay for a subscription": 3,
            "Yes, but free version": 8,
            "Yes, but no longer": 2
          }
        },
        {
          used: 12,
          current: 7,
          currentFree: 6,
          currentPaid: 1,
          never: 41,
          notYet: 278,
          thinking: 0,
          tool: "Veo",
          total: 331,
          raw: {
            "No & I will never (on principle)": 41,
            "No, not yet": 278,
            "Yes, but free version": 6,
            "Yes, but no longer": 5,
            "Yes, I pay for a subscription": 1
          }
        },
        {
          used: 12,
          current: 10,
          currentFree: 10,
          currentPaid: 0,
          never: 43,
          notYet: 276,
          thinking: 0,
          tool: "MagicSchool",
          total: 331,
          raw: {
            "No & I will never (on principle)": 43,
            "No, not yet": 276,
            "Yes, but free version": 10,
            "Yes, but no longer": 2
          }
        },
        {
          used: 10,
          current: 7,
          currentFree: 7,
          currentPaid: 0,
          never: 43,
          notYet: 278,
          thinking: 0,
          tool: "Khanmigo",
          total: 331,
          raw: {
            "No & I will never (on principle)": 43,
            "No, not yet": 278,
            "Yes, but free version": 7,
            "Yes, but no longer": 3
          }
        },
        {
          used: 8,
          current: 5,
          currentFree: 4,
          currentPaid: 1,
          never: 44,
          notYet: 279,
          thinking: 0,
          tool: "Runway",
          total: 331,
          raw: {
            "No & I will never (on principle)": 44,
            "No, not yet": 279,
            "Yes, but no longer": 3,
            "Yes, but free version": 4,
            "Yes, I pay for a subscription": 1
          }
        },
        {
          used: 8,
          current: 5,
          currentFree: 5,
          currentPaid: 0,
          never: 44,
          notYet: 279,
          thinking: 0,
          tool: "Replit",
          total: 331,
          raw: {
            "No & I will never (on principle)": 44,
            "No, not yet": 279,
            "Yes, but free version": 5,
            "Yes, but no longer": 3
          }
        },
        {
          used: 8,
          current: 6,
          currentFree: 6,
          currentPaid: 0,
          never: 43,
          notYet: 280,
          thinking: 0,
          tool: "Mindjoy",
          total: 331,
          raw: {
            "No & I will never (on principle)": 43,
            "No, not yet": 280,
            "Yes, but free version": 6,
            "Yes, but no longer": 2
          }
        },
        {
          used: 7,
          current: 3,
          currentFree: 2,
          currentPaid: 1,
          never: 43,
          notYet: 281,
          thinking: 0,
          tool: "Cursor",
          total: 331,
          raw: {
            "No & I will never (on principle)": 43,
            "No, not yet": 281,
            "Yes, but free version": 2,
            "Yes, but no longer": 4,
            "Yes, I pay for a subscription": 1
          }
        },
        {
          used: 7,
          current: 5,
          currentFree: 4,
          currentPaid: 1,
          never: 43,
          notYet: 281,
          thinking: 0,
          tool: "Windsurf",
          total: 331,
          raw: {
            "No & I will never (on principle)": 43,
            "No, not yet": 281,
            "Yes, but free version": 4,
            "Yes, but no longer": 2,
            "Yes, I pay for a subscription": 1
          }
        }
      ],
      topTools: [
        {
          used: 306,
          current: 295,
          currentFree: 261,
          currentPaid: 34,
          never: 5,
          notYet: 20,
          thinking: 0,
          tool: "ChatGPT",
          total: 331,
          raw: {
            "Yes, but free version": 261,
            "Yes, I pay for a subscription": 34,
            "No, not yet": 20,
            "Yes, but no longer": 11,
            "No & I will never (on principle)": 5
          }
        },
        {
          used: 192,
          current: 165,
          currentFree: 155,
          currentPaid: 10,
          never: 35,
          notYet: 104,
          thinking: 0,
          tool: "Meta AI (via Whatsapp, Facebook and/or Instagram)",
          total: 331,
          raw: {
            "No & I will never (on principle)": 35,
            "No, not yet": 104,
            "Yes, but free version": 155,
            "Yes, I pay for a subscription": 10,
            "Yes, but no longer": 27
          }
        },
        {
          used: 171,
          current: 156,
          currentFree: 146,
          currentPaid: 10,
          never: 25,
          notYet: 135,
          thinking: 0,
          tool: "Copilot",
          total: 331,
          raw: {
            "Yes, but free version": 146,
            "No, not yet": 135,
            "Yes, I pay for a subscription": 10,
            "Yes, but no longer": 15,
            "No & I will never (on principle)": 25
          }
        },
        {
          used: 132,
          current: 109,
          currentFree: 105,
          currentPaid: 4,
          never: 26,
          notYet: 173,
          thinking: 0,
          tool: "Gemini",
          total: 331,
          raw: {
            "No & I will never (on principle)": 26,
            "No, not yet": 173,
            "Yes, but free version": 105,
            "Yes, but no longer": 23,
            "Yes, I pay for a subscription": 4
          }
        },
        {
          used: 79,
          current: 61,
          currentFree: 57,
          currentPaid: 4,
          never: 35,
          notYet: 217,
          thinking: 0,
          tool: "DeepSeek",
          total: 331,
          raw: {
            "No & I will never (on principle)": 35,
            "No, not yet": 217,
            "Yes, but free version": 57,
            "Yes, I pay for a subscription": 4,
            "Yes, but no longer": 18
          }
        },
        {
          used: 62,
          current: 60,
          currentFree: 55,
          currentPaid: 5,
          never: 41,
          notYet: 228,
          thinking: 0,
          tool: "NotebookLM",
          total: 331,
          raw: {
            "No & I will never (on principle)": 41,
            "No, not yet": 228,
            "Yes, but free version": 55,
            "Yes, I pay for a subscription": 5,
            "Yes, but no longer": 2
          }
        },
        {
          used: 60,
          current: 48,
          currentFree: 47,
          currentPaid: 1,
          never: 37,
          notYet: 234,
          thinking: 0,
          tool: "Perplexity",
          total: 331,
          raw: {
            "No & I will never (on principle)": 37,
            "No, not yet": 234,
            "Yes, but free version": 47,
            "Yes, but no longer": 12,
            "Yes, I pay for a subscription": 1
          }
        },
        {
          used: 60,
          current: 48,
          currentFree: 46,
          currentPaid: 2,
          never: 46,
          notYet: 225,
          thinking: 0,
          tool: "Grok",
          total: 331,
          raw: {
            "No & I will never (on principle)": 46,
            "Yes, but no longer": 12,
            "No, not yet": 225,
            "Yes, but free version": 46,
            "Yes, I pay for a subscription": 2
          }
        },
        {
          used: 39,
          current: 34,
          currentFree: 32,
          currentPaid: 2,
          never: 38,
          notYet: 254,
          thinking: 0,
          tool: "Claude",
          total: 331,
          raw: {
            "No & I will never (on principle)": 38,
            "No, not yet": 254,
            "Yes, but free version": 32,
            "Yes, but no longer": 5,
            "Yes, I pay for a subscription": 2
          }
        },
        {
          used: 35,
          current: 34,
          currentFree: 24,
          currentPaid: 10,
          never: 55,
          notYet: 241,
          thinking: 0,
          tool: "Other",
          total: 331,
          raw: {
            "No & I will never (on principle)": 55,
            "No, not yet": 241,
            "Yes, but free version": 24,
            "Yes, I pay for a subscription": 10,
            "Yes, but no longer": 1
          }
        }
      ],
      topCurrentBreakdown: [
        {
          tool: "ChatGPT",
          currentFree: 261,
          currentPaid: 34,
          currentTotal: 295
        },
        {
          tool: "Meta AI (via Whatsapp, Facebook and/or Instagram)",
          currentFree: 155,
          currentPaid: 10,
          currentTotal: 165
        },
        {
          tool: "Copilot",
          currentFree: 146,
          currentPaid: 10,
          currentTotal: 156
        },
        {
          tool: "Gemini",
          currentFree: 105,
          currentPaid: 4,
          currentTotal: 109
        },
        {
          tool: "DeepSeek",
          currentFree: 57,
          currentPaid: 4,
          currentTotal: 61
        }
      ],
      adoptionWork: {
        counts: {
          "No & I will never (on principle)": 11,
          "No, not yet": 37,
          "Yes, but no longer": 14,
          "I am thinking about it": 14,
          "Yes, I do": 255
        },
        percentages: {
          "No & I will never (on principle)": 3.3,
          "No, not yet": 11.2,
          "Yes, but no longer": 4.2,
          "I am thinking about it": 4.2,
          "Yes, I do": 77
        },
        total: 331
      },
      adoptionPersonal: {
        counts: {
          "No & I will never (on principle)": 5,
          "No, not yet": 14,
          "Yes, but no longer": 16,
          "I am thinking about it": 9,
          "Yes, I do": 287
        },
        percentages: {
          "No & I will never (on principle)": 1.5,
          "No, not yet": 4.2,
          "Yes, but no longer": 4.8,
          "I am thinking about it": 2.7,
          "Yes, I do": 86.7
        },
        total: 331
      },
      adoptionBoth: {
        counts: {
          "Both work & personal": 263,
          "Work only": 6,
          "Personal only": 40
        },
        total: 309
      },
      activities: [
        {
          label: "(Online) research - fact checking, learning, understanding, market research, academic research, business intelligence, etc.",
          used: 270,
          never: 9,
          thinking: 12,
          notYet: 40,
          total: 331
        },
        {
          label: "Text creation & manipulation - writing, proofing, reviewing, summarising & translating of emails, documents, contracts, reports, etc.",
          used: 229,
          never: 21,
          thinking: 24,
          notYet: 57,
          total: 331
        },
        {
          label: "Educational purposes  - creating lesson plans & content, tutoring, test creation, marking, etc.",
          used: 177,
          never: 27,
          thinking: 25,
          notYet: 102,
          total: 331
        },
        {
          label: "Meeting preparation & recording - agenda setting, note-taking, creation of summaries & action lists, etc.",
          used: 143,
          never: 23,
          thinking: 37,
          notYet: 128,
          total: 331
        },
        {
          label: "Media creation & manipulation - making & editing of images, video, sound & designs for presentations, documents, marketing materials, etc.",
          used: 141,
          never: 28,
          thinking: 35,
          notYet: 127,
          total: 331
        },
        {
          label: "Technical tasks  - data, statistical & financial analysis, coding, web development, cyber security, system administration, etc.",
          used: 97,
          never: 33,
          thinking: 37,
          notYet: 164,
          total: 331
        }
      ],
      concerns: [
        {
          label: "Poor quality & unreliability of output - creates 'unnatural' text, is inaccurate, takes shortcuts, makes up facts ('hallucinations'), etc.",
          counts: {
            Disagree: 53,
            Neutral: 117,
            Agree: 161
          },
          percentages: {
            Disagree: 16,
            Neutral: 35.3,
            Agree: 48.6
          },
          total: 331
        },
        {
          label: "High technical hurdles of adoption - is difficult to use, has steep learning curve, is costly to implement, etc.",
          counts: {
            Disagree: 140,
            Neutral: 128,
            Agree: 63
          },
          percentages: {
            Disagree: 42.3,
            Neutral: 38.7,
            Agree: 19
          },
          total: 331
        },
        {
          label: "Ethical issues associated with use - has privacy concerns, triggers cheating & plagiarism, faces legal constraints, etc.",
          counts: {
            Disagree: 22,
            Neutral: 87,
            Agree: 222
          },
          percentages: {
            Disagree: 6.6,
            Neutral: 26.3,
            Agree: 67.1
          },
          total: 331
        },
        {
          label: "Adverse impact on people's jobs - threatens job security, requires additional training, creates extra work stress, etc.",
          counts: {
            Disagree: 74,
            Neutral: 137,
            Agree: 120
          },
          percentages: {
            Disagree: 22.4,
            Neutral: 41.4,
            Agree: 36.3
          },
          total: 331
        }
      ],
      benefits: [
        {
          label: "Improved efficiency - makes work easier & faster, increases quantity of output, helps people to get more done in less time, etc.",
          counts: {
            Disagree: 16,
            Neutral: 49,
            Agree: 266
          },
          percentages: {
            Disagree: 4.8,
            Neutral: 14.8,
            Agree: 80.4
          },
          total: 331
        },
        {
          label: "Better quality - raises bar at which people can operate, reduces errors, improves quality of output, improves customer service, etc.",
          counts: {
            Disagree: 44,
            Neutral: 104,
            Agree: 183
          },
          percentages: {
            Disagree: 13.3,
            Neutral: 31.4,
            Agree: 55.3
          },
          total: 331
        },
        {
          label: "Improved decision-making - enhances knowledge and insight, leads to more effective planning, optimises resource allocation, etc.",
          counts: {
            Disagree: 31,
            Neutral: 108,
            Agree: 192
          },
          percentages: {
            Disagree: 9.4,
            Neutral: 32.6,
            Agree: 58
          },
          total: 331
        },
        {
          label: "More automation - reduces (time spent on) meaningless tasks, frees up capacity for more value-add, meaningful & enjoyable activities, etc.",
          counts: {
            Disagree: 20,
            Neutral: 66,
            Agree: 245
          },
          percentages: {
            Disagree: 6,
            Neutral: 19.9,
            Agree: 74
          },
          total: 331
        },
        {
          label: "Enhanced creativity  - expands the mind, generates fresh ideas, explores unique solutions, etc.",
          counts: {
            Disagree: 41,
            Neutral: 83,
            Agree: 207
          },
          percentages: {
            Disagree: 12.4,
            Neutral: 25.1,
            Agree: 62.5
          },
          total: 331
        }
      ],
      metaUsage: [
        {
          label: "In WhatsApp",
          counts: {
            No: 108,
            Maybe: 95,
            Yes: 128
          },
          total: 331
        },
        {
          label: "In Facebook",
          counts: {
            No: 172,
            Maybe: 92,
            Yes: 67
          },
          total: 331
        },
        {
          label: "In Instagram",
          counts: {
            No: 173,
            Maybe: 92,
            Yes: 66
          },
          total: 331
        },
        {
          label: "On Meta website",
          counts: {
            No: 141,
            Maybe: 119,
            Yes: 71
          },
          total: 331
        }
      ],
      reasoningModels: {
        counts: {
          "No, not yet": 184,
          "Yes, I do": 83,
          "I am thinking about it": 39,
          "Yes, but no longer": 6,
          "No & I will never (on principle)": 19
        },
        total: 331
      },
      aiAgents: {
        counts: {
          "No, not yet": 192,
          "Yes, I do": 77,
          "I am thinking about it": 37,
          "No & I will never (on principle)": 20,
          "Yes, but no longer": 5
        },
        total: 331
      }
    },
    academicStaff: {
      attitudes: [
        {
          label: "Curriculum planning & implementation - creating lesson plans, determining learning objectives, finding real-world use cases & applications, etc.",
          counts: {
            Never: 10,
            "No opinion": 19,
            Yes: 175
          },
          percentages: {
            Never: 4.9,
            "No opinion": 9.3,
            Yes: 85.8
          },
          total: 204
        },
        {
          label: "Content creation - creating & testing learning materials, visual aids, presentations, study guides, etc.",
          counts: {
            Never: 7,
            "No opinion": 22,
            Yes: 175
          },
          percentages: {
            Never: 3.4,
            "No opinion": 10.8,
            Yes: 85.8
          },
          total: 204
        },
        {
          label: "Student assessment & feedback - preparing and conducting (ad-hoc) tests, automate marking of homework & tests, creating personalised reports, implementing progress tracking methods, etc.",
          counts: {
            Never: 39,
            "No opinion": 33,
            Yes: 132
          },
          percentages: {
            Never: 19.1,
            "No opinion": 16.2,
            Yes: 64.7
          },
          total: 204
        },
        {
          label: "Documentation & communication - creating personalised reports & parent communication, preparing for lecturer-student meetings, etc.",
          counts: {
            Never: 41,
            "No opinion": 39,
            Yes: 124
          },
          percentages: {
            Never: 20.1,
            "No opinion": 19.1,
            Yes: 60.8
          },
          total: 204
        }
      ],
      behaviours: [
        {
          label: "Curriculum planning & implementation - creating lesson plans, determining learning objectives, finding real-world case studies & applications, etc.",
          counts: {
            "No & I will never (on principle)": 8,
            "No, not yet": 54,
            "Yes, but no longer": 5,
            "I am thinking about it": 26,
            "Yes, I do": 111
          },
          percentages: {
            "No & I will never (on principle)": 3.9,
            "No, not yet": 26.5,
            "Yes, but no longer": 2.5,
            "I am thinking about it": 12.7,
            "Yes, I do": 54.4
          },
          total: 204
        },
        {
          label: "Content creation - creating & testing learning materials, visual aids, presentations, study guides, etc.",
          counts: {
            "No & I will never (on principle)": 9,
            "No, not yet": 42,
            "Yes, but no longer": 6,
            "I am thinking about it": 23,
            "Yes, I do": 124
          },
          percentages: {
            "No & I will never (on principle)": 4.4,
            "No, not yet": 20.6,
            "Yes, but no longer": 2.9,
            "I am thinking about it": 11.3,
            "Yes, I do": 60.8
          },
          total: 204
        },
        {
          label: "Student assessment & feedback - preparing and conducting (ad-hoc) tests, automate marking of homework & tests, creating personalised reports, implementing progress tracking methods, etc.",
          counts: {
            "No & I will never (on principle)": 28,
            "No, not yet": 79,
            "Yes, but no longer": 4,
            "I am thinking about it": 36,
            "Yes, I do": 57
          },
          percentages: {
            "No & I will never (on principle)": 13.7,
            "No, not yet": 38.7,
            "Yes, but no longer": 2,
            "I am thinking about it": 17.6,
            "Yes, I do": 27.9
          },
          total: 204
        },
        {
          label: "Documentation & communication - creating personalised reports & parent communication, preparing for lecturer-student meetings, etc.",
          counts: {
            "No & I will never (on principle)": 33,
            "No, not yet": 82,
            "Yes, but no longer": 4,
            "I am thinking about it": 31,
            "Yes, I do": 54
          },
          percentages: {
            "No & I will never (on principle)": 16.2,
            "No, not yet": 40.2,
            "Yes, but no longer": 2,
            "I am thinking about it": 15.2,
            "Yes, I do": 26.5
          },
          total: 204
        }
      ],
      concerns: [
        {
          label: "Teaching material reliability - risk of GenAi tools generating incorrect content (or of inconsistent quality) when creating lesson plans, or providing unreliable answers for exam questions or misleading explanations for complex topics, etc.",
          counts: {
            Disagree: 13,
            Neutral: 57,
            Agree: 134
          },
          percentages: {
            Disagree: 6.4,
            Neutral: 27.9,
            Agree: 65.7
          },
          total: 204
        },
        {
          label: "Technical teaching hurdles - fears of large number of GenAi tools to test, of large amount of time spent learning new tools, and difficulty integrating new platforms into existing teaching practices, etc.",
          counts: {
            Disagree: 43,
            Neutral: 72,
            Agree: 89
          },
          percentages: {
            Disagree: 21.1,
            Neutral: 35.3,
            Agree: 43.6
          },
          total: 204
        },
        {
          label: "Professional ethics & accountability - uncertainty about acceptable AI use, concerns about intellectual property rights, questions about transparency when using GenAi-assisted grading, etc.",
          counts: {
            Disagree: 13,
            Neutral: 56,
            Agree: 135
          },
          percentages: {
            Disagree: 6.4,
            Neutral: 27.5,
            Agree: 66.2
          },
          total: 204
        },
        {
          label: "Professional role uncertainty - danger of reduced value of  teaching experience, pressure to constantly adapt teaching methods, stress from shifting classroom dynamics, anxiety about skill obsolescence, etc.",
          counts: {
            Disagree: 35,
            Neutral: 66,
            Agree: 103
          },
          percentages: {
            Disagree: 17.2,
            Neutral: 32.4,
            Agree: 50.5
          },
          total: 204
        }
      ],
      benefits: [
        {
          label: "Teaching preparation efficiency - faster creation of lesson plans, quick generation of different exercises, rapid adaptation of materials for different academic levels, etc.",
          counts: {
            Disagree: 7,
            Neutral: 22,
            Agree: 175
          },
          percentages: {
            Disagree: 3.4,
            Neutral: 10.8,
            Agree: 85.8
          },
          total: 204
        },
        {
          label: "Enhanced teaching materials - more diverse examples for concepts, better-structured lesson plans, richer vocabulary in instructions, more polished educational resources, etc.",
          counts: {
            Disagree: 8,
            Neutral: 33,
            Agree: 163
          },
          percentages: {
            Disagree: 3.9,
            Neutral: 16.2,
            Agree: 79.9
          },
          total: 204
        },
        {
          label: "Professional development support - personalised teaching approach suggestions, quick access to pedagogical research summaries, insights into alternative teaching approaches, efficient curriculum mapping, etc.",
          counts: {
            Disagree: 14,
            Neutral: 46,
            Agree: 144
          },
          percentages: {
            Disagree: 6.9,
            Neutral: 22.5,
            Agree: 70.6
          },
          total: 204
        },
        {
          label: "Administrative relief - automated progress report writing, quick parent communication drafts, streamlined documentation, simplified record-keeping, etc.",
          counts: {
            Disagree: 20,
            Neutral: 45,
            Agree: 139
          },
          percentages: {
            Disagree: 9.8,
            Neutral: 22.1,
            Agree: 68.1
          },
          total: 204
        },
        {
          label: "Instructional creativity - novel lesson activity ideas, fresh approaches to explaining concepts, innovative project prompts, unique classroom exercise formats, etc.",
          counts: {
            Disagree: 18,
            Neutral: 44,
            Agree: 142
          },
          percentages: {
            Disagree: 8.8,
            Neutral: 21.6,
            Agree: 69.6
          },
          total: 204
        }
      ],
      toolTypes: [
        {
          label: "Conversational AI tools (Chatbots) - e.g. ChatGPT, Claude, Gemini, Copilot, Grok, Meta AI, etc.",
          used: 154,
          never: 7,
          total: 204
        },
        {
          label: "Search tools - Perplexity, ChatGPT Search, Claude Search, Gemini Search, Grok Search, etc.",
          used: 148,
          never: 5,
          total: 204
        },
        {
          label: "Image creation & manipulation tools - Midjourney, Stable Diffusion, Leonardo AI, Images with ChatGPT, Imagen, etc.",
          used: 87,
          never: 11,
          total: 204
        },
        {
          label: "Meeting  tools  - Copilot in Teams, Otter.ai, Zoom AI Companion, Take Notes with Gemini, etc.",
          used: 81,
          never: 8,
          total: 204
        },
        {
          label: "AI Agents - ChatGPT Agent, Manus AI, Comet Web Browser, etc.",
          used: 73,
          never: 14,
          total: 204
        },
        {
          label: "Reasoning models - OpenAI o3 or o4 , Gemini 2.5 Pro, Claude 4, Grok 4, DeepSeek R1, etc.",
          used: 66,
          never: 12,
          total: 204
        },
        {
          label: "Education platforms - Khanmigo, MagicSchool, Mindjoy, MagicSchool.ai, NotebookLM, etc.",
          used: 58,
          never: 15,
          total: 204
        },
        {
          label: "Video creation & manipulation tools - Runway, HeyGen, Synthesia, Pika, Adobe Firefly, Veo, Kling, etc.",
          used: 48,
          never: 17,
          total: 204
        },
        {
          label: "Code generation tools - Github Copilot, Cursor, Windsurf, Replit, Lovable, ChatGPT, Claude, Cursor, Windsurf, etc.",
          used: 48,
          never: 19,
          total: 204
        },
        {
          label: "Audio creation & manipulation tools - ElevenLabs, Suno, Udio, etc.",
          used: 37,
          never: 17,
          total: 204
        }
      ],
      codeEditors: {
        counts: {
          "No, not yet": 165,
          "No & I will never (on principle)": 13,
          "I am thinking about it": 15,
          "Yes, I do": 11
        },
        total: 204
      },
      confidence: {
        counts: {
          Neutral: 32,
          "Somewhat confident": 72,
          "Very confident": 51,
          "Not confident": 14,
          "Somewhat unsure": 35
        },
        total: 204
      },
      disclosure: {
        counts: {
          "No & I will never (on principle)": 18,
          "No, not yet": 45,
          "Not applicable": 39,
          Sometimes: 54,
          "Yes, I do": 48
        },
        total: 204
      }
    },
    students: {
      attitudes: [
        {
          label: "Personalised learning support - preparing concept explanations in preferred style, devising mathematical problem guidance, seeking real-world application examples & use cases, etc.",
          counts: {
            Never: 17,
            "No opinion": 20,
            Yes: 167
          },
          percentages: {
            Never: 8.3,
            "No opinion": 9.8,
            Yes: 81.9
          },
          total: 204
        },
        {
          label: "Study material generation - creating study guides, preparing revision notes, devising practice questions at chosen level, etc.",
          counts: {
            Never: 20,
            "No opinion": 35,
            Yes: 149
          },
          percentages: {
            Never: 9.8,
            "No opinion": 17.2,
            Yes: 73
          },
          total: 204
        },
        {
          label: "Academic planning & research - planning assignments, conducting & summarising research, creating supporting visual aids for inclusion in assignments, etc.",
          counts: {
            Never: 28,
            "No opinion": 33,
            Yes: 143
          },
          percentages: {
            Never: 13.7,
            "No opinion": 16.2,
            Yes: 70.1
          },
          total: 204
        },
        {
          label: "Self-assessment & improvement - creating interactive rehearsal quizzes, seeking essay feedback & improvement suggestions, etc.",
          counts: {
            Never: 11,
            "No opinion": 28,
            Yes: 165
          },
          percentages: {
            Never: 5.4,
            "No opinion": 13.7,
            Yes: 80.9
          },
          total: 204
        }
      ],
      behaviours: [
        {
          label: "Personalised learning support - preparing concept explanations in preferred style, devising mathematical problem guidance, seeking real-world application examples & use cases, etc.",
          counts: {
            No: 11,
            "I don't know": 0,
            Yes: 130
          },
          percentages: {
            No: 5.4,
            "I don't know": 0,
            Yes: 63.7
          },
          total: 204
        },
        {
          label: "Study material generation - creating study guides, preparing revision notes, devising practice questions at chosen level, etc.",
          counts: {
            No: 18,
            "I don't know": 0,
            Yes: 96
          },
          percentages: {
            No: 8.8,
            "I don't know": 0,
            Yes: 47.1
          },
          total: 204
        },
        {
          label: "Academic planning & research - planning assignments, conducting & summarising research, creating supporting visual aids for inclusion in assignments, etc.",
          counts: {
            No: 13,
            "I don't know": 0,
            Yes: 117
          },
          percentages: {
            No: 6.4,
            "I don't know": 0,
            Yes: 57.4
          },
          total: 204
        },
        {
          label: "Self-assessment & improvement - creating interactive rehearsal quizzes, seeking essay feedback & improvement suggestions, etc.",
          counts: {
            No: 17,
            "I don't know": 0,
            Yes: 87
          },
          percentages: {
            No: 8.3,
            "I don't know": 0,
            Yes: 42.6
          },
          total: 204
        }
      ],
      concerns: [
        {
          label: "Student output reliability issues - Students submitting GenAi-generated work with factual errors, inability to distinguish genuine student work from GenAi work,  difficulty in assessing true student understanding, etc.",
          counts: {
            Disagree: 5,
            Neutral: 32,
            Agree: 167
          },
          percentages: {
            Disagree: 2.5,
            Neutral: 15.7,
            Agree: 81.9
          },
          total: 204
        },
        {
          label: "Student usage barriers - unequal access to GenAi by learners, time spent explaining GenAi tool use & fixing problems instead of teaching subject matter, managing different levels of GenAi tool proficiency in class, etc.",
          counts: {
            Disagree: 11,
            Neutral: 43,
            Agree: 150
          },
          percentages: {
            Disagree: 5.4,
            Neutral: 21.1,
            Agree: 73.5
          },
          total: 204
        },
        {
          label: "Academic honesty management - difficulty detecting GenAi-assisted cheating, time spent investigating suspected GenAi use, challenges in enforcing AI usage policies, etc.",
          counts: {
            Disagree: 8,
            Neutral: 31,
            Agree: 165
          },
          percentages: {
            Disagree: 3.9,
            Neutral: 15.2,
            Agree: 80.9
          },
          total: 204
        },
        {
          label: "Learning assessment challenges - uncertainty about learners' true capabilities & progress, difficulty in grading GenAi-aided work fairly, complications in providing accurate student feedback, etc.",
          counts: {
            Disagree: 7,
            Neutral: 36,
            Agree: 161
          },
          percentages: {
            Disagree: 3.4,
            Neutral: 17.6,
            Agree: 78.9
          },
          total: 204
        }
      ],
      benefits: [
        {
          label: "Student work efficiency monitoring - Students completing routine tasks & homework assignments faster allowing  for richer classroom debates & letting lecturers focus on testing real understanding, etc.",
          counts: {
            Disagree: 37,
            Neutral: 60,
            Agree: 107
          },
          percentages: {
            Disagree: 18.1,
            Neutral: 29.4,
            Agree: 52.5
          },
          total: 204
        },
        {
          label: "Student work quality improvement - teachers having better structured Student essays to review, more polished Student presentations to assess & clearer student explanations to evaluate, etc.",
          counts: {
            Disagree: 48,
            Neutral: 64,
            Agree: 92
          },
          percentages: {
            Disagree: 23.5,
            Neutral: 31.4,
            Agree: 45.1
          },
          total: 204
        },
        {
          label: "Student learning strategy enhancement - Students having multiple inputs for class discussion, finding broader (research) perspectives for assignments & conducting better planning to guide their studies, etc.",
          counts: {
            Disagree: 21,
            Neutral: 66,
            Agree: 117
          },
          percentages: {
            Disagree: 10.3,
            Neutral: 32.4,
            Agree: 57.4
          },
          total: 204
        },
        {
          label: "Basic skills automation benefits - Students using GenAi tools for learning basic concepts (and correcting basic mistakes) allowing lecturers more time for teaching advanced topics & easier identification of genuine learning gaps, etc.",
          counts: {
            Disagree: 30,
            Neutral: 59,
            Agree: 115
          },
          percentages: {
            Disagree: 14.7,
            Neutral: 28.9,
            Agree: 56.4
          },
          total: 204
        },
        {
          label: "Student creative development - Students developing more varied approaches/responses/perspectives to classroom discussions & exploring innovative problem-solving methods for assignments, etc.",
          counts: {
            Disagree: 42,
            Neutral: 56,
            Agree: 106
          },
          percentages: {
            Disagree: 20.6,
            Neutral: 27.5,
            Agree: 52
          },
          total: 204
        }
      ],
      tools: [
        {
          label: "Conversational AI tools (Chatbots) - e.g. ChatGPT, Claude, Gemini, Copilot, Grok, Meta AI, etc.",
          count: 152
        },
        {
          label: "Search tools - Perplexity, ChatGPT Search, Claude Search, Gemini Search, Grok Search, etc.",
          count: 126
        },
        {
          label: "Image creation & manipulation tools - Midjourney, Stable Diffusion, Leonardo AI, Images with ChatGPT, Imagen, etc.",
          count: 67
        },
        {
          label: "Reasoning models - OpenAI o3 or o4 , Gemini 2.5 Pro, Claude 4, Grok 4, DeepSeek R1, etc.",
          count: 64
        },
        {
          label: "AI Agents - ChatGPT Agent, Manus AI, Comet Web Browser, etc.",
          count: 61
        },
        {
          label: "Code generation tools - Github Copilot, Cursor, Windsurf, Replit, Lovable, ChatGPT, Claude, etc.",
          count: 53
        },
        {
          label: "Meeting  tools  - Copilot in Teams, Otter.ai, Zoom AI Companion, Take Notes with Gemini, etc.",
          count: 51
        },
        {
          label: "Video creation & manipulation tools - Runway, HeyGen, Synthesia, Pika, Adobe Firefly, Veo, Kling, etc.",
          count: 43
        },
        {
          label: "Education platforms - Khanmigo, MagicSchool, Mindjoy, MagicSchool, NotebookLM, etc.",
          count: 38
        },
        {
          label: "Audio creation & manipulation tools - ElevenLabs, Suno, Udio, etc.",
          count: 33
        }
      ],
      abuseConcerns: [
        {
          label: "Using AI to complete (homework) assignments without understanding.",
          counts: {
            Disagree: 5,
            Neutral: 13,
            Agree: 186
          },
          percentages: {
            Disagree: 2.5,
            Neutral: 6.4,
            Agree: 91.2
          },
          total: 204
        },
        {
          label: "Copying AI-generated content without proper attribution and/or informing the lecturers and/or when it is explicitly not allowed.",
          counts: {
            Disagree: 3,
            Neutral: 17,
            Agree: 184
          },
          percentages: {
            Disagree: 1.5,
            Neutral: 8.3,
            Agree: 90.2
          },
          total: 204
        },
        {
          label: "Over-reliance leading to reduced critical thinking & other fundamental skills.",
          counts: {
            Disagree: 4,
            Neutral: 19,
            Agree: 181
          },
          percentages: {
            Disagree: 2,
            Neutral: 9.3,
            Agree: 88.7
          },
          total: 204
        },
        {
          label: "Getting AI to solve tests/exam questions instead of learning and/or inflating grades.",
          counts: {
            Disagree: 6,
            Neutral: 17,
            Agree: 181
          },
          percentages: {
            Disagree: 2.9,
            Neutral: 8.3,
            Agree: 88.7
          },
          total: 204
        },
        {
          label: "Finding ways around plagiarism & AI detection systems.",
          counts: {
            Disagree: 9,
            Neutral: 21,
            Agree: 174
          },
          percentages: {
            Disagree: 4.4,
            Neutral: 10.3,
            Agree: 85.3
          },
          total: 204
        }
      ],
      abuseTypes: [
        {
          label: "Copying AI-generated content without proper attribution and/or informing the lecturer and/or when it is explicitly not allowed.",
          count: 188
        },
        {
          label: "Using AI to complete (homework) assignments without understanding.",
          count: 185
        },
        {
          label: "Over-reliance leading to reduced critical thinking & other fundamental skills.",
          count: 178
        },
        {
          label: "Finding ways around plagiarism & AI detection systems.",
          count: 174
        },
        {
          label: "Getting AI to solve tests/exam questions instead of learning and/or inflating grades.",
          count: 164
        }
      ],
      agents: {
        counts: {
          Yes: 141,
          "I don't know": 56,
          No: 7
        },
        total: 204
      },
      assessment: {
        counts: {
          "Yes, I do": 73,
          "I am thinking about it": 35,
          "No, not yet": 48,
          "Not applicable": 44,
          "No & I will never (on principle)": 4
        },
        total: 204
      }
    },
    nonAcademicStaff: {
      attitudes: [
        {
          label: "General Management",
          counts: {
            Never: 15,
            "No opinion": 30,
            Yes: 82
          },
          percentages: {
            Never: 11.8,
            "No opinion": 23.6,
            Yes: 64.6
          },
          total: 127
        },
        {
          label: "Academic Management (Dean, Head of Faculty & Head of Programme)",
          counts: {
            Never: 17,
            "No opinion": 44,
            Yes: 66
          },
          percentages: {
            Never: 13.4,
            "No opinion": 34.6,
            Yes: 52
          },
          total: 127
        },
        {
          label: "Operations & Support Staff",
          counts: {
            Never: 11,
            "No opinion": 12,
            Yes: 104
          },
          percentages: {
            Never: 8.7,
            "No opinion": 9.4,
            Yes: 81.9
          },
          total: 127
        }
      ],
      behaviours: [
        {
          label: "(Online) research - fact checking, learning, understanding, market research, academic research, business intelligence, etc.",
          counts: {
            "No & I will never (on principle)": 12,
            "No, not yet": 36,
            "Yes, but no longer": 6,
            "I am thinking about it": 6,
            "Yes, I do": 67
          },
          percentages: {
            "No & I will never (on principle)": 9.4,
            "No, not yet": 28.3,
            "Yes, but no longer": 4.7,
            "I am thinking about it": 4.7,
            "Yes, I do": 52.8
          },
          total: 127
        },
        {
          label: "Text creation & manipulation - writing, proofing, reviewing, summarising & translating of emails, documents, contracts, reports, etc.",
          counts: {
            "No & I will never (on principle)": 11,
            "No, not yet": 34,
            "Yes, but no longer": 4,
            "I am thinking about it": 8,
            "Yes, I do": 70
          },
          percentages: {
            "No & I will never (on principle)": 8.7,
            "No, not yet": 26.8,
            "Yes, but no longer": 3.1,
            "I am thinking about it": 6.3,
            "Yes, I do": 55.1
          },
          total: 127
        },
        {
          label: "Meeting preparation & recording - agenda setting, note-taking, creation of summaries & action lists, etc.",
          counts: {
            "No & I will never (on principle)": 9,
            "No, not yet": 64,
            "Yes, but no longer": 4,
            "I am thinking about it": 16,
            "Yes, I do": 34
          },
          percentages: {
            "No & I will never (on principle)": 7.1,
            "No, not yet": 50.4,
            "Yes, but no longer": 3.1,
            "I am thinking about it": 12.6,
            "Yes, I do": 26.8
          },
          total: 127
        },
        {
          label: "Media creation & manipulation - making & editing of images, video, sound & designs for presentations, documents, marketing materials, etc.",
          counts: {
            "No & I will never (on principle)": 14,
            "No, not yet": 63,
            "Yes, but no longer": 6,
            "I am thinking about it": 6,
            "Yes, I do": 38
          },
          percentages: {
            "No & I will never (on principle)": 11,
            "No, not yet": 49.6,
            "Yes, but no longer": 4.7,
            "I am thinking about it": 4.7,
            "Yes, I do": 29.9
          },
          total: 127
        },
        {
          label: "Technical tasks  - data, statistical & financial analysis, coding, web development, cyber security, system administration, etc.",
          counts: {
            "No & I will never (on principle)": 18,
            "No, not yet": 72,
            "Yes, but no longer": 4,
            "I am thinking about it": 14,
            "Yes, I do": 19
          },
          percentages: {
            "No & I will never (on principle)": 14.2,
            "No, not yet": 56.7,
            "Yes, but no longer": 3.1,
            "I am thinking about it": 11,
            "Yes, I do": 15
          },
          total: 127
        }
      ],
      concerns: [
        {
          label: "Poor quality & unreliability of output - creates 'unnatural' text, is inaccurate, takes shortcuts, makes up facts ('hallucinations'), etc.",
          counts: {
            Disagree: 25,
            Neutral: 56,
            Agree: 46
          },
          percentages: {
            Disagree: 19.7,
            Neutral: 44.1,
            Agree: 36.2
          },
          total: 127
        },
        {
          label: "High technical hurdles of adoption - is difficult to use, has steep learning curve, is costly to implement, etc.",
          counts: {
            Disagree: 45,
            Neutral: 57,
            Agree: 25
          },
          percentages: {
            Disagree: 35.4,
            Neutral: 44.9,
            Agree: 19.7
          },
          total: 127
        },
        {
          label: "Ethical issues associated with use - has privacy concerns, triggers cheating & plagiarism, faces legal constraints, etc.",
          counts: {
            Disagree: 10,
            Neutral: 35,
            Agree: 82
          },
          percentages: {
            Disagree: 7.9,
            Neutral: 27.6,
            Agree: 64.6
          },
          total: 127
        },
        {
          label: "Adverse impact on people's jobs - threatens job security, requires additional training, creates extra work stress, etc.",
          counts: {
            Disagree: 26,
            Neutral: 54,
            Agree: 47
          },
          percentages: {
            Disagree: 20.5,
            Neutral: 42.5,
            Agree: 37
          },
          total: 127
        }
      ],
      benefits: [
        {
          label: "Improved efficiency - makes work easier & faster, increases quantity of output, helps people to get more done in less time, etc.",
          counts: {
            Disagree: 3,
            Neutral: 23,
            Agree: 101
          },
          percentages: {
            Disagree: 2.4,
            Neutral: 18.1,
            Agree: 79.5
          },
          total: 127
        },
        {
          label: "Better quality - raises bar at which people can operate, reduces errors, improves quality of output, improves customer service, etc.",
          counts: {
            Disagree: 10,
            Neutral: 46,
            Agree: 71
          },
          percentages: {
            Disagree: 7.9,
            Neutral: 36.2,
            Agree: 55.9
          },
          total: 127
        },
        {
          label: "Improved decision-making - enhances knowledge and insight, leads to more effective planning, optimises resource allocation, etc.",
          counts: {
            Disagree: 10,
            Neutral: 43,
            Agree: 74
          },
          percentages: {
            Disagree: 7.9,
            Neutral: 33.9,
            Agree: 58.3
          },
          total: 127
        },
        {
          label: "More automation - reduces (time spent on) meaningless tasks, frees up capacity for more value-add, meaningful & enjoyable activities, etc.",
          counts: {
            Disagree: 4,
            Neutral: 30,
            Agree: 93
          },
          percentages: {
            Disagree: 3.1,
            Neutral: 23.6,
            Agree: 73.2
          },
          total: 127
        },
        {
          label: "Enhanced creativity  - expands the mind, generates fresh ideas, explores unique solutions, etc.",
          counts: {
            Disagree: 13,
            Neutral: 35,
            Agree: 79
          },
          percentages: {
            Disagree: 10.2,
            Neutral: 27.6,
            Agree: 62.2
          },
          total: 127
        }
      ],
      toolTypes: [
        {
          label: "Conversational AI tools (Chatbots) - e.g. ChatGPT, Claude, Gemini, Copilot, Grok, Meta AI, etc.",
          used: 95,
          never: 7,
          total: 127
        },
        {
          label: "Search tools - Perplexity, ChatGPT Search, Claude Search, Gemini Search, Grok Search, etc.",
          used: 63,
          never: 8,
          total: 127
        },
        {
          label: "Meeting  tools  - Copilot in Teams, Otter.ai, Zoom AI Companion, Take Notes with Gemini, etc.",
          used: 45,
          never: 9,
          total: 127
        },
        {
          label: "AI Agents - ChatGPT Agent, Manus AI, Comet Web Browser, etc.",
          used: 41,
          never: 11,
          total: 127
        },
        {
          label: "Image creation & manipulation tools - Midjourney, Stable Diffusion, Leonardo AI, Images with ChatGPT, Imagen, etc.",
          used: 34,
          never: 14,
          total: 127
        },
        {
          label: "Code generation tools - Github Copilot, Cursor, Windsurf, Replit, Lovable, ChatGPT, Claude, etc.",
          used: 24,
          never: 13,
          total: 127
        },
        {
          label: "Reasoning models - OpenAI o3 or o4 , Gemini 2.5 Pro, Claude 4, Grok 4, DeepSeek R1, etc.",
          used: 19,
          never: 14,
          total: 127
        },
        {
          label: "Video creation & manipulation tools - Runway, HeyGen, Synthesia, Pika, Adobe Firefly, Veo, Kling, etc.",
          used: 16,
          never: 13,
          total: 127
        },
        {
          label: "Audio creation & manipulation tools - ElevenLabs, Suno, Udio, etc.",
          used: 13,
          never: 14,
          total: 127
        },
        {
          label: "Education platforms - Khanmigo, MagicSchool, Mindjoy, etc.",
          used: 12,
          never: 12,
          total: 127
        }
      ]
    },
    comparative: {
      itProficiency: {
        correlation: {
          overall: {
            r: 0.105,
            n: 331,
            ci95: [
              -3e-3,
              0.211
            ],
            significant: false
          },
          academic: {
            r: 0.093,
            n: 204,
            ci95: [
              -0.045,
              0.228
            ],
            significant: false
          },
          nonAcademic: {
            r: 0.115,
            n: 127,
            ci95: [
              -0.06,
              0.284
            ],
            significant: false
          }
        },
        byLevel: [
          {
            level: "Low, I don't use computers often.",
            adoptionRate: 0,
            adopters: 0,
            total: 2
          },
          {
            level: "Moderate, I use a PC for most of my work.",
            adoptionRate: 72.9,
            adopters: 86,
            total: 118
          },
          {
            level: "Advanced, I can assist others to solve their problems.",
            adoptionRate: 79.8,
            adopters: 134,
            total: 168
          },
          {
            level: "High, I could work in an IT department.",
            adoptionRate: 81.4,
            adopters: 35,
            total: 43
          }
        ]
      },
      confidenceTeaching: {
        correlation: {
          r: 0.476,
          n: 204,
          ci95: [
            0.362,
            0.576
          ],
          significant: true
        },
        byLevel: {
          "Not confident": {
            averageUsage: 0.79,
            medianUsage: 0,
            respondents: 14
          },
          "Somewhat unsure": {
            averageUsage: 0.71,
            medianUsage: 0,
            respondents: 35
          },
          Neutral: {
            averageUsage: 1.16,
            medianUsage: 1,
            respondents: 32
          },
          "Somewhat confident": {
            averageUsage: 2.06,
            medianUsage: 2,
            respondents: 72
          },
          "Very confident": {
            averageUsage: 2.45,
            medianUsage: 2,
            respondents: 51
          }
        }
      },
      brandAdoption: {
        rates: [
          {
            brand: "Central Academic Team",
            currentYes: 1,
            other: 0,
            adoptionRate: 100,
            total: 1
          },
          {
            brand: "IIE School of Hospitality & Service Management",
            currentYes: 2,
            other: 0,
            adoptionRate: 100,
            total: 2
          },
          {
            brand: "IIE Vega School",
            currentYes: 37,
            other: 8,
            adoptionRate: 82.2,
            total: 45
          },
          {
            brand: "IIE Varsity College",
            currentYes: 139,
            other: 32,
            adoptionRate: 81.3,
            total: 171
          },
          {
            brand: "IIE MSA",
            currentYes: 11,
            other: 5,
            adoptionRate: 68.8,
            total: 16
          },
          {
            brand: "IIE Rosebank College",
            currentYes: 65,
            other: 31,
            adoptionRate: 67.7,
            total: 96
          }
        ],
        chiSquare: {
          chiSquare: 8.668,
          df: 5,
          critical95: 11.07,
          significant: false
        },
        effectSize: 0.162
      },
      groupAdoption: {
        academic: {
          yes: 175,
          other: 29,
          rate: 85.8
        },
        nonAcademic: {
          yes: 80,
          other: 47,
          rate: 63
        },
        chiSquare: {
          chiSquare: 22.987,
          df: 1,
          critical95: 3.841,
          significant: true
        },
        effectSize: 0.264
      }
    },
    ideas: {
      uses: [
        "AI generative texts, pure copy and paste",
        "Creating questions from the content you feed to the AI tool.",
        "To create additional teaching and learning resources.",
        "N/A",
        "I have used generative AI for writing, teaching, and data work, and with better support from the institution like proper tools, training, and systems, it could work more effectively and on a larger scale to fit my study and work needs.",
        "Unsure",
        "Tutoring, Self Quiz (YouLearn ai), research assistance, lesson prep, marking, my colleagues use Canva and the video creating a lot, activities/test/case study creation (QA control for accuarcy is required)",
        "Access to paid GenAI to aid the training of lecturers and students to use AI ethically.  Especially research AIs.",
        "I\u201A\xC4\xF4ve found Generative AI valuable for enhancing teaching materials, developing engaging class activities and streamlining administrative tasks. I\u201A\xC4\xF4d like the institution to support access to reliable AI tools, training for effective use, and integration into teaching and learning systems.",
        "Platforms like copilot for slide creation, AI tracking and communication tools in ARC to help track at risk students, non-completion etc.",
        "It helps me process multiple projects at once and helps me work out where to to focus my energy.",
        "I am going to be perfectly honest, I just don't know what applications and uses are out there. I have used AI to improve grammar on emails, and for inspired teaching I created a video. I also used ChatGPT when I was lecturing BUEL6212 to make fun scenarios around students' business ventures. I have not had much meaningful engagement with AI outside of that.",
        "Using AI as an AI research agent and as an AI personal assistant for everyday administration.",
        "It also saves me a lot of time with admin, like drafting emails or reports. I\u201A\xC4\xF4d love for the institution to support this further by giving us secure access, some clear guidelines, and training so staff and students can use it confidently, and by looking at ways to build it into our learning systems so everyone can benefit.",
        "Taking meeting minutes for example MeetGeek",
        "For research",
        "Ethical ways to use AI to enhance productivity",
        "Development of activities, and scaffolding of writing to enhance writing practices.",
        "GenAI has definitely streamlined my doctoral research, improved my academic writing, and supported creative project development. I\u201A\xC4\xF4d like our Institution to enhance access to advanced GenAI tools, integrate them into coursework, and offer training on ethical ands responsible use, ensuring all students can benefit from these technologies in learning, collaboration, and innovation across disciplines.",
        "For undergraduate students, class attendance tracking.  For Master's students, Notebook LM (at an advanced stage of their degree, not in the beginning).  However, there are other non-AI software in the postgraduate space that require investment, such as PLS_SEM, AMOS and SPSS.",
        "I use Gen AI to develop practical projects for creative formative assessments and for rubrics. BUT I have developed a model, based on extensive research that informs my thinking and I put a lot of critical thought into the assessments. I co-create with Gen AI",
        "Grammarly - to support editing of research output. The institution could make the paid version available to improve productivity in minimum time. Consider the add in paid version of Classpoint in PowerPoint to support the delivery of lectures in ensuring lectures are interactive.",
        "Assist with development of material/ assessments (use as a guideline); current trends/ relevant material for certain topics or categories.",
        "I use Claude a lot, and Chat GPT - both have been really helpful for research, and my own studies. Getting us work accounts for these (or similar tools - but NOT Grok) would be helpful. I do have ethical concerns (primarily environmental impact), but so long as we're mindful of this and aknowledge it as an institution I would be happy.",
        "AI to assist with research",
        "I have found GenAI very useful in my work as a lecturer and researcher, particularly for designing engaging learning activities, reframing complex concepts, and drafting feedback for students. It has also supported my research by helping me brainstorm questions, refine abstracts, and synthesise large volumes of literature more efficiently. On the administrative side, I use it to draft communication and prepare outlines, which saves time and allows me to focus more on teaching and mentoring. With institutional support in the form of training, reliable platforms, and clear ethical guidelines, these applications could be scaled and used more effectively to enhance both staff and student success",
        "Ethical desk research. Ethical summarizing of journal articles. Ethical use of Thematic Analysis tools. Ethical use of data analysis tools. Ethical use of project planning tools.",
        "subscription to some of the GenAI tools may be beneficial.",
        "Helping in understanding the research material that is given to students, when used correctly. It should be used to foster and encourage critical thinking and imagination.",
        "I have been investigating creating a custom GPT engine that could export a ready-to-use word document for assignments, specifically the rubrics section - as this takes up so much of our time.",
        "Help with rubric creation and streamlining briefs",
        "Many of my research & teaching tasks with GenAI are self-sufficient/explanatory and can be done via freemium applications. The biggest support would be for the institution to catch up and develop an Open Education movement that can support CoPs and educational resource and practice sharing. Reconsider CoP networks (an LMS/ARC is not an effective platform as it is less permanent than Microsoft) and better data repositories and curation/sharing practices. SharePoint could work but requires QA/oversight (librarians to assist in curating and maintaining). ARCs LOR could also work but that will need well-organised training, teamwork & commitment by Librarians and Academic Support Teams.\nThe only way I see to further enhance effectiveness, scalability (across lecturers/staff), or alignment with tasks/goals using GenAI is to increase time/reduce work duties (often redundant admin tasks and overly complex or outdated workflow processes) that get in the way. The institution over the last 2 years has been adding too many extra duties (admin/QA tasks) that are overloading campuses already constrained capacities - this effects our ability to focus on quality (instead of the tick box that we often see presented) CoPs, research and innovation. With a lack of capacity there is an increase in unofficial overtime that academics are doing (beyond what they have already being doing) to explore and develop their education practices with GenAI (i.e., unpaid labour). The institution needs to increase campus capacity by reviewing roles to reduce work duties, or to increase capacity/budgets for new roles - i.e., campus Academic Integrity teams, a campus academic researcher position (not an extra role/task/duty). This will lighted the already constrained academic teams for time to research, test and develop new (and potentially innovative or critical) practices of using GenAI for various educational or admin tasks.",
        "N/A",
        "Ai research that supports the students in their critical thinking and not simply be copy and pasted into their work.",
        "Pedagogy and student-centred learning customisation.",
        "CANVA and Chat Gpt license and other. I am paying it out of my own pocket and I use it mainly for work.",
        "Application of AI Agents",
        "Marketing automation",
        "non",
        "Stronger positioning as a leader in digital education innovation, with scalable, future-ready infrastructure.",
        "Training and Development, Business and processes efficiencies,  eradicate manual computing",
        "None",
        "NA",
        "Admin",
        "AI use in email generation, data analysis for example on at-risk modules and in some cases, departmental planning for the year ahead",
        "Training, Innovation, Policies and procedures",
        "Paid for ChatGPT and Perplexity will help advance my tasks",
        "It assists with customer service, predominantly by reviewing drafted emails to ensure correct spelling and grammar. This helps ensure our communication is professional and positions us to put our best foot forward when engaging with customers.",
        "N/A",
        "Email generation. Meeting agendas etc. - General admin.",
        "The use of AI for resources tailored to the Distance Learning environment",
        "Process automation agents",
        "Troubleshooting",
        "None yet",
        "None",
        "Create a policy explainer / knowledge base agent where staff and students can ask \u201A\xC4\xFAWhat\u201A\xC4\xF4s the rule for X?\u201A\xC4\xF9 and get an instant, accurate summary. Reading calendars, deadlines, and inboxes to generate daily \u201A\xC4\xFATop 5 priorities\u201A\xC4\xF9 lists.",
        "stream line tasks to save time. Assist in reporting needs",
        "Flag students who are performing academically lower than the average so the the student relations team can contact these student immediately for support and not first have to investigate. Also, the use of a ChatGBT function for our students to use to answer basic questions of policy for example.",
        "The design or drafting of legal documentation in preparation for students moot court simulations",
        "Using AI to assist in analysing data such as pass rates and throughput rates. It even suggests possible interventions to address areas of concern and consolidates the data in a simplified way.",
        "I have found Generative AI highly useful for quickly creating and refining teaching materials, summarising complex academic content for student-friendly delivery. It has also been valuable for automating routine tasks such as email drafting, document formatting, and producing visual aids for lectures. I want the institution to support and enhance these uses by providing access to institution-approved AI platforms integrated with our LMS, offering training on responsible and ethical use, and ensuring that AI tools are customised to align with our curriculum standards and research needs.",
        "Nothing yet",
        "Makes it easier to get examples",
        "assisting with research and assessment development",
        "ntr",
        "n/a",
        "N/A",
        "A lot",
        "Using AI to enhance the quality of internal documents",
        "nothing",
        "Academic \n\nPersonalised Learning Materials \u201A\xC4\xEC Generate case studies, quizzes, lecture notes, and simplified explanations for students at different levels.\n\nStudent Feedback & Assessment \u201A\xC4\xEC Provide first-draft feedback on assignments, suggest improvements, or create rubrics to save lecturers\u201A\xC4\xF4 time.\n\nLanguage & Accessibility \u201A\xC4\xEC Translate material into multiple languages, simplify complex concepts, and convert text into more accessible formats.\n\nResearch Assistance \u201A\xC4\xEC Support literature reviews, summarisation of journal articles, and even initial structuring of proposals, particularly the research practice students. \n\nAdministrative Efficiency\n\nDrafting Official Documents \u201A\xC4\xEC Speeches, proposals, reports, and policy summaries prepared more efficiently, although this might also contribute to students being lazy \n\nSurvey & Data Analysis \u201A\xC4\xEC Automate analysis of student surveys, highlight trends, and suggest actions.\n\nScheduling & Planning \u201A\xC4\xEC Streamline timetable or event planning with smart automation, it will even motivate more students to attend classes \n\n Student Engagement & Skills Development\n\nTutoring & Revision \u201A\xC4\xEC AI-powered study guides, flashcards, or simulations to reinforce classroom learning.\n\nCareer Development \u201A\xC4\xEC Assist students with CV writing, interview prep, and entrepreneurial ideas as some 3rd years are getting ready for work.\n\nInnovation Labs \u201A\xC4\xEC Encourage students to co-create projects (apps, business ideas, research) using GenAI as a creative partner.\n\n Community & Institutional Growth\n\nMarketing & Outreach \u201A\xC4\xEC Generate professional content for newsletters, social media, and community engagement.\n\nPartnerships & Proposals \u201A\xC4\xEC Draft partnership documents, sponsorship proposals, and project justifications.\n\nInclusivity \u201A\xC4\xEC Ensure that all students, including those with disabilities, benefit from personalized learning pathways.",
        "None",
        "Have workshops or a course on arc on how to use AI academically",
        "Not applicable",
        "Nothing, AI is not good.",
        "Cite this for me ,to help students reference",
        "Creating meaningful diagrams and AI videos with visuals for clear understanding",
        "None",
        "Research Support \u201A\xC4\xEC I use GenAI to summarize academic articles, extract key insights, and generate literature reviews. This helps me process large volumes of information more efficiently.\n\nAcademic Writing & Drafting \u201A\xC4\xEC AI assists in structuring essays, reports, and presentations by providing outlines, grammar support, and recommendations for clearer expression.\n\nIdea Generation & Problem-Solving \u201A\xC4\xEC I rely on AI tools for brainstorming research topics, refining arguments, and exploring multiple perspectives on a subject.",
        "Drafting reports, lecture notes, and presentations quickly.\n\nSummarising research articles or student submissions for faster review.\n\nCreating quizzes, exercises, and scenario-based questions.\n\nInstitutional support could provide secure platforms, standardized templates, and integration with LMS (learning management systems) to scale usage safely and effectively.",
        "I would like institutional support for generative AI in content creation, data analysis, and personalized learning. Enhancing resources and infrastructure would improve effectiveness and scalability, aligning AI applications with our goals.",
        "infrastructure",
        "I use GenAI for drafting content, creating teaching materials, and research support, and institutional backing with training, access, and integration would make it more effective.",
        'I think that we can salvage the use of generative AI to enhance our lesson preparation. For me i used AI to get "Fun Fact", "Did you know", and quizzes for my slides to maximize learning experience. Also, case studies that can help identify areas of the lesson that is applicable in real life.',
        "N/A",
        "Marking",
        "You\u201A\xC4\xF4ve used GenAI for teaching (content creation, assessments, simulations), research (summaries, literature reviews, data analysis), and admin (document prep, communication). Institutional support could include infrastructure (licensed tools, LMS integration), training, and scalable systems.",
        "Copilot helps a lot in Programming modules, however it is helpful when integrated with Github so VMs should have that.",
        "providing personalised tutoring support to students,enhance learning and productivity on the side of the students",
        "Notebook LM",
        "Train students on how to use AI effectively",
        "Microsoft Copilot",
        "They can guide one to complete a task",
        "Paid GenAI infrastructure",
        "By offering real-time, customized feedback, explanations, and tutoring, generative AI has demonstrated remarkable efficacy in facilitating individualized learning.  Through concept development, literature reviews, and summarizing, it can increase the productivity of research.  Faculty and staff can save a great deal of time by streamlining administrative duties including writing emails, reports, and proposals.  GenAI promotes creativity and experimentation in creative fields by assisting with writing, design, and media production.  To guarantee that all students and employees have equitable access to these advantages, I would like the school to make investments in ethical AI training, infrastructure, and access.",
        "I use ChatGPT and Copilot and I find it an efficient tool writing essays, reports and motivations. It will help if the institute support this type of interaction with AI",
        "Proper use of the tools available",
        "explaining concepts and summarizing articles",
        "It professionalizes my work especially when sending emails or writing reports.",
        "Enhance academic writing",
        "TO ENHANCE MY WRITTING SKILL",
        "Include it in ice tasks",
        "GenAI could be used to automate administrative tasks, create personalized learning experiences, and support research with data analysis. Institutional support could enhance these applications through investment in robust infrastructure, continuous training, and integration with existing systems, ensuring seamless, secure, and scalable use that aligns with institutional objectives.",
        "Content, assessment and rubric creation and enrichment; brainstorming; proofreading, etc. Properly-timed and incentivised formal professional development training can enhance participation and adoption.",
        "no comment",
        "Assessment planning",
        "Simplifying complex concepts: For topics like international tax decisions or economic policies, AI can generate simplified explanations, analogies, and examples tailored to your students\u201A\xC4\xF4 level. For instance, instead of explaining the U.S.-South Africa tax issue with heavy policy jargon, it could be reframed in a way that relates directly to a student\u201A\xC4\xF4s daily life or future business module applications.",
        "Please see my detailed response to the proposed policy.",
        'Tools that support students in their research module, I have provided "training" to supervisors and students in supporting students to use these. I enjoy using AI to create interesting and complex research problems and assist me in designing an engaging and thought-provoking lecture.',
        "N/A",
        "I have found Perplexity really useful when I have prompted correctly to design self marked automated feedback ice tasks. This saves me time and gives students immediate feedback.",
        "The development of small class tasks and interactivity amongst the students on a specific topic Ai has been a great source.",
        "It would be beneficial for institutional licences for these products to ensure maximum usage.",
        "Give students the knowledge and understanding of how to use AI tools to better themselves and to provide a fuller experience when lost on content in  subject. This would also help lecturers as well to understand how to look for loopholes where students are using AI tools to generate answers. Lecturers would be able to engage with students before the work is completed, and help students understand that we know when something is not right, especially for Assignment submissions.",
        "n/a",
        "I would love to have access to more advanced research AI tools. \nAnd would love AI tools to help with the marking load",
        "Lesson planning & content creation\n\nAssessment question generation\n\nPersonalised learning pathways\n\nInteractive simulations & scenarios\n\nWriting assistance and Language support\n\nStudy aids",
        "Notebook LM to make summary notes as well as videos and podcast to assist students with  revision.\nTeaching the students to use the new Teach and Learn function on ChatGPT to explore new and complex study material.",
        "Unblock CoPilot for Office 360.",
        "Meeting summaries",
        "Research would be a definite requirement for GenAI. Plagiarism detection is a requirement to discern a student's thinking from their written work.",
        "Students are way ahead of us, we need to be empowered to better manage the cheating.",
        "none",
        "Using AI for power point slides. Also having a way to check if students are abusing AI in tests or exams.",
        "Planning, marking with detailed feedback.",
        "Development of ungraded assessments. Marking.",
        "Whilst Generative AI tools are wonderful tools for streamlining tasks and enhancing self-efficiency, most of the focus has been placed on tools that allow students to generate ful content answers. Instead, I have taught my students to focus on both generative and non-generative AI tools that specialise in certain aspects of the educational process. For example, I have made it mandatory in most ICE Tasks to make use of AI tools such as Litmaps or Connected papers for source finding, as well as Notebook LM for source engagement. In doing so, I am showing my students how to make AI useful to them as a tool for learning, for exploration, for reading, and for source synthesis so that they can still do their own evaluations, critical thinking, reflective practive and writing. This is something that I would like the institution to focus on - to provide frameworks on AI tools that are suited to enhacing skills rather than generating all the content, and to focus on supporting student integration of AI skillsets. For instance, I am busy with a paper that focuses on constructing a framework of guidelines and principles for ethical and effective student AI use so that I can use the findings to support my students in learning such AI literacy.",
        "Pay for the tools",
        "Using AI to create interactional videos to communicate lengthy policies.",
        "Creating assessments that are AI proof",
        "None that I could think of, privacy is always a concern for basic admin tasks like mark entry.",
        "Research, lecture plans",
        "Can't say, sorry",
        "There has to be a way to use it for marking.",
        "N/A",
        "Get the paid versions & share with staff for use. As it can help with task & content creation.",
        "Creative activity ideas, creating interactive content.",
        "unsure",
        "Ai has its place, as part of the creative process. I've found it most useful there. There is however a grey area that exists between idea and execution and the idea that ai tends to play it safe with everything it does. So far, this is my biggest issue with it. students tent to take less risks despite using ai as a tool.",
        "I enjoy conversation with AI around brand insights where the is a mutual discussion regarding my view, opinion and reason",
        "Quickly researching relevant class activities that support the content covered, that are engaging for students in new or different ways",
        "Marking of assessments",
        "I think that NotebookLM podcast technology could greatly improve laying the foundation for students. They could listen to summaries of learning units before class and come in with a good overview. I think that as lecturers we could then provide the detail after a schema has been created. Used correctly, ChatGPT can be used for feedback and idea generation while conducting research.",
        "Outline for assignments",
        "It helps with creating activities for in-class to helps students understand and apply concepts which is what I use AI for.",
        "lecturer resources for online students.  Explanations of difficult concepts/calculations.",
        "We are not using our data. We are not developing tools for our own usage. We are not even scratching the surface on what tools we could develop and leverage AI for our own benefit. We are not hosting/training/using out OWN AI's that are there to assist students. We sit on a wealth of info and do nothing with it.",
        "Pay for subscriptions for CHATGPT, SCI-Space, SCOPUS, and a Paraphrasing Tool.",
        "Alignment with your tasks and goals in the classroom and development.",
        "Chatgpt",
        "Notebook LM and Gemini have enabled video creation, this is very useful for the creation of short learning videos.",
        "Programming IDEs are equipped with code generative tools like MS Copilot, but because there are no subscriptions, some features are restricted. Maybe if possible get some subscriptions to allow the integration of advanced features.",
        "IN the numeracy modules, I find that there is still an alarming amount of information produced by AI that is entirely incorrect and unreliable. This seems to be a problem that is growing rather than reducing as the AI references it's own previous incorrect answers. How do we rely on what seems to become increasingly unreliable?",
        "Summarising meeting minutes.",
        "none",
        "There are some useful software's and features for students doing research, applications that provide accurate summaries of academic papers saving time and helping make informed decisions about whether to read the whole paper or not.",
        "n/a",
        "Not yet",
        "AI platforms are useful to streamline research planning processes for researchers under the IIE, and platforms are also useful for more teaching engagement.",
        "Paid version of Claude. I believe it is one of the more ethical genAI modules out the but the free version only allows a certain number of prompts a day.",
        "I find that enhancing my lesson plans for class is helpful, making sure the lessons align with the flipped classroom and constructivism. I find that the institution could create assessments that are AI-proof - meaning there is space to use AI, but the skills and knowledge need to be assessed, for example, oral presentations or written exams, instead of submitting essays or answering questions.",
        "Litmaps for literature discovery and visualisation tool.",
        "I have found novice accountants will try and use AI to summarise LUs instead of actually engaging with the textbook content and exercises; those I have spoken to and have done this have come up with nonsense answers to accounting questions, thus I would encourage a circumspect institutional approach to AI in such subjects.",
        "Lesson Planning/Slide Generation",
        "A short course to machine learning/data science",
        "marking assessments",
        "As a lecturer who teaches creative modules I believe that design students should learn how to incorporate GenAI into their studio practices in an ethical manner. They should be exposed to them in their modules.",
        "I use generative AI for writing support, research summarization, brainstorming, and data analysis\u201A\xC4\xEEit saves time and boosts clarity and creativity. Institutional support could enhance this by providing reliable access to licensed tools, offering training on responsible use, and integrating AI into existing systems.",
        "None so far.",
        "Get us paid versions of the GEBAIN apps",
        "Mostly use it for image generation, slide generators based on the content and ideas-based tool",
        "transcription and data analysis tools for research",
        "I have used GenAI for the use of Quiz questions however the use of Lumi has really supported this.",
        "Subscriptions could be provided to staff members for certain educational AI tools to assist in making lectures more interactive and time effective. In terms of academic integrity, an AI tool that could be helpful would be one that clearly indicates how students have misused generative AI in their assessments. For example, in the Turnitin report, in addition to highlighting the sections that contain suspected AI use, it can distinguish how and why the AI that has been detected could potentially be unethical.",
        "Expanding on safe and constructive ways to use different AI models and programs.",
        "Perhaps critical evaluation of current content",
        "Bring the use or limitations of AI in assessments.",
        "Using GenAI to ensure that assignments are grammatically correct, for structuring assignments, clarification on complicated terms within an assignment, and how to effectively and ethically use GenAI.",
        "I use it on very basic level",
        "I use the tools as shown in training sessions and learned about from lecturing peers",
        "N/A",
        "Supports efficiency and quality of my output",
        "I have used generative AI primarily for drafting and refining educational materials, such as lecture slides, assessments, and student activity guides. It has also been valuable for summarising complex texts, eg. summarising the South African Schools Act etc.  and rephrasing explanations into simpler, student-friendly language. These applications have improved both the quality of teaching resources and the efficiency with which they are produced. With institutional support, these uses could be enhanced significantly. For example, access to an institution-wide GenAI platform integrated with our LMS would allow lecturers and students to use the tool within a secure, ethical framework. Training workshops could help ensure that staff and students understand not only how to use GenAI effectively but also how to avoid pitfalls such as plagiarism or over-reliance. Institutional investment in resources such as clear usage policies would also ensure equitable access for all. This support would allow GenAI to be used more ethically, aligning with our goals of fostering innovation, improving student learning outcomes, and promoting digital literacy.",
        "I think most academics are using AI in their own way and this makes application dangerous",
        "Integration of AI Tec tools in my live lecture sessions and just general admin, it helps to save a lot of time that I can now use to focus on research, etc.",
        "Having access to more apps where teachers can develop interactive activities for their learners and use in their classrooms. I would also appreciate training in this regard.",
        "I use AI to find research gaps and research articles (Heuristica, Elicit and Consensus in particular). I also use AI tools to refine search terms and in instances where I need assistance with extreme technical terminology (e.g. a recent article was from the medical field so outside of my ability to properly understand all the jargon), I use the tools to simplify this terminology. I also use them as checks to make sure I include all the latest articles, identify seminal authors and that I do not accidentally misinterpret information or fail to include certain critical elements. When attempting a new research or data analysis technique I have used AI as a mentor to guide me through the process. I also use it to assist me in formulating case studies (though I do edit it substantially)",
        "N/A",
        "N/A",
        "Self-marking assessments",
        "I have mainly used AI to generate examples / scenarios and questions for quizzes based on content I provide but always double checking and reading all questions / answers provided as I do know what the answers should be and do not just blind copy / paste. \n\nThis just helps me save time with thinking of scenarios and examples as well as questions.\n\nI do not have any suggestions that would need institutional support - I do not use AI in class and do not want to encourage the use of AI in class.",
        "Ai transcribers, image generation, overview of topics",
        "Using AI for initial research and structure, a kickstart to a project, but also adding research from other more traditional sources. Using AI to help comprehend subjects and to open up more possibilities when it comes to research, strategy and creativity. AI is also a fantastic creative tool in that it can very quickly bring ideas to life, and also combine disparate ideas to create something new. The emphasis here, is it is a tool - use it but add human understanding and empathy and, where possible, show evidence of the hand of the maker. I believe we need to update our education system/s to accommodate the Age of AI, rather than try and fight it and find ways to catch students out. Use AI as building blocks in education and life, facilitate clever uses of AI in conjunction with other methods of learning and creating, and open up the opportunities for provocative questions and insightful discussions that ensure a deeper understanding on the part of the students. Likewise, as a lecturer, be free to mash up your tools and techniques when putting together learning material and activities in class. Just as we use prompts to get results from AI, AI and also be used as prompts to expand understanding, encourage more in-depth research and discussion, and so on.",
        "To be fully proficient in all uses both to use for efficiency or improvement,  but also, to assess its usefuleness to students and lecturers in the learning process.  So far there is apparent damage to  students to mitigate already (please include in the next survey):  both manual e.g. spelling, as well as perceptual, i.e. wasted assessments as the machine completed what would have instructed them well.",
        "For my own studies it assists on summarising content for examination purposes. It can also assist in providing structure for research purposes.",
        "I believe AI makes people lazy to think and do research which also affects their ability to learn and enhance their knowledge and skill so I would prefer if the institution did not use AI.",
        "I have not used Gen AI enough to be able to list the relative uses that I could want the institution to enhance and support, but in essence, it would something along the lines of being able to extract data from our system without exposing valuable data to external users/hackers, to help with identifying duplicate information to aid in minimising the occurrent data input duplicating enquiries and applications.",
        "None.",
        "They assist me with Drafting emails and communication; they assist with research for academic topics and how best to structure my assessments.",
        "I have never used GenAI",
        "AI Robots that are able to assist a student query during non-working hours",
        "AI could help us with analysis, security and searching",
        "Reseach tools",
        "enhances productivity",
        "None",
        "I think the institution should give middle management more access to the tool as it helps creating meaningful templates and ideas to the junior staff, creating an environment that is progressive and aligns with other industries across the globe.",
        "24-hour chatbots",
        "Breaking down complex topics. Assisting with planning. Being used as a critique to hold outcomes to high standards",
        "Presentation writing",
        "Helps with better understanding the concept you working on",
        "I believe ChatGPT can be utilized to create effective workflows and daily trackers for employees instead of staff having to manually create those for themselves which leaves room for error in terms of the formulas being used",
        "Enhancing Research Productivity, Guiding Ethical and Responsible AI Use",
        "I\u201A\xC4\xF4ve used generative AI for writing support, coding assistance, data analysis, and brainstorming ideas. It helps me work more efficiently and stay focused on higher-level tasks. With institutional support\u201A\xC4\xEElike access to secure, approved tools, training on ethical use, and clear policies\u201A\xC4\xEEthese applications could become more effective and scalable. Support for integrating AI into research and learning platforms would also enhance productivity and innovation across the institution.",
        "I have not really used AI applications because I believe they are contributing largely to laziness in a workplace",
        "Student academic support",
        "Note taker, Scheduling Assistant, and code generator: implement real-time collaboration features to facilitate teamwork and knowledge sharing.",
        "GenAi could be used to compile documents, create questions for students based on their prescribed material, and perform general tasks such as generating reports, scheduling meetings and taking concise and professional notes during those meetings.",
        "Training because you get more articles for training.",
        "None",
        "none",
        "Smart email drafting.",
        "I believe GenAi could be used for mundane tasks where we have large sets of data. This could be put to use in reducing the amount of time compiling these reports from a human. And it could very likely reduce errors(providing it is checked properly).",
        "Creating more engaging content for students in terms of additional learning resources.",
        "I use AI to trouble shoot systems in my work and to improve workflow. However it takes time. AI is not 100% accurate and its sometimes takes a long time to get something done right.",
        "A copilot pro license would make the tasks in my job much faster - eg excel work",
        "Assist us when dealing with tickets find a way that could assist in how we respond to students.",
        "Training required for all staff and ways to enhance the processes. A document management system using ISO to make sure documents have a proper version and approvals are in place.",
        "Helps with sentence/email construction and overall presentations.",
        "Automated results checker, this will be helpful for applications.",
        "Restructure assessments.",
        "Brainstorming, sense checking. Student support applications (AI Agents for common queries).",
        "Image generation for assignments and a draft for a study planner",
        "Atomizing of processes carries a very large value to accurate data capturing as well as speeding up processing.",
        "Department specific needs",
        "No experience, can't comment",
        "ChatGPT- I think in the field I work, it helps answer questions and resolve queries in a well mannered way. We live in a generation where everything is taken personally so this will assist in professionalism.",
        "proof reading, effective writing",
        "I have used ChatGPT and Copilot, paid for options would be great. Training on what can be done, and what is permitted would also be helpful.",
        "Chat BOT - to assist students in general queries and not rely on a human response; Grammar & spelling - help with writing skills; \nRecording of results and student feedback; \nReport writing and stats from our Assist platform.",
        "not really used it",
        "Responses to difficult queries, data analysis",
        "I think I would want more conversations surrounding the back end of AI - ethics of it, how it can be unreliable, where it can be useful, how to drive it without kicking your off a cliff. Some user tips and tricks for the emmeshed AI would be great i.e. how to use co-pilot for outbox.",
        "Proof reading reports and emails to maintain level of profressionalism.",
        "The chat / assist function to -  accuracy checker, spelling check and more professional polished versions of emailing - simple problems solving or navigating of situations. Find ways to improve yourself in your current job (skills to learn and improve)",
        "I found Elicit and SciSpace incredibly helpful for research. I would really appreciate if the institution could create a profile with them and allow staff to use it, as there are some restrictions on those sites. These sites pull relevant and accurate academic sources instantly.",
        "Using ChatGPT to assist in improving office procedures",
        "Online resources",
        "Helps redefine my thoughts and helps fill in the gap in areas where words fail me. Sometimes the mother tongue gets in the way of being able to express in the communicative language.",
        "In my work and studies, I have found generative AI particularly useful as a learning accelerator, troubleshooting assistant, and documentation tool. For example, I often use GenAI to quickly explain complex networking concepts, generate practice labs in Packet Tracer, and create adaptive study guides for certifications like CCNA, ITIL, or Linux. It has also helped me draft professional reports, CVs, and proposals with clarity and structure, reducing the time spent on formatting and repetitive writing. In IT support tasks, GenAI assists with step-by-step troubleshooting guides and even suggests scripts or commands that speed up problem resolution. However, these benefits are currently limited by access to tools, lack of integration with institutional systems, and concerns about data accuracy and security. If the institution could support and enhance GenAI through dedicated platforms, integration with lab environments, and safe access to internal resources, students and staff would be able to scale their productivity significantly. Centralized AI infrastructure could also ensure outputs are aligned with curriculum standards and compliance frameworks. With institutional backing, GenAI could evolve from being an occasional helper into a trusted, everyday assistant that improves learning outcomes, operational efficiency, and career readiness for both staff and students.",
        "An AI tool that deals with general enquiries. If to complex for instance (Meta AI) or any AI in which you could chat to, if too advanced can transfer you to the relevant department for assistance. Will require some sort of user verification to ensure personal information is not easily accessed by others. This could assist students with general enquiries and if cannot be assisted, guide them as to who to contact to ensure that general, timewasting queries are solved and more complex issues left for relevant departments.",
        "N/A",
        "I\u201A\xC4\xF4ve found GenAI useful for simplifying repetitive and time-consuming tasks across various areas, from admin and content creation to planning. I believe the institution could benefit from supporting its use more broadly\u201A\xC4\xEEparticularly in departments like HR, where there are still many manual reports and forms that could be streamlined. With the right support, GenAI could help staff across roles work more efficiently and focus on higher-impact responsibilities.",
        "Minute taking and summarising meetings",
        "Better workflows and training platforms.",
        "N/A",
        "Content creation for lecturers, activities for students, posters",
        "effectiveness",
        "None",
        "n/a",
        "n/a",
        "GenAI could add value in the in terms of working smarter and not harder, automating certain systems/processes.",
        "GenAI has been able to assist with responding to emails in a professional manner\nIt also has assisted with generating scripts for speaking to students over the phone which is quite helpful\nGenAI also assists with designing templates",
        "I have used AI to make my sentences and responsed more professional",
        "It could help staff members and students to draft emails, reports and proposals in a clear and professional way. And this will help save time and reduce errors. These tools could help students break down difficult concepts into simpler terms. Could be used to summarise coursework and make studying easier. It could help gather information fast and suggest sources or ideas for research projects. Staff members can use it to respond to queries and for preparing documents, and this will help make services more responsive to students. Lastly can help generate ideas for presentations, designs and innovative problem solving and this will encourage staff members and students to think outside the box.",
        "Easily accessible",
        "N/A",
        "None so far",
        "Academic Support and Learning",
        "Can reduce time spent on a task",
        "The use around planning and organizing",
        "I don't normally use it much for work, only in my studies (research)",
        "The institution supports the use of GenAI but in a responsible way, if it would enhance anything then the students would feel like it's safe to use AI for their schoolwork and a way to manipulate the system making the work look like their own, which is the plagiarism we are avoiding.",
        "Using GenAI to automate admin processes such as calculating DASE hours for lecturers and creating contracts and annexures",
        "For invite, notice, poster and video design. In addition, the institution can provide training, workshops etc. to educate staff on how to use it ethically.",
        "AI tools in the research process e.g. SciScape and ChatGPT",
        "Studies",
        "Definitely idea generation, and providing alternatives for problem-solving"
      ],
      jobIdeas: [
        "I show students how to use generative AI more responsively as a tool to understanding concepts and themes.",
        "AI could reply to questions sent by students by referring to the company policy.",
        "The idea is to explore more AI agents' tools available.",
        "No",
        "I think GenAI could make my job easier by providing tools like an AI feedback assistant to speed up grading and ensure consistent comments, a curriculum co-pilot to suggest updates from the latest research and industry trends, and a student support chatbot that offers guidance and motivation to struggling learners, which together would save time, improve quality, and better support both staff and students.",
        "No",
        "Assessing honours and master's research, assisting in synthesising and collating policy and procedure information into creative infographics for students, and serving as a research assistant for literature reviews, evaluating qualification success and throughput data for insights and practical strategies",
        "I mainly use AI to correct my grammar and check academic writing flow.",
        "Perhaps an AI-assisted lesson planning tool that aligns content with learning outcomes and an AI-powered marking assistant for initial draft feedback.",
        "It speeds up certain administration task",
        "Not really",
        "No but I am eager to learn.",
        "I haven't had a chance to explore it yet, but an AI tool for completing spreadsheets would be ideal.",
        "I see real potential for generative AI to ease workload pressures, strengthen student support, and drive innovation. For example, AI could help predict and balance staff workloads, identify at-risk students through early performance analytics, etc It could also streamline administration by drafting routine correspondence and generating feedback templates for lecturers to adapt, saving time while keeping quality high. Longer-term, an AI hub for sharing best practices and even policy simulation tools could support evidence-based decision-making. To make this feasible, we would need secure system integration, clear ethical guidelines, and practical training so staff can confidently adopt these tools.",
        "No, would need to think about this",
        "Marking Feedback",
        "Nothing that was not mentioned in the suggestions.",
        "Yes, I use it for students to develop work and ideas in class and to then build on it and integrate it through rigorous writing practices.",
        "a GenAI-driven platform that could streamline curriculum development by analysing legal trends, student feedback, and emerging case law to recommend any changes to programmes adjustments in real time. A GenAI assistant could also automate policy drafting, accreditation reporting, and compliance reviews, saving administrative time. Additionally, a tailored chatbot for student and faculty inquiries would enhance communication efficiency. AI-assisted predictive analytics could help identify at-risk students early, enabling timely support. What I would really like to see is the integration of GenAI into legal clinics to assist students in drafting legal documents under supervision, improving experiential learning while maintaining academic integrity and professional responsibility standards.",
        "Autonomy to decide if AI should be allowed or not in the assessments of my programme.  The latest IIE policy does.",
        "No",
        "Keeps information current and gives platform/ starting point of content development",
        "I've considered a planner to help me be more efficient with my time. I find Meet Geek to be useless, quite frankly - the summaries are always awful - but I get an enormous amount of emails every day. Something that could direct my attention in whipping through them (specifically to identify those that are urgent and require immediate action).",
        "no",
        "One idea I would find useful is a GenAI tool that could automatically align my lecture content and assessments with curriculum outcomes, saving time while ensuring compliance. I would also value an AI-driven system that generates personalised student feedback based on their specific progress and learning style. Another helpful tool would be an AI assistant to streamline administrative tasks such as timetabling, reporting, and communication. With the right institutional support and ethical safeguards, these ideas could free up more of my time for meaningful student engagement and research.",
        "MANY of the current marks capturing procedures and CAT processes are duplicated and tedious - wasting time and money and reducing productivity significantly. Surely AI can assist.",
        "No, I do not.",
        "No",
        "No specific ideas as such. Use it a lot to check content created against outcomes etc. Not alwsys super accurate, but it very quickly points out if there isn't any alignment.",
        "No",
        'It is not so much GenAI uses but automation & updated workflow processes (too many middlemen - that are often not trained well-enough on how processes & systems interlink). For example, it is ridiculous that "AIT" has not assisted (campus-wide) in automating the plagiarism/disciplinary processes. Similarity with "Care Calling" as a redundant admin task [just 3rd-party or automate it with a survey or a Bot]. We already have personalised feedback mechanisms (i.e., at-risk conversations & lecturer-student check-ins). GenAI should be a minor focus compared to improving workflow processes, automation, and data curation (& knowledge management is a mess. I.e., SharePoint) [KonMari method needed].',
        "N/A",
        "no",
        "Building custom AI tools as custom GPTs or agents for context-specific scenarios.",
        "NA",
        "Marketing automation and project management AI tools would really reduce pressure in my team.",
        "non",
        "AI-Enhanced strategy drafting assistant, Service Desk Agent, Curriculum co-designer",
        "improve business and process efficiencies,",
        "none",
        "None",
        "No",
        "Yes",
        "No I think my knowledge and understanding of AI is not high enough",
        "We have tons of info that are in emails, pdfs, chatbots and FAQs - AI is a perfect tool to give us better access to this information and data.",
        "distilling of information and translate that into models/frameworks/designs",
        "We currently have a FAQ Bot for students, which helps them find answers quickly without having to visit the Student Relations Office. It would be incredibly beneficial for staff to have a similar tool. In my role, I work with disciplinaries and often need to consult lengthy policy documents. Having a bot that could instantly provide accurate answers would save significant time. For example, I could quickly find the outcome for a student caught with narcotics on campus, what the policy says on 'searching students\u201A\xC4\xF4 bags, or our position on promoting political parties etc. It could also answer questions such as how many leave days VC staff are entitled to. By providing instant, accurate information, such a tool would not only improve efficiency but also reduce risk and error.",
        "Nothing that I can think of at the moment",
        "n/a",
        "The use of AI for Results Analysis + suitable interventions",
        "Tracking spend against forecast. Briefing",
        "Perhaps a support where people can troubleshoot their challenges",
        "Not at the moment",
        "None",
        "The Results Reconciliation Agent cross-checks marks between ARC and SIMS and flags mismatches instantly. Sends gentle automated reminders to lecturers. Assessment Pack Tracker Agent monitors which scripts are in, which are missing, and who\u201A\xC4\xF4s responsible.",
        "no",
        "Perhaps a system that can build student case files based on various aspects of their profile; finance, academic performance such as engagement vs submission rate and marks the students gets.",
        "No",
        "AI can be used to simplify any task. For example, when schedules need to be made for staff or consolidation of data- this is very useful.",
        "A tool that could combine several of my current tasks into a single intelligent platform. It would generate tailored lesson plans, create interactive learning activities aligned with curriculum outcomes, and produce assessment tools with built-in marking rubrics, all based on specific student performance data and module objectives. The system could also draft research outlines, summarise relevant academic articles, and prepare presentation slides from lecture notes, significantly reducing preparation time.",
        "No",
        "No",
        "N/A",
        "ntr",
        "n/a",
        "N/A",
        "As a lecturer, I believe GenAI can be a valuable support tool to make my work more efficient and impactful. It can assist with lesson preparation by generating outlines, case studies, and examples aligned with the curriculum, as well as support assessment by drafting questions and feedback. Additionally, it can simplify complex content into student-friendly summaries, create engaging discussion prompts, and streamline administrative tasks such as emails and reports. By reducing time spent on repetitive tasks, GenAI would allow me to focus more on teaching, mentoring, and engaging with students.",
        "No",
        "No",
        "Yes - Brainstorming plays a significant role in developing our content, the world is moving towards the use of AI, lets adopt please, i have been waiting for this survey for the longest time.",
        "No",
        "N/A",
        "No",
        "Start using AI to generate Task and even prepare lesson plan.",
        "NO",
        "yes.. I use it to summarize the slides to be easy",
        "None",
        "AI-Powered Administrative Assistant\n\nPain Point: A lot of time is spent on routine tasks such as drafting emails, scheduling, formatting reports, or generating teaching notes.\n\nIdea: An institution-supported GenAI assistant integrated with institutional systems (e.g., Outlook, LMS, HR portal). It could automatically generate professional responses, prepare schedules, summarize meetings, and draft official documents.\n\nBenefit: Frees up time for core academic/research tasks.",
        "An AI assistant that converts lecture slides into interactive student activities automatically.",
        "I propose an AI assistant to automate routine tasks like scheduling and report generation, reducing manual workload. Additionally, an AI-driven knowledge base could provide instant access to information, enhancing efficiency and decision-making.",
        "no",
        "An AI marking assistant, lesson plan generator, and student progress tracker would greatly simplify my workload.",
        "I think we could use AI to help layout the lesson plans and structure more effective to ensure that I spend more time in content that in the admin and creating lesson plans.",
        "N/A",
        "no",
        "Generative AI could simplify my work through tools like an AI Curriculum Designer that aligns outcomes, materials, and assessments. A Smart Student Progress Tracker could monitor performance and flag at-risk students. An AI Meeting Assistant could capture notes and action items automatically, saving time and improving follow-up.",
        "Yes, using AI to breakdown assignments helps a lot",
        "Integrating AI into assessments",
        "None",
        "Just created power slides for now",
        "No",
        "No",
        "AI Collaborations",
        "To cut down on manual tracking, one solution is a GenAI-powered assistant that automatically arranges and condenses meeting notes, action items, and follow-ups.  Another would be a program that uses data inputs and real-time project updates to generate reports or documentation.  In order to save time and guarantee consistent communication, a chatbot that has been trained on institutional policies could respond to common inquiries from coworkers or students.  AI-powered scheduling aides that manage several calendars would also make teamwork easier.  All things considered, these technologies would lessen monotonous work and free up more time for strategic or creative endeavors.",
        "No not really as I am not reliant on AI in my job.",
        "Include this training in the student curriculum for a couple of days to adequately train the students",
        "If GenAI could help us with Marking of student assessments",
        "When doing PTL claims, class visits and lecturer consultations",
        "Breaching language barriers with students regarding their mother tongue and English",
        "YES",
        "No",
        "Implementing a personalized AI task manager could optimize workflow by prioritizing tasks based on deadlines, predicting resource needs, and automating routine queries. This system would learn from past performance to minimize inefficiencies and enhance productivity, ultimately streamlining daily operations and decision-making processes.",
        "Automation of assessment records, capturing, access and retrieval process  -  for example, the grade centre on the LMS can be linked to SIMS so that lecturers do not have to recapture marks manually. This reduces capture errors and lecturer fatigue.",
        "no",
        "Yes. Using GenAI to generate ideas.",
        "Yes  I do",
        "Please see my detailed response to the proposed policy.",
        'All of the admin that is related to my role, such as registers, creating a "profile" of a lecturer and then being able to pull attendance and engagement stats on what the lecturing is seeing and doing to give me a full picture.',
        "Anything to help with marking.",
        "Compulsory course in ethical AI use",
        "My colleagues and I meet on a month to month basis to chat and work through tools that help them. We share in each other's tools.",
        "Automation of students having to complete a certain check list of learning outcomes before moving on the next.",
        "Not as yet... but I am thinking about it.",
        "When brainstorming, it is important to not ask AI for the complete solution, but to use it effectively to build a solution, step-by-step. It helps to align and focus a conversation that develops a solution over time and helps the person understand better, how a solution came to be.",
        "n/a",
        "An AI marking assistant",
        "No",
        "Unblock CoPilot for Office 360.",
        "Not at the monment",
        "None at the moment",
        "We have to scrap online POE submission/assignments, it serves no purposes as we continue to mark AI. We also need to be able to deduct way more marks for AI usage.",
        "entering marks - using the ARC grade centre to speak to SIS",
        "I would like training in AI and various forms of AI to make great power point slides and ICE tasks.",
        "Let's build assessments that can be automatically marked. Marking code is painful.",
        "Ability for GenAI to review and mark assessments against the rubric, memo, and textbook/student material.",
        "I have been lucky enough to receive full CoPilot Pro access to streamline my research output as well as my teaching and learning. This access has been a tremendous help in getting through tasks faster, providing me the time to critically engage with the more important aspects of my tasks and have allowed me to get through more of my work in shorter time frames. I have also made it a point to constantly use Notebook LM, Gamma AI, and SciSpace as tools to help with presentation construction (to get a basic outline to edit and enhance), literature reviews for research (to manage and synthesis my reading of large amounts of information and articles), and to streamline my narrative construction processes. If services like these were to be integrated for all academic staff, I believe it would truly benefit the institution and would allow academic staff the additional time to focus on research output. For instance, in having these tools, I am working on 3 papers this year alone, with the likelihood of publishing two this year and one in the first half of next year - as an example.",
        "AI could record and analyze class visits for peer reviews AS A FIRST STEP. Thereafter, peers can collaboratively reflect on the recording and AI feedback. A real-life class visit can then follow where needed for further development. Many lecturers who teach for decades are resistant to trying out new approaches, so asking them to reflect on their practice (as a first step) is almost useless. This will facilitate reflection based on contemporary teaching and learning theory.",
        "Yes, help with lesson design and being more creative.",
        "Using AI to create interactional videos to communicate lengthy policies.",
        "No",
        "No",
        "No",
        "Please stop telling students to look for ideas using AI. They must come up with ideas themselves - that is fundamental to creativity and originality. AI must be promoted as a personal assistant not as a replacement for your personality. Our creative students are becoming formulaic because they go to AI first instead of tapping into their own experiences. BORING",
        "Use it on Arc to organise and curate our marking. For example, AI could prioritise incomplete assignments that we can mark first to get them out the way. It could alert us to students who handed in late and need a penalty.",
        "N/A",
        "Yes if there can be a way that it can mark assessments for us, as the workload is extremely high!",
        "Assessment feedback Generator, would be great to save time. Curriculum and assessment alignment checker. Adaptive learning resource creator to ensure all students are covered when teaching. Linking personalised timetables to Outlook, to update when there are changes automatically in outlook.",
        "Assessment feedback",
        "Track and manage student progress, attendance. Automatically customise learning paths",
        "setting of MCQs",
        "None other than what has already been mentioned.",
        "No",
        "Marking of assessments",
        "I think it's unlikely that AI will make our jobs easier. AI may make us more efficient in some areas, but the time saved will be filled by other tasks.",
        "No",
        "N/A",
        "not yet.  Still exploring",
        "Uhm.. I'm doing a Masters in Data Science. I use AI on the daily. I have numerous ideas honestly. If you want my feedback, rather call me to discuss this.",
        "No, not yet",
        "I would like to streamline my role in marking and assessing",
        "exce automated tasks",
        "Agentic AI",
        "Integrate Gradescope AI to Turnitin to automate the marking process and provide comprehensive individual feedback.",
        "The ONLY thing that would make my current job easier is to eliminate unethical use of AI in ALL assessments. As lecturers, we find that our jobs have shifted focus from 5 yrs ago - we feel like human AI detectors - this is a major distraction from our core role.  We have to detect, report, follow up, remediate and rinse and repeat endlessly.",
        "Exploring different interactive teaching methods to incorporate in teaching styles.",
        "no",
        "n/a",
        "Not yet",
        "To holistically streamline my academic portfolio, leveraging generative AI to automate initial feedback drafts on student assignments and thesis chapters using custom rubrics (adjustable for quick scans or deep critiques), dynamically generate diverse clinical vignettes and discussion prompts, and accelerate research and supervision by synthesising key trends, gaps, and theoretical conflicts from vast literature (delivering targeted weekly briefs), while also creating first drafts of routine administrative communications and ethics applications based on templates and institutional guidelines. Furthermore, AI could act as a supervision tracker by analysing student writing progress to flag methodological gaps, consistency issues, or timeline delays. A programme coordinator's aid could be provided by generating real-time analytics dashboards from LMS/evaluation data to identify course performance trends and resource gaps, a training tool by simulating complex supervisee queries or ethical dilemmas for practice, and a research catalyst by identifying potential collaborators through publication/method analysis.",
        "I would love co-pilot for outlook so that it can suggest responses based on my previous responses as constructing emails take a long time.",
        "Using Gen AI to prepare teaching material, asking for ideas, and creating multiple modes of teaching for accessibility and student needs. This makes sure that content is accessible and presented to the different learning styles. Using GenAI has helped me stay up to date with relevant software and industry trends as well as generate examples and case studies for students to analyse. Using GenAI to provide constructive feedback, taking the assessment brief and creating a structured overview of each section also helps me not sound like a grumpy cow. Using GenAI to create a rubric checklist for students and for myself.",
        "I can't think of any.",
        "I have not considered this much; novice accountants need a behaviourist approach to accounting fundamentals. It is quite pre-defined although has some flexibility provided you already understand the fundamentals, so perhaps seeing interviews with how and why accountants use accounting and IFRS standards might encourage more dedication to genuine learning; maybe that could be found on You Tube, not particularly AI.",
        "Yes creating rubics",
        "no",
        "nothing at the moment",
        "Having access to AI tools as a lecturer would definitely assist with creating more dynamic presentations, and engagement with students.",
        "Generative AI could streamline my work by summarizing meetings into action items, auto-drafting documents from institutional resources, and linking tasks across platforms. With secure integration, these tools would cut repetitive work and free time for higher-value tasks while supporting continuous learning.",
        "Not yet.",
        "not at the moment",
        "Marking support to speed up marking.",
        "Alot of report writing and admin that can be streamlined with AI",
        "n/a",
        "No ideas at the moment.",
        "N/A",
        "Nope",
        "Summarising textbook material to but in slides/notes. Asking it questions for projects or class activities. Giving me the code of text to embed in Arc or Creator plus.",
        "None I can think of at the moment.",
        "No",
        "None",
        "Scopus ai",
        "N/A",
        "Not yet",
        "Institutional support in the form of training, ethical guidelines, and integrated AI platforms would make these tools more effective, saving staff time while improving consistency, innovation, and student support.",
        "Not really",
        "To assist with admin",
        "No at the moment, no.",
        "A tool that can provide responses to more generic queries or student submissions would be good (do not think it is feasible though). AI detection tools that identify AI use in student assessments would be great though.",
        "N/A",
        "N/A",
        "Assessment Comment generation on ARC and the ability to cross check assignments on ARC for verbatim copying by students.",
        "Automated marking, automated attendance tracking and notifications for students who are not attending, automated reports on how each student is engaging with the content and assignments etc.",
        "No.",
        "Generate renders efficiently with prompts from live models.",
        "I have been experimenting with AI for several years and have frequently shared examples of my private creative work utilising AI, as well as new AI platforms, powerful prompts, etc. I have done this with students and colleagues. Given talks on the topic to students and colleagues, both on my campus and to other campuses via online guest sessions at conferences. Whilst I am a strong ambassador for AI, I don't think it is an either/or situation. It should never take over from bespoke creativity, critical thinking and ideation, but it can facilitate certain processes and is useful for filling in for certain skillsets that someone may not have, and for making certain tasks easier. That said, when it comes to ideation, I will always advocate for the power of the human imagination, and the use of a pen and paper (laptops and phones off!). It is up to the lecturers to ensure this, especially when dealing with a generation that often appears to lack initiative, and where all answers appear to reside on Pinterest.",
        "Surely.  All routine tasks and marking.",
        "Providing local examples of concepts for teaching purposes.",
        "No",
        "Same as above - would have to draft it down some more to have a more feasible idea",
        "None.",
        "Having an automated campus reporting structure for sims and maybe a smart assessment and feedback generator for ARC, to assist the lecturers.",
        "no",
        "no",
        "Yes, we could get a system which will help get specific accounts with specific issues and prompt if for each task",
        "Collecting customer service data is still very manual and finding a feedback monitoring AI tool could be helpful.",
        "no",
        "None",
        "Perhaps an introduction of a one stop shop for HR latest trends",
        "No",
        "Auto-Caption Refiner, Design Brief Auto-Writer, Content Calendar Builder, Hashtag Compliance Checker, Fact Verification Assistant, Instant Platform Formatter, Analytics Explainer Bot, Content Vault Organiser",
        "No",
        "Not yet",
        "I believe I do, however this is something I believe should be copyrighted and sold as an additional skillset warranting additional compensation as it would benefit the organization.",
        "Enhanced Verification & Fact-Checking and Task Automation & Workflow Orchestration",
        "AI Meeting Summarizer \u201A\xC4\xEC An AI tool that automatically summarizes meetings and creates action items. It would save time and keep everyone aligned without manual note-taking.\n\nSmart Research Assistant \u201A\xC4\xEC A GenAI tool that reads my drafts and suggests relevant sources or data. This would speed up research and ensure better citations.\n\nPersonalized Workflow Helper \u201A\xC4\xEC An AI trained on my tasks that reminds me of deadlines, drafts emails, or auto-generates reports. It would reduce repetitive work and keep me organized.",
        "No",
        "Agent AI",
        "Email Filtering: Prioritize and sort emails, flag urgent messages, and draft responses.",
        "There could be a GenAi that could be integrated into the institution's website, that could be used to search for and retrieve any document that is on the website. \n\nThis could be really helpful since there are a lot of documents on websites and they aren't stored together or on the same place, it can be really time consuming to search for and find a certain document especially when you have no idea where to start looking for it.",
        "Yes. Gemini and ChartGPT.",
        "None",
        "no",
        "A built-in \u201A\xC4\xFAtone switcher\u201A\xC4\xF9 for emails would be a game-changer\u201A\xC4\xEEespecially for professionals like us who need to adapt communication styles depending on the recipient.",
        "Yes, I have a few lol - Summarize event surveys into key insights. Create checklists for event logistics based on past events. Pull competitor insights or campaign trends from multiple sources in minute. Suggest headline ideas, taglines, or promotional themes",
        "Creating scripts for Canva videos/presentations.",
        "No",
        "A copilot pro license would make the tasks in my job much faster - eg excel work and data analysis",
        "No",
        "The admission requirements ( graduation, registration) can be done by the system and a check can be initiated by an officer to save time.",
        "No",
        "Not now",
        "Yes, Digital Library Implementation and Generative AI Integration.",
        "AI Agents for common queries",
        "Not yet",
        "Tone checking emails - making long emails easier to read",
        "Pulling data to a cohesive source - this will speed up processes as well as help maintain accurate data capturing. In addition, it could further expend to keep all activity of student work saved onto their profiles for open information. In addition, incorporate class engagements.",
        "None",
        "No",
        "Polite Professional Email Composer\nPain Point: Drafting dozens of repetitive but slightly nuanced professional emails daily.\n\nConcept: GenAI that takes a brief note (\u201A\xC4\xFAask Cape Town campus for delivery confirmation\u201A\xC4\xF9) and generates a polished, context-appropriate email in seconds.\n\nBenefits: Saves time, ensures consistency, maintains professional tone.\n\nImplementation Needs: Secure prompt input box, integration with Outlook or Gmail.",
        "Meeting arrangements, task management of team members",
        "no",
        "I would like to investigate how we could use AI as a support tool in our Writing Centres.",
        "Short, funky animation that explains our policies to the students. \nVerification of results between ARC and SIMS. \nAssisting with the timetable and scheduling of campus venues.",
        "no",
        "Analysis of at risk students and assistance with plan of action based upon the module requirements and the mark of the student in correlation to the assessment written outcomes needed to be understood.",
        "One of the stress points I am phasing is with the CI, some of the processes and how we organizes data is changing - which means when we need to compile reports we are often has to reorganize large data sets to compile with CI requirements. It would be great to have an AI assistant we could use to assist these tasks without the worry of company date being shared with the outside.",
        "NA",
        "Perhaps a bot that is coded or set up to automatically send payment reminders or general reminders and when engaging with the student link to our system to provide information not like direct them to an FAQ or trouble shoot but answer the question - EG: I need my results a link can be sent which upon clicking opens the page where results can be found or one better send it to them in a PDF form as an attachment",
        "Not at the moment.",
        "Create an autonomous system that sends out engagement emails if a student has not accessed a module",
        "Gemini",
        "No.",
        "Yes\u201A\xC4\xEEI can think of a few original GenAI concepts that could make my current (ICT support and networking-focused) role easier by removing bottlenecks and adding smart automation:",
        "Yes. (Student Recruitment)\n\nThere should be an AI chat widget on the website on which potential students can query about there career and study options. What campus they are interested in, talk about campus specific qualifications, perhaps even those that align with their qualification and then transfer the relevant details to the Marketing Assistants to ensure that the lead does not run cold.",
        "N/A",
        "N/A",
        "No",
        "Assist with assessment plotting and common module dates across brands and how these could be aligned/clashes avoided as opposed to manual input.",
        "ChatGPT for Ideas",
        "No",
        "no",
        "None",
        "n/a",
        "n/a",
        "Not at the moment.",
        "No",
        "GenAi could help draft quick personalised responses to common student queries e.g. missing documents and deadlines. This will help save time while still allowing us to review before sending. It could as help scan applications and highlight missing documents, incomplete information or eligibility issues; this will help reduce manual checking and speeds up processing. These tools could suggest polite and professional wording for sensitive replies like rejections, deferrals or special cases, this will help make communication faster and more consistent.",
        "Enhances creativity",
        "N/A",
        "-",
        "Research and Content Creation",
        "n/a",
        "None I can think of right now.",
        "Not at the moment",
        "No.",
        "As above",
        "Not at the moment",
        "n/a",
        "NO",
        "None, other than what has already been mentioned and listed"
      ],
      agentIdeas: [
        "Align T&L practices that include AI as supportive tools and less as a reliant tool for learning",
        "design policies that will guide the use of AI agents",
        "None",
        "AI agents like a teaching assistant for grading, a curriculum insight tool, and a student support guide could integrate with learning systems to save time, improve support, and adapt to evolving academic needs.",
        "Automated marking",
        "unsure, as I have not worked with an AI agent",
        "None at this stage.",
        "I would like to explore this further, as there may be interesting options to improve the efficiency of administrative tasks, an area I see as a significant challenge in my work.",
        "Making AI tools more accessible, but also clear guidelines on how to ethically cite and use them.",
        "I don't know",
        "Is there something like a scheduling assistant? As HoF, it would be great if my diary could be automated. So it can give me a heads up when tests / assignments / marking is due etc.",
        "AI Research Agent, AI Tutor for Theory and Numerical Modules, AI Meeting Notetaker.",
        "I see scope for developing AI agents that act as autonomous co-pilots in key areas of faculty management. For instance, a Workload Balancer Agent could integrate timetables, HR data, and assessment schedules to proactively redistribute workloads and flag bottlenecks. A Student Success Agent could monitor LMS activity, attendance, and assessment performance to generate early alerts and personalised support suggestions for at-risk students. An Admin Automation Agent could manage routine queries, draft correspondence, and coordinate external moderation processes. Integration with existing systems (HR, LMS, accreditation databases) would be essential, and challenges such as data privacy, ethical oversight, and staff adoption would need to be managed. Over time, these agents could evolve from simply automating tasks to offering predictive insights and scenario simulations, ultimately boosting both productivity and decision-making across the faculty.",
        "Would need to think about this",
        "Nothing",
        "Not sure, although I use AI, I have not used it in depth.",
        "I really do not have any ideas to share at this stage.",
        "AI agents could assist with determining an appropriate workload management of staff, for drafting strategic reports, and analysing student performance trends. They could also provide real-time policy guidance, automate routine compliance tasks, and manage faculty scheduling. An AI assistant for student queries could improve communication while freeing time for more strategic leadership responsibilities and engagement as we head into a new era in our institution's history.",
        "None.",
        "List-checking - we spend A LOT of time checking lists (textbook, MIS, software, equipment, marketing fact sheets etc.)",
        "Consider AI agents to automate student surveys. Unnecessary time is spent reaching out to students telephonically to gauge their experience on campus.",
        "As above. I do not want, nor need, training - unless it is a complex teaching tool. Chat GPT is NOT a complex teaching tool.",
        "Not sure",
        "I would benefit from an AI agent that could act as a teaching assistant, helping manage routine tasks like marking short-answer assessments, generating feedback, and tracking student progress. Another useful agent could be a research companion that scans new publications in my field, summarises key insights, and highlights gaps aligned with my interests. An administrative AI agent to handle scheduling, reporting, and communication would also ease my workload and free time for higher-value tasks. If these agents were thoughtfully integrated with institutional systems and guided by clear ethical frameworks, they could greatly enhance productivity and student support.",
        "All CAT and assessment systems and procedures",
        "I have no suggestions at this point.",
        "No",
        'I think, as mentioned, that starting to explore closed GPT/LLM systems that can "spit" out exactly what we need. This will obviously take time to set up in the beginning, but the time saving is immense.',
        "Do not know",
        `Please consider the research on AI Agents. Meredith Whittaker for example has noted there are "profound" security risks. Automation? Hell yes! ... Agents? Let's be academically cautious by taking a socio-technical approach to technology rather than a technocratic one (and allow students/staffs to co-construct their technological ecologies for teaching and learning, alongside their right to refuse certain technologies, datafication & surveillance given the grave risks vs subpar benefits). We aren't a tech-bro company like Meta "move fast and break things". We are a higher education institution that should consider the research & actual harms, alongside a care towards students, staff & society/environment over the hype of GenAI. It's worrying to see divergence away from some of our IIE goals (i.e., Holistic Thinkers, Change Advocates) towards a path of late neolibralism (metrics & efficiency) rather than broader goals of social responsibility (i.e., UN SDGs).`,
        "N/A",
        "no",
        "Rubric creation and alignment.",
        "Agentic Ai applications for mid managers and MANCO members that would act as a replica of the manager to ensure quick support to staff members on strategy alignment and day to day task and effort management. Any staff member should be able to ask the agent (manager replica) questions any time and get answers they would normally get from their manager. A POC or research into the effectiveness of this approach and aligning company wide efforts with company strategy and ensure synchronization across the entire organization would probably prove fruitful.",
        "None for AI agents.",
        "non",
        "Student success and retention agent",
        "Improve productivity",
        "none",
        "None",
        "NA",
        "Zero",
        "None specifically, I think my knowledge and understanding of AI is not high enough",
        "There is much paperwork. pdfs, etc in our workflow. Use AI for eliminating and automating these with real time trackers to check statuses and bottlenecks.",
        "Dont know",
        "Using the example above, there could be dedicated FAQ Bots for different functions, such as an HR FAQ Bot, a Disciplinary Officer FAQ Bot, and an Academic Operations FAQ Bot. Imagine an automated system where, if plagiarism is flagged, both the staff member and the student receive an immediate notice. The staff member could also be provided with a recommended sanction level and a likely outcome, based on policy, once the investigation is complete. This would not only streamline processes but also ensure consistency, accuracy, and timely communication.",
        "N/A",
        "n/a",
        "Sourcing credible, current studies to support the research I am undertaking",
        "As above",
        "Need to take into account current policies and processes in place",
        "None at the moment",
        "None",
        "Tracks submission deadlines and reminds lecturers. Cross-checks marks across ARC, SIMS, and grade rosters to flag discrepancies.",
        "I know Freddy AI is being worked on - which will be a great help for student queries.",
        "None",
        "Automated responses for student queries would be ideal- a lot of time is spent dealing with emailed queries that are often quick responses that link to the policies.",
        "AI agents, such as a research assistant, curriculum design tool, student support advisor, automated assessment system, and institutional insights dashboard, could integrate with our LMS and databases to streamline academic processes, personalise learning, and inform data-driven decisions.",
        "None",
        "N/A",
        "N/A",
        "ntr",
        "n/a",
        "N/A",
        "Boosting productivity",
        "I have no ideas, i do use AI but to a certain extent",
        "Teaching \n\nLecture Preparation Agent\n\nSummarises textbooks, research papers, and case studies into lecture notes or slides.\n\nSuggests relevant examples, case studies, or current events to make lectures engaging.\n\nAssessment & Grading Assistant\n\nHelps design fair, well-structured tests, assignments, and rubrics.\n\nProvides first-round marking for objective questions (e.g., multiple choice, short answers).\n\nGives feedback suggestions for student essays to save time.\n\nStudent Progress Tracker Agent\n\nMonitors student performance across modules.\n\nFlags at-risk students early (e.g., low participation, declining marks).\n\nSuggests tailored interventions like study guides or extra tutorials.\nStudent Engagement & Support\n\nStudent \n\nAnswers common student queries about course content, deadlines, referencing, or exam prep.\n\nProvides extra explanations in simple terms for difficult concepts.\n\nInteractive Case Study \n\nSimulates business/commerce scenarios where students can \u201A\xC4\xFAmake decisions\u201A\xC4\xF9 and see outcomes.\n\nUseful for modules like Management, Marketing, or Financial Decision-Making.\n\nSurvey & Feedback Optimizer\n\nDesigns engaging student surveys with gamified elements.\n\nAnalyses feedback to give you actionable insights on teaching improvements.\n\nResearch & Administrative Support\n\nResearch Assistant Agent\n\nSummarises journal articles and highlights key insights.\n\nSuggests relevant literature for your academic writing.\n\nAssists in formatting research outputs (APA, Harvard, etc.).\n\nAdmin Streamliner \n\nAutomates repetitive tasks such as attendance registers, emailing reminders, or compiling marksheets.\n\nCreates professional drafts of official communications quickly.\n\n Institutional Value\n\nCurriculum Innovation \nMaps your module against global best practices.\n\nSuggests updates aligned with industry trends (e.g., entrepreneurship, AI in business).\n\nCommunity Engagement \nAligns academic events with industry sponsors to create opportunities for students.",
        "None",
        "N/A",
        "Not sure",
        "We need workshop to understand how to use AI.",
        "None",
        "please provide us with AI that can assist with proper academic writing and also assist with providing accurate information that can be used openly",
        "None",
        "AI Research Agent\n\nFunction: Continuously scans academic databases, journals, and institutional repositories to identify relevant new research aligned to a lecturer\u201A\xC4\xF4s or student\u201A\xC4\xF4s field. It could summarize findings, generate annotated bibliographies, and highlight gaps for future research.\n\nIntegration: Linked to library subscriptions and citation managers.\n\nChallenge: Ensuring credibility of sources and avoiding over-reliance on non-peer-reviewed content.",
        "Research assistant: scans publications, extracts key findings, and suggests relevant resources.",
        "I suggest an AI agent for personalized tutoring that adapts to student learning styles, providing tailored resources and feedback. Additionally, an AI project manager could automate task tracking and team collaboration, enhancing productivity and project outcomes.",
        "AI agents for assessment compliance, research support, academic integrity checks, and student assistance would improve productivity and support.",
        "If we can use AI as a personal Assistance. To best utilize It, we need to have be embedded to our calendar, let the GenAI create lesson plans, slides, quiz, test and exam prep. Let it outsource other additional information and even more relevant information on topics that i will be teaching in Class.",
        "N/A",
        "not sure",
        "AI agents could bring major benefits. An Academic Advisor Agent could guide students with module choices and careers, while an Admin Assistant Agent could manage tasks like timetables and bookings. A Research Assistant Agent could track new publications and funding opportunities, and a Student Skills Companion Agent could support learning with practice, explanations, and progress tracking.",
        "Using AI to better understand a specific concept is helpful",
        "none",
        "None",
        "Students knowing how to use and reference AI",
        "N/A",
        "I wants AI that guide someone to a correct answer not telling him or her",
        "None",
        "An AI academic coach that assists with homework planning, deadline management, and study strategy recommendations based on individual learning styles is one concept.  For essays or projects, a research assistant agent could aid with discovering pertinent sources, summarizing results, and keeping track of citations.  An AI project manager might assign tasks, give reminders, and keep track of progress for group projects.  A feedback generator might go over papers and offer thorough recommendations based on instructor remarks or grading criteria.  These artificial intelligence (AI) agents would improve academic performance, ease time management, and lessen study-related stress.",
        "I have no input on this question.",
        "Online short courses for the staff to learn counter measures, all added in the curriculum",
        "Making and summarizing articles",
        "Provide templates",
        "Translation applications that will help students communicate in class situations. To give feedback",
        "TO AVOID HIGH PLAGIARISM SCORE",
        "Marking",
        "An AI agent could streamline research by collating relevant academic papers, offering concise summaries, and suggesting related topics. It could also assist in managing schedules, providing reminders for deadlines, and offering personalized study plans based on progress, enhancing productivity and time management for students and staff alike.",
        "See 7.2 above",
        "None",
        "An AI agent could automatically generate a summary of each lesson, highlighting key concepts, top questions, and action items. For example, after a recorded lesson is uploaded, the AI could provide a concise overview to help students quickly catch up or review important points. Integrating this into platforms like Teams would make the recordings more accessible and useful without adding extra work for instructors",
        "Please see my detailed response to the proposed policy.",
        "Possibly something like internal moderation",
        "Anything to gather insights on students so that we reduce the number of additional hours as employees on campus.",
        "N/A",
        "It would be fantastic if we have systems that speak to each other - Arc results & Sims. Linking Teams & Arc - the tools on Teams in live sessions are problematic.",
        "I have my students, complete an Ai task as and ICE task, there i can see the two different writing styles.",
        "None as yet...",
        "It would be interesting to help both lecturers and students use the AI tool to evaluate assignments based on the marking criteria. The feedback given to a student can help them sometimes better understand the comments made by a lecturer after an assignment is marked. This idea could help the lecturer to better see the assignment, in a better light. Helping them to provide and when needed, understand the right feedback that could assist the student (deeper thinking, more thoughtful feedback) instead of stating that something is just wrong.",
        "n/a",
        "An AI marking tool",
        "Not specifically",
        "None at the moment",
        "Evaluation / Marking would greatly support our teaching.",
        "I think nothing needs to be introduced the students are miles ahead of us and we need real practical assistance to lead from the front with AI and not play catch-up all the time.",
        "the ticketing system could do with help on productivity and relevance, streamlining processes",
        "I would love training on various apps and tools for educational and training purposes.",
        "AI agents to give a preliminary mark and feedback, but we moderate, adjust and then still sign-off on it",
        "Same as above",
        "AI Agents are already accessible to staff if they make use of their MS365 Copilot. Microsoft recently made agents available for free use, which is helpful as it allows for the creation of policy category agents, and so forth. However, it is the creation of such CoPilot agents that can be tricky for people the first couple times. If sufficient how to guides or training were provided, staff and students could make use of CoPilot agents for academic policy, module specific guidelines (based on Module Outlines, etc), and so forth. This would further allow for staff to gain time that would have been spent querying policy, and would assist the student relations center with enquiring less student queries that require deeper module specific investigation.",
        "If the plagiarism and AI transgression investigations could go through an initial evaluation with a generated report, it would provide a starting point for the plagiarism officers and cut out the initial groundwork (maybe AI is not accurate enough for this yet, but it would help if this is possible in future)",
        "Lesson design",
        "Meeting transcripts that are summarized.",
        "being able to make templates of certain gamification",
        "None",
        "Take over admin overload",
        "When students are looking for precedents and examples of work that is current exciting and fun they should be able to ask AI to make suggestions. Co-pilot is spectacularly bad at this. It can't look out of the box, just coming up with a generic stream of formulaic rubbish.",
        "Agents that could suggest examples in real time while you're preparing a class. Examples of concept from the real world that have perhaps featured in the news recently, etc. Peer review agents (is that possible?)",
        "N/A",
        "Automate marking & rubrics",
        "A literature scout agent, that monitors academic databases and journals. Assessment marking and feedback agent.",
        "Timetable updates - link to Outlook",
        "Integrate systems for mark capture, results due dates, late submissions etc.",
        "unsure",
        "None!",
        "It would be great if it could reduce the amount of admin that lectures are required to manually perform e.g: once assessment rubrics are marks - AI took to calculate the grade, insert marks in the grade book etc .. etc .. these tasks waste an incredible amount of time. In addition, these task requirements expand each year VS decrease.",
        "Marking of assessments",
        "ChatGPT is highly useful for providing guidance in terms of finding gaps in literature, guidance towards finding useful articles, and guidance in terms of providing options for submitting to specific journals. It can also provide guidance on what might be missing or should be looked at when writing articles, and its editing function can also be useful.",
        "Don't have any",
        "N/A",
        "Nothing as yet.  Still exploring",
        "See my answer to 7.2",
        "Provide a variety of AI Tools for Numeracy Modules",
        "All of the above.",
        "none",
        "Adaptive learning",
        "Kahoot and Quizizz AI tools could be used to enhance the learning environment by improving engagement and promoting critical thinking and could be more relevant to shaping the teaching practices.",
        "See previous answers - in my numeracy modules, AI seems to provide increasingly incorrect information that I can't see these listed objectives becoming a reality.",
        "Research Literature Review summary tools",
        "paid version might be apble to mark assignments?",
        "n/a",
        "N/A",
        "In the research domain, a generative research companion could supercharge literature review and writing. For instance, an AI assistant could search academic databases, identify high\u201A\xC4\xEBvalue psychology papers, extract key findings and quotes, and even draft summaries or reports. Tools like Elicit already show the promise, for instance, AI\u201A\xC4\xEBenabled systematic reviews can cut review time, quickly surface relevant studies that might be missed by manual search and provide transparent citations for every claim. Adapting such a model to the lecturer\u201A\xC4\xF4s speciality (fine\u201A\xC4\xEBtuned on psychology journals and local research outputs) would help the academic discover new angles, generate hypotheses, and draft literature reviews far faster. Technical feasibility is strong since large\u201A\xC4\xEBscale research databases exist; the main requirements are API access or integrated search of PsycINFO/PubMed and ensuring up\u201A\xC4\xEBto\u201A\xC4\xEBdate information. The payoff is higher research productivity and enhanced teaching.",
        "If an AI agent could help capturing marks on SIMS that would be great! Taking marks on ARC and adding it to the relevant spot in SIMS once published on ARC.",
        "I feel that there is a disconnect between lecturers' attitudes towards AI - some hate it, some love it. They feel guilty for using it or see how students use it and just assume it is rubbish. We are still the experts in our fields and have the experience. Using GenAI doesn't mean you switch your brain off; you have to moderate.",
        "I am yet to explore options.",
        "Accounting is very pre-defined, not fundamentally creative and so this does not really apply.",
        "N/A",
        "Simulation systems",
        "not sure",
        "As mentioned, dynamic presentations for lectures, and learning aid tools for students in the lecture room environment.",
        "AI agents could support my work by automating routine tasks, generating research insights, and personalizing learning support. For example, a research assistant agent could scan institutional databases for sources, while a workflow manager could coordinate tasks across emails and calendars. With secure integration, these agents would reduce administrative burden and free time for higher-value work.",
        "None so far.",
        "Possibly creating models to assist with marking",
        "none at the moment",
        "I do we think we can first optimise the systems we currently have",
        "No ideas at the moment.",
        "Marking and self-evaluation",
        "Used for mind mapping and/or brainstroming",
        "Summarise and read emails to then proritise or set up a to do list. Deep research and finding if some key points for research.",
        "Using GenAI to create small activities for students to do as revision. This will save a lot of time. It will provide examples from a different perspective which could be challenging or easy for the students to answer. This would all depend on the prompt provided.",
        "None at this point",
        "Replacing lecturer admin (capturing of marks) with an automated process",
        "N/A",
        "Not yet",
        "One useful AI agent could be a Marking Assistant, trained on institutional rubrics, that pre-scores assignments, highlights strengths and weaknesses, and generates draft feedback for moderation\u201A\xC4\xEEsaving time while maintaining academic integrity.",
        "None",
        "Notebook LM paid version",
        "Ways in which we can track the students' progress throughout the semester. I still do it very manually",
        "Tools to assist in creating of research ideas and abstracts. Tools to identify journals and conferences most suited to the main topic of your research or paper so that you can target those journals",
        "N/A",
        "Not sure.",
        "Assessment Comment generation on ARC and the ability to cross check assignments on ARC for verbatim copying by students.",
        "Automated marking of multiple choice, true and false, match the column and short answer questions for large classes - with AI lecturers should not be spending ridiculous hours marking question of this nature anymore.",
        "Possibly only something that could pick up AI use by students.",
        "-",
        "In a personal capacity, I am about to experiment with AI agents to code and create apps that will be useful and save time. I am sure AI agents could be used as search engines, for SEO, certain marking and rubric creation, creating quizzes, collecting data, and so on. Mind mapping would be useful for both students and lecturers. The creation or, at least, initial thinking behind lesson planners, prompts, presentations, and so on. Any automated work, timetabling, etc.",
        "My feeling is that long-term AI will be customised almost entirely.  All boosts to productivity and competitiveness I would expect to be introduced in most industries, including education.",
        "Possibly identifying general trends in student interpretation of the brief and pain point experiences which could be fed back to the programme navigator for the purposes of curriculum development.",
        "None",
        "An AI agent that links Freshdesk with the system(SIMS) to track calls and leads, linking them to be able to track productivity without having to update on each system after every call",
        "None.",
        "AI Tutor, Academic research and Aca Ops data analyst",
        "TRAINING",
        "non for now",
        "We could get a system which will help coordinate our work and help strike a time balance between our school and profesional work",
        "Collecting customer service data is still very manual and finding a feedback monitoring AI tool could be helpful.",
        "no",
        "None",
        "na",
        "None",
        "Event-to-Caption Agent - Reads raw event reports (even messy WhatsApp dumps).\n\nExtracts facts only, formats them into your on-brand caption style with hashtags.\n\nFlag any missing info so you can request it before posting.\n\nStudy Scheduler Agent - Aligns your coursework deadlines with your work schedule.\n\nBuilds a realistic study plan that avoids burnout and syncs with your free hours.",
        "None",
        "None",
        "Personalized Virtual Teaching Assistant, AI-Powered Administrative Assistant, Accessibility & Inclusion Agent and Early Intervention & Retention Predictor",
        "AI Academic Advisor Agent\nAn AI agent that tracks course progress, suggests personalized study plans, and flags academic risks early. It could integrate with the LMS to offer timely reminders and recommend resources.\nChallenges: Data privacy and accuracy of advice.\nBenefits: Improved student support and retention.AI Research Assistant Agent\nA tool that autonomously scans new publications, summarizes key findings, and suggests how they relate to ongoing research. It could also help with literature reviews and formatting citations.\nChallenges: Access to databases and context awareness.\nBenefits: Saves time, keeps research current.An autonomous assistant for staff that handles scheduling, email drafting, meeting prep, and form submissions. It could learn preferences and improve over time.\nChallenges: Integration with internal systems.\nBenefits: Increased productivity and fewer manual tasks.",
        "N/A",
        "NOt much",
        "Administrative Automation: AI agents can analyze data to predict potential academic challenges, enabling targeted interventions and support.",
        "A GenAi that would create folders on your PC and automatically rename and save all documents that you receive via email on their respective folders.",
        "Subscription for the employer.",
        "None",
        "none",
        "Explaining Gen Z Personalities to Managers Using Smart AI. Genz are entering corporate and they do things different, a smart tool can assist managers to understand their culture, language and how to handle different GenZ personalities. Tone coach for managers on how to improve their tones when dealing with GenZ. E.g Tones like you must do this' to Lets collaborate on this.",
        'Student support "Agent" - this could prompt students about upcoming deadlines. Assist with common queries relating to policies and upcoming events.',
        "No ideas yet",
        "Not syure",
        'We could automate many processes and allow staff time to become "thinkers" instead of just "doers"',
        "when students log a ticket, we should have an automated respond, and then the ticket gets directed to the relevant person. i think will avoid in agents having more ticket to respond to saying that they will transfer to the relevant department",
        "Integrating systems between the different operations departments to save time and be more efficient with regards to meeting targets.",
        "none",
        "No ideas at the moment",
        "Leveraging Generative Artificial Intelligence (Gen AI) to complement traditional library systems. I propose a hybrid library model that integrates intelligent, AI-driven features with conventional resources to maximize educational outcomes.",
        "AI Agents for common student queries",
        "Nothing for now",
        "Schedule assistants - co-ordinating diaries for meetings",
        "Having autonomous systems will enhance operations as well as help cover the gaps between department communication so that no balls are dropped.",
        "Nothing",
        "Academic Operations Workflow Agent\n\nFunction: Automates routine operational tasks like compiling class lists, verifying submissions, or scheduling internal deadlines.\n\nIntegration: Direct link with academic operations software and calendars.\n\nChallenges: Ensuring flexibility for exceptions and unique cases.\n\nEvolution: Add predictive analytics to flag potential delays or bottlenecks.",
        "none",
        "I think power automate could be helpful to handle email boxes filled with queries. A chat bot to handle research process queries would be useful.",
        "Short, funky animation that explains our policies to the students. \nVerification of results between ARC and SIMS. \nAssisting with the timetable and scheduling of campus venues. \nReport writing and stats from our Assist platform.",
        "none",
        "I think that embracing AI as a tool to offer a more tailor made approach to student services would allow us to give student individual support.",
        "I really liked to use Perplexity (until the campus internet access ban is in place) so how to use it more effectively for my studies with a workshop.",
        "NA",
        "Perhaps use co-pilot to spot check emails prior to allowing users sending an email - this should double check spelling and accuracy and even offer options for alternative ways of saying things in a simpler or refined way",
        "An AI academic advisor. During registration, students can use this to help them in choosing the right qualifications based on their future goals and career plans",
        "Automatically generated reports of assist tickets and affective care stats",
        "n/a",
        "AI agents could significantly enhance productivity and learning at the institution by serving as autonomous lab assistants that configure and troubleshoot networking labs, intelligent tutors that create adaptive study materials for CCNA, Linux, or ITIL, and virtual helpdesk agents that resolve routine IT support issues while escalating complex ones. They could also function as career coaches, analyzing student skills and aligning them with job opportunities, and as security agents that continuously monitor systems for vulnerabilities and compliance gaps. While integration with existing platforms like Packet Tracer, LMS, and ITSM tools would maximize impact, challenges such as ensuring data security, avoiding over-reliance, and aligning outputs with curriculum or workplace standards must be addressed; over time, these agents could evolve into more advanced systems that not only automate processes but also provide predictive insights, self-healing capabilities, and personalized pathways for both academic and career growth.",
        "General AI that can record and convert lectures into text. Allow students to be able to search the AI for answers relating to their theory but have the option of being disabled during exams and tests.",
        "N/a",
        "Calling systems for unused database",
        "N/A",
        "None",
        "Assist with assessment plotting and common module dates across brands and how these could be aligned/clashes avoided as opposed to manual input",
        "Idea generation",
        "Not sure, maybe create more creativity and new ideas",
        "none",
        "None",
        "n/a",
        "n/a",
        "Not at the moment.",
        "N/A",
        "An AI agent that checks applications for missing documents, sends reminders to students, and gives you a quick summary of each case so you can focus on decision making. A chatbot that answers frequently asked questions about admissions, registration, and deadlines, available 24/7 for students. An AI that drafts clear, professional responses to common student queries, leaving you to just review and send. Helps set up appointments, interviews, or consultations with students by checking availability and sending calendar invites automatically. Creates quick reports on application trends, student demographics, or outstanding queries, making it easier to present updates to management.",
        "Don't put people out of jobs because of AI. Minimize AI Inventions",
        "N/A",
        "-",
        "Research Support",
        "n/a",
        "None I can think of right now.",
        "Not at the moment",
        "No ideas.",
        "Using GenAI to automate admin processes such as calculating DASE hours for lecturers and creating contracts and annexures",
        "Something that streamline or make it event planning easier.",
        "AI tools for data collection",
        "Not sure",
        "None, other than what has already been mentioned and listed"
      ]
    },
    assistance: {
      counts: [
        {
          label: "Training (e.g., workshops, webinars, on-demand videos or courses to build skills in using GenAI tools).",
          count: 270
        },
        {
          label: "License/subscription fees (e.g., financial support or subsidies to cover the costs of accessing premium GenAI tools).",
          count: 253
        },
        {
          label: "Approved apps list and access (e.g., a curated list of recommended GenAI apps with provided institutional access or accounts).",
          count: 251
        },
        {
          label: "Resource Materials (e.g., guides, tutorials, or documentation on using GenAI tools effectively).",
          count: 232
        },
        {
          label: "Technical Support (e.g., troubleshooting, setup, or integration of GenAI tools).",
          count: 185
        },
        {
          label: "Community or Peer Support (e.g., access to forums, study groups, or mentors for collaboration and knowledge-sharing).",
          count: 183
        },
        {
          label: "Other (please specify any additional assistance not covered above).",
          count: 32
        }
      ]
    }
  };

  // IieDashboard.jsx
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var TABS = [
    { id: "executive", label: "Executive Summary" },
    { id: "respondents", label: "Respondents Overview" },
    { id: "adoption", label: "Overall Adoption" },
    { id: "academic", label: "Academic Staff" },
    { id: "students", label: "Students" },
    { id: "nonAcademic", label: "Non-Academic Staff" },
    { id: "comparative", label: "Comparative Analysis" },
    { id: "ideas", label: "Staff Ideas" },
    { id: "assistance", label: "Required Assistance" },
    { id: "recommendations", label: "Recommendations" }
  ];
  var palette = {
    // Light, professional theme (inspired by details.html)
    background: "#e2e8f0",
    // slate-200: slightly darker for container contrast
    surface: "#ffffff",
    panel: "#f8fafc",
    accent: "#38bdf8",
    accentSoft: "#0ea5e9",
    accentAlt: "#f97316",
    positive: "#22c55e",
    neutral: "#94a3b8",
    negative: "#ef4444",
    text: "#0f172a",
    textMuted: "#475569"
  };
  var linkButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 18px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(14, 165, 233, 0.15))",
    border: "1px solid rgba(56, 189, 248, 0.4)",
    color: "#e2e8f0",
    fontWeight: 600,
    letterSpacing: "0.03em",
    textDecoration: "none",
    boxShadow: "0 12px 24px rgba(14, 165, 233, 0.25)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  };
  var likertColors = {
    Agree: "#38bdf8",
    Neutral: "#facc15",
    Disagree: "#f87171"
  };
  var adoptionColors = {
    "Yes, I do": "#38bdf8",
    "Yes, but no longer": "#0ea5e9",
    "I am thinking about it": "#facc15",
    "No, not yet": "#94a3b8",
    "No & I will never (on principle)": "#f87171"
  };
  var attitudeColors = {
    Yes: "#38bdf8",
    "No opinion": "#facc15",
    Never: "#f87171"
  };
  var META_SCALE = ["No", "Maybe", "Yes"];
  var IT_PROFICIENCY_ORDER = [
    "Low, I don't use computers often.",
    "Moderate, I use a PC for most of my work.",
    "Advanced, I can assist others to solve their problems.",
    "High, I could work in an IT department."
  ];
  var proficiencyColors = {
    "Low, I don't use computers often.": "#f87171",
    "Moderate, I use a PC for most of my work.": "#facc15",
    "Advanced, I can assist others to solve their problems.": "#38bdf8",
    "High, I could work in an IT department.": "#22c55e"
  };
  var metaColors = {
    No: "#f87171",
    Maybe: "#facc15",
    Yes: "#38bdf8"
  };
  var piePalette = ["#38bdf8", "#f97316", "#22c55e", "#a855f7", "#facc15", "#f87171", "#14b8a6", "#ef8dff"];
  var sectionStyle = {
    background: palette.surface,
    borderRadius: "20px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: "0 8px 24px rgba(2, 6, 23, 0.08)"
  };
  var headingStyle = {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "16px",
    color: palette.text
  };
  var textStyle = {
    color: palette.text,
    lineHeight: 1.6
  };
  function formatPercent(value) {
    return `${value.toFixed ? value.toFixed(1) : value}%`;
  }
  function formatValue(value) {
    return value.toLocaleString();
  }
  function KeyInsights({ title, items, variant = "default" }) {
    const panelStyle = {
      ...sectionStyle,
      background: variant === "highlight" ? "linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(14, 165, 233, 0.05))" : variant === "alt" ? "linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(14, 165, 233, 0.05))" : sectionStyle.background,
      border: variant === "highlight" ? "1px solid rgba(56, 189, 248, 0.35)" : "1px solid rgba(15, 23, 42, 0.08)"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: panelStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { style: headingStyle, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { style: { ...textStyle, paddingLeft: "20px" }, children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { style: { marginBottom: "6px" }, children: item }, idx)) })
    ] });
  }
  function TabNavigation({ activeTab, onSelect }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "nav",
      {
        style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "24px"
        },
        children: TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => onSelect(tab.id),
              style: {
                padding: "12px 18px",
                borderRadius: "999px",
                border: isActive ? "1px solid rgba(56,189,248,0.4)" : "1px solid rgba(2,6,23,0.1)",
                cursor: "pointer",
                background: isActive ? palette.accent : "#f1f5f9",
                color: isActive ? "#0b1220" : palette.text,
                fontWeight: 700,
                letterSpacing: "0.02em",
                boxShadow: isActive ? "0 10px 20px rgba(56,189,248,0.25)" : "0 2px 6px rgba(2,6,23,0.06)",
                transition: "all 0.2s ease"
              },
              children: tab.label
            },
            tab.id
          );
        })
      }
    );
  }
  function PieChart({ title, data, size = 160, subtitle, footnote, legendPosition = "side" }) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    const segments = data.map((item, idx) => {
      const start = currentAngle;
      const angle = item.value / total * 360;
      currentAngle += angle;
      return { ...item, start, angle, color: item.color || piePalette[idx % piePalette.length] };
    });
    const gradient = segments.map((seg) => {
      const start = seg.start / 360 * 100;
      const end = (seg.start + seg.angle) / 360 * 100;
      return `${seg.color} ${start}% ${end}%`;
    }).join(", ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...sectionStyle, flex: 1, minWidth: "260px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: legendPosition === "bottom" ? "block" : "flex", alignItems: "center", gap: "16px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              width: size,
              height: size,
              aspectRatio: "1 / 1",
              flex: "0 0 auto",
              borderRadius: "50%",
              background: `conic-gradient(${gradient})`,
              position: "relative",
              margin: legendPosition === "bottom" ? "0 auto" : void 0
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                style: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: size * 0.55,
                  height: size * 0.55,
                  borderRadius: "50%",
                  background: palette.panel,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: palette.text,
                  fontWeight: 600
                },
                children: total
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { marginTop: legendPosition === "bottom" ? "12px" : 0 }, children: [
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { ...textStyle, marginBottom: "12px", color: palette.textMuted }, children: subtitle }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { style: { ...textStyle, listStyle: "none", padding: 0, display: legendPosition === "bottom" ? "flex" : "block", gap: "16px", flexWrap: "wrap", justifyContent: legendPosition === "bottom" ? "center" : "flex-start" }, children: segments.map((seg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { style: { display: "flex", alignItems: "center", marginBottom: "6px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                style: {
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderRadius: "4px",
                  background: seg.color,
                  marginRight: "10px"
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { flex: 1 }, children: seg.label }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { style: { color: palette.text }, children: formatPercent(seg.value / total * 100) })
          ] }, seg.label)) })
        ] })
      ] }),
      footnote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.textMuted, marginTop: "12px", fontSize: "13px" }, children: footnote })
    ] });
  }
  function HorizontalBarChart({ title, data, unit = "count", maxValue, colorScale, footnote }) {
    const computedMax = maxValue || Math.max(...data.map((d) => d.value));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: sectionStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: data.map((item, idx) => {
        const width = item.value / computedMax * 100;
        const barColor = colorScale ? colorScale(item, idx) : palette.accent;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", color: palette.textMuted, fontSize: "14px" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { maxWidth: "70%", color: palette.text }, children: item.label }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
              unit === "percent" ? formatPercent(item.value) : formatValue(item.value),
              item.context ? ` \u2022 ${item.context}` : ""
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { background: "#243044", height: "10px", borderRadius: "6px", marginTop: "6px", overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                width: `${width}%`,
                height: "100%",
                background: barColor,
                borderRadius: "6px"
              }
            }
          ) })
        ] }, item.label);
      }) }),
      footnote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.textMuted, marginTop: "12px", fontSize: "13px" }, children: footnote })
    ] });
  }
  function AutoBarChart({ title, data, colorScale, unit = "count", footnote }) {
    const items = data || [];
    if (items.length <= 5) {
      const vData = items.map((d) => ({ label: d.label, value: d.value, valueLabel: unit === "percent" ? formatPercent(d.value) : void 0, context: d.context }));
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalBarChart, { title, data: vData, colorScale, footnote });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizontalBarChart, { title, data: items, colorScale, unit, footnote });
  }
  function StackedBarGroup({ title, data, colorPalette, footnote }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: sectionStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: data.map((row) => {
        const total = Object.values(row.counts).reduce((sum, value) => sum + value, 0);
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
            color: palette.text
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { maxWidth: "70%" }, children: row.label }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { color: palette.textMuted }, children: total ? `${total}` : "n/a" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", borderRadius: "8px", overflow: "hidden", height: "18px", background: "#243044" }, children: Object.entries(row.counts).map(([key, value]) => {
            if (!value) return null;
            const percent = value / total * 100;
            const color = colorPalette[key] || palette.accent;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                style: {
                  width: `${percent}%`,
                  background: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0f172a",
                  fontSize: "12px",
                  fontWeight: 600
                },
                children: percent >= 12 ? `${percent.toFixed(0)}%` : ""
              },
              key
            );
          }) })
        ] }, row.label);
      }) }),
      footnote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.textMuted, marginTop: "12px", fontSize: "13px" }, children: footnote })
    ] });
  }
  function StackedColumnChart({ title, series, colorPalette, footnote }) {
    const legendKeys = Object.keys(colorPalette);
    const cols = Math.max(1, series.length);
    const grid = {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(160px, 1fr))`,
      gap: "24px"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: sectionStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...grid, alignItems: "end" }, children: series.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: "220px", display: "flex", alignItems: "flex-end", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
        display: "flex",
        flexDirection: "column-reverse",
        height: "100%",
        width: "80%",
        borderRadius: "14px",
        overflow: "hidden",
        background: "#e2e8f0"
      }, children: item.segments.map((segment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            height: `${segment.percent}%`,
            background: colorPalette[segment.label] || palette.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0f172a",
            fontSize: "12px",
            fontWeight: 600
          },
          children: segment.percent >= 12 ? `${segment.percent.toFixed(0)}%` : ""
        },
        segment.label
      )) }) }, item.label)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...grid, marginTop: "10px" }, children: series.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { textAlign: "center", alignSelf: "start", color: palette.text }, children: item.label }, item.label)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "16px", display: "flex", gap: "16px", flexWrap: "wrap", color: palette.textMuted, fontSize: "13px" }, children: legendKeys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: "12px", height: "12px", borderRadius: "4px", background: colorPalette[key] } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: key })
      ] }, key)) }),
      footnote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.textMuted, marginTop: "12px", fontSize: "13px" }, children: footnote })
    ] });
  }
  function VerticalBarChart({ title, data, colorScale, footnote, columns }) {
    const maxValue = Math.max(...data.map((d) => d.value));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: sectionStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
        display: columns ? "grid" : "flex",
        gridTemplateColumns: columns ? `repeat(${columns}, minmax(140px, 1fr))` : void 0,
        gap: "24px",
        alignItems: "flex-end",
        flexWrap: columns ? void 0 : "wrap"
      }, children: data.map((item, idx) => {
        const heightPercent = maxValue ? item.value / maxValue * 100 : 0;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: "1 1 140px", textAlign: "center", display: "grid", gridTemplateRows: "220px auto auto", rowGap: "8px" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: "220px", display: "flex", alignItems: "flex-end", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                width: "60%",
                height: `${heightPercent}%`,
                minHeight: item.value > 0 ? "4px" : "0",
                background: colorScale ? colorScale(item, idx) : palette.accent,
                borderRadius: "12px 12px 4px 4px",
                position: "relative"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { position: "absolute", top: "-24px", width: "100%", fontSize: "13px", color: palette.text }, children: item.valueLabel || formatPercent(item.value) })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.text, minHeight: "36px" }, children: item.label }),
          item.context && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.textMuted, fontSize: "12px", minHeight: "16px" }, children: item.context })
        ] }, item.label);
      }) }),
      footnote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.textMuted, marginTop: "12px", fontSize: "13px" }, children: footnote })
    ] });
  }
  function DualStackedBar({ title, left, right, colors }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1, minWidth: "320px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedBarGroup, { title: `${title} \u2022 Attitude`, data: left, colorPalette: colors }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1, minWidth: "320px" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedBarGroup, { title: `${title} \u2022 Behaviour`, data: right, colorPalette: adoptionColors }) })
    ] });
  }
  function TableCard({ title, columns, rows, formatters }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: sectionStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { style: { width: "100%", borderCollapse: "collapse", color: palette.text }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "th",
          {
            style: {
              textAlign: "left",
              padding: "12px 16px",
              background: "#243044",
              fontWeight: 600,
              color: palette.textMuted,
              borderBottom: "1px solid rgba(148, 163, 184, 0.2)"
            },
            children: col
          },
          col
        )) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { style: { background: idx % 2 === 0 ? "rgba(36, 48, 68, 0.35)" : "transparent" }, children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { style: { padding: "10px 16px", borderBottom: "1px solid rgba(148, 163, 184, 0.12)" }, children: formatters && formatters[col] ? formatters[col](row[col]) : typeof row[col] === "number" ? formatValue(row[col]) : row[col] }, col)) }, idx)) })
      ] }) })
    ] });
  }
  function StatBadge({ label, value, emphasis }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          padding: "16px",
          borderRadius: "16px",
          background: emphasis ? "rgba(56, 189, 248, 0.12)" : palette.surface,
          border: emphasis ? "1px solid rgba(56, 189, 248, 0.35)" : "1px solid rgba(2, 6, 23, 0.08)",
          flex: 1,
          minWidth: "180px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.textMuted, fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase" }, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.text, fontSize: "26px", fontWeight: 700 }, children: value })
        ]
      }
    );
  }
  function InsightGrid({ stats }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }, children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBadge, { ...stat }, stat.label)) });
  }
  function HistogramPair({ title, left, right }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: sectionStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px", marginBottom: "20px" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: "24px", flexWrap: "wrap" }, children: [left, right].map((series, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1, minWidth: "260px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", { style: { color: palette.textMuted, marginBottom: "12px" }, children: series.title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: "10px", alignItems: "flex-end" }, children: series.data.map((bin) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { textAlign: "center", flex: 1 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                height: `${bin.count * 6}px`,
                background: palette.accent,
                borderRadius: "6px 6px 2px 2px"
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { marginTop: "6px", color: palette.textMuted, fontSize: "12px" }, children: bin.bin }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.text, fontSize: "12px" }, children: bin.count })
        ] }, bin.bin)) })
      ] }, idx)) })
    ] });
  }
  function AssistanceChart({ data }) {
    const maxValue = Math.max(...data.map((item) => item.count));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: sectionStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: "Top Assistance Needs" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: "14px" }, children: data.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.text, marginBottom: "6px" }, children: item.label }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { background: "#243044", height: "12px", borderRadius: "6px", overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              width: `${item.count / maxValue * 100}%`,
              height: "100%",
              background: palette.accent,
              borderRadius: "6px"
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { color: palette.textMuted, fontSize: "12px", marginTop: "4px" }, children: [
          formatValue(item.count),
          " mentions"
        ] })
      ] }, item.label)) })
    ] });
  }
  function InsightList({ title, items }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: sectionStyle, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { style: { ...textStyle, paddingLeft: "20px" }, children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { style: { marginBottom: "8px" }, children: item }, idx)) })
    ] });
  }
  function RecommendationGroup({ horizon, items }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...sectionStyle, borderLeft: `4px solid ${palette.accent}` }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { style: { ...headingStyle, fontSize: "18px" }, children: horizon }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { style: { ...textStyle, paddingLeft: "20px" }, children: items.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { style: { marginBottom: "8px" }, children: item }, idx)) })
    ] });
  }
  function IieDashboard() {
    const [activeTab, setActiveTab] = (0, import_react.useState)(TABS[0].id);
    const totalRespondents = dashboard_data_default.respondents.totalRespondents;
    const academicCount = dashboard_data_default.respondents.academicCount;
    const nonAcademicCount = dashboard_data_default.respondents.nonAcademicCount;
    const executiveInsights = (0, import_react.useMemo)(() => [
      `331 staff members responded (62% academic, 38% non-academic), equating to a 12.4% institutional participation rate with adequate \xB15.4% margin of error.`,
      `${dashboard_data_default.overallAdoption.adoptionWork.percentages["Yes, I do"]}% currently use GenAI for work while ${dashboard_data_default.overallAdoption.adoptionPersonal.percentages["Yes, I do"]}% use it personally; 263 respondents rely on GenAI in both contexts.`,
      `ChatGPT adoption is near-universal (89% current users), with Copilot (47%) and Meta AI (50%) forming a strong productivity stack despite high ethical (67%) and reliability (49%) concerns.`,
      `Academic staff overwhelmingly endorse GenAI-enabled teaching (86% for curriculum design) but only 28% actively apply it to assessment workflows; confidence strongly predicts usage (r = 0.48).`,
      `Academic respondents report surging student usage (64% already see GenAI in personalised learning) alongside acute integrity concerns (81% worried about plagiarism) spurring assessment redesign.`,
      `Training (270 votes), subsidised licensing (253) and curated app access (251) top the assistance queue, signalling readiness for structured enablement programs.`,
      `Adoption remains uneven: academic staff show 86% active work usage versus 63% in non-academic teams, highlighting the priority for targeted operational onboarding.`
    ], []);
    const respondentInsights = [
      `Academic respondents (204) outnumber non-academic (127) aligning with staffing ratios; Varsity College (52%) and Rosebank College (29%) dominate the sample with Vega at 14%.`,
      `Academic participation clusters in Commerce (36%), Humanities (26%), ICT (20%) and Education (19%), providing balanced discipline coverage for strategic planning.`,
      `Tenure skews mid-career: 58% of academics and 74% of non-academic staff have \u226410 years at The IIE, indicating a cohort comfortable with change yet requiring structured support.`,
      `IT proficiency is solid: 50% of academics and 52% of non-academic staff self-rate as advanced, with a further 13% and 12% respectively confident enough to work in IT.`
    ];
    const adoptionInsights = [
      `${dashboard_data_default.overallAdoption.adoptionWork.percentages["Yes, I do"]}% already rely on GenAI for work and ${dashboard_data_default.overallAdoption.adoptionPersonal.percentages["Yes, I do"]}% for personal tasks; 85% of adopters straddle both contexts.`,
      `ChatGPT remains the anchor (89% current usage, 34 paid seats) with rapid entrants: Copilot (47% current), Meta AI via WhatsApp (50%) and DeepSeek (18%) highlight appetite for multi-model workflows.`,
      `Research (270 users) and writing (229) lead activities, yet only 97 respondents use GenAI for technical tasks while 33 refuse entirely\u2014signalling a skills and tooling gap.`,
      `Ethical risks top the concern list (67% agreement) despite strong belief in efficiency (80%) and automation (74%) benefits, underscoring the need for governance paired with enablement.`,
      `Advanced capabilities remain emergent: 25% currently use reasoning models and 23% engage AI agents, indicating headroom for structured experimentation.`
    ];
    const academicInsights = [
      `Support for GenAI-enabled teaching is robust (86% for curriculum/content) but operational uptake lags\u2014only 28% actively use it for assessment and 27% for documentation.`,
      `Two-thirds of academics flag reliability (66%) and ethics/accountability (66%) as primary risks, yet 70\u201386% credit GenAI with gains in preparation efficiency, richer materials and administrative relief.`,
      `Confidence fuels adoption: very confident academics average 2.45 active teaching use-cases versus 0.71 among unsure peers (r = 0.48, n = 204).`,
      `Only 11 academics use native AI code editors and disclosure is uneven (48 always disclose, 63 rarely/never), signalling policy and tooling opportunities.`
    ];
    const studentInsights = [
      `Academic staff endorse student access (70\u201382% support across scenarios) and report widespread learner adoption, notably 64% seeing GenAI for personalised learning and 57% for research planning.`,
      `Academic honesty anxieties are acute: 81% fear undetected plagiarism and 79% highlight assessment challenges, driving 36% to redesign evaluations with a further 17% mid-transition.`,
      `Perceived misuse clusters around uncredited copying (188 mentions) and homework completion (185), underscoring the need for transparent student policy and detection support.`,
      `AI agents are already entering classrooms\u201469% of academics believe students use them\u2014demanding proactive guidance and scenario planning.`
    ];
    const nonAcademicInsights = [
      `Operations & support teams are the most enthusiastic (82% approval) yet fewer than one-third currently apply GenAI to meetings, media or technical tasks\u2014revealing process integration gaps.`,
      `Over half of non-academic respondents use GenAI for research (53%) and writing (55%), mirroring core administrative workloads.`,
      `Ethical anxiety (65%) outweighs fears of job displacement (37%) or technical barriers (20%), reinforcing the need for governance and change management messaging.`,
      `Conversational AI (95 users) and search copilots (63 users) anchor toolkits, with 41 already exploring AI agents for workflow automation.`
    ];
    const comparativeInsights = [
      `IT proficiency correlates with adoption: work usage rises from 0% at low proficiency to 81% among highly proficient staff, though aggregate correlation remains modest (r = 0.11).`,
      `Teaching confidence is the strongest behavioural predictor\u2014usage breadth climbs steadily from 0.7 to 2.45 applications as confidence grows (r = 0.48, CI95 [0.36; 0.58]).`,
      `Academic staff outpace non-academic peers in active work usage (86% vs 63%, \u03C7\xB2=22.99, p<0.05) indicating an operational enablement gap.`,
      `Brand adoption variance is moderate (Cram\xE9r\u2019s V = 0.16) with Vega (82%) and Varsity College (81%) leading, while MSA (69%) and Rosebank (68%) lag.`
    ];
    const ideaInsights = {
      uses: {
        summary: [
          `277 respondents shared institutional use-cases: student support (29%), research & analytics (25%) and capability development (22%) dominate submissions.`,
          `Sentiment skews pragmatic (63% neutral, 22% positive) with repeat calls for GenAI-assisted assessment design, rubric drafting and content localisation.`
        ],
        highlights: [
          "Co-creating creative formative assessments and rubrics with GenAI to diversify evaluation formats.",
          "Leveraging GenAI for market intelligence and programme innovation insights across faculties."
        ]
      },
      jobIdeas: {
        summary: [
          `280 ideas to ease workload emphasise student support (18%), assessment automation (16%) and workflow streamlining (13%).`,
          `Respondents voice pain points (41% negative sentiment) around time-intensive marking, fragmented tooling and manual reporting.`
        ],
        highlights: [
          "Desire for an integrated assistant that links lesson planning, assessment design and personalised feedback dashboards.",
          "Requests for GenAI-driven change management communications and stakeholder engagement scripts."
        ]
      },
      agentIdeas: {
        summary: [
          `269 agent concepts target student services (21%), research support (15%) and academic integrity monitoring (14%).`,
          `Neutral sentiment (50%) masks clear solution themes\u2014admissions triage, knowledgebase chatbots and curriculum copilots.`
        ],
        highlights: [
          "Admission workflow agent that checks documentation, summarises applicant status and automates follow-up communications.",
          "24/7 policy-aware chatbot for assessment queries, escalating edge cases to academic leadership with context packs."
        ]
      }
    };
    const assistanceInsights = [
      `Training tops the list (270 votes) with strong demand for multi-modal enablement (workshops, webinars and on-demand content).`,
      `Budget support matters: 253 respondents need help covering premium licences, while 251 request an institutionally curated and managed app stack.`,
      `Enablement scaffolding\u2014resource libraries (232 mentions), technical troubleshooting (185) and peer communities (183)\u2014completes the support blueprint.`
    ];
    const recommendations = {
      short: [
        "Launch an institution-wide GenAI enablement sprint: curated training pathways, rapid-reference guides and a transparent approved-tools register.",
        "Codify disclosure, assessment and student-use guidelines paired with exemplar communications for academics and operations teams.",
        "Stand-up a GenAI helpdesk pod blending technical support and instructional design coaching to unblock early adopters."
      ],
      medium: [
        "Co-design faculty-specific playbooks that translate high-benefit use-cases (assessment redesign, admissions triage, research assistance) into reusable workflows.",
        "Negotiate enterprise licensing for priority tools (ChatGPT Teams, Copilot, Meta AI integrations) aligned to compliance and data governance requirements.",
        "Implement a confidence accelerator programme that pairs power users with cohort-based mentoring, targeting teams with low utilisation."
      ],
      long: [
        "Embed GenAI maturity metrics into strategic dashboards\u2014track adoption depth, quality outcomes and integrity indicators to steer continuous improvement.",
        "Build an innovation lab for reasoning models and agent ecosystems, emphasising cross-department pilots in student services, analytics and quality assurance.",
        "Integrate GenAI capability development into talent management, ensuring progression frameworks reward ethical, high-impact AI-enabled practice."
      ]
    };
    const coreStats = [
      { label: "Total Respondents", value: formatValue(totalRespondents), emphasis: true },
      { label: "Academic Staff", value: `${academicCount} (${(academicCount / totalRespondents * 100).toFixed(1)}%)` },
      { label: "Non-Academic Staff", value: `${nonAcademicCount} (${(nonAcademicCount / totalRespondents * 100).toFixed(1)}%)` },
      { label: "Dual-context GenAI Users", value: `${dashboard_data_default.overallAdoption.adoptionBoth.counts["Both work & personal"]} (${(dashboard_data_default.overallAdoption.adoptionBoth.counts["Both work & personal"] / dashboard_data_default.overallAdoption.adoptionBoth.total * 100).toFixed(1)}%)` }
    ];
    const renderTab = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      switch (activeTab) {
        case "executive":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightGrid, { stats: coreStats }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Strategic Headlines", items: executiveInsights, variant: "highlight" })
          ] });
        case "respondents": {
          const brandPieData = dashboard_data_default.respondents.brandCounts.map((item, idx) => ({
            label: item.label,
            value: item.count,
            color: piePalette[idx % piePalette.length]
          }));
          const groupPieData = dashboard_data_default.respondents.groupCounts.map((item, idx) => ({
            label: item.label,
            value: item.count,
            color: piePalette[idx % piePalette.length]
          }));
          const academicExp = dashboard_data_default.respondents.experience.academic;
          const nonExp = dashboard_data_default.respondents.experience.nonAcademic;
          const facultyData = dashboard_data_default.respondents.facultyCounts.map((item) => ({ label: item.label, value: item.count }));
          const tableColumns = ["Brand", "Academic", "Non-academic", "Total"];
          const percentColumns = ["Brand", "Academic", "Non-academic"];
          const countsRows = dashboard_data_default.respondents.brandGroupCounts.map((row) => ({
            Brand: row.brand,
            Academic: row.Academic,
            "Non-academic": row["Non-academic"],
            Total: row.Total
          }));
          const percRows = dashboard_data_default.respondents.brandGroupPercentages.map((row) => ({
            Brand: row.brand,
            Academic: `${row.Academic.toFixed(1)}%`,
            "Non-academic": `${row["Non-academic"].toFixed(1)}%`
          }));
          const itStackData = [
            {
              title: "Academic Staff",
              stats: dashboard_data_default.respondents.itProficiency.academic
            },
            {
              title: "Non-Academic Staff",
              stats: dashboard_data_default.respondents.itProficiency.nonAcademic
            }
          ];
          const sampleSummary = dashboard_data_default.respondents.sampleSummary;
          const sampleStats = [
            {
              label: "Overall participation",
              value: `${sampleSummary.overall.respondents}/${sampleSummary.overall.population} (${sampleSummary.overall.participationRate.toFixed(1)}%)`,
              emphasis: true
            },
            {
              label: "Academic response rate",
              value: `${sampleSummary.academic.respondents}/${sampleSummary.academic.population} (${sampleSummary.academic.participationRate.toFixed(1)}%)`
            },
            {
              label: "Non-academic response rate",
              value: `${sampleSummary.nonAcademic.respondents}/${sampleSummary.nonAcademic.population} (${sampleSummary.nonAcademic.participationRate.toFixed(1)}%)`
            }
          ];
          const nqfData = dashboard_data_default.respondents.nqfCounts.map((item) => ({ label: item.label, value: item.count }));
          const proficiencySeries = [
            {
              label: "Academic Staff",
              total: itStackData[0].stats.total,
              segments: IT_PROFICIENCY_ORDER.map((key) => ({
                label: key,
                percent: itStackData[0].stats.percentages[key] || 0
              }))
            },
            {
              label: "Non-Academic Staff",
              total: itStackData[1].stats.total,
              segments: IT_PROFICIENCY_ORDER.map((key) => ({
                label: key,
                percent: itStackData[1].stats.percentages[key] || 0
              }))
            }
          ];
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Key Findings", items: respondentInsights }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightGrid, { stats: sampleStats }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, { title: "Respondents by Brand", data: brandPieData, subtitle: "n = 331" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, { title: "Respondents by Role Group", data: groupPieData, subtitle: "Academic vs Non-academic" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCard, { title: "Brand \xD7 Role \u2022 Counts", columns: tableColumns, rows: countsRows }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCard, { title: "Brand \xD7 Role \u2022 % of Brand", columns: percentColumns, rows: percRows }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              AutoBarChart,
              {
                title: "Academic Faculties Represented",
                data: facultyData,
                colorScale: () => palette.accent,
                footnote: `n = ${dashboard_data_default.respondents.academicCount} academic staff (multiple selections allowed)`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              AutoBarChart,
              {
                title: "Academic NQF Levels",
                data: nqfData,
                colorScale: () => palette.accentAlt,
                footnote: `n = ${dashboard_data_default.respondents.academicCount} academic staff (multiple selections allowed)`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              HistogramPair,
              {
                title: "Tenure Distribution",
                left: {
                  title: "Academic Staff \u2022 years at IIE",
                  data: academicExp.iie
                },
                right: {
                  title: "Academic Staff \u2022 prior teaching experience",
                  data: academicExp.elsewhere
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              HistogramPair,
              {
                title: "Administrative Tenure",
                left: {
                  title: "Non-Academic Staff \u2022 years at IIE",
                  data: nonExp.iie
                },
                right: {
                  title: "Non-Academic Staff \u2022 prior experience",
                  data: nonExp.elsewhere
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedColumnChart,
              {
                title: "IT Proficiency (Share of Respondents)",
                series: proficiencySeries,
                colorPalette: proficiencyColors,
                footnote: "Percentages per bar sum to 100%"
              }
            )
          ] });
        }
        case "adoption": {
          const adoptionPieData = [
            {
              title: "GenAI for Work",
              data: Object.entries(dashboard_data_default.overallAdoption.adoptionWork.counts).map(([label, value], idx) => ({
                label,
                value,
                color: adoptionColors[label] || piePalette[idx % piePalette.length]
              })),
              subtitle: `n = ${dashboard_data_default.overallAdoption.adoptionWork.total}`
            },
            {
              title: "GenAI for Personal Use",
              data: Object.entries(dashboard_data_default.overallAdoption.adoptionPersonal.counts).map(([label, value], idx) => ({
                label,
                value,
                color: adoptionColors[label] || piePalette[idx % piePalette.length]
              })),
              subtitle: `n = ${dashboard_data_default.overallAdoption.adoptionPersonal.total}`
            },
            {
              title: "Dual-context Usage",
              data: Object.entries(dashboard_data_default.overallAdoption.adoptionBoth.counts).map(([label, value], idx) => ({
                label,
                value,
                color: piePalette[idx % piePalette.length]
              })),
              subtitle: `n = ${dashboard_data_default.overallAdoption.adoptionBoth.total}`
            }
          ];
          const activitiesData = dashboard_data_default.overallAdoption.activities.map((item) => ({
            label: item.label,
            value: item.used,
            context: `${item.never} would never \u2022 ${item.notYet} not yet`
          }));
          const activitiesTotal = ((_a = dashboard_data_default.overallAdoption.activities[0]) == null ? void 0 : _a.total) || 0;
          const toolBarData = [...dashboard_data_default.overallAdoption.topTools].sort((a, b) => a.used - b.used).map((item) => ({
            label: item.tool,
            value: item.used,
            context: `${item.current} current`
          }));
          const topToolBreakdown = dashboard_data_default.overallAdoption.topCurrentBreakdown.map((item, idx) => ({
            title: item.tool,
            data: [
              { label: "Free Tier", value: item.currentFree, color: palette.accent },
              { label: "Paid Tier", value: item.currentPaid, color: palette.accentAlt }
            ],
            subtitle: `${item.currentTotal} current users`
          }));
          const metaSeries = dashboard_data_default.overallAdoption.metaUsage.map((item) => ({
            label: item.label,
            total: item.total,
            segments: META_SCALE.map((option) => ({
              label: option,
              percent: item.total ? (item.counts[option] || 0) / item.total * 100 : 0
            }))
          }));
          const labelShort = {
            "No, not yet": "Not yet",
            "Yes, I do": "Yes",
            "I am thinking about it": "Thinking",
            "Yes, but no longer": "Yes (past)",
            "No & I will never (on principle)": "Never"
          };
          const reasoningCounts = dashboard_data_default.overallAdoption.reasoningModels;
          const reasoningData = Object.entries(reasoningCounts.counts).map(([label, value]) => ({
            label: labelShort[label] || label,
            value,
            valueLabel: `${value}`
          }));
          const agentsCounts = dashboard_data_default.overallAdoption.aiAgents;
          const agentData = Object.entries(agentsCounts.counts).map(([label, value]) => ({
            label: labelShort[label] || label,
            value,
            valueLabel: `${value}`
          }));
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Key Findings", items: adoptionInsights }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: adoptionPieData.map((pie) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, { ...pie }, pie.title)) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              HorizontalBarChart,
              {
                title: "Top GenAI Tools \u2022 Ever Used",
                data: toolBarData,
                colorScale: (item) => item.label === "ChatGPT" ? palette.accent : palette.accentAlt,
                footnote: `n = ${dashboard_data_default.respondents.totalRespondents} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }, children: topToolBreakdown.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, { title: item.title, data: item.data, subtitle: item.subtitle, size: 160, legendPosition: "bottom" }, item.title)) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              AutoBarChart,
              {
                title: "GenAI Activities \u2022 Current or Past Users",
                data: activitiesData,
                colorScale: () => palette.accent,
                footnote: `n = ${activitiesTotal} respondents (multiple selections allowed)`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedColumnChart,
              {
                title: "Concerns about GenAI",
                series: dashboard_data_default.overallAdoption.concerns.map((row) => ({ label: row.label, total: row.total, segments: Object.entries(row.percentages).map(([k, v]) => ({ label: k, percent: v })) })),
                colorPalette: likertColors,
                footnote: `n = ${((_b = dashboard_data_default.overallAdoption.concerns[0]) == null ? void 0 : _b.total) || 0} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedColumnChart,
              {
                title: "Perceived Benefits of GenAI",
                series: dashboard_data_default.overallAdoption.benefits.map((row) => ({ label: row.label, total: row.total, segments: Object.entries(row.percentages).map(([k, v]) => ({ label: k, percent: v })) })),
                colorPalette: likertColors,
                footnote: `n = ${((_c = dashboard_data_default.overallAdoption.benefits[0]) == null ? void 0 : _c.total) || 0} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedColumnChart,
              {
                title: "Appetite for Meta AI Surfaces",
                series: metaSeries,
                colorPalette: metaColors,
                footnote: "Percentages per bar sum to 100%"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                VerticalBarChart,
                {
                  title: "AI Reasoning Models Adoption",
                  data: reasoningData,
                  colorScale: () => palette.accent,
                  footnote: `n = ${reasoningCounts.total} respondents \u2022 Legend: Not yet, Yes, Thinking, Yes (past), Never`,
                  columns: 5
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                VerticalBarChart,
                {
                  title: "AI Agents Adoption",
                  data: agentData,
                  colorScale: () => palette.accentAlt,
                  footnote: `n = ${agentsCounts.total} respondents \u2022 Legend: Not yet, Yes, Thinking, Yes (past), Never`,
                  columns: 5
                }
              )
            ] })
          ] });
        }
        case "academic":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Key Findings", items: academicInsights }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DualStackedBar,
              {
                title: "Teaching Applications",
                left: dashboard_data_default.academicStaff.attitudes,
                right: dashboard_data_default.academicStaff.behaviours,
                colors: attitudeColors
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedColumnChart,
              {
                title: "Academic Concerns",
                series: dashboard_data_default.academicStaff.concerns.map((row) => ({ label: row.label, total: row.total, segments: Object.entries(row.percentages).map(([k, v]) => ({ label: k, percent: v })) })),
                colorPalette: likertColors,
                footnote: `n = ${((_d = dashboard_data_default.academicStaff.concerns[0]) == null ? void 0 : _d.total) || 0} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedColumnChart,
              {
                title: "Academic Benefits",
                series: dashboard_data_default.academicStaff.benefits.map((row) => ({ label: row.label, total: row.total, segments: Object.entries(row.percentages).map(([k, v]) => ({ label: k, percent: v })) })),
                colorPalette: likertColors,
                footnote: `n = ${((_e = dashboard_data_default.academicStaff.benefits[0]) == null ? void 0 : _e.total) || 0} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              HorizontalBarChart,
              {
                title: "GenAI Tool Types in Teaching",
                data: dashboard_data_default.academicStaff.toolTypes.map((item) => ({
                  label: item.label,
                  value: item.used,
                  context: `${item.never} would never`
                })),
                colorScale: () => palette.accent,
                footnote: `n \u2248 ${((_f = dashboard_data_default.academicStaff.attitudes[0]) == null ? void 0 : _f.total) || 0} academics (multiple selections allowed)`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "18px", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                PieChart,
                {
                  title: "AI Code Editor Usage",
                  data: Object.entries(dashboard_data_default.academicStaff.codeEditors.counts).map(([label, value], idx) => ({
                    label,
                    value,
                    color: piePalette[idx % piePalette.length]
                  })),
                  subtitle: `n = ${dashboard_data_default.academicStaff.codeEditors.total}`,
                  size: 150
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                PieChart,
                {
                  title: "Disclosure to Students",
                  data: Object.entries(dashboard_data_default.academicStaff.disclosure.counts).map(([label, value], idx) => ({
                    label,
                    value,
                    color: piePalette[idx % piePalette.length]
                  })),
                  subtitle: `n = ${dashboard_data_default.academicStaff.disclosure.total}`,
                  size: 150
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                PieChart,
                {
                  title: "Confidence Levels",
                  data: Object.entries(dashboard_data_default.academicStaff.confidence.counts).map(([label, value], idx) => ({
                    label,
                    value,
                    color: piePalette[idx % piePalette.length]
                  })),
                  subtitle: `n = ${dashboard_data_default.academicStaff.confidence.total}`,
                  size: 150
                }
              )
            ] })
          ] });
        case "students":
          const studentAttitudeSeries = dashboard_data_default.students.attitudes.map((item) => ({
            label: item.label,
            total: item.total,
            segments: Object.entries(item.percentages).map(([label, percent]) => ({ label, percent }))
          }));
          const studentBehaviourSeries = dashboard_data_default.students.behaviours.map((item) => ({
            label: item.label,
            total: item.total,
            segments: Object.entries(item.percentages).map(([label, percent]) => ({ label, percent }))
          }));
          const misuseTotal = ((_g = dashboard_data_default.students.abuseConcerns[0]) == null ? void 0 : _g.total) || 0;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Key Findings", items: studentInsights }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                StackedColumnChart,
                {
                  title: "Student Access Policy (Attitude)",
                  series: studentAttitudeSeries,
                  colorPalette: attitudeColors,
                  footnote: `n = ${((_h = dashboard_data_default.students.attitudes[0]) == null ? void 0 : _h.total) || 0} academic respondents (per question)`
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                StackedColumnChart,
                {
                  title: "Observed Student Usage (Behaviour)",
                  series: studentBehaviourSeries,
                  colorPalette: adoptionColors,
                  footnote: `n = ${((_i = dashboard_data_default.students.behaviours[0]) == null ? void 0 : _i.total) || 0} academic respondents (per question)`
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedBarGroup,
              {
                title: "Academic Concerns for Student Usage",
                data: dashboard_data_default.students.concerns,
                colorPalette: likertColors,
                footnote: `n = ${((_j = dashboard_data_default.students.concerns[0]) == null ? void 0 : _j.total) || 0} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedBarGroup,
              {
                title: "Perceived Benefits for Students",
                data: dashboard_data_default.students.benefits,
                colorPalette: likertColors,
                footnote: `n = ${((_k = dashboard_data_default.students.benefits[0]) == null ? void 0 : _k.total) || 0} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              AutoBarChart,
              {
                title: "Tools Students Are Using (per Academic Perception)",
                data: dashboard_data_default.students.tools.map((item) => ({ label: item.label, value: item.count })),
                colorScale: () => palette.accent,
                footnote: "Counts reflect number of academics reporting student use; multiple tools per respondent allowed"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                StackedBarGroup,
                {
                  title: "Concerns about Student Misuse",
                  data: dashboard_data_default.students.abuseConcerns,
                  colorPalette: likertColors,
                  footnote: `n = ${misuseTotal} respondents`
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                AutoBarChart,
                {
                  title: "Specific Abuse Patterns",
                  data: dashboard_data_default.students.abuseTypes.map((item) => ({ label: item.label, value: item.count })),
                  colorScale: () => palette.accentAlt,
                  footnote: "Counts indicate academics suspecting each misuse (multiple selections allowed)"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                PieChart,
                {
                  title: "Student AI Agent Adoption",
                  data: Object.entries(dashboard_data_default.students.agents.counts).map(([label, value], idx) => ({
                    label,
                    value,
                    color: piePalette[idx % piePalette.length]
                  })),
                  subtitle: `n = ${dashboard_data_default.students.agents.total}`,
                  size: 160
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                PieChart,
                {
                  title: "Assessment Redesign",
                  data: Object.entries(dashboard_data_default.students.assessment.counts).map(([label, value], idx) => ({
                    label,
                    value,
                    color: piePalette[idx % piePalette.length]
                  })),
                  subtitle: `n = ${dashboard_data_default.students.assessment.total}`,
                  size: 160
                }
              )
            ] })
          ] });
        case "nonAcademic":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Key Findings", items: nonAcademicInsights }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DualStackedBar,
              {
                title: "Operational Applications",
                left: dashboard_data_default.nonAcademicStaff.attitudes,
                right: dashboard_data_default.nonAcademicStaff.behaviours,
                colors: attitudeColors
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedBarGroup,
              {
                title: "Operational Concerns",
                data: dashboard_data_default.nonAcademicStaff.concerns,
                colorPalette: likertColors,
                footnote: `n = ${((_l = dashboard_data_default.nonAcademicStaff.concerns[0]) == null ? void 0 : _l.total) || 0} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              StackedBarGroup,
              {
                title: "Operational Benefits",
                data: dashboard_data_default.nonAcademicStaff.benefits,
                colorPalette: likertColors,
                footnote: `n = ${((_m = dashboard_data_default.nonAcademicStaff.benefits[0]) == null ? void 0 : _m.total) || 0} respondents`
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              AutoBarChart,
              {
                title: "Tools Supporting Administration",
                data: dashboard_data_default.nonAcademicStaff.toolTypes.map((item) => ({
                  label: item.label,
                  value: item.used,
                  context: `${item.never} would never`
                })),
                colorScale: () => palette.accent,
                footnote: `n \u2248 ${((_n = dashboard_data_default.nonAcademicStaff.behaviours[0]) == null ? void 0 : _n.total) || 0} staff (multiple selections allowed)`
              }
            )
          ] });
        case "comparative": {
          const itBars = dashboard_data_default.comparative.itProficiency.byLevel.map((item) => ({
            label: item.level,
            value: item.adoptionRate,
            context: `${item.adopters}/${item.total}`
          }));
          const confidenceStats = dashboard_data_default.comparative.confidenceTeaching.byLevel;
          const confidenceBars = Object.entries(confidenceStats).map(([label, stats]) => ({
            label,
            value: stats.averageUsage,
            context: `${stats.respondents} respondents`
          }));
          const brandRates = dashboard_data_default.comparative.brandAdoption.rates.map((item) => ({
            label: item.brand,
            value: item.adoptionRate,
            context: `${item.currentYes}/${item.total}`
          }));
          const groupData = dashboard_data_default.comparative.groupAdoption;
          const groupBars = [
            { label: "Academic Staff", value: groupData.academic.rate, context: `${groupData.academic.yes}/${groupData.academic.yes + groupData.academic.other}` },
            { label: "Non-Academic Staff", value: groupData.nonAcademic.rate, context: `${groupData.nonAcademic.yes}/${groupData.nonAcademic.yes + groupData.nonAcademic.other}` }
          ];
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Key Insights", items: comparativeInsights }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              HorizontalBarChart,
              {
                title: "Work Adoption by IT Proficiency",
                data: itBars,
                unit: "percent",
                colorScale: (item) => item.value >= 80 ? palette.positive : palette.accent
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              HorizontalBarChart,
              {
                title: "Average Teaching Use-Cases by Confidence Level",
                data: confidenceBars,
                unit: "count",
                colorScale: (item) => item.label.includes("confident") ? palette.positive : palette.accentAlt
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              HorizontalBarChart,
              {
                title: "Brand-level Work Adoption",
                data: brandRates,
                unit: "percent",
                colorScale: () => palette.accent
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              HorizontalBarChart,
              {
                title: "Work Adoption by Role Group",
                data: groupBars,
                unit: "percent",
                colorScale: (item) => item.label.startsWith("Academic") ? palette.accent : palette.accentAlt
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              InsightList,
              {
                title: "Statistical Notes",
                items: [
                  `IT proficiency correlation overall r = ${dashboard_data_default.comparative.itProficiency.correlation.overall.r} (n = ${dashboard_data_default.comparative.itProficiency.correlation.overall.n}), indicating modest positive association.`,
                  `Confidence vs teaching usage r = ${dashboard_data_default.comparative.confidenceTeaching.correlation.r} with 95% CI ${dashboard_data_default.comparative.confidenceTeaching.correlation.ci95.join(" to ")}.`,
                  `Brand adoption chi-square = ${dashboard_data_default.comparative.brandAdoption.chiSquare.chiSquare} (df=${dashboard_data_default.comparative.brandAdoption.chiSquare.df}), effect size Cram\xE9r\u2019s V = ${dashboard_data_default.comparative.brandAdoption.effectSize}.`,
                  `Role-group adoption difference chi-square = ${dashboard_data_default.comparative.groupAdoption.chiSquare.chiSquare} (df=${dashboard_data_default.comparative.groupAdoption.chiSquare.df}), effect size Cram\xE9r\u2019s V = ${dashboard_data_default.comparative.groupAdoption.effectSize}.`
                ]
              }
            )
          ] });
        }
        case "ideas":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Key Insights", items: [...ideaInsights.uses.summary, ...ideaInsights.jobIdeas.summary, ...ideaInsights.agentIdeas.summary] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Supported Uses (Q7.1)", items: ideaInsights.uses.summary.concat(["Highlighted ideas:", ...ideaInsights.uses.highlights]), variant: "highlight" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Ideas to Ease Work (Q7.2)", items: ideaInsights.jobIdeas.summary.concat(["Highlighted ideas:", ...ideaInsights.jobIdeas.highlights]), variant: "alt" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "AI Agent Concepts (Q7.3)", items: ideaInsights.agentIdeas.summary.concat(["Highlighted ideas:", ...ideaInsights.agentIdeas.highlights]), variant: "alt" })
          ] });
        case "assistance":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyInsights, { title: "Key Insights", items: assistanceInsights }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssistanceChart, { data: dashboard_data_default.assistance.counts })
          ] });
        case "recommendations":
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecommendationGroup, { horizon: "Short-term (0\u20133 months)", items: recommendations.short }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecommendationGroup, { horizon: "Medium-term (3\u20139 months)", items: recommendations.medium }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecommendationGroup, { horizon: "Long-term (9\u201318 months)", items: recommendations.long })
          ] });
        default:
          return null;
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          minHeight: "100vh",
          background: palette.background,
          padding: "32px",
          fontFamily: '"Inter", "Segoe UI", sans-serif',
          color: palette.text
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "header",
            {
              style: {
                marginBottom: "32px",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "flex-start"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { maxWidth: "780px" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: palette.accent, letterSpacing: "0.12em", fontSize: "12px", textTransform: "uppercase", marginBottom: "8px" }, children: "Third Analysis of the IIE GenAI Survey Data" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { style: { fontSize: "36px", fontWeight: 700, marginBottom: "12px" }, children: "GenAI Strategy Intelligence Dashboard" }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { ...textStyle, color: palette.textMuted }, children: "Interactive executive dashboard for The Institute of Advanced Education synthesising 331 staff responses (\xB15.4% MoE @95% confidence) to steer GenAI strategy and implementation decisions." })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "a",
                  {
                    href: "details.html",
                    style: linkButtonStyle,
                    rel: "noopener noreferrer",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Data Explorer" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", style: { fontSize: "20px", lineHeight: 1 }, children: "\u2197" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabNavigation, { activeTab, onSelect: setActiveTab }),
          renderTab()
        ]
      }
    );
  }
  var IieDashboard_default = IieDashboard;

  // main.jsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var container = document.getElementById("root");
  var root = (0, import_client.createRoot)(container);
  root.render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IieDashboard_default, {}));
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
