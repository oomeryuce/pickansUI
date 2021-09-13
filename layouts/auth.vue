<template>
  <div
    class="
      relative
      bg-bluish-gray-50
      antialiased
      min-h-screen
      dark:bg-theme-base-800
    "
  >
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import firebase from "firebase/app";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "AuthLayout",

  head() {
    return {
      htmlAttrs: {
        class: [this.theme],
        "data-theme": [this.theme],
      },
    };
  },

  computed: {
    ...mapGetters({
      theme: "shared/theme",
      userData: "users/userData",
    }),
  },

  async created() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await this.getUserData(user.uid);
      }
      if (user && this.userData) {
        await this.$store.dispatch("users/autoSignIn", user, { root: true });
        await this.$router.push("/");
      } else if (user && !this.userData) {
        await this.$store.dispatch("users/autoSignIn", user, { root: true });
      }
    });
    await this.getTheme();
  },

  methods: {
    ...mapActions({
      getTheme: "shared/getTheme",
      getUserData: "users/getUserData",
    }),
  },
});
</script>
