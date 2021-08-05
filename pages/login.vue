<template>
  <div class="container mx-auto">
    <div
      class="
        z-50
        flex flex-row
        items-start
        justify-center
        h-screen
        md:pt-20
        lg:pt-0
        md:items-center
      "
    >
      <button
        class="
          absolute
          top-0
          right-0
          mt-2
          ml-10
          button-transparent
          lg:right-auto lg:left-0 lg:mt-10
          font-medium
          leading-relaxed
          py-1
          px-3
          rounded-lg
          border border-transparent
          hover:bg-bluish-gray-100
        "
        type="button"
      >
        <svg class="w-8 h-8 fill-current" viewBox="0 0 320 512">
          <path
            d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
          ></path>
        </svg>
      </button>
      <div
        class="
          w-full
          overflow-hidden
          bg-white
          border
          rounded-lg
          shadow-lg
          md:mx-20
          lg:w-2/3
          dark:bg-brand-dark-grey-800 dark:border-bluish-gray-800
        "
      >
        <div
          class="px-4 py-8 leading-snug lg:w-3/4 lg:mx-auto lg:px-12 lg:py-12"
        >
          <div
            class="mb-8 text-brand-black dark:text-white justify-items-center"
          >
            <img
              src="~/static/img/pickans_beta_logo.png"
              alt="Pickans | Knowledge Sharing Platform"
              class="fill-current w-36 lg:w-48"
            />
          </div>
          <p
            class="
              mb-8
              text-lg
              font-semibold
              leading-snug
              tracking-tight
              text-bluish-gray-900
              dark:text-bluish-gray-100
            "
          >
            Sign in / Create an account
          </p>

          <div class="flex flex-row flex-wrap items-center mb-5">
            <input
              v-model="loginData.email"
              type="email"
              autofocus=""
              class="
                mb-4
                input-text
                w-full
                bg-transparent
                rounded-lg
                outline-none
                p-4
                border border-current border-bluish-gray-300
                placeholder-bluish-gray-400
              "
              placeholder="Enter your email address"
            />
            <input
              v-model="loginData.password"
              type="password"
              autofocus=""
              class="
                mb-4
                input-text
                w-full
                bg-transparent
                rounded-lg
                outline-none
                p-4
                border border-current border-bluish-gray-300
                placeholder-bluish-gray-400
              "
              placeholder="Password"
            />
            <button
              class="
                button-hn-primary
                py-3
                px-5
                bg-pickans-light
                rounded-lg
                border
                text-lg
                leading-snug
                font-bold
                text-white
                hover:shadow-md
                focus:outline-none
                inline-flex
                items-center
                order-transparent
                transition
                ease-in-out
                duration-150
              "
              type="button"
              @click="signIn"
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
              Submit
            </button>
          </div>
          <alerts-alert-component
            v-if="error || alert.type"
            :type="alert.type"
            :title="alert.title"
            :content="alert.content"
            class="my-5"
          />
          <h1
            class="
              mb-2
              text-base
              font-medium
              leading-tight
              text-bluish-gray-700
              dark:text-bluish-gray-400
            "
          >
            Or, connect with
          </h1>
          <div class="flex flex-row flex-wrap items-center -mx-2">
            <button
              type="button"
              class="
                flex flex-row
                items-center
                w-48
                p-4
                m-2
                text-white
                border
                rounded-lg
                dark:border-bluish-gray-800
                bg-github
              "
              @click="signUserInGithub"
            >
              <svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 496 512">
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path></svg
              ><span>GitHub</span></button
            ><button
              type="button"
              class="
                flex flex-row
                items-center
                w-48
                p-4
                m-2
                bg-white
                border
                rounded-lg
                dark:border-bluish-gray-800
              "
              @click="signUserInGoogle"
            >
              <svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 128 128">
                <g clip-rule="evenodd">
                  <path fill="none" d="M0 0h128v128H0z"></path>
                  <path
                    d="M27.585 64c0-4.157.69-8.143 1.923-11.881L7.938 35.648C3.734 44.183 1.366 53.801 1.366 64c0 10.191 2.366 19.802 6.563 28.332l21.558-16.503A37.86 37.86 0 0127.585 64"
                    fill="#FBBC05"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M65.457 26.182c9.031 0 17.188 3.2 23.597 8.436L107.698 16C96.337 6.109 81.771 0 65.457 0 40.129 0 18.361 14.484 7.938 35.648l21.569 16.471a37.77 37.77 0 0135.95-25.937"
                    fill="#EA4335"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M65.457 101.818a37.77 37.77 0 01-35.949-25.937L7.938 92.349C18.361 113.516 40.129 128 65.457 128c15.632 0 30.557-5.551 41.758-15.951L86.741 96.221c-5.777 3.639-13.052 5.597-21.284 5.597"
                    fill="#34A853"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M126.634 64c0-3.782-.583-7.855-1.457-11.636h-59.72v24.727h34.376c-1.719 8.431-6.397 14.912-13.092 19.13l20.474 15.828c11.766-10.92 19.419-27.188 19.419-48.049"
                    fill="#4285F4"
                    fill-rule="evenodd"
                  ></path>
                </g></svg
              ><span>Google</span></button
            ><a
              href="/auth/facebook"
              class="
                flex flex-row
                items-center
                w-48
                p-4
                m-2
                text-white
                border
                rounded-lg
                dark:border-bluish-gray-800
                bg-fb-variant
              "
              ><svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 512 512">
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                ></path></svg
              ><span>Facebook</span></a
            ><a
              href="/auth/linkedin"
              class="
                flex flex-row
                items-center
                w-48
                p-4
                m-2
                text-white
                border
                rounded-lg
                dark:border-bluish-gray-800
                bg-lnkin-variant
              "
              ><svg class="w-6 h-6 mr-2 fill-current" viewBox="0 0 448 512">
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                ></path></svg
              ><span>Linkedin</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { mapState, mapActions } from "vuex";
export default defineComponent({
  name: "Login",
  components: {},
  layout: "auth",
  middleware: "guest",
  data() {
    return {
      loginData: {
        email: null,
        password: null,
      },

      alert: {
        type: null,
        title: null,
        content: null,
      },
    };
  },

  head: {
    title: "Login",
  },

  computed: {
    ...mapState({
      user: (state) => state.users.user,
      loading: (state) => state.shared.loading,
      error: (state) => state.shared.error,
    }),
  },

  watch: {
    error(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.alert.type = "error";
        this.alert.title = "Sign In Error";
        this.alert.content = newValue.message;
      }
    },
  },

  methods: {
    ...mapActions({
      signUserIn: "users/signUserIn",
      signUserInGoogle: "users/signUserInGoogle",
      signUserInFacebook: "users/signUserInFacebook",
      signUserInGithub: "users/signUserInGithub",
    }),

    async signIn() {
      if (this.loginData.email && this.loginData.password) {
        await this.signUserIn(this.loginData);
        if (this.user) {
          this.alert.type = "success";
          this.alert.title = `Welcome ${this.user.name || "User"}!`;
          this.alert.content = "You are redirecting...";
          await this.$router.push("/");
        }
      }
    },
  },
});
</script>

<style>
/* .firebase-emulator-warning {
  display: none !important;
} */
</style>
