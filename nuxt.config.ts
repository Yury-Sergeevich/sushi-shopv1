// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss"],
  modules: ["@nuxtjs/color-mode", "radix-vue/nuxt"],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
});
