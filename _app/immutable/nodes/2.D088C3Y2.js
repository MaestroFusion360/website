import "../chunks/DsnmJJEf.js";
import {
  R as kt,
  f as ut,
  b as Vt,
  C as Z,
  h as D,
  v as Q,
  A as wt,
  o as A,
  X as ae,
  L as le,
  M as ce,
  N as Ft,
  O as X,
  i as K,
  a8 as At,
  aw as ue,
  af as Et,
  d as ge,
  aD as R,
  g as it,
  s as de,
  a6 as xt,
  az as fe,
  au as Mt,
  aE as Ut,
  aF as ve,
  aG as pe,
  aH as me,
  r as Wt,
  p as Yt,
  aI as bt,
  aq as gt,
  at as he,
  e as dt,
  aJ as Jt,
  aK as be,
  G,
  x as _e,
  aL as ye,
  ax as we,
  ar as Se,
  aM as Ce,
  aN as Kt,
  P as It,
  aO as ke,
  aP as Ae,
  aQ as Me,
  aR as Ie,
  aS as Te,
  aT as Fe,
  aU as Ee,
  aV as xe,
  aW as Le,
  aX as Pe,
  F as V,
  H as U,
  I as y,
  J as b,
  aC as J,
  u as pt,
  D as et,
  Z as q,
  aA as ft,
  K as M,
  aY as $,
  ag as Ne,
  Y as je,
  aZ as De,
  a_ as Oe,
} from "../chunks/V-JyIKZ2.js";
import {
  i as Ge,
  c as ze,
  d as mt,
  n as Be,
  a as He,
  s as H,
  r as Re,
} from "../chunks/Db_-2-fJ.js";
import {
  b as Lt,
  d as Ve,
  f as P,
  a as E,
  c as Ue,
  e as Xt,
  t as We,
} from "../chunks/CQZ-O1pg.js";
import "../chunks/69_IOA4Y.js";
import { i as Ye } from "../chunks/DbWR8Tlu.js";
import { p as x, r as lt, b as Je, i as tt } from "../chunks/DR32lwqH.js";
import { s as Tt } from "../chunks/COARPlw_.js";
function Ke(t, e) {
  if (e) {
    const r = document.body;
    ((t.autofocus = !0),
      kt(() => {
        document.activeElement === r && t.focus();
      }));
  }
}
let Pt = !1;
function Xe() {
  Pt ||
    ((Pt = !0),
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
function Nt(t, e) {
  return e;
}
function qe(t, e, r) {
  for (var o = [], n = e.length, a, l = e.length, f = 0; f < n; f++) {
    let h = e[f];
    Yt(
      h,
      () => {
        if (a) {
          if ((a.pending.delete(h), a.done.add(h), a.pending.size === 0)) {
            var v = t.outrogroups;
            (St(Mt(a.done)),
              v.delete(a),
              v.size === 0 && (t.outrogroups = null));
          }
        } else l -= 1;
      },
      !1,
    );
  }
  if (l === 0) {
    var s = o.length === 0 && r !== null;
    if (s) {
      var c = r,
        i = c.parentNode;
      (he(i), i.append(c), t.items.clear());
    }
    St(e, !s);
  } else
    ((a = { pending: new Set(e), done: new Set() }),
      (t.outrogroups ??= new Set()).add(a));
}
function St(t, e = !0) {
  for (var r = 0; r < t.length; r++) dt(t[r], e);
}
var jt;
function vt(t, e, r, o, n, a = null) {
  var l = t,
    f = new Map(),
    s = (e & Jt) !== 0;
  if (s) {
    var c = t;
    l = D ? Z(Q(c)) : c.appendChild(ut());
  }
  D && wt();
  var i = null,
    h = ae(() => {
      var m = r();
      return Ut(m) ? m : m == null ? [] : Mt(m);
    }),
    v,
    w = !0;
  function S() {
    ((u.fallback = i),
      Qe(u, v, l, e, o),
      i !== null &&
        (v.length === 0
          ? (i.f & R) === 0
            ? Wt(i)
            : ((i.f ^= R), nt(i, null, l))
          : Yt(i, () => {
              i = null;
            })));
  }
  var T = Vt(() => {
      v = A(h);
      var m = v.length;
      let L = !1;
      if (D) {
        var j = le(l) === ce;
        j !== (m === 0) && ((l = Ft()), Z(l), X(!1), (L = !0));
      }
      for (var C = new Set(), N = ge, d = de(), p = 0; p < m; p += 1) {
        D && K.nodeType === At && K.data === ue && ((l = K), (L = !0), X(!1));
        var _ = v[p],
          I = o(_, p),
          g = w ? null : f.get(I);
        (g
          ? (g.v && Et(g.v, _),
            g.i && Et(g.i, p),
            d && N.skipped_effects.delete(g.e))
          : ((g = Ze(f, w ? l : (jt ??= ut()), _, I, p, n, e, r)),
            w || (g.e.f |= R),
            f.set(I, g)),
          C.add(I));
      }
      if (
        (m === 0 &&
          a &&
          !i &&
          (w
            ? (i = it(() => a(l)))
            : ((i = it(() => a((jt ??= ut())))), (i.f |= R))),
        D && m > 0 && Z(Ft()),
        !w)
      )
        if (d) {
          for (const [k, F] of f) C.has(k) || N.skipped_effects.add(F.e);
          (N.oncommit(S), N.ondiscard(() => {}));
        } else S();
      (L && X(!0), A(h));
    }),
    u = { effect: T, items: f, outrogroups: null, fallback: i };
  ((w = !1), D && (l = K));
}
function Qe(t, e, r, o, n) {
  var a = (o & be) !== 0,
    l = e.length,
    f = t.items,
    s = t.effect.first,
    c,
    i = null,
    h,
    v = [],
    w = [],
    S,
    T,
    u,
    m;
  if (a)
    for (m = 0; m < l; m += 1)
      ((S = e[m]),
        (T = n(S, m)),
        (u = f.get(T).e),
        (u.f & R) === 0 && (u.nodes?.a?.measure(), (h ??= new Set()).add(u)));
  for (m = 0; m < l; m += 1) {
    if (((S = e[m]), (T = n(S, m)), (u = f.get(T).e), t.outrogroups !== null))
      for (const g of t.outrogroups) (g.pending.delete(u), g.done.delete(u));
    if ((u.f & R) !== 0)
      if (((u.f ^= R), u === s)) nt(u, null, r);
      else {
        var L = i ? i.next : s;
        (u === t.effect.last && (t.effect.last = u.prev),
          u.prev && (u.prev.next = u.next),
          u.next && (u.next.prev = u.prev),
          Y(t, i, u),
          Y(t, u, L),
          nt(u, L, r),
          (i = u),
          (v = []),
          (w = []),
          (s = i.next));
        continue;
      }
    if (
      ((u.f & bt) !== 0 &&
        (Wt(u), a && (u.nodes?.a?.unfix(), (h ??= new Set()).delete(u))),
      u !== s)
    ) {
      if (c !== void 0 && c.has(u)) {
        if (v.length < w.length) {
          var j = w[0],
            C;
          i = j.prev;
          var N = v[0],
            d = v[v.length - 1];
          for (C = 0; C < v.length; C += 1) nt(v[C], j, r);
          for (C = 0; C < w.length; C += 1) c.delete(w[C]);
          (Y(t, N.prev, d.next),
            Y(t, i, N),
            Y(t, d, j),
            (s = j),
            (i = d),
            (m -= 1),
            (v = []),
            (w = []));
        } else
          (c.delete(u),
            nt(u, s, r),
            Y(t, u.prev, u.next),
            Y(t, u, i === null ? t.effect.first : i.next),
            Y(t, i, u),
            (i = u));
        continue;
      }
      for (v = [], w = []; s !== null && s !== u; )
        ((c ??= new Set()).add(s), w.push(s), (s = s.next));
      if (s === null) continue;
    }
    ((u.f & R) === 0 && v.push(u), (i = u), (s = u.next));
  }
  if (t.outrogroups !== null) {
    for (const g of t.outrogroups)
      g.pending.size === 0 && (St(Mt(g.done)), t.outrogroups?.delete(g));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (s !== null || c !== void 0) {
    var p = [];
    if (c !== void 0) for (u of c) (u.f & bt) === 0 && p.push(u);
    for (; s !== null; )
      ((s.f & bt) === 0 && s !== t.fallback && p.push(s), (s = s.next));
    var _ = p.length;
    if (_ > 0) {
      var I = (o & Jt) !== 0 && l === 0 ? r : null;
      if (a) {
        for (m = 0; m < _; m += 1) p[m].nodes?.a?.measure();
        for (m = 0; m < _; m += 1) p[m].nodes?.a?.fix();
      }
      qe(t, p, I);
    }
  }
  a &&
    kt(() => {
      if (h !== void 0) for (u of h) u.nodes?.a?.apply();
    });
}
function Ze(t, e, r, o, n, a, l, f) {
  var s = (l & ve) !== 0 ? ((l & pe) === 0 ? fe(r, !1, !1) : xt(r)) : null,
    c = (l & me) !== 0 ? xt(n) : null;
  return {
    v: s,
    i: c,
    e: it(
      () => (
        a(e, s ?? r, c ?? n, f),
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
        n = t.nodes.end,
        a = e && (e.f & R) === 0 ? e.nodes.start : r;
      o !== null;
    ) {
      var l = gt(o);
      if ((a.before(o), o === n)) return;
      o = l;
    }
}
function Y(t, e, r) {
  (e === null ? (t.effect.first = r) : (e.next = r),
    r === null ? (t.effect.last = e) : (r.prev = e));
}
function rt(t, e, r = !1, o = !1, n = !1) {
  var a = t,
    l = "";
  G(() => {
    var f = _e;
    if (l === (l = e() ?? "")) {
      D && wt();
      return;
    }
    if (
      (f.nodes !== null && (ye(f.nodes.start, f.nodes.end), (f.nodes = null)),
      l !== "")
    ) {
      if (D) {
        K.data;
        for (
          var s = wt(), c = s;
          s !== null && (s.nodeType !== At || s.data !== "");
        )
          ((c = s), (s = gt(s)));
        if (s === null) throw (we(), Se);
        (Lt(K, c), (a = Z(s)));
        return;
      }
      var i = l + "";
      r ? (i = `<svg>${i}</svg>`) : o && (i = `<math>${i}</math>`);
      var h = Ve(i);
      if (((r || o) && (h = Q(h)), Lt(Q(h), h.lastChild), r || o))
        for (; Q(h); ) a.before(Q(h));
      else a.before(h);
    }
  });
}
function $e(t, e) {
  let r = null,
    o = D;
  var n;
  if (D) {
    r = K;
    for (
      var a = Q(document.head);
      a !== null && (a.nodeType !== At || a.data !== t);
    )
      a = gt(a);
    if (a === null) X(!1);
    else {
      var l = gt(a);
      (a.remove(), Z(l));
    }
  }
  D || (n = document.head.appendChild(ut()));
  try {
    Vt(() => e(n), Ce);
  } finally {
    o && (X(!0), Z(r));
  }
}
function tr(t, e) {
  var r = void 0,
    o;
  Kt(() => {
    r !== (r = e()) &&
      (o && (dt(o), (o = null)),
      r &&
        (o = it(() => {
          It(() => r(t));
        })));
  });
}
function qt(t) {
  var e,
    r,
    o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var n = t.length;
      for (e = 0; e < n; e++)
        t[e] && (r = qt(t[e])) && (o && (o += " "), (o += r));
    } else for (r in t) t[r] && (o && (o += " "), (o += r));
  return o;
}
function er() {
  for (var t, e, r = 0, o = "", n = arguments.length; r < n; r++)
    (t = arguments[r]) && (e = qt(t)) && (o && (o += " "), (o += e));
  return o;
}
function ht(t) {
  return typeof t == "object" ? er(t) : (t ?? "");
}
const Dt = [
  ...` 	
\r\f \v\uFEFF`,
];
function rr(t, e, r) {
  var o = t == null ? "" : "" + t;
  if ((e && (o = o ? o + " " + e : e), r)) {
    for (var n in r)
      if (r[n]) o = o ? o + " " + n : n;
      else if (o.length)
        for (var a = n.length, l = 0; (l = o.indexOf(n, l)) >= 0; ) {
          var f = l + a;
          (l === 0 || Dt.includes(o[l - 1])) &&
          (f === o.length || Dt.includes(o[f]))
            ? (o = (l === 0 ? "" : o.substring(0, l)) + o.substring(f + 1))
            : (l = f);
        }
  }
  return o === "" ? null : o;
}
function Ot(t, e = !1) {
  var r = e ? " !important;" : ";",
    o = "";
  for (var n in t) {
    var a = t[n];
    a != null && a !== "" && (o += " " + n + ": " + a + r);
  }
  return o;
}
function _t(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function or(t, e) {
  if (e) {
    var r = "",
      o,
      n;
    if ((Array.isArray(e) ? ((o = e[0]), (n = e[1])) : (o = e), t)) {
      t = String(t)
        .replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
        .trim();
      var a = !1,
        l = 0,
        f = !1,
        s = [];
      (o && s.push(...Object.keys(o).map(_t)),
        n && s.push(...Object.keys(n).map(_t)));
      var c = 0,
        i = -1;
      const T = t.length;
      for (var h = 0; h < T; h++) {
        var v = t[h];
        if (
          (f
            ? v === "/" && t[h - 1] === "*" && (f = !1)
            : a
              ? a === v && (a = !1)
              : v === "/" && t[h + 1] === "*"
                ? (f = !0)
                : v === '"' || v === "'"
                  ? (a = v)
                  : v === "("
                    ? l++
                    : v === ")" && l--,
          !f && a === !1 && l === 0)
        ) {
          if (v === ":" && i === -1) i = h;
          else if (v === ";" || h === T - 1) {
            if (i !== -1) {
              var w = _t(t.substring(c, i).trim());
              if (!s.includes(w)) {
                v !== ";" && h++;
                var S = t.substring(c, h).trim();
                r += " " + S + ";";
              }
            }
            ((c = h + 1), (i = -1));
          }
        }
      }
    }
    return (
      o && (r += Ot(o)),
      n && (r += Ot(n, !0)),
      (r = r.trim()),
      r === "" ? null : r
    );
  }
  return t == null ? null : String(t);
}
function at(t, e, r, o, n, a) {
  var l = t.__className;
  if (D || l !== r || l === void 0) {
    var f = rr(r, o, a);
    ((!D || f !== t.getAttribute("class")) &&
      (f == null
        ? t.removeAttribute("class")
        : e
          ? (t.className = f)
          : t.setAttribute("class", f)),
      (t.__className = r));
  } else if (a && n !== a)
    for (var s in a) {
      var c = !!a[s];
      (n == null || c !== !!n[s]) && t.classList.toggle(s, c);
    }
  return a;
}
function yt(t, e = {}, r, o) {
  for (var n in r) {
    var a = r[n];
    e[n] !== a &&
      (r[n] == null ? t.style.removeProperty(n) : t.style.setProperty(n, a, o));
  }
}
function Qt(t, e, r, o) {
  var n = t.__style;
  if (D || n !== e) {
    var a = or(e, o);
    ((!D || a !== t.getAttribute("style")) &&
      (a == null ? t.removeAttribute("style") : (t.style.cssText = a)),
      (t.__style = e));
  } else
    o &&
      (Array.isArray(o)
        ? (yt(t, r?.[0], o[0]), yt(t, r?.[1], o[1], "important"))
        : yt(t, r, o));
  return o;
}
function Ct(t, e, r = !1) {
  if (t.multiple) {
    if (e == null) return;
    if (!Ut(e)) return ke();
    for (var o of t.options) o.selected = e.includes(Gt(o));
    return;
  }
  for (o of t.options) {
    var n = Gt(o);
    if (Ae(n, e)) {
      o.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function sr(t) {
  var e = new MutationObserver(() => {
    Ct(t, t.__value);
  });
  (e.observe(t, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    Me(() => {
      e.disconnect();
    }));
}
function Gt(t) {
  return "__value" in t ? t.__value : t.value;
}
const ot = Symbol("class"),
  st = Symbol("style"),
  Zt = Symbol("is custom element"),
  $t = Symbol("is html");
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
            var n = t.checked;
            (O(t, "checked", null), (t.checked = n));
          }
        }
      };
    ((t.__on_r = r), kt(r), Xe());
  }
}
function ir(t, e) {
  e
    ? t.hasAttribute("selected") || t.setAttribute("selected", "")
    : t.removeAttribute("selected");
}
function O(t, e, r, o) {
  var n = te(t);
  (D &&
    ((n[e] = t.getAttribute(e)),
    e === "src" ||
      e === "srcset" ||
      (e === "href" && t.nodeName === "LINK"))) ||
    (n[e] !== (n[e] = r) &&
      (e === "loading" && (t[Te] = r),
      r == null
        ? t.removeAttribute(e)
        : typeof r != "string" && ee(t).includes(e)
          ? (t[e] = r)
          : t.setAttribute(e, r)));
}
function ar(t, e, r, o, n = !1, a = !1) {
  if (D && n && t.tagName === "INPUT") {
    var l = t,
      f = l.type === "checkbox" ? "defaultChecked" : "defaultValue";
    f in r || nr(l);
  }
  var s = te(t),
    c = s[Zt],
    i = !s[$t];
  let h = D && c;
  h && X(!1);
  var v = e || {},
    w = t.tagName === "OPTION";
  for (var S in e) S in r || (r[S] = null);
  (r.class ? (r.class = ht(r.class)) : (o || r[ot]) && (r.class = null),
    r[st] && (r.style ??= null));
  var T = ee(t);
  for (const d in r) {
    let p = r[d];
    if (w && d === "value" && p == null) {
      ((t.value = t.__value = ""), (v[d] = p));
      continue;
    }
    if (d === "class") {
      var u = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      (at(t, u, p, o, e?.[ot], r[ot]), (v[d] = p), (v[ot] = r[ot]));
      continue;
    }
    if (d === "style") {
      (Qt(t, p, e?.[st], r[st]), (v[d] = p), (v[st] = r[st]));
      continue;
    }
    var m = v[d];
    if (!(p === m && !(p === void 0 && t.hasAttribute(d)))) {
      v[d] = p;
      var L = d[0] + d[1];
      if (L !== "$$")
        if (L === "on") {
          const _ = {},
            I = "$$" + d;
          let g = d.slice(2);
          var j = He(g);
          if ((Ge(g) && ((g = g.slice(0, -7)), (_.capture = !0)), !j && m)) {
            if (p != null) continue;
            (t.removeEventListener(g, v[I], _), (v[I] = null));
          }
          if (p != null)
            if (j) ((t[`__${g}`] = p), mt([g]));
            else {
              let k = function (F) {
                v[d].call(this, F);
              };
              v[I] = ze(g, t, k, _);
            }
          else j && (t[`__${g}`] = void 0);
        } else if (d === "style") O(t, d, p);
        else if (d === "autofocus") Ke(t, !!p);
        else if (!c && (d === "__value" || (d === "value" && p != null)))
          t.value = t.__value = p;
        else if (d === "selected" && w) ir(t, p);
        else {
          var C = d;
          i || (C = Be(C));
          var N = C === "defaultValue" || C === "defaultChecked";
          if (p == null && !c && !N)
            if (((s[d] = null), C === "value" || C === "checked")) {
              let _ = t;
              const I = e === void 0;
              if (C === "value") {
                let g = _.defaultValue;
                (_.removeAttribute(C),
                  (_.defaultValue = g),
                  (_.value = _.__value = I ? g : null));
              } else {
                let g = _.defaultChecked;
                (_.removeAttribute(C),
                  (_.defaultChecked = g),
                  (_.checked = I ? g : !1));
              }
            } else t.removeAttribute(d);
          else
            N || (T.includes(C) && (c || typeof p != "string"))
              ? ((t[C] = p), C in s && (s[C] = Pe))
              : typeof p != "function" && O(t, C, p);
        }
    }
  }
  return (h && X(!0), v);
}
function ct(t, e, r = [], o = [], n = [], a, l = !1, f = !1) {
  Ie(n, r, o, (s) => {
    var c = void 0,
      i = {},
      h = t.nodeName === "SELECT",
      v = !1;
    if (
      (Kt(() => {
        var S = e(...s.map(A)),
          T = ar(t, c, S, a, l, f);
        v && h && "value" in S && Ct(t, S.value);
        for (let m of Object.getOwnPropertySymbols(i)) S[m] || dt(i[m]);
        for (let m of Object.getOwnPropertySymbols(S)) {
          var u = S[m];
          (m.description === xe &&
            (!c || u !== c[m]) &&
            (i[m] && dt(i[m]), (i[m] = it(() => tr(t, () => u)))),
            (T[m] = u));
        }
        c = T;
      }),
      h)
    ) {
      var w = t;
      It(() => {
        (Ct(w, c.value, !0), sr(w));
      });
    }
    v = !0;
  });
}
function te(t) {
  return (t.__attributes ??= {
    [Zt]: t.nodeName.includes("-"),
    [$t]: t.namespaceURI === Fe,
  });
}
var zt = new Map();
function ee(t) {
  var e = t.getAttribute("is") || t.nodeName,
    r = zt.get(e);
  if (r) return r;
  zt.set(e, (r = []));
  for (var o, n = t, a = Element.prototype; a !== n; ) {
    o = Le(n);
    for (var l in o) o[l].set && r.push(l);
    n = Ee(n);
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
  Ht = {
    active: [
      {
        link: "https://github.com/MaestroFusion360/svelte-comp",
        youtubeId: "",
        en: {
          title: "svelte-comp",
          description:
            "A compact, modular UI toolkit built on <strong>Svelte 5</strong> with styling powered by <strong>TailwindCSS</strong> and a clean layer of CSS variables. Components are predictable, lightweight, and self-contained - no global side effects. Design tokens live in <code>app.css</code>, so theming and <strong>dark mode</strong> are as simple as adding a <code>.dark</code> class.",
          features: [
            "<strong>Svelte 5 Runes API</strong> ($state, $derived, $effect, $props)",
            "<strong>TailwindCSS v4</strong> + design tokens via CSS variables",
            "<strong>Dark mode</strong> support via <code>.dark</code> class",
            "<strong>Self-contained</strong> components (no global dependencies)",
            "<strong>Composable API</strong> - props and functional children instead of slots",
            "Built-in i18n: English, Russian, Spanish",
          ],
        },
        ru: {
          title: "svelte-comp",
          description:
            "Компактная модульная библиотека UI-компонентов на <strong>Svelte 5</strong> со стилями на <strong>TailwindCSS</strong> и слоем CSS-переменных. Компоненты предсказуемые, легкие и самодостаточные - без глобальных сайд-эффектов. Дизайн-токены лежат в <code>app.css</code>, поэтому тема и <strong>dark mode</strong> включаются добавлением класса <code>.dark</code> на любой контейнер.",
          features: [
            "<strong>Svelte 5 Runes API</strong> ($state, $derived, $effect, $props)",
            "<strong>TailwindCSS v4</strong> + дизайн-токены через CSS-переменные",
            "<strong>Темная тема</strong> через класс <code>.dark</code>",
            "<strong>Самодостаточные</strong> компоненты (без глобальных зависимостей)",
            "<strong>Композиция</strong> через props и functional children вместо слотов",
            "Встроенная i18n: английский, русский, испанский",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/task_planning",
        youtubeId: "",
        en: {
          title: "Planner",
          description:
            "Planner is a desktop application for <strong>manufacturing task management</strong> and <strong>production scheduling</strong>. It includes an interactive <strong>Gantt chart</strong>, a <strong>nomenclature database</strong>, and automated time calculations for efficient production planning.",
          features: [
            "<strong>Production planning</strong> and scheduling",
            "<strong>Machine workload</strong> management",
            "<strong>Interactive Gantt chart</strong> (Day / Week / Month view)",
            "<strong>Nomenclature database</strong> for parts and operations",
            "Import from <strong>CSV</strong> and <strong>Excel</strong>",
            "Export to <strong>Excel</strong> with embedded Gantt chart",
          ],
        },
        ru: {
          title: "Planner",
          description:
            "Planner — настольное приложение для <strong>управления производственными задачами</strong> и <strong>планирования производства</strong>. Есть интерактивная <strong>диаграмма Ганта</strong>, <strong>база номенклатуры</strong> и автоматический расчет времени для эффективного планирования.",
          features: [
            "<strong>Планирование</strong> и расписание производственных задач",
            "<strong>Управление загрузкой</strong> по станкам",
            "<strong>Интерактивная диаграмма Ганта</strong> (день / неделя / месяц)",
            "<strong>База номенклатуры</strong> деталей и операций",
            "Импорт из <strong>CSV</strong> и <strong>Excel</strong>",
            "Экспорт в <strong>Excel</strong> с встроенной диаграммой Ганта",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/easy_gcode_plot",
        youtubeId: "",
        en: {
          title: "Easy G-Code Plot",
          description:
            "Easy G-Code Plot is a G-code editor and visualizer. It supports 3D rendering of toolpaths for <strong>3-axis milling</strong> and <strong>2-axis lathe</strong> machining with various modes. The engine is built on <strong>pyqtgraph</strong>.",
          features: [
            "<strong>Program animation</strong> with playback speed control and display of current coordinates",
            "<strong>Syntax highlighting with line numbering</strong> (similar to Cimco Edit)",
            "<strong>G-code export</strong> – compatible with Fanuc, Siemens, and Heidenhain formats",
            "<strong>Machining time calculation</strong>",
            "<strong>Absolute and relative movements</strong> – support for both types",
            "<strong>Arc interpolation</strong> – by center, radius, or arc start point",
          ],
        },
        ru: {
          title: "Easy G-Code Plot",
          description:
            "Easy G-Code Plot - редактор-визуализатор G-кода. Поддержка 3D прорисовки траекторий <strong>3х осевой фрезерной</strong> и <strong>2х осевой токарной</strong> обработки с различными режимами. Движок работает на <strong>pyqtgraph</strong>",
          features: [
            "<strong>Анимация</strong> программы с управлением скоростью воспроизведения и отображением текущих координат",
            "<strong>Подсветка синтаксиса c нумерацией строк</strong> (как в Cimco Edit)",
            "<strong>Экспорт G-кода</strong> – между Fanuc, Siemens и Heidenhain.",
            "<strong>Расчет времени обработки</strong>",
            "<strong>Абсолютные и относительные перемещения</strong> – поддержка обоих типов.",
            "<strong>Интерполяция дуг</strong> – через центр, радиус или начало дуги.",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/SmartPost",
        youtubeId: "IRA7O7wwCWM",
        en: {
          title: "SmartPost",
          description:
            "A powerful tool that accelerates <strong>G-code generation</strong> and removes the <strong>tool change restriction</strong> in Fusion 360 Personal.",
          features: [
            "<strong>Faster post-processing</strong> – reduce CAM processing time.",
            "<strong>No tool change limitations</strong> – unrestricted multi-tool operations.",
            "<strong>Improved workflow efficiency</strong> – streamlined G-code generation.",
          ],
        },
        ru: {
          title: "SmartPost",
          description:
            "Мощный инструмент, который ускоряет <strong>генерацию УП</strong> и устраняет <strong>ограничение на смену инструмента</strong> в Fusion 360 Personal.",
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
            "FormBuilder is a visual HTML form editor built with Svelte and Vite, offering developers a lightweight, dependency-free tool for complete control over form design. Its core features provide full visual editing and clean code export.",
          features: [
            "<strong>Visual Component Tree</strong>: Intuitively add, remove, nest, and reorder form elements.",
            "<strong>Smart Property Editor</strong>: Dynamic controls and inputs that update the live preview instantly.",
            "<strong>Drag-and-Drop</strong> & <strong>Keyboard Controls</strong>: Efficiently manage the layout using both mouse and keyboard shortcuts (Ctrl+Arrow keys).",
            "<strong>Copy/Paste Elements</strong>: Quickly duplicate components and their properties within the editor.",
            "<strong>Clean Code Generation</strong>: Export forms as ready-to-use HTML and CSS with one click.",
            "<strong>Project Serialization</strong>: Save, load, and share your form's complete structure as JSON.",
          ],
        },
        ru: {
          title: "FormBuilder",
          description:
            "FormBuilder — это визуальный редактор HTML-форм на Svelte и Vite, предоставляющий разработчикам лёгкий инструмент без зависимостей для полного контроля над дизайном форм. Ключевые возможности включают полное визуальное редактирование и экспорт чистого кода.",
          features: [
            "<strong>Визуальное дерево компонентов</strong>: Интуитивное добавление, удаление, вложение и изменение порядка элементов формы.",
            "<strong>Умный редактор свойств</strong>: Динамические контролы и поля ввода с мгновенным обновлением предпросмотра.",
            "<strong>Drag-and-Drop и управление с клавиатуры</strong>: Эффективное управление структурой с помощью мыши и горячих клавиш (Ctrl+Стрелки).",
            "<strong>Копирование/вставка элементов</strong>: Быстрое дублирование компонентов и их свойств внутри редактора.",
            "<strong>Генерация чистого кода</strong>: Экспорт форм в готовый HTML и CSS в один клик.",
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
            "<strong>CSS Validator</strong> is a lightweight, interactive tool built with Svelte 5 runes for experimenting with and validating CSS. It features a live editor with instant preview, inline validation, and zero external CSS dependencies.",
          features: [
            "<strong>Live Editor & Preview</strong>: Auto-resizing textarea and real-time rendering of a selected component.",
            "<strong>Inline CSS Validation</strong>: Real-time warnings and errors for property names and values.",
            "<strong>Svelte 5 Runes</strong>: Built with the latest $state, $derived, $effect, and $props primitives.",
            "<strong>Syntax Highlighting & Copy</strong>: The CodeView component highlights CSS/HTML and enables one-click copying.",
            "<strong>Zero External CSS</strong>: All styling is managed via inline styles or the css() helper for minimal overhead.",
            "<strong>Multilingual & Theming</strong>: Supports English and Russian, with a built-in light/dark theme toggle.",
          ],
        },
        ru: {
          title: "CSS validator",
          description:
            "<strong>CSS Validator</strong> — это лёгкий интерактивный инструмент на Svelte 5 Runes для экспериментов с CSS и его проверки. Он предлагает живой редактор с мгновенным предпросмотром, встроенную валидацию и полное отсутствие внешних CSS-файлов.",
          features: [
            "<strong>Живой редактор и предпросмотр</strong>: Автомасштабируемое поле ввода и мгновенный рендеринг выбранного компонента.",
            "<strong>Встроенная валидация CSS</strong>: Проверка имён и значений свойств с выводом предупреждений и ошибок.",
            "<strong>Svelte 5 Runes</strong>: Построен на новейших примитивах $state, $derived, $effect и $props.",
            "<strong>Подсветка синтаксиса и копирование</strong>: Компонент CodeView подсвечивает CSS/HTML код и позволяет копировать его.",
            "<strong>Без внешнего CSS</strong>: Вся стилизация реализована через инлайн-стили или хелпер css() для минимальной нагрузки.",
            "<strong>Мультиязычность и темы</strong>: Поддержка английского и русского языков, встроенный переключатель светлой/тёмной темы.",
          ],
        },
      },
      {
        link: "https://github.com/MaestroFusion360/DrillCalc",
        youtubeId: "",
        en: {
          title: "DrillCalc",
          description:
            "<strong>Drilling Calculator</strong> is a fast G-code coordinate generator for circular and grid hole patterns, designed for CNC machinists and Fusion 360 users. It features precise control, export-ready cycles, and a responsive, accessible interface",
          features: [
            "<strong>Circular & Grid Array Calculation</strong>: Generate coordinates for PCD and grid layouts with start angle and direction control.",
            "<strong>Export-Ready G-Code Cycles</strong>: Directly export to standard canned cycles (G81, G82, G83) or XY coordinate lists.",
            "<strong>Advanced Grid Logic</strong>: Includes intelligent serpentine (bidirectional) toolpath optimization.",
            "<strong>Configurable Precision</strong>: Set coordinate decimal places (1–3) for machine-specific accuracy.",
            "<strong>Accessible, Responsive UI</strong>: A clean interface with dark/light mode that works on any device.",
            "<strong>Focus on Usability</strong>: Built with keyboard navigation and focus-trapped dialogs for efficient workflow.",
          ],
        },
        ru: {
          title: "DrillCalc",
          description:
            "<strong>Drilling Calculator</strong> — это быстрый генератор координат G-кода для круговых и сеточных массивов отверстий, созданный для операторов ЧПУ и пользователей Fusion 360. Он предлагает точный контроль, готовые к использованию циклы и адаптивный интерфейс.",
          features: [
            "<strong>Расчёт круговых и сеточных массивов</strong>: Генерация координат для окружностей и сеток с настройкой начального угла и направления.",
            "<strong>Экспорт циклов G-кода</strong>: Прямой экспорт в стандартные циклы (G81, G82, G83) или списки координат XY.",
            "<strong>Продвинутая логика сетки</strong>: Интеллектуальная оптимизация траектории («змейкой»).",
            "<strong>Настраиваемая точность</strong>: Установка знаков после запятой (1–3) для соответствия станку.",
            "<strong>Адаптивный и доступный интерфейс</strong>: Чистый дизайн с тёмной/светлой темой для всех устройств.",
            "<strong>Удобство использования</strong>: Управление с клавиатуры и корректная работа модальных окон для эффективной работы.",
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
            "<strong>editor_json</strong> is a Progressive Web App (PWA) for managing CNC post-processor JSON files, built for seamless integration with Telegram bots such as @postprocessors_bot.",
          features: [
            "<strong>Edit post processor parameters</strong>",
            "<strong>Save/load JSON files</strong>",
            "<strong>Search by name and description</strong>",
            "<strong>Responsive interface</strong>",
            "<strong>Offline mode</strong>",
          ],
        },
        ru: {
          title: "editor_json",
          description:
            "<strong>editor_json</strong> — это прогрессивное веб-приложение (PWA) для управления JSON-файлами постпроцессоров ЧПУ, созданное для удобной интеграции с Telegram-ботами, такими как @postprocessors_bot.",
          features: [
            "<strong>Редактировать параметры постпроцессора</strong>",
            "<strong>Сохранять и загружать JSON-файлы конфигурации</strong>",
            "<strong>Поиск по названию и описанию</strong>",
            "<strong>Адаптивный интерфейс</strong>",
            "<strong>Офлайн-режим</strong>",
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
var lr = P(
  '<div class="content-block contact-info contact-grid"><p><img src="assets/gmail_icon.svg" width="20" alt="Gmail"/> <strong>Email:</strong> <a href="mailto:maestrofusion360@gmail.com">maestrofusion360@gmail.com</a></p> <p><img src="assets/telegram_icon.svg" width="20" alt="Telegram"/> <strong>Telegram:</strong> <a href="https://t.me/MaestroFusion360">@MaestroFusion360</a></p> <p><img src="assets/github_icon.svg" width="20" alt="GitHub"/> <strong>GitHub:</strong> <a href="https://github.com/MaestroFusion360">github.com/MaestroFusion360</a></p> <p><img src="assets/youtube_icon.svg" width="20" alt="YouTube"/> <strong>YouTube:</strong> <a href="https://www.youtube.com/@MaestroFusion360">youtube.com/@MaestroFusion360</a></p></div>',
);
function cr(t) {
  var e = lr();
  E(t, e);
}
var ur = P('<footer class="svelte-kcvnik"><p> </p></footer>');
function gr(t, e) {
  V(e, !1);
  const r = new Date().getFullYear();
  Ye();
  var o = ur(),
    n = y(o),
    a = y(n);
  (b(n),
    b(o),
    G(() => H(a, `© ${r ?? ""} MaestroFusion360. All rights reserved.`)),
    E(t, o),
    U());
}
var dr = P(
  `<header class="svelte-1yz1i5m"><h1 data-lang="title" class="svelte-1yz1i5m">Hi there, I'm MaestroFusion360</h1> <nav class="navbar svelte-1yz1i5m"><a href="#about" data-lang="about-title" class="svelte-1yz1i5m">About</a> <a href="#technologies" data-lang="tech-title" class="svelte-1yz1i5m">Technologies</a> <a href="#projects" data-lang="projects-title" class="svelte-1yz1i5m">Projects</a> <a href="#upcoming" data-lang="upcoming-title" class="svelte-1yz1i5m">Future Projects</a> <a href="#contact" data-lang="contact-title" class="svelte-1yz1i5m">Contact</a></nav> <div class="social-links svelte-1yz1i5m"><a href="https://www.youtube.com/@MaestroFusion360?sub_confirmation=1"><img src="https://img.shields.io/badge/Subscribe-YouTube-red?logo=youtube" alt="YouTube" class="svelte-1yz1i5m"/></a> <a href="https://t.me/+v0HwgVBIg8AyNTcy"><img src="https://img.shields.io/badge/Join-Telegram-blue?logo=telegram" alt="Telegram" class="svelte-1yz1i5m"/></a></div></header>`,
);
function fr(t) {
  var e = dr();
  E(t, e);
}
var vr = P("<button><!></button>");
function Rt(t, e) {
  V(e, !0);
  let r = x(e, "variant", 3, "primary"),
    o = x(e, "class", 3, ""),
    n = x(e, "type", 3, "button"),
    a = lt(e, [
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
  var s = vr();
  ct(s, (i) => ({ ...a, type: n(), class: i, onclick: e.onclick }), [
    () => [l, A(f), o()].filter(Boolean).join(" "),
  ]);
  var c = y(s);
  (Tt(c, () => e.children), b(s), E(t, s), U());
}
var pr = P("<div><!></div>");
function re(t, e) {
  V(e, !0);
  const r = x(e, "variant", 3, "default"),
    o = x(e, "active", 3, !1),
    n = x(e, "class", 3, ""),
    a = lt(e, [
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
  var s = pr();
  ct(
    s,
    (i) => ({ ...a, class: i }),
    [() => [A(l), A(f), n()].filter(Boolean).join(" ")],
    void 0,
    void 0,
    "svelte-2gevwt",
  );
  var c = y(s);
  (Tt(c, () => e.children), b(s), E(t, s), U());
}
var mr = Xt(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 12L6 8L10 4"></path></svg>',
  ),
  hr = Xt(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 4L10 8L6 12"></path></svg>',
  ),
  br = P(
    '<div class="carousel-nav svelte-er9umx" role="group" aria-label="Carousel navigation"><!> <!></div>',
  ),
  _r = P('<button type="button"></button>'),
  yr = P("<div></div>"),
  wr = P(
    '<div class="projects-carousel-wrapper svelte-er9umx"><div></div> <!></div> <!>',
    1,
  );
function oe(t, e) {
  V(e, !0);
  const r = x(e, "class", 3, ""),
    o = x(e, "dotsClass", 3, ""),
    n = x(e, "ariaLabel", 3, "Carousel"),
    a = x(e, "showDots", 3, !0),
    l = x(e, "showArrows", 3, !0),
    f = lt(e, [
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
  let s = null,
    c = ft(0),
    i = null;
  function h() {
    return s
      ? Array.from(s.querySelectorAll(".project-card")).filter(
          (p) => p.parentElement === s,
        )
      : [];
  }
  function v() {
    if (!s) return 0;
    const d = h();
    if (d.length === 0) return 0;
    const p = s.scrollLeft + s.clientWidth / 2;
    let _ = 0,
      I = Number.MAX_VALUE;
    return (
      d.forEach((g, k) => {
        const F = g.offsetLeft + g.offsetWidth / 2,
          B = Math.abs(F - p);
        B < I && ((I = B), (_ = k));
      }),
      _
    );
  }
  function w(d) {
    if (!s) return;
    const _ = h()[d];
    if (!_) return;
    const I = _.offsetLeft - (s.clientWidth - _.offsetWidth) / 2;
    (s.scrollTo({ left: I, behavior: "smooth" }), q(c, d, !0));
  }
  function S() {
    i === null &&
      (i = requestAnimationFrame(() => {
        (q(c, v(), !0), (i = null));
      }));
  }
  pt(() => {
    if (!(typeof window > "u") && s)
      return (
        requestAnimationFrame(() => {
          q(c, v(), !0);
        }),
        () => {
          (i !== null && cancelAnimationFrame(i), (i = null));
        }
      );
  });
  var T = wr(),
    u = et(T),
    m = y(u);
  (ct(
    m,
    (d) => ({
      ...f,
      class: d,
      role: "region",
      "aria-label": n(),
      "aria-live": "polite",
      onscroll: S,
    }),
    [() => ["projects-carousel", r()].filter(Boolean).join(" ")],
    void 0,
    void 0,
    "svelte-er9umx",
  ),
    vt(
      m,
      21,
      () => e.items,
      Nt,
      (d, p, _) => {
        var I = Ue(),
          g = et(I);
        (Tt(
          g,
          () => e.children,
          () => A(p),
          () => _,
          () => _ === A(c),
        ),
          E(d, I));
      },
    ),
    b(m),
    Je(
      m,
      (d) => (s = d),
      () => s,
    ));
  var L = M(m, 2);
  {
    var j = (d) => {
      var p = br(),
        _ = y(p);
      Rt(_, {
        "aria-label": "Previous slide",
        variant: "icon",
        onclick: () => w(Math.max(0, A(c) - 1)),
        children: (g, k) => {
          var F = mr();
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
          var F = hr();
          E(g, F);
        },
        $$slots: { default: !0 },
      }),
        b(p),
        E(d, p));
    };
    tt(L, (d) => {
      l() && e.items.length > 1 && d(j);
    });
  }
  b(u);
  var C = M(u, 2);
  {
    var N = (d) => {
      var p = yr();
      (vt(
        p,
        21,
        () => e.items,
        Nt,
        (_, I, g) => {
          var k = _r();
          let F;
          (O(k, "aria-label", `Go to slide ${g + 1}`),
            (k.__click = () => w(g)),
            G(
              () =>
                (F = at(k, 1, "dot svelte-er9umx", null, F, {
                  active: g === A(c),
                })),
            ),
            E(_, k));
        },
      ),
        b(p),
        G(
          (_) => at(p, 1, _, "svelte-er9umx"),
          [() => ht(["carousel-dots", o()].filter(Boolean).join(" "))],
        ),
        E(d, p));
    };
    tt(C, (d) => {
      a() && e.items.length > 1 && d(N);
    });
  }
  (E(t, T), U());
}
mt(["click"]);
var Sr = P(
  '<div><div class="w-full"><h2 class="md:text-left"> </h2> <div class="content-block md:mx-0"><p class="md:text-left"> </p></div></div> <div class="flex items-center justify-center md:justify-end h-full"><img width="180" height="180" loading="eager"/></div></div>',
);
function Cr(t, e) {
  V(e, !0);
  let r = x(e, "imageSrc", 3, "assets/icon-512.png"),
    o = x(e, "imageAlt", 3, "Hero image"),
    n = x(e, "imgClass", 3, ""),
    a = x(e, "class", 3, ""),
    l = lt(e, [
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
  ct(f, (u) => ({ ...l, class: u }), [
    () =>
      ["grid gap-6 md:grid-cols-[1fr_auto] md:items-stretch", a()]
        .filter(Boolean)
        .join(" "),
  ]);
  var s = y(f),
    c = y(s),
    i = y(c, !0);
  b(c);
  var h = M(c, 2),
    v = y(h),
    w = y(v, !0);
  (b(v), b(h), b(s));
  var S = M(s, 2),
    T = y(S);
  (b(S),
    b(f),
    G(
      (u) => {
        (O(c, "data-lang", e.titleKey),
          H(i, e.title),
          O(v, "data-lang", e.descriptionKey),
          H(w, e.description),
          O(T, "src", r()),
          O(T, "alt", o()),
          at(T, 1, u));
      },
      [
        () =>
          ht(
            [
              "h-64 w-64 rounded-2xl border border-slate-900/10 bg-white/60 p-3 shadow-sm backdrop-blur",
              "dark:border-slate-100/10 dark:bg-slate-900/40",
              n(),
            ]
              .filter(Boolean)
              .join(" "),
          ),
      ],
    ),
    E(t, f),
    U());
}
var kr = P(
  '<div class="lang-switch svelte-f01c5n" role="group" aria-label="Language"><button type="button" class="lang-switch__btn svelte-f01c5n" aria-label="English" title="English"><img class="lang-switch__img svelte-f01c5n" src="assets/gb_icon.svg" alt="English"/></button> <button type="button" class="lang-switch__btn svelte-f01c5n" aria-label="Русский" title="Русский"><img class="lang-switch__img svelte-f01c5n" src="assets/ru_icon.svg" alt="Русский"/></button></div>',
);
function Ar(t, e) {
  V(e, !0);
  let r = x(e, "value", 15, "en"),
    o = x(e, "persist", 3, !0),
    n = x(e, "storageKey", 3, "lang"),
    a = x(e, "size", 3, 32),
    l = ft(!1);
  pt(() => {
    if (!(typeof window > "u" || typeof document > "u")) {
      if (!A(l)) {
        q(l, !0);
        const h = localStorage.getItem(n());
        (h === "en" || h === "ru") && r(h);
      }
      ((document.documentElement.lang = r()),
        o() && localStorage.setItem(n(), r()));
    }
  });
  function f(h) {
    r(h);
  }
  var s = kr(),
    c = y(s);
  c.__click = () => f("en");
  var i = M(c, 2);
  ((i.__click = () => f("ru")),
    b(s),
    G(() => {
      (Qt(s, `--lang-icon-size: ${a()}px`),
        O(c, "aria-pressed", r() === "en"),
        O(i, "aria-pressed", r() === "ru"));
    }),
    E(t, s),
    U());
}
mt(["click"]);
var Mr =
  P(`<button type="button" class="theme-toggle svelte-lu0t34"><svg class="theme-icon theme-icon-sun svelte-lu0t34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg> <svg class="theme-icon theme-icon-moon svelte-lu0t34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2
         A9 9 0 1 0 21 12
         A7.5 7.5 0 1 1 12 2 Z" fill="currentColor"></path></svg></button>`);
function Ir(t, e) {
  V(e, !0);
  const r = "theme";
  let o = ft(!1),
    n = ft("light");
  pt(() => {
    if (typeof window > "u" || typeof document > "u") return;
    if (!A(o)) {
      q(o, !0);
      const c = localStorage.getItem(r);
      q(n, c === "dark" || c === "light" ? c : "light", !0);
    }
    const f = A(n) === "dark";
    (document.documentElement.classList.toggle("dark", f),
      localStorage.setItem(r, A(n)),
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", f ? "#0b1220" : "#ffffff"));
  });
  function a() {
    q(n, A(n) === "dark" ? "light" : "dark", !0);
  }
  var l = Mr();
  ((l.__click = a),
    G(() => {
      (O(
        l,
        "aria-label",
        A(n) === "dark" ? "Switch to light theme" : "Switch to dark theme",
      ),
        O(
          l,
          "title",
          A(n) === "dark" ? "Switch to light theme" : "Switch to dark theme",
        ));
    }),
    E(t, l),
    U());
}
mt(["click"]);
var Tr = P('<iframe allowfullscreen="" loading="lazy" tabindex="-1"></iframe>'),
  Fr = P('<div class="video-placeholder"> </div>'),
  Er = P(
    '<a target="_blank" class="project-link" style="position: relative; z-index: 10;" tabindex="-1"> </a>',
  ),
  xr = P("<li><!></li>"),
  Lr = P('<ul class="features-list"></ul>'),
  Pr = P(
    '<div class="video-container"><!></div> <h3><!></h3> <p><!></p> <!>',
    1,
  );
function Nr(t, e) {
  let r = x(e, "ariaLabel", 3, "Active projects carousel");
  function o(n) {
    return n[e.locale] ?? n.en ?? {};
  }
  oe(t, {
    get items() {
      return e.items;
    },
    get ariaLabel() {
      return r();
    },
    children: (a, l = $, f = $, s = $) => {
      const c = J(l),
        i = J(() => o(A(c)));
      re(a, {
        variant: "project",
        get active() {
          return s();
        },
        children: (h, v) => {
          var w = Pr(),
            S = et(w),
            T = y(S);
          {
            var u = (g) => {
                var k = Tr();
                (G(() => {
                  (O(
                    k,
                    "src",
                    `https://www.youtube.com/embed/${A(c).youtubeId}`,
                  ),
                    O(k, "title", A(i).title ?? ""));
                }),
                  E(g, k));
              },
              m = (g) => {
                var k = Fr(),
                  F = y(k, !0);
                (b(k), G(() => H(F, e.videoMissing)), E(g, k));
              };
            tt(T, (g) => {
              A(c).youtubeId ? g(u) : g(m, !1);
            });
          }
          b(S);
          var L = M(S, 2),
            j = y(L);
          {
            var C = (g) => {
                var k = Er(),
                  F = y(k, !0);
                (b(k),
                  G(() => {
                    (O(k, "href", A(c).link), H(F, A(i).title ?? ""));
                  }),
                  E(g, k));
              },
              N = (g) => {
                var k = We();
                (G(() => H(k, A(i).title ?? "")), E(g, k));
              };
            tt(j, (g) => {
              A(c).link ? g(C) : g(N, !1);
            });
          }
          b(L);
          var d = M(L, 2),
            p = y(d);
          (rt(p, () => A(i).description ?? ""), b(d));
          var _ = M(d, 2);
          {
            var I = (g) => {
              var k = Lr();
              (vt(
                k,
                20,
                () => A(i).features,
                (F) => F,
                (F, B) => {
                  var W = xr(),
                    ie = y(W);
                  (rt(ie, () => B), b(W), E(F, W));
                },
              ),
                b(k),
                E(g, k));
            };
            tt(_, (g) => {
              A(i).features?.length && g(I);
            });
          }
          E(h, w);
        },
        $$slots: { default: !0 },
      });
    },
    $$slots: { default: !0 },
  });
}
var jr = P("<span><img/></span>");
function z(t, e) {
  V(e, !0);
  let r = x(e, "class", 3, ""),
    o = x(e, "imgClass", 3, ""),
    n = x(e, "width", 3, 40),
    a = x(e, "height", 3, 40),
    l = x(e, "loading", 3, "lazy"),
    f = lt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "class",
      "imgClass",
      "width",
      "height",
      "loading",
    ]);
  var s = jr(),
    c = y(s);
  (ct(c, (i) => ({ ...f, width: n(), height: a(), loading: l(), class: i }), [
    () =>
      ["transition-transform duration-200 ease-out hover:scale-110", o()]
        .filter(Boolean)
        .join(" "),
  ]),
    b(s),
    G(
      (i) => at(s, 1, i),
      [() => ht(["inline-flex items-center", r()].filter(Boolean).join(" "))],
    ),
    Re(c),
    E(t, s),
    U());
}
var Dr = P(
  '<section id="technologies"><h2 data-lang="tech-title">Technologies</h2> <div class="content-block"><h3 data-lang="tech-stack">Main Stack:</h3> <ul class="my-6 flex list-none flex-wrap justify-center gap-5 p-0"><li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li></ul> <h3 data-lang="tech-other">Other Tools & Skills:</h3> <ul class="skills-list svelte-oevu4l"><li data-lang="skill-post" class="svelte-oevu4l"></li> <li data-lang="skill-workflows" class="svelte-oevu4l"></li> <li data-lang="skill-ui" class="svelte-oevu4l"></li> <li data-lang="skill-vba" class="svelte-oevu4l"></li> <li data-lang="skill-macros" class="svelte-oevu4l"></li> <li data-lang="skill-telegram" class="svelte-oevu4l"></li> <li data-lang="skill-web" class="svelte-oevu4l"></li></ul></div></section>',
);
function Or(t) {
  var e = Dr(),
    r = M(y(e), 2),
    o = M(y(r), 2),
    n = y(o),
    a = y(n);
  (z(a, {
    src: "assets/fusion_icon.svg",
    alt: "Fusion 360 API",
    title: "Fusion 360 API",
  }),
    b(n));
  var l = M(n, 2),
    f = y(l);
  (z(f, { src: "assets/python_icon.svg", alt: "Python", title: "Python" }),
    b(l));
  var s = M(l, 2),
    c = y(s);
  (z(c, { src: "assets/svelte_icon.svg", alt: "Svelte5", title: "Svelte5" }),
    b(s));
  var i = M(s, 2),
    h = y(i);
  (z(h, { src: "assets/c_sharp_icon.svg", alt: "C#", title: "C#" }), b(i));
  var v = M(i, 2),
    w = y(v);
  (z(w, { src: "assets/nx_icon.png", alt: "Siemens NX", title: "Siemens NX" }),
    b(v));
  var S = M(v, 2),
    T = y(S);
  (z(T, { src: "assets/html_icon.svg", alt: "HTML5", title: "HTML5" }), b(S));
  var u = M(S, 2),
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
  var C = M(L, 2),
    N = y(C);
  (z(N, {
    src: "assets/javascript_icon.svg",
    alt: "JavaScript",
    title: "JavaScript",
  }),
    b(C));
  var d = M(C, 2),
    p = y(d);
  (z(p, {
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
    B = y(F);
  (z(B, { src: "assets/vscode_icon.svg", alt: "VS Code", title: "VS Code" }),
    b(F),
    b(o),
    Ne(4),
    b(r),
    b(e),
    E(t, e));
}
var Gr = P("<li><!></li>"),
  zr = P('<ul class="features-list"></ul>'),
  Br = P("<h3> </h3> <p><!></p> <!>", 1);
function Hr(t, e) {
  let r = x(e, "ariaLabel", 3, "Future projects carousel");
  function o(n) {
    return n[e.locale] ?? n.en ?? {};
  }
  oe(t, {
    get items() {
      return e.items;
    },
    class: "upcoming-carousel",
    dotsClass: "upcoming-dots",
    get ariaLabel() {
      return r();
    },
    children: (a, l = $, f = $, s = $) => {
      const c = J(l),
        i = J(() => o(A(c)));
      re(a, {
        variant: "project",
        get active() {
          return s();
        },
        children: (h, v) => {
          var w = Br(),
            S = et(w),
            T = y(S, !0);
          b(S);
          var u = M(S, 2),
            m = y(u);
          (rt(m, () => A(i).description ?? ""), b(u));
          var L = M(u, 2);
          {
            var j = (C) => {
              var N = zr();
              (vt(
                N,
                20,
                () => A(i).features,
                (d) => d,
                (d, p) => {
                  var _ = Gr(),
                    I = y(_);
                  (rt(I, () => p), b(_), E(d, _));
                },
              ),
                b(N),
                E(C, N));
            };
            tt(L, (C) => {
              A(i).features?.length && C(j);
            });
          }
          (G(() => H(T, A(i).title ?? "")), E(h, w));
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
  Vr = {
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
  Ur = JSON.stringify(Rr),
  Wr = JSON.stringify(Vr),
  se = '<script type="application/ld+json">',
  ne = "<\/script>",
  Yr = se + Ur + ne,
  Jr = se + Wr + ne;
var Kr = P(
    '<meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <meta name="google-site-verification" content="NvQSU1__FPJtmLW9aYweYggiV0xnDR4tYLht6rhOFHg"/> <meta name="robots" content="index, follow, max-image-preview:large"/> <meta name="googlebot" content="index, follow"/> <link rel="canonical" href="https://maestrofusion360.github.io/website/"/>  <meta name="description" content="CNC Software Engineer and Fusion 360 Developer specializing in G-code automation and CNC programming optimization. Check out my projects and tools."/> <meta name="keywords" content="Fusion 360, CNC, G-code, Python, JavaScript, CAD, CAM, automation"/> <meta property="og:title" content="MaestroFusion360 | CNC &amp; Fusion 360 Developer"/> <meta property="og:description" content="CNC Software Engineer and Fusion 360 Developer specializing in automation."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://maestrofusion360.github.io/website/"/> <meta property="og:image" content="https://maestrofusion360.github.io/website/assets/icon-192.png"/> <meta property="og:locale" content="en_US"/> <link rel="icon" href="favicon.ico" type="image/x-icon"/> <link rel="manifest" href="manifest.webmanifest"/> <link rel="apple-touch-icon" href="assets/icon-192.png"/> <meta name="theme-color" content="#ffffff"/>  <!> <!>',
    1,
  ),
  Xr = P(
    '<!> <!> <main><section id="about"><!></section> <!> <section id="projects"><h2 data-lang="projects-title"> </h2> <!></section> <section id="upcoming"><h2 data-lang="upcoming-title"> </h2> <!></section> <section id="contact"><h2 data-lang="contact-title"> </h2> <!></section> <!></main> <!>',
    1,
  );
function so(t, e) {
  V(e, !0);
  const r = je({ value: "en" });
  De("lang", r);
  const o = J(() => Bt[r.value]),
    n = Ht.active,
    a = Ht.upcoming;
  pt(() => {
    if (typeof window > "u" || typeof document > "u") return;
    const k = Bt[r.value];
    ((document.documentElement.lang = r.value),
      document.querySelectorAll("[data-lang]").forEach((F) => {
        const B = F.getAttribute("data-lang");
        if (!B) return;
        const W = k[B];
        W && (F.innerHTML = W);
      }));
  });
  var l = Xr();
  $e("1uha8ag", (k) => {
    var F = Kr(),
      B = M(et(F), 36);
    rt(B, () => Yr);
    var W = M(B, 2);
    (rt(W, () => Jr),
      It(() => {
        Oe.title = "MaestroFusion360";
      }),
      E(k, F));
  });
  var f = et(l);
  Ir(f, {});
  var s = M(f, 2);
  fr(s);
  var c = M(s, 2),
    i = y(c),
    h = y(i);
  (Cr(h, {
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
    b(i));
  var v = M(i, 2);
  Or(v);
  var w = M(v, 2),
    S = y(w),
    T = y(S, !0);
  b(S);
  var u = M(S, 2);
  (Nr(u, {
    get items() {
      return n;
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
  var C = M(L, 2);
  (Hr(C, {
    get items() {
      return a;
    },
    get locale() {
      return r.value;
    },
  }),
    b(m));
  var N = M(m, 2),
    d = y(N),
    p = y(d, !0);
  b(d);
  var _ = M(d, 2);
  (cr(_), b(N));
  var I = M(N, 2);
  (Ar(I, {
    get value() {
      return r.value;
    },
    set value(k) {
      r.value = k;
    },
  }),
    b(c));
  var g = M(c, 2);
  (gr(g, {}),
    G(() => {
      (H(T, A(o)["projects-title"]),
        H(j, A(o)["upcoming-title"]),
        H(p, A(o)["contact-title"]));
    }),
    E(t, l),
    U());
}
export { so as component };
