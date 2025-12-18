const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../nodes/0.C6jn6_tz.js",
      "../chunks/DsnmJJEf.js",
      "../chunks/V-JyIKZ2.js",
      "../chunks/DIeogL5L.js",
      "../chunks/CQZ-O1pg.js",
      "../chunks/COARPlw_.js",
      "../chunks/DUQfWCK4.js",
      "../assets/0.CftJnzxf.css",
      "../nodes/1.DaGCmayH.js",
      "../chunks/69_IOA4Y.js",
      "../chunks/Db_-2-fJ.js",
      "../chunks/DbWR8Tlu.js",
      "../chunks/CmB-cfyC.js",
      "../chunks/DIaUGumh.js",
      "../nodes/2.D088C3Y2.js",
      "../chunks/DR32lwqH.js",
      "../assets/2.RuV7cbLV.css",
      "../nodes/3.DPzO339H.js",
    ]),
) => i.map((i) => d[i]);
import {
  h as G,
  A as U,
  b as z,
  E as H,
  Z as O,
  a4 as J,
  o as f,
  ay as K,
  am as W,
  az as Y,
  F as Z,
  j as Q,
  u as X,
  aA as x,
  aB as $,
  D as w,
  K as ee,
  H as te,
  I as re,
  J as se,
  aC as A,
  G as ne,
} from "../chunks/V-JyIKZ2.js";
import { h as ae, m as oe, u as ce, s as ie } from "../chunks/Db_-2-fJ.js";
import "../chunks/DsnmJJEf.js";
import { o as le } from "../chunks/DIaUGumh.js";
import { p as j, i as S, b as C } from "../chunks/DR32lwqH.js";
import { f as N, a as b, c as L, t as ue } from "../chunks/CQZ-O1pg.js";
import { B as me } from "../chunks/DUQfWCK4.js";
function T(a, e, s) {
  G && U();
  var i = new me(a);
  z(() => {
    var o = e() ?? null;
    i.ensure(o, o && ((r) => s(r, o)));
  }, H);
}
function fe(a) {
  return class extends de {
    constructor(e) {
      super({ component: a, ...e });
    }
  };
}
class de {
  #t;
  #e;
  constructor(e) {
    var s = new Map(),
      i = (r, t) => {
        var n = Y(t, !1, !1);
        return (s.set(r, n), n);
      };
    const o = new Proxy(
      { ...(e.props || {}), $$events: {} },
      {
        get(r, t) {
          return f(s.get(t) ?? i(t, Reflect.get(r, t)));
        },
        has(r, t) {
          return t === J
            ? !0
            : (f(s.get(t) ?? i(t, Reflect.get(r, t))), Reflect.has(r, t));
        },
        set(r, t, n) {
          return (O(s.get(t) ?? i(t, n), n), Reflect.set(r, t, n));
        },
      },
    );
    ((this.#e = (e.hydrate ? ae : oe)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: o,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover,
    })),
      (!e?.props?.$$host || e.sync === !1) && K(),
      (this.#t = o.$$events));
    for (const r of Object.keys(this.#e))
      r === "$set" ||
        r === "$destroy" ||
        r === "$on" ||
        W(this, r, {
          get() {
            return this.#e[r];
          },
          set(t) {
            this.#e[r] = t;
          },
          enumerable: !0,
        });
    ((this.#e.$set = (r) => {
      Object.assign(o, r);
    }),
      (this.#e.$destroy = () => {
        ce(this.#e);
      }));
  }
  $set(e) {
    this.#e.$set(e);
  }
  $on(e, s) {
    this.#t[e] = this.#t[e] || [];
    const i = (...o) => s.call(this, ...o);
    return (
      this.#t[e].push(i),
      () => {
        this.#t[e] = this.#t[e].filter((o) => o !== i);
      }
    );
  }
  $destroy() {
    this.#e.$destroy();
  }
}
const he = "modulepreload",
  _e = function (a, e) {
    return new URL(a, e).href;
  },
  I = {},
  k = function (e, s, i) {
    let o = Promise.resolve();
    if (s && s.length > 0) {
      let R = function (l) {
        return Promise.all(
          l.map((m) =>
            Promise.resolve(m).then(
              (d) => ({ status: "fulfilled", value: d }),
              (d) => ({ status: "rejected", reason: d }),
            ),
          ),
        );
      };
      const t = document.getElementsByTagName("link"),
        n = document.querySelector("meta[property=csp-nonce]"),
        p = n?.nonce || n?.getAttribute("nonce");
      o = R(
        s.map((l) => {
          if (((l = _e(l, i)), l in I)) return;
          I[l] = !0;
          const m = l.endsWith(".css"),
            d = m ? '[rel="stylesheet"]' : "";
          if (i)
            for (let h = t.length - 1; h >= 0; h--) {
              const c = t[h];
              if (c.href === l && (!m || c.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${d}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = m ? "stylesheet" : he),
            m || (u.as = "script"),
            (u.crossOrigin = ""),
            (u.href = l),
            p && u.setAttribute("nonce", p),
            document.head.appendChild(u),
            m)
          )
            return new Promise((h, c) => {
              (u.addEventListener("load", h),
                u.addEventListener("error", () =>
                  c(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function r(t) {
      const n = new Event("vite:preloadError", { cancelable: !0 });
      if (((n.payload = t), window.dispatchEvent(n), !n.defaultPrevented))
        throw t;
    }
    return o.then((t) => {
      for (const n of t || []) n.status === "rejected" && r(n.reason);
      return e().catch(r);
    });
  },
  Ae = {};
var ve = N(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>',
  ),
  ge = N("<!> <!>", 1);
function ye(a, e) {
  Z(e, !0);
  let s = j(e, "components", 23, () => []),
    i = j(e, "data_0", 3, null),
    o = j(e, "data_1", 3, null);
  (Q(() => e.stores.page.set(e.page)),
    X(() => {
      (e.stores,
        e.page,
        e.constructors,
        s(),
        e.form,
        i(),
        o(),
        e.stores.page.notify());
    }));
  let r = x(!1),
    t = x(!1),
    n = x(null);
  le(() => {
    const c = e.stores.page.subscribe(() => {
      f(r) &&
        (O(t, !0),
        $().then(() => {
          O(n, document.title || "untitled page", !0);
        }));
    });
    return (O(r, !0), c);
  });
  const p = A(() => e.constructors[1]);
  var R = ge(),
    l = w(R);
  {
    var m = (c) => {
        const _ = A(() => e.constructors[0]);
        var v = L(),
          E = w(v);
        (T(
          E,
          () => f(_),
          (g, y) => {
            C(
              y(g, {
                get data() {
                  return i();
                },
                get form() {
                  return e.form;
                },
                get params() {
                  return e.page.params;
                },
                children: (P, Ee) => {
                  var D = L(),
                    M = w(D);
                  (T(
                    M,
                    () => f(p),
                    (V, F) => {
                      C(
                        F(V, {
                          get data() {
                            return o();
                          },
                          get form() {
                            return e.form;
                          },
                          get params() {
                            return e.page.params;
                          },
                        }),
                        (q) => (s()[1] = q),
                        () => s()?.[1],
                      );
                    },
                  ),
                    b(P, D));
                },
                $$slots: { default: !0 },
              }),
              (P) => (s()[0] = P),
              () => s()?.[0],
            );
          },
        ),
          b(c, v));
      },
      d = (c) => {
        const _ = A(() => e.constructors[0]);
        var v = L(),
          E = w(v);
        (T(
          E,
          () => f(_),
          (g, y) => {
            C(
              y(g, {
                get data() {
                  return i();
                },
                get form() {
                  return e.form;
                },
                get params() {
                  return e.page.params;
                },
              }),
              (P) => (s()[0] = P),
              () => s()?.[0],
            );
          },
        ),
          b(c, v));
      };
    S(l, (c) => {
      e.constructors[1] ? c(m) : c(d, !1);
    });
  }
  var u = ee(l, 2);
  {
    var h = (c) => {
      var _ = ve(),
        v = re(_);
      {
        var E = (g) => {
          var y = ue();
          (ne(() => ie(y, f(n))), b(g, y));
        };
        S(v, (g) => {
          f(t) && g(E);
        });
      }
      (se(_), b(c, _));
    };
    S(u, (c) => {
      f(r) && c(h);
    });
  }
  (b(a, R), te());
}
const je = fe(ye),
  Se = [
    () =>
      k(
        () => import("../nodes/0.C6jn6_tz.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
        import.meta.url,
      ),
    () =>
      k(
        () => import("../nodes/1.DaGCmayH.js"),
        __vite__mapDeps([8, 1, 9, 3, 2, 10, 4, 11, 12, 13]),
        import.meta.url,
      ),
    () =>
      k(
        () => import("../nodes/2.D088C3Y2.js"),
        __vite__mapDeps([14, 1, 2, 3, 10, 4, 9, 11, 15, 6, 5, 16]),
        import.meta.url,
      ),
    () =>
      k(
        () => import("../nodes/3.DPzO339H.js"),
        __vite__mapDeps([17, 1, 9, 3]),
        import.meta.url,
      ),
  ],
  Ce = [],
  Le = { "/": [2], "/projects": [3] },
  B = {
    handleError: ({ error: a }) => {
      console.error(a);
    },
    reroute: () => {},
    transport: {},
  },
  be = Object.fromEntries(
    Object.entries(B.transport).map(([a, e]) => [a, e.decode]),
  ),
  Te = Object.fromEntries(
    Object.entries(B.transport).map(([a, e]) => [a, e.encode]),
  ),
  De = !1,
  Ie = (a, e) => be[a](e);
export {
  Ie as decode,
  be as decoders,
  Le as dictionary,
  Te as encoders,
  De as hash,
  B as hooks,
  Ae as matchers,
  Se as nodes,
  je as root,
  Ce as server_loads,
};
