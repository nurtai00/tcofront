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
          {{
            $t(
              $route.params.projects === 'psi'
                ? 'suistainability.breadcrumbs.psi'
                : 'suistainability.breadcrumbs.igilik'
            )
          }}
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
          src="@/assets/img/sustainability/project/background.png"
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
    return {}
  },
  computed: {
    cardItems() {
      const psiItems = []
      for (let i = 0; i < 22; i++) {
        psiItems.push({
          id: i + 1,
          title: this.$t(`suistainability.psi[${i}].title`),
          title_2: this.$t(`suistainability.psi[${i}].title_2`),
          text: this.$t(`suistainability.psi[${i}].text`),
          modal: 'SustainabilityPsi',
        })
      }
      return this.$route.params.projects === 'psi'
        ? psiItems
        : [
            {
              id: 1,
              title: this.$t('suistainability.project.cardPlaces.card1'),
              modal: 'SustainabilityProject',
              projects: this.$t('suistainability.project.lists.card1'),
            },
            {
              id: 2,
              title: this.$t('suistainability.project.cardPlaces.card2'),
              modal: 'SustainabilityProject',
              projects: this.$t('suistainability.project.lists.card2'),
            },
            {
              id: 3,
              title: this.$t('suistainability.project.cardPlaces.card3'),
              modal: 'SustainabilityProject',
              projects: this.$t('suistainability.project.lists.card3'),
            },
            {
              id: 4,
              title: this.$t('suistainability.project.cardPlaces.card4'),
              modal: 'SustainabilityProject',
              projects: this.$t('suistainability.project.lists.card4'),
            },
            {
              id: 5,
              title: this.$t('suistainability.project.cardPlaces.card5'),
              modal: 'SustainabilityProject',
              projects: this.$t('suistainability.project.lists.card5'),
            },
            {
              id: 6,
              title: this.$t('suistainability.project.cardPlaces.card6'),
              modal: 'SustainabilityProject',
              projects: this.$t('suistainability.project.lists.card6'),
            }
          ]
    },
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
