import {
  d as L,
  i as g,
  F as D,
  E as N,
  G as w,
  H as B,
  I as Y,
  J as M,
  K as T,
  L as U,
  M as q,
  b as A,
  N as F,
  S as O,
  O as K,
  P as $,
  Q as C,
  q as h,
  v as G,
  R as H,
  T as Z,
  U as z,
  V as J,
  W as Q,
  X as V,
  a as W,
  Y as X,
  Z as j,
  _ as m,
  $ as k,
  a0 as rr,
} from "./DZp1Jm13.js";
import { B as er } from "./rJiQO6Nq.js";
function tr(r, e, s = !1) {
  g && D();
  var u = new er(r),
    i = s ? N : 0;
  function a(f, t) {
    if (g) {
      const o = w(r) === B;
      if (f === o) {
        var _ = Y();
        (M(_), (u.anchor = _), T(!1), u.ensure(f, t), T(!0));
        return;
      }
    }
    u.ensure(f, t);
  }
  L(() => {
    var f = !1;
    (e((t, _ = !0) => {
      ((f = !0), a(_, t));
    }),
      f || a(!1, null));
  }, i);
}
function I(r, e) {
  return r === e || r?.[O] === e;
}
function ur(r = {}, e, s, u) {
  return (
    U(() => {
      var i, a;
      return (
        q(() => {
          ((i = a),
            (a = []),
            A(() => {
              r !== s(...a) &&
                (e(r, ...a), i && I(s(...i), r) && e(null, ...i));
            }));
        }),
        () => {
          F(() => {
            a && I(s(...a), r) && e(null, ...a);
          });
        }
      );
    }),
    r
  );
}
let P = !1;
function ar(r) {
  var e = P;
  try {
    return ((P = !1), [r(), P]);
  } finally {
    P = e;
  }
}
const nr = {
  get(r, e) {
    if (!r.exclude.includes(e)) return r.props[e];
  },
  set(r, e) {
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    if (!r.exclude.includes(e) && e in r.props)
      return { enumerable: !0, configurable: !0, value: r.props[e] };
  },
  has(r, e) {
    return r.exclude.includes(e) ? !1 : e in r.props;
  },
  ownKeys(r) {
    return Reflect.ownKeys(r.props).filter((e) => !r.exclude.includes(e));
  },
};
function fr(r, e, s) {
  return new Proxy({ props: r, exclude: e }, nr);
}
function _r(r, e, s, u) {
  var i = !W || (s & X) !== 0,
    a = (s & V) !== 0,
    f = (s & m) !== 0,
    t = u,
    _ = !0,
    o = () => (_ && ((_ = !1), (t = f ? A(u) : u)), t),
    l;
  if (a) {
    var p = O in r || rr in r;
    l = K(r, e)?.set ?? (p && e in r ? (n) => (r[e] = n) : void 0);
  }
  var c,
    E = !1;
  (a ? ([c, E] = ar(() => r[e])) : (c = r[e]),
    c === void 0 && u !== void 0 && ((c = o()), l && (i && $(), l(c))));
  var d;
  if (
    (i
      ? (d = () => {
          var n = r[e];
          return n === void 0 ? o() : ((_ = !0), n);
        })
      : (d = () => {
          var n = r[e];
          return (n !== void 0 && (t = void 0), n === void 0 ? t : n);
        }),
    i && (s & C) === 0)
  )
    return d;
  if (l) {
    var x = r.$$legacy;
    return function (n, S) {
      return arguments.length > 0
        ? ((!i || !S || x || E) && l(S ? d() : n), n)
        : d();
    };
  }
  var b = !1,
    v = ((s & j) !== 0 ? G : H)(() => ((b = !1), d()));
  a && h(v);
  var y = J;
  return function (n, S) {
    if (arguments.length > 0) {
      const R = S ? h(v) : i && a ? Z(n) : n;
      return (z(v, R), (b = !0), t !== void 0 && (t = R), n);
    }
    return (k && b) || (y.f & Q) !== 0 ? v.v : h(v);
  };
}
export { ur as b, tr as i, _r as p, fr as r };
