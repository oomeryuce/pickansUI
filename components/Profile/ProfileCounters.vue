<template>
  <PickansCard>
    <template #content>
      <div class="p-5">
        <div class="flex flex-row">
          <div class="w-1/4 p-2">
            <p
              class="
                mb-px
                font-medium
                text-bluish-gray-700
                dark:text-bluish-gray-500
                text-sm
              "
            >
              Followers
            </p>
            <a
              href="/@sencer/followers"
              title="0"
              class="
                text-2xl
                font-bold
                text-bluish-gray-800
                dark:text-bluish-gray-200
                text-sm
              "
              >0</a
            >
          </div>
          <div class="w-1/4 p-2 border-l">
            <p
              class="
                mb-px
                font-medium
                text-bluish-gray-700
                dark:text-bluish-gray-500
                text-sm
              "
            >
              Following
            </p>
            <p class="big-num">
              <a
                href="/@sencer/following"
                title="1"
                class="
                  text-2xl
                  font-bold
                  text-bluish-gray-800
                  dark:text-bluish-gray-200
                  text-sm
                "
                >1</a
              >
            </p>
          </div>
          <div class="w-1/4 p-2 border-l">
            <p
              class="
                mb-px
                font-medium
                text-bluish-gray-700
                dark:text-bluish-gray-500
                text-sm
              "
            >
              Question
            </p>
            <p
              class="
                text-2xl
                font-bold
                text-bluish-gray-800
                dark:text-bluish-gray-200
                text-sm
              "
            >
              0
            </p>
          </div>
          <div class="w-1/4 p-2 border-l">
            <p
              class="
                mb-px
                font-medium
                text-bluish-gray-700
                dark:text-bluish-gray-500
                text-sm
              "
            >
              Answer
            </p>
            <p
              class="
                text-2xl
                font-bold
                text-bluish-gray-800
                dark:text-bluish-gray-200
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
