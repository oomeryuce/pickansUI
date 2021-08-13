<template>
  <div>
    <SettingsTemplate>
      <div class="w-full bg-pickans-light hidden">Test Slot</div>
    </SettingsTemplate>
  </div>
</template>

<script>
import SettingsTemplate from "~/components/settings/SettingsTemplate";
export default {
  name: "Index",
  components: { SettingsTemplate },
};
</script>
