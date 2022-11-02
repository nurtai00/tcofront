<template>
  <div class="programm_career">
    <img src="@/assets/img/career/programm_left.png" alt="" />
    <div class="programm_career_info">
      <AtomsHeading type="h2" color="main">
        Программа адаптации
      </AtomsHeading>
      <p>
        Программа адаптации ТШО предназначена для ускоренной интеграции новых
        сотрудников в новую среду и обеспечения их успеха в новой роли.
        Программа представляет собой обзор всей необходимой информации об
        организации, требованиях к безопасности и соответствию, политиках и
        процедурах, корпоративной культуре, ценностях, управлении деятельностью
        работников и ожиданиях в отношении поведения.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.programm_career {
  width: 100%;
  display: flex;
  img {
    width: 50%;
    height: auto;
    max-height: 498px;
    object-fit: cover;
  }
  &_info {
    padding: 80px 40px;
    h2 {
      margin-bottom: 40px;
    }
    p {
      width: 100%;
      max-width: 548px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #30454e;
    }
  }
}
</style>
