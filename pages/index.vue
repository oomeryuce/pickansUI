<template>
  <DefaultStructure>
    <FeedHeader />
    <FeedRank />
    <div class="overflow-hidden rounded-t-box shadow-md mb-3">
      <QuestionPost />
      <QuestionPost />
      <QuestionPost />
      <QuestionPost />
    </div>
  </DefaultStructure>
</template>

<script>
import DefaultStructure from "~/components/DefaultStructure";
import FeedHeader from "~/components/FeedHeader";
import FeedRank from "~/components/FeedRank";

export default {
  name: "HomePage",
  components: {
    DefaultStructure,
    FeedHeader,
    FeedRank,
  },

  head: {
    title: "My Feed",
  },
};
</script>
