<template>
  <div class="card" @click="$emit('click')">
    <img :src="require(`@/assets/img/${card.img}`)" alt="home" />
    <span class="card__title">{{ card.text }}</span>
    <span
      v-if="!!card.description && card.description.length"
      class="card__description"
      >{{ card.description }}</span
    >
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px 6px 30px rgba(48, 69, 78, 0.1);
  border-radius: 4px;
  padding: 30px;
  @media (max-width: 650px) {
    width: 90%;
  }
  img {
    width: 80px;
    height: 80px;
  }
  &__title {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #30454e;
  }
  &__description {
    font-size: 16px;
    font-weight: 300;
  }
}
</style>
