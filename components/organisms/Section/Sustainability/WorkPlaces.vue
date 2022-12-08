<template>
  <div class="work">
    <div class="container">
      <div class="work__content">
        <AtomsHeading type="h3">
          {{ $t('suistainability.workPlaces.title') }}
        </AtomsHeading>
        <div class="work__content-description">
          <p>
            {{ $t('suistainability.workPlaces.description.one') }}
          </p>

          <p>
            {{ $t('suistainability.workPlaces.description.two') }}
          </p>
        </div>
        <span class="work__buildProgram">
          {{ $t('suistainability.workPlaces.description.three') }}
        </span>
        <div class="work__cards">
          <MoleculesCardSuistanabilityCard
            v-for="card of cards"
            :key="card.id"
            :card="card"
            @click="openPopup"
          />
        </div>
      </div>
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
          text: this.$t('suistainability.workPlaces.cards.card1'),
          img: 'sustainability/work-places/hospital.svg',
        },
        {
          id: 2,
          text: this.$t('suistainability.workPlaces.cards.card2'),
          img: 'sustainability/work-places/stadion.svg',
        },
        {
          id: 3,
          text: this.$t('suistainability.workPlaces.cards.card3'),
          img: 'sustainability/work-places/home.svg',
        },
        {
          id: 4,
          text: this.$t('suistainability.workPlaces.cards.card4'),
          img: 'sustainability/work-places/home.svg',
        },
        {
          id: 5,
          text: this.$t('suistainability.workPlaces.cards.card5'),
          img: 'sustainability/work-places/school.svg',
        },
        {
          id: 6,
          text: this.$t('suistainability.workPlaces.cards.card6'),
          img: 'sustainability/work-places/school.svg',
        },
      ],
    }
  },
  methods: {
    openPopup() {
      this.$modal.add({
        title: 'SustainabilityWorkPlace',
        payload: {
          modal: 'SustainabilityWorkPlace',
          title: 'SustainabilityWorkPlace',
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.work {
  background-color: #f2f6f7;
  padding: 80px 0;
  font-family: Roboto, sans-serif;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    &-description {
      display: flex;
      flex-direction: column;
      gap: 20px;
      p {
        font-family: Roboto, sans-serif;
        font-size: 20px;
      }
    }
  }
  &__buildProgram {
    font-weight: 600;
    font-size: 24px;
  }
  &__cards {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 20px;
  }
  &__card {
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #ffffff;
    box-shadow: 0px 6px 30px rgba(48, 69, 78, 0.1);
    border-radius: 4px;
    padding: 30px;
    @media (max-width: 650px) {
      width: 90%;
    }
    img {
      width: 80px;
      height: 80px;
    }
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #30454e;
    }
  }
  @include tablet {
    &__cards {
      grid-template-columns: repeat(2, 50%);
      gap: 10px;
    }
  }
  @include phone {
    &__cards {
      grid-template-columns: repeat(1, 100%);
      justify-items: center;
    }
    &__content {
      &-description {
        p {
          font-size: 16px;
        }
      }
    }
    &__buildProgram {
      font-size: 20px;
    }
  }
}
</style>
