<template>
  <div class="col-span-12 mb-3">
    <place-holder-loading
      v-if="(!user && !userDetail) || loading || changing"
    />
    <form v-else action="#" method="POST">
      <div class="p-4 shadow-md bg-base-100 rounded-t-box space-y-6">
        <div class="form-control w-full max-w-xs">
          <label for="lang" class="label">
            <span class="label-text">{{ $t("settings.account.title1") }}</span>
          </label>
          <select
            id="lang"
            v-model="selectedLanguage"
            class="select select-bordered select-primary w-full"
          >
            <option
              v-for="language in languages"
              :key="language.code"
              :selected="language.iso === selectedLanguage ? 'selected' : ''"
              :value="language.iso"
            >
              {{ language.name }}
            </option>
          </select>
        </div>
      </div>
      <div
        class="bg-base-200 px-4 py-3 text-right sm:px-6 rounded-b-box shadow-lg"
      >
        <button class="btn btn-primary py-0 ml-3" type="button" @click="submit">
          {{ $t("settings.save") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProfileSettings",
  data() {
    return {
      selectedLanguage: "en-EN",
      changing: false,
    };
  },

  computed: {
    ...mapState({
      userDetail: (state) => state.users.userDetail,
      user: (state) => state.users.user,
      loading: (state) => state.shared.loading,
    }),

    languages() {
      return this.$i18n.locales;
    },
  },

  mounted() {
    const lang = this.$i18n.getLocaleCookie();
    this.selectedLanguage = lang + "-" + lang.toUpperCase();
  },

  methods: {
    updateLanguage() {
      this.changing = true;
      const lang = this.languages.find(
        (language) => language.iso === this.selectedLanguage
      );
      this.$i18n.setLocale(lang.code);
      this.$i18n.setLocaleCookie(lang.code);
      this.changing = false;
    },

    async submit() {
      await this.updateLanguage();
    },
  },
};
</script>
