export const state = () => ({
  loading: false,
  error: null,
  theme: "light",
});
export const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
  clearError(state) {
    state.error = null;
  },
  setTheme(state, payload) {
    state.theme = payload;
  },
};
export const getters = {
  loading(state) {
    return state.loading;
  },
  error(state) {
    return state.error;
  },
  theme(state) {
    return state.theme;
  },
};
export const actions = {
  clearError({ commit }) {
    commit("clearError");
  },
  setError({ commit }, payload) {
    commit("setError", payload);
  },
  setTheme({ commit }, payload) {
    commit("setTheme", payload);
  },
  getTheme({ commit }) {
    let theme = localStorage.getItem("theme");
    if (!theme) {
      theme = "light";
      localStorage.setItem("theme", theme);
    }
    commit("setTheme", theme);
  },
};
