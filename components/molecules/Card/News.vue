<template>
  <div class="news_card" @click="navNew">
    <img :src="news.img" alt="" />
    <div class="mobile">
      <div class="date">
        <p :style="{ color: news.tag.color }">{{ news.tag.text }}</p>
        <p>{{ news.date }}</p>
      </div>
      <h3 class="my-clamp1">{{ news.title }}</h3>
      <p class="my-clamp2">{{ news.text }}</p>
    </div>
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
  methods: {
    navNew() {
      this.$router.push('/news/1')
    },
  },
}
</script>

<style lang="scss" scoped>
.news_card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @include tablet() {
    flex-direction: row;
  }
  @media only screen and (max-width: 330px) {
    flex-direction: column;
  }
  img {
    width: 100%;
    height: auto;
    margin-bottom: 12px;
    @include tablet() {
      max-width: 166px;
      height: 152px;
      object-fit: cover;
      margin-bottom: 0;
      margin-right: 12px;
    }
    @media only screen and (max-width: 330px) {
      max-width: 100%;
      height: auto;
      margin-bottom: 12px;
      margin-right: 0px;
    }
  }
  .date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @include tablet() {
      flex-direction: column;
      justify-content: flex-start;
      p:first-child {
        margin-bottom: 4px;
      }
    }
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #30454e;
    margin: 12px 0;
    @include tablet() {
      font-size: 14px;
      line-height: 18px;
      margin: 12px 0 4px;
      -webkit-line-clamp: 3;
    }
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
