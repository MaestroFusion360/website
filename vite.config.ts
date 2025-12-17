import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';

/* === VARIABLES === */
const repoName = 'website'; // repo/project name (no leading /)
const appName = 'MaestroFusion360'; // long app name
const shortName = 'MF360'; // short name (icon/menu)
const description = 'Simple svelte 5 tailwind website';
const themeColor = '#ffffff';
const backgroundColor = '#ffffff';
const lang = 'en';

export default defineConfig(({ command }) => {
  const basePath = command === 'build' ? `/${repoName}/` : '/';
  const enableBrowserTests = process.env.VITEST_BROWSER === '1';
  const isVitest = Boolean(process.env.VITEST);

  return {
    resolve: isVitest
      ? {
          conditions: ['browser']
        }
      : undefined,
    ssr: isVitest
      ? {
          resolve: {
            conditions: ['browser']
          }
        }
      : undefined,
    plugins: [
      tailwindcss(),
      sveltekit(),
      VitePWA({
        manifestFilename: 'manifest.webmanifest',
        injectRegister: null,
        devOptions: {
          enabled: true
        },
        includeAssets: [
          'favicon.ico',
          'robots.txt',
          'sitemap.xml',
          'assets/apple-touch-icon.png',
          'assets/icon.svg'
        ],
        manifest: {
          name: appName,
          short_name: shortName,
          description,
          start_url: basePath,
          scope: basePath,
          display: 'standalone',
          background_color: backgroundColor,
          theme_color: themeColor,
          lang,
          icons: [
            {
              src: 'assets/icon-192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'assets/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
          skipWaiting: true,
          clientsClaim: true
        }
      })
    ],
    test: {
      expect: { requireAssertions: true },

      projects: [
        {
          extends: './vite.config.ts',
          test: {
            name: 'dom',
            environment: 'jsdom',
            include: ['src/lib/__tests__/**/*.{test,spec}.{js,ts}']
          }
        },
        ...(enableBrowserTests
          ? [
              {
                extends: './vite.config.ts',
                test: {
                  name: 'browser',
                  browser: { enabled: true },
                  include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
                  exclude: ['src/lib/server/**']
                }
              }
            ]
          : []),
        {
          extends: './vite.config.ts',
          test: {
            name: 'node',
            environment: 'node',
            include: ['src/**/*.{test,spec}.{js,ts}'],
            exclude: ['src/lib/__tests__/**', 'src/**/*.svelte.{test,spec}.{js,ts}']
          }
        }
      ],
    }
  };
});
