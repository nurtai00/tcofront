<template>
  <div class="protocols">
    <div class="container">
      <MoleculesBreadcrumbs class="protocols__breadcrumbs">
        <AtomsBreadOption to="/">{{
          $t('project.breadcrumbs_1[0]')
        }}</AtomsBreadOption>
        <AtomsBreadOption to="/projects">{{
          $t('project.breadcrumbs_1[1]')
        }}</AtomsBreadOption>
        <AtomsBreadOption to="/projects/protocols">{{
          $t('project.breadcrumbs_1[2]')
        }}</AtomsBreadOption>
      </MoleculesBreadcrumbs>
    </div>
    <div class="grey">
      <div class="container">
        <div class="protocols__header">
          <AtomsTitle class="protocols__title">{{
            $t('project.breadcrumbs_1[2]')
          }}</AtomsTitle>
          <!-- <nuxt-link class="more" to="/">Все протоколы</nuxt-link> -->
        </div>
        <div class="protocols__tags">
          <AtomsTag
            v-for="(tag, index) of tags"
            :key="index"
            :tag="tag"
            @click="onTag"
          />
        </div>
        <div class="protocols__protocols_body">
          <OrganismsSectionOperationCard
            v-for="(item, key) in cards"
            :key="key"
            :content="item"
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
      tags: [
        {
          id: 1,
          text: '2016',
        },
        {
          id: 2,
          text: '2017',
        },
        {
          id: 3,
          text: '2018',
        },
      ],
      cards: [
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },
        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },

        {
          number: this.$t('project.protocols.items[0].year'),
          name: this.$t('project.protocols.items[0].text'),
          description: this.$t('project.protocols.items[0].description'),
        },
      ],
    }
  },
  methods: {
    onTag() {
      console.log('works')
    },
  },
}
</script>

<style lang="scss" scoped>
.protocols {
  &__breadcrumbs {
    margin: 40px 0;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__protocols {
    padding: 80px 0;

    &_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    &_body {
      display: flex;
      flex-wrap: wrap;

      & > * {
        width: calc((100% - 48px) / 3);
        margin-bottom: 24px;
        height: 300px;

        @media screen and (min-width: 1025px) {
          &:not(:nth-child(3n)) {
            margin-right: 24px;
          }
        }
      }

      @include wide-tablet {
        flex-wrap: wrap;

        & > * {
          margin-bottom: 24px;
          width: calc((100% - 24px) / 2);

          @media screen and (min-width: 560px) {
            &:not(:nth-child(2n)) {
              margin-right: 24px;
            }
          }
        }
      }

      @include phone {
        & > * {
          margin-bottom: 8px;
          width: calc((100% - 9px) / 2);
          &:not(:nth-child(2n)) {
            margin-right: 9px;
          }
          word-break: break-word;
        }
      }
    }
  }

  &__title {
    margin-bottom: 36px;
  }

  &__tags {
    margin-bottom: 40px;
  }

  .grey {
    background-color: $c-tco33;
    padding: 40px 0 80px;
  }

  .more {
    font-size: 18px;
    text-decoration: underline;
    color: #0da9d7;
  }
}
</style>
