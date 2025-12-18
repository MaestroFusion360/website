var jt = Array.isArray,
  Lt = Array.prototype.indexOf,
  On = Array.from,
  Dn = Object.defineProperty,
  ue = Object.getOwnPropertyDescriptor,
  qt = Object.getOwnPropertyDescriptors,
  Yt = Object.prototype,
  Ht = Array.prototype,
  rt = Object.getPrototypeOf,
  We = Object.isExtensible;
const Nn = () => {};
function Cn(e) {
  return e();
}
function Ut(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function st() {
  var e,
    t,
    n = new Promise((r, s) => {
      ((e = r), (t = s));
    });
  return { promise: n, resolve: e, reject: t };
}
const y = 2,
  qe = 4,
  xe = 8,
  ft = 1 << 24,
  j = 16,
  L = 32,
  ne = 64,
  Ye = 128,
  D = 512,
  g = 1024,
  A = 2048,
  P = 4096,
  I = 8192,
  Y = 16384,
  He = 32768,
  pe = 65536,
  Ne = 1 << 17,
  it = 1 << 18,
  ve = 1 << 19,
  at = 1 << 20,
  In = 1 << 25,
  J = 32768,
  Ce = 1 << 21,
  Ue = 1 << 22,
  H = 1 << 23,
  X = Symbol("$state"),
  Pn = Symbol("legacy props"),
  Fn = Symbol(""),
  re = new (class extends Error {
    name = "StaleReactionError";
    message =
      "The reaction that called `getAbortSignal()` was re-run or destroyed";
  })(),
  Be = 3,
  lt = 8;
function Bt(e) {
  throw new Error("https://svelte.dev/e/experimental_async_required");
}
function Vt(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Gt() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Kt(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function $t() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zt(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xt() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zt() {
  throw new Error("https://svelte.dev/e/fork_discarded");
}
function Wt() {
  throw new Error("https://svelte.dev/e/fork_timing");
}
function jn() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ln(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jt() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qt() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function en() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Yn = 1,
  Hn = 2,
  Un = 4,
  Bn = 8,
  Vn = 16,
  Gn = 1,
  Kn = 2,
  $n = 4,
  zn = 8,
  Xn = 16,
  Zn = 1,
  Wn = 2,
  tn = "[",
  nn = "[!",
  rn = "]",
  Ve = {},
  m = Symbol(),
  Jn = "http://www.w3.org/1999/xhtml",
  Qn = "@attach";
function Ge(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function er() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function tr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Q = !1;
function nr(e) {
  Q = e;
}
let S;
function se(e) {
  if (e === null) throw (Ge(), Ve);
  return (S = e);
}
function rr() {
  return se(G(S));
}
function sr(e) {
  if (Q) {
    if (G(S) !== null) throw (Ge(), Ve);
    S = e;
  }
}
function fr(e = 1) {
  if (Q) {
    for (var t = e, n = S; t--; ) n = G(n);
    S = n;
  }
}
function ir(e = !0) {
  for (var t = 0, n = S; ; ) {
    if (n.nodeType === lt) {
      var r = n.data;
      if (r === rn) {
        if (t === 0) return n;
        t -= 1;
      } else (r === tn || r === nn) && (t += 1);
    }
    var s = G(n);
    (e && n.remove(), (n = s));
  }
}
function ar(e) {
  if (!e || e.nodeType !== lt) throw (Ge(), Ve);
  return e.data;
}
function ut(e) {
  return e === this.v;
}
function sn(e, t) {
  return e != e
    ? t == t
    : e !== t || (e !== null && typeof e == "object") || typeof e == "function";
}
function ot(e) {
  return !sn(e, this.v);
}
let Se = !1;
function lr() {
  Se = !0;
}
let w = null;
function we(e) {
  w = e;
}
function ur(e, t) {
  return (fn().set(e, t), t);
}
function or(e, t = !1, n) {
  w = {
    p: w,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Se && !t ? { s: null, u: null, $: [] } : null,
  };
}
function cr(e) {
  var t = w,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) At(r);
  }
  return ((t.i = !0), (w = t.p), {});
}
function de() {
  return !Se || (w !== null && w.l === null);
}
function fn(e) {
  return (w === null && Vt(), (w.c ??= new Map(an(w) || void 0)));
}
function an(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null) return n;
    t = t.p;
  }
  return null;
}
let $ = [];
function ct() {
  var e = $;
  (($ = []), Ut(e));
}
function ln(e) {
  if ($.length === 0 && !oe) {
    var t = $;
    queueMicrotask(() => {
      t === $ && ct();
    });
  }
  $.push(e);
}
function un() {
  for (; $.length > 0; ) ct();
}
function on(e) {
  var t = h;
  if (t === null) return ((_.f |= H), e);
  if ((t.f & He) === 0) {
    if ((t.f & Ye) === 0) throw e;
    t.b.error(e);
  } else ye(e, t);
}
function ye(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ye) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const z = new Set();
let p = null,
  T = null,
  k = [],
  Re = null,
  Ie = !1,
  oe = !1;
class B {
  committed = !1;
  current = new Map();
  previous = new Map();
  #r = new Set();
  #s = new Set();
  #e = 0;
  #t = 0;
  #a = null;
  #f = new Set();
  #i = new Set();
  skipped_effects = new Set();
  is_fork = !1;
  is_deferred() {
    return this.is_fork || this.#t > 0;
  }
  process(t) {
    ((k = []), this.apply());
    var n = { parent: null, effect: null, effects: [], render_effects: [] };
    for (const r of t) this.#l(r, n);
    (this.is_fork || this.#o(),
      this.is_deferred()
        ? (this.#n(n.effects), this.#n(n.render_effects))
        : ((p = null), Je(n.render_effects), Je(n.effects), this.#a?.resolve()),
      (T = null));
  }
  #l(t, n) {
    t.f ^= g;
    for (var r = t.first; r !== null; ) {
      var s = r.f,
        f = (s & (L | ne)) !== 0,
        u = f && (s & g) !== 0,
        l = u || (s & I) !== 0 || this.skipped_effects.has(r);
      if (
        ((r.f & Ye) !== 0 &&
          r.b?.is_pending() &&
          (n = { parent: n, effect: r, effects: [], render_effects: [] }),
        !l && r.fn !== null)
      ) {
        f
          ? (r.f ^= g)
          : (s & qe) !== 0
            ? n.effects.push(r)
            : he(r) && ((r.f & j) !== 0 && this.#f.add(r), _e(r));
        var i = r.first;
        if (i !== null) {
          r = i;
          continue;
        }
      }
      var a = r.parent;
      for (r = r.next; r === null && a !== null; )
        (a === n.effect &&
          (this.#n(n.effects), this.#n(n.render_effects), (n = n.parent)),
          (r = a.next),
          (a = a.parent));
    }
  }
  #n(t) {
    for (const n of t)
      ((n.f & A) !== 0 ? this.#f.add(n) : (n.f & P) !== 0 && this.#i.add(n),
        this.#u(n.deps),
        E(n, g));
  }
  #u(t) {
    if (t !== null)
      for (const n of t)
        (n.f & y) === 0 || (n.f & J) === 0 || ((n.f ^= J), this.#u(n.deps));
  }
  capture(t, n) {
    (this.previous.has(t) || this.previous.set(t, n),
      (t.f & H) === 0 && (this.current.set(t, t.v), T?.set(t, t.v)));
  }
  activate() {
    ((p = this), this.apply());
  }
  deactivate() {
    p === this && ((p = null), (T = null));
  }
  flush() {
    if ((this.activate(), k.length > 0)) {
      if ((Fe(), p !== null && p !== this)) return;
    } else this.#e === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#s) t(this);
    this.#s.clear();
  }
  #o() {
    if (this.#t === 0) {
      for (const t of this.#r) t();
      this.#r.clear();
    }
    this.#e === 0 && this.#c();
  }
  #c() {
    if (z.size > 1) {
      this.previous.clear();
      var t = T,
        n = !0,
        r = { parent: null, effect: null, effects: [], render_effects: [] };
      for (const f of z) {
        if (f === this) {
          n = !1;
          continue;
        }
        const u = [];
        for (const [i, a] of this.current) {
          if (f.current.has(i))
            if (n && a !== f.current.get(i)) f.current.set(i, a);
            else continue;
          u.push(i);
        }
        if (u.length === 0) continue;
        const l = [...f.current.keys()].filter((i) => !this.current.has(i));
        if (l.length > 0) {
          var s = k;
          k = [];
          const i = new Set(),
            a = new Map();
          for (const o of u) _t(o, l, i, a);
          if (k.length > 0) {
            ((p = f), f.apply());
            for (const o of k) f.#l(o, r);
            f.deactivate();
          }
          k = s;
        }
      }
      ((p = null), (T = t));
    }
    ((this.committed = !0), z.delete(this));
  }
  increment(t) {
    ((this.#e += 1), t && (this.#t += 1));
  }
  decrement(t) {
    ((this.#e -= 1), t && (this.#t -= 1), this.revive());
  }
  revive() {
    for (const t of this.#f) (this.#i.delete(t), E(t, A), ee(t));
    for (const t of this.#i) (E(t, P), ee(t));
    this.flush();
  }
  oncommit(t) {
    this.#r.add(t);
  }
  ondiscard(t) {
    this.#s.add(t);
  }
  settled() {
    return (this.#a ??= st()).promise;
  }
  static ensure() {
    if (p === null) {
      const t = (p = new B());
      (z.add(p),
        oe ||
          B.enqueue(() => {
            p === t && t.flush();
          }));
    }
    return p;
  }
  static enqueue(t) {
    ln(t);
  }
  apply() {}
}
function Pe(e) {
  var t = oe;
  oe = !0;
  try {
    var n;
    for (e && (p !== null && Fe(), (n = e())); ; ) {
      if ((un(), k.length === 0 && (p?.flush(), k.length === 0)))
        return ((Re = null), n);
      Fe();
    }
  } finally {
    oe = t;
  }
}
function Fe() {
  var e = Z;
  Ie = !0;
  var t = null;
  try {
    var n = 0;
    for (Te(!0); k.length > 0; ) {
      var r = B.ensure();
      if (n++ > 1e3) {
        var s, f;
        cn();
      }
      (r.process(k), U.clear());
    }
  } finally {
    ((Ie = !1), Te(e), (Re = null));
  }
}
function cn() {
  try {
    Xt();
  } catch (e) {
    ye(e, Re);
  }
}
let F = null;
function Je(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (
        (r.f & (Y | I)) === 0 &&
        he(r) &&
        ((F = new Set()),
        _e(r),
        r.deps === null &&
          r.first === null &&
          r.nodes === null &&
          (r.teardown === null && r.ac === null ? Rt(r) : (r.fn = null)),
        F?.size > 0)
      ) {
        U.clear();
        for (const s of F) {
          if ((s.f & (Y | I)) !== 0) continue;
          const f = [s];
          let u = s.parent;
          for (; u !== null; )
            (F.has(u) && (F.delete(u), f.push(u)), (u = u.parent));
          for (let l = f.length - 1; l >= 0; l--) {
            const i = f[l];
            (i.f & (Y | I)) === 0 && _e(i);
          }
        }
        F.clear();
      }
    }
    F = null;
  }
}
function _t(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const f = s.f;
      (f & y) !== 0
        ? _t(s, t, n, r)
        : (f & (Ue | j)) !== 0 &&
          (f & A) === 0 &&
          dt(s, t, r) &&
          (E(s, A), ee(s));
    }
}
function vt(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      (r & y) !== 0 ? vt(n, t) : (r & Ne) !== 0 && (E(n, A), t.add(n));
    }
}
function dt(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (t.includes(s)) return !0;
      if ((s.f & y) !== 0 && dt(s, t, n)) return (n.set(s, !0), !0);
    }
  return (n.set(e, !1), !1);
}
function ee(e) {
  for (var t = (Re = e); t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Ie && t === h && (n & j) !== 0 && (n & it) === 0) return;
    if ((n & (ne | L)) !== 0) {
      if ((n & g) === 0) return;
      t.f ^= g;
    }
  }
  k.push(t);
}
function _r(e) {
  (Bt(), p !== null && Wt());
  var t = B.ensure();
  ((t.is_fork = !0), (T = new Map()));
  var n = !1,
    r = t.settled();
  (Pe(e), (T = null));
  for (var [s, f] of t.previous) s.v = f;
  return {
    commit: async () => {
      if (n) {
        await r;
        return;
      }
      (z.has(t) || Zt(), (n = !0), (t.is_fork = !1));
      for (var [u, l] of t.current) u.v = l;
      (Pe(() => {
        var i = new Set();
        for (var a of t.current.keys()) vt(a, i);
        (wn(i), yt());
      }),
        t.revive(),
        await r);
    },
    discard: () => {
      !n && z.has(t) && (z.delete(t), t.discard());
    },
  };
}
function _n(e, t, n, r) {
  const s = de() ? Ke : hn;
  if (n.length === 0 && e.length === 0) {
    r(t.map(s));
    return;
  }
  var f = p,
    u = h,
    l = vn();
  function i() {
    Promise.all(n.map((a) => dn(a)))
      .then((a) => {
        l();
        try {
          r([...t.map(s), ...a]);
        } catch (o) {
          (u.f & Y) === 0 && ye(o, u);
        }
        (f?.deactivate(), Ee());
      })
      .catch((a) => {
        ye(a, u);
      });
  }
  e.length > 0
    ? Promise.all(e).then(() => {
        l();
        try {
          return i();
        } finally {
          (f?.deactivate(), Ee());
        }
      })
    : i();
}
function vn() {
  var e = h,
    t = _,
    n = w,
    r = p;
  return function (f = !0) {
    (fe(e), V(t), we(n), f && r?.activate());
  };
}
function Ee() {
  (fe(null), V(null), we(null));
}
function Ke(e) {
  var t = y | A,
    n = _ !== null && (_.f & y) !== 0 ? _ : null;
  return (
    h !== null && (h.f |= ve),
    {
      ctx: w,
      deps: null,
      effects: null,
      equals: ut,
      f: t,
      fn: e,
      reactions: null,
      rv: 0,
      v: m,
      wv: 0,
      parent: n ?? h,
      ac: null,
    }
  );
}
function dn(e, t) {
  let n = h;
  n === null && Gt();
  var r = n.b,
    s = void 0,
    f = ze(m),
    u = !_,
    l = new Map();
  return (
    bn(() => {
      var i = st();
      s = i.promise;
      try {
        Promise.resolve(e())
          .then(i.resolve, i.reject)
          .then(() => {
            (a === p && a.committed && a.deactivate(), Ee());
          });
      } catch (c) {
        (i.reject(c), Ee());
      }
      var a = p;
      if (u) {
        var o = !r.is_pending();
        (r.update_pending_count(1),
          a.increment(o),
          l.get(a)?.reject(re),
          l.delete(a),
          l.set(a, i));
      }
      const v = (c, d = void 0) => {
        if ((a.activate(), d)) d !== re && ((f.f |= H), Me(f, d));
        else {
          ((f.f & H) !== 0 && (f.f ^= H), Me(f, c));
          for (const [O, ke] of l) {
            if ((l.delete(O), O === a)) break;
            ke.reject(re);
          }
        }
        u && (r.update_pending_count(-1), a.decrement(o));
      };
      i.promise.then(v, (c) => v(null, c || "unknown"));
    }),
    gn(() => {
      for (const i of l.values()) i.reject(re);
    }),
    new Promise((i) => {
      function a(o) {
        function v() {
          o === s ? i(f) : a(s);
        }
        o.then(v, v);
      }
      a(s);
    })
  );
}
function vr(e) {
  const t = Ke(e);
  return (Dt(t), t);
}
function hn(e) {
  const t = Ke(e);
  return ((t.equals = ot), t);
}
function ht(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) te(t[n]);
  }
}
function pn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & y) === 0) return (t.f & Y) === 0 ? t : null;
    t = t.parent;
  }
  return null;
}
function $e(e) {
  var t,
    n = h;
  fe(pn(e));
  try {
    ((e.f &= ~J), ht(e), (t = Pt(e)));
  } finally {
    fe(n);
  }
  return t;
}
function pt(e) {
  var t = $e(e);
  if ((e.equals(t) || (p?.is_fork || (e.v = t), (e.wv = Ct())), !ie))
    if (T !== null) (be() || p?.is_fork) && T.set(e, t);
    else {
      var n = (e.f & D) === 0 ? P : g;
      E(e, n);
    }
}
let me = new Set();
const U = new Map();
function wn(e) {
  me = e;
}
let wt = !1;
function ze(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: ut, rv: 0, wv: 0 };
  return n;
}
function q(e, t) {
  const n = ze(e);
  return (Dt(n), n);
}
function dr(e, t = !1, n = !0) {
  const r = ze(e);
  return (
    t || (r.equals = ot),
    Se && n && w !== null && w.l !== null && (w.l.s ??= []).push(r),
    r
  );
}
function K(e, t, n = !1) {
  _ !== null &&
    (!C || (_.f & Ne) !== 0) &&
    de() &&
    (_.f & (y | j | Ue | Ne)) !== 0 &&
    !M?.includes(e) &&
    en();
  let r = n ? ae(t) : t;
  return Me(e, r);
}
function Me(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    (ie ? U.set(e, t) : U.set(e, n), (e.v = t));
    var r = B.ensure();
    (r.capture(e, n),
      (e.f & y) !== 0 &&
        ((e.f & A) !== 0 && $e(e), E(e, (e.f & D) !== 0 ? g : P)),
      (e.wv = Ct()),
      Et(e, A),
      de() &&
        h !== null &&
        (h.f & g) !== 0 &&
        (h.f & (L | ne)) === 0 &&
        (R === null ? Sn([e]) : R.push(e)),
      !r.is_fork && me.size > 0 && !wt && yt());
  }
  return t;
}
function yt() {
  wt = !1;
  var e = Z;
  Te(!0);
  const t = Array.from(me);
  try {
    for (const n of t) ((n.f & g) !== 0 && E(n, P), he(n) && _e(n));
  } finally {
    Te(e);
  }
  me.clear();
}
function De(e) {
  K(e, e.v + 1);
}
function Et(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = de(), s = n.length, f = 0; f < s; f++) {
      var u = n[f],
        l = u.f;
      if (!(!r && u === h)) {
        var i = (l & A) === 0;
        if ((i && E(u, t), (l & y) !== 0)) {
          var a = u;
          (T?.delete(a), (l & J) === 0 && (l & D && (u.f |= J), Et(a, P)));
        } else i && ((l & j) !== 0 && F !== null && F.add(u), ee(u));
      }
    }
}
function ae(e) {
  if (typeof e != "object" || e === null || X in e) return e;
  const t = rt(e);
  if (t !== Yt && t !== Ht) return e;
  var n = new Map(),
    r = jt(e),
    s = q(0),
    f = W,
    u = (l) => {
      if (W === f) return l();
      var i = _,
        a = W;
      (V(null), nt(f));
      var o = l();
      return (V(i), nt(a), o);
    };
  return (
    r && n.set("length", q(e.length)),
    new Proxy(e, {
      defineProperty(l, i, a) {
        (!("value" in a) ||
          a.configurable === !1 ||
          a.enumerable === !1 ||
          a.writable === !1) &&
          Jt();
        var o = n.get(i);
        return (
          o === void 0
            ? (o = u(() => {
                var v = q(a.value);
                return (n.set(i, v), v);
              }))
            : K(o, a.value, !0),
          !0
        );
      },
      deleteProperty(l, i) {
        var a = n.get(i);
        if (a === void 0) {
          if (i in l) {
            const o = u(() => q(m));
            (n.set(i, o), De(s));
          }
        } else (K(a, m), De(s));
        return !0;
      },
      get(l, i, a) {
        if (i === X) return e;
        var o = n.get(i),
          v = i in l;
        if (
          (o === void 0 &&
            (!v || ue(l, i)?.writable) &&
            ((o = u(() => {
              var d = ae(v ? l[i] : m),
                O = q(d);
              return O;
            })),
            n.set(i, o)),
          o !== void 0)
        ) {
          var c = le(o);
          return c === m ? void 0 : c;
        }
        return Reflect.get(l, i, a);
      },
      getOwnPropertyDescriptor(l, i) {
        var a = Reflect.getOwnPropertyDescriptor(l, i);
        if (a && "value" in a) {
          var o = n.get(i);
          o && (a.value = le(o));
        } else if (a === void 0) {
          var v = n.get(i),
            c = v?.v;
          if (v !== void 0 && c !== m)
            return { enumerable: !0, configurable: !0, value: c, writable: !0 };
        }
        return a;
      },
      has(l, i) {
        if (i === X) return !0;
        var a = n.get(i),
          o = (a !== void 0 && a.v !== m) || Reflect.has(l, i);
        if (a !== void 0 || (h !== null && (!o || ue(l, i)?.writable))) {
          a === void 0 &&
            ((a = u(() => {
              var c = o ? ae(l[i]) : m,
                d = q(c);
              return d;
            })),
            n.set(i, a));
          var v = le(a);
          if (v === m) return !1;
        }
        return o;
      },
      set(l, i, a, o) {
        var v = n.get(i),
          c = i in l;
        if (r && i === "length")
          for (var d = a; d < v.v; d += 1) {
            var O = n.get(d + "");
            O !== void 0
              ? K(O, m)
              : d in l && ((O = u(() => q(m))), n.set(d + "", O));
          }
        if (v === void 0)
          (!c || ue(l, i)?.writable) &&
            ((v = u(() => q(void 0))), K(v, ae(a)), n.set(i, v));
        else {
          c = v.v !== m;
          var ke = u(() => ae(a));
          K(v, ke);
        }
        var Xe = Reflect.getOwnPropertyDescriptor(l, i);
        if ((Xe?.set && Xe.set.call(o, a), !c)) {
          if (r && typeof i == "string") {
            var Ze = n.get("length"),
              Oe = Number(i);
            Number.isInteger(Oe) && Oe >= Ze.v && K(Ze, Oe + 1);
          }
          De(s);
        }
        return !0;
      },
      ownKeys(l) {
        le(s);
        var i = Reflect.ownKeys(l).filter((v) => {
          var c = n.get(v);
          return c === void 0 || c.v !== m;
        });
        for (var [a, o] of n) o.v !== m && !(a in l) && i.push(a);
        return i;
      },
      setPrototypeOf() {
        Qt();
      },
    })
  );
}
function Qe(e) {
  try {
    if (e !== null && typeof e == "object" && X in e) return e[X];
  } catch {}
  return e;
}
function hr(e, t) {
  return Object.is(Qe(e), Qe(t));
}
var et, yn, En, mt, gt;
function pr() {
  if (et === void 0) {
    ((et = window),
      (yn = document),
      (En = /Firefox/.test(navigator.userAgent)));
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    ((mt = ue(t, "firstChild").get),
      (gt = ue(t, "nextSibling").get),
      We(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      We(n) && (n.__t = void 0));
  }
}
function ge(e = "") {
  return document.createTextNode(e);
}
function je(e) {
  return mt.call(e);
}
function G(e) {
  return gt.call(e);
}
function wr(e, t) {
  if (!Q) return je(e);
  var n = je(S);
  if (n === null) n = S.appendChild(ge());
  else if (t && n.nodeType !== Be) {
    var r = ge();
    return (n?.before(r), se(r), r);
  }
  return (se(n), n);
}
function yr(e, t = !1) {
  if (!Q) {
    var n = je(e);
    return n instanceof Comment && n.data === "" ? G(n) : n;
  }
  if (t && S?.nodeType !== Be) {
    var r = ge();
    return (S?.before(r), se(r), r);
  }
  return S;
}
function Er(e, t = 1, n = !1) {
  let r = Q ? S : e;
  for (var s; t--; ) ((s = r), (r = G(r)));
  if (!Q) return r;
  if (n && r?.nodeType !== Be) {
    var f = ge();
    return (r === null ? s?.after(f) : r.before(f), se(f), f);
  }
  return (se(r), r);
}
function mr(e) {
  e.textContent = "";
}
function gr() {
  return !1;
}
function bt(e) {
  var t = _,
    n = h;
  (V(null), fe(null));
  try {
    return e();
  } finally {
    (V(t), fe(n));
  }
}
function Tt(e) {
  (h === null && (_ === null && zt(), $t()), ie && Kt());
}
function mn(e, t) {
  var n = t.last;
  n === null
    ? (t.last = t.first = e)
    : ((n.next = e), (e.prev = n), (t.last = e));
}
function N(e, t, n) {
  var r = h;
  r !== null && (r.f & I) !== 0 && (e |= I);
  var s = {
    ctx: w,
    deps: null,
    nodes: null,
    f: e | A | D,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null,
  };
  if (n)
    try {
      (_e(s), (s.f |= He));
    } catch (l) {
      throw (te(s), l);
    }
  else t !== null && ee(s);
  var f = s;
  if (
    (n &&
      f.deps === null &&
      f.teardown === null &&
      f.nodes === null &&
      f.first === f.last &&
      (f.f & ve) === 0 &&
      ((f = f.first),
      (e & j) !== 0 && (e & pe) !== 0 && f !== null && (f.f |= pe)),
    f !== null &&
      ((f.parent = r),
      r !== null && mn(f, r),
      _ !== null && (_.f & y) !== 0 && (e & ne) === 0))
  ) {
    var u = _;
    (u.effects ??= []).push(f);
  }
  return s;
}
function be() {
  return _ !== null && !C;
}
function gn(e) {
  const t = N(xe, null, !1);
  return (E(t, g), (t.teardown = e), t);
}
function br(e) {
  Tt();
  var t = h.f,
    n = !_ && (t & L) !== 0 && (t & He) === 0;
  if (n) {
    var r = w;
    (r.e ??= []).push(e);
  } else return At(e);
}
function At(e) {
  return N(qe | at, e, !1);
}
function Tr(e) {
  return (Tt(), N(xe | at, e, !0));
}
function Ar(e) {
  B.ensure();
  const t = N(ne | ve, e, !0);
  return (n = {}) =>
    new Promise((r) => {
      n.outro
        ? xn(t, () => {
            (te(t), r(void 0));
          })
        : (te(t), r(void 0));
    });
}
function xr(e) {
  return N(qe, e, !1);
}
function bn(e) {
  return N(Ue | ve, e, !0);
}
function Sr(e, t = 0) {
  return N(xe | t, e, !0);
}
function Rr(e, t = [], n = [], r = []) {
  _n(r, t, n, (s) => {
    N(xe, () => e(...s.map(le)), !0);
  });
}
function kr(e, t = 0) {
  var n = N(j | t, e, !0);
  return n;
}
function Or(e, t = 0) {
  var n = N(ft | t, e, !0);
  return n;
}
function Dr(e) {
  return N(L | ve, e, !0);
}
function xt(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = ie,
      r = _;
    (tt(!0), V(null));
    try {
      t.call(null);
    } finally {
      (tt(n), V(r));
    }
  }
}
function St(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null &&
      bt(() => {
        s.abort(re);
      });
    var r = n.next;
    ((n.f & ne) !== 0 ? (n.parent = null) : te(n, t), (n = r));
  }
}
function Tn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    ((t.f & L) === 0 && te(t), (t = n));
  }
}
function te(e, t = !0) {
  var n = !1;
  ((t || (e.f & it) !== 0) &&
    e.nodes !== null &&
    e.nodes.end !== null &&
    (An(e.nodes.start, e.nodes.end), (n = !0)),
    St(e, t && !n),
    Ae(e, 0),
    E(e, Y));
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const f of r) f.stop();
  xt(e);
  var s = e.parent;
  (s !== null && s.first !== null && Rt(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes =
      e.ac =
        null));
}
function An(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : G(e);
    (e.remove(), (e = n));
  }
}
function Rt(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  (n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null &&
      (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function xn(e, t, n = !0) {
  var r = [];
  kt(e, r, !0);
  var s = () => {
      (n && te(e), t && t());
    },
    f = r.length;
  if (f > 0) {
    var u = () => --f || s();
    for (var l of r) l.out(u);
  } else s();
}
function kt(e, t, n) {
  if ((e.f & I) === 0) {
    e.f ^= I;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const l of r) (l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var f = s.next,
        u = (s.f & pe) !== 0 || ((s.f & L) !== 0 && (e.f & j) !== 0);
      (kt(s, t, u ? n : !1), (s = f));
    }
  }
}
function Nr(e) {
  Ot(e, !0);
}
function Ot(e, t) {
  if ((e.f & I) !== 0) {
    ((e.f ^= I), (e.f & g) === 0 && (E(e, A), ee(e)));
    for (var n = e.first; n !== null; ) {
      var r = n.next,
        s = (n.f & pe) !== 0 || (n.f & L) !== 0;
      (Ot(n, s ? t : !1), (n = r));
    }
    var f = e.nodes && e.nodes.t;
    if (f !== null) for (const u of f) (u.is_global || t) && u.in();
  }
}
function Cr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : G(n);
      (t.append(n), (n = s));
    }
}
let Z = !1;
function Te(e) {
  Z = e;
}
let ie = !1;
function tt(e) {
  ie = e;
}
let _ = null,
  C = !1;
