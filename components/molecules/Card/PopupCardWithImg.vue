<template>
  <div class="card">
    <div class="card__content">
      <img
        :src="require(`@/assets/img/sustainability/${item.imgSrc}`)"
        width="80"
        height="80"
      />
      <span class="card__title">{{ item.title }}</span>
    </div>
    <img
      class="card__show"
      src="@/assets/img/career/arrow_next.png"
      alt=""
      @click="$emit('click', item)"
    />
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  //position: relative;
  width: 100%;
  min-height: 270px;
  max-width: 276px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(1, 84, 103, 0.1);
  border-radius: 4px;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  padding: 30px;
  &__title {
    font-size: 22px;
    color: $c-tco3;
    font-weight: 600;
    word-wrap: break-word;
    @include phone {
      font-size: 16px;
    }
  }
  &__show {
    //margin-top: 70px;
    align-self: flex-end;
    font-family: Roboto, sans-serif;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateX(10px);
      cursor: pointer;
    }
  }
}
</style>
