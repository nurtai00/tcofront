<template>
  <div class="project">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">
          {{ $t('suistainability.breadcrumbs.main') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/sustainability">
          {{ $t('suistainability.title') }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="`/sustainability/${$route.params.projects}`">
          {{ $t('suistainability.breadcrumbs.igilik') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>

      <div class="project__content">
        <div class="project__info">
          <AtomsTitle class="mb40">
            {{ title }}
          </AtomsTitle>
          <p>
            {{ $t('suistainability.project.description') }}
          </p>
        </div>
        <img
          src="@/assets/img/sustainability/project/background.svg"
          alt="skvazhina"
        />
      </div>
      <div class="project__cards">
        <MoleculesCardPopUpCard
          v-for="card of cardItems"
          :key="card.id"
          :item="card"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardItems: [
        {
          id: 1,
          title: this.$t('suistainability.project.cardPlaces.card1'),
          modal: 'SustainabilityProject',
        },
        {
          id: 2,
          title: this.$t('suistainability.project.cardPlaces.card2'),
          modal: 'SustainabilityProject',
        },
        {
          id: 3,
          title: this.$t('suistainability.project.cardPlaces.card3'),
          modal: 'SustainabilityProject',
        },
        {
          id: 4,
          title: this.$t('suistainability.project.cardPlaces.card4'),
          modal: 'SustainabilityProject',
        },
        {
          id: 5,
          title: this.$t('suistainability.project.cardPlaces.card5'),
          modal: 'SustainabilityProject',
        },
      ],
    }
  },
  computed: {
    title() {
      const path = this.$route.path.split('/').pop()
      return path === 'igilik'
        ? this.$t('suistainability.project.title', { project: 'Игилик' })
        : this.$t('suistainability.project.title', { project: 'ПСИ' })
    },
  },
}
</script>
<style lang="scss" scoped>
.project {
  padding-bottom: 80px;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__info {
    flex-basis: 70%;
    padding-bottom: 40px;
    p {
      font-size: 20px;
      font-family: Roboto, sans-serif;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 20px;
  }
  @include phone {
    img {
      display: none;
    }
    &__content {
      display: block;
    }
    &__info {
      p {
        font-size: 16px;
      }
    }
    &__cards {
      grid-template-columns: repeat(2, 50%);
      gap: 10px;
    }
  }
}
</style>
