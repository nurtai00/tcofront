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
$hs: ('Montserrat' 56px 700 64px), ('Montserrat' 48px 700 56px),
  ('Montserrat' 38px 700 46px), ('Montserrat' 28px 700 32px),
  ('Roboto' 24px 700 28px), ('Roboto' 18px 500 22px);

@for $i from 1 through 6 {
  h#{$i} {
    font-family: nth(nth($hs, $i), 1);
    font-size: nth(nth($hs, $i), 2);
    font-weight: nth(nth($hs, $i), 3);
    line-height: nth(nth($hs, $i), 4);
    @include wide-tablet {
      font-size: calc(nth(nth($hs, $i), 2) - 8px);
      line-height: calc(nth(nth($hs, $i), 4) - 8px)
    }
    @include tablet {
      font-size: calc(nth(nth($hs, $i), 2) - 14px);
      line-height: calc(nth(nth($hs, $i), 4) - 14px)
    }
    @include phone() {
      font-size: 20px;
    }
  }
  // @include wide-tablet {
  //   font-size: calc(nth(nth($hs, $i), 2) - 8px);
  //   line-height: calc(nth(nth($hs, $i), 4) - 8px);
  // }
  // @include tablet {
  //   font-size: calc(nth(nth($hs, $i), 2) - 14px);
  //   line-height: calc(nth(nth($hs, $i), 4) - 14px);
  // }
  // @include phone() {
  //   font-size: 20px;
  // }
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
.black {
  color: $c-dark;
}
.title {
  color: $c-tco3;
}
.id_popup {
  color: rgba(1, 84, 103, 0.2);
}
</style>
