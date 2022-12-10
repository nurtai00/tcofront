<template>
  <div class="accordion">
    <!-- @slot текстовый слот, название аккордеон -->
    <div
      class="accordion__title"
      :class="{ filled, open: isOpen }"
      @click="$emit('click')"
    >
      <slot name="title" />
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ open: isOpen, filled }"
      >
        <path
          d="M1 1.30981L7 7.30981L13 1.30981"
          stroke="#0084F4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div v-if="isOpen" class="accordion__content" :class="{ filled }">
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
    filled: {
      type: Boolean,
      default: false,
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
    padding: 24px;
    border-bottom: 1px solid rgba($c-text, 20%);
    &.filled {
      padding: 0;
      border-bottom: none;
    }
  }
  &__title {
    display: flex;
        padding: 24px 0 40px 24px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba($c-text, 20%);
    &.filled {
      background-color: #f2f6f7;
      padding: 20px 10px;
      &.open {
        border-bottom: none;
      }
    }
    svg {
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
      &.filled {
        background-color: $c-main;
        border-color: $c-main;
        path {
          stroke: white;
        }
      }
    }
  }
}
</style>
