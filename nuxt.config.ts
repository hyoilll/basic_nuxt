// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/colors.scss" as *;'
        }
      }
    }
  },
})
