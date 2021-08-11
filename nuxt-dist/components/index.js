import { wrapFunctional } from "./utils";

export { default as FeedHeader } from "../../components/FeedHeader.vue";
export { default as FeedRank } from "../../components/FeedRank.vue";
export { default as FetchState } from "../../components/FetchState.vue";
export { default as FollowTags } from "../../components/FollowTags.vue";
export { default as Home } from "../../components/Home.vue";
export { default as Logo } from "../../components/Logo.vue";
export { default as NuxtLogo } from "../../components/NuxtLogo.vue";
export { default as PageHeaderOld } from "../../components/PageHeaderOld.vue";
export { default as SideBar } from "../../components/SideBar.vue";
export { default as TopQuestions } from "../../components/TopQuestions.vue";
export { default as TrendingExperts } from "../../components/TrendingExperts.vue";
export { default as ProfileFeedEnd } from "../../components/Profile/FeedEnd.vue";
export { default as ProfileFeedHeader } from "../../components/Profile/FeedHeader.vue";
export { default as ProfileCounters } from "../../components/Profile/ProfileCounters.vue";
export { default as ProfileInfo } from "../../components/Profile/ProfileInfo.vue";
export { default as ProfileSkills } from "../../components/Profile/ProfileSkills.vue";
export { default as ProfileTemplate } from "../../components/Profile/ProfileTemplate.vue";
export { default as ProfileUserCard } from "../../components/Profile/UserCard.vue";
export { default as ProfileUserSideBar } from "../../components/Profile/UserSideBar.vue";
export { default as UIPickansCard } from "../../components/UI/PickansCard.vue";
export { default as UIPickansQuestionIcon } from "../../components/UI/PickansQuestionIcon.vue";
export { default as UISearchBar } from "../../components/UI/SearchBar.vue";
export { default as UIStarIcon } from "../../components/UI/StarIcon.vue";
export { default as HeroSimpleCentered } from "../../components/hero/HeroSimpleCentered.vue";
export { default as PostDetail } from "../../components/post/PostDetail.vue";
export { default as PostList } from "../../components/post/PostList.vue";
export { default as PostListItem } from "../../components/post/PostListItem.vue";
export { default as QuestionPost } from "../../components/question/QuestionPost.vue";
export { default as AnimatePing } from "../../components/animate/AnimatePing.vue";
export { default as AlertsAlertComponent } from "../../components/alerts/AlertComponent.vue";

