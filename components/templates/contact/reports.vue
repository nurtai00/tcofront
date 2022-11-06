<template>
  <div class="reports">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/company">Company</AtomsBreadOption>
        <AtomsBreadOption to="/contact">Contact Information</AtomsBreadOption>
        <AtomsBreadOption to="/contact/feedback">Обратная связь</AtomsBreadOption>
        <AtomsBreadOption to="/contact/feedback/reports">Отчеты</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20">Отчёты по процессу обратной связи ТШО</AtomsTitle>
      <div class="reports__docs">
        <div v-for="file of files" :key="file">
          <AtomsPdfFile :width="30" :height="40" text="Отчёт по процессу обратной связи ТШО за 2 квартал 2022 г (pdf)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: Array.from({ length: 24 }, (_, index) => Math.random() * index)
    }
  }
}
</script>
<style lang="scss" scoped>
.reports {
  margin-bottom: 80px;
  & .title {
    & .main {
      font-size: 38px !important;
    }
  }
  &__docs {
    margin-top: 40px;
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(4, 1fr);
    @include tablet() {
      grid-template-columns: repeat(3, 1fr);
    }
    @include phone() {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
