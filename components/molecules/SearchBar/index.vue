<template>
  <div class="search-bar">
    <form action="">
      <input type="text" autocomplete="false" placeholder="Поиск" />
      <button type="submit"><img src="@/assets/icons/search.svg" /></button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 16px 20px;
  background: #f2f6f7;
  width: 60%;
  form {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: calc(100% - 74px);

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      color: #30454e;

      background: none;
      border: none;
      outline: none;
      padding: 0;
      &:focus {
        border: none;
      }
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
    }
  }
}
</style>
