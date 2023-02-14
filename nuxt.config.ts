// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // Style file
    'assets/css/main.scss',
    // Declare vuetify
    'vuetify/lib/styles/main.sass',
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
})
