<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12 block lg:hidden p-2">
      <nav class="col-span-4 relative sm:max-w-xl">
        <label
          for="my-drawer-2"
          class="
            text-white
            w-12
            h-12
            relative
            focus:outline-none
            bg-pickans-light
            rounded
          "
          type="button"
        >
          <div
            class="
              block
              w-5
              absolute
              left-1/2
              top-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
            "
          >
            <span
              aria-hidden="true"
              class="
                block
                absolute
                h-0.5
                w-5
                bg-current
                transform
                transition
                duration-500
                ease-in-out
              "
              :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
            ></span>
            <span
              aria-hidden="true"
              class="
                block
                absolute
                h-0.5
                w-5
                bg-current
                transform
                transition
                duration-500
                ease-in-out
              "
              :class="{ 'opacity-0': open }"
            ></span>
            <span
              aria-hidden="true"
              class="
                block
                absolute
                h-0.5
                w-5
                bg-current
                transform
                transition
                duration-500
                ease-in-out
              "
              :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
            ></span>
          </div>
        </label>
      </nav>
      <n-link to="/" class="col-span-4 mx-auto justify-center">
        <img
          class="h-12"
          src="~/static/img/pickans_beta_logo.png"
          alt="Pickans | Knowledge Sharing Platform"
        />
      </n-link>
      <div
        class="
          col-span-4
          flex
          justify-end
          text-brand-grey-800
          dark:text-brand-grey-300
        "
      >
        <div class="relative mr-2 my-auto">
          <a
            href="/notifications"
            aria-label="Check notifications"
            class="
              notification-icon
              active
              hover:bg-white
              dark:hover:bg-theme-base-900
            "
            ><svg viewBox="0 0 448 512">
              <path
                d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z"
              ></path></svg
            ><span
              class="
                absolute
                top-0
                right-0
                px-2
                py-1
                -mt-1
                -mr-1
                leading-none
                text-white
                rounded-full
                text-lg
                shadow-lg
                bg-pickans-red
              "
              >{{ notificationCount }}</span
            ></a
          >
        </div>
        <div class="w-auto">
          <div class="dropdown dropdown-end">
            <div tabindex="0" class="avatar">
              <div
                class="
                  rounded-full
                  w-12
                  h-12
                  cursor-pointer
                  ring ring-primary ring-offset-base-100 ring-offset-2
                "
              >
                <img
                  :src="
                    user && user.photoUrl
                      ? user.photoUrl
                      : require('~/assets/svg/profile-user.svg')
                  "
                  alt="Your profile photo"
                />
              </div>
            </div>
            <div
              tabindex="0"
              class="
                p-2
                shadow
                menu
                dropdown-content
                bg-base-100
                rounded-box
                w-52
              "
            >
              <div v-if="user" role="none">
                <n-link
                  id="menu-item-0"
                  :to="userData ? `/@${userData.userName}` : '/profile'"
                  class="
                    block
                    px-4
                    py-2
                    hover:bg-blue-100 hover:text-theme-base-900 hover:rounded
                  "
                  >Profile</n-link
                >
                <a
                  id="menu-item-1"
                  class="
                    block
                    px-4
                    py-2
                    hover:bg-blue-100
                    cursor-pointer
                    hover:rounded hover:text-theme-base-900
                  "
                  @click="signOut"
                  >Logout</a
                >
              </div>
              <div v-else role="none">
                <n-link
                  id="menu-item-0"
                  to="/login"
                  class="
                    block
                    px-4
                    py-2
                    hover:bg-blue-100 hover:rounded hover:text-theme-base-900
                  "
                  >Login</n-link
                >
                <n-link
                  id="menu-item-0"
                  to="/login"
                  class="
                    block
                    px-4
                    py-2
                    hover:bg-blue-100 hover:rounded hover:text-theme-base-900
                  "
                  >Sign Up</n-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-lg bg-base-200 drawer drawer-mobile">
      <input
        id="my-drawer-2"
        type="checkbox"
        class="drawer-toggle hidden"
        @change="open = !open"
      />
      <div class="drawer-content grid grid-cols-12 xl:grid-cols-8 gap-4 px-4">
        <slot></slot>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <div
          class="flex flex-col h-full justify-between pt-2 w-80 lg:w-auto pl-2"
          :class="{ 'bg-base-200': open }"
        >
          <div>
            <n-link to="/" class="hidden lg:block">
              <img
                src="~/static/img/pickans_beta_logo.png"
                alt="Pickans | Knowledge Sharing Platform"
                class="w-44 p-4"
              />
            </n-link>
            <div class="px-4 lg:hidden">
              <SearchBar />
            </div>
            <div class="px-4 mb-5 xl:mb-8 w-full">
              <n-link class="btn btn-primary w-full rounded-md" to="/ask">
                <svg class="inline-block w-6 h-8 mr-1.5 fill-current">
                  <path
                    id="Path"
                    d="M10.9903997,0.484911091 C9.82083312,0.105330131 8.61306459,-0.023947442 7.37884858,0.00355842462 C6.32976497,0.0283137046 5.2924358,0.146588931 4.28155411,0.407894665 C3.49694536,0.611438078 2.75347715,0.889247331 2.04821086,1.24132242 L0,5.08114141 C0.141053258,4.99862381 3.97300011,2.42682528 8.40736192,3.1639825 C10.0412288,3.43629058 11.266629,4.34398419 11.9807111,5.77428925 C12.5596172,6.92953565 12.688916,8.14804555 12.4450114,9.40231307 C12.1746594,10.780357 11.5281653,12.0153704 10.7670654,13.2036238 C10.0059655,14.3891267 8.04297434,16.223768 7.40529607,17.6953319 C7.38178719,17.7448424 7.30244473,17.7310895 7.30244473,17.6788283 C7.18196174,14.859477 7.11731233,11.0361615 7.07029458,8.28832547 L3.71146386,8.39284776 C3.67620055,8.41210187 3.63799862,8.42860539 3.5997967,8.44785949 C3.55571756,8.46986419 3.50282258,8.54137944 3.5086998,8.57988765 C3.57334921,8.97597213 3.67620055,9.58385179 3.7526044,9.97993627 C3.89953487,10.7583523 4.04940396,11.5367683 4.19633444,12.3151843 C4.3373877,13.0605933 4.47844095,13.8032517 4.61949421,14.5459101 C4.76642469,15.3160744 4.91335517,16.0834881 5.06028564,16.8536523 C5.20427751,17.6018119 5.34533077,18.3499715 5.48638403,19.1008817 C5.63331451,19.8737965 5.78024498,20.6467114 5.93011407,21.4223768 C5.96537739,21.6149179 6.00357931,21.8074589 6.03884262,22 L7.70503424,21.840466 C7.69915702,21.2683439 7.66977093,21.2105816 7.62863039,20.6412102 C7.58161264,19.9233071 7.71385007,19.2659169 8.14288706,18.666289 C8.29569476,18.4489926 8.43968663,18.2261951 8.59837154,18.0116493 C9.33008532,17.0324405 10.1881593,16.1467516 11.025663,15.2473097 C12.3039582,13.8720164 13.599885,11.9768622 14.713618,10.4750419 C15.624587,9.2510308 16.0977031,7.91424568 15.9830973,6.40967477 C15.8890618,5.17741195 15.5423059,4.02491613 14.7723902,3.00444848 C13.8290965,1.75018096 12.5096609,0.980016691 10.9903997,0.484911091 Z"
                  ></path>
                  <path
                    id="Path"
                    d="M7.45682755,24.0004932 C6.05277997,24.030446 4.9736606,25.1446906 5.00048953,26.5464823 C5.02731846,27.9183211 6.17500067,29.0235799 7.54625733,28.9996176 C8.93838094,28.9726601 10.0234623,27.8494296 9.99961435,26.4626144 C9.96980443,25.0548322 8.84597016,23.9735357 7.45682755,24.0004932 Z"
                  ></path></svg
                ><span class="inline-block font-semibold text-lg">Ask</span>
              </n-link>
            </div>
            <ul class="menu p-4 space-y-1 text-base-content">
              <li>
                <n-link to="/" class="bg-base-200 rounded-md text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="w-6 h-6 mr-2"
                  >
                    <path
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM96 144a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H112a16 16 0 0 1-16-16zm96 224a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16zm160-96a16 16 0 0 1-16 16H112a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16z"
                      opacity=".4"
                    />
                    <path
                      d="M112 192h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm64 128h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm160-96H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
                      class="fa-primary"
                    />
                  </svg>
                  <div>My Feed</div>
                </n-link>
              </li>
              <li>
                <n-link to="/" class="bg-base-200 rounded-md text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    class="w-6 h-6 mr-2"
                  >
                    <!-- Font Awesome Pro 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->

                    <path
                      d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8ZM374.14,156.05l-66,144.35a31.94,31.94,0,0,1-15.77,15.77L148,382.17c-16.65,7.61-33.81-9.55-26.2-26.2l66-144.35a31.94,31.94,0,0,1,15.77-15.77l144.34-66c16.66-7.6,33.81,9.55,26.2,26.2Z"
                      opacity=".4"
                    />
                    <path
                      d="M348,129.85l-144.34,66a31.94,31.94,0,0,0-15.77,15.77L121.89,356c-7.61,16.65,9.55,33.81,26.2,26.2l144.34-66a32,32,0,0,0,15.77-15.8l66-144.35c7.55-16.65-9.6-33.8-26.2-26.2ZM270.63,278.62a32,32,0,1,1,0-45.25h0A32,32,0,0,1,270.63,278.62Z"
                      class="fa-primary"
                    />
                  </svg>
                  <div>Explore</div>
                </n-link>
              </li>
              <li>
                <n-link to="/" class="bg-base-200 rounded-md text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="w-6 h-6 mr-2"
                  >
                    <!-- Font Awesome Pro 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->

                    <path
                      d="M202.46 32.19a11.5 11.5 0 0 0-2.11-.19h-40.63a12 12 0 0 0-11.81 9.89L132.53 128h65l14.62-81.89a12 12 0 0 0-9.69-13.92zM72.19 465.89a12 12 0 0 0 9.7 13.92A11.5 11.5 0 0 0 84 480h40.64a12 12 0 0 0 11.81-9.89L186.11 192h-65zm163.65 0a12 12 0 0 0 9.7 13.92 11.5 11.5 0 0 0 2.11.19h40.63a12 12 0 0 0 11.82-9.89L315.47 384h-65zm130.27-433.7A11.5 11.5 0 0 0 364 32h-40.63a12 12 0 0 0-11.82 9.89L261.89 320h65l48.92-273.89a12 12 0 0 0-9.7-13.92z"
                      opacity=".4"
                    />
                    <path
                      d="M44.18 191.81a11.5 11.5 0 0 0 2.11.19H285l11-64H53.43a12 12 0 0 0-11.81 9.89l-7.14 40a12 12 0 0 0 9.7 13.92zM7.33 329.89l-7.14 40a12 12 0 0 0 9.7 13.92A11.5 11.5 0 0 0 12 384h75l11-64H19.15a12 12 0 0 0-11.82 9.89zm430.78-201.7A11.5 11.5 0 0 0 436 128h-75l-11 64h78.85a12 12 0 0 0 11.82-9.89l7.14-40a12 12 0 0 0-9.7-13.92zm-34.29 192a11.5 11.5 0 0 0-2.11-.19H163l-11 64h242.57a12 12 0 0 0 11.81-9.89l7.14-40a12 12 0 0 0-9.7-13.92z"
                      class="fa-primary"
                    />
                  </svg>
                  <div>Category</div>
                </n-link>
              </li>
              <li>
                <n-link to="/" class="bg-base-200 rounded-md text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    class="w-6 h-6 mr-2"
                  >
                    <!-- Font Awesome Pro 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->

                    <path
                      d="M96 224a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm448 0a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm32 32h-64a63.78 63.78 0 0 0-45.07 18.59A146.54 146.54 0 0 1 542.06 384H608a32 32 0 0 0 32-32v-32a64 64 0 0 0-64-64zm-512 0a64 64 0 0 0-64 64v32a32 32 0 0 0 32 32h65.94a146.54 146.54 0 0 1 75.13-109.41A63.78 63.78 0 0 0 128 256zM320 32l-48 24-48-24v80h192V32l-48 24z"
                      opacity=".4"
                    />
                    <path
                      d="M320 256a96 96 0 0 0 96-96v-16H224v16a96 96 0 0 0 96 96zm76.8 32h-8.31c-20.84 10-43.89 16-68.49 16s-47.64-6-68.49-16h-8.31A115.2 115.2 0 0 0 128 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.2 115.2 0 0 0 396.8 288z"
                      class="fa-primary"
                    />
                  </svg>
                  <div>Experts</div>
                </n-link>
              </li>
              <li>
                <n-link to="/" class="bg-base-200 rounded-md text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    class="w-6 h-6 mr-2"
                  >
                    <!-- Font Awesome Pro 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->

                    <path
                      d="M384 48v464L192 400 0 512V48A48 48 0 0 1 48 0h32v326.11a16 16 0 0 0 23.16 14.31L192 296l88.84 44.42A16 16 0 0 0 304 326.11V0h32a48 48 0 0 1 48 48z"
                      opacity=".4"
                    />
                    <path
                      d="M304 0v326.11a16 16 0 0 1-23.16 14.31L192 296l-88.84 44.42A16 16 0 0 1 80 326.11V0z"
                      class="fa-primary"
                    />
                  </svg>
                  <div>Saved</div>
                </n-link>
              </li>
              <li>
                <n-link to="/" class="bg-base-200 rounded-md text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-6 h-6 mr-2"
                  >
                    <!-- Font Awesome Pro 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->

                    <path
                      d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z"
                      opacity=".4"
                    />
                    <path
                      d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"
                      class="fa-primary"
                    />
                  </svg>
                  <div>Search</div>
                </n-link>
              </li>
              <li>
                <n-link to="/" class="bg-base-200 rounded-md text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="h-6 w-6 mr-2"
                  >
                    <!-- Font Awesome Pro 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) -->

                    <path
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-51.37 182.31L232.06 348.16a10.38 10.38 0 0 1-16.12 0L99.37 214.31C92.17 206 97.28 192 107.43 192h233.14c10.15 0 15.26 14 8.06 22.31z"
                      opacity=".4"
                    />
                    <path
                      d="M348.63 214.31L232.06 348.16a10.38 10.38 0 0 1-16.12 0L99.37 214.31C92.17 206 97.28 192 107.43 192h233.14c10.15 0 15.26 14 8.06 22.31z"
                      class="fa-primary"
                    />
                  </svg>
                  <div>More</div>
                </n-link>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-center flex-shrink-0 mb-10">
            <dark-mode-button class="-mt-28 lg:mt-0" />
            <div class="relative mr-2 md:mr-0 hidden lg:block">
              <a
                href="/notifications"
                aria-label="Check notifications"
                class="
                  md:mb-2
                  notification-icon
                  active
                  hover:bg-white
                  dark:hover:bg-theme-base-900
                "
                ><svg viewBox="0 0 448 512">
                  <path
                    d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z"
                  ></path></svg
                ><span
                  class="
                    absolute
                    top-0
                    right-0
                    px-2
                    py-1
                    -mt-1
                    -mr-1
                    leading-none
                    text-white
                    rounded-full
                    text-lg
                    shadow-lg
                    bg-pickans-red
                  "
                  >{{ notificationCount }}</span
                ></a
              >
            </div>
            <div class="w-auto hidden lg:block">
              <div class="dropdown dropdown-right dropdown-end dropdown-hover">
                <div tabindex="0" class="avatar">
                  <div
                    class="
                      rounded-full
                      w-14
                      h-14
                      cursor-pointer
                      ring ring-primary ring-offset-base-100 ring-offset-2
                    "
                  >
                    <img
                      :src="
                        user && user.photoUrl
                          ? user.photoUrl
                          : require('~/assets/svg/profile-user.svg')
                      "
                      alt="Your profile photo"
                    />
                  </div>
                </div>
                <div
                  tabindex="0"
                  class="
                    p-2
                    shadow
                    menu
                    dropdown-content
                    bg-base-100
                    rounded-box
                    w-40
                  "
                >
                  <div v-if="user" role="none">
                    <n-link
                      id="menu-item-0"
                      :to="userData ? `/@${userData.userName}` : '/profile'"
                      class="
                        block
                        px-4
                        py-2
                        hover:bg-blue-100
                        hover:text-theme-base-900
                        hover:rounded
                      "
                      >Profile</n-link
                    >
                    <a
                      class="
                        block
                        px-4
                        py-2
                        hover:bg-blue-100
                        cursor-pointer
                        hover:rounded hover:text-theme-base-900
                      "
                      @click="signOut"
                      >Logout</a
                    >
                  </div>
                  <div v-else role="none">
                    <n-link
                      id="menu-item-0"
                      to="/login"
                      class="
                        block
                        px-4
                        py-2
                        hover:bg-blue-100
                        hover:rounded
                        hover:text-theme-base-900
                      "
                      >Login</n-link
                    >
                    <n-link
                      id="menu-item-0"
                      to="/login"
                      class="
                        block
                        px-4
                        py-2
                        hover:bg-blue-100
                        hover:rounded
                        hover:text-theme-base-900
                      "
                      >Sign Up</n-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SearchBar from "~/components/UI/SearchBar.vue";
