<template>
  <PickansCard>
    <template #content>
      <div class="p-4">
        <h2
          class="
            mb-4
            text-xl
            font-medium
            text-bluish-gray-700
            dark:text-bluish-gray-400
          "
        >
          My Skills
        </h2>
        <div class="flex flex-row items-center">
          <a
            href="/settings#techstack"
            class="flex flex-row items-center button-transparent small"
            ><svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 95 95">
              <path
                d="M52.7 24.5h-9.4v18.8H24.5v9.4h18.8v18.8h9.4V52.7h18.8v-9.4H52.7V24.5zM48 1C22.056 1 1 22.056 1 48s21.056 47 47 47 47-21.056 47-47S73.944 1 48 1zm0 84.6c-20.727 0-37.6-16.873-37.6-37.6S27.273 10.4 48 10.4 85.6 27.273 85.6 48 68.727 85.6 48 85.6z"
                fill-rule="nonzero"
              ></path></svg
            ><span>Add Your Skills</span></a
          >
        </div>
      </div>
    </template>
  </PickansCard>
</template>

<script>
// import { PropType, defineComponent } from '@nuxtjs/composition-api'
import { defineComponent } from "@nuxtjs/composition-api";
import PickansCard from "~/components/UI/PickansCard.vue";

export default defineComponent({
  name: "ProfileSkills",
  components: { PickansCard },
});
</script>
