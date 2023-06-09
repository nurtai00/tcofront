<template>
  <div class="projects">
    <div class="container">
      <MoleculesBreadcrumbs class="projects__breadcrumbs">
        <AtomsBreadOption to="/projects">
          {{ $t('project.breadcrumbs_1[1]') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/projects/other-projects">
          {{ $t('project.breadcrumbs_1[3]') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="projects__title">
        {{ $t('project.breadcrumbs_1[3]') }}
      </AtomsTitle>
      <div class="projects__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag"
        />
      </div>
    </div>
    <OrganismsSectionOperationSvg class="svgs" :data="sideSvg[0]">
      <template #description>
        <p>{{ $t('project.other.descriprtion') }}</p>
        <strong
          style="font-style: italic; margin-top: 15px; display: inline-block"
        >"{{ $t('project.other.author') }}"</strong>
      </template>
    </OrganismsSectionOperationSvg>
    <OrganismsSectionOperationSlide
      v-for="(item, key) in slide"
      :key="'first' + key"
      class="content"
      :side="!!(key % 2)"
      :data="item"
      has-emit
      :slice-word-length="item.description.length"
      @popup="openPopup(item)"
    >
      <template #description="{ description }">
        <p>{{ description }}</p>
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationHistory />
    <!-- <OrganismsSectionCareerBlock8 class="projects__news" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideSvg: [
        {
          title: this.$t('project.breadcrumbs_1[3]'),
        },
      ],
      slide: [
        {
          title: this.$t('project.other.projects[0].title'),
          description: this.$t('project.other.projects[0].text'),
          image: 'projects/projects1.png',
          popupText: this.$t('project.other.projects[0].popupText'),
        },
        {
          title: this.$t('project.other.projects[1].title'),
          description: this.$t('project.other.projects[1].text'),
          image: 'projects/projects2.png',
          popupText: this.$t('project.other.projects[1].popupText'),
          link: () => {
            this.$store.commit('side/open', {
              html: this.$t('project.other.projects[0].text'),
            })
          },
        },
      ],
    }
  },
  methods: {
    onTag() {
      console.log('works')
    },
    openPopup(item) {
      this.$modal.add({
        title: 'Default',
        payload: {
          modal: 'Default',
          title: item.title,
          text: item.popupText,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.projects {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__video {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__description {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
    color: $c-tco3;

    @include phone {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .slide::v-deep {
    .slide__content.container {
      background-color: white;
    }
  }

  .protocols {
    background-color: #f2f6f7;
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

  &__slide {
    display: flex;
    gap: 20px;

    & > * {
      width: 50%;
    }

    .left {
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;

      & > div {
        margin-bottom: 46px;

        &:not(.title) {
          color: #30454e;
          opacity: 0.1;
        }
      }

      .title {
        color: #0282a0;
      }
    }

    .right {
      text-align: right;
    }
  }

  &__title {
    margin-bottom: 36px;
  }

  &__tags {
    margin-bottom: 40px;
  }

  &__production-security.block {
    padding: 80px 0;

    @include tablet {
      padding: 20px 40px;
    }

    @include phone {
      padding: 20px 0;
    }
  }

  .chesm {
    background: white;
  }

  .grey {
    background-color: $c-tco33;
  }

  &__news {
    background: #f2f6f7;
  }

  &__list {
    padding-left: 22px;

    &:not(&_num) {
      li {
        margin-bottom: 20px;
        list-style-type: disc;

        &::marker {
          color: $c-tco5;
          font-size: 24px;
        }
      }
    }

    &_num {
      margin-bottom: 20px;
      color: $c-tco1;
      padding-left: 22px;

      li {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 20px;
        list-style-type: decimal;

        @include phone {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }

  .slide::v-deep {
    .slide_text {
      margin-top: 20px;

      a {
        color: $c-tco5;
      }
    }

    .slide__content {
      background-color: $c-tco33;
    }
  }
}
.content {
  background-color: $c-tco33;
}
</style>
