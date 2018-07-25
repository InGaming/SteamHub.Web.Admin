
module.exports = {
  router: {
    middleware: 'auth'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'SteamHub Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SteamHub admin' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://steamhub.cn/logo_64x64.png' },
      { rel: 'stylesheet', href: 'https://fonts.lug.ustc.edu.cn/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    { src: '~plugins/nuxt-quill-plugin.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],
  css: [
    '~/assets/style/app.styl',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
