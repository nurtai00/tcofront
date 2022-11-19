<template>
  <div class="creditors">
    <div class="container">
      <AtomsTitle class="mb40" small> Кредиторам </AtomsTitle>
      <div class="creditors_info">
        <div class="info_block">
          <span>Рейтинговое агенства</span>
          <div class="info_block__footer">
            <span>Standard & Poors`s</span>
            <span>Moody`s</span>
          </div>
        </div>
        <div class="info_block">
          <span>Последняя редакция</span>
          <div class="info_block__footer">
            <span>21/12/2021</span>
            <span>30/06/2021</span>
          </div>
        </div>
        <div class="info_block">
          <span>Мировой рейтинг</span>
          <div class="info_block__footer">
            <span>BBB-</span>
            <span>Baa2</span>
          </div>
        </div>
        <div class="info_block">
          <span>Перспектива</span>
          <div class="info_block__footer">
            <span>Положительный</span>
            <span>Устойчивый</span>
          </div>
        </div>
        <div class="info_block">
          <span>Веб-страница</span>
          <div class="info_block__footer">
            <span>S & P</span>
            <span>Moody`s</span>
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
    span {
      font-weight: 300;
    }
  }
}
</style>
