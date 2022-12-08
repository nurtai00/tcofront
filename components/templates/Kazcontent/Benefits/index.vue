<template>
  <div class="benefits">
    <div class="benefits__header">
      <div class="container">
        <MoleculesBreadcrumbs class="benefits__breadcrumbs">
          <AtomsBreadOption :to="localePath('/')">Главная</AtomsBreadOption>
          <AtomsBreadOption :to="localePath('/kazakhstani-content')">
            {{ $t('kazContent.breadcrumbs.kazContent') }}
          </AtomsBreadOption>
          <AtomsBreadOption :to="localePath('/kazakhstani-content/benefits')">
            {{ $t('kazContent.breadcrumbs.privileges') }}
          </AtomsBreadOption>
        </MoleculesBreadcrumbs>
        <AtomsTitle class="benefits__title">
          {{ $t('kazContent.benefits.title') }}
        </AtomsTitle>
      </div>
    </div>
    <div class="container">
      <div class="benefits__content">
        <div class="benefits__content_title">
          {{ $t('kazContent.benefits.subtitle') }}
        </div>
        <p v-for="item of $t('kazContent.benefits.descriptions')" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.benefits {
  &__header {
    background-color: $c-tco3;
    padding: 40px 0 68px;
  }

  &__breadcrumbs {
    margin: 42px 0 22px;

    &::v-deep {
      a.nuxt-link-exact-active {
        color: white;
      }
    }
  }

  &__title {
    padding: 0 50px;
    margin-bottom: 20px;

    &::v-deep {
      h1 {
        color: white;
      }
    }
  }

  &__content {
    padding: 80px 0;
    color: $c-tco1;

    &_title {
      font-size: 38px;
      line-height: 46px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 16px;
    }
  }
}
</style>
