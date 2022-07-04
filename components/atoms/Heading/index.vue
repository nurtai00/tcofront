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
.main {
  color: $c-text;
}
.base {
  color: $c-base;
}
.blue {
  color: $c-main;
}
.white {
  color: #fff;
}
</style>
