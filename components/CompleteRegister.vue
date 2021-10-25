<template>
  <div class="grid grid-cols-1">
    <place-holder-loading v-if="loading" />
    <div
      v-else
      class="
        flex flex-col
        md:h-screen md:items-center md:justify-center
        items-start
        w-full
        p-3
        md:p-0
      "
    >
      <div
        class="
          grid grid-cols-7
          rounded-md
          shadow-2xl
          bg-base-100
          space-y-6
          p-5
          w-full
          lg:w-3/4
          md:w-2/3
        "
      >
        <div class="hidden lg:flex"></div>
        <div class="col-span-7 lg:col-span-5 space-y-8">
          <div>
            <small class="font-bold text-gray-500">
              {{ $t("register.title") }}
            </small>
            <p class="font-bold text-xl">
              🤘 {{ $t("register.subTitle1") }}
              <code class="text-green-500">git init</code>
              {{ $t("register.subTitle2") }}
            </p>
          </div>
          <div class="grid grid-cols-6 gap-4">
            <div
              class="
                col-span-4
                lg:col-span-4
                xl:col-span-5
                flex flex-col
                space-y-4
                lg:space-y-4
              "
            >
              <div class="grid grid-cols-4 items-center">
                <small class="font-semibold hidden lg:flex">
                  {{ $t("register.fullNameLabel") }}
                </small>
                <div class="col-span-4 lg:col-span-3">
                  <FormInputs
                    :value="$v.fullName.$model"
                    :placeholder="$t('register.fullNamePlaceHolder')"
                    input-type="text"
                    :label="isMobile ? $t('register.fillFieldError') : ''"
                    :error="$v.fullName.$error"
                    :required="true"
                    :error-message="$t('register.fillFieldError')"
                    @input="(e) => ($v.fullName.$model = e)"
                  />
                </div>
              </div>
              <div class="grid grid-cols-4 items-center">
                <small class="font-semibold hidden lg:flex">
                  {{ $t("register.userNameLabel") }}
                </small>
                <div class="col-span-4 lg:col-span-3">
                  <FormInputs
                    :value="$v.userName.$model"
                    :placeholder="$t('register.userNamePlaceHolder')"
                    input-type="username"
                    :label="isMobile ? $t('register.userNameLabel') : ''"
                    :error="$v.userName.$error"
                    :required="true"
                    :error-message="$t('register.fillFieldError')"
                    @input="(e) => ($v.userName.$model = e)"
                  />
                </div>
              </div>
              <div class="grid grid-cols-4 items-center">
                <small class="font-semibold hidden lg:flex">
                  {{ $t("register.titleLabel") }}
                </small>
                <div class="col-span-4 lg:col-span-3">
                  <FormInputs
                    :value="title"
                    :placeholder="$t('register.titlePlaceHolder')"
                    input-type="text"
                    :label="isMobile ? $t('register.titleLabel') : ''"
                    @input="(e) => (title = e)"
                  />
                </div>
              </div>
              <div class="grid grid-cols-4 items-center">
                <small class="font-semibold hidden lg:flex">
                  {{ $t("register.bioLabel") }}
                </small>
                <div class="col-span-4 lg:col-span-3">
                  <FormInputs
                    :value="bio"
                    :placeholder="$t('register.bioLabel')"
                    input-type="textarea"
                    :description="$t('register.bioDescription')"
                    :label="isMobile ? $t('register.bioLabel') : ''"
                    @input="(e) => (bio = e)"
                  />
                </div>
              </div>
              <div v-show="error" class="alert">
                <div class="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2196f3"
                    class="w-6 h-6 mx-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <label>{{ $t("register.fillReqFieldsMessage") }}</label>
                </div>
              </div>
              <div class="lg:w-1/2 text-xs pt-8">
                <small>
                  {{ $t("register.policy1") }}
                  <a
                    href="#"
                    target="_blank"
                    class="
                      link link-primary link-hover
                      hover:text-pickans-darker
                      dark:hover:text-white
                    "
                  >
                    {{ $t("register.policy2") }}
                  </a>
                  {{ $t("register.policy3") }}
                  <a
                    href="#"
                    target="_blank"
                    class="
                      link link-primary link-hover
                      hover:text-pickans-darker
                      dark:hover:text-white
                    "
                  >
                    {{ $t("register.policy4") }}
                  </a>
                  {{ $t("register.policy5") }}.
                </small>
              </div>
            </div>
            <div
              class="
                col-span-2
                lg-col-span-2
                xl:col-span-1
                flex flex-col
                justify-between
              "
            >
              <div class="flex flex-col justify-center items-center">
                <div class="mt-1 flex justify-center items-center">
                  <span
                    class="
                      inline-block
                      h-20
                      w-20
                      rounded-full
                      overflow-hidden
                      ring ring-primary
                      bg-gray-100
                    "
                  >
                    <img v-if="avatar" :src="avatar" alt="avatar" />
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
                  <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    alt="avatar"
                    hidden
                  />
                </div>
                <small
                  class="link link-hover mt-2 text-center"
                  @click="avatarChange"
                >
                  {{ $t("register.photoLabel") }}
                </small>
              </div>
              <button
                class="btn btn-primary p-0 capitalize font-bold"
                :disabled="loading"
                type="button"
                @click="submit"
              >
                <svg
                  v-if="loading"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {{ $t("register.next") }}
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden lg:flex"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
import FormInputs from "~/components/UI/FormInputs";

export default {
  name: "CompleteRegister",
  components: { FormInputs },
  data() {
    return {
      fullName: null,
      userName: null,
      title: null,
      bio: null,
      avatar: null,
      error: false,
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
      errors: "shared/error",
    }),

    isMobile() {
      return window.innerWidth < 1023;
    },
  },

  async beforeMount() {
    if (this.user) {
      await this.getUserData(this.user.id);
    }
  },

  methods: {
    ...mapActions({
      getUserData: "users/getUserData",
      setNewUserData: "users/setNewUserData",
    }),

    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.error = true;
      } else {
        const payload = {
          uid: this.user.id,
          data: {
            email: this.user.email,
            fullName: this.fullName,
            userName: this.userName,
            title: this.title,
            bio: this.bio,
            createdAt: Date.now(),
          },
        };
        await this.setNewUserData(payload);
        if (!this.errors) {
          await this.$router.push("/");
        }
      }
    },

    avatarChange() {
      const input = document.getElementById("avatar");
      input.click();
    },
  },
};
</script>
