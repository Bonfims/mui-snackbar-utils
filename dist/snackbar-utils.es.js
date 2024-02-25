import Ei, { jsx as k, jsxs as it } from "react/jsx-runtime";
import * as O from "react";
import be, { Children as xi, isValidElement as Mt, cloneElement as Nt } from "react";
import { CacheProvider as Ti, Global as Oi, ThemeContext as ro, css as Si, keyframes as qt } from "@emotion/react";
import $i from "@emotion/styled";
import Rt from "react-dom";
const oo = be.createContext({
  /**
   * Envia uma notificação via snack bar na parte inferior da tela. 
   * @param {string} message Mensagem do dialogo
   * @param {string} type Tipo da mensagem que pode ser `error`, `info`, `success`, `warning` e `default`
   * @param {options} options Dados adicionais
   * @returns {void}
   */
  setSnackbar: (e, t, n) => console.error("Snackbar context not initialized", e, t),
  initialized: !1
});
function ne(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, x.apply(this, arguments);
}
function Ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function je(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Tn = { exports: {} }, _t = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Ri() {
  if (ir)
    return K;
  ir = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function C(g) {
    if (typeof g == "object" && g !== null) {
      var P = g.$$typeof;
      switch (P) {
        case t:
          switch (g = g.type, g) {
            case u:
            case l:
            case r:
            case i:
            case o:
            case h:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case d:
                case y:
                case v:
                case a:
                  return g;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function T(g) {
    return C(g) === l;
  }
  return K.AsyncMode = u, K.ConcurrentMode = l, K.ContextConsumer = c, K.ContextProvider = a, K.Element = t, K.ForwardRef = d, K.Fragment = r, K.Lazy = y, K.Memo = v, K.Portal = n, K.Profiler = i, K.StrictMode = o, K.Suspense = h, K.isAsyncMode = function(g) {
    return T(g) || C(g) === u;
  }, K.isConcurrentMode = T, K.isContextConsumer = function(g) {
    return C(g) === c;
  }, K.isContextProvider = function(g) {
    return C(g) === a;
  }, K.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, K.isForwardRef = function(g) {
    return C(g) === d;
  }, K.isFragment = function(g) {
    return C(g) === r;
  }, K.isLazy = function(g) {
    return C(g) === y;
  }, K.isMemo = function(g) {
    return C(g) === v;
  }, K.isPortal = function(g) {
    return C(g) === n;
  }, K.isProfiler = function(g) {
    return C(g) === i;
  }, K.isStrictMode = function(g) {
    return C(g) === o;
  }, K.isSuspense = function(g) {
    return C(g) === h;
  }, K.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === l || g === i || g === o || g === h || g === p || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === a || g.$$typeof === c || g.$$typeof === d || g.$$typeof === m || g.$$typeof === b || g.$$typeof === $ || g.$$typeof === f);
  }, K.typeOf = C, K;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function _i() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function C(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === l || S === i || S === o || S === h || S === p || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === v || S.$$typeof === a || S.$$typeof === c || S.$$typeof === d || S.$$typeof === m || S.$$typeof === b || S.$$typeof === $ || S.$$typeof === f);
    }
    function T(S) {
      if (typeof S == "object" && S !== null) {
        var Ee = S.$$typeof;
        switch (Ee) {
          case t:
            var w = S.type;
            switch (w) {
              case u:
              case l:
              case r:
              case i:
              case o:
              case h:
                return w;
              default:
                var ze = w && w.$$typeof;
                switch (ze) {
                  case c:
                  case d:
                  case y:
                  case v:
                  case a:
                    return ze;
                  default:
                    return Ee;
                }
            }
          case n:
            return Ee;
        }
      }
    }
    var g = u, P = l, _ = c, Z = a, fe = t, Q = d, W = r, q = y, re = v, te = n, V = i, F = o, ee = h, oe = !1;
    function he(S) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(S) || T(S) === u;
    }
    function E(S) {
      return T(S) === l;
    }
    function R(S) {
      return T(S) === c;
    }
    function L(S) {
      return T(S) === a;
    }
    function I(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function M(S) {
      return T(S) === d;
    }
    function z(S) {
      return T(S) === r;
    }
    function N(S) {
      return T(S) === y;
    }
    function j(S) {
      return T(S) === v;
    }
    function B(S) {
      return T(S) === n;
    }
    function A(S) {
      return T(S) === i;
    }
    function U(S) {
      return T(S) === o;
    }
    function me(S) {
      return T(S) === h;
    }
    G.AsyncMode = g, G.ConcurrentMode = P, G.ContextConsumer = _, G.ContextProvider = Z, G.Element = fe, G.ForwardRef = Q, G.Fragment = W, G.Lazy = q, G.Memo = re, G.Portal = te, G.Profiler = V, G.StrictMode = F, G.Suspense = ee, G.isAsyncMode = he, G.isConcurrentMode = E, G.isContextConsumer = R, G.isContextProvider = L, G.isElement = I, G.isForwardRef = M, G.isFragment = z, G.isLazy = N, G.isMemo = j, G.isPortal = B, G.isProfiler = A, G.isStrictMode = U, G.isSuspense = me, G.isValidElementType = C, G.typeOf = T;
  }()), G;
}
var ar;
function io() {
  return ar || (ar = 1, process.env.NODE_ENV === "production" ? _t.exports = Ri() : _t.exports = _i()), _t.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ln, cr;
function wi() {
  if (cr)
    return ln;
  cr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ln = o() ? Object.assign : function(i, a) {
    for (var c, u = r(i), l, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var h in c)
        t.call(c, h) && (u[h] = c[h]);
      if (e) {
        l = e(c);
        for (var p = 0; p < l.length; p++)
          n.call(c, l[p]) && (u[l[p]] = c[l[p]]);
      }
    }
    return u;
  }, ln;
}
var fn, ur;
function In() {
  if (ur)
    return fn;
  ur = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fn = e, fn;
}
var dn, lr;
function so() {
  return lr || (lr = 1, dn = Function.call.bind(Object.prototype.hasOwnProperty)), dn;
}
var pn, fr;
function Pi() {
  if (fr)
    return pn;
  fr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = In(), n = {}, r = so();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var h;
          try {
            if (typeof i[d] != "function") {
              var p = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            h = i[d](a, d, u, c, null, t);
          } catch (y) {
            h = y;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var v = l ? l() : "";
            e(
              "Failed " + c + " type: " + h.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, pn = o, pn;
}
var hn, dr;
function Mi() {
  if (dr)
    return hn;
  dr = 1;
  var e = io(), t = wi(), n = In(), r = so(), o = Pi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return hn = function(c, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(E) {
      var R = E && (l && E[l] || E[d]);
      if (typeof R == "function")
        return R;
    }
    var p = "<<anonymous>>", v = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: $(),
      arrayOf: C,
      element: T(),
      elementType: g(),
      instanceOf: P,
      node: Q(),
      objectOf: Z,
      oneOf: _,
      oneOfType: fe,
      shape: q,
      exact: re
    };
    function y(E, R) {
      return E === R ? E !== 0 || 1 / E === 1 / R : E !== E && R !== R;
    }
    function f(E, R) {
      this.message = E, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function m(E) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, L = 0;
      function I(z, N, j, B, A, U, me) {
        if (B = B || p, U = U || j, me !== n) {
          if (u) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = B + ":" + j;
            !R[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[Ee] = !0, L++);
          }
        }
        return N[j] == null ? z ? N[j] === null ? new f("The " + A + " `" + U + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new f("The " + A + " `" + U + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : E(N, j, B, A, U);
      }
      var M = I.bind(null, !1);
      return M.isRequired = I.bind(null, !0), M;
    }
    function b(E) {
      function R(L, I, M, z, N, j) {
        var B = L[I], A = F(B);
        if (A !== E) {
          var U = ee(B);
          return new f(
            "Invalid " + z + " `" + N + "` of type " + ("`" + U + "` supplied to `" + M + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return m(R);
    }
    function $() {
      return m(a);
    }
    function C(E) {
      function R(L, I, M, z, N) {
        if (typeof E != "function")
          return new f("Property `" + N + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var j = L[I];
        if (!Array.isArray(j)) {
          var B = F(j);
          return new f("Invalid " + z + " `" + N + "` of type " + ("`" + B + "` supplied to `" + M + "`, expected an array."));
        }
        for (var A = 0; A < j.length; A++) {
          var U = E(j, A, M, z, N + "[" + A + "]", n);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return m(R);
    }
    function T() {
      function E(R, L, I, M, z) {
        var N = R[L];
        if (!c(N)) {
          var j = F(N);
          return new f("Invalid " + M + " `" + z + "` of type " + ("`" + j + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(E);
    }
    function g() {
      function E(R, L, I, M, z) {
        var N = R[L];
        if (!e.isValidElementType(N)) {
          var j = F(N);
          return new f("Invalid " + M + " `" + z + "` of type " + ("`" + j + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(E);
    }
    function P(E) {
      function R(L, I, M, z, N) {
        if (!(L[I] instanceof E)) {
          var j = E.name || p, B = he(L[I]);
          return new f("Invalid " + z + " `" + N + "` of type " + ("`" + B + "` supplied to `" + M + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return m(R);
    }
    function _(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function R(L, I, M, z, N) {
        for (var j = L[I], B = 0; B < E.length; B++)
          if (y(j, E[B]))
            return null;
        var A = JSON.stringify(E, function(me, S) {
          var Ee = ee(S);
          return Ee === "symbol" ? String(S) : S;
        });
        return new f("Invalid " + z + " `" + N + "` of value `" + String(j) + "` " + ("supplied to `" + M + "`, expected one of " + A + "."));
      }
      return m(R);
    }
    function Z(E) {
      function R(L, I, M, z, N) {
        if (typeof E != "function")
          return new f("Property `" + N + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var j = L[I], B = F(j);
        if (B !== "object")
          return new f("Invalid " + z + " `" + N + "` of type " + ("`" + B + "` supplied to `" + M + "`, expected an object."));
        for (var A in j)
          if (r(j, A)) {
            var U = E(j, A, M, z, N + "." + A, n);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return m(R);
    }
    function fe(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var R = 0; R < E.length; R++) {
        var L = E[R];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(L) + " at index " + R + "."
          ), a;
      }
      function I(M, z, N, j, B) {
        for (var A = [], U = 0; U < E.length; U++) {
          var me = E[U], S = me(M, z, N, j, B, n);
          if (S == null)
            return null;
          S.data && r(S.data, "expectedType") && A.push(S.data.expectedType);
        }
        var Ee = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new f("Invalid " + j + " `" + B + "` supplied to " + ("`" + N + "`" + Ee + "."));
      }
      return m(I);
    }
    function Q() {
      function E(R, L, I, M, z) {
        return te(R[L]) ? null : new f("Invalid " + M + " `" + z + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return m(E);
    }
    function W(E, R, L, I, M) {
      return new f(
        (E || "React class") + ": " + R + " type `" + L + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function q(E) {
      function R(L, I, M, z, N) {
        var j = L[I], B = F(j);
        if (B !== "object")
          return new f("Invalid " + z + " `" + N + "` of type `" + B + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var A in E) {
          var U = E[A];
          if (typeof U != "function")
            return W(M, z, N, A, ee(U));
          var me = U(j, A, M, z, N + "." + A, n);
          if (me)
            return me;
        }
        return null;
      }
      return m(R);
    }
    function re(E) {
      function R(L, I, M, z, N) {
        var j = L[I], B = F(j);
        if (B !== "object")
          return new f("Invalid " + z + " `" + N + "` of type `" + B + "` " + ("supplied to `" + M + "`, expected `object`."));
        var A = t({}, L[I], E);
        for (var U in A) {
          var me = E[U];
          if (r(E, U) && typeof me != "function")
            return W(M, z, N, U, ee(me));
          if (!me)
            return new f(
              "Invalid " + z + " `" + N + "` key `" + U + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(L[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var S = me(j, U, M, z, N + "." + U, n);
          if (S)
            return S;
        }
        return null;
      }
      return m(R);
    }
    function te(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(te);
          if (E === null || c(E))
            return !0;
          var R = h(E);
          if (R) {
            var L = R.call(E), I;
            if (R !== E.entries) {
              for (; !(I = L.next()).done; )
                if (!te(I.value))
                  return !1;
            } else
              for (; !(I = L.next()).done; ) {
                var M = I.value;
                if (M && !te(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function V(E, R) {
      return E === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function F(E) {
      var R = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : V(R, E) ? "symbol" : R;
    }
    function ee(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var R = F(E);
      if (R === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function oe(E) {
      var R = ee(E);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function he(E) {
      return !E.constructor || !E.constructor.name ? p : E.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, hn;
}
var mn, pr;
function Ni() {
  if (pr)
    return mn;
  pr = 1;
  var e = In();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, mn = function() {
    function r(a, c, u, l, d, h) {
      if (h !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, mn;
}
if (process.env.NODE_ENV !== "production") {
  var ki = io(), Ai = !0;
  Tn.exports = Mi()(ki.isElement, Ai);
} else
  Tn.exports = Ni()();
var Ii = Tn.exports;
const s = /* @__PURE__ */ Ci(Ii);
function ji(e) {
  return typeof e == "string";
}
function ao(e, t, n) {
  return e === void 0 || ji(e) ? t : x({}, t, {
    ownerState: x({}, t.ownerState, n)
  });
}
function On(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function co(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function bt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Ve(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function uo(e) {
  if (!Ve(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = uo(e[n]);
  }), t;
}
function Me(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? x({}, e) : e;
  return Ve(e) && Ve(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Ve(t[o]) && o in e && Ve(e[o]) ? r[o] = Me(e[o], t[o], n) : n.clone ? r[o] = Ve(t[o]) ? uo(t[o]) : t[o] : r[o] = t[o]);
  }), r;
}
const Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me,
  isPlainObject: Ve
}, Symbol.toStringTag, { value: "Module" }));
function Li(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function lo(e, t, n, r, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const u = i.type;
  return typeof u == "function" && !Li(u) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const fo = bt(s.element, lo);
fo.isRequired = bt(s.element.isRequired, lo);
const po = fo;
function zi(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Vi(e, t, n, r, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !zi(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Bi = bt(s.elementType, Vi), Fi = "exact-prop: ​";
function Ui(e) {
  return process.env.NODE_ENV === "production" ? e : x({}, e, {
    [Fi]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Ye(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" }));
var Sn = { exports: {} }, X = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function qi() {
  if (hr)
    return X;
  hr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function f(m) {
    if (typeof m == "object" && m !== null) {
      var b = m.$$typeof;
      switch (b) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case l:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case a:
                case u:
                case p:
                case h:
                case i:
                  return m;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return X.ContextConsumer = a, X.ContextProvider = i, X.Element = e, X.ForwardRef = u, X.Fragment = n, X.Lazy = p, X.Memo = h, X.Portal = t, X.Profiler = o, X.StrictMode = r, X.Suspense = l, X.SuspenseList = d, X.isAsyncMode = function() {
    return !1;
  }, X.isConcurrentMode = function() {
    return !1;
  }, X.isContextConsumer = function(m) {
    return f(m) === a;
  }, X.isContextProvider = function(m) {
    return f(m) === i;
  }, X.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, X.isForwardRef = function(m) {
    return f(m) === u;
  }, X.isFragment = function(m) {
    return f(m) === n;
  }, X.isLazy = function(m) {
    return f(m) === p;
  }, X.isMemo = function(m) {
    return f(m) === h;
  }, X.isPortal = function(m) {
    return f(m) === t;
  }, X.isProfiler = function(m) {
    return f(m) === o;
  }, X.isStrictMode = function(m) {
    return f(m) === r;
  }, X.isSuspense = function(m) {
    return f(m) === l;
  }, X.isSuspenseList = function(m) {
    return f(m) === d;
  }, X.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === l || m === d || m === v || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === h || m.$$typeof === i || m.$$typeof === a || m.$$typeof === u || m.$$typeof === y || m.getModuleId !== void 0);
  }, X.typeOf = f, X;
}
var J = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Yi() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, f = !1, m = !1, b = !1, $ = !1, C;
    C = Symbol.for("react.module.reference");
    function T(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === n || w === o || $ || w === r || w === l || w === d || b || w === v || y || f || m || typeof w == "object" && w !== null && (w.$$typeof === p || w.$$typeof === h || w.$$typeof === i || w.$$typeof === a || w.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === C || w.getModuleId !== void 0));
    }
    function g(w) {
      if (typeof w == "object" && w !== null) {
        var ze = w.$$typeof;
        switch (ze) {
          case e:
            var Ke = w.type;
            switch (Ke) {
              case n:
              case o:
              case r:
              case l:
              case d:
                return Ke;
              default:
                var $t = Ke && Ke.$$typeof;
                switch ($t) {
                  case c:
                  case a:
                  case u:
                  case p:
                  case h:
                  case i:
                    return $t;
                  default:
                    return ze;
                }
            }
          case t:
            return ze;
        }
      }
    }
    var P = a, _ = i, Z = e, fe = u, Q = n, W = p, q = h, re = t, te = o, V = r, F = l, ee = d, oe = !1, he = !1;
    function E(w) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function R(w) {
      return he || (he = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(w) {
      return g(w) === a;
    }
    function I(w) {
      return g(w) === i;
    }
    function M(w) {
      return typeof w == "object" && w !== null && w.$$typeof === e;
    }
    function z(w) {
      return g(w) === u;
    }
    function N(w) {
      return g(w) === n;
    }
    function j(w) {
      return g(w) === p;
    }
    function B(w) {
      return g(w) === h;
    }
    function A(w) {
      return g(w) === t;
    }
    function U(w) {
      return g(w) === o;
    }
    function me(w) {
      return g(w) === r;
    }
    function S(w) {
      return g(w) === l;
    }
    function Ee(w) {
      return g(w) === d;
    }
    J.ContextConsumer = P, J.ContextProvider = _, J.Element = Z, J.ForwardRef = fe, J.Fragment = Q, J.Lazy = W, J.Memo = q, J.Portal = re, J.Profiler = te, J.StrictMode = V, J.Suspense = F, J.SuspenseList = ee, J.isAsyncMode = E, J.isConcurrentMode = R, J.isContextConsumer = L, J.isContextProvider = I, J.isElement = M, J.isForwardRef = z, J.isFragment = N, J.isLazy = j, J.isMemo = B, J.isPortal = A, J.isProfiler = U, J.isStrictMode = me, J.isSuspense = S, J.isSuspenseList = Ee, J.isValidElementType = T, J.typeOf = g;
  }()), J;
}
process.env.NODE_ENV === "production" ? Sn.exports = qi() : Sn.exports = Yi();
var yr = Sn.exports;
const Hi = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function ho(e) {
  const t = `${e}`.match(Hi);
  return t && t[1] || "";
}
function mo(e, t = "") {
  return e.displayName || e.name || ho(e) || t;
}
function gr(e, t, n) {
  const r = mo(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Ki(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return mo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yr.ForwardRef:
          return gr(e, e.render, "ForwardRef");
        case yr.Memo:
          return gr(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ki,
  getFunctionName: ho
}, Symbol.toStringTag, { value: "Module" })), Xi = s.oneOfType([s.func, s.object]), Ji = Xi;
function ce(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ye(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" }));
function Qi(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function es(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function ts(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (n, r, o, i, a) => {
    const c = o || "<<anonymous>>", u = a || r;
    return typeof n[r] < "u" ? new Error(`The ${i} \`${u}\` of \`${c}\` is deprecated. ${t}`) : null;
  };
}
function ns(e, t) {
  var n, r;
  return /* @__PURE__ */ O.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function ht(e) {
  return e && e.ownerDocument || document;
}
function rs(e) {
  return ht(e).defaultView || window;
}
function os(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? x({}, t.propTypes) : null;
  return (o) => (i, a, c, u, l, ...d) => {
    const h = l || a, p = n == null ? void 0 : n[h];
    if (p) {
      const v = p(i, a, c, u, l, ...d);
      if (v)
        return v;
    }
    return typeof i[a] < "u" && !i[o] ? new Error(`The prop \`${h}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function yo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const go = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
let vr = 0;
function is(e) {
  const [t, n] = O.useState(e), r = e || t;
  return O.useEffect(() => {
    t == null && (vr += 1, n(`mui-${vr}`));
  }, [t]), r;
}
const br = O.useId;
function ss(e) {
  if (br !== void 0) {
    const t = br();
    return e ?? t;
  }
  return is(e);
}
function as(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function cs({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: o
  } = O.useRef(e !== void 0), [i, a] = O.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    O.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${r} state of ${n} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: l
    } = O.useRef(t);
    O.useEffect(() => {
      !o && l !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const u = O.useCallback((l) => {
    o || a(l);
  }, []);
  return [c, u];
}
function Be(e) {
  const t = O.useRef(e);
  return go(() => {
    t.current = e;
  }), O.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function He(...e) {
  return O.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      yo(n, t);
    });
  }, e);
}
const Er = {};
function us(e, t) {
  const n = O.useRef(Er);
  return n.current === Er && (n.current = e(t)), n;
}
const ls = [];
function fs(e) {
  O.useEffect(e, ls);
}
class Yt {
  constructor() {
    this.currentId = 0, this.clear = () => {
      this.currentId !== 0 && (clearTimeout(this.currentId), this.currentId = 0);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Yt();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, n) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = 0, n();
    }, t);
  }
}
function jn() {
  const e = us(Yt.create).current;
  return fs(e.disposeEffect), e;
}
let Ht = !0, $n = !1;
const ds = new Yt(), ps = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function hs(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && ps[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function ms(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ht = !0);
}
function yn() {
  Ht = !1;
}
function ys() {
  this.visibilityState === "hidden" && $n && (Ht = !0);
}
function gs(e) {
  e.addEventListener("keydown", ms, !0), e.addEventListener("mousedown", yn, !0), e.addEventListener("pointerdown", yn, !0), e.addEventListener("touchstart", yn, !0), e.addEventListener("visibilitychange", ys, !0);
}
function vs(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ht || hs(t);
}
function vo() {
  const e = O.useCallback((o) => {
    o != null && gs(o.ownerDocument);
  }, []), t = O.useRef(!1);
  function n() {
    return t.current ? ($n = !0, ds.start(100, () => {
      $n = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(o) {
    return vs(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function bs(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Es(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const xs = Number.isInteger || Es;
function bo(e, t, n, r) {
  const o = e[t];
  if (o == null || !xs(o)) {
    const i = bs(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Eo(e, t, ...n) {
  return e[t] === void 0 ? null : bo(e, t, ...n);
}
function Cn() {
  return null;
}
Eo.isRequired = bo;
Cn.isRequired = Cn;
const Ts = process.env.NODE_ENV === "production" ? Cn : Eo;
function xo(e, t) {
  const n = x({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = x({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {}, i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = x({}, i), Object.keys(o).forEach((a) => {
        n[r][a] = xo(o[a], i[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function De(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      r[o] = e[o].reduce((i, a) => {
        if (a) {
          const c = t(a);
          c !== "" && i.push(c), n && n[a] && i.push(n[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const xr = (e) => e, Os = () => {
  let e = xr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = xr;
    }
  };
}, To = Os(), Ss = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function we(e, t, n = "Mui") {
  const r = Ss[t];
  return r ? `${n}-${r}` : `${To.generate(e)}-${t}`;
}
function ke(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = we(e, o, n);
  }), r;
}
function Oo(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oo
}, Symbol.toStringTag, { value: "Module" }));
function So(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = So(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function pe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = So(e)) && (r && (r += " "), r += t);
  return r;
}
function Tr(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function $o(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const v = pe(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = x({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), f = x({}, n, o, r);
    return v.length > 0 && (f.className = v), Object.keys(y).length > 0 && (f.style = y), {
      props: f,
      internalRef: void 0
    };
  }
  const a = On(x({}, o, r)), c = Tr(r), u = Tr(o), l = t(a), d = pe(l == null ? void 0 : l.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), h = x({}, l == null ? void 0 : l.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style), p = x({}, l, n, u, c);
  return d.length > 0 && (p.className = d), Object.keys(h).length > 0 && (p.style = h), {
    props: p,
    internalRef: l.ref
  };
}
const Cs = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Rs(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, a = ne(e, Cs), c = i ? {} : co(r, o), {
    props: u,
    internalRef: l
  } = $o(x({}, a, {
    externalSlotProps: c
  })), d = He(l, c == null ? void 0 : c.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return ao(n, x({}, u, {
    ref: d
  }), o);
}
function Or(e) {
  return e.substring(2).toLowerCase();
}
function _s(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function Lt(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, a = O.useRef(!1), c = O.useRef(null), u = O.useRef(!1), l = O.useRef(!1);
  O.useEffect(() => (setTimeout(() => {
    u.current = !0;
  }, 0), () => {
    u.current = !1;
  }), []);
  const d = He(
    // @ts-expect-error TODO upstream fix
    t.ref,
    c
  ), h = Be((y) => {
    const f = l.current;
    l.current = !1;
    const m = ht(c.current);
    if (!u.current || !c.current || "clientX" in y && _s(y, m))
      return;
    if (a.current) {
      a.current = !1;
      return;
    }
    let b;
    y.composedPath ? b = y.composedPath().indexOf(c.current) > -1 : b = !m.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      y.target
    ) || c.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      y.target
    ), !b && (n || !f) && o(y);
  }), p = (y) => (f) => {
    l.current = !0;
    const m = t.props[y];
    m && m(f);
  }, v = {
    ref: d
  };
  return i !== !1 && (v[i] = p(i)), O.useEffect(() => {
    if (i !== !1) {
      const y = Or(i), f = ht(c.current), m = () => {
        a.current = !0;
      };
      return f.addEventListener(y, h), f.addEventListener("touchmove", m), () => {
        f.removeEventListener(y, h), f.removeEventListener("touchmove", m);
      };
    }
  }, [h, i]), r !== !1 && (v[r] = p(r)), O.useEffect(() => {
    if (r !== !1) {
      const y = Or(r), f = ht(c.current);
      return f.addEventListener(y, h), () => {
        f.removeEventListener(y, h);
      };
    }
  }, [h, r]), /* @__PURE__ */ k(O.Fragment, {
    children: /* @__PURE__ */ O.cloneElement(t, v)
  });
}
process.env.NODE_ENV !== "production" && (Lt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: po.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: s.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: s.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", !1]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: s.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: s.oneOf(["onTouchEnd", "onTouchStart", !1])
});
process.env.NODE_ENV !== "production" && (Lt.propTypes = Ui(Lt.propTypes));
function ws(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, a = jn();
  O.useEffect(() => {
    if (!o)
      return;
    function b($) {
      $.defaultPrevented || ($.key === "Escape" || $.key === "Esc") && (r == null || r($, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", b), () => {
      document.removeEventListener("keydown", b);
    };
  }, [o, r]);
  const c = Be((b, $) => {
    r == null || r(b, $);
  }), u = Be((b) => {
    !r || b == null || a.start(b, () => {
      c(null, "timeout");
    });
  });
  O.useEffect(() => (o && u(t), a.clear), [o, t, u, a]);
  const l = (b) => {
    r == null || r(b, "clickaway");
  }, d = a.clear, h = O.useCallback(() => {
    t != null && u(i ?? t * 0.5);
  }, [t, i, u]), p = (b) => ($) => {
    const C = b.onBlur;
    C == null || C($), h();
  }, v = (b) => ($) => {
    const C = b.onFocus;
    C == null || C($), d();
  }, y = (b) => ($) => {
    const C = b.onMouseEnter;
    C == null || C($), d();
  }, f = (b) => ($) => {
    const C = b.onMouseLeave;
    C == null || C($), h();
  };
  return O.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", h), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", h), window.removeEventListener("blur", d);
      };
  }, [n, o, h, d]), {
    getRootProps: (b = {}) => {
      const $ = x({}, On(e), On(b));
      return x({
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation"
      }, b, $, {
        onBlur: p($),
        onFocus: v($),
        onMouseEnter: y($),
        onMouseLeave: f($)
      });
    },
    onClickAway: l
  };
}
var Et = {}, Co = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Co);
var Dn = Co.exports, gn = { exports: {} }, Sr;
function Ps() {
  return Sr || (Sr = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(gn)), gn.exports;
}
var vn = { exports: {} }, $r;
function Ms() {
  return $r || ($r = 1, function(e) {
    function t(n, r) {
      if (n == null)
        return {};
      var o = {}, i = Object.keys(n), a, c;
      for (c = 0; c < i.length; c++)
        a = i[c], !(r.indexOf(a) >= 0) && (o[a] = n[a]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(vn)), vn.exports;
}
function Ns(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ks(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var As = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ks(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = Ns(o);
      try {
        a.insertRule(r, a.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ge = "-ms-", zt = "-moz-", Y = "-webkit-", Ln = "comm", zn = "rule", Vn = "decl", Is = "@import", Ro = "@keyframes", js = "@layer", Ds = Math.abs, Kt = String.fromCharCode, Ls = Object.assign;
function zs(e, t) {
  return ye(e, 0) ^ 45 ? (((t << 2 ^ ye(e, 0)) << 2 ^ ye(e, 1)) << 2 ^ ye(e, 2)) << 2 ^ ye(e, 3) : 0;
}
function _o(e) {
  return e.trim();
}
function Vs(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, n) {
  return e.replace(t, n);
}
function Rn(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function yt(e, t, n) {
  return e.slice(t, n);
}
function Pe(e) {
  return e.length;
}
function Bn(e) {
  return e.length;
}
function wt(e, t) {
  return t.push(e), e;
}
function Bs(e, t) {
  return e.map(t).join("");
}
var Gt = 1, ot = 1, wo = 0, xe = 0, de = 0, st = "";
function Xt(e, t, n, r, o, i, a) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Gt, column: ot, length: a, return: "" };
}
function ft(e, t) {
  return Ls(Xt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Fs() {
  return de;
}
function Us() {
  return de = xe > 0 ? ye(st, --xe) : 0, ot--, de === 10 && (ot = 1, Gt--), de;
}
function Oe() {
  return de = xe < wo ? ye(st, xe++) : 0, ot++, de === 10 && (ot = 1, Gt++), de;
}
function Ne() {
  return ye(st, xe);
}
function kt() {
  return xe;
}
function xt(e, t) {
  return yt(st, e, t);
}
function gt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Po(e) {
  return Gt = ot = 1, wo = Pe(st = e), xe = 0, [];
}
function Mo(e) {
  return st = "", e;
}
function At(e) {
  return _o(xt(xe - 1, _n(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ws(e) {
  for (; (de = Ne()) && de < 33; )
    Oe();
  return gt(e) > 2 || gt(de) > 3 ? "" : " ";
}
function qs(e, t) {
  for (; --t && Oe() && !(de < 48 || de > 102 || de > 57 && de < 65 || de > 70 && de < 97); )
    ;
  return xt(e, kt() + (t < 6 && Ne() == 32 && Oe() == 32));
}
function _n(e) {
  for (; Oe(); )
    switch (de) {
      case e:
        return xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _n(de);
        break;
      case 40:
        e === 41 && _n(e);
        break;
      case 92:
        Oe();
        break;
    }
  return xe;
}
function Ys(e, t) {
  for (; Oe() && e + de !== 57; )
    if (e + de === 84 && Ne() === 47)
      break;
  return "/*" + xt(t, xe - 1) + "*" + Kt(e === 47 ? e : Oe());
}
function Hs(e) {
  for (; !gt(Ne()); )
    Oe();
  return xt(e, xe);
}
function Ks(e) {
  return Mo(It("", null, null, null, [""], e = Po(e), 0, [0], e));
}
function It(e, t, n, r, o, i, a, c, u) {
  for (var l = 0, d = 0, h = a, p = 0, v = 0, y = 0, f = 1, m = 1, b = 1, $ = 0, C = "", T = o, g = i, P = r, _ = C; m; )
    switch (y = $, $ = Oe()) {
      case 40:
        if (y != 108 && ye(_, h - 1) == 58) {
          Rn(_ += H(At($), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += At($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Ws(y);
        break;
      case 92:
        _ += qs(kt() - 1, 7);
        continue;
      case 47:
        switch (Ne()) {
          case 42:
          case 47:
            wt(Gs(Ys(Oe(), kt()), t, n), u);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * f:
        c[l++] = Pe(_) * b;
      case 125 * f:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            b == -1 && (_ = H(_, /\f/g, "")), v > 0 && Pe(_) - h && wt(v > 32 ? Rr(_ + ";", r, n, h - 1) : Rr(H(_, " ", "") + ";", r, n, h - 2), u);
            break;
          case 59:
            _ += ";";
          default:
            if (wt(P = Cr(_, t, n, l, d, o, c, C, T = [], g = [], h), i), $ === 123)
              if (d === 0)
                It(_, t, P, P, T, i, h, c, g);
              else
                switch (p === 99 && ye(_, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    It(e, P, P, r && wt(Cr(e, P, P, 0, 0, o, c, C, o, T = [], h), g), o, g, h, c, r ? T : g);
                    break;
                  default:
                    It(_, P, P, P, [""], g, 0, c, g);
                }
        }
        l = d = v = 0, f = b = 1, C = _ = "", h = a;
        break;
      case 58:
        h = 1 + Pe(_), v = y;
      default:
        if (f < 1) {
          if ($ == 123)
            --f;
          else if ($ == 125 && f++ == 0 && Us() == 125)
            continue;
        }
        switch (_ += Kt($), $ * f) {
          case 38:
            b = d > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            c[l++] = (Pe(_) - 1) * b, b = 1;
            break;
          case 64:
            Ne() === 45 && (_ += At(Oe())), p = Ne(), d = h = Pe(C = _ += Hs(kt())), $++;
            break;
          case 45:
            y === 45 && Pe(_) == 2 && (f = 0);
        }
    }
  return i;
}
function Cr(e, t, n, r, o, i, a, c, u, l, d) {
  for (var h = o - 1, p = o === 0 ? i : [""], v = Bn(p), y = 0, f = 0, m = 0; y < r; ++y)
    for (var b = 0, $ = yt(e, h + 1, h = Ds(f = a[y])), C = e; b < v; ++b)
      (C = _o(f > 0 ? p[b] + " " + $ : H($, /&\f/g, p[b]))) && (u[m++] = C);
  return Xt(e, t, n, o === 0 ? zn : c, u, l, d);
}
function Gs(e, t, n) {
  return Xt(e, t, n, Ln, Kt(Fs()), yt(e, 2, -2), 0);
}
function Rr(e, t, n, r) {
  return Xt(e, t, n, Vn, yt(e, 0, r), yt(e, r + 1, -1), r);
}
function nt(e, t) {
  for (var n = "", r = Bn(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Xs(e, t, n, r) {
  switch (e.type) {
    case js:
      if (e.children.length)
        break;
    case Is:
    case Vn:
      return e.return = e.return || e.value;
    case Ln:
      return "";
    case Ro:
      return e.return = e.value + "{" + nt(e.children, r) + "}";
    case zn:
      e.value = e.props.join(",");
  }
  return Pe(n = nt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Js(e) {
  var t = Bn(e);
  return function(n, r, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, o, i) || "";
    return a;
  };
}
function Zs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Qs = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Ne(), o === 38 && i === 12 && (n[r] = 1), !gt(i); )
    Oe();
  return xt(t, xe);
}, ea = function(t, n) {
  var r = -1, o = 44;
  do
    switch (gt(o)) {
      case 0:
        o === 38 && Ne() === 12 && (n[r] = 1), t[r] += Qs(xe - 1, n, r);
        break;
      case 2:
        t[r] += At(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Ne() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Kt(o);
    }
  while (o = Oe());
  return t;
}, ta = function(t, n) {
  return Mo(ea(Po(t), n));
}, _r = /* @__PURE__ */ new WeakMap(), na = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !_r.get(r)) && !o) {
      _r.set(t, !0);
      for (var i = [], a = ta(n, i), c = r.props, u = 0, l = 0; u < a.length; u++)
        for (var d = 0; d < c.length; d++, l++)
          t.props[l] = i[u] ? a[u].replace(/&\f/g, c[d]) : c[d] + " " + a[u];
    }
  }
}, ra = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, oa = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ia = function(t) {
  return t.type === "comm" && t.children.indexOf(oa) > -1;
}, sa = function(t) {
  return function(n, r, o) {
    if (!(n.type !== "rule" || t.compat)) {
      var i = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!n.parent, c = a ? n.parent.children : (
          // global rule at the root level
          o
        ), u = c.length - 1; u >= 0; u--) {
          var l = c[u];
          if (l.line < n.line)
            break;
          if (l.column < n.column) {
            if (ia(l))
              return;
            break;
          }
        }
        i.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, No = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, aa = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!No(n[r]))
      return !0;
  return !1;
}, wr = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, ca = function(t, n, r) {
  No(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), wr(t)) : aa(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), wr(t)));
};
function ko(e, t) {
  switch (zs(e, t)) {
    case 5103:
      return Y + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Y + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Y + e + zt + e + ge + e + e;
    case 6828:
    case 4268:
      return Y + e + ge + e + e;
    case 6165:
      return Y + e + ge + "flex-" + e + e;
    case 5187:
      return Y + e + H(e, /(\w+).+(:[^]+)/, Y + "box-$1$2" + ge + "flex-$1$2") + e;
    case 5443:
      return Y + e + ge + "flex-item-" + H(e, /flex-|-self/, "") + e;
    case 4675:
      return Y + e + ge + "flex-line-pack" + H(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Y + e + ge + H(e, "shrink", "negative") + e;
    case 5292:
      return Y + e + ge + H(e, "basis", "preferred-size") + e;
    case 6060:
      return Y + "box-" + H(e, "-grow", "") + Y + e + ge + H(e, "grow", "positive") + e;
    case 4554:
      return Y + H(e, /([^-])(transform)/g, "$1" + Y + "$2") + e;
    case 6187:
      return H(H(H(e, /(zoom-|grab)/, Y + "$1"), /(image-set)/, Y + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, Y + "$1$`$1");
    case 4968:
      return H(H(e, /(.+:)(flex-)?(.*)/, Y + "box-pack:$3" + ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Y + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, Y + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pe(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45)
              break;
          case 102:
            return H(e, /(.+:)(.+)-([^]+)/, "$1" + Y + "$2-$3$1" + zt + (ye(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Rn(e, "stretch") ? ko(H(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ye(e, Pe(e) - 3 - (~Rn(e, "!important") && 10))) {
        case 107:
          return H(e, ":", ":" + Y) + e;
        case 101:
          return H(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Y + (ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Y + "$2$3$1" + ge + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return Y + e + ge + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Y + e + ge + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Y + e + ge + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Y + e + ge + e + e;
  }
  return e;
}
var ua = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Vn:
        t.return = ko(t.value, t.length);
        break;
      case Ro:
        return nt([ft(t, {
          value: H(t.value, "@", "@" + Y)
        })], o);
      case zn:
        if (t.length)
          return Bs(t.props, function(i) {
            switch (Vs(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return nt([ft(t, {
                  props: [H(i, /:(read-\w+)/, ":" + zt + "$1")]
                })], o);
              case "::placeholder":
                return nt([ft(t, {
                  props: [H(i, /:(plac\w+)/, ":" + Y + "input-$1")]
                }), ft(t, {
                  props: [H(i, /:(plac\w+)/, ":" + zt + "$1")]
                }), ft(t, {
                  props: [H(i, /:(plac\w+)/, ge + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, la = [ua], fa = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var m = f.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || la;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var m = f.getAttribute("data-emotion").split(" "), b = 1; b < m.length; b++)
        i[m[b]] = !0;
      c.push(f);
    }
  );
  var u, l = [na, ra];
  process.env.NODE_ENV !== "production" && l.push(sa({
    get compat() {
      return y.compat;
    }
  }), ca);
  {
    var d, h = [Xs, process.env.NODE_ENV !== "production" ? function(f) {
      f.root || (f.return ? d.insert(f.return) : f.value && f.type !== Ln && d.insert(f.value + "{}"));
    } : Zs(function(f) {
      d.insert(f);
    })], p = Js(l.concat(o, h)), v = function(m) {
      return nt(Ks(m), p);
    };
    u = function(m, b, $, C) {
      d = $, process.env.NODE_ENV !== "production" && b.map !== void 0 && (d = {
        insert: function(g) {
          $.insert(g + b.map);
        }
      }), v(m ? m + "{" + b.styles + "}" : b.styles), C && (y.inserted[b.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new As({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return y.sheet.hydrate(c), y;
};
let wn;
typeof document == "object" && (wn = fa({
  key: "css",
  prepend: !0
}));
function Ao(e) {
  const {
    injectFirst: t,
    children: n
  } = e;
  return t && wn ? /* @__PURE__ */ k(Ti, {
    value: wn,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  /**
   * Your component tree.
   */
  children: s.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: s.bool
});
function da(e) {
  return e == null || Object.keys(e).length === 0;
}
function Io(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ k(Oi, {
    styles: typeof t == "function" ? (o) => t(da(o) ? n : o) : t
  });
}
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  defaultTheme: s.object,
  styles: s.oneOfType([s.array, s.string, s.object, s.func])
});
/**
 * @mui/styled-engine v5.15.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function pa(e, t) {
  const n = $i(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const ha = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Io,
  StyledEngineProvider: Ao,
  ThemeContext: ro,
  css: Si,
  default: pa,
  internal_processStyles: ha,
  keyframes: qt
}, Symbol.toStringTag, { value: "Module" })), ya = /* @__PURE__ */ je(ma), ga = /* @__PURE__ */ je(Di), va = /* @__PURE__ */ je(Zi), ba = /* @__PURE__ */ je(Gi), Ea = ["values", "unit", "step"], xa = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => x({}, n, {
    [r.key]: r.val
  }), {});
};
function jo(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, o = ne(e, Ea), i = xa(t), a = Object.keys(i);
  function c(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function u(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function l(p, v) {
    const y = a.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : v) - r / 100}${n})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? l(p, a[a.indexOf(p) + 1]) : c(p);
  }
  function h(p) {
    const v = a.indexOf(p);
    return v === 0 ? c(a[1]) : v === a.length - 1 ? u(a[v]) : l(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return x({
    keys: a,
    values: i,
    up: c,
    down: u,
    between: l,
    only: d,
    not: h,
    unit: n
  }, o);
}
const Ta = {
  borderRadius: 4
}, Oa = Ta, Sa = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.string, s.object, s.array]) : {}, Fe = Sa;
function mt(e, t) {
  return t ? Me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Fn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Pr = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Fn[e]}px)`
};
function Ie(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Pr;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = n(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Pr;
    return Object.keys(t).reduce((a, c) => {
      if (Object.keys(i.values || Fn).indexOf(c) !== -1) {
        const u = i.up(c);
        a[u] = n(t[c], c);
      } else {
        const u = c;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return n(t);
}
function $a(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Ca(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Jt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Vt(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Jt(e, n) || r, t && (o = t(o, r, e)), o;
}
function ue(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, l = Jt(u, r) || {};
    return Ie(a, c, (h) => {
      let p = Vt(l, o, h);
      return h === p && typeof h == "string" && (p = Vt(l, o, `${t}${h === "default" ? "" : ce(h)}`, h)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Fe
  } : {}, i.filterProps = [t], i;
}
function Ra(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const _a = {
  m: "margin",
  p: "padding"
}, wa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Mr = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Pa = Ra((e) => {
  if (e.length > 2)
    if (Mr[e])
      e = Mr[e];
    else
      return [e];
  const [t, n] = e.split(""), r = _a[t], o = wa[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), Zt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Qt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ma = [...Zt, ...Qt];
function Tt(e, t, n, r) {
  var o;
  const i = (o = Jt(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Do(e) {
  return Tt(e, "spacing", 8, "spacing");
}
function Ot(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Na(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Ot(t, n), r), {});
}
function ka(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Pa(n), i = Na(o, r), a = e[n];
  return Ie(e, a, i);
}
function Lo(e, t) {
  const n = Do(e.theme);
  return Object.keys(e).map((r) => ka(e, t, r, n)).reduce(mt, {});
}
function se(e) {
  return Lo(e, Zt);
}
se.propTypes = process.env.NODE_ENV !== "production" ? Zt.reduce((e, t) => (e[t] = Fe, e), {}) : {};
se.filterProps = Zt;
function ae(e) {
  return Lo(e, Qt);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? Qt.reduce((e, t) => (e[t] = Fe, e), {}) : {};
ae.filterProps = Qt;
process.env.NODE_ENV !== "production" && Ma.reduce((e, t) => (e[t] = Fe, e), {});
function Aa(e = 8) {
  if (e.mui)
    return e;
  const t = Do({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function en(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? mt(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ce(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function _e(e, t) {
  return ue({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ia = _e("border", Ce), ja = _e("borderTop", Ce), Da = _e("borderRight", Ce), La = _e("borderBottom", Ce), za = _e("borderLeft", Ce), Va = _e("borderColor"), Ba = _e("borderTopColor"), Fa = _e("borderRightColor"), Ua = _e("borderBottomColor"), Wa = _e("borderLeftColor"), qa = _e("outline", Ce), Ya = _e("outlineColor"), tn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Tt(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: Ot(t, r)
    });
    return Ie(e, e.borderRadius, n);
  }
  return null;
};
tn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Fe
} : {};
tn.filterProps = ["borderRadius"];
en(Ia, ja, Da, La, za, Va, Ba, Fa, Ua, Wa, tn, qa, Ya);
const nn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Tt(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: Ot(t, r)
    });
    return Ie(e, e.gap, n);
  }
  return null;
};
nn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Fe
} : {};
nn.filterProps = ["gap"];
const rn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Tt(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: Ot(t, r)
    });
    return Ie(e, e.columnGap, n);
  }
  return null;
};
rn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Fe
} : {};
rn.filterProps = ["columnGap"];
const on = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Tt(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: Ot(t, r)
    });
    return Ie(e, e.rowGap, n);
  }
  return null;
};
on.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Fe
} : {};
on.filterProps = ["rowGap"];
const Ha = ue({
  prop: "gridColumn"
}), Ka = ue({
  prop: "gridRow"
}), Ga = ue({
  prop: "gridAutoFlow"
}), Xa = ue({
  prop: "gridAutoColumns"
}), Ja = ue({
  prop: "gridAutoRows"
}), Za = ue({
  prop: "gridTemplateColumns"
}), Qa = ue({
  prop: "gridTemplateRows"
}), ec = ue({
  prop: "gridTemplateAreas"
}), tc = ue({
  prop: "gridArea"
});
en(nn, rn, on, Ha, Ka, Ga, Xa, Ja, Za, Qa, ec, tc);
function rt(e, t) {
  return t === "grey" ? t : e;
}
const nc = ue({
  prop: "color",
  themeKey: "palette",
  transform: rt
}), rc = ue({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: rt
}), oc = ue({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: rt
});
en(nc, rc, oc);
function Te(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ic = ue({
  prop: "width",
  transform: Te
}), Un = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Fn[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Te(n)
      };
    };
    return Ie(e, e.maxWidth, t);
  }
  return null;
};
Un.filterProps = ["maxWidth"];
const sc = ue({
  prop: "minWidth",
  transform: Te
}), ac = ue({
  prop: "height",
  transform: Te
}), cc = ue({
  prop: "maxHeight",
  transform: Te
}), uc = ue({
  prop: "minHeight",
  transform: Te
});
ue({
  prop: "size",
  cssProperty: "width",
  transform: Te
});
ue({
  prop: "size",
  cssProperty: "height",
  transform: Te
});
const lc = ue({
  prop: "boxSizing"
});
en(ic, Un, sc, ac, cc, uc, lc);
const fc = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ce
  },
  borderTop: {
    themeKey: "borders",
    transform: Ce
  },
  borderRight: {
    themeKey: "borders",
    transform: Ce
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ce
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ce
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ce
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: tn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: rt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: rt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: rt
  },
  // spacing
  p: {
    style: ae
  },
  pt: {
    style: ae
  },
  pr: {
    style: ae
  },
  pb: {
    style: ae
  },
  pl: {
    style: ae
  },
  px: {
    style: ae
  },
  py: {
    style: ae
  },
  padding: {
    style: ae
  },
  paddingTop: {
    style: ae
  },
  paddingRight: {
    style: ae
  },
  paddingBottom: {
    style: ae
  },
  paddingLeft: {
    style: ae
  },
  paddingX: {
    style: ae
  },
  paddingY: {
    style: ae
  },
  paddingInline: {
    style: ae
  },
  paddingInlineStart: {
    style: ae
  },
  paddingInlineEnd: {
    style: ae
  },
  paddingBlock: {
    style: ae
  },
  paddingBlockStart: {
    style: ae
  },
  paddingBlockEnd: {
    style: ae
  },
  m: {
    style: se
  },
  mt: {
    style: se
  },
  mr: {
    style: se
  },
  mb: {
    style: se
  },
  ml: {
    style: se
  },
  mx: {
    style: se
  },
  my: {
    style: se
  },
  margin: {
    style: se
  },
  marginTop: {
    style: se
  },
  marginRight: {
    style: se
  },
  marginBottom: {
    style: se
  },
  marginLeft: {
    style: se
  },
  marginX: {
    style: se
  },
  marginY: {
    style: se
  },
  marginInline: {
    style: se
  },
  marginInlineStart: {
    style: se
  },
  marginInlineEnd: {
    style: se
  },
  marginBlock: {
    style: se
  },
  marginBlockStart: {
    style: se
  },
  marginBlockEnd: {
    style: se
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: nn
  },
  rowGap: {
    style: on
  },
  columnGap: {
    style: rn
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Te
  },
  maxWidth: {
    style: Un
  },
  minWidth: {
    transform: Te
  },
  height: {
    transform: Te
  },
  maxHeight: {
    transform: Te
  },
  minHeight: {
    transform: Te
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, St = fc;
function dc(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function pc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zo() {
  function e(n, r, o, i) {
    const a = {
      [n]: r,
      theme: o
    }, c = i[n];
    if (!c)
      return {
        [n]: r
      };
    const {
      cssProperty: u = n,
      themeKey: l,
      transform: d,
      style: h
    } = c;
    if (r == null)
      return null;
    if (l === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = Jt(o, l) || {};
    return h ? h(a) : Ie(a, r, (y) => {
      let f = Vt(p, d, y);
      return y === f && typeof y == "string" && (f = Vt(p, d, `${n}${y === "default" ? "" : ce(y)}`, y)), u === !1 ? f : {
        [u]: f
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o)
      return null;
    const a = (r = i.unstable_sxConfig) != null ? r : St;
    function c(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const d = $a(i.breakpoints), h = Object.keys(d);
      let p = d;
      return Object.keys(l).forEach((v) => {
        const y = pc(l[v], i);
        if (y != null)
          if (typeof y == "object")
            if (a[v])
              p = mt(p, e(v, y, i, a));
            else {
              const f = Ie({
                theme: i
              }, y, (m) => ({
                [v]: m
              }));
              dc(f, y) ? p[v] = t({
                sx: y,
                theme: i
              }) : p = mt(p, f);
            }
          else
            p = mt(p, e(v, y, i, a));
      }), Ca(h, p);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return t;
}
const sn = zo();
sn.filterProps = ["sx"];
function Vo(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const hc = ["breakpoints", "palette", "spacing", "shape"];
function Wn(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, a = ne(e, hc), c = jo(n), u = Aa(o);
  let l = Me({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: x({
      mode: "light"
    }, r),
    spacing: u,
    shape: x({}, Oa, i)
  }, a);
  return l.applyStyles = Vo, l = t.reduce((d, h) => Me(d, h), l), l.unstable_sxConfig = x({}, St, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(h) {
    return sn({
      sx: h,
      theme: this
    });
  }, l;
}
const mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wn,
  private_createBreakpoints: jo,
  unstable_applyStyles: Vo
}, Symbol.toStringTag, { value: "Module" })), yc = /* @__PURE__ */ je(mc), gc = ["sx"], vc = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : St;
  return Object.keys(e).forEach((i) => {
    o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Bo(e) {
  const {
    sx: t
  } = e, n = ne(e, gc), {
    systemProps: r,
    otherProps: o
  } = vc(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const c = t(...a);
    return Ve(c) ? x({}, r, c) : r;
  } : i = x({}, r, t), x({}, o, {
    sx: i
  });
}
const bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn,
  extendSxProp: Bo,
  unstable_createStyleFunctionSx: zo,
  unstable_defaultSxConfig: St
}, Symbol.toStringTag, { value: "Module" })), Ec = /* @__PURE__ */ je(bc);
var at = Dn;
Object.defineProperty(Et, "__esModule", {
  value: !0
});
var xc = Et.default = jc, Tc = Et.shouldForwardProp = jt;
Et.systemDefaultTheme = void 0;
var Se = at(Ps()), Pn = at(Ms()), Nr = Mc(ya), Oc = ga, Sc = at(va), $c = at(ba), Cc = at(yc), Rc = at(Ec);
const _c = ["ownerState"], wc = ["variants"], Pc = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Fo(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Fo = function(r) {
    return r ? n : t;
  })(e);
}
function Mc(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = Fo(t);
  if (n && n.has(e))
    return n.get(e);
  var r = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
    }
  return r.default = e, n && n.set(e, r), r;
}
function Nc(e) {
  return Object.keys(e).length === 0;
}
function kc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function jt(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ac = Et.systemDefaultTheme = (0, Cc.default)(), kr = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Pt({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return Nc(t) ? e : t[n] || t;
}
function Ic(e) {
  return e ? (t, n) => n[e] : null;
}
function Dt(e, t) {
  let {
    ownerState: n
  } = t, r = (0, Pn.default)(t, _c);
  const o = typeof e == "function" ? e((0, Se.default)({
    ownerState: n
  }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Dt(i, (0, Se.default)({
      ownerState: n
    }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let c = (0, Pn.default)(o, wc);
    return i.forEach((u) => {
      let l = !0;
      typeof u.props == "function" ? l = u.props((0, Se.default)({
        ownerState: n
      }, r, n)) : Object.keys(u.props).forEach((d) => {
        (n == null ? void 0 : n[d]) !== u.props[d] && r[d] !== u.props[d] && (l = !1);
      }), l && (Array.isArray(c) || (c = [c]), c.push(typeof u.style == "function" ? u.style((0, Se.default)({
        ownerState: n
      }, r, n)) : u.style));
    }), c;
  }
  return o;
}
function jc(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ac,
    rootShouldForwardProp: r = jt,
    slotShouldForwardProp: o = jt
  } = e, i = (a) => (0, Rc.default)((0, Se.default)({}, a, {
    theme: Pt((0, Se.default)({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, c = {}) => {
    (0, Nr.internal_processStyles)(a, (g) => g.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Ic(kr(l))
    } = c, v = (0, Pn.default)(c, Pc), y = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), f = h || !1;
    let m;
    process.env.NODE_ENV !== "production" && u && (m = `${u}-${kr(l || "Root")}`);
    let b = jt;
    l === "Root" || l === "root" ? b = r : l ? b = o : kc(a) && (b = void 0);
    const $ = (0, Nr.default)(a, (0, Se.default)({
      shouldForwardProp: b,
      label: m
    }, v)), C = (g) => typeof g == "function" && g.__emotion_real !== g || (0, Oc.isPlainObject)(g) ? (P) => Dt(g, (0, Se.default)({}, P, {
      theme: Pt({
        theme: P.theme,
        defaultTheme: n,
        themeId: t
      })
    })) : g, T = (g, ...P) => {
      let _ = C(g);
      const Z = P ? P.map(C) : [];
      u && p && Z.push((W) => {
        const q = Pt((0, Se.default)({}, W, {
          defaultTheme: n,
          themeId: t
        }));
        if (!q.components || !q.components[u] || !q.components[u].styleOverrides)
          return null;
        const re = q.components[u].styleOverrides, te = {};
        return Object.entries(re).forEach(([V, F]) => {
          te[V] = Dt(F, (0, Se.default)({}, W, {
            theme: q
          }));
        }), p(W, te);
      }), u && !y && Z.push((W) => {
        var q;
        const re = Pt((0, Se.default)({}, W, {
          defaultTheme: n,
          themeId: t
        })), te = re == null || (q = re.components) == null || (q = q[u]) == null ? void 0 : q.variants;
        return Dt({
          variants: te
        }, (0, Se.default)({}, W, {
          theme: re
        }));
      }), f || Z.push(i);
      const fe = Z.length - P.length;
      if (Array.isArray(g) && fe > 0) {
        const W = new Array(fe).fill("");
        _ = [...g, ...W], _.raw = [...g.raw, ...W];
      }
      const Q = $(_, ...Z);
      if (process.env.NODE_ENV !== "production") {
        let W;
        u && (W = `${u}${(0, Sc.default)(l || "")}`), W === void 0 && (W = `Styled(${(0, $c.default)(a)})`), Q.displayName = W;
      }
      return a.muiName && (Q.muiName = a.muiName), Q;
    };
    return $.withConfig && (T.withConfig = $.withConfig), T;
  };
}
function Dc(e, t) {
  return x({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var le = {};
const Lc = /* @__PURE__ */ je(Wi), zc = /* @__PURE__ */ je($s);
var Uo = Dn;
Object.defineProperty(le, "__esModule", {
  value: !0
});
var Bt = le.alpha = Ho;
le.blend = Zc;
le.colorChannel = void 0;
var Vc = le.darken = Yn;
le.decomposeColor = Re;
var Bc = le.emphasize = Jc, Ar = le.getContrastRatio = Hc;
le.getLuminance = Ft;
le.hexToRgb = Wo;
le.hslToRgb = Yo;
var Fc = le.lighten = Hn;
le.private_safeAlpha = Kc;
le.private_safeColorChannel = void 0;
le.private_safeDarken = Gc;
le.private_safeEmphasize = Ko;
le.private_safeLighten = Xc;
le.recomposeColor = ct;
le.rgbToHex = Yc;
var Ir = Uo(Lc), Uc = Uo(zc);
function qn(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), (0, Uc.default)(e, t, n);
}
function Wo(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Wc(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Re(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Re(Wo(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Ir.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Ir.default)(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const qo = (e) => {
  const t = Re(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
le.colorChannel = qo;
const qc = (e, t) => {
  try {
    return qo(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
le.private_safeColorChannel = qc;
function ct(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Yc(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Re(e);
  return `#${t.map((n, r) => Wc(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Yo(e) {
  e = Re(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), a = (l, d = (l + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), ct({
    type: c,
    values: u
  });
}
function Ft(e) {
  e = Re(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Re(Yo(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Hc(e, t) {
  const n = Ft(e), r = Ft(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ho(e, t) {
  return e = Re(e), t = qn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ct(e);
}
function Kc(e, t, n) {
  try {
    return Ho(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Yn(e, t) {
  if (e = Re(e), t = qn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ct(e);
}
function Gc(e, t, n) {
  try {
    return Yn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Hn(e, t) {
  if (e = Re(e), t = qn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ct(e);
}
function Xc(e, t, n) {
  try {
    return Hn(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Jc(e, t = 0.15) {
  return Ft(e) > 0.5 ? Yn(e, t) : Hn(e, t);
}
function Ko(e, t, n) {
  try {
    return Ko(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Zc(e, t, n, r = 1) {
  const o = (u, l) => Math.round((u ** (1 / r) * (1 - n) + l ** (1 / r) * n) ** r), i = Re(e), a = Re(t), c = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return ct({
    type: "rgb",
    values: c
  });
}
const Qc = {
  black: "#000",
  white: "#fff"
}, vt = Qc, eu = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, tu = eu, nu = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ge = nu, ru = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Xe = ru, ou = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, dt = ou, iu = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Je = iu, su = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Ze = su, au = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Qe = au, cu = ["mode", "contrastThreshold", "tonalOffset"], jr = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: vt.white,
    default: vt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, bn = {
  text: {
    primary: vt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: vt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Dr(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Fc(e.main, o) : t === "dark" && (e.dark = Vc(e.main, i)));
}
function uu(e = "light") {
  return e === "dark" ? {
    main: Je[200],
    light: Je[50],
    dark: Je[400]
  } : {
    main: Je[700],
    light: Je[400],
    dark: Je[800]
  };
}
function lu(e = "light") {
  return e === "dark" ? {
    main: Ge[200],
    light: Ge[50],
    dark: Ge[400]
  } : {
    main: Ge[500],
    light: Ge[300],
    dark: Ge[700]
  };
}
function fu(e = "light") {
  return e === "dark" ? {
    main: Xe[500],
    light: Xe[300],
    dark: Xe[700]
  } : {
    main: Xe[700],
    light: Xe[400],
    dark: Xe[800]
  };
}
function du(e = "light") {
  return e === "dark" ? {
    main: Ze[400],
    light: Ze[300],
    dark: Ze[700]
  } : {
    main: Ze[700],
    light: Ze[500],
    dark: Ze[900]
  };
}
function pu(e = "light") {
  return e === "dark" ? {
    main: Qe[400],
    light: Qe[300],
    dark: Qe[700]
  } : {
    main: Qe[800],
    light: Qe[500],
    dark: Qe[900]
  };
}
function hu(e = "light") {
  return e === "dark" ? {
    main: dt[400],
    light: dt[300],
    dark: dt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: dt[500],
    dark: dt[900]
  };
}
function mu(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, o = ne(e, cu), i = e.primary || uu(t), a = e.secondary || lu(t), c = e.error || fu(t), u = e.info || du(t), l = e.success || pu(t), d = e.warning || hu(t);
  function h(f) {
    const m = Ar(f, bn.text.primary) >= n ? bn.text.primary : jr.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const b = Ar(f, m);
      b < 3 && console.error([`MUI: The contrast ratio of ${b}:1 for ${m} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const p = ({
    color: f,
    name: m,
    mainShade: b = 500,
    lightShade: $ = 300,
    darkShade: C = 700
  }) => {
    if (f = x({}, f), !f.main && f[b] && (f.main = f[b]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${b}\` property.` : Ye(11, m ? ` (${m})` : "", b));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ye(12, m ? ` (${m})` : "", JSON.stringify(f.main)));
    return Dr(f, "light", $, r), Dr(f, "dark", C, r), f.contrastText || (f.contrastText = h(f.main)), f;
  }, v = {
    dark: bn,
    light: jr
  };
  return process.env.NODE_ENV !== "production" && (v[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Me(x({
    // A collection of common colors.
    common: x({}, vt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: tu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, v[t]), o);
}
const yu = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function gu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lr = {
  textTransform: "uppercase"
}, zr = '"Roboto", "Helvetica", "Arial", sans-serif';
function vu(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = zr,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h
  } = n, p = ne(n, yu);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = o / 14, y = h || ((b) => `${b / l * v}rem`), f = (b, $, C, T, g) => x({
    fontFamily: r,
    fontWeight: b,
    fontSize: y($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, r === zr ? {
    letterSpacing: `${gu(T / $)}em`
  } : {}, g, d), m = {
    h1: f(i, 96, 1.167, -1.5),
    h2: f(i, 60, 1.2, -0.5),
    h3: f(a, 48, 1.167, 0),
    h4: f(a, 34, 1.235, 0.25),
    h5: f(a, 24, 1.334, 0),
    h6: f(c, 20, 1.6, 0.15),
    subtitle1: f(a, 16, 1.75, 0.15),
    subtitle2: f(c, 14, 1.57, 0.1),
    body1: f(a, 16, 1.5, 0.15),
    body2: f(a, 14, 1.43, 0.15),
    button: f(c, 14, 1.75, 0.4, Lr),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, Lr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Me(x({
    htmlFontSize: l,
    pxToRem: y,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: u
  }, m), p, {
    clone: !1
    // No need to clone deep
  });
}
const bu = 0.2, Eu = 0.14, xu = 0.12;
function ie(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${bu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Eu})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xu})`].join(",");
}
const Tu = ["none", ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ou = ["duration", "easing", "delay"], Su = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, $u = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Vr(e) {
  return `${Math.round(e)}ms`;
}
function Cu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Ru(e) {
  const t = x({}, Su, e.easing), n = x({}, $u, e.duration);
  return x({
    getAutoHeightDuration: Cu,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: u = 0
      } = i, l = ne(i, Ou);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", h = (p) => !isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : Vr(a)} ${c} ${typeof u == "string" ? u : Vr(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const _u = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, wu = _u, Pu = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Mu(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = ne(e, Pu);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ye(18));
  const c = mu(r), u = Wn(e);
  let l = Me(u, {
    mixins: Dc(u.breakpoints, n),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Tu.slice(),
    typography: vu(c, i),
    transitions: Ru(o),
    zIndex: x({}, wu)
  });
  if (l = Me(l, a), l = t.reduce((d, h) => Me(d, h), l), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (p, v) => {
      let y;
      for (y in p) {
        const f = p[y];
        if (d.indexOf(y) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = we("", y);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[y] = {};
        }
      }
    };
    Object.keys(l.components).forEach((p) => {
      const v = l.components[p].styleOverrides;
      v && p.indexOf("Mui") === 0 && h(v, p);
    });
  }
  return l.unstable_sxConfig = x({}, St, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(h) {
    return sn({
      sx: h,
      theme: this
    });
  }, l;
}
const Nu = Mu(), Kn = Nu, Gn = "$$material", ku = (e) => Tc(e) && e !== "classes", ve = xc({
  themeId: Gn,
  defaultTheme: Kn,
  rootShouldForwardProp: ku
});
function Au(e) {
  return Object.keys(e).length === 0;
}
function Iu(e = null) {
  const t = O.useContext(ro);
  return !t || Au(t) ? e : t;
}
const ju = Wn();
function Go(e = ju) {
  return Iu(e);
}
function Du(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : xo(t.components[n].defaultProps, r);
}
function Lu({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Go(n);
  return r && (o = o[r] || o), Du({
    theme: o,
    name: t,
    props: e
  });
}
function Xo(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Oo(e, t, n);
}
function zu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xn(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xn(zu(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ye(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ye(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
function Jo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Br(e, t) {
  if (e = Xn(e), t = Xo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Jo(e);
}
function Fr(e, t) {
  if (e = Xn(e), t = Xo(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Jo(e);
}
function Jn() {
  const e = Go(Kn);
  return process.env.NODE_ENV !== "production" && O.useDebugValue(e), e[Gn] || e;
}
function Ae({
  props: e,
  name: t
}) {
  return Lu({
    props: e,
    name: t,
    defaultTheme: Kn,
    themeId: Gn
  });
}
function Mn(e, t) {
  return Mn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Mn(e, t);
}
function Zo(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mn(e, t);
}
const Ur = {
  disabled: !1
};
var Vu = process.env.NODE_ENV !== "production" ? s.oneOfType([s.number, s.shape({
  enter: s.number,
  exit: s.number,
  appear: s.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && s.oneOfType([s.string, s.shape({
  enter: s.string,
  exit: s.string,
  active: s.string
}), s.shape({
  enter: s.string,
  enterDone: s.string,
  enterActive: s.string,
  exit: s.string,
  exitDone: s.string,
  exitActive: s.string
})]);
const Ut = be.createContext(null);
var Bu = function(t) {
  return t.scrollTop;
}, pt = "unmounted", Ue = "exited", We = "entering", tt = "entered", Nn = "exiting", Le = /* @__PURE__ */ function(e) {
  Zo(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = o, c = a && !a.isMounting ? r.enter : r.appear, u;
    return i.appearStatus = null, r.in ? c ? (u = Ue, i.appearStatus = We) : u = tt : r.unmountOnExit || r.mountOnEnter ? u = pt : u = Ue, i.state = {
      status: u
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === pt ? {
      status: Ue
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== We && a !== tt && (i = We) : (a === We || a === tt) && (i = Nn);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, a, c;
    return i = a = c = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, c = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: c
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === We) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Rt.findDOMNode(this);
          a && Bu(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Ue && this.setState({
        status: pt
      });
  }, n.performEnter = function(o) {
    var i = this, a = this.props.enter, c = this.context ? this.context.isMounting : o, u = this.props.nodeRef ? [c] : [Rt.findDOMNode(this), c], l = u[0], d = u[1], h = this.getTimeouts(), p = c ? h.appear : h.enter;
    if (!o && !a || Ur.disabled) {
      this.safeSetState({
        status: tt
      }, function() {
        i.props.onEntered(l);
      });
      return;
    }
    this.props.onEnter(l, d), this.safeSetState({
      status: We
    }, function() {
      i.props.onEntering(l, d), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: tt
        }, function() {
          i.props.onEntered(l, d);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Rt.findDOMNode(this);
    if (!i || Ur.disabled) {
      this.safeSetState({
        status: Ue
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Nn
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Ue
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, i.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Rt.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], l = u[0], d = u[1];
      this.props.addEndListener(l, d);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === pt)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = ne(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ be.createElement(Ut.Provider, {
        value: null
      }, typeof a == "function" ? a(o, c) : be.cloneElement(be.Children.only(a), c))
    );
  }, t;
}(be.Component);
Le.contextType = Ut;
Le.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: s.shape({
    current: typeof Element > "u" ? s.any : function(e, t, n, r, o, i) {
      var a = e[t];
      return s.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: s.oneOfType([s.func.isRequired, s.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: s.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: s.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: s.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: s.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: s.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: s.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = Vu;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      o[i - 1] = arguments[i];
    return n.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: s.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: s.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: s.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: s.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: s.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: s.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: s.func
} : {};
function et() {
}
Le.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: et,
  onEntering: et,
  onEntered: et,
  onExit: et,
  onExiting: et,
  onExited: et
};
Le.UNMOUNTED = pt;
Le.EXITED = Ue;
Le.ENTERING = We;
Le.ENTERED = tt;
Le.EXITING = Nn;
const Fu = Le;
function Uu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zn(e, t) {
  var n = function(i) {
    return t && Mt(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && xi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Wu(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in t) {
    if (r[u])
      for (a = 0; a < r[u].length; a++) {
        var l = r[u][a];
        c[r[u][a]] = n(l);
      }
    c[u] = n(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = n(o[a]);
  return c;
}
function qe(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function qu(e, t) {
  return Zn(e.children, function(n) {
    return Nt(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: qe(n, "appear", e),
      enter: qe(n, "enter", e),
      exit: qe(n, "exit", e)
    });
  });
}
function Yu(e, t, n) {
  var r = Zn(e.children), o = Wu(t, r);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Mt(a)) {
      var c = i in t, u = i in r, l = t[i], d = Mt(l) && !l.props.in;
      u && (!c || d) ? o[i] = Nt(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: qe(a, "exit", e),
        enter: qe(a, "enter", e)
      }) : !u && c && !d ? o[i] = Nt(a, {
        in: !1
      }) : u && c && Mt(l) && (o[i] = Nt(a, {
        onExited: n.bind(null, a),
        in: l.props.in,
        exit: qe(a, "exit", e),
        enter: qe(a, "enter", e)
      }));
    }
  }), o;
}
var Hu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ku = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Qn = /* @__PURE__ */ function(e) {
  Zo(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var a = i.handleExited.bind(Uu(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? qu(o, c) : Yu(o, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var a = Zn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = x({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = ne(o, ["component", "childFactory"]), u = this.state.contextValue, l = Hu(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ be.createElement(Ut.Provider, {
      value: u
    }, l) : /* @__PURE__ */ be.createElement(Ut.Provider, {
      value: u
    }, /* @__PURE__ */ be.createElement(i, c, l));
  }, t;
}(be.Component);
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: s.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: s.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: s.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: s.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: s.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: s.func
} : {};
Qn.defaultProps = Ku;
const Gu = Qn, Xu = (e) => e.scrollTop;
function Wr(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
const Ju = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function kn(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Zu = {
  entering: {
    opacity: 1,
    transform: kn(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, En = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), er = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: a,
    in: c,
    onEnter: u,
    onEntered: l,
    onEntering: d,
    onExit: h,
    onExited: p,
    onExiting: v,
    style: y,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: m = Fu
  } = t, b = ne(t, Ju), $ = jn(), C = O.useRef(), T = Jn(), g = O.useRef(null), P = He(g, i.ref, n), _ = (V) => (F) => {
    if (V) {
      const ee = g.current;
      F === void 0 ? V(ee) : V(ee, F);
    }
  }, Z = _(d), fe = _((V, F) => {
    Xu(V);
    const {
      duration: ee,
      delay: oe,
      easing: he
    } = Wr({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let E;
    f === "auto" ? (E = T.transitions.getAutoHeightDuration(V.clientHeight), C.current = E) : E = ee, V.style.transition = [T.transitions.create("opacity", {
      duration: E,
      delay: oe
    }), T.transitions.create("transform", {
      duration: En ? E : E * 0.666,
      delay: oe,
      easing: he
    })].join(","), u && u(V, F);
  }), Q = _(l), W = _(v), q = _((V) => {
    const {
      duration: F,
      delay: ee,
      easing: oe
    } = Wr({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let he;
    f === "auto" ? (he = T.transitions.getAutoHeightDuration(V.clientHeight), C.current = he) : he = F, V.style.transition = [T.transitions.create("opacity", {
      duration: he,
      delay: ee
    }), T.transitions.create("transform", {
      duration: En ? he : he * 0.666,
      delay: En ? ee : ee || he * 0.333,
      easing: oe
    })].join(","), V.style.opacity = 0, V.style.transform = kn(0.75), h && h(V);
  }), re = _(p);
  return /* @__PURE__ */ k(m, x({
    appear: o,
    in: c,
    nodeRef: g,
    onEnter: fe,
    onEntered: Q,
    onEntering: Z,
    onExit: q,
    onExited: re,
    onExiting: W,
    addEndListener: (V) => {
      f === "auto" && $.start(C.current || 0, V), r && r(g.current, V);
    },
    timeout: f === "auto" ? null : f
  }, b, {
    children: (V, F) => /* @__PURE__ */ O.cloneElement(i, x({
      style: x({
        opacity: 0,
        transform: kn(0.75),
        visibility: V === "exited" && !c ? "hidden" : void 0
      }, Zu[V], y, i.props.style),
      ref: P
    }, F))
  }));
});
process.env.NODE_ENV !== "production" && (er.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: s.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: s.bool,
  /**
   * A single child content element.
   */
  children: po.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: s.oneOfType([s.shape({
    enter: s.string,
    exit: s.string
  }), s.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: s.bool,
  /**
   * @ignore
   */
  onEnter: s.func,
  /**
   * @ignore
   */
  onEntered: s.func,
  /**
   * @ignore
   */
  onEntering: s.func,
  /**
   * @ignore
   */
  onExit: s.func,
  /**
   * @ignore
   */
  onExited: s.func,
  /**
   * @ignore
   */
  onExiting: s.func,
  /**
   * @ignore
   */
  style: s.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: s.oneOfType([s.oneOf(["auto"]), s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })])
});
er.muiSupportAuto = !0;
const Qu = er, qr = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
};
function el(e) {
  return we("MuiPaper", e);
}
ke("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const tl = ["className", "component", "elevation", "square", "variant"], nl = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return De(i, el, o);
}, rl = ve("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return x({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && x({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Bt("#fff", qr(t.elevation))}, ${Bt("#fff", qr(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), Qo = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiPaper"
  }), {
    className: o,
    component: i = "div",
    elevation: a = 1,
    square: c = !1,
    variant: u = "elevation"
  } = r, l = ne(r, tl), d = x({}, r, {
    component: i,
    elevation: a,
    square: c,
    variant: u
  }), h = nl(d);
  return process.env.NODE_ENV !== "production" && Jn().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ k(rl, x({
    as: i,
    ownerState: d,
    className: pe(h.root, o),
    ref: n
  }, l));
});
process.env.NODE_ENV !== "production" && (Qo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: bt(Ts, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: s.oneOfType([s.oneOf(["elevation", "outlined"]), s.string])
});
const ei = Qo;
function ol(e) {
  return we("MuiSnackbarContent", e);
}
ke("MuiSnackbarContent", ["root", "message", "action"]);
const il = ["action", "className", "message", "role"], sl = (e) => {
  const {
    classes: t
  } = e;
  return De({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, ol, t);
}, al = ve(ei, {
  name: "MuiSnackbarContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Bc(e.palette.background.default, t);
  return x({}, e.typography.body2, {
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    flexGrow: 1,
    [e.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  });
}), cl = ve("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0"
}), ul = ve("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), ti = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: a,
    role: c = "alert"
  } = r, u = ne(r, il), l = r, d = sl(l);
  return /* @__PURE__ */ it(al, x({
    role: c,
    square: !0,
    elevation: 6,
    className: pe(d.root, i),
    ownerState: l,
    ref: n
  }, u, {
    children: [/* @__PURE__ */ k(cl, {
      className: d.message,
      ownerState: l,
      children: a
    }), o ? /* @__PURE__ */ k(ul, {
      className: d.action,
      ownerState: l,
      children: o
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The message to display.
   */
  message: s.node,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const ni = ti;
function ll(e) {
  return we("MuiSnackbar", e);
}
ke("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const fl = ["onEnter", "onExited"], dl = ["action", "anchorOrigin", "autoHideDuration", "children", "className", "ClickAwayListenerProps", "ContentProps", "disableWindowBlurListener", "message", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "TransitionComponent", "transitionDuration", "TransitionProps"], pl = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ce(n.vertical)}${ce(n.horizontal)}`]
  };
  return De(r, ll, t);
}, Yr = ve("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ce(n.anchorOrigin.vertical)}${ce(n.anchorOrigin.horizontal)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = {
    left: "50%",
    right: "auto",
    transform: "translateX(-50%)"
  };
  return x({
    zIndex: (e.vars || e).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center"
  }, t.anchorOrigin.vertical === "top" ? {
    top: 8
  } : {
    bottom: 8
  }, t.anchorOrigin.horizontal === "left" && {
    justifyContent: "flex-start"
  }, t.anchorOrigin.horizontal === "right" && {
    justifyContent: "flex-end"
  }, {
    [e.breakpoints.up("sm")]: x({}, t.anchorOrigin.vertical === "top" ? {
      top: 24
    } : {
      bottom: 24
    }, t.anchorOrigin.horizontal === "center" && n, t.anchorOrigin.horizontal === "left" && {
      left: 24,
      right: "auto"
    }, t.anchorOrigin.horizontal === "right" && {
      right: 24,
      left: "auto"
    })
  });
}), ri = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiSnackbar"
  }), o = Jn(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    action: a,
    anchorOrigin: {
      vertical: c,
      horizontal: u
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: l = null,
    children: d,
    className: h,
    ClickAwayListenerProps: p,
    ContentProps: v,
    disableWindowBlurListener: y = !1,
    message: f,
    open: m,
    TransitionComponent: b = Qu,
    transitionDuration: $ = i,
    TransitionProps: {
      onEnter: C,
      onExited: T
    } = {}
  } = r, g = ne(r.TransitionProps, fl), P = ne(r, dl), _ = x({}, r, {
    anchorOrigin: {
      vertical: c,
      horizontal: u
    },
    autoHideDuration: l,
    disableWindowBlurListener: y,
    TransitionComponent: b,
    transitionDuration: $
  }), Z = pl(_), {
    getRootProps: fe,
    onClickAway: Q
  } = ws(x({}, _)), [W, q] = O.useState(!0), re = Rs({
    elementType: Yr,
    getSlotProps: fe,
    externalForwardedProps: P,
    ownerState: _,
    additionalProps: {
      ref: n
    },
    className: [Z.root, h]
  }), te = (F) => {
    q(!0), T && T(F);
  }, V = (F, ee) => {
    q(!1), C && C(F, ee);
  };
  return !m && W ? null : /* @__PURE__ */ k(Lt, x({
    onClickAway: Q
  }, p, {
    children: /* @__PURE__ */ k(Yr, x({}, re, {
      children: /* @__PURE__ */ k(b, x({
        appear: !0,
        in: m,
        timeout: $,
        direction: c === "top" ? "down" : "up",
        onEnter: V,
        onExited: te
      }, g, {
        children: d || /* @__PURE__ */ k(ni, x({
          message: f,
          action: a
        }, v))
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: s.node,
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin: s.shape({
    horizontal: s.oneOf(["center", "left", "right"]).isRequired,
    vertical: s.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: s.number,
  /**
   * Replace the `SnackbarContent` component.
   */
  children: s.element,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * Props applied to the `ClickAwayListener` element.
   */
  ClickAwayListenerProps: s.object,
  /**
   * Props applied to the [`SnackbarContent`](/material-ui/api/snackbar-content/) element.
   */
  ContentProps: s.object,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: s.bool,
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key: () => null,
  /**
   * The message to display.
   */
  message: s.node,
  /**
   * @ignore
   */
  onBlur: s.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: s.func,
  /**
   * @ignore
   */
  onFocus: s.func,
  /**
   * @ignore
   */
  onMouseEnter: s.func,
  /**
   * @ignore
   */
  onMouseLeave: s.func,
  /**
   * If `true`, the component is shown.
   */
  open: s.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: s.number,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: s.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: s.oneOfType([s.number, s.shape({
    appear: s.number,
    enter: s.number,
    exit: s.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: s.object
});
const hl = ri;
function oi(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: l
  } = e, [d, h] = O.useState(!1), p = pe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, y = pe(n.child, d && n.childLeaving, r && n.childPulsate);
  return !c && !d && h(!0), O.useEffect(() => {
    if (!c && u != null) {
      const f = setTimeout(u, l);
      return () => {
        clearTimeout(f);
      };
    }
  }, [u, c, l]), /* @__PURE__ */ k("span", {
    className: p,
    style: v,
    children: /* @__PURE__ */ k("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (oi.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object.isRequired,
  className: s.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: s.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: s.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: s.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: s.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: s.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: s.number,
  /**
   * exit delay
   */
  timeout: s.number.isRequired
});
const $e = ke("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ml = ["center", "classes", "className"];
let an = (e) => e, Hr, Kr, Gr, Xr;
const An = 550, yl = 80, gl = qt(Hr || (Hr = an`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), vl = qt(Kr || (Kr = an`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), bl = qt(Gr || (Gr = an`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), El = ve("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), xl = ve(oi, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Xr || (Xr = an`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), $e.rippleVisible, gl, An, ({
  theme: e
}) => e.transitions.easing.easeInOut, $e.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, $e.child, $e.childLeaving, vl, An, ({
  theme: e
}) => e.transitions.easing.easeInOut, $e.childPulsate, bl, ({
  theme: e
}) => e.transitions.easing.easeInOut), ii = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = r, c = ne(r, ml), [u, l] = O.useState([]), d = O.useRef(0), h = O.useRef(null);
  O.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [u]);
  const p = O.useRef(!1), v = jn(), y = O.useRef(null), f = O.useRef(null), m = O.useCallback((T) => {
    const {
      pulsate: g,
      rippleX: P,
      rippleY: _,
      rippleSize: Z,
      cb: fe
    } = T;
    l((Q) => [...Q, /* @__PURE__ */ k(xl, {
      classes: {
        ripple: pe(i.ripple, $e.ripple),
        rippleVisible: pe(i.rippleVisible, $e.rippleVisible),
        ripplePulsate: pe(i.ripplePulsate, $e.ripplePulsate),
        child: pe(i.child, $e.child),
        childLeaving: pe(i.childLeaving, $e.childLeaving),
        childPulsate: pe(i.childPulsate, $e.childPulsate)
      },
      timeout: An,
      pulsate: g,
      rippleX: P,
      rippleY: _,
      rippleSize: Z
    }, d.current)]), d.current += 1, h.current = fe;
  }, [i]), b = O.useCallback((T = {}, g = {}, P = () => {
  }) => {
    const {
      pulsate: _ = !1,
      center: Z = o || g.pulsate,
      fakeElement: fe = !1
      // For test purposes
    } = g;
    if ((T == null ? void 0 : T.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (T == null ? void 0 : T.type) === "touchstart" && (p.current = !0);
    const Q = fe ? null : f.current, W = Q ? Q.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let q, re, te;
    if (Z || T === void 0 || T.clientX === 0 && T.clientY === 0 || !T.clientX && !T.touches)
      q = Math.round(W.width / 2), re = Math.round(W.height / 2);
    else {
      const {
        clientX: V,
        clientY: F
      } = T.touches && T.touches.length > 0 ? T.touches[0] : T;
      q = Math.round(V - W.left), re = Math.round(F - W.top);
    }
    if (Z)
      te = Math.sqrt((2 * W.width ** 2 + W.height ** 2) / 3), te % 2 === 0 && (te += 1);
    else {
      const V = Math.max(Math.abs((Q ? Q.clientWidth : 0) - q), q) * 2 + 2, F = Math.max(Math.abs((Q ? Q.clientHeight : 0) - re), re) * 2 + 2;
      te = Math.sqrt(V ** 2 + F ** 2);
    }
    T != null && T.touches ? y.current === null && (y.current = () => {
      m({
        pulsate: _,
        rippleX: q,
        rippleY: re,
        rippleSize: te,
        cb: P
      });
    }, v.start(yl, () => {
      y.current && (y.current(), y.current = null);
    })) : m({
      pulsate: _,
      rippleX: q,
      rippleY: re,
      rippleSize: te,
      cb: P
    });
  }, [o, m, v]), $ = O.useCallback(() => {
    b({}, {
      pulsate: !0
    });
  }, [b]), C = O.useCallback((T, g) => {
    if (v.clear(), (T == null ? void 0 : T.type) === "touchend" && y.current) {
      y.current(), y.current = null, v.start(0, () => {
        C(T, g);
      });
      return;
    }
    y.current = null, l((P) => P.length > 0 ? P.slice(1) : P), h.current = g;
  }, [v]);
  return O.useImperativeHandle(n, () => ({
    pulsate: $,
    start: b,
    stop: C
  }), [$, b, C]), /* @__PURE__ */ k(El, x({
    className: pe($e.root, i.root, a),
    ref: f
  }, c, {
    children: /* @__PURE__ */ k(Gu, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (ii.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: s.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string
});
const Tl = ii;
function Ol(e) {
  return we("MuiButtonBase", e);
}
const Sl = ke("MuiButtonBase", ["root", "disabled", "focusVisible"]), $l = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Cl = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: o
  } = e, a = De({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Ol, o);
  return n && r && (a.root += ` ${r}`), a;
}, Rl = ve("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Sl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), si = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: l = !1,
    disableRipple: d = !1,
    disableTouchRipple: h = !1,
    focusRipple: p = !1,
    LinkComponent: v = "a",
    onBlur: y,
    onClick: f,
    onContextMenu: m,
    onDragLeave: b,
    onFocus: $,
    onFocusVisible: C,
    onKeyDown: T,
    onKeyUp: g,
    onMouseDown: P,
    onMouseLeave: _,
    onMouseUp: Z,
    onTouchEnd: fe,
    onTouchMove: Q,
    onTouchStart: W,
    tabIndex: q = 0,
    TouchRippleProps: re,
    touchRippleRef: te,
    type: V
  } = r, F = ne(r, $l), ee = O.useRef(null), oe = O.useRef(null), he = He(oe, te), {
    isFocusVisibleRef: E,
    onFocus: R,
    onBlur: L,
    ref: I
  } = vo(), [M, z] = O.useState(!1);
  l && M && z(!1), O.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), ee.current.focus();
    }
  }), []);
  const [N, j] = O.useState(!1);
  O.useEffect(() => {
    j(!0);
  }, []);
  const B = N && !d && !l;
  O.useEffect(() => {
    M && p && !d && N && oe.current.pulsate();
  }, [d, p, M, N]);
  function A(D, rr, bi = h) {
    return Be((or) => (rr && rr(or), !bi && oe.current && oe.current[D](or), !0));
  }
  const U = A("start", P), me = A("stop", m), S = A("stop", b), Ee = A("stop", Z), w = A("stop", (D) => {
    M && D.preventDefault(), _ && _(D);
  }), ze = A("start", W), Ke = A("stop", fe), $t = A("stop", Q), pi = A("stop", (D) => {
    L(D), E.current === !1 && z(!1), y && y(D);
  }, !1), hi = Be((D) => {
    ee.current || (ee.current = D.currentTarget), R(D), E.current === !0 && (z(!0), C && C(D)), $ && $(D);
  }), cn = () => {
    const D = ee.current;
    return u && u !== "button" && !(D.tagName === "A" && D.href);
  }, un = O.useRef(!1), mi = Be((D) => {
    p && !un.current && M && oe.current && D.key === " " && (un.current = !0, oe.current.stop(D, () => {
      oe.current.start(D);
    })), D.target === D.currentTarget && cn() && D.key === " " && D.preventDefault(), T && T(D), D.target === D.currentTarget && cn() && D.key === "Enter" && !l && (D.preventDefault(), f && f(D));
  }), yi = Be((D) => {
    p && D.key === " " && oe.current && M && !D.defaultPrevented && (un.current = !1, oe.current.stop(D, () => {
      oe.current.pulsate(D);
    })), g && g(D), f && D.target === D.currentTarget && cn() && D.key === " " && !D.defaultPrevented && f(D);
  });
  let Ct = u;
  Ct === "button" && (F.href || F.to) && (Ct = v);
  const lt = {};
  Ct === "button" ? (lt.type = V === void 0 ? "button" : V, lt.disabled = l) : (!F.href && !F.to && (lt.role = "button"), l && (lt["aria-disabled"] = l));
  const gi = He(n, I, ee);
  process.env.NODE_ENV !== "production" && O.useEffect(() => {
    B && !oe.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [B]);
  const nr = x({}, r, {
    centerRipple: i,
    component: u,
    disabled: l,
    disableRipple: d,
    disableTouchRipple: h,
    focusRipple: p,
    tabIndex: q,
    focusVisible: M
  }), vi = Cl(nr);
  return /* @__PURE__ */ it(Rl, x({
    as: Ct,
    className: pe(vi.root, c),
    ownerState: nr,
    onBlur: pi,
    onClick: f,
    onContextMenu: me,
    onFocus: hi,
    onKeyDown: mi,
    onKeyUp: yi,
    onMouseDown: U,
    onMouseLeave: w,
    onMouseUp: Ee,
    onDragLeave: S,
    onTouchEnd: Ke,
    onTouchMove: $t,
    onTouchStart: ze,
    ref: gi,
    tabIndex: l ? -1 : q,
    type: V
  }, lt, F, {
    children: [a, B ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ k(Tl, x({
        ref: he,
        center: i
      }, re))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ji,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: s.bool,
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Bi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: s.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: s.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: s.string,
  /**
   * @ignore
   */
  href: s.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: s.elementType,
  /**
   * @ignore
   */
  onBlur: s.func,
  /**
   * @ignore
   */
  onClick: s.func,
  /**
   * @ignore
   */
  onContextMenu: s.func,
  /**
   * @ignore
   */
  onDragLeave: s.func,
  /**
   * @ignore
   */
  onFocus: s.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: s.func,
  /**
   * @ignore
   */
  onKeyDown: s.func,
  /**
   * @ignore
   */
  onKeyUp: s.func,
  /**
   * @ignore
   */
  onMouseDown: s.func,
  /**
   * @ignore
   */
  onMouseLeave: s.func,
  /**
   * @ignore
   */
  onMouseUp: s.func,
  /**
   * @ignore
   */
  onTouchEnd: s.func,
  /**
   * @ignore
   */
  onTouchMove: s.func,
  /**
   * @ignore
   */
  onTouchStart: s.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * @default 0
   */
  tabIndex: s.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: s.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: s.oneOfType([s.func, s.shape({
    current: s.shape({
      pulsate: s.func.isRequired,
      start: s.func.isRequired,
      stop: s.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: s.oneOfType([s.oneOf(["button", "reset", "submit"]), s.string])
});
const _l = si;
function wl(e) {
  return we("MuiIconButton", e);
}
const Pl = ke("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Ml = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Nl = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${ce(r)}`, o && `edge${ce(o)}`, `size${ce(i)}`]
  };
  return De(a, wl, t);
}, kl = ve(_l, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${ce(n.color)}`], n.edge && t[`edge${ce(n.edge)}`], t[`size${ce(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Bt(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return x({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && x({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": x({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Bt(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${Pl.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), ai = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: u = !1,
    disableFocusRipple: l = !1,
    size: d = "medium"
  } = r, h = ne(r, Ml), p = x({}, r, {
    edge: o,
    color: c,
    disabled: u,
    disableFocusRipple: l,
    size: d
  }), v = Nl(p);
  return /* @__PURE__ */ k(kl, x({
    className: pe(v.root, a),
    centerRipple: !0,
    focusRipple: !l,
    disabled: u,
    ref: n
  }, h, {
    ownerState: p,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (ai.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: bt(s.node, (e) => O.Children.toArray(e.children).some((n) => /* @__PURE__ */ O.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: s.oneOfType([s.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: s.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: s.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: s.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: s.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: s.oneOfType([s.oneOf(["small", "medium", "large"]), s.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const ci = ai;
var tr = {}, xn = {};
function Al(e) {
  return we("MuiSvgIcon", e);
}
ke("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Il = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], jl = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ce(t)}`, `fontSize${ce(n)}`]
  };
  return De(o, Al, r);
}, Dl = ve("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ce(n.color)}`], t[`fontSize${ce(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, o, i, a, c, u, l, d, h, p, v, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (u = c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem",
      large: ((l = e.typography) == null || (d = l.pxToRem) == null ? void 0 : d.call(l, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (h = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? h : {
      action: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), Wt = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: l,
    inheritViewBox: d = !1,
    titleAccess: h,
    viewBox: p = "0 0 24 24"
  } = r, v = ne(r, Il), y = /* @__PURE__ */ O.isValidElement(o) && o.type === "svg", f = x({}, r, {
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: p,
    hasSvgAsChild: y
  }), m = {};
  d || (m.viewBox = p);
  const b = jl(f);
  return /* @__PURE__ */ it(Dl, x({
    as: c,
    className: pe(b.root, i),
    focusable: "false",
    color: l,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: n
  }, m, v, y && o.props, {
    ownerState: f,
    children: [y ? o.props.children : o, h ? /* @__PURE__ */ k("title", {
      children: h
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Wt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: s.oneOfType([s.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), s.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: s.oneOfType([s.oneOf(["inherit", "large", "medium", "small"]), s.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: s.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: s.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: s.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: s.string
});
Wt.muiName = "SvgIcon";
function ut(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ k(Wt, x({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Wt.muiName, /* @__PURE__ */ O.memo(/* @__PURE__ */ O.forwardRef(n));
}
const Ll = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), To.configure(e);
  }
}, zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: ce,
  createChainedFunction: Qi,
  createSvgIcon: ut,
  debounce: es,
  deprecatedPropType: ts,
  isMuiElement: ns,
  ownerDocument: ht,
  ownerWindow: rs,
  requirePropFactory: os,
  setRef: yo,
  unstable_ClassNameGenerator: Ll,
  unstable_useEnhancedEffect: go,
  unstable_useId: ss,
  unsupportedProp: as,
  useControlled: cs,
  useEventCallback: Be,
  useForkRef: He,
  useIsFocusVisible: vo
}, Symbol.toStringTag, { value: "Module" })), Vl = /* @__PURE__ */ je(zl);
var Jr;
function Bl() {
  return Jr || (Jr = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Vl;
  }(xn)), xn;
}
var Fl = Dn;
Object.defineProperty(tr, "__esModule", {
  value: !0
});
var ui = tr.default = void 0, Ul = Fl(Bl()), Wl = Ei;
ui = tr.default = (0, Ul.default)(/* @__PURE__ */ (0, Wl.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
const ql = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], Yl = ["component", "slots", "slotProps"], Hl = ["component"];
function Zr(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: c
  } = t, u = ne(t, ql), {
    component: l,
    slots: d = {
      [e]: void 0
    },
    slotProps: h = {
      [e]: void 0
    }
  } = i, p = ne(i, Yl), v = d[e] || r, y = co(h[e], o), f = $o(x({
    className: n
  }, u, {
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: y
  })), {
    props: {
      component: m
    },
    internalRef: b
  } = f, $ = ne(f.props, Hl), C = He(b, y == null ? void 0 : y.ref, t.ref), T = a ? a($) : {}, g = x({}, o, T), P = e === "root" ? m || l : m, _ = ao(v, x({}, e === "root" && !l && !d[e] && c, e !== "root" && !d[e] && c, $, P && {
    as: P
  }, {
    ref: C
  }), g);
  return Object.keys(T).forEach((Z) => {
    delete _[Z];
  }), [v, _];
}
function Kl(e) {
  return we("MuiAlert", e);
}
const Gl = ke("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), Qr = Gl, Xl = ut(/* @__PURE__ */ k("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), Jl = ut(/* @__PURE__ */ k("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), Zl = ut(/* @__PURE__ */ k("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), Ql = ut(/* @__PURE__ */ k("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), ef = ut(/* @__PURE__ */ k("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), tf = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], nf = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `${t}${ce(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return De(i, Kl, o);
}, rf = ve(ei, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${ce(n.color || n.severity)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = e.palette.mode === "light" ? Br : Fr, r = e.palette.mode === "light" ? Fr : Br, o = t.color || t.severity;
  return x({}, e.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, o && t.variant === "standard" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : r(e.palette[o].light, 0.9),
    [`& .${Qr.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "outlined" && {
    color: e.vars ? e.vars.palette.Alert[`${o}Color`] : n(e.palette[o].light, 0.6),
    border: `1px solid ${(e.vars || e).palette[o].light}`,
    [`& .${Qr.icon}`]: e.vars ? {
      color: e.vars.palette.Alert[`${o}IconColor`]
    } : {
      color: e.palette[o].main
    }
  }, o && t.variant === "filled" && x({
    fontWeight: e.typography.fontWeightMedium
  }, e.vars ? {
    color: e.vars.palette.Alert[`${o}FilledColor`],
    backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
  } : {
    backgroundColor: e.palette.mode === "dark" ? e.palette[o].dark : e.palette[o].main,
    color: e.palette.getContrastText(e.palette[o].main)
  }));
}), of = ve("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), sf = ve("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), eo = ve("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), to = {
  success: /* @__PURE__ */ k(Xl, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ k(Jl, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ k(Zl, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ k(Ql, {
    fontSize: "inherit"
  })
}, li = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: a,
    closeText: c = "Close",
    color: u,
    components: l = {},
    componentsProps: d = {},
    icon: h,
    iconMapping: p = to,
    onClose: v,
    role: y = "alert",
    severity: f = "success",
    slotProps: m = {},
    slots: b = {},
    variant: $ = "standard"
  } = r, C = ne(r, tf), T = x({}, r, {
    color: u,
    severity: f,
    variant: $
  }), g = nf(T), P = {
    slots: x({
      closeButton: l.CloseButton,
      closeIcon: l.CloseIcon
    }, b),
    slotProps: x({}, d, m)
  }, [_, Z] = Zr("closeButton", {
    elementType: ci,
    externalForwardedProps: P,
    ownerState: T
  }), [fe, Q] = Zr("closeIcon", {
    elementType: ef,
    externalForwardedProps: P,
    ownerState: T
  });
  return /* @__PURE__ */ it(rf, x({
    role: y,
    elevation: 0,
    ownerState: T,
    className: pe(g.root, a),
    ref: n
  }, C, {
    children: [h !== !1 ? /* @__PURE__ */ k(of, {
      ownerState: T,
      className: g.icon,
      children: h || p[f] || to[f]
    }) : null, /* @__PURE__ */ k(sf, {
      ownerState: T,
      className: g.message,
      children: i
    }), o != null ? /* @__PURE__ */ k(eo, {
      ownerState: T,
      className: g.action,
      children: o
    }) : null, o == null && v ? /* @__PURE__ */ k(eo, {
      ownerState: T,
      className: g.action,
      children: /* @__PURE__ */ k(_, x({
        size: "small",
        "aria-label": c,
        title: c,
        color: "inherit",
        onClick: v
      }, Z, {
        children: /* @__PURE__ */ k(fe, x({
          fontSize: "small"
        }, Q))
      }))
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: s.node,
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: s.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: s.oneOfType([s.oneOf(["error", "info", "success", "warning"]), s.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  components: s.shape({
    CloseButton: s.elementType,
    CloseIcon: s.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/).
   *
   * @default {}
   */
  componentsProps: s.shape({
    closeButton: s.object,
    closeIcon: s.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: s.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: s.shape({
    error: s.node,
    info: s.node,
    success: s.node,
    warning: s.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: s.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: s.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: s.oneOfType([s.oneOf(["error", "info", "success", "warning"]), s.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: s.shape({
    closeButton: s.oneOfType([s.func, s.object]),
    closeIcon: s.oneOfType([s.func, s.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: s.shape({
    closeButton: s.elementType,
    closeIcon: s.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: s.oneOfType([s.oneOf(["filled", "outlined", "standard"]), s.string])
});
const af = li;
function cf(e) {
  return we("MuiTypography", e);
}
ke("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const uf = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], lf = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, e.align !== "inherit" && `align${ce(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
  };
  return De(c, cf, a);
}, ff = ve("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ce(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => x({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), no = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, df = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, pf = (e) => df[e] || e, fi = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiTypography"
  }), o = pf(r.color), i = Bo(x({}, r, {
    color: o
  })), {
    align: a = "inherit",
    className: c,
    component: u,
    gutterBottom: l = !1,
    noWrap: d = !1,
    paragraph: h = !1,
    variant: p = "body1",
    variantMapping: v = no
  } = i, y = ne(i, uf), f = x({}, i, {
    align: a,
    color: o,
    className: c,
    component: u,
    gutterBottom: l,
    noWrap: d,
    paragraph: h,
    variant: p,
    variantMapping: v
  }), m = u || (h ? "p" : v[p] || no[p]) || "span", b = lf(f);
  return /* @__PURE__ */ k(ff, x({
    as: m,
    ref: n,
    ownerState: f,
    className: pe(b.root, c)
  }, y));
});
process.env.NODE_ENV !== "production" && (fi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: s.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: s.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: s.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: s.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: s.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: s.oneOfType([s.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), s.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: s.object
});
const hf = fi;
function mf(e) {
  return we("MuiAlertTitle", e);
}
ke("MuiAlertTitle", ["root"]);
const yf = ["className"], gf = (e) => {
  const {
    classes: t
  } = e;
  return De({
    root: ["root"]
  }, mf, t);
}, vf = ve(hf, {
  name: "MuiAlertTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  fontWeight: e.typography.fontWeightMedium,
  marginTop: -2
})), di = /* @__PURE__ */ O.forwardRef(function(t, n) {
  const r = Ae({
    props: t,
    name: "MuiAlertTitle"
  }), {
    className: o
  } = r, i = ne(r, yf), a = r, c = gf(a);
  return /* @__PURE__ */ k(vf, x({
    gutterBottom: !0,
    component: "div",
    ownerState: a,
    ref: n,
    className: pe(c.root, o)
  }, i));
});
process.env.NODE_ENV !== "production" && (di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: s.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: s.object,
  /**
   * @ignore
   */
  className: s.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: s.oneOfType([s.arrayOf(s.oneOfType([s.func, s.object, s.bool])), s.func, s.object])
});
const bf = di;
function Ef({ content: e, setContent: t }) {
  var h, p, v;
  const [n, r] = be.useState(!1), [o, i] = be.useState(null);
  be.useEffect(() => {
    e && !o ? (i(e), t(null), r(!0)) : e && o && n && r(!1);
  }, [e, o, n]);
  const a = (y, f) => {
    f !== "clickaway" && r(!1);
  }, c = () => {
    i(null);
  }, u = ["error", "info", "success", "warning"].includes(o == null ? void 0 : o.severity), l = Object.keys((o == null ? void 0 : o.options) || {}).filter((y) => y != "alertProps").reduce((y, f) => {
    var m;
    return { ...y, [f]: (m = o == null ? void 0 : o.options) == null ? void 0 : m[f] };
  }, {}), d = Object.keys(((h = o == null ? void 0 : o.options) == null ? void 0 : h.alertProps) || {}).filter((y) => y != "title").reduce((y, f) => {
    var m, b;
    return { ...y, [f]: (b = (m = o == null ? void 0 : o.options) == null ? void 0 : m.alertProps) == null ? void 0 : b[f] };
  }, {});
  return /* @__PURE__ */ k(
    hl,
    {
      sx: { maxWidth: 600, minWidth: 300 },
      open: n,
      autoHideDuration: 4e3,
      ...l,
      onClose: a,
      TransitionProps: { onExited: c },
      children: u ? /* @__PURE__ */ it(af, { severity: o.severity, sx: { width: "100%", "& .MuiAlert-action": { alignItems: "flex-end" } }, elevation: 2, ...d, onClose: a, children: [
        ((p = o == null ? void 0 : o.options) == null ? void 0 : p.alertProps) && ((v = o.options.alertProps) == null ? void 0 : v.title) && /* @__PURE__ */ k(bf, { children: o.options.alertProps.title }),
        o == null ? void 0 : o.message
      ] }) : /* @__PURE__ */ k(
        ni,
        {
          sx: { width: "100%" },
          message: o == null ? void 0 : o.message,
          action: /* @__PURE__ */ k(
            ci,
            {
              size: "small",
              "aria-label": "close",
              color: "inherit",
              onClick: a,
              children: /* @__PURE__ */ k(ui, { fontSize: "small" })
            }
          )
        }
      )
    }
  );
}
function Rf({ options: e, children: t }) {
  const [n, r] = be.useState(null), o = (i, a, c) => r({ message: i, severity: a, options: { ...e, ...c } });
  return /* @__PURE__ */ it(oo.Provider, { value: { initialized: !0, setSnackbar: o }, children: [
    t,
    /* @__PURE__ */ k(Ef, { content: n, setContent: r })
  ] });
}
function _f() {
  return be.useContext(oo);
}
export {
  Rf as SnackbarProvider,
  _f as useSnackbar
};
