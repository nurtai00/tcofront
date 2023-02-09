<template>
  <div class="map">
    <div class="container map__content">
      <AtomsHeading type="h3">
        {{ $t('suistainability.mapProjects.title') }}
      </AtomsHeading>
      <div class="img-container">
        <img
          class="map__img"
          :src="
            require(`@/assets/img/sustainability/map-projects/map_igilik_${lang}.png`)
          "
          alt="map"
        />
        <div
          v-for="marker in markersCoordsAndData"
          :key="marker.id"
          class="img-marker"
          :style="marker.coord"
          @click="openMarkerPopup(marker)"
        ></div>
      </div>
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
import mapData from '@/components/organisms/Section/Sustainability/map_projects.json'
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
  computed: {
    mapProjects() {
      return mapData
    },
    lang() {
      return this.$i18n.locale
    },
    markersCoordsAndData() {
      return [
        {
          id: 1,
          coord: 'top: 50%; left: 52%;',
          title: this.mapProjects[this.lang].markers.marker1.title,
          list: this.mapProjects[this.lang].markers.marker1.description,
          color: 'yellow',
          imgSrc: 'atyrau/popup-1.png',
        },
        {
          id: 2,
          coord: 'top: 54%; left: 49%;',
          title: this.mapProjects[this.lang].markers.marker2.title,
          list: this.mapProjects[this.lang].markers.marker2.description,
          color: 'blue',
          imgSrc: 'atyrau/popup-2.png',
        },
        {
          id: 3,
          coord: 'top: 53%; left: 55%;',
          title: this.mapProjects[this.lang].markers.marker3.title,
          list: this.mapProjects[this.lang].markers.marker3.description,
          color: 'blue',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 4,
          coord: 'top: 47%; left: 54%;',
          title: this.mapProjects[this.lang].markers.marker4.title,
          list: this.mapProjects[this.lang].markers.marker4.description,
          color: 'dark',
          imgSrc: 'atyrau/popup-4.png',
        },
        {
          id: 5,
          coord: 'top: 57%; left: 53%;',
          title: this.mapProjects[this.lang].markers.marker5.title,
          list: this.mapProjects[this.lang].markers.marker5.description,
          color: 'dark',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 6,
          coord: 'top: 57%; left: 50%;',
          title: this.mapProjects[this.lang].markers.marker6.title,
          list: this.mapProjects[this.lang].markers.marker6.description,
          color: 'yellow',
          imgSrc: 'atyrau/popup-5.png',
        },
        {
          id: 7,
          coord: 'top: 53%; left: 82%;',
          title: this.mapProjects[this.lang].markers.marker7.title,
          list: this.mapProjects[this.lang].markers.marker7.description,
          color: 'yellow',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 8,
          coord: 'top: 73%; left: 81%;',
          title: this.mapProjects[this.lang].markers.marker8.title,
          list: this.mapProjects[this.lang].markers.marker8.description,
          color: 'yellow',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 9,
          coord: 'top: 60%; left: 75%;',
          title: this.mapProjects[this.lang].markers.marker9.title,
          list: this.mapProjects[this.lang].markers.marker9.description,
          color: 'blue',
          imgSrc: 'jiliskii/popup-1.png',
        },
        {
          id: 10,
          coord: 'top: 77%; left: 67%;',
          title: this.mapProjects[this.lang].markers.marker10.title,
          list: this.mapProjects[this.lang].markers.marker10.description,
          color: 'yellow',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 11,
          coord: 'top: 48%; left: 67%;',
          title: this.mapProjects[this.lang].markers.marker11.title,
          list: this.mapProjects[this.lang].markers.marker11.description,
          color: 'blue',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 12,
          coord: 'top: 17%; left: 42%;',
          title: this.mapProjects[this.lang].markers.marker12.title,
          list: this.mapProjects[this.lang].markers.marker12.description,
          color: 'yellow',
          imgSrc: 'inder/popup-1.png',
        },
        {
          id: 13,
          coord: 'top: 25%; left: 51%;',
          title: this.mapProjects[this.lang].markers.marker13.title,
          list: this.mapProjects[this.lang].markers.marker13.description,
          color: 'yellow',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 14,
          coord: 'top: 19%; left: 55%;',
          title: this.mapProjects[this.lang].markers.marker14.title,
          list: this.mapProjects[this.lang].markers.marker14.description,
          color: 'yellow',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 15,
          coord: 'top: 15%; left: 48%;',
          title: this.mapProjects[this.lang].markers.marker15.title,
          list: this.mapProjects[this.lang].markers.marker15.description,
          color: 'blue',
          imgSrc: 'atyrau/popup-3.png',
        },
        {
          id: 16,
          coord: 'top: 40%; left: 50%',
          title: this.mapProjects[this.lang].markers.marker16.title,
          list: this.mapProjects[this.lang].markers.marker16.description,
          color: 'dark',
          imgSrc: 'atyrau/popup-3.png',
        },
      ]
    },
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
    openMarkerPopup(item) {
      this.$modal.add({
        title: 'SustainabilityMarkers',
        payload: {
          list: item.list,
          title: item.title,
          color: item.color,
          imgSrc: item.imgSrc,
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
    width: 100%;
    position: relative;
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
      flex-direction: column;
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
  .img-container {
    position: relative;
    align-self: center;
    width: 70%;
    @include phone {
      width: 100%;
    }
    .img-marker {
      cursor: pointer;
      position: absolute;
      width: 17px;
      height: 17px;
      @media (max-width: 780px) {
        width: 10px;
        height: 10px;
      }
    }

    .place-1 {
      top: 18%;
      left: 42%;
    }
  }
}
</style>
