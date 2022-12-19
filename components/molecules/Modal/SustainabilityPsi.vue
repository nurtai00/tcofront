<template>
  <div class="work">
    <img
      v-if="payload.imgSrc"
      class="work__img"
      :src="require(`@/assets/img/${payload.imgSrc}`)"
      alt=""
    />
    <div class="work__content container">
      <AtomsHeading type="h3" color="black">
        {{ payload.title_2 }}
      </AtomsHeading>
      <p v-html="payload.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.work {
  &__img {
    width: 100%;
    border-radius: 4px;
  }
  &__content {
    margin-top: 40px;
    p {
      display: block;
      margin-top: 20px;
      font-size: 20px;
    }
  }
  @include phone {
    &__content {
      margin-top: 20px;
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
