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
  @include tablet() {
    margin: 20px 0;
  }
  &__description {
    margin-top: 20px;
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
      margin-top: 12px;
    }
    &.between {
      p {
        margin-top: 20px;
        @include tablet() {
          font-size: 16px;
          line-height: 20px;
          margin-top: 12px;
        }
      }
    }
  }
  &__list {
    margin-top: 20px;
    margin-left: 20px;
    @include tablet() {
      margin-top: 12px;
    }
    ul {
      li {
        list-style: disc;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 28px;
        color: #30454e;
        @include tablet() {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
