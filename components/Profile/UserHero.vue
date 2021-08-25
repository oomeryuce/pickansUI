<template>
  <div v-if="user" class="w-full max-w-full">
    <div
      class="
        bg-white bg-center bg-cover
        profile-cover
        dark:border-theme-base-700
      "
      :class="!user.backGround ? 'bg-pickans-light' : ''"
      :style="
        user.backGround ? `background-image: url(${user.backGround})` : ''
      "
    ></div>
    <div
      class="
        px-4
        pt-4
        mb-4
        bg-white
        dark:bg-theme-base-900 dark:border-theme-base-700
        border-b
        rounded-bl-lg rounded-br-lg
        lg:px-16
        dark:bg-brand-dark-grey-900
        lg:border-l lg:border-r
        dark:border-brand-grey-800
      "
    >
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
            class="block w-full h-auto relative undefined"
            data-title="false"
            ><img
              :src="user.avatar"
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
            <n-link :to="'/@' + user.username">{{ user.name }}</n-link>
          </h1>
          <p class="mb-6 text-lg text-theme-base-800 dark:text-theme-base-300">
            {{ user.proffesion }}
          </p>
        </div>
        <div class="flex items-start justify-items-start">
          <a
            href="#"
            class="
              flex flex-row
              items-center
              justify-center
              px-14
              py-1.5
              font-semibold
              tracking-wider
              text-white
              uppercase
              rounded
              shadow
              bg-pickans-light
            "
          >
            <span class="inline-block">Ask Me!</span></a
          >
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
          :key="tab.key"
          class="
            px-6
            py-2
            border-b-2 border-transparent
            dark:hover:bg-theme-base-700
            cursor-pointer
            uppercase
          "
          :class="
            active === tab.title
              ? 'border-blue-300'
              : 'hover:bg-gray-50 hover:border-gray-300'
          "
          @click="changeTab(tab.title)"
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
  },

  data() {
    return {
      tabItems: [
        {
          key: 0,
          title: "profile",
        },
        {
          key: 1,
          title: "questions",
        },
        {
          key: 2,
          title: "answers",
        },
        {
          key: 3,
          title: "followers",
        },
        {
          key: 4,
          title: "following",
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
