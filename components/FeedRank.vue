<template>
  <div
    class="
      relative
      flex flex-row
      justify-between
      min-w-0
      p-2
      mb-2
      text-sm
      font-semibold
      shadow-md
      bg-base-100
      rounded-box
    "
  >
    <div class="flex flex-row flex-1 overflow-auto" style="overflow: initial">
      <a
        href="/"
        class="
          text-pickans-light
          border-transparent border
          rounded-lg
          py-1
          text-sm
          md:text-base
          px-2
          md:px-3 md:mr-2
          flex flex-row
          items-center
          active
          hover:bg-bluish-gray-100
          dark:hover:bg-theme-base-800
          flex flex-row
          items-center
        "
        ><svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 448 512">
          <path
            d="M448 281.6c0-53.27-51.98-163.13-124.44-230.4-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512c.53 0 1.04-.08 1.58-.08.32 0 .6.08.92.08 1.88 0 3.71-.35 5.58-.42C352.02 507.17 448 406.04 448 281.6zm-416 0c0-50.22 47.51-147.44 136.05-237.09 27.38 27.45 52.44 56.6 73.39 85.47l24.41 33.62 26.27-32.19a573.83 573.83 0 0130.99-34.95C379.72 159.83 416 245.74 416 281.6c0 54.69-21.53 104.28-56.28 140.21 12.51-35.29 10.88-75.92-8.03-112.02a357.34 357.34 0 00-10.83-19.19l-22.63-37.4-28.82 32.87-25.86 29.5c-24.93-31.78-59.31-75.5-63.7-80.54l-24.65-28.39-24.08 28.87C108.16 287 80 324.21 80 370.41c0 19.02 3.62 36.66 9.77 52.79C54.17 387.17 32 337.03 32 281.6zm193.54 198.32C162.86 479.49 112 437.87 112 370.41c0-33.78 21.27-63.55 63.69-114.41 6.06 6.98 86.48 109.68 86.48 109.68l51.3-58.52a334.43 334.43 0 019.87 17.48c23.92 45.66 13.83 104.1-29.26 134.24-17.62 12.33-39.14 19.71-62.37 20.73-2.06.07-4.09.29-6.17.31z"
          ></path></svg
        ><span>{{ $t("feedRank.tab1") }}</span></a
      ><a
        href="#"
        class="
          feed-featured-content
          border-transparent border
          rounded-lg
          py-1
          text-sm
          md:text-base
          px-2
          md:px-3 md:mr-2
          flex flex-row
          items-center
          active
          hover:bg-bluish-gray-100
          dark:hover:bg-theme-base-800
          flex flex-row
          items-center
        "
        ><svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 512 512">
          <path
            d="M493.7 232.4l-140.2-35 66.9-83.3c5.2-6.5 4.7-15.5-1.1-21.3-5.9-5.8-14.8-6.3-21.3-1.1l-83.4 66.7-35-140c-6.1-24.4-41-24.4-47.2 0l-35 140.2-83.3-67c-6.5-5.2-15.5-4.8-21.3 1.1-5.8 5.8-6.3 14.8-1.1 21.4l66.7 83.4-140 35C7.5 235.2 0 244.7 0 256c0 10.2 6.5 20.7 18.4 23.6l140.2 35-66.9 83.3c-5.2 6.5-4.7 15.5 1.1 21.3 5.6 5.5 14.5 6.5 21.3 1.1l83.4-66.7 35 140c3 11.9 13.3 18.4 23.6 18.4 4.5 0 19.4-2.1 23.6-18.4l35-140.2 83.3 67c6.9 5.5 15.8 4.4 21.3-1.1 5.8-5.8 6.3-14.8 1.1-21.3l-66.7-83.4 139.9-35c11.7-2.9 18.5-13.1 18.5-23.6-.1-10.3-6.6-20.6-18.4-23.6zM296 296l-40 160-40-160-160-40 160-40 40-160 40 160 160 40-160 40z"
          ></path></svg
        ><span>{{ $t("feedRank.tab2") }}</span></a
      ><a
        href="#"
        class="
          border-transparent border
          rounded-lg
          py-1
          text-sm
          md:text-base
          px-2
          md:px-3 md:mr-2
          flex flex-row
          items-center
          active
          hover:bg-bluish-gray-100
          dark:hover:bg-theme-base-800
          flex flex-row
          items-center
        "
        ><svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 512 512">
          <path
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
          ></path></svg
        ><span>{{ $t("feedRank.tab3") }}</span></a
      >
    </div>
    <div class="relative flex flex-row items-center">
      <a
        href="#"
        aria-label="Change feed layout"
        class="flex flex-row items-center h-full button-transparent"
        ><svg
          class="w-5 h-5 mr-1 opacity-75 stroke-current"
          viewBox="0 0 55 55"
          fill="none"
        >
          <path
            d="M2 2h51v21H2V2zm0 30h51v21H2V32z"
            stroke="stroke-current"
            stroke-width="4"
          ></path></svg
        ><svg class="w-4 h-4 fill-current" viewBox="0 0 448 512">
          <path
            d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"
          ></path></svg
      ></a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
// import PickansCard from '~/components/UI/PickansCard.vue'

export default defineComponent({
  name: "FeedRank",
  // components: { PickansCard },
});
</script>
