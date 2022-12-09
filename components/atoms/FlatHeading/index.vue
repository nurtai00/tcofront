<template>
  <div class="heading" @click="$emit('click')">
    <AtomsHeading class="heading__title" type="h4" color="white">
      {{ title }}
    </AtomsHeading>
    <img
      src="@/assets/icons/chevron-right.png"
      alt="chevron-right"
      width="48"
      height="48"
    />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.heading {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  max-width: 600px;
  background-color: #fff;
  background-color: $c-tco3;
  border-radius: 5px;
  cursor: pointer;
  &__title {
    word-wrap: break-word;
  }
  img {
    transform: rotate(-30deg);
  }
  @include phone {
    &__title {
      //width: 277px;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
