export const state = () => ({
  loading: false,
  error: null,
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
};
export const getters = {
  loading(state) {
    return state.loading;
  },
  error(state) {
    return state.error;
  },
};
export const actions = {
  clearError({ commit }) {
    commit("clearError");
  },
  setError({ commit }, payload) {
    commit("setError", payload);
  },
};
