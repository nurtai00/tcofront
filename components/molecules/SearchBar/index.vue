<template>
  <div class="search-bar">
    <form action="">
      <input type="text" autocomplete="false" />
      <button type="submit"><img src="@/assets/icons/search.svg" /></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TcoFrontSearchBar',

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped>
.search {
  &-bar {
    padding: 15px;
    background: #f2f6f7;
    width: 60%;

    form {
      width: 100%;
      padding: 0;
      display: flex;
      gap: 15px;
      justify-content: space-between;
      align-items: center;
      input {
        background: none;
        border: none;
        width: 90%;

        &:focus {
          border: none;
        }
      }
      button {
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>
