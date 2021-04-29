if (!self.define) {
  const e = e => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        a[e] ||
          (s = new Promise(async s => {
            if ('document' in self) {
              const a = document.createElement('script')
              ;(a.src = e), document.head.appendChild(a), (a.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`)
          return a[e]
        })
      )
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then(e => a(1 === e.length ? e[0] : e))
    },
    a = { require: Promise.resolve(s) }
  self.define = (s, n, t) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {}
        const i = { uri: location.origin + s.slice(1) }
        return Promise.all(
          n.map(s => {
            switch (s) {
              case 'exports':
                return a
              case 'module':
                return i
              default:
                return e(s)
            }
          })
        ).then(e => {
          const s = t(...e)
          return a.default || (a.default = s), a
        })
      }))
  }
}
define('./sw.js', ['./workbox-ea903bce'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/GSz9qhRGKC7qS7vqueaPy/_buildManifest.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/GSz9qhRGKC7qS7vqueaPy/_ssgManifest.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/109-e03b9801ea264ef90897.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/1bfc9850-2f9766d778166990fcb3.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/249-3caa65fa1240cb8415a8.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/252f366e-715e994444de56cbbf92.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/27-d0ea4fe3b445566e0496.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/297-ba7da716e0e05e5a4444.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/433-b948c39ed2770f6a764c.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/461-27285d7dd180cf2c390c.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/572-6700e76f1121206ba6f4.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/70b165ca-346ae96044dba610d799.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/894-107232f0c384eea322f0.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/914-95a6ee0fc5e196aa802c.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/95b64a6e-e119003f2c5d71609214.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/framework-e4c3747d6bc556d57d87.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/main-85ca460f59960b26ad8c.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/pages/_app-2c50fec8004ae6e413e9.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/pages/_error-17e51c17671ff335d9dc.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/pages/index-741d291f321c25658340.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url:
            '/_next/static/chunks/pages/px-converter-b7f32a065c74f78a93e1.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url:
            '/_next/static/chunks/pages/secure-random-password-generator-810e9eb93a83483582d7.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/pages/word-count-5a94959c7d6a4cebc4bf.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/polyfills-8683bd742a84c1edd48c.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/chunks/webpack-52fad6895a24a90b56be.js',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        {
          url: '/_next/static/css/e2bb55241b9412bb174e.css',
          revision: 'GSz9qhRGKC7qS7vqueaPy',
        },
        { url: '/favicon.ico', revision: 'b3b1781becd0606a9a856174c4b9fedd' },
        {
          url: '/images/arrow-right-solid.svg',
          revision: '3aa5dcbccaab655636f1682bfe2345d2',
        },
        {
          url: '/images/exchange-alt-solid.svg',
          revision: '8ad4b6e8a9389d116f7d2dbf01be9982',
        },
        {
          url: '/images/tools-solid.svg',
          revision: '5eddf805e914ed84f268cc2036844cd4',
        },
        {
          url: '/images/undraw_Live_collaboration_re_60ha.svg',
          revision: '23e0edcc8ab1f3c94ab6ab3e1712b5be',
        },
        {
          url: '/images/undraw_at_home_octe.svg',
          revision: 'fa3d3993985fc8d3fa854bd67de21aa0',
        },
        {
          url: '/images/undraw_authentication_fsn5.svg',
          revision: '06483b459d565893339a7a5efcc09a76',
        },
        {
          url: '/images/undraw_convert_2gjv.svg',
          revision: '0bd59cd679d479ff8f8bb09988aa5361',
        },
        { url: '/robots.txt', revision: 'db76fe8681f6c19c4a0d3d8ed3bf0227' },
        { url: '/sitemap.xml', revision: '67ef336dde75eafdc6bfe09647866cf5' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^\/api\/(?!auth\/callback\/).*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^\/(?!api\/).*$/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      'GET'
    )
})