export default {
  name: "SideBar",
  components: { SearchBar },
  props: {
    /* activePage: {
        type: String,
        default: "feed",
      }, */
  },

  data() {
    return {
      // scrollY: 0,
      // isOpen: false,
      open: false,
      menuShow: false,
    };
  },

  computed: {
    user() {
      return this.$store.getters["users/user"];
    },

    userData() {
      return this.$store.getters["users/userData"];
    },

    notificationCount() {
      return this.$store.getters["notifications/notificationCount"];
    },
  },

  beforeMount() {
    document.addEventListener("click", this.documentClick);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.documentClick);
  },

  methods: {
    ...mapActions({
      logout: "users/logout",
    }),

    documentClick(e) {
      try {
        if (this.menuShow) {
          const el = this.$refs.dropdown;
          const el2 = this.$refs.dropdown2;
          const target = e.target;
          if (
            el !== target &&
            !el.contains(target) &&
            el2 !== target &&
            !el2.contains(target)
          ) {
            this.menuShow = false;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },

    signOut() {
      this.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.active {
  @apply text-pickans-light;
}

.notification-icon {
  @apply flex flex-row items-center font-medium text-lg leading-snug p-2 tracking-tight w-full rounded-lg justify-center;
}
.notification-icon svg {
  fill: currentColor;
  animation: phone-icon 2000ms infinite;
  animation-iteration-count: 5;
  @apply h-8 w-8;
}

@keyframes phone-icon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  2% {
    transform: translate3d(0.08em, 0, 0);
  }
  4% {
    transform: translate3d(-0.08em, 0, 0);
  }
  6% {
    transform: translate3d(0.08em, 0, 0);
  }
  8% {
    transform: translate3d(-0.08em, 0, 0);
  }
  10% {
    transform: translate3d(0.08em, 0, 0);
  }
  12% {
    transform: translate3d(-0.08em, 0, 0);
  }
  14% {
    transform: translate3d(0.08em, 0, 0);
  }
  16% {
    transform: translate3d(-0.08em, 0, 0);
  }
  18% {
    transform: translate3d(0.08em, 0, 0);
  }
  20% {
    transform: translate3d(-0.08em, 0, 0);
  }
  22% {
    transform: translate3d(0.08em, 0, 0);
  }
  24% {
    transform: translate3d(-0.08em, 0, 0);
  }
  26% {
    transform: translate3d(0.08em, 0, 0);
  }
  28% {
    transform: translate3d(-0.08em, 0, 0);
  }
  30% {
    transform: translate3d(0.08em, 0, 0);
  }
  32% {
    transform: translate3d(-0.08em, 0, 0);
  }
  34% {
    transform: translate3d(0.08em, 0, 0);
  }
  36% {
    transform: translate3d(-0.08em, 0, 0);
  }
  38% {
    transform: translate3d(0.08em, 0, 0);
  }
  40% {
    transform: translate3d(-0.08em, 0, 0);
  }
  42% {
    transform: translate3d(0.08em, 0, 0);
  }
  44% {
    transform: translate3d(-0.08em, 0, 0);
  }
  46% {
    transform: translate3d(0, 0, 0);
  }
}

.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 1.375;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  letter-spacing: -0.025em;
  width: 100%;
}
.menu-item svg {
  flex-shrink: 0;
  height: 1.5rem;
  margin-right: 0.5rem;
  opacity: 0.75;
  fill: currentColor;
  width: 1.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media (min-width: 1024px) {
  .drawer-mobile > .drawer-toggle ~ .drawer-side {
    overflow-y: unset;
  }
}
</style>
