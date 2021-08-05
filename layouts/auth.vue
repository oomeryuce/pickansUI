<template>
  <div class="relative bg-bluish-gray-50 antialiased min-h-screen">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import firebase from "firebase/app";

export default defineComponent({
  name: "AuthLayout",
  components: {},
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("users/autoSignIn", user, { root: true });
        this.$router.push("/");
      }
    });
  },
});
</script>
