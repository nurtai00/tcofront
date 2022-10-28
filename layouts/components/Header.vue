<template>
  <header class="header container">
    <div class="header__container">
      <img src="@/assets/img/logo.svg" />
      <SearchBar />
      <NuxtLink to="/">Телефон доверия</NuxtLink>
      <NuxtLink to="/">Рус</NuxtLink>
      <NuxtLink to="/">Қаз</NuxtLink>
      <NuxtLink to="/">Eng</NuxtLink>
    </div>
    <div class="links container">
      <NuxtLink class="active" to="/">Home</NuxtLink>
      <NuxtLink to="/">Company</NuxtLink>
      <NuxtLink to="/">Operations</NuxtLink>
      <NuxtLink to="/">Projects</NuxtLink>
      <NuxtLink to="/">Kazakhstani Content</NuxtLink>
      <NuxtLink to="/">Sustainability</NuxtLink>
      <NuxtLink to="/">Career</NuxtLink>
      <NuxtLink to="/">Lender Relations</NuxtLink>
    </div>
  </header>
</template>

<script>
import SearchBar from '@/components/custom/SearchBar.vue'
export default {
  name: 'Header',
  components: { SearchBar },
}
</script>

<style lang="scss" scoped>
.header {
  &__container {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    border-top: 1px solid #8c9fa6;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
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
    }

    .active {
      color: #00b0f0;
    }
  }
}
</style>
