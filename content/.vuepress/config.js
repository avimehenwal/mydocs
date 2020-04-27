// https://github.com/vuejs/vuepress/issues/1083
require('dotenv').config()
const webpack = require('webpack')

const extendsNetworks = {
  email: {
    sharer: 'mailto:?subject=@title&body=@url%0D%0A%0D%0A@description',
    type: 'direct',
    icon: '/email.png',
  },
}

module.exports = {
  configureWebpack: (config) => {
    return { plugins: [
      new webpack.EnvironmentPlugin({ ...process.env })
    ]}
  },
  title: 'My Notes',
  description: 'Blog about my development journey',
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      }
    ],
  ],
  themeConfig: {
    author: '@avimehenwal',
    repo: 'avimehenwal/mydocs',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    logo: '/logo4.svg',
    // displayAllHeaders: true,               // Default: false
    activeHeaderLinks: true,
    sidebar: 'auto',
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tags', link: '/tags.html' },
      { text: 'Mobile', link: '/mobiledevelopment/' },
      { text: 'Web', link: '/webdevelopment/' },
      { text: 'Guide', link: '/guide/' },
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
    // require('/home/avi/REPO/mydocs/node_modules/vue-google-charts/index.js'),
    "vuepress-plugin-auto-sidebar",
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    'reading-progress',
    '@vuepress/pwa',
    'flowchart',
    // @goy/vuepress-plugin-svg-icons didnt work
    // [
    //   'register-components',
    //   {
    //     componentsDir: somepath
    //   }
    // ],
    [
      'social-share',
      {
        networks: ['twitter', 'facebook', 'reddit', 'telegram', 'whatsapp'],
        twitterUser: 'avimehenwal',
        fallbackImage: '/hero.png',
        autoQuote: true,
        isPlain: false,
        extendsNetworks,
      }
    ],
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
        'ga': process.env.GA
      }
    ],
    [
      'vuepress-plugin-google-tag-manager',
      {
        gtm: process.env.GTM
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
