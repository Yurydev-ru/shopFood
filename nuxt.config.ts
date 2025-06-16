import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/color-mode'],

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
})
