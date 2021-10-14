<template>
  <Home>
    <NotificationTemplate />
  </Home>
</template>

<script>
import Home from "~/components/DefaultStructure";
import NotificationTemplate from "~/components/notifications/NotificationTemplate";
export default {
  name: "Index",
  components: { Home, NotificationTemplate },
};
</script>
