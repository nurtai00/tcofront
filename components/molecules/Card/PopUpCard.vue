<template>
  <div class="card">
    <p class="card__title">
      {{ item.id }}
    </p>
    <p class="card__text">
      {{ item.title }}
    </p>
    <img @click="showMod" src="@/assets/img/career/arrow_next.svg" alt="" />
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
  methods: {
    showMod() {
      this.$modal.add({ title: this.item.modal, payload: this.item })
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  max-width: 376px;
  min-height: 270px;

  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(1, 84, 103, 0.1);
  border-radius: 4px;

  padding: 30px;
  &__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: rgba(1, 84, 103, 0.2);
    margin-bottom: 20px;
  }
  &__text {
    font-weight: 600;
    line-height: 28px;
    color: #015467;
    margin-bottom: 44px;
  }
  img {
    position: absolute;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
  }
}
</style>
