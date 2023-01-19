<template>
  <div class="project">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">
          {{ $t('suistainability.breadcrumbs.main') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/sustainability">
          {{ $t('suistainability.title') }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="`/sustainability/${$route.params.projects}`">
          {{
            $t(
              $route.params.projects === 'psi'
                ? 'suistainability.breadcrumbs.psi'
                : 'suistainability.breadcrumbs.igilik'
            )
          }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>

      <div class="project__content">
        <div class="project__info">
          <AtomsTitle class="mb40">
            {{ title }}
          </AtomsTitle>
          <p>
            {{ $t('suistainability.project.description') }}
          </p>
        </div>
        <img
          src="@/assets/img/sustainability/project/background.png"
          alt="skvazhina"
        />
      </div>
      <div class="project__cards">
        <MoleculesCardPopUpCard
          v-for="card of cardItems"
          :key="card.id"
          :item="card"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    cardItems() {
      const psiItems = []
      for (let i = 0; i < 14; i++) {
        psiItems.push({
          id: i + 1,
          title: this.$t(`suistainability.psi[${i}].title`),
          title_2: this.$t(`suistainability.psi[${i}].title_2`),
          text: this.$t(`suistainability.psi[${i}].text`),
          modal: 'SustainabilityPsi',
          imgSrc: `sustainability/psi/image_${i + 1}.png`,
        })
      }
      return this.$route.params.projects === 'psi'
        ? psiItems
        : [
            {
              id: 1,
              title: this.$t('suistainability.project.cardPlaces.card1'),
              modal: 'SustainabilityProject',
              projects: [
                {
                  year: 1999,
                  items: [
                    {
                      project:
                        'Атырау қаласындағы Орал өзені арқылы өтетін көпірді қайта жаңарту',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2000,
                  items: [
                    {
                      project:
                        'Атырау қаласындағы тұрғын үйлерді қайта жаңарту',
                      type: 'Мектеп',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2001,
                  items: [
                    {
                      project:
                        'Атырау қаласындағы тұрмыстық үйдің сорғы станциясын жөндеу',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау қаласындағы қоғамдық орындарды асфальттау және абаттандыру',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Атырау қ.',
                    },
                    {
                      year: 2001,
                      project: 'Атырау қаласындағы Инженерлік желілерді жөндеу',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                    {
                      year: 2001,
                      project:
                        'Радио және теледидар таратқыштарын сатып алу және орнату',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2002,
                  items: [
                    {
                      project:
                        'Атырау қаласы, Авангард 4 ш/а 1200 орындық № 30 орта мектеп құрылысы',
                      type: 'Мектеп',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау қаласының тұрғын үйлеріндегі жертөле желілерін жөндеу',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2003,
                  items: [
                    {
                      project:
                        'Атырау шағын ауданында 624 оқушыға арналған мектеп құрылысы',
                      type: 'Мектеп',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау қаласын сумен жабдықтау желісін жөндеу жұмыстары',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау Мұнай және газ институтының қасбетін жөндеу жұмыстары',
                      type: 'Мектеп',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2004,
                  items: [
                    {
                      project:
                        'Атырау қаласында аз қамтылғандарға арналған 53 пәтер салу',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2006,
                  items: [
                    {
                      project:
                        'СМП-136 газдандыру, Лесхоз, Черная речка, Селстрой 2',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Қоқыс жинайтын машиналар, жедел жәрдем машиналары және коммуналдық қызметтердің басқа жабдықтары',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2008,
                  items: [
                    {
                      project: 'Атырау Су Арнасы үшін жабдықтар сатып алу',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2010,
                  items: [
                    {
                      project: '№3 ФС үшін сыртқы электрмен жабдықтау құрылысы',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау қаласының хлоратор станциясын салу және сүзгі станциясын энергиямен жабдықтау',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2011,
                  items: [
                    {
                      project:
                        'Атырау қаласындағы № 3 сүзгі станциясын қайта жаңарту жұмыстары',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project: 'Хлорлау станциясының құрылысы',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2012,
                  items: [
                    {
                      project: 'Атырау қаласын электрлендіру',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project: 'Жұмыскер ш/а қосалқы станция салу жұмыстары',
                      type: 'Инженерлік желілер',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2016,
                  items: [
                    {
                      project: 'Атырау қаласында 280 орындық балабақша салу',
                      type: 'Балабақша',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау қаласында 320 орындық дарынды балаларға арналған ұлттық гимназия салу',
                      type: 'Мектеп',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2017,
                  items: [
                    {
                      project: 'Атырау қаласында Ретро парк салу',
                      type: 'Парк',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау қаласында 624 оқушыға арналған орта техникалық гимназия салу',
                      type: 'Мектеп',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2018,
                  items: [
                    {
                      project:
                        'Атырау және Құлсары қалаларына 50 автобус сатып алу',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2019,
                  items: [
                    {
                      project:
                        'Атырау қ. Жұлдыз ш/а 624 орындық орта мектеп салу. ',
                      type: 'Мектеп',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2020,
                  items: [
                    {
                      project:
                        'Атырау қаласында 100 орындық энергетика және құрылыс колледжінің жатақханасын салу ',
                      type: 'Жатақхана',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project: 'Атырау қаласындағы флагшток',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау қаласы "Водниково" ауылында 280 орындық балабақша салу',
                      type: 'Балабақша',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2021,
                  items: [
                    {
                      project:
                        'Атырау қаласының "Ракуша" ауылында 280 орындық балабақша салу',
                      type: 'Балабақша',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
                {
                  year: 2022,
                  items: [
                    {
                      project: 'Атырау Көктем ш/а 160 орындық балабақша салу',
                      type: 'Балабақша',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project: 'Атырау Жұлдыз ш/а 160 орындық балабақша салу',
                      type: 'Балабақша',
                      settlement: 'Атырау қ.',
                    },
                    {
                      project:
                        'Атырау облысындағы аурухана кешеніне  медициналық жабдықтарды сатып алу (5ММ)',
                      type: 'Денсаулық сақтау',
                      settlement: 'Атырау қ.',
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              title: this.$t('suistainability.project.cardPlaces.card2'),
              modal: 'SustainabilityProject',
              projects: [
                {
                  year: 2000,
                  items: [
                    {
                      project: 'Құлсары қаласындағы жолдарды жөндеу',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Құлсары қ.',
                    },
                  ],
                },
                {
                  year: 2001,
                  items: [
                    {
                      project:
                        'Құлсары қаласындағы каналды абаттандыру-жобалау және құрылыс ',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Құлсары қ.',
                    },
                    {
                      project:
                        'Құлсары қаласындағы сумен жабдықтау және кәріз желілерін жаңғырту',
                      type: 'Инженерлік желілер',
                      settlement: 'Құлсары қ.',
                    },
                    {
                      project:
                        'Құлсары қаласының тұрғындары үшін ауыз су үшін өтемақы',
                      type: 'Басқа инфрақұрылым',
                      settlement: 'Құлсары қ.',
                    },
                    {
                      project:
                        'Құлсары қаласындағы көпқабатты үйлердің жылу жүйелерін жөндеу',
                      type: 'Инженерлік желілер',
                      settlement: 'Құлсары қ.',
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              title: this.$t('suistainability.project.cardPlaces.card3'),
              modal: 'SustainabilityProject',
            },
            {
              id: 4,
              title: this.$t('suistainability.project.cardPlaces.card4'),
              modal: 'SustainabilityProject',
            },
            {
              id: 5,
              title: this.$t('suistainability.project.cardPlaces.card5'),
              modal: 'SustainabilityProject',
            },
          ]
    },
    title() {
      const path = this.$route.path.split('/').pop()
      return path === 'igilik'
        ? this.$t('suistainability.project.title', { project: 'Игилик' })
        : this.$t('suistainability.project.title', { project: 'ПСИ' })
    },
  },
}
</script>
<style lang="scss" scoped>
.project {
  padding-bottom: 80px;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__info {
    flex-basis: 70%;
    padding-bottom: 40px;
    p {
      font-size: 20px;
      font-family: Roboto, sans-serif;
    }
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 20px;
  }
  @include phone {
    img {
      display: none;
    }
    &__content {
      display: block;
    }
    &__info {
      p {
        font-size: 16px;
      }
    }
    &__cards {
      grid-template-columns: repeat(2, 50%);
      gap: 10px;
    }
  }
}
</style>
