<template>
  <Home>
    <div class="overflow-hidden rounded-t-box shadow-md mb-3">
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
