<template>
  <div>
    <UserCard v-show="userCard" />
    <ProfileInfo />
    <ProfileCounters />
    <ProfileSkills />
    <ProfileRecentActivity />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import ProfileCounters from "~/components/Profile/ProfileCounters.vue";
import ProfileInfo from "~/components/Profile/ProfileInfo.vue";
import ProfileSkills from "~/components/Profile/ProfileSkills.vue";
import UserCard from "~/components/Profile/UserCard.vue";
import ProfileRecentActivity from "~/components/Profile/ProfileRecentActivity.vue";

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
  },
});
</script>
