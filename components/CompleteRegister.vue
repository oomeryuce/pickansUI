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
        class="shadow-md bg-primary rounded-t-box p-5 w-full md:w-2/3 lg:w-1/2"
      >
        <span class="text-xl card-title text-white">Complete Register</span>
      </div>
      <div
        class="
          flex flex-col
          shadow-md
          bg-base-100
          rounded-b-box
          space-y-6
          p-5
          w-full
          lg:w-1/2
          md:w-2/3
        "
      >
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
        <FormInputs
          :value="title"
          placeholder="Engineer, Editor, Developer etc."
          input-type="text"
          label="Title"
          @input="(e) => (title = e)"
        />
        <FormInputs
          :value="bio"
          placeholder="Say something about you."
          input-type="textarea"
          description="Brief description for your profile."
          label="About"
          @input="(e) => (bio = e)"
        />
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
            <label>Please fill the required fields!</label>
          </div>
        </div>
        <div class="text-right">
          <button
            class="btn btn-primary"
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
            Save
          </button>
        </div>
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
  },
};
</script>
