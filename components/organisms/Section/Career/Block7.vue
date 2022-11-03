<template>
  <div class="motivation_career container">
    <div class="motivation_career_header">
      <div>
        <AtomsHeading type="h2" color="main">
          Мотивация сотрудников
        </AtomsHeading>
        <p>
          ТШО обеспечивает конкурентоспособную оплату труда своим работникам,
          которая позволяет привлекать, удерживать и мотивировать
          квалифицированный персонал. Помимо этого в компании существует
          обширный социальный пакет для работников.
        </p>
      </div>
      <img src="@/assets/img/career/motivation_img.svg" alt="" />
    </div>
    <div class="motivation_career_cards">
      <div
        class="motivation_card"
        v-for="(motivation, idx) in motivations"
        :key="idx"
      >
        <p class="motivation_card__title">
          {{ motivation.title }}
        </p>
        <p class="motivation_card__text">
          {{ motivation.text }}
        </p>
        <img src="@/assets/img/career/arrow_next.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      motivations: [
        {
          title: '01',
          text: 'Медицинское страхование и медицинское обслуживание',
        },
        {
          title: '02',
          text: 'Программы здорового образа жизни и спорта',
        },
        {
          title: '03',
          text: 'Детский сад для детей сотрудников ТШО',
        },
        {
          title: '04',
          text: 'Возмещение расходов на отдых детей',
        },
        {
          title: '05',
          text: 'Программа «Жас Урпак»',
        },
        {
          title: '06',
          text: 'Программа жилищной ссуды',
        },
        {
          title: '07',
          text: 'Программа «Поощрение за выслугу лет»',
        },
        {
          title: '08',
          text: 'Пенсионеры ТШО',
        },
        {
          title: '09',
          text: 'Программа по оказанию содействия в получении высшего образования и профессиональной сертификации',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.motivation_career {
  width: 100%;
  padding: 80px 0;
  &_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    div {
      width: 100%;
      max-width: 776px;
      h2 {
        margin-bottom: 40px;
      }
    }
    img {
      width: 383px;
      height: 232px;
    }
  }
  &_cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-gap: 24px;
  }
}
.motivation_card {
  position: relative;
  width: 100%;
  max-width: 376px;
  min-height: 270px;

  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(1, 84, 103, 0.1);
  border-radius: 4px;

  padding: 30px;
  &__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    color: rgba(1, 84, 103, 0.2);
    margin-bottom: 20px;
  }
  &__text {
    font-weight: 600;
    line-height: 28px;
    color: #015467;
    margin-bottom: 44px;
  }
  img {
    position: absolute;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
  }
}
</style>
