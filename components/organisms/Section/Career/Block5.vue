<template>
  <div class="personal_career">
    <div class="container">
      <AtomsHeading type="h2" color="main"> Развитие персонала </AtomsHeading>
      <div class="personal_career_header">
        <p>
          Одной из стратегий ТШО является инвестирование в человеческие ресурсы
          для развития и поддержки высококвалифицированных сотрудников, которые
          обеспечивают достижение результатов должным образом. Наши сотрудники
          имеют доступ к различным программа обучения и развития, которые
          поддерживают их профессиональный и карьерный рост.
        </p>
        <img src="@/assets/img/career/personal_img.png" alt="" />
      </div>
      <div class="personal_career_blocks"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.personal_career {
  width: 100%;
  background: #f2f6f7;
  padding: 80px 0;
  h2 {
    margin-bottom: 36px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #30454e;
  }
  &_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
    p {
      max-width: 776px;
    }
    img {
      width: 270px;
      height: 246px;
    }
  }
  &_blocks {
    display: grid;
    grid-template-columns: repeat(1fr, 3);
  }
}
</style>
