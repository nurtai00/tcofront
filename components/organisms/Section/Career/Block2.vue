<template>
  <div class="about_career container">
    <AtomsHeading type="h2" color="main">
      Стратегическое планирование и найм персонала
    </AtomsHeading>
    <div class="about_career_block">
      <p>
        Основой процесса управления персоналом в ТШО является стратегическое
        планирование кадров на ближайшую и среднесрочную перспективу. Большое
        внимание в данном процессе уделяется казахстанскому содержанию в кадрах.
        Процесс найма в ТШО проходит открыто и транспарентно. На сайте компании
        размещается информация о вакансиях ТШО, что обеспечивает равный доступ к
        данному ресурсу для всех потенциальных кандидатов. В фокусе внимания ТШО
        находится не только найм опытных специалистов, но и талантливых
        выпускников высших учебных заведений, исходя из потребностей компании.
        Отбор кандидатов на вакансии ТШО проходит в несколько этапов, включающих
        в себя тестирование и интервью с кросс-функциональной командой.
      </p>
      <div class="info">
        <AtomsTag
          :tag="{
            text: 'Производство',
            url: '123',
            selected: true,
          }"
        />
        <div class="info_block">
          <img src="@/assets/icons/vacancy.svg" alt="" />
          <AtomsHeading type="h3" color="main">
            Посмотреть список вакансии
          </AtomsHeading>
          <p>Нажимая здесь вы можете видеть список доступных вакансий</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about_career {
  width: 100%;
  padding: 80px 0;
  h2 {
    max-width: 776px;
    margin-bottom: 40px;
  }
  &_block {
    display: flex;
    flex-direction: row;
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #30454e;
    }
  }
}
.info {
  margin-left: 24px;
}
.info_block {
  width: 376px;

  display: flex;
  flex-direction: column;

  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(1, 84, 103, 0.1);
  border-radius: 4px;

  img {
    width: 64px;
  }
  h3 {
    margin: 20px 0;
  }
}
</style>
