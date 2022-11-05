<template>
  <div class="contact__helpline">
    <div class="container">
      <div class="content__helpline-content content">
        <AtomsHeading type="h2">
          Телефон доверия ТШО
        </AtomsHeading>
        <p class="content__description">
          Если вам стало известно или у вас есть подозрения о том, что один из наших сотрудников, поставщиков или официальных
          представителей нарушают требования законодательства и политики компании, имеют воздействие на жизненно важные
          интересы компании, либо представляют угрозу безопасности сотрудников и подрядчиков, просим вас сообщить об этом
          через вебсайт www.TCOhotline.com или Телефоны доверия ТШО.
        </p>
        <p>ТШО не допустит никаких преследований за добросовестное сообщение.</p>
      </div>
    </div>
    <div class="contact__contacts contacts">
      <div class="container">
        <div class="contacts__list">
          <div class="contacts__list-item item">
            <span>На казахском языке:</span>
            <div class="item__phone">
              <span>7-7122-27-26-76</span>
              <span>8-7122-27-26-76</span>
            </div>
          </div>
          <div class="contacts__list-item item">
            <span>На русском языке:</span>
            <div class="item__phone">
              <span>8-7122-27-26-86</span>
            </div>
          </div>
          <div class="contacts__list-item item">
            <span>На английском языке:</span>
            <div class="item__phone">
              <span>8-7122-27-26-86</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  &__helpline {
    &-content {
    }
    .content {
      padding: 80px 0px 40px 0;
      @include phone() {
        padding-top: 40px;
        h2 {
          font-size: 20px;
        }
        p {
          font-size: 16px;
        }
      }
      p {
        display: block;
        margin-top: 30px;
      }
      &__description {
        display: inline-block;
        margin-top: 40px;
      }
    }
  }
  &__contacts {
    padding-top: 40px;
    background-color: #ECFAFE;
    @include phone() {
      padding-top: 0;
    }
    .contacts {
      &__list {
        padding: 40px 0px 80px 0;
        display: flex;
        justify-content: space-between;
        @include wide-tablet() {
          flex-wrap: wrap;
          gap: 40px;
          justify-content: center;
        }
        @include phone() {
          padding: 20px 0;
          flex-wrap: wrap;
          gap: 40px;
          &-item {
            flex-direction: column;
            font-size: 16px;
            @media screen and (max-width: $xs) {
              width: 210px;
              margin: 0 auto;
            }
          }
        }
        &-item {
          display: flex;
        }
      }
    }
  }
}
.item {
  span {
    margin-right: 10px;
    font-size: 20px;
    font-weight: 500;
    font-family: Roboto, sans-serif;
  }
  &__phone {
    display: flex;
    flex-direction: column;
    @include phone() {
      margin-top: 12px;
    }
    span {
      font-weight: 400;
      color: #0282A0;
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
}
</style>
