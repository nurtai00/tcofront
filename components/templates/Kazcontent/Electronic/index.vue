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
            file="https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=a9630768%2Da362%2D4cf9%2Da09c%2Dabab83a77b20"
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
          <iframe
            class="iframe"
            height="455"
            :src="uploadElectronicCatalogUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
            <iframe
              class="iframe"
              height="455"
              :src="createElectroniclCatalogUrl"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    uploadElectronicCatalogUrl() {
      const mapOfUrls = {
        kk: 'https://www.youtube.com/embed/z0gOh5RX4cU',
        ru: 'https://www.youtube.com/embed/zp7nFQrSsuk',
        en: 'https://www.youtube.com/embed/z78qe35juIk',
      }
      return mapOfUrls[this.$i18n.locale]
    },
    createElectroniclCatalogUrl() {
      const mapOfUrls = {
        kk: 'https://www.youtube.com/embed/1C6u-6F7ceM',
        ru: 'https://www.youtube.com/embed/Ter4At_Rw-Y',
        en: 'https://www.youtube.com/embed/LxI6ApQ8RDM',
      }
      return mapOfUrls[this.$i18n.locale]
    },
  },
}
</script>
<style lang="scss" scoped>
.electronic {
  min-height: calc(100vh - 785px);

  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__title {
    margin-bottom: 40px;
    &::v-deep .main {
      color: $c-tco1;
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
      display: flex;
      align-items: center;
      justify-content: center;
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
.iframe {
  width: 1160px;
  @include phone {
    width: 100%;
    height: 300px;
  }
}
</style>
