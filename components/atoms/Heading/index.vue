<template>
  <component :is="type.toLowerCase()">
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
  },
}
</script>

<style lang="scss" scoped>
$hs: (24px 800 29px), (24px 600 29px), (16px 800 20px), (16px 700 20px),
  (16px 500 20px), (14px 500 18px);

@for $i from 1 through 6 {
  h#{$i} {
    font-size: nth(nth($hs, $i), 1);
    font-weight: nth(nth($hs, $i), 2);
    line-height: nth(nth($hs, $i), 3);
  }
}
</style>
