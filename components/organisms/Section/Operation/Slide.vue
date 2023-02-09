<template>
  <div class="wrapper">
    <div
      class="slide container"
      :class="{
        slide__left: side,
      }"
    >
      <div class="slide__content">
        <div class="slide__content-wrapper">
          <AtomsHeading
            v-if="data.title"
            type="h3"
            class="slide__title title slide__title-desktop"
            :class="{ pointer: !!data.url }"
            @click="onTitleClick"
          >
            {{ data.title }}
          </AtomsHeading>
          <div class="slide__description">
            <slot :description="slicedDescription" name="description"> </slot>
            <button
              v-if="isLongDescription"
              class="button-more"
              @click.stop="openPopup"
            >
              {{ $t('operation.more') }}
            </button>
          </div>
        </div>
      </div>
      <div class="slide__image">
        <AtomsHeading
          v-if="data.title"
          type="h3"
          class="slide__title title slide__title-mobile"
        >
          {{ data.title }}
        </AtomsHeading>
        <img :src="require(`@/assets/img/${data.image}`)" :alt="data.title" />
      </div>
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
    shouldBeDescriptionSlice: {
      type: Boolean,
      default: true,
    },
    hasEmit: {
      type: Boolean,
      default: false,
    },
    sliceWordLength: {
      type: Number,
      default: 150,
    },
  },
  computed: {
    isLongDescription() {
      return (
        this.data?.description?.length >= this.sliceWordLength &&
        this.shouldBeDescriptionSlice
      )
    },
    slicedDescription() {
      return this.isLongDescription
        ? `${this.data.description.slice(0, this.sliceWordLength)}...`
        : this.data.description
    },
  },
  methods: {
    onTitleClick() {
      if (this.data?.url) {
        this.$emit('on-title-click', this.data.url)
      }
    },
    openPopup() {
      if (this.hasEmit) {
        this.$emit('popup')
        return
      }
      this.$modal.add({
        title: 'Default',
        payload: {
          modal: 'Default',
          title: this.data.title,
          text: this.data.description,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.slide {
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 0 auto;
  height: 100%;
  max-height: 460px;
  &__left {
    flex-direction: row-reverse;
    .slide__content-wrapper {
      padding: rem(80) 0 rem(40) rem(40);
      @include tablet {
        padding: rem(20) 0 rem(20) rem(20);
      }
      @include phone {
        padding: 5px 0;
      }
    }
    .slide__image {
      width: 50%;
      position: relative;
      @include small-laptop {
      }
      @include tablet {
        width: 100%;
      }
      @include phone {
        img {
          filter: brightness(0.6);
        }
      }
    }
  }
  &__content {
    width: 50%;
    &-wrapper {
      padding: rem(80) rem(40) rem(40) 0;
    }
    @include tablet {
      width: 100%;
      padding: rem(20) rem(20) rem(20) 0;
    }
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

  &__title {
    margin-bottom: 20px;
    font-size: rem(38) !important;
    line-height: rem(42);
    &-mobile {
      display: none;
    }
    @include laptop {
      font-size: rem(24) !important;
    }
    @include tablet {
      &-mobile {
        display: block;
        position: absolute;
        color: white;
        top: 20px;
        left: 15px;
        z-index: 20;
      }
    }
  }

  &__description {
    display: flex;
    overflow: hidden;
    color: $c-tco1;
    height: 100%;
    flex-direction: column;
    gap: 20px;

    p {
      font-family: Roboto, sans-serif;
      font-weight: 400;
      min-width: 100%;
      height: 100%;
      font-size: rem(20);
      line-height: 28px;
      max-width: 500px;
    }
  }
  &__image {
    width: 50%;
    display: flex;
    overflow: hidden;
    position: relative;
    @include tablet {
      min-height: 200px;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    @include middle-laptop {
      width: 50%;
    }
    @include laptop {
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    img {
      width: 100%;
      object-fit: cover;
      @include tablet {
        max-height: 250px;
      }
    }
  }

  @include tablet {
    margin-top: 80px;
    flex-direction: column-reverse;

    &__left {
      flex-direction: column-reverse;
    }
    &__image {
      width: 100%;
      max-height: 600px;
      display: flex;
      align-items: center;

      img {
        max-width: 100%;
        height: auto;
      }
    }
    &__content {
      max-width: 100% !important;
      padding: 20px 16px;
    }
    &__left {
      &__content {
        width: 100% !important;
        padding: 20px 16px;
      }
    }
    &__title-desktop {
      display: none;
    }
  }
  @include phone {
    margin-top: 0;
    max-height: 100%;
    &__content-wrapper {
      padding: 5px 0;
    }
    &__image {
      height: auto;
    }
    &__title {
      width: 70%;
    }
  }
}
.button-more {
  cursor: pointer;
  margin-top: 20px;
  width: max-content;
  color: #00b0f0;
  text-decoration: underline;
  border: none;
  background-color: transparent;
}
.pointer {
  cursor: pointer;
}
</style>
