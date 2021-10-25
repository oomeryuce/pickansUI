<template>
  <li>
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-2 lg:col-span-1">
        <div
          class="avatar flex justify-center"
          :class="[
            notification.user.pictureUrl ? '' : 'placeholder',
            notification.user.online ? 'online' : 'offline',
          ]"
        >
          <div
            v-if="notification.user.pictureUrl"
            class="rounded-btn w-20 h-20"
          >
            <img :src="notification.user.pictureUrl" />
          </div>
          <div
            v-else
            class="bg-primary text-neutral-content rounded-btn w-20 h-20"
          >
            <span class="text-3xl uppercase">{{
              getFirstChars(notification.user.name)
            }}</span>
          </div>
        </div>
      </div>
      <div class="col-span-4 lg:col-span-5 flex flex-col">
        <span class="text-lg">{{ notification.user.name }}</span>
        <small class="text-primary">Test Request</small>
        <p>"{{ notification.content }}"</p>
      </div>
      <div class="col-span-1 text-right">
        <small>{{ $moment(notification.time).toNow(true) }}</small>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "NotificationBody",
  props: {
    notification: {
      type: Object,
      default: null,
      required: true,
    },
  },

  methods: {
    getFirstChars(text) {
      const matches = text.match(/\b(\w)/g);
      return matches.join("");
    },
  },
};
</script>
