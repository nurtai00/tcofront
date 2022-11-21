<template>
  <section id="company_year" class="company_year">
    <div class="container">
      <AtomsTitle small :point="false"> История компании </AtomsTitle>
    </div>
    <div class="tco__yearcircle"></div>
    <div class="double-block">
      <div class="tco__year">
        <h2
          v-for="(year, year_index) in year_list"
          :id="'year' + year.id"
          :key="year.text + ' ' + year_index"
          :class="{ active: active === year.text, small: year.small }"
          v-text="year.text"
        ></h2>
      </div>
      <div class="tco__year-text">
        <div
          v-for="(text, text_index) in text_list"
          :id="'text' + text.id"
          :key="text_index"
          class="tco__story"
        >
          <h4 v-text="text.title"></h4>
          <img v-if="text.image" :src="text.image" alt="image1" />
          <p v-text="text.text"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TcoFrontBlock7',
  data() {
    return {
      year_list: [
        {
          text: '1979',
          id: '1979',
        },
        {
          text: '1985',
          id: '19851',
        },
        {
          text: '1985',
          id: '19852',
        },
        {
          text: '1986',
          id: '1986',
        },
        {
          text: '1991',
          id: '1991',
        },
        {
          text: '1993',
          id: '1993',
        },
        {
          text: '1993/98',
          id: '1993-1998',
          small: true,
        },
        {
          text: '1997',
          id: '1997',
        },
        {
          text: '1999',
          id: '1999',
        },
        {
          text: '2001',
          id: '2001',
        },
        {
          text: '2001/08',
          id: '2001-2008',
          small: true,
        },
        {
          text: '2006/08',
          id: '2006-2008',
          small: true,
        },
        {
          text: '2008',
          id: '2008',
        },
        {
          text: '2009',
          id: '2009',
        },
        {
          text: '2009/12',
          id: '2009-2012',
          small: true,
        },
        {
          text: '2011',
          id: '2011',
        },
        {
          text: '2012',
          id: '2012',
        },
        {
          text: '2013',
          id: '20131',
        },
        {
          text: '2013',
          id: '20132',
        },
        {
          text: '2015',
          id: '2015',
        },
        {
          text: '2016',
          id: '2016',
        },
        {
          text: '2017',
          id: '2017',
        },
        {
          text: '2018',
          id: '2018',
        },
      ],
      active: '1979',
      text_list: [
        {
          title: 'Открыто Тенгизское месторождение ',
          text: 'Тенгизское нефтяное месторождение на западе Казахстана открыто в 1979-м году. 18 декабря 1979-го года первая скважина на данной площади дала нефть из подсолевых пластов на глубине 4045 – 4095 метров. С начала и до середины восьмидесятых годов прошлого века на территории месторождения велись активные буровые работы, было пробурено более ста скважин.',
          image: require('@/assets/img/year/image1.png'),
          id: '1979',
        },
        {
          title: 'Создан «Тенгизнефтегаз»',
          text: 'В феврале 1985-го года для разработки гигантского месторождения создано производственное объединение «Тенгизнефтегаз».',
          id: '19851',
        },
        {
          title: 'Авария на скважине Т-37',
          text: 'В июне 1985-го года произошло возгорание фонтана на скважине Т-37. Пожар продолжался более 400 дней и был потушен с помощью специалистов американской компании «Камерон».',
          image: require('@/assets/img/year/image2.png'),
          id: '19852',
        },
        {
          title: 'На Тенгизе начались строительные работы',
          text: 'В начале 1986-го года начались активные строительные работы на объектах нефтяного промысла, а с наступлением весны – на объектах заводского комплекса. На Тенгиз прибыли специалисты и строители из Западной Германии, Франции, Канады и Венгерской Народной Республики. По проекту, разработанному отечественными нефтяными институтами совместно с немецкой компанией «Лурги», канадской – «Лавалин» и американской – «Литвин»,  венгерская компания «Ведепсьер» осуществила строительство первой очереди Тенгизского газоперерабатывающего завода – комплексные технологические линии КТЛ-1 и КТЛ-2.',
          id: '1986',
        },
        {
          title: 'Пуск Тенгизского нефтегазового комплекса',
          text: '6 апреля 1991 года инженер Борис Васильев и операторы Абдулхамит Артыгалиев и Гафурин Аубакиров запустили скважину Т-8. На заводской комплекс пошла сырая нефть для очистки от сероводорода и примесей. Состоялся пуск Тенгизского нефтегазового комплекса.',
          id: '1991',
        },
        {
          title: 'Создано совместное предприятие «ТЕНГИЗШЕВРОЙЛ»',
          text: '6 апреля 1993-го года в г. Алма-Ате состоялось подписание Соглашение об образовании совместного казахстанско-американского предприятия по разработке Тенгизского месторождения. Соглашение подписали Президент РК Нурсултан Назарбаев и глава американской нефтяной корпорации «Шеврон» Кеннет Дерр. Созданное совместное предприятие получило название – «ТЕНГИЗШЕВРОЙЛ».',
          image: require('@/assets/img/year/image3.png'),
          id: '1993',
        },
        {
          title: 'ТШО создало программу «Бонус Фонд Атырау»',
          text: 'Начата реализация пятилетней программы социальных инвестиций «Бонус Фонд Атырау» с бюджетом $50 млн. В Атырау начато строительство автоматизированной котельной и газопровода природного газа от поселка Редут до котельной города мощностью, достаточной для последующей газификации города и близлежащих населенных пунктов. По программе «Бонус Фонд Атырау» ведется активное строительство хлебозавода, завершены ремонт и переоснащение Атырауской областной больницы. В поселке Кульсары построена больница скорой медицинской помощи, а в г. Атырау веден в действие диагностический центр, оснащенный самой современной медицинской аппаратурой.',
          id: '1993-1998',
        },
        {
          title: 'Первая модернизация нефтяного комплекса',
          text: 'В 1997-ом году завершена первая крупная модернизация нефтяного комплекса на Тенгизе – осуществлен проект Debottlnecking – «Расширение узких мест», что позволило довести годовую добычу нефти до 7 миллионов тонн. В том же году начались работы по дальнейшему росту производственных мощностей – проекты «Пятая нитка» и «Программа-12». Проекты были завершены в 2001-м году и подняли уровень добычи нефти до 12 миллионов тонн.',
          id: '1997',
        },
        {
          title:
            'Старт программы социальных инфраструктурных проектов «Игілік»',
          text: 'Запущена новая добровольная программа «Игілік» (в переводе с казахского - «благо»). В рамках данной программы на реконструкцию центрального моста через реку Урал в г. Атырау, а также на благоустройство областного центра было выделено $4 млн. В следующем, 2000 году, бюджет программы составит 5 миллионов долларов США.',
          id: '1999',
        },
        {
          title: 'Введен в эксплуатацию нефтепровод КТК',
          text: 'В начале 2001-го года введен в эксплуатацию нефтепровод КТК  для транспортировки тенгизской нефти до нефтяных терминалов черноморского порта Новороссийск. ',
          image: require('@/assets/img/year/image4.png'),
          id: '2001',
        },
        {
          title:
            'Строительство Завода второго поколения и комплекса обратной закачки сырого газа',
          text: 'В 2001-м году начаты работы над проектами Завода второго поколения и комплекса обратной закачки газа (ЗВП/ЗСГ). Реализация крупнейшего в истории казахстанской нефтяной промышленности проекта повышения производственной мощности нефтяного комплекса началась в 2003-м и была успешно завершена в 2008-году.  ',
          id: '2001-2008',
        },
        {
          title:
            'Ежегодный бюджет программы «Игілік» составит 12 миллионов долларов США',
          id: '2006-2008',
        },
        {
          title: 'Введен в эксплуатацию завод второго поколения',
          text: 'Комплекс ЗВП/ЗСГ был введен в эксплуатацию 5 июня 2008-го года Президентом РК Нурсултаном Абишевичем Назарбаевым. «Завод второго поколения – это крупнейший инновационный проект. Совместное предприятие «Тенгизшевройл» является настоящим корпоративным лидером нефтегазовой отрасли страны. Этот проект стоимостью $7 млрд на сегодня является самым крупным в СНГ. Его мощность позволит Казахстану добывать 25 млн тонн нефти в год. К тому же использование высокотехнологичного оборудования существенно уменьшит вредные выбросы в атмосферу», - подчеркнул глава государства.',
          image: require('@/assets/img/year/image5.png'),
          id: '2008',
        },
        {
          title: 'Объем добычи сырой нефти достиг 25 миллионов тонн',
          text: 'Годовой объем добычи нефти в ТШО возрос до 25-ти миллионов тонн после вывода ЗВП/ЗСГ на проектную мощность в 2009-м году, то есть, почти вдвое повысил производительность комплекса.',
          id: '2009',
        },
        {
          title:
            'Бюджет программы «Игілік» увеличен до 20 миллионов долларов США в год.',
          text: 'За все время реализации программы «Игілік» было выделено свыше 150 миллионов долларов США на различные социальные инфраструктурные проекты в Атырауской области.',
          id: '2009-2012',
        },
        {
          title: 'ТШО становится обладателем Гран-при премии «Парыз»',
          text: 'В 2011 году ТЕНГИЗШЕВРОЙЛ стал обладателем Гран-при Республиканского конкурса по социальной ответственности бизнеса «Парыз». Церемония вручения состоялась в г. Астане, где Президент Республики Казахстан Н. А. Назарбаев вручил награду генеральному директору ТШО Тиму Миллеру.',
          image: require('@/assets/img/year/image6.png'),
          id: '2011',
        },
        {
          title:
            'На Тенгизе добыто 2 миллиарда баррелей нефти с момента создания ТШО в 1993 году.',
          id: '2012',
        },
        {
          title:
            'ТШО увеличил годовой бюджет программы «Игилик» до 25 млн долларов США',
          text: 'Кроме того, ТШО стал обладателем нескольких наград: в номинации «Компания года в нефтегазовой индустрии» Национального отраслевого конкурса «Корган»; стал лауреатом конкурса по социальной ответственности бизнеса на 8-м Евразийском форуме KAZENERGY. Корпоративная газета «Новости ТШО» объявлена лучшим региональным корпоративным изданием на конкурсе «Лучшее корпоративное медиа – ENERGY TRIBUNE 2013 года».',
          id: '20131',
        },
        {
          title: 'ТШО отмечает 20-летие со дня образования',
          text: 'За прошедшие 20 лет вклад ТШО в социальные программы и проекты в Атырауской области составил свыше 800 миллионов долларов США, а прямые финансовые выплаты предприятия Республике Казахстан превысили отметку 77 миллиардов долларов США.',
          id: '20132',
        },
        {
          title: 'Полностью ликвидированы запасы серы на Тенгизе',
          text: 'В конце октября ТОО «Тенгизшевройл» объявило правительству об отгрузке последней партии складированной серы, выполнив взятое на себя обязательство с опережением на два года.',
          id: '2015',
        },
        {
          title:
            'Объявлено об окончательном решении по финансированию ПБР-ПУУД',
          text: 'В июле 2016 г. Партнёры ТШО объявили о принятии окончательного решения по финансированию ПБР-ПУУД. Данное решение – значимое событие для ТШО и Республики Казахстан, и его принятие стало возможным благодаря высококвалифицированным специалистам и настоящим профессионалам своего дела – сотрудникам ТШО.',
          image: require('@/assets/img/year/image7.png'),
          id: '2016',
        },
        {
          title:
            'TШO достиг отметки 3 миллиарда баррелей добычи нефти с 1993 года',
          id: '2017',
        },
        {
          title: 'ТШО отмечает свой 25-летний юбилей',
          image: require('@/assets/img/year/image8.png'),
          id: '2018',
        },
      ],
      touchstartX: 0,
      scrolledIndex: 0,
    }
  },
  mounted() {
    // eslint-disable-next-line no-extend-native
    Array.prototype.hasMin = function (attrib) {
      return (
        (this.length &&
          this.reduce(function (prev, curr) {
            return prev[attrib] < curr[attrib] ? prev : curr
          })) ||
        null
      )
    }
    if (window.innerWidth < 550) {
      this.$nextTick(() => {
        document
          .querySelector('#company_year .double-block')
          .addEventListener('touchstart', this.touchStartHandler)
        document
          .querySelector('#company_year .double-block')
          .addEventListener('touchend', this.touchEndHandler)
      })
    } else {
      document.addEventListener('scroll', this.scrollHandler)
    }
  },
  beforeDestroy() {
    if (window.innerWidth < 550) {
      document
        .querySelector('#company_year .double-block')
        .removeEventListener('touchstart', this.touchStartHandler)
      document
        .querySelector('#company_year .double-block')
        .removeEventListener('touchend', this.touchEndHandler)
    } else {
      document.removeEventListener('scroll', this.scrollHandler)
    }
  },
  methods: {
    touchEndHandler(event) {
      console.log({ touchend: event })
      if (Math.abs(this.touchstartX - event.changedTouches[0].pageX) > 80) {
        console.log(
          'scrolled',
          this.touchstartX - event.changedTouches[0].pageX
        )
        if (this.touchstartX - event.changedTouches[0].pageX > 0) {
          this.scrolledIndex++
        } else if (
          this.touchstartX - event.changedTouches[0].pageX < 0 &&
          this.scrolledIndex
        ) {
          this.scrolledIndex--
        }
        if (this.scrolledIndex === 23) {
          this.scrolledIndex = 22
        }
        document.querySelector('.tco__year').style.left = `-${
          this.scrolledIndex * 53.6
        }vw`
        document.querySelector('.tco__year').style.width = `calc(100vw + ${
          this.scrolledIndex * 53.6
        }vw)`
        document
          .querySelectorAll('.tco__year h2')
          .forEach((h_element, h_index) => {
            if (h_index === this.scrolledIndex) {
              h_element.classList.add('active')
            } else {
              h_element.classList.remove('active')
            }
          })
        document.querySelector('.tco__year-text').style.left = `calc(-${
          this.scrolledIndex * 83
        }vw + ${34 * this.scrolledIndex}px)`
        document.querySelector('.tco__year-text').style.width = `calc(100vw + ${
          this.scrolledIndex * 83
        }vw - ${34 * this.scrolledIndex}px)`
      }
    },
    touchStartHandler(event) {
      console.log({ touchstart: event })
      this.touchstartX = event.touches[0].pageX
    },
    scrollHandler() {
      const year_list = []
      this.year_list.forEach((year) => {
        if (document.querySelector(`#text${year.id}`)) {
          year_list.push({
            id: year.id,
            positionY: Math.abs(
              document.querySelector(`#text${year.id}`).getBoundingClientRect()
                .y
            ),
          })
        }
      })
      const active_year = year_list.hasMin('positionY')
      if (
        document.querySelector('#company_year .main').getBoundingClientRect()
          .y < -200
      ) {
        document
          .querySelector('.tco__yearcircle')
          .classList.add('tco__yearcircle-fixed')
      } else {
        document
          .querySelector('.tco__yearcircle')
          .classList.remove('tco__yearcircle-fixed')
      }
      if (active_year.positionY > 300) {
        return
      }
      let active_index = 0
      document
        .querySelectorAll('.tco__year h2')
        .forEach((year_element, year_index) => {
          if (year_element.id === `year${active_year.id}`) {
            active_index = year_index
          }
        })
      document
        .querySelectorAll('.tco__year h2')
        .forEach((year_element, year_index) => {
          if (active_index === year_index) {
            year_element.classList.add('active')
          } else {
            year_element.classList.remove('active')
          }
          year_element.style.top = `-${(active_index - 1) * 24.83}vh`
        })
    },
  },
}
</script>

