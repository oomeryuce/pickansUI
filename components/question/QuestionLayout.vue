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
        class="col-span-12 md:pt-2 md:col-span-8 lg:col-span-7 xl:col-span-5"
      >
        <slot></slot>
      </div>
      <div
        class="col-span-12 md:pt-2 md:col-span-4 lg:col-span-3 xl:col-span-2"
      >
        <slot name="rightSide"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionLayout",
};
</script>
