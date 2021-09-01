<template>
  <div>
    <profile-template>
      <template slot="top">
        <UserHero
          :active="activeTab"
          :user="userData"
          @tab-change="changeTab"
        />
      </template>
      <template slot="feed">
        <div
          class="
            overflow-hidden
            border border-theme-base-100
            rounded-t-lg
            dark:border-theme-base-700
          "
        >
          <question-post />
          <question-post />
        </div>
      </template>
      <template slot="rightSide">
        <UserSideBar :user-card="false" />
      </template>
    </profile-template>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserSideBar from "~/components/Profile/UserSideBar";
import UserHero from "~/components/Profile/UserHero";
export default {
  name: "Index",
  components: { UserSideBar, UserHero },
  data() {
    return {
      activeTab: "profile",
      userData: {
        username: null,
        name: null,
        avatar: null,

        proffesion: "CTO of Pickans",
        bio: "Test",
        backGround: "",
      },
    };
  },

  computed: {
    ...mapState({
      userDetail: (state) => state.users.userDetail,
    }),
  },

  watch: {
    userDetail(newData) {
      if (newData) {
        this.userData.avatar = newData.photoUrl ? newData.photoUrl : "";
        this.userData.name = newData.displayName ? newData.displayName : "";
        this.userData.username = newData.userName ? newData.userName : "";
      }
    },
  },

  beforeMount() {
    const param = this.$route.params.username;
    const userName = param.split("@")[1];
    this.getUserByUsername(userName);
  },

  methods: {
    ...mapActions({
      getUserByUsername: "users/getUserByUsername",
    }),

    changeTab(newTab) {
      this.activeTab = newTab;
    },
  },
};
</script>
