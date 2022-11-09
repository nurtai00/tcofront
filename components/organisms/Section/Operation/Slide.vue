<template>
  <div class="slide" :class="{ side }">
    <div
      class="slide__content container"
      :class="{ slided: slide, background: data.background }"
    >
      <AtomsHeading type="h3" class="slide__title title">
        {{ data.title }}
      </AtomsHeading>
      <div class="slide__description">
        <div
          v-for="(text, key) in data.description"
          :key="key"
          class="slide__description_item"
        >
          {{ text }}
        </div>
      </div>
      <div v-if="data.description.length > 1" class="slide__arrow">
        <i class="icon-arrowDown" @click="onSlide(false)" />
        <i class="icon-arrowDown" @click="onSlide(true)" />
      </div>
      <template v-if="data.link">
        <nuxt-link
          class="slide__link"
          :to="data.link"
        >
          <span>Читать дальше</span> <i class="icon-arrow-left" />
        </nuxt-link>
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
.slide {
  display: flex;

  &__content {
    width: 50%;
    padding: 80px 60px 80px calc((100vw - var(--width-container)) / 2);

    &.slided {
      .slide {
        &__arrow {
          i:first-child {
            cursor: pointer;
            background-color: $c-tco33;
          }

          i:last-child {
            cursor: default;
            background-color: transparent;
          }
        }

        &__description {
          &_item {
            transform: translateX(-100%);
          }
        }
      }
    }

    &.background {
      background-color: $c-tco33;
    }
  }

  &__link {
    color: $c-tco5;
    display: flex;
    align-items: center;

    span {
      text-decoration: underline;
    }

    i {
      margin-left: 12px;
      font-size: 20px;
      transform: rotate(180deg);
      transform-origin: center;
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

    &_item {
      min-width: 100%;
      height: 100%;
      font-size: 20px;
      line-height: 28px;
      user-modify: read-write-plaintext-only;
      -webkit-user-modify: read-write-plaintext-only;
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

      &:last-child {
        transform: rotate(-90deg);
        margin-left: 24px;
        cursor: pointer;
        background-color: $c-tco33;
      }
    }
  }

  &__image {
    width: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
