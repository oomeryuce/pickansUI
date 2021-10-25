<template>
  <div>
    <SideBar active-page="feed">
      <div
        class="col-span-12 md:pt-2 min-h-screen"
        :class="{ 'md:col-span-8 lg:col-span-8 xl:col-span-6': right }"
      >
        <slot></slot>
      </div>
      <div
        v-if="right"
        class="
          col-span-2
          hidden
          sm:hidden
          md:block
          lg:block
          xl:block
          md:pt-2 md:col-span-4
          lg:col-span-4
          xl:col-span-2
        "
      >
        <SearchBar />
        <TopQuestions />
        <TrendingExperts />
        <FollowTags />
      </div>
    </SideBar>
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

  props: {
    right: {
      type: Boolean,
      default: true,
    },
  },
});
</script>
