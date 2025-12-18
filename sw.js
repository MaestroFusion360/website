if (!self.define) {
  let s,
    e = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    e[i] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          ((s.src = i), (s.onload = e), document.head.appendChild(s));
        } else ((s = i), importScripts(i), e());
      }).then(() => {
        let s = e[i];
        if (!s) throw new Error(`Module ${i} didn’t register its module`);
        return s;
      })
  );
  self.define = (n, l) => {
    const a =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[a]) return;
    let r = {};
    const c = (s) => i(s, a),
      u = { module: { uri: a }, exports: r, require: c };
    e[a] = Promise.all(n.map((s) => u[s] || c(s))).then((s) => (l(...s), r));
  };
}
define(["./workbox-8c29f6e4"], function (s) {
  "use strict";
  (self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: "manifest.webmanifest",
          revision: "d60221a2cce26932ad23e609442a0352",
        },
        { url: "favicon.ico", revision: "1590ef3cc02f2ec10b6661939f242266" },
        {
          url: "_app/immutable/nodes/3.DPzO339H.js",
          revision: "5a80688b6f058758844cf2be661cea0b",
        },
        {
          url: "_app/immutable/nodes/2.C5GDtgKj.js",
          revision: "7cfc33ab2ce500d0775087833d448f30",
        },
        {
          url: "_app/immutable/nodes/1.RsiCsJKU.js",
          revision: "433a4792c08466ef12c83c56f8c2466f",
        },
        {
          url: "_app/immutable/nodes/0.C6jn6_tz.js",
          revision: "768998d6d3268410f5caac8e34f9a36c",
        },
        {
          url: "_app/immutable/entry/start.Bhh3OT5o.js",
          revision: "6e914990493c83486f600c8ac30dc617",
        },
        {
          url: "_app/immutable/entry/app.CoH6Tu1L.js",
          revision: "edd7b1e4b839ef61adcd0ac06f800674",
        },
        {
          url: "_app/immutable/chunks/V-JyIKZ2.js",
          revision: "015fb7dc5eddcf15c3fb6dd017b27a8f",
        },
        {
          url: "_app/immutable/chunks/enTahh9G.js",
          revision: "2f54edaf65a089833f95e6bc7bb8d8b6",
        },
        {
          url: "_app/immutable/chunks/DUQfWCK4.js",
          revision: "ef59ce96eb681a0d36900e154083a1ec",
        },
        {
          url: "_app/immutable/chunks/DsnmJJEf.js",
          revision: "fb20be990fc7761dabac283c80bd471e",
        },
        {
          url: "_app/immutable/chunks/DR32lwqH.js",
          revision: "3fe5d61220158379b6d217ffb35c042e",
        },
        {
          url: "_app/immutable/chunks/DIeogL5L.js",
          revision: "8a0bd775fea011b0753ac39f7ce83bb9",
        },
        {
          url: "_app/immutable/chunks/DIaUGumh.js",
          revision: "4868e35a11f420f92941224dc3c52ccf",
        },
        {
          url: "_app/immutable/chunks/Db_-2-fJ.js",
          revision: "9239adc60a5520e01a579bd33461dae7",
        },
        {
          url: "_app/immutable/chunks/DbWR8Tlu.js",
          revision: "135e2b6aaba49caf18f4d5f572f3a70d",
        },
        {
          url: "_app/immutable/chunks/CQZ-O1pg.js",
          revision: "76f257561398cb135d37f0a3a04dfc74",
        },
        {
          url: "_app/immutable/chunks/COARPlw_.js",
          revision: "930c596bc6c2ea99ccc911f3b0a10992",
        },
        {
          url: "_app/immutable/chunks/69_IOA4Y.js",
          revision: "f4ecca51f09bf02a23d22522015ce825",
        },
        {
          url: "_app/immutable/assets/2.DM380Q5x.css",
          revision: "57dec158e6be20c26345d45276384374",
        },
        {
          url: "_app/immutable/assets/0.CftJnzxf.css",
          revision: "a6e6c6e2f2a2c8f98464e7702ea9400a",
        },
        { url: "assets/youtube_icon.svg", revision: null },
        { url: "assets/vscode_icon.svg", revision: null },
        { url: "assets/typescript_icon.svg", revision: null },
        { url: "assets/telegram_icon.svg", revision: null },
        { url: "assets/technology_icon.svg", revision: null },
        { url: "assets/tailwind_icon.svg", revision: null },
        { url: "assets/svelte_icon.svg", revision: null },
        { url: "assets/ru_icon.svg", revision: null },
        { url: "assets/python_icon.svg", revision: null },
        { url: "assets/nx_icon.png", revision: null },
        { url: "assets/javascript_icon.svg", revision: null },
        { url: "assets/icon.svg", revision: null },
        { url: "assets/icon-512.png", revision: null },
        { url: "assets/icon-192.png", revision: null },
        { url: "assets/html_icon.svg", revision: null },
        { url: "assets/gmail_icon.svg", revision: null },
        { url: "assets/github_icon.svg", revision: null },
        { url: "assets/gb_icon.svg", revision: null },
        { url: "assets/fusion_icon.svg", revision: null },
        { url: "assets/excel_icon.svg", revision: null },
        { url: "assets/editor_main.png", revision: null },
        { url: "assets/discord.svg", revision: null },
        { url: "assets/c_sharp_icon.svg", revision: null },
        { url: "assets/css_icon.svg", revision: null },
        { url: "assets/apple-touch-icon.png", revision: null },
        { url: "favicon.ico", revision: "1590ef3cc02f2ec10b6661939f242266" },
        { url: "robots.txt", revision: "bffd510737ba1f85e5979fe9475a6ece" },
        { url: "sitemap.xml", revision: "2e5f800ad731facdd8f85897f9e77e81" },
        {
          url: "assets/apple-touch-icon.png",
          revision: "46698db4e0d16c07f3d6717802a230b8",
        },
        {
          url: "assets/icon-192.png",
          revision: "46698db4e0d16c07f3d6717802a230b8",
        },
        {
          url: "assets/icon-512.png",
          revision: "1bd36c9d32a4efc2edc9f0ca612ee420",
        },
        {
          url: "assets/icon.svg",
          revision: "e7b6ed8bcd28716bffe655d4467df1ed",
        },
        {
          url: "manifest.webmanifest",
          revision: "d60221a2cce26932ad23e609442a0352",
        },
      ],
      {}
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))
    ));
});
