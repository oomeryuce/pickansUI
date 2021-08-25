<template>
  <PickansCard>
    <template #content>
      <div class="p-5">
        <div class="mb-5">
          <div class="flex flex-row items-center">
            <a
              href="/settings#moreAboutYou"
              class="flex flex-row items-center mb-2 button-transparent small"
              ><svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 95 95">
                <path
                  d="M52.7 24.5h-9.4v18.8H24.5v9.4h18.8v18.8h9.4V52.7h18.8v-9.4H52.7V24.5zM48 1C22.056 1 1 22.056 1 48s21.056 47 47 47 47-21.056 47-47S73.944 1 48 1zm0 84.6c-20.727 0-37.6-16.873-37.6-37.6S27.273 10.4 48 10.4 85.6 27.273 85.6 48 68.727 85.6 48 85.6z"
                  fill-rule="nonzero"
                ></path></svg
              ><span>Add Bio</span></a
            >
          </div>
          <p class="mb-2 text-sm italic leading-snug text-theme-base-500">
            Looks like your bio is empty. Tell the world who you are by writing
            a short description about you.
          </p>
        </div>
        <div class="mb-2">
          <span class="inline-block w-20 text-theme-base-500">Location: </span
          ><span
            class="font-medium text-bluish-gray-800 dark:text-theme-base-300"
            >Istanbul, Turkey</span
          >
        </div>
        <div class="mb-2">
          <span class="inline-block w-20 text-theme-base-500">Joined: </span
          ><span
            class="font-medium text-bluish-gray-800 dark:text-theme-base-300"
            >April 23, 2021</span
          >
        </div>
      </div></template
    >
  </PickansCard>
</template>

<script>
// import { PropType, defineComponent } from '@nuxtjs/composition-api'
import { defineComponent } from "@nuxtjs/composition-api";
// import StarIcon from '../UI/StarIcon.vue'
import PickansCard from "~/components/UI/PickansCard.vue";

export default defineComponent({
  name: "ProfileInfo",
  components: { PickansCard },
});
</script>
