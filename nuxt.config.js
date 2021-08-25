export default {
  mode: "spa",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pickans",
    // titleTemplate: 'Knowledge Sharing Platform | %s',
    titleTemplate: "%s | Pickans",
    htmlAttrs: {
      lang: "en",
      class: ["antialiased"],
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  buildDir: "nuxt-dist",

  loading: {
    color: "#0ea5e9",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://composition-api.nuxtjs.org/getting-started/setup
    "@nuxtjs/composition-api",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://image.nuxtjs.org/setup
    "@nuxt/image",
    // https://google-fonts.nuxtjs.org/setup
    "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://i18n.nuxtjs.org/setup
    "nuxt-i18n",
    // Firebase
    "@nuxtjs/firebase",
  ],

  /*
  serverMiddleware: [
    {
      path: "/api/v1",
      handler: "~/server/rest-api",
    },
  ], */

  vite: {
    /* options for vite */
    vue: {
      /* options for vite-plugin-vue2 */
    },
  },

  tailwindcss: {
    jit: true,
  },

  firebase: {
    config: {
      apiKey: "AIzaSyC78cMNeu8zB72J0wlbxG6Kkv0tX_jnzFc",
      authDomain: "pickans-ef1dc.firebaseapp.com",
      databaseURL: "https://pickans-ef1dc.firebaseio.com",
      projectId: "pickans-ef1dc",
      storageBucket: "pickans-ef1dc.appspot.com",
      messagingSenderId: "660052866177",
      appId: "1:660052866177:web:cdef1f0aa880c610d8c980",
    },
    services: {
      auth: {
        persistence: "local", // default
        /* initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false,
        },
        ssr: false, // default
        emulatorPort: 9099,
        emulatorHost: 'http://localhost', */
      },
      // firestore: true,
      // functions: true,
      // storage: true,
      // database: true,
      // messaging: true,
      // performance: true,
      // analytics: true,
      // remoteConfig: true,
    },
  },

  googleFonts: {
    download: true,
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
