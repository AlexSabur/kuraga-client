import { Configuration } from "@nuxt/types";

const config: Configuration = {
  srcDir: "src",
  // Define your configuration with auto-completion & type checking
  buildModules: [
    "@nuxt/typescript-build",
    "nuxt-typed-vuex",
    "@nuxtjs/tailwindcss"
  ],

  modules: ["@nuxtjs/axios"],

  axios: {
    // proxyHeaders: false
  },

  build: {
    transpile: [/typed-vuex/]
  }
};

export default config;
