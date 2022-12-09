<template>
  <li>
    <nuxt-link :to="localePath(to)">
      <!-- @slot Текст ссылки -->
      <slot />
    </nuxt-link>
  </li>
</template>

<script>
/**
 * Хлебная крошка для навигации (одна ссылка)
 * @displayName BreadOption
 */
export default {
  name: 'BreadOption',
  props: {
    /**
     * Ссылка на страницу
     */
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scoped>
$bread-color: #0084f4;
li {
  display: flex;
  align-items: center;
  &:last-child a {
    color: #015467; // $bread-color;
  }

  > a {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #8c9fa6; // $c-grey;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &.nuxt-link-exact-active {
      color: #015467; // $bread-color;
      cursor: default;
    }
    &:active {
      transform: translateY(1px);
    }
    @include tablet() {
      font-size: 14px;
      line-height: 18px;
    }
  }

  + li {
    &::before {
      flex: none;
      content: '';

      @include block(18px, 14px);
      @include bg('icons/arrow-right-grey.png', center center/contain);
      margin: 0 11px;
    }
  }

  &:last-of-type {
    overflow: hidden;
  }
}
</style>
