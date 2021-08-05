<template>
  <div class="bg-bluish-gray-50 antialiased min-h-screen">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "DefaultLayout",
  components: {},
  computed: {
    ...mapGetters({
      user: "users/user",
    }),
  },
});
</script>
