(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(":root{--main-min-container-with: 60px;--main-container-height: auto;--main-container-background: inherit;--main-background: #fff;--main-color: #000;--main-hover-color: #242526}._darkmodeContainer_1st2f_3{min-width:var(--main-min-container-with);width:60px;height:var(--main-container-height);background-color:var(--main-container-background);font-size:small;display:flex;align-items:center;border:1px solid #55aa00;padding:2px;border-radius:28px}._darkmodeContainer_1st2f_3 ._switch_1st2f_15{border-radius:inherit;padding:2px 4px}._darkmodeContainer_1st2f_3 ._switchHover_1st2f_19:hover{box-shadow:0 0 10px var(--main-hover-color),0 0 15px var(--main-hover-color)}._darkmodeContainer_1st2f_3 ._addLightBorder_1st2f_26{background-color:#000;color:#fff}._darkmodeContainer_1st2f_3 ._addDarkBorder_1st2f_30{background-color:#fff;color:#000}._darkmodeContainer_1st2f_3 ._svg_1st2f_35{display:flex;align-items:center;justify-content:center;color:inherit;background-color:inherit;width:25px;height:25px;border-radius:50%;cursor:pointer}._darkmodeContainer_1st2f_3 ._svg_1st2f_35>svg{width:100%;height:100%;border-radius:inherit}._staticSwitch_1st2f_53{border:none;max-width:fit-content!important;justify-content:center}._normalSwitch_1st2f_59{justify-content:flex-start}._dinamicSwitch_1st2f_63{justify-content:flex-end}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import Pe, { useState as ee, useEffect as ur } from "react";
var re = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function lr() {
  if (ke)
    return W;
  ke = 1;
  var O = Pe, l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, m = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(o, d, R) {
    var p, g = {}, _ = null, j = null;
    R !== void 0 && (_ = "" + R), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (j = d.ref);
    for (p in d)
      E.call(d, p) && !S.hasOwnProperty(p) && (g[p] = d[p]);
    if (o && o.defaultProps)
      for (p in d = o.defaultProps, d)
        g[p] === void 0 && (g[p] = d[p]);
    return { $$typeof: l, type: o, key: _, ref: j, props: g, _owner: m.current };
  }
  return W.Fragment = s, W.jsx = f, W.jsxs = f, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function fr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var O = Pe, l = Symbol.for("react.element"), s = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), o = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), T = Symbol.iterator, L = "@@iterator";
    function Oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = T && e[T] || e[L];
      return typeof r == "function" ? r : null;
    }
    var A = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = A.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, je = !1, Ae = !1, Ie = !1, Fe = !1, te;
    te = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === S || Fe || e === m || e === R || e === p || Ie || e === j || De || je || Ae || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === g || e.$$typeof === f || e.$$typeof === o || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case s:
          return "Portal";
        case S:
          return "Profiler";
        case m:
          return "StrictMode";
        case R:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            var r = e;
            return ne(r) + ".Consumer";
          case f:
            var t = e;
            return ne(t._context) + ".Provider";
          case d:
            return $e(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : k(e.type) || "Memo";
          case _: {
            var c = e, u = c._payload, i = c._init;
            try {
              return k(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, $ = 0, ae, oe, ie, se, ce, ue, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Me() {
      {
        if ($ === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, ce = console.group, ue = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
        $++;
      }
    }
    function We() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ae
            }),
            info: D({}, e, {
              value: oe
            }),
            warn: D({}, e, {
              value: ie
            }),
            error: D({}, e, {
              value: se
            }),
            group: D({}, e, {
              value: ce
            }),
            groupCollapsed: D({}, e, {
              value: ue
            }),
            groupEnd: D({}, e, {
              value: le
            })
          });
        }
        $ < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = A.ReactCurrentDispatcher, q;
    function N(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, B;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ye();
    }
    function de(e, r) {
      if (!e || z)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Z.current, Z.current = null, Me();
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
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (C) {
              n = C;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var a = C.stack.split(`
`), y = n.stack.split(`
`), v = a.length - 1, h = y.length - 1; v >= 1 && h >= 0 && a[v] !== y[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (a[v] !== y[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || a[v] !== y[h]) {
                    var w = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, w), w;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        z = !1, Z.current = u, We(), Error.prepareStackTrace = c;
      }
      var F = e ? e.displayName || e.name : "", Te = F ? N(F) : "";
      return typeof e == "function" && B.set(e, Te), Te;
    }
    function Ne(e, r, t) {
      return de(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Be(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case R:
          return N("Suspense");
        case p:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ne(e.render);
          case g:
            return V(e.type, r, t);
          case _: {
            var n = e, c = n._payload, u = n._init;
            try {
              return V(u(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ve = {}, he = A.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, c) {
      {
        var u = Function.call.bind(U);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (H(c), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), H(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, H(c), b("Failed %s type: %s", t, a.message), H(null));
          }
      }
    }
    var Ue = Array.isArray;
    function J(e) {
      return Ue(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function pe(e) {
      if (Ze(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), me(e);
    }
    var M = A.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, _e, G;
    G = {};
    function ze(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = k(M.current.type);
        G[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(M.current.type), e.ref), G[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          ge || (ge = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          _e || (_e = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, c, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
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
        value: c
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, c) {
      {
        var u, i = {}, a = null, y = null;
        t !== void 0 && (pe(t), a = "" + t), Je(r) && (pe(r.key), a = "" + r.key), ze(r) && (y = r.ref, Ge(r, c));
        for (u in r)
          U.call(r, u) && !qe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            i[u] === void 0 && (i[u] = v[u]);
        }
        if (a || y) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(i, h), y && Xe(i, h);
        }
        return Qe(e, a, y, c, n, M.current, i);
      }
    }
    var K = A.ReactCurrentOwner, be = A.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function ye() {
      {
        if (K.current) {
          var e = k(K.current.type);
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
    var Ee = {};
    function tr(e) {
      {
        var r = ye();
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
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + k(e._owner.type) + "."), I(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), I(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && Re(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Oe(e);
          if (typeof c == "function" && c !== e.entries)
            for (var u = c.call(e), i; !(i = u.next()).done; )
              Q(i.value) && Re(i.value, r);
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
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = k(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var c = k(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            I(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function Se(e, r, t, n, c, u) {
      {
        var i = Le(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = rr(c);
          y ? a += y : a += ye();
          var v;
          e === null ? v = "null" : J(e) ? v = "array" : e !== void 0 && e.$$typeof === l ? (v = "<" + (k(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var h = er(e, r, t, c, u);
        if (h == null)
          return h;
        if (i) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (J(w)) {
                for (var F = 0; F < w.length; F++)
                  we(w[F], e);
                Object.freeze && Object.freeze(w);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(w, e);
        }
        return e === E ? ar(h) : nr(h), h;
      }
    }
    function or(e, r, t) {
      return Se(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Se(e, r, t, !1);
    }
    var sr = ir, cr = or;
    Y.Fragment = E, Y.jsx = sr, Y.jsxs = cr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? re.exports = lr() : re.exports = fr();
var x = re.exports;
const dr = "_darkmodeContainer_1st2f_3", vr = "_switchHover_1st2f_19", hr = "_addLightBorder_1st2f_26", mr = "_addDarkBorder_1st2f_30", pr = "_svg_1st2f_35", gr = "_staticSwitch_1st2f_53", _r = "_normalSwitch_1st2f_59", br = "_dinamicSwitch_1st2f_63", P = {
  darkmodeContainer: dr,
  switch: "_switch_1st2f_15",
  switchHover: vr,
  addLightBorder: hr,
  addDarkBorder: mr,
  svg: pr,
  staticSwitch: gr,
  normalSwitch: _r,
  dinamicSwitch: br
}, yr = () => {
  const O = /* @__PURE__ */ x.jsx("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 256 256", children: /* @__PURE__ */ x.jsx("path", { d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" }) });
  return { dark: /* @__PURE__ */ x.jsxs("svg", { stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ x.jsx("path", { fill: "none", d: "M0 0h24v24H0z" }),
    /* @__PURE__ */ x.jsx("path", { d: "M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" })
  ] }), light: O };
}, Er = () => ({
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
], { dark: wr, light: Sr } = yr(), Tr = [
  {
    theme: "Dark",
    icon: wr
  },
  {
    theme: "Light",
    icon: Sr
  }
];
class kr {
  /**
   * Returns a MediaQueryList object representing the user's preference for dark theme.
   *
   * @return {MediaQueryList} The MediaQueryList object representing the user's preference for dark theme.
   */
  userDarkTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)");
  }
  /**
   * Applies the specified theme styles to the given set of elements.
   *
   * @param {themeType} theme - The theme to apply.
   * @param {switchStylesProps} styles - The array with the dark and light objects of styles to apply.
   * @return {void} This function does not return a value.
   */
  changePropsStyles(l, s) {
    const E = (o, d) => {
      for (let R = 0; R < o.length; R++) {
        const p = o[R], g = d[R], _ = document.querySelector(":root");
        _ == null || _.style.setProperty(p, g);
      }
    }, m = this.changeMode(l), S = s[0].theme === "Light" ? s[0] : s[1], f = s[0].theme === "Dark" ? s[0] : s[1];
    m !== "Light" ? E(S.variables, S.values) : E(f.variables, f.values);
  }
  /**
   * Change the mode of the theme.
   *
   * @param {themeType} theme - The current theme mode.
   * @return {themeType} The updated theme mode.
   */
  changeMode(l) {
    return l !== "Dark" ? "Dark" : "Light";
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
  storageDarkmodePreference(l) {
    const s = window.localStorage.getItem(
      "dark-mode-3e2c2d6d-a57e-499a-afdf-5f0f85140012"
    ) ?? void 0;
    if (l)
      window.localStorage.setItem(
        "dark-mode-3e2c2d6d-a57e-499a-afdf-5f0f85140012",
        l
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
  handlerIcons(l, s) {
    if (s && l) {
      const E = s[0].theme === "Dark" ? s[0].theme : s[1].theme, m = s[1].theme === "Light" ? s[1].theme : s[0].theme, S = s[0].icon, f = s[1].icon;
      return l === E ? S : m === l ? f : void 0;
    }
  }
  /**
   * A function that handles the default switch theme.
   *
   * @return {Object} An object containing the default styles and icons.
   */
  handlerDefaultSwitchTheme() {
    const { defaultStyles: l, icons: s } = Er();
    return { defaultStyles: l, icons: s };
  }
}
const Pr = (O) => {
  const { switchStyles: l, icons: s, switchMode: E, styles: m, hover: S } = O, f = new kr(), [o, d] = ee(), [R, p] = ee(!1), [g, _] = ee();
  ur(() => {
    const T = f.storageDarkmodePreference();
    if (!T && !o ? d(f.detectUserTheme()) : T && !o ? d(T) : o && (l ? f.changePropsStyles(o, l) : f.changeMode(o), f.storageDarkmodePreference(o), s && o && typeof s != "boolean" && _(f.handlerIcons(o, s)), o === "Dark" && p(!0)), o && !l) {
      const L = f.handlerDefaultSwitchTheme().defaultStyles;
      f.changePropsStyles(o, L);
    }
    if (o && typeof s == "boolean") {
      const L = f.handlerDefaultSwitchTheme().icons;
      _(f.handlerIcons(o, L));
    }
  }, [o]);
  const j = () => {
    o && d((T) => T === "Light" ? "Dark" : "Light"), p((T) => !T), s && o && typeof s != "boolean" && _(f.handlerIcons(o, s)), o && (l ? f.changePropsStyles(o, l) : f.changeMode(o));
  };
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      style: m == null ? void 0 : m.mainContainer,
      className: `${P.darkmodeContainer} 
    ${E === "static" ? P.staticSwitch : R ? P.dinamicSwitch : P.normalSwitch}`,
      onClick: j,
      children: /* @__PURE__ */ x.jsx(
        "div",
        {
          style: m == null ? void 0 : m.switchContainer,
          className: `${P.switch} ${g ? "" : o === "Dark" ? P.addDarkBorder : o === "Light" ? P.addLightBorder : ""} ${S ? P.switchHover : ""}`,
          children: /* @__PURE__ */ x.jsx("div", { style: m == null ? void 0 : m.iconsContainer, className: P.svg, children: g || o })
        }
      )
    }
  );
};
export {
  Pr as default
};
