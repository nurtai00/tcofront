<template>
  <div class="join">
    <div class="container">
      <MoleculesBreadcrumbs class="join__breadcrumbs">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/kazakhstani-content">
          Kazakhstani Content
        </AtomsBreadOption>
        <AtomsBreadOption to="/kazakhstani-content/join-tco-program">
          Joint TCO and EBRD Program
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="join__title">
        Программы развития поставщиков
      </AtomsTitle>
    </div>
    <div class="gray">
      <div class="container">
        <OrganismsSectionOperationSvg class="join__svg" :data="sideSvg[0]" />
      </div>
    </div>
    <div class="container">
      <div class="join__content">
        <div class="join__subtitle">
          Целевой список на развитие производителей по внутренней программе ТШО:
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
    <OrganismsSectionOperationSlide :data="slide[0]" class="slide gray" />
    <div class="container">
      <div class="join__content">
        <div class="join__subtitle">Итоги за 2015-2019 гг.</div>
        <div class="join__grid">
          <div
            v-for="(item, key) in cardsIcon"
            :key="key"
            class="join__grid_icon"
          >
            <i :class="`icon-${item.icon}`" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <OrganismsSectionOperationSlide :data="slide[1]" class="slide gray">
      <div class="slide__contentt">
        <p>
          ТШО, совместно с другими нефтегазовые операторами является участником
          «Международного Центра Развития Машиностроения. Участниками, были
          определены следующие товарные группы на развитее:
        </p>
        <ul class="bold">
          <li>Электрооборудование</li>
          <li>Оборудование «КИПиА»</li>
          <li>Запорная арматура</li>
          <li>Магистральные трубы</li>
          <li>Системы ОВКВ</li>
          <li>Производственные фильтры</li>
          <li>Уплотнители</li>
        </ul>
        <p>
          Ссылка на IMBC сайт
          <a href="https://www.imbc.kz/">https://www.imbc.kz/</a>
        </p>
      </div>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSlide side :data="slide[2]" class="slide gray">
      <div class="slide__dropdown">
        <div
          v-for="(dropdown, key) in dropdowns"
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
              <i class="icon-arrowDown" />
            </div>
          </div>
          <div class="slide__dropdown_text">
            {{ dropdown.text }}
          </div>
        </div>
      </div>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSlide :data="slide[3]" class="slide">
      <div class="slide__contentt">
        <p class="bold">7 тренингов и семинаров; более 250 участников:</p>
        <ul>
          <li>по основам спецификации API Q1 & Q2</li>
          <li>по основам культуры безопасности по стандартам EOSH & IOSH</li>
          <li>по подготовке к закупкам</li>
        </ul>
        <p class="bold">
          15 инструкторов по технике безопасности и охране труда сертифицированы
          по программе Международной организации труда
        </p>
      </div>
    </OrganismsSectionOperationSlide>
    <div class="gray">
      <div class="container">
        <OrganismsSectionOperationSvg
          class="join__svg pt-80"
          :data="sideSvg[1]"
        >
          <template #description>
            <div class="card-svg">
              <p class="title">Улучшение доступа к ноу-хау</p>
              <p>
                Консультационные услуги для бизнеса дают предприятиям с высоким
                потенциалом роста, возможность получить помощь местных
                консультантов и/или международных экспертов, а семинары и
                тренинги помогают улучшить знания в различных областях, таких
                как, стратегия,оперативное управление и управление качеством,
                финансы и бухгалтерский учет. Кроме того, компании, которые
                предлагают товары и/или услуги для нефтегазовой отрасли,
                работают с местными и международными консультантами на основе
                совместного разделения расходов с ЕБРР (Банк возмещает до 75 %
                от цены проекта) с целью улучшения производительности
                предприятий в различных направлениях их деятельности.
              </p>
              <p class="title">Расширение доступа к финансированию</p>
              <p>
                Программа направлена на улучшение доступа предприятий к
                финансовым ресурсам, необходимым для роста и развития.
              </p>
            </div>
          </template>
        </OrganismsSectionOperationSvg>
      </div>
    </div>
    <div class="container">
      <div class="join__content">
        <div class="join__subtitle">Условия участия</div>
        <div class="join__grid">
          <div
            v-for="(item, key) in cardsIcon2"
            :key="key"
            class="join__grid_icon"
          >
            <i :class="`icon-${item.icon}`" />
            <p>{{ item.title }}</p>
            <p class="desc">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="contacts">
        <div class="contacts__title">ЕБРР в Казахстане:</div>
        <div class="contacts__group">
          <div class="contacts__city">
            <p>Алматы</p>
            <p>050010, ул. Казыбек Би 41</p>
            <p>тел: +7 727 3320007; факс: +7 727 2584632</p>
            <p>tcoinfo@tengizchevroil.com</p>
          </div>
          <div class="contacts__city">
            <p>Нур-Султан</p>
            <p>010000, ул. Достык 2, БЦ ‘SAAD’</p>
            <p>тел: +7 (7172) 554270</p>
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
          title: 'Внутренняя развития производителей ',
          description:
            'Внутренняя программа ТШО заключается в анализе предстоящих закупок и поиске потенциальных поставщиков совместно с техническими экспертами ТШО. В результате анализа выявляется список «целевых товаров и услуг», по которым мы проверяем и квалифицируем поставщиков, а также размещаем у них пробные заказы. Ниже приведен список наименований с высоким потенциалом, включающий электрические услуги, химическое производство, техобслуживание, ремонт и эксплуатацию (ТОРЕ), а также многое другое. В течение 2021 года сразу несколько отделов ТШО развивали возможности поставщиков, которые поставляют более 18 продуктов в таких категориях, как аварийно-спасательное оборудование, электрооборудование, буровые материалы, услуги по техобслуживанию, телекоммуникационное оборудование, а также материалы для техобслуживания, ремонта и эксплуатации (ТОРЭ) и другое телекоммуникационное оборудование, а также материалы для техобслуживания, ремонта и эксплуатации (ТОРЭ) и другое.',
          icon: 'production',
        },
        {
          title: 'Что мы предлагаем предприятиям',
          icon: 'sheep',
        },
      ],
      slide: [
        {
          title:
            'Совместная инициатива по поддержке и укреплению потенциала местных предприятий',
          description: [
            `Специалисты ЕБРР помогают реализовать консультационный проект с привлечением местных и международных консультантов, а предприятие получает возмещение части расходов на привлечение консультанта. Также в рамках программы проводятся тренинги и семинары для местных поставщиков.

Действующие поставщики ТШО, а также потенциальные, не имеющие прямых контактов с данным сектором, будут участвовать в программе, чтобы повысить свои возможности сотрудничества с ТШО и налаживания поставок для нужд нефтегазового сектора Казахстана.`,
          ],
          image: 'kazakhstani/kazakhstani2.png',
        },
        {
          title: 'Программа Международный центр развития машиностроения',
          image: 'operation/operations6.png',
        },
        {
          title: '',
          image: 'operation/operations2.png',
        },
        {
          title: 'Мотивация сотрудников',
          image: 'operation/operations7.png',
        },
      ],
      cards: [
        {
          icon: 'tools',
          number: '01',
          title: 'Строительство',
          html: `<ul>
<li>Теплоизоляционные материалы</li>
<li>Воздуховоды</li>
</ul>`,
        },
        {
          icon: 'mask',
          number: '02',
          title: 'БиОТиООС',
          html: `<ul>
<li>Огнетушители</li>
<li>Пожарные машины</li>
<li>Противопожарные одеяла</li>
</ul>`,
        },
        {
          icon: 'spinner',
          number: '03',
          title: 'Бурение',
          html: `<ul>
<li>Поставка буровых долот/восстановление</li>
</ul>`,
        },
        {
          icon: 'hardwork',
          number: '04',
          title: 'Эксплуатация, ремонт и техобслуживание ',
          html: `<ul>
<li>Обтюраторы/промставки/межфланцевые заглушки</li>
<li>Фитинги и фланцы трубопроводов</li>
<li>Шаровые краны</li>
<li>Шпильки и болты</li>
</ul>`,
        },
        {
          icon: 'closure',
          number: '05',
          title: 'Энергоснабжение',
          html: `<ul>
<li>Распределительные щиты</li>
<li>Соединительная монтажная коробка</li>
<li>Кабельные лотки и аксессуары</li>
<li>Подстанция</li>
<li>Комплект по соединению кабеля</li>
<li>Электрические кабеля</li>
</ul>`,
        },
      ],
      cardsIcon: [
        {
          icon: 'planning',
          text: '27 проектов с местными консультантами',
        },
        {
          icon: 'worldwide',
          text: '7 проектов с международными экспертами',
        },
        {
          icon: 'coins',
          text: '77% компаний увеличили оборот более чем в два раза',
        },
        {
          icon: 'working',
          text: 'создано 187 новых рабочих мест',
        },
        {
          icon: 'employee',
          text: '50% компаний увеличили количество сотрудников–женщин на 20%',
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
    color: $c-tco1;
  }

  &__svg::v-deep {
    padding-bottom: 80px;

    .block__icon i {
      font-size: 300px;
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

      i {
        display: block;
        font-size: 80px;
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
          padding: 40px 0 24px;
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
}
</style>
