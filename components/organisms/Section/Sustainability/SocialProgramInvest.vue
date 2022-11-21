<template>
  <div class="invest">
    <div class="invest__wrapper">
      <div class="container invest__content">
        <AtomsFlatHeading
          title="Программа социальныхинвестиции (ПСИ)"
          @click="$router.push('/sustainability/psi')"
        />
        <div class="invest__description">
          <p>
            Программа Социальных Инвестиций была запущена в 2010 году. Она
            направлена на поддержку образования, здравоохранения, вовлечение
            населения в волонтерское движение и экономического развития.
          </p>
          <p>
            В рамках данной программы в 2010-2021 гг. было реализовано 94
            проекта на общую сумму около 11,1 млн. долл. США. Бюджет ПСИ в 2022
            году составляет 2,3 миллиона долларов США. Бенефициарами проектов,
            реализуемых НПО являются дети, взрослые люди, пенсионеры,
            малообеспеченные семьи, многодетные семьи, дети-инвалиды и многие
            другие представители населения Атырауской области. s
          </p>
        </div>
      </div>
      <img
        class="invest__img"
        src="@/assets/img/operation/operations1.png"
        alt="build"
      />
    </div>
    <div class="container invest__cards">
      <MoleculesCardSuistanabilityCard
        v-for="card of cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          text: 'Пример',
          description:
            'Описание Описание Описание ОписаниеОписаниеОписаниеОписаниеОписание Описание Описание ОписаниеОписаниеОписаниеОписание',
          img: 'sustainability/map-projects/document.svg',
        },
        {
          id: 2,
          text: 'Пример',
          description:
            'Описание Описание Описание ОписаниеОписаниеОписаниеОписаниеОписание Описание Описание ОписаниеОписаниеОписаниеОписание',
          img: 'sustainability/map-projects/document.svg',
        },
        {
          id: 3,
          text: 'Пример',
          description:
            'Описание Описание Описание ОписаниеОписаниеОписаниеОписаниеОписание Описание Описание ОписаниеОписаниеОписаниеОписание',
          img: 'sustainability/map-projects/document.svg',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.invest {
  padding-bottom: 80px;
  &__wrapper {
    display: flex;
  }
  &__content {
    padding: 80px 40px 80px calc((100vw - var(--width-container)) / 2);
  }
  &__description {
    margin-top: 40px;
    color: $c-text;
    font-size: 20px;
    p:not(:first-child) {
      margin-top: 20px;
    }
  }
  &__img {
    width: 100%;
    height: auto;
  }
  &__cards {
    margin-top: 40px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 33%);
  }
  @include tablet {
    &__wrapper {
      flex-direction: column-reverse;
    }
    &__content {
      padding: 40px 16px;
    }
    &__description {
      p {
        font-size: 16px;
      }
    }
    &__img {
      max-width: 100%;
      height: auto;
    }
    &__cards {
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }
}
</style>
