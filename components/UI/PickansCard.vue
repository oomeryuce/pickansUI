<template>
  <div
    class="
      mb-2
      bg-white
      text-gray-900
      border
      rounded-lg
      lg:flex-row
      dark:bg-gray-900 dark:border-gray-800 dark:text-gray-200
    "
  >
    <div
      v-if="$slots.header"
      class="
        p-5
        text-base
        font-medium
        border-b
        dark:border-gray-800
        text-brand-black
        dark:text-gray-200
      "
    >
      <slot name="header"></slot>
    </div>
    <div class="text-gray-900 dark:text-gray-200">
      <slot v-if="$slots.content" name="content"></slot>
    </div>

    <slot v-if="$slots.footer" name="footer"></slot>
  </div>
</template>

<script>
export default { name: "PickansCard" };
</script>
