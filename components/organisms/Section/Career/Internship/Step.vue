<template>
  <div class="step">
    <div class="container">
      <AtomsHeading type="h3" color="main">
        {{ $t('career.step_header') }}
      </AtomsHeading>
      <img
        src="@/assets/img/career/stepper_img.png"
        alt=""
        class="mobile_img"
      />
      <div class="stepper">
        <div
          :class="{ active_step: active_step == 1 }"
          @click="active_step = 1"
        >
          {{ $t('career.intern.step') }} 1
        </div>
        <img src="@/assets/img/career/arrow_step.png" alt="" />
        <div
          :class="{ active_step: active_step == 2 }"
          @click="active_step = 2"
        >
          {{ $t('career.intern.step') }} 2
        </div>
        <img src="@/assets/img/career/arrow_step.png" alt="" />
        <div
          :class="{ active_step: active_step == 3 }"
          @click="active_step = 3"
        >
          {{ $t('career.intern.step') }} 3
        </div>
      </div>
      <div class="content">
        <div class="content_step_text" v-html="text[active_step]"></div>
        <img src="@/assets/img/career/stepper_img.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_step: 1,
      text: {
        1: `<p style="margin-bottom: 8px">${
          this.$t('career.step_text')[0]
        }</p>`,
        2: `<p style="margin-bottom: 8px">${
          this.$t('career.step_text')[1]
        }</p>`,
        3: `<p style="margin-bottom: 8px">${
          this.$t('career.step_text')[2]
        }</p>`,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.step {
  width: 100%;
  background: #f2f6f7;
  padding: 40px 0 80px;
  @include tablet() {
    padding: 40px 0;
  }
  h3 {
    margin-bottom: 40px;
    @include tablet() {
      margin-bottom: 20px;
    }
  }
}
.mobile_img {
  display: none;
  @include tablet() {
    display: block;
    width: 175.03px;
    height: 142px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
.active_step {
  background: #015467 !important;
  color: #ffffff !important;
}
.stepper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  @include tablet() {
    justify-content: space-between;
    margin-bottom: 20px;
  }
  div {
    padding: 16px 20px;
    border: 1px solid #015467;
    border-radius: 4px;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #015467;

    cursor: pointer;
    transition: 0.3s;
    @media only screen and (max-width: 375px) {
      padding: 10px 5px;
    }
  }
  img {
    width: 24px;
    margin: 0 8px;
  }
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    width: 320px;
    height: 259.61px;
    @include tablet() {
      display: none;
    }
  }
}
</style>
