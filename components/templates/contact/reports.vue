<template>
  <div class="reports">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">{{ $t('contact.main') }}</AtomsBreadOption>
        <AtomsBreadOption to="/contact">{{
          $t('contact.contact')
        }}</AtomsBreadOption>
        <AtomsBreadOption to="/contact/feedback">
          {{ $t('contact.reports.feedback') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/contact/feedback/reports">
          {{ $t('contact.reports.reports') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20" small>
        {{ $t('contact.reports.title') }}
      </AtomsTitle>
      <div class="reports__docs">
        <div v-for="file of files" :key="file">
          <AtomsPdfFile
            :width="30"
            :height="40"
            :text="$t('contact.reports.pdf')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: Array.from({ length: 24 }, (_, index) => Math.random() * index),
    }
  },
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
