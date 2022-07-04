<template>
  <li>
    <nuxt-link
      v-if="to"
      :to="to"
      :class="[
        isArrow && 'is-arrow',
        left && 'left',
        isActive && 'nuxt-link-exact-active',
      ]"
    >
      <slot />
    </nuxt-link>
    <a v-else>
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  name: 'PageButton',
  props: {
    to: {
      type: [String, Object],
      default: '',
    },
    isArrow: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
li {
  &:first-child {
    margin-right: auto;
  }
  &:last-child {
    margin-left: auto;
  }
  + li {
    margin-left: 12px;
    @include tablet {
      margin-left: 6px;
    }
  }
  a {
    font-size: 16px;
    line-height: 19px;
    color: $c-grey2;
    padding: 8px;
    min-width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    @include tablet {
      padding: 6px;
      width: 24px;
      height: 24px;
    }

    &.is-arrow {
      border-color: transparent;
      opacity: 1;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      @include tablet {
        width: 30px;
        height: 30px;
      }

      @include bg-size('icons/arrow-right.svg', 40px 40px, center/contain);

      &.left {
        @include bg-size('icons/arrow-left.svg', 40px 40px, center/contain);
      }
    }
    &:active {
      transform: translateY(1px);
    }
  }
}
li:not(:last-child) {
  .nuxt-link-exact-active {
    color: #a6d6ff;
  }
}
</style>
