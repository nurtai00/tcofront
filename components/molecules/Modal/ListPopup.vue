<template>
  <div class="list">
    <span class="list__title"> {{ payload.title }} </span>
    <ul>
      <li v-for="item of payload.list" :key="item.id">
        <span>{{ item.id }}.</span>
        <span v-html="item.text" />
      </li>
    </ul>
    <span class="list__subtitle" v-html="payload.subtitle" />
  </div>
</template>
<script>
export default {
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.list {
  max-width: 696px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  span,
  li {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #30454e;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      display: flex;
      gap: 10px;
    }
  }

}
</style>
