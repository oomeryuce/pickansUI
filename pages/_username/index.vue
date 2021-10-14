<template>
  <div>
    <DefaultStructure :right="false">
      <div v-if="userDetail && !userDetail.error && !loading">
        <div class="col-span-12">
          <UserHero
            :active="activeTab"
            :user="userData"
            :is-auth-user="isAuthUser"
            @tab-change="changeTab"
          />
        </div>
        <div
          class="
            col-span-12
            grid grid-cols-12
            flex flex-row
            items-start
            flex-grow-0
            py-2
          "
        >
          <div
            class="
              col-span-12
              lg:col-span-7
              xl:col-span-8
              flex-1
              w-full
              max-w-full
              lg:w-auto
            "
          >
            <div class="overflow-hidden rounded-t-box shadow-md">
              <question-post />
              <question-post />
            </div>
          </div>
          <div
            class="
              col-span-5
              xl:col-span-4
              flex-shrink-0
              hidden
              lg:block lg:pl-5
            "
          >
            <UserSideBar
              :is-auth-user="isAuthUser"
              :data="userData"
              :user-card="false"
            />
          </div>
        </div>
      </div>
      <div
        v-else-if="userDetail && userDetail.error"
        class="col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-7"
      >
        <user-not-found />
      </div>
      <div
        v-else
        class="col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-7"
      >
        <place-holder-loading />
      </div>
    </DefaultStructure>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import DefaultStructure from "~/components/DefaultStructure";
import UserSideBar from "~/components/profile/UserSideBar";
import UserHero from "~/components/profile/UserHero";
export default {
  name: "Index",
  components: { UserSideBar, UserHero, DefaultStructure },
  data() {
    return {
      activeTab: "profile",
      isAuthUser: false,
      userData: {
        username: null,
        name: null,
        avatar: null,
        createdAt: null,
        title: "",
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
  },

  watch: {
    userDetail(newData) {
      if (newData && !newData.error) {
        this.userData.avatar = newData.photoUrl ? newData.photoUrl : "";
        this.userData.name = newData.fullName ? newData.fullName : "";
        this.userData.username = newData.userName ? newData.userName : "";
        this.userData.bio = newData.bio ? newData.bio : "";
        this.userData.title = newData.title ? newData.title : "";
        this.userData.createdAt = newData.createdAt ? newData.createdAt : "";
        if (this.user && this.user.email === this.userDetail.email) {
          this.isAuthUser = true;
        }
      }
    },
  },

  beforeMount() {
    const param = this.$route.params.username;
    const userName = param.split("@")[1];
    if (userName) {
      this.getUserByUsername(userName);
    } else {
      this.$router.push("/404");
    }
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
