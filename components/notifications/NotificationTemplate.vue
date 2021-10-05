<template>
  <div class="grid grid-cols-8 gap-4">
    <div
      class="
        col-span-8
        bg-base-100
        rounded-box
        shadow-lg
        p-4
        flex
        justify-between
        items-center
      "
    >
      <h1 class="text-2xl font-bold">Notifications</h1>
      <small v-if="notificationCount > 0" class="text-primary flex">
        You have {{ notificationCount }} new notification
        <span v-if="notificationCount > 1">s</span>
      </small>
    </div>
    <div class="col-span-8 flex flex-col mb-4">
      <ul
        v-for="(item, index) in notificationData"
        :key="item.id"
        class="list-none rounded-box shadow-lg"
      >
        <NotificationBody
          :notification="item"
          class="p-4"
          :class="[
            index === 0 ? 'rounded-t-box' : '',
            index === notificationData.length - 1 ? 'rounded-b-box' : '',
            item.read ? 'bg-base-100' : 'bg-base-300',
          ]"
        />
        <hr
          v-if="index !== notificationData.length - 1"
          class="border-base-200"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NotificationBody from "~/components/notifications/NotificationBody";
export default {
  name: "NotificationTemplate",
  components: { NotificationBody },

  computed: {
    ...mapGetters({
      notificationData: "notifications/notificationData",
      notificationCount: "notifications/notificationCount",
    }),
  },

  async beforeMount() {
    await this.getNotificationData(1);
  },

  methods: {
    ...mapActions({
      getNotificationData: "notifications/getNotificationData",
    }),
  },
};
</script>
