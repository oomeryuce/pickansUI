<template>
  <div>
    <DefaultStructure :right="false">
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
          <div class="overflow-hidden rounded-t-box">
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
          </div>
        </div>
        <div
          class="col-span-5 xl:col-span-4 flex-shrink-0 hidden lg:block lg:pl-5"
        >
          <UserSideBar :user-card="true" />
        </div>
      </div>
    </DefaultStructure>
  </div>
</template>

<script>
import UserSideBar from "~/components/profile/UserSideBar";
import { DefaultStructure } from "~/nuxt-dist/components";

export default {
  name: "ProfilePage",
  components: { UserSideBar, DefaultStructure },
};
</script>
