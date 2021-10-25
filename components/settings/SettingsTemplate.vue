<template>
  <DefaultStructure :right="false">
    <div
      class="
        relative
        grid grid-cols-12
        gap-2
        px-2
        mx-auto
        md:gap-4
        xl:grid-cols-8
        2xl:px-5
        overflow-y-auto
      "
    >
      <div class="col-span-12 sm:col-span-12 md:col-span-4 xl:col-span-2">
        <SettingsTabs :active="activeTab" @tab-change="tabChange" />
      </div>
      <div class="col-span-12 md:pt-2 md:col-span-8 xl:col-span-6 py-2">
        <ProfileSettings v-if="activeTab === 'profile'" />
        <AccountSettings v-if="activeTab === 'account'" />
        <slot></slot>
      </div>
    </div>
  </DefaultStructure>
</template>

<script>
import { DefaultStructure } from "~/nuxt-dist/components";
import SettingsTabs from "~/components/settings/SettingsTabs";
import ProfileSettings from "~/components/settings/ProfileSettings";
import AccountSettings from "~/components/settings/AccountSettings";
export default {
  name: "SettingsTemplate",
  components: {
    SettingsTabs,
    ProfileSettings,
    DefaultStructure,
    AccountSettings,
  },

  data() {
    return {
      activeTab: "profile",
    };
  },

  methods: {
    tabChange(item) {
      this.activeTab = item;
    },
  },
};
</script>
