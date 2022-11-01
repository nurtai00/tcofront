<template>
  <component :is="type.toLowerCase()" :class="color">
    <!--
      @slot slot for type of component
    -->
    <slot></slot>
  </component>
</template>

<script>
/**
 * Common heading component
 * @displayName Heading
 */
export default {
  name: 'Heading',
  props: {
    /**
     * type of heading (level)
     * @values h1, h2, h3, h4, h5, h6
     */
    type: {
      type: String,
      default: 'h1',
      required: true,
    },
    color: {
      type: String,
      default: 'main',
    },
  },
}
</script>

<style lang="scss" scoped>
$hs: (56px 700 64px), (38px 700 46px), (24px 800 28px), (16px 700 20px),
  (16px 500 20px), (14px 500 18px);

@for $i from 1 through 6 {
  h#{$i} {
    font-size: nth(nth($hs, $i), 1);
    font-weight: nth(nth($hs, $i), 2);
    line-height: nth(nth($hs, $i), 3);
  }
}
.main {
  color: $c-main;
}
.base {
  color: $c-base;
}
.text {
  color: $c-text;
}
.white {
  color: #fff;
}
</style>
