<template>
  <div>
    <UserCard v-show="userCard" />
    <ProfileInfo :is-auth-user="isAuthUser" :data="data" />
    <ProfileCounters />
    <ProfileSkills />
    <ProfileRecentActivity :data="data" />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import ProfileCounters from "~/components/profile/ProfileCounters.vue";
import ProfileInfo from "~/components/profile/ProfileInfo.vue";
import ProfileSkills from "~/components/profile/ProfileSkills.vue";
import UserCard from "~/components/profile/UserCard.vue";
import ProfileRecentActivity from "~/components/profile/ProfileRecentActivity.vue";

export default defineComponent({
  name: "UserSideBar",

  components: {
    UserCard,
    ProfileInfo,
    ProfileCounters,
    ProfileSkills,
    ProfileRecentActivity,
  },

  props: {
    userCard: {
      type: Boolean,
      default: true,
    },

    data: {
      type: Object,
      default: null,
    },

    isAuthUser: {
      type: Boolean,
    },
  },
});
</script>
