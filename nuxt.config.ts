import { Configuration } from "@nuxt/types";

const config: Configuration = {
  srcDir: "src",
  // Define your configuration with auto-completion & type checking
  buildModules: [
    "@nuxt/typescript-build",
    "nuxt-typed-vuex",
    "@nuxtjs/tailwindcss"
  ],

  plugins: [
    //
    "~/plugins/fields",
    {src: "~/plugins/audio", mode: 'client'}
  ],

  modules: [
    //
    "@nuxtjs/axios"
  ],

  axios: {
    // proxyHeaders: false
    proxy: false
  },

  proxy: {},

  build: {
    transpile: [/typed-vuex/]
  }
};

export default config;
