<template>
  <div
    class="
      flex flex-row
      items-center
      justify-center
      overflow-auto
      text-sm
      font-bold
      tracking-wider
      uppercase
      text-bluish-gray-800
      dark:text-theme-base-200
      bg-white
      dark:bg-theme-base-900
      border border-theme-base-100
      dark:border-theme-base-700
      rounded-lg
    "
  >
    <a
      href="/@femmefroya"
      class="
        px-2
        sm:px-2
        md:px-6
        lg:px-6
        xl:px-6
        py-2
        border-b-2
        hover:bg-bluish-gray-100
        dark:hover:bg-theme-base-700
        border-pickans-light
      "
      >Recent</a
    ><a
      href="/@femmefroya/followers"
      class="
        px-2
        sm:px-2
        md:px-6
        lg:px-6
        xl:px-6
        py-2
        border-b-2 border-transparent
        hover:bg-bluish-gray-100
        dark:hover:bg-theme-base-700
      "
      >Question</a
    ><a
      href="/@femmefroya/following"
      class="
        px-2
        sm:px-2
        md:px-6
        lg:px-6
        xl:px-6
        py-2
        border-b-2 border-transparent
        hover:bg-bluish-gray-100
        dark:hover:bg-theme-base-700
      "
      >Answer</a
    >
    <a
      href="/@femmefroya/following"
      class="
        px-2
        sm:px-2
        md:px-6
        lg:px-6
        xl:px-6
        py-2
        border-b-2 border-transparent
        hover:bg-bluish-gray-100
        dark:hover:bg-theme-base-700
      "
      >Blog</a
    >
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "FeedHeader",
});
</script>
