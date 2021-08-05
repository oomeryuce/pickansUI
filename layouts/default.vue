<template>
  <div class="bg-bluish-gray-50 antialiased min-h-screen">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { mapGetters } from "vuex";
import firebase from "firebase";

export default defineComponent({
  name: "DefaultLayout",
  components: {},
  computed: {
    ...mapGetters({
      user: "users/user",
    }),
  },

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
