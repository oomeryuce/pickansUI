<template>
  <div
    class="bg-bluish-gray-50 antialiased min-h-screen dark:bg-theme-base-800"
  >
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase";

export default defineComponent({
  name: "DefaultLayout",

  head() {
    return {
      htmlAttrs: {
        class: [this.theme],
      },
    };
  },

  computed: {
    ...mapGetters({
      user: "users/user",
      userData: "users/userData",
      theme: "shared/theme",
    }),
  },

  async created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("users/autoSignIn", user, { root: true });
        if (!this.userData) {
          this.getUserData(user.uid);
        }
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
