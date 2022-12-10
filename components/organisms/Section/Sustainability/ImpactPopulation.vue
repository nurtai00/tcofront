<template>
  <div class="impact">
    <div class="impact__wrapper container">
      <AtomsHeading class="impact__title" type="h3">
        {{ $t('suistainability.impactPopulation.title') }}
      </AtomsHeading>
      <div class="impact__content">
        <div class="impact__info">
          <p class="impact__info-description">
            {{ $t('suistainability.impactPopulation.description') }}
          </p>
          <div class="mt40">
            <AtomsPdfFile
              :text="$t('suistainability.impactPopulation.files.file1')"
              direction="row"
              :width="30"
              :height="40"
            />
            <AtomsPdfFile
              class="mt20"
              :text="$t('suistainability.impactPopulation.files.file2')"
              direction="row"
              :width="30"
              :height="40"
            />
          </div>
        </div>
        <div class="impact__img">
          <img src="@/assets/img/vacancy/block6-1.jpg" alt="block6-1" />
        </div>
      </div>
    </div>
    <div class="container impact__cards">
      <PopupCardWithImg
        v-for="item of items"
        :key="item.id"
        :item="item"
        @click="openPopup"
      />
    </div>
  </div>
</template>
<script>
import PopupCardWithImg from 'molecules/Card/PopupCardWithImg'
export default {
  components: { PopupCardWithImg },
  data() {
    return {
      items: [
        {
          id: 1,
          title: this.$t('suistainability.impactPopulation.cards.card1'),
          imgSrc: 'block1-1.png',
          popupText: this.$t(
            'suistainability.impactPopulation.popupText.card1'
          ),
        },
        {
          id: 2,
          title: this.$t('suistainability.impactPopulation.cards.card2'),
          imgSrc: 'block1-2.png',
          popupText: this.$t(
            'suistainability.impactPopulation.popupText.card2'
          ),
        },
        {
          id: 3,
          title: this.$t('suistainability.impactPopulation.cards.card3'),
          imgSrc: 'block1-3.png',
          popupText: this.$t(
            'suistainability.impactPopulation.popupText.card3'
          ),
        },
        {
          id: 4,
          title: this.$t('suistainability.impactPopulation.cards.card4'),
          imgSrc: 'block1-4.png',
          popupText: '',
        },
      ],
    }
  },
  mounted() {
    console.log(this.$t('suistainability.impactPopulation.cards.card2'))
  },
  methods: {
    openPopup(item) {
      this.$modal.add({
        title: 'Default',
        payload: {
          title: item.title,
          modal: 'Default',
          text: item.popupText,
          imgSrc: 'sustainability/popup1.jpg',
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.impact {
  margin-top: 40px;
  background-color: #f2f6f7;
  padding: 80px 0;
  &__title {
    text-align: center;
  }
  &__content {
    margin-top: 40px;
    display: flex;
    gap: 20px;
  }
  &__info {
    margin-right: calc((var(--width-container) - 90vw) / 2);
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__img {
    position: relative;
    right: calc((var(--width-container) - 100vw) / 2);
    width: 100%;
    height: 50%;
    img {
      object-fit: cover;
      object-position: bottom;
    }
  }
  @include tablet {
    &__title {
      text-align: center;
    }
    &__content {
      margin-top: 20px;
      flex-direction: column-reverse;
    }
    &__img {
      left: calc((var(--width-container) - 100vw) / 2);
      width: 100vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__info {
      margin-right: 0;
      &-description {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  &__cards {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 20px;
    @include tablet {
      grid-template-columns: repeat(2, 50%);
      //justify-content: space-between;
      gap: 5px;
      row-gap: 20px;
    }
    @include phone {
    }
  }
}
</style>
