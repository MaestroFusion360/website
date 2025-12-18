import {
  a7 as $,
  q as j,
  a8 as H,
  M as G,
  b as J,
  a9 as M,
  N as x,
  j as _,
  i as f,
  V as m,
  d as K,
  F as Q,
  aa as C,
  H as X,
  h as d,
  ab as T,
  p as S,
  g as W,
  ac as A,
  ad as y,
  ae as P,
  af as Z,
  ag as O,
  c as Y,
  m as ee,
  ah as te,
  f as D,
  J as N,
  ai as re,
  I as se,
  aj as q,
  ak as ie,
  E as ne,
  al as ae,
  am as oe,
  an as le,
  ao as ue,
  ap as he,
  aq as F,
  a1 as ce,
  ar as fe,
  as as de,
  at as I,
  K as k,
  au as _e,
  av as pe,
  aw as ge,
  ax as ve,
  y as ye,
  ay as be,
  az as Ee,
  A as me,
} from "./DZp1Jm13.js";
import { b as we } from "./B2xTJhZM.js";
function Te(t) {
  let e = 0,
    s = H(0),
    i;
  return () => {
    $() &&
      (j(s),
      G(
        () => (
          e === 0 && (i = J(() => t(() => M(s)))),
          (e += 1),
          () => {
            x(() => {
              ((e -= 1), e === 0 && (i?.(), (i = void 0), M(s)));
            });
          }
        ),
      ));
  };
}
var ke = ne | ae | oe;
function Ae(t, e, s) {
  new Ne(t, e, s);
}
class Ne {
  parent;
  #r = !1;
  #t;
  #g = f ? _ : null;
  #i;
  #c;
  #n;
  #s = null;
  #e = null;
  #a = null;
  #o = null;
  #l = null;
  #f = 0;
  #u = 0;
  #d = !1;
  #h = null;
  #b = Te(
    () => (
      (this.#h = H(this.#f)),
      () => {
        this.#h = null;
      }
    ),
  );
  constructor(e, s, i) {
    ((this.#t = e),
      (this.#i = s),
      (this.#c = i),
      (this.parent = m.b),
      (this.#r = !!this.#i.pending),
      (this.#n = K(() => {
        if (((m.b = this), f)) {
          const r = this.#g;
          (Q(), r.nodeType === C && r.data === X ? this.#m() : this.#E());
        } else {
          var n = this.#v();
          try {
            this.#s = d(() => i(n));
          } catch (r) {
            this.error(r);
          }
          this.#u > 0 ? this.#p() : (this.#r = !1);
        }
        return () => {
          this.#l?.remove();
        };
      }, ke)),
      f && (this.#t = _));
  }
  #E() {
    try {
      this.#s = d(() => this.#c(this.#t));
    } catch (e) {
      this.error(e);
    }
    this.#r = !1;
  }
  #m() {
    const e = this.#i.pending;
    e &&
      ((this.#e = d(() => e(this.#t))),
      T.enqueue(() => {
        var s = this.#v();
        ((this.#s = this.#_(() => (T.ensure(), d(() => this.#c(s))))),
          this.#u > 0
            ? this.#p()
            : (S(this.#e, () => {
                this.#e = null;
              }),
              (this.#r = !1)));
      }));
  }
  #v() {
    var e = this.#t;
    return (
      this.#r && ((this.#l = W()), this.#t.before(this.#l), (e = this.#l)),
      e
    );
  }
  is_pending() {
    return this.#r || (!!this.parent && this.parent.is_pending());
  }
  has_pending_snippet() {
    return !!this.#i.pending;
  }
  #_(e) {
    var s = m,
      i = O,
      n = Y;
    (A(this.#n), y(this.#n), P(this.#n.ctx));
    try {
      return e();
    } catch (r) {
      return (Z(r), null);
    } finally {
      (A(s), y(i), P(n));
    }
  }
  #p() {
    const e = this.#i.pending;
    (this.#s !== null &&
      ((this.#o = document.createDocumentFragment()),
      this.#o.append(this.#l),
      ee(this.#s, this.#o)),
      this.#e === null && (this.#e = d(() => e(this.#t))));
  }
  #y(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#y(e);
      return;
    }
    ((this.#u += e),
      this.#u === 0 &&
        ((this.#r = !1),
        this.#e &&
          S(this.#e, () => {
            this.#e = null;
          }),
        this.#o && (this.#t.before(this.#o), (this.#o = null))));
  }
  update_pending_count(e) {
    (this.#y(e), (this.#f += e), this.#h && te(this.#h, this.#f));
  }
  get_effect_pending() {
    return (this.#b(), j(this.#h));
  }
  error(e) {
    var s = this.#i.onerror;
    let i = this.#i.failed;
    if (this.#d || (!s && !i)) throw e;
    (this.#s && (D(this.#s), (this.#s = null)),
      this.#e && (D(this.#e), (this.#e = null)),
      this.#a && (D(this.#a), (this.#a = null)),
      f && (N(this.#g), re(), N(se())));
    var n = !1,
      r = !1;
    const l = () => {
      if (n) {
        le();
        return;
      }
      ((n = !0),
        r && ie(),
        T.ensure(),
        (this.#f = 0),
        this.#a !== null &&
          S(this.#a, () => {
            this.#a = null;
          }),
        (this.#r = this.has_pending_snippet()),
        (this.#s = this.#_(() => ((this.#d = !1), d(() => this.#c(this.#t))))),
        this.#u > 0 ? this.#p() : (this.#r = !1));
    };
    var h = O;
    try {
      (y(null), (r = !0), s?.(e, l), (r = !1));
    } catch (u) {
      q(u, this.#n && this.#n.parent);
    } finally {
      y(h);
    }
    i &&
      x(() => {
        this.#a = this.#_(() => {
          (T.ensure(), (this.#d = !0));
          try {
            return d(() => {
              i(
                this.#t,
                () => e,
                () => l,
              );
            });
          } catch (u) {
            return (q(u, this.#n.parent), null);
          } finally {
            this.#d = !1;
          }
        });
      });
  }
}
function Ve(t) {
  return (
    t.endsWith("capture") &&
    t !== "gotpointercapture" &&
    t !== "lostpointercapture"
  );
}
const Re = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart",
];
function xe(t) {
  return Re.includes(t);
}
const Se = {
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback",
};
function Ce(t) {
  return ((t = t.toLowerCase()), Se[t] ?? t);
}
const De = ["touchstart", "touchmove"];
function Oe(t) {
  return De.includes(t);
}
const z = new Set(),
  L = new Set();
function Me(t) {
  if (!f) return;
  (t.removeAttribute("onload"), t.removeAttribute("onerror"));
  const e = t.__e;
  e !== void 0 &&
    ((t.__e = void 0),
    queueMicrotask(() => {
      t.isConnected && t.dispatchEvent(e);
    }));
}
function Pe(t, e, s, i = {}) {
  function n(r) {
    if ((i.capture || E.call(e, r), !r.cancelBubble))
      return he(() => s?.call(this, r));
  }
  return (
    t.startsWith("pointer") || t.startsWith("touch") || t === "wheel"
      ? x(() => {
          e.addEventListener(t, n, i);
        })
      : e.addEventListener(t, n, i),
    n
  );
}
function qe(t) {
  for (var e = 0; e < t.length; e++) z.add(t[e]);
  for (var s of L) s(t);
}
let B = null;
function E(t) {
  var e = this,
    s = e.ownerDocument,
    i = t.type,
    n = t.composedPath?.() || [],
    r = n[0] || t.target;
  B = t;
  var l = 0,
    h = B === t && t.__root;
  if (h) {
    var u = n.indexOf(h);
    if (u !== -1 && (e === document || e === window)) {
      t.__root = e;
      return;
    }
    var p = n.indexOf(e);
    if (p === -1) return;
    u <= p && (l = u);
  }
  if (((r = n[l] || t.target), r !== e)) {
    ue(t, "currentTarget", {
      configurable: !0,
      get() {
        return r || s;
      },
    });
    var R = O,
      c = m;
    (y(null), A(null));
    try {
      for (var a, o = []; r !== null; ) {
        var g = r.assignedSlot || r.parentNode || r.host || null;
        try {
          var b = r["__" + i];
          b != null && (!r.disabled || t.target === r) && b.call(r, t);
        } catch (w) {
          a ? o.push(w) : (a = w);
        }
        if (t.cancelBubble || g === e || g === null) break;
        r = g;
      }
      if (a) {
        for (let w of o)
          queueMicrotask(() => {
            throw w;
          });
        throw a;
      }
    } finally {
      ((t.__root = e), delete t.currentTarget, y(R), A(c));
    }
  }
}
function Be(t, e) {
  var s = e == null ? "" : typeof e == "object" ? e + "" : e;
  s !== (t.__t ??= t.nodeValue) && ((t.__t = s), (t.nodeValue = s + ""));
}
function Fe(t, e) {
  return U(t, e);
}
function je(t, e) {
  (F(), (e.intro = e.intro ?? !1));
  const s = e.target,
    i = f,
    n = _;
  try {
    for (var r = ce(s); r && (r.nodeType !== C || r.data !== fe); ) r = de(r);
    if (!r) throw I;
    (k(!0), N(r));
    const l = U(t, { ...e, anchor: r });
    return (k(!1), l);
  } catch (l) {
    if (
      l instanceof Error &&
      l.message
        .split(
          `
`,
        )
        .some((h) => h.startsWith("https://svelte.dev/e/"))
    )
      throw l;
    return (
      l !== I && console.warn("Failed to hydrate: ", l),
      e.recover === !1 && _e(),
      F(),
      pe(s),
      k(!1),
      Fe(t, e)
    );
  } finally {
    (k(i), N(n));
  }
}
const v = new Map();
function U(
  t,
  { target: e, anchor: s, props: i = {}, events: n, context: r, intro: l = !0 },
) {
  F();
  var h = new Set(),
    u = (c) => {
      for (var a = 0; a < c.length; a++) {
        var o = c[a];
        if (!h.has(o)) {
          h.add(o);
          var g = Oe(o);
          e.addEventListener(o, E, { passive: g });
          var b = v.get(o);
          b === void 0
            ? (document.addEventListener(o, E, { passive: g }), v.set(o, 1))
            : v.set(o, b + 1);
        }
      }
    };
  (u(ge(z)), L.add(u));
  var p = void 0,
    R = ve(() => {
      var c = s ?? e.appendChild(W());
      return (
        Ae(c, { pending: () => {} }, (a) => {
          if (r) {
            ye({});
            var o = Y;
            o.c = r;
          }
          if (
            (n && (i.$$events = n),
            f && we(a, null),
            (p = t(a, i) || {}),
            f &&
              ((m.nodes.end = _),
              _ === null || _.nodeType !== C || _.data !== be))
          )
            throw (Ee(), I);
          r && me();
        }),
        () => {
          for (var a of h) {
            e.removeEventListener(a, E);
            var o = v.get(a);
            --o === 0
              ? (document.removeEventListener(a, E), v.delete(a))
              : v.set(a, o);
          }
          (L.delete(u), c !== s && c.parentNode?.removeChild(c));
        }
      );
    });
  return (V.set(p, R), p);
}
let V = new WeakMap();
function He(t, e) {
  const s = V.get(t);
  return s ? (V.delete(t), s(e)) : Promise.resolve();
}
export {
  xe as a,
  Pe as c,
  qe as d,
  je as h,
  Ve as i,
  Fe as m,
  Ce as n,
  Me as r,
  Be as s,
  He as u,
};
