<template>
  <div class="selection">
    <div class="container">
      <AtomsHeading type="h3">
        {{ $t('suistainability.projectSelection.title') }}
      </AtomsHeading>
    </div>
    <div class="selection__step">
      <div class="selection__step-one" @click="openPopup(popups.one)">
        <div class="content">
          <div class="content__title">
            <AtomsHeading type="h4" color="white">01</AtomsHeading>
            <AtomsHeading type="h4" color="white">
              {{ $t('suistainability.projectSelection.section.right.title') }}
            </AtomsHeading>
          </div>
          <AtomsHeading type="h4" color="white">
            {{ $t('suistainability.projectSelection.section.right.subtitle') }}
          </AtomsHeading>
        </div>
      </div>
      <div class="selection__step-two" @click="openPopup(popups.two)">
        <div class="content">
          <div>
            <AtomsHeading type="h4" color="white">02</AtomsHeading>
            <AtomsHeading type="h4" color="white">
              {{ $t('suistainability.projectSelection.section.left.title') }}
            </AtomsHeading>
          </div>
          <AtomsHeading type="h4" color="white">
            {{ $t('suistainability.projectSelection.section.left.subtitle') }}
          </AtomsHeading>
        </div>
      </div>
    </div>
    <div class="container project">
      <AtomsHeading type="h3">
        {{ $t('suistainability.projectSelection.section2.title') }}
      </AtomsHeading>
      <div class="project__markers">
        <div
          v-for="(marker, index) of markers"
          :key="index"
          :data-label="marker.label"
          class="marker"
        >
          <div class="marker__arrow">
            <svg
              width="30"
              height="42"
              viewBox="0 0 30 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4142 0.585785C15.6332 -0.195263 14.3668 -0.195263 13.5858 0.585785L0.857863 13.3137C0.0768144 14.0948 0.0768144 15.3611 0.857863 16.1421C1.63891 16.9232 2.90524 16.9232 3.68629 16.1421L15 4.82843L26.3137 16.1421C27.0948 16.9232 28.3611 16.9232 29.1421 16.1421C29.9232 15.3611 29.9232 14.0948 29.1421 13.3137L16.4142 0.585785ZM17 42L17 2L13 2L13 42L17 42Z"
                fill="#5E8698"
              />
            </svg>
          </div>
          <AtomsMarker :title="marker.title" :color="marker.color" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popups: {
        one: {
          id: '01',
          title: this.$t('suistainability.projectSelection.section.right.subtitle'),
          modal: 'SelectionProject',
          list: this.$t('suistainability.projectSelection.section.right.list')
        },
        two: {
          id: '02',
          title: this.$t('suistainability.projectSelection.section.left.subtitle'),
          modal: 'SelectionProject',
          list: this.$t('suistainability.projectSelection.section.left.list'),
          fileLink: this.$t('suistainability.projectSelection.section.left.fileLink[0]'),
          fileLink2: this.$t('suistainability.projectSelection.section.left.fileLink2[0]')
        }
      },
      markers: [
        {
          id: 1,
          title: this.$t(
            'suistainability.projectSelection.section2.markers.june.title'
          ),
          color: '#FFC000',
          label: this.$t(
            'suistainability.projectSelection.section2.markers.june.label'
          ),
        },
        {
          id: 2,
          title: this.$t(
            'suistainability.projectSelection.section2.markers.jule.title'
          ),
          color: '#FFC000',
          label: this.$t(
            'suistainability.projectSelection.section2.markers.jule.label'
          ),
        },
        {
          id: 45,
          title: this.$t(
            'suistainability.projectSelection.section2.markers.august.title'
          ),
          color: '#44D0F7',
          label: this.$t(
            'suistainability.projectSelection.section2.markers.august.label'
          ),
        },
        {
          id: 3,
          title: this.$t(
            'suistainability.projectSelection.section2.markers.september.title'
          ),
          color: '#00B0F0',
        },
        {
          id: 4,
          title: this.$t(
            'suistainability.projectSelection.section2.markers.october.title'
          ),
          color: '#5E8698',
        },
        {
          id: 5,
          title: this.$t(
            'suistainability.projectSelection.section2.markers.november.title'
          ),
          label: this.$t(
            'suistainability.projectSelection.section2.markers.november.label'
          ),
          color: '#0282A0',
        },
        {
          id: 6,
          title: this.$t(
            'suistainability.projectSelection.section2.markers.december.title'
          ),
          color: '#015467',
          label: this.$t(
            'suistainability.projectSelection.section2.markers.december.label'
          ),
        },
        {
          id: 7,
          title: this.$t(
            'suistainability.projectSelection.section2.markers.january.title'
          ),
          color: '#30454E',
          label: this.$t(
            'suistainability.projectSelection.section2.markers.january.label'
          ),
        },
      ],
    }
  },
  mounted() {
    console.log(this.$t('suistainability.projectSelection.section2.markers'))
  },
  methods: {
    openPopup(payload) {
      this.$modal.add({
        title: payload.modal,
        payload,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.selection {
  padding: 80px 0;
  &__step {
    margin-top: 40px;
    display: flex;
    &-one {
      background-color: #015467;
      width: 100%;
    }
    &-two {
      width: 100%;
      background-color: #347685;
    }
  }
  @include tablet {
    &__step {
      flex-direction: column;
      &-one {
        width: 100%;
        justify-content: center;
      }
      &-two {
        width: 100%;
        justify-content: center;
      }
    }
  }
}
.content {
  display: flex;
  max-width: 400px;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  gap: 40px;
  cursor: pointer;
  padding: 80px 0;
  @include phone {
    padding: 50px;
  }
}
.project {
  padding: 80px 0 40px 0;
  @include wide-tablet {
    h3 {
      text-align: center;
    }
  }
  &__markers {
    max-width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    position: relative;
    @include middle-laptop {
      margin-top: 20px;
      flex-direction: column;
      align-items: center;
      height: auto;
      left: 0;
      overflow: hidden;
    }
  }
}
.marker {
  width: 100%;
  $p: &;
  @include phone {
    font-size: rem(14);
  }
  &:nth-child(1) {
    #{$p}__arrow {
      position: relative;
      left: 70px;
      top: -20px;
    }
    &:before {
      display: block;
      content: attr(data-label);
      position: absolute;
      top: 50px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(2) {
    #{$p}__arrow {
      position: relative;
      left: -160px;
      bottom: -120px;
      transform: rotate(-180deg);
    }
    &:after {
      display: block;
      content: attr(data-label);
      position: absolute;
      bottom: 70px;
      left: 160px;
      color: $c-text;
      width: 270px;
      height: 32px;
      @include middle-laptop {
        display: none;
      }
    }
  }
  &:nth-child(3) {
    #{$p}__arrow {
      position: relative;
      left: 150px;
      top: -20px;
    }
    &:before {
      display: block;
      content: attr(data-label);
      position: absolute;
      top: 50px;
      left: 500px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(4) {
    #{$p}__arrow {
      position: relative;
      left: 150px;
      bottom: 0px;
      top: -20px;
    }
    &:after {
      display: block;
      content: attr(data-label);
      position: absolute;
      bottom: 70px;
      left: 685px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(5) {
    #{$p}__arrow {
      visibility: hidden;
      position: relative;
      left: 10px;
      bottom: -120px;
      transform: rotate(-180deg);
    }
  }
  &:nth-child(6) {
    #{$p}__arrow {
      position: relative;
      left: 0px;
      bottom: -120px;
      transform: rotate(-180deg);
    }
    &:before {
      display: block;
      content: attr(data-label);
      position: absolute;
      top: 80px;
      right: 0px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(7) {
    #{$p}__arrow {
      position: relative;
      left: 60px;
      top: -20px;
    }
    &:after {
      display: block;
      content: attr(data-label);
      position: absolute;
      bottom: 70px;
      left: 920px;
      color: $c-text;
      width: 270px;
      height: 32px;
      @include middle-laptop {
        display: none;
      }
    }
  }
  &:nth-child(8) {
    #{$p}__arrow {
      position: relative;
      left: -60px;
      bottom: -120px;
      transform: rotate(-180deg);
    }
    &:after {
      display: block;
      content: attr(data-label);
      position: absolute;
      bottom: 70px;
      left: 1180px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  @include middle-laptop {
    display: flex;
    &:nth-child(1) {
      #{$p}__arrow {
        position: relative;
        left: 150px;
        top: 30px;
        svg {
          height: 24px;
          transform: rotate(90deg);
        }
      }
      &:before {
        display: block;
        content: attr(data-label);
        position: absolute;
        top: 10px;
        left: 200px;
        color: $c-text;
        height: 32px;
        width: 50%;
        white-space: pre-wrap;
      }
    }
    &:nth-child(2) {
      #{$p}__arrow {
        position: relative;
        left: 150px;
        top: -65px;
        svg {
          height: 24px;
          transform: rotate(270deg);
        }
      }
      &:before {
        display: block;
        content: attr(data-label);
        position: absolute;
        top: 130px;
        left: 200px;
        color: $c-text;
        height: 32px;
        width: 50%;
        white-space: pre-wrap;
      }
    }
    &:nth-child(3) {
      #{$p}__arrow {
        position: relative;
        left: 150px;
        top: 105px;
        svg {
          height: 24px;
          transform: rotate(90deg);
        }
      }
      &:before {
        display: block;
        content: attr(data-label);
        position: absolute;
        top: 340px;
        left: 200px;
        color: $c-text;
        height: 32px;
        width: 50%;
        white-space: pre-wrap;
      }
    }
    &:nth-child(4) {
      #{$p}__arrow {
        opacity: 0;
      }
    }
    &:nth-child(5) {
      &:before {
        display: block;
        content: attr(data-label);
        position: absolute;
        top: 600px;
        left: 200px;
        color: $c-text;
        height: 32px;
        width: 50%;
        white-space: pre-wrap;
      }
    }
    &:nth-child(6) {
      #{$p}__arrow {
        position: relative;
        left: 150px;
        top: 10px;
        svg {
          height: 24px;
          transform: rotate(270deg);
        }
      }
      &:before {
        display: block;
        content: attr(data-label);
        position: absolute;
        top: 710px;
        left: 200px;
        color: $c-text;
        height: 32px;
        width: 50%;
        white-space: pre-wrap;
      }
    }
    &:nth-child(7) {
      #{$p}__arrow {
        position: relative;
        left: 150px;
        top: 50px;
        svg {
          height: 24px;
          transform: rotate(90deg);
        }
      }
      &:before {
        display: block;
        content: attr(data-label);
        position: absolute;
        top: 770px;
        left: 200px;
        color: $c-text;
        width: 270px;
        height: 32px;
      }
    }
    &:nth-child(8) {
      #{$p}__arrow {
        position: relative;
        left: 150px;
        top: -50px;
        svg {
          height: 24px;
          transform: rotate(270deg);
        }
      }
      &:before {
        display: block;
        content: attr(data-label);
        position: absolute;
        top: 880px;
        left: 200px;
        color: $c-text;
        height: 32px;
        width: 50%;
        white-space: pre-wrap;
      }
    }
  }
}
</style>
