<template>
  <div class="conditions container">
    <AtomsHeading type="h3" color="main">
      {{ $t('career.conditions_header') }}
    </AtomsHeading>
    <AtomsTag
      class="tag"
      :tag="{
        text: $t('career.conditions_tag'),
        selected: true,
      }"
      @click="showMod"
    />
    <div class="conditions_cards">
      <MoleculesCardPopUpCard
        v-for="(condition, idx) in conditions"
        :key="idx"
        :item="condition"
      />
    </div>
    <div class="conditions_small_info">
      <p>
        {{ $t('career.conditions_info')[0] }}
      </p>
      <p>
        {{ $t('career.conditions_info')[1] }}
        <span>tcointern@tengizchevroil.com</span>
      </p>
      <ul>
        <li>{{ $t('career.conditions_info')[2] }}</li>
        <li>{{ $t('career.conditions_info')[3] }}</li>
      </ul>
      <a
        class="link"
        target="_blank"
        href="https://norsecdeltaprojects-my.sharepoint.com/:w:/g/personal/n_nudiyev_norsec_kz/ETF4ZF_UwChGp-4QATQYf1IBLidPgR3I2dk6aaWwTIZ__Q?e=xvV3xo"
        >{{ $t('career.intern.link') }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conditions: [
        {
          id: '01',
          title: this.$t('career.conditions_title')[1],
          text: `<ol><li>${this.$t('career.conditions_list')[1][0]}</li><li>${
            this.$t('career.conditions_list')[1][1]
          }</li><li>${this.$t('career.conditions_list')[1][2]}</li><li>${
            this.$t('career.conditions_list')[1][3]
          }</li><li>${this.$t('career.conditions_list')[1][4]}</li></ol>`,
          modal: 'Default',
        },
        {
          id: '02',
          title: this.$t('career.conditions_title')[2],
          text: `<ol><li>${this.$t('career.conditions_list')[2][0]}</li> <li>${
            this.$t('career.conditions_list')[2][1]
          }</li> <li>${this.$t('career.conditions_list')[2][2]}</li></ol>`,
          modal: 'Default',
        },
      ],
    }
  },
  methods: {
    showMod() {
      this.$modal.add({ title: 'ConditionQuiz' })
    },
  },
}
</script>

<style lang="scss" scoped>
.conditions {
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
}
.tag::v-deep {
  padding: 16px 20px !important;
  margin: 0;
  margin-bottom: 38px !important;
  @include tablet() {
    padding: 6px 10px !important;
    margin-bottom: 20px !important;
  }
}
.conditions_cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
  grid-gap: 24px;
  @include tablet() {
    grid-template-columns: repeat(auto-fit, minmax(167px, 1fr));
    grid-gap: 8px 9px;
  }
}
.conditions_small_info {
  width: 100%;
  background: #f2f6f7;
  padding: 40px;
  margin-top: 40px;
  @include tablet() {
    padding: 20px;
    margin-top: 20px;
  }
  p {
    color: #30454e;
    margin-bottom: 8px;
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
    span {
      font-weight: 600;
      color: #00b0f0;
      @include tablet() {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  ul {
    padding-left: 30px;
    @include tablet() {
      padding-left: 20px;
    }
    li {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #30454e;
      list-style-type: disc;
      @include tablet() {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .link {
    margin-top: 15px;
    display: inline-block;
    color: #30454e;
    text-decoration: underline;
  }
}
</style>
