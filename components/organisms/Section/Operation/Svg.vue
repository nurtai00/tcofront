<template>
  <div class="block">
    <div class="container">
      <div class="block__content">
        <AtomsHeading type="h3" class="block__title title">
          {{ data.title }}
        </AtomsHeading>
<<<<<<< HEAD
        <div class="block__description">
          {{ data.description }}
=======
        <div class="block__content_icon">
          <i :class="`icon-${data.icon}`" />
        </div>
        <div class="block__description">
          <template v-if="data.description">
            {{ data.description }}
          </template>
          <template v-else>
            <slot name="description" />
          </template>
>>>>>>> 23026837d9aece81f91d7ef3b00f4fdc295a9903
        </div>
      </div>
      <div class="block__icon">
        <i :class="`icon-${data.icon}`" />
      </div>
    </div>
<<<<<<< HEAD
=======
    <div class="container footer">
      <slot name="footer" />
    </div>
>>>>>>> 23026837d9aece81f91d7ef3b00f4fdc295a9903
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
<<<<<<< HEAD
=======

    &_icon {
      display: none;
      font-size: 240px;
      text-align: center;
    }
>>>>>>> 23026837d9aece81f91d7ef3b00f4fdc295a9903
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
<<<<<<< HEAD
=======

  .footer {
    margin-top: 20px;
  }

  @include tablet {
    padding: 20px 0;

    &__icon {
      display: none;
    }

    &__content {
      padding-right: 0;

      &_icon {
        display: block;
      }
    }
  }

  @include phone {
    &__description {
      font-size: 16px;
      line-height: 20px;
    }

    &__content_icon {
      font-size: 125px;
    }
  }
>>>>>>> 23026837d9aece81f91d7ef3b00f4fdc295a9903
}
</style>
