<template>
  <div class="personal_career">
    <div class="container">
      <OperationSlide :data="education_personal" class="person">
        <template #description="{ description }">
          <p>{{ description }}</p>
        </template>
      </OperationSlide>
      <div class="personal_career_blocks">
        <div
          v-for="(personal, idx) in personal_list"
          :key="idx"
          class="blocks_content"
          :class="{
            reverse: idx % 2 === 1,
            hasPaddingBottom: personal.text.length <= 137,
          }"
        >
          <div class="blocks_content__info">
            <h3>{{ personal.title }}</h3>
            <div
              class="description"
              v-html="slicedDescription(personal.text)"
            ></div>
            <button
              v-if="personal.text.length > 137"
              @click="openModal(personal)"
            >
              {{ $t('operation.more') }}
            </button>
          </div>
          <div class="blocks_content-img">
            <img :src="personal.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OperationSlide from 'organisms/Section/Operation/Slide'
export default {
  components: { OperationSlide },
  data() {
    return {
      education_personal: {
        title: this.$t('career.block5_header'),
        description: this.$t('career.block5_description'),
        image: 'career/personal_img.png',
      },
      personal_list: [
        {
          title: this.$t('career.block5_title')[0],
          text: `<p>${this.$t('career.block5_list')[0]}</p>`,
          img: require('@/assets/img/career/personal1.png'),
        },
        {
          title: this.$t('career.block5_title')[1],
          text: `<p style="margin-bottom:8px">${
            this.$t('career.block5_list')[1]
          }</p>`,
          img: require('@/assets/img/career/personal2.png'),
        },
        {
          title: this.$t('career.block5_title')[2],
          text: `<p style="margin-bottom:8px">${
            this.$t('career.block5_list')[2]
          }</p>`,
          img: require('@/assets/img/career/personal3.png'),
        },
        {
          title: this.$t('career.block5_title')[3],
          text: `<p style="margin-bottom:8px">${
            this.$t('career.block5_list')[3]
          }</p><ul type="disc"><li>${
            this.$t('career.block5_list')[4]
          }</li><li>${this.$t('career.block5_list')[5]}</li></ul>`,
          img: require('@/assets/img/career/personal4.png'),
        },
        {
          title: this.$t('career.block5_title')[4],
          text: `<p>${this.$t('career.block5_list')[6]}</p>`,
          img: require('@/assets/img/career/personal5.png'),
        },
        {
          title: this.$t('career.block5_title')[5],
          text: `<p style="margin-bottom:8px">${
            this.$t('career.block5_list')[7]
          }</p><p>${this.$t('career.block5_list')[8]}</p>`,
          img: require('@/assets/img/career/personal6.png'),
        },
      ],
    }
  },
  methods: {
    slicedDescription(text) {
      return text.length > 137 ? `${text.slice(0, 137)}...` : text
    },
    openModal(data) {
      this.$modal.add({
        title: 'Default',
        payload: {
          modal: 'Default',
          title: data.title,
          text: data.text,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.personal_career {
  width: 100%;
  background: #f2f6f7;
  padding: 80px 0;
  @include tablet() {
    padding: 40px 0;
  }
  h3 {
    margin-bottom: 36px;
    @include tablet() {
      margin-bottom: 40px;
    }
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: rem(24);
    line-height: 28px;
    color: #30454e;
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
  }
  &_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    @include tablet() {
      flex-direction: column-reverse;
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    p {
      max-width: 776px;
    }
    img {
      width: 270px;
      max-height: 400px;
      margin-left: 10px;
      @include tablet() {
        width: 162.44px;
        height: 148px;
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }
  }
  &_blocks {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 24px;
    @media only screen and (max-width: 1170px) {
      overflow-x: scroll;
      padding-bottom: 20px;
    }
    @include tablet() {
      grid-template-columns: repeat(3, 317px);
      grid-gap: 16px;
    }
  }
}
.person::v-deep {
  .slide__image {
    width: auto;
    display: block;
    @include phone {
      margin: 0 auto;
      display: flex;
      h3 {
        width: 100%;
        position: static;
        color: #015467;
      }
      img {
        height: 100%;
        max-height: 100%;
      }
    }
  }
  .slide__content {
    width: 100%;
  }
}
.reverse {
  flex-direction: column-reverse !important;
  @include tablet() {
    flex-direction: column !important;
    justify-content: flex-start !important;
  }
  .blocks_content__info {
    padding-bottom: 20px;
    button {
      margin-bottom: 0;
    }
  }
}
.hasPaddingBottom {
  .blocks_content__info {
    padding-bottom: 20px;
  }
}
.blocks_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  filter: drop-shadow(0px 6px 30px rgba(48, 69, 78, 0.1));
  border-radius: 4px;
  background-color: white;
  &__info {
    padding: 20px 30px 0;
    background: #ffffff;
    @include tablet() {
      padding: 20px 16px;
    }
    h3 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      color: #5e8698;
      margin-bottom: 20px;
      @include tablet() {
        font-size: 18px;
        line-height: 24px;
      }
    }
    button {
      margin: 15px 0;
      background-color: transparent;
      border: none;
      text-decoration: underline;
      color: #00b0f0;
      cursor: pointer;
    }
  }
  &-img {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    max-height: 350px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
