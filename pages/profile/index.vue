<template>
  <div>
    <profile-template>
      <template slot="feed">
        <profile-feed-header />
        <div
          class="
            overflow-hidden
            border border-theme-base-100
            rounded-t-lg
            dark:border-theme-base-700
            my-5
          "
        >
          <question-post />
          <question-post />
        </div>
        <profile-feed-end />
      </template>
      <template slot="rightSide">
        <UserSideBar />
      </template>
    </profile-template>
  </div>
</template>

<script>
import UserSideBar from "~/components/Profile/UserSideBar";

export default {
  name: "ProfilePage",
  components: { UserSideBar },
};
</script>
