<template>
  <div class="col-span-12">
    <form action="#" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="col-span-3 sm:col-span-2">
            <label
              for="fullname"
              class="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <input
                id="fullname"
                v-model="userData.fullName"
                type="text"
                name="company-website"
                class="
                  focus:ring-pickans-light focus:border-pickans-light
                  flex-1
                  block
                  w-full
                  rounded-md
                  sm:text-sm
                  border-gray-300
                "
                placeholder="John Doe"
              />
            </div>
          </div>
          <div class="col-span-3 sm:col-span-2">
            <label
              for="tagline"
              class="block text-sm font-medium text-gray-700"
            >
              Profile Tagline
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <input
                id="tagline"
                v-model="userData.tagLine"
                type="text"
                name="company-website"
                class="
                  focus:ring-pickans-light focus:border-pickans-light
                  flex-1
                  block
                  w-full
                  rounded-md
                  sm:text-sm
                  border-gray-300
                "
                placeholder="Engineer, Editor, Developer etc."
              />
            </div>
          </div>

          <div>
            <label for="bio" class="block text-sm font-medium text-gray-700">
              About
            </label>
            <div class="mt-1">
              <textarea
                id="bio"
                v-model="userData.bio"
                name="about"
                rows="3"
                class="
                  shadow-sm
                  focus:ring-pickans-light focus:border-pickans-light
                  mt-1
                  block
                  w-full
                  sm:text-sm
                  border border-gray-300
                  rounded-md
                "
                placeholder="Say something about you."
              />
            </div>
            <p class="mt-2 text-sm text-gray-500">
              Brief description for your profile.
            </p>
          </div>

          <div>
            <div class="relative">
              <input
                type="text"
                class="
                  focus:ring-pickans-light focus:border-pickans-light
                  flex-1
                  block
                  w-full
                  rounded-md
                  sm:text-sm
                  border-gray-300
                "
                placeholder="Enter some skills"
              />
              <div class="hidden">
                <div class="absolute z-40 left-0 mt-2 w-full">
                  <div
                    class="
                      py-1
                      text-sm
                      bg-white
                      rounded
                      shadow-lg
                      border border-gray-300
                    "
                  >
                    <a
                      class="
                        block
                        py-1
                        px-5
                        cursor-pointer
                        hover:bg-indigo-600 hover:text-white
                      "
                      >Add skill "<span
                        class="font-semibold"
                        x-text="textInput"
                      ></span
                      >"</a
                    >
                  </div>
                </div>
              </div>
              <!-- selections -->
              <div
                class="
                  bg-blue-100
                  inline-flex
                  items-center
                  text-sm
                  rounded
                  mt-2
                  mr-1
                  overflow-hidden
                "
              >
                <span
                  class="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1"
                  x-text="tag"
                  >Skill</span
                >
                <button
                  type="button"
                  class="
                    w-6
                    h-8
                    inline-block
                    align-middle
                    text-gray-500
                    bg-blue-200
                    focus:outline-none
                  "
                >
                  <svg
                    class="w-6 h-6 fill-current mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <div class="mt-1 flex items-center">
              <span
                class="
                  inline-block
                  h-12
                  w-12
                  rounded-full
                  overflow-hidden
                  bg-gray-100
                "
              >
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <button
                type="button"
                class="
                  ml-5
                  bg-white
                  py-2
                  px-3
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-pickans-light
                "
              >
                Change
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Cover photo
            </label>
            <div
              class="
                mt-1
                flex
                justify-center
                px-6
                pt-5
                pb-6
                border-2 border-gray-300 border-dashed
                rounded-md
              "
            >
              <div class="space-y-1 text-center">
                <svg
                  class="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label
                    for="coverImage"
                    class="
                      relative
                      cursor-pointer
                      bg-white
                      rounded-md
                      font-medium
                      text-pickans-light
                      hover:text-pickans-darker
                      focus-within:outline-none
                      focus-within:ring-2
                      focus-within:ring-offset-2
                      focus-within:ring-indigo-500
                    "
                  >
                    <span>Upload a file</span>
                    <input
                      id="coverImage"
                      v-model="userData.coverImage"
                      name="file-upload"
                      type="image"
                      class="sr-only"
                      alt="Cover Image"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            class="
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-pickans-light
              hover:bg-pickans-darker
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-pickans-light
            "
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProfileSettings",
  data() {
    return {
      userData: {
        fullName: null,
        tagLine: null,
        profilePic: null,
        coverImage: null,
        bio: null,
        skills: null,
      },
    };
  },
};
</script>
