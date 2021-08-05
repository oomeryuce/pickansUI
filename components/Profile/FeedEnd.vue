<template>
  <PickansCard>
    <template #content>
      <div class="p-4">
        <p
          class="
            text-xl text-center text-bluish-gray-700
            dark:text-bluish-gray-500
          "
        >
          You've reached the end! 👋
        </p>
      </div>
    </template>
  </PickansCard>
</template>

<script>
// import { PropType, defineComponent } from '@nuxtjs/composition-api'
import { defineComponent } from "@nuxtjs/composition-api";
import PickansCard from "~/components/UI/PickansCard.vue";

export default defineComponent({
  name: "ProfileFeedEnd",
  components: { PickansCard },
});
</script>
