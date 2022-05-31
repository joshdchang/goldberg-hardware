import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/global.css",
    '~/assets/theme.scss',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
  ],
  ssr: false,
  build: {
    transpile: ['primevue']
  },
  meta: {
    title: 'Goldberg Hardware',
    link: [
      // { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" }
    ]
  },
})
