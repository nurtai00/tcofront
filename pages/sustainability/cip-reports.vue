<script>
export default {
  data() {
    return {
      tags: [
        {
          id: 1,
          text: 2018,
          selected: true,
        },
        {
          id: 2,
          text: 2019,
        },
        {
          id: 3,
          text: 2020,
        },
        {
          id: 4,
          text: 2021,
        },
        {
          id: 5,
          text: 2022,
        },
      ],
      selected_tag: 2018,
      files: this.$t('suistainability.cipReports'),
    }
  },
  computed: {
    filteredFiles() {
      return this.files.filter((item) => item.year === this.selected_tag)
    },
  },
  methods: {
    onTag(item) {
      this.tags.forEach((tag) => {
        if (tag.id === item.id) {
          tag.selected = true
          this.selected_tag = tag.text
        } else {
          tag.selected = false
        }
      })
      this.$forceUpdate()
    },
  },
}
</script>

<template>
  <div>
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption :to="localePath('/')">
          {{ $t('suistainability.breadcrumbs.main') }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/sustainability')">
          {{ $t('suistainability.title') }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/sustainability')">
          {{ $t('suistainability.reportsCIP') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <div class="kazakhstani__tags">
        <AtomsTag
          v-for="tag of tags"
          :key="tag.id + 'asd' + tag.selected"
          :tag="tag"
          @click="onTag"
        />
      </div>
      <div class="figures_list">
        <div v-for="file in filteredFiles" :key="file.link">
          <img src="@/assets/img/pdf.png" alt="pdf" width="30" height="40" />
          <a :href="file.link" target="_blank" v-text="file.text"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.kazakhstani {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__tags {
    margin-bottom: 40px;
  }

  .gray {
    background-color: $c-tco33;
  }

  &__chart {
    padding: 80px 0;

    p {
      font-size: 20px;
      color: $c-tco1;
    }

    @media screen and (max-width: 572px) {
      padding: 40px 0;

      p {
        font-size: 14px;
      }
    }
  }

  .strategy {
    display: flex;
    padding: 80px 0;

    & > div {
      width: 50%;
    }

    &__content {
      padding-right: 72px;
    }

    &__title {
      font-size: 38px;
      line-height: 46px;
      margin-bottom: 40px;
      color: $c-tco1;
      font-weight: 700;
    }

    p {
      margin-bottom: 40px;
    }

    &__cards {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & > div {
        width: calc(50% - 24px);
        margin-bottom: 24px;
        box-shadow: 0 10px 30px 0 #8a959e1a;
      }
    }

    @media screen and (max-width: 1025px) {
      flex-direction: column;

      & > div {
        width: 100%;
      }

      &__content {
        padding-right: 0;
      }
    }

    @include phone {
      padding: 40px 0;

      &__title {
        font-size: 20px;
        line-height: 26px;
      }

      p {
        font-size: 16px;
        line-height: 20px;
      }

      &__cards {
        & > div {
          width: 100%;

          &:nth-child(3) {
            order: 4;
          }
        }
      }
    }
  }

  &__titlee {
    margin-bottom: 20px;
    font-size: 38px;
    line-height: 46px;
    color: $c-tco3;
    font-weight: 700;

    @media screen and (max-width: 572px) {
      font-size: 20px;
      line-height: 26px;
    }
  }

  &__working {
    padding: 80px 0;

    & > div {
      display: flex;
      margin-bottom: 54px;

      &:first-child {
        .kazakhstani__working_cards {
          width: 50%;

          & > div {
            width: calc(50% - 12px);
          }

          @media screen and (max-width: 1025px) {
            width: 100%;
          }
        }
      }

      @media screen and (max-width: 1025px) {
        flex-wrap: wrap;
        margin-bottom: 0;
      }
    }

    &_cards {
      display: flex;
      justify-content: space-between;

      & > div {
        width: calc(100% / 4 - 24px);

        @media screen and (max-width: 1025px) {
          width: calc(100% / 2 - 12px);
          margin-bottom: 20px;
        }
      }
    }

    &_content {
      width: 50%;
      margin-right: 24px;
      padding-right: 50px;

      .title {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 16px;
        color: #000;

        &:first-child {
          margin-bottom: 50px;
        }
      }

      p {
        a {
          color: $c-tco5;
        }
      }

      @media screen and (max-width: 1025px) {
        width: 100%;
        margin-right: 0;
        padding-right: 0;
        margin-bottom: 20px;
      }
    }

    @media screen and (max-width: 572px) {
      padding: 40px 0;

      &_content {
        .title {
          font-size: 20px;
          line-height: 26px;

          &:first-child {
            margin-bottom: 40px;
          }
        }

        p {
          font-size: 16px;
          line-height: 20px;
        }
      }

      &_cards {
        flex-wrap: wrap;

        .card {
          width: 100% !important;
        }
      }
    }
  }
}
.figures_list {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
  @media (orientation: portrait) {
    grid-template-columns: repeat(2, 50%);
  }
  div {
    margin-bottom: 30px;
  }
  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-decoration-line: underline;
    color: #181716;
    display: block;
    @media (orientation: portrait) {
      font-size: 14px;
      line-height: 18px;
    }
  }
}
</style>
