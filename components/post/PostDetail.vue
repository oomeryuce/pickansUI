<template>
  <div class="rounded shadow-sm bg-gray-100 bg-opacity-80 p-4">
    <h2 class="font-semibold">{{ post.title }}</h2>
    <p class="mt-2">{{ post.body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "PostDetail",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
});
</script>
