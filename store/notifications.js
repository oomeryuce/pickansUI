// import firebase from "firebase/app";

export const state = () => ({
  notificationData: [
    {
      id: 1,
      title: "test",
      content: "test content",
      type: 1,
      time: 1632925976797,
      read: false,
      user: {
        name: "Test user 1",
        pictureUrl: "",
        online: true,
      },
    },
    {
      id: 2,
      title: "test 2",
      content: "test 2 content",
      type: 1,
      time: 1632925976797,
      read: false,
      user: {
        name: "Test user 2",
        pictureUrl:
          "https://lh3.googleusercontent.com/a/AATXAJwYSQsULUt4_faRclsZiKAwJecC31zFrpbhk-z6=s96-c",
        online: false,
      },
    },
    {
      id: 3,
      title: "test 3",
      content: "test 3 content",
      type: 1,
      time: 1632925976797,
      read: false,
      user: {
        name: "Test user 3",
        pictureUrl: "",
        online: true,
      },
    },
    {
      id: 4,
      title: "test 4",
      content: "test 4 content",
      type: 1,
      time: 1632925976797,
      read: false,
      user: {
        name: "Test user 4",
        pictureUrl: "",
        online: true,
      },
    },
    {
      id: 5,
      title: "test 5",
      content: "test 5 content",
      type: 1,
      time: 1632925976797,
      read: true,
      user: {
        name: "Test user 5",
        pictureUrl:
          "https://lh3.googleusercontent.com/a/AATXAJwYSQsULUt4_faRclsZiKAwJecC31zFrpbhk-z6=s96-c",
        online: false,
      },
    },
    {
      id: 6,
      title: "test 6",
      content: "test 6 content",
      type: 1,
      time: 1632925976797,
      read: true,
      user: {
        name: "Test user 6",
        pictureUrl: "",
        online: true,
      },
    },
    {
      id: 7,
      title: "test 7",
      content: "test 7 content",
      type: 1,
      time: 1632925976797,
      read: true,
      user: {
        name: "Test user 7",
        pictureUrl: "",
        online: true,
      },
    },
    {
      id: 8,
      title: "test 8",
      content: "test 8 content",
      type: 1,
      time: 1632925976797,
      read: true,
      user: {
        name: "Test user 8",
        pictureUrl: "",
        online: true,
      },
    },
    {
      id: 9,
      title: "test 9",
      content: "test 9 content",
      type: 1,
      time: 1632925976797,
      read: true,
      user: {
        name: "Test user 9",
        pictureUrl:
          "https://lh3.googleusercontent.com/a/AATXAJwYSQsULUt4_faRclsZiKAwJecC31zFrpbhk-z6=s96-c",
        online: false,
      },
    },
    {
      id: 10,
      title: "test 10",
      content: "test 10 content",
      type: 1,
      time: 1632925976797,
      read: true,
      user: {
        name: "Test user 10",
        pictureUrl: "",
        online: true,
      },
    },
  ],
});
export const mutations = {
  setNotificationData(state, payload) {
    state.notificationData = payload;
  },
};
export const getters = {
  notificationData(state) {
    return state.notificationData;
  },
  notificationCount(state) {
    let count = 0;
    state.notificationData.forEach((item) => {
      if (!item.read) {
        count++;
      }
    });
    return count;
  },
};
export const actions = {
  async getNotificationData({ commit, state }, uid) {
    await commit("shared/setLoading", true, { root: true });
    await commit("setNotificationData", state.notificationData);
    commit("shared/setLoading", false, { root: true });
  },
};
