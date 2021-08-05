<template>
  <nav
    class="
      relative
      bg-white
      border-b-2 border-gray-300
      text-gray-900
      z-20
      md:h-screen
    "
  >
    <div class="container mx-auto flex items-center">
      <div class="relative block p-4 lg:p-4 text-xl text-blue-600 font-bold">
        <img
          class="h-14"
          src="~/static/img/pickans_logo.png"
          alt="Pickans | Knowledge Sharing Platform"
        />
      </div>
      <div class="flex w-1/3 item-center p-6">
        <div class="mx-4 w-96">
          <input
            type="text"
            placeholder="Search..."
            class="
              text-gray-600
              placeholder-gray-600
              rounded-md
              p-4
              h-10
              bg-gray-100
              w-full
              border border-pickans-darker-400
              outline-none
              focus:ring-2 focus:ring-pickans-light focus:border-transparent
            "
          />
        </div>
      </div>

      <ul class="flex w-auto ml-auto">
        <!-- Regular Link -->
        <li
          class="hover:bg-pickans-darker hover:text-white flex items-center p-4"
        >
          <a
            href="#"
            class="
              relative
              block
              py-6
              px-2
              lg:p-4
              text-sm
              lg:text-base
              font-bold
              items-center
            "
            >Home</a
          >
        </li>
        <li class="hover:bg-pickans-darker hover:text-white flex items-center">
          <a
            href="#"
            class="
              relative
              block
              py-6
              px-2
              lg:p-4
              text-sm
              lg:text-base
              font-bold
              items-center
            "
            >Ask !</a
          >
        </li>

        <li class="hover:bg-pickans-darker hover:text-white flex items-center">
          <a
            href="#"
            class="
              relative
              block
              py-6
              px-2
              lg:p-4
              text-sm
              lg:text-base
              font-bold
              items-center
            "
            >Categories</a
          >
        </li>

        <li class="hover:bg-pickans-darker hover:text-white flex items-center">
          <a
            href="#"
            class="
              relative
              block
              py-6
              px-2
              lg:p-4
              text-sm
              lg:text-base
              font-bold
              items-center
            "
            >Experts</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PageHeaderOld",
  data() {
    return {
      scrollY: 0,
      isOpen: false,
    };
  },

  computed: {
    /*
    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'bg-white shadow' : ''
    },

    navActionClassList() {
      return this.isSticky ? 'gradient text-white' : 'bg-white text-gray-800'
    },

    navContentClassList() {
      let classList = this.isSticky ? 'bg-white' : 'bg-gray-100'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    },
    */
  },

  mounted() {
    this.scrollY = window.scrollY;
    document.addEventListener("click", this.onClick);
    document.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.onClick, true);
    document.removeEventListener("scroll", this.onScroll, true);
  },

  methods: {
    onClick() {
      this.isOpen = false;
    },

    onScroll() {
      this.scrollY = window.scrollY;
    },

    /* onToggleClick() {
      this.isOpen = !this.isOpen
    }, */
  },
};
</script>
