<template>
  <div class="accordion">
    <!-- @slot текстовый слот, название аккордеон -->
    <div class="accordion__title" @click="$emit('click')">
      <slot name="title" />
      <img
        src="@/assets/icons/arrow-bottom-blue.svg"
        alt="arrow"
        :class="{ open: isOpen }"
      />
    </div>
    <div v-if="isOpen" class="accordion__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderAccordion',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion {
  color: $c-dark;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &__content {
    padding: 20px 0;
    border-bottom: 1px solid rgba($c-text, 20%);
  }
  &__title {
    display: flex;
    padding: 20px 0;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba($c-text, 20%);
    img {
      width: 24px;
      height: 24px;
      border: 1px solid $c-base;
      padding: 5px;
      border-radius: 50%;
      background-color: #f2fbfe;
      @include trans(transform 0.3s ease);
      &.open {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
