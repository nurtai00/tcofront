<template>
  <div class="contact__helpline">
    <div class="container">
      <div class="content__helpline-content content">
        <AtomsHeading type="h2">
          {{ $t('contact.block2.title') }}
        </AtomsHeading>
        <p class="content__description">
          {{ $t('contact.block2.desc') }}
        </p>
        <p>
          {{ $t('contact.block2.desc2') }}
        </p>
      </div>
    </div>
    <div class="contact__contacts contacts">
      <div class="container">
        <div class="contacts__list">
          <div class="contacts__list-item item">
            <span>{{ $t('contact.block2.item1') }}</span>
            <div class="item__phone">
              <span>7-7122-27-26-76</span>
              <span>8-7122-27-26-76</span>
            </div>
          </div>
          <div class="contacts__list-item item">
            <span>{{ $t('contact.block2.item2') }}</span>
            <div class="item__phone">
              <span>8-7122-27-26-86</span>
            </div>
          </div>
          <div class="contacts__list-item item">
            <span>{{ $t('contact.block2.item3') }}</span>
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
      padding: 80px 0 40px 0;
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
    background-color: #ecfafe;
    @include phone() {
      padding-top: 0;
    }
    .contacts {
      &__list {
        padding: 40px 0 80px 0;
        display: flex;
        justify-content: space-between;
        gap: 40px;
        @include wide-tablet() {
          flex-wrap: wrap;
          justify-content: center;
        }
        @include phone() {
          padding: 20px 0;
          flex-wrap: wrap;
          &-item {
            flex-direction: column;
            font-size: 16px;
            width: 210px;
            align-items: center;
            @media screen and (max-width: $xs) {
              margin: 0 auto;
            }
          }
        }
        &-item {
          font-family: Roboto, sans-serif;
          display: flex;
          gap: 10px;
          @include tablet() {
            width: 400px;
          }
        }
      }
    }
  }
}
.item {
  span {
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
      color: #0282a0;
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
}
</style>
