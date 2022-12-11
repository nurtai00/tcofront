<template>
  <div class="motivation_career container">
    <AtomsHeading type="h3" color="main">
      {{ $t('career.block7_header') }}
    </AtomsHeading>
    <div class="motivation_career_header">
      <p>
        {{ $t('career.block7_description')[0] }}
        <br />
        {{ $t('career.block7_description')[1] }}
      </p>
      <img src="@/assets/img/career/motivation_img.png" alt="" />
    </div>
    <div class="motivation_career_cards">
      <MoleculesCardPopUpCard
        v-for="(motivation, idx) in motivations"
        :key="idx"
        :item="motivation"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      motivations: [
        {
          id: '01',
          title: this.$t('career.block7_motivations_title')[0],
          text: `<p>${this.$t('career.block7_motivations')[0]}</p>`,
          modal: 'Default',
        },
        {
          id: '02',
          title: this.$t('career.block7_motivations_title')[1],
          text: `<p>${this.$t('career.block7_motivations')[1]}</p>`,
          modal: 'Default',
        },
        {
          id: '03',
          title: this.$t('career.block7_motivations_title')[2],
          text: `<p>${this.$t('career.block7_motivations')[2]}</p>`,
          modal: 'Default',
        },
        {
          id: '04',
          title: this.$t('career.block7_motivations_title')[3],
          text: `<p>${this.$t('career.block7_motivations')[3]}</p>`,
          modal: 'Default',
        },
        {
          id: '05',
          title: this.$t('career.block7_motivations_title')[4],
          text: `<p>${this.$t('career.block7_motivations')[4]}</p>`,
          modal: 'Default',
        },
        {
          id: '06',
          title: this.$t('career.block7_motivations_title')[5],
          text: `<p>${this.$t('career.block7_motivations')[5]}</p>`,
          modal: 'Default',
        },
        {
          id: '07',
          title: this.$t('career.block7_motivations_title')[6],
          text: `<p>${this.$t('career.block7_motivations')[6]}</p>`,
          modal: 'Default',
        },
        {
          id: '08',
          title: this.$t('career.block7_motivations_title')[7],
          text: `<p>${this.$t('career.block7_motivations')[7]}</p>`,
          modal: 'Default',
        },
        {
          id: '09',
          title: this.$t('career.block7_motivations_title')[8],
          text: `<p>${this.$t('career.block7_motivations')[8]}</p>`,
          modal: 'Default',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.motivation_career {
  width: 100%;
  padding: 80px 0;
  @include tablet() {
    padding: 40px 0;
  }
  @include phone() {
    padding: 40px 16px;
  }
  h3 {
    margin-bottom: 40px;
    @include tablet() {
      margin-bottom: 20px;
    }
  }
  &_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    @include tablet() {
      flex-direction: column-reverse;
      margin-bottom: 20px;
    }
    p {
      width: 100%;
      max-width: 776px;
      @include tablet() {
        font-size: 16px;
        line-height: 20px;
      }
    }
    img {
      width: 383px;
      height: 232px;
      margin-top: -93px;
      @include tablet() {
        width: 234.42px;
        height: 142px;
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }
  }
  &_cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
    grid-gap: 24px;
    @include tablet() {
      grid-template-columns: repeat(auto-fit, minmax(167px, 1fr));
      grid-gap: 8px 9px;
    }
  }
}
</style>
