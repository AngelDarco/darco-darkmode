(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(":root{--main-min-container-with: 60px;--main-container-height: auto;--main-container-background: inherit;--main-background: #fff;--main-color: #000;--main-hover-color: #242526}._darkmodeContainer_1u4jb_3{min-width:var(--main-min-container-with);width:60px;height:var(--main-container-height);background-color:var(--main-container-background);font-size:small;display:flex;align-items:center;border:1px solid #55aa00;padding:2px;border-radius:28px}._darkmodeContainer_1u4jb_3 ._switch_1u4jb_15{border-radius:inherit;padding:2px 4px}._darkmodeContainer_1u4jb_3 ._switchHoverDark_1u4jb_19:hover{box-shadow:0 0 10px #fff,0 0 15px #fff}._darkmodeContainer_1u4jb_3 ._switchHoverLight_1u4jb_24:hover{box-shadow:0 0 10px #000,0 0 15px #000}._darkmodeContainer_1u4jb_3 ._addLightBorder_1u4jb_30{background-color:#000;color:#fff}._darkmodeContainer_1u4jb_3 ._addDarkBorder_1u4jb_34{background-color:#fff;color:#000}._darkmodeContainer_1u4jb_3 ._svg_1u4jb_39{display:flex;align-items:center;justify-content:center;color:inherit;background-color:inherit;width:25px;height:25px;border-radius:50%;cursor:pointer}._darkmodeContainer_1u4jb_3 ._svg_1u4jb_39>svg{width:100%;height:100%;border-radius:inherit}._staticSwitch_1u4jb_57{border:none;max-width:fit-content!important;justify-content:center}._normalSwitch_1u4jb_63{justify-content:flex-start}._dinamicSwitch_1u4jb_67{justify-content:flex-end}")),document.head.appendChild(r)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import je, { useState as re, useEffect as ur } from "react";
var te = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function lr() {
  if (Ce)
    return $;
  Ce = 1;
  var T = je, c = Symbol.for("react.element"), s = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, v = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(o, d, R) {
    var _, b = {}, y = null, x = null;
    R !== void 0 && (y = "" + R), d.key !== void 0 && (y = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (_ in d)
      g.call(d, _) && !w.hasOwnProperty(_) && (b[_] = d[_]);
    if (o && o.defaultProps)
      for (_ in d = o.defaultProps, d)
        b[_] === void 0 && (b[_] = d[_]);
    return { $$typeof: c, type: o, key: y, ref: x, props: b, _owner: v.current };
  }
  return $.Fragment = s, $.jsx = l, $.jsxs = l, $;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function fr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var T = je, c = Symbol.for("react.element"), s = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), o = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), W = Symbol.iterator, Z = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var k = T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Oe = !1, xe = !1, Le = !1, Ae = !1, Ie = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === w || Ie || e === v || e === R || e === _ || Ae || e === x || Oe || xe || Le || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === b || e.$$typeof === l || e.$$typeof === o || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case s:
          return "Portal";
        case w:
          return "Profiler";
        case v:
          return "StrictMode";
        case R:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return ae(r) + ".Consumer";
          case l:
            var t = e;
            return ae(t._context) + ".Provider";
          case d:
            return $e(e, e.render, "ForwardRef");
          case b:
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
    var O = Object.assign, I = 0, oe, ie, se, ce, ue, le, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Me() {
      {
        if (I === 0) {
          oe = console.log, ie = console.info, se = console.warn, ce = console.error, ue = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        I++;
      }
    }
    function We() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: oe
            }),
            info: O({}, e, {
              value: ie
            }),
            warn: O({}, e, {
              value: se
            }),
            error: O({}, e, {
              value: ce
            }),
            group: O({}, e, {
              value: ue
            }),
            groupCollapsed: O({}, e, {
              value: le
            }),
            groupEnd: O({}, e, {
              value: fe
            })
          });
        }
        I < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = k.ReactCurrentDispatcher, z;
    function N(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var J = !1, B;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ye();
    }
    function ve(e, r) {
      if (!e || J)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = q.current, q.current = null, Me();
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
          for (var a = j.stack.split(`
`), E = n.stack.split(`
`), h = a.length - 1, m = E.length - 1; h >= 1 && m >= 0 && a[h] !== E[m]; )
            m--;
          for (; h >= 1 && m >= 0; h--, m--)
            if (a[h] !== E[m]) {
              if (h !== 1 || m !== 1)
                do
                  if (h--, m--, m < 0 || a[h] !== E[m]) {
                    var S = `
` + a[h].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, S), S;
                  }
                while (h >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = f, We(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", ke = A ? N(A) : "";
      return typeof e == "function" && B.set(e, ke), ke;
    }
    function Ne(e, r, t) {
      return ve(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Be(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case R:
          return N("Suspense");
        case _:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ne(e.render);
          case b:
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
    var V = Object.prototype.hasOwnProperty, he = {}, me = k.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, u) {
      {
        var f = Function.call.bind(V);
        for (var i in e)
          if (f(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              a = h;
            }
            a && !(a instanceof Error) && (H(u), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), H(null)), a instanceof Error && !(a.message in he) && (he[a.message] = !0, H(u), p("Failed %s type: %s", t, a.message), H(null));
          }
      }
    }
    var Ve = Array.isArray;
    function G(e) {
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
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function pe(e) {
      if (Ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), ge(e);
    }
    var F = k.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, be, K;
    K = {};
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
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = P(F.current.type);
        K[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(F.current.type), e.ref), K[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          _e || (_e = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          be || (be = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, u, f, i) {
      var a = {
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
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, u) {
      {
        var f, i = {}, a = null, E = null;
        t !== void 0 && (pe(t), a = "" + t), Je(r) && (pe(r.key), a = "" + r.key), ze(r) && (E = r.ref, Ge(r, u));
        for (f in r)
          V.call(r, f) && !qe.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (f in h)
            i[f] === void 0 && (i[f] = h[f]);
        }
        if (a || E) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(i, m), E && Xe(i, m);
        }
        return Qe(e, a, E, u, n, F.current, i);
      }
    }
    var X = k.ReactCurrentOwner, ye = k.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Ee() {
      {
        if (X.current) {
          var e = P(X.current.type);
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
    var we = {};
    function tr(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + P(e._owner.type) + "."), L(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function Se(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && Re(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Y(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), i; !(i = f.next()).done; )
              ee(i.value) && Re(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var u = P(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Te(e, r, t, n, u, f) {
      {
        var i = Fe(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = rr(u);
          E ? a += E : a += Ee();
          var h;
          e === null ? h = "null" : G(e) ? h = "array" : e !== void 0 && e.$$typeof === c ? (h = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, a);
        }
        var m = er(e, r, t, u, f);
        if (m == null)
          return m;
        if (i) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (G(S)) {
                for (var A = 0; A < S.length; A++)
                  Se(S[A], e);
                Object.freeze && Object.freeze(S);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Se(S, e);
        }
        return e === g ? ar(m) : nr(m), m;
      }
    }
    function or(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Te(e, r, t, !1);
    }
    var sr = ir, cr = or;
    M.Fragment = g, M.jsx = sr, M.jsxs = cr;
  }()), M;
}
process.env.NODE_ENV === "production" ? te.exports = lr() : te.exports = fr();
var D = te.exports;
const dr = "_darkmodeContainer_1u4jb_3", vr = "_switchHoverDark_1u4jb_19", hr = "_switchHoverLight_1u4jb_24", mr = "_addLightBorder_1u4jb_30", gr = "_addDarkBorder_1u4jb_34", pr = "_svg_1u4jb_39", _r = "_staticSwitch_1u4jb_57", br = "_normalSwitch_1u4jb_63", yr = "_dinamicSwitch_1u4jb_67", C = {
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
  const T = /* @__PURE__ */ D.jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 256 256", children: /* @__PURE__ */ D.jsx("path", { d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" }) });
  return { dark: /* @__PURE__ */ D.jsxs("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ D.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
    /* @__PURE__ */ D.jsx("path", { d: "M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" })
  ] }), light: T };
}, wr = () => ({
  defaultStyles: Rr,
  icons: kr
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
], { dark: Sr, light: Tr } = Er(), kr = [
  {
    theme: "Dark",
    icon: Sr
  },
  {
    theme: "Light",
    icon: Tr
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
    return { addListener: (g) => this.userDarkTheme().addEventListener("change", g), removeListener: (g) => this.userDarkTheme().removeEventListener("change", g) };
  }
  /**
   * Applies the specified theme styles to the given set of elements.
   *
   * @param {themeType} theme - The theme to apply.
   * @param {switchStylesProps} styles - The array with the dark and light objects of styles to apply.
   * @return {void} This function does not return a value.
   */
  changePropsStyles(c, s) {
    const g = (o, d) => {
      for (let R = 0; R < o.length; R++) {
        const _ = o[R], b = d[R], y = document.querySelector(":root");
        y == null || y.style.setProperty(_, b);
      }
    }, v = this.changeMode(c), w = s[0].theme === "Light" ? s[0] : s[1], l = s[0].theme === "Dark" ? s[0] : s[1];
    v !== "Light" ? g(w.variables, w.values) : g(l.variables, l.values);
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
      const g = s[0].theme === "Dark" ? s[0].theme : s[1].theme, v = s[1].theme === "Light" ? s[1].theme : s[0].theme, w = s[0].icon, l = s[1].icon;
      return c === g ? w : v === c ? l : void 0;
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
const Pr = (T) => {
  const {
    theme: c,
    setTheme: s,
    setSwitchTheme: g,
    icons: v,
    setIcon: w,
    switchStyles: l,
    darkmode: o
  } = T;
  c && s((d) => d === "Light" ? "Dark" : "Light"), g((d) => !d), v && c && typeof v != "boolean" && w(o.handlerIcons(c, v)), c && (l ? o.changePropsStyles(c, l) : o.changeMode(c));
}, Dr = (T) => {
  const { switchStyles: c, icons: s, switchMode: g, styles: v, hover: w } = T, l = new Cr(), [o, d] = re(), [R, _] = re(!1), [b, y] = re();
  ur(() => {
    const { addListener: W, removeListener: Z } = l.systemThemeListener(), Y = () => d(l.detectUserTheme());
    W(Y);
    const k = l.storageDarkmodePreference();
    if (!k && !o ? d(l.detectUserTheme()) : k && !o ? d(k) : o && (c ? l.changePropsStyles(o, c) : l.changeMode(o), l.storageDarkmodePreference(o), s && o && typeof s != "boolean" && y(l.handlerIcons(o, s)), o === "Dark" && _(!0)), o && !c) {
      const p = l.handlerDefaultSwitchTheme().defaultStyles;
      l.changePropsStyles(o, p);
    }
    if (o && typeof s == "boolean") {
      const p = l.handlerDefaultSwitchTheme().icons;
      y(l.handlerIcons(o, p));
    }
    return () => Z(Y);
  }, [o]);
  const x = {
    theme: o,
    setTheme: d,
    setSwitchTheme: _,
    icons: s,
    setIcon: y,
    switchStyles: c,
    darkmode: l
  };
  return /* @__PURE__ */ D.jsx(
    "div",
    {
      style: v == null ? void 0 : v.mainContainer,
      className: `${C.darkmodeContainer} 
    ${g === "static" ? C.staticSwitch : R ? C.dinamicSwitch : C.normalSwitch}`,
      onClick: () => Pr(x),
      children: /* @__PURE__ */ D.jsx(
        "div",
        {
          style: v == null ? void 0 : v.switchContainer,
          className: `${C.switch} ${b ? "" : o === "Dark" ? C.addDarkBorder : o === "Light" ? C.addLightBorder : ""} ${w ? o === "Dark" ? C.switchHoverDark : o === "Light" ? C.switchHoverLight : "" : ""}`,
          children: /* @__PURE__ */ D.jsx("div", { style: v == null ? void 0 : v.iconsContainer, className: C.svg, children: b || o })
        }
      )
    }
  );
};
export {
  Dr as default
};
