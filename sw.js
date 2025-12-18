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
    let a = {};
    const u = (s) => i(s, r),
      o = { module: { uri: r }, exports: a, require: u };
    e[r] = Promise.all(n.map((s) => o[s] || u(s))).then((s) => (l(...s), a));
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
          url: "_app/immutable/nodes/2.DkEuo9Wz.js",
          revision: "beb991b5215f54cbda22b29af7383dcd",
        },
        {
          url: "_app/immutable/nodes/1.DrxZzP1c.js",
          revision: "6295c6daab42082cb98bcdc4f29fa4df",
        },
        {
          url: "_app/immutable/nodes/0.Dm5HLHY9.js",
          revision: "dc44b36a6cce9651be9a234b99830514",
        },
        {
          url: "_app/immutable/entry/start.ZCY95oDh.js",
          revision: "c28d0afc84705141641146126e15381b",
        },
        {
          url: "_app/immutable/entry/app.DAQw1vYQ.js",
          revision: "7b4a554bc2880b8ac562e84e68a51f4b",
        },
        {
          url: "_app/immutable/chunks/RXz_eSDA.js",
          revision: "8eb85a47390d8cfe80ae235e360d92d0",
        },
        {
          url: "_app/immutable/chunks/rJiQO6Nq.js",
          revision: "f9b6a5832e9c6764f092c80f2f816a07",
        },
        {
          url: "_app/immutable/chunks/KIlJ7X9z.js",
          revision: "f46c52669ca07c2d4287f13179e14084",
        },
        {
          url: "_app/immutable/chunks/DZp1Jm13.js",
          revision: "656c5327945256d60ec505b09dab6740",
        },
        {
          url: "_app/immutable/chunks/DYxHXY9D.js",
          revision: "eb533c3f9fd1ec22e42dbb3c2ae84e69",
        },
        {
          url: "_app/immutable/chunks/DPfy1y_K.js",
          revision: "e74e0284fa9ecb2e20dc4008a069bb01",
        },
        {
          url: "_app/immutable/chunks/B2xTJhZM.js",
          revision: "210785b0367d75044d26d4fc121f01b4",
        },
        {
          url: "_app/immutable/chunks/aSQi0z39.js",
          revision: "c334835c3f6089dc4c0f2f64e80b3e01",
        },
        {
          url: "_app/immutable/chunks/6_AAUr-5.js",
          revision: "d29006bd2af5b9952f4b6e1649d9780c",
        },
        {
          url: "_app/immutable/assets/2.DzFq-1RH.css",
          revision: "674b685547b6eedd7cf331067209b99b",
        },
        {
          url: "_app/immutable/assets/0.dxrOZ9pn.css",
          revision: "7958a1790eea2eabdaa69a6c0c21b318",
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
          revision: "5ba37f3f36e7fd5d0ef90426ad0af100",
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
