import Vue from "vue";
import { wrapFunctional } from "./utils";

const components = {
  FeedHeader: () =>
    import(
      "../../components/FeedHeader.vue" /* webpackChunkName: "components/feed-header" */
    ).then((c) => wrapFunctional(c.default || c)),
  FeedRank: () =>
    import(
      "../../components/FeedRank.vue" /* webpackChunkName: "components/feed-rank" */
    ).then((c) => wrapFunctional(c.default || c)),
  FetchState: () =>
    import(
      "../../components/FetchState.vue" /* webpackChunkName: "components/fetch-state" */
    ).then((c) => wrapFunctional(c.default || c)),
  FollowTags: () =>
    import(
      "../../components/FollowTags.vue" /* webpackChunkName: "components/follow-tags" */
    ).then((c) => wrapFunctional(c.default || c)),
  Home: () =>
    import(
      "../../components/Home.vue" /* webpackChunkName: "components/home" */
    ).then((c) => wrapFunctional(c.default || c)),
  Logo: () =>
    import(
      "../../components/Logo.vue" /* webpackChunkName: "components/logo" */
    ).then((c) => wrapFunctional(c.default || c)),
  NuxtLogo: () =>
    import(
      "../../components/NuxtLogo.vue" /* webpackChunkName: "components/nuxt-logo" */
    ).then((c) => wrapFunctional(c.default || c)),
  PageHeaderOld: () =>
    import(
      "../../components/PageHeaderOld.vue" /* webpackChunkName: "components/page-header-old" */
    ).then((c) => wrapFunctional(c.default || c)),
  SideBar: () =>
    import(
      "../../components/SideBar.vue" /* webpackChunkName: "components/side-bar" */
    ).then((c) => wrapFunctional(c.default || c)),
  TopQuestions: () =>
    import(
      "../../components/TopQuestions.vue" /* webpackChunkName: "components/top-questions" */
    ).then((c) => wrapFunctional(c.default || c)),
  TrendingExperts: () =>
    import(
      "../../components/TrendingExperts.vue" /* webpackChunkName: "components/trending-experts" */
    ).then((c) => wrapFunctional(c.default || c)),
  ProfileFeedEnd: () =>
    import(
      "../../components/Profile/FeedEnd.vue" /* webpackChunkName: "components/profile-feed-end" */
    ).then((c) => wrapFunctional(c.default || c)),
  ProfileFeedHeader: () =>
    import(
      "../../components/Profile/FeedHeader.vue" /* webpackChunkName: "components/profile-feed-header" */
    ).then((c) => wrapFunctional(c.default || c)),
  ProfileCounters: () =>
    import(
      "../../components/Profile/ProfileCounters.vue" /* webpackChunkName: "components/profile-counters" */
    ).then((c) => wrapFunctional(c.default || c)),
  ProfileInfo: () =>
    import(
      "../../components/Profile/ProfileInfo.vue" /* webpackChunkName: "components/profile-info" */
    ).then((c) => wrapFunctional(c.default || c)),
  ProfileSkills: () =>
    import(
      "../../components/Profile/ProfileSkills.vue" /* webpackChunkName: "components/profile-skills" */
    ).then((c) => wrapFunctional(c.default || c)),
  ProfileTemplate: () =>
    import(
      "../../components/Profile/ProfileTemplate.vue" /* webpackChunkName: "components/profile-template" */
    ).then((c) => wrapFunctional(c.default || c)),
  ProfileUserCard: () =>
    import(
      "../../components/Profile/UserCard.vue" /* webpackChunkName: "components/profile-user-card" */
    ).then((c) => wrapFunctional(c.default || c)),
  ProfileUserSideBar: () =>
    import(
      "../../components/Profile/UserSideBar.vue" /* webpackChunkName: "components/profile-user-side-bar" */
    ).then((c) => wrapFunctional(c.default || c)),
  UIPickansCard: () =>
    import(
      "../../components/UI/PickansCard.vue" /* webpackChunkName: "components/u-i-pickans-card" */
    ).then((c) => wrapFunctional(c.default || c)),
  UIPickansQuestionIcon: () =>
    import(
      "../../components/UI/PickansQuestionIcon.vue" /* webpackChunkName: "components/u-i-pickans-question-icon" */
    ).then((c) => wrapFunctional(c.default || c)),
  UISearchBar: () =>
    import(
      "../../components/UI/SearchBar.vue" /* webpackChunkName: "components/u-i-search-bar" */
    ).then((c) => wrapFunctional(c.default || c)),
  UIStarIcon: () =>
    import(
      "../../components/UI/StarIcon.vue" /* webpackChunkName: "components/u-i-star-icon" */
    ).then((c) => wrapFunctional(c.default || c)),
  HeroSimpleCentered: () =>
    import(
      "../../components/hero/HeroSimpleCentered.vue" /* webpackChunkName: "components/hero-simple-centered" */
    ).then((c) => wrapFunctional(c.default || c)),
  PostDetail: () =>
    import(
      "../../components/post/PostDetail.vue" /* webpackChunkName: "components/post-detail" */
    ).then((c) => wrapFunctional(c.default || c)),
  PostList: () =>
    import(
      "../../components/post/PostList.vue" /* webpackChunkName: "components/post-list" */
    ).then((c) => wrapFunctional(c.default || c)),
  PostListItem: () =>
    import(
      "../../components/post/PostListItem.vue" /* webpackChunkName: "components/post-list-item" */
    ).then((c) => wrapFunctional(c.default || c)),
  QuestionPost: () =>
    import(
      "../../components/question/QuestionPost.vue" /* webpackChunkName: "components/question-post" */
    ).then((c) => wrapFunctional(c.default || c)),
  AnimatePing: () =>
    import(
      "../../components/animate/AnimatePing.vue" /* webpackChunkName: "components/animate-ping" */
    ).then((c) => wrapFunctional(c.default || c)),
  AlertsAlertComponent: () =>
    import(
      "../../components/alerts/AlertComponent.vue" /* webpackChunkName: "components/alerts-alert-component" */
    ).then((c) => wrapFunctional(c.default || c)),
};

for (const name in components) {
  Vue.component(name, components[name]);
  Vue.component("Lazy" + name, components[name]);
}
