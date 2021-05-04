const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  const pages = await globby([
    'pages/**/*{.js,.mdx}',
    '_posts/*{.md,.mdx}',
    '!pages/_*.js',
    '!pages/api',
    '!pages/**/[slug].js',
  ])
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map(page => {
                const path = page
                  .replace('pages', '')
                  .replace('_posts', '/posts')
                  .replace('.js', '')
                  .replace('.md', '')
                  .replace('.mdx', '')
                const route = path === '/index' ? '' : path

                return `
                        <url>
                            <loc>${`https://handy-tools.dastasoft.com${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
