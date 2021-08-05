import { store } from "~/store";
// const store = require("../store");

export default (to, from, next) => {
  console.log(store.getters.user);
  /*
  if (store.getters.user) {
    next();
  } else {
    next("/login");
  }
  */
};
