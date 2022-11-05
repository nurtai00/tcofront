<template>
  <header class="header container">
    <div class="header__container">
      <img src="@/assets/img/logo.svg" />
      <MoleculesSearchBar />
      <NuxtLink to="/">Телефон доверия</NuxtLink>
      <NuxtLink to="/">Рус</NuxtLink>
      <NuxtLink to="/">Қаз</NuxtLink>
      <NuxtLink to="/">Eng</NuxtLink>
    </div>
    <div class="mobile-nav">
      <img src="@/assets/img/logo.svg" />
      <AtomsDropdown
        :title="'Rus'"
        :links="[
          { link: 'Eng', title: 'Eng' },
          { link: 'Қаз', title: 'Қаз' },
        ]"
      />
      <button><img src="@/assets/icons/search.svg" /></button>
      <button><img src="@/assets/icons/burger.svg" @click="toggle" /></button>
    </div>
    <div class="links container" :class="show ? 'show' : ''">
      <NuxtLink class="active" to="/">Home</NuxtLink>
      <NuxtLink to="/about">Company</NuxtLink>
      <NuxtLink to="/">Operations</NuxtLink>
      <NuxtLink to="/">Projects</NuxtLink>
      <NuxtLink to="/">Kazakhstani Content</NuxtLink>
      <NuxtLink to="/">Sustainability</NuxtLink>
      <NuxtLink to="/">Career</NuxtLink>
      <NuxtLink to="/relations">Lender Relations</NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      show: true,
    }
  },

  mounted() {
    if (window.innerHeight > 810) {
      this.show = false
    }
  },

  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__container {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1180px) {
      padding: 15px;
    }

    @media (max-width: 810px) {
      display: none;
    }

    a {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: #8c9fa6;
      @media (orientation: portrait) {
        display: none;
      }
    }
  }

  .links {
    z-index: 99;
    border-top: 1px solid #8c9fa6;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 1180px) {
      padding: 15px;
    }

    @media (max-width: 810px) {
      background: white;
      flex-direction: column;
      position: absolute;
      display: none;
      width: 100%;
      left: 0;
    }

    @media (orientation: portrait) {
      display: none;
    }

    a {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;

      color: #30454e;
      @media (max-width: 810px) {
        padding: 5px;
        border-bottom: 1px solid #f2f6f7;
      }
    }

    .active {
      color: #00b0f0;
    }
  }

  .show {
    display: flex;
  }

  .mobile-nav {
    display: none;
    align-items: center;
    gap: 5px;
    padding: 15px;

    @media (max-width: 810px) {
      display: flex;
    }

    img {
      margin-right: auto;
      :first-of-type {
        width: 48px;
        height: 48px;
      }
    }

    button {
      background: none;
      border: none;
    }
  }
}
</style>
