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
      <MoleculesCardPopUpCard
        v-for="(motivation, idx) in motivations"
        :key="idx"
        :item="motivation"
      />
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
</style>
