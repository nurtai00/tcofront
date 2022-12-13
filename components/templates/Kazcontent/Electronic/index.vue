<template>
  <div class="electronic">
    <div class="container">
      <MoleculesBreadcrumbs class="electronic__breadcrumbs">
        <AtomsBreadOption :to="localePath('/')">Главная</AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/kazakhstani-content')">
          {{ $t('kazContent.breadcrumbs.kazContent') }}
        </AtomsBreadOption>
        <AtomsBreadOption
          :to="localePath('/kazakhstani-content/electronic-catalog')"
        >
          {{ $t('kazContent.breadcrumbs.electricCatalog') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="electronic__title">
        {{ $t('kazContent.electricCatalog.title') }}
      </AtomsTitle>
    </div>
    <div class="gray">
      <div class="container">
        <div class="content">
          <p>
            {{ $t('kazContent.electricCatalog.description') }}
          </p>
          <AtomsFile
            file="@/assets/files/Квалификационная анкета по процессу CHESM для потенциальных бизнес-партнеров.xls"
            :text="$t('kazContent.electricCatalog.file')"
            icon="zip"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="content__title">
          {{ $t('kazContent.electricCatalog.invoiceTco') }}
        </div>
        <div class="content__video">
          <img src="~/assets/img/projects/projects4.png" alt="" />
        </div>
      </div>
    </div>
    <div class="gray">
      <div class="container">
        <div class="content">
          <div class="content__title">
            {{ $t('kazContent.electricCatalog.createUploadElectricCatalog') }}
          </div>
          <div class="content__video">
            <img src="~/assets/img/projects/projects4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.electronic {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__title {
    margin-bottom: 40px;
    &::v-deep .main {
      color: $c-tco1
    }
  }

  .gray {
    background-color: $c-tco33;
  }

  .content {
    padding: 40px 100px 80px;

    p {
      margin-bottom: 20px;
    }

    &__title {
      font-size: 38px;
      line-height: 46px;
      font-weight: 700;
      margin-bottom: 20px;
      color: $c-tco1;
    }

    &__video {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  @include phone {
    .content {
      padding: 40px 0;

      p {
        font-size: 14px;
        line-height: 18px;
      }

      &__title {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
}
</style>
