<template>
  <div
    class="
      bg-white
      w-full
      dark:bg-gray-900 dark:border-gray-800
      border-b
      py-5
      px-4
      md:px-5
    "
  >
    <div class="flex flex-row items-center flex-1 mb-5">
      <img
        class="w-10 h-10 object-cover rounded-full border-2 border-indigo-500"
        src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      />
      <div class="p-2">
        <div class="text-gray-900 dark:text-gray-300 font-semibold text-sm">
          Sencer SOYLU
        </div>
        <div class="text-gray-700 dark:text-gray-200 text-xs">
          CTO of Pickans
        </div>
      </div>
      <p
        class="text-gray-700 dark:text-gray-200 p-2 text-xs flex-1 font-medium"
      >
        asked 2h ago
      </p>

      <p
        class="
          leading-none
          items-center
          text-s text-gray-900
          dark:text-gray-300
        "
      >
        Category
      </p>
      <div class="items-center ml-2">
        <div class="relative">
          <button
            aria-label="Bookmark this post"
            data-title="Bookmark"
            class="
              bookmark-button
              flex flex-row
              items-center
              focus:outline-none
              p-2
              rounded
              hover:bg-bluish-gray-100
              dark:hover:bg-gray-700
              tooltip-handle tooltip-left-aligned
              text-gray-700
              dark:text-gray-200
            "
            type="button"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 384 512">
              <path
                d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex-auto w-full pr-0 md:w-auto md:flex-1 md:pr-5">
      <h1
        class="
          mb-1
          text-2xl
          font-bold
          leading-snug
          tracking-tight
          text-brand-black
          dark:text-gray-100
        "
      >
        <a
          href="https://blog.shubhank.codes/hosting-bitwarden"
          target="_blank"
          class="block"
          >Hosting your own password management instance</a
        >
      </h1>

      <p
        class="
          mt-2
          max-w-full
          min-w-full
          mb-2
          text-lg
          leading-snug
          line-clamp-4
          tracking-tight
          break-words
          text-brand-grey-700
          dark:text-gray-300
        "
      >
        <a
          aria-label="Post brief"
          href="https://blog.shubhank.codes/hosting-bitwarden"
          target="_blank"
          class="block line-clamp-4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
          <span class="text-blue-600 px-1">More...</span></a
        >
      </p>
    </div>

    <div class="items-center justify-between pt-4">
      <div class="flex flex-row flex-1 items-center justify-between w-full">
        <div class="flex flex-row flex-1 items-center">
          <a
            href="https://millertchris.com/tried-and-true-troubleshooting"
            target="_blank"
            aria-label="Total number of likes"
            class="
              flex flex-row
              items-center
              mr-8
              font-semibold
              text-gray-900
              dark:text-gray-200
            "
            ><svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 512 512">
              <path
                d="M496.656 285.683C506.583 272.809 512 256 512 235.468c-.001-37.674-32.073-72.571-72.727-72.571h-70.15c8.72-17.368 20.695-38.911 20.695-69.817C389.819 34.672 366.518 0 306.91 0c-29.995 0-41.126 37.918-46.829 67.228-3.407 17.511-6.626 34.052-16.525 43.951C219.986 134.75 184 192 162.382 203.625c-2.189.922-4.986 1.648-8.032 2.223C148.577 197.484 138.931 192 128 192H32c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-8.74c32.495 0 100.687 40.747 177.455 40.726 5.505.003 37.65.03 41.013 0 59.282.014 92.255-35.887 90.335-89.793 15.127-17.727 22.539-43.337 18.225-67.105 12.456-19.526 15.126-47.07 9.628-69.405zM32 480V224h96v256H32zm424.017-203.648C472 288 472 336 450.41 347.017c13.522 22.76 1.352 53.216-15.015 61.996 8.293 52.54-18.961 70.606-57.212 70.974-3.312.03-37.247 0-40.727 0-72.929 0-134.742-40.727-177.455-40.727V235.625c37.708 0 72.305-67.939 106.183-101.818 30.545-30.545 20.363-81.454 40.727-101.817 50.909 0 50.909 35.517 50.909 61.091 0 42.189-30.545 61.09-30.545 101.817h111.999c22.73 0 40.627 20.364 40.727 40.727.099 20.363-8.001 36.375-23.984 40.727zM104 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
              ></path></svg
            ><span>3</span></a
          >
          <div class="flex flex-row flex-1 items-center mr-4">
            <a
              href="https://millertchris.com/tried-and-true-troubleshooting#comments"
              target="_blank"
              aria-label="Total number of comments"
              class="
                flex flex-row
                items-center
                mr-1
                font-medium
                text-gray-900
                dark:text-gray-200
              "
              ><div class="fill-current mr-2 w-6 h-6">
                <PickansQuestionIcon />
              </div>
              <span>Comment</span></a
            >
          </div>
          <div class="flex flex-row-reverse items-center justify-items-end">
            <img
              class="
                w-10
                h-10
                object-cover
                rounded-full
                border-2 border-indigo-500
              "
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
            <div class="p-2">
              <div
                class="text-gray-900 dark:text-gray-300 font-semibold text-sm"
              >
                Sencer SOYLU
              </div>
              <div class="text-gray-700 dark:text-gray-200 text-xs">
                CTO of Pickans
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
// import { PropType, defineComponent } from '@nuxtjs/composition-api'
import { defineComponent } from "@nuxtjs/composition-api";
import PickansQuestionIcon from "../UI/PickansQuestionIcon.vue";

export default defineComponent({
  name: "PostList",
  components: { PickansQuestionIcon },
});
</script>

<style scoped>
.pickans-action {
  src: url("~assets/fonts/Inter-200-cyrillic-ext8.woff2") format("woff2");
}
.card {
  border-radius: 0.5rem;
  border-width: 1px;

  --tw-bg-opacity: 1;

  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
</style>
