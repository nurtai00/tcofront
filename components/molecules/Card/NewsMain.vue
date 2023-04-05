<template>
  <div
    class="n_card"
    :class="{
      n_card_left: [1, 4, 5, 0, 7, 10, 13, 16, 19].includes(index),
      n_card_right: [2, 3, 6, 8, 9, 11, 12, 14, 15, 17, 18].includes(index),
      n_card_mobile_img: ![1, 2].includes(index),
    }"
    @click="navigateNew"
  >
    <template v-if="[2, 3, 6].includes(index)">
      <img
        v-if="!!item[lang].img"
        :src="require('@/assets/img/new/' + item[lang].img || 'new_1.jpg')"
        alt="news_card"
        class="n_card_desktop"
      />
      <iframe
        v-else
        class="iframe"
        :src="item[lang].videoHref"
        frameborder="0"
      ></iframe>
    </template>

    <img
      v-if="![1, 2].includes(index) && !!item[lang].img"
      class="n_card_mobile"
      :src="require('@/assets/img/new/' + item[lang].img || 'new_1.jpg')"
      alt="news_card"
    />
    <div class="n_card_content">
      <div class="n_card_header">
        <p :style="{ color: tags[item[lang].category].color }">
          #{{ tags[item[lang].category].text }}
        </p>
        <p class="n_card_date">{{ item[lang].date }}</p>
      </div>
      <AtomsHeading type="h6" color="main">
        <span v-if="item[lang].title.length > 70">{{ item[lang].title.slice(0, 70) }}...</span>
        <span v-else>{{ item[lang].title }}</span>
      </AtomsHeading>
      <p
        class="n_card_text"
        :style="{
          '-webkit-line-clamp': [2, 3].includes(index)
            ? 2
            : index === 6
              ? 1
              : 3,
        }"
      >
        <span
          v-if="bodyIsArray"
          v-html="item[lang].body[0].text.slice(0, 60) + '...'"
        >
        </span>
        <span v-else>{{ item[lang].body.slice(0, 50) }}...</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object,
      default: () => {},
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    bodyIsArray() {
      return Array.isArray(this.item[this.lang].body)
    },
    lang() {
      return this.$i18n.locale
    },
  },
  mounted() {
    console.log(this.item[this.lang])
  },
  methods: {
    navigateNew() {
      this.$router.push(this.localePath('/news/' + this.index))
    },
  },
}
</script>

<style lang="scss" scoped>
.n_card {
  background: #ffffff;
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;
  @include tablet() {
    margin-top: 20px;
    padding: 12px 16px !important;
    box-shadow: -1px 0px 0px #30454e !important;
    border-radius: 0px 4px 4px 0px !important;
    &:first-of-type {
      margin-top: 0;
    }
  }
  &_mobile_img {
    @include tablet() {
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
    @include tablet() {
      padding: 0px;
      box-shadow: 0px 0px 0px #30454e;
    }
  }
  &_right {
    .n_card_content {
      padding: 12px 20px 20px 20px;
      @include tablet() {
        padding: 0px;
      }
    }
  }
  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  h6 {
    margin: 12px 0;
    @include tablet() {
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
    @include tablet() {
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
    @include tablet() {
      border-radius: 4px;
    }
  }
  &_desktop {
    display: block !important;
    @include tablet() {
      display: none !important;
    }
  }
  &_mobile {
    display: none !important;
    @include tablet() {
      display: block !important;
    }
  }
}
.iframe {
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 210px;
  @include phone {
    height: 210px;
    transform: translateY(-16px);
    width: calc(100% + 32px);
    margin-left: -16px;
    padding-top: 0;
    border-radius: 5px;
  }
}
</style>
