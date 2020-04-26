module.exports = {
  title: 'Mobile Development',
  description: 'Blog about Mobile development using native script',
  themeConfig: {
    author: '@avimehenwal',
    repo: 'avimehenwal/mydocs',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
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
      { text: 'avimehenwal', link: 'https://avimehenwal.in/' },
    ],
  },
  plugins: [
    "vuepress-plugin-auto-sidebar",
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    'reading-progress',
    '@vuepress/pwa',
    'social-share',
    'flowchart',
    // @goy/vuepress-plugin-svg-icons didnt work
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://avi-docs.netlify.app/'
      },
    ],
    [
      'vuepress-plugin-mailchimp',
      {
        endpoint: "https://visuallydefine.us17.list-manage.com/subscribe/post?u=531256bc9c767844eafc462b3&amp;id=2780c21cd2"
      }
    ],
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
    [
      'disqus',
      {
        shortname: 'mydocs-1'
      }
    ],
    // [
    //   "vuepress-plugin-code-copy",
    //   {
    //     selector: String,
    //     align: String,
    //     color: String,
    //     backgroundTransition: Boolean,
    //     backgroundColor: String,
    //     successText: String
    //   }
    // ],
  ],
  markdown: {
    plugins: [
      'markdown-it-deflist',
      'markdown-it-abbr',
    ]
  }
}
