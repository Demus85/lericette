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
})
