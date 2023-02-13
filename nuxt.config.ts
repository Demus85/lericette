// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: [
      // Style file
      '@assets/css/main.scss'
    ]
  },
  components: [
    {path:'~/components/', pathPrefix: false,},
  ],
  modules: [
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
