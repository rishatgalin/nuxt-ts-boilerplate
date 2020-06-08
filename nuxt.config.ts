export default {
  mode: 'universal',
  head: {
    title: 'nuxt-ts-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1, maximum-scale=5' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    htmlAttrs: {
      lang: 'ru'
    },
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900' }
    ]
  },
  globalName: 'app',
  globals: {
    id: globalName => `${globalName}`,
  },
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
  },
  serverMiddleware: ['~/serverMiddleware/redirects.ts'],

  loading: { color: 'red' },
  css: [ '~/assets/css/reset.css', '~/assets/css/flexboxgrid.css', '~/assets/css/common.css' ],

  plugins: [
    '~/plugins/index.ts'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  buildModules: [
    '@nuxt/typescript-build',
    '@aceforth/nuxt-optimized-images'
  ],

  optimizedImages: { optimizeImages: true }
}
