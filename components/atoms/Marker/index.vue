<template>
  <svg
    width="175"
    height="54"
    viewBox="0 0 175 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0.000244141H160.218L175 27.0002L160.218 54.0002H0L14.782 27.0002L0 0.000244141Z"
      :fill="color || '#FFC000'"
      stroke-width="2"
    />
    <text fill="white" x="10" y="30">
      <tspan class="description rotate" x="50" dy="5">{{ title }}</tspan>
    </text>
  </svg>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.description {
  font-size: 20px;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  color: white;
  display: block;
  &.rotate {
    transform: rotate(-120deg);
  }
}
</style>
