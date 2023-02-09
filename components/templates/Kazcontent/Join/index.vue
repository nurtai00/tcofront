<template>
  <div class="join">
    <div class="container">
      <MoleculesBreadcrumbs class="join__breadcrumbs">
        <AtomsBreadOption :to="localePath('/')">
          {{ $t('kazContent.breadcrumbs.main') }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/kazakhstani-content')">
          {{ $t('kazContent.breadcrumbs.kazContent') }}
        </AtomsBreadOption>
        <AtomsBreadOption
          :to="localePath('/kazakhstani-content/join-tco-program')"
        >
          {{ $t('kazContent.breadcrumbs.devProgram') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="join__title">
        {{ $t('kazContent.breadcrumbs.devProgram') }}
      </AtomsTitle>
    </div>
    <div class="gray">
      <div class="container">
        <OrganismsSectionOperationSvg class="join__svg" :data="sideSvg[0]">
          <template #description="{ description }">
            <p>{{ description }}</p>
          </template>
        </OrganismsSectionOperationSvg>
      </div>
    </div>
    <div class="container">
      <div class="join__content">
        <div class="join__subtitle">
          {{ $t('kazContent.targetListDev.title') }}
        </div>
        <div class="join__grid gray__grid">
          <OrganismsSectionKazakhstaniCard1
            v-for="(card, key) in cards"
            :key="key"
            :card="card"
          />
        </div>
      </div>
    </div>
    <OrganismsSectionOperationSlide :data="slide[0]" class="slide gray">
      <template #description="{ description }">
        <p>{{ description }}</p>
      </template>
    </OrganismsSectionOperationSlide>
    <div class="container">
      <div class="join__content">
        <div class="join__subtitle">{{ $t('kazContent.results.title') }}</div>
        <div class="join__grid">
          <div
            v-for="(item, key) in cardsIcon"
            :key="key"
            class="join__grid_icon"
          >
            <img :src="require(`@/assets/icons/${item.icon}.png`)" alt="icon" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <OrganismsSectionOperationSlide :data="slide[1]" class="slide gray">
      <template #description>
        <div class="slide__contentt">
          <ul class="bold">
            <li
              v-for="item of $t('kazContent.nationalCarProgram.list')"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
          <p>
            {{ $t('kazContent.nationalCarProgram.link') }}
            <a href="https://www.imbc.kz/">https://www.imbc.kz/</a>
          </p>
        </div>
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSlide
      side
      :data="slide[2]"
      class="slide gray dropdown"
    >
      <template #description>
        <div class="slide__dropdown">
          <div
            v-for="(dropdown, key) in $t('kazContent.accordions')"
            :key="key"
            class="slide__dropdown_item"
            :class="{ active: dropdownActive === key }"
          >
            <div class="slide__dropdown_header">
              {{ dropdown.title }}
              <div
                @click="
                  () => {
                    dropdownActive = dropdownActive === key ? null : key
                  }
                "
              >
                <img src="@/assets/icons/arrowDown.png" alt="icon" />
              </div>
            </div>
            <div class="slide__dropdown_text">
              {{ dropdown.text }}
            </div>
          </div>
        </div>
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSlide :data="slide[3]" class="slide">
      <template #description>
        <div class="slide__contentt">
          <ul>
            <li v-for="item of $t('kazContent.motivations.list')" :key="item">
              {{ item }}
            </li>
          </ul>
          <p class="bold">
            {{ $t('kazContent.motivations.instructions') }}
          </p>
        </div>
      </template>
    </OrganismsSectionOperationSlide>
    <div class="gray">
      <div class="container">
        <OrganismsSectionOperationSvg
          class="join__svg pt-80"
          :data="sideSvg[1]"
        >
          <template #description>
            <div class="card-svg">
              <p class="title">
                {{ $t('kazContent.offerEnterprise.subtitle') }}
              </p>
              <p>
                {{ $t('kazContent.offerEnterprise.description') }}
              </p>
              <p class="title">
                {{ $t('kazContent.offerEnterprise.helpFinance') }}
              </p>
              <p>
                {{ $t('kazContent.offerEnterprise.footerText') }}
              </p>
            </div>
          </template>
        </OrganismsSectionOperationSvg>
      </div>
    </div>
    <div class="container">
      <div class="join__content">
        <div class="join__subtitle">{{ $t('kazContent.joinRules.title') }}</div>
        <div class="join__grid">
          <div
            v-for="(item, key) in $t('kazContent.joinRules.cardIcons')"
            :key="key"
            class="join__grid_icon"
          >
            <img :src="require(`@/assets/icons/${item.icon}.png`)" />
            <p>{{ item.title }}</p>
            <p class="desc">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="contacts">
        <div class="contacts__title">{{ $t('kazContent.address.title') }}</div>
        <div class="contacts__group">
          <div class="contacts__city">
            <p v-for="item of $t('kazContent.address.almaty')" :key="item">
              {{ item }}
            </p>
          </div>
          <div class="contacts__city">
            <p v-for="item of $t('kazContent.address.nursultan')" :key="item">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideSvg: [
        {
          title: this.$t('kazContent.devManufacture.title'),
          description: this.$t('kazContent.devManufacture.description'),
          icon: require('@/assets/icons/production.png'),
        },
        {
          title: this.$t('kazContent.offerEnterprise.title'),
          icon: require('@/assets/icons/sheep.png'),
        },
      ],
      slide: [
        {
          title: this.$t('kazContent.supportOriginBusiness.title'),
          description: this.$t('kazContent.supportOriginBusiness.description'),
          desciptionSolo: true,
          image: 'operation/program/img-1.png',
        },
        {
          title: this.$t('kazContent.nationalCarProgram.title'),
          image: 'operation/program/img-2.png',
        },
        {
          title: '',
          image: 'operation/operations2.png',
        },
        {
          title: this.$t('kazContent.motivations.title'),
          image: 'operation/program/img-4.png',
        },
      ],
      cards: [
        {
          icon: require('@/assets/icons/tool.png'),
          number: '01',
          title: this.$t('kazContent.targetListDev.cards')[0].title,
          html: `<ul>
<li>${this.$t('kazContent.targetListDev.cards')[0].list[0]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[0].list[1]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[0].list[2]}</li>
</ul>`,
        },
        {
          icon: require('@/assets/icons/mask.png'),
          number: '02',
          title: this.$t('kazContent.targetListDev.cards')[1].title,
          html: `<ul>
<li>${this.$t('kazContent.targetListDev.cards')[1].list[0]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[1].list[1]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[1].list[2]}</li>
</ul>`,
        },
        {
          icon: require('@/assets/icons/spinner.png'),
          number: '03',
          title: this.$t('kazContent.targetListDev.cards')[2].title,
          html: `<ul>
<li>${this.$t('kazContent.targetListDev.cards')[2].list[0]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[2].list[1]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[2].list[2]}</li>
</ul>`,
        },
        {
          icon: require('@/assets/icons/hardwork.png'),
          number: '04',
          title: this.$t('kazContent.targetListDev.cards')[3].title,
          html: `<ul>
<li>${this.$t('kazContent.targetListDev.cards')[3].list[0]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[3].list[1]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[3].list[2]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[3].list[3]}</li>
</ul>`,
        },
        {
          icon: require('@/assets/icons/closure.png'),
          number: '05',
          title: this.$t('kazContent.targetListDev.cards')[4].title,
          html: `<ul>
<li>${this.$t('kazContent.targetListDev.cards')[4].list[0]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[4].list[1]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[4].list[2]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[4].list[3]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[4].list[4]}</li>
<li>${this.$t('kazContent.targetListDev.cards')[4].list[5]}</li>
</ul>`,
        },
      ],
      cardsIcon: [
        {
          icon: 'planning',
          text: this.$t('kazContent.results.cards')[0],
        },
        {
          icon: 'worldwide',
          text: this.$t('kazContent.results.cards')[1],
        },
        {
          icon: 'coins',
          text: this.$t('kazContent.results.cards')[2],
        },
        {
          icon: 'working',
          text: this.$t('kazContent.results.cards')[3],
        },
        {
          icon: 'employee',
          text: this.$t('kazContent.results.cards')[4],
        },
      ],
      cardsIcon2: [
        {
          icon: 'valuation',
          title: 'Размер',
          text: 'Предприятие, относящееся к субъектам малого и среднего предпринимательства. Количество сотрудников до 500',
        },
        {
          icon: 'percantage',
          title: 'Форма собственности',
          text: 'Частное предприятие с контрольным пакетом у граждан Республики Казахстан (не более 49% иностранного участия в капитале).',
        },
        {
          icon: 'oil',
          title: 'Сфера деятельности',
          text: 'Компании, чья деятельность соприкасается с нефтегазовой индустрией.',
        },
        {
          icon: 'basket',
          title: 'Опыт',
          text: 'Минимум 2 года успешной работы',
        },
        {
          icon: 'euro',
          title: 'Оборот',
          text: 'Годовой оборот до 50 млн евро.',
        },
        {
          icon: 'documents',
          title: 'Документы',
          text: 'Заполненная заявка, копия учредительных документов и финансовая отчетность за 2 года.',
        },
      ],
      dropdowns: [
        {
          title: 'Возможности',
          text: 'Определение сфер для поиска местных товаров и услуг, необходимых в повседневной деятельности ТШО',
        },
        {
          title: 'Квалификационная оценка',
          text: 'Оценка местного рынка для определения потенциальных поставщиков и работа с ними для соответствия требованиям ТШО',
        },
        {
          title: 'Пробные заказы',
          text: 'Размещение пробных заказов для ТШО',
        },
        {
          title: 'Завершающий этап',
          text: 'Обратная связь и этап заключения договора',
        },
      ],
      dropdownActive: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.join {
  &__breadcrumbs {
    margin: 42px 0 22px;
  }

  &__title {
    margin-bottom: 40px;
  }

  .gray {
    background-color: $c-tco33;

    &__grid {
      & > div {
        background-color: $c-tco33;
      }
    }
  }

  &__content {
    padding: 80px 0;
  }

  .card-svg {
    color: $c-tco1;

    p {
      margin-bottom: 40px;

      &.title {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 20px;
        color: $c-tco3;
      }
    }
  }

  .pt-80 {
    padding-top: 80px;
  }

  &__subtitle {
    font-size: 38px;
    line-height: 46px;
    font-weight: 700;
    margin-bottom: 40px;
    color: $c-tco3;
  }

  &__svg::v-deep {
    padding-bottom: 80px;

    .block__icon {
      max-height: 420px;
      img {
        height: 100%;
      }
    }
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;

    &_icon {
      padding: 40px 30px;
      border-radius: 4px;
      box-shadow: 0 6px 30px 0 #30454e1a;
      color: $c-tco1;

      img {
        display: block;
        width: 80px;
        margin-bottom: 20px;
        color: #00b0f0;
      }

      p {
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 20px;

        &.desc {
          font-size: 18px;
          font-weight: 400;
        }
      }
    }

    & > div {
      width: calc((100% - 48px) / 3);
      margin-bottom: 24px;

      &:not(:nth-child(3n)) {
        margin-right: 24px;
      }
    }
  }

  .slide::v-deep {
    &.gray {
      background: $c-tco33;
    }

    h3 {
      color: #015467;
    }

    .slide {
      &__title {
        margin-bottom: 32px;
      }

      &__contentt {
        ul {
          padding-left: 18px;
          margin-bottom: 20px;

          li {
            list-style-type: disc;
            font-size: 20px;
            margin-bottom: 6px;
            color: $c-tco1;
          }

          &.bold {
            font-weight: 500;
          }
        }
      }

      &__dropdown {
        &_item {
          overflow: hidden;
          position: relative;

          &:first-child .slide__dropdown_header {
            padding-top: 0;
          }

          &.active .slide__dropdown {
            &_header {
              border-bottom: none;

              div {
                transform: rotate(180deg);
              }
            }

            &_text {
              position: relative;
              transform: none;
            }
          }
        }

        &_header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 24px;
          font-weight: 700;
          padding: 40px 0;
          border-bottom: 1px solid rgba(48, 69, 78, 0.2);

          div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 1px solid #00b0f0;
            background: #f2fbfe;
            cursor: pointer;
            color: #00b0f0;

            i {
              margin-top: -5px;
            }
          }
        }

        &_text {
          color: $c-tco1;
          position: absolute;
          bottom: 0;
          transform: translateY(100%);
        }
      }
    }

    hr {
      color: #8c9fa6;
      margin-bottom: 40px;
    }

    .subtitle {
      color: $c-tco1;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 20px;
      font-weight: 700;
    }

    p {
      margin-bottom: 20px;

      &.bold {
        font-weight: 500;
      }

      a {
        color: $c-tco5;
        text-decoration: underline;
      }
    }
  }

  .contacts {
    padding-bottom: 80px;
    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
      color: $c-tco3;
    }

    &__group {
      display: flex;
    }

    &__city {
      margin-right: 40px;

      p {
        margin-bottom: 12px;
      }
    }
  }

  @include phone {
    &__svg::v-deep {
      padding-bottom: 40px;

      .block__content_icon img {
        width: 85px;
      }
    }

    &__subtitle {
      font-size: 20px;
      line-height: 26px;
    }

    &__content {
      padding: 40px 0;
    }

    &__grid {
      .card {
        width: 100%;
        margin-right: 0 !important;
      }

      & > div {
        width: 100%;
        margin-right: 0 !important;
      }

      &_icon p {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 0;

        &.desc {
          font-size: 14px;
          line-height: 18px;
          margin-top: 12px;
        }
      }
    }
    .slide::v-deep {
      .slide {
        &__contentt {
          ul li,
          p {
            font-size: 16px;
            line-height: 22px;
          }
        }

        &__dropdown_header {
          font-size: 14px;
          line-height: 20px;

          div {
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    .pt-80 {
      padding-top: 40px;
    }

    .card-svg {
      p {
        font-size: 14px;
        line-height: 18px;

        &.title {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }

    .contacts {
      padding-bottom: 40px;

      &__title {
        font-size: 16px;
        line-height: 20px;
      }

      &__group {
        flex-direction: column;

        p {
          font-size: 16px;
          line-height: 20px;
        }
      }

      &__city:first-child {
        margin-bottom: 20px;
      }
    }
  }
}
.dropdown {
  @include phone {
    margin-top: 40px !important;
  }
}
.dropdown::v-deep {
  &.slide {
    max-height: 600px;
    @include phone;
  }
  .slide {
    max-height: 600px;
  }
}
.gray::v-deep {
  @include phone {
    .slide__image {
      h3 {
        color: white;
      }
    }
  }
}
.slide::v-deep {
  @include phone {
    .slide__image {
      img {
        filter: brightness(0.6);
      }
      h3 {
        z-index: 20;
        color: white;
      }
    }
  }
}
</style>
