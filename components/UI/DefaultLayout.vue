<template>
  <div class="container mx-auto">
    <div
      class="
        relative
        grid grid-cols-12
        gap-2
        px-2
        mx-auto
        md:gap-4
        xl:grid-cols-8
        2xl:px-5
        overflow-y-auto
      "
    >
      <SideBar active-page="feed" />
      <div
        class="col-span-12 md:pt-2 md:col-span-12 lg:col-span-10 xl:col-span-7"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
