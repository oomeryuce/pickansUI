<template>
  <div
    class="
      shadow
      bg-white
      w-full
      dark:bg-theme-base-900
      dark:border-theme-base-700
      dark:bg-theme-base-900
      dark:border-theme-base-700
      border border-theme-base-100 border
      rounded-lg
      my-3
      p-4
      max-w-xl
      w-full
      mx-auto
    "
  >
    <div class="flex flex-col justify-center items-center space-x-4">
      <div
        class="
          rounded-full
          bg-white
          ring ring-theme-base-900
          dark:ring-white
          h-20
          w-20
        "
      >
        <img
          class="block w-full profile-thumb bg-transparent"
          :src="require('~/assets/svg/profile-user.svg')"
          alt="Your profile photo"
        />
      </div>
      <div
        class="
          flex-1
          space-y-4
          py-1
          text-theme-base-900
          dark:text-theme-base-200
        "
      >
        <h1 class="text-4xl font-extrabold">
          {{ $t("profile.userNotFound.title") }}
        </h1>
      </div>
    </div>
    <div class="flex w-full justify-center py-3">
      <n-link to="/" class="btn btn-primary">
        {{ $t("profile.userNotFound.button") }}
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNotFound",
};
</script>
