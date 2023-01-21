<template>
  <div class="invest">
    <div class="invest__wrapper container">
      <div class="invest__content">
        <AtomsFlatHeading
          :title="$t('suistainability.socialProgrammingInvest.title')"
          @click="$router.push(localePath('/sustainability/psi'))"
        />
        <div class="invest__description">
          <p>
            {{ $t('suistainability.socialProgrammingInvest.description') }}
          </p>
          <p>
            <!--            В рамках данной программы в 2010-2021 гг. было реализовано 94-->
            <!--            проекта на общую сумму около 11,1 млн. долл. США. Бюджет ПСИ в 2022-->
            <!--            году составляет 2,3 миллиона долларов США. Бенефициарами проектов,-->
            <!--            реализуемых НПО являются дети, взрослые люди, пенсионеры,-->
            <!--            малообеспеченные семьи, многодетные семьи, дети-инвалиды и многие-->
            <!--            другие представители населения Атырауской области. s-->
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
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.invest {
  padding-bottom: 80px;
  &__wrapper {
    display: flex;
    gap: 72px;
    //max-height: 650px;
  }
  &__content {
    width: 50%;
  }
  &__description {
    margin-top: 40px;
    color: $c-text;
    font-size: 20px;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    p:not(:first-child) {
      margin-top: 20px;
    }
  }
  &__img {
    display: flex;
    align-items: center;
    overflow: hidden;
    min-width: 50%;
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
