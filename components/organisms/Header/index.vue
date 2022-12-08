<template>
  <div>
    <header class="container">
      <NuxtLink to="/" class="logo">
        <img src="@/assets/img/logo.svg" />
      </NuxtLink>
      <MoleculesSearchBar />
      <div class="lang">
        <a
          v-for="item of langs"
          :key="item.code"
          :class="{ active_link: $i18n.locale === item.code }"
          @click="selectLang(item)"
          >{{ item.label }}</a
        >
      </div>
    </header>
    <div class="mobile-nav">
      <NuxtLink to="/" class="logo">
        <img src="@/assets/img/logo.svg" />
      </NuxtLink>
      <MoleculesSelect
        :model="defaultItem"
        :options="langs"
        height="100%"
        :placeholder="''"
        class="lang_btn"
        @change="selectLang"
      />
      <img src="@/assets/icons/search.svg" class="search_btn" />
      <div
        class="menu_btn"
        :class="{ burger_close: show_nav }"
        @click="showNav"
      >
        <div class="menu_btn__burger"></div>
      </div>
    </div>
    <div class="links container" :class="{ show_nav: show_nav }">
      <div v-for="(route, idx) in routes" :key="idx">
        <NuxtLink
          :class="{ active_link: $route.path === route.link }"
          :to="localePath(route.link)"
        >
          {{ route.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_nav: false,
      routes: [
        {
          name: this.$t('header.header_links[0]'),
          link: this.localePath('/'),
        },
        {
          name: this.$t('header.header_links[1]'),
          link: this.localePath('/about'),
        },
        {
          name: this.$t('header.header_links[2]'),
          link: this.localePath('/operations'),
        },
        {
          name: this.$t('header.header_links[3]'),
          link: this.localePath('/projects'),
        },
        {
          name: this.$t('header.header_links[4]'),
          link: this.localePath('/kazakhstani-content'),
        },
        {
          name: this.$t('header.header_links[5]'),
          link: this.localePath('/sustainability'),
        },
        {
          name: this.$t('header.header_links[6]'),
          link: this.localePath('/career'),
        },
        {
          name: this.$t('header.header_links[7]'),
          link: this.localePath('/relations'),
        },
      ],
      defaultItem: 'RU',
      langs: [
        {
          name: 'RU',
          code: 'ru',
          label: 'Рус',
        },
        {
          name: 'KZ',
          code: 'kk',
          label: 'Қаз',
        },
        {
          name: 'EN',
          code: 'en',
          label: 'Eng',
        },
      ],
    }
  },
  watch: {
    '$route.path'() {
      this.routes = [
        {
          name: this.$t('header.header_links[0]'),
          link: this.localePath('/'),
        },
        {
          name: this.$t('header.header_links[1]'),
          link: this.localePath('/about'),
        },
        {
          name: this.$t('header.header_links[2]'),
          link: this.localePath('/operations'),
        },
        {
          name: this.$t('header.header_links[3]'),
          link: this.localePath('/projects'),
        },
        {
          name: this.$t('header.header_links[4]'),
          link: this.localePath('/kazakhstani-content'),
        },
        {
          name: this.$t('header.header_links[5]'),
          link: this.localePath('/sustainability'),
        },
        {
          name: this.$t('header.header_links[6]'),
          link: this.localePath('/career'),
        },
        {
          name: this.$t('header.header_links[7]'),
          link: this.localePath('/relations'),
        },
      ]
    },
  },
  methods: {
    showNav() {
      this.show_nav = !this.show_nav
    },
    selectLang(lang) {
      this.$i18n.setLocale(lang.code)
      if (this.defaultItem === lang) {
        return
      }
      this.defaultItem = lang
      // lang = lang.toLowerCase()
      // if (lang == 'kz') lang = 'kk'
      // if (this.$route.path != this.switchLocalePath(lang))
      //   this.$router.replace(this.switchLocalePath(lang))
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
}
header {
  display: flex;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 13px;
  @include tablet() {
    display: none;
  }
  .logo {
    width: 70px;
    height: 70px;
    margin-right: 36px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .lang {
    display: flex;
    flex-direction: row;
    grid-gap: 24px;
    margin-left: auto;
    a {
      color: #8c9fa6;
    }
  }
}
.show_nav {
  display: flex !important;
}
.active_link {
  color: #00b0f0 !important;
  @include tablet() {
    color: #30454e !important;
    &::after {
      position: absolute;
      width: 100%;
      height: 5px;
      display: block;
      bottom: -5px;
      left: 0;
      background: url('@/assets/img/home/mobile_line.svg') repeat-x;
      transition: 0.3s;
      content: '';
    }
  }
}
.links {
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 20px 0;
  border-top: 1px solid #8c9fa6;
  @include tablet() {
    position: absolute;

    display: none;
    flex-direction: column;

    padding: 0;
    z-index: 9;
    left: 0;

    background: white;
    border: none;
    max-width: 100%;
    box-shadow: 0px 0px 10px rgba(1, 1, 3, 0.1);
  }
  a {
    color: #30454e;
    @include tablet() {
      position: relative;
      width: max-content;
    }
  }
  div {
    @include tablet() {
      padding: 12px 16px;
      border-bottom: 1px solid #f2f6f7;
    }
  }
}
.mobile-nav {
  display: none;
  align-items: center;
  padding: 6px 16px;
  @include tablet() {
    display: flex;
    border-bottom: 1px solid #8c9fa6;
  }
  .logo {
    width: 48px;
    height: 48px;
    margin-right: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.lang_btn::v-deep {
  width: 90px;
  .select__head {
    border: none;
  }
  .select__content {
    top: 103%;
  }
  .select-arrow-down {
    padding: 0 16px;
  }
}
.search_btn {
  cursor: pointer;
}
.menu_btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-left: 8px;
  &__burger {
    height: 1.6px;
    width: 24px;
    background: #30454e;
    border-radius: 1px;
    transition: all 0.3s ease-in-out;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1.6px;
      width: 24px;
      background: #30454e;
      border-radius: 1px;
      transition: all 0.3s ease-in-out;
    }
    &::before {
      transform: translateY(-7px);
    }
    &::after {
      transform: translateY(7px);
    }
  }
}
.menu_btn.burger_close .menu_btn__burger {
  transform: translateX(-50px);
  background: transparent;
}
.menu_btn.burger_close .menu_btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
  background: #30454e;
}
.menu_btn.burger_close .menu_btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
  background: #30454e;
}
</style>
