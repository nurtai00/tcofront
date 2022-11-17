<template>
  <div class="public container">
    <MoleculesBreadcrumbs class="mt40 mb20">
      <AtomsBreadOption to="/">Home</AtomsBreadOption>
      <AtomsBreadOption to="/news">TCO news</AtomsBreadOption>
      <AtomsBreadOption to="/news/publications">Publications</AtomsBreadOption>
    </MoleculesBreadcrumbs>
    <AtomsTitle class="mb40" small> Публикации </AtomsTitle>
    <div class="public_list">
      <div v-for="item in 9" :key="item">
        <img src="@/assets/icons/pdf.svg" alt="pdf" width="30" height="40" />
        <p>
          ТОО «Тенгизшевройл» передало в дар Атырауской области новые автобусы
          для пассажирских перевозок
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.public {
  padding-bottom: 80px;
  @include tablet() {
    padding-bottom: 40px;
  }
  &_list {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    @include tablet() {
      display: block;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include tablet() {
        margin-top: 20px;
        &:first-of-type {
          margin-top: 0;
        }
      }
      p {
        padding-left: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-decoration-line: underline;
        color: #30454e;
        @include tablet() {
          font-size: 16px;
          line-height: 18px;
        }
      }
    }
  }
}
.mb40 {
  @include tablet() {
    margin-bottom: 20px;
  }
}
</style>
