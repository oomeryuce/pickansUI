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
      },
    };
  },

  computed: {
    ...mapGetters({
      theme: "shared/theme",
    }),
  },

  async created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("users/autoSignIn", user, { root: true });
        this.$router.push("/");
      }
    });
    await this.getTheme();
  },

  methods: {
    ...mapActions({
      getTheme: "shared/getTheme",
    }),
  },
});
</script>
