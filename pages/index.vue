<template>
  <Home>
    <div
      class="
        overflow-hidden
        border border-theme-base-100
        rounded-t-lg
        dark:border-theme-base-700
      "
    >
      <QuestionPost />
      <QuestionPost />
      <QuestionPost />
      <QuestionPost />
    </div>
  </Home>
</template>

<script>
import Home from "~/components/Home.vue";

export default {
  name: "HomePage",
  components: {
    Home,
  },

  head: {
    title: "My Feed",
  },
};
</script>
