import firebase from "firebase/app";

export const state = () => ({
  user: null,
});
export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};
export const getters = {
  user(state) {
    return state.user;
  },
};
export const actions = {
  signUserUp({ commit }, payload) {
    commit("shared/setLoading", true, { root: true });
    commit("shared/clearError", null, { root: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
  signUserIn({ commit }, payload) {
    commit("shared/setLoading", true, { root: true });
    commit("shared/clearError", null, { root: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        const newUser = {
          id: user.user.uid,
          name: user.user.displayName,
          email: user.user.email,
          photoUrl: user.user.photoURL,
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
  signUserInGoogle({ commit }) {
    commit("shared/setLoading", true, { root: true });
    commit("shared/clearError", null, { root: true });
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
  signUserInFacebook({ commit }) {
    commit("shared/setLoading", true, { root: true });
    commit("shared/clearError", null, { root: true });
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
  signUserInGithub({ commit }) {
    commit("shared/setLoading", true, { root: true });
    commit("shared/clearError", null, { root: true });
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
  signUserInTwitter({ commit }) {
    commit("shared/setLoading", true, { root: true });
    commit("shared/clearError", null, { root: true });
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        };
        commit("setUser", newUser);
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
  autoSignIn({ commit }, payload) {
    commit("setUser", {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL,
    });
  },
  resetPasswordWithEmail({ commit }, payload) {
    const { email } = payload;
    commit("shared/setLoading", true, { root: true });
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        commit("shared/setLoading", false, { root: true });
        console.log("Email Sent");
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
  logout({ commit }) {
    firebase.auth().signOut();
    commit("shared/setUser", null, { root: true });
  },
};
