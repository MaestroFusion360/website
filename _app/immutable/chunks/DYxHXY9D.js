import { d as p, E as t } from "./DZp1Jm13.js";
import { B as c } from "./rJiQO6Nq.js";
function E(r, s, ...a) {
  var e = new c(r);
  p(() => {
    const n = s() ?? null;
    e.ensure(n, n && ((o) => n(o, ...a)));
  }, t);
}
export { E as s };
