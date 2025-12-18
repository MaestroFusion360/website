import {
  b as Rt,
  d as Le,
  f as E,
  a as T,
  c as Ne,
  e as oe,
  t as Pe,
} from "../chunks/B2xTJhZM.js";
import {
  N as Pt,
  g as dt,
  d as se,
  J as et,
  i as O,
  a1 as tt,
  F as Et,
  q as w,
  R as je,
  G as De,
  H as Oe,
  I as Ut,
  K as Q,
  j as q,
  aa as jt,
  ay as Ge,
  ah as Wt,
  e as ze,
  aF as J,
  h as ct,
  s as He,
  a8 as Jt,
  aB as Be,
  aw as Dt,
  aG as ie,
  aH as Ve,
  aI as Re,
  aJ as Ue,
  r as ae,
  p as ne,
  aK as Ft,
  as as ft,
  av as We,
  f as vt,
  aL as le,
  aM as Je,
  z,
  V as Ye,
  aN as Ke,
  az as Xe,
  at as qe,
  aO as Qe,
  aP as ce,
  L as Ot,
  aQ as Ze,
  aR as $e,
  aS as tr,
  aT as er,
  aU as rr,
  aV as or,
  aW as sr,
  aX as ir,
  aY as ar,
  aZ as nr,
  y as R,
  A as U,
  B as v,
  C as d,
  a_ as ue,
  D as y,
  ai as lr,
  aE as W,
  u as ht,
  x as ot,
  U as Z,
  aC as mt,
  a$ as rt,
  T as cr,
  b0 as ur,
  b1 as gr,
} from "../chunks/DZp1Jm13.js";
import {
  i as dr,
  c as fr,
  d as bt,
  n as vr,
  a as hr,
  s as G,
  r as Yt,
} from "../chunks/aSQi0z39.js";
import { i as mr } from "../chunks/DPfy1y_K.js";
import { p as x, r as gt, b as pr, i as $ } from "../chunks/6_AAUr-5.js";
import { s as Gt } from "../chunks/DYxHXY9D.js";
function br(t, e) {
  if (e) {
    const o = document.body;
    ((t.autofocus = !0),
      Pt(() => {
        document.activeElement === o && t.focus();
      }));
  }
}
let Kt = !1;
function _r() {
  Kt ||
    ((Kt = !0),
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
function Xt(t, e) {
  return e;
}
function wr(t, e, o) {
  for (var r = [], s = e.length, a, l = e.length, u = 0; u < s; u++) {
    let b = e[u];
    ne(
      b,
      () => {
        if (a) {
          if ((a.pending.delete(b), a.done.add(b), a.pending.size === 0)) {
            var m = t.outrogroups;
            (Lt(Dt(a.done)),
              m.delete(a),
              m.size === 0 && (t.outrogroups = null));
          }
        } else l -= 1;
      },
      !1,
    );
  }
  if (l === 0) {
    var i = r.length === 0 && o !== null;
    if (i) {
      var g = o,
        n = g.parentNode;
      (We(n), n.append(g), t.items.clear());
    }
    Lt(e, !i);
  } else
    ((a = { pending: new Set(e), done: new Set() }),
      (t.outrogroups ??= new Set()).add(a));
}
function Lt(t, e = !0) {
  for (var o = 0; o < t.length; o++) vt(t[o], e);
}
var qt;
function pt(t, e, o, r, s, a = null) {
  var l = t,
    u = new Map(),
    i = (e & le) !== 0;
  if (i) {
    var g = t;
    l = O ? et(tt(g)) : g.appendChild(dt());
  }
  O && Et();
  var n = null,
    b = je(() => {
      var f = o();
      return ie(f) ? f : f == null ? [] : Dt(f);
    }),
    m,
    C = !0;
  function S() {
    ((c.fallback = n),
      yr(c, m, l, e, r),
      n !== null &&
        (m.length === 0
          ? (n.f & J) === 0
            ? ae(n)
            : ((n.f ^= J), lt(n, null, l))
          : ne(n, () => {
              n = null;
            })));
  }
  var A = se(() => {
      m = w(b);
      var f = m.length;
      let P = !1;
      if (O) {
        var j = De(l) === Oe;
        j !== (f === 0) && ((l = Ut()), et(l), Q(!1), (P = !0));
      }
      for (var I = new Set(), L = ze, p = He(), _ = 0; _ < f; _ += 1) {
        O && q.nodeType === jt && q.data === Ge && ((l = q), (P = !0), Q(!1));
        var k = m[_],
          F = r(k, _),
          h = C ? null : u.get(F);
        (h
          ? (h.v && Wt(h.v, k),
            h.i && Wt(h.i, _),
            p && L.skipped_effects.delete(h.e))
          : ((h = Sr(u, C ? l : (qt ??= dt()), k, F, _, s, e, o)),
            C || (h.e.f |= J),
            u.set(F, h)),
          I.add(F));
      }
      if (
        (f === 0 &&
          a &&
          !n &&
          (C
            ? (n = ct(() => a(l)))
            : ((n = ct(() => a((qt ??= dt())))), (n.f |= J))),
        O && f > 0 && et(Ut()),
        !C)
      )
        if (p) {
          for (const [M, N] of u) I.has(M) || L.skipped_effects.add(N.e);
          (L.oncommit(S), L.ondiscard(() => {}));
        } else S();
      (P && Q(!0), w(b));
    }),
    c = { effect: A, items: u, outrogroups: null, fallback: n };
  ((C = !1), O && (l = q));
}
function yr(t, e, o, r, s) {
  var a = (r & Je) !== 0,
    l = e.length,
    u = t.items,
    i = t.effect.first,
    g,
    n = null,
    b,
    m = [],
    C = [],
    S,
    A,
    c,
    f;
  if (a)
    for (f = 0; f < l; f += 1)
      ((S = e[f]),
        (A = s(S, f)),
        (c = u.get(A).e),
        (c.f & J) === 0 && (c.nodes?.a?.measure(), (b ??= new Set()).add(c)));
  for (f = 0; f < l; f += 1) {
    if (((S = e[f]), (A = s(S, f)), (c = u.get(A).e), t.outrogroups !== null))
      for (const h of t.outrogroups) (h.pending.delete(c), h.done.delete(c));
    if ((c.f & J) !== 0)
      if (((c.f ^= J), c === i)) lt(c, null, o);
      else {
        var P = n ? n.next : i;
        (c === t.effect.last && (t.effect.last = c.prev),
          c.prev && (c.prev.next = c.next),
          c.next && (c.next.prev = c.prev),
          K(t, n, c),
          K(t, c, P),
          lt(c, P, o),
          (n = c),
          (m = []),
          (C = []),
          (i = n.next));
        continue;
      }
    if (
      ((c.f & Ft) !== 0 &&
        (ae(c), a && (c.nodes?.a?.unfix(), (b ??= new Set()).delete(c))),
      c !== i)
    ) {
      if (g !== void 0 && g.has(c)) {
        if (m.length < C.length) {
          var j = C[0],
            I;
          n = j.prev;
          var L = m[0],
            p = m[m.length - 1];
          for (I = 0; I < m.length; I += 1) lt(m[I], j, o);
          for (I = 0; I < C.length; I += 1) g.delete(C[I]);
          (K(t, L.prev, p.next),
            K(t, n, L),
            K(t, p, j),
            (i = j),
            (n = p),
            (f -= 1),
            (m = []),
            (C = []));
        } else
          (g.delete(c),
            lt(c, i, o),
            K(t, c.prev, c.next),
            K(t, c, n === null ? t.effect.first : n.next),
            K(t, n, c),
            (n = c));
        continue;
      }
      for (m = [], C = []; i !== null && i !== c; )
        ((g ??= new Set()).add(i), C.push(i), (i = i.next));
      if (i === null) continue;
    }
    ((c.f & J) === 0 && m.push(c), (n = c), (i = c.next));
  }
  if (t.outrogroups !== null) {
    for (const h of t.outrogroups)
      h.pending.size === 0 && (Lt(Dt(h.done)), t.outrogroups?.delete(h));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (i !== null || g !== void 0) {
    var _ = [];
    if (g !== void 0) for (c of g) (c.f & Ft) === 0 && _.push(c);
    for (; i !== null; )
      ((i.f & Ft) === 0 && i !== t.fallback && _.push(i), (i = i.next));
    var k = _.length;
    if (k > 0) {
      var F = (r & le) !== 0 && l === 0 ? o : null;
      if (a) {
        for (f = 0; f < k; f += 1) _[f].nodes?.a?.measure();
        for (f = 0; f < k; f += 1) _[f].nodes?.a?.fix();
      }
      wr(t, _, F);
    }
  }
  a &&
    Pt(() => {
      if (b !== void 0) for (c of b) c.nodes?.a?.apply();
    });
}
function Sr(t, e, o, r, s, a, l, u) {
  var i = (l & Ve) !== 0 ? ((l & Re) === 0 ? Be(o, !1, !1) : Jt(o)) : null,
    g = (l & Ue) !== 0 ? Jt(s) : null;
  return {
    v: i,
    i: g,
    e: ct(
      () => (
        a(e, i ?? o, g ?? s, u),
        () => {
          t.delete(r);
        }
      ),
    ),
  };
}
function lt(t, e, o) {
  if (t.nodes)
    for (
      var r = t.nodes.start,
        s = t.nodes.end,
        a = e && (e.f & J) === 0 ? e.nodes.start : o;
      r !== null;
    ) {
      var l = ft(r);
      if ((a.before(r), r === s)) return;
      r = l;
    }
}
function K(t, e, o) {
  (e === null ? (t.effect.first = o) : (e.next = o),
    o === null ? (t.effect.last = e) : (o.prev = e));
}
function B(t, e, o = !1, r = !1, s = !1) {
  var a = t,
    l = "";
  z(() => {
    var u = Ye;
    if (l === (l = e() ?? "")) {
      O && Et();
      return;
    }
    if (
      (u.nodes !== null && (Ke(u.nodes.start, u.nodes.end), (u.nodes = null)),
      l !== "")
    ) {
      if (O) {
        q.data;
        for (
          var i = Et(), g = i;
          i !== null && (i.nodeType !== jt || i.data !== "");
        )
          ((g = i), (i = ft(i)));
        if (i === null) throw (Xe(), qe);
        (Rt(q, g), (a = et(i)));
        return;
      }
      var n = l + "";
      o ? (n = `<svg>${n}</svg>`) : r && (n = `<math>${n}</math>`);
      var b = Le(n);
      if (((o || r) && (b = tt(b)), Rt(tt(b), b.lastChild), o || r))
        for (; tt(b); ) a.before(tt(b));
      else a.before(b);
    }
  });
}
function Cr(t, e) {
  let o = null,
    r = O;
  var s;
  if (O) {
    o = q;
    for (
      var a = tt(document.head);
      a !== null && (a.nodeType !== jt || a.data !== t);
    )
      a = ft(a);
    if (a === null) Q(!1);
    else {
      var l = ft(a);
      (a.remove(), et(l));
    }
  }
  O || (s = document.head.appendChild(dt()));
  try {
    se(() => e(s), Qe);
  } finally {
    r && (Q(!0), et(o));
  }
}
function kr(t, e) {
  var o = void 0,
    r;
  ce(() => {
    o !== (o = e()) &&
      (r && (vt(r), (r = null)),
      o &&
        (r = ct(() => {
          Ot(() => o(t));
        })));
  });
}
function ge(t) {
  var e,
    o,
    r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var s = t.length;
      for (e = 0; e < s; e++)
        t[e] && (o = ge(t[e])) && (r && (r += " "), (r += o));
    } else for (o in t) t[o] && (r && (r += " "), (r += o));
  return r;
}
function Ar() {
  for (var t, e, o = 0, r = "", s = arguments.length; o < s; o++)
    (t = arguments[o]) && (e = ge(t)) && (r && (r += " "), (r += e));
  return r;
}
function _t(t) {
  return typeof t == "object" ? Ar(t) : (t ?? "");
}
const Qt = [
  ...` 	
\r\f \v\uFEFF`,
];
function Mr(t, e, o) {
  var r = t == null ? "" : "" + t;
  if ((e && (r = r ? r + " " + e : e), o)) {
    for (var s in o)
      if (o[s]) r = r ? r + " " + s : s;
      else if (r.length)
        for (var a = s.length, l = 0; (l = r.indexOf(s, l)) >= 0; ) {
          var u = l + a;
          (l === 0 || Qt.includes(r[l - 1])) &&
          (u === r.length || Qt.includes(r[u]))
            ? (r = (l === 0 ? "" : r.substring(0, l)) + r.substring(u + 1))
            : (l = u);
        }
  }
  return r === "" ? null : r;
}
function Zt(t, e = !1) {
  var o = e ? " !important;" : ";",
    r = "";
  for (var s in t) {
    var a = t[s];
    a != null && a !== "" && (r += " " + s + ": " + a + o);
  }
  return r;
}
function Tt(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Ir(t, e) {
  if (e) {
    var o = "",
      r,
      s;
    if ((Array.isArray(e) ? ((r = e[0]), (s = e[1])) : (r = e), t)) {
      t = String(t)
        .replaceAll(/\s*\/\*.*?\*\/\s*/g, "")
        .trim();
      var a = !1,
        l = 0,
        u = !1,
        i = [];
      (r && i.push(...Object.keys(r).map(Tt)),
        s && i.push(...Object.keys(s).map(Tt)));
      var g = 0,
        n = -1;
      const A = t.length;
      for (var b = 0; b < A; b++) {
        var m = t[b];
        if (
          (u
            ? m === "/" && t[b - 1] === "*" && (u = !1)
            : a
              ? a === m && (a = !1)
              : m === "/" && t[b + 1] === "*"
                ? (u = !0)
                : m === '"' || m === "'"
                  ? (a = m)
                  : m === "("
                    ? l++
                    : m === ")" && l--,
          !u && a === !1 && l === 0)
        ) {
          if (m === ":" && n === -1) n = b;
          else if (m === ";" || b === A - 1) {
            if (n !== -1) {
              var C = Tt(t.substring(g, n).trim());
              if (!i.includes(C)) {
                m !== ";" && b++;
                var S = t.substring(g, b).trim();
                o += " " + S + ";";
              }
            }
            ((g = b + 1), (n = -1));
          }
        }
      }
    }
    return (
      r && (o += Zt(r)),
      s && (o += Zt(s, !0)),
      (o = o.trim()),
      o === "" ? null : o
    );
  }
  return t == null ? null : String(t);
}
function ut(t, e, o, r, s, a) {
  var l = t.__className;
  if (O || l !== o || l === void 0) {
    var u = Mr(o, r, a);
    ((!O || u !== t.getAttribute("class")) &&
      (u == null
        ? t.removeAttribute("class")
        : e
          ? (t.className = u)
          : t.setAttribute("class", u)),
      (t.__className = o));
  } else if (a && s !== a)
    for (var i in a) {
      var g = !!a[i];
      (s == null || g !== !!s[i]) && t.classList.toggle(i, g);
    }
  return a;
}
function xt(t, e = {}, o, r) {
  for (var s in o) {
    var a = o[s];
    e[s] !== a &&
      (o[s] == null ? t.style.removeProperty(s) : t.style.setProperty(s, a, r));
  }
}
function de(t, e, o, r) {
  var s = t.__style;
  if (O || s !== e) {
    var a = Ir(e, r);
    ((!O || a !== t.getAttribute("style")) &&
      (a == null ? t.removeAttribute("style") : (t.style.cssText = a)),
      (t.__style = e));
  } else
    r &&
      (Array.isArray(r)
        ? (xt(t, o?.[0], r[0]), xt(t, o?.[1], r[1], "important"))
        : xt(t, o, r));
  return r;
}
function Nt(t, e, o = !1) {
  if (t.multiple) {
    if (e == null) return;
    if (!ie(e)) return Ze();
    for (var r of t.options) r.selected = e.includes($t(r));
    return;
  }
  for (r of t.options) {
    var s = $t(r);
    if ($e(s, e)) {
      r.selected = !0;
      return;
    }
  }
  (!o || e !== void 0) && (t.selectedIndex = -1);
}
function Fr(t) {
  var e = new MutationObserver(() => {
    Nt(t, t.__value);
  });
  (e.observe(t, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    tr(() => {
      e.disconnect();
    }));
}
function $t(t) {
  return "__value" in t ? t.__value : t.value;
}
const at = Symbol("class"),
  nt = Symbol("style"),
  fe = Symbol("is custom element"),
  ve = Symbol("is html");
function Tr(t) {
  if (O) {
    var e = !1,
      o = () => {
        if (!e) {
          if (((e = !0), t.hasAttribute("value"))) {
            var r = t.value;
            (D(t, "value", null), (t.value = r));
          }
          if (t.hasAttribute("checked")) {
            var s = t.checked;
            (D(t, "checked", null), (t.checked = s));
          }
        }
      };
    ((t.__on_r = o), Pt(o), _r());
  }
}
function xr(t, e) {
  e
    ? t.hasAttribute("selected") || t.setAttribute("selected", "")
    : t.removeAttribute("selected");
}
function D(t, e, o, r) {
  var s = he(t);
  (O &&
    ((s[e] = t.getAttribute(e)),
    e === "src" ||
      e === "srcset" ||
      (e === "href" && t.nodeName === "LINK"))) ||
    (s[e] !== (s[e] = o) &&
      (e === "loading" && (t[rr] = o),
      o == null
        ? t.removeAttribute(e)
        : typeof o != "string" && me(t).includes(e)
          ? (t[e] = o)
          : t.setAttribute(e, o)));
}
function Er(t, e, o, r, s = !1, a = !1) {
  if (O && s && t.tagName === "INPUT") {
    var l = t,
      u = l.type === "checkbox" ? "defaultChecked" : "defaultValue";
    u in o || Tr(l);
  }
  var i = he(t),
    g = i[fe],
    n = !i[ve];
  let b = O && g;
  b && Q(!1);
  var m = e || {},
    C = t.tagName === "OPTION";
  for (var S in e) S in o || (o[S] = null);
  (o.class ? (o.class = _t(o.class)) : (r || o[at]) && (o.class = null),
    o[nt] && (o.style ??= null));
  var A = me(t);
  for (const p in o) {
    let _ = o[p];
    if (C && p === "value" && _ == null) {
      ((t.value = t.__value = ""), (m[p] = _));
      continue;
    }
    if (p === "class") {
      var c = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      (ut(t, c, _, r, e?.[at], o[at]), (m[p] = _), (m[at] = o[at]));
      continue;
    }
    if (p === "style") {
      (de(t, _, e?.[nt], o[nt]), (m[p] = _), (m[nt] = o[nt]));
      continue;
    }
    var f = m[p];
    if (!(_ === f && !(_ === void 0 && t.hasAttribute(p)))) {
      m[p] = _;
      var P = p[0] + p[1];
      if (P !== "$$")
        if (P === "on") {
          const k = {},
            F = "$$" + p;
          let h = p.slice(2);
          var j = hr(h);
          if ((dr(h) && ((h = h.slice(0, -7)), (k.capture = !0)), !j && f)) {
            if (_ != null) continue;
            (t.removeEventListener(h, m[F], k), (m[F] = null));
          }
          if (_ != null)
            if (j) ((t[`__${h}`] = _), bt([h]));
            else {
              let M = function (N) {
                m[p].call(this, N);
              };
              m[F] = fr(h, t, M, k);
            }
          else j && (t[`__${h}`] = void 0);
        } else if (p === "style") D(t, p, _);
        else if (p === "autofocus") br(t, !!_);
        else if (!g && (p === "__value" || (p === "value" && _ != null)))
          t.value = t.__value = _;
        else if (p === "selected" && C) xr(t, _);
        else {
          var I = p;
          n || (I = vr(I));
          var L = I === "defaultValue" || I === "defaultChecked";
          if (_ == null && !g && !L)
            if (((i[p] = null), I === "value" || I === "checked")) {
              let k = t;
              const F = e === void 0;
              if (I === "value") {
                let h = k.defaultValue;
                (k.removeAttribute(I),
                  (k.defaultValue = h),
                  (k.value = k.__value = F ? h : null));
              } else {
                let h = k.defaultChecked;
                (k.removeAttribute(I),
                  (k.defaultChecked = h),
                  (k.checked = F ? h : !1));
              }
            } else t.removeAttribute(p);
          else
            L || (A.includes(I) && (g || typeof _ != "string"))
              ? ((t[I] = _), I in i && (i[I] = nr))
              : typeof _ != "function" && D(t, I, _);
        }
    }
  }
  return (b && Q(!0), m);
}
function st(t, e, o = [], r = [], s = [], a, l = !1, u = !1) {
  er(s, o, r, (i) => {
    var g = void 0,
      n = {},
      b = t.nodeName === "SELECT",
      m = !1;
    if (
      (ce(() => {
        var S = e(...i.map(w)),
          A = Er(t, g, S, a, l, u);
        m && b && "value" in S && Nt(t, S.value);
        for (let f of Object.getOwnPropertySymbols(n)) S[f] || vt(n[f]);
        for (let f of Object.getOwnPropertySymbols(S)) {
          var c = S[f];
          (f.description === ir &&
            (!g || c !== g[f]) &&
            (n[f] && vt(n[f]), (n[f] = ct(() => kr(t, () => c)))),
            (A[f] = c));
        }
        g = A;
      }),
      b)
    ) {
      var C = t;
      Ot(() => {
        (Nt(C, g.value, !0), Fr(C));
      });
    }
    m = !0;
  });
}
function he(t) {
  return (t.__attributes ??= {
    [fe]: t.nodeName.includes("-"),
    [ve]: t.namespaceURI === or,
  });
}
var te = new Map();
function me(t) {
  var e = t.getAttribute("is") || t.nodeName,
    o = te.get(e);
  if (o) return o;
  te.set(e, (o = []));
  for (var r, s = t, a = Element.prototype; a !== s; ) {
    r = ar(s);
    for (var l in r) r[l].set && o.push(l);
    s = sr(s);
  }
  return o;
}
const zt = {
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
  ee = {
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
var Lr = E(
  '<div class="content-block contact-info contact-grid"><p><img src="assets/gmail_icon.svg" width="20" alt="Gmail"/> <strong>Email:</strong> <a href="mailto:maestrofusion360@gmail.com">maestrofusion360@gmail.com</a></p> <p><img src="assets/telegram_icon.svg" width="20" alt="Telegram"/> <strong>Telegram:</strong> <a href="https://t.me/MaestroFusion360">@MaestroFusion360</a></p> <p><img src="assets/github_icon.svg" width="20" alt="GitHub"/> <strong>GitHub:</strong> <a href="https://github.com/MaestroFusion360">github.com/MaestroFusion360</a></p> <p><img src="assets/youtube_icon.svg" width="20" alt="YouTube"/> <strong>YouTube:</strong> <a href="https://www.youtube.com/@MaestroFusion360">youtube.com/@MaestroFusion360</a></p></div>',
);
function Nr(t) {
  var e = Lr();
  T(t, e);
}
var Pr = E('<footer class="svelte-kcvnik"><p> </p></footer>');
function jr(t, e) {
  R(e, !1);
  const o = new Date().getFullYear();
  mr();
  var r = Pr(),
    s = v(r),
    a = v(s);
  (d(s),
    d(r),
    z(() => G(a, `© ${o ?? ""} MaestroFusion360. All rights reserved.`)),
    T(t, r),
    U());
}
var Dr = E(
  '<header class="svelte-1yz1i5m"><h1 data-lang="title" class="svelte-1yz1i5m"> </h1> <nav class="navbar svelte-1yz1i5m"><a href="#about" data-lang="about-title" class="svelte-1yz1i5m"> </a> <a href="#technologies" data-lang="tech-title" class="svelte-1yz1i5m"> </a> <a href="#projects" data-lang="projects-title" class="svelte-1yz1i5m"> </a> <a href="#upcoming" data-lang="upcoming-title" class="svelte-1yz1i5m"> </a> <a href="#contact" data-lang="contact-title" class="svelte-1yz1i5m"> </a></nav> <div class="social-links svelte-1yz1i5m"><a href="https://www.youtube.com/@MaestroFusion360?sub_confirmation=1"><img src="https://img.shields.io/badge/Subscribe-YouTube-red?logo=youtube" alt="YouTube" class="svelte-1yz1i5m"/></a> <a href="https://t.me/+v0HwgVBIg8AyNTcy"><img src="https://img.shields.io/badge/Join-Telegram-blue?logo=telegram" alt="Telegram" class="svelte-1yz1i5m"/></a></div></header>',
);
function Or(t, e) {
  R(e, !0);
  const o = ue("lang"),
    r = W(() => zt[o.value]);
  var s = Dr(),
    a = v(s),
    l = v(a, !0);
  d(a);
  var u = y(a, 2),
    i = v(u),
    g = v(i, !0);
  d(i);
  var n = y(i, 2),
    b = v(n, !0);
  d(n);
  var m = y(n, 2),
    C = v(m, !0);
  d(m);
  var S = y(m, 2),
    A = v(S, !0);
  d(S);
  var c = y(S, 2),
    f = v(c, !0);
  (d(c),
    d(u),
    lr(2),
    d(s),
    z(() => {
      (G(l, w(r).title),
        G(g, w(r)["about-title"]),
        G(b, w(r)["tech-title"]),
        G(C, w(r)["projects-title"]),
        G(A, w(r)["upcoming-title"]),
        G(f, w(r)["contact-title"]));
    }),
    T(t, s),
    U());
}
function Y(...t) {
  const e = [],
    o = (r) => {
      if (!(r == null || r === !1)) {
        if (typeof r == "string") {
          e.push(...r.split(/\s+/).filter(Boolean));
          return;
        }
        if (typeof r == "number" || typeof r == "bigint") {
          e.push(String(r));
          return;
        }
        if (Array.isArray(r)) {
          for (const s of r) o(s);
          return;
        }
        if (typeof r == "object")
          for (const [s, a] of Object.entries(r)) a && e.push(s);
      }
    };
  for (const r of t) o(r);
  return e.join(" ");
}
var Gr = E("<button><!></button>");
function re(t, e) {
  R(e, !0);
  let o = x(e, "variant", 3, "primary"),
    r = x(e, "class", 3, ""),
    s = x(e, "type", 3, "button"),
    a = gt(e, [
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
    u = W(() =>
      o() === "primary"
        ? "inline-flex items-center justify-center rounded-[var(--border-radius)] bg-[var(--primary-color)] px-4 py-2 text-sm text-[var(--white)] shadow-[var(--shadow-sm)] transition-[var(--transition)] hover:brightness-110 active:brightness-95"
        : o() === "icon"
          ? "pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-[var(--surface-border)] bg-[var(--surface-strong)] text-[var(--text-color)] shadow-[var(--shadow-sm)] backdrop-blur-sm transition-[var(--transition)] hover:scale-110 hover:bg-[var(--primary-color)] hover:text-[var(--white)]"
          : "inline-flex items-center justify-center rounded-[var(--border-radius)] px-3 py-2 text-sm text-[var(--text-color)] transition-[var(--transition)] hover:bg-[var(--surface-strong)]",
    );
  var i = Gr();
  st(i, (n) => ({ ...a, type: s(), class: n, onclick: e.onclick }), [
    () => Y(l, w(u), r()),
  ]);
  var g = v(i);
  (Gt(g, () => e.children), d(i), T(t, i), U());
}
var zr = E("<div><!></div>");
function pe(t, e) {
  R(e, !0);
  const o = x(e, "variant", 3, "default"),
    r = x(e, "active", 3, !1),
    s = x(e, "class", 3, ""),
    a = gt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "children",
      "variant",
      "active",
      "class",
    ]),
    l = W(() =>
      o() === "default"
        ? "card"
        : o() === "project"
          ? "project-card"
          : "container",
    ),
    u = W(() => (o() === "project" && r() ? "active" : ""));
  var i = zr();
  st(
    i,
    (n) => ({ ...a, class: n }),
    [() => Y(w(l), w(u), s())],
    void 0,
    void 0,
    "svelte-2gevwt",
  );
  var g = v(i);
  (Gt(g, () => e.children), d(i), T(t, i), U());
}
var Hr = oe(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 12L6 8L10 4"></path></svg>',
  ),
  Br = oe(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 4L10 8L6 12"></path></svg>',
  ),
  Vr = E(
    '<div class="carousel-nav svelte-er9umx" role="group" aria-label="Carousel navigation"><!> <!></div>',
  ),
  Rr = E('<button type="button"></button>'),
  Ur = E("<div></div>"),
  Wr = E(
    '<div class="projects-carousel-wrapper svelte-er9umx"><div></div> <!></div> <!>',
    1,
  );
function be(t, e) {
  R(e, !0);
  const o = x(e, "class", 3, ""),
    r = x(e, "dotsClass", 3, ""),
    s = x(e, "ariaLabel", 3, "Carousel"),
    a = x(e, "showDots", 3, !0),
    l = x(e, "showArrows", 3, !0),
    u = gt(e, [
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
    g = mt(0),
    n = null;
  function b() {
    return i
      ? Array.from(i.querySelectorAll(".project-card")).filter(
          (_) => _.parentElement === i,
        )
      : [];
  }
  function m() {
    if (!i) return 0;
    const p = b();
    if (p.length === 0) return 0;
    const _ = i.scrollLeft + i.clientWidth / 2;
    let k = 0,
      F = Number.MAX_VALUE;
    return (
      p.forEach((h, M) => {
        const N = h.offsetLeft + h.offsetWidth / 2,
          V = Math.abs(N - _);
        V < F && ((F = V), (k = M));
      }),
      k
    );
  }
  function C(p) {
    if (!i) return;
    const k = b()[p];
    if (!k) return;
    const F = k.offsetLeft - (i.clientWidth - k.offsetWidth) / 2;
    (i.scrollTo({ left: F, behavior: "smooth" }), Z(g, p, !0));
  }
  function S() {
    n === null &&
      (n = requestAnimationFrame(() => {
        (Z(g, m(), !0), (n = null));
      }));
  }
  ht(() => {
    if (!(typeof window > "u") && i)
      return (
        requestAnimationFrame(() => {
          Z(g, m(), !0);
        }),
        () => {
          (n !== null && cancelAnimationFrame(n), (n = null));
        }
      );
  });
  var A = Wr(),
    c = ot(A),
    f = v(c);
  (st(
    f,
    (p) => ({
      ...u,
      class: p,
      role: "region",
      "aria-label": s(),
      "aria-live": "polite",
      onscroll: S,
    }),
    [() => Y("projects-carousel", o())],
    void 0,
    void 0,
    "svelte-er9umx",
  ),
    pt(
      f,
      21,
      () => e.items,
      Xt,
      (p, _, k) => {
        var F = Ne(),
          h = ot(F);
        (Gt(
          h,
          () => e.children,
          () => w(_),
          () => k,
          () => k === w(g),
        ),
          T(p, F));
      },
    ),
    d(f),
    pr(
      f,
      (p) => (i = p),
      () => i,
    ));
  var P = y(f, 2);
  {
    var j = (p) => {
      var _ = Vr(),
        k = v(_);
      re(k, {
        "aria-label": "Previous slide",
        variant: "icon",
        onclick: () => C(Math.max(0, w(g) - 1)),
        children: (h, M) => {
          var N = Hr();
          T(h, N);
        },
        $$slots: { default: !0 },
      });
      var F = y(k, 2);
      (re(F, {
        "aria-label": "Next slide",
        variant: "icon",
        onclick: () => C(Math.min(e.items.length - 1, w(g) + 1)),
        children: (h, M) => {
          var N = Br();
          T(h, N);
        },
        $$slots: { default: !0 },
      }),
        d(_),
        T(p, _));
    };
    $(P, (p) => {
      l() && e.items.length > 1 && p(j);
    });
  }
  d(c);
  var I = y(c, 2);
  {
    var L = (p) => {
      var _ = Ur();
      (pt(
        _,
        21,
        () => e.items,
        Xt,
        (k, F, h) => {
          var M = Rr();
          let N;
          (D(M, "aria-label", `Go to slide ${h + 1}`),
            (M.__click = () => C(h)),
            z(() => {
              ((N = ut(M, 1, "dot svelte-er9umx", null, N, {
                active: h === w(g),
              })),
                D(M, "data-has-item", w(F) != null));
            }),
            T(k, M));
        },
      ),
        d(_),
        z(
          (k) => ut(_, 1, k, "svelte-er9umx"),
          [() => _t(Y("carousel-dots", r()))],
        ),
        T(p, _));
    };
    $(I, (p) => {
      a() && e.items.length > 1 && p(L);
    });
  }
  (T(t, A), U());
}
bt(["click"]);
var Jr = E(
  '<div><h2> </h2> <div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-stretch"><div class="w-full md:pr-10"><div class="content-block md:mx-0"><p> </p></div></div> <div class="flex h-full items-center justify-center md:justify-end md:justify-self-end"><img width="180" height="180" loading="eager"/></div></div></div>',
);
function Yr(t, e) {
  R(e, !0);
  let o = x(e, "imageSrc", 3, "assets/icon.svg"),
    r = x(e, "imageAlt", 3, "Hero image"),
    s = x(e, "imgClass", 3, ""),
    a = x(e, "class", 3, ""),
    l = gt(e, [
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
  var u = Jr();
  st(u, (f) => ({ ...l, class: f }), [() => Y("grid gap-6", a())]);
  var i = v(u),
    g = v(i, !0);
  d(i);
  var n = y(i, 2),
    b = v(n),
    m = v(b),
    C = v(m),
    S = v(C, !0);
  (d(C), d(m), d(b));
  var A = y(b, 2),
    c = v(A);
  (d(A),
    d(n),
    d(u),
    z(
      (f) => {
        (D(i, "data-lang", e.titleKey),
          G(g, e.title),
          D(C, "data-lang", e.descriptionKey),
          G(S, e.description),
          D(c, "src", o()),
          D(c, "alt", r()),
          ut(c, 1, f));
      },
      [
        () =>
          _t(
            Y(
              "h-64 w-64 rounded-2xl border border-slate-900/10 bg-white/60 p-3 shadow-sm backdrop-blur",
              "dark:border-slate-100/10 dark:bg-slate-900/40",
              s(),
            ),
          ),
      ],
    ),
    T(t, u),
    U());
}
var Kr = E(
  '<div class="lang-switch svelte-f01c5n" role="group" aria-label="Language"><button type="button" class="lang-switch__btn svelte-f01c5n" aria-label="English" title="English"><img class="lang-switch__img svelte-f01c5n" src="assets/gb_icon.svg" alt="English"/></button> <button type="button" class="lang-switch__btn svelte-f01c5n" aria-label="Русский" title="Русский"><img class="lang-switch__img svelte-f01c5n" src="assets/ru_icon.svg" alt="Русский"/></button></div>',
);
function Xr(t, e) {
  R(e, !0);
  let o = x(e, "value", 15, "en"),
    r = x(e, "persist", 3, !0),
    s = x(e, "storageKey", 3, "lang"),
    a = x(e, "size", 3, 32),
    l = mt(!1);
  ht(() => {
    if (!(typeof window > "u" || typeof document > "u")) {
      if (!w(l)) {
        Z(l, !0);
        const b = localStorage.getItem(s());
        (b === "en" || b === "ru") && o(b);
      }
      ((document.documentElement.lang = o()),
        r() && localStorage.setItem(s(), o()));
    }
  });
  function u(b) {
    o(b);
  }
  var i = Kr(),
    g = v(i);
  g.__click = () => u("en");
  var n = y(g, 2);
  ((n.__click = () => u("ru")),
    d(i),
    z(() => {
      (de(i, `--lang-icon-size: ${a()}px`),
        D(g, "aria-pressed", o() === "en"),
        D(n, "aria-pressed", o() === "ru"));
    }),
    T(t, i),
    U());
}
bt(["click"]);
var qr =
  E(`<button type="button" class="theme-toggle svelte-lu0t34"><svg class="theme-icon theme-icon-sun svelte-lu0t34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><line x1="12" y1="1" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></svg> <svg class="theme-icon theme-icon-moon svelte-lu0t34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2
         A9 9 0 1 0 21 12
         A7.5 7.5 0 1 1 12 2 Z" fill="currentColor"></path></svg></button>`);
function Qr(t, e) {
  R(e, !0);
  const o = "theme";
  let r = mt(!1),
    s = mt("light");
  (ht(() => {
    if (!(typeof window > "u" || typeof document > "u") && !w(r)) {
      Z(r, !0);
      try {
        const u = localStorage.getItem(o);
        Z(s, u === "dark" || u === "light" ? u : "light", !0);
      } catch {}
    }
  }),
    ht(() => {
      if (typeof window > "u" || typeof document > "u" || !w(r)) return;
      const u = w(s) === "dark";
      document.documentElement.classList.toggle("dark", u);
      try {
        localStorage.setItem(o, w(s));
      } catch {}
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", u ? "#0b1220" : "#ffffff");
    }));
  function a() {
    Z(s, w(s) === "dark" ? "light" : "dark", !0);
  }
  var l = qr();
  ((l.__click = a),
    z(() => {
      (D(
        l,
        "aria-label",
        w(s) === "dark" ? "Switch to light theme" : "Switch to dark theme",
      ),
        D(
          l,
          "title",
          w(s) === "dark" ? "Switch to light theme" : "Switch to dark theme",
        ));
    }),
    T(t, l),
    U());
}
bt(["click"]);
var Zr = E('<iframe allowfullscreen="" loading="lazy" tabindex="-1"></iframe>'),
  $r = E('<div class="video-placeholder"> </div>'),
  to = E(
    '<a target="_blank" class="project-link" style="position: relative; z-index: 10;" tabindex="-1"> </a>',
  ),
  eo = E("<li><!></li>"),
  ro = E('<ul class="features-list"></ul>'),
  oo = E(
    '<div class="video-container"><!></div> <h3><!></h3> <p><!></p> <!>',
    1,
  );
function so(t, e) {
  let o = x(e, "ariaLabel", 3, "Active projects carousel");
  function r(s) {
    return s[e.locale] ?? s.en ?? {};
  }
  be(t, {
    get items() {
      return e.items;
    },
    get ariaLabel() {
      return o();
    },
    children: (a, l = rt, u = rt, i = rt) => {
      const g = W(l),
        n = W(() => r(w(g)));
      pe(a, {
        variant: "project",
        get active() {
          return i();
        },
        get "data-index"() {
          return u();
        },
        children: (b, m) => {
          var C = oo(),
            S = ot(C),
            A = v(S);
          {
            var c = (h) => {
                var M = Zr();
                (z(() => {
                  (D(
                    M,
                    "src",
                    `https://www.youtube.com/embed/${w(g).youtubeId}`,
                  ),
                    D(M, "title", w(n).title ?? ""));
                }),
                  T(h, M));
              },
              f = (h) => {
                var M = $r(),
                  N = v(M, !0);
                (d(M), z(() => G(N, e.videoMissing)), T(h, M));
              };
            $(A, (h) => {
              w(g).youtubeId ? h(c) : h(f, !1);
            });
          }
          d(S);
          var P = y(S, 2),
            j = v(P);
          {
            var I = (h) => {
                var M = to(),
                  N = v(M, !0);
                (d(M),
                  z(() => {
                    (D(M, "href", w(g).link), G(N, w(n).title ?? ""));
                  }),
                  T(h, M));
              },
              L = (h) => {
                var M = Pe();
                (z(() => G(M, w(n).title ?? "")), T(h, M));
              };
            $(j, (h) => {
              w(g).link ? h(I) : h(L, !1);
            });
          }
          d(P);
          var p = y(P, 2),
            _ = v(p);
          (B(_, () => w(n).description ?? ""), d(p));
          var k = y(p, 2);
          {
            var F = (h) => {
              var M = ro();
              (pt(
                M,
                20,
                () => w(n).features,
                (N) => N,
                (N, V) => {
                  var X = eo(),
                    it = v(X);
                  (B(it, () => V), d(X), T(N, X));
                },
              ),
                d(M),
                T(h, M));
            };
            $(k, (h) => {
              w(n).features?.length && h(F);
            });
          }
          T(b, C);
        },
        $$slots: { default: !0 },
      });
    },
    $$slots: { default: !0 },
  });
}
var io = E("<a><img/></a>"),
  ao = E("<img/>"),
  no = E("<span><!></span>");
function H(t, e) {
  R(e, !0);
  let o = x(e, "class", 3, ""),
    r = x(e, "imgClass", 3, ""),
    s = x(e, "target", 3, "_blank"),
    a = x(e, "rel", 3, "noopener noreferrer"),
    l = x(e, "width", 3, 40),
    u = x(e, "height", 3, 40),
    i = x(e, "loading", 3, "lazy"),
    g = gt(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "class",
      "imgClass",
      "href",
      "target",
      "rel",
      "width",
      "height",
      "loading",
      "alt",
      "title",
    ]);
  var n = no(),
    b = v(n);
  {
    var m = (S) => {
        var A = io(),
          c = v(A);
        (st(
          c,
          (f) => ({
            ...g,
            alt: e.alt,
            title: e.title,
            width: l(),
            height: u(),
            loading: i(),
            class: f,
          }),
          [
            () =>
              Y(
                "transition-transform duration-200 ease-out hover:scale-110",
                r(),
              ),
          ],
        ),
          d(A),
          z(() => {
            (D(A, "href", e.href),
              D(A, "target", s()),
              D(A, "rel", a()),
              D(A, "aria-label", e.alt ?? e.title),
              D(A, "title", e.title));
          }),
          Yt(c),
          T(S, A));
      },
      C = (S) => {
        var A = ao();
        (st(
          A,
          (c) => ({
            ...g,
            alt: e.alt,
            title: e.title,
            width: l(),
            height: u(),
            loading: i(),
            class: c,
          }),
          [
            () =>
              Y(
                "transition-transform duration-200 ease-out hover:scale-110",
                r(),
              ),
          ],
        ),
          Yt(A),
          T(S, A));
      };
    $(b, (S) => {
      e.href ? S(m) : S(C, !1);
    });
  }
  (d(n),
    z((S) => ut(n, 1, S), [() => _t(Y("inline-flex items-center", o()))]),
    T(t, n),
    U());
}
var lo = E(
  '<section id="technologies"><h2 data-lang="tech-title"> </h2> <div class="content-block"><h3 data-lang="tech-stack"> </h3> <ul class="my-6 flex list-none flex-wrap justify-center gap-5 p-0"><li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li></ul> <h3 data-lang="tech-other"> </h3> <ul class="skills-list svelte-oevu4l"><li data-lang="skill-post" class="svelte-oevu4l"><!></li> <li data-lang="skill-workflows" class="svelte-oevu4l"><!></li> <li data-lang="skill-ui" class="svelte-oevu4l"><!></li> <li data-lang="skill-vba" class="svelte-oevu4l"><!></li> <li data-lang="skill-macros" class="svelte-oevu4l"><!></li> <li data-lang="skill-telegram" class="svelte-oevu4l"><!></li> <li data-lang="skill-web" class="svelte-oevu4l"><!></li></ul></div></section>',
);
function co(t, e) {
  R(e, !0);
  const o = ue("lang"),
    r = W(() => zt[o.value]);
  var s = lo(),
    a = v(s),
    l = v(a, !0);
  d(a);
  var u = y(a, 2),
    i = v(u),
    g = v(i, !0);
  d(i);
  var n = y(i, 2),
    b = v(n),
    m = v(b);
  (H(m, {
    src: "assets/fusion_icon.svg",
    alt: "Fusion 360 API",
    title: "Fusion 360 API",
    href: "https://www.autodesk.com/products/fusion-360/overview",
  }),
    d(b));
  var C = y(b, 2),
    S = v(C);
  (H(S, {
    src: "assets/python_icon.svg",
    alt: "Python",
    title: "Python",
    href: "https://www.python.org/",
  }),
    d(C));
  var A = y(C, 2),
    c = v(A);
  (H(c, {
    src: "assets/svelte_icon.svg",
    alt: "Svelte5",
    title: "Svelte5",
    href: "https://svelte.dev/",
  }),
    d(A));
  var f = y(A, 2),
    P = v(f);
  (H(P, {
    src: "assets/c_sharp_icon.svg",
    alt: "C#",
    title: "C#",
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  }),
    d(f));
  var j = y(f, 2),
    I = v(j);
  (H(I, {
    src: "assets/nx_icon.png",
    alt: "Siemens NX",
    title: "Siemens NX",
    href: "https://www.plm.automation.siemens.com/global/en/products/nx/",
  }),
    d(j));
  var L = y(j, 2),
    p = v(L);
  (H(p, {
    src: "assets/html_icon.svg",
    alt: "HTML5",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  }),
    d(L));
  var _ = y(L, 2),
    k = v(_);
  (H(k, {
    src: "assets/css_icon.svg",
    alt: "CSS3",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  }),
    d(_));
  var F = y(_, 2),
    h = v(F);
  (H(h, {
    src: "assets/tailwind_icon.svg",
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  }),
    d(F));
  var M = y(F, 2),
    N = v(M);
  (H(N, {
    src: "assets/javascript_icon.svg",
    alt: "JavaScript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  }),
    d(M));
  var V = y(M, 2),
    X = v(V);
  (H(X, {
    src: "assets/typescript_icon.svg",
    alt: "TypeScript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
  }),
    d(V));
  var it = y(V, 2),
    ye = v(it);
  (H(ye, {
    src: "assets/telegram_icon.svg",
    alt: "Aiogram",
    title: "Aiogram",
    href: "https://docs.aiogram.dev/",
  }),
    d(it));
  var wt = y(it, 2),
    Se = v(wt);
  (H(Se, {
    src: "assets/excel_icon.svg",
    alt: "Excel VBA",
    title: "Excel VBA",
    href: "https://learn.microsoft.com/en-us/office/vba/api/overview/excel",
  }),
    d(wt));
  var Ht = y(wt, 2),
    Ce = v(Ht);
  (H(Ce, {
    src: "assets/vscode_icon.svg",
    alt: "VS Code",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
  }),
    d(Ht),
    d(n));
  var yt = y(n, 2),
    ke = v(yt, !0);
  d(yt);
  var Bt = y(yt, 2),
    St = v(Bt),
    Ae = v(St);
  (B(Ae, () => w(r)["skill-post"]), d(St));
  var Ct = y(St, 2),
    Me = v(Ct);
  (B(Me, () => w(r)["skill-workflows"]), d(Ct));
  var kt = y(Ct, 2),
    Ie = v(kt);
  (B(Ie, () => w(r)["skill-ui"]), d(kt));
  var At = y(kt, 2),
    Fe = v(At);
  (B(Fe, () => w(r)["skill-vba"]), d(At));
  var Mt = y(At, 2),
    Te = v(Mt);
  (B(Te, () => w(r)["skill-macros"]), d(Mt));
  var It = y(Mt, 2),
    xe = v(It);
  (B(xe, () => w(r)["skill-telegram"]), d(It));
  var Vt = y(It, 2),
    Ee = v(Vt);
  (B(Ee, () => w(r)["skill-web"]),
    d(Vt),
    d(Bt),
    d(u),
    d(s),
    z(() => {
      (G(l, w(r)["tech-title"]),
        G(g, w(r)["tech-stack"]),
        G(ke, w(r)["tech-other"]));
    }),
    T(t, s),
    U());
}
var uo = E("<li><!></li>"),
  go = E('<ul class="features-list"></ul>'),
  fo = E("<h3> </h3> <p><!></p> <!>", 1);
function vo(t, e) {
  let o = x(e, "ariaLabel", 3, "Future projects carousel");
  function r(s) {
    return s[e.locale] ?? s.en ?? {};
  }
  be(t, {
    get items() {
      return e.items;
    },
    class: "upcoming-carousel",
    dotsClass: "upcoming-dots",
    get ariaLabel() {
      return o();
    },
    children: (a, l = rt, u = rt, i = rt) => {
      const g = W(l),
        n = W(() => r(w(g)));
      pe(a, {
        variant: "project",
        get active() {
          return i();
        },
        get "data-index"() {
          return u();
        },
        children: (b, m) => {
          var C = fo(),
            S = ot(C),
            A = v(S, !0);
          d(S);
          var c = y(S, 2),
            f = v(c);
          (B(f, () => w(n).description ?? ""), d(c));
          var P = y(c, 2);
          {
            var j = (I) => {
              var L = go();
              (pt(
                L,
                20,
                () => w(n).features,
                (p) => p,
                (p, _) => {
                  var k = uo(),
                    F = v(k);
                  (B(F, () => _), d(k), T(p, k));
                },
              ),
                d(L),
                T(I, L));
            };
            $(P, (I) => {
              w(n).features?.length && I(j);
            });
          }
          (z(() => G(A, w(n).title ?? "")), T(b, C));
        },
        $$slots: { default: !0 },
      });
    },
    $$slots: { default: !0 },
  });
}
const ho = {
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
  mo = {
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
  po = JSON.stringify(ho),
  bo = JSON.stringify(mo),
  _e = '<script type="application/ld+json">',
  we = "<\/script>",
  _o = _e + po + we,
  wo = _e + bo + we;
var yo = E(
    '<meta charset="UTF-8"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <meta name="google-site-verification" content="NvQSU1__FPJtmLW9aYweYggiV0xnDR4tYLht6rhOFHg"/> <meta name="robots" content="index, follow, max-image-preview:large"/> <meta name="googlebot" content="index, follow"/> <link rel="canonical" href="https://maestrofusion360.github.io/website/"/>  <meta name="description" content="CNC Software Engineer and Fusion 360 Developer specializing in G-code automation and CNC programming optimization. Check out my projects and tools."/> <meta name="keywords" content="Fusion 360, CNC, G-code, Python, JavaScript, CAD, CAM, automation"/> <meta property="og:title" content="MaestroFusion360 | CNC &amp; Fusion 360 Developer"/> <meta property="og:description" content="CNC Software Engineer and Fusion 360 Developer specializing in automation."/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://maestrofusion360.github.io/website/"/> <meta property="og:image" content="https://maestrofusion360.github.io/website/assets/icon-192.png"/> <meta property="og:locale" content="en_US"/> <link rel="icon" href="favicon.ico" type="image/x-icon"/> <link rel="manifest" href="manifest.webmanifest"/> <link rel="apple-touch-icon" href="assets/icon-192.png"/> <meta name="theme-color" content="#ffffff"/>  <!> <!>',
    1,
  ),
  So = E(
    '<!> <!> <main><section id="about" class="px-6 md:px-12"><!></section> <!> <section id="projects"><h2 data-lang="projects-title"> </h2> <!></section> <section id="upcoming"><h2 data-lang="upcoming-title"> </h2> <!></section> <section id="contact"><h2 data-lang="contact-title"> </h2> <!></section> <!></main> <!>',
    1,
  );
function To(t, e) {
  R(e, !0);
  const o = cr({ value: "en" });
  ur("lang", o);
  const r = W(() => zt[o.value]),
    s = ee.active,
    a = ee.upcoming;
  var l = So();
  Cr("1uha8ag", (M) => {
    var N = yo(),
      V = y(ot(N), 36);
    B(V, () => _o);
    var X = y(V, 2);
    (B(X, () => wo),
      Ot(() => {
        gr.title = "MaestroFusion360";
      }),
      T(M, N));
  });
  var u = ot(l);
  Qr(u, {});
  var i = y(u, 2);
  Or(i, {});
  var g = y(i, 2),
    n = v(g),
    b = v(n);
  (Yr(b, {
    get title() {
      return w(r)["about-title"];
    },
    get description() {
      return w(r)["about-desc"];
    },
    titleKey: "about-title",
    descriptionKey: "about-desc",
    imageAlt: "MaestroFusion360",
  }),
    d(n));
  var m = y(n, 2);
  co(m, {});
  var C = y(m, 2),
    S = v(C),
    A = v(S, !0);
  d(S);
  var c = y(S, 2);
  (so(c, {
    get items() {
      return s;
    },
    get locale() {
      return o.value;
    },
    get videoMissing() {
      return w(r)["video-missing"];
    },
  }),
    d(C));
  var f = y(C, 2),
    P = v(f),
    j = v(P, !0);
  d(P);
  var I = y(P, 2);
  (vo(I, {
    get items() {
      return a;
    },
    get locale() {
      return o.value;
    },
  }),
    d(f));
  var L = y(f, 2),
    p = v(L),
    _ = v(p, !0);
  d(p);
  var k = y(p, 2);
  (Nr(k), d(L));
  var F = y(L, 2);
  (Xr(F, {
    get value() {
      return o.value;
    },
    set value(M) {
      o.value = M;
    },
  }),
    d(g));
  var h = y(g, 2);
  (jr(h, {}),
    z(() => {
      (G(A, w(r)["projects-title"]),
        G(j, w(r)["upcoming-title"]),
        G(_, w(r)["contact-title"]));
    }),
    T(t, l),
    U());
}
export { To as component };
