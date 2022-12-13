<template>
  <div class="map">
    <div class="container map__content">
      <AtomsHeading type="h3">
        {{ $t('suistainability.mapProjects.title') }}
      </AtomsHeading>
      <img
        class="map__img"
        src="@/assets/img/sustainability/map-projects/map_igilik.png"
        alt="map"
      />
      <div class="map__markers">
        <div class="map__marker">
          <svg width="23" height="32" viewBox="0 0 23 32" fill="none">
            <path
              d="M11.7124 0.0458984C5.60316 0.0458984 0.632812 5.01625 0.632812 11.1255C0.632812 18.8042 11.7233 31.9209 11.7233 31.9209C11.7233 31.9209 22.792 18.4265 22.792 11.1255C22.792 5.01625 17.8218 0.0458984 11.7124 0.0458984ZM15.0554 14.3696C14.1336 15.2912 12.9231 15.7521 11.7124 15.7521C10.5019 15.7521 9.29105 15.2912 8.36966 14.3696C6.5263 12.5264 6.5263 9.52727 8.36966 7.68391C9.26225 6.79093 10.4496 6.29911 11.7124 6.29911C12.9752 6.29911 14.1624 6.79113 15.0554 7.68391C16.8987 9.52727 16.8987 12.5264 15.0554 14.3696Z"
              fill="#44D0F7"
            />
          </svg>
          <span> {{ $t('suistainability.mapProjects.tags.one') }}</span>
        </div>
        <div class="map__marker">
          <svg width="23" height="32" viewBox="0 0 23 32" fill="none">
            <path
              d="M11.7124 0.0458984C5.60316 0.0458984 0.632812 5.01625 0.632812 11.1255C0.632812 18.8042 11.7233 31.9209 11.7233 31.9209C11.7233 31.9209 22.792 18.4265 22.792 11.1255C22.792 5.01625 17.8218 0.0458984 11.7124 0.0458984ZM15.0554 14.3696C14.1336 15.2912 12.9231 15.7521 11.7124 15.7521C10.5019 15.7521 9.29105 15.2912 8.36966 14.3696C6.5263 12.5264 6.5263 9.52727 8.36966 7.68391C9.26225 6.79093 10.4496 6.29911 11.7124 6.29911C12.9752 6.29911 14.1624 6.79113 15.0554 7.68391C16.8987 9.52727 16.8987 12.5264 15.0554 14.3696Z"
              fill="#FFC000"
            />
          </svg>
          <span>{{ $t('suistainability.mapProjects.tags.two') }}</span>
        </div>
        <div class="map__marker">
          <svg width="23" height="32" viewBox="0 0 23 32" fill="none">
            <path
              d="M11.7124 0.0458984C5.60316 0.0458984 0.632812 5.01625 0.632812 11.1255C0.632812 18.8042 11.7233 31.9209 11.7233 31.9209C11.7233 31.9209 22.792 18.4265 22.792 11.1255C22.792 5.01625 17.8218 0.0458984 11.7124 0.0458984ZM15.0554 14.3696C14.1336 15.2912 12.9231 15.7521 11.7124 15.7521C10.5019 15.7521 9.29105 15.2912 8.36966 14.3696C6.5263 12.5264 6.5263 9.52727 8.36966 7.68391C9.26225 6.79093 10.4496 6.29911 11.7124 6.29911C12.9752 6.29911 14.1624 6.79113 15.0554 7.68391C16.8987 9.52727 16.8987 12.5264 15.0554 14.3696Z"
              fill="#015467"
            />
          </svg>
          <span>{{ $t('suistainability.mapProjects.tags.three') }}</span>
        </div>
      </div>
      <or class="map__list">
        <li class="map__list-item">Курмангазинский район</li>
        <li class="map__list-item">Исатайский район</li>
        <li class="map__list-item">Индерский район индекс</li>
        <li class="map__list-item">Махамбетский район</li>
        <li class="map__list-item">Кзылкогинский район</li>
        <li class="map__list-item">Макатский район</li>
        <li class="map__list-item">Жылыойский район</li>
        <li class="map__list-item">г. Атырау</li>
      </or>
      <div class="map__cards">
        <MoleculesCardSuistanabilityCard
          v-for="card of cards"
          :key="card.id"
          :card="card"
          @click="openPopup"
        />
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
          text: this.$t('suistainability.mapProjects.cards.card1.title'),
          description: this.$t(
            'suistainability.mapProjects.cards.card1.description'
          ),
          img: 'sustainability/map-projects/document.png',
        },
        {
          id: 2,
          text: this.$t('suistainability.mapProjects.cards.card2.title'),
          description: this.$t(
            'suistainability.mapProjects.cards.card2.description'
          ),
          img: 'sustainability/map-projects/build.png',
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
.map {
  padding: 80px 0;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__img {
    align-self: center;
    max-width: 100%;
  }
  &__markers {
    display: flex;
    gap: 40px;
  }
  &__marker {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__list {
    display: none;
  }
  &__cards {
    display: grid;
    width: 75%;
    grid-template-columns: repeat(2, 50%);
    gap: 20px;
  }
  @include tablet {
    &__cards {
      width: 100%;
    }
  }
  @include phone {
    &__cards {
      grid-template-columns: repeat(1, 100%);
      justify-items: center;
    }
    &__markers {
      gap: 5px;
    }
    &__marker {
      span {
        font-size: 14px;
      }
      png {
        width: 8px;
        height: 11px;
      }
    }
    &__list {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-left: 20px;
      &-item {
        list-style: decimal-leading-zero;
        font-size: 16px;
        color: $c-tco1;
        border-bottom: 1px solid rgb($c-tco1, 20%);
        padding-bottom: 10px;
      }
    }
  }
}
</style>
