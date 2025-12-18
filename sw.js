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
    const r =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[r]) return;
    let c = {};
    const u = (s) => i(s, r),
      o = { module: { uri: r }, exports: c, require: u };
    e[r] = Promise.all(n.map((s) => o[s] || u(s))).then((s) => (l(...s), c));
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
          url: "_app/immutable/nodes/2.BQ8AqgqF.js",
          revision: "4869b1fc0b9cd7e3551109aa2818b7c5",
        },
        {
          url: "_app/immutable/nodes/1.Do89qZ_h.js",
          revision: "eb2914eb83f19b6bf54da44c968b110d",
        },
        {
          url: "_app/immutable/nodes/0.xsm-qyx-.js",
          revision: "85557f1a9c787ee3c753b35b19267c52",
        },
        {
          url: "_app/immutable/entry/start.CIunsMtC.js",
          revision: "77b628e8c6ac09353e8c14ca81a3c0a3",
        },
        {
          url: "_app/immutable/entry/app.OdjAGqmB.js",
          revision: "011136e3b5e656ff638c07be5e3cc17d",
        },
        {
          url: "_app/immutable/chunks/Dz4QiV4T.js",
          revision: "fa23ec428be0e2bf8ae14f6b15c359dd",
        },
        {
          url: "_app/immutable/chunks/DBLbWNRW.js",
          revision: "54e414c87fd5d1691e949c1f1d7887b5",
        },
        {
          url: "_app/immutable/chunks/DAWyZJYV.js",
          revision: "d9e4ec0e0a4ed32d7c81c2187ee2180d",
        },
        {
          url: "_app/immutable/chunks/D6jdnGIL.js",
          revision: "a727c75ccf9a6e6532d9109f5d508877",
        },
        {
          url: "_app/immutable/chunks/CEJcgaVT.js",
          revision: "b8bcf2dd2ac9902d242085b6851f44b6",
        },
        {
          url: "_app/immutable/chunks/CC4FMtKT.js",
          revision: "7dc122272c336eb46fffe30394a8cb02",
        },
        {
          url: "_app/immutable/chunks/Ca4mpr-g.js",
          revision: "775edfc1bf009b80d5747e251ccb0cfb",
        },
        {
          url: "_app/immutable/chunks/BpVTjGL-.js",
          revision: "cf1c280f1f321f293028a726b11efbbd",
        },
        {
          url: "_app/immutable/chunks/4SK4HWC3.js",
          revision: "d26557c0bb61d7d33255b60edb4d1b5b",
        },
        {
          url: "_app/immutable/assets/2.DzFq-1RH.css",
          revision: "674b685547b6eedd7cf331067209b99b",
        },
        {
          url: "_app/immutable/assets/0.BpAy9xJO.css",
          revision: "06534660eb5ffc2c69867450ba695492",
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
          revision: "ebc632dece0a73cc831c4e6e9a888293",
        },
        {
          url: "manifest.webmanifest",
          revision: "d60221a2cce26932ad23e609442a0352",
        },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL("index.html")),
    ));
});
