<template>
  <div>
    <svg
      width="175"
      height="54"
      viewBox="0 0 175 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="desktop"
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
    <svg
      width="101"
      height="122"
      viewBox="0 0 101 122"
      xmlns="http://www.w3.org/2000/svg"
      class="mobile"
    >
      <path
        :fill="color || '#FFC000'"
        d="M101 0L101 111.695L50.5 122L-4.88234e-06 111.695L0 -4.41485e-06L50.5 10.3052L101 0Z"
      />
      <text fill="white" y="50">
        <tspan class="description rotate" x="50" text-anchor="middle">
          {{ title }}
        </tspan>
      </text>
    </svg>
  </div>
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
.desktop {
  @include middle-laptop {
    display: none;
  }
}
.mobile {
  display: none;
  font-size: 14px;
  @include middle-laptop {
    display: block;
  }
}
.description {
  font-size: 20px;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  color: white;
  display: block;
  &.rotate {
    transform: rotate(-120deg);
  }
  @include middle-laptop {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
}
</style>
