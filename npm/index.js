(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(":root{--main-min-container-with: 60px;--main-container-height: auto;--main-container-background: inherit;--main-background: #fff;--main-color: #000;--main-hover-color: #242526}._darkmodeContainer_1u4jb_3{min-width:var(--main-min-container-with);width:60px;height:var(--main-container-height);background-color:var(--main-container-background);font-size:small;display:flex;align-items:center;border:1px solid #55aa00;padding:2px;border-radius:28px}._darkmodeContainer_1u4jb_3 ._switch_1u4jb_15{border-radius:inherit;padding:2px 4px}._darkmodeContainer_1u4jb_3 ._switchHoverDark_1u4jb_19:hover{box-shadow:0 0 10px #fff,0 0 15px #fff}._darkmodeContainer_1u4jb_3 ._switchHoverLight_1u4jb_24:hover{box-shadow:0 0 10px #000,0 0 15px #000}._darkmodeContainer_1u4jb_3 ._addLightBorder_1u4jb_30{background-color:#000;color:#fff}._darkmodeContainer_1u4jb_3 ._addDarkBorder_1u4jb_34{background-color:#fff;color:#000}._darkmodeContainer_1u4jb_3 ._svg_1u4jb_39{display:flex;align-items:center;justify-content:center;color:inherit;background-color:inherit;width:25px;height:25px;border-radius:50%;cursor:pointer}._darkmodeContainer_1u4jb_3 ._svg_1u4jb_39>svg{width:100%;height:100%;border-radius:inherit}._staticSwitch_1u4jb_57{border:none;max-width:fit-content!important;justify-content:center}._normalSwitch_1u4jb_63{justify-content:flex-start}._dinamicSwitch_1u4jb_67{justify-content:flex-end}")),document.head.appendChild(r)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import De, { useState as te, useEffect as ur } from "react";
var ne = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function lr() {
  if (Pe)
    return M;
  Pe = 1;
  var k = De, c = Symbol.for("react.element"), s = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, d = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(l, a, b) {
    var p, w = {}, y = null, D = null;
    b !== void 0 && (y = "" + b), a.key !== void 0 && (y = "" + a.key), a.ref !== void 0 && (D = a.ref);
    for (p in a)
      m.call(a, p) && !R.hasOwnProperty(p) && (w[p] = a[p]);
    if (l && l.defaultProps)
      for (p in a = l.defaultProps, a)
        w[p] === void 0 && (w[p] = a[p]);
    return { $$typeof: c, type: l, key: y, ref: D, props: w, _owner: d.current };
  }
  return M.Fragment = s, M.jsx = _, M.jsxs = _, M;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function fr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var k = De, c = Symbol.for("react.element"), s = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), Y = Symbol.iterator, Z = "@@iterator";
    function q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var C = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        I("error", e, t);
      }
    }
    function I(e, r, t) {
      {
        var n = C.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Oe = !1, xe = !1, Le = !1, Ae = !1, Ie = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === R || Ie || e === d || e === b || e === p || Ae || e === D || Oe || xe || Le || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === w || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case s:
          return "Portal";
        case R:
          return "Profiler";
        case d:
          return "StrictMode";
        case b:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return oe(r) + ".Consumer";
          case _:
            var t = e;
            return oe(t._context) + ".Provider";
          case a:
            return $e(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case y: {
            var u = e, f = u._payload, i = u._init;
            try {
              return P(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, F = 0, ie, se, ce, ue, le, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Me() {
      {
        if (F === 0) {
          ie = console.log, se = console.info, ce = console.warn, ue = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function We() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ie
            }),
            info: x({}, e, {
              value: se
            }),
            warn: x({}, e, {
              value: ce
            }),
            error: x({}, e, {
              value: ue
            }),
            group: x({}, e, {
              value: le
            }),
            groupCollapsed: x({}, e, {
              value: fe
            }),
            groupEnd: x({}, e, {
              value: de
            })
          });
        }
        F < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = C.ReactCurrentDispatcher, J;
    function N(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, B;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ye();
    }
    function he(e, r) {
      if (!e || G)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = z.current, z.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (j) {
              n = j;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (j) {
              n = j;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            n = j;
          }
          e();
        }
      } catch (j) {
        if (j && n && typeof j.stack == "string") {
          for (var o = j.stack.split(`
`), E = n.stack.split(`
`), v = o.length - 1, h = E.length - 1; v >= 1 && h >= 0 && o[v] !== E[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (o[v] !== E[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || o[v] !== E[h]) {
                    var S = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, S), S;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = f, We(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", Ce = A ? N(A) : "";
      return typeof e == "function" && B.set(e, Ce), Ce;
    }
    function Ne(e, r, t) {
      return he(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Be(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case b:
          return N("Suspense");
        case p:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return Ne(e.render);
          case w:
            return U(e.type, r, t);
          case y: {
            var n = e, u = n._payload, f = n._init;
            try {
              return U(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, me = {}, ge = C.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, u) {
      {
        var f = Function.call.bind(V);
        for (var i in e)
          if (f(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (H(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), H(null)), o instanceof Error && !(o.message in me) && (me[o.message] = !0, H(u), g("Failed %s type: %s", t, o.message), H(null));
          }
      }
    }
    var Ve = Array.isArray;
    function K(e) {
      return Ve(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ze(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), pe(e);
    }
    var $ = C.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ye, X;
    X = {};
    function ze(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = P($.current.type);
        X[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P($.current.type), e.ref), X[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          be || (be = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, u, f, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function er(e, r, t, n, u) {
      {
        var f, i = {}, o = null, E = null;
        t !== void 0 && (_e(t), o = "" + t), Je(r) && (_e(r.key), o = "" + r.key), ze(r) && (E = r.ref, Ge(r, u));
        for (f in r)
          V.call(r, f) && !qe.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            i[f] === void 0 && (i[f] = v[f]);
        }
        if (o || E) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ke(i, h), E && Xe(i, h);
        }
        return Qe(e, o, E, u, n, $.current, i);
      }
    }
    var Q = C.ReactCurrentOwner, Ee = C.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function we() {
      {
        if (Q.current) {
          var e = P(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Re = {};
    function tr(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Re[t])
          return;
        Re[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + P(e._owner.type) + "."), L(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && Se(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = q(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), i; !(i = f.next()).done; )
              re(i.value) && Se(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var u = P(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Te(e, r, t, n, u, f) {
      {
        var i = Fe(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = rr(u);
          E ? o += E : o += we();
          var v;
          e === null ? v = "null" : K(e) ? v = "array" : e !== void 0 && e.$$typeof === c ? (v = "<" + (P(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var h = er(e, r, t, u, f);
        if (h == null)
          return h;
        if (i) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (K(S)) {
                for (var A = 0; A < S.length; A++)
                  ke(S[A], e);
                Object.freeze && Object.freeze(S);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(S, e);
        }
        return e === m ? ar(h) : nr(h), h;
      }
    }
    function or(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Te(e, r, t, !1);
    }
    var sr = ir, cr = or;
    W.Fragment = m, W.jsx = sr, W.jsxs = cr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ne.exports = lr() : ne.exports = fr();
var O = ne.exports;
const dr = "_darkmodeContainer_1u4jb_3", vr = "_switchHoverDark_1u4jb_19", hr = "_switchHoverLight_1u4jb_24", mr = "_addLightBorder_1u4jb_30", gr = "_addDarkBorder_1u4jb_34", pr = "_svg_1u4jb_39", _r = "_staticSwitch_1u4jb_57", br = "_normalSwitch_1u4jb_63", yr = "_dinamicSwitch_1u4jb_67", T = {
  darkmodeContainer: dr,
  switch: "_switch_1u4jb_15",
  switchHoverDark: vr,
  switchHoverLight: hr,
  addLightBorder: mr,
  addDarkBorder: gr,
  svg: pr,
  staticSwitch: _r,
  normalSwitch: br,
  dinamicSwitch: yr
}, Er = () => {
  const k = /* @__PURE__ */ O.jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 256 256", children: /* @__PURE__ */ O.jsx("path", { d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" }) });
  return { dark: /* @__PURE__ */ O.jsxs("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ O.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
    /* @__PURE__ */ O.jsx("path", { d: "M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" })
  ] }), light: k };
}, wr = () => ({
  defaultStyles: Rr,
  icons: Tr
}), Rr = [
  {
    theme: "Dark",
    variables: ["--main-background", "--main-color", "--main-hover-color"],
    values: ["#000", "#fff", "#fbfbfb"]
  },
  {
    theme: "Light",
    variables: ["--main-background", "--main-color", "--main-hover-color"],
    values: ["#fff", "#000", "#242526"]
  }
], { dark: Sr, light: kr } = Er(), Tr = [
  {
    theme: "Dark",
    icon: Sr
  },
  {
    theme: "Light",
    icon: kr
  }
];
class Cr {
  /**
   * Returns a MediaQueryList object representing the user's preference for dark theme.
   *
   * @return {MediaQueryList} The MediaQueryList object representing the user's preference for dark theme.
   */
  userDarkTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)");
  }
  /**
   * A function that sets up a listener for changes to the user's dark theme and provides methods to add and remove listeners.
   *
   * @param {Fn} fn - The callback function to be executed when the user's dark theme changes.
   * @return {Object} An object containing methods to add and remove the listener.
   */
  systemThemeListener() {
    return { addListener: (m) => this.userDarkTheme().addEventListener("change", m), removeListener: (m) => this.userDarkTheme().removeEventListener("change", m) };
  }
  /**
   * Applies the specified theme styles to the given set of elements.
   *
   * @param {themeType} theme - The theme to apply.
   * @param {switchStylesProps} styles - The array with the dark and light objects of styles to apply.
   * @return {void} This function does not return a value.
   */
  changePropsStyles(c, s) {
    const m = (l, a) => {
      for (let b = 0; b < l.length; b++) {
        const p = l[b], w = a[b], y = document.querySelector(":root");
        y == null || y.style.setProperty(p, w);
      }
    }, d = this.changeMode(c), R = s[0].theme === "Light" ? s[0] : s[1], _ = s[0].theme === "Dark" ? s[0] : s[1];
    d !== "Light" ? m(R.variables, R.values) : m(_.variables, _.values);
  }
  /**
   * Change the mode of the theme.
   *
   * @param {themeType} theme - The current theme mode.
   * @return {themeType} The updated theme mode.
   */
  changeMode(c) {
    return c !== "Dark" ? "Dark" : "Light";
  }
  /**
   * Detects the theme of the user.
   *
   * @return {themeType} The theme detected: "Dark" or "Light".
   */
  detectUserTheme() {
    return this.userDarkTheme().matches ? "Dark" : "Light";
  }
  /**
   * Retrieves or sets the dark mode preference from local storage.
   *
   * @param {themeType} theme - The theme to set as the dark mode preference.
   * @return {themeType | undefined} The dark mode preference retrieved from local storage, or undefined if no preference is set.
   */
  storageDarkmodePreference(c) {
    const s = window.localStorage.getItem(
      "dark-mode-3e2c2d6d-a57e-499a-afdf-5f0f85140012"
    ) ?? void 0;
    if (c)
      window.localStorage.setItem(
        "dark-mode-3e2c2d6d-a57e-499a-afdf-5f0f85140012",
        c
      );
    else
      return s;
  }
  /**
   * Handles the icons based on the theme.
   *
   * @param {themeType} theme - The theme type Light or Dark.
   * @param {iconsType} icons - The object with the dark and light theme and the icons .
   * @return {string | undefined} The icon based on the theme, or undefined if no matching icon is found.
   */
  handlerIcons(c, s) {
    if (s && c) {
      const m = s[0].theme === "Dark" ? s[0].theme : s[1].theme, d = s[1].theme === "Light" ? s[1].theme : s[0].theme, R = s[0].icon, _ = s[1].icon;
      return c === m ? R : d === c ? _ : void 0;
    }
  }
  /**
   * A function that handles the default switch theme.
   *
   * @return {Object} An object containing the default styles and icons.
   */
  handlerDefaultSwitchTheme() {
    const { defaultStyles: c, icons: s } = wr();
    return { defaultStyles: c, icons: s };
  }
}
const Pr = (k) => {
  const {
    theme: c,
    setTheme: s,
    setSwitchTheme: m,
    icons: d,
    setIcon: R,
    switchStyles: _,
    darkmode: l
  } = k;
  c && s((a) => a === "Light" ? "Dark" : "Light"), m((a) => !a), d && c && typeof d != "boolean" && R(l.handlerIcons(c, d)), c && (_ ? l.changePropsStyles(c, _) : l.changeMode(c));
}, Dr = (k) => {
  const { switchStyles: c, icons: s, switchMode: m, styles: d, hover: R, isDark: _ } = k, l = new Cr(), [a, b] = te(), [p, w] = te(!1), [y, D] = te();
  ur(() => {
    const { addListener: Z, removeListener: q } = l.systemThemeListener(), C = () => b(l.detectUserTheme());
    Z(C);
    const g = l.storageDarkmodePreference();
    if (!g && !a ? b(l.detectUserTheme()) : g && !a ? b(g) : a && (c ? l.changePropsStyles(a, c) : l.changeMode(a), l.storageDarkmodePreference(a), s && a && typeof s != "boolean" && D(l.handlerIcons(a, s)), a === "Dark" && w(!0)), a && !c) {
      const I = l.handlerDefaultSwitchTheme().defaultStyles;
      l.changePropsStyles(a, I);
    }
    if (a && typeof s == "boolean") {
      const I = l.handlerDefaultSwitchTheme().icons;
      D(l.handlerIcons(a, I));
    }
    return _ && a && _(a), () => q(C);
  }, [a]);
  const Y = {
    theme: a,
    setTheme: b,
    setSwitchTheme: w,
    icons: s,
    setIcon: D,
    switchStyles: c,
    darkmode: l
  };
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      style: d == null ? void 0 : d.mainContainer,
      className: `${T.darkmodeContainer} 
    ${m === "static" ? T.staticSwitch : p ? T.dinamicSwitch : T.normalSwitch}`,
      onClick: () => Pr(Y),
      children: /* @__PURE__ */ O.jsx(
        "div",
        {
          style: d == null ? void 0 : d.switchContainer,
          className: `${T.switch} ${y ? "" : a === "Dark" ? T.addDarkBorder : a === "Light" ? T.addLightBorder : ""} ${R ? a === "Dark" ? T.switchHoverDark : a === "Light" ? T.switchHoverLight : "" : ""}`,
          children: /* @__PURE__ */ O.jsx("div", { style: d == null ? void 0 : d.iconsContainer, className: T.svg, children: y || a })
        }
      )
    }
  );
};
export {
  Dr as default
};
