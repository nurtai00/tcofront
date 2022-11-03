<template>
  <div class="news_card">
    <img :src="news.img" alt="" />
    <div>
      <p :style="{ color: news.tag.color }">{{ news.tag.text }}</p>
      <p>{{ news.date }}</p>
    </div>
    <h3 class="my-clamp1">{{ news.title }}</h3>
    <p class="my-clamp2">{{ news.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.news_card {
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 12px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #30454e;
    margin: 12px 0;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #8c9fa6;
  }
}
</style>