<style lang="scss" v-deep scoped>
.tco {
  &__partners {
    &-wrapper {
      padding: 40px 40px 40px 0;
      max-width: 572px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 25px;
      text-align: left;
      @media (max-width: 1200px) {
        padding: 15px;
      }
      @media (max-width: 886px) {
        max-width: inherit;
      }
      .underline {
        display: block;
        position: relative;
        width: 80%;
        border: 1px solid #8c9fa6;
      }
      .line {
        display: block;
        position: relative;
        width: 80vw;
        border: 1px solid #8c9fa6;
      }
      h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 38px;
        line-height: 46px;
        color: #015467;
        @media (max-width: 385px) {
          font-size: 32px;
        }
      }
      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 38px;
        line-height: 42px;
        color: #015467;
      }
      .steps {
        margin-top: auto;
        display: flex;
        align-items: center;
        gap: 2px;
        span {
          display: block;
          width: 40px;
          height: 4px;
          background: rgba(1, 84, 103, 0.1);
          border-radius: 4px;
        }
        .done {
          background: #5e8698;
        }
      }
      .amount {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        .item {
          background: #e8f8fe;
          border-radius: 4px;
          padding: 20px;
          width: 100%;
          span {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 32px;
            color: #30454e;
          }
          p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            color: #8c9fa6;
          }
        }
      }
      .years {
        width: 80%;
        @media (max-width: 886px) {
          width: 100%;
          max-width: inherit;
          margin: auto;
        }
      }
    }
    background: #f2f6f7;
  }
  &__story {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 40px 40px 0;
    max-width: 572px;
    border-bottom: 1px solid #8c9fa6;

    @media (max-width: 886px) {
      width: 100%;
      max-width: inherit;
      padding: 15px;
    }
    @media (orientation: portrait) {
      width: 75vw;
      max-width: inherit;
      min-width: 75vw;
      padding: 0;
      padding-right: 8vw;
      padding-left: 16px;
      border-bottom: 0px solid #8c9fa6;
      border-right: 1px solid #8c9fa6;
    }

    h4 {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      width: 100%;
      color: #30454e;
      @media (orientation: portrait) {
        font-size: 4.8vw; // 18px;
        line-height: 6.4vw; // 24px;
      }
    }
    img {
      width: 550px;
      @media (max-width: 886px) {
        width: 100%;
        max-width: inherit;
      }
      @media (orientation: portrait) {
        width: 75%;
      }
    }
    p {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;
      color: #30454e;
      @media (orientation: portrait) {
        font-size: 4.2vw; // 16px;
        line-height: 5.8vw; // 22px;
      }
    }
  }
  &__year {
    padding: 40px 2.7vw 40px 0;
    max-width: 50vw;
    overflow-y: hidden;
    position: sticky;
    top: 6.5vh;
    height: 100vh;
    @media (orientation: portrait) {
      position: relative !important;
      top: 0px;
      height: auto;
      width: 100vw;
      display: flex;
      max-width: inherit;
      padding: 0;
      padding: 28px 0;
      padding-left: 13.6vw;
      left: 0px;
      overflow-x: hidden;
      transition: 0.5s all ease;
    }
    h2 {
      position: relative;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 20.6vh; // 12.91vw; // 186px;
      line-height: 24.88vh; // 15.55vw; // 224px;
      color: #015467;
      opacity: 0.08;
      transition: 0.5s all ease;
      text-align: right;
      padding-right: 3.2vw;
      top: 15.6vw;
      @media (orientation: portrait) {
        font-size: 22vw; // 86px;
        line-height: 24vw; // 90px;
        top: 0px !important;
      }
    }
    .active {
      opacity: 1;
    }
    .small {
      font-size: 12.4vh; // 7.77vw; // 112px;
      line-height: 24.88vh; // 15.55vw; // 224px;
      @media (orientation: portrait) {
        font-size: 13.23vw; // 51px
        line-height: 24vw; // 90px;
      }
    }
    &-text {
      padding-bottom: 50vw;
      @media (orientation: portrait) {
        padding-bottom: 0px;
        padding-top: 40px;
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        width: 100vw;
        overflow-x: hidden;
        transition: 0.5s all ease;
        position: relative;
      }
    }
  }
  &__yearcircle {
    position: absolute;
    left: 29vw;
    top: 32vh;
    width: 32.6vh; // 20vw;
    height: 32.6vh; // 20vw;
    background: #ffffff;
    opacity: 0.4;
    border: 3px solid #015467;
    box-shadow: 3px 3px 50px rgba(0, 176, 240, 0.1);
    border-radius: 50%;
    transition: 0.5s all ease;
    opacity: 0;
    @media (orientation: portrait) {
      width: 39vw;
      height: 39vw;
      left: 30vw;
      top: calc(66px + 28px);
      opacity: 0.4;
    }
  }
  &__yearcircle-fixed {
    position: sticky;
    left: 28vw;
    top: 32vh;
    opacity: 0.4;
  }
}
.company_year {
  position: relative;
}
</style>
