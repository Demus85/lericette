import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // Style file
    'assets/css/main.scss',
    // Declare vuetify
    'vuetify/lib/styles/main.sass',
    //Vuetify's mdi icons
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  components: [
    {path:'~/components/', pathPrefix: false,},
  ],
  sourcemap: {
    server: false,
    client: false,
  },
  modules: [
    'nuxt-icon',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true,
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
      },
    ],
  ],
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins.push(
        vuetify({
          styles: { configFile: resolve('./assets/css/settings.scss') },
        })
      )
    }
  }
})
