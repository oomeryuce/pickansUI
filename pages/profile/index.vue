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
        <UserSideBar :user-card="true" />
      </template>
    </profile-template>
  </div>
</template>

<script>
import UserSideBar from "~/components/profile/UserSideBar";

export default {
  name: "ProfilePage",
  components: { UserSideBar },
};
</script>
