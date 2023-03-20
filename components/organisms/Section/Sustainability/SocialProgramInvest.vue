<template>
  <div class="invest">
    <div class="invest__wrapper container">
      <div class="invest__content">
        <AtomsFlatHeading
          :title="$t('suistainability.socialProgrammingInvest.title')"
          @click="$router.push(localePath('/sustainability/psi'))"
        />
        <div class="invest__description">
          <p
            v-for="text of $t(
              'suistainability.socialProgrammingInvest.description'
            )"
            :key="text"
          >
            {{ text }}
          </p>
        </div>
      </div>
      <div class="invest__img">
        <img src="@/assets/img/sustainability/block-5.png" alt="build" />
      </div>
    </div>
    <div class="container invest__cards">
      <MoleculesCardSuistanabilityCard
        v-for="card of cards"
        :key="card.id"
        :card="card"
        @click="onClickCard(card.link)"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          text: this.$t('suistainability.socialProgrammingInvest.cards')[0]
            .title,
          description: this.$t(
            'suistainability.socialProgrammingInvest.cards'
          )[0].description,
          img: 'sustainability/map-projects/document.png',
        },
        {
          id: 2,
          text: this.$t('suistainability.socialProgrammingInvest.cards')[1]
            .title,
          description: this.$t(
            'suistainability.socialProgrammingInvest.cards'
          )[1].description,
          img: 'sustainability/map-projects/document.png',
          link: this.localePath('/sustainability/cip-reports'),
        },
      ],
    }
  },
  methods: {
    onClickCard(link) {
      if (!link) {
        return
      }
      this.$router.push(link)
    },
  },
}
</script>
<style lang="scss" scoped>
.invest {
  &__wrapper {
    display: flex;
    gap: 72px;
    //max-height: 650px;
  }
  &__content {
    padding-top: 60px;
    width: 50%;
  }
  &__description {
    margin-top: 30px;
    color: $c-text;
    font-size: 20px;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    p:not(:first-child) {
      margin-top: 10px;
    }
  }
  &__img {
    width: 50%;
    height: 500px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__cards {
    margin-top: 40px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 33%);
  }
  @include tablet {
    &__wrapper {
      flex-direction: column-reverse;
      max-height: 100%;
      gap: 15px;
    }
    &__content {
      width: 100%;
      padding: 40px 16px;
    }
    &__description {
      p {
        font-size: 16px;
      }
    }
    &__img {
      width: 100%;
      height: 50%;
    }
    &__cards {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }
}
</style>
