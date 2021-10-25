<template>
  <div v-if="user" class="w-full max-w-full">
    <div
      class="bg-white bg-center bg-cover profile-cover"
      :class="!user.backGround ? 'bg-pickans-light' : ''"
      :style="
        user.backGround ? `background-image: url(${user.backGround})` : ''
      "
    ></div>
    <div class="px-4 pt-4 mb-4 bg-base-100 rounded-b-box lg:px-16 shadow-md">
      <div class="flex flex-row flex-wrap items-center">
        <div
          class="
            flex-shrink-0
            w-24
            h-24
            mb-4
            -mt-14
            bg-white
            border-4 border-white
            rounded-full
            shadow-lg
            md:mb-0 md:-mt-40
            lg:mb-0 lg:w-40 lg:h-40
            md:mr-8
            dark:bg-theme-base-900 dark:border-theme-base-800
            xl:ml-48
          "
        >
          <n-link
            :to="'/@' + user.username"
            class="block w-full h-auto relative fill-current"
            data-title="false"
            ><img
              :src="
                user.avatar
                  ? user.avatar
                  : require('~/assets/svg/profile-user.svg')
              "
              :alt="user.name + '\'s photo'"
              class="block w-full rounded-full relative"
          /></n-link>
        </div>
        <div class="w-full pr-10 md:flex-1 lg:w-auto">
          <h1
            class="
              mb-2
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-theme-base-900
              dark:text-theme-base-200
            "
          >
            <n-link :to="'/@' + user.username" class="capitalize">
              {{ user.name }}
            </n-link>
          </h1>
          <p class="mb-6 text-lg text-theme-base-800 dark:text-theme-base-300">
            {{ user.title }}
          </p>
        </div>
        <div class="flex items-start justify-items-start">
          <button
            v-show="!isAuthUser"
            type="button"
            class="btn btn-primary font-semibold px-10 rounded-md text-lg"
          >
            {{ $t("profile.userHero.askMe") }}
          </button>
        </div>
      </div>
      <div
        class="
          flex flex-row
          md:items-center md:justify-center
          mt-4
          overflow-auto
          text-sm
          font-bold
          uppercase
          text-theme-base-900
          dark:text-theme-base-200
        "
      >
        <a
          v-for="tab in tabItems"
          :key="tab.id"
          class="
            px-6
            py-2
            border-b-2 border-transparent
            dark:hover:bg-theme-base-700
            cursor-pointer
            uppercase
          "
          :class="
            active === tab.key
              ? 'border-blue-300'
              : 'hover:bg-gray-50 hover:border-gray-300'
          "
          @click="changeTab(tab.key)"
        >
          {{ tab.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHero",
  props: {
    user: {
      type: Object,
      required: true,
    },

    active: {
      type: String,
      default: "profile",
    },

    isAuthUser: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      tabItems: [
        {
          id: 0,
          title: this.$t("profile.userHero.tabs.profile"),
          key: "profile",
        },
        {
          id: 1,
          title: this.$t("profile.userHero.tabs.questions"),
          key: "questions",
        },
        {
          id: 2,
          title: this.$t("profile.userHero.tabs.answers"),
          key: "answers",
        },
        {
          id: 3,
          title: this.$t("profile.userHero.tabs.followers"),
          key: "followers",
        },
        {
          id: 4,
          title: this.$t("profile.userHero.tabs.following"),
          key: "following",
        },
      ],
    };
  },

  methods: {
    changeTab(item) {
      this.$emit("tab-change", item);
    },
  },
};
</script>

<style scoped>
.profile-cover {
  width: 100%;
  padding-top: 20%;
}
</style>
