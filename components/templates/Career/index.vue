<template>
  <div class="career">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/career">Career</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20"> Карьера </AtomsTitle>
      <AtomsTag v-for="(tag, idx) in tags" :key="idx" :tag="tag" />
    </div>
    <OrganismsSectionCareerBlock1 />
    <OrganismsSectionCareerBlock2 />
    <OrganismsSectionCareerBlock3 />
    <OrganismsSectionCareerBlock4 :content="content1" />
    <OrganismsSectionCareerBlock5 />
    <OrganismsSectionCareerBlock6 />
    <OrganismsSectionCareerBlock4 :content="content2" :background="true" />
    <OrganismsSectionCareerBlock7 />
    <OrganismsSectionCareerBlock8 />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          text: 'Вакансии',
          url: '123',
        },
        {
          text: 'Стажировка В ТШО',
          url: '/career/internship',
        },
      ],
      content1: {
        title: 'Программа адаптации',
        text: '<p>Программа адаптации ТШО предназначена для ускоренной интеграции новых сотрудников в новую среду и обеспечения их успеха в новой роли. Программа представляет собой обзор всей необходимой информации об организации, требованиях к безопасности и соответствию, политиках и процедурах, корпоративной культуре, ценностях, управлении деятельностью работников и ожиданиях в отношении поведения.</p>',
      },
      content2: {
        title: 'Постройте свое будущее с TCO',
        text: '<ul type="disc"><li>Один из крупнейших работодателей в Казахстане на протяжении 25 лет</li><li>Опыт работы в разнообразной и международной <br/> среде</li><li>Стабильность</li><li>Сильная приверженность безопасности</li><li>Конкурентоспособный пакет и льготы</li><li>Вознаграждение по результатам работы</li><li>Возможности для развития, роста и построения <br/> карьеры</li></ul>',
      },
    }
  },
}
</script>
