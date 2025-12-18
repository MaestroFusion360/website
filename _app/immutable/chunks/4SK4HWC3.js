import { d as p, E as t } from "./Ca4mpr-g.js";
import { B as c } from "./DBLbWNRW.js";
function E(r, s, ...a) {
  var e = new c(r);
  p(() => {
    const n = s() ?? null;
    e.ensure(n, n && ((o) => n(o, ...a)));
  }, t);
}
export { E as s };
