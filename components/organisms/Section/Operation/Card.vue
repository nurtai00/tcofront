<template>
  <div class="card">
    <div class="card__number">{{ content.number }}</div>
    <div class="card__title">{{ content.name }}</div>
    <div class="card__go">
      <!--      <img src="@/assets/icons/arrow-left.png" @click="onSideModal" />-->
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#E4E4E4" />
        <path
          d="M23 27.5L15.5 20L23 12.5"
          stroke="#999999"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onSideModal() {
      this.$store.commit('side/open', this.content)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  box-shadow: 0 10px 30px rgba(1, 84, 103, 0.1);
  border-radius: 4px;
  padding: 30px 30px 64px;
  position: relative;

  &__number {
    color: rgba(1, 84, 103, 0.2);
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 32px;
  }

  &__title {
    margin-bottom: 40px;
    color: $c-tco3;
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
  }

  &__go {
    color: $c-tco3;
    svg {
      circle {
        fill: $c-tco3;
      }
      path {
        stroke: white;
      }
    }
    font-size: 34px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    right: 30px;
    transform: rotate(180deg);
    transform-origin: center;
  }

  @include phone {
    padding: 16px 16px 40px;
    margin-bottom: 12px;

    &__number {
      font-size: 18px;
      line-height: 24px;
    }

    &__title {
      font-size: 16px;
      line-height: 22px;
    }

    &__go {
      font-size: 24px;
    }
  }
}
</style>
