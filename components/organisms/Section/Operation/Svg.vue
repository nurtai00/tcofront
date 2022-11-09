<template>
  <div class="block">
    <div class="container">
      <div class="block__content">
        <AtomsHeading type="h3" class="block__title title">
          {{ data.title }}
        </AtomsHeading>
        <div class="block__description">
          {{ data.description }}
        </div>
      </div>
      <div class="block__icon">
        <i :class="`icon-${data.icon}`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OperationSvg',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.block {
  background-color: $c-tco33;
  padding: 40px 0 48px;

  & > div {
    display: flex;
    align-items: center;
  }

  &__content {
    padding-right: 130px;
  }

  &__title {
    margin-bottom: 40px;
  }

  &__description {
    font-size: 20px;
    line-height: 28px;
  }

  &__icon {
    i {
      font-size: 200px;
      color: $c-tco3;
    }
  }
}
</style>
