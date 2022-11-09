<template>
  <div class="contact__act">
    <div class="container">
      <div class="contact__act content">
        <div class="content__left">
          <AtomsHeading
            class="content__left-title"
            type="h2"
          >
            Примеры нарушений,о которых следует сообщать:
          </AtomsHeading>
          <p class="content__left-subtitle">
            Все другие вопросы, вызывающие озабоченность, предложения и
            наблюдения можно отправлять через систему
            <nuxt-link to="/contact/feedback">
              управления обратной связью
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
                Нарушения
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
                      Поведение, не соответствующее принципам документа «Путь
                      ТШО», случаи кражи и мошенничества
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
                    <span>Домогательство/дискриминация</span>
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
                    <span>Наличие наркотических средств, алкогольных напитков или
                      оружий на территории объектов компании</span>
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
                    <span>Неправомочное раскрытие конфиденциальной информации
                      компании</span>
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
                    <span>Манипуляция с бухгалтерскими операциями и процессами
                      внутреннего контроля, в результате чего возникает неверная
                      финансовая информация</span>
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
                    <span>Случаи кражи</span>
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
                Мошенничества
              </AtomsHeading>
            </template>
            <template #content>
              <div class="content__right-inner">
                <span class="content_right subtitle">Согласно определениям, указанным в Политике ТШО 53:</span>
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
                    <span>Злоупотребление занимаемой должностью</span>
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
                    <span> Сокрытие</span>
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
                    <span>Предоставление неверных данных</span>
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
                    <span>Случаи мошенничества могут касаться следующих сфер, но не
                      ограничиваются ими:</span>
                  </li>
                  <li class="list__item sublist">
                    <ol type="1">
                      <li>
                        1. Закуп и составление контрактов, прием сотрудников на
                        работу, организация поездок, проживания и питания,
                        манипуляция ценами реализации, финансовые махинации
                      </li>
                      <li>
                        2. Неразглашение информации о конфликте интересов, в том
                        числе внешних деловых интересов компании
                      </li>
                      <li>
                        3. Манипуляция с процессами и системой контроля ТШО
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
                Законы
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
                    <div>Закон «О соблюдении антибойкотных норм»</div>
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
                    <span>Законы о борьбе с коррупцией</span>
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
                    <span>Законы о защите конкуренции</span>
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
                    <span>Законы о неприкосновенности данных</span>
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
                    <span>Природоохранное законодательство</span>
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
                    <span>Законоположение об охране труда</span>
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
                    <span>Законодательство об импорте/экспорте/торговли</span>
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
                    <span>Законоположение о непозволительных действиях лоббирования
                      или взносах на политические цели</span>
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
                    <span>Другие подозрительные действия криминального
                      характера</span>
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
