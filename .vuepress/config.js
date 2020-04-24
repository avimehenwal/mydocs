// https://github.com/Ileriayo/vuepress/blob/a2273b87130c8335ca08bc333863c88fe17c6dab/packages/docs/docs/.vuepress/config.js

module.exports = {
  title: 'avi mehenwal',
  description: 'avi mehenwal | My documents',
  head: [],
  markdown: {
    lineNumbers: true
  },
  serviceWorker: true,
  locales: {},
  // theme: 'cool',
  themeConfig: {
    lastUpdated: 'Last Updated',
    displayAllHeaders: true, // Default: false
    smoothScroll: true,
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Guide', link: '/guide/'},
      { text: 'Repo', link: 'https://github.com/avimehenwal/mydocs'}
      // { text: 'Home', link: '/'},
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-admonition'))
    }
  },
  plugins: [
    'vuepress-plugin-auto-sidebar',
    '@vuepress/register-components',
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    '@vuepress/pwa',
    'social-share',
    'check-md',
    'flowchart',
    [
      'vuepress-plugin-medium-zoom',
      {
        delay: 1000,
        options: {
          // margin: 24,
          // background: '#BADA55',
          // scrollOffset: 0,
        },
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-git-log',
      {
        additionalArgs: '--no-merge',
        onlyFirstAndLastCommit: true,
      },
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    // 'disqus': { /* options */ }
  ],
  // plugins: [
  //   ['@vuepress/back-to-top', true],
  //   ['@vuepress/pwa', {
  //     serviceWorker: true,
  //     updatePopup: true
  //   }],
    // ['@vuepress/medium-zoom', true],
    // ['@vuepress/google-analytics', {
    //   ga: 'UA-128189152-1'
    // }],
    // ['container', {
    //   type: 'vue',
    //   before: '<pre class="vue-container"><code>',
    //   after: '</code></pre>'
    // }],
    // ['container', {
    //   type: 'upgrade',
    //   before: info => `<UpgradePath title="${info}">`,
    //   after: '</UpgradePath>'
    // }],
    // ['flowchart']
  // ],
}
