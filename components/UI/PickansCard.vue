<template>
  <div class="shadow-md bg-base-100 mb-4 rounded-box">
    <div v-if="$slots.header" class="p-5 font-medium border-b">
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
