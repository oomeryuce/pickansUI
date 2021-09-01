import firebase from "firebase/app";

export const state = () => ({
  user: null,
  isEmailExist: null,
  userData: null,
  userDetail: null,
});
export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setUserData(state, payload) {
    state.userData = payload;
  },
  setUserDetail(state, payload) {
    state.userDetail = payload;
  },
  setEmailStatus(state, payload) {
    state.isEmailExist = payload;
  },
};
export const getters = {
  user(state) {
    return state.user;
  },
  userData(state) {
    return state.userData;
  },
};
export const actions = {
  async getUserData({ commit }, uid) {
    commit("shared/setLoading", true, { root: true });
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
  },
  async getUserByUsername({ commit }, userName) {
    commit("shared/setLoading", true, { root: true });
    await this.$fire.firestore
      .collection("users")
      .where("userName", "==", userName)
      .get()
      .then((user) => {
        let response;
        user.forEach((doc) => {
          response = doc.data();
        });
        if (response) {
          commit("setUserDetail", response);
        } else {
          commit("setUserDetail", {
            error: true,
          });
        }
        commit("shared/setLoading", false, { root: true });
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
  emailCheck({ commit }, payload) {
    commit("shared/setLoading", true, { root: true });
    commit("shared/clearError", null, { root: true });
    firebase
      .auth()
      .fetchSignInMethodsForEmail(payload.email)
      .then((user) => {
        commit("shared/setLoading", false, { root: true });
        if (user.length > 0) {
          commit("setEmailStatus", {
            exist: true,
            loginType: user,
          });
        } else {
          commit("setEmailStatus", {
            exist: false,
            loginType: [],
          });
        }
      })
      .catch((error) => {
        commit("shared/setLoading", false, { root: true });
        commit("shared/setError", error, { root: true });
        console.log(error);
      });
  },
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
    commit("setUser", null);
  },
};
