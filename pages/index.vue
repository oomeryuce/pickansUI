<template>
  <Home>
    <FeedHeader />
    <FeedRank />
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
import FeedHeader from "~/components/FeedHeader";
import FeedRank from "~/components/FeedRank";

export default {
  name: "HomePage",
  components: {
    Home,
    FeedHeader,
    FeedRank,
  },

  head: {
    title: "My Feed",
  },
};
</script>
