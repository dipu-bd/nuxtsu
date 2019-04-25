import NuxtConfiguration from '@nuxt/config'
import pkg from './package.json'

const config: NuxtConfiguration = {
  build: {
    // https://nuxtjs.org/api/configuration-build
  },

  /* ----------------------------------------------------------------------- *\
  <<< Add configuration files
  \* ----------------------------------------------------------------------- */
  css: [
    // https://nuxtjs.org/api/configuration-css
    '~/assets/styles/main.styl',
  ],
  modules: [
    // https://nuxtjs.org/guide/modules
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  plugins: [
    // https://nuxtjs.org/guide/plugins/
    '~/plugins/vuetify',
  ],

  /* ----------------------------------------------------------------------- *\
  <<< Header configs
  \* ----------------------------------------------------------------------- */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /* ----------------------------------------------------------------------- *\
  <<< Setting up modules
  \* ----------------------------------------------------------------------- */
  loading: { color: '#3B8070' },
  env: {
    // https://nuxtjs.org/api/configuration-env
  },
  router: {
    // https://nuxtjs.org/api/configuration-router
    // middleware: ['auth'],
  },
  axios: {
    // https://axios.nuxtjs.org/options
  },
  auth: {
    // https://auth.nuxtjs.org/getting-started/options
  },
}

export default config
