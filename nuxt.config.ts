import { Configuration } from "@nuxt/types";
const isDev = process.env.NODE_ENV === "development";

const config: Configuration = {
  srcDir: "src",

  server: !isDev ? {
    // host: '84.201.135.85',
    host: '0.0.0.0',
    port: 80,
  }: undefined,
  // Define your configuration with auto-completion & type checking
  buildModules: [
    "@nuxt/typescript-build",
    "nuxt-typed-vuex",
    "@nuxtjs/tailwindcss"
  ],

  plugins: [
    //
    "~/plugins/fields",
    { src: "~/plugins/audio", mode: "client" }
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
