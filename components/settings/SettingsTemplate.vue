<template>
  <div class="container mx-auto">
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
      <SideBar active-page="settings" />
      <div
        class="
          col-span-2
          hidden
          sm:hidden
          md:block
          lg:block
          xl:block
          md:pt-2 md:col-span-4
          lg:col-span-3
          xl:col-span-2
        "
      >
        <SettingsTabs :active="activeTab" @tab-change="tabChange"></SettingsTabs>
      </div>
      <div
        class="col-span-12 md:pt-2 md:col-span-8 lg:col-span-7 xl:col-span-5"
      >
        <ProfileSettings v-if="activeTab === 'profile'" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsTabs from "~/components/settings/SettingsTabs";
import ProfileSettings from "~/components/settings/ProfileSettings";
export default {
  name: "SettingsTemplate",
  components: { SettingsTabs, ProfileSettings },
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
