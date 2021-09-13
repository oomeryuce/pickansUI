<template>
  <div
    class="alert"
    :class="
      type === 'success'
        ? 'alert-success'
        : type === 'warning'
        ? 'alert-warning'
        : 'alert-error'
    "
  >
    <div class="flex-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-10 h-10 mx-2 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        ></path>
      </svg>
      <div class="flex flex-col">
        <label class="font-bold">{{ title }}</label>
        <p class="text-sm">{{ content }}</p>
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

    // eslint-disable-next-line vue/no-unused-properties
    clearAlert() {
      this.clearAlertErrors();
    },
  },
};
</script>
