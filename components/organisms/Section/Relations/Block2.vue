<template>
  <div>
    <div class="information">
      <div class="mobile">
        <img src="@/assets/img/relations/relations3.png" alt="" />
        <AtomsHeading type="h3" color="white">
          {{ $t('relation.block_2.title') }}
        </AtomsHeading>
      </div>
      <div class="container">
        <div class="information__wrapper">
          <div class="information_content first">
            <AtomsHeading type="h3" color="main" class="mb40">
              {{ $t('relation.block_2.title') }}
            </AtomsHeading>
            <nuxt-link
              v-for="(item, key) in links"
              :key="key"
              class="link"
              :to="localePath(item.link)"
            >
              {{ item.title }}
            </nuxt-link>
            <a
              class="link"
              target="_blank"
              :href="fileLink"
            >{{ $t('relation.block_2.links[4]') }}</a>
            <a
              class="link"
              target="_blank"
              :href="fileLink2"
            >{{ $t('relation.block_2.links[5]') }}</a>
          </div>
          <div class="information_content-img">
            <img
              src="@/assets/img/relations/relations3.png"
              alt=""
              srcset=""
              class="block_img"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="information reverse">
      <div class="mobile">
        <img src="@/assets/img/relations/relations2.png" alt="" />
        <AtomsHeading type="h3" color="white">
          {{ $t('relation.block_3.title') }}
        </AtomsHeading>
      </div>
      <div class="container">
        <div class="information__wrapper">
          <div class="information_content-img">
            <img
              src="@/assets/img/relations/relations2.png"
              alt=""
              srcset=""
              class="block_img"
            />
          </div>
          <div class="information_content second">
            <AtomsHeading type="h3" color="main" class="mb40">
              {{ $t('relation.block_3.title') }}
            </AtomsHeading>
            <p v-html="$t('relation.block_3.text')" />
          </div>
        </div>
      </div>
    </div>
    <div class="information">
      <div class="mobile">
        <img src="@/assets/img/relations/relations1.png" alt="" />
        <AtomsHeading type="h3" color="white">
          {{ $t('relation.block_4.title') }}
        </AtomsHeading>
      </div>
      <div class="container">
        <div class="information__wrapper">
          <div class="information_content third">
            <AtomsHeading type="h3" color="main" class="mb40">
              {{ $t('relation.block_4.title') }}
            </AtomsHeading>
            <p class="mb30">
              {{ $t('relation.block_4.p_1') }}
              <br />
              <span class="email">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="#00B0F0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="#00B0F0"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a href="mailto:tcolr@tengizchevroil.com">tcolr@tengizchevroil.com</a>
              </span>
            </p>
            <p>
              {{ $t('relation.block_4.p_2') }}
            </p>
            <div class="mb30">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#00B0F0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#00B0F0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="mailto:emea.at.debt@citi.com">emea.at.debt@citi.com</a>
            </div>
            <p>{{ $t('relation.block_4.p_3') }}</p>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#00B0F0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#00B0F0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="mailto:agencyldn@mhcb.co.uk">agencyldn@mhcb.co.uk</a>
            </div>
          </div>
          <div class="information_content-img">
            <img
              src="@/assets/img/relations/relations1.png"
              alt=""
              srcset=""
              class="block_img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      links: [
        {
          link: this.localePath('/about'),
          title: this.$t('relation.block_2.links[0]'),
        },
        {
          link: this.localePath('/projects'),
          title: this.$t('relation.block_2.links[1]'),
        },
        {
          link: this.localePath('/about/figures'),
          title: this.$t('relation.block_2.links[2]'),
        },
        {
          link: this.localePath('/operations'),
          title: this.$t('relation.block_2.links[3]'),
        },
      ],
    }
  },
  computed: {
    fileLink() {
      const mapOfFileLinkUrl = {
        ru: 'https://tengizchevroil.com/docs/default-source/tcodocuments/publications/ru/verstka_rus_min.pdf?sfvrsn=22e4c55c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/tcodocuments/publications/kk/verstka_kaz_min.pdf?sfvrsn=de4c55c_2',
        en: 'https://tengizchevroil.com/docs/default-source/tcodocuments/publications/en/verstka_eng_min.pdf?sfvrsn=68e4c55c_2',
      }
      return mapOfFileLinkUrl[this.$i18n.locale]
    },
    fileLink2() {
      const mapOfFileLinkUrl = {
        ru: 'https://tengizchevroil.com/docs/default-source/publications/ru/%D0%B8%D1%82%D0%BE%D0%B3%D0%B8-2019-%D0%B3%D0%BE%D0%B4%D0%B0.pdf?sfvrsn=644dc45c_2',
        kk: 'https://tengizchevroil.com/docs/default-source/publications/kaz/2019-%D0%B6%D1%8B%D0%BB%D0%B4%D1%8B%D2%A3-%D2%9B%D0%BE%D1%80%D1%8B%D1%82%D1%8B%D0%BD%D0%B4%D1%8B%D0%BB%D0%B0%D1%80%D1%8B.pdf?sfvrsn=4e4dc45c_2',
        en: 'https://tengizchevroil.com/docs/default-source/publications/eng/2019-year-in-review.pdf?sfvrsn=1e4dc45c_2',
      }
      return mapOfFileLinkUrl[this.$i18n.locale]
    },
  },
}
</script>

<style lang="scss" scoped>
.information {
  position: relative;
  width: 100%;
  &__wrapper {
    display: flex;
    max-height: 500px;
    height: 100%;
  }
  @include tablet() {
    .container {
      padding: 0 !important;
      max-width: 100%;
    }
  }
}
.reverse {
  .information_content {
    width: 50%;
    @include phone {
      width: 100%;
    }
  }
}
.mobile {
  position: relative;
  display: none;
  h3 {
    position: absolute;
    top: 40px;
    left: 16px;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
  }
  @include tablet() {
    display: flex;
  }
}
.information_content {
  width: 50%;
  // min-height: 706px;
  display: flex;
  flex-direction: column;
  padding: 80px 60px 80px 0;
  @include phone {
    width: 100%;
  }
  .email {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  &-img {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @include phone {
      display: none;
    }
    img {
      width: 100%;
    }
  }
  @include tablet() {
    padding: 20px 16px 40px !important;
    min-height: unset;
    h3 {
      display: none;
    }
  }
}
.first {
  .link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-decoration-line: underline;
    color: #015467;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0px;
    }
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
.second {
  padding-left: 60px;
  padding-right: 0;
  p {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0px;
      text-align: justify;
    }
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
.third {
  p {
    margin-bottom: 12px;
    a {
      color: #00b0f0;
    }
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
  }
  a {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    color: #30454e;
    @include tablet() {
      font-size: 16px;
      line-height: 20px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 12px;
    }
  }
}
</style>
