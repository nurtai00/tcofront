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
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      display: flex;
      gap: 10px;
      font-size: 20px;
      font-family: Roboto, sans-serif;
      font-weight: 300;
      span {
        color: black;
        a {
          color: $c-base;
        }
      }
    }
  }
  &__subtitle {
    a {
      color: $c-base;
    }
  }
}
</style>
