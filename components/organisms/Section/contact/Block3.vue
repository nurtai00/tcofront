<template>
  <div class="contact__act">
    <div class="container">
      <div class="contact__act content">
        <div class="content__left">
          <AtomsHeading class="content__left-title" type="h2">
            {{ $t('contact.block3.title') }}
          </AtomsHeading>
          <p class="content__left-subtitle">
            {{ $t('contact.block3.desc') }}
            <nuxt-link :to="localePath('/contact/feedback')">
              {{ $t('contact.block3.desc_link') }}
            </nuxt-link>
          </p>
        </div>
        <div class="content__right">
          <AtomsAccordion
            :is-open="accordions.first"
            @click="accordions.first = !accordions.first"
          >
            <template #title>
              <AtomsHeading
                class="content__right-title"
                type="h4"
                color="black"
              >
                {{ $t('contact.block3.accordion1.title') }}
              </AtomsHeading>
            </template>
            <template #content>
              <div class="content__right-inner">
                <ul class="list">
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <div>
                      {{ $t('contact.block3.accordion1.text1') }}
                    </div>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion1.text2') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion1.text3') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion1.text4') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion1.text5') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion1.text6') }}</span>
                  </li>
                </ul>
              </div>
            </template>
          </AtomsAccordion>
          <AtomsAccordion
            :is-open="accordions.second"
            @click="accordions.second = !accordions.second"
          >
            <template #title>
              <AtomsHeading
                class="content__right-title"
                type="h4"
                color="black"
              >
                {{ $t('contact.block3.accordion2.title') }}
              </AtomsHeading>
            </template>
            <template #content>
              <div class="content__right-inner">
                <span class="content_right subtitle">{{
                  $t('contact.block3.accordion2.text1')
                }}</span>
                <ul class="list">
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion2.text2') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion2.text3') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion2.text4') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion2.text5') }}</span>
                  </li>
                  <li class="list__item sublist">
                    <ol type="1">
                      <li>
                        {{ $t('contact.block3.accordion2.text6') }}
                      </li>
                      <li>
                        {{ $t('contact.block3.accordion2.text7') }}
                      </li>
                      <li>
                        {{ $t('contact.block3.accordion2.text8') }}
                      </li>
                    </ol>
                  </li>
                </ul>
              </div>
            </template>
          </AtomsAccordion>
          <AtomsAccordion
            :is-open="accordions.third"
            @click="accordions.third = !accordions.third"
          >
            <template #title>
              <AtomsHeading
                class="content__right-title"
                type="h4"
                color="black"
              >
                {{ $t('contact.block3.accordion3.title') }}
              </AtomsHeading>
            </template>
            <template #content>
              <div class="content__right-inner">
                <ul class="list">
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <div>{{ $t('contact.block3.accordion3.text1') }}</div>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion3.text2') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion3.text3') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion3.text4') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion3.text5') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion3.text6') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion3.text7') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion3.text8') }}</span>
                  </li>
                  <li class="list__item">
                    <div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6" r="6" fill="#00B0F0" />
                      </svg>
                    </div>
                    <span>{{ $t('contact.block3.accordion3.text9') }}</span>
                  </li>
                </ul>
              </div>
            </template>
          </AtomsAccordion>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      accordions: {
        first: false,
        second: false,
        third: false,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.contact__act {
  padding: 80px 0;
  @include phone() {
    padding: 40px 0;
  }
  .content {
    display: flex;
    @include tablet() {
      flex-direction: column;
    }
    @include wide-tablet() {
      padding: 0 16px;
    }
    gap: 50px;
    &__left {
      flex-basis: 50%;
      &-title {
      }
      &-subtitle {
        display: inline-block;
        margin-top: 40px;
        font-size: 20px;
        font-family: Roboto, sans-serif;
        color: $c-text;
        a {
          text-decoration: underline;
          color: $c-base;
        }
      }
      @include phone() {
        &-title {
          font-size: 20px;
          line-height: 26px;
        }
        &-subtitle {
          margin-top: 20px;
          font-size: 16px;
        }
      }
    }
    &__right {
      flex-basis: 50%;
      @include phone() {
        &-title {
          font-size: 14px;
        }
      }
      &-inner {
        padding: 24px;
        & .subtitle {
          display: inline-block;
          margin-bottom: 24px;
          font-size: 16px;
          color: $c-text;
        }
        & .list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          &__item {
            display: flex;
            gap: 20px;
            &.sublist {
              padding: 0px 20px;
              ol {
                li {
                  &:not(:first-child) {
                    margin-top: 10px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
