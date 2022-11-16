<template>
  <div class="impact">
    <div class="impact__wrapper container">
      <AtomsHeading class="impact__title" type="h3">
        Воздействие на окружающую среду
      </AtomsHeading>
      <div class="impact__content">
        <div class="impact__info">
          <p class="impact__info-description">
            Деятельность компании в области охраны окружающей среды отражают
            приверженность защите окружающей среды путем постоянного улучшения
            своих экологических показателей. С 2000 года ТШО инвестировал более
            451 млрд тенге (или более 3 млрд долларов США) на реализацию
            природоохранных мероприятий, в результате которых было достигнуто
            сокращение сжигания газа на факелах и атмосферных выбросов,
            улучшение эффективности очистки сточных вод, а также увеличение
            объемов повторно используемой воды.
          </p>
          <div class="mt40">
            <AtomsPdfFile
              text="Основные экологические показатели за 2021 год "
              direction="row"
              :width="30"
              :height="40"
            />
            <AtomsPdfFile
              class="mt20"
              text="Краткий справочник Биотопов Тенгиза"
              direction="row"
              :width="30"
              :height="40"
            />
          </div>
        </div>
        <div class="impact__img">
          <img src="@/assets/img/vacancy/block6-1.jpg" alt="block6-1" />
        </div>
      </div>
    </div>
    <div class="container impact__cards">
      <PopupCardWithImg
        v-for="item of items"
        :key="item.id"
        :item="item"
        @click="openPopup"
      />
    </div>
  </div>
</template>
<script>
import PopupCardWithImg from 'molecules/Card/PopupCardWithImg'
export default {
  components: { PopupCardWithImg },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Утилизация газа',
          imgSrc: 'block1-1.svg',
        },
        {
          id: 2,
          title: 'Рациональное использование воды',
          imgSrc: 'block1-2.svg',
        },
        {
          id: 3,
          title: 'Управление отходами',
          imgSrc: 'block1-3.svg',
        },
        {
          id: 4,
          title: 'Биоразнообразие',
          imgSrc: 'block1-4.svg',
        },
      ],
    }
  },
  methods: {
    openPopup(item) {
      this.$modal.add({
        title: 'Default',
        payload: {
          title: item.title,
          modal: 'Default',
          text: `
          ТШО реализовал ряд крупных проектов по сокращению сжигания на факелах, включая проект расширения мощностей по переработке газа, повышение пропускной способности экспортного газопровода и проект утилизации газа. С 2000 года инвестиции в мероприятия по охране окружающей среды и повышению надежности заводского оборудования позволили ТШО сократить общий объем сжигания газа на факелах на 79%. ТШО ежегодно успешно осуществлял значительные капремонты для замены устаревшего оборудования и повышения надежности действующего; замена оборудования часто требует сжигания газа на факелах в целях безопасности.
С 2009 года ТШО исключило непрерывное рутинное сжигание попутного газа на факелах. На сегодняшний день факельное сжигание на объектах ТШО периодически осуществляется для обеспечения безопасности персонала, окружающей среды, а также во время ремонта или замены оборудования в целях повышения надежности производства.
          `,
          imgSrc: 'sustainability/popup1.jpg',
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.impact {
  margin-top: 40px;
  background-color: #f2f6f7;
  padding: 80px 0;
  &__content {
    margin-top: 40px;
    display: flex;
    gap: 20px;
  }
  &__info {
    margin-right: calc((var(--width-container) - 90vw) / 2);
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__img {
    position: relative;
    right: calc((var(--width-container) - 100vw) / 2);
    width: 100%;
    height: 50%;
    img {
      object-fit: cover;
      object-position: bottom;
    }
  }
  @include tablet {
    &__title {
      text-align: center;
    }
    &__content {
      margin-top: 20px;
      flex-direction: column-reverse;
    }
    &__img {
      left: calc((var(--width-container) - 100vw) / 2);
      width: 100vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__info {
      margin-right: 0;
      &-description {
        font-size: 16px;
      }
    }
  }
  &__cards {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 20px;
    @include tablet {
      grid-template-columns: repeat(2, 50%);
      //justify-content: space-between;
      gap: 5px;
      row-gap: 20px;
    }
    @include phone {
    }
  }
}
</style>
