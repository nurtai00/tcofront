<template>
  <div class="card">
    <div class="card__icon">
      <i :class="`icon-${card.icon}`" />
      <div class="card__num">{{ card.number }}</div>
    </div>
    <div class="card__title">{{ card.title }}</div>
    <div class="card__description">{{ card.description }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardIcon',
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 30px;
  background-color: #F2F4F7;

  &__icon {
    position: relative;
    margin: 0 auto 20px;
    width: 156px;
    height: 156px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 80px;
      color: #015467;
    }
  }

  &__num {
    font-size: 48px;
    font-weight: 700;
    position: absolute;
    bottom: 10px;
    left: -10px;
  }

  &__title {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: #015467;
    margin-bottom: 12px;
  }

  &__description {
    font-size: 14px;
    color: #30454E;
  }
}
</style>
