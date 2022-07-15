export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'secondhome-dortmund.de',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Italiana' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Open+Sans:400,800italic,800,700italic,700,600italic,600,400italic,300italic,300'},
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,200,300,700'},
      { rel: 'stylesheet', hrefj: 'css/font-awesome.min.css'}
    ],
    script: [
      { src: '/js/jquery-1.11.1.min.js', type: 'text/javascript' },
      { src: '/js/bootstrap.js', type: 'text/javascript' },
      { src: '/js/responsiveslides.min.js', type: 'text/javascript' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
