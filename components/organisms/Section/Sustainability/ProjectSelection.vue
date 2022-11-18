<template>
  <div class="selection">
    <div class="container">
      <AtomsHeading type="h3">Этапы отбора проектов</AtomsHeading>
    </div>
    <div class="selection__step">
      <div class="selection__step-one" @click="openPopup(popups.one)">
        <div class="container content">
          <div class="content__title">
            <AtomsHeading type="h4" color="white">01</AtomsHeading>
            <AtomsHeading type="h4" color="white">Этап</AtomsHeading>
          </div>
          <AtomsHeading type="h4" color="white">
            КРИТЕРИИ ОТБОРА ПРОЕКТОВ
          </AtomsHeading>
        </div>
      </div>
      <div class="selection__step-two" @click="openPopup(popups.two)">
        <div class="container content">
          <div>
            <AtomsHeading type="h4" color="white">02</AtomsHeading>
            <AtomsHeading type="h4" color="white">Этап</AtomsHeading>
          </div>
          <AtomsHeading type="h4" color="white">
            ПРИМЕРЫ КРИТЕРИЕВ ОТБОРА ПРОЕКТОВ
          </AtomsHeading>
        </div>
      </div>
    </div>
    <div class="container project">
      <AtomsHeading type="h3">
        ПРОЦЕСС ОТБОРА СОЦИАЛЬНЫХ ПРОЕКТОВ НА 2023 Г
      </AtomsHeading>
      <div class="project__markers">
        <div
          v-for="marker of markers"
          :key="marker.id"
          :data-label="marker.label"
          class="marker"
        >
          <div class="marker__arrow">
            <svg
              width="30"
              height="42"
              viewBox="0 0 30 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4142 0.585785C15.6332 -0.195263 14.3668 -0.195263 13.5858 0.585785L0.857863 13.3137C0.0768144 14.0948 0.0768144 15.3611 0.857863 16.1421C1.63891 16.9232 2.90524 16.9232 3.68629 16.1421L15 4.82843L26.3137 16.1421C27.0948 16.9232 28.3611 16.9232 29.1421 16.1421C29.9232 15.3611 29.9232 14.0948 29.1421 13.3137L16.4142 0.585785ZM17 42L17 2L13 2L13 42L17 42Z"
                fill="#5E8698"
              />
            </svg>
          </div>
          <AtomsMarker :title="marker.title" :color="marker.color" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popups: {
        one: {
          id: '01',
          title: 'КРИТЕРИИ ОТБОРА ПРОЕКТОВ (ЭТАП 1):',
          modal: 'SelectionProject',
          list: [
            'Проект не для индивидуальных лиц',
            'Проект не поддерживает конкретный коммерческий бизнес',
            'Проект не подразумевает спонсорство спортивных команд',
            'НПО не является военной, политической или религиозной организацией',
            'Проект планируется в пределах географии ПСИ - если только этот проект не имеет национального значения',
            'Проект планируется в рамках одной из тем ПСИ',
            'Бюджет не охватывает только поездки или сборы за участие в соревнованиях',
            'Объем проекта не покрывает обычные операционные расходы для государственных учреждений',
            'Проект не планируется для строительства объектов инфраструктуры, которые могут быть охвачены в рамках программы Игилик',
            'Объем работ проекта и бюджет не подразумевают только приобретение чего-либо',
            'Основная часть бюджета не закладывается для проведения капитального ремонта',
          ],
        },
        two: {
          id: '02',
          title: 'ПРИМЕРЫ КРИТЕРИЕВ ОТБОРА ПРОЕКТОВ (ЭТАП 2):',
          modal: 'SelectionProject',
          list: [
            'Поддержка потребностей и приоритетов местного населения',
            'Экономическая эффективность',
            'Развитие потенциала',
            'Устойчивое развитие',
            'Проект поддается оценке и контролю',
            'Обоснованность',
            'Демонстрация высокого потенциала для достижения успеха',
            'Инновационность и возможность выполнения проекта дистанционно в онлайн формате',
          ],
        },
      },
      markers: [
        {
          id: 1,
          title: 'Июль',
          color: '#FFC000',
          label:
            'выражение заинтересованности НПО принять участие в ПСИ (рассылка по электронной почте)',
        },
        {
          id: 2,
          title: 'Август',
          color: '#44D0F7',
          label:
            'запрос и получение предложений социальных проектов (рассылка по электронной почте)',
        },
        {
          id: 3,
          title: 'Сентябрь',
          color: '#00B0F0',
          label:
            'изучение и оценка предложений в Совете ПСИ по действующим в ТШО критериям отбора',
        },
        {
          id: 4,
          title: 'Октябрь',
          color: '#5E8698',
          label:
            'получение внутренних разрешений и работа над спонсорскими контрактами',
        },
        { id: 5, title: 'Ноябрь', color: '#0282A0' },
        {
          id: 6,
          title: 'Декабрь',
          color: '#015467',
          label: 'объявление успешных (отобранных) предложений',
        },
        {
          id: 7,
          title: 'Январь',
          color: '#30454E',
          label: 'поэтапное финансирование и выполнение проектов и программ',
        },
      ],
    }
  },
  methods: {
    openPopup(payload) {
      this.$modal.add({
        title: payload.modal,
        payload,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.selection {
  padding: 80px 0;
  &__step {
    margin-top: 40px;
    display: flex;
    &-one {
      background-color: #015467;
      width: 50%;
    }
    &-two {
      background-color: #347685;
      width: 50%;
      & .content {
        left: calc(100vw - (var(--width-container)) / 2);
      }
    }
  }
  @include tablet {
    &__step {
      flex-direction: column;
      &-one {
        width: 100%;
        margin: auto 0;
      }
      &-two {
        width: 100%;
        & .content {
          //padding-left: 60px;
        }
      }
    }
  }
}
.content {
  padding: 80px 280px 130px calc((100vw - var(--width-container)) / 2);
  display: flex;
  flex-direction: column;
  gap: 40px;
  cursor: pointer;
  @include tablet {
    padding: 40px 280px 40px calc((100vw - var(--width-container)) / 2);
  }
  @include phone {
    padding: 40px;
    gap: 10px;
  }
}
.project {
  padding: 80px 0 40px 0;
  &__markers {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    position: relative;
  }
}
.marker {
  width: 100%;
  $p: &;
  &:nth-child(1) {
    #{$p}__arrow {
      position: relative;
      left: 70px;
      top: -20px;
    }
    &:before {
      display: block;
      content: attr(data-label);
      position: absolute;
      top: 50px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(2) {
    #{$p}__arrow {
      position: relative;
      left: -160px;
      bottom: -120px;
      transform: rotate(-180deg);
    }
    &:after {
      display: block;
      content: attr(data-label);
      position: absolute;
      bottom: 70px;
      left: 100px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(3) {
    #{$p}__arrow {
      position: relative;
      left: -20px;
      top: -20px;
    }
    &:before {
      display: block;
      content: attr(data-label);
      position: absolute;
      top: 50px;
      left: 270px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(4) {
    #{$p}__arrow {
      position: relative;
      left: 10px;
      bottom: -120px;
      transform: rotate(-180deg);
    }
    &:after {
      display: block;
      content: attr(data-label);
      position: absolute;
      bottom: 70px;
      left: 685px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(5) {
    #{$p}__arrow {
      position: relative;
      left: 10px;
      bottom: -120px;
      transform: rotate(-180deg);
    }
  }
  &:nth-child(6) {
    #{$p}__arrow {
      position: relative;
      left: 70px;
      top: -20px;
    }
    &:before {
      display: block;
      content: attr(data-label);
      position: absolute;
      top: 50px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  &:nth-child(7) {
    #{$p}__arrow {
      position: relative;
      left: -70px;
      bottom: -120px;
      transform: rotate(-180deg);
    }
    &:after {
      display: block;
      content: attr(data-label);
      position: absolute;
      bottom: 70px;
      left: 960px;
      color: $c-text;
      width: 270px;
      height: 32px;
    }
  }
  //@include wide-tablet {
  //  &:nth-child(1) {
  //    display: flex;
  //    flex-direction: row-reverse;
  //    align-items: center;
  //    width: 200px;
  //    height: auto;
  //    gap: 20px;
  //    #{$p}__arrow {
  //      position: static;
  //      transform: rotate(90deg);
  //      svg {
  //        width: 24px;
  //        height: 24px;
  //      }
  //    }
  //    &:before {
  //      display: block;
  //      content: attr(data-label);
  //      position: absolute;
  //      top: 0px;
  //      left: 220px;
  //      color: $c-text;
  //      font-size: 16px;
  //      //width: 270px;
  //      height: 32px;
  //    }
  //  }
  //  &:nth-child(2) {
  //    display: flex;
  //    flex-direction: row-reverse;
  //    align-items: center;
  //    width: 200px;
  //    height: auto;
  //    gap: 20px;
  //    #{$p}__arrow {
  //      position: static;
  //      transform: rotate(90deg);
  //      svg {
  //        width: 24px;
  //        height: 24px;
  //      }
  //    }
  //    &:before {
  //      display: none;
  //      content: attr(data-label);
  //      position: absolute;
  //      top: 200px;
  //      left: 220px;
  //      color: $c-text;
  //      font-size: 16px;
  //      height: 32px;
  //    }
  //  }
  //&:nth-child(3) {
  //  display: flex;
  //  flex-direction: row-reverse;
  //  align-items: center;
  //  width: 200px;
  //  height: auto;
  //  gap: 20px;
  //  #{$p}__arrow {
  //    position: static;
  //    transform: rotate(90deg);
  //    svg {
  //      width: 24px;
  //      height: 24px;
  //    }
  //  }
  //  &:before {
  //    display: block;
  //    content: attr(data-label);
  //    position: absolute;
  //    top: 0px;
  //    left: 220px;
  //    color: $c-text;
  //    font-size: 16px;
  //    width: 270px;
  //    height: 32px;
  //  }
  //}
  //&:nth-child(4) {
  //  display: flex;
  //  flex-direction: row-reverse;
  //  align-items: center;
  //  width: 200px;
  //  height: auto;
  //  gap: 20px;
  //  #{$p}__arrow {
  //    position: static;
  //    transform: rotate(90deg);
  //    svg {
  //      width: 24px;
  //      height: 24px;
  //    }
  //  }
  //  &:before {
  //    display: block;
  //    content: attr(data-label);
  //    position: absolute;
  //    top: 0px;
  //    left: 220px;
  //    color: $c-text;
  //    font-size: 16px;
  //    width: 270px;
  //    height: 32px;
  //  }
  //}
  //&:nth-child(5) {
  //  display: flex;
  //  flex-direction: row-reverse;
  //  align-items: center;
  //  width: 200px;
  //  height: auto;
  //  gap: 20px;
  //  #{$p}__arrow {
  //    position: static;
  //    transform: rotate(90deg);
  //    svg {
  //      width: 24px;
  //      height: 24px;
  //    }
  //  }
  //  &:before {
  //    display: block;
  //    content: attr(data-label);
  //    position: absolute;
  //    top: 0px;
  //    left: 220px;
  //    color: $c-text;
  //    font-size: 16px;
  //    width: 270px;
  //    height: 32px;
  //  }
  //}
  //&:nth-child(6) {
  //  display: flex;
  //  flex-direction: row-reverse;
  //  align-items: center;
  //  width: 200px;
  //  height: auto;
  //  gap: 20px;
  //  #{$p}__arrow {
  //    position: static;
  //    transform: rotate(90deg);
  //    svg {
  //      width: 24px;
  //      height: 24px;
  //    }
  //  }
  //  &:before {
  //    display: block;
  //    content: attr(data-label);
  //    position: absolute;
  //    top: 0px;
  //    left: 220px;
  //    color: $c-text;
  //    font-size: 16px;
  //    width: 270px;
  //    height: 32px;
  //  }
  //}
  //&:nth-child(7) {
  //  display: flex;
  //  flex-direction: row-reverse;
  //  align-items: center;
  //  width: 200px;
  //  height: auto;
  //  gap: 20px;
  //  #{$p}__arrow {
  //    position: static;
  //    transform: rotate(90deg);
  //    svg {
  //      width: 24px;
  //      height: 24px;
  //    }
  //  }
  //  &:before {
  //    display: block;
  //    content: attr(data-label);
  //    position: absolute;
  //    top: 0px;
  //    left: 220px;
  //    color: $c-text;
  //    font-size: 16px;
  //    width: 270px;
  //    height: 32px;
  //  }
  //}
}
</style>
