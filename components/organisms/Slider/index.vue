<template>
  <div :id="options.id" class="slider">
    <div class="slider-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
import Slide from './slide'
export default {
  props: {
    /**
     * Настройки слайдера
     * @type {Object}
     * @format {
     *   pagination: String (element selector),
     *   navigation: {
     *     previous: String (element selector),
     *     next: String (element selector),
     *   },
     *   loop: Boolean (default: false),
     *   slidesPerView: Number (default: 1),
     *   id: String,
     *   slide: Function (returns index of slide),
     * }
     */
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      slider: null,
    }
  },
  mounted() {
    // window.addEventListener('load', () => {
    //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //   const slider = new Slide(this.options)
    // })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.slider = new Slide(this.options)
  },
  beforeDestroy() {
    if (this.options.loop) {
      this.slider.destroyLoop()
    }
  },
}
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider-wrapper {
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
  animation: 0.5s;
  @media (orientation: portrait) {
    align-items: flex-start;
  }
}

.slider-wrapper > .slide:first-child {
  opacity: 1;
}
</style>
