<template>
  <div class="feedback">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">{{ $t('contact.main') }}</AtomsBreadOption>
        <AtomsBreadOption to="/contact">{{
          $t('contact.contact')
        }}</AtomsBreadOption>
        <AtomsBreadOption to="/contact/feedback">
          {{ $t('contact.feedback.feedback') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20">{{
        $t('contact.feedback.feedback_text')
      }}</AtomsTitle>
      <div class="feedback__content">
        <p>
          {{ $t('contact.feedback.text1') }}
        </p>
        <p>
          {{ $t('contact.feedback.text2') }}
        </p>
        <p>
          {{ $t('contact.feedback.text3') }}
        </p>
        <p>
          {{ $t('contact.feedback.text4') }}
        </p>
        <p>
          {{ $t('contact.feedback.text5') }}
        </p>
        <p>
          {{ $t('contact.feedback.text6') }}
        </p>
        <ul>
          <li>
            {{ $t('contact.feedback.text7') }}
          </li>
          <li>{{ $t('contact.feedback.text8') }}</li>
          <li>{{ $t('contact.feedback.text9') }}</li>
          <li>{{ $t('contact.feedback.text10') }}</li>
          <li>
            {{ $t('contact.feedback.text11') }}
          </li>
          <li>{{ $t('contact.feedback.text12') }}</li>
          <li>{{ $t('contact.feedback.text13') }}</li>
        </ul>
      </div>
    </div>
    <div class="feedback__callback">
      <div class="container">
        <p>
          {{ $t('contact.feedback.text14') }}
          <a href="mailto:tcofp@tengizchevroil.com">tcofp@tengizchevroil.com</a>
          {{ $t('contact.feedback.text15') }}
          <a href="tel:8-800-080-84-88">8-800-080-84-88</a>
        </p>
      </div>
    </div>
    <div class="container">
      <AtomsHeading class="document-title" type="h3">
        {{ $t('contact.feedback.text16') }}
      </AtomsHeading>
      <div class="links">
        <a href="#">{{ $t('contact.feedback.text17') }}</a>
        <nuxt-link :to="localePath('/contact/feedback/reports')">
          {{ $t('contact.feedback.text18') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.document-title {
  @include phone() {
    font-size: 24px;
    line-height: 28px;
  }
}
.links {
  margin-top: 40px;
  width: 600px;
  display: flex;
  gap: 24px;
  padding-bottom: 80px;
  @include phone() {
    width: 100%;
    font-size: 16px;
    flex-direction: column;
    align-items: center;
  }
  a {
    width: 280px;
    color: #00b0f0;
    text-decoration: underline;
  }
}
.feedback {
  &__content {
    ul {
      margin-top: 15px;
      margin-left: 40px;
      li {
        margin-top: 5px;
        list-style: disc;
        color: black;
        font-weight: 500;
      }
    }
    p {
      font-family: Roboto, sans-serif;
      font-size: 20px;
      color: $c-text !important;
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
  &__callback {
    margin: 35px 0px 40px 0;
    padding: 40px 0;
    background-color: #ecfafe;
    p {
      font-size: 20px;
      line-height: 28px;
      a {
        color: #00b0f0;
      }
    }
  }
}
</style>
