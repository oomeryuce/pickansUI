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
    <div class="col-span-12 md:col-span-12 lg:col-span-10 xl:col-span-7">
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
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import SideBar from "~/components/SideBar.vue";
// import FeedHeader from '~/components/Profile/FeedHeader.vue'
// import FeedEnd from '~/components/Profile/FeedEnd.vue'

export default defineComponent({
  name: "ProfileTemplate",
  components: {
    SideBar,
  },
});
</script>
