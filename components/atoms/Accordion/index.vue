<template>
  <div :class="['accordion', isOpen && 'open']" @click="$emit('click')">
    <!-- @slot текстовый слот, название аккордеон -->
    <slot />
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
  padding: 14px 20px;
  background: #a6d6ff;
  color: #0084f4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &::after {
    content: '';
    @include block(14px, 8px);
    @include bg('icons/arrow-bottom-blue.svg', center center/contain);
    @include trans(transform 0.3s ease);
  }

  &.open {
    &::after {
      transform: rotate(180deg);
    }
  }
}
</style>
