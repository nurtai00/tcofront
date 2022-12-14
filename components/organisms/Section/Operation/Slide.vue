<template>
  <div
    class="slide"
    :class="{ side, background: data.background, reverse: isReverse }"
  >
    <div
      class="slide__content container"
      :class="{ slided: slide, reverse: isReverse }"
    >
      <AtomsHeading v-if="data.title" type="h3" class="slide__title title">
        {{ data.title }}
      </AtomsHeading>
      <div
        v-if="data.description"
        class="slide__description"
        :class="{ reverse: isReverse, solo: data.desciptionSolo }"
      >
        <div
          v-for="(text, key) in data.description"
          :key="key"
          class="slide__description_item"
        >
          {{ text }}
        </div>
      </div>
      <template v-else>
        <slot />
      </template>
      <template v-if="data.description">
        <div v-if="data.description.length > 1" class="slide__arrow">
          <div role="button" class="arrow__left" @click="onSlide(false)">
            <img alt="arrow" src="@/assets/icons/arrowDown.png" />
          </div>
          <div role="button" class="arrow__right" @click="onSlide(true)">
            <img alt="arrow" src="@/assets/icons/arrowDown.png" />
          </div>
        </div>
      </template>
      <template v-if="data.link">
        <div class="slide__link" @click="data.link()">
          <span>{{ $t('products.more') }}</span>
          <img src="@/assets/img/operation/arrow_next.png" />
        </div>
      </template>
    </div>
    <div class="slide__image">
      <img :src="require(`@/assets/img/${data.image}`)" :alt="data.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OperationSlide',
  props: {
    data: {
      type: Object,
      required: true,
    },
    side: {
      type: Boolean,
      default: false,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    slide: false,
  }),
  methods: {
    onSlide(type) {
      this.slide = type
    },
  },
}
</script>

<style lang="scss" scoped>
.arrow {
  &__left {
    cursor: pointer;
    border-radius: 50%;
    transform: rotate(90deg);
    border: 1px solid $c-tco3;
    margin-right: 10px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #e6eef0;
    }
    transition: background-color 0.3s linear;
    img {
      height: 11px;
      width: 18px;
    }
    @include tablet {
      border: transparent;
      background-color: #fff;
      height: 32px;
      width: 32px;
      z-index: 100;
    }
  }
  &__right {
    cursor: pointer;
    border-radius: 50%;
    transform: rotate(-90deg);
    border: 1px solid $c-tco3;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #e6eef0;
    }
    transition: background-color 0.3s linear;
    img {
      height: 10px;
      width: 18px;
    }
    @include tablet {
      background-color: #fff;
      border: transparent;
      height: 32px;
      width: 32px;
      z-index: 100;
    }
  }
}
.slide {
  display: flex;
  position: relative;
  text-align: left;
  &.reverse {
    flex-direction: row-reverse;
    @include tablet {
      flex-direction: column-reverse;
    }
  }
  &__content {
    width: 50%;
    padding: 80px 60px 80px calc((100vw - var(--width-container)) / 2);
    &.reverse {
      padding: 80px calc((var(--width-container) - 100vw) / 2) 80px 60px;
    }
    &.slided {
      .slide {
        &__arrow {
          i:first-child {
            cursor: pointer;
            background-color: white;
          }

          i:last-child {
            cursor: default;
            background-color: $c-tco33;
          }
        }

        &__description {
          &_item {
            transform: translateX(-100%);
            font-family: Roboto, sans-serif;
            font-weight: 400;
          }
        }
      }
    }
  }

  &.background {
    background-color: $c-tco33;
  }

  &__link {
    color: $c-tco5;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      text-decoration: underline;
    }

    img {
      margin-left: 12px;
      width: 24px;
      height: 24px;
    }
  }

  &.side {
    flex-direction: row-reverse;

    .slide__content {
      padding: 80px calc((100vw - var(--width-container)) / 2) 80px 60px;
    }
  }

  &__title {
    margin-bottom: 40px;
  }

  &__description {
    margin-bottom: 40px;
    display: flex;
    overflow: hidden;
    color: $c-tco1;

    &.solo {
      margin-bottom: 0;
    }
    &.reverse {
      margin-right: 60px;
    }
    &_item {
      font-family: Roboto, sans-serif;
      font-weight: 400;
      min-width: 100%;
      height: 100%;
      font-size: 20px;
      line-height: 28px;
      white-space: pre-line;
      transition: 0.6s ease-in-out;
    }
  }

  &__arrow {
    display: flex;
    align-items: center;

    i {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $c-grey;
      transform: rotate(90deg);
      transform-origin: center;
      font-size: 11px;
      background-color: $c-tco33;

      &:last-child {
        transform: rotate(-90deg);
        margin-left: 24px;
        cursor: pointer;
        background: white;
      }
    }
  }

  &__image {
    width: 50%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @include tablet {
    flex-direction: column-reverse;

    &.side {
      flex-direction: column-reverse;
    }

    &__image {
      width: 100%;
      height: 412px;
      display: flex;
      align-items: center;
      overflow: hidden;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    &__content {
      max-width: 100%;
      padding: 20px 16px;
    }

    &.slide {
      .slide__content {
        width: 100%;
        padding: 20px 16px;
      }
    }

    &__title {
      position: absolute;
      top: 20px;
      color: white !important;
      width: 70%;
      z-index: 1;
    }

    &__arrow {
      position: absolute;
      top: 320px;
    }
  }

  @include phone {
    &__image {
      height: 218px;
    }

    &__title {
      width: 70%;
    }

    &__arrow {
      top: 157px;

      i {
        width: 24px;
        height: 24px;
        font-size: 6px;

        &:last-child {
          margin-left: 16px;
        }
      }
    }

    &__description {
      &_item {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
</style>
