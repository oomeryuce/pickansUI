<template>
  <div>
    <profile-template>
      <template slot="feed">
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
