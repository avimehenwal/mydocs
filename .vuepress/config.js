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
  themeConfig: {
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Guide', link: '/guide/'},
      { text: 'Repo', link: 'https://github.com/avimehenwal/mydocs'}
      // { text: 'Home', link: '/'},
    ]
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  },
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
