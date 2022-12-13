<template>
  <div class="card" :class="{ dark }">
    <div class="card__icon">
      <img :src="card.icon" />
      <div class="card__num">{{ card.number }}</div>
    </div>
    <div class="card__title">{{ card.title }}</div>
    <div class="card__description">{{ card.description }}</div>
    <div class="card__description" v-html="card.html" />
  </div>
</template>

<script>
export default {
  name: 'CardIcon',
  props: {
    card: {
      type: Object,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding: 30px;
  background-color: #f2f4f7;

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
    bottom: 0;
    left: -30px;
    color: $c-tco3;
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
    color: #30454e;

    &::v-deep {
      ul {
        padding-left: 18px;
        margin-bottom: 20px;

        li {
          list-style-type: disc;
          font-size: 14px;
          margin-bottom: 6px;
          color: $c-tco1;
        }
      }
    }
  }

  &.dark {
    background-color: $c-tco3;

    .card {
      &__icon {
        background-color: #a2b9c0;

        i {
          color: white;
        }
      }

      &__num,
      &__title,
      &__description {
        color: white;
      }
    }
  }

  @include phone {
    padding: 20px;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 8px;

    &__icon {
      width: 100px;
      height: 100px;
      grid-area: 1 / 1 / 3 / 2;
      margin-bottom: 0;

      img {
        max-width: 60%;
        max-height: 60%;
      }
    }

    &__num {
      font-size: 22px;
      line-height: 28px;
      left: 0
    }

    &__title {
      grid-area: 1 / 2 / 2 / 3;
    }

    &__description {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
}
</style>
