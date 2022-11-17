<template>
  <div class="electronic">
    <div class="container">
      <MoleculesBreadcrumbs class="electronic__breadcrumbs">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/kazakhstani-content">
          Kazakhstani Content
        </AtomsBreadOption>
        <AtomsBreadOption to="/kazakhstani-content/electronic-catalog">
          Electronic catalog
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="electronic__title">
        Cоздание электронного каталога и загрузка счета-фактуры
      </AtomsTitle>
    </div>
    <div class="gray">
      <div class="container">
        <div class="content">
          <p>
            На данной странице представлен материал, предназначенный для
            обучения и разьяснения процедуры оплаты в ТШО для существующих
            поставщиков компании. Пошаговая инструкция и видео материал подробно
            описывают процесс оплаты и регистарции в системе ТШО.
          </p>
          <AtomsFile
            file="@/assets/files/Квалификационная анкета по процессу CHESM для потенциальных бизнес-партнеров.xls"
            text="Руководство для пользователей"
            icon="zip"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="content__title">
          Загрузка счета-фактуры для Тенгизшевройл
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
            Создание и загрузка электронного каталога
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
    }

    &__video {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
