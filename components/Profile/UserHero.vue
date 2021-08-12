<template>
  <div v-if="user" class="w-full max-w-full">
    <div
      class="
        bg-white bg-center bg-cover
        border-l border-r
        profile-cover
        dark:border-brand-grey-800 dark:bg-brand-grey-900
      "
      :style="'background-image: url(' + user.backGround + ')'"
    ></div>
    <div
      class="
        px-4
        pt-4
        mb-4
        bg-white
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
            bg-white
            border-4 border-white
            rounded-full
            shadow-lg
            md:mb-0 md:-mt-40
            lg:mb-0 lg:w-40 lg:h-40
            md:mr-8
            dark:bg-brand-grey-800 dark:border-brand-grey-800
            xl:ml-48
          "
        >
          <n-link
            :to="'/profile/@' + user.username"
            class="block w-full h-auto relative undefined"
            data-title="false"
            ><img
              :src="user.avatar"
              :alt="user.name + '\'s photo'"
              class="
                block
                w-full
                undefined
                block
                w-full
                rounded-full
                z-20
                relative
                lazyautosizes
                lazyloaded
              "
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
              text-black
              dark:text-white
            "
          >
            <n-link :to="'/profile/@' + user.username">{{ user.name }}</n-link>
          </h1>
          <p class="mb-6 text-lg text-brand-grey-700 dark:text-brand-grey-300">
            {{ user.proffesion }}
          </p>
          <p class="mb-6 text-lg text-brand-grey-700 dark:text-brand-grey-300">
            {{ user.bio }}
          </p>
          <div class="flex flex-row flex-wrap items-center mt-6">
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
              <span class="inline-block">Ask Me !</span></a
            >
          </div>
        </div>
      </div>
      <div
        class="
          flex flex-row
          items-center
          justify-center
          mt-12
          overflow-auto
          text-sm
          font-bold
          tracking-wider
          uppercase
          text-brand-grey-800
          dark:text-brand-grey-400
        "
      >
        <a
          class="
            px-6
            py-2
            border-b-2 border-transparent
            dark:hover:bg-gray-700
            cursor-pointer
          "
          :class="
            active === 'profile'
              ? 'border-blue-300'
              : 'hover:bg-gray-50 hover:border-gray-300'
          "
          @click="changeTab('profile')"
          >Profile</a
        ><a
          class="
            px-6
            py-2
            border-b-2 border-transparent
            dark:hover:bg-gray-700
            cursor-pointer
          "
          :class="
            active === 'followers'
              ? 'border-blue-300'
              : 'hover:bg-gray-50 hover:border-gray-300'
          "
          @click="changeTab('followers')"
          >Followers</a
        ><a
          class="
            px-6
            py-2
            border-b-2 border-transparent
            dark:hover:bg-gray-700
            cursor-pointer
          "
          :class="
            active === 'following'
              ? 'border-blue-300'
              : 'hover:bg-gray-50 hover:border-gray-300'
          "
          @click="changeTab('following')"
          >Following</a
        ><a
          class="
            px-6
            py-2
            border-b-2 border-transparent
            dark:hover:bg-gray-700
            cursor-pointer
          "
          :class="
            active === 'questions'
              ? 'border-blue-300'
              : 'hover:bg-gray-50 hover:border-gray-300'
          "
          @click="changeTab('questions')"
          >Questions</a
        ><a
          class="
            px-6
            py-2
            border-b-2 border-transparent
            dark:hover:bg-gray-700
            cursor-pointer
          "
          :class="
            active === 'answers'
              ? 'border-blue-300'
              : 'hover:bg-gray-50 hover:border-gray-300'
          "
          @click="changeTab('answers')"
          >Answers</a
        >
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
      default: "progile",
    },
  },

  data() {
    return {};
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
  padding-top: 30%;
}
</style>
