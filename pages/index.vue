<template>
  <Home>
    <div class="overflow-hidden border rounded-t-lg dark:border-brand-grey-800">
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
