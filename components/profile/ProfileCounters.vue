<template>
  <PickansCard>
    <template #content>
      <div class="p-5">
        <div class="flex flex-row">
          <div class="w-1/4 p-2">
            <p class="mb-px font-medium text-theme-base-500 text-sm">
              Followers
            </p>
            <n-link
              to="/@sencer/followers"
              title="0"
              class="
                text-2xl
                font-bold
                text-theme-base-700
                dark:text-theme-base-300
                text-sm
              "
              >0</n-link
            >
          </div>
          <div
            class="
              w-1/4
              p-2
              border-l border-theme-base-100
              dark:border-theme-base-700
            "
          >
            <p class="mb-px font-medium text-theme-base-500 text-sm">
              Following
            </p>
            <p class="big-num">
              <n-link
                to="/@sencer/following"
                title="1"
                class="
                  text-2xl
                  font-bold
                  text-theme-base-700
                  dark:text-theme-base-300
                  text-sm
                "
                >1</n-link
              >
            </p>
          </div>
          <div
            class="
              w-1/4
              p-2
              border-l border-theme-base-100
              dark:border-theme-base-700
            "
          >
            <p class="mb-px font-medium text-theme-base-500 text-sm">
              Question
            </p>
            <p
              class="
                text-2xl
                font-bold
                text-theme-base-700
                dark:text-theme-base-300
                text-sm
              "
            >
              0
            </p>
          </div>
          <div
            class="
              w-1/4
              p-2
              border-l border-theme-base-100
              dark:border-theme-base-700
            "
          >
            <p class="mb-px font-medium text-theme-base-500 text-sm">Answer</p>
            <p
              class="
                text-2xl
                font-bold
                text-theme-base-700
                dark:text-theme-base-300
                text-sm
              "
            >
              0
            </p>
          </div>
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
  name: "ProfileCounters",
  components: { PickansCard },
});
</script>
