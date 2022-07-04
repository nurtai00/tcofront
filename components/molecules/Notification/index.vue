<template>
  <transition-group name="notification" class="notification" tag="div">
    <AtomsNotification
      v-for="notification in getNotification"
      :key="notification.id"
      :data="notification"
    />
  </transition-group>
</template>

<script>
/**
 * MOLECULES/Notification
 * @displayName Notification
 */
export default {
  name: 'Notification',
  computed: {
    getNotification() {
      return this.$store.state.notifications.notifications
    },
  },
}
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 400px;
  z-index: 20;
  max-height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @include tablet {
    width: 300px;
  }

  @include phone {
    left: 20px;
    width: 100%;
  }
}
</style>
