import { resolve } from 'path'

// eslint-disable-next-line nuxt/no-cjs-in-config
const webpack = require('webpack')
// const fs = require('fs')
// // eslint-disable-next-line nuxt/no-cjs-in-config
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// // eslint-disable-next-line nuxt/no-cjs-in-config
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// // eslint-disable-next-line nuxt/no-cjs-in-config
// const webpack = require('webpack')
// const files = fs.readdirSync('./pages/')
// const htmlPlugins = files.map((file) => {
//   return new HtmlWebpackPlugin({
//     template: `./pages/${file}/index.html`,
//     filename: `./${file}/index.html`,
//     chunks: ['main'],
//   })
// })
// const entries = {}
// for (const file of files) {
//   entries[`${file}/index.js`] = `./pages/${file}/index.js`
// }
// console.log(entries)
const build =
  process.env.NODE_ENV === 'production'
    ? {
        extend(config, ctx) {
          if (ctx && ctx.isClient) {
            // config.optimization.splitChunks.maxSize = 4096
            // config.output.globalObject = 'this'
            if (!this.dev) {
              config.plugins.push(
                new webpack.optimize.LimitChunkCountPlugin({
                  maxChunks: 1,
                })
              )
            }
          }
        },
        loaders: {
          cssModules: {
            modules: true,
            localIdentName: '[local]',
          },
        },
        scss: {
          cssModules: {
            modules: true,
            localIdentName: '[local]',
          },
        },
        optimization: {
          splitChunks: {
            chunks: 'async',
            automaticNameDelimiter: '.',
          },
        },
        splitChunks: {
          pages: false,
          vendor: false,
          commons: false,
          runtime: false,
          layouts: false,
        },
        filenames: {
          app: () => '[name].js',
          font: () => '[name].[ext]',
          img: () => '[name].[ext]',
        },
        extractCSS: true,
        // optimization: {
        //   splitChunks: {
        //     cacheGroups: {
        //       styles: {
        //         name: 'styles',
        //         test: /\.(css|vue)$/,
        //         chunks: 'all',
        //         enforce: true,
        //       },
        //     },
        //     chunks: 'all',
        //     automaticNameDelimiter: '.',
        //     name: undefined,
        //   },
        //   minimize: true,
        // },
      }
    : {}
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Global variables and mixins
  styleResources: {
    scss: ['~/assets/scss/_mixins.scss', '~/assets/scss/_variables.scss'],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.ts' },
    { src: '~/plugins/modal.ts' },
    { src: '~/plugins/services/index.ts' },
    { src: '~/plugins/repositories/index.ts' },
    { src: '~/plugins/notification' },
    { src: '~/plugins/vue-select.js' },
  ],
  alias: {
    atoms: resolve(__dirname, 'components/atoms'),
    molecules: resolve(__dirname, 'components/molecules'),
    organisms: resolve(__dirname, 'components/organisms'),
    templates: resolve(__dirname, 'components/templates'),
    icons: resolve(__dirname, 'assets/icons'),
    services: resolve(__dirname, './services'),
    directives: resolve(__dirname, './directives'),
    repositories: resolve(__dirname, './repositories'),
    models: resolve(__dirname, './models'),
    plugins: resolve(__dirname, './plugins'),
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',

    '@nuxt/typescript-build',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['en', 'ru', 'kk'],
    defaultLocale: 'ru',
    vueI18n: {
      locales: [
        { code: 'kk', iso: 'kk-KK', file: 'kk.json', name: 'Kazakh' },
        { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Russian' },
        { code: 'eng', iso: 'en-EN', file: 'en.json', name: 'English' },
      ],
      messages: {
        kk: {
          suistainability: require('./locales/Suistainability/kk.json'),
          kazContent: require('./locales/KazContent/kk.json'),
          home: require('./locales/home/kk.json'),
          news: require('./locales/news/kk.json'),
          relation: require('./locales/relation/kk.json'),
          company: require('./locales/company/kk.json'),
          contact: require('./locales/Contact/kk.json'),
          career: require('./locales/career/kk.json'),
          operation: require('./locales/operations/kk.json'),
          products: require('./locales/Products/kk.json'),
          header: require('./locales/header/kk.json'),
          project: require('./locales/project/kk.json'),
          privacy: require('./locales/privacy/kk.json'),
        },
        ru: {
          suistainability: require('./locales/Suistainability/ru.json'),
          kazContent: require('./locales/KazContent/ru.json'),
          home: require('./locales/home/ru.json'),
          news: require('./locales/news/ru.json'),
          relation: require('./locales/relation/ru.json'),
          company: require('./locales/company/ru.json'),
          contact: require('./locales/Contact/ru.json'),
          career: require('./locales/career/ru.json'),
          operation: require('./locales/operations/ru.json'),
          products: require('./locales/Products/ru.json'),
          header: require('./locales/header/ru.json'),
          project: require('./locales/project/ru.json'),
          privacy: require('./locales/privacy/en.json'),
        },
        en: {
          suistainability: require('./locales/Suistainability/en.json'),
          kazContent: require('./locales/KazContent/en.json'),
          home: require('./locales/home/en.json'),
          news: require('./locales/news/en.json'),
          relation: require('./locales/relation/en.json'),
          company: require('./locales/company/en.json'),
          contact: require('./locales/Contact/en.json'),
          career: require('./locales/career/en.json'),
          operation: require('./locales/operations/en.json'),
          products: require('./locales/Products/en.json'),
          header: require('./locales/header/en.json'),
          project: require('./locales/project/en.json'),
          privacy: require('./locales/privacy/en.json'),
        },
      },
      loadLanguagesAsync: true,
      langDir: '~locales',
    },
  },
  router: {
    mode: 'hash',
    base: '/vue',
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/vue',
        components: {
          default: resolve(__dirname, 'pages/index'), // or routes[index].component
        },
      })
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build,
  // extend(config, { isClient }) {
  //   if (isClient) {
  //     console.log(config.entry) // { app: [ "path/to/client.js", "eventsource-polyfill", "etc..." ] } (currently undefined)
  //   } else {
  //     console.log(config.entry) // { app: [ "path/to/server.js" ] } (currently undefined)
  //   }
  // config.entry = {
  // ...entries,
  // hot: 'webpack/hot/dev-server.js',
  // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
  // }
  // This is ok
  // for (const [key, value] of Object.entries(entries)) {
  //   config.entry[key] = resolve(value)
  // }
  // config.entry.custom = resolve('custom-entry.js')
  // Throws error "entry.app is reserved by Nuxt"
  // Could use Object.defineProperty for the
  // config object passed to build.extend to
  // throw an error when attempting to set entry.app
  // config.entry.app = resolve('app.js')
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: '[name].css',
  //   }),
  //   new webpack.HotModuleReplacementPlugin(),
  // ].concat(htmlPlugins),
  // },
}
