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
        <div class="overflow-hidden rounded-t-box shadow-md">
          <question-post />
          <question-post />
        </div>
      </template>
      <template slot="rightSide">
        <UserSideBar
          :is-auth-user="isAuthUser"
          :data="userData"
          :user-card="false"
        />
      </template>
    </profile-template>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
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

        proffesion: "",
        bio: "",
        backGround: "",
      },
    };
  },

  computed: {
    ...mapState({
      userDetail: (state) => state.users.userDetail,
    }),

    ...mapGetters({
      user: "users/user",
    }),

    isAuthUser() {
      return false;
    },
  },

  watch: {
    userDetail(newData) {
      if (newData) {
        this.userData.avatar = newData.photoUrl ? newData.photoUrl : "";
        this.userData.name = newData.displayName ? newData.displayName : "";
        this.userData.username = newData.userName ? newData.userName : "";
        this.userData.bio = newData.bio ? newData.bio : "";
        this.userData.proffesion = newData.tagline ? newData.tagline : "";
        if (this.user.email === this.userDetail.email) {
          this.isAuthUser = true;
        }
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
