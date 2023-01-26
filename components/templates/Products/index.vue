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
          <a href="mailto:mtadmin@tengizchevroil.com"
            >mtadmin@tengizchevroil.com</a
          >
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
          <a href="mailto:mtadmin@tengizchevroil.com"
            >mtadmin@tengizchevroil.com</a
          >
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
            <a href="mailto:mtadmin@tengizchevroil.com"
              >mtadmin@tengizchevroil.com</a
            >
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
          selected: true,
        },
        {
          id: 2,
          text: this.$t('products.tags.2'),
        },
        {
          id: 3,
          text: this.$t('products.tags.3'),
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
        ru: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=dfcbbe20%2De708%2D4d85%2Da26a%2D16a085ee6986',
        en: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=227bec33%2Db2f4%2D42f5%2Dbdf2%2Df2ba224c2a80',
        kz: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=cc5f5966%2D8428%2D47b1%2D8bb7%2D61d6678c059c',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    buisinessAnket() {
      const mapOfFileLink = {
        en: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=68f6d113%2Da138%2D432a%2D9b00%2D770c21f5c4db',
        ru: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=870b2035%2Ddc5b%2D41a9%2Da73b%2Daa97e84fbd09',
        kk: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=ea83244f%2D675b%2D44eb%2Da5d7%2Dbe83d00598eb',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    skgBuisinessAnket() {
      const mapOfFileLink = {
        en: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=949f3388%2D4f61%2D424f%2Da37e%2De72d0f627e83',
        ru: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=e9b32230%2D255e%2D4277%2Dabb0%2D4a74bf6932db',
        kk: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=ea83244f%2D675b%2D44eb%2Da5d7%2Dbe83d00598eb',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    skgListRegisterDocs() {
      const mapOfFileLink = {
        en: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=10a60ce2%2Dec00%2D4ff8%2Da3b7%2Dd590e3e0672b',
        ru: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=abd22284%2D4f74%2D4af4%2Db562%2D15e681f524d6',
        kk: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=cc5f5966%2D8428%2D47b1%2D8bb7%2D61d6678c059c',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    commercialSurveyLink() {
      const mapOfFileLink = {
        en: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=1505ae45%2D2971%2D44e9%2D9c9d%2D56a229d600c2',
        ru: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=50b1eb71%2D4deb%2D432e%2Da6ba%2Da687f8f727f4',
        kk: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=c1a79473%2D72cd%2D40ea%2Da1f0%2Dd627bd9bc3c3',
      }
      return mapOfFileLink[this.$i18n.locale]
    },
    technicalSurveyLink() {
      const mapOfFileLink = {
        en: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=b27cfe43%2D3ba4%2D43a3%2D8348%2D756b16d54fde',
        ru: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=db73de8f%2D0fe6%2D4a16%2D876b%2Defabd6b4b69a',
        kk: 'https://norsecdeltaprojects-my.sharepoint.com/personal/n_nudiyev_norsec_kz/_layouts/15/download.aspx?UniqueId=1284695c%2D910a%2D47bb%2D88ff%2Db6d917e44b81',
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
