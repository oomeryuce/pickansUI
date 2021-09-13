<template>
  <div class="col-span-12 mb-3">
    <place-holder-loading v-if="!userDetail || loading" />
    <form v-else action="#" method="POST">
      <div class="p-4 shadow-md bg-base-100 rounded-t-box space-y-6">
        <FormInputs
          :value="$v.fullName.$model"
          placeholder="John Doe"
          input-type="text"
          label="Full Name"
          :error="$v.fullName.$error"
          :required="true"
          error-message="Please fill the field!"
          @input="(e) => ($v.fullName.$model = e)"
        />
        <FormInputs
          :value="$v.userName.$model"
          placeholder="johndoe"
          input-type="username"
          label="User Name"
          :error="$v.userName.$error"
          :required="true"
          error-message="Please fill the field!"
          @input="(e) => ($v.userName.$model = e)"
        />
        <div class="col-span-3 sm:col-span-2">
          <div class="form-control">
            <label for="tagline" class="label">
              <span class="font-medium text-sm">Profile Title</span>
            </label>
            <input
              id="tagline"
              v-model="title"
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
              v-model="bio"
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
              v-for="(item, index) in skills"
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
import { minLength, required } from "vuelidate/lib/validators";
import FormInputs from "~/components/UI/FormInputs";

export default {
  name: "ProfileSettings",
  components: { FormInputs },
  data() {
    return {
      fullName: null,
      userName: null,
      title: null,
      avatar: null,
      // coverImage: null,
      bio: null,
      skills: [],

      skillText: null,
    };
  },

  validations: {
    fullName: {
      required,
      minLength: minLength(5),
    },

    userName: {
      required,
      minLength: minLength(4),
    },
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
      this.$v.fullName.$model = newData.fullName;
      this.$v.userName.$model = newData.userName;
      this.bio = newData.bio ? newData.bio : "";
      this.title = newData.title ? newData.title : "";
      this.avatar = newData.profileUrl ? newData.profileUrl : "";
    },
  },

  beforeMount() {
    if (this.userDetail) {
      this.$v.fullName.$model = this.userDetail.displayName;
      this.$v.userName.$model = this.userDetail.userName;
      this.bio = this.userDetail.bio ? this.userDetail.bio : "";
      this.title = this.userDetail.title ? this.userDetail.title : "";
    }
  },

  methods: {
    ...mapActions({
      updateUserData: "users/updateUserData",
    }),

    addSkill(item) {
      this.skills.push(item);
      this.skillText = null;
    },

    deleteSkill(index) {
      this.skills.splice(index, 1);
    },

    avatarChange() {
      const input = document.getElementById("avatar");
      input.click();
    },

    async submit() {
      const payload = {
        uid: this.user.id,
        data: {
          fullName: this.fullName,
          userName: this.userName,
          title: this.title,
          bio: this.bio,
        },
      };
      await this.updateUserData(payload);
    },
  },
};
</script>
