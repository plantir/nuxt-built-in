// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  hooks: {
    "vite:extendConfig": (config, { isClient, isServer }) => {
      if (isClient) config.resolve.alias.vue = "vue/dist/vue.esm-bundler.js";
    },
  },
});
