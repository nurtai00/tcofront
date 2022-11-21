<template>
  <div class="title">
    <svg
      v-if="point"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#00B0F0" />
    </svg>
    <AtomsHeading :type="small ? 'h3' : 'h1'" color="main">
      <slot />
    </AtomsHeading>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    point: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  svg {
    margin-top: 14px;
    margin-right: 12px;
    @include tablet() {
      width: 10px;
      height: 10px;
      margin-top: 8px;
      margin-right: 8px;
    }
  }
}
</style>
