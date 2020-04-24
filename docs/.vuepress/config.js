module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  plugins: [
    "vuepress-plugin-auto-sidebar",
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/pwa',
    'social-share',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-00000000-0'
      }
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
  ]
}