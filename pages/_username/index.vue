<template>
  <div>
    <profile-template>
      <template slot="top">
        <UserHero
          :active="activeTab"
          :user="dummyUser"
          @tab-change="changeTab"
        />
      </template>
      <template slot="feed">
        <question-post />
        <question-post />
      </template>
      <template slot="rightSide">
        <UserSideBar :user-card="false" />
      </template>
    </profile-template>
  </div>
</template>

<script>
import UserSideBar from "~/components/Profile/UserSideBar";
import UserHero from "~/components/Profile/UserHero";
export default {
  name: "Index",
  components: { UserSideBar, UserHero },
  data() {
    return {
      activeTab: "profile",
      dummyUser: {
        username: "sencer",
        name: "Sencer Soylu",
        avatar:
          "https://cdn.hashnode.com/res/hashnode/image/upload/v1619177937853/AKybvMQKA.jpeg?w=400&amp;h=400&amp;fit=crop&amp;crop=faces&amp;auto=compress",

        proffesion: "CTO of Pickans",
        bio: "Test",
        backGround: "",
      },
    };
  },

  methods: {
    changeTab(newTab) {
      this.activeTab = newTab;
    },
  },
};
</script>
