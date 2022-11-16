<template>
  <div class="project">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/sustainability">
          Sustainability
        </AtomsBreadOption>
        <AtomsBreadOption :to="`/sustainability/${$route.params.projects}`">
          Проекты Игилик
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>

      <div class="project__content">
        <div class="project__info">
          <AtomsTitle class="mb40">
            Проекты, созданные в рамках “Игилик”
          </AtomsTitle>
          <p>
            Результаты совместной работы ТШО с неправительственными
            организациями решают многие социальные проблемы и оказывают
            позитивное влияние на общественную жизнь региона.
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
          title: 'г.Атырау',
          modal: 'SustainabilityProject',
        },
        {
          id: 2,
          title: 'Жылыойский район',
          modal: 'SustainabilityProject',
        },
        {
          id: 3,
          title: 'Исатайский район',
          modal: 'SustainabilityProject',
        },
        {
          id: 4,
          title: 'Махамбетский район',
          modal: 'SustainabilityProject',
        },
        {
          id: 5,
          title: 'Индерский район',
          modal: 'SustainabilityProject',
        },
      ],
    }
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
