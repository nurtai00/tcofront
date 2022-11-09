<template>
  <div class="content">
    <AtomsHeading type="h3">{{ title }}</AtomsHeading>
    <p class="content__description">
      <slot name="description" />
    </p>
    <div class="content__list">
      <slot name="list" />
    </div>
    <div class="content__description between">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.content {
  margin: 40px 0;
  max-width: 776px;
  @include phone() {
    margin: 20px 0;
  }
  &__description {
    display: block;
    margin-top: 20px;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    line-height: 28px;
    color: $c-text;
    &.between {
      p {
        display: block;
        margin-top: 20px;
        font-size: 20px;
        font-family: Roboto, sans-serif;
        line-height: 28px;
        color: $c-text;
        @include phone() {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    @include phone() {
      font-size: 16px;
      font-weight: 500;
    }
  }
  &__list {
    margin-top: 20px;
    margin-left: 20px;
    ul {
      li {
        list-style: disc;
        line-height: 26px;
        font-size: 16px;
        color: $c-text;
      }
    }
  }
}
</style>
