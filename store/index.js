import Vue from "vue";
import Vuex from "vuex";
// import users from "./users";
// import shared from "./shared";
const users = require("./users");
const shared = require("./shared");

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    users,
    shared,
  },
});
