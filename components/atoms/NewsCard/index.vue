<script>
export default {
  props: {
    index: {
      type: Number,
    },
  },
  methods: {
    navigateNew() {
      this.$router.push('/news/1')
    },
  },
}
</script>

<template>
  <div
    class="n_card"
    :class="{
      n_card_left: [1, 4, 5, 7].includes(index),
      n_card_right: [2, 3, 6].includes(index),
      n_card_mobile_img: ![1, 2].includes(index),
    }"
    @click="navigateNew"
  >
    <img
      v-if="[2, 3, 6].includes(index)"
      src="@/assets/img/news_card.png"
      alt="news_card"
      class="n_card_desktop"
    />
    <img
      class="n_card_mobile"
      v-if="![1, 2].includes(index)"
      src="@/assets/img/news_card.png"
      alt="news_card"
    />
    <div class="n_card_content">
      <div class="n_card_header">
        <p class="n_card_type">#Карьера</p>
        <p class="n_card_date">03/05/2022</p>
      </div>
      <h2>Тенгизшевройл объявляет о Хакатоне</h2>
      <p
        class="n_card_text"
        :style="{
          '-webkit-line-clamp': [2, 3].includes(index) ? 2 : index == 6 ? 1 : 3,
        }"
      >
        ТОО «Тенгизшевройл» в поисках лучшего цифрового продукта объявляет о
        Хакатоне, который состоится ТОО «Тенгизшевройл» в поисках лучшего
        цифрового продукта объявляет о Хакатоне, который состоится ТОО
        «Тенгизшевройл» в поисках лучшего цифрового продукта объявляет о
        Хакатоне, который состоится
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  margin: 0;
}
.n_card {
  background: #ffffff;
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;
  @media (orientation: portrait) {
    margin-top: 20px;
    padding: 12px 16px !important;
    box-shadow: -1px 0px 0px #30454e !important;
    border-radius: 0px 4px 4px 0px !important;
  }
  &_mobile_img {
    @media (orientation: portrait) {
      padding: 0px !important;
      box-shadow: 0px 0px 0px #30454e !important;
      border-radius: 4px;
      .n_card_content {
        padding: 12px !important;
      }
    }
  }
  &_left {
    box-shadow: -1px 0px 0px #30454e;
    border-radius: 0px 4px 4px 0px;
    padding: 20px;
    @media (orientation: portrait) {
      padding: 0px;
      box-shadow: 0px 0px 0px #30454e;
    }
  }
  &_right {
    .n_card_content {
      padding: 12px 20px 20px 20px;
      @media (orientation: portrait) {
        padding: 0px;
      }
    }
  }
  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p,
  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin: 12px 0;
    color: #30454e;
    @media (orientation: portrait) {
      font-size: 14px;
      line-height: 18px;
      margin: 12px 0 4px 0;
    }
  }
  &_text {
    color: #30454e;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media (orientation: portrait) {
      -webkit-line-clamp: 3 !important;
    }
  }
  &_type {
    color: #d92d20;
  }
  &_date {
    color: #8c9fa6;
  }
  img {
    width: 100%;
    height: 208px;
    object-fit: cover;
    @media (orientation: portrait) {
      border-radius: 4px;
    }
  }
  &_desktop {
    display: block !important;
    @media (orientation: portrait) {
      display: none !important;
    }
  }
  &_mobile {
    display: none !important;
    @media (orientation: portrait) {
      display: block !important;
    }
  }
}
</style>
