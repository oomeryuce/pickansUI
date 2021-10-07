<template>
  <div
    class="bg-bluish-gray-50 antialiased min-h-screen dark:bg-theme-base-800"
  >
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { mapActions, mapState } from "vuex";
import firebase from "firebase";

export default defineComponent({
  name: "DefaultLayout",

  head() {
    return {
      htmlAttrs: {
        class: [this.theme],
        "data-theme": [this.theme],
      },
    };
  },

  computed: {
    ...mapState({
      userData: (state) => state.users.userData,
      user: (state) => state.users.user,
      theme: (state) => state.shared.theme,
    }),
  },

  async beforeMount() {
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

  mounted() {
    const self = this;
    setTimeout(function () {
      if (self.user && !self.userData) {
        self.$router.push("/register");
      }
    }, 1000);
  },

  methods: {
    ...mapActions({
      getTheme: "shared/getTheme",
      getUserData: "users/getUserData",
    }),
  },
});
</script>
