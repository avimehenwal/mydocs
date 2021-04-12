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
  /** NOTE able to load .dot files in component using raw-loader
   * webpack config as  a function
   *
   * https://vuepress.vuejs.org/config/#configurewebpack
   * https://github.com/search?q=raw-loader+extension%3Ajs+path%3Adocs%2F.vuepress%2F+filename%3Aconfig&type=Code&ref=advsearch&l=&l=
   */
  configureWebpack: (config, isServer) => {
    config.module
      .rule('raw')
      .test(/\.dot$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
    return {
      plugins: [
        new webpack.EnvironmentPlugin({ ...process.env })
      ]
    }
  },
  /**
   * webpack config as Object -> would be merged
   */
  configureWebpack: {
    resolve: {
      alias: {
        // Error: Cannot find module '@sc/firebase-database-rules.png
        '@sc': 'content/.vuepress/public/screenshots'
      }
    }
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
    // [
    //   "script",
    //   {
    //     src: "https://unpkg.com/@hpcc-js/wasm/dist/index.min.js",
    //     type: "javascript/worker"
    //     // type: "application/javascript/"
    //   }
    // ],
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
          { text: 'Business', link: '/business/' },
          { text: 'Language', link: '/language/' },
          { text: 'Mathematics', link: '/maths/' },
          { text: 'Tools', link: '/tools/' },
          { text: 'Operating Systems', link: '/operatingsystem/' },
        ]
      },
      { text: 'Tags', link: '/tags.html' },
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
          { text: 'Static: Python Tutorials', link: 'https://avi-python.netlify.app/' },
          { text: 'SPA: COVID Visualization Dashboard', link: 'https://covid-visualization.netlify.app/' },
          { text: 'SPA: Tic Tac Toe Game Implementation', link: 'https://peaceful-minsky-f655a4.netlify.app/' },
          { text: 'Static: My first portfolio', link: 'https://avimehanwal.netlify.app/' },
          { text: 'Static: Just another sample site', link: 'https://german.netlify.app/' },
          { text: 'static: @avi/vue-components', link: 'https://avi-vue-components.netlify.app/' },
          { text: 'static: my python notes', link: 'https://avi-python.netlify.app/' },
        ]
      },
    ],
  },
  plugins: [
    "vuepress-plugin-auto-sidebar",
    'vuepress-plugin-graphviz',                     // https://github.com/awwaiid/vuepress-plugin-graphviz
    '@vuepress/last-updated',
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    'reading-progress',
    '@vuepress/pwa',
    /** element-ui causes ERROR
     * assign.js?3f6b:1 Uncaught Error: Cannot find module 'core-js/library/fn/object/assign'
     */
    // 'element-ui',
    'flowchart',
    'check-md',
    // https://z3by.github.io/vuepress-tools/plugins/vuepress-plugin-web-monetization.html
    ['web-monetization', { 'address': process.env.ILPPointer }],
    ["live", { noSsr: true }],                               // https://github.com/vue-styleguidist/vuepress-plugin-live
    // default forest dark
    ['vuepress-plugin-mermaidjs', { theme: 'forest' }],
    ['disqus', { shortname: 'mydocs-1' }],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],
    ['@vuepress/google-analytics', { 'ga': process.env.GA }],
    ['vuepress-plugin-google-tag-manager', { gtm: process.env.GTM }],
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
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'quote',
        defaultTitle: 'Anonymous',
        before: '<article class="quote"><div class="body">',
        after: info => `</div><footer class="author">~ ${info}</footer></article>`,
      },
    ],
  ],
  markdown: {
    linkify: true,                // convert markdown link texts to links
    plugins: [
      'markdown-it-container',
      'markdown-it-footnote',
      'markdown-it-deflist',
      'markdown-it-imsize',
      'markdown-it-emoji',
      'markdown-it-todo',
      'markdown-it-abbr',
      'markdown-it-mark',
      'markdown-it-sup',
      'markdown-it-sub',
      'markdown-it-ins',
    ]
  },
  // https://github.com/vuejs/vuepress/issues/146
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
  }
}