export const LazyFeedHeader = import(
  "../../components/FeedHeader.vue" /* webpackChunkName: "components/feed-header" */
).then((c) => wrapFunctional(c.default || c));
export const LazyFeedRank = import(
  "../../components/FeedRank.vue" /* webpackChunkName: "components/feed-rank" */
).then((c) => wrapFunctional(c.default || c));
export const LazyFetchState = import(
  "../../components/FetchState.vue" /* webpackChunkName: "components/fetch-state" */
).then((c) => wrapFunctional(c.default || c));
export const LazyFollowTags = import(
  "../../components/FollowTags.vue" /* webpackChunkName: "components/follow-tags" */
).then((c) => wrapFunctional(c.default || c));
export const LazyHome = import(
  "../../components/Home.vue" /* webpackChunkName: "components/home" */
).then((c) => wrapFunctional(c.default || c));
export const LazyLogo = import(
  "../../components/Logo.vue" /* webpackChunkName: "components/logo" */
).then((c) => wrapFunctional(c.default || c));
export const LazyNuxtLogo = import(
  "../../components/NuxtLogo.vue" /* webpackChunkName: "components/nuxt-logo" */
).then((c) => wrapFunctional(c.default || c));
export const LazyPageHeaderOld = import(
  "../../components/PageHeaderOld.vue" /* webpackChunkName: "components/page-header-old" */
).then((c) => wrapFunctional(c.default || c));
export const LazySideBar = import(
  "../../components/SideBar.vue" /* webpackChunkName: "components/side-bar" */
).then((c) => wrapFunctional(c.default || c));
export const LazyTopQuestions = import(
  "../../components/TopQuestions.vue" /* webpackChunkName: "components/top-questions" */
).then((c) => wrapFunctional(c.default || c));
export const LazyTrendingExperts = import(
  "../../components/TrendingExperts.vue" /* webpackChunkName: "components/trending-experts" */
).then((c) => wrapFunctional(c.default || c));
export const LazyProfileFeedEnd = import(
  "../../components/Profile/FeedEnd.vue" /* webpackChunkName: "components/profile-feed-end" */
).then((c) => wrapFunctional(c.default || c));
export const LazyProfileFeedHeader = import(
  "../../components/Profile/FeedHeader.vue" /* webpackChunkName: "components/profile-feed-header" */
).then((c) => wrapFunctional(c.default || c));
export const LazyProfileCounters = import(
  "../../components/Profile/ProfileCounters.vue" /* webpackChunkName: "components/profile-counters" */
).then((c) => wrapFunctional(c.default || c));
export const LazyProfileInfo = import(
  "../../components/Profile/ProfileInfo.vue" /* webpackChunkName: "components/profile-info" */
).then((c) => wrapFunctional(c.default || c));
export const LazyProfileSkills = import(
  "../../components/Profile/ProfileSkills.vue" /* webpackChunkName: "components/profile-skills" */
).then((c) => wrapFunctional(c.default || c));
export const LazyProfileTemplate = import(
  "../../components/Profile/ProfileTemplate.vue" /* webpackChunkName: "components/profile-template" */
).then((c) => wrapFunctional(c.default || c));
export const LazyProfileUserCard = import(
  "../../components/Profile/UserCard.vue" /* webpackChunkName: "components/profile-user-card" */
).then((c) => wrapFunctional(c.default || c));
export const LazyProfileUserSideBar = import(
  "../../components/Profile/UserSideBar.vue" /* webpackChunkName: "components/profile-user-side-bar" */
).then((c) => wrapFunctional(c.default || c));
export const LazyUIPickansCard = import(
  "../../components/UI/PickansCard.vue" /* webpackChunkName: "components/u-i-pickans-card" */
).then((c) => wrapFunctional(c.default || c));
export const LazyUIPickansQuestionIcon = import(
  "../../components/UI/PickansQuestionIcon.vue" /* webpackChunkName: "components/u-i-pickans-question-icon" */
).then((c) => wrapFunctional(c.default || c));
export const LazyUISearchBar = import(
  "../../components/UI/SearchBar.vue" /* webpackChunkName: "components/u-i-search-bar" */
).then((c) => wrapFunctional(c.default || c));
export const LazyUIStarIcon = import(
  "../../components/UI/StarIcon.vue" /* webpackChunkName: "components/u-i-star-icon" */
).then((c) => wrapFunctional(c.default || c));
export const LazyHeroSimpleCentered = import(
  "../../components/hero/HeroSimpleCentered.vue" /* webpackChunkName: "components/hero-simple-centered" */
).then((c) => wrapFunctional(c.default || c));
export const LazyPostDetail = import(
  "../../components/post/PostDetail.vue" /* webpackChunkName: "components/post-detail" */
).then((c) => wrapFunctional(c.default || c));
export const LazyPostList = import(
  "../../components/post/PostList.vue" /* webpackChunkName: "components/post-list" */
).then((c) => wrapFunctional(c.default || c));
export const LazyPostListItem = import(
  "../../components/post/PostListItem.vue" /* webpackChunkName: "components/post-list-item" */
).then((c) => wrapFunctional(c.default || c));
export const LazyQuestionPost = import(
  "../../components/question/QuestionPost.vue" /* webpackChunkName: "components/question-post" */
).then((c) => wrapFunctional(c.default || c));
export const LazyAnimatePing = import(
  "../../components/animate/AnimatePing.vue" /* webpackChunkName: "components/animate-ping" */
).then((c) => wrapFunctional(c.default || c));
export const LazyAlertsAlertComponent = import(
  "../../components/alerts/AlertComponent.vue" /* webpackChunkName: "components/alerts-alert-component" */
).then((c) => wrapFunctional(c.default || c));
