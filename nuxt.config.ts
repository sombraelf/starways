export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Space Grotesk': true
      }
    }],
  ],

 
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
