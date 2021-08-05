<template>
  <div
    class="
      mb-2
      bg-white
      border
      rounded-lg
      lg:flex-row
      dark:bg-brand-dark-grey-900 dark:border-brand-grey-800
    "
  >
    <div
      v-if="$slots.header"
      class="
        p-5
        text-base
        font-medium
        border-b
        dark:border-brand-grey-800
        text-brand-black
        dark:text-brand-grey-300
      "
    >
      <slot name="header"></slot>
    </div>
    <div class="text-brand-black dark:text-brand-grey-100">
      <slot v-if="$slots.content" name="content"></slot>
    </div>

    <slot v-if="$slots.footer" name="footer"></slot>
  </div>
</template>

<script>
export default { name: "PickansCard" };
</script>
