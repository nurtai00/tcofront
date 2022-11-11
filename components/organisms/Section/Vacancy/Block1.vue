<template>
  <div class="container">
    <div class="vacancy__list">
      <div class="vacancy__info">
        <AtomsHeading type="h3">Список доступных вакансий</AtomsHeading>
        <div class="vacancy__info-description">
          <p>
            На данной странице вы можете видеть список доступных вакансий. Если
            Ваш профессиональный опыт и квалификация соответствуют требованиям,
            нажмите «Подать заявку» для заполнения анкеты и отправки резюме. По
            вопросам технической поддержки Вы можете обращаться по адресу
            rectechsup@tengizchevroil.com
          </p>
          <p>
            <strong>ВНИМАНИЕ!</strong> Если к вашему профилю привязана почта
            @mail.ru, bk.ru, list.ru и другие аккаунты .ru, рекомендуем
            пересоздать профиль с другим почтовым сервисом .com (gmail; yahoo
            итд) во избежание возникновения технических проблем со входом в
            профиль.
          </p>
        </div>
      </div>
      <img src="@/assets/img/vacancy/block1.svg" alt="person" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.vacancy {
  &__info {
    margin-top: 80px;
    flex-basis: 65%;
    &-description {
      margin-top: 40px;
      p {
        color: $c-text;
        font-size: 20px;
        &:not(:first-child) {
          margin-top: 20px;
        }
        @include tablet() {
          font-size: 16px;
        }
      }
    }
  }
  &__list {
    display: flex;
    justify-content: space-between;
    @include tablet() {
      flex-direction: column-reverse;
      img {
        margin-top: 40px;
      }
    }
  }
}
</style>
