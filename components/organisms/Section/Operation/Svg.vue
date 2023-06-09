<template>
  <div class="block">
    <div class="container">
      <div class="block__wrapper">
        <div class="block__content">
          <AtomsHeading type="h3" class="block__title title">
            {{ data.title }}
          </AtomsHeading>
          <div class="block__content_icon">
            <img :src="data.icon" alt="icon" />
          </div>
          <div class="block__description">
            <template v-if="data.description">
              {{ data.description }}
            </template>
            <template v-else>
              <slot name="description" />
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="container footer">
      <slot name="footer" />
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

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__content {
    padding-right: 40px;
    width: 70%;
    @include phone {
      width: 100%;
    }
    &_icon {
      display: none;
      font-size: 240px;
      text-align: center;
    }
  }

  &__title {
    // margin-left: 10px;
    margin-bottom: 40px;
  }

  &__description {
    font-family: 'Roboto';
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    color: $c-tco1;
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__icon {
    max-width: 500px;
    i {
      font-size: 200px;
      color: $c-tco3;
    }
  }

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
      p {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &__content_icon {
      font-size: 80px;

      img {
        width: 150px;
      }
    }
  }
}
</style>
