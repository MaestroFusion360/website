import {
  b as Et,
  d as le,
  f as P,
  a as E,
  c as ce,
  e as Ut,
  t as ue,
} from "../chunks/DAWyZJYV.js";
import {
  N as At,
  g as gt,
  d as Wt,
  J as $,
  i as D,
  a1 as Z,
  F as Ct,
  q as A,
  R as ge,
  G as de,
  H as fe,
  I as xt,
  K as q,
  j as X,
  aa as Mt,
  ay as ve,
  ah as Lt,
  e as he,
  aF as V,
  h as at,
  s as me,
  a8 as Pt,
  aB as pe,
  aw as It,
  aG as Yt,
  aH as be,
  aI as _e,
  aJ as ye,
  r as Jt,
  p as Kt,
  aK as _t,
  as as dt,
  av as we,
  f as ft,
  aL as Xt,
  aM as Ce,
  z as G,
  V as Se,
  aN as ke,
  az as Ae,
  at as Me,
  aO as Ie,
  aP as qt,
  L as Tt,
  aQ as Te,
  aR as Fe,
  aS as Ee,
  aT as xe,
  aU as Le,
  aV as Pe,
  aW as Ne,
  aX as je,
  aY as De,
  aZ as Oe,
  y as R,
  A as U,
  B as y,
  C as b,
  aE as J,
  u as mt,
  x as rt,
  U as Q,
  aC as vt,
  D as M,
  a_ as tt,
  ai as Ge,
  T as ze,
  a$ as He,
  b0 as Be,
} from "../chunks/Ca4mpr-g.js";
import {
  i as Ve,
  c as Re,
  d as pt,
  n as Ue,
  a as We,
  s as B,
  r as Ye,
} from "../chunks/CC4FMtKT.js";
import { i as Je } from "../chunks/BpVTjGL-.js";
import { p as x, r as ct, b as Ke, i as et } from "../chunks/D6jdnGIL.js";
import { s as Ft } from "../chunks/4SK4HWC3.js";
function Xe(t, e) {
  if (e) {
    const r = document.body;
    ((t.autofocus = !0),
      At(() => {
        document.activeElement === r && t.focus();
      }));
  }
}
let Nt = !1;
function qe() {
  Nt ||
    ((Nt = !0),
    document.addEventListener(
      "reset",
      (t) => {
        Promise.resolve().then(() => {
          if (!t.defaultPrevented)
            for (const e of t.target.elements) e.__on_r?.();
        });
      },
      { capture: !0 },
    ));
}
function jt(t, e) {
  return e;
}
function Qe(t, e, r) {
  for (var o = [], s = e.length, n, l = e.length, f = 0; f < s; f++) {
    let p = e[f];
    Kt(
      p,
      () => {
        if (n) {
          if ((n.pending.delete(p), n.done.add(p), n.pending.size === 0)) {
            var v = t.outrogroups;
            (St(It(n.done)),
              v.delete(n),
              v.size === 0 && (t.outrogroups = null));
          }
        } else l -= 1;
      },
      !1,
    );
  }
  if (l === 0) {
    var i = o.length === 0 && r !== null;
    if (i) {
      var c = r,
        a = c.parentNode;
      (we(a), a.append(c), t.items.clear());
    }
    St(e, !i);
  } else
    ((n = { pending: new Set(e), done: new Set() }),
      (t.outrogroups ??= new Set()).add(n));
}
function St(t, e = !0) {
  for (var r = 0; r < t.length; r++) ft(t[r], e);
}
var Dt;
function ht(t, e, r, o, s, n = null) {
  var l = t,
    f = new Map(),
    i = (e & Xt) !== 0;
  if (i) {
    var c = t;
    l = D ? $(Z(c)) : c.appendChild(gt());
  }
  D && Ct();
  var a = null,
    p = ge(() => {
      var m = r();
      return Yt(m) ? m : m == null ? [] : It(m);
    }),
    v,
    w = !0;
  function C() {
    ((u.fallback = a),
      Ze(u, v, l, e, o),
      a !== null &&
        (v.length === 0
          ? (a.f & V) === 0
            ? Jt(a)
            : ((a.f ^= V), nt(a, null, l))
          : Kt(a, () => {
              a = null;
            })));
  }
  var T = Wt(() => {
      v = A(p);
      var m = v.length;
      let L = !1;
      if (D) {
        var j = de(l) === fe;
        j !== (m === 0) && ((l = xt()), $(l), q(!1), (L = !0));
      }
      for (var S = new Set(), N = he, d = me(), h = 0; h < m; h += 1) {
        D && X.nodeType === Mt && X.data === ve && ((l = X), (L = !0), q(!1));
        var _ = v[h],
          I = o(_, h),
          g = w ? null : f.get(I);
        (g
          ? (g.v && Lt(g.v, _),
            g.i && Lt(g.i, h),
            d && N.skipped_effects.delete(g.e))
          : ((g = $e(f, w ? l : (Dt ??= gt()), _, I, h, s, e, r)),
            w || (g.e.f |= V),
            f.set(I, g)),
          S.add(I));
      }
      if (
        (m === 0 &&
          n &&
          !a &&
          (w
            ? (a = at(() => n(l)))
            : ((a = at(() => n((Dt ??= gt())))), (a.f |= V))),
        D && m > 0 && $(xt()),
        !w)
      )
        if (d) {
          for (const [k, F] of f) S.has(k) || N.skipped_effects.add(F.e);
          (N.oncommit(C), N.ondiscard(() => {}));
        } else C();
      (L && q(!0), A(p));
    }),
    u = { effect: T, items: f, outrogroups: null, fallback: a };
  ((w = !1), D && (l = X));
}
function Ze(t, e, r, o, s) {
  var n = (o & Ce) !== 0,
    l = e.length,
    f = t.items,
    i = t.effect.first,
    c,
    a = null,
    p,
    v = [],
    w = [],
    C,
    T,
    u,
    m;
  if (n)
    for (m = 0; m < l; m += 1)
      ((C = e[m]),
        (T = s(C, m)),
        (u = f.get(T).e),
        (u.f & V) === 0 && (u.nodes?.a?.measure(), (p ??= new Set()).add(u)));
  for (m = 0; m < l; m += 1) {
    if (((C = e[m]), (T = s(C, m)), (u = f.get(T).e), t.outrogroups !== null))
      for (const g of t.outrogroups) (g.pending.delete(u), g.done.delete(u));
    if ((u.f & V) !== 0)
      if (((u.f ^= V), u === i)) nt(u, null, r);
      else {
        var L = a ? a.next : i;
        (u === t.effect.last && (t.effect.last = u.prev),
          u.prev && (u.prev.next = u.next),
          u.next && (u.next.prev = u.prev),
          Y(t, a, u),
          Y(t, u, L),
          nt(u, L, r),
          (a = u),
          (v = []),
          (w = []),
          (i = a.next));
        continue;
      }
    if (
      ((u.f & _t) !== 0 &&
        (Jt(u), n && (u.nodes?.a?.unfix(), (p ??= new Set()).delete(u))),
      u !== i)
    ) {
      if (c !== void 0 && c.has(u)) {
        if (v.length < w.length) {
          var j = w[0],
            S;
          a = j.prev;
          var N = v[0],
            d = v[v.length - 1];
          for (S = 0; S < v.length; S += 1) nt(v[S], j, r);
          for (S = 0; S < w.length; S += 1) c.delete(w[S]);
          (Y(t, N.prev, d.next),
            Y(t, a, N),
            Y(t, d, j),
            (i = j),
            (a = d),
            (m -= 1),
            (v = []),
            (w = []));
        } else
          (c.delete(u),
            nt(u, i, r),
            Y(t, u.prev, u.next),
            Y(t, u, a === null ? t.effect.first : a.next),
            Y(t, a, u),
            (a = u));
        continue;
      }
      for (v = [], w = []; i !== null && i !== u; )
        ((c ??= new Set()).add(i), w.push(i), (i = i.next));
      if (i === null) continue;
    }
    ((u.f & V) === 0 && v.push(u), (a = u), (i = u.next));
  }
  if (t.outrogroups !== null) {
    for (const g of t.outrogroups)
      g.pending.size === 0 && (St(It(g.done)), t.outrogroups?.delete(g));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (i !== null || c !== void 0) {
    var h = [];
    if (c !== void 0) for (u of c) (u.f & _t) === 0 && h.push(u);
    for (; i !== null; )
      ((i.f & _t) === 0 && i !== t.fallback && h.push(i), (i = i.next));
    var _ = h.length;
    if (_ > 0) {
      var I = (o & Xt) !== 0 && l === 0 ? r : null;
      if (n) {
        for (m = 0; m < _; m += 1) h[m].nodes?.a?.measure();
        for (m = 0; m < _; m += 1) h[m].nodes?.a?.fix();
      }
      Qe(t, h, I);
    }
  }
  n &&
    At(() => {
      if (p !== void 0) for (u of p) u.nodes?.a?.apply();
    });
}
function $e(t, e, r, o, s, n, l, f) {
  var i = (l & be) !== 0 ? ((l & _e) === 0 ? pe(r, !1, !1) : Pt(r)) : null,
    c = (l & ye) !== 0 ? Pt(s) : null;
  return {
    v: i,
    i: c,
    e: at(
      () => (
        n(e, i ?? r, c ?? s, f),
        () => {
          t.delete(o);
        }
      ),
    ),
  };
}
function nt(t, e, r) {
  if (t.nodes)
    for (
      var o = t.nodes.start,
        s = t.nodes.end,
        n = e && (e.f & V) === 0 ? e.nodes.start : r;
      o !== null;
    ) {
      var l = dt(o);
      if ((n.before(o), o === s)) return;
      o = l;
    }
}
function Y(t, e, r) {
  (e === null ? (t.effect.first = r) : (e.next = r),
    r === null ? (t.effect.last = e) : (r.prev = e));
}
function ot(t, e, r = !1, o = !1, s = !1) {
  var n = t,
    l = "";
  G(() => {
    var f = Se;
    if (l === (l = e() ?? "")) {
      D && Ct();
      return;
    }
    if (
      (f.nodes !== null && (ke(f.nodes.start, f.nodes.end), (f.nodes = null)),
      l !== "")
    ) {
      if (D) {
        X.data;
        for (
          var i = Ct(), c = i;
          i !== null && (i.nodeType !== Mt || i.data !== "");
        )
          ((c = i), (i = dt(i)));
        if (i === null) throw (Ae(), Me);
        (Et(X, c), (n = $(i)));
        return;
      }
      var a = l + "";
      r ? (a = `<svg>${a}</svg>`) : o && (a = `<math>${a}</math>`);
      var p = le(a);
      if (((r || o) && (p = Z(p)), Et(Z(p), p.lastChild), r || o))
        for (; Z(p); ) n.before(Z(p));
      else n.before(p);
    }
  });
}
function tr(t, e) {
  let r = null,
    o = D;
  var s;
  if (D) {
    r = X;
    for (
      var n = Z(document.head);
      n !== null && (n.nodeType !== Mt || n.data !== t);
    )
      n = dt(n);
    if (n === null) q(!1);
    else {
      var l = dt(n);
      (n.remove(), $(l));
    }
  }
  D || (s = document.head.appendChild(gt()));
  try {
    Wt(() => e(s), Ie);
  } finally {
    o && (q(!0), $(r));
  }
}
function er(t, e) {
  var r = void 0,
    o;
  qt(() => {
    r !== (r = e()) &&
      (o && (ft(o), (o = null)),
      r &&
        (o = at(() => {
          Tt(() => r(t));
        })));
  });
}
function Qt(t) {
  var e,
    r,
    o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var s = t.length;
      for (e = 0; e < s; e++)
        t[e] && (r = Qt(t[e])) && (o && (o += " "), (o += r));
    } else for (r in t) t[r] && (o && (o += " "), (o += r));
  return o;
}
function rr() {
  for (var t, e, r = 0, o = "", s = arguments.length; r < s; r++)
    (t = arguments[r]) && (e = Qt(t)) && (o && (o += " "), (o += e));
  return o;
}
function bt(t) {
  return typeof t == "object" ? rr(t) : (t ?? "");
}
const Ot = [
  ...` 	
\r\f \v\uFEFF`,
];
function or(t, e, r) {
  var o = t == null ? "" : "" + t;
  if ((e && (o = o ? o + " " + e : e), r)) {
    for (var s in r)
      if (r[s]) o = o ? o + " " + s : s;
      else if (o.length)
        for (var n = s.length, l = 0; (l = o.indexOf(s, l)) >= 0; ) {
          var f = l + n;
          (l === 0 || Ot.includes(o[l - 1])) &&
          (f === o.length || Ot.includes(o[f]))
            ? (o = (l === 0 ? "" : o.substring(0, l)) + o.substring(f + 1))
            : (l = f);
        }
  }
  return o === "" ? null : o;
}
function Gt(t, e = !1) {
  var r = e ? " !important;" : ";",
    o = "";
  for (var s in t) {
    var n = t[s];
    n != null && n !== "" && (o += " " + s + ": " + n + r);
  }
  return o;
}
function yt(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function sr(t, e) {
  if (e) {
    var r = "",
      o,
      s;
    if ((Array.isArray(e) ? ((o = e[0]), (s = e[1])) : (o = e), t)) {
      t = String(t)
        .replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
        .trim();
      var n = !1,
        l = 0,
        f = !1,
        i = [];
      (o && i.push(...Object.keys(o).map(yt)),
        s && i.push(...Object.keys(s).map(yt)));
      var c = 0,
        a = -1;
      const T = t.length;
      for (var p = 0; p < T; p++) {
        var v = t[p];
        if (
          (f
            ? v === "/" && t[p - 1] === "*" && (f = !1)
            : n
              ? n === v && (n = !1)
              : v === "/" && t[p + 1] === "*"
                ? (f = !0)
                : v === '"' || v === "'"
                  ? (n = v)
                  : v === "("
                    ? l++
                    : v === ")" && l--,
          !f && n === !1 && l === 0)
        ) {
          if (v === ":" && a === -1) a = p;
          else if (v === ";" || p === T - 1) {
            if (a !== -1) {
              var w = yt(t.substring(c, a).trim());
              if (!i.includes(w)) {
                v !== ";" && p++;
                var C = t.substring(c, p).trim();
                r += " " + C + ";";
              }
            }
            ((c = p + 1), (a = -1));
          }
        }
      }
    }
    return (
      o && (r += Gt(o)),
      s && (r += Gt(s, !0)),
      (r = r.trim()),
      r === "" ? null : r
    );
  }
  return t == null ? null : String(t);
}
function lt(t, e, r, o, s, n) {
  var l = t.__className;
  if (D || l !== r || l === void 0) {
    var f = or(r, o, n);
    ((!D || f !== t.getAttribute("class")) &&
      (f == null
        ? t.removeAttribute("class")
        : e
          ? (t.className = f)
          : t.setAttribute("class", f)),
      (t.__className = r));
  } else if (n && s !== n)
    for (var i in n) {
      var c = !!n[i];
      (s == null || c !== !!s[i]) && t.classList.toggle(i, c);
    }
  return n;
}
function wt(t, e = {}, r, o) {
  for (var s in r) {
    var n = r[s];
    e[s] !== n &&
      (r[s] == null ? t.style.removeProperty(s) : t.style.setProperty(s, n, o));
  }
}
function Zt(t, e, r, o) {
  var s = t.__style;
  if (D || s !== e) {
    var n = sr(e, o);
    ((!D || n !== t.getAttribute("style")) &&
      (n == null ? t.removeAttribute("style") : (t.style.cssText = n)),
      (t.__style = e));
  } else
    o &&
      (Array.isArray(o)
        ? (wt(t, r?.[0], o[0]), wt(t, r?.[1], o[1], "important"))
        : wt(t, r, o));
  return o;
}
function kt(t, e, r = !1) {
  if (t.multiple) {
    if (e == null) return;
    if (!Yt(e)) return Te();
    for (var o of t.options) o.selected = e.includes(zt(o));
    return;
  }
  for (o of t.options) {
    var s = zt(o);
    if (Fe(s, e)) {
      o.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function ir(t) {
  var e = new MutationObserver(() => {
    kt(t, t.__value);
  });
  (e.observe(t, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    Ee(() => {
      e.disconnect();
    }));
}
function zt(t) {
  return "__value" in t ? t.__value : t.value;
}
const st = Symbol("class"),
  it = Symbol("style"),
  $t = Symbol("is custom element"),
  te = Symbol("is html");
function nr(t) {
  if (D) {
    var e = !1,
      r = () => {
        if (!e) {
          if (((e = !0), t.hasAttribute("value"))) {
            var o = t.value;
            (O(t, "value", null), (t.value = o));
          }
          if (t.hasAttribute("checked")) {
            var s = t.checked;
            (O(t, "checked", null), (t.checked = s));
          }
        }
      };
    ((t.__on_r = r), At(r), qe());
  }
}
function ar(t, e) {
  e
    ? t.hasAttribute("selected") || t.setAttribute("selected", "")
    : t.removeAttribute("selected");
}
function O(t, e, r, o) {
  var s = ee(t);
  (D &&
    ((s[e] = t.getAttribute(e)),
    e === "src" ||
      e === "srcset" ||
      (e === "href" && t.nodeName === "LINK"))) ||
    (s[e] !== (s[e] = r) &&
      (e === "loading" && (t[Le] = r),
      r == null
        ? t.removeAttribute(e)
        : typeof r != "string" && re(t).includes(e)
          ? (t[e] = r)
          : t.setAttribute(e, r)));
}
function lr(t, e, r, o, s = !1, n = !1) {
  if (D && s && t.tagName === "INPUT") {
    var l = t,
      f = l.type === "checkbox" ? "defaultChecked" : "defaultValue";
    f in r || nr(l);
  }
  var i = ee(t),
    c = i[$t],
    a = !i[te];
  let p = D && c;
  p && q(!1);
  var v = e || {},
    w = t.tagName === "OPTION";
  for (var C in e) C in r || (r[C] = null);
  (r.class ? (r.class = bt(r.class)) : (o || r[st]) && (r.class = null),
    r[it] && (r.style ??= null));
  var T = re(t);
  for (const d in r) {
    let h = r[d];
    if (w && d === "value" && h == null) {
      ((t.value = t.__value = ""), (v[d] = h));
      continue;
    }
    if (d === "class") {
      var u = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      (lt(t, u, h, o, e?.[st], r[st]), (v[d] = h), (v[st] = r[st]));
      continue;
    }
    if (d === "style") {
      (Zt(t, h, e?.[it], r[it]), (v[d] = h), (v[it] = r[it]));
      continue;
    }
    var m = v[d];
    if (!(h === m && !(h === void 0 && t.hasAttribute(d)))) {
      v[d] = h;
      var L = d[0] + d[1];
      if (L !== "$$")
        if (L === "on") {
          const _ = {},
            I = "$$" + d;
          let g = d.slice(2);
          var j = We(g);
          if ((Ve(g) && ((g = g.slice(0, -7)), (_.capture = !0)), !j && m)) {
            if (h != null) continue;
            (t.removeEventListener(g, v[I], _), (v[I] = null));
          }
          if (h != null)
            if (j) ((t[`__${g}`] = h), pt([g]));
            else {
              let k = function (F) {
                v[d].call(this, F);
              };
              v[I] = Re(g, t, k, _);
            }
          else j && (t[`__${g}`] = void 0);
        } else if (d === "style") O(t, d, h);
        else if (d === "autofocus") Xe(t, !!h);
        else if (!c && (d === "__value" || (d === "value" && h != null)))
          t.value = t.__value = h;
        else if (d === "selected" && w) ar(t, h);
        else {
          var S = d;
          a || (S = Ue(S));
          var N = S === "defaultValue" || S === "defaultChecked";
          if (h == null && !c && !N)
            if (((i[d] = null), S === "value" || S === "checked")) {
              let _ = t;
              const I = e === void 0;
              if (S === "value") {
                let g = _.defaultValue;
                (_.removeAttribute(S),
                  (_.defaultValue = g),
                  (_.value = _.__value = I ? g : null));
              } else {
                let g = _.defaultChecked;
                (_.removeAttribute(S),
                  (_.defaultChecked = g),
                  (_.checked = I ? g : !1));
              }
            } else t.removeAttribute(d);
          else
            N || (T.includes(S) && (c || typeof h != "string"))
              ? ((t[S] = h), S in i && (i[S] = Oe))
              : typeof h != "function" && O(t, S, h);
        }
    }
  }
  return (p && q(!0), v);
}
function ut(t, e, r = [], o = [], s = [], n, l = !1, f = !1) {
  xe(s, r, o, (i) => {
    var c = void 0,
      a = {},
      p = t.nodeName === "SELECT",
      v = !1;
    if (
      (qt(() => {
        var C = e(...i.map(A)),
          T = lr(t, c, C, n, l, f);
        v && p && "value" in C && kt(t, C.value);
        for (let m of Object.getOwnPropertySymbols(a)) C[m] || ft(a[m]);
        for (let m of Object.getOwnPropertySymbols(C)) {
          var u = C[m];
          (m.description === je &&
            (!c || u !== c[m]) &&
            (a[m] && ft(a[m]), (a[m] = at(() => er(t, () => u)))),
            (T[m] = u));
        }
        c = T;
      }),
      p)
    ) {
      var w = t;
      Tt(() => {
        (kt(w, c.value, !0), ir(w));
      });
    }
    v = !0;
  });
}
function ee(t) {
  return (t.__attributes ??= {
    [$t]: t.nodeName.includes("-"),
    [te]: t.namespaceURI === Pe,
  });
}
var Ht = new Map();
function re(t) {
  var e = t.getAttribute("is") || t.nodeName,
    r = Ht.get(e);
  if (r) return r;
  Ht.set(e, (r = []));
  for (var o, s = t, n = Element.prototype; n !== s; ) {
    o = De(s);
    for (var l in o) o[l].set && r.push(l);
    s = Ne(s);
  }
  return r;
}
const Bt = {
    en: {
      title: "Hi there, I'm MaestroFusion360",
      "about-title": "About Me",
      "about-desc": `I'm a CNC/CAM engineer and software developer working with Fusion 360, postprocessors and real-world machining workflows. 
I build automation tools, G-code utilities and web apps, and I also develop my own UI libraries on Svelte 5 with a clean, minimal architecture. 
My work spans from postprocessor customization and CAM process tuning to full-stack platforms with PWA frontends, bots and engineering analytics. 
I focus on clarity, predictable behavior and tools that actually help engineers get work done faster and with fewer errors.`,
      "tech-title": "Technologies",
      "tech-stack": "Main Stack:",
      "tech-other": "Other Tools & Skills:",
      "projects-title": "Projects",
      "upcoming-title": "Future Projects",
      "contact-title": "Contact Me",
      "skill-post":
        "<strong>Post Processors</strong> & <strong>CAM Automation</strong>",
      "skill-workflows": "<strong>Custom Workflows</strong>",
      "skill-ui": "<strong>UI/UX for Fusion 360 Add-Ins</strong>",
      "skill-vba": "<strong>Excel VBA Automation</strong>",
      "skill-macros": "<strong>Macros Development</strong>",
      "skill-telegram": "<strong>Aiogram Bots</strong>",
      "skill-web":
        "<strong>Web applications & UI (Svelte 5, TypeScript, Tailwind)</strong>",
      "video-missing": "Video not available",
    },
    ru: {
      title: "Привет, я MaestroFusion360",
      "about-title": "Обо мне",
      "about-desc": `Я - инженер по ЧПУ/САМ и разработчик программного обеспечения, работающий с Fusion 360, постпроцессорами и реальными процессами механической обработки.
Я создаю инструменты автоматизации, утилиты для G-кода и веб-приложения, а также разрабатываю собственные UI-библиотеки на Svelte 5 с чистой, минималистичной архитектурой.
Моя работа охватывает всё - от кастомизации постпроцессоров и настройки CAM-процессов до создания полноценных платформ с PWA-фронтендами, ботами и аналитикой для инженерных задач. Я сосредоточен на ясности, предсказуемости поведения и инструментах, которые действительно помогают инженерам выполнять работу быстрее и с меньшим количеством ошибок.`,
      "tech-title": "Технологии",
      "tech-stack": "Основной стек:",
      "tech-other": "Другие инструменты и навыки:",
      "projects-title": "Проекты",
      "upcoming-title": "Будущие проекты",
      "contact-title": "Контакты",
      "skill-post":
        "<strong>Постпроцессоры</strong> и <strong>автоматизация CAM</strong>",
      "skill-workflows": "<strong>Кастомные рабочие процессы</strong>",
      "skill-ui": "<strong>UI/UX для адд-инов Fusion 360</strong>",
      "skill-vba": "<strong>Автоматизация на Excel VBA</strong>",
      "skill-macros": "<strong>Разработка макросов</strong>",
      "skill-telegram": "<strong>Боты на Aiogram</strong>",
      "skill-web":
        "<strong>Веб-приложения и UI (Svelte 5, TypeScript, Tailwind)</strong>",
      "video-missing": "Видео недоступно",
    },
  },
  Vt = {
    active: [
      {
        link: "https://github.com/MaestroFusion360/svelte-comp",
        youtubeId: "",
        en: {
          title: "svelte-comp",
          description:
            "A compact, modular UI toolkit built on <strong>Svelte 5</strong> with styling powered by <strong>TailwindCSS</strong> and a clean layer of CSS variables. Components are predictable, lightweight, and self-contained - no global side effects",
          features: [
            "<strong>Svelte 5 Runes API</strong> ($state, $derived, $effect, $props)",
            "<strong>TailwindCSS v4</strong> + design tokens via CSS variables",
            "<strong>Built-in i18n</strong>: English, Russian, Spanish",
          ],
        },
        ru: {
          title: "svelte-comp",
          description:
            "Компактная модульная библиотека UI-компонентов на <strong>Svelte 5</strong> со стилями на <strong>TailwindCSS</strong> и слоем CSS-переменных. Компоненты предсказуемые, легкие и самодостаточные - без глобальных сайд-эффектов",
          features: [
            "<strong>Svelte 5 Runes API</strong> ($state, $derived, $effect, $props)",
            "<strong>TailwindCSS v4</strong> + дизайн-токены через CSS-переменные",
            "<strong>Встроенная i18n</strong>: английский, русский, испанский",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/task_planning",
        youtubeId: "",
        en: {
          title: "Planner",
          description:
            "Planner is a desktop application for <strong>manufacturing task management</strong> and <strong>production scheduling</strong>",
          features: [
            "<strong>Production planning</strong> and scheduling",
            "<strong>Interactive Gantt chart</strong> (Day / Week / Month view)",
            "Import/Export from <strong>CSV</strong> and <strong>Excel</strong>",
          ],
        },
        ru: {
          title: "Planner",
          description:
            "Planner — настольное приложение для <strong>управления производственными задачами</strong> и <strong>планирования производства</strong>",
          features: [
            "<strong>Планирование</strong> и расписание производственных задач",
            "<strong>Интерактивная диаграмма Ганта</strong> (день / неделя / месяц)",
            "Импорт/Экспорт из <strong>CSV</strong> и <strong>Excel</strong>",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/easy_gcode_plot",
        youtubeId: "",
        en: {
          title: "Easy G-Code Plot",
          description:
            "Easy G-Code Plot is a G-code editor and visualizer. It supports 3D rendering of toolpaths for <strong>3-axis milling</strong> and <strong>2-axis lathe</strong> machining with various modes",
          features: [
            "<strong>Program animation</strong> with playback speed control and display of current coordinates",
            "<strong>Syntax highlighting with line numbering</strong> (similar to Cimco Edit)",
            "<strong>G-code export</strong> and <strong>machining time calculation</strong>",
          ],
        },
        ru: {
          title: "Easy G-Code Plot",
          description:
            "Easy G-Code Plot - редактор-визуализатор G-кода. Поддержка 3D прорисовки траекторий <strong>3х осевой фрезерной</strong> и <strong>2х осевой токарной</strong> обработки с различными режимами",
          features: [
            "<strong>Анимация</strong> программы с управлением скоростью воспроизведения и отображением текущих координат",
            "<strong>Подсветка синтаксиса c нумерацией строк</strong> (как в Cimco Edit)",
            "<strong>Экспорт G-кода</strong> и <strong>расчет времени обработки</strong>",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/SmartPost",
        youtubeId: "IRA7O7wwCWM",
        en: {
          title: "SmartPost",
          description:
            "A powerful tool that accelerates <strong>G-code generation</strong> and removes the <strong>tool change restriction</strong> in Fusion 360 Personal",
          features: [
            "<strong>Faster post-processing</strong> – reduce CAM processing time.",
            "<strong>No tool change limitations</strong> – unrestricted multi-tool operations.",
            "<strong>Improved workflow efficiency</strong> – streamlined G-code generation.",
          ],
        },
        ru: {
          title: "SmartPost",
          description:
            "Мощный инструмент, который ускоряет <strong>генерацию УП</strong> и устраняет <strong>ограничение на смену инструмента</strong> в Fusion 360 Personal",
          features: [
            "<strong>Быстрый постпроцессинг</strong> – сокращение времени на настройку вывода УП.",
            "<strong>Нет ограничений на смену инструмента</strong> – неограниченные операции с несколькими инструментами.",
            "<strong>Улучшенная эффективность</strong> – упрощенная генерация УП.",
          ],
        },
      },
      {
        link: "https://maestrofusion360.github.io/FormBuilder/",
        youtubeId: "",
        en: {
          title: "FormBuilder",
          description:
            "FormBuilder is a visual HTML form editor built with Svelte and Vite, offering developers a lightweight, dependency-free tool for complete control over form design",
          features: [
            "<strong>Visual Component Tree</strong>: Intuitively add, remove, nest, and reorder form elements.",
            "<strong>Drag-and-Drop</strong>",
            "<strong>Project Serialization</strong>: Save, load, and share your form's complete structure as JSON.",
          ],
        },
        ru: {
          title: "FormBuilder",
          description:
            "FormBuilder — это визуальный редактор HTML-форм на Svelte и Vite, предоставляющий разработчикам лёгкий инструмент без зависимостей для полного контроля над дизайном форм",
          features: [
            "<strong>Визуальное дерево компонентов</strong>: Интуитивное добавление, удаление, вложение и изменение порядка элементов формы.",
            "<strong>Drag-and-Drop и управление с клавиатуры</strong>",
            "<strong>Сериализация проекта</strong>: Сохранение, загрузка и обмен полной структурой формы в формате JSON.",
          ],
        },
      },
      {
        link: "https://t.me/postprocessors_bot",
        youtubeId: "",
        en: {
          title: "@postprocessors_bot",
          description:
            "<strong>Telegram bot</strong> for managing and distributing CAM postprocessors",
          features: [
            "<strong>Catalog for NX and Fusion 360</strong> (turning/milling)",
            "<strong>Download from private Telegram channel</strong>",
            "<strong>Category and metadata system</strong> (license, version)",
          ],
        },
        ru: {
          title: "@postprocessors_bot",
          description:
            "<strong>Телеграм-бот</strong> для управления и распространения CAM-постпроцессоров",
          features: [
            "<strong>Каталог для NX и Fusion 360</strong> (токарная/фрезерная обработка)",
            "<strong>Скачивание из закрытого Telegram канала</strong>",
            "<strong>Система категорий и метаданных </strong>(лицензия, версия)",
          ],
        },
      },
      {
        link: "https://maestrofusion360.github.io/css-validator-pages/",
        youtubeId: "",
        en: {
          title: "CSS validator",
          description:
            "<strong>CSS Validator</strong> is a lightweight, interactive tool built with Svelte 5. It features a live editor with instant preview, inline validation",
          features: [
            "<strong>Live Editor & Preview</strong>: Auto-resizing textarea and real-time rendering of a selected component.",
            "<strong>Inline CSS Validation</strong>: Real-time warnings and errors for property names and values.",
            "<strong>Syntax Highlighting & Copy</strong>: The CodeView component highlights CSS/HTML and enables one-click copying.",
          ],
        },
        ru: {
          title: "CSS validator",
          description:
            "<strong>CSS Validator</strong> — это лёгкий интерактивный инструмент на Svelte 5. Он предлагает живой редактор с предпросмотром, встроенную валидацию",
          features: [
            "<strong>Живой редактор и предпросмотр</strong>: Автомасштабируемое поле ввода и мгновенный рендеринг выбранного компонента.",
            "<strong>Встроенная валидация CSS</strong>: Проверка имён и значений свойств с выводом предупреждений и ошибок.",
            "<strong>Подсветка синтаксиса и копирование</strong>: Компонент CodeView подсвечивает CSS/HTML код и позволяет копировать его.",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/DrillCalc",
        youtubeId: "",
        en: {
          title: "DrillCalc",
          description:
            "<strong>Drilling Calculator</strong> is a fast G-code coordinate generator for circular and grid hole patterns, designed for CNC machinists and Fusion 360 users",
          features: [
            "<strong>Circular & Grid Array Calculation</strong>: Generate coordinates for PCD and grid layouts with start angle and direction control.",
            "<strong>Export-Ready G-Code Cycles</strong>: Directly export to standard canned cycles (G81, G82, G83) or XY coordinate lists.",
            "<strong>Accessible, Responsive UI</strong>: A clean interface with dark/light mode that works on any device.",
          ],
        },
        ru: {
          title: "DrillCalc",
          description:
            "<strong>Drilling Calculator</strong> — это быстрый генератор координат G-кода для круговых и сеточных массивов отверстий, созданный для операторов ЧПУ и пользователей Fusion 360",
          features: [
            "<strong>Расчёт круговых и сеточных массивов</strong>: Генерация координат для окружностей и сеток с настройкой начального угла и направления.",
            "<strong>Экспорт циклов G-кода</strong>: Прямой экспорт в стандартные циклы (G81, G82, G83) или списки координат XY.",
            "<strong>Адаптивный и доступный интерфейс</strong>: Чистый дизайн с тёмной/светлой темой для всех устройств.",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/MoveOp",
        youtubeId: "6TczgiwyWbA",
        en: {
          title: "MoveOp",
          description:
            "<strong>MoveOp</strong> solves blocking operation in Fusion 360 after Import CAM Data",
          features: [
            "<strong>Reordering within the same Setup</strong> (Fusion’s native restriction)",
            "<strong>No manual parameter editing required</strong>",
            "<strong>Full preservation of operation settings</strong>",
          ],
        },
        ru: {
          title: "MoveOp",
          description:
            "<strong>MoveOp</strong> решает блокировку операций в Fusion 360 после Import CAM Data",
          features: [
            "<strong>Изменение порядка в пределах одной настройки</strong> (ограничение Fusion)",
            "<strong>Не требуется ручного редактирования параметров</strong>",
            "<strong>Полное сохранение настроек работы</strong>",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/QuickSelect",
        youtubeId: "E2lyviuTwmQ",
        en: {
          title: "QuickSelect",
          description:
            "<strong>QuickSelect</strong> is a Fusion 360 add-in that simplifies the <strong>selection of tangent faces</strong> on your 3D models. With one click, the tool automatically selects:",
          features: [
            "<strong>All faces tangent to your initial selection</strong>",
            "<strong>Connected faces with continuous curvature</strong>",
            "<strong>Complex face chains without manual picking</strong>",
          ],
        },
        ru: {
          title: "QuickSelect",
          description:
            "<strong>QuickSelect</strong> - это надстройка Fusion 360, которая упрощает <strong>выбор касательных граней</strong> в 3D-моделях. Одним кликом выбираются:",
          features: [
            "<strong>Все грани, касающиеся вашей начальной выделенной грани</strong>",
            "<strong>Связанные грани с непрерывной кривизной</strong>",
            "<strong>Сложные цепочки граней без ручного выбора</strong>",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/CompareBodies",
        youtubeId: "",
        en: {
          title: "CompareBodies",
          description:
            "<strong>Compare Bodies</strong> is a Fusion 360 add-in that allows you to compare two selected bodies directly within the design environment to <strong>detect any differences between them.</strong> After selecting two bodies, the tool calculates and compares:",
          features: [
            "<strong>Volume</strong>",
            "<strong>Surface area</strong>",
            "<strong>Geometry similarity</strong> (based on face and edge counts)",
          ],
        },
        ru: {
          title: "CompareBodies",
          description:
            "<strong>Compare Bodies</strong> — это надстройка для Fusion 360, позволяющая сравнивать два выбранных тела прямо в среде проектирования <strong>для выявления различий между ними.</strong> После выбора двух тел инструмент вычисляет и сравнивает:",
          features: [
            "<strong>Объем</strong>",
            "<strong>Площадь поверхности</strong>",
            "<strong>Сходство геометрии</strong> (на основе количества граней и ребер)",
          ],
        },
      },
      {
        link: "https://maestrofusion360.github.io/editor_json/",
        youtubeId: "",
        en: {
          title: "editor_json",
          description:
            "<strong>editor_json</strong> is a Progressive Web App (PWA) for managing CNC post-processor JSON files (@postprocessors_bot)",
          features: [
            "<strong>Edit post processor parameters</strong>",
            "<strong>Save/load JSON files</strong>",
            "<strong>Search by name and description</strong>",
            "<strong>Responsive interface</strong>",
          ],
        },
        ru: {
          title: "editor_json",
          description:
            "<strong>editor_json</strong> — это веб-приложение (PWA) для управления JSON-файлами постпроцессоров ЧПУ (@postprocessors_bot)",
          features: [
            "<strong>Редактировать параметры постпроцессора</strong>",
            "<strong>Сохранять и загружать JSON-файлы конфигурации</strong>",
            "<strong>Поиск по названию и описанию</strong>",
            "<strong>Адаптивный интерфейс</strong>",
          ],
        },
      },
    ],
    upcoming: [
      {
        link: "",
        youtubeId: "",
        en: {
          title: "Automation",
          description:
            "<strong>Automation</strong> – is a add-in for Fusion 360 that automates the loading and adaptation of CAM data from templates, eliminating the need to manually create machining strategies. Its key feature is <strong>Import CAM Data</strong>, which allows linking ready-made toolpaths to a new model.",
          features: [
            "<strong>Smart templates</strong>, allowing work without the need to define geometry for machining creation",
            "<strong>Offline mode</strong> – loading templates and managing data without connecting to the Fusion 360 cloud",
            "<strong>WCS setup</strong> – automatic determination of the stock's zero point for correct machining alignment",
            "<strong>Automatic setup sheet generation</strong> – creation of files with machining parameters, tools, and saving model images from different angles",
            "<strong>Automatic NC program creation</strong> – generation of control programs using configured parameters",
            "<strong>Flexible post processor setup</strong> – selection of G-code formats, save folders, and output parameters",
          ],
        },
        ru: {
          title: "Automation",
          description:
            "<strong>Automation</strong> – это модуль для Fusion 360, который автоматизирует загрузку и адаптацию CAM-данных из шаблонов, исключая необходимость вручную создавать стратегии обработки. Его ключевая функция – <strong>Import CAM Data</strong>, позволяющая привязывать готовые траектории к новой модели.",
          features: [
            "<strong>Умные шаблоны</strong>, позволяющие работать без необходимости задавать геометрию для создания обработки",
            "<strong>Офлайн-режим работы</strong> – загрузка шаблонов и управление данными без подключения к облаку Fusion 360",
            "<strong>Настройка WCS</strong> – автоматическое определение нулевой точки заготовки для корректной привязки обработки",
            "<strong>Автоматическая генерация карт наладки</strong> – создание файлов с параметрами обработки, инструментами и сохранение изображений модели с разных ракурсов",
            "<strong>Автоматическое создание NC-программ</strong> – генерация управляющих программ с использованием настроенных параметров",
            "<strong>Гибкая настройка постпроцессоров</strong> – выбор форматов G-кода, папок сохранения и параметров вывода",
          ],
        },
      },
    ],
  };
var cr = P(
  '<div class="content-block contact-info contact-grid"><p><img src="assets/gmail_icon.svg" width="20" alt="Gmail"/> <strong>Email:</strong> <a href="mailto:maestrofusion360@gmail.com">maestrofusion360@gmail.com</a></p> <p><img src="assets/telegram_icon.svg" width="20" alt="Telegram"/> <strong>Telegram:</strong> <a href="https://t.me/MaestroFusion360">@MaestroFusion360</a></p> <p><img src="assets/github_icon.svg" width="20" alt="GitHub"/> <strong>GitHub:</strong> <a href="https://github.com/MaestroFusion360">github.com/MaestroFusion360</a></p> <p><img src="assets/youtube_icon.svg" width="20" alt="YouTube"/> <strong>YouTube:</strong> <a href="https://www.youtube.com/@MaestroFusion360">youtube.com/@MaestroFusion360</a></p></div>',
);
function ur(t) {
  var e = cr();
  E(t, e);
}
var gr = P('<footer class="svelte-kcvnik"><p> </p></footer>');
function dr(t, e) {
  R(e, !1);
  const r = new Date().getFullYear();
  Je();
  var o = gr(),
    s = y(o),
    n = y(s);
  (b(s),
    b(o),
    G(() => B(n, `© ${r ?? ""} MaestroFusion360. All rights reserved.`)),
    E(t, o),
    U());
}
var fr = P(
  `<header class="svelte-1yz1i5m"><h1 data-lang="title" class="svelte-1yz1i5m">Hi there, I'm MaestroFusion360</h1> <nav class="navbar svelte-1yz1i5m"><a href="#about" data-lang="about-title" class="svelte-1yz1i5m">About</a> <a href="#technologies" data-lang="tech-title" class="svelte-1yz1i5m">Technologies</a> <a href="#projects" data-lang="projects-title" class="svelte-1yz1i5m">Projects</a> <a href="#upcoming" data-lang="upcoming-title" class="svelte-1yz1i5m">Future Projects</a> <a href="#contact" data-lang="contact-title" class="svelte-1yz1i5m">Contact</a></nav> <div class="social-links svelte-1yz1i5m"><a href="https://www.youtube.com/@MaestroFusion360?sub_confirmation=1"><img src="https://img.shields.io/badge/Subscribe-YouTube-red?logo=youtube" alt="YouTube" class="svelte-1yz1i5m"/></a> <a href="https://t.me/+v0HwgVBIg8AyNTcy"><img src="https://img.shields.io/badge/Join-Telegram-blue?logo=telegram" alt="Telegram" class="svelte-1yz1i5m"/></a></div></header>`,
);
function vr(t) {
  var e = fr();
  E(t, e);
}
function K(...t) {
  const e = [],
    r = (o) => {
      if (!(o == null || o === !1)) {
        if (typeof o == "string") {
          e.push(...o.split(/\s+/).filter(Boolean));
          return;
        }
        if (typeof o == "number" || typeof o == "bigint") {
          e.push(String(o));
          return;
        }
        if (Array.isArray(o)) {
          for (const s of o) r(s);
          return;
        }
        if (typeof o == "object")
          for (const [s, n] of Object.entries(o)) n && e.push(s);
      }
    };
  for (const o of t) r(o);
  return e.join(" ");
}
var hr = P("<button><!></button>");
function Rt(t, e) {
  R(e, !0);
  let r = x(e, "variant", 3, "primary"),
    o = x(e, "class", 3, ""),
    s = x(e, "type", 3, "button"),
    n = ct(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "children",
      "variant",
      "class",
      "onclick",
      "type",
    ]);
  const l =
      "select-none whitespace-nowrap font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2",
    f = J(() =>
      r() === "primary"
        ? "inline-flex items-center justify-center rounded-[var(--border-radius)] bg-[var(--primary-color)] px-4 py-2 text-sm text-[var(--white)] shadow-[var(--shadow-sm)] transition-[var(--transition)] hover:brightness-110 active:brightness-95"
        : r() === "icon"
          ? "pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-[var(--surface-border)] bg-[var(--surface-strong)] text-[var(--text-color)] shadow-[var(--shadow-sm)] backdrop-blur-sm transition-[var(--transition)] hover:scale-110 hover:bg-[var(--primary-color)] hover:text-[var(--white)]"
          : "inline-flex items-center justify-center rounded-[var(--border-radius)] px-3 py-2 text-sm text-[var(--text-color)] transition-[var(--transition)] hover:bg-[var(--surface-strong)]",
    );
  var i = hr();
  ut(i, (a) => ({ ...n, type: s(), class: a, onclick: e.onclick }), [
    () => K(l, A(f), o()),
  ]);
  var c = y(i);
  (Ft(c, () => e.children), b(i), E(t, i), U());
}
var mr = P("<div><!></div>");
function oe(t, e) {
  R(e, !0);
  const r = x(e, "variant", 3, "default"),
    o = x(e, "active", 3, !1),
    s = x(e, "class", 3, ""),
    n = ct(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "children",
      "variant",
      "active",
      "class",
    ]),
    l = J(() =>
      r() === "default"
        ? "card"
        : r() === "project"
          ? "project-card"
          : "container",
    ),
    f = J(() => (r() === "project" && o() ? "active" : ""));
  var i = mr();
  ut(
    i,
    (a) => ({ ...n, class: a }),
    [() => K(A(l), A(f), s())],
    void 0,
    void 0,
    "svelte-2gevwt",
  );
  var c = y(i);
  (Ft(c, () => e.children), b(i), E(t, i), U());
}
var pr = Ut(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 12L6 8L10 4"></path></svg>',
  ),
  br = Ut(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 4L10 8L6 12"></path></svg>',
  ),
  _r = P(
    '<div class="carousel-nav svelte-er9umx" role="group" aria-label="Carousel navigation"><!> <!></div>',
  ),
  yr = P('<button type="button"></button>'),
  wr = P("<div></div>"),
  Cr = P(
    '<div class="projects-carousel-wrapper svelte-er9umx"><div></div> <!></div> <!>',
    1,
  );
function se(t, e) {
  R(e, !0);
  const r = x(e, "class", 3, ""),
    o = x(e, "dotsClass", 3, ""),
    s = x(e, "ariaLabel", 3, "Carousel"),
    n = x(e, "showDots", 3, !0),
    l = x(e, "showArrows", 3, !0),
    f = ct(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "items",
      "children",
      "class",
      "dotsClass",
      "ariaLabel",
      "showDots",
      "showArrows",
    ]);
  let i = null,
    c = vt(0),
    a = null;
  function p() {
    return i
      ? Array.from(i.querySelectorAll(".project-card")).filter(
          (h) => h.parentElement === i,
        )
      : [];
  }
  function v() {
    if (!i) return 0;
    const d = p();
    if (d.length === 0) return 0;
    const h = i.scrollLeft + i.clientWidth / 2;
    let _ = 0,
      I = Number.MAX_VALUE;
    return (
      d.forEach((g, k) => {
        const F = g.offsetLeft + g.offsetWidth / 2,
          H = Math.abs(F - h);
        H < I && ((I = H), (_ = k));
      }),
      _
    );
  }
  function w(d) {
    if (!i) return;
    const _ = p()[d];
    if (!_) return;
    const I = _.offsetLeft - (i.clientWidth - _.offsetWidth) / 2;
    (i.scrollTo({ left: I, behavior: "smooth" }), Q(c, d, !0));
  }
  function C() {
    a === null &&
      (a = requestAnimationFrame(() => {
        (Q(c, v(), !0), (a = null));
      }));
  }
  mt(() => {
    if (!(typeof window > "u") && i)
      return (
        requestAnimationFrame(() => {
          Q(c, v(), !0);
        }),
        () => {
          (a !== null && cancelAnimationFrame(a), (a = null));
        }
      );
  });
  var T = Cr(),
    u = rt(T),
    m = y(u);
  (ut(
    m,
    (d) => ({
      ...f,
      class: d,
      role: "region",
      "aria-label": s(),
      "aria-live": "polite",
      onscroll: C,
    }),
    [() => K("projects-carousel", r())],
    void 0,
    void 0,
    "svelte-er9umx",
  ),
    ht(
      m,
      21,
      () => e.items,
      jt,
      (d, h, _) => {
        var I = ce(),
          g = rt(I);
        (Ft(
          g,
          () => e.children,
          () => A(h),
          () => _,
          () => _ === A(c),
        ),
          E(d, I));
      },
    ),
    b(m),
    Ke(
      m,
      (d) => (i = d),
      () => i,
    ));
  var L = M(m, 2);
  {
    var j = (d) => {
      var h = _r(),
        _ = y(h);
      Rt(_, {
        "aria-label": "Previous slide",
        variant: "icon",
        onclick: () => w(Math.max(0, A(c) - 1)),
        children: (g, k) => {
          var F = pr();
          E(g, F);
        },
        $$slots: { default: !0 },
      });
      var I = M(_, 2);
      (Rt(I, {
        "aria-label": "Next slide",
        variant: "icon",
        onclick: () => w(Math.min(e.items.length - 1, A(c) + 1)),
        children: (g, k) => {
          var F = br();
          E(g, F);
        },
        $$slots: { default: !0 },
      }),
        b(h),
        E(d, h));
    };
    et(L, (d) => {
      l() && e.items.length > 1 && d(j);
    });
  }
  b(u);
  var S = M(u, 2);
  {
    var N = (d) => {
      var h = wr();
      (ht(
        h,
        21,
        () => e.items,
        jt,
        (_, I, g) => {
          var k = yr();
          let F;
          (O(k, "aria-label", `Go to slide ${g + 1}`),
            (k.__click = () => w(g)),
            G(
              () =>
                (F = lt(k, 1, "dot svelte-er9umx", null, F, {
                  active: g === A(c),
                })),
            ),
            E(_, k));
        },
      ),
        b(h),
        G(
          (_) => lt(h, 1, _, "svelte-er9umx"),
          [() => bt(K("carousel-dots", o()))],
        ),
        E(d, h));
    };
    et(S, (d) => {
      n() && e.items.length > 1 && d(N);
    });
  }
  (E(t, T), U());
}
pt(["click"]);
var Sr = P(
  '<div><div class="w-full"><h2 class="md:text-left"> </h2> <div class="content-block md:mx-0"><p class="md:text-left"> </p></div></div> <div class="flex items-center justify-center md:justify-end h-full"><img width="180" height="180" loading="eager"/></div></div>',
);
function kr(t, e) {
  R(e, !0);
  let r = x(e, "imageSrc", 3, "assets/icon.svg"),
    o = x(e, "imageAlt", 3, "Hero image"),
    s = x(e, "imgClass", 3, ""),
    n = x(e, "class", 3, ""),
    l = ct(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "imageSrc",
      "imageAlt",
      "title",
      "description",
      "titleKey",
      "descriptionKey",
      "imgClass",
      "class",
    ]);
  var f = Sr();
  ut(f, (u) => ({ ...l, class: u }), [
    () => K("grid gap-6 md:grid-cols-[1fr_auto] md:items-stretch", n()),
  ]);
  var i = y(f),
    c = y(i),
    a = y(c, !0);
  b(c);
  var p = M(c, 2),
    v = y(p),
    w = y(v, !0);
  (b(v), b(p), b(i));
  var C = M(i, 2),
    T = y(C);
  (b(C),
    b(f),
    G(
      (u) => {
        (O(c, "data-lang", e.titleKey),
          B(a, e.title),
          O(v, "data-lang", e.descriptionKey),
          B(w, e.description),
          O(T, "src", r()),
          O(T, "alt", o()),
          lt(T, 1, u));
      },
      [
        () =>
          bt(
            K(
              "h-64 w-64 rounded-2xl border border-slate-900/10 bg-white/60 p-3 shadow-sm backdrop-blur",
              "dark:border-slate-100/10 dark:bg-slate-900/40",
              s(),
            ),
          ),
      ],
    ),
    E(t, f),
    U());
}
var Ar = P(
  '<div class="lang-switch svelte-f01c5n" role="group" aria-label="Language"><button type="button" class="lang-switch__btn svelte-f01c5n" aria-label="English" title="English"><img class="lang-switch__img svelte-f01c5n" src="assets/gb_icon.svg" alt="English"/></button> <button type="button" class="lang-switch__btn svelte-f01c5n" aria-label="Русский" title="Русский"><img class="lang-switch__img svelte-f01c5n" src="assets/ru_icon.svg" alt="Русский"/></button></div>',
);
function Mr(t, e) {
  R(e, !0);
  let r = x(e, "value", 15, "en"),
    o = x(e, "persist", 3, !0),
    s = x(e, "storageKey", 3, "lang"),
    n = x(e, "size", 3, 32),
    l = vt(!1);
  mt(() => {
    if (!(typeof window > "u" || typeof document > "u")) {
      if (!A(l)) {
        Q(l, !0);
        const p = localStorage.getItem(s());
        (p === "en" || p === "ru") && r(p);
      }
      ((document.documentElement.lang = r()),
        o() && localStorage.setItem(s(), r()));
    }
  });
  function f(p) {
    r(p);
  }
  var i = Ar(),
    c = y(i);
  c.__click = () => f("en");
  var a = M(c, 2);
  ((a.__click = () => f("ru")),
    b(i),
    G(() => {
      (Zt(i, `--lang-icon-size: ${n()}px`),
        O(c, "aria-pressed", r() === "en"),
        O(a, "aria-pressed", r() === "ru"));
    }),
    E(t, i),
    U());
}
pt(["click"]);
var Ir =
  P(`<button type="button" class="theme-toggle svelte-lu0t34"><svg class="theme-icon theme-icon-sun svelte-lu0t34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg> <svg class="theme-icon theme-icon-moon svelte-lu0t34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2
         A9 9 0 1 0 21 12
         A7.5 7.5 0 1 1 12 2 Z" fill="currentColor"></path></svg></button>`);
function Tr(t, e) {
  R(e, !0);
  const r = "theme";
  let o = vt(!1),
    s = vt("light");
  mt(() => {
    if (typeof window > "u" || typeof document > "u") return;
    if (!A(o)) {
      Q(o, !0);
      const c = localStorage.getItem(r);
      Q(s, c === "dark" || c === "light" ? c : "light", !0);
    }
    const f = A(s) === "dark";
    (document.documentElement.classList.toggle("dark", f),
      localStorage.setItem(r, A(s)),
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", f ? "#0b1220" : "#ffffff"));
  });
  function n() {
    Q(s, A(s) === "dark" ? "light" : "dark", !0);
  }
  var l = Ir();
  ((l.__click = n),
    G(() => {
      (O(
        l,
        "aria-label",
        A(s) === "dark" ? "Switch to light theme" : "Switch to dark theme",
      ),
        O(
          l,
          "title",
          A(s) === "dark" ? "Switch to light theme" : "Switch to dark theme",
        ));
    }),
    E(t, l),
    U());
}
pt(["click"]);
var Fr = P('<iframe allowfullscreen="" loading="lazy" tabindex="-1"></iframe>'),
  Er = P('<div class="video-placeholder"> </div>'),
  xr = P(
    '<a target="_blank" class="project-link" style="position: relative; z-index: 10;" tabindex="-1"> </a>',
  ),
  Lr = P("<li><!></li>"),
  Pr = P('<ul class="features-list"></ul>'),
  Nr = P(
    '<div class="video-container"><!></div> <h3><!></h3> <p><!></p> <!>',
    1,
  );
function jr(t, e) {
  let r = x(e, "ariaLabel", 3, "Active projects carousel");
  function o(s) {
    return s[e.locale] ?? s.en ?? {};
  }
  se(t, {
    get items() {
      return e.items;
    },
    get ariaLabel() {
      return r();
    },
    children: (n, l = tt, f = tt, i = tt) => {
      const c = J(l),
        a = J(() => o(A(c)));
      oe(n, {
        variant: "project",
        get active() {
          return i();
        },
        children: (p, v) => {
          var w = Nr(),
            C = rt(w),
            T = y(C);
          {
            var u = (g) => {
                var k = Fr();
                (G(() => {
                  (O(
                    k,
                    "src",
                    `https://www.youtube.com/embed/${A(c).youtubeId}`,
                  ),
                    O(k, "title", A(a).title ?? ""));
                }),
                  E(g, k));
              },
              m = (g) => {
                var k = Er(),
                  F = y(k, !0);
                (b(k), G(() => B(F, e.videoMissing)), E(g, k));
              };
            et(T, (g) => {
              A(c).youtubeId ? g(u) : g(m, !1);
            });
          }
          b(C);
          var L = M(C, 2),
            j = y(L);
          {
            var S = (g) => {
                var k = xr(),
                  F = y(k, !0);
                (b(k),
                  G(() => {
                    (O(k, "href", A(c).link), B(F, A(a).title ?? ""));
                  }),
                  E(g, k));
              },
              N = (g) => {
                var k = ue();
                (G(() => B(k, A(a).title ?? "")), E(g, k));
              };
            et(j, (g) => {
              A(c).link ? g(S) : g(N, !1);
            });
          }
          b(L);
          var d = M(L, 2),
            h = y(d);
          (ot(h, () => A(a).description ?? ""), b(d));
          var _ = M(d, 2);
          {
            var I = (g) => {
              var k = Pr();
              (ht(
                k,
                20,
                () => A(a).features,
                (F) => F,
                (F, H) => {
                  var W = Lr(),
                    ae = y(W);
                  (ot(ae, () => H), b(W), E(F, W));
                },
              ),
                b(k),
                E(g, k));
            };
            et(_, (g) => {
              A(a).features?.length && g(I);
            });
          }
          E(p, w);
        },
        $$slots: { default: !0 },
      });
    },
    $$slots: { default: !0 },
  });
}
var Dr = P("<span><img/></span>");
function z(t, e) {
  R(e, !0);
  let r = x(e, "class", 3, ""),
    o = x(e, "imgClass", 3, ""),
    s = x(e, "width", 3, 40),
    n = x(e, "height", 3, 40),
    l = x(e, "loading", 3, "lazy"),
    f = ct(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "class",
      "imgClass",
      "width",
      "height",
      "loading",
    ]);
  var i = Dr(),
    c = y(i);
  (ut(c, (a) => ({ ...f, width: s(), height: n(), loading: l(), class: a }), [
    () => K("transition-transform duration-200 ease-out hover:scale-110", o()),
  ]),
    b(i),
    G((a) => lt(i, 1, a), [() => bt(K("inline-flex items-center", r()))]),
    Ye(c),
    E(t, i),
    U());
}
var Or = P(
  '<section id="technologies"><h2 data-lang="tech-title">Technologies</h2> <div class="content-block"><h3 data-lang="tech-stack">Main Stack:</h3> <ul class="my-6 flex list-none flex-wrap justify-center gap-5 p-0"><li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li></ul> <h3 data-lang="tech-other">Other Tools & Skills:</h3> <ul class="skills-list svelte-oevu4l"><li data-lang="skill-post" class="svelte-oevu4l"></li> <li data-lang="skill-workflows" class="svelte-oevu4l"></li> <li data-lang="skill-ui" class="svelte-oevu4l"></li> <li data-lang="skill-vba" class="svelte-oevu4l"></li> <li data-lang="skill-macros" class="svelte-oevu4l"></li> <li data-lang="skill-telegram" class="svelte-oevu4l"></li> <li data-lang="skill-web" class="svelte-oevu4l"></li></ul></div></section>',
);
function Gr(t) {
  var e = Or(),
    r = M(y(e), 2),
    o = M(y(r), 2),
    s = y(o),
    n = y(s);
  (z(n, {
    src: "assets/fusion_icon.svg",
    alt: "Fusion 360 API",
    title: "Fusion 360 API",
  }),
    b(s));
  var l = M(s, 2),
    f = y(l);
  (z(f, { src: "assets/python_icon.svg", alt: "Python", title: "Python" }),
    b(l));
  var i = M(l, 2),
    c = y(i);
  (z(c, { src: "assets/svelte_icon.svg", alt: "Svelte5", title: "Svelte5" }),
    b(i));
  var a = M(i, 2),
    p = y(a);
  (z(p, { src: "assets/c_sharp_icon.svg", alt: "C#", title: "C#" }), b(a));
  var v = M(a, 2),
    w = y(v);
  (z(w, { src: "assets/nx_icon.png", alt: "Siemens NX", title: "Siemens NX" }),
    b(v));
  var C = M(v, 2),
    T = y(C);
  (z(T, { src: "assets/html_icon.svg", alt: "HTML5", title: "HTML5" }), b(C));
  var u = M(C, 2),
    m = y(u);
  (z(m, { src: "assets/css_icon.svg", alt: "CSS3", title: "CSS3" }), b(u));
  var L = M(u, 2),
    j = y(L);
  (z(j, {
    src: "assets/tailwind_icon.svg",
    alt: "Tailwind4",
    title: "Tailwind4",
  }),
    b(L));
  var S = M(L, 2),
    N = y(S);
  (z(N, {
    src: "assets/javascript_icon.svg",
    alt: "JavaScript",
    title: "JavaScript",
  }),
    b(S));
  var d = M(S, 2),
    h = y(d);
  (z(h, {
    src: "assets/typescript_icon.svg",
    alt: "TypeScript",
    title: "TypeScript",
  }),
    b(d));
  var _ = M(d, 2),
    I = y(_);
  (z(I, { src: "assets/telegram_icon.svg", alt: "aiogram", title: "Aiogram" }),
    b(_));
  var g = M(_, 2),
    k = y(g);
  (z(k, { src: "assets/excel_icon.svg", alt: "Excel VBA", title: "Excel VBA" }),
    b(g));
  var F = M(g, 2),
    H = y(F);
  (z(H, { src: "assets/vscode_icon.svg", alt: "VS Code", title: "VS Code" }),
    b(F),
    b(o),
    Ge(4),
    b(r),
    b(e),
    E(t, e));
}
var zr = P("<li><!></li>"),
  Hr = P('<ul class="features-list"></ul>'),
  Br = P("<h3> </h3> <p><!></p> <!>", 1);
function Vr(t, e) {
  let r = x(e, "ariaLabel", 3, "Future projects carousel");
  function o(s) {
    return s[e.locale] ?? s.en ?? {};
  }
  se(t, {
    get items() {
      return e.items;
    },
    class: "upcoming-carousel",
    dotsClass: "upcoming-dots",
    get ariaLabel() {
      return r();
    },
    children: (n, l = tt, f = tt, i = tt) => {
      const c = J(l),
        a = J(() => o(A(c)));
      oe(n, {
        variant: "project",
        get active() {
          return i();
        },
        children: (p, v) => {
          var w = Br(),
            C = rt(w),
            T = y(C, !0);
          b(C);
          var u = M(C, 2),
            m = y(u);
          (ot(m, () => A(a).description ?? ""), b(u));
          var L = M(u, 2);
          {
            var j = (S) => {
              var N = Hr();
              (ht(
                N,
                20,
                () => A(a).features,
                (d) => d,
                (d, h) => {
                  var _ = zr(),
                    I = y(_);
                  (ot(I, () => h), b(_), E(d, _));
                },
              ),
                b(N),
                E(S, N));
            };
            et(L, (S) => {
              A(a).features?.length && S(j);
            });
          }
          (G(() => B(T, A(a).title ?? "")), E(p, w));
        },
        $$slots: { default: !0 },
      });
    },
    $$slots: { default: !0 },
  });
}
const Rr = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MaestroFusion360",
    url: "https://maestrofusion360.github.io/website/",
    sameAs: [
      "https://www.youtube.com/@MaestroFusion360",
      "https://t.me/MaestroFusion360",
    ],
    jobTitle: "CNC Software Engineer",
    description: "Fusion 360 Developer specializing in G-code automation.",
    image: "https://maestrofusion360.github.io/website/assets/icon-192.png",
  },
  Ur = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MaestroFusion360 Projects",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "svelte-comp",
        url: "https://github.com/MaestroFusion360/svelte-comp",
        description: "Svelte 5 UI components library with TailwindCSS styling.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Planner",
        url: "https://github.com/MaestroFusion360/task_planning",
        description:
          "Desktop planner with Gantt chart for manufacturing scheduling.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Easy G-Code Plot",
        url: "https://github.com/MaestroFusion360/easy_gcode_plot",
        description: "G-code editor and 3D toolpath visualizer.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "SmartPost",
        url: "https://github.com/MaestroFusion360/SmartPost",
        description:
          "Fusion 360 postprocessor helper for faster multi-tool outputs.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "@postprocessors_bot",
        url: "https://t.me/postprocessors_bot",
        description: "Telegram bot for sharing CAM postprocessors.",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "MoveOp",
        url: "https://github.com/MaestroFusion360/MoveOp",
        description: "Fusion 360 add-in to reorder imported CAM operations.",
      },
    ],
  },
  Wr = JSON.stringify(Rr),
  Yr = JSON.stringify(Ur),
  ie = '<script type="application/ld+json">',
  ne = "<\/script>",
  Jr = ie + Wr + ne,
  Kr = ie + Yr + ne;
var Xr = P(
    '<meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <meta name="google-site-verification" content="NvQSU1__FPJtmLW9aYweYggiV0xnDR4tYLht6rhOFHg"/> <meta name="robots" content="index, follow, max-image-preview:large"/> <meta name="googlebot" content="index, follow"/> <link rel="canonical" href="https://maestrofusion360.github.io/website/"/>  <meta name="description" content="CNC Software Engineer and Fusion 360 Developer specializing in G-code automation and CNC programming optimization. Check out my projects and tools."/> <meta name="keywords" content="Fusion 360, CNC, G-code, Python, JavaScript, CAD, CAM, automation"/> <meta property="og:title" content="MaestroFusion360 | CNC &amp; Fusion 360 Developer"/> <meta property="og:description" content="CNC Software Engineer and Fusion 360 Developer specializing in automation."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://maestrofusion360.github.io/website/"/> <meta property="og:image" content="https://maestrofusion360.github.io/website/assets/icon-192.png"/> <meta property="og:locale" content="en_US"/> <link rel="icon" href="favicon.ico" type="image/x-icon"/> <link rel="manifest" href="manifest.webmanifest"/> <link rel="apple-touch-icon" href="assets/icon-192.png"/> <meta name="theme-color" content="#ffffff"/>  <!> <!>',
    1,
  ),
  qr = P(
    '<!> <!> <main><section id="about"><!></section> <!> <section id="projects"><h2 data-lang="projects-title"> </h2> <!></section> <section id="upcoming"><h2 data-lang="upcoming-title"> </h2> <!></section> <section id="contact"><h2 data-lang="contact-title"> </h2> <!></section> <!></main> <!>',
    1,
  );
function oo(t, e) {
  R(e, !0);
  const r = ze({ value: "en" });
  He("lang", r);
  const o = J(() => Bt[r.value]),
    s = Vt.active,
    n = Vt.upcoming;
  mt(() => {
    if (typeof window > "u" || typeof document > "u") return;
    const k = Bt[r.value];
    ((document.documentElement.lang = r.value),
      document.querySelectorAll("[data-lang]").forEach((F) => {
        const H = F.getAttribute("data-lang");
        if (!H) return;
        const W = k[H];
        W && (F.innerHTML = W);
      }));
  });
  var l = qr();
  tr("1uha8ag", (k) => {
    var F = Xr(),
      H = M(rt(F), 36);
    ot(H, () => Jr);
    var W = M(H, 2);
    (ot(W, () => Kr),
      Tt(() => {
        Be.title = "MaestroFusion360";
      }),
      E(k, F));
  });
  var f = rt(l);
  Tr(f, {});
  var i = M(f, 2);
  vr(i);
  var c = M(i, 2),
    a = y(c),
    p = y(a);
  (kr(p, {
    get title() {
      return A(o)["about-title"];
    },
    get description() {
      return A(o)["about-desc"];
    },
    titleKey: "about-title",
    descriptionKey: "about-desc",
    imageAlt: "MaestroFusion360",
  }),
    b(a));
  var v = M(a, 2);
  Gr(v);
  var w = M(v, 2),
    C = y(w),
    T = y(C, !0);
  b(C);
  var u = M(C, 2);
  (jr(u, {
    get items() {
      return s;
    },
    get locale() {
      return r.value;
    },
    get videoMissing() {
      return A(o)["video-missing"];
    },
  }),
    b(w));
  var m = M(w, 2),
    L = y(m),
    j = y(L, !0);
  b(L);
  var S = M(L, 2);
  (Vr(S, {
    get items() {
      return n;
    },
    get locale() {
      return r.value;
    },
  }),
    b(m));
  var N = M(m, 2),
    d = y(N),
    h = y(d, !0);
  b(d);
  var _ = M(d, 2);
  (ur(_), b(N));
  var I = M(N, 2);
  (Mr(I, {
    get value() {
      return r.value;
    },
    set value(k) {
      r.value = k;
    },
  }),
    b(c));
  var g = M(c, 2);
  (dr(g, {}),
    G(() => {
      (B(T, A(o)["projects-title"]),
        B(j, A(o)["upcoming-title"]),
        B(h, A(o)["contact-title"]));
    }),
    E(t, l),
    U());
}
export { oo as component };
