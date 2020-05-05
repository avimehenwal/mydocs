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
  title: 'Avi Mehenwal',
  description: 'A Blog about my development journey',
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
    // Firebase settings
    // [
    //   "script",
    //   {
    //     src: "/__/firebase/7.14.2/firebase-app.js"
    //   }
    // ],
    // [
    //   "script",
    //   {
    //     src: "https://www.gstatic.com/firebasejs/5.5.6/firebase-auth.js"
    //   }
    // ],
    // [
    //   "script",
    //   {
    //     src: "/__/firebase/7.14.2/firebase-firestore.js"
    //   }
    // ],
    // [
    //   "script",
    //   {
    //     src: "https://www.gstatic.com/firebasejs/5.5.6/firebase-functions.js"
    //   }
    // ],
    // [
    //   "script",
    //   {
    //     src: "/__/firebase/init.js"
    //   }
    // ],
    // [
    //   "script",
    //   {},
    //   `var config = {
    //     apiKey: "apikey",
    //     authDomain: "app.firebaseapp.com",
    //     databaseURL: "https://app.firebaseio.com",
    //     projectId: "appname",
    //     storageBucket: "appname.appspot.com",
    //     messagingSenderId: "12345"
    //   };
    //   firebase.initializeApp(config);
    //   const firestore = firebase.firestore();
    //   const settings = { /* your settings... */
    //       timestampsInSnapshots: true
    //   };
    //   firestore.settings(settings);`
    // ],
  ],
  themeConfig: {
    author: '@avimehenwal',
    repo: 'avimehenwal/avimehenwal2',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    logo: '/logo4.svg',
    // displayAllHeaders: true,               // Default: false
    activeHeaderLinks: true,
    sidebar: 'auto',
    sidebarDepth: 2,
    searchPlaceholder: 'Search...',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tags', link: '/tags.html' },
      {
        text: 'Categories',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Programming', link: '/programming/' },
          { text: 'TIL: Today I Learnt', link: '/today-i-learnt/' },
          { text: 'Cloud Computing', link: '/cloud/' },
          { text: 'Web Development', link: '/webdevelopment/' },
          { text: 'Cryptocurrency', link: '/crypto/' },
          { text: 'Mobile Development', link: '/mobiledevelopment/' },
          { text: 'Generic Blog Posts', link: '/posts/' },
          { text: 'Rough Notes', link: '/notes/' },
          { text: 'Lifestyle', link: '/lifestyle/' },
        ]
      },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'English', link: '/language/english/' },
      //     { text: 'Deutsch', link: '/language/deutsch/' }
      //   ]
      // },
      {
        text: 'Sister Sites',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Static: avimehenwal Blog v1', link: 'https://avimehenwal.in/' },
          { text: 'SPA: Anime fan project', link: 'https://fangallery.netlify.app/' },
          { text: 'SPA: COVID Visualization Dashboard', link: 'https://covid-visualization.netlify.app/' },
          { text: 'SPA: Tic Tac Toe Game Implementation', link: 'https://peaceful-minsky-f655a4.netlify.app/' },
          { text: 'Static: My first portfolio', link: 'https://avimehanwal.netlify.app/' },
          { text: 'Static: Just another sample site', link: 'https://german.netlify.app/' },
        ]
      },
    ],
  },
  plugins: [
    "vuepress-plugin-auto-sidebar",
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    'reading-progress',
    '@vuepress/pwa',
    'flowchart',
    'check-md',
    [ 'disqus', { shortname: 'mydocs-1' } ],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    [ '@vuepress/google-analytics', { 'ga': process.env.GA } ],
    [ 'vuepress-plugin-google-tag-manager', { gtm: process.env.GTM } ],
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
        hostname: 'https://avimehenwal2.netlify.app/'
      },
    ],
    [
      'vuepress-plugin-mailchimp',
      {
        endpoint: "https://visuallydefine.us17.list-manage.com/subscribe/post?u=531256bc9c767844eafc462b3&amp;id=2780c21cd2"
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
  ],
  markdown: {
    plugins: [
      'markdown-it-footnote',
      'markdown-it-deflist',
      'markdown-it-abbr',
    ]
  }
}
