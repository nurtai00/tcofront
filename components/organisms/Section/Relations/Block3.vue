<template>
  <div class="creditors">
    <div class="container">
      <AtomsTitle class="mb40" small>
        {{ $t('relation.block5.title') }}
      </AtomsTitle>
      <div class="creditors_info">
        <div class="info_block">
          <span>{{ $t('relation.block5.items[0].title') }}</span>
          <div class="info_block__footer">
            <span>{{ $t('relation.block5.items[0].items[0]') }}</span>
            <span>{{ $t('relation.block5.items[0].items[1]') }}</span>
          </div>
        </div>
        <div class="info_block">
          <span>{{ $t('relation.block5.items[1].title') }}</span>
          <div class="info_block__footer">
            <span>{{ $t('relation.block5.items[1].items[0]') }}</span>
            <span>{{ $t('relation.block5.items[1].items[1]') }}</span>
          </div>
        </div>
        <div class="info_block">
          <span>{{ $t('relation.block5.items[2].title') }}</span>
          <div class="info_block__footer">
            <span>{{ $t('relation.block5.items[2].items[0]') }}</span>
            <span>{{ $t('relation.block5.items[2].items[1]') }}</span>
          </div>
        </div>
        <div class="info_block">
          <span>{{ $t('relation.block5.items[3].title') }}</span>
          <div class="info_block__footer">
            <span>{{ $t('relation.block5.items[3].items[0]') }}</span>
            <span>{{ $t('relation.block5.items[3].items[1]') }}</span>
          </div>
        </div>
        <div class="info_block">
          <span>{{ $t('relation.block5.items[4].title') }}</span>
          <div class="info_block__footer">
            <span><a href="https://www.spglobal.com/ratings/en/">{{
              $t('relation.block5.items[4].items[0]')
            }}</a></span>
            <span><a
              href="https://www.moodys.com/research/Moodys-assigns-PBaa2-rating-to-Tengizchevroil-Finance-Company-International-Ltds--PR_351572"
            >{{ $t('relation.block5.items[4].items[1]') }}</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.creditors {
  margin-top: 0px !important;
  left: 0px !important;
  width: 100%;
  padding: 80px 0;
  background: #f2f6f7;
  @include tablet() {
    padding: 40px 0;
    .mb40 {
      margin-bottom: 20px;
    }
  }
  &_info {
    display: flex;
    justify-content: space-between;
    @include tablet() {
      flex-direction: column;
    }
  }
}
.info_block {
  display: flex;
  flex-direction: column;
  @include tablet() {
    margin-bottom: 20px;
  }
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #30454e;
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
  }
  &__footer {
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
    margin-top: 20px;
    @include tablet() {
      margin-top: 12px;
    }
    span,
    a {
      font-weight: 300;
      color: #30454e;
    }
  }
}
</style>