function V(e) {
  _ = e;
}
let h = null;
function fe(e) {
  h = e;
}
let M = null;
function Dt(e) {
  _ !== null && (M === null ? (M = [e]) : M.push(e));
}
let b = null,
  x = 0,
  R = null;
function Sn(e) {
  R = e;
}
let Nt = 1,
  ce = 0,
  W = ce;
function nt(e) {
  W = e;
}
function Ct() {
  return ++Nt;
}
function he(e) {
  var t = e.f;
  if ((t & A) !== 0) return !0;
  if ((t & y && (e.f &= ~J), (t & P) !== 0)) {
    var n = e.deps;
    if (n !== null)
      for (var r = n.length, s = 0; s < r; s++) {
        var f = n[s];
        if ((he(f) && pt(f), f.wv > e.wv)) return !0;
      }
    (t & D) !== 0 && T === null && E(e, g);
  }
  return !1;
}
function It(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !M?.includes(e))
    for (var s = 0; s < r.length; s++) {
      var f = r[s];
      (f.f & y) !== 0
        ? It(f, t, !1)
        : t === f && (n ? E(f, A) : (f.f & g) !== 0 && E(f, P), ee(f));
    }
}
function Pt(e) {
  var t = b,
    n = x,
    r = R,
    s = _,
    f = M,
    u = w,
    l = C,
    i = W,
    a = e.f;
  ((b = null),
    (x = 0),
    (R = null),
    (_ = (a & (L | ne)) === 0 ? e : null),
    (M = null),
    we(e.ctx),
    (C = !1),
    (W = ++ce),
    e.ac !== null &&
      (bt(() => {
        e.ac.abort(re);
      }),
      (e.ac = null)));
  try {
    e.f |= Ce;
    var o = e.fn,
      v = o(),
      c = e.deps;
    if (b !== null) {
      var d;
      if ((Ae(e, x), c !== null && x > 0))
        for (c.length = x + b.length, d = 0; d < b.length; d++) c[x + d] = b[d];
      else e.deps = c = b;
      if (be() && (e.f & D) !== 0)
        for (d = x; d < c.length; d++) (c[d].reactions ??= []).push(e);
    } else c !== null && x < c.length && (Ae(e, x), (c.length = x));
    if (de() && R !== null && !C && c !== null && (e.f & (y | P | A)) === 0)
      for (d = 0; d < R.length; d++) It(R[d], e);
    return (
      s !== null &&
        s !== e &&
        (ce++, R !== null && (r === null ? (r = R) : r.push(...R))),
      (e.f & H) !== 0 && (e.f ^= H),
      v
    );
  } catch (O) {
    return on(O);
  } finally {
    ((e.f ^= Ce),
      (b = t),
      (x = n),
      (R = r),
      (_ = s),
      (M = f),
      we(u),
      (C = l),
      (W = i));
  }
}
function Rn(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Lt.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? (n = t.reactions = null) : ((n[r] = n[s]), n.pop());
    }
  }
  n === null &&
    (t.f & y) !== 0 &&
    (b === null || !b.includes(t)) &&
    (E(t, P), (t.f & D) !== 0 && ((t.f ^= D), (t.f &= ~J)), ht(t), Ae(t, 0));
}
function Ae(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Rn(e, n[r]);
}
function _e(e) {
  var t = e.f;
  if ((t & Y) === 0) {
    E(e, g);
    var n = h,
      r = Z;
    ((h = e), (Z = !0));
    try {
      ((t & (j | ft)) !== 0 ? Tn(e) : St(e), xt(e));
      var s = Pt(e);
      ((e.teardown = typeof s == "function" ? s : null), (e.wv = Nt));
      var f;
    } finally {
      ((Z = r), (h = n));
    }
  }
}
async function Ir() {
  (await Promise.resolve(), Pe());
}
function Pr() {
  return B.ensure().settled();
}
function le(e) {
  var t = e.f,
    n = (t & y) !== 0;
  if (_ !== null && !C) {
    var r = h !== null && (h.f & Y) !== 0;
    if (!r && !M?.includes(e)) {
      var s = _.deps;
      if ((_.f & Ce) !== 0)
        e.rv < ce &&
          ((e.rv = ce),
          b === null && s !== null && s[x] === e
            ? x++
            : b === null
              ? (b = [e])
              : b.includes(e) || b.push(e));
      else {
        (_.deps ??= []).push(e);
        var f = e.reactions;
        f === null ? (e.reactions = [_]) : f.includes(_) || f.push(_);
      }
    }
  }
  if (ie) {
    if (U.has(e)) return U.get(e);
    if (n) {
      var u = e,
        l = u.v;
      return (
        (((u.f & g) === 0 && u.reactions !== null) || Mt(u)) && (l = $e(u)),
        U.set(u, l),
        l
      );
    }
  } else
    n &&
      (!T?.has(e) || (p?.is_fork && !be())) &&
      ((u = e), he(u) && pt(u), Z && be() && (u.f & D) === 0 && Ft(u));
  if (T?.has(e)) return T.get(e);
  if ((e.f & H) !== 0) throw e.v;
  return e.v;
}
function Ft(e) {
  if (e.deps !== null) {
    e.f ^= D;
    for (const t of e.deps)
      ((t.reactions ??= []).push(e),
        (t.f & y) !== 0 && (t.f & D) === 0 && Ft(t));
  }
}
function Mt(e) {
  if (e.v === m) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps) if (U.has(t) || ((t.f & y) !== 0 && Mt(t))) return !0;
  return !1;
}
function Fr(e) {
  var t = C;
  try {
    return ((C = !0), e());
  } finally {
    C = t;
  }
}
const kn = -7169;
function E(e, t) {
  e.f = (e.f & kn) | t;
}
function Mr(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (X in e) Le(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && X in n && Le(n);
      }
  }
}
function Le(e, t = new Set()) {
  if (
    typeof e == "object" &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !t.has(e)
  ) {
    (t.add(e), e instanceof Date && e.getTime());
    for (let r in e)
      try {
        Le(e[r], t);
      } catch {}
    const n = rt(e);
    if (
      n !== Object.prototype &&
      n !== Array.prototype &&
      n !== Map.prototype &&
      n !== Set.prototype &&
      n !== Date.prototype
    ) {
      const r = qt(n);
      for (let s in r) {
        const f = r[s].get;
        if (f)
          try {
            f.call(e);
          } catch {}
      }
    }
  }
}
export {
  ie as $,
  cr as A,
  wr as B,
  sr as C,
  Er as D,
  pe as E,
  rr as F,
  ar as G,
  nn as H,
  ir as I,
  se as J,
  nr as K,
  xr as L,
  Sr as M,
  ln as N,
  ue as O,
  Ln as P,
  $n as Q,
  hn as R,
  X as S,
  ae as T,
  K as U,
  h as V,
  Y as W,
  zn as X,
  Kn as Y,
  Gn as Z,
  Xn as _,
  Se as a,
  ur as a$,
  Pn as a0,
  je as a1,
  En as a2,
  Zn as a3,
  Wn as a4,
  He as a5,
  Be as a6,
  be as a7,
  ze as a8,
  De as a9,
  Pe as aA,
  dr as aB,
  q as aC,
  Ir as aD,
  vr as aE,
  In as aF,
  jt as aG,
  Yn as aH,
  Vn as aI,
  Hn as aJ,
  I as aK,
  Un as aL,
  Bn as aM,
  An as aN,
  it as aO,
  Or as aP,
  er as aQ,
  hr as aR,
  gn as aS,
  _n as aT,
  Fn as aU,
  Jn as aV,
  rt as aW,
  Qn as aX,
  qt as aY,
  m as aZ,
  Nn as a_,
  lt as aa,
  B as ab,
  fe as ac,
  V as ad,
  we as ae,
  on as af,
  _ as ag,
  Me as ah,
  fr as ai,
  ye as aj,
  qn as ak,
  ve as al,
  Ye as am,
  tr as an,
  Dn as ao,
  bt as ap,
  pr as aq,
  tn as ar,
  G as as,
  Ve as at,
  jn as au,
  mr as av,
  On as aw,
  Ar as ax,
  rn as ay,
  Ge as az,
  Fr as b,
  yn as b0,
  sn as b1,
  _r as b2,
  Pr as b3,
  w as c,
  kr as d,
  p as e,
  te as f,
  ge as g,
  Dr as h,
  Q as i,
  S as j,
  Tr as k,
  Vt as l,
  Cr as m,
  Ut as n,
  Cn as o,
  xn as p,
  le as q,
  Nr as r,
  gr as s,
  Mr as t,
  br as u,
  Ke as v,
  lr as w,
  yr as x,
  or as y,
  Rr as z,
};
