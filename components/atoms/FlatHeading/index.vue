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
  background-color: #015467;
  border-radius: 5px;
  cursor: pointer;
  &__title {
    word-wrap: break-word;
    padding: 10px;
  }
  img {
    height: 45px;
    width: 45px;
    margin-top: 5px;
  }
  @include phone {
    &__title {
      //width: 277px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
