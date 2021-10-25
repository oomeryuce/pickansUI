<template>
  <div
    class="
      mb-2
      bg-white
      border
      rounded-lg
      lg:flex-row
      dark:bg-brand-dark-grey-900 dark:border-brand-grey-800
    "
  >
    <div
      class="
        p-5
        text-base
        font-medium
        border-b
        dark:border-brand-grey-800
        text-brand-black
        dark:text-brand-grey-300
      "
    ></div>
    <div
      class="
        flex flex-row
        items-start
        text-brand-black
        dark:text-brand-grey-100
      "
    ></div>
  </div>
</template>

<script>
// import { PropType, defineComponent } from '@nuxtjs/composition-api'
import { defineComponent } from "@nuxtjs/composition-api";
// test
export default defineComponent({
  name: "Profile",
});
</script>
