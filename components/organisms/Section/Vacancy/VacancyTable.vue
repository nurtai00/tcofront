<template>
  <table class="content__table">
    <tr class="content__table-header">
      <th>Название должности</th>
      <th>Место работы</th>
      <th>Дата закрытия</th>
    </tr>
    <tr v-for="item of items" :key="item" class="content__table-col">
      <td class="content__table-item">Младший юрист</td>
      <td class="content__table-item">Атырау</td>
      <td class="content__table-item">31/10/2022</td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.content__table {
  margin-top: 20px;
  width: 800px;
  border-collapse: collapse;
  &-header {
    font-weight: 500;
    background-color: #606977;
    color: #fff;
    border: none;
    th {
      border: none;
      padding: 10px;
    }
  }
  &-col {
    text-align: center;
    & :first-child {
      text-decoration: underline;
    }
    border-bottom: 1px solid #606977;
  }
  &-item {
    padding: 5px 0;
  }
}
</style>
