// import firebase from "firebase/app";

export const state = () => ({
  questionData: {
    question: "Test question",
    attachments: [],
    price: 10,
    privacy: true,
    difficulty: 10,
    priceRatio: 25,
    answerType: "media",
    deadLine: 240,
    donate: true,
    donateTo: 1,
    donateRatio: 50,
  },
});
export const mutations = {
  setQuestionData(state, payload) {
    state.questionData = payload;
  },
};
export const getters = {
  questionData(state) {
    return state.questionData;
  },
};
export const actions = {
  async getQuestionData({ commit, state }, uid) {
    await commit("shared/setLoading", true, { root: true });
    await commit("setQuestionData", state.questionData);
    commit("shared/setLoading", false, { root: true });
    /*
    await this.$fire.firestore
      .collection("users")
      .doc(uid)
      .get()
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        commit("setUserData", user.data());
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
      */
  },
  async updateQuestionData({ commit, dispatch }, payload) {
    await commit("shared/setLoading", true, { root: true });
    await commit("setQuestionData", payload.data);
    await dispatch("getQuestionData", 1);
    commit("shared/setLoading", false, { root: true });
    /*
    await this.$fire.firestore
      .collection("users")
      .doc(uid)
      .get()
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        commit("setUserData", user.data());
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
      */
  },
};
