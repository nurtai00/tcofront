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
    options: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const slider = new Slide(this.options)
    })
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
}

.slider-wrapper > .slide:first-child {
  opacity: 1;
}
</style>
