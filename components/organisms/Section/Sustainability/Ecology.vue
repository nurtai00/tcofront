<template>
  <div class="ecology">
    <div class="ecology__wrapper container">
      <div class="ecology__content">
        <AtomsHeading class="ecology__title-desktop" type="h3" color="white">
          {{ $t('suistainability.ecology.title') }}
        </AtomsHeading>
        <p class="ecology__description">
          {{ $t('suistainability.ecology.description') }}
        </p>
      </div>
      <div class="ecology__img">
        <AtomsHeading class="ecology__title-mobile" type="h3" color="white">
          {{ $t('suistainability.ecology.title') }}
        </AtomsHeading>
        <img src="@/assets/img/sustainability/block-2.png" alt="block" />
      </div>
    </div>
    <div class="container ecology__cards">
      <MoleculesCardPopupCardWithImg
        v-for="item of items"
        :key="item.id"
        :item="item"
        @click="openPopup"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: this.$t('suistainability.ecology.cards.card1'),
          imgSrc: 'ecology/card-1.png',
          popupText: this.$t('suistainability.ecology.popupText.card1'),
          bgSrc: 'sustainability/ecology/photo-1.jpg',
        },
        {
          id: 2,
          title: this.$t('suistainability.ecology.cards.card2'),
          imgSrc: 'ecology/card-2.png',
          popupText: this.$t('suistainability.ecology.popupText.card2'),
          bgSrc: 'sustainability/ecology/photo-2.jpg',
        },
        {
          id: 3,
          title: this.$t('suistainability.ecology.cards.card3'),
          imgSrc: 'ecology/card-3.png',
          popupText: this.$t('suistainability.ecology.popupText.card3'),
          bgSrc: 'sustainability/ecology/photo-3.jpg',
        },
        {
          id: 4,
          title: this.$t('suistainability.ecology.cards.card4'),
          imgSrc: 'ecology/card-4.png',
          popupText: this.$t('suistainability.ecology.popupText.card4'),
          bgSrc: 'sustainability/ecology/photo-4.jpg',
        },
      ],
    }
  },
  methods: {
    openPopup(item) {
      this.$modal.add({
        title: 'Default',
        payload: {
          modal: 'Default',
          title: item.title,
          text: item.popupText,
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.ecology {
  padding-bottom: 80px;
  background-color: #30454e;
  &__wrapper {
    display: flex;
    gap: 60px;
    justify-content: space-between;
    align-items: flex-end;
  }
  &__content {
    padding-top: 80px;
    width: 50%;
  }
  &__description {
    margin-top: 40px;
    color: white;
    line-height: 28px;
    font-size: 20px;
    font-weight: 400;
  }
  &__img {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 50%;
    height: 100%;
    max-height: 650px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__title-mobile {
    display: none;
  }
  &__cards {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 24px;
  }
  @include middle-laptop {
    &__cards {
      justify-content: space-between;
    }
  }
  @include tablet {
    &__wrapper {
      flex-direction: column-reverse;
      gap: 15px;
    }

    &__content {
      width: 100%;
      padding: 20px 16px;
    }
    &__description {
      margin-top: 0px;
      font-size: 16px;
    }
    &__img {
      width: 100%;
      display: flex;
      flex-direction: column-reverse;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__title {
      &-desktop {
        display: block;
        margin-bottom: 20px;
      }
      &-mobile {
        display: none;
        position: relative;
        top: 50px;
        margin-left: 20px;
      }
    }
    &__cards {
      //padding: 0 16px;
      gap: 10px;
      grid-template-columns: repeat(2, 50%);
    }
  }
}
</style>
