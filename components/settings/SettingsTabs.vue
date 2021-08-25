<template>
  <div class="col-span-12 mt-2">
    <div
      class="
        p-4
        mb-2
        bg-white
        border border-theme-base-100
        rounded-lg
        text-gray-900
        dark:text-theme-base-200
        dark:bg-theme-base-900
        dark:border-theme-base-700
      "
    >
      <h1 class="text-2xl font-bold capitalize">{{ active }} Settings</h1>
    </div>
    <div
      class="
        flex flex-col
        items-end
        mb-2
        overflow-auto
        text-sm
        font-bold
        text-theme-base-700
        uppercase
        bg-white
        border border-theme-base-100
        rounded-lg
        whitespace-nowrap
        lg:items-start lg:flex-col
        dark:text-theme-base-200
        dark:bg-theme-base-900
        dark:border-theme-base-700
      "
    >
      <a
        class="
          px-3
          md:px-6
          py-4
          w-full
          flex flex-row
          items-center
          cursor-pointer
        "
        :class="
          active === 'profile'
            ? 'text-pickans-light'
            : 'hover:bg-theme-base-400 dark:hover:bg-theme-base-800 text-theme-base-900 dark:text-theme-base-300'
        "
        @click="changeTab('profile')"
        ><svg
          class="w-6 h-6 mr-4 opacity-75 fill-current"
          viewBox="0 0 496 512"
        >
          <path
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
          ></path></svg
        ><span>Profile</span></a
      ><a
        class="
          px-3
          md:px-6
          py-4
          w-full
          flex flex-row
          items-center
          cursor-pointer
        "
        :class="
          active === 'account'
            ? 'text-pickans-light'
            : 'hover:bg-theme-base-400 dark:hover:bg-theme-base-800 text-theme-base-900 dark:text-theme-base-300'
        "
        @click="changeTab('account')"
        ><svg
          class="w-6 h-6 mr-4 opacity-75 fill-current"
          viewBox="0 0 512 512"
        >
          <path
            d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 000-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 00-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 00-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 000 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0042.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0042.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 01-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0187.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
          ></path></svg
        ><span>Account</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsTabs",
  props: {
    active: {
      type: String,
      default: "profile",
    },
  },

  methods: {
    changeTab(item) {
      this.$emit("tab-change", item);
    },
  },
};
</script>
