<template>
  <div
    class="
      absolute
      top-3
      right-3
      border-t-4
      rounded-b
      px-4
      py-3
      shadow-md
      animate-fade-in-down
    "
    :class="
      type === 'success'
        ? 'bg-green-100 border-green-500 text-green-900'
        : 'bg-red-100 border-red-500 text-red-900'
    "
    role="alert"
  >
    <div class="flex max-w-lg">
      <div class="py-1">
        <svg
          class="fill-current h-6 w-6 text-teal-500 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
          />
        </svg>
      </div>
      <div>
        <p class="font-bold">{{ title }}</p>
        <p class="text-sm">{{ content }}</p>
      </div>
      <div v-if="error" class="cursor-pointer" @click="clearAlert">
        <svg
          class="fill-current h-6 w-6 ml-4"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "AlertComponent",
  props: ["type", "title", "content"],

  computed: {
    ...mapState({
      error: (state) => state.shared.error,
    }),
  },

  methods: {
    ...mapActions({
      clearAlertErrors: "shared/clearError",
    }),

    clearAlert() {
      this.clearAlertErrors();
    },
  },
};
</script>
