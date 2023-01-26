<template>
  <div class="personal_career">
    <div class="container">
      <div class="personal_career_header">
        <div>
          <AtomsHeading type="h3" color="main">
            {{ $t('career.block5_header') }}
          </AtomsHeading>
          <p>
            {{ $t('career.block5_description') }}
          </p>
        </div>
        <img src="@/assets/img/career/personal_img.png" alt="" />
      </div>
      <div class="personal_career_blocks">
        <div
          v-for="(personal, idx) in personal_list"
          :key="idx"
          class="blocks_content"
          :class="{ reverse: idx % 2 === 1 }"
        >
          <div class="blocks_content__info">
            <h3>{{ personal.title }}</h3>
            <div v-html="personal.text"></div>
          </div>
          <img :src="personal.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    font-size: 20px;
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
    gap: 150px;
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
    grid-template-columns: repeat(3, 376px);
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
.reverse {
  flex-direction: column-reverse !important;
  justify-content: flex-end !important;
  @include tablet() {
    flex-direction: column !important;
    justify-content: flex-start !important;
  }
}
.blocks_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  filter: drop-shadow(0px 6px 30px rgba(48, 69, 78, 0.1));
  border-radius: 4px;
  &__info {
    padding: 20px 30px;
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
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
