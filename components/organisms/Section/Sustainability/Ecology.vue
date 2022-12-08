<template>
  <div class="ecology">
    <div class="ecology__wrapper">
      <div class="container ecology__content">
        <AtomsHeading class="ecology__title-desktop" type="h3" color="white">
          {{ $t('suistainability.ecology.title') }}
        </AtomsHeading>
        <p class="ecology__description">
          {{ $t('suistainability.ecology.description') }}}
        </p>
      </div>
      <div class="ecology__img">
        <AtomsHeading class="ecology__title-mobile" type="h3" color="white">
          {{ $t('suistainability.ecology.title') }}}
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
          imgSrc: 'ecology/card-1.svg',
        },
        {
          id: 2,
          title: this.$t('suistainability.ecology.cards.card2'),
          imgSrc: 'ecology/card-2.svg',
        },
        {
          id: 3,
          title: this.$t('suistainability.ecology.cards.card3'),
          imgSrc: 'ecology/card-3.svg',
        },
        {
          id: 4,
          title: this.$t('suistainability.ecology.cards.card4'),
          imgSrc: 'ecology/card-4.svg',
        },
      ],
    }
  },
  methods: {
    openPopup(item) {
      console.log()
      this.$modal.add({
        title: 'Default',
        payload: {
          modal: 'Default',
          title: item.title,
          text: `<p>
На территории и на границе санитарно-защитной зоны ТШО расположены 12 автоматизированных стационарных станций наблюдения за окружающей средой (СНОС). Стационарные станции мониторинга ТШО также находятся в поселке ТШО и ближайшем населенном пункте – в поселке Жана Каратон, расположенном в 95 км от месторождения Тенгиз. Дополнительно передвижной лабораторией осуществляется еженедельный подфакельный мониторинг. С наветренной стороны на расстоянии 16 км от завода проводятся замеры для получения фоновых значений концентраций исследуемых компонентов. Отбор проб также производится с подветренной стороны заводов в диапазоне от 0,5 до 15 км от завода и на границе санитарно-защитной зоны.
<a style="{margin-top: 20px}" href="#">Казгидромет</a>
</p>`,
          imgSrc: 'sustainability/popup1.jpg',
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
  }
  &__content {
    padding: 80px 40px 80px calc((100vw - var(--width-container)) / 2);
    font-family: Roboto, sans-serif;
  }
  &__description {
    margin-top: 40px;
    color: white;
    line-height: 38px;
    font-size: 20px;
    font-weight: 400;
  }
  &__img {
    //width: 50%;
    img {
      width: 100%;
      height: 90%;
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
    }

    &__content {
      padding: 20px 16px;
    }
    &__description {
      font-size: 16px;
    }
    &__title {
      &-desktop {
        display: none;
      }
      &-mobile {
        display: block;
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
