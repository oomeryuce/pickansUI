<template>
  <div
    class="
      container
      grid
      items-stretch
      grid-cols-12
      gap-2
      px-2
      mx-auto
      md:gap-4
      xl:grid-cols-8
      2xl:px-5
    "
  >
    <SideBar active-page="more" />
    <div class="z-30 col-span-12 md:col-span-9 lg:col-span-10 xl:col-span-7">
      <div class="flex flex-row items-start flex-grow-0 w-full max-w-full py-2">
        <div class="flex-1 w-full max-w-full lg:w-auto">
          <profile-feed-header />
          <div
            class="
              overflow-hidden
              border
              rounded-t-lg
              dark:border-brand-grey-800
              my-5
            "
          >
            <question-post />
            <question-post />
          </div>
          <profile-feed-end />
        </div>
        <div class="flex-shrink-0 hidden w-84 xl:w-96 lg:block lg:pl-5">
          <UserCard />
          <ProfileInfo />
          <ProfileCounters />
          <ProfileSkills />
          <ProfileRecentActivity />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import ProfileCounters from "~/components/Profile/ProfileCounters.vue";
import ProfileInfo from "~/components/Profile/ProfileInfo.vue";
import ProfileSkills from "~/components/Profile/ProfileSkills.vue";
import UserCard from "~/components/Profile/UserCard.vue";
import SideBar from "~/components/SideBar.vue";
import ProfileRecentActivity from "~/components/Profile/ProfileRecentActivity.vue";
// import FeedHeader from '~/components/Profile/FeedHeader.vue'
// import FeedEnd from '~/components/Profile/FeedEnd.vue'

export default defineComponent({
  name: "ProfilePage",
  components: {
    SideBar,
    UserCard,
    ProfileInfo,
    ProfileCounters,
    ProfileSkills,
    ProfileRecentActivity,
    // FeedHeader,
    // FeedEnd,
  },
});
</script>
