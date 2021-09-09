<template>
  <div class="col-span-12 mb-3">
    <place-holder-loading v-if="!userDetail || loading" />
    <form v-else action="#" method="POST">
      <div class="p-4 shadow-md bg-base-100 rounded-t-box space-y-6">
        <div class="col-span-3 sm:col-span-2">
          <div class="form-control">
            <label for="fullname" class="label">
              <span class="font-medium text-sm">Full Name</span>
            </label>
            <input
              id="fullname"
              v-model="userData.fullName"
              type="text"
              placeholder="John Doe"
              class="input input-primary input-info bg-base-200"
            />
          </div>
        </div>
        <div class="col-span-3 sm:col-span-2">
          <div class="form-control">
            <label for="username" class="label">
              <span class="font-medium text-sm">User Name</span>
            </label>
            <div class="relative">
              <span class="absolute top-0 left-0 rounded-r-none btn btn-primary"
                >@</span
              >
              <input
                id="username"
                v-model="userData.userName"
                type="text"
                placeholder="johndoe"
                class="w-full pl-20 input input-primary input-info bg-base-200"
              />
            </div>
          </div>
        </div>
        <div class="col-span-3 sm:col-span-2">
          <div class="form-control">
            <label for="tagline" class="label">
              <span class="font-medium text-sm">Profile Tagline</span>
            </label>
            <input
              id="tagline"
              v-model="userData.tagLine"
              type="text"
              placeholder="Engineer, Editor, Developer etc."
              class="input input-primary input-info bg-base-200"
            />
          </div>
        </div>

        <div>
          <div class="form-control">
            <label for="bio" class="label">
              <span class="text-sm font-medium">About</span>
            </label>
            <textarea
              id="bio"
              v-model="userData.bio"
              class="textarea h-24 textarea-bordered textarea-info bg-base-200"
              placeholder="Say something about you."
            ></textarea>
          </div>
          <p class="mt-2 text-xs text-theme-base-300 dark:text-theme-base-700">
            Brief description for your profile.
          </p>
        </div>

        <div>
          <div class="relative">
            <div class="form-control">
              <label for="skills" class="label">
                <span class="font-medium text-sm">Skills</span>
              </label>
              <input
                id="skills"
                v-model="skillText"
                type="text"
                placeholder="Enter some skills"
                autocomplete="off"
                class="input input-primary input-info bg-base-200"
              />
            </div>
            <div :class="skillText ? 'block' : 'hidden'">
              <div class="absolute z-40 left-0 mt-2 w-full">
                <div
                  class="
                    text-sm
                    bg-white
                    rounded
                    shadow-lg
                    border border-theme-base-100
                    dark:bg-pickans-darker
                    dark:text-theme-base-200
                    dark:border-info
                  "
                >
                  <a
                    class="
                      block
                      py-2
                      px-5
                      cursor-pointer
                      rounded
                      hover:bg-info hover:text-white
                      bg-base-200
                    "
                    @click="addSkill(skillText)"
                    >Add skill "<span class="font-semibold">{{
                      skillText
                    }}</span
                    >"</a
                  >
                </div>
              </div>
            </div>
            <!-- selections -->
            <div
              v-for="(item, index) in userData.skills"
              :key="index"
              class="
                inline-flex
                items-center
                text-sm
                rounded
                mt-2
                mr-1
                overflow-hidden
              "
            >
              <div class="badge badge-info badge-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="
                    inline-block
                    w-4
                    h-4
                    mr-2
                    stroke-current
                    cursor-pointer
                  "
                  @click="deleteSkill(index)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                {{ item }}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label
            class="
              block
              text-sm
              font-medium
              text-theme-base-900
              dark:text-theme-base-300
            "
          >
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
              <img
                v-if="userDetail.avatar"
                :src="userDetail.avatar"
                alt="avatar"
              />
              <svg
                v-else
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
              class="btn btn-primary btn-sm py-0 ml-3"
              type="button"
              @click="avatarChange"
            >
              Change
            </button>
            <input id="avatar" name="avatar" type="file" alt="avatar" hidden />
          </div>
        </div>
        <!--
        <div>
          <label
            class="
              block
              text-sm
              font-medium
              text-theme-base-900
              dark:text-theme-base-200
            "
          >
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
              dark:border-theme-base-700
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
              <div
                class="flex text-sm text-gray-600 dark:text-theme-base-300"
              >
                <label
                  for="coverImage"
                  class="
                    relative
                    cursor-pointer
                    rounded-md
                    font-medium
                    text-pickans-light
                    hover:text-theme-base-500
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
        -->
      </div>
      <div
        class="bg-base-200 px-4 py-3 text-right sm:px-6 rounded-b-box shadow-md"
      >
        <button class="btn btn-primary py-0 ml-3" type="button" @click="submit">
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProfileSettings",
  data() {
    return {
      userData: {
        fullName: null,
        userName: null,
        tagLine: null,
        avatar: null,
        // coverImage: null,
        bio: null,
        skills: [],
      },

      skillText: null,
    };
  },

  computed: {
    ...mapGetters({
      userDetail: "users/userData",
      user: "users/user",
      loading: "shared/loading",
    }),
  },

  watch: {
    userDetail(newData) {
      this.userData.fullName = newData.displayName;
      this.userData.userName = newData.userName;
      this.userData.bio = newData.bio;
      this.userData.tagLine = newData.tagline;
      this.userData.avatar = newData.profileUrl;
    },
  },

  beforeMount() {
    if (this.userDetail) {
      this.userData.fullName = this.userDetail.displayName;
      this.userData.userName = this.userDetail.userName;
      this.userData.bio = this.userDetail.bio;
      this.userData.tagLine = this.userDetail.tagline;
    }
  },

  methods: {
    ...mapActions({
      updateUserData: "users/updateUserData",
    }),

    addSkill(item) {
      this.userData.skills.push(item);
      this.skillText = null;
    },

    deleteSkill(index) {
      this.userData.skills.splice(index, 1);
    },

    avatarChange() {
      const input = document.getElementById("avatar");
      input.click();
    },

    async submit() {
      const payload = {
        uid: this.user.id,
        data: this.userData,
      };
      await this.updateUserData(payload);
    },
  },
};
</script>
