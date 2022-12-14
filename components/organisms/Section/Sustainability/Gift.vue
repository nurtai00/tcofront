<template>
  <div class="gift">
    <div class="container gift__content">
      <AtomsHeading type="h3">
        {{ $t('suistainability.gift.title') }}
      </AtomsHeading>
      <div class="gift__description">
        <p>
          {{ $t('suistainability.gift.description.one') }}
        </p>
        <p>
          {{ $t('suistainability.gift.description.two') }}
        </p>
        <p>
          {{ $t('suistainability.gift.description.three') }}
        </p>
      </div>
      <a class="gift__link" href="#" @click.prevent="openPopup">
        {{ $t('suistainability.gift.buttonMore') }}
        <svg
          width="24"
          height="24"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="20"
            transform="rotate(-180 20 20)"
            fill="#00B0F0"
          />
          <path
            d="M17 12.5L24.5 20L17 27.5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
    <img
      src="@/assets/img/sustainability/slide1.png"
      alt="bg"
      class="gif__img"
    />
  </div>
</template>
<script>
export default {
  methods: {
    openPopup() {
      this.$modal.add({
        title: 'Default',
        payload: {
          modal: 'Default',
          text: this.$t('suistainability.gift.popupText'),
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.gift {
  display: flex;
  &__content {
    width: 50%;
    padding: 80px 40px 80px calc((100vw - var(--width-container)) / 2);
  }
  &__description {
    margin-top: 40px;
    color: $c-text;
    font-size: 20px;
    p:not(:first-child) {
      margin-top: 20px;
    }
  }
  &__link {
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: $c-tco5;
  }
  img {
    width: 50%;
    height: auto;
  }
  @include tablet {
    flex-direction: column-reverse;
    &__content {
      padding: 40px 16px;
    }
    &__description {
      p {
        font-size: 16px;
      }
    }
    &__img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
