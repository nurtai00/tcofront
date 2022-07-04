<template>
  <div class="notification_item" :class="data.type" @click="remove">
    <i :class="`icon-${data.type} notification_item__icon`" />
    <div class="notification_item__content">
      <div class="notification_item__title">{{ data.title }}</div>
      <div class="notification_item__description">{{ data.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      autoDelete: setTimeout(() => {
        this.remove()
      }, 5000),
    }
  },
  beforeDestroy() {
    clearTimeout(this.autoDelete)
  },
  methods: {
    remove() {
      this.$notification.remove(this.data.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.notification {
  &_item {
    width: 100%;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 15px;
    cursor: pointer;

    &.error {
      background: $c-error;
    }
    &.success {
      background: $c-success;
    }

    &__icon {
      margin-right: 20px;
      font-size: 24px;
      color: white;
    }

    &__title {
      font-size: 1.2rem;
      color: white;
      margin-bottom: 6px;
    }

    &__description {
      font-size: 1rem;
      color: white;
    }
  }
}
</style>
