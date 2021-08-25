<template>
  <div
    class="
      mb-2
      bg-white
      text-theme-base-900
      border border-theme-base-100
      rounded-lg
      lg:flex-row
      dark:bg-theme-base-900 dark:border-theme-base-700 dark:text-theme-base-200
    "
  >
    <div
      v-if="$slots.header"
      class="
        p-5
        text-base
        font-medium
        border-b
        dark:border-theme-base-700
        text-brand-black
        dark:text-theme-base-200
      "
    >
      <slot name="header"></slot>
    </div>
    <div class="text-theme-base-900 dark:text-theme-base-200">
      <slot v-if="$slots.content" name="content"></slot>
    </div>

    <slot v-if="$slots.footer" name="footer"></slot>
  </div>
</template>

<script>
export default { name: "PickansCard" };
</script>
