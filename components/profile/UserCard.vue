<template>
  <div
    class="
      mb-2
      bg-white
      dark:bg-theme-base-900
      border border-theme-base-100
      rounded-lg
      lg:flex-row
      dark:bg-theme-base-900 dark:border-theme-base-700
    "
  >
    <div
      class="
        p-4
        text-base
        font-semibold
        text-center text-pickans-light
        flex flex-row
        content-center
        justify-center
      "
    >
      <div class="w-5 h-5 mr-3 -mt-0.5">
        <StarIcon />
      </div>
      <div>{{ $t("profile.userCard.rExpert") }}</div>
    </div>
    <div
      class="
        flex flex-row
        items-start
        text-brand-black
        dark:text-theme-base-200
      "
    >
      <div
        class="
          flex-shrink-0
          mb-4
          shadow-lg
          md:mb-0
          lg:mb-0
          w-full
          dark:bg-theme-base-800 dark:border-theme-base-700
        "
      >
        <a
          href="https://hashnode.com/@sencer"
          class="block w-full h-auto"
          data-title="false"
          ><img
            data-sizes="auto"
            loading="lazy"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1619177937853/AKybvMQKA.jpeg?w=400&amp;h=400&amp;fit=crop&amp;crop=faces&amp;auto=compress"
            data-src="https://cdn.hashnode.com/res/hashnode/image/upload/v1619177937853/AKybvMQKA.jpeg?w=400&amp;h=400&amp;fit=crop&amp;crop=faces&amp;auto=compress"
            data-width="500"
            data-height="400"
            alt="Sencer SOYLU's photo"
            class="
              block
              w-full
              undefined
              block
              w-full
              z-20
              relative
              lazyautosizes
              lazyloaded
            "
            sizes="152px"
        /></a>
      </div>
    </div>
    <div class="flex flex-col">
      <div
        class="
          font-bold
          text-center text-bluish-gray-800 text-2xl
          dark:text-theme-base-200
          flex flex-row
          content-center
          justify-center
          mt-6
        "
      >
        Sencer SOYLU
      </div>
      <div
        class="
          font-medium
          text-center text-bluish-gray-400 text-l
          dark:text-theme-base-300
          flex flex-row
          content-center
          justify-center
          my-1
        "
      >
        Software Developer
      </div>
      <div
        class="
          font-medium
          text-center text-bluish-gray-400 text-sm
          dark:text-theme-base-300
          flex flex-row
          content-center
          justify-center
          mb-2
        "
      >
        Istanbul • 25 y.o
      </div>

      <div class="font-medium text-center justify-center mt-2 mb-6 px-12">
        <a
          href="#"
          class="
            flex flex-row
            items-center
            justify-center
            px-4
            py-1.5
            font-semibold
            tracking-wider
            text-white
            uppercase
            rounded
            shadow
            bg-pickans-light
          "
        >
          <span class="inline-block">
            {{ $t("profile.userCard.askMe") }}
          </span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
// import { PropType, defineComponent } from '@nuxtjs/composition-api'
import { defineComponent } from "@nuxtjs/composition-api";
import StarIcon from "../UI/StarIcon.vue";

export default defineComponent({
  name: "UserCard",
  components: { StarIcon },
});
</script>
