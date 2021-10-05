<template>
  <div class="container mx-auto">
    <div
      class="
        relative
        grid grid-cols-12
        gap-2
        px-2
        mx-auto
        md:gap-4
        xl:grid-cols-8
        2xl:px-5
        overflow-y-auto
      "
    >
      <SideBar active-page="feed" />
      <div
        class="col-span-12 md:pt-2 md:col-span-8 lg:col-span-7 xl:col-span-5"
      >
        <slot></slot>
      </div>
      <div
        class="
          col-span-2
          hidden
          sm:hidden
          md:block
          lg:block
          xl:block
          md:pt-2 md:col-span-4
          lg:col-span-3
          xl:col-span-2
        "
      >
        <SearchBar />
        <TopQuestions />
        <TrendingExperts />
        <FollowTags />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import FollowTags from "~/components/FollowTags.vue";
// import QuestionPost from '~/components/question/QuestionPost.vue'
import SideBar from "~/components/SideBar.vue";
import TopQuestions from "~/components/TopQuestions.vue";
import TrendingExperts from "~/components/TrendingExperts.vue";
// import PickansCard from '~/components/UI/PickansCard.vue'
import SearchBar from "~/components/UI/SearchBar.vue";

export default defineComponent({
  name: "Home",
  components: {
    // QuestionPost,
    SideBar,
    // PickansCard,
    SearchBar,
    TopQuestions,
    TrendingExperts,
    FollowTags,
  },
});
</script>
