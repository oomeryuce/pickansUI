<template>
  <div
    class="
      flex flex-col flex-wrap
      items-center
      justify-between
      px-6
      py-5
      mb-2
      bg-white
      dark:bg-theme-base-900
      border border-theme-base-100
      rounded-lg
      lg:flex-row
      dark:bg-brand-dark-grey-900 dark:border-theme-base-700
    "
  >
    <div class="pr-4 mb-4 text-center lg:flex-1 lg:mb-0 lg:text-left">
      <h1
        class="
          text-3xl
          font-bold
          tracking-tight
          text-brand-black
          dark:text-theme-base-200
        "
      >
        Community Feed
      </h1>
      <p class="text-brand-grey-600 dark:text-theme-base-200">
        Recent questions from the community
      </p>
    </div>
    <div class="">
      <a
        href="#"
        class="
          flex flex-row
          items-center
          text-lg text-pickans-light
          color-pickans-light
          rounded-lg
          border
          px-3
          py-1
          border-pickans-light
          hover:bg-havelock-blue-100
          dark:hover:bg-theme-base-700
          font-medium
        "
        ><svg class="w-5 h-5 mr-2 fill-current" viewBox="0 0 512 512">
          <path
            d="M504 384H192v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88v40c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-40h312c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-344 64h-32v-96h32v96zM504 96H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h152v40c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-40h248c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-280 64h-32V64h32v96zm280 80h-88v-40c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v40H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h312v40c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-40h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-120 64h-32v-96h32v96z"
          ></path></svg
        ><span>Personalize this feed</span></a
      >
    </div>
  </div>
</template>

<script>
export default { name: "FeedHeader" };
</script>
