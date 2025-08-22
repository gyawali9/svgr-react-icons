import qt, { useState as Zt, useRef as Jt, useEffect as Kt } from "react";
var rt = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Qt() {
  if (Ot) return de;
  Ot = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function c(l, f, d) {
    var R = null;
    if (d !== void 0 && (R = "" + d), f.key !== void 0 && (R = "" + f.key), "key" in f) {
      d = {};
      for (var I in f)
        I !== "key" && (d[I] = f[I]);
    } else d = f;
    return f = d.ref, {
      $$typeof: a,
      type: l,
      key: R,
      ref: f !== void 0 ? f : null,
      props: d
    };
  }
  return de.Fragment = r, de.jsx = c, de.jsxs = c, de;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function en() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    function a(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === Ge ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case se:
          return "Fragment";
        case Fe:
          return "Profiler";
        case Ue:
          return "StrictMode";
        case $:
          return "Suspense";
        case le:
          return "SuspenseList";
        case We:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case B:
            return "Portal";
          case J:
            return (t.displayName || "Context") + ".Provider";
          case ze:
            return (t._context.displayName || "Context") + ".Consumer";
          case b:
            var i = t.render;
            return t = t.displayName, t || (t = i.displayName || i.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case He:
            return i = t.displayName || null, i !== null ? i : a(t.type) || "Memo";
          case Se:
            i = t._payload, t = t._init;
            try {
              return a(t(i));
            } catch {
            }
        }
      return null;
    }
    function r(t) {
      return "" + t;
    }
    function c(t) {
      try {
        r(t);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var T = i.error, m = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return T.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), r(t);
      }
    }
    function l(t) {
      if (t === se) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === Se)
        return "<...>";
      try {
        var i = a(t);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var t = _.A;
      return t === null ? null : t.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function R(t) {
      if (K.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function I(t, i) {
      function T() {
        Re || (Re = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: T,
        configurable: !0
      });
    }
    function j() {
      var t = a(this.type);
      return be[t] || (be[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function P(t, i, T, m, M, p, F, X) {
      return T = p.ref, t = {
        $$typeof: C,
        type: t,
        key: i,
        props: p,
        _owner: M
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: j
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function Z(t, i, T, m, M, p, F, X) {
      var g = i.children;
      if (g !== void 0)
        if (m)
          if (ce(g)) {
            for (m = 0; m < g.length; m++)
              Y(g[m]);
            Object.freeze && Object.freeze(g);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Y(g);
      if (K.call(i, "key")) {
        g = a(t);
        var k = Object.keys(i).filter(function(Ne) {
          return Ne !== "key";
        });
        m = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", ye[g + m] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          g,
          k,
          g
        ), ye[g + m] = !0);
      }
      if (g = null, T !== void 0 && (c(T), g = "" + T), R(i) && (c(i.key), g = "" + i.key), "key" in i) {
        T = {};
        for (var Q in i)
          Q !== "key" && (T[Q] = i[Q]);
      } else T = i;
      return g && I(
        T,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), P(
        t,
        g,
        p,
        M,
        f(),
        T,
        F,
        X
      );
    }
    function Y(t) {
      typeof t == "object" && t !== null && t.$$typeof === C && t._store && (t._store.validated = 1);
    }
    var A = qt, C = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), se = Symbol.for("react.fragment"), Ue = Symbol.for("react.strict_mode"), Fe = Symbol.for("react.profiler"), ze = Symbol.for("react.consumer"), J = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), He = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), We = Symbol.for("react.activity"), Ge = Symbol.for("react.client.reference"), _ = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, ce = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    A = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var Re, be = {}, Oe = A.react_stack_bottom_frame.bind(
      A,
      d
    )(), ue = V(l(d)), ye = {};
    Te.Fragment = se, Te.jsx = function(t, i, T, m, M) {
      var p = 1e4 > _.recentlyCreatedOwnerStacks++;
      return Z(
        t,
        i,
        T,
        !1,
        m,
        M,
        p ? Error("react-stack-top-frame") : Oe,
        p ? V(l(t)) : ue
      );
    }, Te.jsxs = function(t, i, T, m, M) {
      var p = 1e4 > _.recentlyCreatedOwnerStacks++;
      return Z(
        t,
        i,
        T,
        !0,
        m,
        M,
        p ? Error("react-stack-top-frame") : Oe,
        p ? V(l(t)) : ue
      );
    };
  }()), Te;
}
process.env.NODE_ENV === "production" ? rt.exports = Qt() : rt.exports = en();
var Nt = rt.exports;
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: kt,
  setPrototypeOf: Lt,
  isFrozen: tn,
  getPrototypeOf: nn,
  getOwnPropertyDescriptor: rn
} = Object;
let {
  freeze: L,
  seal: D,
  create: Ut
} = Object, {
  apply: ot,
  construct: at
} = typeof Reflect < "u" && Reflect;
L || (L = function(r) {
  return r;
});
D || (D = function(r) {
  return r;
});
ot || (ot = function(r, c, l) {
  return r.apply(c, l);
});
at || (at = function(r, c) {
  return new r(...c);
});
const xe = w(Array.prototype.forEach), on = w(Array.prototype.lastIndexOf), wt = w(Array.prototype.pop), Ee = w(Array.prototype.push), an = w(Array.prototype.splice), ke = w(String.prototype.toLowerCase), Ke = w(String.prototype.toString), vt = w(String.prototype.match), _e = w(String.prototype.replace), sn = w(String.prototype.indexOf), ln = w(String.prototype.trim), x = w(Object.prototype.hasOwnProperty), N = w(RegExp.prototype.test), ge = cn(TypeError);
function w(a) {
  return function(r) {
    r instanceof RegExp && (r.lastIndex = 0);
    for (var c = arguments.length, l = new Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
      l[f - 1] = arguments[f];
    return ot(a, r, l);
  };
}
function cn(a) {
  return function() {
    for (var r = arguments.length, c = new Array(r), l = 0; l < r; l++)
      c[l] = arguments[l];
    return at(a, c);
  };
}
function u(a, r) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ke;
  Lt && Lt(a, null);
  let l = r.length;
  for (; l--; ) {
    let f = r[l];
    if (typeof f == "string") {
      const d = c(f);
      d !== f && (tn(r) || (r[l] = d), f = d);
    }
    a[f] = !0;
  }
  return a;
}
function un(a) {
  for (let r = 0; r < a.length; r++)
    x(a, r) || (a[r] = null);
  return a;
}
function G(a) {
  const r = Ut(null);
  for (const [c, l] of kt(a))
    x(a, c) && (Array.isArray(l) ? r[c] = un(l) : l && typeof l == "object" && l.constructor === Object ? r[c] = G(l) : r[c] = l);
  return r;
}
function he(a, r) {
  for (; a !== null; ) {
    const l = rn(a, r);
    if (l) {
      if (l.get)
        return w(l.get);
      if (typeof l.value == "function")
        return w(l.value);
    }
    a = nn(a);
  }
  function c() {
    return null;
  }
  return c;
}
const It = L(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Qe = L(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), et = L(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), fn = L(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), tt = L(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), mn = L(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ct = L(["#text"]), Dt = L(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), nt = L(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Mt = L(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Pe = L(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), pn = D(/\{\{[\w\W]*|[\w\W]*\}\}/gm), dn = D(/<%[\w\W]*|[\w\W]*%>/gm), Tn = D(/\$\{[\w\W]*/gm), En = D(/^data-[\-\w.\u00B7-\uFFFF]+$/), _n = D(/^aria-[\-\w]+$/), Ft = D(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gn = D(/^(?:\w+script|data):/i), hn = D(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), zt = D(/^html$/i), An = D(/^[a-z][.\w]*(-[.\w]+)+$/i);
var xt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: _n,
  ATTR_WHITESPACE: hn,
  CUSTOM_ELEMENT: An,
  DATA_ATTR: En,
  DOCTYPE_NAME: zt,
  ERB_EXPR: dn,
  IS_ALLOWED_URI: Ft,
  IS_SCRIPT_OR_DATA: gn,
  MUSTACHE_EXPR: pn,
  TMPLIT_EXPR: Tn
});
const Ae = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Sn = function() {
  return typeof window > "u" ? null : window;
}, Rn = function(r, c) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let l = null;
  const f = "data-tt-policy-suffix";
  c && c.hasAttribute(f) && (l = c.getAttribute(f));
  const d = "dompurify" + (l ? "#" + l : "");
  try {
    return r.createPolicy(d, {
      createHTML(R) {
        return R;
      },
      createScriptURL(R) {
        return R;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + d + " could not be created."), null;
  }
}, Pt = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Ht() {
  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sn();
  const r = (s) => Ht(s);
  if (r.version = "3.2.6", r.removed = [], !a || !a.document || a.document.nodeType !== Ae.document || !a.Element)
    return r.isSupported = !1, r;
  let {
    document: c
  } = a;
  const l = c, f = l.currentScript, {
    DocumentFragment: d,
    HTMLTemplateElement: R,
    Node: I,
    Element: j,
    NodeFilter: P,
    NamedNodeMap: Z = a.NamedNodeMap || a.MozNamedAttrMap,
    HTMLFormElement: Y,
    DOMParser: A,
    trustedTypes: C
  } = a, B = j.prototype, se = he(B, "cloneNode"), Ue = he(B, "remove"), Fe = he(B, "nextSibling"), ze = he(B, "childNodes"), J = he(B, "parentNode");
  if (typeof R == "function") {
    const s = c.createElement("template");
    s.content && s.content.ownerDocument && (c = s.content.ownerDocument);
  }
  let b, $ = "";
  const {
    implementation: le,
    createNodeIterator: He,
    createDocumentFragment: Se,
    getElementsByTagName: We
  } = c, {
    importNode: Ge
  } = l;
  let _ = Pt();
  r.isSupported = typeof kt == "function" && typeof J == "function" && le && le.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: K,
    ERB_EXPR: ce,
    TMPLIT_EXPR: V,
    DATA_ATTR: Re,
    ARIA_ATTR: be,
    IS_SCRIPT_OR_DATA: Oe,
    ATTR_WHITESPACE: ue,
    CUSTOM_ELEMENT: ye
  } = xt;
  let {
    IS_ALLOWED_URI: t
  } = xt, i = null;
  const T = u({}, [...It, ...Qe, ...et, ...tt, ...Ct]);
  let m = null;
  const M = u({}, [...Dt, ...nt, ...Mt, ...Pe]);
  let p = Object.seal(Ut(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), F = null, X = null, g = !0, k = !0, Q = !1, Ne = !0, ee = !1, Le = !0, q = !1, je = !1, Ye = !1, te = !1, we = !1, ve = !1, it = !0, st = !1;
  const Wt = "user-content-";
  let Be = !0, fe = !1, ne = {}, re = null;
  const lt = u({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ct = null;
  const ut = u({}, ["audio", "video", "img", "source", "image", "track"]);
  let $e = null;
  const ft = u({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ie = "http://www.w3.org/1998/Math/MathML", Ce = "http://www.w3.org/2000/svg", z = "http://www.w3.org/1999/xhtml";
  let oe = z, Ve = !1, Xe = null;
  const Gt = u({}, [Ie, Ce, z], Ke);
  let De = u({}, ["mi", "mo", "mn", "ms", "mtext"]), Me = u({}, ["annotation-xml"]);
  const jt = u({}, ["title", "style", "font", "a", "script"]);
  let me = null;
  const Yt = ["application/xhtml+xml", "text/html"], Bt = "text/html";
  let S = null, ae = null;
  const $t = c.createElement("form"), mt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, qe = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ae && ae === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = G(e), me = // eslint-disable-next-line unicorn/prefer-includes
      Yt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Bt : e.PARSER_MEDIA_TYPE, S = me === "application/xhtml+xml" ? Ke : ke, i = x(e, "ALLOWED_TAGS") ? u({}, e.ALLOWED_TAGS, S) : T, m = x(e, "ALLOWED_ATTR") ? u({}, e.ALLOWED_ATTR, S) : M, Xe = x(e, "ALLOWED_NAMESPACES") ? u({}, e.ALLOWED_NAMESPACES, Ke) : Gt, $e = x(e, "ADD_URI_SAFE_ATTR") ? u(G(ft), e.ADD_URI_SAFE_ATTR, S) : ft, ct = x(e, "ADD_DATA_URI_TAGS") ? u(G(ut), e.ADD_DATA_URI_TAGS, S) : ut, re = x(e, "FORBID_CONTENTS") ? u({}, e.FORBID_CONTENTS, S) : lt, F = x(e, "FORBID_TAGS") ? u({}, e.FORBID_TAGS, S) : G({}), X = x(e, "FORBID_ATTR") ? u({}, e.FORBID_ATTR, S) : G({}), ne = x(e, "USE_PROFILES") ? e.USE_PROFILES : !1, g = e.ALLOW_ARIA_ATTR !== !1, k = e.ALLOW_DATA_ATTR !== !1, Q = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ne = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = e.SAFE_FOR_TEMPLATES || !1, Le = e.SAFE_FOR_XML !== !1, q = e.WHOLE_DOCUMENT || !1, te = e.RETURN_DOM || !1, we = e.RETURN_DOM_FRAGMENT || !1, ve = e.RETURN_TRUSTED_TYPE || !1, Ye = e.FORCE_BODY || !1, it = e.SANITIZE_DOM !== !1, st = e.SANITIZE_NAMED_PROPS || !1, Be = e.KEEP_CONTENT !== !1, fe = e.IN_PLACE || !1, t = e.ALLOWED_URI_REGEXP || Ft, oe = e.NAMESPACE || z, De = e.MATHML_TEXT_INTEGRATION_POINTS || De, Me = e.HTML_INTEGRATION_POINTS || Me, p = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && mt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (p.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && mt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (p.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (p.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ee && (k = !1), we && (te = !0), ne && (i = u({}, Ct), m = [], ne.html === !0 && (u(i, It), u(m, Dt)), ne.svg === !0 && (u(i, Qe), u(m, nt), u(m, Pe)), ne.svgFilters === !0 && (u(i, et), u(m, nt), u(m, Pe)), ne.mathMl === !0 && (u(i, tt), u(m, Mt), u(m, Pe))), e.ADD_TAGS && (i === T && (i = G(i)), u(i, e.ADD_TAGS, S)), e.ADD_ATTR && (m === M && (m = G(m)), u(m, e.ADD_ATTR, S)), e.ADD_URI_SAFE_ATTR && u($e, e.ADD_URI_SAFE_ATTR, S), e.FORBID_CONTENTS && (re === lt && (re = G(re)), u(re, e.FORBID_CONTENTS, S)), Be && (i["#text"] = !0), q && u(i, ["html", "head", "body"]), i.table && (u(i, ["tbody"]), delete F.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ge('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ge('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        b = e.TRUSTED_TYPES_POLICY, $ = b.createHTML("");
      } else
        b === void 0 && (b = Rn(C, f)), b !== null && typeof $ == "string" && ($ = b.createHTML(""));
      L && L(e), ae = e;
    }
  }, pt = u({}, [...Qe, ...et, ...fn]), dt = u({}, [...tt, ...mn]), Vt = function(e) {
    let n = J(e);
    (!n || !n.tagName) && (n = {
      namespaceURI: oe,
      tagName: "template"
    });
    const o = ke(e.tagName), E = ke(n.tagName);
    return Xe[e.namespaceURI] ? e.namespaceURI === Ce ? n.namespaceURI === z ? o === "svg" : n.namespaceURI === Ie ? o === "svg" && (E === "annotation-xml" || De[E]) : !!pt[o] : e.namespaceURI === Ie ? n.namespaceURI === z ? o === "math" : n.namespaceURI === Ce ? o === "math" && Me[E] : !!dt[o] : e.namespaceURI === z ? n.namespaceURI === Ce && !Me[E] || n.namespaceURI === Ie && !De[E] ? !1 : !dt[o] && (jt[o] || !pt[o]) : !!(me === "application/xhtml+xml" && Xe[e.namespaceURI]) : !1;
  }, U = function(e) {
    Ee(r.removed, {
      element: e
    });
    try {
      J(e).removeChild(e);
    } catch {
      Ue(e);
    }
  }, ie = function(e, n) {
    try {
      Ee(r.removed, {
        attribute: n.getAttributeNode(e),
        from: n
      });
    } catch {
      Ee(r.removed, {
        attribute: null,
        from: n
      });
    }
    if (n.removeAttribute(e), e === "is")
      if (te || we)
        try {
          U(n);
        } catch {
        }
      else
        try {
          n.setAttribute(e, "");
        } catch {
        }
  }, Tt = function(e) {
    let n = null, o = null;
    if (Ye)
      e = "<remove></remove>" + e;
    else {
      const h = vt(e, /^[\r\n\t ]+/);
      o = h && h[0];
    }
    me === "application/xhtml+xml" && oe === z && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const E = b ? b.createHTML(e) : e;
    if (oe === z)
      try {
        n = new A().parseFromString(E, me);
      } catch {
      }
    if (!n || !n.documentElement) {
      n = le.createDocument(oe, "template", null);
      try {
        n.documentElement.innerHTML = Ve ? $ : E;
      } catch {
      }
    }
    const O = n.body || n.documentElement;
    return e && o && O.insertBefore(c.createTextNode(o), O.childNodes[0] || null), oe === z ? We.call(n, q ? "html" : "body")[0] : q ? n.documentElement : O;
  }, Et = function(e) {
    return He.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      P.SHOW_ELEMENT | P.SHOW_COMMENT | P.SHOW_TEXT | P.SHOW_PROCESSING_INSTRUCTION | P.SHOW_CDATA_SECTION,
      null
    );
  }, Ze = function(e) {
    return e instanceof Y && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof Z) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, _t = function(e) {
    return typeof I == "function" && e instanceof I;
  };
  function H(s, e, n) {
    xe(s, (o) => {
      o.call(r, e, n, ae);
    });
  }
  const gt = function(e) {
    let n = null;
    if (H(_.beforeSanitizeElements, e, null), Ze(e))
      return U(e), !0;
    const o = S(e.nodeName);
    if (H(_.uponSanitizeElement, e, {
      tagName: o,
      allowedTags: i
    }), Le && e.hasChildNodes() && !_t(e.firstElementChild) && N(/<[/\w!]/g, e.innerHTML) && N(/<[/\w!]/g, e.textContent) || e.nodeType === Ae.progressingInstruction || Le && e.nodeType === Ae.comment && N(/<[/\w]/g, e.data))
      return U(e), !0;
    if (!i[o] || F[o]) {
      if (!F[o] && At(o) && (p.tagNameCheck instanceof RegExp && N(p.tagNameCheck, o) || p.tagNameCheck instanceof Function && p.tagNameCheck(o)))
        return !1;
      if (Be && !re[o]) {
        const E = J(e) || e.parentNode, O = ze(e) || e.childNodes;
        if (O && E) {
          const h = O.length;
          for (let v = h - 1; v >= 0; --v) {
            const W = se(O[v], !0);
            W.__removalCount = (e.__removalCount || 0) + 1, E.insertBefore(W, Fe(e));
          }
        }
      }
      return U(e), !0;
    }
    return e instanceof j && !Vt(e) || (o === "noscript" || o === "noembed" || o === "noframes") && N(/<\/no(script|embed|frames)/i, e.innerHTML) ? (U(e), !0) : (ee && e.nodeType === Ae.text && (n = e.textContent, xe([K, ce, V], (E) => {
      n = _e(n, E, " ");
    }), e.textContent !== n && (Ee(r.removed, {
      element: e.cloneNode()
    }), e.textContent = n)), H(_.afterSanitizeElements, e, null), !1);
  }, ht = function(e, n, o) {
    if (it && (n === "id" || n === "name") && (o in c || o in $t))
      return !1;
    if (!(k && !X[n] && N(Re, n))) {
      if (!(g && N(be, n))) {
        if (!m[n] || X[n]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(At(e) && (p.tagNameCheck instanceof RegExp && N(p.tagNameCheck, e) || p.tagNameCheck instanceof Function && p.tagNameCheck(e)) && (p.attributeNameCheck instanceof RegExp && N(p.attributeNameCheck, n) || p.attributeNameCheck instanceof Function && p.attributeNameCheck(n)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            n === "is" && p.allowCustomizedBuiltInElements && (p.tagNameCheck instanceof RegExp && N(p.tagNameCheck, o) || p.tagNameCheck instanceof Function && p.tagNameCheck(o)))
          ) return !1;
        } else if (!$e[n]) {
          if (!N(t, _e(o, ue, ""))) {
            if (!((n === "src" || n === "xlink:href" || n === "href") && e !== "script" && sn(o, "data:") === 0 && ct[e])) {
              if (!(Q && !N(Oe, _e(o, ue, "")))) {
                if (o)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, At = function(e) {
    return e !== "annotation-xml" && vt(e, ye);
  }, St = function(e) {
    H(_.beforeSanitizeAttributes, e, null);
    const {
      attributes: n
    } = e;
    if (!n || Ze(e))
      return;
    const o = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: m,
      forceKeepAttr: void 0
    };
    let E = n.length;
    for (; E--; ) {
      const O = n[E], {
        name: h,
        namespaceURI: v,
        value: W
      } = O, pe = S(h), Je = W;
      let y = h === "value" ? Je : ln(Je);
      if (o.attrName = pe, o.attrValue = y, o.keepAttr = !0, o.forceKeepAttr = void 0, H(_.uponSanitizeAttribute, e, o), y = o.attrValue, st && (pe === "id" || pe === "name") && (ie(h, e), y = Wt + y), Le && N(/((--!?|])>)|<\/(style|title)/i, y)) {
        ie(h, e);
        continue;
      }
      if (o.forceKeepAttr)
        continue;
      if (!o.keepAttr) {
        ie(h, e);
        continue;
      }
      if (!Ne && N(/\/>/i, y)) {
        ie(h, e);
        continue;
      }
      ee && xe([K, ce, V], (bt) => {
        y = _e(y, bt, " ");
      });
      const Rt = S(e.nodeName);
      if (!ht(Rt, pe, y)) {
        ie(h, e);
        continue;
      }
      if (b && typeof C == "object" && typeof C.getAttributeType == "function" && !v)
        switch (C.getAttributeType(Rt, pe)) {
          case "TrustedHTML": {
            y = b.createHTML(y);
            break;
          }
          case "TrustedScriptURL": {
            y = b.createScriptURL(y);
            break;
          }
        }
      if (y !== Je)
        try {
          v ? e.setAttributeNS(v, h, y) : e.setAttribute(h, y), Ze(e) ? U(e) : wt(r.removed);
        } catch {
          ie(h, e);
        }
    }
    H(_.afterSanitizeAttributes, e, null);
  }, Xt = function s(e) {
    let n = null;
    const o = Et(e);
    for (H(_.beforeSanitizeShadowDOM, e, null); n = o.nextNode(); )
      H(_.uponSanitizeShadowNode, n, null), gt(n), St(n), n.content instanceof d && s(n.content);
    H(_.afterSanitizeShadowDOM, e, null);
  };
  return r.sanitize = function(s) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = null, o = null, E = null, O = null;
    if (Ve = !s, Ve && (s = "<!-->"), typeof s != "string" && !_t(s))
      if (typeof s.toString == "function") {
        if (s = s.toString(), typeof s != "string")
          throw ge("dirty is not a string, aborting");
      } else
        throw ge("toString is not a function");
    if (!r.isSupported)
      return s;
    if (je || qe(e), r.removed = [], typeof s == "string" && (fe = !1), fe) {
      if (s.nodeName) {
        const W = S(s.nodeName);
        if (!i[W] || F[W])
          throw ge("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (s instanceof I)
      n = Tt("<!---->"), o = n.ownerDocument.importNode(s, !0), o.nodeType === Ae.element && o.nodeName === "BODY" || o.nodeName === "HTML" ? n = o : n.appendChild(o);
    else {
      if (!te && !ee && !q && // eslint-disable-next-line unicorn/prefer-includes
      s.indexOf("<") === -1)
        return b && ve ? b.createHTML(s) : s;
      if (n = Tt(s), !n)
        return te ? null : ve ? $ : "";
    }
    n && Ye && U(n.firstChild);
    const h = Et(fe ? s : n);
    for (; E = h.nextNode(); )
      gt(E), St(E), E.content instanceof d && Xt(E.content);
    if (fe)
      return s;
    if (te) {
      if (we)
        for (O = Se.call(n.ownerDocument); n.firstChild; )
          O.appendChild(n.firstChild);
      else
        O = n;
      return (m.shadowroot || m.shadowrootmode) && (O = Ge.call(l, O, !0)), O;
    }
    let v = q ? n.outerHTML : n.innerHTML;
    return q && i["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && N(zt, n.ownerDocument.doctype.name) && (v = "<!DOCTYPE " + n.ownerDocument.doctype.name + `>
` + v), ee && xe([K, ce, V], (W) => {
      v = _e(v, W, " ");
    }), b && ve ? b.createHTML(v) : v;
  }, r.setConfig = function() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qe(s), je = !0;
  }, r.clearConfig = function() {
    ae = null, je = !1;
  }, r.isValidAttribute = function(s, e, n) {
    ae || qe({});
    const o = S(s), E = S(e);
    return ht(o, E, n);
  }, r.addHook = function(s, e) {
    typeof e == "function" && Ee(_[s], e);
  }, r.removeHook = function(s, e) {
    if (e !== void 0) {
      const n = on(_[s], e);
      return n === -1 ? void 0 : an(_[s], n, 1)[0];
    }
    return wt(_[s]);
  }, r.removeHooks = function(s) {
    _[s] = [];
  }, r.removeAllHooks = function() {
    _ = Pt();
  }, r;
}
var bn = Ht();
const yn = ({
  src: a,
  size: r,
  fill: c = "currentColor",
  className: l,
  style: f,
  isUrl: d = !1,
  alt: R,
  ...I
}) => {
  console.log("Icon rendering with src:", a);
  const [j, P] = Zt(null), Z = Jt(null);
  Kt(() => {
    d && typeof a == "string" && (console.log("Fetching SVG from:", a), fetch(a).then((A) => {
      if (console.log("Fetch response:", A.ok, A.status), !A.ok)
        throw new Error(`Fetch failed: ${A.statusText}`);
      return A.text();
    }).then((A) => {
      let C = bn.sanitize(A);
      c && c !== "currentColor" && (C = C.replace(
        /fill="[^"]*"/g,
        `fill="${c}"`
      )), console.log("Fetched SVG content:", C), P(C);
    }).catch((A) => {
      console.error("Error fetching SVG:", A), P(null);
    }));
  }, [a, d, c]);
  const Y = {
    ...f,
    width: r ? `${r}px` : void 0,
    height: r ? `${r}px` : void 0,
    fill: c
  };
  if (d && j)
    return /* @__PURE__ */ Nt.jsx(
      "svg",
      {
        ref: Z,
        className: l,
        style: Y,
        dangerouslySetInnerHTML: { __html: j },
        role: R ? "img" : void 0,
        "aria-label": R,
        ...I
      }
    );
  if (typeof a == "function") {
    const A = a;
    return /* @__PURE__ */ Nt.jsx(
      A,
      {
        className: l,
        style: Y,
        role: R ? "img" : void 0,
        "aria-label": R,
        ...I
      }
    );
  }
  return console.log("Icon is rendering"), null;
};
function Nn(a, r = {}) {
  const c = a.startsWith("/") ? a : `/${a}`, l = typeof window < "u" ? window.location.origin : "http://localhost:3000";
  let f;
  try {
    f = new URL(c, l);
  } catch (d) {
    throw console.error("Invalid URL in generateSvgUrl:", { baseUrl: a, origin: l, error: d }), new Error(`Failed to construct URL from ${a}`);
  }
  return r.size && f.searchParams.set("size", r.size.toString()), r.fill && f.searchParams.set("fill", encodeURIComponent(r.fill)), f.toString();
}
export {
  yn as Icon,
  Nn as generateSvgUrl
};
