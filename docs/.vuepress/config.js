module.exports = {
  title: 'Mobile Development',
  description: 'Blog about Mobile development using native script',
  themeConfig: {
    logo: '/logo.png',
    // displayAllHeaders: true,               // Default: false
    activeHeaderLinks: true,
    sidebar: 'auto',
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Mobile Development', link: '/mobiledevelopment/' },
      // Language
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
  },
  plugins: [
    "vuepress-plugin-auto-sidebar",
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/pwa',
    'social-share',
    'flowchart',
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