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
    <div
      v-if="userDetail && !userDetail.error && !loading"
      class="col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-7"
    >
      <div class="col-12">
        <slot name="top"></slot>
      </div>
      <div class="flex flex-row items-start flex-grow-0 w-full max-w-full py-2">
        <div class="flex-1 w-full max-w-full lg:w-auto">
          <slot name="feed"></slot>
        </div>
        <div class="flex-shrink-0 hidden w-84 xl:w-96 lg:block lg:pl-5">
          <slot name="rightSide"></slot>
        </div>
      </div>
    </div>
    <div
      v-else-if="userDetail && userDetail.error"
      class="col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-7"
    >
      <user-not-found />
    </div>
    <div v-else class="col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-7">
      <place-holder-loading />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { mapState } from "vuex";
import SideBar from "~/components/SideBar.vue";
// import FeedHeader from '~/components/profile/FeedHeader.vue'
// import FeedEnd from '~/components/profile/FeedEnd.vue'

export default defineComponent({
  name: "ProfileTemplate",
  components: {
    SideBar,
  },

  computed: {
    ...mapState({
      userDetail: (state) => state.users.userDetail,
    }),

    loading() {
      return this.$store.getters["shared/loading"];
    },
  },
});
</script>
