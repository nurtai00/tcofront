<template>
  <div class="products">
    <div class="container">
      <MoleculesBreadcrumbs class="products__breadcrumbs">
        <AtomsBreadOption to="/">{{ $t('products.main') }}</AtomsBreadOption>
        <AtomsBreadOption to="/operations">
          {{ $t('operation.operatinos') }}
        </AtomsBreadOption>
        <AtomsBreadOption to="/products">
          {{ $t('products.products') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="products__title">
        {{ $t('products.products') }}
      </AtomsTitle>
      <p class="products__description">
        {{ $t('products.description') }}
      </p>
      <div class="products__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onTag(tag.offsetTop)"
        />
      </div>
    </div>
    <OrganismsSectionOperationSvg ref="sgu" class="svgs" :data="sideSvg[0]">
      <template #description>
        <ul class="products__list">
          <li class="products__list_item">
            {{ $t('products.item1') }}
          </li>
          <li class="products__list_item">
            {{ $t('products.item2') }}
          </li>
          <li class="products__list_item">
            {{ $t('products.item3') }}
          </li>
        </ul>
      </template>
    </OrganismsSectionOperationSvg>
    <div class="container">
      <div class="cards">
        <OrganismsSectionOperationCard
          v-for="(item, key) in cards1"
          :key="key"
          :content="item"
        />
      </div>
    </div>
    <OrganismsSectionOperationSlide
      :side="false"
      :data="slide1"
      class="slide"
      style="max-height: 100%"
    >
      <template #description>
        <ul class="products__list_num">
          <li v-for="item of $t('products.slide1list')" :key="item">
            {{ item }}
          </li>
        </ul>
        <AtomsFile
          :file="skgBuisinessAnket"
          :text="$t('products.file1')"
          icon="xls"
        />
        <AtomsFile
          :file="commercialSurveyLink"
          :text="$t('products.slide1File1')"
          icon="doc"
        />
        <AtomsFile
          :file="technicalSurveyLink"
          :text="$t('products.slide1File2')"
          icon="doc"
        />
        <AtomsFile
          :file="skgListRegisterDocs"
          :text="$t('products.file2')"
          icon="doc"
        />
        <p class="slide_text">
          {{ $t('products.slide_text') }}
          <a href="mailto:tcolpgt@tengizchevroil.com">tcolpgt@tengizchevroil.com</a>
        </p>
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSvg
      ref="natureGas"
      class="products__production-security svgs"
      :data="sideSvg[1]"
    />
    <div class="container">
      <div class="cards">
        <OrganismsSectionOperationCard
          v-for="(item, key) in cards2"
          :key="key"
          :content="item"
        />
      </div>
    </div>
    <OrganismsSectionOperationSlide
      :side="false"
      :data="slide2"
      class="slide"
      style="max-height: 100%"
    >
      <template #description>
        <ul class="products__list_num">
          <li>
            {{ $t('products.list_num1') }}
          </li>
          <li>
            {{ $t('products.list_num2') }}
          </li>
        </ul>
        <AtomsFile
          :file="buisinessAnket"
          :text="$t('products.file1')"
          icon="xls"
        />
        <AtomsFile
          :file="listRegisterDocs"
          :text="$t('products.file2')"
          icon="doc"
        />
        <p class="slide_text">
          {{ $t('products.slide_text') }}
          <a href="mailto:mtadmin@tengizchevroil.com">mtadmin@tengizchevroil.com</a>
        </p>
      </template>
    </OrganismsSectionOperationSlide>
    <OrganismsSectionOperationSvg
      ref="sulfur"
      class="products__production-security chesm svgs"
      :data="sideSvg[2]"
    />
    <div class="grey">
      <div class="container">
        <div class="cards">
          <OrganismsSectionOperationCard
            v-for="(item, key) in cards3"
            :key="key"
            :content="item"
          />
        </div>
      </div>
      <OrganismsSectionOperationSlide
        :side="false"
        :data="slide3"
        class="slide"
        style="max-height: 100%"
      >
        <template #description>
          <ul class="products__list_num">
            <ul class="products__list_num">
              <li v-for="item of $t('products.slide3list')" :key="item">
                {{ item }}
              </li>
            </ul>
          </ul>
          <AtomsFile
            :file="buisinessAnket"
            :text="$t('products.file1')"
            icon="xls"
          />
          <AtomsFile
            :file="listRegisterDocs"
            :text="$t('products.file2')"
            icon="doc"
          />
          <p class="slide_text">
            {{ $t('products.slide_text') }}
            <a href="mailto:tcosst@tengizchevroil.com">tcosst@tengizchevroil.com</a>
          </p>
        </template>
      </OrganismsSectionOperationSlide>
    </div>

    <!-- <OrganismsSectionOperationSlide
      v-for="(item, key) in textSlide"
      :key="key"
      :side="!!(key % 2)"
      :data="item"
    />
    <OrganismsSectionOperationSvg
      class="operations__production-security"
      :data="sideSvg[1]"
    />
    <OrganismsSectionOperationChart />
    <OrganismsSectionOperationSlide
      v-for="(item, key) in textSlide2"
      :key="'second' + key"
      :side="!(key % 2)"
      :data="item"
    />
    <OrganismsSectionOperationSvg
      class="operations__production-security chesm"
      :data="sideSvg[2]"
    >
      <template #description>
        <AtomsFile
          file="@/assets/files/Квалификационная анкета по процессу CHESM для потенциальных бизнес-партнеров.xls"
          text="Квалификационная анкета по процессу CHESM для потенциальных бизнес-партнеров"
          icon="xls"
        />
        <AtomsFile
          file="@/assets/files/statistics.pdf"
          text="Статистика по ТБ: определения и показатели"
          icon="pdf"
        />
      </template>
      <template #footer>
        <div class="cards">
          <OrganismsSectionOperationCard
            v-for="(item, key) in cards"
            :key="key"
            :content="item"
          />
        </div>
      </template>
    </OrganismsSectionOperationSvg>
    <OrganismsSectionAboutBlock12 class="operations__news" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          id: 1,
          text: this.$t('products.tags.1'),
          selected: false,
        },
        {
          id: 2,
          text: this.$t('products.tags.2'),
          selected: false,
        },
        {
          id: 3,
          text: this.$t('products.tags.3'),
          selected: false,
        },
      ],
      sideSvg: [
        {
          title: this.$t('products.sideSvg.1.title'),
          icon: require('@/assets/icons/products1.png'),
        },
        {
          title: this.$t('products.sideSvg.2.title'),
          description: this.$t('products.sideSvg.2.description'),
          icon: require('@/assets/icons/products2.png'),
        },
        {
          title: this.$t('products.sideSvg.3.title'),
          description: this.$t('products.sideSvg.3.description'),
          icon: require('@/assets/icons/products3.png'),
        },
      ],
      cards1: [
        {
          number: '01',
          name: this.$t('products.cards1.1.name'),
          description: this.$t('products.cards1.1.description'),
        },
        {
          number: '02',
          name: this.$t('products.cards1.2.name'),
          html: `<p class="abs">${this.$t('products.cards1.2.html1')}</p>
<p class="title">${this.$t('products.cards1.2.html2')}</p>
<p>${this.$t('products.cards1.2.html3')}</p>
<p>${this.$t('products.cards1.2.html4')}</</p>
<ul class="abs">
    <li>${this.$t('products.cards1.2.html5')}</li>
    <li>${this.$t('products.cards1.2.html6')}</li>
    <li>${this.$t('products.cards1.2.html7')}</li>
</ul>
<p class="title">${this.$t('products.cards1.2.html8')}</p>
<p>${this.$t('products.cards1.2.html9')}</p>
<ul>
  <li>${this.$t('products.cards1.2.html10')}</li>
  <li>${this.$t('products.cards1.2.html11')}</li>
</ul>
<p><b>${this.$t('products.cards1.2.html12')}</b> ${this.$t(
            'products.cards1.2.html13'
          )}</p>
<p><b>${this.$t('products.cards1.2.html14')}</b> ${this.$t(
            'products.cards1.2.html15'
          )}</p>`,
        },
        {
          number: '03',
          name: this.$t('products.cards1.3.name'),
          description: this.$t('products.cards1.3.description'),
        },
        {
          number: '04',
          name: this.$t('products.cards1.4.name'),
          html: `<p>${this.$t('products.cards1.4.html1')}</p>
<ul>
  <li>${this.$t('products.cards1.4.html2')}</li>
  <li>${this.$t('products.cards1.4.html3')}</li>
  <li>${this.$t('products.cards1.4.html4')}</li>
  <li>${this.$t('products.cards1.4.html5')}</li>
  <li>${this.$t('products.cards1.4.html6')}</li>
  <li>${this.$t('products.cards1.4.html7')}</li>
  <li>${this.$t('products.cards1.4.html8')}</li>
  <li>${this.$t('products.cards1.4.html9')}</li>
</ul>`,
        },
      ],
      cards2: [
        {
          number: '01',
          name: this.$t('products.cards2.1.name'),
          description: `${this.$t('products.cards2.1.description1')}

${this.$t('products.cards2.1.description2')}

${this.$t('products.cards2.1.description3')}`,
        },
        {
          number: '02',
          name: this.$t('products.cards2.2.name'),
          description: this.$t('products.cards2.2.description1'),
        },
      ],
      cards3: [
        {
          number: '01',
          name: this.$t('products.cards3.1.name'),
          html: `<p>${this.$t('products.cards3.1.html1')}</p>
<p>${this.$t('products.cards3.1.html2')}</p>
<ul>
  <li>${this.$t('products.cards3.1.html3')}</li>
  <li>${this.$t('products.cards3.1.html4')}</li>
  <li>${this.$t('products.cards3.1.html5')}</li>
</ul>`,
        },
        {
          number: '02',
          name: this.$t('products.cards3.2.name'),
          html: `<p>${this.$t('products.cards3.2.html1')}</p>
<ul>
  <li>${this.$t('products.cards3.2.html2')}</li>
  <li>${this.$t('products.cards3.2.html3')}</li>
  <li>${this.$t('products.cards3.2.html4')}</li>
  <li>${this.$t('products.cards3.2.html5')}</li>
</ul>`,
        },
      ],
      slide1: {
        title: this.$t('products.slide1'),
        image: 'products/products_1.png',
      },
      slide2: {
        title: this.$t('products.slide2'),
        image: 'products/products_2.png',
      },
      slide3: {
        title: this.$t('products.slide3'),
        image: 'products/products_3.png',
      },
    }
  },
  computed: {
    listRegisterDocs() {
      const mapOfFileLink = {
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/ru/природный-газ/список-регистрационных-документов-(1).docx?sfvrsn=edf3c55c_2',
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/en/natural-gas-sales/customer-credit-checklist-(1).docx?sfvrsn=98f1c55c_2',
        kz: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/kk/табиғи-газ/іскерлік-сұраунама-(орысша).xlsx?sfvrsn=b7f0c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    buisinessAnket() {
      const mapOfFileLink = {
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/en/natural-gas-sales/updated-business-questionnaire-for-customers-(5).xlsx?sfvrsn=99f1c55c_2',
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/ru/природный-газ/updated-business-questionnaire-for-customers-(2).xlsx?sfvrsn=eef3c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/kk/табиғи-газ/тіркелуі-туралы-құжаттар-тізімі-(орысша)_kaz.docx?sfvrsn=b6f0c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    skgBuisinessAnket() {
      const mapOfFileLink = {
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/en/lpg/commercial-questionnaire90eca252577266428434ff0000af314c.doc?sfvrsn=c1f1c55c_2',
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/ru/суг/бизнес-анкета.xlsx?sfvrsn=19f3c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/kk/сұйытылған-көмірсутек-газ/коммерциялық-сауалнама.doc?sfvrsn=f0f0c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    skgListRegisterDocs() {
      const mapOfFileLink = {
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/en/lpg/customer-credit-checklist.docx?sfvrsn=c0f1c55c_2',
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/ru/суг/список-регистрационных-документов.docx?sfvrsn=1bf3c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/kk/сұйытылған-көмірсутек-газ/тіркелуі-туралы-құжаттар-тізімі.docx?sfvrsn=fdf0c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    commercialSurveyLink() {
      const mapOfFileLink = {
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/en/lpg/updated-business-questionnaire-for-customers-(4).xlsx?sfvrsn=c2f1c55c_2',
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/ru/суг/технический-опросник.doc?sfvrsn=1af3c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/kk/сұйытылған-көмірсутек-газ/іскерлік-сұраунама.xlsx?sfvrsn=fff0c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    technicalSurveyLink() {
      const mapOfFileLink = {
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/en/lpg/technical-questionnaire.doc?sfvrsn=cff1c55c_2',
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/ru/суг/коммерческий-опрос.doc?sfvrsn=1cf3c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/products-page/kk/сұйытылған-көмірсутек-газ/техникалық-сауалнама.doc?sfvrsn=fef0c55c_2',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
  },
  mounted() {
    this.tags[1].offsetTop = this.$refs.natureGas.$el.offsetTop

    this.tags[0].offsetTop = this.$refs.sgu.$el.offsetTop

    this.tags[2].offsetTop = this.$refs.sulfur.$el.offsetTop
  },
  methods: {
    onTag(offsetTop) {
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.products {
  &__breadcrumbs {
    margin: 40px 0 20px;
  }

  &__title {
    margin-bottom: 36px;
  }

  &__description {
    max-width: 1100px;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
    color: $c-tco3;

    @include phone {
      font-size: 14px;
      line-height: 18px;
    }
  }

  &__tags {
    margin-bottom: 40px;
  }

  &__production-security.block {
    padding: 80px 0;

    @include tablet {
      padding: 20px 40px;
    }

    @include phone {
      padding: 20px 0;
    }
  }

  .chesm {
    background: white;
  }

  .grey {
    background-color: $c-tco33;
  }

  .svgs {
    &::v-deep .block__icon {
      //max-width: 736px;
      //position: relative;
      //left: calc((100vw - var(--width-container)) / 2);
    }
    &::v-deep .block__icon i {
      font-size: 260px;
    }
  }

  &__news {
    background: #f2f6f7;
  }

  &__list {
    padding-left: 22px;

    &:not(&_num) {
      li {
        margin-bottom: 20px;
        list-style-type: disc;

        &::marker {
          color: $c-tco5;
          font-size: 24px;
        }
      }
    }

    &_num {
      margin-bottom: 20px;
      color: $c-tco1;
      padding-left: 22px;

      li {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 20px;
        list-style-type: decimal;

        @include phone {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }

  .slide::v-deep {
    .slide_text {
      margin-top: 20px;

      a {
        color: $c-tco5;
      }
    }

    .slide__content {
    }
  }
}
.slide::v-deep {
  max-height: 100%;
  & .slide__content-wrapper {
    padding-top: 20px;
  }
  & .slide {
    max-height: 100%;
  }
}
.cards {
  display: flex;
  flex-wrap: wrap;
  padding: 80px 0;

  & > * {
    width: calc((100% - 48px) / 3);
    margin-bottom: 24px;
    min-height: 270px;

    @media screen and (min-width: 1025px) {
      &:not(:nth-child(3n)) {
        margin-right: 24px;
      }
    }
  }

  @include wide-tablet {
    flex-wrap: wrap;

    & > * {
      margin-bottom: 24px;
      width: calc((100% - 24px) / 2);

      @media screen and (min-width: 560px) {
        &:not(:nth-child(2n)) {
          margin-right: 24px;
        }
      }
    }
  }

  @include phone {
    & > * {
      margin-bottom: 8px;
      width: calc((100% - 9px) / 2);
      &:not(:nth-child(2n)) {
        margin-right: 9px;
      }
      word-break: break-word;
    }
  }
}
</style>
