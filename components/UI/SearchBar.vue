<template>
  <div class="relative mb-4 shadow-md bg-base-100 rounded-box">
    <div class="relative">
      <div
        class="
          absolute
          top-0
          left-0
          flex flex-row
          items-center
          justify-center
          h-full
          px-5
          text-black
          dark:text-theme-base-200
        "
      >
        <svg class="w-5 h-5 fill-current" viewBox="0 0 200 200" fill="none">
          <g clip-path="url(#clip0)">
            <path
              d="M186.804 176.609l-44.092-44.091a4.054 4.054 0 00-2.905-1.197h-3.521c11.724-12.68 18.902-29.599 18.902-48.227C155.188 43.82 123.366 12 84.094 12 44.82 12 13 43.821 13 83.094c0 39.272 31.821 71.094 71.094 71.094 18.628 0 35.547-7.178 48.227-18.868v3.487c0 1.093.445 2.119 1.197 2.905l44.091 44.092a4.107 4.107 0 005.811 0l3.384-3.384a4.107 4.107 0 000-5.811zM84.094 143.25c-33.257 0-60.156-26.899-60.156-60.156s26.899-60.156 60.156-60.156 60.156 26.899 60.156 60.156-26.899 60.156-60.156 60.156z"
            ></path>
          </g>
          <defs>
            <clipPath>
              <path transform="translate(13 12)" d="M0 0h175v175H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </div>
      <input
        type="text"
        class="
          relative
          z-10
          w-full
          px-12
          py-5
          text-lg
          leading-none
          transition-all
          duration-100
          bg-transparent
          outline-none
          focus:bg-white focus:px-5
          dark:focus:bg-theme-base-900 dark:text-theme-base-200
          placeholder-grey-700
          dark:placeholder-gray-400
          focus:placeholder-grey-500
          dark:focus:placeholder-grey-500 dark:placeholder-grey-200
          border-none
          rounded-box
        "
        placeholder="Search Pickans"
      />
      <div
        class="
          absolute
          top-0
          right-0
          flex flex-row
          items-center
          justify-center
          h-full
          px-6
          text-black
          dark:text-theme-base-200
        "
      >
        <div
          class="
            px-2
            py-1
            font-semibold
            leading-none
            border border-theme-base-100
            dark:border-theme-base-700
            rounded
            text-grey-600
            dark:text-grey-400 dark:border-grey-700
          "
        >
          #
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "SearchBar" };
</script>
